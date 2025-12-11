'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import OpeningScreen from '@/components/OpeningScreen'
import BottomNavigation from '@/components/BottomNavigation'
import SectionProfile from '@/components/SectionProfile'
import SectionInvite from '@/components/SectionInvite'
import SectionEvent from '@/components/SectionEvent'
import SectionTimeline from '@/components/SectionTimeline'
import SectionRSVP from '@/components/SectionRSVP'
import SectionWishes from '@/components/SectionWishes'
import SectionGiftCard from '@/components/SectionGiftCard'
import SectionGallery from '@/components/SectionGallery'
import AudioPlayer from '@/components/AudioPlayer'
import { motion, AnimatePresence } from 'framer-motion'

function InvitationContent() {
  const searchParams = useSearchParams()
  const guestName = searchParams.get('to') || 'Tamu Undangan'
  
  const [isOpen, setIsOpen] = useState(false)
  const [showOpeningScreen, setShowOpeningScreen] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(() => {
      setShowOpeningScreen(false)
    }, 500)
  }

  const handleNavigate = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else if (id === 'home') {
       window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Scroll spy to update active section
  useEffect(() => {
    if (!isOpen) return

    const handleScroll = () => {
      const sections = ['home', 'profile', 'event', 'gallery', 'rsvp', 'wishes']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  return (
    <main className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-rose-200 overflow-x-hidden">
      <AnimatePresence>
        {showOpeningScreen && (
          <OpeningScreen guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>
      
      {isOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
          <AudioPlayer isPlaying={isOpen} />
          
          <div id="home" className="min-h-screen flex flex-col items-center justify-center bg-stone-900 relative text-white text-center p-6 overflow-hidden">
             {/* Abstract Background */}
             <div className="absolute inset-0 bg-gradient-to-b from-stone-800 to-stone-900 opacity-80" />
             <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900 via-stone-900 to-stone-900" />
             
             <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 space-y-8"
             >
                <p className="text-lg md:text-xl tracking-[0.3em] uppercase text-rose-200">The Wedding Of</p>
                <h1 className="text-6xl md:text-8xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-100 to-amber-100 pb-2">
                    Hilman Abdul Aziz <span className="text-4xl md:text-6xl font-light text-stone-400">&</span> Yayu Rahayu
                </h1>
                <div className="flex items-center justify-center gap-4 text-xl font-light text-stone-300">
                    <span className="border-t border-stone-600 w-12" />
                    <p>30 . 12 . 2025</p>
                    <span className="border-t border-stone-600 w-12" />
                </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 animate-bounce text-stone-500"
             >
                <p className="text-xs tracking-widest uppercase">Scroll Down</p>
             </motion.div>
          </div>

          <SectionProfile />
          <SectionEvent />
          <SectionInvite />
          <SectionTimeline />
          <SectionGallery />
          <SectionRSVP />
          <SectionGiftCard />
          <SectionWishes />

          <div className="pb-32 bg-stone-900 text-stone-500 text-center py-12 text-sm border-t border-stone-800">
            <p>© 2025 Hilman Abdul Aziz & Yayu Rahayu Wedding. All rights reserved.</p>
            <p className="mt-2 text-xs">Created with ❤️ by <a href="https://portofolio-rifkidev.vercel.app/">Rifki Dev</a></p>
          </div>

          <BottomNavigation activeSection={activeSection} onNavigate={handleNavigate} />
        </motion.div>
      )}
    </main>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-900 flex items-center justify-center text-white">Loading...</div>}>
      <InvitationContent />
    </Suspense>
  )
}
