---
title: Custom Usecases
sidebar_label : Usecases
---

Steps are mentioned to resolve each of the commonly encountered use cases:


  

## 1. Assigned a ticket to a particular group with a particular tag

Follow the below steps to assign a ticket to a group by adding any tag:

1. In Inbox settings, create a [group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups#1-add-a-new-agent-group) and [tag](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags).
2. Use the Raise ticket action node for each group.
3. Pass the information in the advanced settings of the ticket under Department and Tag.

> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups#11--use-groups-in-the-raise-ticket-node) for more information. 

## 2. Values coming from each channel must be set on the tickets

   Follow the below steps to set values coming from each channel:
1. Use a channel filter to set variables.
2. Create global variables and set those variables.

> With either variables coming from payload like {{{profile.payload.< key_name in payload >}}} Or {{{sender}}} in case of WhatsApp

4. Pass the same variables in the raise ticket action node.



## 3. For failed tickets, the query and contact must be stored/an email has to be sent

  Follow the below steps to store user details for failed tickets:

1. In the raise ticket action node on the error node, use a send email action node.
2. Create a database and use a database node to insert the ticket details into the database.

