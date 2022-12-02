---
title: Create Flow
sidebar_label: Create Flow
---

> The words **Flows** and **Journeys** are used synonymously.

In this article, you will learn: 

1. [How to create a flow](#createflow)
2. [Workflow- a variation of flow](#workflow)


## <a name="createflow"></a> 1. Introdution to flow

Flow is the logical design of your conversational flow, which will be the actual path that the end users will go through.
    
---
- User: “Show me the menu”
- Bot: “Please select your Cuisine: South Indian, North Indian”
- User: “South Indian”
- Bot: “Please select the Item: Dosa, Pongal . . .”
---
  

Once you have the scope of your bot ready, depending on the purpose user has for chatting with your bot, the bot must be built to respond accordingly. This is done by dividing the scope into multiple flows.

  

![](https://i.imgur.com/zroHc91.jpg)

  

Suppose the bot is used as an official portal to apply for leaves or check salary, bot must converse with the user and fetch the information from all the steps([Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes)) to do just that.
    

> Flows can be further categorised using Categories.

----

:::note
The icons available on the side are shortcuts to access the following: 

![](https://i.imgur.com/3rEtjur.jpg)



| Icon                                                                                                                                         | Functionality                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Node navigator                                                                                                                               | Used to navigate to a specific node. You can also use it to filter and segregate nodes in your flow. |
| [Prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)                                                     | Shortcut to drag and drop prompt nodes.                                                              |
| [Message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes)                                                    | Shortcut to drag and drop message nodes.                                                             |
| [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes)                                                      | Shortcut to drag and drop action nodes.                                                              |
| [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes)                                                        | Shortcut to drag and drop logic nodes.                                                               |
| [Variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)                                                        | Variables are used throught this module for multiple purposes.                                       |
| [Language](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#2-add-languages)                                         | Select a language your bot is accessable in.                                                         |
| [Channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) - Use to configure how bot functions in each channel. | ![](https://i.imgur.com/Jzrwr57.png)                                                                 |
| [Tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools) |   Used to open the global tools tab.                                                                                                   |
:::








### 2.1 Create a flow

You must first create a flow and then trigger a flow. You can create a flow using a template or from scratch. When you create a flow from scratch, you create a placeholder for the flow first.

To create a flow, follow these steps:

1. Log in to your studio account. On the Overview page, select your bot. 
2. Select **Overview** > **Studio**.

> Learn more about [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview#access-studio). 
    
3. Select **Flows** > Create flow.

![](https://i.imgur.com/YZXi95w.jpg)

:::tip
Keyboard shortcut to open flows `s` + `f`.
:::

4. If you want to select from the available template, click a suitable template.

![](https://i.imgur.com/K2blabe.jpg)

5. Otherwise, Click **Start from scratch** in the top menu bar.

![](https://i.imgur.com/npIk9X3.jpg)


6. Enter the following details:

*  **Flow name**: Name of the flow; make sure the name is according to the task of the flow. For example, flight booking, customer service, and products on discount.

*  **Flow Description**: Description of the flow; you can also convert the description into any language other than English by clicking the Google translator button. For example, these flows lead customers to flight booking workflow.

*  **Category**: One flow can have multiple categories. The created flow will fall into default categories if no category is mentioned. You can either select an existing category from the drop-down or, add a new category:

    1. Click **+Create category**.
    2. Enter the **Name** of the category.
    3. Click **Create Category** to save it.
*  **Create as a workflow**: Click on the right of the toggle if you want to convert the flow to a workflow. Workflows run in the back-end along with the conversational flow.

![](https://i.imgur.com/GS5ENuC.png)

7. Click **Save**.
8. Add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes) and build a flow as per your use-case. 
--- 

## <a name="workflow"></a> 2. Workflow - a variant of flow

Workflows are background processes that run along with the conversational flow. **Workflow** option can be selected while creating a flow.

![](https://i.imgur.com/yMThz0H.png)

Workflow is the same as any other flow page, it will have a start node. Nodes connecting the start node can only be [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) or [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) nodes (Message and Prompt nodes are not available to build a workflow).

![](https://i.imgur.com/7Wfp9Yz.png)