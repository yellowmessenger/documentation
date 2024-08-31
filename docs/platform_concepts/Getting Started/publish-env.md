---
title: Bot development environments (modes)
sidebar_label: Know bot environments
---

Yellow.ai provides various environments for managing your bots and making continuous improvements, including adding functions and adjusting flows and a separate enviornment to publish the bot live. 


## Finding your Bot ID

**The bot ID is different in each environment.**
To obtain the bot ID, you can click on the web link from any page of the bot after creating it and copy the 14-digit alphanumeric value (e.g., x16763649******).       

![image](https://imgur.com/KAjcN15.png)

## Switching bot environments

Depending on your bot subscription, you'll see different environments, click on the top right dropdown to switch. 

![image](https://imgur.com/89JWllg.png)

Environments include **Sandbox, Staging, Production, Live,** and **Development**. You can opt the required enviornments for your bot.


--------

### Freemium environments

<!--

**Development and Live modes**

![](https://hackmd.io/_uploads/BJM3vb023.png)

-->

#### Development

In this mode, you can build and update bots, design flows, and conduct testing. When your bot aligns with your requirements, you can initiate a Publish request and the bot admin/approver can approve it. 




#### Live

Published bots operate in the Live mode once the publish request is approved. No changes are possible in this mode.

-----

### Premium environments


<!--
**Sandbox,Staging and Production modes**

![](https://i.imgur.com/WI0YLmE.png)

-->

#### Sandbox

You can create new bots, develop flows, and test functionality in Sandbox. 
To publish changes from **Sandbox** to **Production**, you'll have to first deploy from **Sandbox** to **Staging** and then deploy from **Staging** to **Production**.


#### Staging

Staging is very similar to Sandbox except you can make quick fixes here and publish them without disturbing the ongoing work in the **Sandbox** stage. This is a testing enviornment, it is recommended not to make any major changes or create/delete any components in this environment. 

#### Production 

Production contains the published live bots and is similar to the **Live** mode.

----

### Changes in bot after upgrading

After upgrading to premium:

- Any changes you make in the Development environment will be reflected in both the Sandbox and Staging environments. You can tweak your bot in the Sandbox, and use the Staging for testing.
- Everything set up in the Live environment will be available in the Production environment.


-------

## Transition of bot and data when you publish bot

<!--

Not every component configured in the development/ sandbox/staging environments will be pushed to the live/production environments.

- The development/sandbox/staging environments share a similar operational pattern. To make changes to your bot and apply those modifications, you need to be within these environments.
- The live/production environments follow the same pattern. In this environment, the bot is active, and no further modifications can be made. 


Following changes must be configured seperately in **Development** and **Live** enviornment. 

* Database records
* Inbox module settings
* Bot analytics in the Insights tab
* Scheduled campaigns in the Engage module
* Applied templates in the Engage module



---

Live

 However, you can:
- Access user analytics in the [Insights](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights) module.
- Launch campaigns using [Engage](https://docs.yellow.ai/docs/platform_concepts/engagement/engage).
- Respond to customer inquiries as an agent within [Inbox](https://docs.yellow.ai/docs/platform_concepts/inbox).


----

-->

Here's a compilation of Automation components or other modules that require separate configuration in deployment environment (Sandbox to Staging, and Staging to Production; or Development to Live) when you publish a bot.


| Module | Requires separate configuration |
| -------- | -------- |
| **Automation** | Data within Database tables | 
| **Inbox**	| - Custom Tags <br/> - Groups creation and configuration <br/> - Inbox settings <br/> - Agent settings |
| **User 360** | User data <br/> Segments<br/> User360 variables (Automation and User360 sync)
| **Engage**     |  Campaigns (Inbound/Outbound/Flow)  <br/> Inbound campaign configuration <br/> Enabling Notificaion API <br/> Postback URL |
|**Analytics/Insights**|  Custom queries <br/> Goals <br/>  Custom dashboards |
| **Channels and Integration** | All the Channels and integrations (except **WhatsApp**) |
| **Chat widget** | Chat widget settings |

<!--
must be created or deleted only in Sandbox/Development environment <br/> Data within the DB will not move to Live/Prod
-->


<!--


## Changes in bot after environment upgrade

- When you upgrade from Development to the 3-environment setup (Sandbox, Staging, Production), your flows, databases, and other components from Development move to the Sandbox and Staging environments.
- In the new setup, you must configure everything in the Sandbox environment, and then publish your flows and bot to the Staging environment for testing.
- All flows, intents, entities, and bot skins will be transferred from the Sandbox to the Staging environment upon publishing. 
    - You can't selectively retain flows in Staging; everything configured in Sandbox is published to Staging. Any flows exclusive to Staging but not in Sandbox will be lost if you choose to Publish bot.
- While you can make modifications and publish flows in the Staging environment, it's recommended to primarily use it for testing and make all significant changes in the Sandbox first.
- Database creation and deletion must occur in the Sandbox environment.
- Analytics and insights need to be created separately in each environment.
- Everything available in Live Mode is also accessible in the Production environment.
- In both Development and Live environments, sharing a bot invite grants users access to both Live and Development. However, in a 3-environment setup, you must share invites for all three environments separately. For example, sharing a bot invite in the Sandbox environment provides users access only to the Sandbox environment.

-->