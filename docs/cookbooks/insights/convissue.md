---
title: Understand and analyse issues in a conversation 
sidebar_label : Analyse conversational issues
---

This guide highlights the information that cna be obtained from the **Conversational issues widget** available on the **Insights > Overview** page. 

- On this tab you can find analytics based on the [conversation logs](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs) (studio). 
- At the end of the widget, you can analyze the metrics for the selected date range. To see these conversations, click **View conversation logs**, you will be directed to the **Studio > Conversation logs** page.  
    > ![](https://i.imgur.com/ALU3xMi.png)
- There are 2 tabs that can help you analyse the conversation issues, **Overview** and **Analyse**. 

------

## 1. Overview of conversational issues

This is a time-series view of the priority issues identified in your bot-user conversations.

| High-level metrics tracked on overview tab|
| ---- |
| **Messages with issues**: This represents the percentage of messages where the below listed issues have been identified out of the total messages exchanged between the user and bot. |
|**Users affected**: This is the percentage of total users that faced one or more of the issues while conversing with the bot. |

![](https://i.imgur.com/Xz4Gw0h.png)

| The conversation issues identified on the overview tab |
| --- |
| **Missing bot response**: When an expected bot response does not go through due to a broken flow or a fallback not being configured. |
| **Unidentified**: When the bot is unable to recognize the intent of a user message. |
| **Validator limit exceeded**: When the validation of a particular user message fails more than 3 times consecutively. |
| **Fallback limit exceeded**: When the fallback journey is called more than two times in a row due to the bot not understanding user intent. |
    

----------

## 2. Analyse and resolve conversational issues

Select the **Analyse** tab to see a detailed view of conversation issues along with their severity and count of total occurrences. 
Four common issues encountered by the bot are listed along with the **Suggested next steps**. They are: 
1. **Unidentified user response**
2. **Missing bot response**
3. **Validation limit exceeded**
4. **Fallback limit exceeded**

You can click on each issue to get redirected to the conversation logs where those issues have been identified. These conversations are filtered for the selected parameters, that is, applied date range and tag (identified issue). 

![](https://i.imgur.com/KHHIq3A.png)

------

### Steps to identify and fix conversation issues

> Consider the following example to fix the **Missing bot response** issue. 

**Missing bot response** can be rectified by opening the conversations, finding the point where the bot response was missing, and configuring a fallback or adding a message to the node, if empty.

1. Click **Missing bot response**. You will be directed to the conversation log page that consists of the conversations that encountered missing bot responses. 
2. Open any conversation. Select the **Missing bot response** to identify the exact point. 
3. Hover over the text, click on the menu options, and select **Go to node**. 
4. You will be directed to the respective flow, modify the flow by adding a fallback/new message as per your use case. 

![](https://i.imgur.com/CXkG0lR.gif)

