---
title: Use yellow.ai's inbox live chat 
sidebar_label: Try inbox demo
---

When a customer chooses to switch from AI agent interaction to human support, **Inbox** connects them to live agents (who are available to accept chats). This setup ensures seamless handoff between automation and human interaction.

## Configure your AI agent to chat with a live agent

To enable this functionality, ensure the following:

1. **Automation** must be configured:
   - Use a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) that detects the *chat with an agent* intent and raises a live chat request to Inbox.

2. **Inbox** must be configured:
   - To receive and respond to chats.
   - To allow agents to interact with users by granting **Inbox agent/admin** access.  
   > Learn how to provide Inbox access [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents).

:::note
- This article explains how to set up a [live chat](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat) that Inbox agents can handle in real time. **This is a simplified demo**.
- Email ticket configuration follows a different process. Learn more [here](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro).
:::

You can test this setup by opening two browser tabs:  
- **Tab 1:** Automation module  
- **Tab 2:** Inbox module

---

## Tab 1: Configure automation flow and request for support

:::note
You cannot create flows in the Automation module when the AI agent is in **Live/Production** mode. Use **Development** or **Sandbox/Staging** mode for testing the Inbox demo.
:::

### Create an AI agent

Follow [these steps](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/create-agent) to create an AI agent. Add a prompt that asks users if they’d like to connect with a support agent.

### Create a flow

#### Option 1: Create a **Support flow** from scratch

1. Open a new flow and add [prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to collect the user's name and query.
2. Store the collected inputs using [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-4-store-and-access-variables-via-nodes).
3. Connect to a **Raise ticket** [action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes-overview/raise-ticket), passing the collected information.
4. (Optional) Use advanced options to capture additional fields.

#### Option 2: Import the **Connect with support** template

1. Go to **Automation > Create flow**. Follow [these steps](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow).
2. Search for [Support templates](https://cloud.yellow.ai/marketplace?name=support) in the Marketplace.
3. Add a suitable flow to your AI agent.

   ![Support template](https://imgur.com/iT97EQi.png)

   > Refer to the [Marketplace guide](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro#-1-choose-a-right-marketplace-template) for help using templates.

### Raise a live chat request

1. Test your flow in the demo AI agent space by sending a message like *connect to an agent* and follow the prompts.

   <img src="https://imgur.com/rzyvlP7.png" alt="Live chat prompt" width="50%" />

2. If the live chat is raised successfully and an Inbox agent receives it (as explained in the next section), an **agent connected** message will appear (as defined in the Raise ticket node).

   <img src="https://imgur.com/6kiU6i4.png" alt="Agent connected" width="50%" />

3. You can now navigate to Inbox to continue the test.

:::note
You won’t be able to raise another live chat request until the current one is resolved.
:::

---

## Tab 2: Handle live chat requests in Inbox

:::note
- You must have [Inbox agent access](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents) to test this feature.
- Your status must be set to **Available**.
:::

Once the live agent flow is created:

1. Go to **Inbox > Chats > My chats**.
2. You’ll be the only available Inbox agent for your AI agent, so the chat will be assigned to you.  
   To check your status, click on your profile icon in the top-right corner and ensure it is set to **Available**.

   <img src="https://cdn.yellowmessenger.com/assets/status.png" alt="Agent status" width="40%" />

3. The live chat will appear under **My chats** if raised successfully. You can now reply in real time from the chat screen.

   ![Inbox chat screen](https://cdn.yellowmessenger.com/assets/yellow-docs/inbox.png)

4. To end the chat, click **Resolve**. You’ll see a message on *Tab 1* confirming that the live chat has ended.

   <img src="https://imgur.com/rUez8N9.png" alt="Resolve chat" width="50%" />
