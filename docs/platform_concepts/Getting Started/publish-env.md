---
title: Bot development enviornments (modes)
sidebar_label: Bot development enviornments 
---

Yellow.ai provides various environments for managing your bots and making continuous improvements, including adding functions and adjusting flows. Depending on your bot subscription, you'll encounter the following modes:

* **Development and Live modes**

![](https://hackmd.io/_uploads/BJM3vb023.png)

* **Sandbox,Staging and Production modes**

![](https://i.imgur.com/WI0YLmE.png)


## Development

In this mode, you can build and update bots, design flows, and conduct testing. 

When your bot aligns with your requirements, you can initiate a Publish request and the bot admin can approve it. 

Following changes must be configured seperately in **Development** and **Live** enviornment. 

* Database records
* Inbox module settings
* Bot analytics in the Insights tab
* Scheduled campaigns in the Engage module
* Applied templates in the Engage module
* Bot ID differs between development and live environments


## Live

Published bots operate in the Live mode. No changes are possible in this mode. However, you can:
- Access user analytics in the [Insights](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights) module.
- Launch campaigns using [Engage](https://docs.yellow.ai/docs/platform_concepts/engagement/engage).
- Respond to customer inquiries as an agent within [Inbox](https://docs.yellow.ai/docs/platform_concepts/inbox).


## Sandbox

You can create new bots, develop flows, and test functionality in Sandbox. 
To publish changes from **Sandbox** to **Production**, you'll have to first deploy from **Sandbox** to **Staging** and then deploy from **Staging** to **Production**.


## Staging

Staging is very similar to Sandbox except you can make quick fixes here and publish them without disturbing the ongoing work in the **Sandbox** stage.

## Production 

Production contains the published live bots and is very similar to the **Live** mode.




## Behavior of features post bot-publishing

:::note
The development, sandbox, and staging environments share a similar operational pattern. To make changes to your bot and apply those modifications, you need to be within these environments.


The live and production environments follow the same pattern. In this environment, the bot is active, and no further modifications can be made. Several functionalities are tracked distinctly in this setting.
:::

Not every feature configured in the development, sandbox, and staging environments will carry over to the live and production environments.

Here's a compilation of features that require separate configuration in both of these environments.


| Module | Settings requiring separate configuration in live/production environment|
| -------- | -------- |
| **Engage**     |  |
||User360 data |
|| Segments|
||Scheduled campaigns|
||User360 variables (Studio and User360 sync)|
||Inbound campaign configuration|
||Enabling Notificaion AP|
||Postback URL|
|**Analytics/Insights**||
|| Custom queries|
|| Goals |
|| Custom dashboards |
| **Channels and Integration** |	|
|| All the Channels and integrations (except **WhatsApp**) |
| **Chat widget** | Chat widget settings |
|**Inbox**	||
|| Custom Tags|
|| Groups creation and configuration |
|| Inbox settings  |
|| Agent settings |
| **Studio** ||
||Database must be created only in Sandbox/Development env|
||Data within the DB will not move to Live/Prod| 