export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export interface ProjectItem {
  title: string
  tech: string[]
  period: string
  bullets: string[]
  demoLabel: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
  score: string
  scoreLabel: string
}

export interface AchievementItem {
  title: string
  event: string
  detail: string
}

export interface CertificationItem {
  name: string
  issuer: string
}

export const experiences: ExperienceItem[] = [
  {
    company: 'BluParrot',
    role: 'AI Engineering Intern',
    period: 'Dec 2025 – Present',
    location: 'Gurgaon',
    bullets: [
      "Engineered RAG pipelines converting expert video transcripts into knowledge graphs using dual-vector embeddings (SparqNow, UK client).",
      "Designed voice agents using Vapi, Unleash, and Milli's platforms for Indian and international clients.",
      "Developed AI legal drafting workflows using SaulLM + Claude APIs, generating 500+ jurisdiction-compliant documents while reducing drafting time by 60%.",
      "Deployed multilingual advisory systems using satellite and IoT data, reducing response latency by 65% for 10,000+ farmers.",
    ],
  },
  {
    company: 'Zyod',
    role: 'AI Intern',
    period: 'Apr 2025 – Sep 2025',
    location: 'Gurgaon, India',
    bullets: [
      "Automated cleaning pipelines across 10,000+ production records, reducing data noise by 30% and improving forecasting reliability.",
      "Constructed ELT workflows and Power BI dashboards tracking 10+ KPIs, accelerating business decisions by 40%.",
      "Refined LLM prompt workflows, reducing incorrect AI outputs by 35% and iteration cycles by 50%.",
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'MedReel',
    tech: ['Python', 'Streamlit', 'Whisper', 'Groq API', 'PubMed API'],
    period: 'Aug 2025 – Sep 2025',
    bullets: [
      "Multimodal AI system that transcribes Instagram Reels and verifies medical claims against PubMed research in real time.",
      "Automated 100+ claim verifications/session at 88% precision, reducing manual research time by 70%.",
      "Improved uptime by 40% through multi-API fallback routing and optimised inference workflows.",
    ],
    demoLabel: 'Live Demo',
  },
  {
    title: 'LastMinutePrep',
    tech: ['LangChain', 'LangGraph', 'LLaMA 3', 'Gemini API', 'FAISS'],
    period: 'Jun 2025 – Jul 2025',
    bullets: [
      "6-in-1 RAG-based study assistant generating quizzes, summaries, cheat sheets, mnemonics, and document Q&A.",
      "Retrieved responses across 500+ document chunks in under one second using FAISS vector search.",
      "Enhanced AI response accuracy by 45% through grounded retrieval and streamlined generation pipelines.",
    ],
    demoLabel: 'Live Demo',
  },
]

export const skillGroups: SkillGroup[] = [
  { category: 'Programming', skills: ['Python', 'SQL'] },
  {
    category: 'Machine Learning',
    skills: ['NLP', 'Neural Networks', 'Scikit-learn', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation', 'Reinforcement Learning'],
  },
  {
    category: 'Generative AI / LLM',
    skills: ['RAG', 'LangChain', 'LangGraph', 'Transformers', 'Hugging Face', 'Prompt Engineering', 'LLM Application Development', 'Autonomous AI Agents', 'Agentic Workflows', 'Vector Databases'],
  },
  { category: 'Visualization', skills: ['Matplotlib', 'Seaborn', 'Power BI'] },
  {
    category: 'MLOps / Deployment',
    skills: ['FastAPI', 'Databricks', 'AWS (S3, Lambda, API Gateway)', 'Azure', 'GCP'],
  },
  {
    category: 'Automation',
    skills: ['REST APIs', 'Webhooks', 'Web Scraping', 'Selenium', 'N8N', 'FlowiseAI'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Claude Code', 'Cursor', 'GitHub Copilot', 'Pandas', 'NumPy'],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Bennett University',
    degree: 'B.Tech in Computer Science',
    period: 'Jun 2022 – Jun 2026',
    location: 'Greater Noida, UP',
    score: '8.79',
    scoreLabel: 'CGPA',
  },
  {
    institution: 'Alwar Public School',
    degree: 'CBSE Class XII',
    period: '2021',
    location: 'Alwar, Rajasthan',
    score: '91.2%',
    scoreLabel: 'Percentage',
  },
]

export const achievements: AchievementItem[] = [
  {
    title: '2nd Runner-Up',
    event: 'National Entrepreneur Challenge — IIT Bombay (2024)',
    detail: 'Competed nationally among top engineering colleges.',
  },
  {
    title: 'Marketing Head',
    event: 'BENNOVATE 2.0 E-Summit',
    detail: 'Scaled engagement by 85% for the annual entrepreneurship summit.',
  },
  {
    title: 'Smart India Hackathon',
    event: 'National Hackathon',
    detail: 'Built a blockchain-based agri marketplace for rural farmers.',
  },
]

export const certifications: CertificationItem[] = [
  { name: 'Databases & SQL', issuer: 'IBM' },
  { name: 'Hyperparameter Tuning & Optimization', issuer: 'DeepLearning.AI' },
  { name: 'Supervised Machine Learning', issuer: 'IBM' },
]
