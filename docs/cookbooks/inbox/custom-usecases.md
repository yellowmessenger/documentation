---
title: Custom Usecases
sidebar_label : Usecases
---

Steps are mentioned to resolve each of the commonly encountered use cases:


  

## 1. How to assign a ticket to a particular group with a particular tag

Follow the below steps to assign a ticket to a group by adding any tag:

1. In Inbox settings, create a [group](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups#1-add-a-new-agent-group) and [tag](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags).
2. Use the Raise ticket action node for each group.
3. Pass the information in the advanced settings of the ticket under Department and Tag.

> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups#11--use-groups-in-the-raise-ticket-node) for more information. 

-----

## 2. How to set values coming from each channel on the tickets

   Follow the below steps to set values coming from each channel:
1. Use a channel filter to set variables.
2. Create global variables and set those variables.

> With either variables coming from payload like {{{profile.payload.< key_name in payload >}}} Or {{{sender}}} in case of WhatsApp

4. Pass the same variables in the raise ticket action node.

-------

## 3. How to build this flow - For failed tickets, the query and contact must be stored and an email has to be sent

  Follow the below steps to store user details for failed tickets:

1. In the raise ticket action node on the error node, use a send email action node.
2. Create a database and use a database node to insert the ticket details into the database.

--------

## 4. How to Visualize a team's CSAT values on the yellow.ai platform(Data explorer)

Currently, the Inbox CSAT values are not available for visualization (widgets/graphs). Agent CSAT values are found in **Data explorer** > **Chat tickets**.    
You can create a custom CSAT bot flow (on Studio). Store the custom CSAT data in a database, and create a visualisation of your preference in Data Explorer.
Click [here](https://docs.yellow.ai/docs/cookbooks/insights/botagentfedback) for more details.
 
**Sample flow:** 
![](https://i.imgur.com/VbWcUqQ.png)


-------

## 5. What happens when the Group is configured with email IDs(for email communications) but is used in raise ticket node 

- Consider a use case where the agent groups-Esclations (with email ID as abc@company.com) is added in the inbox groups settings. This group will be visible on the [Raise ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket)- Advance options. For example, the Escalation group is selected on the Raise ticket node.  
- All the support requests that are triggered through this particular flow will be assigned to the Escalation group **live chats**. These support requests will be found in the **Chats** tab and not in the **Tickets** tab.  

![](https://i.imgur.com/Ba6S98Z.png)
