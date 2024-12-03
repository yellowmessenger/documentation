---
title: Ticket Agent Performance Report
sidebar_label : Agent performance 
---

> Learn how to generate Ticket agent performance report [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports).

:::info
Only an admin can download reports.
:::

| Sno | Field  | Description | Comments
|--|--|--|--|
|1| Date | The date for which the report is generated | Format is DD-MM-YYYY|
|2| Agent Name| Name of the agent||
|3| Agent Email| Email ID of the agent||
|4| Group name| All the group names to which the agent belongs|If agent belongs to multiple group, all the group names will be listed here|
|5| Assigned tickets|Total number of new tickets that were assigned to the agent on the selected date| Including ticket transfers|
|6| Resolved tickets|The total number of tickets assigned to agent that were resolved on the selected date. |The ticket may have been created inside/outside the selected date.|
|7| Transfers made|The total number of tickets assigned to the agent that were transferred on the selected date.||
|8| Reopened tickets|Total number of tickets assigned to the agent that were reopened on the selected date|If a ticket is reopened multiple times, the reopened ticket count would still be 1 for that ticket|
|9| Agent first response time [HH:MM:SS]|The average time taken by the agent to send the first response for the tickets, from when it was assigned to them.| Only the tickets whose first response were sent during the selected time period will be taken into account|
|10| Agent response time [HH:MM:SS]|The average time taken by the agent to reply back to each of the customer's response in the tickets assigned to them on the selected date||
|11| Agent resolution time [HH:MM:SS]|The average time spent by the agent to resolve tickets on the selected date|Resolution time = Resolved timestamp - In progress timestamp - (Time spent on Onhold + Pending statuses)|
|12|Avg. responses to resolution|The average number of outgoing responses an agent sends in resolving the tickets assigned to them.||
|13| Total SLA triggers|Total count of SLAs triggers [achievements + breach] applicable to the agent on the selected date|Each ticket that is assigned to an agent can have a max of 1 FRT SLA, 1 Resolution SLA and X no. of Response time SLAs. So, Total SLA triggers = 1+1+X|
|14| Total SLA achievements|Total number of times where the agent  successfully achieved the applicable SLAs on the selected date||
|15| Total SLA breaches|Total number of times where the agent breached the applicable SLAs on the selected date||
|16| FRT SLA achievements|Total number of times the agent met the specified FRT SLAs on the selected date |i.e Of all the tickets where FRT was sent, how many were achieved under the set limits|
|17| FRT SLA breaches|Total number of times where the agent breached the specified FRT SLAs on the selected date. |i.e Of all the tickets were FRT was sent, how many were breached from the set limits|
|18| Response time SLA achievements|Total number of times where the agent met the specified response SLAs on the selected date||
|19| Response time SLA breaches|Total number of times where the agent breached the specified response SLAs on the selected date||
|20| Resolution time SLA achievements|Total number of times where the agent  met the specified resolution SLAs on the selected date||
|21| Resolution time SLA breaches|Total number of times where the agent  breached the specified resolution SLAs on the selected date||
|22| Agent available duration [HH:MM:SS]|The total time spent by the agent under the available status on the selected day||
|23| Agent busy duration [HH:MM:SS]|The total time spent by the agent under the busy status on the selected day||
|24| Agent away duration [HH:MM:SS]|The total time spent by the agent under the away status on the selected date|
|25| Custom status duration [HH:MM:SS]|The total time spent by the agent under the custom statuses, if any, on the selected date||
|26 | Agent login time [HH:MM:SS] | The time at which the agent logged in on that day || 
|27| Agent logout time [HH:MM:SS] | ||

---


### Note

 - The same ticket reopened & resolved multiple times will still have its count as 1 [Assuming it is happening in the same date]
 - If I assign, resolve and reopen an email ticket on the same day, then;
>Assigned - 1
>Resolved - 0
>Reopened - 1
 - If I reopen a resolved ticket from yesterday, today. The resolved count for the previous day [yesterday] would be -1 [minus one]. This is because that ticket is no longer under the resolved status and would not be counted for the same.
 >For eg:
 >Ticket #17 created on Jan 1, 2022 and resolved on the same day.
 >Agent performance report for 01/01/2022 is as follows;
 >01/01/2022 - Assigned [1], Resolved [1], Reopened [0]
 >>
 >On Jan 2, 2022, if the same ticket (#17) is reopened, the report is as follows;
 >01/01/2022 - Assigned [1], Resolved [0], Reopened [0]
 >02/01/2022 - Assigned [0], Resolved [0], Reopened [1]
 - If a ticket spans mulitple days, the resolution time for that ticket will only be updated on the day agents resolve that ticket,
 > For eg:
 > Day 1
 > Assigned - 1 [Ticket got assigned]
 > Resolved - 0
 > Resolution time - 0
 > 
 > Day 2
 > Assigned - 0
 > Resolved - 0
 > Resolution time - 0
 > 
 > Day 3
 > Assigned - 0
 > Resolved - 1 [The ticket was finally resolved]
 > Resolution time - 72:00:00 etc.,
 
 - If a ticket spans multiple days and is also transferred between agents back & forth, the agent who was assigned to the ticket when resolved will only get the Resolution time in the agent performance report and not the other agents.
