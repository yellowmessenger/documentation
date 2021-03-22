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
  howtos: [
    "howtos/overview",
    {
      type: "category",
      label: "Basic",
      collapsed: false,
      items: [
        "howtos/basics/create-a-bot",
        "howtos/basics/signup-post-bot-invite",
        "howtos/basics/publish-bot",
        "howtos/basics/access-management",
        "howtos/basics/add-faqs",
        "howtos/basics/compare-code",
      ],
    },
    {
      type: "category",
      label: "Create",
      collapsed: false,
      items: [
        "howtos/create/cloud-function",
        "howtos/create/database-management",
        "howtos/create/api-management",
        "howtos/create/localisation",
        "howtos/create/setup-did-you-mean",
      ],
    },
    {
      type: "category",
      label: "Context Management",
      collapsed: false,
      items: ["howtos/context/add-contextual-response"],
    },
    {
      type: "category",
      label: "Web-Widget",
      collapsed: false,
      items: ["howtos/design/setup-web-widget"],
    },
  ],
  developer: [
    "developer/overview",
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
      collapsed: false,
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
    "concepts/overview",
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      items: [
        "concepts/overview",
        "concepts/journeys",
        "concepts/steps",
        "concepts/response-types-message",
        "concepts/response-types-action-logic",
        "concepts/template-journeys",
        "concepts/bot-knowledge",
        "concepts/training",
        "concepts/multilingual",
      ],
    },
  ],
  channelConfiguration: [
    "channelConfiguration/overview",
    {
      type: "category",
      label: "Channel Configuration",
      collapsed: false,
      items: [
        "channelConfiguration/overview",
        "channelConfiguration/web",
        "channelConfiguration/android",
        "channelConfiguration/ios",
        "channelConfiguration/react-native",
        "channelConfiguration/whatsapp",
        "channelConfiguration/fb-messenger",
        "channelConfiguration/slack",
        "channelConfiguration/teams",
        "channelConfiguration/alexa",
        "channelConfiguration/google-assistant",
        "channelConfiguration/hangouts",
        "channelConfiguration/ivr-bots",
        "channelConfiguration/generic-webhook",
        "channelConfiguration/fb-workplace",
        "channelConfiguration/telegram",
      ],
    },
  ],
  appConfiguration: [
    "appConfiguration/overview",
    {
      type: "category",
      label: "App Configuration",
      collapsed: false,
      items: [
        "appConfiguration/azure-ad",
        "appConfiguration/freshdesk",
        "appConfiguration/power-bi",
        "appConfiguration/razorpay",
        "appConfiguration/salesforce",
        "appConfiguration/successfactors",
        "appConfiguration/zalo",
        "appConfiguration/zendesk",
      ],
    },
  ],
  compliances: [
    "compliances/overview",
    {
      type: "category",
      label: "Compliances",
      collapsed: false,
      items: ["compliances/certifications"],
    },
  ],
};
