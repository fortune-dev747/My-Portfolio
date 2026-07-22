import styles from './Projects.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    num: '01',
    title: 'NEXUS NEWS',
    subtitle: 'News Website',
    desc: 'News platform built from custom Figma design. Completed a full responsiveness pass across multiple breakpoints for a consistent layout on all devices.',
    tags: ['React', 'Vite', 'CSS Modules', 'Figma-to-Code', 'Responsive Web Design'],
    live: 'https://news-web-project-kohl.vercel.app/',
    github: '#',
  },
  {
    num: '02',
    title: 'Nexus Gadgets',
    subtitle: 'Local E-commerce Store',
    desc: 'A fully functional Apple products e-commerce store built with React and Vite. Features product listings, cart management, and a sleek dark UI built with Tailwind and CSS Modules. Integrated with DummyJSON API for dynamic product data.',
    tags: ['React', 'Vite', 'CSS Modules', 'API Integration', 'Tailwind CSS'],
    live: 'https://capstone-project-2-sooty.vercel.app',
    github: '#',
  },
  {
    num: '03',
    title: 'Nexus',
    subtitle: 'Movie Streaming UI',
    desc: 'A responsive movie streaming platform UI built with HTML5, CSS3, and JavaScript. Features a cinematic dark-themed interface with dynamic content rendering and smooth user interactions.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    live: 'https://movie-streaming-design.onrender.com',
    github: '#',
  },
  {
    num: '04',
    title: 'Nexus QR',
    subtitle: 'QR Code Generator',
    desc: 'A responsive web application that converts text or URLs into downloadeable QR codes instantly built with HTML5, CSS3, and JavaScript. I implemented a dynamic QR code generation feature and ensured input validation and error handling with download functionality. Designed a clean UI with modern CSS styling and also made a responsive layout across all devices.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    live: 'https://qr-code-generator-app-qsbi.onrender.com',
    github: '#',
  },
  {
    num: '05',
    title: 'Portfolio Website',
    subtitle: 'Personal Portfolio',
    desc: 'My portfolio web is a showcase of my work and skills built with a dark, yellow premium visual direction and scroll-triggered reveal animations powered by a custom useScrollReveal React hook.',
    tags: ['React', 'Vite', 'Custom Hooks', ],
    live: 'https://my-portfolio-pink-two-47.vercel.app/',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.label}>Projects</div>
      <h2 className={styles.heading}>Selected Works</h2>
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
