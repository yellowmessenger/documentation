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

// let components = listPaths();

module.exports = {
  tutorials: [
  "tutorials/basics",
  "tutorials/studio",
  "tutorials/data",
  "tutorials/growth",
  "tutorials/inbox",
  "tutorials/engage",
  "tutorials/integrations",
  "tutorials/webinars",
  ],
  cookbooks: [
    "cookbooks/conversation-design",
    {
      type: "category",
      label: "Basic",
      items: ["cookbooks/multilingual"],
    },
    {
      type: "category",
      label: "Understanding channels 101",
      collapsed: true,
      items: [
        "cookbooks/Understanding channels 101/whatsapp-chatbot-101",
        "cookbooks/Understanding channels 101/fbm-chatbot-101",
        "cookbooks/Understanding channels 101/gbm-chatbot-101",
      ],
    },
    {
      type: "category",
      label: "Template/Example Bots",
      collapsed: false,
      items: [
        "cookbooks/template-bots/model-bot",
        // "cookbooks/template-bots/customer-support-bot",
        "cookbooks/template-bots/customer-support-bot",
        "cookbooks/template-bots/faq",
        "cookbooks/template-bots/lead-generation",
      ],
    },
    {
      type: "category",
      label: "All About Whatsapp Bots",
      collapsed: true,
      items: [
        "cookbooks/whatsapp cookbook/whatsapp-bot",
        "cookbooks/whatsapp cookbook/whatsapp-notification-template",
        "cookbooks/whatsapp cookbook/whatsapp-notification-ym",
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
        {
          type: "category",
          label: "Nodes",
          collapsed: true,
          items: [
            "platform_concepts/studio/steps/steps",
            "platform_concepts/studio/steps/prompts-and-messages",
            "platform_concepts/studio/steps/action-nodes-and-logic",
          ],
        },

        {
          type: "category",
          label: "Natural Language Understanding",
          collapsed: true,
          items: [
            "platform_concepts/studio/natural-language-understanding/intents",
            "platform_concepts/studio/natural-language-understanding/entities",
          ],
        },
        {
          type: "category",
          label: "Knowledge Management",
          collapsed: true,
          items: [
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
          items: [
            "platform_concepts/studio/api-management/add-api",
            "platform_concepts/studio/api-management/send-data",
            "platform_concepts/studio/api-management/receive-data",
          ],
        },
        {
          type: "category",
          label: "Context Management",
          collapsed: true,
          items: [
            "platform_concepts/studio/context-management/add-contextual-response",
          ],
        },


        "platform_concepts/studio/languages-supported",
        "platform_concepts/studio/tools",
        "platform_concepts/studio/bot-variables",
        "platform_concepts/studio/cloud-function",
        "platform_concepts/studio/modes",
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
        {
          type: "category",
          label: "Mobile SDK",
          collapsed: true,
          items: [
            "platform_concepts/inbox/mobilesdk/android",
            "platform_concepts/inbox/mobilesdk/cordova",
          ],
        },
        {
          type: "category",
          label: "Chats",
          collapsed: true,
          items: [
            "platform_concepts/inbox/Chat agent activity report",
            "platform_concepts/inbox/Chat agent performance report",
            "platform_concepts/inbox/Chat archives report",
            "platform_concepts/inbox/Chat auto translate",
            "platform_concepts/inbox/google-translate-api-inbox",
            "platform_concepts/inbox/Chat custom fields",
            "platform_concepts/inbox/Chat report metrics 101",
            "platform_concepts/inbox/Chat working hours"
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Engagement",
      collapsed: true,
      items: [
        "platform_concepts/engagement/engage",
        {
          type: "category",
          label: "Outbound Engagement",
          collapsed: true,
          items: ["platform_concepts/engagement/outbound/whatsappCampaign",
          "platform_concepts/engagement/outbound/templateManager/overview"],
        },
        {
          type: "category",
          label: "Inbound Engagement",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Getting Started",
              collapsed: true,
              items: [
                "platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign",
                "platform_concepts/engagement/inbound/gettingStarted/campaignsOverviewScreen",
                "platform_concepts/engagement/inbound/gettingStarted/testingInboundCampaign",
              ],
            },
            {
              type: "category",
              label: "Inbound Widgets",
              collapsed: true,
              items: [
                "platform_concepts/engagement/inbound/inboundWidgets/typesOfWidgets",
                "platform_concepts/engagement/inbound/inboundWidgets/embedWidgetsOnWebsite",
                "platform_concepts/engagement/inbound/inboundWidgets/embedWidgetsOnShopify",
                "platform_concepts/engagement/inbound/inboundWidgets/typesOfWidgetButtons",
              ],
            },
            {
              type: "category",
              label: "Web Behaviour Triggers (When)",
              collapsed: true,
              items: [
                "platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",
                "platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm",
                "platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInContentMarketing",
              ],
            },
            {
              type: "category",
              label: "Audience Targeting (Who)",
              collapsed: true,
              items: [
                "platform_concepts/engagement/inbound/audienceTargetting/audienceTargetingRules",
              ],
            },
          ],
        },
        //"platform_concepts/engagement/whatsappCampaign",
      ],
    },
    {
      type: "category",
      label: "Channel Configuration",
      collapsed: true,
      items: [
        "platform_concepts/channelConfiguration/web",
        "platform_concepts/channelConfiguration/android",
        "platform_concepts/channelConfiguration/ios",
        "platform_concepts/channelConfiguration/react-native",
        "platform_concepts/channelConfiguration/flutter",
        "platform_concepts/channelConfiguration/cordova",
        "platform_concepts/channelConfiguration/xamarin",
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
      label: "Integrations",
      collapsed: true,
      items: [
        "platform_concepts/appConfiguration/azure-ad",
        "platform_concepts/appConfiguration/freshdesk",
        "platform_concepts/appConfiguration/power-bi",
        "platform_concepts/appConfiguration/razorpay",
        "platform_concepts/appConfiguration/successfactors",
        "platform_concepts/appConfiguration/shopify",
        "platform_concepts/appConfiguration/zalo",
        "platform_concepts/appConfiguration/zendesk",
        "platform_concepts/appConfiguration/salesforce-service-cloud",
        "platform_concepts/appConfiguration/hubspot-crm"
      ],
    },
    {
      type: "category",
      label: "Configurations",
      collapsed: false,
      items: [
        "platform_concepts/configurations/signup-post-bot-invite",
        "platform_concepts/configurations/access-management",
        "platform_concepts/configurations/subscription",
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
  updates: [
    "updates/overview",
    {
      type: "category",
      label: "August 2021",
      collapsed: true,
      items: [
        "updates/aug_21/analytics",
        "updates/aug_21/builder",
        "updates/aug_21/inbox",
        "updates/aug_21/Integrations",
        "updates/aug_21/marketplace",
        "updates/aug_21/mobileApps",
        "updates/aug_21/UI"
      ],
    },
    {
      type: "category",
      label: "September 2021",
      collapsed: true,
      items: [
        "updates/sep_21/engage",
        "updates/sep_21/inbox"
      ],
    },
    {
      type: "category",
      label: "October 2021",
      collapsed: true,
      items: [
        "updates/oct_21/engage",
        "updates/oct_21/inbox"
      ],
    },
  ]
};
