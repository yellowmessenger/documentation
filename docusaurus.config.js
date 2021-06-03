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
      apiKey: '1893e11171bb8b2b019ada3bb475d5c6',
      indexName: 'yellowmessenger',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
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
          to: "docs/platform_concepts/studio/overview",
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
          to: "/docs/cookbooks/Academy",
          label: "Cookbooks",
          position: "left",
          activeBasePath: "/docs/cookbooks",
        },
        {
          // to: "howtos",
          to: "docs/howtos/basics/create-a-bot",
          // to: "docs/developer/overview",
          label: "How to's",
          position: "left",
          activeBasePath: "docs/howtos",
        },
        {
          to: "https://community.yellowmessenger.com",
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
      trackingID: "UA-135959729-1",
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
};
