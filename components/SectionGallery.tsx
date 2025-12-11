'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'

export default function SectionGallery() {
  const images = [1, 2, 3, 4, 5, 6] // Placeholders

  return (
    <section id="gallery" className="py-24 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-rose-500 font-medium tracking-widest uppercase mb-2">Our Moments</p>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800">Galeri Foto</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group aspect-[3/4] ${
                i === 0 || i === 3 ? 'md:col-span-2 md:aspect-[16/9]' : ''
              }`}
            >
              <div className="absolute inset-0 bg-stone-300 flex items-center justify-center text-stone-400 group-hover:scale-110 transition-transform duration-700">
                 <ImageIcon className="w-12 h-12 opacity-50" />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
