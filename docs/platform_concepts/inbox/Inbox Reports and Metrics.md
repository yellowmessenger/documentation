# Inbox Reports and Metrics

## Average Response Time [ Archive Report]
It is the average time taken by the agent to respond to each message of the customer in a chat conversation. This metric is present in the Archives report. Response time is calculated for every agent response in a conversation. It is calculated by the following logic;

>**ART = Sum of time duration between end user’s initial and agent’s initial message divided by the number of replies in the conversation.**

Example conversation A,

    09:01:30 - Ticket created  
    09:02:00 - Agent	= [#1] Hi! How can I help you?
    09:02:15 - Customer	= [#2] I’m yet to receive my order and it was supposed to arrive 3 days before.
    09:02:30 - Agent	= [#3] Sure, I’ll look into it
    09:02:32 - Agent	= [#4] Can you let me know your order id?
    09:02:45 - Customer	= [#5] 123456789
    09:03:00 - Agent	= [#6] Thanks, just hold on till I fetch the order information
    09:03:15 - Agent	= [#7] Thanks for waiting, there have been some problems with the transportation. We’ve now sent your order to a different vendor and it will reach you by today. Your new tracking id is 987654321.
    09:03:30 - Agent	= [#8] Regret your inconvenience
    09:03:45 - Customer	= [#9] Sure thanks!
    09:04:00 - Agent	= [#10] Is there anything else you’d like me to help you with?

ART = (#3 - #2) + (#6 - #5) + (#10 - #9) / 3

ART = (15s + 15s + 15s) / 3

**ART = 00:00:15 [HH:MM:SS]**

Note: ART will be N/A if the user or the agent doesn’t reply in the conversation

## **Average Response Time [Agent Performance Report]**
It is the average time taken by the agent to respond to the user’s message in all the conversations during the selected day. This metric is present in the Agent performance report.

>**Avg ART = Sum of Average response time of each ticket / No. of tickets**

Suppose,

    An agent received 10 tickets in a day and this ART for each ticket stands as below;    
    Ticket #1  - 00:01:00    
    Ticket #2  - 00:01:00
    Ticket #3  - 00:01:00    
    Ticket #4  - 00:01:00
    Ticket #5  - 00:01:00    
    Ticket #6  - 00:01:00    
    Ticket #7  - 00:01:00    
    Ticket #8  - 00:01:00    
    Ticket #9  - 00:01:00    
    Ticket #10  - 00:01:00
    
Then their **ART for that day in the Agent Performance report is 00:01:00 [1 min]**

## Average First Response Time [Agent Performance Report]

First response time is the time taken by the agent to make the first response to the customer after a ticket is assigned to them. The average first response time is the average time taken by the agent to make the first response in all the tickets assigned to them that day

  >**Avg FRT = Sum of FRT of each ticket in the day / No. of the ticket during the day**
  
From the example conversation above,

The ticket got assigned to the agent at **09:01:30** and the agent sent the first response to the ticket at **09:02:00** after 30 secs. So the First response duration for the ticket was 30 secs,

Suppose,

    An agent received 10 tickets in a day and the FRT for each ticket stands as below;
    Ticket #1  - 00:00:30
    Ticket #2  - 00:00:30
    Ticket #3  - 00:00:30
    Ticket #4  - 00:00:30
    Ticket #5  - 00:00:30
    Ticket #6  - 00:00:30
    Ticket #7  - 00:00:30
    Ticket #8  - 00:00:30
    Ticket #9  - 00:00:30
    Ticket #10  - 00:00:30
    
Then their **Avg FRT for that day in the Agent Performance report is 00:00:30 [30 sec]**


## Average Handling Time [Agent Performance Report]

Handling time is the total time taken by the agent to resolve the ticket. Average handling time is the average time taken by the agent to resolve all the tickets assigned to them during that day

>**Handling time of a ticket = Resolved time - Assigned time
>Avg HT = Sum of all (resolved time - assigned time) for all tickets / No. of tickets during the day**

Suppose,

    An agent received 10 tickets in a day and the handling time for each ticket stands as below;
    Ticket #1  - 5 mins
    Ticket #2  - 5 mins
    Ticket #3  - 5 mins
    Ticket #4  - 5 mins
    Ticket #5  - 5 mins
    Ticket #6  - 5 mins
    Ticket #7  - 5 mins
    Ticket #8  - 5 mins
    Ticket #9  - 5 mins
    Ticket #10  - 5 mins

Then their **Avg Handling Time for that day in the Agent Performance report is 00:05:00 [5 min]**


## User Wait time [Archive Report]

User wait time is the time a customer waits in a QUEUE or OPEN state before an agent is assigned to the ticket. This metric provides insights into the operating effectiveness of the customer support team.

Example conversation B,

    10:00:00 - Customer raises a ticket
    10:00:00 - Ticket gets queued
    10:05:00 - Ticket gets assigned to an agent
    10:30:00 - Agent resolves the ticket

  Here, the **user wait time would be 00:05:00 [5 mins].**

## Customer agent interactivity time [Archive Report]

Customer agent interactivity is the total time duration in which both the parties - customer and the agent, chat in that conversation. It is basically the agent handling time of that ticket.

>**Customer agent inactivity time = Resolved time - Assigned time**

Considering the example conversation B, the **customer agent interactivity time would be 00:25:00 [25 mins]**

## Spent time [Archive Report]

It is the total time a customer spends right from creating a live agent ticket to getting their query resolved.

>**Spent time = User wait time + Customer agent interactivity time OR
Spent time = Resolved time - Initialized time [ i,e Min(open, queued, assigned time)]**
 
Considering the example conversation B, the **spent time would be 00:30:00 [30 mins]**
