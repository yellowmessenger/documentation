---
title: Ticket Archive Report
sidebar_label : Ticket archive 
---


> Learn how to generate Ticket archive report [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports). 

:::info
Only an admin can download reports.
:::

| Sno | Field  | Description | Comments
|--|--|--|--|
| 1 | ticket_id |The auto generated reference number for every incoming ticket | |
| 2 | user_email | Email ID of the end user who raised the ticket | |
| 3 | subject| Subject of the incoming  ticket| |
| 4 | tags | All the tags applied on the ticket| |
| 5 | group | The current group to which the ticket belongs to | |
| 6 | group_email | The email ID that is configured to the assigned group||
| 7 | status | The current status of the ticket | |
| 8 |assignment_type|The nature of how the ticket got assigned - AUTO (by the bot) or MANUAL (by agent/admin) | |
| 9 |source_email| The email ID to which the customer raised/created this specific ticket to||
| 10 | priority |The current priority of the ticket| |
| 11 | resolution_time | The timestamp at which the ticket was marked resolved | |
| 12 | handling_time | Handling Time is calculated as the sum of all active handling periods across the ticket’s lifecycle. Specifically, for each cycle where the ticket is in an **Assigned** state. If a ticket was resolved without ever being assigned, then its handling time is marked as 0, since no agent was officially handled to it at any point in time. | Handling Time = Σ (Resolved Timeₙ – Assigned Timeₙ) – Σ (Time spent in Pending or On-hold during that cycle) | 
| 13 | assigned_to | Name of the current assigned agent| |
| 14 | created_time | The timestamp at which the ticket was created| |
| 15 | assignment_count | The total number of times the ticket was reassigned to the agent | |
| 16 | first_assignment_time | Assigned Time is considered as the first instance when the ticket was assigned to any agent. Even if the ticket went through multiple reassignments or was touched by multiple agents during its lifecycle, we must only consider the timestamp of the initial assignment.|   |
| 17 | assignment_time | The timestamp at which the ticket was assigned to the agent, in case of reassignment | |
| 18 | number_of_replies | The total number of replies from the agent in the ticket| |
| 19 | reopened_count | The total number of times the ticket was reopened| Default value is 0 |
| 20 | reopened_time_latest| The timestamp at which the ticket was reopened last time||
| 21 | reopened_by | Info of the person who reopened the ticket| |
| 22 | first_response_duration | The duration between the ticket getting assigned and the agent providing first response| |
| 23 | first_response_time | The timestamp at which the first response was sent in the ticket| |
| 24 | average_repsonse_time | The average time between each of customer's and agent's responses | |
| 25 | agent_email | The email id of the current agent assigned to the ticket| |
| 26 | total_sla_triggers | The total number of SLAs that are applicable for this ticket | |
| 27 | total_sla_achievement | The total number of SLAs achieved on this ticket | |
| 28 | total_sla_breach |The total number of SLAs breached on this ticket | |
| 29 | sla_achievement_percentage | Percentage of SLAs achieved to the total applicable SLAs | (# SLAs achieved / # Total SLAs applicable) X 100 |
| 30 | first_response_time_sla | The duration by which the first response SLA was achieved/breached | Eg: **+20:00** if the first response was achieved 20 mins before the set limit OR **-10:00** if the first response was breached by 10 mins|
| 31 | every_response_time_sla | Percentage of every response SLAs achieved to the total applicable SLAs | |
| 32 | resolution_time_sla | The duration by which the resolution SLA was achieved/breached|Eg: **+20:00** if the resolution was achieved 20 mins before the set limit OR **-10:00** if the resolution was breached by 10 mins |
| 33 | collaborators | Email IDs of the other agents who collaborated in this ticket| |
| 34 | custom fields | All the custom field data updated for this ticket| 