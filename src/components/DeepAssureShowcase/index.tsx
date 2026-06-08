import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Heading from "@theme/Heading";
import { ExternalLink } from "lucide-react";
import styles from "./styles.module.css";

export default function DeepAssureShowcase(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className={styles.eyebrow}>AI Assurance Practice</p>
          <Heading as="h2" className={styles.heading}>
            DeepAssure
          </Heading>
          <p className={styles.body}>
            Built DeepAssure and led AI assurance engagements for HTX, CDL, NTU
            LKCMedicine, and EarlyBird.
          </p>
          <a
            className="button button--primary"
            href="https://deepassure.ai"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="DeepAssure CTA"
          >
            deepassure.ai
            <ExternalLink
              size={15}
              style={{ marginLeft: "0.4em", verticalAlign: "middle" }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
