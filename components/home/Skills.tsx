import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/motion";
import styles from "./Skills.module.css";

const groups = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "UX Research",
    skills: [
      "User interviews & surveys",
      "Usability testing",
      "UX audits & reports",
      "Competitive analysis",
      "SWOT analysis",
      "UX research planning",
    ],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d="M3 13L9 5l6 8H3z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Product Design",
    skills: [
      "User experience design",
      "User interface design",
      "Rapid prototyping",
      "Interaction design",
      "Design systems",
      "Responsive web design",
    ],
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M6 9h6M9 6v6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Visual & Brand",
    skills: [
      "Logo & brand identity",
      "Illustration",
      "3D design (improving)",
      "Print design",
      "Social media design",
      "Brand guidelines",
    ],
  },
];

const tools = [
  "Figma",
  "FigJam",
  "Protopie",
  "Framer",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Notion",
  "Jira",
  "Miro",
  "Lottie",
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <FadeIn>
          <span className={styles.label}>What I bring</span>
          <h2 className={styles.title}>
            Skills &amp;
            <br />
            Expertise
          </h2>
        </FadeIn>

        <StaggerContainer className={styles.grid}>
          {groups.map((g) => (
            <StaggerItem key={g.title} className={styles.group}>
              <div className={styles.groupIcon}>{g.icon}</div>
              <h3 className={styles.groupTitle}>{g.title}</h3>
              <ul className={styles.skillList}>
                {g.skills.map((s) => (
                  <li key={s} className={styles.skill}>
                    {s}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.1} className={styles.tools}>
          <p className={styles.toolsLabel}>Tools &amp; Software</p>
          <div className={styles.toolTags}>
            {tools.map((t) => (
              <span key={t} className={styles.toolTag}>
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
