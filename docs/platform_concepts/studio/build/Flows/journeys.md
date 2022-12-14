---
title: Create Flow
sidebar_label: Create Flow
---

A flow is the logical design of your conversational journey. It is a structure that defines the sequence of a chatbot conversation with the virtual agent based on the questions your chatbot would ask and the various replies that a user would provide.

In the platform, there are different types of nodes, and you can connect each individual node to build a single  conversational flow based on your use case. Each of these nodes either displays, requests, or processes information when a particular flow is triggered.

Once you have the scope of your bot ready, depending on the use case, the bot must be built to respond accordingly. This is done by dividing the scope into multiple flows.

---
- User: “Show me the menu”
- Bot: “Please select your Cuisine: South Indian, North Indian”
- User: “South Indian”
- Bot: “Please select the Item: Dosa, Pongal . . .”
---

![](https://i.imgur.com/z6dx9sS.jpg)


Suppose the bot is used as an official portal to apply for leaves or check salary, bot must converse with the user and fetch the information from all the steps ([Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes)).
    

> Flows can be further categorised using **Categories**.
The words **Flows** and **Journeys** are used synonymously.

In this article, you will learn:

1. [What are the different UI elements to build a flow](#elements)
1. [How to create a flow](#createflow)
2. [Workflow- a variation of flow](#workflow)
3. [How to preview a flow](#preview)
  

----

## <a name="home"></a> 1. Understand UI elements to build a flow 


The icons available on the side are shortcuts to access the following: 

![](https://i.imgur.com/cXboxyj.jpg)



| Icon                                                                                                                                         | Functionality                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Node navigator                                                                                                                               | Used to navigate to a specific node. You can also use it to filter and segregate nodes in your flow. |
| [Channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) - Use to configure how bot functions in each channel. | <img src="https://i.imgur.com/Jzrwr57.png)" alt="drawing" width="60%"/>                                                              |
| [Prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)                                                     | Shortcut to drag and drop prompt nodes.                                                              |
| [Message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes)                                                    | Shortcut to drag and drop message nodes.                                                             |
| [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes)                                                      | Shortcut to drag and drop action nodes.                                                              |
| [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes)                                                        | Shortcut to drag and drop logic nodes.                                                               |
| [Variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)                                                        | Variables are used throught this module for multiple purposes.                                       |
| [Language](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#2-add-languages)                                         | Select a language your bot is accessible in.                                                         |
| [Tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools) |   Used to open the global tools tab.                                                                                                   |


## 2. Create a flow

You must first create a flow and then trigger a flow. You can create a flow using a template or from scratch. When you create a flow from scratch, you must create a placeholder for the flow first.

To create a flow, follow the below steps:

1. On the **Overview** page, select your bot. 
2. Select **Overview** > **Studio**.

> Learn more about [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview#access-studio). 
    
3. Select **Flows** > Create flow.

   ![](https://i.imgur.com/DJe2ap5.jpg)

:::tip
To open flows, use the keyboard shortcut`s` + `f`.
:::

4. If you want to select from the available templates, click a suitable template from the **Flow template** dialog box.

    ![](https://i.imgur.com/azyPYFo.png)


5. Otherwise, click **Create from scratch** in the top menu bar.

   ![](https://i.imgur.com/7YKTYeG.png)


6. Enter the following details:

*  **Flow name**: Enter the name of your flow and make sure the name is according to the task of the flow. For example, flight booking, customer service, and products on discount.

*  **Flow Description**: Enter the description of the flow. You can also convert the description into any language other than **English** by clicking the **Google translator** button. For example, these flows lead customers to flight booking workflow.

*  **Category**: One flow can have multiple categories. The created flow will fall into default categories if no category is mentioned. You can either select an existing category from the drop-down or, add a new category:

    1. Click **+Create category**.
    2. Enter the **Name** of the category.
    3. Click **Create Category** to save it.
*  **Create as a workflow**: Click the toggle button if you want to convert the flow to a workflow. Workflows run in the backend along with the conversational flow. To know more about workflow, click [here](#2-workflow---a-variant-of-flow).

   ![](https://i.imgur.com/r9qKPuo.jpg)


7. Click **Save**.
8. Add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes) and build a flow as per your use-case. 
--- 

### <a name="workflow"></a> 2.1 Workflow - a variant of flow

Workflows are background processes that run along with the conversational flow. **Workflow** option can be selected while creating a flow.

![](https://i.imgur.com/icmGvq4.png)

Workflow is the same as any other flow page, it will have a start node. Nodes connecting the start node can only be [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) or [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) nodes (Message and Prompt nodes are not available to build a workflow).

![](https://i.imgur.com/vwmAHUY.jpg)


## 3. Preview a flow

After creating a flow, you can test the flow to ensure it is displaying all the details as expected based on your use case, and then you can preview it.

Consider that you have created a flow to order food from a restaurant and want to test the flow. 

![](https://i.imgur.com/lzpOCdz.jpg)

While testing your flow, you can view [debugging details](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow). When you click on the debugging details, which is highlighted in the below screenshot.

<img src="https://i.imgur.com/wCIFeNN.png)" alt="drawing" width="40%"/>

You can view the respective node details in the flow.

![](https://i.imgur.com/LuHokrC.png)


You can also select the channels from the drop-down into which you want your flow to integrate, and then you can test your flows. After testing the flow, you can preview your bot. To know more about preview flow, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes#2-publish-bot).