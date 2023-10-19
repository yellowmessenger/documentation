---
title: September 2023
sidebar_label: Latest product updates (September 2023)
featured: true
---

![](https://i.imgur.com/hIGEIJL.png)

## Studio

### New enhancements in Dynamic chat node 

The Dynamic chat node has been enhanced with the following features:

**1. Version control for prompts**

If your prompt is ready and steady, save it as a backup. This lets you return and restore it to an earlier version if necessary. Additionally, the prompt you see in the publication has a tag that makes it easy to revert to the previous stable version.

  <img src="https://i.imgur.com/SQQbjyk.png" alt="drawing" width="60%"/>

**2. Ability to set limitations for conversations and retries**

You can set the maximum conversation limit to prevent looping and control costs. You can also specify how many retry (OOPS) messages to send before exiting to the fallback.


   <img src="https://i.imgur.com/CxgtfNa.png" alt="drawing" width="80%"/>

**3. Use custom languages in your bot**

Within the model configuration, you can manually input your custom GPT or LLM credentials into the bot. You can then independently use various models on different dynamic nodes within the same bot. This enhances the chatbot's capabilities by training it with specialized knowledge and language skills, resulting in more effective, personalized, and efficient interactions with users.

   <img src="https://i.imgur.com/Dmx2CzB.png" alt="drawing" width="80%"/>
   

 **4. Data masking conversation logs**

Enabling **Mask input** will conceal the input collected from the user, ensuring that this sensitive information is hidden not only from the user but also in the conversation logs, thus enhancing privacy and data security.

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-dynamic-chat)**

## Engage

### Introducing Segments via Events:

We're excited to introduce the latest enhancement to our platform - Segments via Events! With this update, you now have a powerful tool to create user segments based on specific events. This means you can precisely target users who have taken certain actions or exhibited particular behaviours within your system.

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/segments-events)**

<img src="https://i.imgur.com/XjM6Knv.png" alt="drawing" width="30%"/>

### New KPIs in Flow campaign report for User Engagement overview and analysis:

* **User engagement overview:** This KPI provides a bird's-eye view of how effectively your campaigns are connecting with your audience. This feature provides essential metrics such as engagement channels, events received, unique clicks, conversations initiated, and goals achieved all conveniently presented in one place. 

  **[Read docs](https://docs.yellow.ai/docs/platform_concepts/engagement/flow-report#user-engagement-overview)**

![](https://i.imgur.com/TNrPw5O.png)

* **User Engagement Analysis:** This report provides comprehensive insights into user interactions with your content. Understand what's working and what needs improvement, with detailed statistics on audience, impressions, reach, engagement, and more. 

  **[Read docs](https://docs.yellow.ai/docs/platform_concepts/engagement/flow-report#user-engagement-analysis)**
  
 ![](https://i.imgur.com/DLhGx1F.png)


## Integrations

### Introducing ServiceNow live chat

Yellow.ai integrates with ServiceNow live chat, enabling you to link your ServiceNow live chat agents with Yellow.ai. When a user needs help from a live support agent, they'll be directly connected to a ServiceNow live agent through our platform.

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/servicenow-livechat)**
 
   ![](https://i.imgur.com/vlvvrGx.png)

## Chat widget

### Text styling in chat 

The chat widget provides text formatting options using Markdown syntax, enabling you to style text as necessary to enhance the user experience.

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-text-formatter)**


<img src="https://i.imgur.com/B0yXygw.png" alt="drawing" width="40%"/>

### Test Whatsapp integration without a Whatsapp Business account

This enhancement provides a convenient way to test your bot on WhatsApp without connecting the bot to a WhatsApp Business Account (WABA). It offers a dedicated testing environment where you can thoroughly test and refine your bot before deploying it.


**[Read docs](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/test-wa-bot)**


<img src="https://i.imgur.com/zKvyfHZ.png" alt="drawing" width="30%"/>

### Bot Name is changed to Bot Display Name

Previously, you had the option to customize the bot name for the chat widget in the **Configure** section, affecting only the widget's name. However, for other channels, you needed to make changes in Channels -> the respective channel configuration page, leading to some user confusion. 

To streamline and improve consistency, we've now made it even easier. You can update the bot name for the chat widget in **Channels** ->** Chat widget** -> **Widget panel** - **Bot display name**. This change simplifies the process and ensures a more seamless experience for our users.

![](https://i.imgur.com/dWMaEML.png)

### Set bot language based on website's language

The chat widget now includes an option for users  to change the bot's language in the main menu. This feature allows brands to align the bot's language with the website's language within the chat widget's main menu.  

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-localization)**


<img src="https://i.imgur.com/MSJa1JK.png" alt="drawing" width="30%"/>

## Insights

### Secure PII data on default tables

The Secure data feature allows users to encrypt personally identifiable information (PII) data during export and within the user interface of data explorer tables. This encryption of PII data applies to all users, with the exception of super admins, who will retain access to the unencrypted original data.

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/configure-data#secure-pii-data-on-default-tables)**

![](https://i.imgur.com/u2k6uyu.png)

### Analytics enhancements

* PII encryption in Data Explorer & Reports 
* Data Export (DataOps)
   * PII encryption for eligible dataSets
   * Enhanced write access check for SFTP storage & export job improvements

### Data Explorer enhancements

* Added new column cdpUserId in notification-reports table
* Added surveyType & feedback reply columns in feedback table
* Increase groupBy limit from 5 to 10 with proper timeout handling
* Improved ordering of columns in custom tables same as Studio section
* New WA categories in userEvents eventInfo


## Inbox

### Inbox and User360 integration for an enhanced customer experience

Inbox is now seamlessly integrated with User360, our in-house customer data platform. Every incoming customer chat/ticket will now be logged in user360 before being created in Inbox.

Both agents & admins would get the following abilities through this integration:

* Access to an incoming customer's data stored in User360
* A 360 view/timeline of customer engagement including past, present support tickets, campaigns, 3rd party data etc.,


This lets support teams provide a superior customer experience by helping them better understand customers, anticipating their needs, proactively resolving their issues, and providing a personalized & context rich communication.

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-cdp)**

![](https://i.imgur.com/MPpOMXa.png)

### Optimise support efficiency with Agent Assist Bots

**Problem:** Support agents often face repetitive tasks, including CRM updates and customer-related tasks that involve navigating through multiple tools, disrupting workflow, reducing productivity, and prolonging handling times. 

**The solution:** Centralize operations in the support inbox with an assist bot, streamlining processes and allowing agents to focus on high-priority customer issues, enhancing support efficiency.

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/agentassistbot)**

![](https://i.imgur.com/sA3pjfA.png)

### AI Copilot improved with structured summaries for better readability

Previously, summarization results were presented as a single paragraph, which could sometimes be challenging to read and comprehend. We've listened to your feedback and have revamped the format to provide more user-friendly, well-structured summaries. This update aims to enhance the readability and overall usefulness of the summarised content.

### Internal ticketing enhancement

We've added support for mentions, including `@here, @channel`, and user groups, allowing you to easily notify and collaborate with specific individuals or teams within your Slack workspace.

Secondly, we've streamlined the experience by enabling attachments to be previewed directly within Slack and the Inbox, saving you valuable time in accessing and reviewing important files.

These improvements are geared towards enhancing the overall user experience and making your workflow more efficient.

