---
title: Execute flow
sidebar_label: Execute flow
---

The Execute flow node is used to transition between flows. It acts as a trigger within a flow, allowing you to switch from the current flow to a specified target flow. It pauses the execution of the current flow and initiates the target flow. The transition can be either:
  * **Unidirectional**: The process continues only in the new flow.
  * **Bidirectional**: The process returns to the original flow after completing the target flow.

:::note
Control only returns to the original flow if there are nodes after the Execute Flow node. If no further nodes exist, control does not return to the original flow, and the process will conclude in the target flow.
:::

The Execute flow node is useful in scenarios such as:
* Breaking down complex workflows into smaller, manageable sub-flows.
* Reusing flow logic (example, authentication, validation, or error handling) across multiple workflows.
* When the current flow needs to hand over control to another flow based on certain conditions.
* Switching dynamically between different flows based on user input or system events.

#### Examples where you can use Execute flow node

* **Customer support flow**: In a multi-step customer support process, you may need to check the user's payment status. Rather than building this step directly into the main flow, you can use the Execute flow node to switch to "Payment status check" flow and then return to the main support flow once the check is complete.
* **Reusing common logic**: Imagine you have a flow to collect feedback from users. If different flows need to capture feedback, you can create a reusable "Feedback collection" flow and use the Execute Flow node to call it whenever necessary.
* **Handling complex conditional logic**: In product onboarding, users may need to be directed to specific flows based on their choices. The Execute flow node allows users to switch to the appropriate product-specific onboarding flow based on their selections.

#### Configure Execute 

To configure execute node, follow these steps:

1. Drag and drop the Execute Flow node at the point where you want to switch to a different flow.

    ![](https://imgur.com/Wq8qH7K.png)
 
2. Select the target flow you want to execute.

     ![](https://imgur.com/HqX3Om8.png)
     
     
Refer to the following GIF to see the functionality of Execute flow node.

   ![](https://imgur.com/TPNpuwm.gif)
     
**Limitation:**

* Control only returns to the original flow if there are nodes after the Execute Flow node. If no further nodes exist, control does not return to the original flow, and the process will conclude in the target flow.