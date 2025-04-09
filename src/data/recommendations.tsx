/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from "react";

import type { Props as Recommendation } from "../components/Recommendation";

export type RecommendationItem = Recommendation & {
  showOnHomepage: boolean;
};

const TWEETS: RecommendationItem[] = [
  {
    url: "https://chinholin.com",
    name: "Chin-Ho Lin",
    date: "Apr 09, 2025",
    content: (
      <>
        Nicholas is a fast learner who quickly identifies issues, conducts
        thorough research, and efficiently finds solutions to ensure project
        progress. He has been contributing to projects such as building LLM
        microservices for concurrent calls and developing a centralized model
        weight cache.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "tainvecs",
  },
];

export default TWEETS;
