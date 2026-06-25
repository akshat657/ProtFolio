import FadeIn from '../components/ui/FadeIn'

const degrees = [
  {
    period: 'Aug 2022 — Jun 2026',
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    institution: 'Bennett University',
    location: 'Greater Noida, Uttar Pradesh',
    grade: 'CGPA: 8.90',
  },
  {
    period: 'Jun 2020 — Jul 2021',
    degree: 'Class XII · CBSE',
    field: 'Science',
    institution: 'Alwar Public School',
    location: 'Alwar, Rajasthan',
    grade: '91.2%',
  },
  {
    period: 'Jun 2018 — Jul 2019',
    degree: 'Class X · CBSE',
    field: 'General',
    institution: 'Alwar Public School',
    location: 'Alwar, Rajasthan',
    grade: '92.4%',
  },
]

const certs = [
  { title: 'Databases & SQL', issuer: 'IBM' },
  { title: 'Hyperparameter Tuning & Optimization', issuer: 'DeepLearning.AI' },
  { title: 'Supervised Machine Learning', issuer: 'IBM' },
]

export default function EducationSection() {
  return (
    <section id="education" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(70px, 11vw, 140px) clamp(20px, 5vw, 64px)',
      scrollMarginTop: 70,
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <FadeIn delay={0} y={30}>
          <div style={{ marginBottom: 54 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 12 }}>05 / EDUCATION</div>
            <h2 className="heading" style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1 }}>Where I studied</h2>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {degrees.map((d, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20}>
              <div className="edu-row" style={{
                display: 'grid', gridTemplateColumns: '160px 1fr',
                gap: 'clamp(16px, 3vw, 40px)',
                padding: '34px 0',
                borderTop: '1px solid var(--brd)',
              }}>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{d.period}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)', marginTop: 4, opacity: 0.65 }}>{d.location}</div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                    <h3 className="heading" style={{ fontSize: 'clamp(19px, 2.5vw, 26px)' }}>{d.degree}</h3>
                    <span style={{ color: 'var(--accent)', fontSize: 15, fontWeight: 600 }}>{d.field}</span>
                  </div>
                  <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 600, marginBottom: 6 }}>{d.institution}</div>
                  <div style={{
                    display: 'inline-block',
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
                    color: 'var(--accent)', padding: '5px 11px', borderRadius: 7,
                    border: '1px solid var(--brd)', background: 'var(--panel2)', marginTop: 6,
                  }}>{d.grade}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25} y={20}>
          <div style={{ marginTop: 48 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 20 }}>CERTIFICATIONS</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              {certs.map(c => (
                <div key={c.title} style={{
                  padding: '14px 20px', borderRadius: 14,
                  border: '1px solid var(--brd)', background: 'var(--panel)',
                  backdropFilter: 'blur(8px)',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{c.title}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--accent)' }}>{c.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
