const { listPaths } = require("./src/plugins/components");
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
  cookbooks: [
    "cookbooks/Academy",
    "cookbooks/data-layer",
    "cookbooks/document_cognition",
    "cookbooks/getting_started",
    "cookbooks/lead-gen-bot",
    "cookbooks/transfer_chat",
    // {
    //   type: "category",
    //   label: "Basic",
    //   items: [
    //     "cookbooks/Academy",
    //     "cookbooks/data-layer",
    //     "cookbooks/document_cognition",
    //     "cookbooks/getting_started",
    //     "cookbooks/lead-gen-bot",
    //     "cookbooks/transfer_chat",
    //   ],
    // },
  ],

  howtos: [
    {
      type: "category",
      label: "Basic",
      collapsed: false,
      items: [
        "howtos/basics/create-a-bot",
        "howtos/basics/signup-post-bot-invite",
        // "howtos/basics/publish-bot",
        "howtos/basics/access-management",
        "howtos/basics/add-faqs",
        "howtos/basics/compare-code",
        "howtos/basics/variables-in-UI",
        'howtos/basics/validate-input',
        'howtos/basics/manage-support-agent',
        'howtos/basics/database-search',
      ],
    },
    {
      type: "category",
      label: "Create",
      collapsed: true,
      items: [
        "howtos/create/cloud-function",
        "howtos/create/database-management",
        "howtos/create/api-management",
        "howtos/create/localisation",
        // "howtos/create/setup-did-you-mean",
        "howtos/create/whatsapp-notification-template",
        "howtos/create/whatsapp-notification-ym",
      ],
    },
    {
      type: "category",
      label: "Context Management",
      collapsed: true,
      items: ["howtos/context/add-contextual-response"],
    },
    {
      type: "category",
      label: "Web-Widget",
      collapsed: true,
      items: ["howtos/design/setup-web-widget"],
    },
  ],
  developer: [
    {
      type: "category",
      label: "Function reference",
      collapsed: true,
      items: ["developer/app/overview", ...components],
    },
    {
      type: "category",
      label: "API reference",
      collapsed: true,
      items: [
        "developer/app/apis/audience-api",
        "developer/app/apis/data-api",
        "developer/app/apis/platform-api",
      ],
    },
    {
      type: "category",
      label: "Events reference",
      collapsed: true,
      items: [
        "developer/app/events/agent-events",
        "developer/app/events/analytics-events",
        "developer/app/events/bot-events",
        "developer/app/events/user-events",
        "developer/app/events/voice-events",
      ],
    },
  ],

  documentation: [
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      items: [
        "documentation/concepts/overview",
        "documentation/concepts/journeys",
        "documentation/concepts/steps",
        "documentation/concepts/response-types-message",
        "documentation/concepts/response-types-action-logic",
        "documentation/concepts/template-journeys",
        "documentation/concepts/bot-knowledge",
        "documentation/concepts/training",
        "documentation/concepts/multilingual",
      ],
    },
    {
      type: "category",
      label: "Channel Configuration",
      collapsed: true,
      items: [
        "documentation/channelConfiguration/overview",
        "documentation/channelConfiguration/web",
        "documentation/channelConfiguration/android",
        "documentation/channelConfiguration/ios",
        "documentation/channelConfiguration/react-native",
        "documentation/channelConfiguration/whatsapp",
        "documentation/channelConfiguration/fb-messenger",
        "documentation/channelConfiguration/slack",
        "documentation/channelConfiguration/teams",
        "documentation/channelConfiguration/alexa",
        "documentation/channelConfiguration/google-assistant",
        "documentation/channelConfiguration/hangouts",
        "documentation/channelConfiguration/ivr-bots",
        "documentation/channelConfiguration/generic-webhook",
        "documentation/channelConfiguration/fb-workplace",
        "documentation/channelConfiguration/telegram",
        "documentation/channelConfiguration/fb-lead-ads",
      ],
    },
    {
      type: "category",
      label: "App Configuration",
      collapsed: true,
      items: [
        "documentation/appConfiguration/azure-ad",
        "documentation/appConfiguration/freshdesk",
        "documentation/appConfiguration/power-bi",
        "documentation/appConfiguration/razorpay",
        "documentation/appConfiguration/salesforce",
        "documentation/appConfiguration/successfactors",
        "documentation/appConfiguration/zalo",
        "documentation/appConfiguration/zendesk",
      ],
    },
    {
      type: "category",
      label: "Compliances",
      collapsed: true,
      items: ["documentation/compliances/certifications"],
    },
  ],
};
