---
title: Build your bot in 5 minutes
sidebar_label: Bot building guide
---

:::note
[Upgrade](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/upgrade#steps-to-upgrade-your-freemium-plan) your account to unlock all the features offered by Yellow.ai.
:::

## Step 1: Sign in to your account

1. Open [Yellow.ai Cloud platform](https://cloud.yellow.ai/login) using your professional Gmail account. To sign up, refer to the detailed guide [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup).
   ![Sign In](https://hackmd.io/_uploads/BkY1LXZE6.png)

<!--
   ![Upgrade Account](https://hackmd.io/_uploads/rkEjHXZ4a.png)
-->

-----

## Step 2: Create a bot

:::info
Following the **sign-up process**, an automated bot will be generated for you. 
To continue customization, you can skip this step and refer to **Step 3**. 
:::


Create a new bot by following these steps: 

1. Navigate to **Overview**. Click on your bot name > **+Create bot**. 
    ![image](https://hackmd.io/_uploads/B1UnosVV6.png)

2. Building options for your bot include selection from **pre-defined templates (marketplace), creation from scratch**, and the option to develop an **orchestrator bot**. Each option is explained in subsequent sections. 
    ![image](https://hackmd.io/_uploads/Hyevj1JS4a.png)


### Import a bot from pre-defined templates

An extensive array of predefined templates are tailored for various business scenarios. You can create a fully functional chatbot by selecting templates closely aligned with your use case. For example, if you need a bot to assist customers with checking their loan status and applying for a loan, simply use the keyword *Banking* to find relevant templates.

1. **Search**: Enter keywords related to your use case, e.g., *banking*.
2. **Preview**: Choose a template/flow and **preview** to ensure it aligns with your expectations.
3. **Create**: Click **Create**, select a subscription and confirm the creation of this bot.

<img src="https://i.imgur.com/WUyJg7x.png" alt="drawing" width="100%"/>       



[**Learn how to use marketplace templates :arrow_right:**](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro#2-view--import-template)

### Create a bot from scratch

Craft a bot from the ground up to align precisely with your unique business requirements. Click **Create bot from scratch**, enter your details and confirm the creation of this bot.

<img src="https://i.imgur.com/GSMvl22.png" alt="drawing" width="100%"/>

:::note
Check **Add live chat support to your bot** to automatically import the flow to use our in-house omin channel customer support platform, **Inbox**.
:::

By default, your bot is created with essential flows: Welcome, fallback for unidentified customer questions, multilingual support, and customer-agent chat. You can customize these [flows](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/user-account-settings) and [publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) your bot.

![](https://hackmd.io/_uploads/r1qvNSBn2.png)

[**Learn how to use studio module in detail :arrow_right:**](https://docs.yellow.ai/docs/platform_concepts/studio/overview)


### Create an orchestrator(parent) bot

The Orchestrator simplifies control and oversight of multiple bots, offering modularity for independent development and one-time setup automation for inter-linkages. Click **+Create orchestrator**, enter your details and confirm the creation of this bot.

![image](https://hackmd.io/_uploads/SkSlUkHV6.png)
[**Learn more about Orchestrator for bots :arrow_right:**](https://docs.yellow.ai/docs/platform_concepts/studio/orchestrator)

----

## Step 3: Invite other bot collaborators 

To facilitate collaboration on your bot, you have the ability to invite other users and manage their permissions. To do this, navigate to the **Access control** section from the overview page and invite users by entering their email IDs.

<img src="https://imgur.com/g5wtZPI.png" alt="drawing" width="40%"/>

You have the flexibility to invite multiple users and assign different levels of access to each. This ensures that users only have the permissions necessary for their role.

You can track incoming access requests through the **User request** tab. If you find a request appropriate, you can grant the required permissions.

![image](https://imgur.com/Z6qtWqp.gif)

----

## Step 4: Build and customize in Studio 

:::note
Bots can be built in Development/Sandbox/Staging mode and published to Live/Production. Learn more about these enviornment [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/publish-env).
:::


**Visualize the interation**:

Bot-Customer interaction represents the ongoing dialogue between the bot and the customer.

<img src="https://imgur.com/9gZkOOP.png" alt="drawing" width="40%"/>


**Create Flows to display bot messages and understand customer input**:

To guide the bot's responses, you create predefined pathways known as **Flows**.

In the Build section, you can construct these flows, defining the automated sequence of actions the bot takes. This is based on the questions and responses from users.

![image](https://imgur.com/uPml3IQ.png)


**Build conversations using nodes**:

Nodes are essential elements in these flows, representing specific points in the conversation. Each node is a juncture where the bot can perform an action or respond to user input.

**Connecting Nodes**:

Nodes are connected to each other, forming the conversational flow. This connection occurs by linking the end of one node to the beginning of another.

![image](https://imgur.com/EIt0gea.gif)


**Bot response and training**:

The bot's responses are driven by customer input. To enhance its understanding, the bot can be trained in the **Train** section. 


![image](https://imgur.com/ZOaB6wZ.png)

Transform your bot-building experience with Yellow.ai's **powerful AI features** mentioned below:


### AI-powered knowledge base integration

Easily link your Knowledge Base (KB) to the bot, enabling it to access information and provide accurate answers.   
Learn more [here](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview).
    ![image](https://hackmd.io/_uploads/rkHziNvEp.png)


### Automated flow generation

Generates bot flows effortlessly tailored to your specific use cases, using AI Co-pilot. Save time and resources with smart, automated bot creation.  
Explore [Automation](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/ai-copilot). 
    ![image](https://hackmd.io/_uploads/Sk2-3NwEp.png)


### AI based Dynamic chat node

Enhance your bot's conversational capabilities using the Dynamic chat node within flows. This allows for dynamic and context-aware interactions.  
Discover [Dynamic chat node](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode).
    ![](https://i.imgur.com/HFHBq0c.png)

---

## Step 5: Publish/Deploy your bot online 

After adding all the components (flows, database, NLU training, APIs, etc.), follow these steps:

1. Test your bot on the right pane by selecting the required channel. Learn how to debug [here](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow).
2. Publish the bot to Live or Production mode. Learn how [here](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes). 
   ![Test and Publish](https://hackmd.io/_uploads/ByvfoXW4T.png)
3. Add the bot as a chat widget to your desired platform. [Guide here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chrome-extension)
   ![Add Bot Widget](https://hackmd.io/_uploads/HyQIj7-Vp.png)


Your initial bot has been developed and deployed. You can enhance its capabilities by exploring additional modules and incorporating features to streamline interactions between the bot and customers.
- Integrate third-party tools ([Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) and [Integrations](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview).
- Leverage the Customer Data Platform [User360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview) for customer data, e.g., lead generation.
- Run inbound and outbound marketing campaigns via. [Engage](https://docs.yellow.ai/docs/platform_concepts/engagement/engage).
- Integrate tech support and a knowledge base into your website through [Inbox](https://docs.yellow.ai/docs/platform_concepts/inbox).

-----

## Step 6: Monitor your bot performance

Bot insights are automatically tracked. You can also customize the tracked data through Insights module.
![Track Insights](https://hackmd.io/_uploads/H1lqoX-VT.png)

<!--

## Step 6: Explore Add-ons

1. **Add Channels and Integrations:** Integrate third-party tools seamlessly to support your bot's use case.  
2. **Use User360:** Leverage the Customer Data Platform (CDP) for customer data, e.g., lead generation.
   ![User360](https://hackmd.io/_uploads/rykehQZVT.png)
3. **Engage:** Run inbound and outbound marketing campaigns.
   ![Engage](https://hackmd.io/_uploads/rJ4Xh7-V6.png)
4. **Inbox:** Integrate seamless tech support and a knowledge base into your website.
   ![Inbox](https://hackmd.io/_uploads/BkqBhQWEp.png)

-->

----

**What's next?**

- Dive into [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) and [functions](https://docs.yellow.ai/docs/platform_concepts/studio/build/code).
- Integrate various [channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview).
- Create flows using [tables](https://docs.yellow.ai/docs/platform_concepts/studio/database).
- Analyze performance through [analytics](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights).
- Design a [voice bot](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/vbintro).