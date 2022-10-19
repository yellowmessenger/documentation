---
title: Auto assignment of tickets to agents
sidebar_label : Auto assignment
---

  
  
  

The auto-assignment feature automates the assignment of incoming tickets based on the capacity, availability, and expertise of agents.

When the Automatic ticket assignment toggle is enabled, tickets will get distributed automatically to your available agents through round-robin assignment.

  

Steps to enable auto-assignment:

1. Open **Inbox** > **Settings**.
2. Search for **Auto Assignment**.

![](https://i.imgur.com/EAkPKUL.png) 

3. Enable the toggle.

![](https://i.imgur.com/1StI1XM.png)

  

---

  

Three parameters dictate the chat ticket assignment logic, they are listed below:

  

1.  **Agent availability**

An agent within Inbox can be in any of the following statuses - Available, Busy, or Away.

- If the agent is on Available status, they will be automatically assigned new incoming chat tickets.
- If the agent is either Busy or Away, they’ll be not actively assigned to new chats. That chat will be either assigned to the next available agent or will be queued.


> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox/#3-default-agent-status), to know more about the difference between Busy and Away.

2.  **Last ticket assigned time**

This presents the timestamp at which the agent was last assigned with a chat ticket i.e the longest duration each agent has gone without getting a new ticket.

3.  **Concurrency**

Each agent will have an upper limit for chats called Concurrency which explains the maximum number of concurrent chat tickets that the agent can be assigned, at any time.

- When a new chat ticket is raised (assuming it is raised within working hours), it will first fetch all the available agents in the group the ticket was raised for. It will not consider agents who have set their status to Busy or Away.
- All the available agents will be sorted in the ascending order of their last ticket assigned time i.e the longest an agent has gone without getting a new ticket. Then the chat ticket will be assigned to the first agent who has available space in their concurrency.

  

  

## 1. Working of auto-assign

  

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

Then, they will be rearranged based on descending order of the last ticket assigned time,

    Agent C = The last ticket assigned was 30 mins before & Concurrency - 3/6  
    Agent A = the last ticket assigned was 15 mins before & Concurrency - 4/6
    Agent E = the last ticket assigned was 10 mins before & Concurrency - 6/6


The chat ticket will be assigned to **Agent C**, since **C** is the first agent that has gone the longest without a new ticket assigned to them and has space in their concurrency (3 more left to their max concurrency which is 6).