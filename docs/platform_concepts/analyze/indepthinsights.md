---
title: Expanded insights into each topic 
sidebar_label: In-depth insights
---

Click on the **Topic name** to view a detailed analysis of the selected topic.

![image](https://cdn.yellowmessenger.com/assets/yellow-docs/gif.gif)

## Date filter

By default, analytics for the selected topic are filtered to the past 30 days. You can adjust the time period by selecting a different date range.

![image](https://cdn.yellowmessenger.com/assets/yellow-docs/upload_e3537ba8dce2b3a45c950931496c44d6.png)


## Automation opportunity

Automation opportunity is the potential for automating user queries in this topic. This represents the percentage of conversations that either were not resolved or not contained, calculated as:

> **Automation Opportunity** = (Total unresolved/uncontained conversations in this topic) / (Total unresolved/uncontained conversations across all topics).

<img src="https://cdn.yellowmessenger.com/assets/yellow-docs/img.png" alt="drawing" width="60%"/>                             



## Conversation share

This shows the percentage of total conversations for the selected topic relative to all conversations across topics, calculated as:

> **Conversation share** = (Total conversations in this topic) / (Total conversations across all topics).

<img src="https://cdn.yellowmessenger.com/assets/yellow-docs/img1.png" alt="drawing" width="50%"/>

<img src="https://cdn.yellowmessenger.com/assets/yellow-docs/img2.png" alt="drawing" width="50%"/>                             

You can view all conversations under a specific topic by clicking **View all conversations**. For each conversation, you will find the following details:  

- **All Conversations**: A list of all conversations associated with the topic.  
- **Search**: A search bar to find conversations using keywords or queries.  
- **Filters**: Options to filter conversations based on specific criteria.  
- **Conversation Log**: A detailed log of user interactions, including the initial query and resolution, explaining why the conversation was categorized under this topic.  
- **AI Insights**: Key details such as:  
  - Unique ID (UID) of the chat.  
  - User query and whether it was handled by an agent or a bot.  
  - Resolution status (**Resolved/Unresolved**) along with the provided resolution and reason.  
  - **User Sentiment** categorized as **Positive, Negative, or Neutral**, including the reason for the sentiment.  
- **Debug Logs**: A record of changes made in the last **5 minutes**.  
- **Comments**: A section to add comments on a specific chat or reply to existing comments, visible to others with access to the **Topics module**.  

![image](https://cdn.yellowmessenger.com/assets/yellow-docs/img5.png)


### Filter conversations 

Use the **filter** icon to refine conversations based on your criteria:
- **Contained resolution**: Setting this to **True** filters conversations that are both contained and resolved. Setting it to **False** filters conversations that are either contained but unresolved, not contained but resolved, or not contained and unresolved.
- **Contained**: Filters all contained conversations, regardless of resolution status.
- **Resolved**: Filters all resolved conversations, whether contained or not.
- **User sentiment**: Filter conversations by sentiment categories such as Positive, Negative, or Neutral.
- **Automation**: Select **Available** to filter conversations whose resolutions are used for automation purposes.


<img src="https://imgur.com/DdIMBwC.png" alt="drawing" width="40%"/>                             

### AI analytics

AI analytics consists of:  

| **AI analytics**       | **Description**  | 
|-----------------------|----------------|
|       **Details**        | **UID** : Unique ID of the chat. |
|   |**User Query**     :  The initial query from the user. |
|       |**Automation** : Indicates whether the conversation was handled by an agent or a bot. |
| **Resolution** | **Resolution Status**: Specifies if the conversation was **Resolved** or **Unresolved**. |
| | **Resolution Provided** : A summary of the answer given. |
| | **Resolution Reason** : LLM-generated analysis explaining why this resolution was provided. |
|**User Sentiment**  | **Sentiment**: Categorized as **Positive, Negative, or Neutral**. |
| | **Sentiment Reason**: LLM-generated analysis explaining the reason behind the sentiment. |

<img src="https://cdn.yellowmessenger.com/assets/yellow-docs/img6.png" alt="drawing" width="50%"/>

### Debug logs

You can view logs of all changes occurring every minute. The first 5 minutes of logs are displayed in a table. 

 <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/img9.png" alt="drawing" width="90%"/>

### Comments

You can add a new comments or reply to an existing comment. Learn more about comments [here](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs#comments-on-conversation-logs). 
> You can filter comments for **All, Open**, and **Resolved**. 

<img src="https://cdn.yellowmessenger.com/assets/yellow-docs/img10.png" alt="drawing" width="90%"/>


:::info
This data can also be viewed in **Data explorer > [Contained resolution analysis](https://docs.yellow.ai/docs/cookbooks/insights/eventdescriptions#contained-resolution-analysis)**.  
:::

-----

## Visualized results

Key metrics such as **AI resolution rate, automation rate**, and **user sentiment** for the selected topic are displayed as graphs for the selected time period. These values, already available on the Topics page, are visualized in graph form to help you understand trends more effectively. You can view conversations pre-filtered by clicking **View conversations**.

![AI Resolution Rate](https://cdn.yellowmessenger.com/assets/yellow-docs/topics.gif)

* **AI resolution rate**: Percentage of conversations fully managed and successfully resolved by the AI Agent. View **Resolved vs. Unresolved** conversations under this category.                                          
* **Automation Rate**: Percentage of conversations handled entirely by the AI Agent. View **AI Agent vs. Human Agent** handled conversations under this category.                                        
* **User Sentiment**: Overall sentiment of user interactions with the AI Agent. View Conversations categorized by sentiment under this category.                                  

-------------------------


## Automation opportunity suggestions

The AI-agent also provides suggestions based on analyzed conversations:

- **Improve Knowledge Base**: Click **View article** to see conversations that the AI used to recommend a new knowledge base article based on human agent interaction.
- **Analyze conversations**: Click **View conversations** to identify opportunities for AI-agent improvement.

![image](https://cdn.yellowmessenger.com/assets/yellow-docs/img3.png)


