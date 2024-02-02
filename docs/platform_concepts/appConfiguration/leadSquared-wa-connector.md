---
title : LeadSquared Whatsapp Connector
sidebar_label : LeadSquared Whatsapp Connector
---
## Scope

Yellow.ai integration with LeadSquared allows you to seamlessly send out whatsapp campaigns to your customers. Yellow.ai uses its notification engine service to run the whatsapp campaign based on the requests received from LeadSquared. The notification delivery status report is sent to LeadSquared.


## Configuration

Inside your project, navigate to the Integrations tab and search for leadSquared, you will find LeadSqaured Whatsapp Connector.

The steps to do the configuration for this integration is written detailed in the integration page. Please follow them.

<img src="https://cdn.yellowmessenger.com/5LB99IhmabBR1651833988749.png" alt="drawing" width="60%"/>

If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

## Usecase

The main usecase in this integration will be used to send the whatsapp notification to the users which will be initiated from the leadSquared and the delivery reports of that notifications will be shared with leadSquared. 

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::