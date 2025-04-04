import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: true,
      },
    ],
  ],
  scripts: [
    {
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "00eadbae-add3-453e-aa6c-dde12cc2e23a",
      "data-domains": "nicholas-goh.com,nicholasgoh.github.io",
      defer: true,
    },
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  title: "Nicholas Goh",
  tagline: "AI Full Stack Engineer",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://NicholasGoh.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NicholasGoh", // Usually your GitHub org/user name.
  projectName: "NicholasGoh.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-TECW05ZKH4",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/my-social-card.png",
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Nicholas Goh",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "https://cloud.umami.is/share/oEUFjq6PCjBUfHU1/nicholas-goh.com",
          label: "Analytics",
          position: "left",
        },
        { to: "/showcase", label: "Projects", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://www.linkedin.com/in/nicholas-goh-19ba1b194/",
          position: "right",
          className: "header-linkedin-link",
          "aria-label": "Linkedin repository",
        },
        {
          href: "https://github.com/NicholasGoh",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Hobby",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/bouldernic",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nicholas Goh, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
