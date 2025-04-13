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
  {
    url: "https://www.linkedin.com/in/leonseet/",
    name: "Leon Seet",
    date: "Apr 13, 2025",
    content: (
      <>
        I highly recommend Nicholas based on our time working together. He
        possesses a keen ability to identify operational inefficiencies and
        implement solutions that result in tangible time and cost savings which
        benefitted our development works. A standout contribution was his
        development of a deployable LLM microservice tailored for our restricted
        on-prem environment, which has helped accelerated development cycles
        needing on-prem LLM capabilties. Furthermore, Nicholas is a
        collaborative colleague with great expertise in advanced Bash
        configurations which I have learnt a lot from. He would be a valuable
        asset to any team.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "leonseet",
  },
];

export default TWEETS;
