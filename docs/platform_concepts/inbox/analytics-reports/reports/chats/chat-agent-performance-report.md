---
title: Chat Agent Performance Report
sidebar_label : Agent performance
---

> Learn how to generate Chat agent performance report [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports). 

:::info
Only an admin can download the reports.
:::

|Sno|	Field	|Description	|Comments|
| --- | --- | --- | ---|
1	| Date	| The selected date	
2	| Name	| Name of the agent	
3	| Email	 | Email of the agent	
4	| Group	| Name of the group to which the agent belongs	| N/A if no group is specified for the agent
5	| Agent ID	| UID for agents (for internal purposes	
6	|Active Ticket Count	|The total number of active or unresolved tickets for the day	|Includes unresolved tickets from the previous day
7	|Resolved Ticket Count	|The total number of tickets resolved by the agent for the day	|
8	|Avg. First Response Time	| The average time taken for the agent's first response on all encountered tickets	Default timing is 00:00:00| 
9	| Avg. Handling Time|	The average time taken to handle each ticket encountered by the agent for the day	| Default timing is 00:00:00
10	| Avg. Response Time| 	The average time taken to respond to messages within each ticket for the day	| Default timing is 00:00:00
11	| Average Agent Rating	| The average feedback rating received by the agent for all tickets for the day	| Ratings scale is from 1 to 5
12	| Agent Rating Count (Filled)	| The total count of ratings received by the agent for resolved tickets	
13	| Total Thumbs Up	||
14	|Total Thumbs Down	||
15	| Tickets CSAT (Solved)| 	Number of people who clicked the "Solved" button for the "Did we resolve your case?" question	| Part of the chat feedback setting
16	| Tickets CSAT (Unsolved)	| Number of people who clicked the "Unsolved" button for the "Did we resolve your case?" question	| Part of the chat feedback setting
17	| % Ticket Solved	| Percentage of tickets solved out of total solved and unsolved tickets for the day	
18	| Agent Online Duration	| The total time the agent set the status to "Available" for the day	
19	| Agent Busy Duration| 	The total time the agent set the status to "Busy" for the day	
20	| Agent Away Duration| 	The total time the agent set the status to "Away" for the day	
21	| Total Agent Availability| 	Total agent availability time, calculated as the sum of "Available" and "Busy" durations	
22	| Start Login Time | 	The first login time of the agent	
23	| Last Login Time	 |The last login time of the agent if there were multiple logins in the day	
24	| Total Login Count	  |The total number of times the agent logged into the account for the day	
25	 |First Logout Time	|The first logout time of the agent	
26 |	Last Logout Time| 	The last logout time of the agent if there were multiple logouts in the day	
27	|Total Logout Count	|The total number of times the agent logged out of the account for the day