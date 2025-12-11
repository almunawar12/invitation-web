'use client'

import { Home, Heart, Calendar, MessageSquare, Image, MailCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BottomNavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function BottomNavigation({ activeSection, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'profile', icon: Heart, label: 'Pasangan' },
    { id: 'event', icon: Calendar, label: 'Acara' },
    { id: 'rsvp', icon: MailCheck, label: 'RSVP' },
    { id: 'wishes', icon: MessageSquare, label: 'Ucapan' },
    { id: 'gallery', icon: Image, label: 'Galeri' },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-lg bg-stone-900/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 p-2">
      <div className="flex justify-between items-center px-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
                isActive ? "text-rose-400" : "text-stone-400 hover:text-stone-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon className={cn("w-5 h-5 mb-1", isActive && "fill-current")} />
              <span className="text-[9px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
