import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/motion";
import styles from "./Contact.module.css";

const socials = [
  { label: "Dribbble", href: "https://dribbble.com/Joycered" },
  { label: "Behance", href: "https://behance.net/ebohjoycengozi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/joycered" },
  { label: "Medium", href: "https://medium.com/@missjoycered" },
  { label: "Twitter", href: "https://twitter.com/JoyceEboh" },
  { label: "Instagram", href: "https://instagram.com/joycered1" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <FadeIn className={styles.inner}>
          <span className={styles.label}>Get in touch</span>

          <h2 className={styles.title}>
            Let&apos;s work
            <br />
            together
          </h2>

          <p className={styles.sub}>
            Have a project in mind or want to chat about design? I&apos;d love
            to hear from you — I&apos;m open to freelance, contract, and
            full-time opportunities.
          </p>

          <a href="mailto:missjoycered@gmail.com" className={styles.email}>
            missjoycered@gmail.com
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M4 16L16 4M7 4h9v9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className={styles.divider} />

          <p className={styles.socialLabel}>Find me online</p>

          <StaggerContainer className={styles.socials}>
            {socials.map((s) => (
              <StaggerItem key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {s.label}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  );
}
