---
title: Chat Agent Performance Report
sidebar_label : Agent performance
---

> To learn how to generate Chat Agent Performance Report, click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/reports). 

:::info
Only an admin can download reports.
:::

|Sno|Field        |Description                  |Comments |
|---|------------ |-----------------------------|---------|
|1|Date|The seelcted date||
|2|Name|Name of the agent||
|3|Email|Email of the agent||
|4|Group|Name of the group to which the agent belongs|N/A if no group is specified for the agent|
|5|AgentId|-|UID for agents.For Internal purpose|
|6|Active Ticket count|The total number of tickets that is active / yet to be resolved that day. It also includes tickets that are unresolved from the previous day||
|7|Resolved Ticket|The total number of tickets resolved by the agent that day||
|8|Avg. First Response Time (hh:mm:ss)|The average first response time of all the tickets the agent has encountered that day|00:00:00 is the default timing|
|9|Avg. Handling Time (hh:mm:ss)|The average handling time of all the tickets the agent has encountered that day|00:00:00 is the default timing|
|10|Avg. Response Time (hh:mm:ss)|The average response time for all the messages in each ticket the agent has encountered that day|00:00:00 is the default timing|
|11|Average Agent Rating|The average feedback rating the agent has received for all the tickets that day|This is part of the agent feedback setting. Scale is from 1 - 5|
|12|Agent Rating Count (filled)|The total count of ratings the agent has received from all the tickets that he has resolved|This is part of the agent feedback setting|
|13|Total Thumbs Up|-|-|
|14|Total Thumbs Down|-|-|
|15|Tickets CSAT (Solved)|Number of people who click on the Solved button for the "Did we resolve your case?" question|This is part of the chat feedback setting|
|16|Tickets CSAT (Unsolved)|Number of people who click on the Unsolved button for the "Did we resolve your case?" question|This is part of the chat feedback setting|
|17|% Ticket Solved|Total Solved / (Total Solved + Unsolved) * 100||
|18|Agent Online Duration (hh:mm:ss)|The total time the agent has set the status to AVAILABLE that day||
|19|Agent Busy (hh:mm:ss)|The total time the agent has set the status to BUSY that day||
|20|Agent Away (hh:mm:ss)|The total time the agent has set the status to AWAY that day||
|21|Total Agent Availability (hh:mm:ss)|AVAILABE time + BUSY time = Total Agent Availability||
|22|Start Login Time|The first login time of the agent||
|23|Last login time|The last login time of the agent, if there are multiple logins in the day||
|24|Total login count|The total number of times the agent has logged in the account in that day||
|25|First logout time|The first logout time of the agent||
|26|Last logout time|The last logout time of the agent, if there are multiple logouts in the day||
|27|Total logout count|The total number of times the agent has logged out of the account in that day||
