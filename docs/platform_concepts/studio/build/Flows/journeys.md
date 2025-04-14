---
title: Create flows
sidebar_label: Create flows
tags: [AI copilot, auto flow creation, GPT-4] 
---

This guide provides a step-by-step walkthrough for creating a flow on the platform.

#### Limitation 

* You can add up to 150 nodes in a flow.

To create a flow, follow these steps:

1. Select the specific environment (Staging, Sandbox, and Production) in which you want to create a flow. 

      ![](https://imgur.com/2XaGItC.png)

:::note
* In the Live environment, the option to create flows is disabled. You can only modify or add flows in the Staging, Sandbox, and Production environments.
![](https://imgur.com/b5oBsqW.png)
:::
      
2. Go to **Automation** > **Build** > **Flow** > **Create flow**.

    ![](https://imgur.com/fK5pmO5.png)
    
:::note
If you have multiple AI-agents created, choose the specific AI-agent for which you intend to build the flow.
:::
    
3. Select your preferred options to create a flow.

   ![create flow](https://cdn.yellowmessenger.com/assets/yellow-docs/createfloe.png)   
    
 * [Start from scratch](#manually-create-a-flow): This option allows you to manually create a flow using [key elements](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/flows-overview#key-elements-to-build-a-flow) without relying on pre-built templates or automated tools.
 * [Create Workflowl](#create-a-workflow): This option allows you to create a flow to run concurrently in the background along with the main flow to perform specific tasks or action.

### Manually create a flow

1. Go to **Automation** > **Build** > **Flow** > **Create flow**.

    ![](https://imgur.com/fK5pmO5.png)

2. To create a flow from scratch, click **+ Create flow**.

   ![](https://i.imgur.com/gT5aZAZ.png)

3. Define your flow details:

   <img src="https://i.imgur.com/nRCDd2B.png" alt="drawing" width="50%"/>

   i. **Flow name**: Provide a descriptive name for your flow, such as "Flight booking" or "Customer service".
   ii. **Flow Description**: Describe the purpose of the flow.<br/>
   iii. **Category**: You can assign a flow to an existing category from the drop-down or create a new category.

To create a Category, follow these steps:

1. Expand the Category drop-down and click **Create category**.

   <img src="https://i.imgur.com/p4PZv7Q.png" alt="drawing" width="40%"/>
   
2. Enter the **Name** of the category and click **Create** to create a new category.

    <img src="https://i.imgur.com/3gHRb8G.png" alt="drawing" width="40%"/>

4. Add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) and build the flow according to your use-case.

   ![image](https://imgur.com/EIt0gea.gif)

* For the flow to work, you need to trigger it. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow) for the detailed steps.

### Create a Workflow

Workflows are background processes that are built using only [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) or [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) nodes and operate along with the conversational flow. Workflows enhance the AI-agent's capabilities by performing various tasks such as calling functions, executing APIs, and database operations. This configuration allows you to create workflows that can be linked to categories and invoked as needed within a conversation. 

For example, an action node called [Sync DB](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#41-sync-database) operates in the background, synchronizing data with an external database while the AI-agent executes the rest of the flow.

To create a Workflow, follow these steps:

1. Go to **Automation** > **Build** > **Create flow** > **+ Create Workflow**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/workflow.png" alt="drawing" width="100%"/>

3. Enter the following fields:

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/createworkflow.png" alt="drawing" width="40%"/>

   i. **Workflow name**: Provide a descriptive name for your Workflow.<br/>
   ii. **Workflow Description**: Describe the purpose or functionality of the Workflow.<br/>
   iii. **Category**: You can assign the Workflow to an existing category or create a new one.

To create a new category for a Workflow, follow these steps:

1. Expand the **Category** drop-down and click **Create category**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/createworkflowcategory.png" alt="drawing" width="40%"/>
   
2. Enter the **Name** of the category and click **Create** to create a new category.

    <img src="https://imgur.com/VJgYkot.png" alt="drawing" width="40%"/>

* This will create a Workflow.

**Use case**

When a user wants to book a test drive, a Workflow is triggered within the conversation flow to handle the booking logic in the background.

Once the user provides the necessary details such as name, contact number, car model, preferred date, and location, the workflow is called to generate a booking ID using a function or logic node.

The booking ID is then stored in an output variable (for example, {{{booking_id}}}) and displayed to the user in a confirmation message, such as:

> Your test drive has been successfully booked. Your booking ID is: `{{{booking_id}}}`.

This approach allows backend operations like ID generation or data processing to happen in the background using Workflows.

Refer to the following video to see how the Workflow works in the conversational flow:

<video width="600" controls>
  <source src="/files/skill in a flow.mp4" type="video/mp4"/>
</video>
