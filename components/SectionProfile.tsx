'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Image from 'next/image'

export default function SectionProfile() {
  return (
    <section id="profile" className="py-24 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-rose-500 font-medium tracking-widest uppercase mb-2">The Happy Couple</p>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800">Mempelai</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-rose-200 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                 <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400">
                    {/* <User className="w-20 h-20" /> */}
                    <Image src="/images/male.jpeg" alt="Groom" width={200} height={200} className='w-full h-full object-cover' />
                 </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-3xl font-serif font-bold text-stone-800">Hilman Abdul Aziz</h3>
              <p className="text-stone-600 font-medium">Putra Pertama</p>
              <p className="text-stone-500">Bpk. Agus Suryana & Ibu Enok Taryati</p>
              <p className="text-stone-400 text-sm italic pt-2 max-w-xs mx-auto">
                "Mencintaimu adalah anugerah terindah yang Tuhan berikan dalam hidupku."
              </p>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center space-y-6"
          >
             <div className="relative group">
              <div className="absolute inset-0 bg-rose-200 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                 <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400">
                    <Image src="/images/female.jpeg" alt="Groom" width={200} height={200} className='w-full h-full object-cover' />
                 </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-serif font-bold text-stone-800">Yayu Rahayu</h3>
              <p className="text-stone-600 font-medium">Putri Keempat</p>
              <p className="text-stone-500">Bpk. Usep & Ibu Kokom Komariah</p>
              <p className="text-stone-400 text-sm italic pt-2 max-w-xs mx-auto">
                "Bersamamu, aku menemukan rumah tempat hatiku berpulang."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
