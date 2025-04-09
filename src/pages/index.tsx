import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import Tweet from "@site/src/components/Tweet";
import Tweets, { type TweetItem } from "@site/src/data/tweets";
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

function TweetsSection() {
  const tweetColumns: TweetItem[][] = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3]!.push(tweet),
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx("margin-bottom--lg", "text--center")}>
          <Translate>Recommendations</Translate>
        </Heading>
        <div className={clsx("row", styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
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
        <TweetsSection />
      </main>
    </Layout>
  );
}
