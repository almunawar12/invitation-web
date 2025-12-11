'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { Send, User } from 'lucide-react'

interface Wish {
  id: number
  name: string
  message: string
  created_at: string
}

export default function SectionWishes() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [form, setForm] = useState({ name: '', message: '' })
  const [loading, setLoading] = useState(false)

  const fetchWishes = async () => {
    const { data } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)
    
    if (data) setWishes(data)
  }

  useEffect(() => {
    fetchWishes()
    
    // Realtime subscription
    const channel = supabase
      .channel('wishes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'wishes' }, (payload) => {
        setWishes((prev) => [payload.new as Wish, ...prev])
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.message) return
    
    setLoading(true)
    await supabase.from('wishes').insert([{ 
      name: form.name, 
      message: form.message,
      created_at: new Date().toISOString()
    }])
    
    setForm({ name: '', message: '' })
    setLoading(false)
  }

  return (
    <section id="wishes" className="py-24 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4">Ucapan & Doa</h2>
          <p className="text-stone-600">Kirimkan doa terbaik untuk kami</p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 mb-12"
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 outline-none"
              required
            />
            <textarea
              placeholder="Tuliskan ucapan dan doa..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 outline-none min-h-[100px]"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {loading ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
          </div>
        </motion.form>

        {/* List */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {wishes.map((wish, i) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0 text-rose-500">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">{wish.name}</h4>
                <p className="text-stone-600 text-sm mt-1">{wish.message}</p>
                <span className="text-[10px] text-stone-400 mt-2 block">
                  {new Date(wish.created_at).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
          {wishes.length === 0 && (
            <p className="text-center text-stone-400 italic">Belum ada ucapan. Jadilah yang pertama!</p>
          )}
        </div>
      </div>
    </section>
  )
}
