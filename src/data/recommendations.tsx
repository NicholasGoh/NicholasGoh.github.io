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
  highlight: string;
  position: string;
};

const TWEETS: RecommendationItem[] = [
  {
    url: "https://www.linkedin.com/in/hui-ning-joo-9a5141168/details/recommendations/",
    name: "Hui Ning Joo",
    position: "Team Lead, Principal Software Engineer",
    date: "Apr 16, 2025",
    highlight:
      "Independently dove into AI agents and delivered a working demo — curiosity and drive stand out.",
    content: (
      <>
        I had the opportunity to work with Nicholas both as his lead for a few
        months and later as a co-lead during his time as a junior developer on
        our team. He brought strong energy and initiative, kept up with the
        latest tools, and was always eager to contribute ideas. One of his
        highlights was independently diving into the new domain of AI agents and
        delivering a working demo. He also proposed a centralized weights
        caching approach, which saved space and improved efficiency. While
        there’s still room to grow in structured planning and deeper evaluation,
        his curiosity and drive stand out. With continued experience, I’m
        confident he’s on a path to achieve great things in his career.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "",
  },
  {
    url: "https://www.linkedin.com/in/alvinphang/details/recommendations/",
    name: "Alvin Phang",
    position: "Team Lead, Senior Software Engineer",
    date: "Apr 22, 2025",
    highlight:
      "A fast learner who took initiative and improved team efficiency — a great asset to any team.",
    content: (
      <>
        I had the pleasure of working with Nicholas, and I’m genuinely impressed
        by their growth and contributions. A fast learner with a great attitude,
        Nicholas quickly ramped up on complex topics like LLM microservices and
        took initiative to implement practical solutions that improved team
        efficiency and led to meaningful cost savings. On top of that, Nicholas
        is friendly, collaborative, and always a joy to work with — a great
        asset to any team.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "",
    staticProfileImage: "alvinphang",
  },
  {
    url: "https://www.linkedin.com/in/leonseet/details/recommendations/",
    name: "Leon Seet",
    position: "AI Engineer",
    date: "Apr 13, 2025",
    highlight:
      "Built a deployable LLM microservice for on-prem — tangible time and cost savings for the team.",
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
  {
    url: "https://chinholin.com",
    name: "Chin-Ho Lin",
    position: "Software Engineer",
    date: "Apr 09, 2025",
    highlight:
      "Quickly identifies issues, researches thoroughly, and finds solutions to keep projects moving.",
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
