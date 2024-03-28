---
title:  Konnect Insights
sidebar_label: Konnect Insights
---

Integrate Yellow.ai with **Konnect Insights** to seamlessly forward user and bot interactions for sentiment analysis. This integration empowers Konnect Insights to analyze user sentiments and enables agents to respond directly from the Konnect Insights dashboard. This integration enables two key purposes:

1. **Ticket Creation**: Yellow.ai generates tickets in Konnect Insights as soon as a ticket is created in Yellow.ai, sending chat conversations for sentiment analysis, aiding agent understanding.
2. **Agent Conversations**: All agent interactions within Yellow.ai are forwarded to Konnect Insights for comprehensive analysis.

## Connect Yellow.ai with Konnect Insights

To integrate these two platforms, follow the steps mentioned below:

### Create an app in Konnect Insights

You need to create an app in Konnect Insights with the yellow.ai bot credentials to connect the specifc bot with Konnect Insights.

1. Go to your [Konnect Insights account](https://app3.konnectinsights.com/) click the **hamburger icon** on the top left > **settings** > **All apps** > Search for **Yellow Bot** > **Connect**.

   ![](https://i.imgur.com/rqVYUaO.png)

2. In the following pop-up, fill in the following fields:

   ![](https://i.imgur.com/NDwbe7v.png)

* **Profile name:** Enter a name for your profile in Konnect Insights.
* **Bot ID:** Enter your bot ID. For steps to fetch your bot ID, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/publish-env#finding-your-bot-id).
* **Webhook URL:** Copy this from Yellow.ai's integration page and paste it here. To do so:
   * Go to cloud.yellow.ai > **Integrations** > **Custom live agent** > click **Webhook URL** at the top right corner to copy it. 
  
     ![](https://i.imgur.com/ZlKuC0Y.png)


3. Click **Save**. The app will be added to **Integrated Apps**.

### Fetch credentials from the app

1. In the **Integrated Apps** page, click the **gear icon** next to the profile you created in the previous step and click **Get Information**. 

   ![](https://i.imgur.com/zVg2rR6.png)

2. Copy the **Domain Name**, **Company Name** and **API Key** from here.


   <img src="https://i.imgur.com/U3oPK7H.png" alt="drawing" width="60%"/>

### Authorize Yellow.ai to access Konnect Insights

1. Go to cloud.yellow.ai > **Integrations** > **Custom Live Agent** and fill in the following fields.

   ![](https://i.imgur.com/SrHfMzt.png)


| Field Name                    | Description                                                                                                      |
|-------------------------------|------------------------------------------------------------------------------------------------------------------|
| Account name                  | Provide a name to the Konnect Insights account you connect here.                                                 |
| Domain name                   | Paste the domain name copied in the previous step.                                                                |
| API Key                       | Paste the API key copied in the previous step.                                                                    |
| API timeout (in seconds)      | Time within which Yellow.ai fails to receive an API response from Konnect Insights.                           |
| Ticket queue message          | When a ticket enters the queue, the end user must wait until the next available agent is free, during which time a message will be sent to keep the user informed. |
| Send conversation history JSON| Send the conversation history to Konnect Insights in the JSON format.                                             |
2. Click **Connect** after filling the fields.

## Create tickets and share user messages to Konnect Insights via bot conversations

1. Go to **Studio** and [build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on how you want the bot to take the user through the process.
2. Include the [Raise ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) at the point in the flow where you want to let the user talk to a live agent. To accomplish this, include a Raise ticket node and choose **Custom Live Agent** under **Live chat agent**.

   ![](https://i.imgur.com/G9GaBr3.png)


3. Fill in the following fields in the node. The variables chosen for these fields must be previously collected in the flow via node. To know more about this in detail, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables).

| Field name | Data type | Description | Sample value |
|------------|-----------|-------------|--------------|
| Live chat agent | - | - | Choose **Custom Live Agent** in the drop-down |
| Account name | String | Choose the Genesys account to which the chats should be transferred | account1 |
| Message after ticket assignment | String | The message that will be displayed to the end user after a ticket is successfully assigned to an agent | Requesting live agent connection. |
| Name | String | Name of the end user | John |
| Mobile | String | Mobile number of the end user | 9876543210 |
| Email | String | Email address of the end user. This is a mandatory field | test@gmail.com |
| Query | String | The subject/topic/reason why the ticket was created | I have a concern regarding my flight ticket |
| Priority | String | The priority of the ticket | MEDIUM |

You can enable **Advanced Options** to set the priority, auto-translation, custom fields, tags and department.

<img src="https://i.imgur.com/tPS9R0J.png" alt="drawing" width="48%"/>

4. Once you have set up the flow, chats will automatically get forwarded to **Konnect Insights** when this flow gets triggered and user starts responding to agents.

**On Yellow.ai bot:**

<img src="https://i.imgur.com/8DlIsjk.png" alt="drawing" width="60%"/>

**On Konnect Insights:**

<img src="https://i.imgur.com/KHcfCtd.png" alt="drawing" width="100%"/>
