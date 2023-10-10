---
title: Resolve, transfer or reopen a live chat 
sidebar_label :  Resolve/ transfer/ reopen chat 
---

Admin and agents have the ability to **resolve** or **transfer** a live chat and **re-open** a missed/resolved chat by clicking the corresponding button at any point during the conversation. 

----
## 1. Resolve/transfer a live chat 

Agents can click **Resolve** to close the live chat after providing a solution.        
Agents can click **Transfer** when they are unable to provide the required solution and the next agent can take over.

<img src="https://hackmd.io/_uploads/B1wE75bDn.png" alt="drawing" width="40%"/>


In some instances, inbox admins may require agents to fill in specific details before resolving or transferring a chat. 
If this is the case, refer to this article for more information.

- To resolve/transfer live chats, required custom fields must be entered on the user details. In the below image, **Order ID** is the custom field that must be entered to transfer/resolve this chat. 
    
    <img src="https://imgur.com/aPBFnKA.png" alt="drawing" width="40%"/>    


:::note
Custom fields can be marked for required to transfer /close chat while creating them. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields) to create custom fields (only the Inbox admins can control this section).        
    
<img src="https://i.imgur.com/fxaF4bz.png" alt="drawing" width="40%"/>    
:::

- When the required field is entered, **Transfer** and **Resolve** buttons are clickable. 

- Agent can close the chat by clicking **Resolve**.   

    <img src="https://imgur.com/0mqsZK2.png" alt="drawing" width="70%"/>      

- Agent can **Transfer** a live chat,
    - **To a particular [Group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups)**: If the query is of a particular topic and it is transfered to a group, it is auto-assigned to any available agent of that group.
    > The numbers visible in the brackets next to the group names are the total number of agents available in that group. 
    - **To a particular [Agent](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents)**: If this query can be resolved only by the selected agent/want a particular agent to address this chat, select the agent's name. The live chat will be force transferred to that agent (even if they are offline or the concurrency is full).   
    
    <img src="https://imgur.com/rirxzu2.png" alt="drawing" width="80%"/> 


- Select **Add me to collaborators** to view this chat when it is transferred to the next agent. You can add yourself to the collaborator while transfering when you want to work with your colleague to resolve a query.
    

------

## 2. Re-open a missed/resolved chat

Any chats can be re-opened, by clicking the **Re-open** button on the **missed chat or resolved chat** screens and providing mandatory details such as **Priority** and **Description**.
The **re-opened chats will be created as new chats** and will be auto-assigned to an available agent (when it is not assigned to a particular agent, otherwise it will land in the My chats page of the selected agent).

<img src="https://imgur.com/EorcLi6.png" alt="drawing" width="80%"/> 


------

## 3. Adding collaborators vs. Transfering live chat


| Collaboration | Transfer |
| -------- | -------- |
| Add collaborator when you want your colleague/manager to help you resolve your query.  | Transfer chat when you are unable to answer the query and you would want another agent to take over this chat. |
|- You (inbox agent) and the collaborators (other agents who are invited to this chat) can respond to the customer. <br/> - For a customer, this will look like a normal(uninterrupted) agent-customer interaction.<br/> - On the agent's side, there could be multiple agents providing the resolution/responding to the customer. <br/> - The collaborator(other agent) will have access to the chat screen and they can respond directly to the chat, or, add **Notes** for the assigned agent to refer (agents can also communicate with each other through internal notes). | When you transfer a chat, you will lose access to this chat and the chat (along with your conversation) will be transferred to the next available agent/ selected agent.     |
|**Example**: When a query has been raised that is assigned to an agent who resolves chats of the category:**Shipping and delivery**. While having a chat, the customer asks a question about **Payments**. A collaborator can be added to help with the question about payments. Once it is answered, the collaborator can leave and take over their chats.|**Example**: A chat enquiring **Payments** has to be assigned to an agent resolving queries related to **Returns and Refunds**. In such case, the chat can simply be transferred to **Payments & Pricing** group. |


<!--
<img src="https://hackmd.io/_uploads/BJKfpK-Dh.png" alt="drawing" width="40%"/>

-->