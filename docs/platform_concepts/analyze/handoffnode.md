---
title: Topic Analysis for 3rd-party ticketing tools 
sidebar_label: Analysis for 3rd-party Inboxes
---



:::note 

In this article, we refer to any non-Yellow.ai inboxes as 3rd-party apps.

:::



## Understand automation rate for 3rd-party inboxes

**Automation rate** refers to the number of conversations handled solely by the AI agent without any human agent intervention. When a conversation is transferred to a human agent, the automation rate decreases, indicating that the AI agent was unable to fully resolve the user’s query.

There are two types of chat transfers:

1. **Active handover**
    * **Yellow.ai Inbox**: The conversation is transferred to a human agent through the agent-transfer event.
    * **3rd-Party Inbox**: The AI agent is paused, and the chat is handed over to a human agent using an event configured at the AI-agent level. However, these transfers are not tracked by default.

2. **Passive handover**: In passive handovers, the AI agent collects relevant information and routes the query through alternative methods instead of a live chat:
    * **Schedule callback**: The AI agent collects user details and schedules a callback.
    * **Email**: The AI agent creates a support ticket via email.
    * **Ticket in 3rd-party system / Trigger event**: The AI agent raises a support ticket in an external system or triggers a custom event.

Transfers within the Yellow.ai Inbox are tracked using the `agent-transfer` event. However, when using a 3rd-party inbox, these handovers rely on AI-agent-level configuration and are not trackable out of the box.


### Using the chat handoff node

When working with 3rd-party inboxes, it is important to track sessions where the AI agent was unable to resolve the query and the issue was escalated—similar to how it's done within the Yellow.ai Inbox. This is achieved by logging the `agent-transfer` event.

With **Bot Developer** access, you can configure the **Chat Handoff** node just before the ticket creation node (e.g., for Zendesk, ServiceNow, Intercom, etc.). When this node is triggered, it logs the `agent-transfer` event in the [**User Engagement Events**](https://docs.yellow.ai/docs/cookbooks/insights/eventdescriptions#user-engagement-events) table.

<p align="center"><img src="https://imgur.com/ix6sMpU.png" alt="Chat Handoff Flow" width="60%"/></p>

This setup enables visibility into sessions that involved agent intervention—even if managed outside Yellow.ai Inbox—helping teams measure automation rates and identify opportunities for improving the AI agent’s effectiveness.


#### Example: Tracking Agent Sessions via Zendesk

When a ticket is raised in **Zendesk**, the **Chat Handoff** node is triggered just before the handoff. Once the passive or offline ticket is created, agents typically respond via email, call, or other channels. This handoff is recorded as an `agent-transfer` event in the **User engagement events** table, making it measurable.

<p align="center"><img src="https://imgur.com/CvniYAF.png" alt="Chat Handoff Node Zendesk" width="100%"/></p>


The **Chat Handoff** node acts as a consistent marker for agent involvement across 3rd-party systems, ensuring automation metrics remain accurate.


**User engagement events table**: 

![example](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcsCC_H9djVb0DBv3R2mmRlu3MaPocs-mOtzxyBiTN61wnlFRsUSrFsGbJgir3VnEn7flwiTgzCjlkJ4K4JnC7IJ7CkJ--5dd5QH3KB2oGDDMjdr95mXAtaiEQrj2RupK6Lv3B2I_5tMuKE-zOzytyee-Q-?key=doHOJQMEdYvKlVOmPCYX8w)

![image](https://cdn.yellowmessenger.com/assets/yellow-docs/filter.png)







------------


## Analyze transcripts from 3rd-Party Inboxes

When a ticket is created in a 3rd-party inbox, the resulting interactions can span multiple channels such as calls, emails, web chats, and SMS. However, by default, Yellow.ai does **not** have access to transcripts from 3rd-party ticketing tools. This limitation restricts visibility to only the interactions between users and AI agents, excluding conversations handled by human agents via external systems.

To bridge this gap, Yellow.ai enables the import, analysis, and display of transcripts and insights from 3rd-party ticketing tools directly within the **Analyze** module.



**Flow comparision**:

| Yellow.ai workflow | 3rd-Party workflow |
| -------- | -------- |
| - The AI agent handles user queries.<br/> - A live agent takes over, pausing the AI agent.<br/> - Once the live agent exits, the AI agent resumes.     | - The AI agent responds to the user.<br/>- The system creates an offline ticket while the AI agent remains active.<br/>- The chat continues without a defined session end time.    |



**3rd-Party workflow:**

After the handover to the 3rd-party system, Yellow.ai receives the ticket details. Once the ticket is closed (regardless of when), Yellow.ai analyzes the transcript and displays both the conversation and insights in the **Analyze** module.


#### Setup requirement

Yellow.ai's backend does not automatically initiate ticket closure or transcript fetching when it receives offline ticket messages. To enable this process, you must:

1. Create an automation rule in your 3rd-party ticketing system (e.g., Freshdesk, Zendesk).
2. Configure a webhook that sends ticket updates to Yellow.ai.

You can set up this webhook using Yellow.ai’s [**Integration**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview) module.


:::info
Webhook URL for the connected account can be fetched from **Yellow.ai > Integration > Your 3rd-party Inbox > Weebhook URL** beside the account name.
    ![image](https://imgur.com/GLJbBRc.png)
:::

### Configure Freshdesk webhook

#### Set up Freshdesk webhook

Follow these steps to enable automations and set up a webhook: 

1. **Log in to your Freshdesk account**: Use your credentials to log in to your Freshdesk account.
2. **Go to admin settings**: Click on Admin in the left-hand sidebar to open the configuration options.
3. **Open the automation section**: In the Workflows section of the admin settings, click on Automations to access workflow and trigger management options.
4. **Select Ticket Updates**: Under the automations tab, choose **Ticket Updates** to create rules for ticket-related updates.
5. **Define webhook trigger conditions**: Specify the conditions for the webhook trigger. Add the required criteria to ensure the webhook activates under the appropriate circumstances.
    ![image](https://imgur.com/EJQDhEC.png)
6. **Action settings**: Add the action settings as below.
    ![image](https://imgur.com/uWwm48Q.png)


#### Enable Freshdesk events on Yellow.ai  

1. **Go to automation**: Open Yellow’s platform and navigate to **Automation** from the sidebar.  
2. **Access events**: In the automation settings, go to **Events** and select **Integrations**.  
3. **Activate the Freshdesk event**: Locate the **freshdesk-ticket-updated** event and activate it for the connected Freshdesk account.  
    ![image](https://imgur.com/7TlMBkU.png)

Once configured, you can see the analysis generated on the Analyze module for the chats happening on the 3rd-party apps. 

![image](https://imgur.com/sRRhxb7.png)
![image](https://imgur.com/ndfgeSV.png)


:::info

Learn more about **Freshdesk integration** [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/freshdesk). 

:::


--------------

### Configure Zendesk webhook

To receive notifications for ticket updates within Zendesk's offline ticketing system, you can set up webhook and trigger.

#### Create a Webhook

To configure a webhook for receiving ticket update notifications, follow these steps:
1. Log in to your Zendesk account.
2. Go to **Admin Center** by clicking the **Admin icon** in the sidebar.
3. Navigate to **Apps** > **Integrations** > **Webhooks**.
4. Click on **Create Webhook**.
5. In **Name** field, enter the name of your webhook.
6. In **Endpoint URL**, provide the URL where you want to receive the notifications.
8. In **Request** method, select POST.
9. In **Request** format, choose JSON.
10. Click **Create** to save the webhook.                     
  ![](https://i.imgur.com/f4ZpJGw.png)

#### Create a trigger

To notify the webhook when a ticket is updated, set up a trigger:
1. Go to **Admin center** by clicking the **Admin icon** in the sidebar.
2. Navigate to **Objects and rules** > **Triggers**.
3. Click on **Add trigger**.
4. In trigger details, enter a **Name** of the trigger.
5. In **Conditions**, define when the trigger should activate (example, when a ticket is updated).
6. In **Actions**, set the action to notify the webhook you created.                             
   ![](https://imgur.com/akjkijx.png)






:::info

Learn more about **Zendesk integration** [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zendesk-offline-ticketing). 

:::
