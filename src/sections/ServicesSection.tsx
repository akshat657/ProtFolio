import FadeIn from '../components/ui/FadeIn'

const services = [
  {
    number: '01',
    name: 'AI / LLM Engineering',
    description: 'Building products powered by large language models — intelligent assistants, context-aware chatbots, RAG pipelines, and generative features that actually ship.',
  },
  {
    number: '02',
    name: 'Full-Stack Development',
    description: 'End-to-end web applications with React, TypeScript, and modern backend tooling — fast, clean, and production-ready from day one.',
  },
  {
    number: '03',
    name: 'Automation & Agents',
    description: 'Designing autonomous AI agent workflows and automation pipelines that connect tools, eliminate repetitive tasks, and scale intelligently.',
  },
  {
    number: '04',
    name: 'Product Prototyping',
    description: 'Rapid ideation to working prototype — validating ideas fast with real, functional builds before committing to full development cycles.',
  },
  {
    number: '05',
    name: 'API Integration',
    description: 'Connecting AI APIs, third-party services, and data sources into cohesive, reliable systems with clean interfaces and solid error handling.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#ffffff' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div
              className="flex items-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i > 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="font-black shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {service.number}
              </span>
              <div className="flex flex-col justify-center gap-2 pt-2">
                <p
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </p>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
