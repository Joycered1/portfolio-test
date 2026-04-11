"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/shared/motion";
import styles from "./NewsGrid.module.css";

type NewsItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  gradient: string;
  label: string;
  href: string;
};

const newsItems: NewsItem[] = [
  {
    id: "01",
    title: "Becoming a City Chapter Lead at Untitled Designers",
    description:
      "Thrilled to step into the role of Abuja City Chapter Lead at Untitled Designers — building and nurturing a community of designers across the city, organising meetups, and championing design education in Abuja.",
    category: "Community Leadership",
    date: "May 2023",
    gradient: "linear-gradient(135deg, #3d0d6e 0%, #7a1a9e 50%, #5c1080 100%)",
    label: "ABUJA CITY CHAPTER LEAD",
    href: "https://www.linkedin.com/in/joycered/recent-activity/all/",
  },
  {
    id: "02",
    title: "Becoming a Mentor at Tech4Dev",
    description:
      "Honoured to join Tech4Dev's mentorship programme — guiding aspiring designers through the 'From Bootcamps to Landing Gigs and Jobs 1.0' initiative, sharing insights on breaking into the design industry.",
    category: "Mentorship",
    date: "May 2023",
    gradient: "linear-gradient(135deg, #0d1e3e 0%, #1a4a8a 50%, #0f2e5e 100%)",
    label: "TECH4DEV MENTOR",
    href: "https://www.linkedin.com/in/joycered/recent-activity/all/",
  },
  {
    id: "03",
    title: "Speaking at Tech4Dev: From Bootcamps to Landing Gigs and Jobs",
    description:
      "Had the privilege of speaking at Tech4Dev's career event — sharing my journey from design bootcamp to professional product designer, and what it really takes to land your first design role in tech.",
    category: "Speaking",
    date: "Apr 2023",
    gradient: "linear-gradient(135deg, #0a1e2e 0%, #0f3d5e 50%, #082a42 100%)",
    label: "KEYNOTE SPEAKER",
    href: "https://www.linkedin.com/in/joycered/recent-activity/all/",
  },
  {
    id: "04",
    title: "Writing for Medium's Design Bootcamp Publication",
    description:
      "Excited to share my design knowledge with the global design community through Medium's Design Bootcamp — writing about inclusive design, design systems, and UX methodology to give back to the discipline.",
    category: "Writing",
    date: "Mar 2023",
    gradient: "linear-gradient(135deg, #1a1a08 0%, #3a3a10 50%, #242406 100%)",
    label: "DESIGN BOOTCAMP WRITER",
    href: "https://www.linkedin.com/in/joycered/recent-activity/all/",
  },
  {
    id: "05",
    title: "Shipped Timon — Cross-Border Payment App",
    description:
      "Proud to have shipped the MVP of Timon, a fintech app helping Nigerians spend and manage money abroad. Designed end-to-end from research through to Figma prototype delivery. The product reached 30,000+ organic users within a year.",
    category: "Product Launch",
    date: "Jan 2023",
    gradient: "linear-gradient(135deg, #0d1b3e 0%, #1a3a7a 60%, #0f2557 100%)",
    label: "PRODUCT SHIPPED",
    href: "https://www.linkedin.com/in/joycered/recent-activity/all/",
  },
  {
    id: "06",
    title: "Joined Untitled Designers Community",
    description:
      "Excited to become a member of Untitled Designers — a vibrant community for creatives focused on building skills, sharing knowledge, and elevating the design practice across Africa.",
    category: "Community",
    date: "Oct 2022",
    gradient: "linear-gradient(135deg, #1e0a2a 0%, #4a1a6e 50%, #2e0a48 100%)",
    label: "COMMUNITY MEMBER",
    href: "https://www.linkedin.com/in/joycered/recent-activity/all/",
  },
  {
    id: "07",
    title: "Launched DesignPal.org",
    description:
      "Launched DesignPal.org — a curated resource hub for designers looking for tools, articles, and references all in one place. Built with clean information architecture and a minimal design to keep the focus on the content.",
    category: "Launch",
    date: "Aug 2022",
    gradient: "linear-gradient(135deg, #0a2a1a 0%, #0f4a2e 60%, #082a1a 100%)",
    label: "PRODUCT LAUNCH",
    href: "https://www.linkedin.com/in/joycered/recent-activity/all/",
  },
  {
    id: "08",
    title: "5+ Years as a Product Designer",
    description:
      "Reflecting on five years as a product designer — from early freelance projects to shipping products across fintech, SaaS, and edtech that have reached users across multiple countries. Grateful for every challenge and collaboration along the way.",
    category: "Milestone",
    date: "Jun 2022",
    gradient: "linear-gradient(135deg, #2a1208 0%, #6a3010 60%, #3d1a06 100%)",
    label: "CAREER MILESTONE",
    href: "https://www.linkedin.com/in/joycered/recent-activity/all/",
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

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <motion.div className={styles.cardWrapper} variants={itemVariants}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        aria-label={`View ${item.title} on LinkedIn`}
      >
        <div
          className={styles.thumbnail}
          style={{ background: item.gradient }}
        >
          <span className={styles.categoryBadge}>{item.category}</span>
          <span className={styles.thumbLabel}>{item.label}</span>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.meta}>
            <span className={styles.date}>{item.date}</span>
          </div>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
          <span className={styles.viewMore}>
            View on LinkedIn
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

export default function NewsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <FadeIn className={styles.header}>
          <div>
            <span className={styles.label}>Career updates</span>
            <h1 className={styles.sectionTitle}>
              News &amp;
              <br />
              Milestones
            </h1>
            <p className={styles.sectionSub}>
              Speaking engagements, mentorship, community leadership, and
              milestones from my journey as a product designer.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </motion.div>

        <FadeIn delay={0.3} className={styles.cta}>
          <p className={styles.ctaText}>
            Stay up to date with my latest career updates on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/joycered/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View my LinkedIn profile
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
