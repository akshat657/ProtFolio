import { useState } from 'react'
import NavSection from './sections/NavSection'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import WorkSection from './sections/WorkSection'
import SkillsSection from './sections/SkillsSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import AchievementsSection from './sections/AchievementsSection'
import ContactSection from './sections/ContactSection'

export type Theme = 'aurora' | 'nebula'

export default function App() {
  const [theme, setTheme] = useState<Theme>('aurora')
  const toggleTheme = () => setTheme(t => t === 'aurora' ? 'nebula' : 'aurora')
  const accent = theme === 'nebula' ? '#c084fc' : '#38bdf8'

  return (
    <div
      data-theme={theme === 'nebula' ? 'nebula' : undefined}
      style={{
        position: 'relative',
        background: 'var(--bg)',
        color: 'var(--text)',
        minHeight: '100vh',
        overflowX: 'clip',
        fontFamily: "'Manrope', system-ui, sans-serif",
      }}
    >
      {/* Fixed ambient orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div className="orb-a" style={{
          position: 'absolute', top: '-12%', left: '-8%',
          width: '46vw', height: '46vw', borderRadius: '50%',
          background: 'radial-gradient(circle, var(--orb1), transparent 68%)',
          filter: 'blur(70px)', opacity: 0.55,
        }} />
        <div className="orb-b" style={{
          position: 'absolute', bottom: '-18%', right: '-10%',
          width: '50vw', height: '50vw', borderRadius: '50%',
          background: 'radial-gradient(circle, var(--orb2), transparent 68%)',
          filter: 'blur(80px)', opacity: 0.40,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--brd2) 1px, transparent 1px), linear-gradient(90deg, var(--brd2) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000, transparent 80%)',
          opacity: 0.5,
        }} />
      </div>

      <NavSection theme={theme} toggleTheme={toggleTheme} />
      <HeroSection accent={accent} />
      <MarqueeSection />
      <WorkSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}
