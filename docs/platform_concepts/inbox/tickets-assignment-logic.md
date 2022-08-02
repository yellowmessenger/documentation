---
title: How are different tickets assigned to agents in Inbox?
sidebar_label : Chat ticket assignment 
---

### Chat tickets

There are three things that dictate the chat ticket assignment logic - **Agent availability, Last ticket assigned time** and **Concurrency**

**1.  Agent availability**  
An agent within Inbox can be in any of the following statuses - Available, Busy, Away. If the agent is on Available status, they will be automatically assigned with new incoming chat tickets.
    
Whereas, if the agent is either on Busy or Away, they’ll be not actively assigned with new chats. And that chat will be either assigned to the next available agent or will be queued. Click here, to know more about the difference between Busy and Away.  
  
**2.  Last ticket assigned time**
This presents the timestamp at which the agent was last assigned with a chat ticket i.e we try to find out the longest duration each agent has gone without getting a new ticket  
  
**3.  Concurrency**
Each agent will have an upper limit for chats called Concurrency which explains the maximum number of concurrent chat tickets that the agent can be assigned, at any time.

  
Now, whenever a new chat ticket is raised [assuming it is raised within working hours], it’ll first fetch all the available agents in the group, the ticket was raised for. It’ll not consider agents who’ve set their status to Busy or Away.


Now, all the available agents will be sorted in the ascending order of their last ticket assigned time i.e the longest an agent has gone without getting a new ticket. Then the chat ticket will be assigned to the first agent who has available space in their concurrency.

  

Example;

    A chat Ticket was raised at 10:00 AM
    
    At that instant, the agents have the following availability & concurrency settings.
    
    Agent A = Status - Available
    
    Agent B = Status - Busy
    
    Agent C = Status - Available
    
    Agent D = Status - Away
    
    Agent E = Status - Available

  
From the above agent list, we’ll only consider agents who are under available status.

    Agent A
    
    Agent C
    
    Agent E


Then, they’ll be rearranged on the basis of descending order of the last ticket assigned time,

    Agent C = Last ticket assigned was 30 mins before & Concurrency - 3/6
    
    Agent A = Last ticket assigned was 15 mins before & Concurrency - 4/6
    
    Agent E = Last ticket assigned was 10 mins before & Concurrency - 6/6

  

Now the chat ticket will be assigned to **Agent C**, since **C** is the first agent that has gone the longest without a new ticket assigned to them & has space in their concurrency [3 more left to their max concurrency which is 6].
