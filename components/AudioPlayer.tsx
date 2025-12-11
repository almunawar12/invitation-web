'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioPlayer({ isPlaying }: { isPlaying: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e))
    }
  }, [isPlaying])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  if (!isPlaying) return null

  return (
    <button
      onClick={toggleMute}
      className="fixed top-24 right-4 z-40 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg border border-stone-200 text-stone-800 hover:bg-white transition-colors"
    >
      {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
      <audio ref={audioRef} src="/audio.mp3" loop />
    </button>
  )
}
