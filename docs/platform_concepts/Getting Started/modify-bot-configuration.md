---
title: Manage your AI agent 
sidebar_label : Manage your AI agent
keywords : [reset bot, pause bot, modify bot]
---

When you create an AI agent, you can configure key details such as the agent's name, timezone settings, and industry type. These settings can be modified at any time without affecting the AI agent's performance.

This guide explains how to update your AI agent’s configuration, pause and resume its responses, and reset its data.

## AI agent configuration 

You can manage your AI agent’s configuration from the **Overview** page.

To manage your AI agent's configuration, follow these steps:

1. Go to the **Overview** page of your AI agent and click **Configure** at the top right.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/configurebot.png)

2. In the Configure section, you can:

    * [Edit AI agent details](#addupdate-ai-agent-information)
    * [Disable AI agent response](#pauseresume-your-ai-agent)
    * [Reset the AI agemt](#reset-your-ai-agent-data)

:::note
UTC time format is used throughout the AI agent.
:::

---

### Add/update AI agent information

You can update the AI agent's details such as name, industry, timezone, and region according to your business needs.

To update AI agent details, follow these steps:

1. Select the AI agent you want to modify and click on **Overview** > **Configure**.

2. You can modify any of the following fields:
    i. AI agent name: Change the display name of the agent.
    ii. Industry: Select the industry that suits your use case.
    iii. Timezone: Set the preferred timezone for logs and interactions.

3. Click **Save** to apply the changes.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/updatebot.png" alt="drawing" width="40%"/>

:::info
You cannot update the Region once it is set. The region is used for integrations, voice AI agents (for phone numbers), and more. Changing the region may impact the AI agent as it's configured for that specific region.
:::

----

### Pause/resume your AI agent

You can temporarily pause your AI agent’s responses while making updates or adjustments. When paused, the AI agent will not respond to user queries across any environment. After disabling the AI agent response, you can make modifications and then enable the AI agent response to publish the AI agent.

:::note
- Only super admin and admin have the ability to pause a AI agent. 
- When the AI agent is in a paused state, it will not respond to user queries in any environment.
:::

To pause or resume your AI agent, follow these steps:

1. Select the respective AI agent for which you want to disable the response and click on **Overview** > **Configure**.

2. To disable the AI agent response, enable the toggle button.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/tooglepause.png" alt="drawing" width="40%"/>

:::info 
**Marketplace dependency**: 
- If you export a AI agent template to a **private** Marketplace, it gets published automatically, and you will not be able to pause the AI agent in between.
- If you export a AI agent template to the **public** or training section of the Marketplace, the AI agent template is submitted for review, and you will not be able to pause the AI agent.
:::

----

### Reset your AI agent data

Resetting an AI agent allows you to delete all past flows, conversations, and data associated with it.

:::note
Only super admin and admin have the ability to reset the AI agent.
:::

To reset an AI agent, follow these steps:

1. Select the AI agent that you want to reset and click **Overview** > **Configure**.
2. Click on **Reset AI agent** to delete all past flows, conversations, and data of the selected AI agent.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/reset.png" alt="drawing" width="40%"/>

----

### Delete your AI agent

You cannot delete an AI agent. However, you can:
* Pause the agent to stop its responses.
* Reset it to clear all existing configurations and data.

-----

## View AI agent audit log 

Audit log provids a detailed record of the changes made to each module(APIs, Inbox Agent configuration/actions, Channels), including information about the user (user email) who made the changes and the timestamp of the actions taken. 

To view audit log, follow these steps:

1. Click **AI agent settings** > **Audit logs** to access the log of all the changes made.

    ![image](https://imgur.com/E5gLq7h.png)

2. To filter the results and view specific information, you can use the **filter** button and apply relevant filters.

    <img src="https://imgur.com/QqL6CXo.png" alt="drawing" width="50%"/>

3. If you wish to download all the data from the Audit log, you can do so by clicking on **Download CSV**. This will allow you to have a comprehensive record of all the changes made to the AI agent over time.

:::note
Audit logs will be available for 6 months.
:::