---
title: July-August 2024 Releases
sidebar_label: Latest releases
featured: true
---

   ![](https://i.imgur.com/hIGEIJL.png)


## Your Cloud Platform Redefined - Discover Simplicity

We're excited to announce a major enhancement to your AI platform, designed to boost efficiency and deliver exceptional results. We've carefully restructured our platform to provide a more intuitive and powerful user experience. Key improvements include:

### Expanded Automation
Our previous "Studio" module has evolved into a comprehensive "Automation" hub, centralizing bot building and inbox automation. This is just the beginning—stay tuned for even more powerful automation features coming soon.

### Dedicated User 360
We've elevated "User 360" to a standalone module, providing a comprehensive view of user interactions across the entire platform. This allows for deeper insights and enables other modules to leverage user data for enhanced performance.

### Independent Knowledge Management
We've transformed the previously Studio-restricted Knowledge Base into a standalone "Knowledge" module. This dedicated focus empowers you to effectively manage and leverage your knowledge assets.

### Advanced Conversation Analysis
Our new "Analyze" module offers detailed insights into customer conversations, helping you understand what they’re talking about, monitor user sentiment, and determine if their queries are resolved. It also learns from interactions and automatically generates AI content to enhance bot automation.

### Centralized Settings 
We've streamlined your experience by unifying all settings into one location. You can now manage Chatbot, Inbox, and Engage settings all from a single, convenient place.

---


## New Dynamic Chat Node Configuration - Context Switching

You can now enable context switching in the additional settings to allow NLP or orchestration LLM (depending on the navigational entity in your bot) to take over and switch out of the dynamic chat node.

**[Context Switching](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#additional-settings)** enables the bot transition from the current Dynamic chat node to a different flow based on user input, such as switching to a "talk to agent" flow when the user expresses a need for live support. 

   <img src="https://imgur.com/EzYEs9X.png" width="60%"/>

**Example**: If a user is navigating a goal-oriented flow and types "talk to agent," the bot can switch to the relevant agent support flow seamlessly.


### Limitation
* While context switching is supported, the previous context will not be maintained.


### Important Considerations:

* This update may introduce complexity in some bots where user inputs could match both dynamic chat node responses and predefined intents.
* We recommend optimizing your bot's setup carefully to balance between dynamic responses and intent-based interactions.
* Special attention is needed for addressing queries where user prompts could potentially overlap with expected replies in dynamic chat nodes.

---

## Introducing Threshold-Based Custom Alerts for Your Reports

We’re excited to announce a new feature that will enhance how you monitor your reports: **Threshold-Based Custom Alerts**. This allows you to configure alerts based on specific threshold conditions in your count-based reports.

## Key Features:

🔔 **Custom Alerts:** 

Set up alerts for any count-based metrics by applying filters to default tables and saving the results as count visualizations. To create an alert, select the Monitor icon on your saved report and access the Create Alert window.

➗ **Threshold Conditions:** 

Choose a mathematical operator and specify your threshold value to configure your alert. *(More operators will be available in future updates.)*

⏲️ **Scheduling:** 

Customize how often you want the metric to be checked. The options include weekly, daily, hourly, or every 5 minutes. Alerts will be sent if the count meets the threshold at the scheduled check time.

📅 **Business Hours Setup:** 

Define specific business hours and time periods during which alerts should be active. This ensures that alerts are only sent during these times, even if the threshold is met outside of them.

📧 **Recipient Management:** 

Add email addresses for recipients of the alerts. You can customize the recipient list for each alert to suit your needs.

❌ **Duplicate Alert Prevention:** 

To minimize spam, you have the option to avoid receiving duplicate alerts if the count value remains the same between consecutive checks.

---

## New Tables in the Data Explorer

We’ve introduced a couple of new tables in the Data Explorer that will be incredibly useful for GenAI and WhatsApp use cases:

### LLM Usage Table
- **Purpose:** Provides access to raw data on LLM (Large Language Model) usage.
- **Metrics Included:**
  - Token consumption
  - Execution time
  - Session ID data
  - Channel
  - Models
  - Provider

### WhatsApp Consumption Table
- **Purpose:** Addresses a frequently requested feature, especially in recent weeks.
- **Metrics Included:**
  - 24-hour breakdown of authentication counts
  - Business-initiated utility/marketing session counts
  - User-initiated session counts

:::info
We will soon provide default reports for these use cases in our dashboards, enhancing your ability to monitor and analyze these metrics effectively.
:::

---

## Facebook Channel Revamp

We’ve introduced significant improvements to our [Facebook Channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/facebook-messenger):

### 1. Unified Channel Configuration
- **Facebook Messenger and FB Comments:** Now configured on the same channel page! 🤝
  - Streamlined setup process
  - Easier management of both messaging and comments

### 2. Multiple Pages Support
- **Manage Multiple Pages:** Control multiple Facebook pages from a single location.

### 3. Comment Response Routing
- **Flexible Comment Management:** Configure where replies to comments should go, giving you complete control over conversations!

---

## Five9 Integration Support


For customers using Five9, this integration allows for seamless connection with Five9 live agents. It enhances your support capabilities by enabling smooth transitions from automated chatbot interactions to live agent assistance provided by Five9.

With this,  you can easily switch from chatbot interactions to Five9’s live agents without disruption.

[Learn more](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/five9).
