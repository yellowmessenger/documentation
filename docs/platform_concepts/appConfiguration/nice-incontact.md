---
title : Nice Incontact
sidebar_label : Nice Incontact
---

Yellow.ai's integration with Nice Incontact allows you to seamlessly connect your Nice Incontact account with the yellow.ai platform. Any customer who has a Nice Incontact account can connect their service with yellow.ai. This connector will connect end users to live agents.

## 1. Configure

1. Inside your project, navigate to **Configuration** and  click **Integrations**.

<img src="https://i.imgur.com/fBIHa3l.png" alt="drawing" width="100%"/>

2. Search for **Nice Incontact**.
3. Provide the **Host URL**, **Client Id**, **Client Secret**, **Point of Contact**, **Brand**, **Agent inactivity timeout details** and click **connect**.
4. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
5. Only text is being supported from both the user and agent side.
:::


## 2. Use-case

In this integration, you can use the **Raise ticket** node to create a conversation with Nice Incontact and once the conversation gets initiated, the user can talk to the Nice Incontact agent. After the conversation ends, bot takes over the conversation with the user.

<img src="https://i.imgur.com/V37htaq.png" alt="drawing" width="100%"/>

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::
		

**Reference**

[Nice Incontact](https://developer.niceincontact.com/API/PatronAPI)
