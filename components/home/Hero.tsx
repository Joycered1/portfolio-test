"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
  };
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* ── left: text ── */}
        <div className={styles.content}>
          <motion.div className={styles.badge} {...fadeUp(0.1)}>
            <span className={styles.dot} />
            Available for new projects
          </motion.div>

          <motion.h1 className={styles.heading} {...fadeUp(0.2)}>
            Joyce
            <br />
            Eboh<span className={styles.accent}>.</span>
          </motion.h1>

          <motion.div className={styles.meta} {...fadeUp(0.3)}>
            <span className={styles.role}>Senior Product Designer</span>
            <span className={styles.divider} />
            <span className={styles.industries}>Fintech · SaaS · Edtech</span>
          </motion.div>

          <motion.p className={styles.tagline} {...fadeUp(0.38)}>
            I design digital products that solve real problems — from ideation
            and research through to launch and iteration.
          </motion.p>

          <motion.div className={styles.ctas} {...fadeUp(0.46)}>
            <a href="#work" className={styles.btnPrimary}>
              View my work
              <svg
                className={styles.arrow}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1/view"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              Resume
              <svg
                className={styles.arrow}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2.5 11.5l9-9M5 2.5h6v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* ── right: profile photo ── */}
        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
        >
          <div className={styles.photoRing}>
            <Image
              src="https://cdn.dribbble.com/users/6610172/avatars/large/2db39199c45ada1021a713f8794812d8.jpg?1681506679"
              alt="Joyce Eboh — Senior Product Designer"
              width={260}
              height={260}
              priority
              className={styles.photo}
            />
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className={styles.scroll} aria-hidden>
        <span className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
