// Utility to get recent updates from What's New page data
// This centralizes the data so both pages stay in sync

// --- FEATURE HIGHLIGHTS DATA (Major Updates) ---
export const featureHighlights = [
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
- **Data Storage:** Customer Table, Knowledge Base Articles, Custom Tables
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
    id: 'platform-redesign',
    title: 'Cloud Platform Redefined for a Better Experience',
    shortDescription: 'A redesigned workspace with a cleaner theme and improved navigation for a smoother, more intuitive experience.',
    fullDescription: 'We\'ve redesigned the Yellow.ai workspace with a cleaner theme and improved navigation to give you a smoother, more intuitive experience. This update reduces clutter in the left navigation and provides an overall better workflow, with refreshed colors, fonts, and distinct structures for AI and Non-AI agents.',
    image: 'https://docs.yellow.ai/assets/images/ai-agent-802ebc79e4fb161e23bcb43d275d9ffe.gif',
    category: 'Platform',
    badge: 'Major Update',
    date: 'September 8, 2025',
    link: '/docs/updates/overview#cloud-platform-redefined',
    highlights: [
      'New Navigation for faster access to modules',
      'Refreshed theme, typography, and colors',
      'Automation module is now named Build',
      'Distinct workflows for AI and Non-AI agents'
    ]
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
