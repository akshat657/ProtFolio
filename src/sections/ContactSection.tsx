import FadeIn from '../components/ui/FadeIn'

const socials = [
  { label: 'GitHub', url: 'https://github.com/akshat-khandelwal' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/akshat-khandelwal' },
  { label: 'Resume', url: '#' },
]

export default function ContactSection() {
  return (
    <section id="contact" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(80px, 12vw, 150px) clamp(20px, 5vw, 64px) 70px',
      scrollMarginTop: 70,
    }}>
      <FadeIn delay={0} y={30}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none',
          }}>
            <div style={{
              width: '60%', height: '100%',
              background: 'radial-gradient(ellipse at center, var(--glow), transparent 70%)',
              opacity: 0.5, filter: 'blur(40px)',
            }} />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 20 }}>05 / CONTACT</div>
            <h2 className="heading" style={{ fontSize: 'clamp(38px, 8vw, 96px)', lineHeight: .98, marginBottom: 26 }}>
              Let&apos;s build something<br />
              <span style={{
                background: 'linear-gradient(120deg, var(--accent), var(--accent2))',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}>intelligent.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 480, margin: '0 auto 38px' }}>
              Have an AI problem worth solving, or a product to build? I&apos;m available for internships, projects, and collaborations.
            </p>
            <a href="mailto:hello@akshat.dev" style={{
              display: 'inline-block', textDecoration: 'none', color: '#04060c',
              fontWeight: 700, fontSize: 16, padding: '16px 34px', borderRadius: 99,
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              boxShadow: '0 12px 40px var(--glow)', marginBottom: 40,
            }}>Get in touch &rarr;</a>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 14 }}>
              {socials.map(s => (
                <a key={s.label} href={s.url} style={{
                  textDecoration: 'none',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 13,
                  color: 'var(--text)', padding: '10px 18px', borderRadius: 99,
                  border: '1px solid var(--brd)', background: 'var(--panel)',
                }}>{s.label} &uarr;</a>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <footer style={{
        maxWidth: 1200, margin: '80px auto 0',
        paddingTop: 28, borderTop: '1px solid var(--brd2)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14,
        fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)',
      }}>
        <span>&copy; 2026 Akshat Khandelwal</span>
        <span>Built with React &amp; Framer Motion</span>
      </footer>
    </section>
  )
}
