'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function SectionTimeline() {
  const events = [
    { 
      year: '2018', 
      title: 'Pertemuan Pertama', 
      desc: 'Kami bertemu pertama kali di sebuah acara kampus. Tidak ada yang spesial saat itu, hanya perkenalan singkat.' 
    },
    { 
      year: '2020', 
      title: 'Mulai Dekat', 
      desc: 'Pandemi membuat kami sering berkomunikasi secara daring. Dari sanalah benih-benih cinta mulai tumbuh.' 
    },
    { 
      year: '2023', 
      title: 'Lamaran', 
      desc: 'Dengan restu kedua orang tua, kami memutuskan untuk melangkah ke jenjang yang lebih serius.' 
    },
  ]

  return (
    <section className="py-24 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-rose-500 font-medium tracking-widest uppercase mb-2">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800">Perjalanan Cinta</h2>
        </motion.div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-rose-200 flex items-center justify-center z-10 shadow-md">
                   <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                </div>
                
                {/* Spacer for desktop to push content to side */}
                <div className="hidden md:block w-1/2" />

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} // Mobile logic might differ, but for desktop: even (reverse) -> content on left (x: -50), odd -> content on right (x: 50). Wait, flex-row-reverse means content is first in DOM but displayed on left? No.
                  // Let's simplify animation logic.
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className={`ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:mr-10 text-left' : 'md:ml-10 text-left'}`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 bg-rose-50 text-rose-500 text-sm font-bold rounded-full mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">{event.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
