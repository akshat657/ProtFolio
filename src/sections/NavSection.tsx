import { useRef, useState } from 'react'
import type { Theme } from '../App'

interface NavProps {
  theme: Theme
  toggleTheme: () => void
}

function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const mx = e.clientX - (r.left + r.width / 2)
    const my = e.clientY - (r.top + r.height / 2)
    ref.current.style.transform = `translate(${mx * 0.28}px, ${my * 0.4}px)`
  }
  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ transition: 'transform .25s cubic-bezier(.2,.7,.3,1)', display: 'inline-block' }}>
      {children}
    </div>
  )
}

const navLinks = ['work', 'skills', 'experience', 'education', 'achievements']

export default function NavSection({ theme, toggleTheme }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 'clamp(14px, 2vw, 18px) clamp(20px, 5vw, 64px)',
        backdropFilter: 'blur(14px)',
        background: 'linear-gradient(to bottom, var(--bg), transparent)',
        borderBottom: '1px solid var(--brd2)',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', color: 'var(--text)' }}>
          <span style={{
            display: 'grid', placeItems: 'center', width: 34, height: 34, borderRadius: 9,
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#04060c', fontSize: 17,
          }}>A</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: 'var(--text)', letterSpacing: '.01em', lineHeight: 1.15 }}>Akshat Khandelwal</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '.04em', color: 'var(--muted)', lineHeight: 1 }}>AI Engineer</span>
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 30px)' }}>
          {/* Desktop nav links */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 30px)' }}>
            {navLinks.map(link => (
              <a key={link} href={`#${link}`}
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, fontWeight: 700, letterSpacing: '.03em', color: 'var(--muted)', textDecoration: 'none', padding: '6px 2px', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {link}
              </a>
            ))}
          </div>

          <Magnetic>
            <button onClick={toggleTheme} style={{
              display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer',
              border: '1px solid var(--brd)', background: 'var(--panel)', color: 'var(--text)',
              padding: '7px 12px', borderRadius: 99,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, letterSpacing: '.04em',
            }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent2))' }} />
              {theme === 'nebula' ? 'nebula' : 'aurora'}
            </button>
          </Magnetic>

          {/* Desktop CTA */}
          <Magnetic>
            <a href="#contact" className="nav-links" style={{
              textDecoration: 'none', color: '#04060c', fontWeight: 700, fontSize: 13,
              padding: '9px 18px', borderRadius: 99,
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              boxShadow: '0 6px 24px var(--glow)',
              display: 'inline-block',
            }}>Let&apos;s talk</a>
          </Magnetic>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              display: 'none',
              flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              gap: 5, width: 38, height: 38, borderRadius: 9, cursor: 'pointer',
              border: '1px solid var(--brd)', background: 'var(--panel)',
              padding: 0,
            }}
          >
            <span style={{ width: 18, height: 2, background: menuOpen ? 'var(--accent)' : 'var(--text)', borderRadius: 2, transition: 'all .2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ width: 18, height: 2, background: menuOpen ? 'transparent' : 'var(--text)', borderRadius: 2, transition: 'all .2s' }} />
            <span style={{ width: 18, height: 2, background: menuOpen ? 'var(--accent)' : 'var(--text)', borderRadius: 2, transition: 'all .2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 49,
          background: 'var(--bg)', borderBottom: '1px solid var(--brd)',
          padding: '20px 24px 28px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 700,
                letterSpacing: '.04em', color: 'var(--muted)', textDecoration: 'none',
                padding: '13px 0', borderBottom: '1px solid var(--brd2)',
                textTransform: 'uppercase', transition: 'color .2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 12, textAlign: 'center', textDecoration: 'none',
              color: '#04060c', fontWeight: 700, fontSize: 14,
              padding: '13px', borderRadius: 99,
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            }}
          >Let&apos;s talk</a>
        </div>
      )}
    </>
  )
}
