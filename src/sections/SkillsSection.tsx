import FadeIn from '../components/ui/FadeIn'

const skills = [
  {
    no: '01', title: 'LLMs & NLP',
    blurb: 'Fine-tuning, RAG pipelines, prompt engineering, and evaluation harnesses for language models that actually ship.',
    items: ['Fine-tuning / LoRA', 'RAG', 'Prompt eval', 'LangChain', 'OpenAI API'],
  },
  {
    no: '02', title: 'Full-Stack Dev',
    blurb: 'End-to-end web apps with React, TypeScript, and modern backend tooling — clean, fast, production-ready.',
    items: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    no: '03', title: 'Automation & Agents',
    blurb: 'Designing autonomous AI agent workflows and automation pipelines that connect tools and scale intelligently.',
    items: ['LangGraph', 'AI Agents', 'Webhooks', 'Multi-step flows', 'Pipelines'],
  },
  {
    no: '04', title: 'Product Prototyping',
    blurb: 'Rapid ideation to working prototype — validating ideas fast with real, functional builds.',
    items: ['Vite', 'shadcn/ui', 'Framer Motion', 'MVP design', 'UX thinking'],
  },
  {
    no: '05', title: 'MLOps & Tooling',
    blurb: 'Model serving, evaluation frameworks, and observability that keeps AI features alive in production.',
    items: ['MLflow', 'Docker', 'Eval harness', 'Logging', 'Monitoring'],
  },
  {
    no: '06', title: 'API Integration',
    blurb: 'Connecting AI APIs and third-party services into cohesive, reliable systems with clean interfaces.',
    items: ['OpenAI', 'YouTube API', 'Whisper API', 'REST', 'Error handling'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(70px, 11vw, 140px) clamp(20px, 5vw, 64px)',
      scrollMarginTop: 70,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn delay={0} y={30}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 12 }}>02 / CAPABILITIES</div>
            <h2 className="heading" style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1, maxWidth: 760 }}>The full AI stack, end to end</h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {skills.map((s, i) => (
            <FadeIn key={s.no} delay={i * 0.06} y={20}>
              <div
                style={{
                  border: '1px solid var(--brd)', borderRadius: 18, padding: 28,
                  background: 'var(--panel)', backdropFilter: 'blur(10px)',
                  transition: 'transform .35s, border-color .35s', height: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-5px)'; el.style.borderColor = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = ''; el.style.borderColor = ''
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{
                    display: 'grid', placeItems: 'center', width: 38, height: 38, borderRadius: 11,
                    background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 30%, transparent), color-mix(in srgb, var(--accent2) 20%, transparent))',
                    border: '1px solid var(--brd)',
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--text)',
                  }}>{s.no}</span>
                  <h3 className="heading" style={{ fontSize: 20 }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--muted)', marginBottom: 18 }}>{s.blurb}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {s.items.map(item => (
                    <span key={item} style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)',
                      padding: '5px 9px', borderRadius: 7,
                      background: 'var(--panel2)', border: '1px solid var(--brd2)',
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
