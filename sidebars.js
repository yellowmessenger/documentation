const {listPaths,} = require('./src/plugins/components');
//
// let inputs_docs = listPaths("inputs");
// let processors_docs = listPaths("processors");
// let outputs_docs = listPaths("outputs");
// let caches_docs = listPaths("caches");
// let rate_limits_docs = listPaths("rate_limits");
// let buffers_docs = listPaths("buffers");
// let metrics_docs = listPaths("metrics");
// let tracers_docs = listPaths("tracers");

let components = listPaths();

module.exports = {
  bumblebee: ['bumblebee/introduction'],
  canary: ['canary/introduction'],
  developer: [
    'developer/overview',
    {
      type: 'category',
      label: 'Function reference',
      collapsed: false,
      items: [
        'developer/app/overview',
        ...components
      ],
    },
  ],
  documentation: [
    'documentation/overview',
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'documentation/concepts/overview',
        'documentation/concepts/journeys',
        'documentation/concepts/steps',
        'documentation/concepts/response-types',
        'documentation/concepts/knowledge-base',
        'documentation/concepts/training',
        'documentation/concepts/multilingual'
      ],
    },
    {
      type: 'category',
      label: 'Channel Configuration',
      collapsed: false,
      items: [
        'documentation/channel-configuration/overview',
        'documentation/channel-configuration/web',
        'documentation/channel-configuration/android',
        'documentation/channel-configuration/ios',
        'documentation/channel-configuration/whatsapp',
        'documentation/channel-configuration/fb-messenger',
        'documentation/channel-configuration/slack',
        'documentation/channel-configuration/teams',
      ],
    },
    {
      type: 'category',
      label: 'Compliances',
      collapsed: false,
      items: [
        'documentation/compliances/certifications',
      ],
    },
  ],
};
