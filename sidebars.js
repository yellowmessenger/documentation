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
      collapsed: true,
      items: [
        'developer/app/overview',
        ...components      
      ],
    },
    {
      type: 'category',
      label: 'API reference',
      collapsed: true,
      items: [
        'developer/app/apis/audience-api',
        'developer/app/apis/data-api',
        'developer/app/apis/platform-api',
      ],
    },
    {
      type: 'category',
      label: 'Events reference',
      collapsed: false,
      items: [
        'developer/app/events/agent-events',
        'developer/app/events/analytics-events',
        'developer/app/events/bot-events',
        'developer/app/events/user-events',
        'developer/app/events/voice-events',      
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
        'documentation/channel-configuration/alexa',
        'documentation/channel-configuration/google-assistant',
        'documentation/channel-configuration/hangouts',
        'documentation/channel-configuration/ivr-bots',
        'documentation/channel-configuration/generic-webhook',
        'documentation/channel-configuration/fb-workplace',
      ],
    },
    {
      type: 'category',
      label: 'App Configuration',
      collapsed: false,
      items: [
        'documentation/app-configuration/freshdesk',
        'documentation/app-configuration/power-bi',
        'documentation/app-configuration/razorpay',
        'documentation/app-configuration/salesforce',
        'documentation/app-configuration/zalo',
        'documentation/app-configuration/zendesk',
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
