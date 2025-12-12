'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, CreditCard } from 'lucide-react'

export default function SectionGiftCard() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="gift" className="py-24 px-6 bg-stone-900 text-stone-200">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Wedding Gift</h2>
          <p className="text-stone-400 max-w-lg mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
            Namun jika memberi adalah ungkapan tanda kasih Anda, kami menerima kado secara cashless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6">
          {/* Bank Account */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-2xl border border-stone-700 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <CreditCard className="w-24 h-24" />
            </div>
            
            <div className="relative z-10 text-left space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-xs">BCA</div>
                <span className="font-serif text-lg">DANA</span>
              </div>
              
              <div>
                <p className="text-stone-400 text-sm mb-1">Nomor Dana</p>
                <div className="flex items-center gap-3">
                  <p className="text-2xl font-mono tracking-wider text-white">088212722602</p>
                  <button 
                    onClick={() => handleCopy('088212722602', 'bca')}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    {copied === 'bca' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-stone-400 text-sm">Atas Nama</p>
                <p className="text-lg font-medium text-white">Hilman Abdul Aziz Ahmad</p>
              </div>
            </div>
          </motion.div>

          {/* QRIS */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl border border-stone-200 text-stone-900 flex flex-col items-center justify-center space-y-4"
          >
            <h3 className="font-bold text-xl">QRIS</h3>
            <div className="w-48 h-48 bg-stone-200 rounded-lg flex items-center justify-center text-stone-400">
               <span className="text-xs">QR CODE IMAGE</span>
            </div>
            <p className="text-sm text-stone-500">Scan untuk mengirim hadiah</p>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
