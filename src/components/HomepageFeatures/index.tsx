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
        A strong foundation in data science and AI, with expertise in machine
        learning and data-driven solutions, now informing my evolving focus.
      </>
    ),
  },
  {
    title: "Agentic Orchestration",
    Svg: require("@site/static/img/undraw_software_engineer.svg").default,
    description: (
      <>
        Experienced in designing and implementing agentic workflows, leveraging
        LLMs to enable autonomous decision-making and collaborative task
        execution.
      </>
    ),
  },
  {
    title: "Cloud Orchestration",
    Svg: require("@site/static/img/undraw_cloud_hosting.svg").default,
    description: (
      <>
        Skilled in provisioning and managing cloud resources using AWS and
        Terraform Infrastructure as Code (IaC)
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
