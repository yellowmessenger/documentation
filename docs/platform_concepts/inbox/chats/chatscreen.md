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

#### Auto-save draft message 


The draft message saving option allows the agents to save their composed messages (or private notes) automatically, ensuring that their work is preserved when switching between chats or windows, or even when accidentally closing the tab.
The chat interface will display an indication to show that a draft has been created and these drafts will be visible only to the agent who authored it.

:::note
**Limitations**:
- **Session-based retention**: Drafts are retained only until the user session concludes. Upon session end, drafts may be cleared to maintain privacy and optimize system resources.
- **Browser compatibility**: Cross-browser compatibility is not functional in this situation. For example, when Chrome and Firefox browsers are simultaneously opened, and a cloud app is accessed on both, any draft created in one browser (e.g., Chrome) cannot be observed within the corresponding chat in the other browser (e.g., Firefox). 
- **Incognito mode**: Drafts are not compatible with incognito mode. Agents should refrain from using incognito browsing when relying on the draft feature to ensure a seamless experience.
:::

----

### Canned response

Canned response can be used to reduce the manual effort on sending frequent replies. Agent can simply select a canned response instead of typing the whole message multiple times and send it to the customer.  
An agent can add [configured canned responses](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/canned-responses) from the dropdown by clicking the shortcut **#** followed by the relevant search term.   

<img src="https://i.imgur.com/IATnPlM.png" alt="drawing" width="50%"/>    

:::note
Quickly find canned responses by entering relevant keywords/tags or searching within the content. Learn more about the advance search functionality [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/canned-responses).
:::

----

### Agent actions

Agents can type the shortcut **/** on the screen and the agent actions (automated with the help of studio flows) will be displayed in the dropdown list. Agent can select an action that is automated and the results are fetched easily without multiple manual steps. 

> Learn more about [agent actions here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/agent-actions).

-----

### Upload image/files/emojis

Upload images/files to your message and add emojis to your text to make the conversation more interactive. 
    
![](https://i.imgur.com/54e5PWh.jpg)


----

### Internal notes

This can be used to take notes/jot down the pain points/summarise the chat sent by the user. It is mostly used before transferring the chat to another agent. 
The messages typed in internal notes will not be visible to the bot users. It will only be visible to the relevant agent (/admin) within the chat.  

![](https://i.imgur.com/cae3RVU.png)
    
<img src="https://i.imgur.com/NkEPDVb.png" alt="drawing" width="50%"/>    

----

### Auto-translate  

When [auto translate](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate) is enabled on the inbox settings, the messages sent by the users in their regional languages are automatically translated to [Agent's default language](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#-1-agent-settings) (English by default) on the inbox chat screen. 
Once the customers language is detected, the messages sent by the agent in agent's default language are automatically translated to the customers language. 
 - Agents can **toggle** and see both the original and translated message by clicking on the label - **Show translated / Show original**.

     <img src="https://hackmd.io/_uploads/SytNUYZv3.png" alt="drawing" width="50%"/>
 
 - If for any reason, the agents want to send a generic message such as an address without being translated, they can disable the auto-translate toggle in the chat input box. 

    <img src="https://hackmd.io/_uploads/ryhtwtbPn.png" alt="drawing" width="50%"/>

- The toggle displayed in the below image is the language identifier. For example, if the user responds in French, the language in the toggle is updated to French automatically. 
    <img src="https://i.imgur.com/N6emsoU.png" alt="drawing" width="70%"/>    

    <img src="https://i.imgur.com/QK8T02e.png" alt="drawing" width="50%"/>    

> Learn more about auto translate feature [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate). 

----

### Chat transcript

Chats can be saved/downloaded in CSV and PDF format to the local system.           
Chats can be shared with anyone by clicking the **chat copy URL** icon and sharing the link with the respective person.   

> Chats in this link will not be visible after 6 months. 

![](https://i.imgur.com/bpmVToO.png)


> Other AI features on the chat screen are listed in the [Generative AI article](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/genai). 

---

### First response auto-indicator

The live chat interface includes an automatic indicator that remains visible until the agent sends the first response. This indicator cannot be customized and serves as a visual cue to indicate that the agent has not yet provided a response.

<img src="https://hackmd.io/_uploads/HkvlpoZOh.png" alt="drawing" width="50%"/> 

---


### Initiate studio flow with @bot

To execute a pre-configured flow within the **Studio** module during a live chat conversation with a customer, inbox agents can make use of the **@bot** feature.


:::info

**Prerequisites**

- **Inbox admins** can configure [flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) and [intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) within the **Studio** module. These flows can be triggered by commonly used intents that agents may employ when conversing with customers. Learn how to trigger a flow using intents [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#11-trigger-a-flow-using-intent).
- **Inbox agents** should be familiar with the available flows/intents within the studio module that can facilitate their conversations.

**Example**     
- **Intent (Order details)**: Fetch customer's order, order details, I want information about the customer's order, Get customer order info
- **Flow**: Customer order details
:::

To use this feature, simply type `@bot` on the reply screen, followed by the intent that will trigger the desired flow.

![](https://hackmd.io/_uploads/BJec_RIOh.png)

#### **@bot vs Agent Actions**

| @bot| Agent action  |
| -------- | -------- |
| When using **@bot**, agents can observe the ongoing conversation between the bot and the customer, displayed in real-time on the agent's chat screen. The functionality operates seamlessly, making it appear as if the agent is directly conversing with the customer, while in reality, it is the bot engaging in the conversation. Agents can view this conversation transparently and can also send responses once the flow is completed.     | When using **Agent actions**, agents can select a flow (agent action) that will be triggered in the backend, fetching a single output that the agent can utilize. | 

#### Real-time example
A customer has placed an order and is experiencing an issue with their return request. The customer contacts the support agent for assistance. The agent needs to:

**Step 1**: Verify the order status 
**Step 2**: Assist the customer in placing a return request

For step 1, the agent can quickly retrieve the order status from an internal or external system by using **Agent actions** and entering the command `/order-status 100100`, where `100100` is the order ID.

For step 2, instead of manually gathering the required details from the customer, such as confirming the product, return address, return pickup date, etc., the agent can streamline the process using a predefined workflow created in the studio with the help of the bot. By triggering this workflow with the command `@bot raise a return request`, the agent initiates a chatbot interaction where the bot collects the necessary information from the customer. This allows the agent to focus on other priority and complex issues, saving time in handling these types of chats. The agent can still monitor the chat and seamlessly take over the conversation when needed.

By leveraging agent actions and the **@bot** functionality, the agent can efficiently handle the customer's order status inquiry and facilitate the return request process, ensuring a smoother and more convenient customer support experience.




-----

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
|Custom fields||Inbox provides custom fields to fetch more insights from the customer. Configure and arrange the required custom fields. Learn [more](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields).|
|Timeline|Agent details and time that the live chat was assigned, closed, and number of agents that it has been transferred to.|![](https://i.imgur.com/muyrQEv.png)|
|Collaboration details| More than one agent can help to resolve a live chat (similar to a group chat). Add collaborator names by selecting the names from the dropdown menu.|![](https://i.imgur.com/ybV3WJX.png)|
|Device details|Details about the user device that the bot tracks.|![](https://i.imgur.com/VDayNjJ.png)|


:::info
A few of these options can be customized for each agent via. [settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents). 
:::
