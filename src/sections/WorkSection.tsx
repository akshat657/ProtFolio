import FadeIn from '../components/ui/FadeIn'

const projects = [
  {
    no: '001', year: '2026', name: 'LastMinutePrep — AI Exam Prep',
    desc: 'AI-powered study tool for last-minute exam prep. Extracts YouTube transcripts, generates smart summaries, and creates adaptive Q&A to help students learn faster.',
    tags: ['LLMs', 'RAG', 'React', 'FastAPI', 'YouTube API'],
    stack: 'python · openai · react',
    metric: '3x', metricLabel: 'faster prep vs. manual study',
  },
  {
    no: '002', year: '2026', name: 'MedReel — Medical Video AI',
    desc: 'Automated pipeline to transcribe, analyze, and extract clinical insights from medical lecture videos. Built with Whisper for transcription and GPT-4 for summarization.',
    tags: ['Whisper', 'GPT-4', 'LangChain', 'Python', 'Video AI'],
    stack: 'whisper · gpt-4 · ffmpeg',
    metric: '95%', metricLabel: 'transcription accuracy on med content',
  },
  {
    no: '003', year: '2025–', name: 'BluParrot — LLM-Powered Products',
    desc: 'AI Engineering Intern building LLM-powered conversational products and automation systems. Working on RAG pipelines, agent workflows, and production ML features.',
    tags: ['LLMs', 'Agents', 'RAG', 'Python', 'Production ML'],
    stack: 'python · openai · fastapi',
    metric: 'live', metricLabel: 'in production at BluParrot',
  },
]

export default function WorkSection() {
  return (
    <section id="work" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(70px, 11vw, 140px) clamp(20px, 5vw, 64px)',
      scrollMarginTop: 70,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn delay={0} y={30}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 12 }}>01 / SELECTED WORK</div>
              <h2 className="heading" style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1 }}>Things I&apos;ve built &amp; shipped</h2>
            </div>
            <p style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.6, color: 'var(--muted)' }}>
              Real projects where AI moved a meaningful metric — speed, accuracy, or user value.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {projects.map((p, i) => (
            <FadeIn key={p.no} delay={i * 0.1} y={30}>
              <div
                style={{
                  display: 'grid', gridTemplateColumns: '1.1fr 1fr',
                  border: '1px solid var(--brd)', borderRadius: 22, overflow: 'hidden',
                  background: 'var(--panel)', backdropFilter: 'blur(10px)',
                  transition: 'transform .4s cubic-bezier(.2,.7,.3,1), border-color .4s, box-shadow .4s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-6px)'
                  el.style.borderColor = 'var(--accent)'
                  el.style.boxShadow = '0 24px 60px -20px var(--glow)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = ''; el.style.borderColor = ''; el.style.boxShadow = ''
                }}
              >
                <div style={{ padding: 'clamp(26px, 3vw, 44px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--accent)' }}>{p.no}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, letterSpacing: '.04em', color: 'var(--muted)' }}>{p.year}</span>
                    </div>
                    <h3 className="heading" style={{ fontSize: 'clamp(22px, 3.2vw, 36px)', lineHeight: 1.05, marginBottom: 14 }}>{p.name}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 460 }}>{p.desc}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.03em',
                        color: 'var(--text)', padding: '6px 11px', borderRadius: 8,
                        border: '1px solid var(--brd)', background: 'var(--panel2)',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  padding: 'clamp(26px, 3vw, 44px)',
                  background: 'linear-gradient(150deg, color-mix(in srgb, var(--accent) 16%, transparent), color-mix(in srgb, var(--accent2) 8%, transparent))',
                  borderLeft: '1px solid var(--brd)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)' }}>{p.stack}</span>
                  </div>
                  <div>
                    <div className="heading" style={{
                      fontSize: 'clamp(34px, 6vw, 58px)', lineHeight: 1,
                      background: 'linear-gradient(120deg, var(--accent), var(--accent2))',
                      WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                    }}>{p.metric}</div>
                    <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8 }}>{p.metricLabel}</div>
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
