---
title: Analytics for Dynamic chat node (GenAI Analytics)
sidebar_label: Chat analytics overview 
---

With the advent of generative AI bots, it has become increasingly crucial to monitor their performance and their impact on user decisions and business objectives. The **Analysis** section within the **Studio** module provides a comprehensive view of various metrics related to the bot's performance and user interactions classified as:

1. **Bot metrics**: Metrics of the overall AI bot
2. **Chat metrics**: Metrics pertaining to a conversation when the Dynamic chat nodes are used

<img src="https://imgur.com/UEsb3FH.png" alt="drawing" width="100%"/> 

:::info
These metrics can be filtered for a particular time-range by clicking the data dropdown on the top right. 

:::

## Bot metrics

Coming soon! 

----
<!-- 
## Bot metrics

The Bot Metrics tab offers the following widgets:

1. **Total user sessions**: This widget displays the total number of sessions that occurred between users and the bot within the selected timeframe.
2. **Sessions analyzed**: It encompasses sessions with ten or more messages, filtering out irrelevant or nonsensical inputs to focus on meaningful interactions.
3. **Resolution rate**: This widget indicates the percentage of sessions where the bot successfully resolved user queries without any mid-way drop-offs or requiring agent assistance. It is calculated as the number of sessions resolved by the bot divided by the total sessions, excluding abandoned and transferred sessions.

    > Click **View resolved chats** to see filtered conversation logs for resolved chats within the chosen time frame.

4. **Drop-off rate**: This metric showcases the percentage of sessions in which users left the conversation before it was completed. A chat is considered abandoned if the last message was from the bot, expecting a user response.

    > Click **View abandoned chats** to see filtered conversation logs for abandoned chats within the chosen time frame.

5. **Agent handover**: This widget provides insights into the percentage of sessions that were escalated to live agents and the reasons for the escalation. Reasons could include user requests, bot recommendations, or the bot's design for live chat interactions.

    > Click **View transferred chats** to see filtered conversation logs for transferred chats within the chosen time frame.

6. **Sentiment analysis**: It assesses user sentiment during bot sessions, categorizing it on a scale of 1 to 5. The widget also highlights the top reasons for each sentiment score. 

    > **Score interpretation**: `1 - angry, 2 - frustrated, 3 - neutral, 4 - satisfied, 5 - happy`.

7. **Scope distribution**: This widget offers an understanding of the bot's performance in alignment with its defined goals. It categorizes sessions into In-Domain (where the bot operates within its intended use cases) and Out-of-Domain (where the bot responds to queries outside its designed scope). It also provides reasons for each category, and defining the bot's goals at the outset is essential for this analysis.

<img src="https://imgur.com/HWwAMEB.png" alt="drawing" width="100%"/> 


-->

## Chat metrics

The Chat Metrics tab offers the following widgets which can be used for the user decisions / business goals/ billing purpose:

1. **Total user sessions**: This widget shows the overall count of sessions that took place between users and the bot during the chosen time frame, specifically when utilizing dynamic chat nodes.
2. **Node user stats**: Node user stats offer insights into user interactions with the Dynamic chat node. For instance, if 100 people initially engaged with the chat node, and 40 discontinued their participation during the conversation, the remaining 60 users either exited the flow upon request, submitted all required information, or successfully reached the goal set in the dynamic chat node, resulting in a 60% completion rate.
    * **Users entered**: This represents the count of unique users who entered the dynamic chat node.
    * **Users dropped**: This indicates the number of users who abandoned the conversation or remained unresponsive for over 24 hours.
    * **Users completed**: This shows the number of users who either supplied all mandatory inputs, attained the business objective specified in the dynamic chat node, or were allowed to exit the node as per their request.
    * **Completion rate**: This metric signifies the completion rate of the Dynamic chat node, calculated as (Users Completed / Users Entered) * 100.

<img src="https://imgur.com/dv6bOxq.png" alt="drawing" width="100%"/> 



> Click **View Chat** link next to the relevant node name, to access conversation logs filtered by the chosen time frame, flow name, and node name within that flow.


3. **Inputs Captured**: This widget tracks the number of users who have supplied specific information, such as their name and phone number, to the bot while utilizing the dynamic chat node. You can narrow down the data for each node by selecting the node name from the dropdown menu located at the bottom. 

<img src="https://imgur.com/adXoNwK.png" alt="drawing" width="50%"/> 

4. **Node failures**: This widget highlights the reasons behind bot failures during specific interactions. You can refine the data for each node by choosing the node name from the dropdown menu at the bottom.

<img src="https://imgur.com/7vVYoQw.png" alt="drawing" width="90%"/> 

> Click the **View Chat** link next to the relevant reason, to view conversation logs filtered by the chosen time frame for a specific node within the flow and categorized under the node failure reason.

5. **Token consumption**: This widget tracks the utilization of tokens in dynamic chat node usage, providing information on various aspects:
    * **Model**: Indicates the specific LLM model employed, such as GPT-3.5 Turbo, etc.
    * **Credentials**: Refers to the source of credentials, which can either be from a third-party provider or from yellow.ai.
    * **Provider**: Identifies the service provider, which could be Azure, Open AI, Anthropic, Yellow G, etc.
    * **Prompt tokens**: Represents the input tokens furnished to the model.
    * **Response (completion) tokens**: Denotes the output tokens generated by the model.

<img src="https://imgur.com/tmdeOcs.png" alt="drawing" width="100%"/> 


:::info 
**Tokens** can be understood as fragments of words. Prior to processing prompts through the API, the input is divided into tokens. It's worth noting that tokens don't always align exactly with the beginnings or endings of words; they can encompass trailing spaces and even sub-words. To provide a sense of token lengths, here are some helpful guidelines:
* 1 token approximately equals 4 characters in English.
* 1 token is roughly equivalent to 3/4 words.
* About 100 tokens correspond to approximately 75 words.
* Alternatively, 1-2 sentences are encompassed in approximately 30 tokens, while a single paragraph is around 100 tokens.
* Approximately 1,500 words are represented by roughly 2048 tokens.

If you wish to explore how various providers calculate token quantities, you can refer to the following resources:

* [Open AI token pricing](https://platform.openai.com/tokenizer)
* [Azure Open AI token pricing](https://azure.microsoft.com/en-in/pricing/calculator/?service=openai-service)
* [Anthropic token pricing](https://invertedstone.com/tools/claude-pricing/)
:::