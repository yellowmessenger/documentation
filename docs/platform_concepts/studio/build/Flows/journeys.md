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

## Key UI components to build a flow


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
| [Language](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#2-add-languages-to-your-bot)                                         | Choose the language(s) in which your bot can be accessed.                                                     |
| [Tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools) |   Open the global tools tab.                                                                                                   |

## Create a flow

To create a flow, follow the below steps:

1. Login to [yellow.ai](https://cloud.yellow.ai), select your bot. 
2. Go to **Overview** > **Studio**.    
3. Click **Create flow**.

 ![](https://i.imgur.com/5To2mvO.png)

:::tip
You can also use the keyboard shortcut`s` + `f`.
:::

4. Select the option that suits your preference for creating the flow.

  ![](https://i.imgur.com/tWrrDEx.png)

  * [Create with AI copilot](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/ai-copilot)
  * [Create from template](#create-a-flow-using-a-template)
  * [Start from scratch](#create-a-flow-from-scratch)
  * [Create skill](#create-a-skill)

### Create a flow using a template

1. Go to **Studio** > **Create flow**.

   ![](https://i.imgur.com/5To2mvO.png) 

2. Click **+ Use template**.

 ![](https://i.imgur.com/yb2AckK.png)

3. Click on a suitable template in the **Flow Template** dialog box. For more information about templates, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro).

  ![](https://i.imgur.com/azyPYFo.png)

4. In the following screen, you can preview the template by clicking the **Preview** button. This will show you that flow's sequence in the bot. If you think it suits your use case, click **+ Use template**.

   ![](https://i.imgur.com/C2jKMoX.png) 

:::note
You can also click **Create from scratch** to create a flow from scratch.

   ![](https://i.imgur.com/7YKTYeG.png)
:::

5. The template will get imported to the flows section. You can spot the template with the label **Imported** right next to it.

   ![](https://i.imgur.com/y8Epe3q.png)

### Create a flow from scratch

1. Go to **Studio** > **Create flow**.

   ![](https://i.imgur.com/5To2mvO.png) 

2. Click **+ Use template**.

  ![](https://i.imgur.com/gT5aZAZ.png)

3. Enter the following details:

   <img src="https://i.imgur.com/nRCDd2B.png" alt="drawing" width="40%"/>

*  **Flow name**: Enter the name of your flow and make sure the name is according to the task of the flow. For example, flight booking, customer service, and products on discount.
*  **Flow Description**: Describe your flow. You can also tranlslate this description to any language other than **English** by clicking the **Translator** button. For example, these flows lead customers to flight booking workflow. Click [here](https://) to know more about **Translation**.

*  **Category**: You can assign a flow to multiple categories by selecting an existing category from the drop-down or adding a new one. If no category is specified, a created flow will automatically be assigned to default categories.

   *  Click **+Create category**.
   *  Enter the **Name** of the category.
   * Click **Create Category** to save it.

4. Click **Create**.
5. Add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) and build a flow as per your use-case. 

For the flow to work, you need to trigger it. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow) for the detailed steps.

:::note
You cannot add more than 150 nodes in a flow.
:::

### Create a skill

Skills are background processes that run along with the conversational flow. For example, an action node called [Sync DB](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#41-sync-database) operates in the background, synchronizing data with an external database while the bot executes the rest of the flow.

Skill is the same as any other flow, you can build a skill by only using [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) or [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) nodes (Message and Prompt nodes are not available to build a skill).

To create a skill:

1. Go to **Build** > **Create flow** > **+ Create skill**.

 <img src="https://i.imgur.com/rJQw0ny.png" alt="drawing" width="90%"/>

3. Fill the following fields:

 <img src="https://i.imgur.com/ZD745rR.png" alt="drawing" width="40%"/>

*  **Skill name**: Enter the name of your skill and make sure the name is according to the task of the skill. For example, flight booking, customer service, and products on discount.
*  **Skill Description**: Describe the skill. You can also tranlslate this description to any language other than **English** by clicking the **Translator** button. For example, these flows lead customers to flight booking workflow. Click [here](https://) to know more about **Translation**.
*  **Category**: You can assign a skill to multiple categories by selecting an existing category from the drop-down or adding a new one. If no category is specified, the skill will automatically be assigned to default categories.

   *  Click **+Create category**.
   *  Enter the **Name** of the category.
   * Click **Create Category** to save it.

4. Click **Create**.

### Edit a flow

To edit a flow, follow these steps

1. Ensure the environment (on the top right corner) is in the [development mode](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes).
2. Go to the flows drop-down on the top and click the flow you would like to edit. 

  ![](https://i.imgur.com/4lUHL3d.png)
--- 
