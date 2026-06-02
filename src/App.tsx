import { useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play()
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">

      {/* Video background — absolute inset-0 fills this container */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navbar and HeroSection are relative z-10 — they sit above the video */}
      <Navbar />
      <HeroSection />

    </div>
  )
}
