import FadeIn from '../components/ui/FadeIn'

const experience = [
  {
    period: 'Dec 2025 — now',
    role: 'AI Engineering Intern',
    org: 'BluParrot',
    location: 'Gurugram, India',
    bullets: [
      'Built a personality-driven AI chatbot (SparqNow, UK client) using RAG, knowledge graphs, and dual-vector embeddings — enabling expert-specific reasoning and response styles.',
      'Developed an AI legal drafting system using SaulLM + Claude API, generating 500+ jurisdiction-compliant documents and cutting drafting time by 60%.',
      'Built a LangGraph-powered multi-agent sales platform automating lead discovery, qualification, and outreach — reducing manual effort by 80%+.',
      'Deployed voice AI agents for Indian and international clients using Vapi, Unleash, and Milli\'s platforms.',
    ],
    tags: ['LLMs', 'RAG', 'LangGraph', 'Voice AI', 'Multi-Agent', 'Prompt Engineering'],
  },
  {
    period: 'Apr 2025 — Sep 2025',
    role: 'AI Intern',
    org: 'Zyod',
    location: 'Remote',
    bullets: [
      'Architected an internal RAG-powered chatbot ingesting company policies, SOPs, and FAQs — enabling real-time institutional knowledge queries without manual lookup.',
      'Developed voice AI agents for lead engagement, payment reminders, and order confirmation using real-time conversational pipelines.',
      'Optimised LLM prompt pipelines for fashion-tech modules (style classification, vendor matching), reducing AI error rate by 35% and iteration cycles by 50%.',
    ],
    tags: ['RAG', 'Voice AI', 'Prompt Optimisation', 'LLM Pipelines', 'Fashion-tech AI'],
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
                display: 'grid', gridTemplateColumns: '160px 1fr',
                gap: 'clamp(16px, 3vw, 40px)',
                padding: '34px 0',
                borderTop: '1px solid var(--brd)',
              }}>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{e.period}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)', marginTop: 4, opacity: 0.65 }}>{e.location}</div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
                    <h3 className="heading" style={{ fontSize: 'clamp(19px, 2.5vw, 26px)' }}>{e.role}</h3>
                    {e.org && <span style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 600 }}>{e.org}</span>}
                  </div>
                  <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                    {e.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: 10, fontSize: 14.5, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 640 }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
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
