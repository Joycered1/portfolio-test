import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/motion";
import styles from "./About.module.css";

const stats = [
  { num: "5+", label: "Years of design experience" },
  { num: "20+", label: "Products shipped" },
  { num: "4", label: "Industries served" },
  { num: "3+", label: "Countries reached" },
];

const industries = [
  { name: "Fintech", pct: 45 },
  { name: "SaaS / Productivity", pct: 30 },
  { name: "Edtech", pct: 15 },
  { name: "Web3 / Crypto", pct: 10 },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* left: bio */}
          <FadeIn direction="left">
            <span className={styles.label}>About me</span>
            <h2 className={styles.title}>
              Design that
              <br />
              drives outcomes
            </h2>

            <div className={styles.bio}>
              <p>
                I&apos;m <strong>Joyce Eboh</strong>, a senior product designer
                working at the intersection of business strategy and
                user-centred design. I provide business solutions through{" "}
                <strong>design thinking and methodology</strong>.
              </p>
              <p>
                With hands-on experience leading and collaborating with
                cross-functional teams, I develop, launch, and manage products
                for diverse audiences across different countries — from
                ideation to post-launch iterations.
              </p>
              <p>
                My background spans freelancing and working at a creative
                agency, giving me a broad skill set and a deep understanding
                of user-centric design across{" "}
                <strong>fintech, SaaS, and edtech</strong>.
              </p>
            </div>

            <div className={styles.actions}>
              <a
                href="https://linkedin.com/in/joycered"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                LinkedIn
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path
                    d="M2 11L11 2M4.5 2H11v6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://medium.com/@missjoycered"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                Read articles
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path
                    d="M2 11L11 2M4.5 2H11v6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* right: stats */}
          <FadeIn direction="right" delay={0.1} className={styles.right}>
            <StaggerContainer className={styles.statGrid}>
              {stats.map((s) => (
                <StaggerItem key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.25}>
              <div className={styles.industries}>
                <span className={styles.industriesLabel}>Industry focus</span>
                <div className={styles.industryList}>
                  {industries.map((ind) => (
                    <div key={ind.name} className={styles.industryRow}>
                      <span className={styles.industryName}>{ind.name}</span>
                      <div className={styles.industryBar}>
                        <div
                          className={styles.industryFill}
                          style={{ width: `${ind.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
