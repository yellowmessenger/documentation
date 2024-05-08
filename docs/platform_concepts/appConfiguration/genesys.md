---
title : Genesys Live Chat
sidebar_label : Genesys Live Chat
---



Yellow.ai Integration with Genesys Live Chat allows you to seamlessly connect your genesys service with the yellow.ai platform.

:::note
We recommend this integration if you are using Genesys on-prem solution otherwise you should use [Genesys PureCloud](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys-cloud-livechat) integration as that would be the latest version from Genesys.
:::



## Integrating Genesys Live Chat

1. In  Development/Staging environment, go to **Extensions** > **Integrations** > **Live chat** > **Genesys Connect Live Chat**.

   <img src="https://i.imgur.com/710FoSb.png" alt="drawing" width="100%"/>

2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).

    <img src="https://i.imgur.com/zaaJXRA.png" alt="drawing" width="100%"/>

3. Configure the other details based on the description provided in the following table:

    Option | Description
    ------ | -----------
    Genesys host | The host address for the Genesys Live Chat service. It typically includes the URL or IP address where the service is hosted.
    Service name | The name of the Genesys Live Chat service that your integration will connect to.
    Send attachment as link | Choose *Enable* to send attachments sent during the chat as links; keep it *Disabled* to directly embed them in the chat interface.
    Insecure Connection | Enable this option to allow the integration to establish connections with the Genesys Live Chat service using insecure protocols such as HTTP. Disabling it ensures that only secure connections (HTTPS) are permitted (default option).
    Agent inactivity | Choose whether the system to monitor agent activity during the chat session. Enabling it lets you monitor, while disabling it means no tracking of agent activity.
    Agent inactivity timeout (in milliseconds) | If agent inactivity monitoring is enabled, this setting specifies the duration of inactivity (in milliseconds) after which the system will consider an agent as inactive.
    Customise chat headers | This allows you to customize the headers displayed within the chat interface. Enable it to personalize the appearance of the chat window or to include specific information relevant to your organization or branding. Customize the header using the following options.
    Update agent name | Update or customize the name displayed for the agent in the chat interface.
    Update agent description | Customize the description associated with the agent in the chat interface.
    Update agent avatar | Update the avatar or profile picture associated with the agent in the chat interface.


4. Click **Connect**.
5. To add another account, click **+ Add account** and follow the above mentioned steps to add each of them. You can add a maximum of 15 accounts.


## Use Case

- In this integration you can use **Raise ticket** node to create a conversation with Genesys agent and once conversation initiates the user can talk to the agent.

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

:::info
Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::

## Limitations

- Only text messages from both side is supported in this integration.

## Reference

[API Documentation](https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2)
