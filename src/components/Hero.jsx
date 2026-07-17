import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const lineRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lineRef.current) {
        lineRef.current.classList.add(styles.drawn)
      }
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.tag}>Available for work</div>
        <h1 className={styles.name}>
          Fortune
          <span className={styles.nameAccent}> U. Emmanuel</span>
          <span className={styles.line} ref={lineRef}></span>
        </h1>
        <p className={styles.title}>Frontend Developer</p>
        <p className={styles.sub}>
          I build clean, responsive web experiences with React and JavaScript whilst
          turning ideas into interfaces that feel as good as they look.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>View My Work</a>
          <a href="#contact" className={styles.secondary}>Connect With Me</a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img src="./mypicture.jpg" alt="my picture" className={styles.image} />
      </div>

      <div className={styles.scroll}>
        <span></span>
      </div>
    </section>
  )
}