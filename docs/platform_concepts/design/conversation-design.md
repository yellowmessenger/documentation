---
title :  Design conversations for chat bots  
sidebar_label :  Design conversations for chat bots  
---

Conversation design in chatbots refers to the process of creating a flow with a sequence of interactions. This helps in building a chatbot that can effectively communicate with users and fulfill their needs in a user-friendly manner. 

A conversation design process includes defining the goals and objectives of the chatbot, creating a script for the conversation, designing the user interface and testing the chatbot to ensure a smooth and natural conversational experience. 

## 1. Design a bot

Once your [bot is created](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/create-a-bot#2-create-from-scratch), you will be taken to **Design** module by default. 

:::note
You can also refer to our [design guidelines](https://docs.yellow.ai/docs/cookbooks/getting_started) that will help you conceptulaize your bot.
:::

1. Click **+Create flow** to start creating a high-level structure to your bot.

 ![](https://i.imgur.com/hMrp8Li.png)

2. Provide a name to your flow and click **Create**.

 ![](https://i.imgur.com/9viSetk.png)



The following are the features on the **Design** module


| Name | Description | 
| -------- | -------- |
| Dialog box    | Design the conversation between a bot and a user here. ![](https://i.imgur.com/emKj5uT.png)|
|Edit Dialog box name| Click the pencil icon on top to edit.![](https://i.imgur.com/Uv7ifmj.png)|
|Bot says|Add the questions you want the bot to ask. |
|Add button| Click **Add buttons** to offer button interface to your users. These buttons can be reordered.![](https://i.imgur.com/nuqPYYQ.png)|
|Use variables|Add [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-1-variables) to the conversation to store the user data.![](https://i.imgur.com/kMC89Fu.png)|
|User says|Add the user responses here ![](https://i.imgur.com/OrT1wr3.png)|
|Store response in| Add variables to store the responses in a variable. Choose an existing variable or click **+Add new variable** ![](https://i.imgur.com/9QFm9nS.png) |
|Add| Add more conversations to the dialog box by hovering on it and clicking the **Add** button on top.![](https://i.imgur.com/q6yxy9J.png)|
|+Create flow|Additionally, you can include flows to your design by clicking the **+Create flow** button on the botton right corner. ![](https://i.imgur.com/AkRepoX.png)|
|Preview|Click the **Preview** button on the top right corner to see a preview of this design.![](https://i.imgur.com/ocvLYKc.png)


You can further design the bot by linking the dialog box to another flow, dialog box or a condition branch.

![](https://i.imgur.com/NnrvJhU.png)

## 2. Design module demo

We will take you through the step-by-step process of designing and building a chatbot with lead-generation support.

:::note
**What is lead-generation?**

Lead generation is the process of identifying and attracting potential customers for a business's products or services. The goal of lead generation is to gather information from people who may be interested in a business's offerings and convert them into actual customers.
:::

1. In the **Design** module, click **Bot says** and type a welcome message for the user. After typing, click **Add**.

 ![](https://i.imgur.com/7xKSYVL.png)


2. Click the **+** icon and click **Link flow**.

 ![](https://i.imgur.com/fWwznrl.png)

3. In the pop-up, click the drop-down and select **+Create flow**.

 ![](https://i.imgur.com/aZIrmUq.png)


4. Provide a name to your flow and click **Create**. This flow will then appear in the previous pop-up.

 ![](https://i.imgur.com/m9XWL4f.png)


5. Click **Add** to add this flow to your design.

 ![](https://i.imgur.com/uNLAV7E.png)

:::note
The flow can be designed further with more dialog boxes, condition nodes and flows.

 ![](https://i.imgur.com/3loxrqx.png)

:::

6. Go to the module switcher and click **Studio**.

 ![](https://i.imgur.com/sTnoiIu.png)

The flow you designed will be available here. Click **Lead generation flow** and start adding details to it. 

 ![](https://i.imgur.com/Du8I0Ud.png)

If you'd like a detailed guide on building a lead-generation bot, follow the below steps:

### Design and build a lead generation bot

1. Connect the Start node to [prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to collect user information such as [name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name), [email address](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email) and [phone number](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone) and store them in respective [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes).

 ![](https://i.imgur.com/hDqVRLB.png)

2. Create a database table to store the prompt node responses. To do so,

* Go to the **Database** section and click **+Add new table**.

 ![](https://i.imgur.com/05LhABa.png)

* Provide a name to your table, enter the **Field name** to store the respective prompt nodes responses, set the data type for the responses, enable the **Searchable** option and click **Create Table**.

 ![](https://i.imgur.com/yFAM0zZ.png)

3. Go back to your flow and include a [database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node. Choose the database table in which you would like to store the info collected from the user(the one you created in the previous step).

 ![](https://i.imgur.com/w7vmO4o.png)

4. In the **Record** section, click **+Add** to add the fields and the respective variables in which the user responses are stored.

 ![](https://i.imgur.com/OU9KzSZ.png)

5. Set [Text](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) nodes to display relevant messages for **Success** and **Fallback**.

 ![](https://i.imgur.com/I1D1MyJ.png)

6. Go to **Welcome message** and click **Edit**. 
7. Click **+Add new response**> **Execute flow** > **Lead generation flow**.


 ![](https://i.imgur.com/JJyYGIE.png)

8. [Test your bot](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) , [preview](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#32-preview-a-bot) it and then [publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) it.