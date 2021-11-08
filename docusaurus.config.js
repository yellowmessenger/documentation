const path = require("path");
// const {components} = require('./src/plugins/components');

module.exports = {
  title: "yellow.ai",
  tagline: "Conversational AI cloud for all",
  url: "https://docs.yellow.ai",
  baseUrl: "/",
  favicon: "img/favicon.png",
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
      apiKey: 'aec27d187af8e72ea8fb29d498b92cd9',
      indexName: 'yellow.ai docs',
      appId: 'LWOORM11IH',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
      placeholder: 'Search by Pratik'
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
    metadatas: [{ name: "twitter:card", content: "summary" }],
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
          label: "Platform Concepts",
          position: "left",
        },
//         {
//           // to: "docs/howtos/basics/create-a-bot",
//           to: "/docs/developer/app/overview",
//           label: "Developer",
//           position: "left",
//           activeBasePath: "docs/developer",
//         },
        {
          to: "/docs/cookbooks/template-bots/model-bot",
          label: "Cookbooks",
          position: "left",
          activeBasePath: "/docs/cookbooks",
        },
        {
          to: "docs/tutorials/basics",
          label: "Two-torials",
          position: "left",
          activeBasePath: "docs/tutorials",
        },
        {
          to: "docs/updates/builder",
          label: "What's New",
          position: "left",
          activeBasePath: "docs/whats_new",
        },
        {
          to: "https://community.yellow.ai",
          label: "Community",
          position: "right",
        },
        {
          to: "https://cloud.yellow.ai",
          label: "Sign up for free",
          position: "right",
        },
      ],
    },
    footer: { links: [] },
    googleAnalytics: {
      // trackingID: "UA-135959729-1",
      trackingID: "UA-159942894-1",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
    "/js/bot.js" // connect support bot 
  ]
};
