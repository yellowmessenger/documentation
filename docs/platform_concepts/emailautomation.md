---
title: AI-powered Email Automation 
sidebar_label : Email automation 
---

:::note

Email automation is a gated feature. Reach out to the support team to enable it for your bot.

:::

## Overview 

Email automation streamlines communication by automatically handling customer emails. Utilizing this virtual assistant, businesses can efficiently manage repetitive tasks, ensuring timely and effective email interactions.


### Features 

The key features of email automation include:

| Feature | Description |
| --- | --- |
| Handling complex and unstructured emails | Effortlessly manage a variety of customer emails, including complex and unstructured messages. Our solution intelligently comprehends even the most intricate content, ensuring quick and accurate responses for every customer. |
| Automation workflows | Tailor workflows to align with your business needs. Our email bot selects the appropriate flow based on user inquiries, executing the necessary actions seamlessly. |
| Knowledge base responses | Retrieve responses effortlessly from documents or other knowledge base resources, saving valuable time for agents who would otherwise spend it searching through extensive knowledge bases. |
| Personalized responses | Deliver personalized responses that understand customer emotions, ensuring a satisfying and human-like interaction beyond typical automated replies. |
| Automation assistant for agents | Empower your support team by automating response crafting, freeing up their time for more meaningful customer interactions. |
| Continuous learning | Leverage our Continuous Learning Language Model (LLM) to analyze email exchanges, identify false positives, and trigger a retraining process. Aim for an outstanding accuracy rate of 99%. |
| Multi-lingual support | Connect with your customers effortlessly, regardless of their location. Our solution dismantles language barriers, ensuring smooth and effective communication. |
| Works with top email providers | Easily integrate with your existing email systems. No headaches, just a smooth integration with popular email providers. |
| Advanced analytics | Measure key metrics such as response times, resolution rates, customer satisfaction scores, and the impact of automated workflows. Make informed decisions to enhance overall customer experience. |


### Use cases

Explore the practical applications of email automation for your business in the following scenarios:

| Use case | Key problem | Current alternative |
| --- | --- | --- |
| Addressing frequently reported issues efficiently | Agents spending excessive time on common queries | Manual responses to frequently asked questions |
| Providing quick and relevant responses to customers | Delays and decreased customer satisfaction due to manual processes | Onboarding more agents to manage the increased email volume |
| Handling lengthy and unstructured customer emails | Time-consuming manual interpretation leading to delays | Onboarding more agents to manually address the growing email volume |
| Personalizing email support experiences | Significant manual effort causing a rise in response times | Manual crafting of responses based on general customer information |
| Improving access to information for agents | Challenges in accessing necessary information for user queries | Agents frequently switching tabs and consulting peers for answers |



----

## Email automation workflow

> **Prerequisite**: Your business email ID must be set up in the yellow.ai platform to receive customer emails and automatically respond to them. 


Following is a summary of the email automation process: 

![image](https://imgur.com/B3qCGGv.png)

1. **Initial email processing**: Upon receipt of a customer query via email, the Yellow.ai platform takes charge of processing the incoming mail from our inbox.
2. **Intent and entity analysis**: The platform meticulously analyzes the email content to identify key intents and entities, laying the foundation for a targeted response.
3. **Dynamic response generation**:
    - **Flow execution**: The platform dynamically executes predefined flows based on the identified intents and entities, ensuring a tailored approach to customer needs.
    - **FAQ and document integration**: In cases where specific intents or entities don't trigger predefined flows, the system intelligently retrieves responses from our FAQs or uploaded documents.
    - **Thread contextualization**: If the email query is part of an existing thread, the platform intelligently parses the previous conversation to provide contextually relevant responses.
4. **Summarized response generation**: The system consolidates the generated responses and formulates a succinct and coherent output.
5. **Outgoing email response**: The finalized response is formatted and dispatched as an outgoing email to the customer's provided email address.
6. **Human support intervention**: In scenarios where the Yellow.ai platform fails to generate a response, the system seamlessly escalates the query to a human support agent for manual intervention and resolution.

----



## Steps to set up email automation 

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
4. **Debug your flow**: Analyze the conversation by looking at it on **Studio > Analyze > Conversation logs**. Based on the conversation taking place, fine-tune the bot's ability to comprehend emails and generate accurate responses.

> Learn more about Conversation logs [here](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs). 

----


## Upcoming features

Introducing exciting upcoming features in Email Automation:

1. Agent assist: An advanced feature harnessing the power of Natural Language Processing (NLP) to revolutionize email responses. By automating tasks and offering contextual reply suggestions, Agent Assist minimizes the time agents spend on crafting emails. This functionality includes summarizing conversational history, presenting sentiment analysis, and enhancing response efficiency. Customers can expect quicker and more accurate service, while our business benefits from improved agent productivity. 

2. Analytics dashboard: Gain comprehensive insights into email automation with our dedicated analytics dashboard. Track functionalities, customer interactions, and performance metrics in one centralized location. This feature empowers you to make informed decisions, optimize processes, and ensure a seamless email automation experience.

3. Pre-processing initiatives: Unleash the power of pre-processing through Init journeys/flows. Tailor your approach based on specific needs:
    - For yellow.ai support, automate Salesforce ticket creation for red account customers upon receiving new emails.
    - Enable direct agent communication for specific query categories, bypassing email automation, to ensure swift and personalized responses.
    - Gather essential customer information like account details and user roles before assigning queues or agents, optimizing workflow efficiency.