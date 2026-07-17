import styles from './About.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const labelRef = useScrollReveal()
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="about" className={styles.about}>
      <div ref={labelRef} className={`${styles.label} reveal`}>About</div>
      <div className={styles.grid}>
        <div ref={leftRef} className={`${styles.left} reveal`}>
          <h2 className={styles.heading}>
            Building interfaces<br />
            <em>that users enjoy</em>
          </h2>
        </div>
        <div ref={rightRef} className={`${styles.right} reveal reveal-delay-2`}>
          <p>
            I'm a frontend developer based in Lagos, Nigeria. 
            I specialize in building responsive, visually polished web applications 
            using React and modern JavaScript.
          </p>
          <p>
            I care deeply about the details — spacing, typography, motion. I believe good design and clean code 
            are not opposites; they're the same discipline.
          </p>
          <p>
            I'm currently open to remote freelance opportunities and collaborations 
            with teams who value craft.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5</span>
              <span className={styles.statLabel}>Projects Shipped</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>Months Building</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>∞</span>
              <span className={styles.statLabel}>Always Improving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}