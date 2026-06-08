import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Data Science and AI",
    Svg: require("@site/static/img/undraw_predictive_analytics.svg").default,
    description: (
      <>
        B.Sci in Data Science & AI (NTU). A rigorous foundation in machine
        learning, statistics, and AI systems — the lens through which I build
        and evaluate production AI.
      </>
    ),
  },
  {
    title: "Agentic Systems",
    Svg: require("@site/static/img/undraw_software_engineer.svg").default,
    description: (
      <>
        Designs and ships agentic systems in industry — from LLM microservices
        to multi-agent orchestration. Extends this into personal projects
        exploring the edges of what agents can do.
      </>
    ),
  },
  {
    title: "AI Assurance",
    Svg: require("@site/static/img/undraw_all_checked.svg").default,
    description: (
      <>
        Evaluates, adversarially probes, and assures clients' agentic systems
        across AI-specific risks and security dimensions. Recommends
        improvements → clients remediate → I verify and close the loop.
      </>
    ),
  },
];

function Feature({
  title,
  Svg,
  description,
  delay = 0,
}: FeatureItem & { delay?: number }) {
  return (
    <div className={clsx("col col--4")}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay,
        }}
      >
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
