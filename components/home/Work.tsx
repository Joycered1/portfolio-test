"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CaseStudyModal from "./CaseStudyModal";
import { FadeIn } from "@/shared/motion";
import styles from "./Work.module.css";

/* ─── Types ─────────────────────────────────────── */
export type CaseStudy = {
  overview: string;
  role: string;
  problem: string[];
  approach: string[];
  features: { title: string; desc: string }[];
  /** HTML strings — may include <strong> for stat callouts */
  outcomes: string[];
  tools: string[];
};

export type Project = {
  num: string;
  title: string;
  subtitle: string;
  tags: string[];
  type: string;
  /** Static image shown by default (URL or CSS gradient string) */
  thumbnail: string;
  /** Animated GIF — plays only on hover */
  gif?: string;
  href: string;
  caseStudy: CaseStudy;
};

/* ─── Project data ───────────────────────────────── */
const projects: Project[] = [
  {
    num: "01",
    title: "Timon",
    subtitle: "Cross-border Cards & Payment",
    tags: ["Fintech", "Mobile", "Web"],
    type: "Case Study",
    thumbnail:
      "linear-gradient(135deg, #0d1b3e 0%, #1a3a7a 60%, #0f2557 100%)",
    gif: "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/b9560edc-5258-47e0-8db5-07695e7fe5e1/ezgif.com-animated-gif-maker.gif",
    href: "https://joycered.super.site/work/timon-cross-border-cards-and-payment-case-study",
    caseStudy: {
      overview:
        "Timon is a fintech mobile app enabling Nigerians and Africans to spend abroad, order physical and virtual cards, and manage multi-currency expenses — all in one place. Designed as an MVP for rapid market validation.",
      role: "Product Designer — end-to-end, from user research through to Figma prototype delivery under tight MVP timelines.",
      problem: [
        "Interbank transfers in Nigeria exceeded 1.2 billion transactions in 2023, yet cross-border spending remained friction-heavy.",
        "Online card payments reached ₦500 billion in 2022 with no accessible card product for everyday Africans.",
        "Users faced multiple currencies, excessive FX fees, and limited card options when travelling or shopping internationally.",
      ],
      approach: [
        "MVP-first scoping in Figma — features limited to core user needs for rapid feasibility validation.",
        "Progress indicators throughout onboarding to reduce drop-off during KYC.",
        "Card ordering built into onboarding to identify committed users early and gather MVP validation data.",
        "Transparent conversion flow: users see rates, charges, and converted amount before confirming — building trust.",
      ],
      features: [
        {
          title: "Authentication & KYC",
          desc: "BVN or valid ID verification via integrated SDK; 2–4 minute process with visual progress to prevent abandonment.",
        },
        {
          title: "Card Ordering & Activation",
          desc: "Physical and virtual card ordering embedded in onboarding to validate commitment and reduce churn.",
        },
        {
          title: "Multi-Currency Wallet",
          desc: "Send and receive between local and foreign currencies at competitive low charges.",
        },
        {
          title: "Currency Conversion",
          desc: "Live exchange rates with full fee breakdown before confirmation; instant execution after approval.",
        },
      ],
      outcomes: [
        "<strong>30,000+</strong><br>Organic users within one year of launch",
        "<strong>Hundreds</strong><br>Positive social media reviews post-launch",
      ],
      tools: ["Figma"],
    },
  },
  {
    num: "02",
    title: "WorkVerse",
    subtitle: "Team Productivity & Collaboration",
    tags: ["SaaS", "Productivity", "Web"],
    type: "Case Study",
    thumbnail:
      "linear-gradient(135deg, #180d30 0%, #3d1a80 60%, #261055 100%)",
    gif: "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/47026015-85e2-4cf9-a391-1a10362c53c0/ezgif.com-animated-gif-maker_(1).gif",
    href: "https://joycered.super.site/work/workverse-team-productivity-collaboration-platform-case-study",
    caseStudy: {
      overview:
        "WorkVerse is a virtual workspace for distributed teams to connect, collaborate, and create — consolidating fragmented tools into a single platform and eliminating the context-switching fatigue of modern remote work.",
      role: "Product Designer — user research, competitive analysis, design system setup (AlignUI), and full UI execution in Figma.",
      problem: [
        "Context-switching fatigue: frequent tool transitions disrupt deep work and team flow.",
        "Impeded collaboration: critical information fragmented across Slack, Notion, Figma, Zoom, and Jira.",
        "Reduced visibility: team leads struggle to track progress without a unified view.",
        "Onboarding friction: most tools lack role-based setup, causing early churn.",
      ],
      approach: [
        "User research to validate pain points across freelancers, SMBs, and enterprise teams (up to 1,000 employees).",
        "Competitive analysis against existing collaboration tools to identify gaps.",
        "Installed and customised the AlignUI design system for speed and consistency.",
        "Created Figma variables for seamless dark/light mode across all 9 feature areas.",
        "Role-based onboarding — separate flows for admins and team members.",
      ],
      features: [
        {
          title: "Spaces",
          desc: "Group chats, threaded discussions, task management, collaborative documents, whiteboards, built-in video, and an AI assistant — all in one Space.",
        },
        {
          title: "Boards",
          desc: "Kanban-style task management with customisable columns, drag-and-drop prioritisation, and calendar integration.",
        },
        {
          title: "Meetings",
          desc: "Scheduled and ad-hoc video calls with integrated agendas, real-time note-taking, recording, and storage.",
        },
        {
          title: "Messaging",
          desc: "1:1 and group conversations with threaded replies, file sharing, reactions, and @mentions.",
        },
        {
          title: "Notes & Calendar",
          desc: "Personal and shared notes with Google Calendar and Outlook sync for event scheduling.",
        },
      ],
      outcomes: [
        "<strong>35%</strong><br>Average increase in task completion rates",
        "<strong>85%</strong><br>New users complete onboarding on Day 1",
        "<strong>200+</strong><br>Active teams on the platform",
        "<strong>20%</strong><br>Reduction in average meeting duration",
      ],
      tools: ["Figma", "FigJam", "AlignUI Design System"],
    },
  },
  {
    num: "03",
    title: "KiddyPot",
    subtitle: "Family Saving & Spending",
    tags: ["Fintech", "Mobile", "Edtech"],
    type: "Case Study",
    thumbnail:
      "linear-gradient(135deg, #091e14 0%, #0f4a28 60%, #083318 100%)",
    gif: "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/3eaa8b60-668e-473d-ba63-9ab911873d4a/ezgif.com-animated-gif-maker.gif",
    href: "https://joycered.super.site/kiddy-pot",
    caseStudy: {
      overview:
        "KiddyPot is a family fintech app that helps parents save and spend money with their children — building financial literacy habits from an early age through an intuitive, family-friendly mobile experience.",
      role: "Product Designer — UI design and prototyping in Figma.",
      problem: [
        "Parents lack a simple, trusted tool to involve children in everyday financial decisions.",
        "Existing banking apps are not designed for joint parent-child use or for teaching saving habits.",
        "No engaging, child-friendly spending/saving experience exists in the African market.",
      ],
      approach: [
        "Dual-persona design: distinct experiences for parents (control, oversight) and children (engagement, learning).",
        "Simplified onboarding for family account creation with parental approval flows.",
        "Visual savings goals to make progress tangible and motivating for children.",
        "Spending controls and notifications give parents confidence while children gain autonomy.",
      ],
      features: [
        {
          title: "Family Wallet",
          desc: "Shared wallet visible to parent and child with real-time balance and transaction history.",
        },
        {
          title: "Savings Goals",
          desc: "Visual goal-tracking — children set a target, see progress, and celebrate milestones.",
        },
        {
          title: "Parental Controls",
          desc: "Spending limits, category restrictions, and instant notifications for every child transaction.",
        },
        {
          title: "Dollar Savings Feature",
          desc: "Summary bottom sheet for dollar-denominated savings, helping families hedge against local currency volatility.",
        },
      ],
      outcomes: [
        "<strong>MVP</strong><br>Delivered and validated with target family users",
        "<strong>Positive</strong><br>User feedback on clarity and child-friendliness of UI",
      ],
      tools: ["Figma"],
    },
  },
  {
    num: "04",
    title: "Showlove",
    subtitle: "Gifting Platform",
    tags: ["Social", "Mobile", "Web"],
    type: "Case Study",
    thumbnail:
      "linear-gradient(135deg, #220812 0%, #7a1540 60%, #4d0d28 100%)",
    gif: "https://assets.super.so/84f9374a-27ae-4fb5-86cb-182097f94bde/images/5da2206e-d686-4150-9cb1-3c4b7dec74a1/ezgif.com-animated-gif-maker_(1).gif",
    href: "https://joycered.super.site/work/showlove-mobile-app-case-study",
    caseStudy: {
      overview:
        "Showlove is a Nigerian mobile gifting platform allowing users to send meaningful gifts — from airtime to designer brands — to loved ones from home. Designed to replace unreliable social-media vendors with a secure, convenient, and delightful gifting experience.",
      role: "Product Designer — user research (surveys, interviews, empathy mapping), information architecture, wireframes, UI design, and two rounds of usability testing.",
      problem: [
        "Nigerian gifting vendors operate through social media with no reliable, centralised platform.",
        "Users default to sending cash because existing vendors lack variety and trustworthiness.",
        "Security and trust concerns with online transactions deter potential buyers.",
        "No nationwide delivery with scheduling flexibility or a post-purchase tracking experience.",
      ],
      approach: [
        "Surveys to identify preferred platforms and pain points across target users.",
        "In-depth user interviews and empathy mapping to synthesise findings into actionable insights.",
        "Information architecture (site map) → user flows → wireframes → iterative UI design.",
        "Two rounds of usability testing: first round identified struggle points; design iterated; second round confirmed improvements.",
        "Post-testing addition of an 'Occasions' feature after users expressed need for gift reminders without immediate purchase pressure.",
      ],
      features: [
        {
          title: "Explore & Browse",
          desc: "Category browsing and search with event-type filtering — food, fashion, lifestyle, and more.",
        },
        {
          title: "Send Gift Flow",
          desc: "Select → Details → Basket → Recipient address → Payment → Confirmation → Delivery notification.",
        },
        {
          title: "Wallet",
          desc: "Fund account, view transaction history, manage saved cards, and set a default payment method.",
        },
        {
          title: "Love Basket",
          desc: "Wishlist + checkout combined: save items, manage beneficiaries, view order history, resend gifts.",
        },
        {
          title: "Occasions",
          desc: "Set reminders for upcoming occasions without requiring an immediate purchase — reduces pressure while driving intent.",
        },
      ],
      outcomes: [
        "<strong>2 Rounds</strong><br>Usability testing with measurable improvement between rounds",
        "<strong>Positive</strong><br>Feedback on trust, convenience, and variety in second-round testing",
      ],
      tools: ["Figma", "Google Docs"],
    },
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
    caseStudy: {
      overview:
        "DesignPal.org is a curated resource hub for designers — a clean, fast-loading website with strong information architecture to help designers discover tools, articles, and references quickly.",
      role: "Web Designer — visual design and UI for the full website.",
      problem: [
        "Designer resource sites are often cluttered, slow, or hard to navigate.",
        "No single trusted source curates high-quality design resources with a clean browsing experience.",
      ],
      approach: [
        "Focused information architecture: clear category hierarchy for fast resource discovery.",
        "Minimal visual design — let the content breathe rather than compete with decoration.",
        "Mobile-first responsive layout for designers who browse on the go.",
      ],
      features: [
        { title: "Resource Library", desc: "Curated tools, articles, and templates organised by category and use case." },
        { title: "Search & Filter", desc: "Fast search with tag-based filtering to surface relevant resources immediately." },
        { title: "Clean Landing Page", desc: "Clear value proposition and entry points for new and returning visitors." },
      ],
      outcomes: [
        "<strong>Live</strong><br>Website shipped and publicly available",
      ],
      tools: ["Figma"],
    },
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
    caseStudy: {
      overview:
        "A landing page redesign for Penta Money — a fintech brand — focused on a stronger visual hierarchy, more compelling hero section, and improved conversion focus.",
      role: "Web Designer — visual redesign of the landing page.",
      problem: [
        "Existing landing page lacked a clear, compelling hero that communicated the product value instantly.",
        "Visual hierarchy was flat — users couldn't immediately identify the primary CTA.",
        "Brand trust signals (social proof, security) were not prominent enough.",
      ],
      approach: [
        "Hero-first redesign: rewritten headline and sub-copy for clarity and emotional resonance.",
        "Stronger typographic hierarchy to guide the eye from headline → benefit → CTA.",
        "Introduced social proof and trust badges above the fold.",
      ],
      features: [
        { title: "Redesigned Hero", desc: "Bold headline, refined sub-copy, and a prominent CTA above the fold." },
        { title: "Trust Section", desc: "Security badges, partner logos, and social proof positioned strategically." },
        { title: "Footer Redesign", desc: "Structured footer with clear link groups and brand reinforcement." },
      ],
      outcomes: [
        "<strong>Delivered</strong><br>High-fidelity Figma designs handed off to engineering",
      ],
      tools: ["Figma"],
    },
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
    caseStudy: {
      overview:
        "Logo and visual identity design for Segsalerty — a security technology brand. The project covers mark design, typography selection, colour palette, and brand usage guidelines.",
      role: "Brand & Identity Designer — concept, mark design, and guidelines.",
      problem: [
        "The brand needed an identity that communicated trust, precision, and technological authority.",
        "Existing identity lacked differentiation in a crowded security tech space.",
      ],
      approach: [
        "Explored multiple mark concepts — wordmark, icon mark, and combination mark directions.",
        "Selected a mark that balances strength (geometry) with approachability.",
        "Defined a restrained colour palette and type system that scales across digital and print.",
      ],
      features: [
        { title: "Primary Mark", desc: "Icon + wordmark combination mark designed for versatility across contexts." },
        { title: "Colour System", desc: "Primary and secondary palette with usage rules for brand consistency." },
        { title: "Typography", desc: "Type pairings selected for hierarchy and legibility at all sizes." },
        { title: "Usage Guidelines", desc: "Clear do/don't documentation to ensure consistent application by the team." },
      ],
      outcomes: [
        "<strong>Complete</strong><br>Brand identity system delivered and approved",
      ],
      tools: ["Figma", "Adobe Illustrator"],
    },
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
    caseStudy: {
      overview:
        "Complete brand identity for 19:02 Originals — a fashion label. The project spans concept development, naming rationale, mark design, typography, colour story, and print-ready asset production.",
      role: "Brand & Identity Designer — concept through final print-ready deliverables.",
      problem: [
        "New fashion label with no visual identity entering a competitive lifestyle market.",
        "Brand name ('19:02') needed a visual language that felt intentional, not arbitrary.",
        "Identity had to translate across digital (social media) and physical (tags, packaging, lookbooks) touch-points.",
      ],
      approach: [
        "Naming exploration — '19:02' chosen to evoke a specific moment; identity built to feel timeless and precise.",
        "Moodboarding to align on aesthetic direction before any mark design.",
        "Iterative mark refinement with the client, balancing editorial restraint with character.",
        "Full print asset production: hang tags, care labels, and lookbook layout.",
      ],
      features: [
        { title: "Brand Mark", desc: "Primary logotype with secondary icon mark — crafted for both digital and embossed print use." },
        { title: "Colour Story", desc: "Restrained, editorial palette that communicates premium positioning." },
        { title: "Print Assets", desc: "Hang tags, care labels, stationery, and lookbook layout designed and print-ready." },
        { title: "Social Media Templates", desc: "Branded templates for consistent digital presence across Instagram and other channels." },
      ],
      outcomes: [
        "<strong>Complete</strong><br>Identity system delivered across all touch-points",
        "<strong>Print-ready</strong><br>All assets delivered in production-ready formats",
      ],
      tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    },
  },
];

/* ─── Stagger variants ───────────────────────────── */
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ─── Card component (hover-only GIF) ───────────── */
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const hasGif = Boolean(project.gif);
  const isGradient = project.thumbnail.startsWith("linear-gradient");

  return (
    <motion.div
      className={styles.cardWrapper}
      variants={itemVariants}
    >
      <button
        className={styles.card}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Open ${project.title} case study`}
      >
        {/* thumbnail */}
        <div className={styles.thumbnail}>
          {/* show GIF only on hover; otherwise show static or gradient */}
          {hasGif && hovered ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.gif}
              alt={project.title}
              className={styles.thumbnailImg}
            />
          ) : isGradient ? (
            <div
              className={styles.thumbnailGradient}
              style={{ background: project.thumbnail }}
            >
              <span className={styles.thumbLabel}>{project.title}</span>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`${styles.thumbnailImg} ${hovered ? styles.zoomed : ""}`}
              loading="lazy"
            />
          )}
        </div>

        {/* body */}
        <div className={styles.cardBody}>
          <div className={styles.cardTop}>
            <span className={styles.typeTag}>{project.type}</span>
            <span className={styles.num}>{project.num}</span>
          </div>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardSubtitle}>{project.subtitle}</p>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <span className={styles.cardLink}>
            View case study
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
      </button>
    </motion.div>
  );
}

/* ─── Work section ───────────────────────────────── */
export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

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
              <path d="M2 12L12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
          {projects.map((p) => (
            <ProjectCard
              key={p.num}
              project={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </motion.div>
      </div>

      <CaseStudyModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
