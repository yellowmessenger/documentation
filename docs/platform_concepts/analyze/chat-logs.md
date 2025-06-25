---
title: Conversation logs
sidebar_label : Conversations
---

Conversation logs contain detailed records of every interaction between users and the AI-agent in chronological order. These logs include user inputs, AI-agent responses, timestamps, and any contextual data relevant to the interaction. They provide a complete history of conversations, helping AI-agent developers to understand how the AI-agent is performing, identify issues, and make improvements to enhance the user experience.

Chats are retained for six months; after this period, they are archived. You can still download them using [Data export](https://docs.yellow.ai/docs/platform_concepts/growth/dataops). 

---------------

## Features available

Conversation logs provide a comprehensive set of tools for managing and analyzing conversations. Below is a detailed list of all the available features:

| Feature | Description |
|---------|-------------|
| **Filters & Search** | Filter conversations based on criteria such as date, source, labels, tags, nodes, and session ID (SID). <br/> Search for conversations using UID (User ID) or SID (Session ID) to pinpoint specific interactions. |
| **Logs** | View detailed logs for each message, including timestamps, actions taken by the AI-agent, and flow execution. <br/> View knowledge base search results related to the conversation, helping troubleshoot issues with document nodes. <br/> Inspect the flow and nodes triggered during the conversation to troubleshoot and improve AI-agent performance. |
| **Comments** | Add, reply to, and resolve comments on specific messages to communicate with team members about certain issues. |
| **Flag** | Flag conversations to revisit later for follow-up, review, or escalation, helping prioritize important interactions. |
| **Copy URL** | Share the conversation log URL with team members for easy access to specific interactions. |
| **User Details** | View important details about the user, including their UID, session information, and labels applied. |
| | **Labels**: Manually added by users to categorize conversations (e.g., for tracking complaints, feedback, etc.). |
|  |**Tags**: System-generated tags automatically assigned to conversations based on detected issues. |


---------------


## User session

A **user session** refers to a continuous interaction between a user and the AI-agent within a specific time window. A session starts when the user initiates a conversation with the AI-agent and ends when:
- [**Chat channels**](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) (e.g., chat widget, WhatsApp, web apps): Sessions last for **24 hours** from the user's **first message** in that conversation window.             
- **Email channel**: There is **no fixed session duration** for email interactions. Since users may respond after several hours or even days, emails are handled as individual communications rather than a single continuous session.              
- **Voice calls**: The session ends **as soon as the call is disconnected**.               


Each user is identified by a **unique ID (UID)**, and a conversation log is generated for each UID. This log captures the full context of all interactions during the session. Each session has a **session ID (SID)**. 

> You can search for a particular conversation using **UID** or **SID** (Session ID) to locate specific sessions easily.

> **To get session ID of an Ongoing Conversation**, use `{{{session.id}}}`. This placeholder returns the unique identifier for the active conversation session.


**Session expiry explained**

- A session lasts for **24 hours** from the user's last message.
- If the user sends another message **within 24 hours**, the **same session continues**.
- If the user sends a message **after 24 hours**, a **new session starts**.

**Example scenarios**

| Scenario           | Timeline | User Action | Result |
|:-------------------|:---------|:------------|:-------|
| **Continued Session** | 9:00 AM - Start<br/>9:30 AM - Last message<br/>6:00 PM - Next message (same day) | User sends a message **within 24 hours** | Same session continues.<br/>Session expiry shifts to **6:00 PM next day**. |
| **New Session**       | 9:00 AM - Start<br/>9:30 AM - Last message<br/>9:31 AM - Next message (next day) | User sends a message **after 24 hours** | New session starts.<br/>Previous chat history is available, but **context is lost**. |

> Q1. How can I get the current session ID of an ongoing conversation?
> A: You can retrieve the session ID using {{{session.id}}}. This placeholder returns the unique identifier for the active conversation session.

:::note
When users starts a new session (after 24 hours), they can view the previous conversation history, but the context from the earlier session is not retained.
:::


:::note
By default, the names displayed in conversation logs are randomized to maintain end-user anonymity.  
To display actual user names, contact support team.

:::

--------


## Access

To access the conversation logs, navigate to **Analyze** > **Conversation Logs**. You can open the detailed view of the conversation to inspect the interaction history.

![Conversation Logs Access](https://imgur.com/VLjh9Wu.png)            
![Conversation View](https://imgur.com/cIH8cOG.png)

### Share 

You can share the conversation logs with your team members to review and discuss specific interactions, which helps in identifying problems and finding solutions.

Go to the conversation log and copy the chat URL.            
<img src="https://i.imgur.com/3JX56q2.png" alt="drawing" width="40%"/>


   
> You can share the URL with the specific user or team members.  


### Flag conversations

By flagging a conversation, you can easily mark it for review, follow-up, or escalation. This ensures that critical issues, such as unresolved complaints or urgent inquiries, are promptly addressed. Flagging also helps organize conversations for further analysis and improves the management of user interactions.

To flag a conversation, follow these steps:

1. Go to the desired conversation and click the **Flag** icon on the top right corner.                 
![image](https://imgur.com/QJ74wJp.png)                
2. To view your marked conversations, go to **Filters** > **Flagged Conversation** > **Apply filter**.                            
![](https://i.imgur.com/5swxsuz.png)


-----------

## Search and Filter 

You can Search and filter conversations to extract relevant and meaningful information from a large volume of chats. Filters help you quickly identify important interactions, better understand user queries, and troubleshoot problems.

To **filter** chat logs, follow these steps:

1. Click **Filters** on the top right corner.                            
![image](https://imgur.com/8EntQCA.png)                   
2. Set the filters based on your preferences. For detailed information on each filter criterion, refer to the table below:        

| Filter                  | Description |
|-------------------------|------------|
| **Date**                 | Filter conversations within a specific date range using the calendar selection. |
| **Source**               | Filter by source/channel (e.g., WhatsApp, Skype, Facebook, etc.). Pick the desired source from the dropdown menu. |
| **Tags**                 | Filter by system-generated tags, such as "Validator Limit Exceeded" or "Fallback Limit Exceeded." |
| **Flag conversation**| Filter conversations that are flagged for follow-up, review, or escalation. |
| **Labels**               | Filter conversations based on custom labels applied by users. |
| **Flows**                | Filter conversations associated with a particular journey, including step and drop-off specific filters. |
| **Nodes**                | Refine conversations based on specific nodes triggered. For example, filter all conversations where a phone number was collected. |
| **SID**                  | Filter conversations using the unique Session ID.|     


3. Click **Apply filter** after setting the criteria.          

> A red dot appears next to the field to indicate that a filter is applied.

**Search** 

You can use the **search** bar located in the top right corner to easily search for a specific chat by entering the UID (User ID).               
![image](https://imgur.com/hIDMeEe.png)


-------------


## User details 

View basic details, tags, and labels associated with the chat. 

> You can download the user's profile by clicking the download icon next to the user's name.


<img src="https://imgur.com/oiruRWQ.png" alt="drawing" width="40%"/>



### Tags

The platform automatically assigns tags to conversations to highlight key events, making it easier for developers and analysts to troubleshoot.          
To view tags check the **Tags** column to see the status of the tags or open the chat and check the conversations. 

> You can view the node information when you open a tag, you can rectify the issue within [Automation (flows/nodes)](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/flows-overview). 

![](https://imgur.com/fOkcklY.gif)


**Available tags**

- **Validator limit exceeded**: Assigned when the validation limit is exceeded for a user input, indicating that the input was invalid (e.g., incorrect format or length).     
- **Missing bot response**: Assigned when the AI-agent fails to generate a response to the user.              
- **Unused quick replies**: Assigned when users respond with free text instead of selecting from the available quick replies, signaling potential usability issues.            
- **Fallback limit exceeded**: Assigned when the AI-agent triggers fallback multiple times and exceeds the set fallback limit.         
- **Unidentified**: Assigned when the AI-agent is unable to comprehend the user’s input, often due to ambiguity or unclear phrasing.              
- **Human takeover**: Assigned when the conversation is handed over to a human agent for further assistance.

> You can filter conversations by these tags to monitor and address areas needing improvement.


### Labels

**Labels** are added manually by users to categorize and organize conversations. Labels make it easier to track specific types of interactions, such as complaints, inquiries, feedback, or technical issues. They help manage the flow of conversations and ensure that critical issues are addressed.

To label a chat, open a conversation. Under **User deatils**, add a label to the conversation by typing it.        
   ![](https://i.imgur.com/h9dE0IE.png)         

**To view the chat with the selected label**         
Open **Filters** > **Labels** > select the label from the drop-down > **Apply filter**.                              
![](https://i.imgur.com/9xvINDY.png)              
![](https://i.imgur.com/LI8x9cI.png)         
   
:::info

**Labels** are manually added by users to help categorize conversations.       
**Tags** are automatically generated by the system to highlight conversation issues. 

:::

--------


## Debug conversations (Logs)

To debug and resolve issues in a conversation, you can enable logs for that specific interaction. This helps you gain a clearer understanding of how to address the problem and fix it.

To view logs of each action within the chat, follow these steps:
   
1. Open the **Logs** tab.                      
![image](https://imgur.com/a2tOXZF.png)                 
2. Click the **Debugger** icon to view logs for any user input. This helps trace the sequence of actions taken by the AI agent in response, making it easier to troubleshoot issues and improve performance.               
    ![image](https://imgur.com/vpoQoeT.png)       
3. Associated nodes and logs are displayed for each action. Expand any item to view the specific log or node where the conversation logic was executed.

<img src="https://imgur.com/vJpo1WN.png" alt="drawing" width="40%"/>



**View KB report/log**

To view **KB Report logs** open the Logs tab and clicking KB report icon which is available for logs generated when a document search node has been used..           
![image](https://imgur.com/ocFzLzW.png)           

**KB report includes**: Query, Previous user messages, Rephrased query, Answer, Status code, Confidence, Trace ID, Tags and Site key.                            
![image](https://imgur.com/zjbSzwi.png)


**Viewing log for Document search node (Demo):**             

![image](https://imgur.com/2tF3qwe.gif)



---------


## Comments

**Comments** feature within conversation logs improves the user experience by enabling teams to create, manage, and resolve tasks directly within the system. Following are the tasks that can be accomplished with Comments for different teams: 

![image](https://imgur.com/ZNBsMBU.png)

| Customer teams | Delivery/Support teams| Bot developers |
| -------- | -------- | -------- |
| - Add comments to specific messages to effectively communicate issues.  <br/> - Filter and view open and resolved comments for better tracking.  <br/> - Reply to comments to collaborate with other teams. |- View all open and resolved comments.  <br/>- Filter comments by status for prioritization.<br/> - Reply to comments and mark them as resolved to manage workflows efficiently. | - Review comments added by customer teams to address specific issues.  <br/> - Reply to comments to provide updates or clarification.  <br/> - Mark comments as resolved once issues are handled.  | 



To use **Comments**, follow these steps: 

1. Open a conversation and open the **Comments** tab.                   
2. You can see a **+** icon next each message within the conversation. Click  **+Add comments**, type a comment (200-character limit) and hit send icon.               
![image](https://imgur.com/IgZRwxI.png)
3. **Reply to comments**: Engage in threaded discussions by replying to specific comments.  
<img src="https://imgur.com/R2b0192.png" alt="drawing" width="40%"/>                    
4. **Mark comments as resolved**: Change the status of comments to resolved when issues are addressed.              
<img src="https://imgur.com/1R9WKYp.png" alt="drawing" width="50%"/>                    
5. **Auto flagged comments**: Chats containing comments (both open and resolved) are automatically flagged for easy filtering.              
![image](https://imgur.com/Ym6Uxf5.png)     
![image](https://imgur.com/8dA4bnj.png)           
6. **View and manage comments**: Filter and view open or resolved comments for easier tracking. Resolved comments are visually grayed out for distinction.  
![image](https://imgur.com/tJc05wz.png)

:::note
The comment button is displayed only when users are in the **Comments** tab.  
:::


