---
title : Talisma Livechat Integration
sidebar_label : Talisma Livechat
---


 

## 1. Configuration

- Inside your project, navigate to the Configuration tab and click **Integrations**. Search for **Talisma live chat**.

<img src="https://i.imgur.com/IS8WKTm.png" alt="drawing" width="60%"/>

- Click **Connect**. Enter **Talisma Api Base Url** and **Agent Timeout** value.

![](https://i.imgur.com/z3ORF31.png)


If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::


## 2. Use Case 

:::info
Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::

In this integration, you can use [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to create a conversation with Talisma agent. Once the conversation is initiated the user can talk to the talisma agent.
After the conversation between them ends, the bot takes over the conversation with the user.

		
![](https://i.imgur.com/V37htaq.png)

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

**Support** 

The text and attachments (image, file) is being supported from the user and agent's side.


---


**Reference** 

<iframe src="https://drive.google.com/file/d/1gKbAt5OFpuOIT5bABIYMEXxjEgMMBwid/preview" width="640" height="480" allow="autoplay"></iframe>