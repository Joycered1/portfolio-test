import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/motion";
import styles from "./Work.module.css";

type Project = {
  num: string;
  title: string;
  subtitle: string;
  tags: string[];
  type: string;
  thumbnail: string;
  isGif?: boolean;
  href: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Timon",
    subtitle: "Cross-border Cards & Payment",
    tags: ["Fintech", "Mobile", "Web"],
    type: "Case Study",
    thumbnail:
      "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/b9560edc-5258-47e0-8db5-07695e7fe5e1/ezgif.com-animated-gif-maker.gif",
    isGif: true,
    href: "https://joycered.super.site/work/timon-cross-border-cards-and-payment-case-study",
  },
  {
    num: "02",
    title: "WorkVerse",
    subtitle: "Team Productivity & Collaboration",
    tags: ["SaaS", "Productivity", "Web"],
    type: "Case Study",
    thumbnail:
      "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/47026015-85e2-4cf9-a391-1a10362c53c0/ezgif.com-animated-gif-maker_(1).gif",
    isGif: true,
    href: "https://joycered.super.site/work/workverse-team-productivity-collaboration-platform-case-study",
  },
  {
    num: "03",
    title: "KiddyPot",
    subtitle: "Family Saving & Spending",
    tags: ["Fintech", "Mobile", "Edtech"],
    type: "Case Study",
    thumbnail:
      "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/3eaa8b60-668e-473d-ba63-9ab911873d4a/ezgif.com-animated-gif-maker.gif",
    isGif: true,
    href: "https://joycered.super.site/kiddy-pot",
  },
  {
    num: "04",
    title: "Showlove",
    subtitle: "Gifting Platform",
    tags: ["Social", "Mobile", "Web"],
    type: "Case Study",
    thumbnail:
      "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/5da2206e-d686-4150-9cb1-3c4b7dec74a1/ezgif.com-animated-gif-maker_(1).gif",
    isGif: true,
    href: "https://joycered.super.site/work/showlove-mobile-app-case-study",
  },
  {
    num: "05",
    title: "DesignPal",
    subtitle: "Designer Resource Website",
    tags: ["Web Design", "SaaS"],
    type: "Website Design",
    thumbnail:
      "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/e4364fad-a5e8-4d96-b8c8-747f751f8ecd/dp2.png",
    href: "https://joycered.super.site/designpal-org",
  },
  {
    num: "06",
    title: "Penta",
    subtitle: "Fintech Website Redesign",
    tags: ["Fintech", "Web Design"],
    type: "Website Redesign",
    thumbnail:
      "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/631970f8-0704-45b1-b708-f09c66300f36/hero_2.png",
    href: "https://joycered.super.site/work/penta-website-redesign",
  },
  {
    num: "07",
    title: "Segsalerty",
    subtitle: "Brand Identity & Logo",
    tags: ["Branding", "Logo"],
    type: "Brand Identity",
    thumbnail:
      "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/12e7256b-65b6-4ff2-9d22-f15f73646258/Frame_18.png",
    href: "https://joycered.super.site/work/segsalerty-logo-presentation",
  },
  {
    num: "08",
    title: "19:02 Originals",
    subtitle: "Brand Identity Design",
    tags: ["Branding", "Print"],
    type: "Brand Identity",
    thumbnail:
      "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/a456f22c-f30c-4cfc-99da-7ead27ecb54c/3.png",
    href: "https://joycered.super.site/1902-originals",
  },
];

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <FadeIn className={styles.header}>
          <div>
            <span className={styles.label}>Selected work</span>
            <h2 className={styles.title}>
              Projects &amp;
              <br />
              Case Studies
            </h2>
          </div>
          <a
            href="https://dribbble.com/Joycered"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAll}
          >
            View all on Dribbble
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
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

        <StaggerContainer className={styles.grid}>
          {projects.map((p) => (
            <StaggerItem key={p.num} className={styles.cardWrapper}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                {/* thumbnail */}
                <div className={styles.thumbnail}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.thumbnail}
                    alt={`${p.title} project thumbnail`}
                    className={styles.thumbnailImg}
                    loading="lazy"
                  />
                </div>

                {/* body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <span className={styles.typeTag}>{p.type}</span>
                    <span className={styles.num}>{p.num}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardSubtitle}>{p.subtitle}</p>

                  <div className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className={styles.cardLink}>
                    View project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path
                        d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
