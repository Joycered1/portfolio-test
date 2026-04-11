"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/shared/motion";
import styles from "./ArticleGrid.module.css";

type Article = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  date: string;
  gradient: string;
  href: string;
};

const articles: Article[] = [
  {
    id: "01",
    title: "Designing Inclusive KYC",
    summary:
      "An exploration of how to design accessible Know Your Customer verification flows that work for all users — regardless of ability, tech literacy, or document availability. Breaking down common friction points and proposing inclusive design patterns for fintech teams.",
    tags: ["Inclusive Design", "Fintech"],
    date: "Nov 2023",
    gradient: "linear-gradient(135deg, #1a0a3e 0%, #4a1a8a 60%, #2d0d5e 100%)",
    href: "https://medium.com/design-bootcamp/designing-inclusive-kyc-1efd4c3cacfc",
  },
  {
    id: "02",
    title: "How Do We Fix Seed Phrase Management?",
    summary:
      "A critical look at the UX challenges of seed phrase backup in non-custodial crypto wallets — and why most designs fail mainstream users. Exploring design patterns that balance cryptographic security with everyday usability for the next billion Web3 users.",
    tags: ["Web3", "UX Research"],
    date: "Sep 2023",
    gradient: "linear-gradient(135deg, #0d1b3e 0%, #1a3a7a 60%, #0f2557 100%)",
    href: "https://medium.com/design-bootcamp/how-do-we-fix-seed-phrase-management-when-creating-a-new-non-custiodial-wallet-95f0c95f5575",
  },
  {
    id: "03",
    title: "Crazy 8s: Design Thinking",
    summary:
      "A practical walkthrough of the Crazy 8s ideation method — a fast-paced design sprint technique where you sketch 8 ideas in 8 minutes. Covering when to use it, how to run it with a team, and how it leads to more creative, unexpected design decisions.",
    tags: ["Design Thinking", "Process"],
    date: "Jul 2023",
    gradient: "linear-gradient(135deg, #0a2a1a 0%, #0f4a2e 60%, #082a1a 100%)",
    href: "https://medium.com/design-bootcamp/crazy-8s-design-thinking-c613a1fde033",
  },
  {
    id: "04",
    title: "Design System: Color Tokens, Variables & Styles",
    summary:
      "A comprehensive guide to structuring color tokens, Figma variables, and styles within a design system — covering semantic layering, naming conventions, and how to bridge the gap between design and development for scalable, theme-ready products.",
    tags: ["Design Systems", "Figma"],
    date: "May 2023",
    gradient: "linear-gradient(135deg, #2a1208 0%, #6a3010 60%, #3d1a06 100%)",
    href: "https://medium.com/design-bootcamp/design-system-color-tokens-variables-and-styles-afb6c8583126",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.div className={styles.cardWrapper} variants={itemVariants}>
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        aria-label={`Read ${article.title} on Medium`}
      >
        <div
          className={styles.thumbnail}
          style={{ background: article.gradient }}
        >
          <span className={styles.pubBadge}>Design Bootcamp</span>
          <span className={styles.thumbLabel}>{article.title}</span>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.meta}>
            <div className={styles.tags}>
              {article.tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
            <span className={styles.date}>{article.date}</span>
          </div>
          <h3 className={styles.cardTitle}>{article.title}</h3>
          <p className={styles.summary}>{article.summary}</p>
          <span className={styles.readMore}>
            Read More
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 12L12 2M5 2h7v7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </a>
    </motion.div>
  );
}

export default function ArticleGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <FadeIn className={styles.header}>
          <div>
            <span className={styles.label}>Writing</span>
            <h1 className={styles.sectionTitle}>
              Articles &amp;
              <br />
              Insights
            </h1>
            <p className={styles.sectionSub}>
              Thoughts on design process, inclusive UX, design systems, and the
              craft of building products people love.
            </p>
          </div>
          <a
            href="https://medium.com/@missjoycered"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAll}
          >
            View all on Medium
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 12L12 2M5 2h7v7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </FadeIn>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </motion.div>

        <FadeIn delay={0.3} className={styles.cta}>
          <p className={styles.ctaText}>
            All articles are published on Medium&apos;s Design Bootcamp
            publication.
          </p>
          <a
            href="https://medium.com/@missjoycered"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Read all articles on Medium
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 12L12 2M5 2h7v7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
