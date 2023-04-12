const path = require("path");
// const {components} = require('./src/plugins/components');

module.exports = {
  title: "yellow.ai",
  tagline: "Conversational AI cloud for all",
  url: "https://docs.yellow.ai",
  baseUrl: "/",
  favicon: "img/favicon.png",
  trailingSlash: false, // to control trailing slash on the page url
  organizationName: "yellowmessenger",
  projectName: "documentation",
  // customFields: {
  //   components: {
  //     inputs: components("inputs"),
  //     processors: components("processors"),
  //     conditions: components("conditions"),
  //     outputs: components("outputs"),
  //     caches: components("caches"),
  //     rate_limits: components("rate_limits"),
  //     buffers: components("buffers"),
  //     metrics: components("metrics"),
  //     tracers: components("tracers"),
  //   },
  // },
  themeConfig: {
    algolia: {
      apiKey: 'b91fb91a4d3a5067f2f5165bb92c9fa8',
      indexName: 'ym_docs',
      appId: 'LWOORM11IH',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
      placeholder: 'Search docs'
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("./src/plugins/prism_themes/monokai"),
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    image: "img/og_img.png",
    metadata: [{ name: "twitter:card", content: "summary" }],
    navbar: {
      title: "",
      logo: {
        alt: "yellow.ai",
        src: "img/yellowMessenger.svg",
      },
      items: [
        {
          to: "docs/platform_concepts/getting-started",
          activeBasePath: "docs/platform_concepts",
          label: "Help Docs",
          position: "left",
        },
        {
          to: "/docs/cookbooks/getting_started",
          label: "Use Case Guides",
          position: "left",
          activeBasePath: "/docs/cookbooks",
        },
        
        {
          to: "docs/updates/overview",
          label: "What's New",
          position: "left",
          activeBasePath: "docs/whats_new",
        },
        {
          to: "docs/tutorials/basics",
          label: "Videos",
          position: "right",
          activeBasePath: "docs/tutorials",
        },
        {
          to: "docs/glossary/advanced-virtual-assistants",
          label: "Glossary",
          position: "right",
          activeBasePath: "docs/glossary",
        },
        {
          to: "https://community.yellow.ai",
          label: "Community",
          position: "right",
        },
        {
          to: "https://cloud.yellow.ai/auth/signup?utm_source=SupportDocs&utm_medium=doc_navbar&utm_campaign=docs_april_23",
          label: "Signup for Free",
          position: "right",
        },
      ],
    },
    footer: { links: [] },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        googleAnalytics: {
          // trackingID: "UA-135959729-1",
          trackingID: "UA-159942894-1",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.module.css"),
        },
      },
    ],
  ],
  plugins: [
    // path.resolve(__dirname, "./src/plugins/cookbooks"),
    path.resolve(__dirname, "./src/plugins/redirects"),
  ],
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
    "https://fonts.googleapis.com/css2?family=Roboto&family=Source+Sans+Pro&display=swap",
  ],
  onBrokenLinks: "log",
  scripts: [
    "/js/FeedbackFooter.js", // feedback footer
    "/js/bot.js", // connect support bot 
  ],
};
