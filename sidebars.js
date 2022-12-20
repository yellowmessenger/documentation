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
    // "tutorials/webinars",
  ],

  //cookbook- user guides 


  cookbooks: [

    "cookbooks/getting_started", 
    {
      type: "category",
      label: "Studio",
      collapsed: true,
      items: [
       // "cookbooks/conversation-design",
          "cookbooks/newcard",
          "cookbooks/studio/trigger-whatsappresponse",
          "cookbooks/studio/retriev-dbinfo",
          "cookbooks/studio/text-format",


      ],
    }, 
    {
      type: "category",
      label: "Marketplace templates",
      collapsed: true,
      items: [
        "cookbooks/marketplace-templates/edtech-template",
        "cookbooks/marketplace-templates/ecommerce-template",
      ],
    }, 
    {
      type: "category",
      label: "Inbox",
      collapsed: true,
      items: [
        "cookbooks/inbox/custom-usecases",
        "cookbooks/inbox/emailvschat",
        "cookbooks/inbox/notifyagents",
        "cookbooks/inbox/priority-assignee",
        "cookbooks/inbox/transferwithoutinfo",
      ],
    },    
    {
      type: "category",
      label: "Engage",
      collapsed: true,
      items: [
        "cookbooks/Upgrade_new_engage_app",
        "cookbooks/Understanding channels 101/email-outbound-101",

      ],
    }, 
    {
      type: "category",
      label: "Insights",
      collapsed: true,
      items: [
        "cookbooks/insights/eventdescriptions",

      ],
    }, 


    {
      type: "category",
      label: "Channels",
      collapsed: true,
      items: [

       /* {
          type: "category",
          label: "Understanding channels 101",
          collapsed: true,
          items: [
            "cookbooks/Understanding channels 101/whatsapp-chatbot-101",
            "cookbooks/Understanding channels 101/fbm-chatbot-101",
            "cookbooks/Understanding channels 101/gbm-chatbot-101",

          ],
        }, */
        

    {
      type: "category",
      label: "Voice as a channel",
      collapsed: true,
      items: [
        "cookbooks/voice-as-channel/overview",
        "cookbooks/voice-as-channel/gettingstarted",
        "cookbooks/voice-as-channel/understandingdelays",

        {
          type: "category",
          label: "Use-cases",
          collapsed: true,
          items: [
            "cookbooks/voice-as-channel/callforwarding",
            "cookbooks/voice-as-channel/callrecording",
            "cookbooks/voice-as-channel/waitmusic",
            "cookbooks/voice-as-channel/dtmf",
            "cookbooks/voice-as-channel/stt",
            "cookbooks/voice-as-channel/tts",
            "cookbooks/voice-as-channel/boostphrases",
            "cookbooks/voice-as-channel/localisation",
            "cookbooks/voice-as-channel/intentdetection",
            "cookbooks/voice-as-channel/excuteandswitchflow",
          ],
        },
      ],
    },   


    {
      type: "category",
      label: "WhatsApp as a channel",
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
          label: "Channel guide",
          collapsed: true,
          items: [
            "cookbooks/whatsapp-channel/whatsapp-channel-setup-guide",
            "cookbooks/whatsapp-channel/wa-migration"
          ],
        },
        {
          type: "category",
          label: "Things to know",
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
        "cookbooks/whatsapp-channel/testing",
        "cookbooks/whatsapp-channel/updates",
      ]
    }


  ],
},   

  ], // user guides end here




  platform_concepts: [

  // Get started/ Overview starts here  
    {
      type: "category",
      label: "Get Started",
      collapsed: true,
      items: [
   
        {
          type: "category",
          label: "Overview",
          collapsed: true,
          items: [
          
        "platform_concepts/getting-started",
    "platform_concepts/Getting Started/account-setup",
    "platform_concepts/Getting Started/user-account-settings",  ],
},
    

    {
      type: "category",
      label: "Get started with Platform",
      collapsed: true,
      items: [

        "platform_concepts/Getting Started/platform-offerings",
        "platform_concepts/Getting Started/marketplaceintro",
        "platform_concepts/Getting Started/create-a-bot",
        "platform_concepts/Getting Started/add-bot-collaborators",
        "platform_concepts/Getting Started/keyboard-shortcuts",
        "platform_concepts/Getting Started/api-keys",
        "platform_concepts/Getting Started/modify-bot-configuration",
        // "platform_concepts/Getting Started/subscription",


      ],
    },
    {
      type: "category",
      label: "User profile settings",
      collapsed: true,
      items: [
      ],
    },


      ]
    },




    // Studio starts here  
  
    {
      type: "category",
      label: "Studio",
      collapsed: true,
      items: [
        "platform_concepts/studio/overview",
        {
          type: "category",
          label: "Build your bot",
          collapsed: true,
          items: [
          
            //flows
            {
              type: "category",
              label: "Flows",
              collapsed: true,
              items: [          
            "platform_concepts/studio/build/Flows/journeys",
            "platform_concepts/studio/build/Flows/configureflow",
            "platform_concepts/studio/build/Flows/exportflow",

          ],
        },

            {
              type: "category",
              label: "Nodes",
              collapsed: true,
              items: [
                //"platform_concepts/studio/cloud-function",
                
                "platform_concepts/studio/build/nodes/nodes",
                "platform_concepts/studio/build/nodes/prompt-nodes",
                "platform_concepts/studio/build/nodes/message-nodes",
                "platform_concepts/studio/build/nodes/action-nodes",
                "platform_concepts/studio/build/nodes/logic-nodes",
              ],
            },
            "platform_concepts/studio/build/code",
           // "platform_concepts/studio/build/math-ops",
            "platform_concepts/studio/build/bot-variables",
            "platform_concepts/studio/build/localization",
          ],       
        },
      

        {
          type: "category",
          label: "Training bot data ",
          collapsed: true,
          items: [
            "platform_concepts/studio/train/intents",
            "platform_concepts/studio/train/entities",
            "platform_concepts/studio/train/add-faqs",
            "platform_concepts/studio/train/what-is-document-cognition",
            "platform_concepts/studio/train/synonyms",
            "platform_concepts/studio/train/smalltalk",
            "platform_concepts/studio/train/add-contextual-response",
           // "platform_concepts/studio/train/utterance-report",
            
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
           // "platform_concepts/studio/api/transformation-function",
            "platform_concepts/studio/api/api-settings",
            "cookbooks/studio/downloadapilogs",

          ],
        },

        "platform_concepts/studio/database",

        "platform_concepts/studio/events/event-hub",

        {
          type: "category",
          label: "Analysis",
          collapsed: true,
          items: [
            "platform_concepts/studio/analyze/chat-logs",
          ],
        },

        "cookbooks/studio/regressiontest",

        {
          type: "category",
          label: "Test and publish bot",
          collapsed: true,
          items: [
           // "platform_concepts/studio/test-and-publish-bot/bot-training",
            "platform_concepts/studio/test-and-publish-bot/debug-flow",
            "platform_concepts/studio/test-and-publish-bot/modes",
          
          ],
        },
        
        "platform_concepts/studio/tools",
        "platform_concepts/studio/languages-supported",
        "platform_concepts/studio/studio-faqs",
    
      ],
    },
  



// Inbox Section 

    {
      type: "category",
      label: "Inbox",
      collapsed: true,
      items: [

        //1. Overview 
        "platform_concepts/inbox/inbox",
        //2. monitor doc 
        "platform_concepts/inbox/monitor",
        //3. chats doc 
        {
          type: "category",
          label: "Chat Tickets",
          collapsed: true,
          items: [
            "platform_concepts/inbox/chats/getstartedwithlivechat",
            "platform_concepts/inbox/chats/chatscreen",
            "platform_concepts/inbox/chats/chatsearch",
            "platform_concepts/inbox/chats/videocall",
            "platform_concepts/inbox/chats/whatsapp-24hr-window-policy",
            "platform_concepts/inbox/chats/instagrampolicy",
                 ],
         },
        //4. tickets doc 
        {
          type: "category",
          label: "Email Tickets",
          collapsed: true,
          items: [
            "platform_concepts/inbox/tickets/setupandconfig",
            "platform_concepts/inbox/tickets/email-ticketing",
            "platform_concepts/inbox/tickets/emailticketstatus",
            "platform_concepts/inbox/tickets/manualticket",
            "platform_concepts/inbox/tickets/searchandfilter",
            "platform_concepts/inbox/tickets/bulkaction",
                  ],
        },

        //5. contacts doc
        "platform_concepts/inbox/contacts",

        //6. analytics - reports  
        {
          type: "category",
          label: "Analytics and Reports",
          collapsed: true,
          items: [
            {
              type: "category",
             label: "Analytics",
              collapsed: true,
             items: [
            

              "platform_concepts/inbox/analytics-reports/analytics",
              "platform_concepts/inbox/analytics-reports/reports/chats/chat-report-metrics",
                    ],
            },

            {
              type: "category",
              label: "Reports",
              collapsed: true,
              items: [
            "platform_concepts/inbox/analytics-reports/reports/reports",
            {
              type: "category",
              label: "Chats",
              collapsed: true,
              items: [
                "platform_concepts/inbox/analytics-reports/reports/chats/chat-agent-activity-report",
                "platform_concepts/inbox/analytics-reports/reports/chats/chat-agent-performance-report",
                "platform_concepts/inbox/analytics-reports/reports/chats/chat-archives-report",
              ],
            },
            {
              type: "category",
              label: "Email",
              collapsed: true,
              items: [
                "platform_concepts/inbox/analytics-reports/reports/tickets/ticket-agent-performance-report",
                "platform_concepts/inbox/analytics-reports/reports/tickets/ticket-archive-report",    
              ],
            },
              ],
             },
          ],
        },
        //7. knowledgebase 
        {
          type: "category",
          label: "Knowledgebase",
          collapsed: true,
          items: [
            "platform_concepts/inbox/knowledge-base/kboverview",
            "platform_concepts/inbox/knowledge-base/edit-publish-articles",
            "platform_concepts/inbox/knowledge-base/managingcategories",
                 ],           
       },


        //8. settings 
        {
          type: "category",
          label: "Inbox Settings",
          collapsed: true,
          items: [

            //productivity tools
            {
              type: "category",
              label: "Productivity tools settings",
              collapsed: true,
              items: [
              //add realtive paths here
              "platform_concepts/inbox/inbox-settings/productivitytools/canned-responses",
              "platform_concepts/inbox/inbox-settings/productivitytools/knowledgebase",
              "platform_concepts/inbox/inbox-settings/productivitytools/connecttosubdomain",
              "platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte",
                     ],
            },

          //teams
          {
            type: "category",
            label: "Teams settings",
            collapsed: true,
            items: [
            //add realtive paths here
            "platform_concepts/inbox/inbox-settings/team/agents",
            "platform_concepts/inbox/inbox-settings/team/groups",
            "platform_concepts/inbox/inbox-settings/team/chat_working_hours",
                    ],
          },

          //workflows
          {
            type: "category",
            label: "Workflow settings",
            collapsed: true,
            items: [
            "platform_concepts/inbox/inbox-settings/workflows/custom-status",
            "platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields",
            "platform_concepts/inbox/inbox-settings/workflows/sla",
            "platform_concepts/inbox/inbox-settings/workflows/chat-queue",
            "platform_concepts/inbox/inbox-settings/workflows/offline-chat",
            "platform_concepts/inbox/inbox-settings/workflows/chattranscript",
            "platform_concepts/inbox/inbox-settings/workflows/tags",
            "platform_concepts/inbox/inbox-settings/workflows/csat",
            "platform_concepts/inbox/inbox-settings/workflows/video-call-settings",
            "platform_concepts/inbox/inbox-settings/workflows/emailticketing",
                    ],
            },
            //automation
          {
            type: "category",
            label: "Automation settings",
            collapsed: true,
            items: [

              //auto assign
            {
            type: "category",
            label: "Auto assignment",
            collapsed: true,
            items: [
            "platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic",
            "platform_concepts/inbox/inbox-settings/automation/stickyagent",
            ],
          },

            "platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",
            //"platform_concepts/inbox/inbox-settings/automation/google-translate-api-inbox",
            "platform_concepts/inbox/inbox-settings/automation/agent-actions",
            "platform_concepts/inbox/inbox-settings/automation/chat-timeout",
                   ],
          },
            "platform_concepts/inbox/inbox-settings/security",
          ],
        },
    //other files
      ],
    },

// User 360

{
  type: "category",
  label: "User 360",
  collapsed: true,
  items: [
    "platform_concepts/engagement/cdp/overview",
    "platform_concepts/engagement/cdp/user360forbotsbefore01-06022",
    {
      type: "category",
      label: "Manage users",
      collapsed: true,
      items: [
        "platform_concepts/engagement/cdp/user_data/user_properties",
        "platform_concepts/engagement/cdp/user_data/add_users",
        "platform_concepts/engagement/cdp/user_data_segments/manage_user_data"
      ],
    },
    
    
   /* {
      type: "category",
      label: "Managing User data and Creating Segments",
      collapsed: true,
      items: [
        "platform_concepts/engagement/cdp/user_data_segments/cdp_data",
        "platform_concepts/engagement/cdp/user_data_segments/manage_user_data",
        "platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",
      ],
    }, */
   /* {
      type: "category",
      label: "Enriching User Profiles",
      collapsed: true,
      items: [
        "platform_concepts/engagement/cdp/enriching_user_profiles/user_id",
        "platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv",
        // "platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api",
        "platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data",
        // "platform_concepts/engagement/cdp/enriching_user_profiles/user_events",
      ],
    }, */
    {
      type: "category",
      label: "User segments",
      collapsed: true,
      items: [
        "platform_concepts/engagement/cdp/user_data_segments/segments_overview",
        "platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",
        "platform_concepts/engagement/cdp/user_data_segments/segment_usecases",
        // "platform_concepts/engagement/cdp/user_data/targeted_segments",
        // "platform_concepts/engagement/cdp/user_data/conv_in_builder",
        // "platform_concepts/engagement/cdp/user_data/campaign_in_engage",

      ],
    },
   /* {
      type: "category",
      label: "FAQs",
      collapsed: true,
      items: [
        "platform_concepts/engagement/cdp/faq/exclude_user_campaign",
        "platform_concepts/engagement/cdp/faq/date_based_campaign",
        "platform_concepts/engagement/cdp/faq/maintain_context_across_channel",
      ],
    }, */
  ],
},


// Engage module starts here 

    
    
    {
      type: "category",
      label: "Engage",
      collapsed: true,
      items: [
        "platform_concepts/engagement/engage",
        
        
            
        {
          type: "category",
          label: "Outbound campaigns",
          collapsed: true,
          items: [
                
            {
              type: "category",
              label: "Templates",
              collapsed: true,
              items: [
                "platform_concepts/engagement/outbound/templates/overview",
                "platform_concepts/engagement/outbound/templates/whatsapptemplate",
                "platform_concepts/engagement/outbound/templates/sms-template",
                "platform_concepts/engagement/outbound/templates/email-template",
                "platform_concepts/engagement/outbound/templates/viber-template",
                "platform_concepts/engagement/outbound/templates/mobilepush",
              ],
            },
           /* {
              type: "category",
              label: "Campaign",
              collapsed: true,
              items: [
                "platform_concepts/engagement/outbound/outbound-campaigns/email-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/sms-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/whatsapp-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/viber-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",
              ],
            }, */
            "platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",
            
          //  "platform_concepts/engagement/outbound/filter",
            "platform_concepts/engagement/outbound/outbound-campaigns/outbound-report",
            "platform_concepts/engagement/outbound/notification-engine",
            "platform_concepts/engagement/effectivelyuseengage",

           
          ],
        },
        
        {
          type: "category",
          label: "Workflow campaigns",
          collapsed: true,
          items: [
        "platform_concepts/engagement/workflowCampaign",
        "platform_concepts/engagement/event-triggered-campaign",
        "platform_concepts/engagement/workflow-report",
      ],
    },
        {
          type: "category",
          label: "Inbound campaigns",
          collapsed: true,
          items: [
            "platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign",
            "platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",
            "platform_concepts/engagement/inbound/gettingStarted/campaignsOverviewScreen",
          /*  {
              type: "category",
              label: "Getting Started",
              collapsed: true,
              items: [
                "platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign",
                "platform_concepts/engagement/inbound/gettingStarted/campaignsOverviewScreen",
                "platform_concepts/engagement/inbound/gettingStarted/testingInboundCampaign",
              ],
            }, */
          /*  {
              type: "category",
              label: "Inbound Widgets",
              collapsed: true,
              items: [
                "platform_concepts/engagement/inbound/inboundWidgets/typesOfWidgetsAndWidgetConfigurations",
                "platform_concepts/engagement/inbound/inboundWidgets/embedWidgetsOnWebsite",
                "platform_concepts/engagement/inbound/inboundWidgets/embedWidgetsOnShopify",
              ],
            }, */
           /* {
              type: "category",
              label: "Web Behaviour Triggers (When)",
              collapsed: true,
              items: [
                "platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",
                "platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm",
                "platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInContentMarketing",
              ],
            }, */
         /*   {
              type: "category",
              label: "Audience Targeting (Who)",
              collapsed: true,
              items: [
                "platform_concepts/engagement/inbound/audienceTargetting/audienceTargetingRules",
              ],
            }, */
            
          ],
          
        },
        "platform_concepts/engagement/engage_faqs",
      ],
    },



// Insights module starts here 


{
  type: "category",
  label: "Insights",
  collapsed: true,
  items: [
    "platform_concepts/growth/overview",
    "platform_concepts/growth/voiceoverview",
    
    {
      type: "category",
      label: "Metrics",
      collapsed: true,
      items: [
        "platform_concepts/growth/metrics",
        "platform_concepts/growth/api-usage",
      ],
    },

    {
      type: "category",
      label: "User Journeys",
      collapsed: true,
      items: [
        "platform_concepts/growth/user-journeys",
        "platform_concepts/growth/funnels",
      ],
    },

    "platform_concepts/growth/doccog",
    "platform_concepts/growth/data-explorer", 
    "platform_concepts/growth/dashboards",

    "platform_concepts/growth/goals",
    "platform_concepts/growth/faqs-user",
  ],
},



//Channels module starts here 

    {
      type: "category",
      label: "Channels",
      collapsed: true,
      items: [
        "platform_concepts/channelConfiguration/overview",
        "platform_concepts/channelConfiguration/alexa",
        "platform_concepts/channelConfiguration/web-widget",

        "platform_concepts/channelConfiguration/email-outbound",
        "platform_concepts/channelConfiguration/facebook-messenger",
        "platform_concepts/channelConfiguration/fb-lead-ads",
        "platform_concepts/channelConfiguration/fb-workplace",
        "platform_concepts/channelConfiguration/generic-webhook",
        "platform_concepts/channelConfiguration/google-assistant",
        "platform_concepts/channelConfiguration/googleChat",
        "platform_concepts/channelConfiguration/google-message",
        "platform_concepts/channelConfiguration/instagram",
        "platform_concepts/channelConfiguration/ivr-bots",
        "platform_concepts/channelConfiguration/Ivr",
        //"platform_concepts/channelConfiguration/slack",
        "platform_concepts/channelConfiguration/slack2",
        "platform_concepts/channelConfiguration/sms-outbound-india",
        "platform_concepts/channelConfiguration/teams",
        "platform_concepts/channelConfiguration/telegram",
        "platform_concepts/channelConfiguration/web",
        "platform_concepts/channelConfiguration/whatsapp-configuration",
        "platform_concepts/channelConfiguration/channels-faqs",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      
      collapsed: true,
      items: [
        "platform_concepts/appConfiguration/overview",
        "platform_concepts/appConfiguration/amazon-livechat",
        "platform_concepts/appConfiguration/avaya",
        "platform_concepts/appConfiguration/aws-s3",
        "platform_concepts/appConfiguration/azure-ad",
        "platform_concepts/appConfiguration/bamboohr",
        "platform_concepts/appConfiguration/billdesk",
        "platform_concepts/appConfiguration/camspay",
        "platform_concepts/appConfiguration/cashfree",
        "platform_concepts/appConfiguration/clevertap",
        "platform_concepts/appConfiguration/customliveagent",
        "platform_concepts/appConfiguration/freshchat",
        "platform_concepts/appConfiguration/freshservice",
        "platform_concepts/appConfiguration/freshteam",
        "platform_concepts/appConfiguration/genesys-cloud-livechat",
        "platform_concepts/appConfiguration/genesys",
        "platform_concepts/appConfiguration/google-calendar",
        "platform_concepts/appConfiguration/google-sheets",
        "platform_concepts/appConfiguration/hubspot-crm",
        "platform_concepts/appConfiguration/instamojo",
        "platform_concepts/appConfiguration/intercom-livechat",
        "platform_concepts/appConfiguration/jira",
        "platform_concepts/appConfiguration/kapture-crm",
        "platform_concepts/appConfiguration/leadSquared-wa-connector",
        "platform_concepts/appConfiguration/livechat-integration",
        "platform_concepts/appConfiguration/locobuzz-livechat",
        "platform_concepts/appConfiguration/magento",
        "platform_concepts/appConfiguration/microsoft-dynamics",
        "platform_concepts/appConfiguration/microsoft-graph",
        "platform_concepts/appConfiguration/nice-incontact",
        "platform_concepts/appConfiguration/netcore",
        "platform_concepts/appConfiguration/paytm",
        "platform_concepts/appConfiguration/payuBiz",
        "platform_concepts/appConfiguration/power-bi",
        "platform_concepts/appConfiguration/razorpay",
        "platform_concepts/appConfiguration/sap-io",
        "platform_concepts/appConfiguration/salesforcelivechat",
        "platform_concepts/appConfiguration/salesforce-service-cloud",
        "platform_concepts/appConfiguration/service-now",
        "platform_concepts/appConfiguration/sftp",
        "platform_concepts/appConfiguration/shopify",
        "platform_concepts/appConfiguration/stripe",
        "platform_concepts/appConfiguration/talisma",
        "platform_concepts/appConfiguration/twilio-verify",
        "platform_concepts/appConfiguration/successfactors",
        "platform_concepts/appConfiguration/webengage",
        "platform_concepts/appConfiguration/zalo",
        "platform_concepts/appConfiguration/zendesk-sunshine",
        "platform_concepts/appConfiguration/zendesk",
        "platform_concepts/appConfiguration/zoho-crm",
        "platform_concepts/appConfiguration/zoho-live-chat",
        "platform_concepts/appConfiguration/exposing-integration-to-app",
      ],
    },
    
   /* {
      type: "category",
      label: "Configurations",
      collapsed: true,
      items: [
      //  "platform_concepts/configurations/signup-post-bot-invite",
        "platform_concepts/configurations/subscription",
      ],
    },*/
    
    /*{
      type: "category",
      label: "Compliances",
      collapsed: true,
      items: ["platform_concepts/compliances/certifications"],
    },*/

        //next section - Mobile SDK

        {
          type: "category",
          label: "Mobile SDK",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Inbox",
              collapsed: true,
              items: [
              "platform_concepts/mobile/inbox/android",
              "platform_concepts/mobile/inbox/ios",
              "platform_concepts/mobile/inbox/cordova",
              ],
            },
            {
              type: "category",
              label: "ChatBot",
              collapsed: true,
              items: [
              "platform_concepts/mobile/chatbot/android",
              "platform_concepts/mobile/chatbot/cordova",
              "platform_concepts/mobile/chatbot/flutter",
              "platform_concepts/mobile/chatbot/ios",
              "platform_concepts/mobile/chatbot/react-native",
              "platform_concepts/mobile/chatbot/xamarin",
              ],
            },
            "platform_concepts/mobile/chatbot/mobile-sdk-faq",
          ],
        },




  ], 
  // Docs tab ends here


  // Product updates/ What's new tab starts here

  updates: [

    //Do not add/ remove this file
    "updates/overview",
    {
      type: "category",
      label: "2022 Updates",
      collapsed: true,
      items: [
        "updates/2022/oct2022",
        "updates/2022/sep_updates",
        "updates/2022/aug",
        "updates/2022/july",
        
      ],
    },
    // Prod update ends here.


    {
      type: "category",
      label: "Insights",
      collapsed: true,
      items: [],
    },
    {
      type: "category",
      label: "Inbox",
      collapsed: true,
      items: [],
    },
    {
      type: "category",
      label: "Engage",
      collapsed: true,
      items: [
      ],
    },
    {
      type: "category",
      label: "Channels",
      collapsed: true,
      items: [],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: true,
      items: [],
    },
    {
      type: "category",
      label: "Configurations",
      collapsed: true,
      items: [],
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