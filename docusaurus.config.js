const path = require("path");

module.exports = {
  title: "yellow.ai",
  tagline: "Conversational AI cloud for all",
  url: "https://docs.yellow.ai",
  baseUrl: "/",
  favicon: "img/favicon.svg",
  trailingSlash: false,
  organizationName: "yellowmessenger",
  projectName: "documentation",

  themeConfig: {
    algolia: {
      apiKey: "b91fb91a4d3a5067f2f5165bb92c9fa8",
      indexName: "ym_docs",
      appId: "LWOORM11IH",
      contextualSearch: true,
      searchParameters: {},
      placeholder: "Search docs",
    },
    prism: {
      darkTheme: require("./src/plugins/prism_themes/monokai"),
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: "img/og_img.png",
    metadata: [{ name: "twitter:card", content: "summary" }],
    navbar: {
      title: "",
      logo: {
        alt: "yellow.ai",
        src: "img/Yai-logo-yellow.svg",
        srcDark: "img/Yellow.ai_Logo-1.png",
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
          to: "/api",
          label: "API Reference",
          position: "left",
          activeBasePath: "/api",
        },
        {
          to: "/whats-new",
          label: "What's New",
          position: "left",
          activeBasePath: "/whats-new",
        },
        {
          to: "docs/tutorials/basics",
          label: "Videos",
          position: "right",
          activeBasePath: "docs/tutorials",
        },
        {
          to: "https://community.yellow.ai",
          label: "Community",
          position: "right",
        },
        {
          to: "https://cloud.yellow.ai/auth/signup?utm_source=SupportDocs&utm_medium=doc_navbar&utm_campaign=docs_april_23",
          label: "Try for free",
          position: "right",
          className: "free-signup",
        },
      ],
    },
    footer: { links: [] },
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      {
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        api: {
          path: "api/petstore.yaml",
          routeBasePath: "/api",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    path.resolve(__dirname, "./src/plugins/redirects"),
    path.resolve(__dirname, "./src/plugins/webpack-dev-server"),
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-NDQJKXFGTV",
        anonymizeIP: true,
      },
    ],
  ],

  stylesheets: [
    "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
    "https://fonts.googleapis.com/css2?family=Roboto&family=Source+Sans+Pro&display=swap",
  ],

  onBrokenLinks: "log",

  clientModules: [
    require.resolve("./src/client-modules/client-module"),
  ],

  scripts: [
    "/js/FeedbackFooter.js",
    "/js/bot.js",
  ],
};
