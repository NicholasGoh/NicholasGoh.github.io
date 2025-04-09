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

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            data-umami-event="View Resume"
            href="https://flowcv.com/resume/hs2snijcw2oj"
            target="_blank"
          >
            🌐 View Resume
          </a>
          <a
            className="button button--secondary button--lg"
            data-umami-event="Download Resume"
            href="Nicholas-Goh-Resume.pdf"
            target="_blank"
            download={"Nicholas-Goh-Resume"}
          >
            📥 Download Resume
          </a>
        </div>
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
            <div className="col col--4" key={i}>
              {recommendationItems.map((recommendation) => (
                <Recommendation {...recommendation} key={recommendation.url} />
              ))}
            </div>
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
