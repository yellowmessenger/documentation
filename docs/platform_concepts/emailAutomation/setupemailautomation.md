---
title: Steps to set up email automation
sidebar_label : Set up email automation 
---

## Set up email automation 


To set up email automation for your email ID, follow these steps:

1. Log in to cloud.yellow.ai and create a bot.
2. **Configure email channel**: 
    - Navigate to **Channels** > **Email** and click on **Add account**. 
    - Under **Configure objective**, select **Email automation** to enable the configuration of your email ID for email automation. 
    - Provide necessary details. 
    - Click **Save**. 

> Refer to [this guide](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound), to understand email channel configuration.

2. [**Design your bot**](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/createfirstbot): Customize flows, intents, entities, FAQs, and documents based on your use case to ensure the bot generates responses to customer queries received via email. 

> While creating flows, note that only **Text** and **Action** nodes are supported. 

3. **Test the output**: Once the email is configured, the bot automatically generates responses to any emails received on the configured email ID. Send a test email (initiate a conversation based on the input given to your bot) to test the automated output.
4. **Debug your flow**: Analyze the conversation by looking at it on **Analyze > Conversation logs**. Based on the conversation taking place, fine-tune the bot's ability to comprehend emails and generate accurate responses.

> Learn more about Conversation logs [here](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs). 

----


## Upcoming features

Introducing exciting upcoming features in Email Automation:

1. **Agent assist**: An advanced feature harnessing the power of Natural Language Processing (NLP) to revolutionize email responses. By automating tasks and offering contextual reply suggestions, Agent Assist minimizes the time agents spend on crafting emails. This functionality includes summarizing conversational history, presenting sentiment analysis, and enhancing response efficiency. Customers can expect quicker and more accurate service, while our business benefits from improved agent productivity. 

2. **Analytics dashboard**: Gain comprehensive insights into email automation with our dedicated analytics dashboard. Track functionalities, customer interactions, and performance metrics in one centralized location. This feature empowers you to make informed decisions, optimize processes, and ensure a seamless email automation experience.

3. **Pre-processing initiatives**: Unleash the power of pre-processing through Init journeys/flows. Tailor your approach based on specific needs:
    - For yellow.ai support, automate Salesforce ticket creation for red account customers upon receiving new emails.
    - Enable direct agent communication for specific query categories, bypassing email automation, to ensure swift and personalized responses.
    - Gather essential customer information like account details and user roles before assigning queues or agents, optimizing workflow efficiency.