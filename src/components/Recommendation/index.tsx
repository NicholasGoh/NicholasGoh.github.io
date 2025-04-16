/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode } from "react";

import clsx from "clsx";

import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export interface Props {
  url: string;
  name: string;
  content: ReactNode;
  date: string;
  githubUsername: string;
}

export default function Recommendation({
  url,
  name,
  content,
  date,
  githubUsername,
}: Props): ReactNode {
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
                : `https://nicholas-goh/img/blank.png`
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

      <div className={clsx("card__body", styles.recommendation)}>{content}</div>

      <div className="card__footer">
        <div
          className={clsx(styles.recommendationMeta, styles.recommendationDate)}
        >
          {date}
        </div>
      </div>
    </div>
  );
}
