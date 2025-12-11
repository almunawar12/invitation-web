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
              <ul className="space-y-2 text-stone-600 font-light">
                <li>Ust. Yahya</li>
                <li>Ust. Yahya Zakaria (Kakanda)</li>
                <li>Kel Besar Ponpes Miftahuttoriq Garut</li>
                <li>Kel Besar alm Bpk Soma & alm Ibu Ucu</li>
                <li>Kel Besar alm Bpk Atam & alm Ibu Inasah</li>
                <li>Kel Besar Bpk Mamat & Ibu Etik</li>
                <li>Kel Besar alm Bpk Eha & Ibu Ita Sujana</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
