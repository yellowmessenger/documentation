---
title: Additional UI elements in Build
sidebar_label: Additional UI elements in Build
tags: [export bot, bot template, welcome node, fallback node]
---

This article provides insights into the additional UI components on the **Build** page, including the **Welcome** and **Fallback** nodes. It also covers topics like bot publication, template exporting, and creating a new bot from scratch.

## Welcome (Start Flow)

 This is the entry point of the bot conversation. Here, you can assign a flow the bot should carry out when a user uses the bot for the first time.This is the flow that activates when a user initiates the conversation's initial session. 
 
:::info
A session refers to the complete conversation a user has with the bot, from the outset to when they conclude the chat. If a user starts a new conversation after ending the previous one, it is considered as a separate session, and the welcome flow is triggered for that.
:::

For example, you want your chatbot to offer a welcoming message and introductory information when a user begins a conversation for the first time. You would set this as the entry point for the bot conversation, and the flow associated with it would initiate the welcome message and introduction. Subsequently, if the user ends that conversation and starts a new one, the welcome flow will again greet them in the new session.

   ![](https://i.imgur.com/AkqCkIa.png)

To set a welcome flow:

1. Click the **Welcome** option.
2. [Create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).

You can also set different start triggers for this flow. To know about setting triggers for a flow, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-1-configure-start-trigger).

:::note
If you had previously set a welcome flow in our previous UI, you will see a legacy node that contains the old welcome flow settings. You cannot edit it.
![](https://i.imgur.com/BN4TTGy.png)
:::

You can set any of the flows as a welcome flow.

![](https://i.imgur.com/TUZVCdt.png)

## Fallback (Fallback Flow)

The bot switches to this flow when it doesn't understand the user input.

   ![](https://i.imgur.com/ej9HWfL.png)

To set a fallback flow:

1. Click the **Fallback** option.
2. [Create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).

You can also configure different start triggers for this flow. For instance, you can use an event as a start trigger for a flow. Events like bot opening or closing can initiate a specific flow. To know about setting triggers for a flow, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-1-configure-start-trigger).

:::note
* If you had previously set a fallback flow in our previous UI, you will see a legacy node that contains the old fallback flow settings. You cannot edit this.
![](https://i.imgur.com/OwHXy4c.png)
* Your bot might bypass the fallback flow if it detects intents or triggers from the user that are linked to specific flows. Essentially, the bot will continue responding to user queries based on the flows associated with particular intents, utterances, or triggers, rather than resorting to the fallback. Therefore, when setting up a fallback flow, ensure that the bot isn't triggered by any other triggers.
:::

Any of the flows can be set as a fallback flow.

![](https://i.imgur.com/L3nTKAv.png)

----

## Preview

The preview option lets you test the entire bot, giving you a look at how the bot would look, function, and converse with the end user.

![](https://i.imgur.com/ePnYure.png)

When you click the **Preview** button, it opens on the right side. You can also click the arrow on the top to open the bot in a new tab and test it.

![](https://i.imgur.com/CfWWPcN.png)

## Publish changes

In the **Publish changes** section, you have options to publish the bot, making it accessible to end users, and to export the bot as a template for future reference.

![](https://i.imgur.com/pTYufMt.png)

### Publish bot 

Publishes the entire bot live. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) to learn more about publish.

### Export as bot template

Export the entire bot as a template to be reused in the future. Flows, databases and FAQs of the bot can be exported. 

To export a bot template:

1. Click **Export as bot template**.
2. To set up export, fill the following fields:

| Name | Description |
|------|-------------|
| Template name | Name of the template. This is auto-filled and you can modify the name of the template according to your preference. |
| Overview | Provide a brief summary of the bot. This makes it easier to select from various templates when you want to reuse.  |
| Template icon | Select an icon for the template or you can upload the icon of your choice. ![](https://i.imgur.com/hPTOxCL.png) |
| Description | Describe the template. |
| Flows | This allows you to export specific flows of the bot. In the drop-down, select flows that you want to export. . ![](https://i.imgur.com/7deVwfk.png) |
|Export table data | Enable this option to export database tables along with flows. <br/> <img src="https://i.imgur.com/DlwlOg3.png" alt="drawing" width="80%"/>|
| Add FAQs | Enable this option to export FAQs along with your flows. ![](https://i.imgur.com/4fpQd4a.png) |
| Key features | Add the main features of your bot to the template cover. This helps you see what the template is like and what makes it special when it is listed in the marketplace.|
| Template tags | Add tags for your template here. |
| Use cases | You can select up to three categories that are available in the drop-down that suit your template. ![](https://i.imgur.com/aVZJ3M7.png) |
| Languages | To add the languages the bot should support, include them in this section. |
| Industries | You can choose up to three industries that match your flow. |
| Channels | Select the channels in which you wish to operate the bot.| 

3. Click **Next**.
4. If you've selected multiple flows, you can switch between them and preview the one you want to export.

   <img src="https://i.imgur.com/VbIYpfD.png" alt="drawing" width="50%"/>

5. Choose who can access your template using these options:

* **Myself**: Publish and reuse the template for your own use.
* **Training**: Only users with access to the specific subscription can use the exported template.
* **Public**: The template is published in the Marketplace and publicly available within the bot after admin approval.

   <img src="https://i.imgur.com/Oy5FoDN.png" alt="drawing" width="50%"/>

6. You can view templates submitted for review under **User account** > **Exports**.


 <img src="https://i.imgur.com/B3U98x6.png" alt="drawing" width="100%"/>

 You can view the status of the template on this page.

 ![](https://i.imgur.com/oynJE4x.png)

 7. Templates that are exported to a private marketplace are automatically published without review. For subscription exports, the system requires a review and displays them on this page. The subscription admin can then view, test, and publish them. Similarly, templates that are exported to the public marketplace also undergo a review process and appear here. The public marketplace admin can then view, test, and publish those templates.

 ![](https://i.imgur.com/aAR4eF3.png)

 8. After selecting the access option for the template, the system will list the approved templates under the corresponding category.

 ![](https://i.imgur.com/e6T16cV.png)

--------

## Create your first bot

We will help you build your first lead generation bot. Follow the steps as mentioned below:

1. Go to **Studio** > **+ Create flow** > under **Start from Scratch** click **+ Create a flow**. 

![](https://i.imgur.com/QHc1Dxs.png)

2. Enter the following details: 

<img src="https://i.imgur.com/GWO7tI1.pngg" alt="drawing" width="40%"/>

   *  **Flow name**: Enter the name of your flow.
   *  **Flow Description**: Describe your flow. 
   *  **Category**: Add a category for your flow if required

3. Click **Create**.
4. Once the flow gets created, connect the Start node to [prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to collect user information such as [name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name), [email address](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email) and [phone number](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone) and store them in respective [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables).

   ![](https://i.imgur.com/tqRewYD.png)

2. Create a database table to store the prompt node responses. To do so,

* Go to the **Database** section and click **+Add new table**.

   ![](https://i.imgur.com/05LhABa.png)

* Provide a name to your table, enter the **Field name** to store the respective prompt nodes responses, set the data type for the responses, enable the **Searchable** option and click **Create Table**.

   ![](https://i.imgur.com/yFAM0zZ.png)

3. Go back to your flow and include a [database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node. Choose the database table in which you would like to store the info collected from the user(the one you created in the previous step).

   ![](https://i.imgur.com/WAYvjQk.png)

4. In the **Record** section, click **+Add** to add the fields and the respective variables in which the user responses are stored.

    ![](https://i.imgur.com/uMp0hFt.png)

5. Set [Text](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) nodes to display relevant messages for **Success** and **Fallback**.

   ![](https://i.imgur.com/ytCBCEi.png)

6. [Test the flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-3-test-a-specific-flow),  and then [publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) it.


