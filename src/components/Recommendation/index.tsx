import React, { useState, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./styles.module.css";

export interface Props {
  url: string;
  name: string;
  content: ReactNode;
  highlight: string;
  date: string;
  githubUsername: string;
  staticProfileImage: string | null;
}

export default function Recommendation({
  url,
  name,
  content,
  highlight,
  date,
  githubUsername,
  staticProfileImage,
}: Props): ReactNode {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={clsx("card", styles.recommendation)}>
      <div className="card__header">
        <div className="avatar">
          <img
            alt={name}
            className="avatar__photo"
            src={
              githubUsername
                ? `https://github.com/${githubUsername}.png`
                : staticProfileImage
                  ? `https://nicholasgoh.github.io/img/recommenders/${staticProfileImage}.png`
                  : "https://nicholasgoh.github.io/img/recommenders/blank.png"
            }
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={clsx("avatar__intro", styles.recommendationMeta)}>
            <Link to={url}>
              <strong className="avatar__name">{name}</strong>
            </Link>
          </div>
        </div>
      </div>

      <div className="card__body">
        <blockquote className={styles.highlight}>
          {highlight}
        </blockquote>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className={styles.fullContent}
            >
              <p className={styles.fullText}>{content}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className={styles.toggleButton}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <span>{expanded ? "Show less" : "Read more"}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className={styles.chevron}
          >
            <ChevronDown size={14} />
          </motion.span>
        </button>
      </div>

      <div className="card__footer">
        <div className={clsx(styles.recommendationMeta, styles.recommendationDate)}>
          {date}
        </div>
      </div>
    </div>
  );
}
