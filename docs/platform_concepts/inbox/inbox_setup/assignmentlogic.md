---
title: Auto assignment of live chats and email tickets to agents
sidebar_label : Auto assignment of chats/tickets
---

:::note 
- **Live chats and email tickets** are automatically assigned to inbox agents(considering the listed parameters in this article).    
- Auto-assignment of **email tickets** can be restricted(enabled/disabled) as per industry needs, follow these [steps](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic). 
:::


**What is the Assignment logic?**

The auto-assignment feature automates the assignment of incoming chats/tickets based on agent's capacity, availability, and expertise.

Three parameters dictate the live chat/email ticket assignment logic based on which the chats/tickets will get assigned to the available agents, they are listed below:


1.  **Agent availability**

An agent within Inbox can be in any of the following statuses - Available, Busy, or Away.  

- If the agent is on Available status, they will be automatically assigned new incoming chats/tickets.
- If the agent is either Busy or Away, they’ll be not actively assigned to new chats/tickets. That chat/ticket will either be assigned to the next available agent or queued.

> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/agentstatuses), to know more about the difference between Busy and Away.

  

2.  **Last chat/ticket assigned time**

This presents the timestamp at which the agent was last assigned with a live chat/email ticket i.e the longest duration each agent has gone without getting a new chat request/ticket.

  

3.  **Concurrency**

Each agent will have an upper limit for chats called Concurrency which explains the maximum number of concurrent chats/tickets that the agent can be assigned, at any time.

- When a new live chat/email ticket is raised (assuming it is raised within working hours), it will first fetch all the available agents in the group the chat/ticket was raised for. It will not consider agents who have set their status to Busy or Away.
- All the available agents will be sorted in the ascending order of their last chat/ticket assigned time i.e the longest an agent has gone without getting a new chat/ticket. Then the live chat/email ticket will be assigned to the first agent who has available space in their concurrency.

  

:::info

**Sticky agent for live chats**

The other type of assignment which does not consider any of the above parameters is **Sticky agent**.

- Sticky agent is a type of chat/ticket assignment where the customers can connect to an agent, of their choice (agents they are familiar with/ have conversed with before).
- Sticky agent feature is useful in Industries where the customer and agent relationship is crucial.

:::

----

  

**Understand Auto-assignment with an example**


Assume

  

    A chat Ticket was raised at 10:00 AM

  

  

At that instant, the agents have the following availability & concurrency settings.

  

  

    Agent A = Status - Available

    Agent B = Status - Busy

    Agent C = Status - Available

    Agent D = Status - Away

    Agent E = Status - Available

  

  

From the above agent list, only consider agents who are under available status.

  

    Agent A

    Agent C

    Agent E

  

Then, they will be rearranged based on descending order of the last chat/ticket assigned time,

  

    Agent C = The last ticket assigned was 30 mins before & Concurrency - 3/6

    Agent A = the last ticket assigned was 15 mins before & Concurrency - 4/6

    Agent E = the last ticket assigned was 10 mins before & Concurrency - 6/6

    
  

The live chat/email ticket will be assigned to **Agent C**, since **C** is the first agent that has gone the longest without a new chat/ticket assigned to them and has space in their concurrency (3 more left to their max concurrency which is 6).

  
