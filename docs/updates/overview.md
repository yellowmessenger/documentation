---
title: October 2023
sidebar_label: Latest product updates (October 2023)
featured: true
---

![](https://i.imgur.com/hIGEIJL.png)

## Studio

### New enhancements in Dynamic chat node

The Dynamic chat node has been enhanced with the following features:

**1. Fetch dynamic data in interactions through workflows:**

We've introduced the capability to include workflows (such as APIs, databases, functions, and knowledge bases) directly from the dynamic node. This expansion in functionality unlocks exciting possibilities for dynamic conversations, all while reducing costs and addressing significant existing challenges.

**[Read Docs](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#skill-configuration)**

<img src="https://i.imgur.com/n9dV7Jz.png" alt="drawing" width="65%"/>

**2. AI prompt generator for effortless prompt creation**

   <img src="https://i.imgur.com/iGwbaVj.png" alt="drawing" width="65%"/>

Click **Create prompt with AI** and input your prompt details. Upon generating, the platform will automatically create a prompt from your input and suggest additional prompts for enhancement.

**[Read Docs](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#generate-prompts-with-ai-prompt-generator)**

 <img src="https://i.imgur.com/1MrUrum.png" alt="drawing" width="75%"/>

### Multilingual responses from KB

When the uploaded knowledge(documents, integration docs, or website) is in English, we can now enable multilingual responses through the KB. This means that we can translate responses into the end user's target language based on their language preference or the language detected from their initial message.

**[Read Docs](https://docs.yellow.ai/docs/platform_concepts/studio/kb/advancedsettings#multilingual-kb-responses)**

   <img src="https://i.imgur.com/oBsrILo.png" alt="drawing" width="45%"/>

## Engage
### Introduced new KPIs in flow campaigns report 

A new KPI in the Flow Campaign report displays text replies, quick replies, call drop-off rate, call pickup rate, and more.


### New events to capture Shopify return requests

Introducing a new event ```shopifyReturnRequest``` designed to capture return requests in Shopify. This feature helps to streamline your return-related processes, making it easier to handle tasks like notifying customers and efficiently managing your inventory. 

**[Read Docs](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/shopify#supported-standard-user-properties-from-shopify-events)**

### Enhancements

1. We have optimized user creation API by extending batch support from 100 to 1000 users at a time.
2. Outbound Campaign Status will now have Malformed Delivery status.

## Chat Widget

### Upload custom font for consistent branding across the platform

The platform now offers the functionality to configure and apply a custom font to match website or mobile app branding. This feature enables users to maintain a consistent and personalized visual identity across the widget.

   ![](https://i.imgur.com/0pTp48Q.png)

### Optimized live bot page

The live bot page has been optimized with the following features:

1.  **Integration with Chrome Extension:** 

The LiveBot page has been enhanced with a Chrome extension feature, facilitating bot testing on any website. Users can seamlessly test bot functionalities across various web pages directly from the LiveBot page.

   ![](https://i.imgur.com/4YxsG4z.png)

* **Quick Access to Resources:** 

Users can now easily access `docs.yellow.ai` and `community.yellow.ai` directly from the LiveBot page. This update enables navigation to help doc and community forums for support and information.

## Mobile SDK & Partner APP

### Enhanced YM Authentication for Security

Secure YMAuthentication is introduced to protect the **ymAuthenticationToken** from unauthorized access, offering additional security to bot conversations.

### Introducing token revalidation

This functionality is introduced to revalidate the token when the authentication token expires. Once your secure YMAuth is enabled, whenever your authentication token expires, the server will automatically initiate a request to get a fresh token from Yellow.

### Real-time bot payload updates with sendEventToBot Function

The sendEventToBot function is introduced to add or update bot payload data after initialization. You can use this function to ensure that your bot's data remains up-to-date throughout its interaction within the app. 

### Revamped My Chat UI for better user experience 

**My Chat UI** in the agent app has been improved to provide an easier and quicker experience for agents.

   <img src="https://i.imgur.com/DdIlVvl.png" alt="drawing" width="40%"/>

## Insights

We had the following enhancements in Insights:

1. Custom Analytics Table (Default Columns) and User360 Table Now Support PII Encryption
2. Initiated DataOps Export Support for Audit Logs Table
