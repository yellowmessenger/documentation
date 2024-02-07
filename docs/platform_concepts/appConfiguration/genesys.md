---
title : Genesys Live Chat
sidebar_label : Genesys Live Chat
---

## Scope of Integration

Yellow.ai Integration with Genesys Live Chat allows you to seamlessly connect your genesys service with the yellow.ai platform.

**Note**: We recommend this integration if you are using genesys on-prem solution otherwise you should use [genesys PureCloud](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys-cloud-livechat) integration as that would be the latest version from genesys



## Configuration

Inside your project, navigate to the Integrations tab and on the left side bar select **Live Chat**. You will find Genesys Live Chat.

You have to provide your genesys host and service name below to connect you genesys account with yellow.ai bot.

<img src="https://cdn.yellowmessenger.com/lmA1a7BUvJqj1663932328370.png" alt="drawing" width="100%"/>


If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

### Use Case

- In this integration you can use **raise ticket** node to create a conversation with Genesys agent and once conversation initiates the user can talk to the agent.

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

:::info
Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::

### Limitations

- Only text messages from both side is supported in this integration.

### Reference

[API Documentation](https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2)
