'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MailOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

interface OpeningScreenProps {
  guestName: string
  onOpen: () => void
}

export default function OpeningScreen({ guestName, onOpen }: OpeningScreenProps) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 800) // Wait for animation
  }

  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-900 text-white transition-all duration-1000 overflow-hidden",
        isOpening ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background with blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 opacity-90" />
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center space-y-8 p-6 max-w-md w-full"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <Heart className="w-20 h-20 text-rose-400 fill-rose-400/20 drop-shadow-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-serif text-rose-100">R & S</span>
          </div>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-200 to-amber-200">
            Rifki & Salsabila
          </h1>
          <p className="text-stone-300 font-light tracking-widest uppercase text-sm">
            Wedding Invitation
          </p>
        </div>
        
        <div className="py-6 w-full space-y-3 border-y border-white/10">
          <p className="text-sm font-light text-stone-400">Diberikan kepada:</p>
          <p className="text-2xl font-serif font-medium text-white">{guestName}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="group px-8 py-3 bg-white text-stone-900 rounded-full font-medium hover:bg-rose-50 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-white/10"
        >
          <MailOpen className="w-4 h-4 group-hover:animate-bounce" />
          Buka Undangan
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
