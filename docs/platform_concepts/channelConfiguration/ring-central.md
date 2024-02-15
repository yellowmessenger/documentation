---
title : Ring Central
sidebar_label : Ring Central
---

Integrate your RingCentral channel with Yellow.ai to  allow agents on RingCentral to leverage Yellow.ai's AI capabilities and effortlessly answer live chat queries from users.

This article will help you with the following:

1. [Integrating Yellow.ai with RingCentral](#connect-yellowai-with-ringcentral)
2. [Displaying RingCentral's chat widget on the website](#display-ringcentrals-chat-widget-on-your-website)
3. [Creating bot conversational flow](#build-a-bot-conversation-flow)

## Connect Yellow.ai with RingCentral

To connect your RingCentral account with Yellow.ai, you need to create message routing categories, a channel to recieve messages, virtual agents to take up chats and input the API key and API URL in Yellow.ai. 

### Create categories for message routing

You need to create categories based on which the user queries will be routed.

1. Log in to your [RingCentral Engage account](https://engage.ringcentral.com/).
2. Go to **Admin** > **Routing** > **Categories**.

   ![](https://i.imgur.com/eS8OLVb.png)
   
3. Click **Add**.

   ![](https://i.imgur.com/8VL4RyI.png)
   
4. In **Name**, enter a name for your category.
5. In **Parent** select the  category under which you want to add this as a  sub-category. If you do not have a parent category, fill the rest of the fields based on your preference and click **Save**.

   ![](https://i.imgur.com/t29kNgq.png)

:::info
You can create separate categories for chats handled by the bot and the chats handled by the agent.
:::

 
#### Fetch category ID

We need the category ID to route the messages to that specific category. 

1. Click the edit icon beside the preferred category.

   ![](https://i.imgur.com/F3OEl1r.png)

2. Copy the category ID from the URL as shown in the image below.

   ![](https://i.imgur.com/D6iB7a0.png)

### Create a channel

After creating a category, you need to create a channel to recieve the messages. 

1. Click **Channels** > **New channel**.
   ![](https://i.imgur.com/2w0sY2L.png) 

2. Click **Engage Messaging**.

   ![](https://i.imgur.com/e9gAJWT.png)

3. Fill **General Settings** as per your preference.

   ![](https://i.imgur.com/OYDwYZb.png)

4. Under **Scope Configuration** select **Enable Web Messaging**.

    ![](https://i.imgur.com/59cmTr5.png)

5. Under **Message settings:**

* In **Default categories**, choose the category created for the bot ([in the previous section](#create-categories-for-message-routing)).
*  In **Default categories (agent messages)**, choose the category created for agent ([in the previous section](#create-categories-for-message-routing)).
 
   ![](https://i.imgur.com/IDfif4z.png)
 
6. Fill the rest of the fields based on your preference and click **Save**.

   ![](https://i.imgur.com/Zmj2F1O.png)
   
### Create a virtual agent

Engage Digital lets you create virtual agents to assist your human agents. Virtual agents provide 24/7 support and can handle first interactions outside regular business hours.

1. Go to **AI Tools** > **Virtual agents** > **New Virtual agent**.

   ![](https://i.imgur.com/80LiiJ0.png)

2. Click **Engage Virtual Agent**.

   ![](https://i.imgur.com/MQNWAzl.png)

3. Under **General**, enable **Active** and fill in the following fields:

   ![](https://i.imgur.com/JcjaO1C.png)

* **Name**: Provide a name to the Virtual Agent.
* **Role**: Auto-populated by the Ring Central platform as **Virtual Agent Role**.
* **First Name**: Provide a first name to your agent.
* **Last Name**: Provide a last name to your agent.
* **Channels**: Choose the channel created in [this](#create-a-channel) step.
* **Categories**: Choose the category created in [this](#create-categories-for-message-routing) step.

4. Under **Configuration**, enter the following details.
   
   ![](https://i.imgur.com/jBMuxDh.png)

*  **URL**: Enter the webhook URL of your bot.

| Description | URL Format                                                                       |
|-------------|----------------------------------------------------------------------------------|
| Format      | `https://{{region}}.cloud.yellow.ai/integrations/ringCentral/receive/{{bot ID}}` |
| Example     | [https://r1.cloud.yellow.ai/integrations/ringCentral/receive/x1234567890](https://r1.cloud.yellow.ai/integrations/ringCentral/receive/x1234567890) |

* **Verification token**: Enter **ringcentral_webhook_token**
* **Secret key**: Enter a dummy text as a secret key.

5. Fill the rest of the fields based on your preference and click **Save**. To understand what each each field indicates, click [here](https://support.ringcentral.com/article-v2/Creating-a-new-virtual-agent-in-Engage-Digital.html?brand=RingCentral&product=ED&language=en_US#engage-virtual-agent).

6. Once the Virtual Agent gets created, click the **edit** icon.

   ![](https://i.imgur.com/TUfzuVP.png)

7. Scroll down to **Configuration** and copy the **API access token**.

   ![](https://i.imgur.com/h9eIwmL.png)
   
### Authorize Yellow.ai to access RingCentral

1. Log in to your [Yellow.ai account](cloud.yellow.ai) and go to **Channels** > **RingCentral**.


   ![](https://i.imgur.com/76Bmw03.png)

2. In **API access token**, paste the API token copied in the previous step.
3. In **API URL**, enter the API URL in this format ```https://{{ringcentraldomainname}}.api.lab.digital.ringcentral.com``` for example, https://test-account.api.lab.digital.ringcentral.com
4. Click **Save**.

## Display RingCentral's chat widget on your website

You need to paste the respective channel's script in the HTML file of your website to use RingCentral's chat-widget with Yellow.ai's AI capabilities.

1. Log in to your [RingCentral Engage account](https://engage.ringcentral.com/) and go to **Channels** > click the channel you created.

   ![](https://i.imgur.com/fQCRo1a.png)

2. Scroll down to **Chat connection** and copy the script under **Code to include**.

   ![](https://i.imgur.com/TAFAFJS.png)
3. Paste this script in the HTML file of your website.

## Build a bot conversation flow 

After connecting your Yellow.ai account with RingCentral, you need to design the flow based on how you want the bot to handle the user chats in RingCentral using Yellow's AI capabilities.

1. Login to you [Yellow.ai account](cloud.yellow.ai) and go to **Studio** > **Build** > and [create a new flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#create-a-flow-from-scratch).  
2. Include a [Dynamic chat node](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode) to the **Start** node.

   ![](https://i.imgur.com/CPo5GDt.png)

:::info

**Tip:**

You can also [create an intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intents-and-utterances) for RingCentral and [assign this intent as a trigger for this flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#11-trigger-a-flow-using-intent) in the Start node. Whenever a user types the intent or utterance associated to this intent, the bot will automatically trigger this particular flow.
:::

3. In the **Dynamic chat node**, [type the prompt](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#write-your-own-prompts) based on which the bot should function. You can also [use AI to generate these prompts](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#generate-prompts-with-ai-prompt-generator). There are several other options using which you can optimize the conversation. Refer to this [doc](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode) to know everything about the Dynamic chat node.

   ![](https://i.imgur.com/Jl5lswM.png)

4. Connect a [Raise Ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to the Dynamic Chat node and fill the following fields:

   ![](https://i.imgur.com/kLObbST.png)

| Field name | Data type | Description | Sample value |
|------------|-----------|-------------|--------------|
| Live chat agent | - | Choose **Ring Central Live Chat** in the drop-down | - |
| Message after ticket assignment | String | The message that will be displayed to the end user after a ticket is successfully assigned to an agent | Requesting live agent connection. |
| Name | String | Name of the end user | John |
| Mobile | String | Mobile number of the end user | 9876543210 |
| Email | String | Email address of the end user. This is a mandatory field | test@gmail.com |
| Query | String | The subject/topic/reason why the ticket was created | I have a concern regarding my flight ticket |
| Ring central category ID | String | The ID of the category to which the chat should be transferred, click [here](#fetch-category-id) for the steps. | 123abc1abc2abc3abc4abc5abc6 |

You can enable **Advanced Options** to set the priority, auto-translation, custom fields, tags and department.

<img src="https://i.imgur.com/tPS9R0J.png" alt="drawing" width="50%"/>

 Once the dynamic chat node completes its conversation with the user and transfers the chat to RingCentral, this is how the chat looks on RingCentral's side.

 ![](https://i.imgur.com/XXfQvzO.png)


