---
title: Create Flows
sidebar_label: Create flows
---

A flow is a structure that defines the sequence of a chatbot conversation with users, based on their questions and responses. It consists of different types of [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) that can display, request, or process information. To build a chatbot, the scope must be divided into multiple flows, each tailored to respond to a specific use case.

The following is an example of a food order flow:

- User: Show me the menu
- Bot: Please select your Cuisine: South Indian, North Indian
- User: South Indian
- Bot: Please select the Item: Dosa, Pongal . . .

![](https://i.imgur.com/51LCOoO.png)


Through flows bot can also converse with users and fetch a piece of information via nodes, for example, the bot can be used as an official portal to apply for leaves or check salary.

## 1. Key UI components to build a flow


The icons located on the tile provide quick access to the following

![](https://i.imgur.com/G9n27EO.png)

(The sequence follows the order of the UI layout)

| Icon                                                                                                                                         | Functionality                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [Channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) | Customize bot functionality for each channel.                                                           |
| [Prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)                                                     | Drag and drop prompt nodes.                                                              |
| [Message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes)                                                    | Drag and drop message nodes.                                                             |
| [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes)                                                      | Drag and drop action nodes.                                                              |
| [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes)                                                        | Drag and drop logic nodes.                                                               |
| [Variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)                                                        | Variables are used to store and retrieve specific data in a flow.                                       |
| [Language](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#2-add-languages)                                         | Choose the language(s) in which your bot can be accessed.                                                     |
| [Tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools) |   Open the global tools tab.                                                                                                   |

## 2. Create a flow

To create a flow, follow the below steps:

1. Login to [yellow.ai](https://cloud.yellow.ai), select your bot. 
2. Go to **Overview** > **Studio**.

> Learn more about [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview#access-studio). 
    
3. Click **+ Create a new flow**.

   ![](https://i.imgur.com/Zp2fpb0.png)

:::tip
You can also use the keyboard shortcut`s` + `f`.
:::

4. To choose from the available templates, click on a suitable template in the **Flow Template** dialog box. For more information about templates, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro).


![](https://i.imgur.com/azyPYFo.png)


5. Otherwise, click **Create from scratch** to create a flow from scratch.

   ![](https://i.imgur.com/7YKTYeG.png)


6. Enter the following details:

   *  **Flow name**: Enter the name of your flow and make sure the name is according to the task of the flow. For example, flight booking, customer service, and products on discount.
   *  **Flow Description**: Describe your flow. You can also tranlslate this description to any language other than **English** by clicking the **Translator** button. For example, these flows lead customers to flight booking workflow. Click [here](https://) to know more about **Translation**.

   *  **Category**: You can assign a flow to multiple categories by selecting an existing category from the drop-down or adding a new one. If no category is specified, a created flow will automatically be assigned to default categories.

         1. Click **+Create category**.
         2. Enter the **Name** of the category.
         3. Click **Create Category** to save it.

    *  **Create as a workflow**: Click the toggle button if you want to convert the flow to a workflow. Workflows run in the backend along with the conversational flow. To know more about workflow, click [here](#2-workflow---a-variant-of-flow).

 ![](https://i.imgur.com/x63yJNZ.png)

7. Click **Save**.
8. Add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) and build a flow as per your use-case. 

For the flow to work, you need to trigger it. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow) for the detailed steps.

:::note
You cannot add more than 150 nodes in a flow.
:::

### 2.1 Edit a flow

To edit a flow, follow these steps

1. Ensure the environment (on the top right corner) is in the [development mode](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes).
2. Go to the flows drop-down on the top and click the flow you would like to edit. 

![](https://i.imgur.com/4lUHL3d.png)
--- 

### <a name="workflow"></a> 2.2 Workflow - a variant of flow

Workflows are background processes that run along with the conversational flow. **Workflow** option can be selected while creating a flow. For example, an action node called [Sync DB](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#41-sync-database) operates in the background, synchronizing data with an external database while the bot executes the rest of the other flows.

![](https://i.imgur.com/x63yJNZ.png)

Workflow is the same as any other flow, nodes connecting the start node can only be [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) or [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) nodes (Message and Prompt nodes are not available to build a workflow).

![](https://i.imgur.com/vwmAHUY.jpg)


