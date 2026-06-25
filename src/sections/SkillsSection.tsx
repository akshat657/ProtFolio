import FadeIn from '../components/ui/FadeIn'

const skills = [
  {
    no: '01', title: 'Gen AI & LLMs',
    blurb: 'Building with large language models end to end — RAG pipelines, prompt engineering, knowledge graphs, and dual-vector retrieval that ships to real users.',
    items: ['RAG / FAISS / Qdrant', 'LangChain / LangGraph', 'Prompt Engineering', 'SaulLM / Claude API', 'Transformers / HuggingFace'],
  },
  {
    no: '02', title: 'AI Agents & Automation',
    blurb: 'Designing autonomous agent workflows that reason, use tools, and act — from multi-agent sales pipelines to agentic document drafting systems.',
    items: ['LangGraph Agents', 'Multi-Agent Systems', 'Tool Use & Orchestration', 'Agentic Workflows', 'Sales Automation'],
  },
  {
    no: '03', title: 'Voice AI & Multimodal',
    blurb: 'Real-time voice pipelines and multimodal AI — from speech-to-text transcription to voice agents deployed on live business operations.',
    items: ['Vapi / Milli / Unleash', 'Whisper (speech-to-text)', 'Voice Agent Design', 'Groq API (fast inference)', 'Multimodal Pipelines'],
  },
  {
    no: '04', title: 'Full-Stack & API Dev',
    blurb: 'End-to-end product engineering — clean React frontends, FastAPI/Streamlit backends, and robust REST integrations that hold up in production.',
    items: ['React / TypeScript', 'FastAPI / Streamlit', 'REST APIs / MCP', 'Docker', 'PostgreSQL / SQL'],
  },
  {
    no: '05', title: 'Vector Databases & Infra',
    blurb: 'Storing, indexing, and retrieving embeddings at scale. Keeping AI features reliable with evaluation loops, logging, and observability.',
    items: ['FAISS', 'Qdrant', 'Embedding Pipelines', 'AWS / GCP', 'Eval Harnesses'],
  },
  {
    no: '06', title: 'Data & Analytics',
    blurb: 'Turning raw data into signals — from API-fed real-time dashboards to pandas pipelines that feed downstream AI features.',
    items: ['Pandas / NumPy', 'Power BI', 'Feature Engineering', 'Data Cleaning', 'API Data Ingestion'],
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
            <h2 className="heading" style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1, maxWidth: 760 }}>The Gen AI stack, end to end</h2>
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
