const path = require('path');
// const {components} = require('./src/plugins/components');

module.exports = {
  title: 'Yellow Messenger',
  tagline: 'The stream processor for mundane tasks',
  url: 'https://docs.yellowmessenger.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'yellowmessenger',
  projectName: 'documentation',
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
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('./src/plugins/prism_themes/monokai'),
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    image: 'img/og_img.png',
    metadatas: [{name: 'twitter:card', content: 'summary'}],
    navbar: {
      title: '',
      logo: {
        alt: 'Yellow Messenger',
        src: 'img/logo.png',
      },
      items: [
        {to: 'cookbooks', label: 'Guides', position: 'left'},
        {to: 'docs/documentation/overview', label: 'Documentation', position: 'left'},
        {to: 'docs/developer/overview', label: 'Developer Guide', position: 'left'},
        {to: 'docs/canary/introduction', label: 'Canary', position: 'left'},
        {to: 'docs/bumblebee/introduction', label: 'Bumblebee', position: 'left'},
        {to: 'videos', label: 'Videos', position: 'left'},
        {to: 'https://community.yellowmessenger.com', label: 'Community', position: 'right'},
        {to: 'https://cloud.yellowmessenger.com', label: 'Get started for free', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/guides/getting_started',
            },
            {
              label: 'Videos',
              to: 'videos',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join the chat',
              to: 'community',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Jeffail/benthos',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Get in touch',
              to: 'community',
            },
            {
              label: 'Mascot',
              to: 'blobfish',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yellow Messenger`,
    },
    googleAnalytics: {
      trackingID: 'UA-135959729-1',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Jeffail/benthos/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './src/plugins/cookbooks'),
    path.resolve(__dirname, './src/plugins/redirects'),
  ],
};
