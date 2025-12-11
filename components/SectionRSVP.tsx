'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { CheckCircle, Loader2, XCircle } from 'lucide-react'

export default function SectionRSVP() {
  const [form, setForm] = useState({ name: '', guests: 1, status: 'Hadir' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const { error } = await supabase
        .from('rsvp')
        .insert([
          { 
            name: form.name, 
            guests: form.guests, 
            status: form.status,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      setMessage({ type: 'success', text: 'Terima kasih! Konfirmasi kehadiran Anda telah tersimpan.' })
      setForm({ name: '', guests: 1, status: 'Hadir' })
    } catch (error) {
      console.error('Error:', error)
      setMessage({ type: 'error', text: 'Maaf, terjadi kesalahan. Silakan coba lagi.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="rsvp" className="py-24 px-6 bg-stone-900 text-stone-200">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">RSVP</h2>
          <p className="text-stone-400">Mohon konfirmasi kehadiran Anda</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-stone-800/50 p-8 rounded-3xl border border-stone-700"
        >
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">Nama Lengkap</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-stone-900/50 border border-stone-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
              placeholder="Masukkan nama Anda"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">Jumlah Tamu</label>
            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: parseInt(e.target.value) })}
              className="w-full px-4 py-3 rounded-xl bg-stone-900/50 border border-stone-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} Orang</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-400 mb-2">Konfirmasi Kehadiran</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setForm({ ...form, status: 'Hadir' })}
                className={`py-3 rounded-xl border transition-all ${
                  form.status === 'Hadir' 
                    ? 'bg-rose-500 border-rose-500 text-white' 
                    : 'bg-stone-900/50 border-stone-700 hover:border-stone-600'
                }`}
              >
                Hadir
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, status: 'Tidak Hadir' })}
                className={`py-3 rounded-xl border transition-all ${
                  form.status === 'Tidak Hadir' 
                    ? 'bg-stone-600 border-stone-600 text-white' 
                    : 'bg-stone-900/50 border-stone-700 hover:border-stone-600'
                }`}
              >
                Maaf, Tidak Bisa
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-white text-stone-900 rounded-xl font-bold hover:bg-stone-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Kirim Konfirmasi'}
          </button>
        </motion.form>

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 ${
                message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              {message.type === 'success' ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
              <p className="font-medium">{message.text}</p>
              <button onClick={() => setMessage(null)} className="ml-2 p-1 hover:bg-white/20 rounded-full">
                <XCircle className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
