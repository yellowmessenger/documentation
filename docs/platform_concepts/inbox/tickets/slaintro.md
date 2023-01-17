---
title: Service-level agreement (SLA) policies for email tickets 
sidebar_label: Service-level agreement
---

In this article, you will learn: 
1. [Overview of SLA for email tickets](#1 )
2. [How to use filters to view SLAs](#2)
3. [How to analyze reports related to SLAs](#3)


----------


## <a name="1"></a> 1. Service level agreement for email tickets 


A service level agreement (SLA) is a contract between yellow.ai and a customer, defining the types and standards of services that are offered.
SLAs lay out the metrics by which a service is measured, and remedies or penalties to be followed when the agreed-on service levels are not achieved.

These SLAs are set for email tickets on the Inbox settings page.

> For more details on how to set up and configure an SLA, read [SLA settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/sla). 


- By default, there is no SLA applied to the email tickets. SLAs must be active on the settings page. 
- After the configuration, SLA time logs will be available for all the email tickets that are created via the email channel (it will not be applicable for the email tickets created manually by any agents/admins). 
- **First response time(FRT)**, **Resolution time(RT)** and **Every response time(ERT)** are monitored for all the tickets. 

---------------

### 1.1 View SLA time log 

To view the SLA time log, follow these steps: 

1. Open **Inbox** > **Tickets**. 
2. Open any ticket that was auto-assigned (and not created manually). SLAs will be applicable to particular tickets for which Group/Tag the SLA is configured.
3. Hover over **SLA achieved**. You can view the SLA achieved by the respective agent for that particular ticket. 
4. SLA details are also updated on the **Activity log** in the bottom right corner. 

![](https://i.imgur.com/66ffsP8.png)

5. SLA reminders/escalations/nudges are highlighted on the **Tickets** page along with the ticket details for each ticket. 


![](https://i.imgur.com/Uz74f1M.png)


--------

##  <a name="2"></a> 2. SLA filters 

In the *ticket list view*, you can [filter tickets](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/searchandfilter#--3-filters-email-tickets) based on the SLA time remaining. Follow the steps below: 

1. On the email tickets screen, click **Filters**.

![](https://i.imgur.com/5ZmfOqh.png)



2. Open **Response/resolution due by** and choose your preferred filter:
    - Resolution due by
    - First response due by
    - Next response due by

3. Click **Apply filter**. 


> You can select the resolution time from the drop-down list or add a custom date to filter the response due time. 

 ![](https://i.imgur.com/nZO4N5E.png)

5. Search results will display the tickets which are filtered for a particular resolution time. For example, if **First response due by** is selected as **Overdue**, all the tickets that have not been replied to will be listed out. 
6. You can clear old filters by clicking **Clear filters** and adding new ones. 

![](https://i.imgur.com/YjAmBwQ.png)





-------------

##   <a name="3"></a> 3. SLA reports 

You can download [Agent performance](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/tickets/ticket-agent-performance-report) and [Ticket archive](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/tickets/ticket-archive-report) reports for email tickets and monitor SLA related fields. 



### 3.1 Monitor SLA in the Agent performance report 

> These SLA metrics are calculated for agents (not tickets).



The following are the metrics available in the Agent performance report for SLAs:

1. **Total SLAs triggers**: Total count of SLAs [achievements + breach] applicable to the agent across all tickets on that date. 
2. **Total SLA achievements**: Total number of times the agent has successfully achieved the applicable SLAs in all the tickets on that date.
3. **Total SLA Breaches**: Total number of times the agent has breached the applicable SLAs in all the tickets on that date.
4. **FRT SLA achievements**: Total number of times the agent has met the set FRT SLAs in all the tickets on that day.
5. **FRT SLA Breaches**: Total number of times the agent has failed to meet the set FRT SLAs in all the tickets on that date [i.e of all the tickets where FRT was sent, how many were achieved].
> If the ticket has already breached the FRT SLA even before getting assigned to the agent [i.e., when it is in OPEN for too long or transferred from another agent] that breach will not be counted on the agent's account.
6. **Response time SLA achievements**: Total number of times the agent has met the set response SLAs in all the tickets they responded to that date.
7. **Response time SLA Breaches**:Total number of times the agent has met the response SLAs in all the tickets they responded to that date.
8. **Resolution time SLA achievements**: Total number of times the agent has met the RT SLA in all the tickets they resolved on that date.
9. **Resolution time SLA Breaches**: Total number of times the agent has breached the RT SLA in all the tickets they resolved on that date.

-------------



### 3.2 Monitor SLA in Ticket archive report 

> In case a policy or a single SLA is not configured for a ticket all the corresponding values will be null.

The following are the metrics available in the Ticket archive report for SLAs:

1. **Total_sla_triggers**: Total numbers of SLA events that were scheduled for the ticket.
2. **Total_sla_breaches**: Total SLA breaches that happened on this ticket
3. **Total_sla_achievement**: Total SLAs achieved on this ticket
4. **Sla_achievement_percentage**: (Achieved_sla / Total_sla) x 100
5. **First_response_time_sla**: In the case of SLA achievement, this is the value of the time left before the breach. 
    - If the SLA was 30 minutes and the agent replied within 10 minutes, **First_response_time_sla** will have +20:00. 
    - If the SLA was 30 minutes and the agent took 40 minutes to reply, **First_response_time_sla** will be -10:00 
    - If the SLA was not configured, this value will be null.
6. **Every_response_time_sla**: (Total ERT achievement/ Total ERT SLA count)
7. **Resolution_time_sla**: In case of SLA achievement, this is the value of the time left before the breach.
    - If the SLA was 30 minutes and the agent replied within 10 minutes, **Every_response_time_sla** will be +20:00.
    - If the SLA was 30 minutes and the agent took 40 minutes, **Every_response_time_sla** will be -10:00.



