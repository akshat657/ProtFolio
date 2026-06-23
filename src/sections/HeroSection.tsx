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

function useTypewriter(elRef: React.RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const words = ['LLMs & RAG', 'full-stack apps', 'AI agents', 'automation systems', 'real-world ML']
    let wi = 0, ci = 0, deleting = false
    el.textContent = ''
    let timer: ReturnType<typeof setTimeout>

    const step = () => {
      const word = words[wi]
      if (!deleting) {
        ci++
        el.textContent = word.slice(0, ci)
        if (ci === word.length) { deleting = true; timer = setTimeout(step, 1600); return }
      } else {
        ci--
        el.textContent = word.slice(0, ci)
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length }
      }
      timer = setTimeout(step, deleting ? 45 : 85)
    }
    timer = setTimeout(step, 700)
    return () => clearTimeout(timer)
  }, [])
}

const stats = [
  { value: '3+', label: 'projects shipped' },
  { value: '1', label: 'AI internship' },
  { value: '2+', label: 'years building AI' },
  { value: '10M+', label: 'tokens processed' },
]

export default function HeroSection({ accent }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const typeRef = useRef<HTMLSpanElement>(null)
  const accentRef = useRef(accent)
  useEffect(() => { accentRef.current = accent }, [accent])

  useParticleCanvas(canvasRef, accentRef)
  useTypewriter(typeRef)

  return (
    <header id="top" style={{
      position: 'relative', zIndex: 1, minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(100px, 14vw, 120px) clamp(20px, 5vw, 64px) 60px',
      scrollMarginTop: 80,
    }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100 }}>
        <FadeIn delay={0} y={20}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            padding: '7px 15px', borderRadius: 99,
            border: '1px solid var(--brd)', background: 'var(--panel)',
            fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '.05em',
            color: 'var(--muted)', marginBottom: 30,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 12px #34d399' }} />
            Available for new projects · 2026
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h1 className="heading" style={{ lineHeight: 0.98, fontSize: 'clamp(46px, 8.5vw, 118px)', marginBottom: 24 }}>
            Machine learning,<br />
            <span style={{
              background: 'linear-gradient(120deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>shipped to production.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(14px, 2.2vw, 19px)', color: 'var(--muted)', marginBottom: 26,
          }}>
            <span style={{ color: 'var(--accent)' }}>&gt;</span>{' '}
            specializing in{' '}
            <span ref={typeRef} style={{ color: 'var(--text)' }} />
            <span className="animate-blink" style={{
              display: 'inline-block', width: 9, height: '1.1em',
              background: 'var(--accent)', verticalAlign: '-2px', marginLeft: 3,
            }} />
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <p style={{
            maxWidth: 560, fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.6,
            color: 'var(--muted)', marginBottom: 38,
          }}>
            I&apos;m <strong style={{ color: 'var(--text)', fontWeight: 700 }}>Akshat Khandelwal</strong> &mdash; an AI engineering intern at BluParrot, building LLM-powered products and intelligent automation systems. I turn complex ideas into real, working software.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 48 }}>
            <a href="#work" style={{
              textDecoration: 'none', color: '#04060c', fontWeight: 700, fontSize: 15,
              padding: '14px 26px', borderRadius: 99,
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              boxShadow: '0 10px 34px var(--glow)',
            }}>View selected work &rarr;</a>
            <a href="#contact" style={{
              textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: 15,
              padding: '14px 26px', borderRadius: 99,
              border: '1px solid var(--brd)', background: 'var(--panel)',
            }}>Get in touch</a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'stretch' }}>
                {i > 0 && (
                  <div style={{
                    width: 1, background: 'var(--brd)', alignSelf: 'stretch',
                    minHeight: 44, margin: '0 clamp(16px, 3vw, 36px)',
                  }} />
                )}
                <div>
                  <div className="heading" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>{s.value}</div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5,
                    letterSpacing: '.04em', color: 'var(--muted)', marginTop: 2,
                  }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="animate-bob" style={{
        position: 'absolute', bottom: 28, left: '50%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '.2em', color: 'var(--muted)' }}>SCROLL</span>
        <span style={{ width: 1, height: 34, background: 'linear-gradient(var(--accent), transparent)' }} />
      </div>
    </header>
  )
}
