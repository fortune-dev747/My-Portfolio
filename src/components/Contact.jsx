import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.label}>Contact</div>
      <h2 className={styles.heading}>
        Got a project? Let's talk<br />
        <em>Now!</em>
      </h2>
      <p className={styles.sub}>
        I'm currently available for remote freelance work and open to new opportunities. 
        If you have a project in mind or just want to say hello, my inbox is always open.
      </p>
      <a href="mailto:fortuneemmanuel18@gmail.com" className={styles.emailBtn}>
        Send Me an Email
      </a>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/fortune-emmanuel-2a8b21235" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span className={styles.dot}>·</span>
        <a href="https://github.com/fortune-dev747" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span className={styles.dot}>·</span>
        <a href="https://wa.me/2349017186911" target="_blank" rel="noopener noreferrer">
          Whatsapp
        </a>
      </div>
      <div className={styles.footer}>
        <span className={styles.bottom}>© 2026 Fortune U. Emmanuel. All rights reserved</span>
        <span>Built with React & Vite</span>
      </div>
    </section>
  )
}
