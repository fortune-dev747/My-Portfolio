import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>FE.</span>
      <ul className={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact" className={styles.cta}>Hire Me</a></li>
      </ul>
    </nav>
  )
}
