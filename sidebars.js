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
    "tutorials/engage",
    "tutorials/channels",
  //    "tutorials/growth",
    "tutorials/inbox",
    "tutorials/integrations",
  ],

  //cookbook- user guides 

  cookbooks: [

    "cookbooks/getting_started", 
    "cookbooks/migration-guide",
 
  


  // Studio  
    {
      type: "category",
      label: "Studio",
      collapsed: true,
      items: [
       // "cookbooks/conversation-design",
          "cookbooks/studio/newcard",
          "cookbooks/studio/trigger-whatsappresponse",
          "cookbooks/studio/retriev-dbinfo",
          "cookbooks/studio/multilingual-bot",
          "cookbooks/studio/build-bot",
          "cookbooks/studio/hide-input",
          "cookbooks/studio/dynamic-quickreplies",
          "cookbooks/studio/images-languages",
          "cookbooks/studio/storeApiResponse",
          "cookbooks/studio/qr-node",
          "cookbooks/studio/usecases-functions",

      ],
    }, 

// Marketplace
    {
      type: "category",
      label: "Marketplace",
      link: {type: 'doc', id: 'platform_concepts/Getting Started/marketplaceintro'},
      collapsed: true,
      items: [
        "cookbooks/marketplace-templates/edtech-template",
        "cookbooks/marketplace-templates/ecommerce-template",
        "cookbooks/marketplace-templates/saas",
       "cookbooks/marketplace-templates/bfsi",
       "cookbooks/marketplace-templates/healthcare_template"
      ],
    }, 



// inbox
{
  type: "category",
  label: "Inbox",
  collapsed: true,
  items: [
    "cookbooks/inbox/custom-usecases",
    "cookbooks/inbox/alias",
    "cookbooks/inbox/csatreport",
    "cookbooks/inbox/ticketclose-message",
    "cookbooks/inbox/notifyagents",
    "cookbooks/inbox/priority-assignee",
    "cookbooks/inbox/transferwithoutinfo",
  ],
},    
// end of inbox 

//insights 
{
  type: "category",
  label: "Insights",
  collapsed: true,
  items: [
    "cookbooks/insights/convissue",
    "cookbooks/insights/eventdescriptions",
    "cookbooks/insights/botagentfedback",
    "cookbooks/insights/schedulerawreports",
    "cookbooks/insights/toptriggeredintents",

  ],
}, 
//end of insights 

//engage
{
  type: "category",
  label: "Engage",
  collapsed: true,
  items: [
    // "cookbooks/Upgrade_new_engage_app",
    "cookbooks/engage/email-outbound-101",
    "cookbooks/engage/optout-campaigns",
    "cookbooks/engage/shopify-events",

  ],
}, 
//end of engage 

// Integrations
{
  type: "category",
  label: "Integrations",
  collapsed: true,
  items: [
    "cookbooks/integrations/parseapi",
  ],
}, 
//end of integrations


  ], // user guides end here




  platform_concepts: [

  // Get started/ Overview starts here  
    {
      type: "category",
      label: "Get started with yellow.ai",
      link: {type: 'doc', id: 'platform_concepts/getting-started'},
      collapsed: true,
      items: [
      "platform_concepts/Getting Started/account-setup",
      "platform_concepts/Getting Started/upgrade",  

      "platform_concepts/Getting Started/resources",
      "platform_concepts/Getting Started/user-account-settings", 
      "platform_concepts/Getting Started/add-bot-collaborators",
      "platform_concepts/Getting Started/chattranscriptsecurity",
      "platform_concepts/Getting Started/modify-bot-configuration",
      "platform_concepts/Getting Started/publish-env",

      "platform_concepts/Getting Started/platform-offerings",
      "platform_concepts/Getting Started/keyboard-shortcuts",
      //"platform_concepts/Getting Started/api-keys",
      "platform_concepts/Getting Started/yellow-search-feature",

 

    //"platform_concepts/Getting Started/create-a-bot",

      ]
    },

// Design starts here

// {
//   type: "category",
//   label: "Design",
//   collapsed: true,
//   items: [
//       "platform_concepts/design/convdesignvoice",   
//         ],
// },



    // Studio starts here  
  
    {
      type: "category",
      label: "Studio",
      link: {type: 'doc', id: 'platform_concepts/studio/overview'},
      collapsed: true,
      items: [
       // "platform_concepts/studio/overview",

       {
        type: "category",
        label: "KnowledgeBase ",
        collapsed: true,
        items: [
          "platform_concepts/studio/kb/overview",
          "platform_concepts/studio/kb/ingestion",
          "platform_concepts/studio/kb/integrations",
          
        ],
      },       
      
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
            "platform_concepts/studio/build/Flows/ai-copilot",         
            "platform_concepts/studio/build/Flows/journeys",
            "platform_concepts/studio/build/Flows/configureflow",
            "platform_concepts/studio/build/Flows/exportflow",
          ],
        },
        
            {
              type: "category",
              label: "Nodes",
              link: {type: 'doc', id: 'platform_concepts/studio/build/nodes/nodes'},
              collapsed: true,
              items: [
              //"platform_concepts/studio/cloud-function",
              // "platform_concepts/studio/build/nodes/nodes",
                "platform_concepts/studio/build/nodes/prompt-nodes",
                "platform_concepts/studio/build/nodes/message-nodes",
                "platform_concepts/studio/build/nodes/action-nodes",
                "platform_concepts/studio/build/nodes/logic-nodes",
              ],
            },
            {
              type: "category",
              label: "User record management",
             link: {type: 'doc', id: 'platform_concepts/engagement/cdp/user_data/data_capture_convers'},
             items: [ 
                "platform_concepts/engagement/cdp/user_data/userid-flow",
                "platform_concepts/engagement/cdp/user_data/store_conv_data",
                "platform_concepts/engagement/cdp/user_data/personalise_conversations",
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
            
          ],
        },
        
        {
          type: "category",
          label: "Fetch data via API",
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
          label: "Chat log analysis and training evaluation",
          collapsed: true,
          items: [
            "platform_concepts/studio/analyze/chat-logs",
            "platform_concepts/studio/analyze/training-performance",
          ],
        },

        {
          type: "category",
          label: "Test and publish bot",
          collapsed: true,
          items: [
           // "platform_concepts/studio/test-and-publish-bot/bot-training",
            "platform_concepts/studio/test-and-publish-bot/debug-flow",
            "cookbooks/studio/regressiontest",
            "platform_concepts/studio/test-and-publish-bot/modes",
          
          ],
        },
        
        "platform_concepts/studio/tools",
        "platform_concepts/studio/orchestrator", 
        "platform_concepts/studio/studio-faqs",
    
      ],
    },
  

  
// Voice docs 
{
  type: "category",
  label: "AI Voice bot builder",
  link: {type: 'doc', id: 'cookbooks/voice-as-channel/vbintro'},
  collapsed: true,
  items: [
        "cookbooks/voice-as-channel/voiceoverview",
        "cookbooks/voice-as-channel/voicearchitecture",
        "cookbooks/voice-as-channel/components", 
        "cookbooks/voice-as-channel/transfertoagent",
        "cookbooks/voice-as-channel/callmgmt",


// Reporting  
{
  type: "category",
  label: "Voice bot analytics and reports",
  //link: {type: 'doc', id: 'cookbooks/voice-as-channel/reporting/intro'},
  collapsed: true,
  items: [
          "cookbooks/voice-as-channel/reporting/intro",
          "cookbooks/voice-as-channel/reporting/dashboard",
          "cookbooks/voice-as-channel/reporting/cdr",
          "cookbooks/voice-as-channel/reporting/convdata",
          "cookbooks/voice-as-channel/reporting/conv_cdr",
          "cookbooks/voice-as-channel/reporting/variables",
      ],
    },

    "cookbooks/voice-as-channel/datahandling",

// Outbound campaign 

{
  type: "category",
  label: "Outbound campaign via. voice bot",
  collapsed: true,
  items: [
    "cookbooks/voice-as-channel/OBcampaign/introOBC",
    "cookbooks/voice-as-channel/OBcampaign/setupOBC",
  ],
},



  // ---- old docs 



// building  
  {
    type: "category",
    label: "Build a voice bot",
    link: {type: 'doc', id: 'cookbooks/voice-as-channel/build/botbuilderintro'},
    collapsed: true,
    items: [
      "cookbooks/voice-as-channel/build/convdesiVB",
      "cookbooks/voice-as-channel/build/usingvoiceinput",
      "cookbooks/voice-as-channel/build/usingmp", 
        ],
      },

    "cookbooks/voice-as-channel/conversationaldelays",

// Voice Capabilities (usecases)
 {
    type: "category",
    label: "Capabilities of a voice bot",
    collapsed: true,
    items: [
      "cookbooks/voice-as-channel/usecases/interrupthandling",
      "cookbooks/voice-as-channel/usecases/languagedetection",
      "cookbooks/voice-as-channel/usecases/dtmf",
      "cookbooks/voice-as-channel/usecases/waitmusic",
      "cookbooks/voice-as-channel/usecases/callrecording",
    /*   
      "cookbooks/voice-as-channel/usecases/tts",
      "cookbooks/voice-as-channel/usecases/stt",
      "cookbooks/voice-as-channel/usecases/contexttransfertoagents",
      "cookbooks/voice-as-channel/usecases/transfercalltoagents",
      */
            ],
  }, 
// FAQs 
"cookbooks/voice-as-channel/voicefaqs",
  ],
}, 

//end of voice docs 

// Inbox Section 

    {
      type: "category",
      label: "Inbox",
      link: {type: 'doc', id: 'platform_concepts/inbox/inbox'},
      collapsed: true,
      items: [

        //1. Overview 
       // "platform_concepts/inbox/inbox",


        //Inbox Setup
        {
          type: "category",
          label: "Inbox setup",
          collapsed: true,
          items: [
              "platform_concepts/inbox/inbox_setup/inboxdemo",
              "platform_concepts/inbox/inbox_setup/supportagents",
              "platform_concepts/inbox/inbox_setup/roleaccess",
              "platform_concepts/inbox/inbox_setup/emailvschat",
              "platform_concepts/inbox/inbox_setup/agentstatuses",
              "platform_concepts/inbox/inbox_setup/assignmentlogic",
              "platform_concepts/inbox/inbox_setup/debugchecklist",
            //
                 ],
         },



        //2. monitor doc 
        "platform_concepts/inbox/monitor",
        //3. chats doc 
        {
          type: "category",
          label: "Live chats",
          link: {type: 'doc', id: 'platform_concepts/inbox/chats/getstartedwithlivechat'},
          collapsed: true,
          items: [
           // "platform_concepts/inbox/chats/getstartedwithlivechat",
            "platform_concepts/inbox/chats/chatscreen",
            "platform_concepts/inbox/chats/genai",
            "platform_concepts/inbox/chats/internal-ticket",
            "platform_concepts/inbox/chats/agentassistbot",
            "platform_concepts/inbox/chats/chatsearch",
            "platform_concepts/inbox/chats/resolve",
            "platform_concepts/inbox/chats/bulkactions",
            "platform_concepts/inbox/chats/videocall",
            "platform_concepts/inbox/chats/reinitiatewachats",
                 ],
         },

        //4. tickets doc 
        {
          type: "category",
          label: "Email tickets",
          link: {type: 'doc', id: 'platform_concepts/inbox/tickets/tickets_intro'},
          collapsed: true,
          items: [
            "platform_concepts/inbox/tickets/setupandconfig",
            "platform_concepts/inbox/tickets/emailticketstatus",
            "platform_concepts/inbox/tickets/manualticket",
            "platform_concepts/inbox/tickets/searchandfilter",
            "platform_concepts/inbox/tickets/bulkaction",
            "platform_concepts/inbox/tickets/slaintro",

                  ],
        },

        "platform_concepts/inbox/inbox-cdp",

        //5. contacts doc
        "platform_concepts/inbox/contacts",

        //6. analytics - reports  
        {
          type: "category",
          label: "Analytics and reports",
          collapsed: true,
          items: [
            {
              type: "category",
             label: "Analytics",
              collapsed: true,
             items: [
            

              "platform_concepts/inbox/analytics-reports/analytics",
                    ],
            },

            {
              type: "category",
              label: "Reports",
              link: {type: 'doc', id: 'platform_concepts/inbox/analytics-reports/reports/reports'},

              collapsed: true,
              items: [
           // "platform_concepts/inbox/analytics-reports/reports/reports",

            {
              type: "category",
              label: "Chats",
              collapsed: true,


              items: [
                "platform_concepts/inbox/analytics-reports/reports/chats/chat-agent-activity-report",
                "platform_concepts/inbox/analytics-reports/reports/chats/chat-agent-performance-report",
                "platform_concepts/inbox/analytics-reports/reports/chats/chat-archives-report",
                "platform_concepts/inbox/analytics-reports/reports/chats/chat-report-metrics",

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
          link: {type: 'doc', id: 'platform_concepts/inbox/knowledge-base/kboverview'},
          collapsed: true,
          items: [
           // "platform_concepts/inbox/knowledge-base/kboverview",
           "platform_concepts/inbox/knowledge-base/createkb",
            "platform_concepts/inbox/knowledge-base/edit-publish-articles",
            "platform_concepts/inbox/knowledge-base/managingcategories",
           // "platform_concepts/inbox/knowledge-base/int_chatbot",
           // "platform_concepts/inbox/knowledge-base/int_gtm",
                 ],           
       },


        //8. settings 
        {
          type: "category",
          label: "Inbox settings",
          link: {type: 'doc', id: 'platform_concepts/inbox/inbox-settings/settings_intro'},
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
              "platform_concepts/inbox/inbox-settings/productivitytools/collaboration",
              "platform_concepts/inbox/inbox-settings/productivitytools/connecttosubdomain",
              "platform_concepts/inbox/inbox-settings/productivitytools/kb_integrations",
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
            "platform_concepts/inbox/inbox-settings/automation/emailinactivity",
                   ],
          },

          //account 
          {
            type: "category",
            label: "Account",
            collapsed: true,
            items: [

            "platform_concepts/inbox/inbox-settings/account/notification",
            // "platform_concepts/inbox/inbox-settings/account/security",
            ]
          },

          ],
        },

        "platform_concepts/inbox/inboxfaqs",
        "platform_concepts/inbox/upcoming-developments",

    //other files
      ],
    },

// User 360

{
  type: "category",
  label: "User 360",
  link: {type: 'doc', id: 'platform_concepts/engagement/cdp/overview'},
  collapsed: true,
  items: [
   // "platform_concepts/engagement/cdp/overview",
    "platform_concepts/engagement/cdp/user_data/user_properties",
    
    {
      type: "category",
      label: "Create/update user records",
      link: {type: 'doc', id: 'platform_concepts/engagement/cdp/user_data/add_user_overview'},
      collapsed: true,
      items: [
        "platform_concepts/engagement/cdp/user_data/add_users",
        "platform_concepts/engagement/cdp/user_data/import_users",
      //  "platform_concepts/engagement/cdp/user_data/conv_in_builder",
        
        {
          type: "category",
          label: "Add/update user records via bot conversations",
          link: {type: 'doc', id: 'platform_concepts/engagement/cdp/user_data/data_capture_convers'},
          collapsed: true,
          items: [
           // "platform_concepts/engagement/cdp/user_data/data_capture_convers",
           "platform_concepts/engagement/cdp/user_data/userid-flow",
            "platform_concepts/engagement/cdp/user_data/store_conv_data",
          //  "platform_concepts/engagement/cdp/user_data/auto-capture",
            "platform_concepts/engagement/cdp/user_data/personalise_conversations",
            
          ]
        },
        "platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api",
      ]
    },
    
    "platform_concepts/engagement/cdp/user_data/viewuser",
    "platform_concepts/engagement/cdp/user_data_segments/manage_user_data",
    

/*    {
      type: "category",
      label: "Manage users",
      collapsed: true,
      items: [
       // "platform_concepts/engagement/cdp/user_data/user_properties",
      ],
    }, */
    
    
   /* {
      type: "category",
      label: "Managing User data and Creating Segments",
      collapsed: true,
      items: [
        "platform_concepts/engagement/cdp/user_data_segments/cdp_data",
        "platform_concepts/engagement/cdp/user_data_segments/manage_user_data",
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
      link: {type: 'doc', id: 'platform_concepts/engagement/cdp/user_data_segments/segments_overview'},
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Create user segments",
          collapsed: true,
          items: [
           "platform_concepts/engagement/cdp/user_data_segments/segment-properties",
           "platform_concepts/engagement/cdp/user_data_segments/segments-events",
           "platform_concepts/engagement/cdp/user_data_segments/segment-csv",
          ]
        },
        "platform_concepts/engagement/cdp/user_data_segments/manage_segments",
        "platform_concepts/engagement/cdp/user_data_segments/archive-user-segment",
        "platform_concepts/engagement/cdp/user_data_segments/segment_usecases",
        // "platform_concepts/engagement/cdp/user_data/targeted_segments",
        // "platform_concepts/engagement/cdp/user_data/conv_in_builder",
        // "platform_concepts/engagement/cdp/user_data/campaign_in_engage",

      ],
    },
    "platform_concepts/engagement/cdp/user_faqs",
   /* {
      type: "category",
      label: "FAQs",
      collapsed: true,
      items: [
        "platform_concepts/engagement/cdp/faq/exclude_user_campaign",
        "platform_concepts/engagement/cdp/faq/date_based_campaign",
      ],
    }, */
  ],
},


// Engage module starts here 

    
    
    {
      type: "category",
      label: "Engage",
      link: {type: 'doc', id: 'platform_concepts/engagement/engage'},
      collapsed: true,
      items: [
       // "platform_concepts/engagement/engage",
       "platform_concepts/engagement/outbound/engage-overview",
       {
        type: "category",
        label: "Outbound templates",
        link: {type: 'doc', id: 'platform_concepts/engagement/outbound/templates/overview'},
        collapsed: true,
        items: [
          //"platform_concepts/engagement/outbound/templates/overview",
          "platform_concepts/engagement/outbound/templates/whatsapptemplate",
          "platform_concepts/engagement/outbound/templates/sms-template",
          "platform_concepts/engagement/outbound/templates/email-template",
          "platform_concepts/engagement/outbound/templates/viber-template",
          "platform_concepts/engagement/outbound/templates/mobilepush",
          "platform_concepts/engagement/outbound/templates/gbm-template",
          "platform_concepts/engagement/outbound/templates/linetemplate",
          "platform_concepts/engagement/outbound/templates/teams-template"

        ],
      },
            
        {
          type: "category",
          label: "Outbound campaigns",
          collapsed: true,
          items: [
                
            
           /* {
              type: "category",
              label: "Campaign",
              collapsed: true,
              items: [
                "platform_concepts/engagement/outbound/outbound-campaigns/email-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/sms-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/viber-campaign",
                "platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",
              ],
            }, */
            "platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",
            
          //  "platform_concepts/engagement/outbound/filter",
          "platform_concepts/engagement/outbound/outbound-campaigns/view-outbound",
            "platform_concepts/engagement/outbound/outbound-campaigns/outbound-report",
            "platform_concepts/engagement/outbound/notification-engine",
            "platform_concepts/engagement/effectivelyuseengage",

           
          ],
          
        },
    {
          type: "category",
          label: "Flow campaigns",
         link: {type: 'doc', id: 'platform_concepts/engagement/flow-campaigns-intro'},
          collapsed: true,
          items: [
            "platform_concepts/engagement/flows_campaign",    
             "platform_concepts/engagement/flow-ai",
             "platform_concepts/engagement/clone-flow-campaigns",
             "platform_concepts/engagement/manage-flow-campaign",
             "platform_concepts/engagement/flow-report",
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
  link: {type: 'doc', id: 'platform_concepts/growth/introductiontoinsights'},

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
      label: "User journeys",
      collapsed: true,
      items: [
        "platform_concepts/growth/user-journeys",
        "platform_concepts/growth/funnels",
      ],
    },
    "platform_concepts/growth/dataops",
    "platform_concepts/growth/doccog",

      {
        type: "category",
        label: "Data explorer",
        link: {type: 'doc', id: 'platform_concepts/growth/dataexplorer/intro'},
        collapsed: true,
        items: [
            "platform_concepts/growth/dataexplorer/defaulttables",
            "platform_concepts/growth/dataexplorer/customtables",
            "platform_concepts/growth/dataexplorer/sumarize",
            "platform_concepts/growth/dataexplorer/visualization",
            "platform_concepts/growth/dataexplorer/savedreportsactions",
            "platform_concepts/growth/dataexplorer/configure-data",
          ],
      },

    "platform_concepts/growth/dashboards",
    "platform_concepts/growth/health",
   // "platform_concepts/growth/goals",
    "platform_concepts/growth/faqs-user",
  ],
},



//Channels module starts here 

    {
      type: "category",
      label: "Channels",
      link: {type: 'doc', id: 'platform_concepts/channelConfiguration/overview'},
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Messaging channels",
          link: {type: 'doc', id: 'platform_concepts/channelConfiguration/messaging-overview'},
          collapsed: true,
          items: [
            "platform_concepts/channelConfiguration/abc",
            "platform_concepts/channelConfiguration/email-outbound",
            "platform_concepts/channelConfiguration/facebook-messenger", 
            "platform_concepts/channelConfiguration/fb-workplace",
            "platform_concepts/channelConfiguration/google-message",
            "platform_concepts/channelConfiguration/googleChat",
            {
              type: "category",
              label: "Instagram",
              link: {type: 'doc', id: 'platform_concepts/channelConfiguration/instagram'},
              collapsed: true,
              items: [
            "platform_concepts/channelConfiguration/instagram-limitations",
            "platform_concepts/channelConfiguration/instagram-faqs",
              ]},
            "platform_concepts/channelConfiguration/line", 
            "platform_concepts/channelConfiguration/teams", 
            "platform_concepts/channelConfiguration/slack2",
            "platform_concepts/channelConfiguration/sms-outbound-india", 
            "platform_concepts/channelConfiguration/telegram",
            "platform_concepts/channelConfiguration/viber",
            "platform_concepts/channelConfiguration/viber-for-business",
            {
              type: "category",
              label: "WhatsApp",
              link: {type: 'doc', id: 'platform_concepts/channelConfiguration/whatsapp-channel'},
              collapsed: true,
              items: [
            "platform_concepts/channelConfiguration/whatsapp-configuration",
            "platform_concepts/channelConfiguration/test-wa-bot",
            "platform_concepts/channelConfiguration/whatsapp-product-catalog",
            "platform_concepts/channelConfiguration/wa-migration",
            "platform_concepts/channelConfiguration/whatsapp-business-account-guidelines",
            "platform_concepts/channelConfiguration/wa-opt-in",
            "platform_concepts/channelConfiguration/WA-bot-bestpractices",
            "platform_concepts/channelConfiguration/WA-pricing",
            "platform_concepts/channelConfiguration/whatsapp-char-limit",
            "platform_concepts/channelConfiguration/wa-faqs",
              ]},
            "platform_concepts/channelConfiguration/zalo", 
            "platform_concepts/channelConfiguration/webex",
               
            
            
            
            
            
           
            
            
            
           
            
            
          ]
        },
        {
          type: "category",
          label: "Voice channels",
          link: {type: 'doc', id: 'platform_concepts/channelConfiguration/voice-overview'},
          collapsed: true,
          items: [
            "platform_concepts/channelConfiguration/ivr-bots",
            "platform_concepts/channelConfiguration/Ivr",
            "platform_concepts/channelConfiguration/alexa",
          ]
        },
        {
          type: "category",
          label: "Social channels",
          link: {type: 'doc', id: 'platform_concepts/channelConfiguration/social-overview'},
          collapsed: true,
          items: [
            "platform_concepts/channelConfiguration/twitter",
            "platform_concepts/channelConfiguration/facebook-comments",
          ]
        },
        {
          type: "category",
          label: "Push notifications",
          link: {type: 'doc', id: 'platform_concepts/channelConfiguration/mobilepush'},
          collapsed: true,
          items: [
            "platform_concepts/channelConfiguration/android_push",
            "platform_concepts/channelConfiguration/ios_push",
          ]
        },
        {
          type: "category",
          label: "Chat widget",
          link: {type: 'doc', id: 'platform_concepts/channelConfiguration/chat-widget-overview'},
          collapsed: true,
          items: [
            "platform_concepts/channelConfiguration/web-widget",
            "platform_concepts/channelConfiguration/chat-widget-payload",
            "platform_concepts/channelConfiguration/chat-history",
            "platform_concepts/channelConfiguration/function-widgets",
            "platform_concepts/channelConfiguration/event-widget",
            "platform_concepts/channelConfiguration/chrome-extension",
            "platform_concepts/channelConfiguration/chat-widget-components",
            "platform_concepts/channelConfiguration/custom-boticon",
            "platform_concepts/channelConfiguration/speech-to-text",
            "platform_concepts/channelConfiguration/text-to-speech",
            "platform_concepts/channelConfiguration/chat-widget-notification",
            "platform_concepts/channelConfiguration/chat-separator",
            "platform_concepts/channelConfiguration/domain-whitelisting",
            "platform_concepts/channelConfiguration/chat-widget-localization",
            "platform_concepts/channelConfiguration/summary-card",
            "platform_concepts/channelConfiguration/chat-widget-text-formatter",
            "platform_concepts/channelConfiguration/pwa",
            "platform_concepts/channelConfiguration/depoly-WA-bot",
            "platform_concepts/channelConfiguration/support-banner-migration",
            "platform_concepts/channelConfiguration/chat-widget-errors",
            "platform_concepts/channelConfiguration/character-limits-sdk",
            "platform_concepts/channelConfiguration/chat-widget-faq", 
            // "platform_concepts/channelConfiguration/web",
          ]
        },
        "platform_concepts/channelConfiguration/fb-lead-ads",
        "platform_concepts/channelConfiguration/generic-webhook",
        "platform_concepts/channelConfiguration/sunshine",
        "platform_concepts/channelConfiguration/shopee",
        "platform_concepts/channelConfiguration/channels-faqs",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: {type: 'doc', id: 'platform_concepts/appConfiguration/overview'},
      collapsed: true,
      items: [

        {
          type: "category",
          label: "CRM",
          collapsed: true,
          items: [
            "platform_concepts/appConfiguration/epic-fhir",
            "platform_concepts/appConfiguration/hubspot-crm",
            "platform_concepts/appConfiguration/microsoft-dynamics",
            "platform_concepts/appConfiguration/salesforce-service-cloud",
            "platform_concepts/appConfiguration/zoho-crm",
          ],
        },

        {
          type: "category",
          label: "ITSM",
          collapsed: true,
          items: [
            "platform_concepts/appConfiguration/freshservice",
            "platform_concepts/appConfiguration/sap-io",
            "platform_concepts/appConfiguration/service-now",
          ],
        },

        {
          type: "category",
          label: "HR",
          collapsed: true,
          items: [
            "platform_concepts/appConfiguration/bamboohr",
            "platform_concepts/appConfiguration/freshteam",
            "platform_concepts/appConfiguration/successfactors",
          ],
        },  
        
        {
          type: "category",
          label: "Tools & Utilities",
          collapsed: true,
          items: [
            "platform_concepts/appConfiguration/atlassian",
            "platform_concepts/appConfiguration/aws-s3",
            "platform_concepts/appConfiguration/azure-ad",
            "platform_concepts/appConfiguration/clevertap",
            "platform_concepts/appConfiguration/freshdesk",
            "platform_concepts/appConfiguration/google-calendar",
            "platform_concepts/appConfiguration/identity-management",
            "platform_concepts/appConfiguration/playstore",
            "platform_concepts/appConfiguration/google-sheets",
            "platform_concepts/appConfiguration/gpt3",
            "platform_concepts/appConfiguration/jira",
            "platform_concepts/appConfiguration/leadSquared-wa-connector",
            "platform_concepts/appConfiguration/llm",
            "platform_concepts/appConfiguration/microsoft-graph",
            "platform_concepts/appConfiguration/netcore",
            "platform_concepts/appConfiguration/okta",
            "platform_concepts/appConfiguration/oracle-responsys",
            "platform_concepts/appConfiguration/outlook-calendar",
            "platform_concepts/appConfiguration/sftp",
            "platform_concepts/appConfiguration/twilio-verify",
            "platform_concepts/appConfiguration/webengage",

          ],
        },

        {
          type: "category",
          label: "Retail/ecommerce",
          collapsed: true,
          items: [
            "platform_concepts/appConfiguration/magento",
            "platform_concepts/appConfiguration/shopify",
          ],
        },

        {
          type: "category",
          label: "Live Chat",
          collapsed: true,
          items: [
            "platform_concepts/appConfiguration/amazon-livechat",
            "platform_concepts/appConfiguration/avaya",
            "platform_concepts/appConfiguration/customliveagent",
            "platform_concepts/appConfiguration/freshchat",
            "platform_concepts/appConfiguration/genesys",
            "platform_concepts/appConfiguration/genesys-cloud-livechat",
            "platform_concepts/appConfiguration/intercom-livechat",
            "platform_concepts/appConfiguration/kapture-crm",
            "platform_concepts/appConfiguration/locobuzz-livechat",
            "platform_concepts/appConfiguration/nice-incontact",
            "platform_concepts/appConfiguration/salesforcelivechat",
            "platform_concepts/appConfiguration/servicenow-livechat",
            "platform_concepts/appConfiguration/talisma",
            "platform_concepts/appConfiguration/zoho-live-chat",

          ],
        },

        {
          type: "category",
          label: "Payments",
          collapsed: true,
          items: [
            "platform_concepts/appConfiguration/billdesk-emailpay",
            "platform_concepts/appConfiguration/billdesk",
            "platform_concepts/appConfiguration/camspay",
            "platform_concepts/appConfiguration/cashfree",
            "platform_concepts/appConfiguration/instamojo",
            "platform_concepts/appConfiguration/paytm",
            "platform_concepts/appConfiguration/payuBiz",
            "platform_concepts/appConfiguration/razorpay",
            "platform_concepts/appConfiguration/stripe",


          ],
        },
        
        {
          type: "category",
          label: "Live chat on app.yellow.ai",
          collapsed: true,
          items: [
            "platform_concepts/appConfiguration/livechat-integration",
          ],
        },
       
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
      label: "2023 updates",
      collapsed: true,
      items: [
        "updates/2023/jul2023",
        "updates/2023/jun2023",
        "updates/2023/may2023",
        "updates/2023/april2023",
        "updates/2023/mar2023",
        "updates/2023/feb2023",
        "updates/2023/jan2023",
        
      ],
    },

    {
      type: "category",
      label: "2022 updates",
      collapsed: true,
      items: [
              "updates/2022/dec2022",
              "updates/2022/nov2022",
              "updates/2022/oct2022",
              "updates/2022/sep_updates",
              "updates/2022/aug",
              "updates/2022/july",
      ],
    },
  ],
     // Prod update ends here.


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