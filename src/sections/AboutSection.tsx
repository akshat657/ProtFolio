import FadeIn from '../components/ui/FadeIn'

const facts = [
  { k: 'BASED IN', v: 'India · Remote' },
  { k: 'FOCUS', v: 'LLMs · Agents · Full-Stack' },
  { k: 'EDUCATION', v: 'B.Tech. Computer Science' },
  { k: 'CURRENTLY', v: 'AI Eng. Intern @ BluParrot' },
]

export default function AboutSection() {
  return (
    <section id="about" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(70px, 11vw, 140px) clamp(20px, 5vw, 64px)',
      scrollMarginTop: 70,
    }}>
      <div style={{
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
            <div style={{
              position: 'relative', width: '100%', height: 440,
              border: '1px solid var(--brd)', borderRadius: 22,
              background: 'var(--panel)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%', margin: '0 auto 16px',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  display: 'grid', placeItems: 'center',
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 32, color: '#04060c',
                }}>A</div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '.04em' }}>akshat khandelwal</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 16 }}>03 / ABOUT</div>
            <h2 className="heading" style={{ fontSize: 'clamp(28px, 4.4vw, 52px)', lineHeight: 1.05, marginBottom: 24 }}>Research-minded, production-obsessed.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', marginBottom: 18 }}>
              I started building AI tools out of curiosity and quickly fell for the harder problem: making models <strong style={{ color: 'var(--text)', fontWeight: 600 }}>survive contact with reality</strong>. Today I work at BluParrot on LLM-powered products — owning everything from pipeline design and prompt engineering to evaluation, serving, and debugging in prod.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', marginBottom: 30 }}>
              My sweet spot is the messy middle: turning a promising notebook into a feature with real users — and building the eval loops that keep it sharp over time.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {facts.map(f => (
                <div key={f.k} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 14 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 4 }}>{f.k}</div>
                  <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 600 }}>{f.v}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
