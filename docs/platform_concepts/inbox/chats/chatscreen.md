---
title: Chat screen, user details, and bulk actions
sidebar_label :  Chat screen & user details
---


In this article, you will learn:

1. [Components of chat screen](#cs)
2. [User details](#ud)
3. [How to transfer/ resolve a ticket?](#trt)
4. [How to transfer/resolve/ reopen multiple chats?](#trmt)


## <a name="cs"></a>  1. Chat screen

You can chat with the customer on this screen. This screen has the following functionalities to enable easy conversations:

#### 1. **Write a reply**

Simply type in any text and hit send button (or enable enter to send if you want the messages to be sent when you press the enter key).  

<img src="https://i.imgur.com/oGJnkHz.png" alt="drawing" width="70%"/>    

    
#### 2. **Actions/Canned response**

You can add [agent actions](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/agent-actions) / [configured canned responses](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/canned-responses) from the dropdown. This can be used for frequent actions/replies so that the agent can simply select an action or canned response instead of typing the whole message multiple times.    

<img src="https://i.imgur.com/IATnPlM.png" alt="drawing" width="50%"/>    

:::note
Use # to view the canned responses and / to view the actions. 
:::

#### 3. **Upload image/files/emojis**

Upload images/files to your message and add emojis to your text to make the conversation more interactive. 
    
![](https://i.imgur.com/54e5PWh.jpg)

#### 4. **Internal notes**

This can be used to take notes/jot down the pain points/summarise the chat sent by the user. It is mostly used before transferring the chat to another agent. 
The messages typed in internal notes will not be visible to the bot users. It will only be visible to the relevant agent (/admin).  

![](https://i.imgur.com/cae3RVU.png)
    
<img src="https://i.imgur.com/NkEPDVb.png" alt="drawing" width="50%"/>    

#### 5. **Translate**  

When [auto translate](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate) is configured, the messages sent by the users in regional languages are automatically translated to [Agent's default language](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#-1-agent-settings) (English by default) to the agents on the chat. Once the customers language is detected, the messages sent by the agent are translated to the customers language. 

The toggle displayed in the below image is the language identifier. For example, if the user responds in French, the language in the toggle is updated to French. 

**Purpose of the translate toggle** (used in rare cases)          
Assume, the user has typed a sentence and the language is detected as French (using google translate) and updated on the toggle. The agent identifies this language to be Italian. The agent can change the language on the toggle for better translation. 

![](https://i.imgur.com/N6emsoU.png)

<img src="https://i.imgur.com/QK8T02e.png" alt="drawing" width="50%"/>    


#### 6. **Save or share chats**

Chats can be saved in CSV and PDF format to the local system. 
Chats can be shared with anyone by clicking the **chat copy URL** icon and sharing the link with the respective person.   

> Chats in this link will not be visible after 6 months. 


![](https://i.imgur.com/bpmVToO.png)


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
|Custom fields||Inbox provides 11 custom fields to fetch more insights from the customer. Configure the required custom fields. Learn [more](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields).|
|Timeline|Agent details and time that the live chat was assigned, closed, and number of agents that it has been transferred to.|![](https://i.imgur.com/muyrQEv.png)|
|Collaboration details| More than one agent can help to resolve a live chat (similar to a group chat). Add collaborator names by selecting the names from the dropdown menu.|![](https://i.imgur.com/ybV3WJX.png)|
|Device details|Details about the user device that the bot tracks.|![](https://i.imgur.com/VDayNjJ.png)|

## <a name="trt"></a> 3. Resolve or transfer tickets

- To resolve/transfer tickets, required custom fields must be entered on the user details. 

:::info
Custom fields can be marked for required to transfer /close tickets while creating them. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields) to create custom fields.   

<img src="https://i.imgur.com/fxaF4bz.png" alt="drawing" width="40%"/>    
   

> Only the Inbox (admins) can control this section.
:::

- In the below image, **Order ID** is the custom field that must be entered to transfer/resolve this chat. 

<img src="https://i.imgur.com/QLMOAPw.png" alt="drawing" width="40%"/>   


- When the required field is entered, **Transfer** and **Resolve** buttons are clickable. You can select the next action.

<img src="https://i.imgur.com/2VlG6GP.png" alt="drawing" width="40%"/>     



- You can **Transfer** a live chat to a particular configured [Group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) if the query is of a particular topic and anyone from that group will be able to answer it. The live chat can be transferred to an [Agent](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents) if you know that this query can be resolved only by the selected agent. The live chat is transferred to an agent even if they are offline.   

<img src="https://i.imgur.com/pI10HoR.png" alt="drawing" width="70%"/>   



> If you select **Add me to collaborators**, you will be able to view this chat when it is transferred to the next agent. 

:::info

**Collaboration vs. Transfer ticket**



| Collaboration | Transfer ticket |
| -------- | -------- |
| When you add a collaborator, you (inbox agent) and the collaborators (other agents who are invited to this chat) can respond to the customer.     | When you transfer a ticket, you will lose access to this chat and the chat (along with your conversation) will be transferred to the next available agent/ selected agent.     |
|**Example**: When a query has been raised that is assigned to an agent who resolves tickets of the category:**Shipping and delivery**. While having a chat, the customer asks a question about **Payments**. A collaborator can be added to help with the question about payments. Once it is answered, the collaborator can leave and take over their chats.|**Example**: A chat enquiring **Payments** has to be assigned to an agent resolving queries related to **Returns and Refunds**. In such case, the chat can simply be transferred to **Payments & Pricing** group. |
:::



## <a name="trmt"></a> 4. Bulk actions 

:::note 
Active chats can be Transferred/Resolved.   
Resolved chats can be Reopened.
:::

To Transfer/Resolve/Reopen multiple chats, follow the steps below: 

- By hovering over a chat avatar (display image) you will see the select option, select the required chats (you can also select all).

<img src="https://i.imgur.com/7b4DlPw.png" alt="drawing" width="50%"/>   

- **Resolve**   

Enter the required custom field and click **Resolve**.   

![](https://i.imgur.com/TL55Szx.png)


- **Transfer**  

Select the Group/Agent name and confirm the transfer.

![](https://i.imgur.com/nivfDTH.png)

- **Reopen**  
 
Reopening an old chat will create a new chat (with new ticket ID).     

As a Inbox admin, to Reopen a chat:
- Mark **priority** as Low/Medium/High (Default=high).
- Select the required **group/agent**. By default, the value in this field is Automatic, which means as soon as the ticket is reopened, it will be assigned to the next available agent irrespective of the group or any defined logic. 
- Add **tags** if required and add a **description** (mandatory). 
- Click **Reopen**.

![](https://i.imgur.com/OVNAirZ.png)


