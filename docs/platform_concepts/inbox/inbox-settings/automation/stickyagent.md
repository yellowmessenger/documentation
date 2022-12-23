---
title: Sticky agent chat assignment
sidebar_label : Sticky agent
---

In this article, you will learn: 
1. [Use cases where the sticky agent can be used.](#usecase)
2. [How to set up sticky agent?](#setup)


:::note
This feature is applicable only for live chats.
:::

The sticky agent is a type of ticket assignment where the customers can connect to an agent, of their choice (agents they are familiar with/ have conversed with before). This helps to provide a consistent and better experience, reduce conflicts and achieve faster resolution. It is used in Industries where the customer and agent relationship is crucial and it is expected that customers are to be mapped to their specific point of contact (agent/counselor/representative). 
For example - Real estate, Concierge services, Travel consultancy, Financial Services, Education, Healthcare, etc.



## <a name="usecase"></a> 1. Use cases


The sticky agent can solve the following use cases:


1. When a customer creates a live chat, assign it to their respective agent. If that particular agent is not eligible to take any new chats, capture the customer information and throw an error message  (don't assign that chat to other agents who might not have context of the customer). This sort of strict mapping behaviour is sometimes followed in industries like BFSI & other Concierge services etc., depending upon their business workflow. 
2. [Recommended approach] When a customer creates a live chat, assign that to their respective agent. If that particular agent is not eligible to take any new chats, assign them to the next available agent in the same group.
We believe that customers should not be left empty handed and should at least be connected with a regular support agent if not with their preferred one.


:::info 

**Important Terminologies** 

1. **Preferred agent**: The exact agent to whom you want the incoming customer to be assigned.
2. **Fallback**: When the preferred agent is not eligible to take up chat at that moment (when they are busy/away/offline or they are at their max concurrency), the Fallback determines what should happen to that chat ticket. In this case, 
    - The ticket can go into missed without being assigned to anyone else.
    - The ticket can be assigned to the next available agent in their group (recommended).
:::





## <a name="setup"></a> 2. Setup & implementation

1. Create groups according to the business requirements. 

> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) to know how.  

:::note
Do not create groups for each available agent, instead,  place multiple agents in one group according to the business requirements.
Invite and add agents to their respective groups
For example: 
* Group A  [Product A]
    * Agent 1
    * Agent 2
* Group B [Product B]
    * Agent X
    * Agent Y  
:::


2. Sticky agent assignment can only be implemented using API.  To initialise the API, open **Studio** > **API**.

![](https://i.imgur.com/Q2UEhQa.png)

The sticky agent mapping logic between agents and your customers can be maintained internally in Yellow.ai's Database or externally through an API.


3. The following parameters must be passed in the API for the sticky agent assignment to function:
    - **Category**
    - **AssignedTo** - agentId has to be passed. agent ID is the agent's login email address without any special characters. Example:  sandy.r@yellow.ai > sandyryellowai
    - **PreferredAgent**
    - **PreferredAgentFallback**


4. **To assign tickets to agents without any fallback** (use case #1) use the following API.
    - preferredAgent is **true** & preferredAgentFallback is **false**. 
    - When the preferred agent being passed is not eligible, the chat ticket will directly go into missed chats.


```
curl --location -g --request POST 'https://cloud.yellow.ai/api/agents/tickets/create-ticket?bot={{botId}}' \
--header 'x-api-key: {{x-api-key}}' \
--data-raw '{
    "ticketData": {
        "botId": "{{botId}}",
        "uid": "{{uuid}}",
        "source": "yellowmessenger",
        "issue": "call with agent",
        "priority": "MEDIUM",
        "contact": {
            "phone": "0939482821938",
            "name": "Anik Das",
            "email": "s@y.com"
        },
        "voiceCall": false,
        "sipCall": false,
        "customFields": {},
        "category": "test",
        "assignedTo": "karishnuyellowai",
        "preferredAgent": true,
        "preferredAgentFallback": false
    }
}'
```

5. **To assign tickets to agents with fallback** (use-case #2) use the following API.
    - preferredAgent & preferredAgentFallback are **true**. 
    - When the preferred agent being passed is not eligible, the chat ticket will try to get assigned to the next eligible agent.
    - If no agent (in the group) is eligible to assign chats, it will go into missed chat.

```
curl --location -g --request POST 'https://cloud.yellow.ai/api/agents/tickets/create-ticket?bot={{botId}}' \
--header 'x-api-key: {{x-api-key}}' \
--data-raw '{
    "ticketData": {
        "botId": "{{botId}}",
        "uid": "{{uuid}}",
        "source": "yellowmessenger",
        "issue": "call with agent",
        "priority": "MEDIUM",
        "contact": {
            "phone": "0939482821938",
            "name": "Anik Das",
            "email": "s@y.com"
        },
        "voiceCall": false,
        "sipCall": false,
        "customFields": {},
        "category": "test",
        "assignedTo": "karishnuyellowai",
        "preferredAgent": true,
        "preferredAgentFallback": true
    }
}'
```
