---
title: Components of chat screen and user details
sidebar_label :  Chat screen & user details
---

![](https://i.imgur.com/oSPem4b.png)


## <a name="cs"></a>  1. Chat conversation screen

You can chat with the customer on this screen. This screen has the following functionalities to enable easy conversations:

### Write a reply

Simply type in any text and hit send button (or enable enter to send if you want the messages to be sent when you press the enter key).  

<img src="https://i.imgur.com/oGJnkHz.png" alt="drawing" width="70%"/>    

----

    
### Actions/Canned response

You can add [agent actions](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/agent-actions) / [configured canned responses](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/canned-responses) from the dropdown. This can be used for frequent actions/replies so that the agent can simply select an action or canned response instead of typing the whole message multiple times.    

<img src="https://i.imgur.com/IATnPlM.png" alt="drawing" width="50%"/>    

:::note
Use # to view the canned responses and / to view the actions. 
:::

----


### Upload image/files/emojis

Upload images/files to your message and add emojis to your text to make the conversation more interactive. 
    
![](https://i.imgur.com/54e5PWh.jpg)


----

### Internal notes

This can be used to take notes/jot down the pain points/summarise the chat sent by the user. It is mostly used before transferring the chat to another agent. 
The messages typed in internal notes will not be visible to the bot users. It will only be visible to the relevant agent (/admin).  

![](https://i.imgur.com/cae3RVU.png)
    
<img src="https://i.imgur.com/NkEPDVb.png" alt="drawing" width="50%"/>    

----

### Translate  

When [auto translate](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate) is configured, the messages sent by the users in regional languages are automatically translated to [Agent's default language](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#-1-agent-settings) (English by default) to the agents on the chat. Once the customers language is detected, the messages sent by the agent are translated to the customers language. 

The toggle displayed in the below image is the language identifier. For example, if the user responds in French, the language in the toggle is updated to French. 

**Purpose of the translate toggle** (used in rare cases)          
Assume, the user has typed a sentence and the language is detected as French (using google translate) and updated on the toggle. The agent identifies this language to be Italian. The agent can change the language on the toggle for better translation. 

![](https://i.imgur.com/N6emsoU.png)

<img src="https://i.imgur.com/QK8T02e.png" alt="drawing" width="50%"/>    

----


### Save or share chats

Chats can be saved in CSV and PDF format to the local system. 
Chats can be shared with anyone by clicking the **chat copy URL** icon and sharing the link with the respective person.   

> Chats in this link will not be visible after 6 months. 

![](https://i.imgur.com/bpmVToO.png)

----

### Summarize chat (AI)

The **Summarize chat** AI feature provides a summary of the entire conversation between a customer and a bot or agent. This summary can be used to analyze the quality of support, customer satisfaction, trends, and more.

**Use-cases:** 
- When the conversations are long, it could become difficult for agents to follow. This feature can help save their time by providing a summary of the chat the user had with the bot.
- Agents and Admins can also check if they are addressing customer's concerns effectively.
- Summarized chat can be used to later point if the agent want to refer to the chat conversation.

To access this feature, click on the **AI collaborator icon** and select **Summarize chat**.

![](https://i.imgur.com/Xi8Vqn9.png)

![](https://i.imgur.com/2X03K8b.png)

----

### Tone change (AI)

The **Tone Change** AI feature assists inbox agents in maintaining a professional and courteous tone while responding to customers. Here's how to use it:
1. Type the desired message.
2. Click on the **AI collaborator icon** and select **Tone change**.
3. Choose between **Formal ton**e or **Friendly tone**. The feature will automatically transform the message into a polished version with the selected tone.
4. Click **Send** to send the refined message.

![](https://i.imgur.com/dqjDKDI.png)

---

## <a name="ud"></a> 2. User details

The following user details are available on this screen to provide agents with more context:



| Type | Fields | Description|
| -------- | -------- | -------- |
| Basic     | User location, chatbot status, and chat status     | |
|Chat details|Ticket ID| Assigned when the live chat request is created|
||Description| Added when the live chat is raised|
||Priority|Added when the live chat is raised (initially through Raise ticket action node)|
||Language|Conversation language is displayed here when [auto-translate](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate) is enabled. Can be changed by the agent |
||Tags| Chats can be tagged by the agent. Select the [available tags](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags) from the dropdown|
||Note|Agents can add a note regarding the conversation|
||Customer name|Name can be updated by the agent after confirming it with the customer|
||Customer email|Email can be updated by the agent after confirming it with the customer|
||Customer phone|Number can be updated by the agent after confirming it with the customer|
|Custom fields||Inbox provides custom fields to fetch more insights from the customer. Configure the required custom fields. Learn [more](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields).|
|Timeline|Agent details and time that the live chat was assigned, closed, and number of agents that it has been transferred to.|![](https://i.imgur.com/muyrQEv.png)|
|Collaboration details| More than one agent can help to resolve a live chat (similar to a group chat). Add collaborator names by selecting the names from the dropdown menu.|![](https://i.imgur.com/ybV3WJX.png)|
|Device details|Details about the user device that the bot tracks.|![](https://i.imgur.com/VDayNjJ.png)|
