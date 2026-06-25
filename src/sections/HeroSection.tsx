import { useRef, useEffect } from 'react'
import FadeIn from '../components/ui/FadeIn'

interface HeroProps {
  accent: string
}

function useParticleCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  accentRef: { current: string }
) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let w = 0, h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width; h = r.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)

    const COUNT = Math.max(40, Math.min(72, Math.floor((window.innerWidth * window.innerHeight) / 16000)))
    const nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * (w || window.innerWidth),
      y: Math.random() * (h || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.8 + 1,
    }))

    const hexToRgb = (hex: string): [number, number, number] => {
      let c = hex.replace('#', '')
      if (c.length === 3) c = c.split('').map(x => x + x).join('')
      const n = parseInt(c, 16)
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
    }

    const LINK = 132
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      let rgb: [number, number, number] = [56, 189, 248]
      try { rgb = hexToRgb(accentRef.current || '#38bdf8') } catch {}
      const [cr, cg, cb] = rgb

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        const dx = mouse.x - n.x, dy = mouse.y - n.y
        const md = Math.hypot(dx, dy)
        if (md < 160 && md > 0) { n.x += dx / md * 0.5; n.y += dy / md * 0.5 }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${cr},${cg},${cb},${(1 - d / LINK) * 0.32})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        const a = nodes[i]
        const dm = Math.hypot(mouse.x - a.x, mouse.y - a.y)
        if (dm < 160) {
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${(1 - dm / 160) * 0.5})`
          ctx.lineWidth = 1
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${cr},${cg},${cb},0.85)`
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill()
      }
      rafId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

const socials = [
  { href: 'https://github.com/akshat657', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://linkedin.com/in/akshat-khandelwal-79647a245', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'mailto:akshatkhandelwal004@gmail.com', label: 'Email', Icon: MailIcon },
]

export default function HeroSection({ accent }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const accentRef = useRef(accent)
  useEffect(() => { accentRef.current = accent }, [accent])
  useParticleCanvas(canvasRef, accentRef)

  return (
    <header id="top" style={{
      position: 'relative', zIndex: 1, minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(100px, 12vw, 130px) clamp(20px, 5vw, 64px) 56px',
    }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, width: '100%', margin: '0 auto' }}>

        {/* Main two-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(220px, 26vw, 340px) 1fr',
          gap: 'clamp(36px, 5vw, 72px)',
          alignItems: 'center',
          marginBottom: 0,
        }}>

          {/* LEFT: circular photo + name + socials */}
          <FadeIn delay={0.1} x={-24} y={0}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>

              {/* Photo with orbital rings */}
              <div style={{ position: 'relative', width: 260, height: 260 }}>
                {/* SVG orbital rings */}
                <svg
                  viewBox="0 0 340 340"
                  style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 340, height: 340, pointerEvents: 'none',
                    overflow: 'visible',
                  }}
                >
                  {/* Outer tilted ellipse */}
                  <ellipse cx="170" cy="170" rx="160" ry="56"
                    fill="none" stroke="rgba(56,189,248,0.32)" strokeWidth="1.5"
                    transform="rotate(-28 170 170)" />
                  {/* Inner tilted ellipse */}
                  <ellipse cx="170" cy="170" rx="144" ry="44"
                    fill="none" stroke="rgba(192,132,252,0.2)" strokeWidth="1"
                    transform="rotate(22 170 170)" />
                  {/* Glow dots on rings */}
                  <circle cx="170" cy="12" r="5" fill="#38bdf8" opacity="0.9" />
                  <circle cx="326" cy="176" r="3.5" fill="#c084fc" opacity="0.85" />
                  <circle cx="18" cy="156" r="3" fill="#38bdf8" opacity="0.65" />
                </svg>

                {/* Circular photo */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 220, height: 220, borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(56,189,248,0.45)',
                  boxShadow: '0 0 48px rgba(56,189,248,0.18), 0 0 100px rgba(56,189,248,0.08)',
                }}>
                  <img
                    src="/Akshat.png"
                    alt="Akshat Khandelwal"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  />
                </div>
              </div>

              {/* Name */}
              <div style={{ textAlign: 'center' }}>
                <h1 className="heading" style={{
                  fontSize: 'clamp(26px, 3.5vw, 40px)',
                  fontWeight: 800, letterSpacing: '.03em',
                  lineHeight: 1.05, textTransform: 'uppercase',
                  marginBottom: 10,
                }}>
                  Akshat<br />Khandelwal
                </h1>
                <p style={{
                  background: 'linear-gradient(120deg, var(--accent), var(--accent2))',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  fontSize: 12.5, fontWeight: 600, letterSpacing: '.02em',
                }}>
                  AI Engineer · GenAI Builder · Production Systems
                </p>
              </div>

              {/* Social icon buttons */}
              <div style={{ display: 'flex', gap: 14 }}>
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label} href={href} target="_blank" rel="noopener noreferrer"
                    title={label}
                    style={{
                      width: 44, height: 44, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid var(--brd)', background: 'var(--panel)',
                      color: 'var(--muted)', textDecoration: 'none',
                      transition: 'border-color .2s, color .2s, box-shadow .2s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.borderColor = 'var(--accent)'
                      el.style.color = 'var(--accent)'
                      el.style.boxShadow = '0 0 16px var(--glow)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.borderColor = ''
                      el.style.color = ''
                      el.style.boxShadow = ''
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: heading + bio + CTAs */}
          <div style={{ display: 'flex', gap: 'clamp(20px, 3vw, 36px)', alignItems: 'flex-start' }}>
            {/* Vertical accent line */}
            <div style={{
              width: 2, alignSelf: 'stretch', flexShrink: 0, borderRadius: 2,
              background: 'linear-gradient(to bottom, var(--accent) 0%, transparent 100%)',
              minHeight: 200,
            }} />

            <div style={{ flex: 1 }}>
              <FadeIn delay={0.18} y={30}>
                <h2 className="heading" style={{
                  fontSize: 'clamp(34px, 5.8vw, 80px)',
                  lineHeight: 0.96, marginBottom: 26,
                }}>
                  Building products{' '}
                  <span style={{
                    background: 'linear-gradient(120deg, var(--accent), var(--accent2))',
                    WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                    display: 'block',
                  }}>
                    that move<br />beyond demos.
                  </span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.28} y={20}>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)', marginBottom: 12, maxWidth: 520 }}>
                  Engineer who builds intelligent systems — from LLM pipelines and data science models
                  to full-stack applications and real-time dashboards.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: 'var(--muted)', marginRight: 2 }}>Open to ·</span>
                  {['AI Engineer', 'ML Engineer', 'Data Scientist', 'SDE'].map(role => (
                    <span key={role} style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.03em',
                      color: 'var(--accent)', padding: '4px 11px', borderRadius: 99,
                      border: '1px solid var(--brd)', background: 'var(--panel)',
                    }}>{role}</span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.36} y={20}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                  <a href="#work" style={{
                    textDecoration: 'none', color: '#04060c', fontWeight: 700, fontSize: 15,
                    padding: '13px 26px', borderRadius: 99,
                    background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                    boxShadow: '0 10px 34px var(--glow)',
                    display: 'inline-block',
                  }}>View my work &rarr;</a>
                  <a href="#contact" style={{
                    textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: 15,
                    padding: '13px 26px', borderRadius: 99,
                    border: '1px solid var(--brd)', background: 'var(--panel)',
                    display: 'inline-block',
                  }}>Get in touch</a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}
