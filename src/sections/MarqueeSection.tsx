const tech = [
  'PyTorch', 'LangChain', 'OpenAI API', 'RAG', 'FastAPI', 'React', 'TypeScript',
  'LLMs', 'AI Agents', 'Python', 'Whisper', 'Vite', 'Docker', 'PostgreSQL',
  'Framer Motion', 'Node.js', 'REST APIs', 'GPT-4', 'Fine-tuning', 'Prompt Engineering',
]
const techLoop = [...tech, ...tech]

export default function MarqueeSection() {
  return (
    <div style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--brd2)', borderBottom: '1px solid var(--brd2)',
      padding: '22px 0', overflow: 'hidden', background: 'var(--panel2)',
    }}>
      <div className="animate-marquee" style={{ display: 'flex', gap: 56, width: 'max-content' }}>
        {techLoop.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 15,
            letterSpacing: '.02em', color: 'var(--muted)', whiteSpace: 'nowrap',
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
