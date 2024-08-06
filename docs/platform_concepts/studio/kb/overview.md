---
title: Transform your website into a chatbot with Knowledge base
sidebar_label: Overview
---


## Introduction to knowledge base(KB)

With Knowledge base, effortlessly transform your existing website into an intelligent bot that responds to user queries, requiring zero effort on your part—simply input your website URL, and the bot is ready to engage with precision.

![image](https://imgur.com/7ySgSLu.png)


Inputting a website URL into the Knowledge base triggers the creation of a customized bot. This bot is designed to extract and leverage pertinent information from the provided URL, facilitating automated responses and enhancing user engagement.

With Knowledge base, you can achieve: 
- **Efficiency**: Automation reduces manual bot creation efforts and ensures real-time adaptation to website changes.
- **Customization**: Bots are tailored to the unique structure and content of each website, optimizing user engagement.
- **Scalability**: Easily scalable for applications ranging from small business websites to large-scale e-commerce platforms.

This feature, driven by Yellow.ai's exclusive **Studio** module (not GPT), uses a functionality similar to **Document Cognition (Doc Cog)** to support knowledge base responses.


:::note
* For GPT-powered features, contact us via [community.yellow.ai](https://community.yellow.ai/), where our product team can assist you.
* We now support Bahasa language in KB
:::

#### KnowledgeBase vs. Doc Cog

The distinction between Doc Cog and the Zero Setup Knowledgebase lies in their response to user queries. While v1.Doc Cog retrieves precise information from its source when a user requests it, the Zero Setup Knowledgebase not only provides the answer to the query but also presents a condensed summary of the information, enhancing the user experience with additional context.



### Use cases

- **Automated website FAQs**:
The Knowledgebase can be utilized to create a bot that automatically responds to FAQs by extracting information directly from the website. This reduces the burden on customer support teams and ensures quick and accurate responses.


- **Product information retrieval**:
Knowledgebase allows the automated bot to retrieve the latest product details, availability, and pricing information directly from the website. This ensures that customers receive accurate and real-time information about the products they are interested in.

- **Dynamic content updates**:
By integrating Knowledgebase, the bot can be configured to pull the most recent content updates from the website. This ensures that users interacting with the bot receive the latest information without manual content management.

- **Interactive learning platforms**:
Knowledgebase can be employed to create a bot that guides learners through specific topics based on the content available on the website. The bot serves as an interactive learning assistant, responding to queries and providing information within the scope of the website's content.

### Workflow

Explore this flowchart depicting the bot's navigation to knowledgebase.

![](https://i.imgur.com/fofS2WK.png)


--------

## Create a bot for your website

To create a bot for your website, follow these steps:

1. Go to **Knowledge base**.

   ![](https://imgur.com/1ceNXU5.png)

2. Click **+ Add URL**. Add your website URL and click Save. 

    ![image](https://imgur.com/aEP8jvo.png)

    > Configure this in Sandbox/Development environment. 

    :::info
    You can set up the welcome [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) or [document search](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#14-document-search) node to organize the conversation structure. 
    :::


3. Bot is ready for testing on the right side pane. After testing the bot, you can [Publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) it to Live/Production environment and [deploy](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#deploy-chat-widget) it to your website. 

    ![image](https://imgur.com/f0zqz3h.png)

:::note
While building your website bot, maintain simplicity by refraining from adding multiple intents and flows that could potentially impact the confidence of the bot's responses.
:::


:::info

Increase the **Document search threshold** value to improve the accuracy of the links generated. Learn more [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#document-search-settings). 

:::


------


In the upcoming sections, **additional Knowledgebase features** will be explored, such as:

* Ingesting data from multiple sources
* Configuring the output/result/editing the response
* Monitoring likes and dislikes
* Uploading different types of data 
* Setting up a multilingual KB bot for your website 



