// Utility to get recent updates from What's New page data
// This centralizes the data so both pages stay in sync

// --- FEATURE HIGHLIGHTS DATA (Major Updates) ---
export const featureHighlights = [
  {
    id: 'ai-prompt-analysis',
    title: 'AI-based Prompt Analysis',
    shortDescription: 'Automatically review and improve the quality of prompts and conversation rules used by your AI agents with AI-powered analysis.',
    showFullImage: true,
    fullDescription: `**AI-based Prompt Analysis** helps you automatically review and improve the quality of prompts and conversation rules used by your AI agents. The feature reviews clarity, structure, and logic, and provides step-by-step recommendations to align prompts with best practices and improve agent performance before deployment.

### What AI-based Prompt Analysis Does

- **Detects Issues**: Finds unclear, redundant, or conflicting instructions in prompts
- **Identifies Gaps**: Spots missing elements like fallback logic or escalation rules
- **AI Suggestions**: Provides AI-generated recommendations to rewrite or simplify prompts
- **Quality Improvement**: Enhances overall performance and clarity before deployment

### How the Analysis Works

When you run the analysis, the system evaluates your prompt through six stages:

1. **Get Agent Details** – Gathers all agent data including prompts, actions, and conversation rules
2. **Analyze the Prompt** – Reviews language, structure, and flow to identify issues
3. **Evaluate Best Practices** – Checks alignment with design standards and AI-agent best practices
4. **Find Improvements** – Detects optimization opportunities like missing conditions or unclear instructions
5. **Prepare Suggestions** – Generates content recommendations for clarity and flow
6. **Generate Analysis** – Produces a quality score, summary, and actionable recommendations

### Analysis Results

Once complete, you'll receive:
- A **quality score** indicating your prompt's current effectiveness
- A **summary** highlighting key findings and improvement areas
- **Recommended actions** with AI-generated suggestions you can apply or copy
- **Interactive insights** via lightbulb icons to understand each recommendation

This AI-powered feature helps you quickly optimize your agent's prompts and enhance conversational quality without manual rewriting.`,
    highlights: [
      'Detects unclear, redundant, or conflicting instructions in prompts',
      'Provides AI-generated suggestions to rewrite or simplify prompts',
      'Improves prompt quality and overall agent effectiveness prior to release',
      'Six-stage analysis process with quality scoring and actionable recommendations',
      'Interactive insights to understand and apply improvements quickly'
    ],
    image: 'https://cdn.yellowmessenger.com/assets/yellow-docs/analyze-prompt.png',
    category: 'AI Agent',
    badge: 'Major Update',
    date: 'October 30, 2025',
    link: '/docs/platform_concepts/AIAgent/manage-your-agent#ai-based-prompt-analysis'
  },
  {
    id: 'data-purge-retention',
    title: 'Take Control of Your Data with Retention & Purge',
    shortDescription: 'Manage the full data lifecycle with automated retention policies and one-time purge capabilities to ensure compliance and reduce risk.',
    fullDescription: `The **Data Purge & Retention** feature gives organizations complete control over the data lifecycle, ensuring **compliance**, reducing risk, and improving **system efficiency**.

**Note:** This is a **gated feature**. To enable it for your account, please contact your **Customer Success Manager** or reach out to **Yellow.ai Support**.

### Automated Data Retention (UI Setting)

**Purpose:** Retention is an ongoing, automated process for deleting data on a recurring basis.

**How it works:**
- A **Super Admin** can configure a retention period directly in the admin UI.
- A daily background job automatically deletes records older than the chosen timeframe (30, 60, or 180 days).

**Important:** Once enabled, the retention policy is **permanent** and cannot be changed.

**Best for:** Helping active clients stay compliant with data protection laws without manual intervention.

**Learn more:** <a href="/docs/platform_concepts/settings/general-settings">Data Retention Settings</a>

### One-Time Data Purge (Backend Operation)

**Purpose:** Purge is a one-time, irreversible process to delete data completely.

**How it works:**
- This internal-only process deletes data across **29 system tables**, including inbox logs, video chats, and analytics.

**Warning:**
- The Purge action is **irreversible**, and data **cannot be recovered**.

**Best for:** Fulfilling contractual obligations for **complete data removal** during client offboarding.

### Supported Tables

This feature currently supports over **29 system tables** across different database types.

### ✅ Supported Tables
- **Reporting & Analytics:** Notification Reports, CDR Reports, Search Bar Analytics, KB ML Reports, Analytics
- **Communication:** WhatsApp Consumptions, Email Tickets, Video Chats, Voice Call Logs, Sidechat Messages  
- **Performance & Monitoring:** Latency Metrics, Bot Latency Metrics, LLM API Usage
- **User & Agent Management:** User Feedbacks, User 360, Customer Table, Agent Activity, Agent Availability
- **Conversation Analysis:** AI Agent Events Analysis, Model Conversation Analysis, Conversational Tags, Voice Unidentified Utterance
- **Ticketing & Support:** Chat Tickets, Call Details Report, Messages (Chat Transcript), User Profiles
- **System & Security:** Audit Logs, Custom Tables, Notification Report

### ❌ Not Supported Tables  
- **Core Events:** Agent Event, API Event, Bot Event, User Event, Bot Events Analysis
- **Communication:** Messages, Call Recordings, Messages (Chat Transcript)
- **Data Storage:** Customer Table (v1), Knowledge Base Articles, Custom Tables
- **System:** Audit Logs, Notification Reports (Split By BotId), events_by_userid



**Access & Permissions:**
- **Retention Policies:** Can only be configured by users with **Super Admin** permissions.
- **Purge Function:** An internal backend operation; **cannot** be triggered by end customers.`,
    highlights: [
      'Automated Retention: Set permanent policies for daily cleanup of old records',
      'One-Time Purge: Completely remove all bot data and logic for client offboarding',
      'Compliance Ready: Helps meet HIPAA and other regulations by controlling data retention',
      'Super Admin Only: Secure access controls prevent unauthorized data operations',
      'Broad Database Coverage: Supports 29 system tables across multiple database types'
    ],
    image: 'https://i.ibb.co/3mZHvpwp/2.png',
    category: 'Platform',
    badge: 'Major Update',
    date: 'September 26,2025',
    link: '/docs/platform_concepts/settings/general-settings',
    
  },

  {
    id: 'analytics-overview',
    title: 'Analytics Overview Page (v1)',
    shortDescription: 'A single dashboard to track adoption, performance, and engagement across AI and human agents.',
    fullDescription: 'The Analytics Overview delivers a unified snapshot of conversation performance across AI agents and human agents. It brings together usage trends, resolution insights, sentiment analysis, containment metrics, and agent involvement into one place. With flexible filters by time range and channel, stakeholders can quickly evaluate efficiency, user experience, and engagement, while clear visual dashboards highlight patterns and opportunities for improvement.',
    image: '/img/analytics-overview.gif',
    category: 'Analytics',
    badge: 'Major Update',
    date: 'September 22, 2025',
    link: '/docs/platform_concepts/analyze/analytics-overview',
    highlights: [
      'Track adoption trends across users, messages, conversations, and average session duration',
      'Monitor resolution rate with side-by-side comparisons between AI agents and human agents',
      'Explore resolution split by outcomes such as resolved, unresolved, user drop-off, and partially resolved',
      'Measure containment rate to see how often AI handles conversations without handoff',
      'Analyze sentiment distribution over time with happy, neutral, and unhappy indicators',
      'Understand AI agent involvement with distribution of automation versus human support',
      'Use flexible filters by time period (7 days, 30 days, or custom) and channel (All, Voice, Web chat)'
    ]
  },
  {
    id: 'call-logs-unified',
    title: 'Introducing Voice AI Calls in Call Logs',
    shortDescription: 'Faster, simpler, and more collaborative way to review and analyze Voice AI calls.',
    fullDescription: 'Call Logs bring everything you need to review and analyze calls into one place. With streamlined access, advanced filters, complete visibility, and built-in collaboration, both customers and developers can save time, work more efficiently, and sync insights with ease.',
    image: '/img/call-logs.gif',
    category: 'Analyze',
    badge: 'Enhancement',
    date: 'September 16, 2025',
    link: '/docs/platform_concepts/analyze/call-logs',
    highlights: [
      'Instantly access call transcripts or recordings with a single click',
      'Advanced filters from Data Explorer, now in Call Logs',
      'Detailed call metadata and debug logs at your fingertips',
      'Add comments and share feedback directly within the platform',
      'Sync latest data on demand and export reports with ease'
    ]
  },
].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

// --- RECENT UPDATES DATA ---
export const allUpdates = [
  {
    title: 'New Fallback Controls in Super Agent',
    description: 'Two new fallback options — Instruct Super Agent and Trigger Global Fallback Flow — help handle unexpected situations where the AI encounters technical issues or cannot resolve a user query.',
    fullDescription: 'In the Fallback section of the Super Agent, two new options have been introduced — **Instruct Super Agent** and **Trigger Global Fallback Flow**. These options help handle unexpected situations where the AI encounters technical issues or cannot resolve a user query, ensuring a more reliable and seamless experience. The AI agent may fail to respond in cases such as no results found in the Knowledge Base, API or workflow failure, input validation fails after multiple attempts, or system/LLM outages.',
    type: 'Enhancement',
    badge: 'Enhancement',
    date: 'October 30, 2025',
    link: '/docs/platform_concepts/AIAgent/agentpersona#fallback',
    category: 'AI Agent',
    icon: '🔄',
    image: 'https://cdn.yellowmessenger.com/assets/yellow-docs/fallaback-manage.png',
    highlights: [
      'Instruct Super Agent option for custom fallback messages',
      'Trigger Global Fallback Flow to guide users when agent cannot respond',
      'Handles technical issues, validation failures, and system outages gracefully'
    ]
  },
  {
    title: 'Global Components Now Accessible from the Header',
    description: 'The Global Components section is now available directly from the top navigation bar, making it easier to access and manage components across all AI agents.',
    fullDescription: 'The **Global Components** section is now also available directly from the top navigation bar, making it easier to access and manage components across all AI agents. You can still find it within the **Agents** tab as before, ensuring a consistent experience. This enhancement provides faster access to shared components while maintaining familiar navigation patterns.',
    type: 'Enhancement',
    badge: 'Enhancement',
    date: 'October 25, 2025',
    link: '/docs/platform_concepts/AIAgent/global-components',
    category: 'AI Agent',
    icon: '🌐',
    image: 'https://cdn.yellowmessenger.com/assets/yellow-docs/global-components.png'
  },
  {
    title: 'View All Components with Agent References',
    description: 'The Agent References feature provides a complete view of all components used within an AI agent.',
    fullDescription: 'The **Agent References** feature provides a complete view of all components used within an AI agent. It automatically identifies and groups elements such as **Get Input** actions, **Variables**, and **Workflows** that are part of the agent\'s configuration. With Agent References, you can easily track where each component is used across the conversation flow, ensuring better visibility and easier management of your AI agent\'s structure.',
    type: 'New Feature',
    badge: 'new',
    date: 'October 28, 2025',
    link: '/docs/platform_concepts/AIAgent/manage-your-agent#agent-references',
    category: 'AI Agent',
    icon: '🔍',
    image: 'https://cdn.yellowmessenger.com/assets/yellow-docs/agent-references.png',
    highlights: [
      'Complete view of all components used within an AI agent',
      'Automatically identifies and groups Get Input actions, Variables, and Workflows',
      'Easily track where each component is used across conversation flows'
    ]
  },
  {
    title: 'Collect User Feedback in AI Agents',
    description: 'Gather real-time user feedback during conversations using the new Get Feedback Input action.',
    fullDescription: 'You can now gather real-time user feedback during conversations using the new **Get Feedback Input** action. The AI agent captures ratings through thumbs up/down or star inputs, allowing users to share their experience instantly. All feedback is automatically stored in the **User Feedback** table within **Data Explorer**, making it easy to review and analyze insights to enhance your AI agent\'s performance.',
    type: 'New Feature',
    badge: 'new',
    date: 'October 30, 2025',
    link: '/docs/platform_concepts/AIAgent/get-feedback',
    category: 'AI Agent',
    icon: '⭐',
    image: 'https://cdn.yellowmessenger.com/assets/yellow-docs/sel-feedback.png',
    highlights: [
      'Capture ratings through thumbs up/down or star inputs',
      'Automatically stored in User Feedback table within Data Explorer',
      'Review and analyze insights to enhance AI agent performance'
    ]
  },
  {
    title: 'Call Agent Action in AI Agents',
    description: 'The Call Agent action lets one AI agent trigger another within an active conversation, enabling smooth transitions between specialized agents without losing context.',
    fullDescription: 'The **Call Agent** action lets one AI agent trigger another within an active conversation, enabling smooth transitions between specialized agents without losing context. With this action, AI agents can dynamically hand off conversations between domain-specific agents, pause and resume the parent agent\'s flow seamlessly, maintain conversation context throughout the handoff process, and enable specialization by routing users to the right expert agent. Example: In a flight booking scenario, the main **Yellow Travels** agent can invoke a **Flight Booking** agent to handle ticket reservations and later use the **Call Agent** action to switch to a **Cancellation** agent when the user requests to cancel a booking.',
    type: 'New Feature',
    badge: 'new',
    date: 'October 29, 2025',
    link: '/docs/platform_concepts/AIAgent/call-agent',
    category: 'AI Agent',
    icon: '🔄',
    image: 'https://cdn.yellowmessenger.com/assets/yellow-docs/call-agent.png',
    highlights: [
      'Dynamically hand off conversations between domain-specific agents',
      'Pause and resume the parent agent\'s flow seamlessly',
      'Maintain conversation context throughout agent transitions'
    ]
  },
  {
    title: 'AI Safety & Conduct in Super Agent',
    description: 'Set safety filters for your AI agent conversations to prevent harmful or inappropriate behavior and protect user data.',
    fullDescription: 'The new **AI Safety & Conduct** option helps set safety filters for your AI agent conversations to prevent harmful or inappropriate behavior and to protect user data. This ensures that every AI interaction remains ethical, accurate, and professional. Configure filters to detect and block banned topics, violence, sexual content, sensitivity, toxicity, and bias—safeguarding both user inputs and AI responses.',
    type: 'New Feature',
    badge: 'new',
    date: 'October 28, 2025',
    link: '/docs/platform_concepts/AIAgent/agentpersona#ai-safety--conduct',
    category: 'AI Agent',
    icon: '🛡️',
    image: 'https://cdn.yellowmessenger.com/assets/yellow-docs/AIsafety.png',
    highlights: [
      'Automatically prevents hallucinations, offensive replies, and inappropriate responses',
      'Protects user privacy and sensitive information through controlled data handling',
      'Helps ensure compliance with data privacy regulations like GDPR and HIPAA'
    ]
  },
  {
    title: 'Transfer to Live Agent Action',
    description: 'The Transfer to Live Agent action enables seamless escalation from an AI conversation to a human agent whenever real-time assistance is required.',
    fullDescription: 'The **Transfer to Live Agent** action enables seamless escalation from an AI conversation to a human agent whenever real-time assistance is required. It ensures users receive immediate, personalized support when the AI agent cannot fully resolve their query. With this action, AI agents can instantly transfer conversations to human agents for faster issue resolution while maintaining context and chat history for a smooth handover experience.',
    type: 'New Feature',
    badge: 'new',
    date: 'October 29, 2025',
    link: '/docs/platform_concepts/AIAgent/transfer-live-agent',
    category: 'AI Agent',
    icon: '👤',
    image: 'https://cdn.yellowmessenger.com/assets/yellow-docs/profile-live-agent.png',
    highlights: [
      'Instantly transfer conversations to human agents for faster issue resolution',
      'Maintain context and chat history for a smooth handover experience'
    ]
  },
  {
    title: 'Cloud Platform Redefined for a Better Experience',
    description: 'A redesigned workspace with a cleaner theme and improved navigation for a smoother, more intuitive experience.',
    fullDescription: 'We\'ve redesigned the Yellow.ai workspace with a cleaner theme and improved navigation to give you a smoother, more intuitive experience. This update reduces clutter in the left navigation and provides an overall better workflow, with refreshed colors, fonts, and distinct structures for AI and Non-AI agents.',
    type: 'Platform',
    badge: 'Enhancement',
    date: 'September 8, 2025',
    link: '/docs/updates/overview#cloud-platform-redefined',
    category: 'Platform',
    icon: '🎨'
  },
  {
  title: "Limit WhatsApp Notifications per User",
  description: "Control how many WhatsApp notifications an individual user can receive within a set time period.",
  fullDescription: "The **WhatsApp Notification Limit per User** setting ensures users are not overwhelmed with messages by capping how many notifications they can receive within a defined interval. This helps balance timely engagement with user experience. You can configure the maximum number of notifications, set the time interval in days, and toggle the limit on or off as needed.",
  type: "Engage",
  badge: "Enhancement",
  date: "September 22, 2025",
  link: "/docs/platform_concepts/engagement/engage-settings",
  category: "Engage",
  icon: "💬"
},
  {
    title: 'PCI-Compliant Data Capture in Question Nodes',
    description: 'Securely capture sensitive payment data across Web, WhatsApp, and Voice channels with PCI DSS compliance.',
    fullDescription: 'As part of our commitment to security, Yellow.ai now supports PCI-compliant data capture in question nodes. Input fields for card number, CVV, and PIN can be marked as PCI data, which is automatically encrypted, logged securely, and handled per PCI DSS guidelines.',
    type: 'Security Update',
    contentType: 'major',
    badge: 'Enhancement',
    date: 'July 10, 2025',
    link: '/docs/platform_concepts/studio/build/nodes/prompt-node-overview/question-node#collecting-pci-details-using-question-node',
    category: 'AI Agent',
    icon: '🛡️',
    highlights: [
      'PCI classification for specific input fields',
      'Multi-Channel Support across Web, WhatsApp, and Voice',
      'API-Only Access for PCI variables with secure deletion'
    ]
  },
  {
    title: 'MM Lite Preference for WhatsApp Campaigns',
    description: 'WhatsApp campaigns now support MM Lite API for smarter, Meta-powered message delivery.',
    fullDescription: 'We\'ve added MM Lite API support to outbound campaigns, flows, and notification APIs. This smart delivery feature uses Meta\'s intelligence to decide the best time to send WhatsApp messages, improving your chances of reaching customers when they\'re most likely to engage.',
    type: 'Enhancement',
    contentType: 'major',
    badge: 'Enhancement',
    date: 'August 28, 2025',
    link: '/docs/updates/overview#mm-lite-global',
    category: 'Engage',
    icon: '📱',
    highlights: [
      'Smart delivery timing optimization',
      'Global setting configuration available',
      'Campaign-level override options'
    ]
  },
  {
    title: 'Ccavenue Integration',
    description: 'New option to generate Quick Invoice links during conversations for seamless payment collection.',
    fullDescription: 'CcAvenue is a leading payment gateway that enables businesses to securely accept online payments. We\'ve added a new "Generate Quick Invoice" option to simplify payment collection directly within conversations.',
    type: 'Integration',
    badge: 'new',
    date: 'September 9, 2025',
    link: '/docs/platform_concepts/appConfiguration/ccavenue-payment',
    category: 'Integrations',
    icon: '💳'
  },
  {
    title: 'New Display Controls in Custom Live Chat',
    description: 'Added options to hide the home button and input box while a user is waiting in the agent queue.',
    type: 'Integration',
    badge: 'Enhancement',
    date: 'August 25, 2025',
    link: '/docs/platform_concepts/appConfiguration/customliveagent#connect-custom-live-chat-account-to-yellowai',
    category: 'Integrations',
    icon: '💬'
  },
  {
    title: 'JSON Web Token (JWT) Integration',
    description: 'Added support for JWT authentication to secure APIs and integrations with signed tokens.',
    fullDescription: 'We\'ve added support for JWT authentication, enabling a more secure way to exchange information. Use signed tokens to ensure data integrity and standardize authentication flows across your applications.',
    type: 'Integration',
    badge: 'new',
    date: 'August 25, 2025',
    link: '/docs/platform_concepts/appConfiguration/json-webtoken',
    category: 'Integrations',
    icon: '🔐'
  },
  {
    title: 'WhatsApp Consumption Report Updates',
    description: 'Updated WhatsApp reporting to align with Meta\'s new per-message pricing model, effective July 1, 2025.',
    fullDescription: 'We\'ve updated your WhatsApp consumption report to ensure accuracy with Meta\'s new pricing model. Changes include per-message billing, free utility messages within an open customer service window, and new reporting categories ("Paid" and "Free").',
    type: 'Enhancement',
    badge: 'Enhancement',
    date: 'July 23, 2025',
    link: '/docs/updates/overview#whatsapp-consumption-report-aligned-with-new-pricing-effective-july-1-2025',
    category: 'Insights',
    icon: '📊'
  },
  {
    title: 'Email Channel OAuth Support',
    description: 'Configure the Email channel with Microsoft OAuth for a more secure and seamless connection.',
    type: 'Enhancement',
    badge: 'Enhancement',
    date: 'August 20, 2025',
    link: '/docs/platform_concepts/channelConfiguration/email-outbound#setup-email-channel-with-oauth',
    category: 'Channels',
    icon: '📧'
  },
  {
    title: 'Redesigned Topic Details Page',
    description: 'Refreshed design and improved terminology on the Topic Details page in the Analyze module.',
    type: 'Enhancement',
    badge: 'Enhancement',
    date: 'September 2025',
    link: '/docs/platform_concepts/analyze/indepthinsights',
    category: 'Analyze',
    icon: '📈'
  },
  {
    title: 'Message Redaction in Chats',
    description: 'Safeguard sensitive customer data with message redaction directly from the Inbox.',
    type: 'Security Update',
    badge: 'Enhancement',
    date: 'Jun 23, 2025',
    link: '/docs/platform_concepts/inbox/inbox-settings/team/agents#message-redaction-to-protect-sensitive-information-with-controlled-visibility',
    category: 'Inbox',
    icon: '🔒'
  },
  {
    title: 'Sunset Notice: Legacy Analytics Screens',
    description: 'As part of our upcoming Analytics revamp, we are streamlining the UI by removing a few legacy screens.',
    fullDescription: 'We are removing the User Journeys, Health, User Data, and User Trends screens to reduce clutter. Key metrics from these pages will remain available in the Overview dashboard. This is part of our broader effort to deliver cleaner insights and a more intuitive interface.',
    type: 'Enhancement',
    badge: 'Enhancement',
    date: 'July 2, 2025',
    link: '/docs/updates/2025/april-q2#sunset-notice-clearing-the-path-for-a-smarter-analytics-experience-',
    category: 'Insights',
    icon: '🌅'
  }
].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

// --- UTILITY FUNCTIONS ---

/**
 * Get the most recent updates for display on the home page
 * Combines feature highlights and recent updates, formats them consistently
 * @param {number} limit - Number of updates to return (default: 5)
 * @returns {Array} Array of formatted update objects
 */
export const getRecentUpdatesForHomePage = (limit = 5) => {
  // Convert feature highlights to home page format
  const formattedFeatureHighlights = featureHighlights.map(feature => ({
    title: feature.title,
    description: feature.shortDescription,
    type: feature.badge, // "Major Update", "New", "Enhancement"
    badge: feature.badge === 'Major Update' ? 'new' : 
           feature.badge === 'Enhancement' ? 'Enhancement' : 'new',
    date: feature.date,
    link: feature.link,
    category: feature.category
  }));

  // Convert all updates to home page format
  const formattedAllUpdates = allUpdates.map(update => ({
    title: update.title,
    description: update.description,
    type: update.type,
    badge: update.badge,
    date: update.date,
    link: update.link,
    category: update.category
  }));

  // Combine and sort by date (newest first)
  const combined = [...formattedFeatureHighlights, ...formattedAllUpdates];
  const sorted = combined.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Return the most recent updates up to the limit
  return sorted.slice(0, limit);
};

/**
 * Get the most recent update date and format it relative to today
 * @returns {string} "Today", "Yesterday", or formatted date
 */
export const getLastUpdatedDisplay = () => {
  // Get all dates from both feature highlights and updates
  const allDates = [
    ...featureHighlights.map(item => item.date),
    ...allUpdates.map(item => item.date)
  ];
  
  if (allDates.length === 0) return 'No updates';
  
  // Find the most recent date
  const mostRecentDate = allDates.reduce((latest, current) => {
    const latestTime = new Date(latest).getTime();
    const currentTime = new Date(current).getTime();
    return currentTime > latestTime ? current : latest;
  });
  
  // Parse the most recent date
  const updateDate = new Date(mostRecentDate);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  // Reset time parts for date comparison
  const updateDateOnly = new Date(updateDate.getFullYear(), updateDate.getMonth(), updateDate.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const yesterdayOnly = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
  
  // Compare dates
  if (updateDateOnly.getTime() === todayOnly.getTime()) {
    return 'Today';
  } else if (updateDateOnly.getTime() === yesterdayOnly.getTime()) {
    return 'Yesterday';
  } else {
    // Format as readable date (e.g., "Sep 22")
    return updateDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }
};

/**
 * Configuration for home page display
 */
export const config = {
  maxUpdates: 5,
  showOnlyNew: false
};
