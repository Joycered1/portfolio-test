"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "./Work";
import styles from "./CaseStudyModal.module.css";

const EASE = [0.32, 0.72, 0, 1] as const;

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: Props) {
  // lock body scroll while open
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const cs = project?.caseStudy;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* overlay */}
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          >
            {/* drawer — stop click propagation so it doesn't close when clicking inside */}
            <motion.div
              className={styles.drawer}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal
              aria-label={`${project.title} case study`}
            >
              {/* top bar */}
              <div className={styles.topBar}>
                <span className={styles.projectNum}>{project.num} / 08</span>
                <div className={styles.topActions}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.extLink}
                  >
                    View on portfolio
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* thumbnail */}
              <div className={styles.thumbnail}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.gif ?? project.thumbnail}
                  alt={project.title}
                  className={styles.thumbnailImg}
                />
              </div>

              {/* body */}
              <div className={styles.body}>
                {/* header */}
                <div className={styles.header}>
                  <span className={styles.typeBadge}>{project.type}</span>
                  <h2 className={styles.title}>{project.title}</h2>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  <div className={styles.tagRow}>
                    {project.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* overview */}
                {cs?.overview && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Overview</span>
                    <p className={styles.sectionText}>{cs.overview}</p>
                  </div>
                )}

                {/* role */}
                {cs?.role && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Role</span>
                    <p className={styles.sectionText}>{cs.role}</p>
                  </div>
                )}

                {/* problem */}
                {cs?.problem && cs.problem.length > 0 && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Problem</span>
                    <ul className={styles.list}>
                      {cs.problem.map((p, i) => (
                        <li key={i} className={styles.listItem}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* approach */}
                {cs?.approach && cs.approach.length > 0 && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Approach</span>
                    <ul className={styles.list}>
                      {cs.approach.map((a, i) => (
                        <li key={i} className={styles.listItem}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* features */}
                {cs?.features && cs.features.length > 0 && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Key Features</span>
                    <div className={styles.features}>
                      {cs.features.map((f, i) => (
                        <div key={i} className={styles.feature}>
                          <span className={styles.featureNum}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className={styles.featureContent}>
                            <span className={styles.featureTitle}>{f.title}</span>
                            <span className={styles.featureDesc}>{f.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* outcomes */}
                {cs?.outcomes && cs.outcomes.length > 0 && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Outcomes</span>
                    <div className={styles.outcomes}>
                      {cs.outcomes.map((o, i) => (
                        <div key={i} className={styles.outcome} dangerouslySetInnerHTML={{ __html: o }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* tools */}
                {cs?.tools && cs.tools.length > 0 && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Tools Used</span>
                    <div className={styles.tools}>
                      {cs.tools.map((t) => (
                        <span key={t} className={styles.tool}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
