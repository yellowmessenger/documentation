---
title: Workflows 
sidebar_label: Workflows
---


## Workflows overview 

The Workflows module enables automation of any routine tasks in your team customer support workflow such as managing Helpdesk activities for support agents, scheduling cron jobs for data teams etc., These workflows function independently from the core AI Agent flow, operating in the background supplementing its operations seamlessly. This streamlines the management of routine tasks, allowing the team to focus on more complex and high-priority issues, improving overall efficiency and productivity.

:::note
Currently, Workflows are supported only for Helpdesk use cases.
:::

### Helpdesk specific examples for Workflows

* Send ticket details to the CRM when an agent closes a ticket.
* Automatically acknowledge the customer after ticket creation.
* Send the full chat transcript including the URL to the CRM.
* Trigger an API call to populate custom fields (5-8) when an agent fills one custom field.
* Add the journey name as a tag to a chat if the customer has gone through a specific journey before raising the chat, aiding both agent reference and support analysis.


### Flows vs Workflows 


| Flows | Workflows |
| -------- | -------- |
|  <ul><li> Flows are created to take input from customers, interpret it, and respond with an appropriate output to resolve customer queries in bot conversations.  </li><li>  Flows involve connecting different triggers and actions to understand customer inputs and provide outputs.   </li></ul>  Check out [detailed documentation on flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/flows-overview)  | <ul><li> Workflows are simplified, **static flows** that run automatically when specific actions or events occur. </li><li> They operate in the **background** and do not require direct interaction with the customer. </li><li> No need to manually enable specific **events**; the selected workflow handles everything automatically. </li><li> The **context** of a workflow lasts only for the selected period and does not extend beyond that. </li> <li> Workflows enhance the bot's functionality by performing tasks such as calling functions, executing APIs, and conducting database operations.</li><li>Workflows can be linked to specific categories and invoked as needed within a conversation.  </li></ul> |


---------

## Set up workflows 

Follow these steps to use a work flow in your bot: 

### Step 1: Open Automation

1. Open **Automation > Build > workflows**. 

   ![image](https://hackmd.io/_uploads/B1k25Gi9R.png)

2. Click Create **workflow**. 
   
   ![image](https://hackmd.io/_uploads/r1uGiGi9R.png)

-------

### Step 2: Choose when to trigger the workflow

Choose how your workflow will start by selecting the event/trigger that will initiate the workflow. Once selected, this trigger will automatically serve as the starting point for the flow.


You can select a condition within a start trigger to simplify data extraction and eliminate the need for a separate condition node. Types of conditions can be chat properties such as Tag, Priority, or Custom fields or time. 

![image](https://hackmd.io/_uploads/rk5dbx3qC.png)

:::note
Workflows are triggered only when an Agent updates anything on the chat.
:::
    
    
#### 1. When a new chat is created 

Activates the workflow whenever a customer wants to connect to live agent.  Use this trigger to automate actions such as routing the chat to a team, sending an introductory message, or logging chat details.

**Triggered**: When the bot connects the user to a live agent and a new live chat is created in Inbox           

* **Add Condition**: Minutes/hours/days created since
* **Values**: Select number of hours


![image](https://hackmd.io/_uploads/ryvrMBw60.png)

> Example: **When a new chat is created** and it is more than **1 hour** perform {next action}


#### 2. When a chat property is updated

Activates the workflow whenever a chat property (such as tags, custom fields, or priority) changes. Use this trigger to automate responses or updates based on these modifications.


| Tags | Custom field | Priority |
| -------- | -------- | -------- |
| <ul><li>  **Triggered**: When the Tag of the live chat is updated by the agent </li><li> **Add Condition**: Is (Contains all of / Contains any of / Contains none of)   </li><li>  **Values**: Tag value    </li></ul>   | <ul><li>  **Triggered**: When the Custom field of the live chat is updated by the agent </li><li> **Add Condition**: Is ( Is / Contains)   </li><li>  **Values**: Custom field value    </li></ul>      | <ul><li>  **Triggered**: When the Priority of the live chat is updated by the agent </li><li> **Add Condition**: Is (Is / Is not)   </li><li>  **Values**: Low, Medium, High, Urgent     </li></ul>      |

![image](https://hackmd.io/_uploads/rkSCzSvaA.png)

> Example: **When the Tag of the live chat** is updated to **Tag3, Tag2, Tag3**, perform {next action}

![image](https://hackmd.io/_uploads/r1vQmrvpA.png)

> Example: **When the Custom field of the live chat** is updated to **option3**, perform {next action}

![image](https://hackmd.io/_uploads/r1lcoGSD60.png)

> Example: **When the Priority of the live chat** is updated to **Medium**, perform {next action}







#### 3. When an internal note is added

Activates the workflow whenever an internal note is added to a chat. Use this trigger to notify relevant team members or update records based on internal notes.

**Triggered**: When the agent adds an internal note in the live chat 

* **Add Condition**:  Is (Contains the word / Does not contain the word)
* **Values**: Internal note content

![image](https://hackmd.io/_uploads/By2WBBD6R.png)

> Example: **When an internal note is added** and it contains **send reminder**, perform {next action}


#### 4. When chat status is updated

Triggers the workflow when the status of a chat is changed. Use this to automate actions such as status-based notifications or follow-up tasks.

**Triggered**: When the status of a live chat is updated from Queued, Assigned, etc., to other statuses  
* **Add Condition 1**:  Is 
* **Values 1**: Assigned, Queued, Open, Missed, Resolved
* **Add Condition 2**:  Hours since X 
* **Values 2**: Hours

![image](https://hackmd.io/_uploads/r1Z2BBPaR.png)

> Example: **When chat status is updated** to **Open** and it has been **1 hour**, perform {next action}


#### 5. When chat is transferred

Activates the workflow when a chat is transferred to another agent or team. Use this to notify the customer, or new owner or update the chat records.

![image](https://hackmd.io/_uploads/SkDtUHPp0.png)

> Example: **When chat is transferred**, perform {next action}


#### 6. When a customer is inactive in a chat

Triggers the workflow if a customer becomes inactive or unresponsive in a chat when the last message is from the agent. Use this to send followups conversations or escalation to supervisors.

**Triggered**: When the last message in the conversation is from a live agent and the customer is not responding for X time 

* **Add Condition**:  for (time)
* **Values**: Inactivity timer

![image](https://hackmd.io/_uploads/S1u6UrP6A.png)

> Example: **When a customer is inactive in a chat** for **3 hour**, perform {next action}


#### 7. When an agent is inactive in a chat

Activates the workflow if an agent becomes inactive or unresponsive during a chat when the last message is from the customer. Use this trigger to alert supervisors, notify customers or reassign the chat.

**Triggered**: When the last message in the conversation is from the customer and the live agent is not responding for X time

* **Add Condition**:  for (time)
* **Values**: Inactivity timer

![image](https://hackmd.io/_uploads/rkPWvBPpR.png)

> Example: **When a agent is inactive in a chat** for **3 hour**, perform {next action}


:::info

- You can select Minutes from 3, 5, 10, 15, 30, or 45 minutes, Hours from 1 to 23 hours and Days from 1 to 30 days.
- All these time values are in calendar minutes/hours/days and does not follow any business or working hour logic.
- The maximum limit in time bound workflows is 1 month / 720 hours / 30 days. I.e one can’t select a condition like Hours since created is 750 hrs

:::

-------------------

### Step 3: Add a condition node.

You connect the start trigger (first node) to a condition node to add additional conditions that are not available within the start trigger itself. Use **Condition** node to add conditions following the trigger. Condition node has: 

#### If/Else-if

Add multiple Else-if conditions to filter conditions for variables such as **Live chat properties** (Ticket ID, Description, Source/Channel, Status, Priority, Group Name, Agent Name, Internal Note, Tag, number of agent replies and number of user replies) and **User properties**.  

![image](https://hackmd.io/_uploads/H1sP4IPpA.png)


#### Auto populated properties

Based on the selected trigger, all live chat properties are automatically fetched by this node. For example, within the Condition node, you can add a variable by selecting from a dropdown that automatically populates all relevant live chat variables. Simply choose the one that fits your use case.


<img src="https://hackmd.io/_uploads/r1e49BDpR.png" alt="drawing" width="50%"/>

![image](https://hackmd.io/_uploads/B1YaEcDpC.png)


**Live chat properties** 

| Conditions (Event data)      | Operators                                                 |
|------------------------------|-----------------------------------------------------------|
| Ticket ID                    |                                                           |
| Description                  | Is, Contains the word, Does not contain                   |
| Source/Channel               | Is, Is not                                                |
| Status                       | Is, Is not, Greater than                                  |
| Priority                     | Is, Is not, Greater than                                  |
| Group Name                   | Is, Is not                                                |
| Agent Name                   | Is, Is not                                                |
| Internal Note                | Is, Contains the word, Does not contain                   |
| Tag                          | Contains all of, Contains at least one, Contains none     |
| no. of agent replies         | Is, Greater than or equal to, Less than or equal to       |
| no. of user replies          | Is, Greater than or equal to, Less than or equal to       |
| Custom fields | Explained below |


**Custom field type** 

| Custom field type     | Operators                                                 |
|-----------------------|-----------------------------------------------------------|
| Short Text [String]    | Is, Contains, Does not contain                            |
| Long Text [String]     | Is, Contains the word, Does not contain                   |
| Keyword [String]       | Is                                                       |
| Tags [Array]           | Contains all of, Contains at least one, Contains none     |
| Multi select [Array]   | Contains all of, Contains at least one, Contains none     |
| Single select          | Is, Is not                                                |
| Email                  | Is, Is not, Contains                                      |
| Number                 | Is, Greater than or equal to, Lesser than or equal to     |
| Phone                  | Is                                                       |
| Date                   | On, Between                                               |
| Hierarchical           | Is                                                       |


#### Combine AND/OR

You can combine multiple conditions into one logic by using AND/OR condition. 

![image](https://hackmd.io/_uploads/S19VQUv60.png)

> For one if/else-if condition, you can only select AND or OR condition. You cannot select a combination of both at once. 

#### Connect conditions to a next action

For each condition or combination of conditions, define a corresponding action.


![image](https://hackmd.io/_uploads/HJd9FrPaC.png)





Click here to learn about [condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition). 


--------

### Step 4: Connect other nodes


You connect the start trigger (first node) to other nodes such as Action, Logic, or Integration to complete the flow. 

![image](https://hackmd.io/_uploads/SyqcscP6R.png)


#### Supported action nodes 


| **Node**                     | **Description**                                                                                                           |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Assign**                   | Transfer the live chat to a different member (Agent/Group) for handling.                                                   |
| **Internal Note**            | Add important information about the ticket for internal use, such as customer interactions, troubleshooting steps, or action plans. |
| **Reply**                    | Send a message in response to the live chat conversation.                                                                  |
| **Update Chat Details**       | Modify live chat information, such as:                                                                                     |
|                              | - Add a tag to the existing list of tags.                                                                                  |
|                              | - Remove a tag from the existing list of tags.                                                                             |
|                              | - Delete all current tags and replace them with new tags.                                                                  |
|                              | - Change the priority of the chat.                                                                                         |
|                              | - Update custom fields for the chat.                                                                                       |
| **Resolve Chat**             | Close the ticket as the issue has been addressed and resolved.                                                             |
| **API Node**                 | Execute API calls as part of the chat workflow to interact with external systems, fetch/send data, or trigger specific processes. |
| **Outbound Notification**    | Send an outbound message, typically to an external system or communication channel (e.g., SMS, email).                     |
| **Update Status**            | Change the current status of the live chat, such as moving it from Open to In Progress or other relevant statuses based on the workflow. |
| **Variables**                | Set the value of one or more variables with this node.                                                                     |
| **Database**                 | Insert, update, and search operations on database tables with this node.                                                   |
| **Function**                 | Execute custom code written for a function with this node.                                                                 |
| **Data Formatter**           | Convert data from CSV to JSON with this node.                                                                              |
| **Modifier**                 | Modify input variable (e.g., lowercase, capitalize, remove from end, replace with) and store the result.                   |
| **Generate PDF/Image**       | Generate PDF/JPG/JPEG/PNG files with dynamic details using this node.                                                      |
| **Analytics**                | Capture analytics with this node.                                                                                          |
| **Send Event**               | Send an event with this node.                                                                                              |
| **Sync Database**            | Update databases from external sources with this node.                                                                     |
| **User Event**               | Trigger a user event for an existing event key with the set delay.              |


:::info
**Point to remember**
An action node of a Workflow will not trigger another  Workflow. For example: 
- Workflow 1: This workflow is triggered when a chat is created. Its action updates the chat tag to XYZ.
- Workflow 2: This workflow is designed to trigger when the tag is set to XYZ.
 
In this setup, Workflow 2 does not get triggered by Workflow 1. This is because an action node in Workflow 1 does not automatically trigger Workflow 2. 

:::


#### Supported logic nodes 

You can add **Condition** and **Channel filter** to customize the flow.
For details on the Condition node, refer to the section above.

![image](https://hackmd.io/_uploads/r1GLvcvaA.png)

**Channel filter**: Use this filter to design specific steps for different channels. For example, if you want the flow to perform one action for WhatsApp and another for Facebook, the Channel filter acts as an else-if condition for different channels.

![image](https://hackmd.io/_uploads/BJJibnDaR.png)



#### Supported integration nodes 

All enabled integrations in the bot are available for connection. These integrations will be marked as **Connected**. If an integration is not connected, you can select it from the list and connect it through the Extensions.

![image](https://hackmd.io/_uploads/Sy4pb2waR.png)



---------

### Step 5: Test workflows 

<<TBA>


------------


### Step 6: Publish the workflow

Refer to [this](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) document to learn about publishing flows. 


------

## Manage workflows



### Group Workflows

Workflows are organized based on the selected trigger.

![image](https://hackmd.io/_uploads/S1vX2qvT0.png)


### Search for a Workflow

On the workflow page, you can search for a workflow by entering its name or description.

![image](https://hackmd.io/_uploads/SkaH25w60.png)

### Edit a Workflow

To edit a workflow, open the respective flow and make the changes. 
- You can rename the workflow.
- You can rearrange, modify existing nodes, and edit the details within connected nodes.
- You can change trigger condition inside a start trigger.

![image](https://hackmd.io/_uploads/S1BFPoDpC.png)

![image](https://hackmd.io/_uploads/B1bRDoPpA.png)

### Delete a Workflow

- To delete the entire workflow, click the **Delete** option next to the workflow name.
- You can also Delete a flow by clicking the 3 dots on top of a workflow and click **Delete**. 

![image](https://hackmd.io/_uploads/HkyG_jva0.png)
    
![image](https://hackmd.io/_uploads/SJArLjfxyg.png)


### Clone a Workflow

* To clone an existing workflow, click the **Clone** option and make any necessary changes to the duplicated flow.
- You can also Clone a flow by clicking the 3 dots on top of a workflow and click **Clone**. 
* When cloning a workflow, you can choose a new start trigger. The existing flow will remain intact, but will use the new trigger.


![image](https://hackmd.io/_uploads/rJfPuov6A.png)

![image](https://hackmd.io/_uploads/SJArLjfxyg.png)




### Edit start node 

You can change the trigger(start node) as long as it is the only node in the layout and no other nodes are associated with it. 


![image](https://hackmd.io/_uploads/HkMOtoDpR.png)


--------


## Workflow execution logic





### Sequential execution

- Multiple workflows can exist with the same trigger.
- Multiple workflows with the same trigger and value will be executed in the order they were created (sequentially in a queue like pattern) based on their **Creation date** to avoid race conditions. 

**For example**:     
> At 12:00 p.m. three workflows are triggered, they are executed sequentially based on their creation date, assuming each workflow takes 20 seconds: 
> - Workflow 1 starts at 12:00 PM 
> - Workflow 2 starts at 12:00:20 PM
> - Workflow 3 starts at 12:00:40 PM

![image](https://hackmd.io/_uploads/r1SCZOAa0.png)


### Execution time factors

Each workflow takes a few seconds to minutes (worst-case scenerio), depending on the complexity and number of nodes. Execution might be delayed due to these factors. 

- **Number of Workflows for each trigger**: The total execution time increases when there are multiple workflows to be executed by the same event. 
- **Number of Nodes per Workflow**: When there are multiple action/logic/integration nodes or complex branching within a workflow, execution time is increased.


### Data updates during execution

- The system checks the **latest ticket data** before executing each workflow to ensure it meets the current conditions.
- Workflows may be **abandoned** if the ticket data changes while the workflows are in the execution queue. For example, if a chat is marked as Resolved, indicating that the ticket is closed, any workflows dependent on the ticket being open will not be executed.

:::info

**Workflows execution example**: 

Consider a scenario where three workflows are queued for execution at 12:00 PM in the following order:

- **Workflow A**: Triggered when a tag is updated.
- **Workflow B**: Triggered when the priority is updated to *High* for escalation.
- **Workflow C**: Triggered when a chat remains unresolved for 30 minutes.

Each workflow takes one minute to execute. Before executing each workflow, the system fetches the latest ticket data to ensure the workflow's conditions are still valid.

- At **12:00 PM**, the system executes Workflow A.
- At **12:01 PM**, the system executes Workflow B.
- By **12:02 PM**, the system checks the condition for Workflow C (whether the chat remains unresolved). If an agent resolves the chat during the two minutes it was in the queue, the condition is no longer valid. The system retrieves the latest ticket data, detects the resolved chat, and drops Workflow C, as its execution condition no longer applies. This dynamic validation ensures the system only runs workflows relevant to the latest ticket updates, preventing unnecessary actions.

:::

------

## Best practices

### Avoid trigger conflicts

- **Prevent conflicts**: Ensure triggers don’t overlap to avoid unpredictable outcomes.
- **Trigger order matters**: The last trigger activated will determine the outcome when multiple triggers apply.
- **Manage conflicts**: Use nullifying actions or conditions (e.g., add a tag and use it in conditions) to control how triggers interact.

### Avoid Send reply with expected responses

- Don't use **Send Reply** node when expecting user replies, such as in CSAT surveys or queue follow-ups. Use standard conversational flows to handle these interactions instead.

### Consolidate workflows

- **Limit workflow splitting**: Avoid splitting workflows for the same use case or trigger to prevent delays during high load.
- **Combine actions**: For example, handle both handoff messaging and routing to a human agent in the same workflow using conditional branches.

### Ensure workflow uniqueness

- **No identical workflows**: Each active workflow must be unique to avoid conflicts.

------

## Disclaimer

- The time it takes for automations to run depends on the number of workflows, nodes, and tickets being processed in a bot.
- Data referenced in workflows (e.g., Agents, Groups, Tags, Custom Fields) is tied to the environment you're working in—Sandbox, Staging/Development, or Production/Live. 
- When publishing workflows from one environment to another (e.g., Staging to Production), ensure the data referenced (e.g., agents, tags, groups) exists in both environments.  
  - Example: If you assign conversations to "John Snow" in Staging, ensure "John Snow" exists in Production for the workflow to function correctly.
- Date-type custom fields are not supported in the Conditions or Actions nodes within workflows.
- In the **Assign** action node, when selecting variables for a group, only the **Auto-assign** and **Select a variable** options are available for agents, as agents cannot be dynamically filtered based on the group passed through variables.
- Once a workflow is published, it will only apply to active conversations and new conversations started after the publishing timestamp.
- Global variables are not supported in workflows, and the **Trigger Journey** or **Execute Flow** node is unavailable in these workflows.
- In cases of platform-wide disruptions or outages where workflows are paused for an hour or more, we will re-evaluate the conditions before resuming execution. If conditions are no longer valid, the workflow will be discarded; otherwise, execution will continue.
- Tickets or bots that remain idle—where there have been no updates from the customer or agent for over 30 days—are not eligible for workflow execution, and events will not be triggered for these cases to avoid unnecessary processing.
- Ticket-related action nodes, such as Update chat details and Assign, do not have fallback mechanisms like other action nodes. This means that if these actions fail, the workflow will stop immediately. Common scenarios where ticket-related actions may fail:
    * Assigning a ticket to a non-existent agent through a variable.
    * Incomplete configuration of the action node, causing it to enter an error state.