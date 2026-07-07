import styles from './Skills.module.css'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'HTML5 & CSS3', level: 93 },
  { name: 'CSS Modules', level: 82 },
  { name: 'Vite', level: 90 },
  { name: 'Git & GitHub', level: 95 },
  { name: 'Responsive Web Design', level: 87 },
  { name: 'UI Design', level: 78 },
  { name: 'Tailwind', level: 88 },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.label}>Skills</div>
      <h2 className={styles.heading}>What I Currently Work With</h2>
      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.item}>
            <div className={styles.itemTop}>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.level}>{s.level}%</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: `${s.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
