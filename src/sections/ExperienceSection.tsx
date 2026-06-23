import FadeIn from '../components/ui/FadeIn'

const experience = [
  {
    period: '2025 — now',
    role: 'AI Engineering Intern',
    org: 'BluParrot',
    desc: 'Building LLM-powered products and intelligent automation systems. Working on RAG pipelines, agent workflows, and real production ML features that ship to users.',
    tags: ['LLMs', 'RAG', 'Agents', 'Production ML'],
  },
  {
    period: '2024 — 25',
    role: 'Solo Engineer — Personal Projects',
    org: '',
    desc: 'Built LastMinutePrep (AI-powered exam prep with YouTube transcript extraction and adaptive Q&A) and MedReel (medical video transcription and analysis pipeline with GPT-4).',
    tags: ['Full-Stack', 'AI / ML', 'FastAPI', 'React'],
  },
  {
    period: 'Ongoing',
    role: 'B.Tech. Computer Science',
    org: 'University',
    desc: 'Studying CS with a focus on machine learning, algorithms, and software systems. Building side projects alongside to apply theory to real-world problems.',
    tags: ['ML', 'Algorithms', 'Systems', 'Research'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(70px, 11vw, 140px) clamp(20px, 5vw, 64px)',
      scrollMarginTop: 70,
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <FadeIn delay={0} y={30}>
          <div style={{ marginBottom: 54 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 12 }}>04 / EXPERIENCE</div>
            <h2 className="heading" style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1 }}>Where I&apos;ve worked</h2>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experience.map((e, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20}>
              <div style={{
                display: 'grid', gridTemplateColumns: '140px 1fr',
                gap: 'clamp(16px, 3vw, 40px)',
                padding: '30px 0',
                borderTop: '1px solid var(--brd)',
              }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--muted)', paddingTop: 5 }}>{e.period}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
                    <h3 className="heading" style={{ fontSize: 'clamp(20px, 2.6vw, 28px)' }}>{e.role}</h3>
                    {e.org && <span style={{ color: 'var(--accent)', fontSize: 16, fontWeight: 600 }}>{e.org}</span>}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', marginBottom: 14, maxWidth: 640 }}>{e.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {e.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)',
                        padding: '5px 9px', borderRadius: 7,
                        background: 'var(--panel2)', border: '1px solid var(--brd2)',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
