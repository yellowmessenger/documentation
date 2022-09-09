---
title : Publish your Bot
sidebar_label : Publish your Bot
---

For simple & hassle-free management of bots across development environments, publish flow is needed. There are two modes in yellow.ai Conversational Studio - one for making all the changes (*Development Mode*) and one where all end users are interacting with the bot(*Live Mode*). 

![](https://cdn.yellowmessenger.com/dk2qgZwPfPA71626253412459.png)

:::tip
Use keyboard shortcuts to directly access diffferent environments-
* Development enviroment: m + d
* Live or production environment: m + p
* Sandbox environment: m + x
:::

### Development Mode 

> Keyboard shortcut: m+d

- This is meant for all the on going developments(new journeys/functions, etc) and testing them. Once all changes are working as expected, a request to Publish can be created. Publish request is approved by bot admins. Following video highlights how to create a publish request. 

![](https://i.imgur.com/NcNBztP.gif)

### Live Mode 

> Keyboard shortcut: m+p

- This is the equivalent of production environment where all the end users are interacting with the bot. This is a READ ONLY mode for Studio Module, so, no changes can be made. However, analytics of live users can be seen in Insights Module; campaigns can be run via Engagement Module and Agent can utilise Inbox to attend to customer queries. 

## Publish Condition Checklist

### Who can publish the bot?

Bot can be only published by the admins and people having approver access. But the first publish ever on the bot has to be done by the Super Admin only.

Click [here](https://docs.yellow.ai/docs/platform_concepts/configurations/access-management) to see how you can add someone as an approver. Make sure you give them access as "Approvers"

> Note: Only super admins can add other as approvers

To check who is the super admin (the one who has created the bot) :
1. Go to the setting 
2. Then Go to access controls and see who has access control as "Super Admin"



### How to approve the publish request?

To publish the bot follow these steps mentioned:
1. As soon as someone raises a publish request, the super admin and the approvers will receive an email with subject line "Approval needed to publish Assistant : <YOUR_BOT_NAME>"
2. On the email click on "Check Publish Request"
3. It will redirect you to Bot approvals page
4. Click on Take Actions
5. After testing all the prerequisites mentioned, select the check boxes.
6. On successful publishing you will receive an email with subject line "Assistant : <YOUR_BOT_NAME> has been approved" and also who has published the request.

### Few checkpoints before publishing the bot:

1. Make sure the bot is working as expected in the development environment. You can test all the functionality before publishing and approving as well.
2. The bot is trained with correct intents.
3. Few things that will not be transferred to live environment on publish bot are:
    * Records stored in database
    * Settings done in inbox module
    * Analytics of the bot in Insights tab
    * Campaigns scheduled in engage module
    * Templates applied in the engage module
4. Bot id is different in development and live environment
5. If you see the publish button as disabled and it says that bot is in read-only mode, make sure all the previous publish requests are approved and published.

