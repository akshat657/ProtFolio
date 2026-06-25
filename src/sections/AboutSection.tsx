import FadeIn from '../components/ui/FadeIn'

const facts = [
  { k: 'BASED IN', v: 'India · Remote-friendly' },
  { k: 'FOCUS', v: 'Gen AI · LLMs · Agents' },
  { k: 'EDUCATION', v: 'B.Tech. CS · CGPA 8.90' },
  { k: 'CURRENTLY', v: 'AI Eng. @ BluParrot' },
]

export default function AboutSection() {
  return (
    <section id="about" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(70px, 11vw, 140px) clamp(20px, 5vw, 64px)',
      scrollMarginTop: 70,
    }}>
      <div className="about-grid" style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '0.85fr 1.15fr',
        gap: 'clamp(36px, 6vw, 80px)', alignItems: 'center',
      }}>
        <FadeIn delay={0} x={-30} y={0}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -14, borderRadius: 28,
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              opacity: 0.25, filter: 'blur(36px)',
            }} />
            <div className="about-photo" style={{
              position: 'relative', width: '100%', height: 440,
              border: '1px solid var(--brd)', borderRadius: 22,
              overflow: 'hidden',
            }}>
              <img
                src="/Akshat.png"
                alt="Akshat Khandelwal"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'top center',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 16 }}>03 / ABOUT</div>
            <h2 className="heading" style={{ fontSize: 'clamp(28px, 4.4vw, 52px)', lineHeight: 1.05, marginBottom: 24 }}>Engineer. 1+ year in production.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', marginBottom: 18 }}>
              I build intelligent systems — LLM applications, data science models, and full-stack apps — with a focus on making them <strong style={{ color: 'var(--text)', fontWeight: 600 }}>survive contact with reality</strong>. Currently at BluParrot, building AI products for UK and Indian clients. Previously at Zyod, deploying voice AI and RAG chatbots across live operations.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', marginBottom: 30 }}>
              My sweet spot is the messy middle: taking a working prototype and turning it into a system with real users, real eval, and real reliability. 2nd Runner-Up at IIT Bombay NEC (2024) with a 14-member team.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 28 }}>
              {facts.map(f => (
                <div key={f.k} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 14 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 4 }}>{f.k}</div>
                  <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 600 }}>{f.v}</div>
                </div>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1eaSyJf3bznRVWlhJ0YK_kp-Xs9VyB4T3/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              style={{
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                color: 'var(--text)', fontWeight: 600, fontSize: 14,
                padding: '11px 22px', borderRadius: 99,
                border: '1px solid var(--brd)', background: 'var(--panel)',
                fontFamily: "'JetBrains Mono', monospace", letterSpacing: '.03em',
                transition: 'border-color .2s, box-shadow .2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--accent)'
                el.style.boxShadow = '0 0 20px var(--glow)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = ''
                el.style.boxShadow = ''
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              View Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
