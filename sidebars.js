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
    {
      type: "category",
      label: "Basic",
      items: [
        "cookbooks/Academy",
      ],
    },
    {
      type: "category",
      label: "Understanding channels 101",
      collapsed: true,
      items: [
        "cookbooks/Understanding channels 101/whatsapp-chatbot-101",
        "cookbooks/Understanding channels 101/fbm-chatbot-101",
        "cookbooks/Understanding channels 101/gbm-chatbot-101",
      ]
    },
    {
      type: "category",
      label: "Template/Example Bots",
      collapsed: true,
      items: [
        "cookbooks/template-bots/model-bot",
        "cookbooks/template-bots/customer-support",
        "cookbooks/template-bots/faq",
        "cookbooks/template-bots/lead-generation",
      ]
    }
  ],

  howtos: [
    {
      type: "category",
      label: "Basic",
      collapsed: false,
      items: [
        "howtos/basics/create-a-bot",
        "howtos/basics/signup-post-bot-invite",
        "howtos/basics/access-management",
        "howtos/basics/validate-input",
        "howtos/basics/sensitive-info",
      ],
    },
    {
      type: "category",
      label: "Create",
      collapsed: true,
      items: [
        "howtos/create/localisation",
        "howtos/create/whatsapp-bot",
        "howtos/create/whatsapp-notification-template",
        "howtos/create/whatsapp-notification-ym",
        "howtos/create/quickreply",
      ],
    },
  ],

  platform_concepts: [   
    "platform_concepts/getting-started",
    {
      type: "category",
      label: "Studio",
      collapsed: true,
      items: [
        "platform_concepts/studio/overview",
        "platform_concepts/studio/journeys",
        "platform_concepts/studio/steps",
        {
          type: "category",
          label: "Response Types",
          collapsed: true,
          items:[
            "platform_concepts/studio/response-types-message",
            "platform_concepts/studio/response-types-action-logic",
          ],
        },
        {
          type: "category",
          label: "Knowledge Management",
          collapsed: true,
          items:[
            "platform_concepts/studio/knowledge-management/add-faqs",
            "platform_concepts/studio/knowledge-management/what-is-document-cognition",
            "platform_concepts/studio/knowledge-management/AWS",
            "platform_concepts/studio/knowledge-management/Sharepoint",
          ],
        },
        {
          type: "category",
          label: "API Management",
          collapsed: true,
          items:[
            "platform_concepts/studio/api-management/add-api",
          ],
        },
        {
          type: "category",
          label: "Context Management",
          collapsed: true,
          items: [
            "platform_concepts/studio/context-management/add-contextual-response"
          ],
        },
        {
          type: "category",
          label: "Natural Language Understanding",
          collapsed: true,
          items: [
            "platform_concepts/studio/natural-language-understanding/training",
            "platform_concepts/studio/natural-language-understanding/intents",
            "platform_concepts/studio/natural-language-understanding/entities",
          ],
        },
        {
          type: "category",
          label: "Self learning",
          collapsed: true,
          items: [
            "platform_concepts/studio/self-learning/learn",
            "platform_concepts/studio/self-learning/conversation-logs",
          ],
        },
        "platform_concepts/studio/languages-supported",
        "platform_concepts/studio/tools",
        "platform_concepts/studio/bot-variables",
        "platform_concepts/studio/cloud-function",
      ],
    },
    {
      type: "category",
      label: "Data",
      collapsed: true,
      items: [
        "platform_concepts/data/create-tables",
        "platform_concepts/data/database-search",
      ],
    },
    {
      type: "category",
      label: "Growth",
      collapsed: true,
      items: [
        "platform_concepts/growth/growth",    
        "platform_concepts/growth/overview",
        "platform_concepts/growth/metrics",
        "platform_concepts/growth/funnels",
        "platform_concepts/growth/api-usage",
      ],
    },
    {
      type: "category",
      label: "Inbox",
      collapsed: true,
      items: [
        "platform_concepts/inbox/inbox",
        "platform_concepts/inbox/manage-support-agent",
        "platform_concepts/inbox/google-translate-api-inbox",
      ],
    },
    {
      type: "category",
      label: "Engagement",
      collapsed: true,
      items: [
        "platform_concepts/engagement/engage",
      ],
    },
    {
      type: "category",
      label: "Channel Configuration",
      collapsed: true,
      items: [
        "platform_concepts/channelConfiguration/overview",
        "platform_concepts/channelConfiguration/web",
        "platform_concepts/channelConfiguration/android",
        "platform_concepts/channelConfiguration/ios",
        "platform_concepts/channelConfiguration/react-native",
        "platform_concepts/channelConfiguration/whatsapp",
        "platform_concepts/channelConfiguration/facebook-messenger",
        "platform_concepts/channelConfiguration/slack",
        "platform_concepts/channelConfiguration/teams",
        "platform_concepts/channelConfiguration/alexa",
        "platform_concepts/channelConfiguration/google-assistant",
        "platform_concepts/channelConfiguration/hangouts",
        "platform_concepts/channelConfiguration/ivr-bots",
        "platform_concepts/channelConfiguration/generic-webhook",
        "platform_concepts/channelConfiguration/fb-workplace",
        "platform_concepts/channelConfiguration/telegram",
        "platform_concepts/channelConfiguration/fb-lead-ads",
        "platform_concepts/channelConfiguration/whatsapp-configuration",
        "platform_concepts/channelConfiguration/web-widget",
      ],
    },
    {
      type: "category",
      label: "App Configuration",
      collapsed: true,
      items: [
        "platform_concepts/appConfiguration/azure-ad",
        "platform_concepts/appConfiguration/freshdesk",
        "platform_concepts/appConfiguration/power-bi",
        "platform_concepts/appConfiguration/razorpay",
        "platform_concepts/appConfiguration/salesforce",
        "platform_concepts/appConfiguration/successfactors",
        "platform_concepts/appConfiguration/zalo",
        "platform_concepts/appConfiguration/zendesk",
      ],
    },
    {
      type: "category",
      label: "Compliances",
      collapsed: true,
      items: ["platform_concepts/compliances/certifications"],
    },
    {
      type: "category",
      label: "Omnichannel Notifications API",
      collapsed: true,
      items: [
        "platform_concepts/omniChannelNotifications/gettingStarted",
        "platform_concepts/omniChannelNotifications/sendMessage",
      ],
    },
  ],
};
