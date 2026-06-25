import FadeIn from '../components/ui/FadeIn'

const achievements = [
  {
    icon: '🏆',
    title: '2nd Runner-Up — IIT Bombay NEC',
    year: '2024',
    desc: 'Led a 14-member team to place 3rd among 200+ national teams at the National Entrepreneur Challenge hosted by IIT Bombay.',
  },
  {
    icon: '📢',
    title: 'Marketing Head — BENNOVATE 2.0',
    year: '2024',
    desc: 'Led a 20+ member marketing team for a national e-summit. Scaled event reach by 300% and boosted engagement by 85%.',
  },
  {
    icon: '🌾',
    title: 'Smart India Hackathon',
    year: '2023',
    desc: 'Engineered a smart contract-based agri marketplace that increased farmer profit margins by 50%, deployed as a hackathon finalist.',
  },
  {
    icon: '🤝',
    title: 'AI Team Leadership',
    year: 'Ongoing',
    desc: 'Led AI project teams across multiple client engagements at BluParrot — mentoring interns and delivering production AI solutions on deadline.',
  },
]

const hobbies = [
  {
    emoji: '🏏',
    name: 'Cricket',
    note: 'Playing & following the game — a love for strategy under pressure.',
    color: 'linear-gradient(135deg, #166534 0%, #14532d 100%)',
  },
  {
    emoji: '♟️',
    name: 'Chess',
    note: 'Tactical thinking and patience — the kind that helps in system design too.',
    color: 'linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)',
  },
  {
    emoji: '✈️',
    name: 'Travel',
    note: 'New places, new contexts. Curiosity that does not stay in front of a screen.',
    color: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
  },
  {
    emoji: '🎬',
    name: 'Movies',
    note: 'Great stories, great craft. Cinema as a lens for the human experience.',
    color: 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)',
  },
  {
    emoji: '🎙️',
    name: 'Communication',
    note: 'Writing, presenting, pitching ideas — the craft of making things clear.',
    color: 'linear-gradient(135deg, #0e7490 0%, #164e63 100%)',
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(70px, 11vw, 140px) clamp(20px, 5vw, 64px)',
      scrollMarginTop: 70,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Achievements */}
        <FadeIn delay={0} y={30}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 12 }}>06 / ACHIEVEMENTS</div>
            <h2 className="heading" style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1 }}>Beyond the keyboard</h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginBottom: 80 }}>
          {achievements.map((a, i) => (
            <FadeIn key={i} delay={i * 0.08} y={20}>
              <div
                style={{
                  border: '1px solid var(--brd)', borderRadius: 18, padding: '28px 26px',
                  background: 'var(--panel)', backdropFilter: 'blur(10px)', height: '100%',
                  transition: 'transform .35s, border-color .35s',
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
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 28 }}>{a.icon}</span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                    color: 'var(--accent)', padding: '4px 9px', borderRadius: 6,
                    border: '1px solid var(--brd)', background: 'var(--panel2)',
                  }}>{a.year}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)' }}>{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Hobbies */}
        <FadeIn delay={0.1} y={30}>
          <div style={{ borderTop: '1px solid var(--brd)', paddingTop: 54 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 28 }}>
              WHAT I DO IN MY FREE TIME
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {hobbies.map((h, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.06} y={16}>
                  <div style={{
                    borderRadius: 16, overflow: 'hidden',
                    border: '1px solid var(--brd)', background: 'var(--panel)',
                    transition: 'transform .35s, border-color .35s',
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.transform = ''; el.style.borderColor = ''
                    }}
                  >
                    {/* Visual banner */}
                    <div style={{
                      height: 100, background: h.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 48,
                    }}>{h.emoji}</div>
                    {/* Text */}
                    <div style={{ padding: '16px 18px' }}>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13, fontWeight: 700, marginBottom: 6,
                        background: 'linear-gradient(120deg, var(--accent), var(--accent2))',
                        WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      }}>{h.name}</div>
                      <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--muted)' }}>{h.note}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
