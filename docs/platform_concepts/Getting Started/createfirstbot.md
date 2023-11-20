---
title: Build Your Bot in 5 Minutes
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


### Import a fully designed bot from pre-defined templates

An extensive array of predefined templates are tailored for various business scenarios. You can create a fully functional chatbot by selecting templates closely aligned with your use case. For example, if you need a bot to assist customers with checking their loan status and applying for a loan, simply use the keyword *Banking* to find relevant templates.

1. **Search**: Enter keywords related to your use case, e.g., *banking*.
2. **Preview**: Choose a template/flow and **preview** to ensure it aligns with your expectations.
3. **Create**: Click **Create**, select a subscription and confirm the creation of this bot.

<img src="https://i.imgur.com/WUyJg7x.png" alt="drawing" width="100%"/>       



[**Learn how to use marketplace templates :arrow_right:**](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro#2-view--import-template)


### Create an Orchestrator(Parent) bot with linked Child bots

The Orchestrator simplifies control and oversight of multiple bots, offering modularity for independent development and one-time setup automation for inter-linkages. Click **+Create orchestrator**, enter your details and confirm the creation of this bot.

![image](https://hackmd.io/_uploads/SkSlUkHV6.png)
[**Learn more about Orchestrator for bots :arrow_right:**](https://docs.yellow.ai/docs/platform_concepts/studio/orchestrator)

### Manually create a bot from scratch

Craft a bot from the ground up to align precisely with your unique business requirements. Click **Create bot from scratch**, enter your details and confirm the creation of this bot.

<img src="https://i.imgur.com/GSMvl22.png" alt="drawing" width="100%"/>


By default, your bot is created with essential flows: Welcome, fallback for unidentified customer questions, multilingual support, and customer-agent chat. You can customize these [flows](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/user-account-settings) and [publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) your bot.

![](https://hackmd.io/_uploads/r1qvNSBn2.png)

[**Learn how to use studio module in detail :arrow_right:**](https://docs.yellow.ai/docs/platform_concepts/studio/overview)

----

## Step 3: Work your magic with Studio 

:::note
Bots can be built in Development/Sandbox/Staging mode and published to Live/Production. Learn more about these enviornment [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/publish-env).
:::

Flows represent the automated sequence of actions your bot executes. Studio empowers you to build and customize flows effortlessly.

![Open Studio](https://hackmd.io/_uploads/BJffdQ-Ep.png)

**Use Cases:**
1. **AI-powered knowledge base integration**: Easily link your Knowledge Base (KB) to the bot, enabling it to access information and provide accurate answers. Learn more
Learn more [here](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview).
    ![image](https://hackmd.io/_uploads/rkHziNvEp.png)


2. **Automated flow generation**: Generates bot flows effortlessly tailored to your specific use cases, using AI Co-pilot. Save time and resources with smart, automated bot creation. Explore Automation
Learn more [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/ai-copilot). 
    ![image](https://hackmd.io/_uploads/Sk2-3NwEp.png)


3. **Intelligent conversations with AI based Dynamic chat node**: Enhance your bot's conversational capabilities using the Dynamic chat node within flows. This allows for dynamic and context-aware interactions. Discover Dynamic chat node.
Learn more [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode).
    ![](https://i.imgur.com/HFHBq0c.png)

---

## Step 4: Publish/Launch your bot online 

After adding all the components (flows, database, NLU training, APIs, etc.), follow these steps:

1. Test your bot on the right pane by selecting the required channel.
2. Publish the bot to Live or Production mode. Learn how [here](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes). 
   ![Test and Publish](https://hackmd.io/_uploads/ByvfoXW4T.png)
3. Add the bot as a chat widget to your desired platform. [Guide here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chrome-extension)
   ![Add Bot Widget](https://hackmd.io/_uploads/HyQIj7-Vp.png)

-----

## Step 5: Monitor your bot performance

Bot insights are automatically tracked. You can also customize the tracked data through Insights module.
![Track Insights](https://hackmd.io/_uploads/H1lqoX-VT.png)

---

## Step 6: Explore Add-ons

1. **Add Channels and Integrations:** Integrate third-party tools seamlessly to support your bot's use case.  
2. **Use User360:** Leverage the Customer Data Platform (CDP) for customer data, e.g., lead generation.
   ![User360](https://hackmd.io/_uploads/rykehQZVT.png)
3. **Engage:** Run inbound and outbound marketing campaigns.
   ![Engage](https://hackmd.io/_uploads/rJ4Xh7-V6.png)
4. **Inbox:** Integrate seamless tech support and a knowledge base into your website.
   ![Inbox](https://hackmd.io/_uploads/BkqBhQWEp.png)



----

**What's next?**

- Dive into [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) and [functions](https://docs.yellow.ai/docs/platform_concepts/studio/build/code).
- Integrate various [channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview).
- Create flows using [tables](https://docs.yellow.ai/docs/platform_concepts/studio/database).
- Analyze performance through [analytics](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights).
- Design a [voice bot](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/vbintro).