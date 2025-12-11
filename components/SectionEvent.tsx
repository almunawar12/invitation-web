'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock } from 'lucide-react'

export default function SectionEvent() {
  return (
    <section id="event" className="py-24 px-6 bg-stone-900 text-stone-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-rose-400 font-medium tracking-widest uppercase mb-2">Save The Date</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Acara Pernikahan</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Akad */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group hover:bg-stone-800 transition-colors duration-500 bg-stone-800/40 backdrop-blur-sm p-10 rounded-3xl border border-stone-700/50 text-center space-y-6"
          >
            <div className="w-16 h-16 mx-auto bg-stone-700/50 rounded-full flex items-center justify-center group-hover:bg-rose-500/20 group-hover:text-rose-400 transition-all">
                <span className="font-serif text-2xl">01</span>
            </div>
            <h3 className="text-3xl font-serif text-rose-200">Akad Nikah</h3>
            <div className="space-y-3">
                <div className="flex justify-center items-center gap-2 text-stone-400">
                   <Calendar className="w-4 h-4" />
                   <span>Sabtu, 20 Desember 2025</span>
                </div>
                <div className="flex justify-center items-center gap-2 text-stone-400">
                   <Clock className="w-4 h-4" />
                   <span>08:00 WIB - Selesai</span>
                </div>
            </div>
            <p className="text-stone-300 font-light border-t border-stone-700 pt-6 mt-4">
                Masjid Agung Al-Azhar<br/>
                Jl. Sisingamangaraja, Kebayoran Baru
            </p>
          </motion.div>

          {/* Resepsi */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group hover:bg-stone-800 transition-colors duration-500 bg-stone-800/40 backdrop-blur-sm p-10 rounded-3xl border border-stone-700/50 text-center space-y-6"
          >
            <div className="w-16 h-16 mx-auto bg-stone-700/50 rounded-full flex items-center justify-center group-hover:bg-rose-500/20 group-hover:text-rose-400 transition-all">
                <span className="font-serif text-2xl">02</span>
            </div>
            <h3 className="text-3xl font-serif text-rose-200">Resepsi</h3>
            <div className="space-y-3">
                <div className="flex justify-center items-center gap-2 text-stone-400">
                   <Calendar className="w-4 h-4" />
                   <span>Sabtu, 20 Desember 2025</span>
                </div>
                <div className="flex justify-center items-center gap-2 text-stone-400">
                   <Clock className="w-4 h-4" />
                   <span>11:00 WIB - 14:00 WIB</span>
                </div>
            </div>
            <p className="text-stone-300 font-light border-t border-stone-700 pt-6 mt-4">
                Grand Ballroom Hotel Mulia<br/>
                Jl. Asia Afrika, Senayan
            </p>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
            <a 
              href="https://goo.gl/maps/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full font-medium hover:bg-rose-50 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5"
            >
                <MapPin className="w-5 h-5 text-rose-500" />
                Open Google Maps
            </a>
        </motion.div>
      </div>
    </section>
  )
}
