import { useState, useEffect, useCallback } from 'react'
import FadeIn from '../components/ui/FadeIn'

const projects = [
  {
    no: '001', year: '2025',
    name: 'MedReel — Health Claim Verifier',
    desc: 'Transcribes Instagram Reels and fact-checks health claims against PubMed research papers in real time. Multimodal pipeline using Whisper for audio and Groq API for instant inference.',
    tags: ['Whisper', 'Groq API', 'PubMed API', 'Multimodal', 'Python', 'React'],
    stack: 'python · whisper · groq',
    metric: '88%', metricLabel: 'claim verification precision',
    demo: 'https://medreel-nine.vercel.app/',
    github: 'https://github.com/akshat657/Instagram_Reel_checker',
    images: ['/medreel-hero.png', '/medreel-analysis.png', '/medreel-pipeline.png', '/medreel-results.png', '/medreel-transcribe.png'],
  },
  {
    no: '002', year: '2025',
    name: 'LastMinutePrep — Study Assistant',
    desc: '6-in-1 RAG-powered study tool that generates quizzes, cheat sheets, summaries, mnemonics, and Q&A from uploaded documents. Answers retrieved in under one second via FAISS vector search.',
    tags: ['LangChain', 'LangGraph', 'LLaMA 3', 'FAISS', 'Gemini API', 'React'],
    stack: 'python · langgraph · faiss',
    metric: '60%', metricLabel: 'less study time per session',
    demo: 'https://lastminuteprep-three.vercel.app/',
    github: 'https://github.com/akshat657/New-folder--2-',
    images: ['/lastminuteprep.png', '/lastminuteprep1.png', '/lastminuteprep2.png'],
  },
  {
    no: '003', year: '2024',
    name: 'ChurnGuess — Customer Retention Predictor',
    desc: 'Deep learning application that predicts customer churn probability from financial and behavioural signals. ANN model built with TensorFlow and served through an interactive React inference interface.',
    tags: ['TensorFlow', 'Keras', 'Neural Networks', 'Scikit-learn', 'React', 'Python'],
    stack: 'python · tensorflow · react',
    metric: 'ANN', metricLabel: 'binary classifier',
    demo: null,
    github: 'https://github.com/akshat657/Customer-Churn-Prediction-App',
    images: [] as string[],
  },
  {
    no: '004', year: '2024',
    name: 'LiveTracker — Real-Time Weather Dashboard',
    desc: 'Live weather intelligence dashboard connecting WeatherAPI.com to Power BI via JSON API. Real-time refresh, dynamic KPIs, and colour-coded alerts for extreme weather and air quality events.',
    tags: ['Power BI', 'REST API', 'Real-time Data', 'Data Engineering', 'KPI Design'],
    stack: 'power bi · weatherapi · json',
    metric: 'live', metricLabel: 'streaming weather data',
    demo: null,
    github: 'https://github.com/akshat657/LiveTracker.Weather',
    images: ['/Weather.png'],
  },
  {
    no: '005', year: '2024',
    name: 'Crime Intelligence System',
    desc: 'End-to-end data science project on an Indian crime dataset (2020–2024). Built a full ML pipeline with leakage prevention, feature engineering, and comparison of logistic regression, decision trees, and random forests to predict case closure.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'EDA', 'Feature Engineering'],
    stack: 'python · scikit-learn · pandas',
    metric: '40K+', metricLabel: 'crime records analysed',
    demo: null,
    github: 'https://github.com/akshat657/crime-intelligence-system',
    images: [] as string[],
  },
]

function Lightbox({ images, idx, onClose, onPrev, onNext }: {
  images: string[]
  idx: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.93)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* Image */}
      <img
        src={images[idx]}
        alt={`screenshot ${idx + 1}`}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '88vw', maxHeight: '86vh',
          objectFit: 'contain', borderRadius: 12, display: 'block',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
        }}
      />

      {/* Counter */}
      <div style={{
        position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)',
        fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'rgba(255,255,255,0.55)',
      }}>
        {idx + 1} / {images.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 22, right: 26,
          width: 40, height: 40, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.18)',
          background: 'rgba(255,255,255,0.08)',
          color: '#fff', fontSize: 18, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>

      {/* Prev arrow */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); onPrev() }}
          style={{
            position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)',
            width: 48, height: 48, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff', fontSize: 22, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .2s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.18)')}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')}
        >&#8592;</button>
      )}

      {/* Next arrow */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); onNext() }}
          style={{
            position: 'absolute', right: 22, top: '50%', transform: 'translateY(-50%)',
            width: 48, height: 48, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff', fontSize: 22, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .2s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.18)')}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')}
        >&#8594;</button>
      )}
    </div>
  )
}

function ImageCarousel({ images, name, metric, metricLabel, stack, onImageClick }: {
  images: string[]
  name: string
  metric: string
  metricLabel: string
  stack: string
  onImageClick: (idx: number) => void
}) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (images.length <= 1 || paused) return
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 2800)
    return () => clearInterval(t)
  }, [images.length, paused])

  if (images.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: 'clamp(26px, 3vw, 44px)' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)' }}>{stack}</span>
        </div>
        <div>
          <div className="heading" style={{
            fontSize: 'clamp(34px, 6vw, 58px)', lineHeight: 1,
            background: 'linear-gradient(120deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
          }}>{metric}</div>
          <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8 }}>{metricLabel}</div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image stack */}
      <div style={{ position: 'relative', flex: 1, minHeight: 200, overflow: 'hidden' }}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${name} screenshot ${i + 1}`}
            onClick={() => onImageClick(i)}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              opacity: i === idx ? 0.9 : 0,
              transition: 'opacity 0.65s ease',
              display: 'block',
              cursor: 'zoom-in',
            }}
          />
        ))}

        {/* Click to expand hint */}
        <div style={{
          position: 'absolute', top: 10, right: 10, zIndex: 2,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          color: 'rgba(255,255,255,0.5)',
          background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)',
          padding: '3px 8px', borderRadius: 6, pointerEvents: 'none',
        }}>click to expand</div>

        {/* Bottom gradient fade */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent 45%, color-mix(in srgb, var(--bg) 85%, transparent) 100%)',
        }} />

        {/* Dot indicators */}
        {images.length > 1 && (
          <div style={{
            position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: 6, zIndex: 2,
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: i === idx ? 20 : 6, height: 6, borderRadius: 3,
                  border: 'none', padding: 0, cursor: 'pointer',
                  background: i === idx ? 'var(--accent)' : 'rgba(255,255,255,0.28)',
                  transition: 'width 0.35s ease, background 0.35s ease',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        )}

        {/* Arrow nav on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }}
              style={{
                position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
                zIndex: 3, width: 32, height: 32, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)',
                color: '#fff', fontSize: 15, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >&#8592;</button>
            <button
              onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }}
              style={{
                position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                zIndex: 3, width: 32, height: 32, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)',
                color: '#fff', fontSize: 15, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >&#8594;</button>
          </>
        )}
      </div>

      {/* Metric bar */}
      <div style={{ padding: 'clamp(16px, 2vw, 24px)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div>
            <div className="heading" style={{
              fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1,
              background: 'linear-gradient(120deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>{metric}</div>
            <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 5 }}>{metricLabel}</div>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)' }}>{stack}</span>
        </div>
      </div>
    </div>
  )
}

export default function WorkSection() {
  const [lightbox, setLightbox] = useState<{ images: string[], idx: number } | null>(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevImage = useCallback(() => setLightbox(lb => lb ? { ...lb, idx: (lb.idx - 1 + lb.images.length) % lb.images.length } : null), [])
  const nextImage = useCallback(() => setLightbox(lb => lb ? { ...lb, idx: (lb.idx + 1) % lb.images.length } : null), [])

  return (
    <section id="work" style={{
      position: 'relative', zIndex: 1,
      padding: 'clamp(70px, 11vw, 140px) clamp(20px, 5vw, 64px)',
      scrollMarginTop: 70,
    }}>
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          idx={lightbox.idx}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn delay={0} y={30}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '.1em', color: 'var(--accent)', marginBottom: 12 }}>01 / SELECTED WORK</div>
              <h2 className="heading" style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', lineHeight: 1 }}>Personal Projects</h2>
            </div>
            <p style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.6, color: 'var(--muted)' }}>
              Projects built to solve real problems — shipped and in use.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {projects.map((p, i) => (
            <FadeIn key={p.no} delay={i * 0.08} y={30}>
              <div
                className="work-card-grid"
                style={{
                  display: 'grid', gridTemplateColumns: '1.1fr 1fr',
                  border: '1px solid var(--brd)', borderRadius: 22, overflow: 'hidden',
                  background: 'var(--panel)', backdropFilter: 'blur(10px)',
                  transition: 'transform .4s cubic-bezier(.2,.7,.3,1), border-color .4s, box-shadow .4s',
                  minHeight: 320,
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
                {/* Left: info */}
                <div style={{ padding: 'clamp(26px, 3vw, 44px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--accent)' }}>{p.no}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, letterSpacing: '.04em', color: 'var(--muted)' }}>{p.year}</span>
                    </div>
                    <h3 className="heading" style={{ fontSize: 'clamp(20px, 3vw, 34px)', lineHeight: 1.05, marginBottom: 14 }}>{p.name}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 460 }}>{p.desc}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {p.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '.03em',
                          color: 'var(--text)', padding: '5px 10px', borderRadius: 7,
                          border: '1px solid var(--brd)', background: 'var(--panel2)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{
                          textDecoration: 'none', fontSize: 12, fontWeight: 700,
                          fontFamily: "'JetBrains Mono', monospace", letterSpacing: '.03em',
                          color: '#04060c', padding: '7px 14px', borderRadius: 8,
                          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                        }}>Live Demo &rarr;</a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                          textDecoration: 'none', fontSize: 12, fontWeight: 600,
                          fontFamily: "'JetBrains Mono', monospace", letterSpacing: '.03em',
                          color: 'var(--text)', padding: '7px 14px', borderRadius: 8,
                          border: '1px solid var(--brd)', background: 'var(--panel2)',
                        }}>GitHub &uarr;</a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: carousel */}
                <div className="work-card-right" style={{
                  borderLeft: '1px solid var(--brd)', overflow: 'hidden',
                  background: 'linear-gradient(150deg, color-mix(in srgb, var(--accent) 16%, transparent), color-mix(in srgb, var(--accent2) 8%, transparent))',
                }}>
                  <ImageCarousel
                    images={p.images}
                    name={p.name}
                    metric={p.metric}
                    metricLabel={p.metricLabel}
                    stack={p.stack}
                    onImageClick={(imgIdx) => setLightbox({ images: p.images, idx: imgIdx })}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
