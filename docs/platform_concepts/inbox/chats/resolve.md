---
title: Resolve or transfer a live chat 
sidebar_label :  Resolve or transfer chat 
---

Admin and agents have the ability to **resolve** or **transfer** a live chat by clicking the corresponding button at any point during the conversation. 

----

In some instances, inbox admins may require agents to fill in specific details before resolving or transferring a ticket. 
If this is the case, refer to this article for more information.

- To resolve/transfer live chats, required custom fields must be entered on the user details. Custom fields can be marked for required to transfer /close ticket while creating them. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields) to create custom fields (only the Inbox admins can control this section).        
    
    <img src="https://i.imgur.com/fxaF4bz.png" alt="drawing" width="40%"/>    

- In the below image, **Order ID** is the custom field that must be entered to transfer/resolve this chat. 
    
    <img src="https://i.imgur.com/QLMOAPw.png" alt="drawing" width="40%"/>   

- When the required field is entered, **Transfer** and **Resolve** buttons are clickable. An agent can select the next action.
    
    <img src="https://i.imgur.com/2VlG6GP.png" alt="drawing" width="40%"/>     

- Agent can **Transfer** a live chat to a particular configured [Group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) if the query is of a particular topic and anyone from that group will be able to answer it. The live chat can be transferred to an [Agent](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents) if you know that this query can be resolved only by the selected agent. The live chat is transferred to an agent even if they are offline.   
    
    <img src="https://i.imgur.com/pI10HoR.png" alt="drawing" width="70%"/>   


> If you select **Add me to collaborators**, you will be able to view this chat when it is transferred to the next agent. 


------

### Adding collaborators vs. Transfering live chat

| Collaboration | Transfer |
| -------- | -------- |
| - You (inbox agent) and the collaborators (other agents who are invited to this chat) can respond to the customer. <br/> - For a customer, this will look like a normal(uninterrupted) agent-customer interaction.<br/> - On the agent's side, there could be multiple agents providing the resolution/responding to the customer. <br/> - The collaborator(other agent) will have access to the chat screen and they can respond directly to the chat, or, add **Notes** for the assigned agent to refer. | When you transfer a chat, you will lose access to this chat and the chat (along with your conversation) will be transferred to the next available agent/ selected agent.     |
|**Example**: When a query has been raised that is assigned to an agent who resolves chats of the category:**Shipping and delivery**. While having a chat, the customer asks a question about **Payments**. A collaborator can be added to help with the question about payments. Once it is answered, the collaborator can leave and take over their chats.|**Example**: A chat enquiring **Payments** has to be assigned to an agent resolving queries related to **Returns and Refunds**. In such case, the chat can simply be transferred to **Payments & Pricing** group. |



