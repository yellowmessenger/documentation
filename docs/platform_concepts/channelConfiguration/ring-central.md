---
title : RingCentral Integration
sidebar_label : RingCentral Integration
---

Integrate your RingCX Account with IVA Professional to allow agents on RingCentral to leverage IVA Professional's AI capabilities and effortlessly answer live chat queries from users.

This article will help you with the following:

1. [Integrating IVA Professional with RingCX Account](#connect-yellowai-with-ringcentral)
2. [Displaying RingCX account's chat widget on the website](#display-ringcentrals-chat-widget-on-your-website)
3. [Creating bot conversational flow](#build-a-bot-conversation-flow)

## Connect IVA Professional with RingCX Account

To connect your RingCX account with IVA Professional, you need to create message routing categories, a channel to recieve messages, virtual agents to take up chats and input the API key and API URL in IVA Professional. 

### Create categories for message routing

You need to create categories based on which the user queries will be routed.

1. Log in to your [RingCX account](https://engage.ringcentral.com/).
2. Go to **Categorization** > **Categories**.

   ![](https://i.imgur.com/SIjC5PQ.png)
   
3. Click **Add**.

   ![](https://i.imgur.com/yUQBcyk.png)
   
4. In **Name**, enter a name for your category.
5. In **Parent** select the  category under which you want to add this as a  sub-category. If you do not have a parent category, fill the rest of the fields based on your preference and click **Save**.

   ![](https://i.imgur.com/0QMo2KD.png)

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
   ![](https://i.imgur.com/eoUlj1b.png) 

2. Click **Engage Messaging**.

   ![](https://i.imgur.com/Yhn6YD1.png)

3. Fill **General Settings** as per your preference.

   ![](https://i.imgur.com/u3uwq7G.png)

4. Under **Scope Configuration** select **Enable Web Messaging**.

    ![](https://i.imgur.com/w6xHkvm.png)
    
5. Under **Message settings:**

* In **Default categories**, choose the category created for the bot ([in the previous section](#create-categories-for-message-routing)).
*  In **Default categories (agent messages)**, choose the category created for agent ([in the previous section](#create-categories-for-message-routing)).
 
   ![](https://i.imgur.com/fMT0T9I.png)
 
6. Fill the rest of the fields based on your preference and click **Save**.

   ![](https://i.imgur.com/C5VnJRN.png)
   
### Create a virtual agent

Engage Digital lets you create virtual agents to assist your human agents. Virtual agents provide 24/7 support and can handle first interactions outside regular business hours.

1. Go to **AI Tools** > **Virtual agents** > **New Virtual agent**.

   ![](https://i.imgur.com/0HHTRiJ.png)

2. Click **Engage Virtual Agent**.

   ![](https://i.imgur.com/nGKTykv.png)

3. Under **General**, enable **Active** and fill in the following fields:

   ![](https://i.imgur.com/3dB2kBb.png)

* **Name**: Provide a name to the Virtual Agent.
* **Role**: Auto-populated by the RingCentral platform as **Virtual Agent Role**.
* **First Name**: Provide a first name to your agent.
* **Last Name**: Provide a last name to your agent.
* **Channels**: Choose the channel created in [this](#create-a-channel) step.
* **Categories**: Choose the category created in [this](#create-categories-for-message-routing) step.

4. Under **Configuration**, enter the following details.
   
   ![](https://i.imgur.com/CmAC5us.png)

*  **URL**: Enter the webhook URL of your bot.

| Description | URL Format                                                                       |
|-------------|----------------------------------------------------------------------------------|
| Format      | `https://{{region}}.cloud.yellow.ai/integrations/ringCentral/receive/{{bot ID}}` |
| Example     | `https://r1.cloud.yellow.ai/integrations/ringCentral/receive/x1234567890` |

* **Verification token**: Enter **ringcentral_webhook_token**
* **Secret key**: Enter a dummy text as a secret key.

5. Fill the rest of the fields based on your preference and click **Save**. To understand what each each field indicates, click [here](https://support.ringcentral.com/article-v2/Creating-a-new-virtual-agent-in-Engage-Digital.html?brand=RingCentral&product=ED&language=en_US#engage-virtual-agent).

6. Once the Virtual Agent gets created, click the **edit** icon.

   ![](https://i.imgur.com/vm8EXgw.png)

7. Scroll down to **Configuration** and copy the **API access token**.

   ![](https://i.imgur.com/PnPC8gX.png)

Activate identities after creating a virtual agent. Only then user information can be passed.

  ![](https://i.imgur.com/AWtTFTR.png)
   
### Authorize IVA Professional to access RingCX account

1. Log in to your [IVA Professional account](https://cloud.yellow.ai) and go to **Channels** > **RingCentral**.


   ![](https://i.imgur.com/76Bmw03.png)

2. In **API access token**, paste the API token copied in the previous step.
3. In **API URL**, enter the API URL in this format `https://{{ringcentraldomainname}}.api.lab.digital.ringcentral.com` for example, `https://test-account.api.lab.digital.ringcentral.com`
4. Click **Save**.

:::note
Please refer to this [doc](https://developers.ringcentral.com/engage/digital/guide/interactions/structured-messages#channel-capabilities) for nodes supported in RingCX
:::

## Display RingCX account's chat widget on your website

You need to paste the respective channel's script in the HTML file of your website to use RingCX's chat-widget with IVA Professional's AI capabilities.

1. Log in to your [RingCX account](https://engage.ringcentral.com/) and go to **Channels** > click the channel you created.

   ![](https://i.imgur.com/WeP8fsW.png)

2. Scroll down to **Chat connection** and copy the script under **Code to include**.

   ![](https://i.imgur.com/5Agip5T.png)
3. Paste this script in the HTML file of your website.

## Build a bot conversation flow 

After connecting your IVA Professional account with RingCX, you need to design the flow based on how you want the bot to handle the user chats in RingCX account using Yellow's AI capabilities.

1. Login to you [IVA Professional account](https://cloud.yellow.ai) and go to **Studio** > **Build** > and [create a new flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#manually-create-a-flow).  
2. Include a [Dynamic chat node](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode) to the **Start** node.

   ![](https://i.imgur.com/CPo5GDt.png)

:::info

**Tip:**

You can also [create an intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intents-and-utterances) for the RingCX account and [assign this intent as a trigger for this flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#11-trigger-a-flow-using-intent) in the Start node. Whenever a user types the intent or utterance associated to this intent, the bot will automatically trigger this particular flow.
:::

3. In the **Dynamic chat node**, [type the prompt](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#write-your-own-prompts) based on which the bot should function. You can also [use AI to generate these prompts](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#generate-prompts-with-ai-prompt-generator). There are several other options using which you can optimize the conversation. Refer to this [doc](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode) to know everything about the Dynamic chat node.

   ![](https://i.imgur.com/Jl5lswM.png)

4. Connect a [Raise Ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to the Dynamic Chat node and fill the following fields:

   ![](https://i.imgur.com/kLObbST.png)

| Field name | Data type | Description | Sample value |
|------------|-----------|-------------|--------------|
| Live chat agent | - | Choose **RingCentral Live Chat** in the drop-down | - |
| Message after ticket assignment | String | The message that will be displayed to the end user after a ticket is successfully assigned to an agent | Requesting live agent connection. |
| Name | String | Name of the end user | John |
| Mobile | String | Mobile number of the end user | 9876543210 |
| Email | String | Email address of the end user. This is a mandatory field | test@gmail.com |
| Query | String | The subject/topic/reason why the ticket was created | I have a concern regarding my flight ticket |
| RingCentral category ID | String | The ID of the category to which the chat should be transferred, click [here](#fetch-category-id) for the steps. | 123abc1abc2abc3abc4abc5abc6 |

You can enable **Advanced Options** to set the priority, auto-translation, custom fields, tags and department.

<img src="https://i.imgur.com/tPS9R0J.png" alt="drawing" width="50%"/>

 Once the dynamic chat node completes its conversation with the user and transfers the chat to RingCX account, this is how the chat looks on RingCX account's side.

 ![](https://i.imgur.com/Xrc60f6.png)

## Add custom fields for agents

If user information originates from RingCentral, bot developers can access any custom fields included in the RingCentral payload through the channel metadata.

You can access this data in the System Variables section. To accept data from RingCentral, just use `{{data.channelMetadata}}`, as all relevant data is available within RingCentral.

   <center><img src="https://i.imgur.com/0KHym1Q.png" width="65%"/></center>



However, if Yellow.ai intends to push data into RingCentral's custom fields, they must create corresponding custom fields within User 360.



To add custom fields to agent profiles in RingCX:

1. Go to **RingCX Admin portal** > **Digital** > **Custom Fields** > **Add** and create a new custom field.

 ![](https://i.imgur.com/HnvvH07.png)

2. In IVA Professional, create a new custom attribute(**Engage** > **User 360** > **User properties** > **+ Custom attribute**). The custom attribute's name should contain the keyword RINGCX as prefix and should have the same name as the custom field created in RingCX account. For example, RINGCX(custom field name).

 ![](https://i.imgur.com/YUP0o17.png)

3. In the flow you have constructed [previously](#build-a-bot-conversation-flow), you can collect dynamic data for the custom field by including a [prompt node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) and [storing the response](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables) in the user property variable (created in the previous step). Or you can simply type static data in that variable and pass it in the flow.
4. This custom field will appear in the agent profile as highlighted below.

 ![](https://i.imgur.com/SugTBvr.png)

## IVA Professional nodes and their supported formats

| Nodes | Supported Formats                       | Sample screenshots|
|-------|-----------------------------------------|-------|
| Image | jpeg, jpg, png, gif                     |   <img src="https://i.imgur.com/SIbhela.png" alt="drawing" width="50%"/>    |
| Audio | MP3, AMR                                |  <img src="https://i.imgur.com/LwNloOn.png" alt="drawing" width="50%"/>      |
| Video | Mp4, MP4, MOV                           |  <img src="https://i.imgur.com/1UwgJd6.png" alt="drawing" width="50%"/>      |
| File  | PDF, DOCX, PPTX, XLSX                  |   <img src="https://i.imgur.com/61AeXRJ.png" width="50%"/>       |

**Structured message:**

|Type| Sample screenshots| Supported formats|
|-----|----------------|----------------|
| Select| <img src="https://i.imgur.com/QIoENt2.png" alt="drawing" width="50%"/> | NA |
| Template| <img src="https://i.imgur.com/HCI0brt.png" alt="drawing" width="50%"/> | NA |
| Carousel | <img src="https://i.imgur.com/HbuyMGF.png" alt="drawing" width="50%"/> | GIF, jPg jpeg, png |
 


