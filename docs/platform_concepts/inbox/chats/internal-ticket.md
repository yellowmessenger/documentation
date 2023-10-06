---
title: Internal ticketing for improved collaboration
sidebar_label: Internal ticketing 
---

The internal ticketing feature serves as a catalyst for seamless interactions among different tiers of support agents via **Slack**, fostering efficient collaboration and resolution of intricate customer challenges.


### Internal ticketing workflow

The internal ticketing feature simplifies direct communication between Level 1 (L1) support agents and Level 2 (L2) agents, who may not be readily accessible within the system's inbox. In scenarios demanding advanced expertise, an L1 agent can initiate a conversation with specialized points of contact (POCs) who lack access to L1 agents or yellow cloud privileges.

As an inbox agent, when confronted with a complex issue, you have the capability to initiate a Slack thread. This thread enables you to connect with external POCs, such as those from operations, human resources, or finance, who specialize in areas outside of your expertise. This Slack thread serves as a platform for back-and-forth conversations, facilitating the attainment of resolutions.

------

## Setup internal ticketing for your agents 

Internal ticket communication between different agent tiers occurs through Slack. To establish this process, follow these steps:

1. Create a Slack account by following [these instructions](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/slack2#create-an-app-in-slack) to configure workspaces and add Slack token on the cloud platform.
2. Within Slack, set up distinct bot channels for various L2 agent departments. For instance, if you want L1 agents to communicate with three L2 agent teams (finance, human resources, and management), create three separate Slack channels. 

3. [Add app](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/slack2#add-app-to-slack-workspace) to each of the channels. Only then agents can select a channel from a dropdown on Inbox to which the internal ticket will be directed.

-----

## Steps to generate an internal ticket 

:::note
- Only agents with inbox access can access Slack threads.
- Admins cannot generate slack threads.
- Threads are visible to agents exclusively in the My Chats tab for interaction. 
- Threads are visible to admins on Active chats for monitoring (read-only).
:::


To create an internal ticket, follow these steps:

1. Open the chat for which you require additional support within the My Chat tab.

    ![](https://hackmd.io/_uploads/SJVwaZAhn.png)

2. Click on the threads icon located in the top-right corner of the chat screen. This will display all available Slack threads created, opened, or closed via the inbox for that specific chat. A single chat can host multiple threads.


:::info
A **Slack Threads** is a focused discussion within a message. In a channel, users can reply to a message, creating a linked thread. This keeps chats organized and prevents channel clutter.

:::

3. Click **+New thread**.

    ![](https://hackmd.io/_uploads/BJ70AWR32.png)

    ![](https://hackmd.io/_uploads/B1TcT-Rhh.png)

4. Under the **To** field, you will see a list of available Slack channel names to which the App is added. Choose the channel to which you wish to send a support request.

    <img src="https://hackmd.io/_uploads/SJ-Q1GCh3.png" width="50%"/>

5. Once you've selected a channel, the chat details will be auto-filled with the agent ID and name. Below that, you can type your query. Click **Send**.

    <img src="https://hackmd.io/_uploads/Hy-eezChn.png" width="50%"/>


:::note
You can only send text, images, files, and emojis on this chat screen. Other options are restricted.
:::


6. After the query is sent, a new message will be generated in the selected Slack channel. Any slack user can review the message on Slack and respond within the same thread.

    Sample screenshot of an internal ticket created in the the Salck channel: 
    ![](https://hackmd.io/_uploads/BygCgGCh2.png)


:::note

**For slack POCs:**
- Replies must remain within the thread of the original internal ticket message. 
- Sending messages outside of the thread will not facilitate proper communication.
:::

7. Once communication is concluded, agents can click **Mark as Done** on their chat screen to close the Slack thread. After closure, the Slack chat becomes read-only, and further conversation cannot be continued.

    ![](https://hackmd.io/_uploads/r1I4WzA3n.png)

---------

### Key points of internal ticketing

- Agents will only be notified of new responses in a Slack thread if they are in the corresponding chat where the thread was initiated. When a Slack user (L2) responds to an agent (L1), an orange bubble appears on the Slack thread icon to signal a new message.
- Files or attachments can be previewed in Slack and Inbox. It saves you time when checking important files.
- Whenever a Slack thread is created, the system automatically generates an internal note for tracking purposes. This note is part of the chat history but is not visible to bot users.
- Slack threads are visible in My Chats, Active Chats, and Resolved Chats. In My Chats, agents can create, view, reply to, and close Slack threads. In Active Chats, admins can see read-only Slack threads. In Resolved Chats, admins and agents can view closed Slack threads in a read-only manner, similar to a transcript.
- Slack threads are visible when the chat is transferred (not when reopened), as the chat ticket remains unresolved during the transfer.
- If an L1 agent sends a message and an attachment together, it is combined into a single message on Inbox instead of sending two separate messages consecutively.
- Support is added for mentions, including @here, @channel, and user groups, allowing you to easily notify and collaborate with specific individuals or teams within your Slack workspace. 

### Limitations of internal ticketing


- Admins do not receive notifications for these Slack messages.
- Emojis sent from Slack to the inbox agent (L1) will not be visible in the inbox.
- Reopening a chat ticket creates a new separate ticket, and Slack threads from the previous ticket are not visible in the reopened ticket.
- Inbox does not support all message types and formatting options that Slack provides in its UI. For example, formatting styles like bold, italics, and strikethrough are not supported in the chat interface.