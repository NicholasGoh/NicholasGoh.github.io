/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from "@docusaurus/Translate";
import { sortBy } from "@site/src/utils/jsUtils";

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType = "agenticworkflow" | "multiagents" | "rag";

// Add sites to this list
// prettier-ignore
const Projects: Project[] = [
  {
    title: "Agentic RAG",
    description: 'Agentic RAG: Designing, Building and the Key Considerations Behind It',
    preview: require('./showcase/agentic-rag.png'),
    website: 'https://nicholas-goh.com/blog/agentic-rag#demo',
    blog: 'https://nicholas-goh.com/blog/agentic-rag',
    tags: ['agenticworkflow', 'rag'],
  },
  {
    title: 'ETL Automation',
    description: 'Explore how automation simplifies problem-solving by testing AI’s ability to break tasks into subproblems.',
    preview: require('./showcase/etl-automation.png'),
    website: 'https://nicholas-goh.com/blog/etl-automation#demo',
    blog: 'https://nicholas-goh.com/blog/etl-automation',
    tags: ['agenticworkflow'],
  },
  {
    title: 'Customer Service Automation',
    description:
      'Explore how a complex problem with moving parts can be solved, by having it broken down into smaller problems to be solved—automatically.',
    preview: require('./showcase/customer-service-automation.png'),
    website: 'https://nicholas-goh.com/blog/customer-service-automation#demo',
    blog: 'https://nicholas-goh.com/blog/customer-service-automation',
    tags: ['agenticworkflow', 'multiagents'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type Project = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  agenticworkflow: {
    label: translate({ message: "Agentic Workflow" }),
    description: translate({
      message: "Orchestration workflow",
      id: "showcase.tag.agenticworkflow.description",
    }),
    color: "#39ca30",
  },

  multiagents: {
    label: translate({ message: "Multi Agents" }),
    description: translate({
      message: "Supervisor delegating tasks to workers to solve",
      id: "showcase.tag.multiagents.description",
    }),
    color: "#dfd545",
  },

  rag: {
    label: translate({ message: "RAG" }),
    description: translate({
      message: "Retrieval Augmented Generation",
      id: "showcase.tag.rag.description",
    }),
    color: "#a44fb7",
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortProjects() {
  let result = Projects;
  // Sort by site name
  result = sortBy(result, (project) => project.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (project) => !project.tags.includes("favorite"));
  return result;
}

export const sortedProjects = sortProjects();
