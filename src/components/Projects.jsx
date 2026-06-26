import styles from './Projects.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    num: '01',
    title: 'Nexus Gadgets',
    subtitle: 'Local E-commerce Store',
    desc: 'A fully functional Apple products e-commerce store built with React and Vite. Features product listings, cart management, and a sleek dark UI built with Tailwind and CSS Modules. Integrated with DummyJSON API for dynamic product data.',
    tags: ['React', 'Vite', 'CSS Modules', 'API Integration', 'Tailwind CSS'],
    live: 'https://capstone-project-2-sooty.vercel.app',
    github: '#',
  },
  {
    num: '02',
    title: 'Nexus',
    subtitle: 'Movie Streaming UI',
    desc: 'A responsive movie streaming platform UI built with HTML, CSS, and JavaScript. Features a cinematic dark-themed interface with dynamic content rendering and smooth user interactions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    live: 'https://movie-streaming-design.onrender.com',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.label}>Projects</div>
      <h2 className={styles.heading}>Selected Work</h2>
      <div className={styles.list}>
        {projects.map((p) => (
          <div key={p.num} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.num}>{p.num}</span>
              <div className={styles.cardLinks}>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Live ↗
                </a>
              </div>
            </div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.subtitle}>{p.subtitle}</p>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
