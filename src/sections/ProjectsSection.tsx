import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/ui/FadeIn'
import LiveProjectButton from '../components/ui/LiveProjectButton'

interface Project {
  number: string
  category: string
  name: string
  col1: [string, string]
  col2: string
}

const projects: Project[] = [
  {
    number: '01',
    category: 'Personal',
    name: 'MedReel',
    col1: [
      'https://placehold.co/800x460/111111/444444?text=MedReel+UI',
      'https://placehold.co/800x560/0d0d0d/333333?text=MedReel+Flow',
    ],
    col2: 'https://placehold.co/800x900/0a0a0a/2a2a2a?text=MedReel',
  },
  {
    number: '02',
    category: 'Personal',
    name: 'LastMinutePrep',
    col1: [
      'https://placehold.co/800x460/111111/444444?text=LMP+Dashboard',
      'https://placehold.co/800x560/0d0d0d/333333?text=LMP+Quiz',
    ],
    col2: 'https://placehold.co/800x900/0a0a0a/2a2a2a?text=LastMinutePrep',
  },
  {
    number: '03',
    category: 'Internship',
    name: 'BluParrot',
    col1: [
      'https://placehold.co/800x460/111111/444444?text=BluParrot+Agent',
      'https://placehold.co/800x560/0d0d0d/333333?text=BluParrot+Pipeline',
    ],
    col2: 'https://placehold.co/800x900/0a0a0a/2a2a2a?text=BluParrot',
  },
]

const totalCards = projects.length

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} className="h-[85vh] relative">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          willChange: 'transform',
          background: '#0C0C0C',
        }}
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2rem, 8vw, 100px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <span
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA]"
              style={{ opacity: 0.5 }}
            >
              {project.category}
            </span>
            <span
              className="font-black uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
            >
              {project.name}
            </span>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left column — 2 stacked images */}
          <div className="w-[40%] flex flex-col gap-3">
            <img
              src={project.col1[0]}
              alt=""
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt=""
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right column — 1 tall image */}
          <div className="w-[60%]" style={{ height: 'clamp(290px, 38vw, 570px)' }}>
            <img
              src={project.col2}
              alt=""
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
