import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import Recommendation from "@site/src/components/Recommendation";
import Recommendations, {
  type RecommendationItem,
} from "@site/src/data/recommendations";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { motion } from "framer-motion";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </motion.div>

          <div className={styles.buttons}>
            <motion.a
              className="button button--secondary button--lg"
              data-umami-event="View Resume"
              href="https://flowcv.com/resume/hs2snijcw2oj"
              target="_blank"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              🌐 View Resume
            </motion.a>

            <motion.a
              className="button button--secondary button--lg"
              data-umami-event="Download Resume"
              href="Nicholas-Goh-Resume.pdf"
              target="_blank"
              download="Nicholas-Goh-Resume"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              📥 Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function RecommendationsSection() {
  const recommendationColumns: RecommendationItem[][] = [[], [], []];
  Recommendations.filter(
    (recommendation) => recommendation.showOnHomepage,
  ).forEach((recommendation, i) =>
    recommendationColumns[i % 3]!.push(recommendation),
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx("margin-bottom--lg", "text--center")}>
          <Translate>Recommendations</Translate>
        </Heading>
        <div className={clsx("row", styles.recommendationsSection)}>
          {recommendationColumns.map((recommendationItems, i) => (
            <motion.div
              className="col col--4"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.2, // adjust base delay if needed
              }}
            >
              {recommendationItems.map((recommendation) => (
                <Recommendation {...recommendation} key={recommendation.url} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="Personal website and blog of Nicholas Goh"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <RecommendationsSection />
      </main>
    </Layout>
  );
}
