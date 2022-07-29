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
    "cookbooks/getting_started",
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
        "cookbooks/Understanding channels 101/email-outbound-101",
        "cookbooks/Understanding channels 101/sms-india-101",
      ],
    },
    {
      type: "category",
      label: "Template Bots",
      collapsed: true,
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
      label: "WhatsApp As A Channel",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Introduction",
          collapsed: true,
          items: [
            "cookbooks/whatsapp-channel/whatsapp-channel",
            "cookbooks/whatsapp-channel/bot-basics",
            
          ],
        },
        {
          type: "category",
          label: "Channel Guide",
          collapsed: true,
          items: [
            "cookbooks/whatsapp-channel/whatsapp-channel-setup-guide",
            "cookbooks/whatsapp-channel/setup-steps",
            "cookbooks/whatsapp-channel/wa-migration"
          ],
        },
        {
          type: "category",
          label: "Things To Know",
          collapsed: true,
          items: [
            "cookbooks/whatsapp-channel/things-to-know",
            "cookbooks/whatsapp-channel/sending-notifications",
            "cookbooks/whatsapp-channel/approval",
            "cookbooks/whatsapp-channel/wa-capturing-qr"
          ],
        },
        "cookbooks/whatsapp-channel/building-flows",
        "cookbooks/whatsapp-channel/faqs",
        "cookbooks/whatsapp-channel/testing"
      ]
    }
  ],

  platform_concepts: [
    "platform_concepts/getting-started",
    {
      type: "category",
      label: "Studio",
      collapsed: true,
      items: [
        "platform_concepts/studio/overview",
        {
          type: "category",
          label: "Build",
          collapsed: true,
          items: [
            "platform_concepts/studio/build/journeys",
            {
              type: "category",
              label: "Nodes",
              collapsed: true,
              items: [
                //"platform_concepts/studio/cloud-function",
                "platform_concepts/studio/build/nodes/nodes",
                "platform_concepts/studio/build/nodes/message-nodes",
                "platform_concepts/studio/build/nodes/prompt-nodes",
                "platform_concepts/studio/build/nodes/action-nodes",
                "platform_concepts/studio/build/nodes/logic-nodes"
              ],
            },
            "platform_concepts/studio/build/code",
            "platform_concepts/studio/build/bot-variables",
            "platform_concepts/studio/build/localization",
           
          ],       
        },
      

        {
          type: "category",
          label: "Train",
          collapsed: true,
          items: [
            "platform_concepts/studio/train/intents",
            "platform_concepts/studio/train/entities",
            "platform_concepts/studio/train/add-faqs",
            "platform_concepts/studio/train/add-contextual-response",
            "platform_concepts/studio/train/what-is-document-cognition",
            "platform_concepts/studio/train/utterance-report",
            "platform_concepts/studio/train/tools",
          ],
        },
        
        {
          type: "category",
          label: "API",
          collapsed: true,
          items: [
            "platform_concepts/studio/api/add-api",
            "platform_concepts/studio/api/send-data",
            "platform_concepts/studio/api/receive-data",
            "platform_concepts/studio/api/enviroment-variables",
            "platform_concepts/studio/api/bearer-token",
            "platform_concepts/studio/api/transformation-function",
          ],
        },

        {
          type: "category",
          label: "Table",
          collapsed: true,
          items: [
            "platform_concepts/studio/table/create-tables",
            "platform_concepts/studio/table/database-search",
          ],
        },
        {
          type: "category",
          label: "Events",
          collapsed: true,
          items: [
            "platform_concepts/studio/events/event-hub",
          ],
        },

        {
          type: "category",
          label: "Analyze",
          collapsed: true,
          items: [
            "platform_concepts/studio/analyze/chat-logs",
          ],
        },

        {
          type: "category",
          label: "Test and Publish bots",
          collapsed: true,
          items: [
            "platform_concepts/studio/test-and-publish-bot/bot-training",
            "platform_concepts/studio/test-and-publish-bot/debug-flow",
            "platform_concepts/studio/test-and-publish-bot/modes",
          
          ],
        },
        
        "platform_concepts/studio/languages-supported",
    
      ],
    },
  
    {
      type: "category",
      label: "Insights",
      collapsed: true,
      items: [
        "platform_concepts/growth/growth",
        "platform_concepts/growth/overview",
        "platform_concepts/growth/metrics",
        "platform_concepts/growth/api-usage",

        {
          type: "category",
          label: "User Journeys",
          collapsed: true,
          items: [
            "platform_concepts/growth/user-journeys",
            "platform_concepts/growth/funnels",
          ],
        },

        "platform_concepts/growth/data-explorer",
        "platform_concepts/growth/dashboards",
      ],
    },
    {
      type: "category",
      label: "Inbox",
      collapsed: true,
      items: [
        "platform_concepts/inbox/inbox",
        "platform_concepts/inbox/manage-support-agent",
        "platform_concepts/inbox/tickets-assignment-logic",
        "platform_concepts/inbox/default-agent-statuses",
        "platform_concepts/inbox/inbox-settings/custom-usecases",

        {
          type: "category",
          label: "Inbox Settings",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Chat Configuration",
              collapsed: true,
              items: [
                "platform_concepts/inbox/inbox-settings/chats-configuration/tags",
                "platform_concepts/inbox/inbox-settings/chats-configuration/chat-timeout",
                "platform_concepts/inbox/inbox-settings/chats-configuration/custom-fields",
                "platform_concepts/inbox/inbox-settings/chats-configuration/csat",
                "platform_concepts/inbox/inbox-settings/chats-configuration/chat-queue",
                "platform_concepts/inbox/inbox-settings/chats-configuration/offline-chat",
                "platform_concepts/inbox/inbox-settings/chats-configuration/email-transcript",
                "platform_concepts/inbox/inbox-settings/chats-configuration/chat-autotranslate",
                "platform_concepts/inbox/inbox-settings/chats-configuration/custom-status",
                "platform_concepts/inbox/inbox-settings/chats-configuration/canned-responses",
                "platform_concepts/inbox/inbox-settings/agent-configuration/agent-actions",
                "platform_concepts/inbox/inbox-settings/chats-configuration/video-call-settings",

              ],
            },
            {
              type: "category",
              label: "Agent Configuration",
              collapsed: true,
              items: [
                "platform_concepts/inbox/inbox-settings/agent-configuration/agent-settings",
                "platform_concepts/inbox/inbox-settings/agent-configuration/working-hours",
              ],
            },
            "platform_concepts/inbox/inbox-settings/productivity-tools",
            "platform_concepts/inbox/inbox-settings/security",
            "platform_concepts/inbox/inbox-settings/groups",
          ],
        },
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
            // "platform_concepts/inbox/inbox-settings/chats-configuration/types-of-chat",
            "platform_concepts/inbox/chats/types-of-chat",
            "platform_concepts/inbox/whatsapp-24hr-window-policy",
            "platform_concepts/inbox/Chat auto translate",
            "platform_concepts/inbox/google-translate-api-inbox",
            "platform_concepts/inbox/Chat custom fields",
            "platform_concepts/inbox/Chat working hours",
            {
              type: "category",
              label: "Reports",
              collapsed: true,
              items: [
                "platform_concepts/inbox/chats/reports/reports",
                "platform_concepts/inbox/chats/reports/chat-report-metrics",
                "platform_concepts/inbox/chats/reports/chat-agent-activity-report",
                "platform_concepts/inbox/chats/reports/chat-agent-performance-report",
                "platform_concepts/inbox/chats/reports/chat-archives-report",
                "platform_concepts/inbox/chats/reports/ticket-agent-performance-report",
                "platform_concepts/inbox/chats/reports/ticket-archive-report",
              ],           
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Engagement",
      collapsed: true,
      items: [
        "platform_concepts/engagement/engage",
        "platform_concepts/engagement/effectivelyuseengage",
        {
          type: "category",
          label: "Outbound Engagement",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "User360",
              collapsed: true,
              items: [
                "platform_concepts/engagement/outbound/cdp/overview",
                "platform_concepts/engagement/outbound/cdp/user360forbotsbefore01-06022",
                {
                  type: "category",
                  label: "Managing User data and Creating Segments",
                  collapsed: true,
                  items: [
                    "platform_concepts/engagement/outbound/cdp/user_data_segments/cdp_data",
                    "platform_concepts/engagement/outbound/cdp/user_data_segments/manage_user_data",
                    "platform_concepts/engagement/outbound/cdp/user_data_segments/creating_managing_user_segment",
                  ],
                },
                {
                  type: "category",
                  label: "Enriching User Profiles",
                  collapsed: true,
                  items: [
                    "platform_concepts/engagement/outbound/cdp/enriching_user_profiles/user_id",
                    "platform_concepts/engagement/outbound/cdp/enriching_user_profiles/create_audience_group_csv",
                    "platform_concepts/engagement/outbound/cdp/enriching_user_profiles/send_user_data_event_rest_api",
                    "platform_concepts/engagement/outbound/cdp/enriching_user_profiles/builder_capture_data",
                    "platform_concepts/engagement/outbound/cdp/enriching_user_profiles/user_events",
                  ],
                },
                {
                  type: "category",
                  label: "Getting The Most From Your User Data",
                  collapsed: true,
                  items: [
                    "platform_concepts/engagement/outbound/cdp/user_data/targeted_segments",
                    "platform_concepts/engagement/outbound/cdp/user_data/conv_in_builder",
                    "platform_concepts/engagement/outbound/cdp/user_data/campaign_in_engage",

                  ],
                },
                {
                  type: "category",
                  label: "FAQs",
                  collapsed: true,
                  items: [
                    "platform_concepts/engagement/outbound/cdp/faq/exclude_user_campaign",
                    "platform_concepts/engagement/outbound/cdp/faq/date_based_campaign",
                    "platform_concepts/engagement/outbound/cdp/faq/maintain_context_across_channel",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Templates",
              collapsed: true,
              items: [
                "platform_concepts/engagement/outbound/templates/overview",
                "platform_concepts/engagement/outbound/templates/sms-template",
                "platform_concepts/engagement/outbound/templates/email-template",
              ],
            },
            {
              type: "category",
              label: "Campaigns",
              collapsed: true,
              items: [
                "platform_concepts/engagement/outbound/outbound-campaigns/email-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/sms-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/whatsapp-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",
              ],
            },
            "platform_concepts/engagement/outbound/filter",
            "platform_concepts/engagement/outbound/notification-engine",
          ],
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
                "platform_concepts/engagement/inbound/inboundWidgets/typesOfWidgetsAndWidgetConfigurations",
                "platform_concepts/engagement/inbound/inboundWidgets/embedWidgetsOnWebsite",
                "platform_concepts/engagement/inbound/inboundWidgets/embedWidgetsOnShopify",
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
      ],
    },
    {
      type: "category",
      label: "Channel Configuration",
      collapsed: true,
      items: [
        "platform_concepts/channelConfiguration/alexa",
        "platform_concepts/channelConfiguration/android",
        "platform_concepts/channelConfiguration/cordova",
        "platform_concepts/channelConfiguration/email-outbound",
        "platform_concepts/channelConfiguration/facebook-messenger",
        "platform_concepts/channelConfiguration/fb-lead-ads",
        "platform_concepts/channelConfiguration/fb-workplace",
        "platform_concepts/channelConfiguration/flutter",
        "platform_concepts/channelConfiguration/generic-webhook",
        "platform_concepts/channelConfiguration/google-assistant",
        "platform_concepts/channelConfiguration/googleChat",
        "platform_concepts/channelConfiguration/instagram",
        "platform_concepts/channelConfiguration/ios",
        "platform_concepts/channelConfiguration/ivr-bots",
        "platform_concepts/channelConfiguration/react-native",
        "platform_concepts/channelConfiguration/slack",
        "platform_concepts/channelConfiguration/sms-outbound-india",
        "platform_concepts/channelConfiguration/teams",
        "platform_concepts/channelConfiguration/telegram",
        "platform_concepts/channelConfiguration/web-widget",
        "platform_concepts/channelConfiguration/web",
        "platform_concepts/channelConfiguration/whatsapp-configuration",
        "platform_concepts/channelConfiguration/xamarin",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: true,
      items: [
        "platform_concepts/appConfiguration/azure-ad",
        "platform_concepts/appConfiguration/camspay",
        "platform_concepts/appConfiguration/freshdesk",
        "platform_concepts/appConfiguration/genesys-cloud-livechat",
        "platform_concepts/appConfiguration/google-calendar",
        "platform_concepts/appConfiguration/google-sheets",
        "platform_concepts/appConfiguration/hubspot-crm",
        "platform_concepts/appConfiguration/intercom-livechat",
        "platform_concepts/appConfiguration/leadSquared-wa-connector",
        "platform_concepts/appConfiguration/microsoft-dynamics",
        "platform_concepts/appConfiguration/microsoft-graph",
        "platform_concepts/appConfiguration/payuBiz",
        "platform_concepts/appConfiguration/power-bi",
        "platform_concepts/appConfiguration/razorpay",
        "platform_concepts/appConfiguration/salesforce-service-cloud",
        "platform_concepts/appConfiguration/service-now",
        "platform_concepts/appConfiguration/sftp",
        "platform_concepts/appConfiguration/shopify",
        "platform_concepts/appConfiguration/stripe",
        "platform_concepts/appConfiguration/twilio-verify",
        "platform_concepts/appConfiguration/successfactors",
        "platform_concepts/appConfiguration/zalo",
        "platform_concepts/appConfiguration/zendesk-sunshine",
        "platform_concepts/appConfiguration/zendesk",
        "platform_concepts/appConfiguration/zoho-crm",
        "platform_concepts/appConfiguration/zoho-live-chat",
        "platform_concepts/appConfiguration/jira",
      ],
    },
    {
      type: "category",
      label: "Configurations",
      collapsed: true,
      items: [
        "platform_concepts/configurations/signup-post-bot-invite",
        "platform_concepts/configurations/access-management",
        "platform_concepts/configurations/subscription",
        "platform_concepts/configurations/api-keys",
      ],
    },
    {
      type: "category",
      label: "Compliances",
      collapsed: true,
      items: ["platform_concepts/compliances/certifications"],
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
      ],
    },
    {
      type: "category",
      label: "September 2021",
      collapsed: true,
      items: ["updates/sep_21/engage", "updates/sep_21/inbox"],
    },
    {
      type: "category",
      label: "October 2021",
      collapsed: true,
      items: ["updates/oct_21/engage", "updates/oct_21/inbox"],
    },
  ],
  glossary: [
    // "glossary/advanced-virtual-assistants",
    // "glossary/agent-assist",

    {
      type: "category",
      label: "CAIP",
      collapsed: false,
      items: [
        "glossary/advanced-virtual-assistants",
        "glossary/chatbot",
        "glossary/conversational-ai",
        "glossary/conversational-history",
        "glossary/cpaas",
        "glossary/csat",
        "glossary/customer-engagement",
        "glossary/customer-experience",
        "glossary/multimodal-capabilities",
        "glossary/total-experience-automation",
        "glossary/virtual-assistant",
        "glossary/voice-only",
      ],
    },
    {
      type: "category",
      label: "Product",
      collapsed: true,
      items: [
        "glossary/agent-assist",
        "glossary/behaviour-prediction",
        "glossary/biometric-authentication",
        "glossary/bot-fallback",
        "glossary/clarifying-dialogue",
        "glossary/compound-response-generation",
        "glossary/contextualization",
        "glossary/custom-UI",
        "glossary/customer-experience-automation",
        "glossary/human-fallback",
        "glossary/human-to-bot-handover",
        "glossary/intent-marketplace",
        "glossary/intermediary-dialogue",
        "glossary/language-support",
        "glossary/language-variant",
        "glossary/multimodal-rendering",
        "glossary/omnichannel",
        "glossary/orchestration",
        "glossary/parked-intents",
        "glossary/personalization",
        "glossary/pinpoint-improvements",
        "glossary/pretrained-intents",
        "glossary/proactive-conversations",
        "glossary/propose-improvements",
        "glossary/quality-assurance",
        "glossary/reinforcement-learning",
        "glossary/self-service-routing",
        "glossary/small-talk-handling",
        "glossary/text-to-speech",
      ],
    },
    {
      type: "category",
      label: "Channel",
      collapsed: true,
      items: ["glossary/chat", "glossary/rich-communication-service"],
    },
    {
      type: "category",
      label: "Product - Integrations",
      collapsed: true,
      items: [
        "glossary/bot-to-bot-communication-using-natural-language",
        "glossary/capability-directory",
        "glossary/custom-integration",
        "glossary/custom-intent-registry",
        "glossary/decision-tree-node-integration",
        "glossary/integration-platform",
        "glossary/keyword-or-phrase-matching",
        "glossary/second-third-party-user-data",
      ],
    },
    {
      type: "category",
      label: "Engineering",
      collapsed: true,
      items: [
        "glossary/confirmational-cues",
        "glossary/deferred-handling",
        "glossary/deferred-intent",
        "glossary/expression-and-behavior-rendering",
        "glossary/full-duplex-handling",
        "glossary/knowledge-extraction",
        "glossary/knowledge-mapping",
        "glossary/language-decomposition",
        "glossary/language-detection",
        "glossary/modality-switching",
        "glossary/natural-language-generation",
        "glossary/process-mapping",
        "glossary/script-generation",
        "glossary/search",
        "glossary/search-and-summarization",
        "glossary/sentence-rewriting",
        "glossary/sentiment-analysis",
        "glossary/supervised-learning-loop",
        "glossary/voice-synthesis",
      ],
    },
  ],
};
