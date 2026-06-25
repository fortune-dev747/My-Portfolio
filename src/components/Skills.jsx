import styles from './Skills.module.css'

const skills = [
  { name: 'React', level: 75 },
  { name: 'JavaScript', level: 78 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'CSS Modules', level: 82 },
  { name: 'Vite', level: 70 },
  { name: 'Git & GitHub', level: 95 },
  { name: 'Responsive Design', level: 80 },
  { name: 'UI Design', level: 60 },
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
