'use client'

import { motion } from 'framer-motion'

export default function SectionInvite() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 md:p-12 border border-stone-200 rounded-3xl bg-stone-50/30 text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 rounded-full border border-stone-100 shadow-sm">
            <span className="text-sm font-serif italic text-stone-500">Turut Mengundang</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-4">
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-stone-800 border-b border-stone-200 pb-2 inline-block px-4">
                Keluarga Pria
              </h4>
              <ul className="space-y-2 text-stone-600 font-light">
                <li>Kel. Besar Bpk. Ahmad (Alm)</li>
                <li>Kel. Besar Bpk. Supriadi</li>
                <li>Bpk. H. Muhammad & Ibu Hj. Fatimah</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-stone-800 border-b border-stone-200 pb-2 inline-block px-4">
                Keluarga Wanita
              </h4>
              <ul className="space-y-2 text-stone-600 font-light">
                <li>Kel. Besar Bpk. Budi Santoso</li>
                <li>Kel. Besar Bpk. Wijaya</li>
                <li>Bpk. H. Abdullah & Ibu Hj. Aisyah</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
