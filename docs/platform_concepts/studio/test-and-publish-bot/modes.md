---
title : Publish your bot
sidebar_label : Publish your bot
---

## 1. Modes

Yellow.ai supports multiple environments through which you can manage your published bots as well as the ongoing changes such as adding new functions, modifying flows, etc. You will encounter the following modes depending on your bot subscriptions,

* [Development and Live modes](#11-development-and-live-modes)
* [Sandbox,Staging and Production modes](#12-sandboxstaging-and-production-modes)

### <a name="development"></a>1.1 Development and Live modes


1. **Development**: Add/update bots with flows, functions and test it. If the bot works perfectly to your requirements, you can raise a request to **Publish** it. Only **Admins** can publish the bot. 

2. **Live:** Published bots will be available in the **Live** mode. You cannot make any changes in this mode. 

In the **Live** mode, you can 

* View the analytics of live users in the [Insights](https://docs.yellow.ai/docs/platform_concepts/growth/overview) module
* Run campaigns in [Engage](https://docs.yellow.ai/docs/platform_concepts/engagement/engage). 
* Attend live customer queries as an agent in [Inbox](https://docs.yellow.ai/docs/platform_concepts/inbox).

   ![](https://i.imgur.com/4PLfGcE.png)




### <a name="staging"></a>1.2 Sandbox,Staging and Production modes 

1. **Sandbox:** Develop new bots, add/update them with flows, functions and test them. To publish changes from **Sandbox** to **Production**, you'll have to first deploy from **Sandbox** to **Staging** and then deploy from **Staging** to **Production**.

2. **Staging:** Staging is very similar to Sandbox except you can make quick fixes here and publish them without disturbing the ongoing work in the **Sandbox** stage.

3. **Production:** Production contains the published live bots and is very similar to the **Live** mode.

![](https://i.imgur.com/WI0YLmE.png)

## 2. Publish bot


Bot admins or approvers (access) can publish the bot. However, only super admin (who has created) can publish for the first time.

> To know how to add someone as an approver, see [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators). 

:::note 
Only super admins can add approvers.
:::

* To see the super admin of the bot, go to **Access control**.


![](https://i.imgur.com/gd7yn1Q.png)

> Note that the the following changes are not transferred to the Live environment after publishing the bot.
> * Records stored in database.
> * Settings done in inbox module.
> * Analytics of the bot in Insights tab.
> * Campaigns scheduled in Engage module.
> * Templates applied in the Engage module
> * Bot id is different in development and live environment.



### 2.1 Request for approval

To request for publishing the bot from an approver -

1. Open the bot's **Development** mode.
2. Navigate to **Studio** and click **Publish changes**. 
![](https://i.imgur.com/KpPExXP.jpg)

3. Verify the *List of changes pushed*, enter a **Comment message**.
<img src="https://i.imgur.com/Vw2K047.png" width="70%"/>

4. Click **Publish**. You will see the *Publish approval awaited* status until the bot is published.


<img src="https://i.imgur.com/KP1Z06P.jpg"/>




### 2.2 Approve request & publish bot

When someone raises a publish request, the super admin and approvers will receive an email with subject line *Approval needed to publish Assistant : <YOUR_BOT_NAME>*

Before approving
* Make sure the bot is working as expected in the development environment. You can test all the functionalities before approving.
* The bot is trained with correct intents.

To publish the bot follow these steps -

:::note
If you see the publish button is disabled and it says that bot is in read-only mode, make sure all the previous publish requests are approved and published.
:::

When someone raises a publish request, the super admin and approvers will receive an email with subject line *Approval needed to publish Assistant : <YOUR_BOT_NAME>*

1. Open the email and click on **Check publish request**. It will redirect you to the bot approval page.
![](https://i.imgur.com/2P0Muuy.png)

2. Click in the Profile drop-down > **Take actions**, and navigate to the **Bot approval** tab
![](https://i.imgur.com/fWqYPzH.png)

3. Click **Approve**.

4. Verify all the items mentioned in the checklist and select each checkbox post completing.
<img src="https://i.imgur.com/FT5KrCR.png" width="70%"/>

5. Click **Approvre** to confirm approval.


When the bot is published successfully, the admins and approvers of the bot receive an email with the subject line *Assistant : <BOT_NAME> has been approved* with the name of the user who published it.
![](https://i.imgur.com/tcdvurC.png)

## 2.3 Selective Publish

Selective publish lets you publish certain flows of your bot instead of your entire bot. 

**Benefits**

* You can release a part of your bot and start seeing results while working on the other flows.
* You can make quick bug fixes or copy changes after your first release without disturbing the ongoing work.
* Proactively plan your work based on the feedback received for the currently published flows.

To access this feature,

1. Click **Publish changes** button on the top and select **Publish selected flows**.

![](https://i.imgur.com/feRhJWR.png)

2. Choose the flows to be published, select the approvers, and post a comment on what the publish does. Click **Publish** to publish the bot.

![](https://i.imgur.com/9wX1vRD.png)

:::info
For bots with **Sandbox**, **Staging** and **Production** modes, **Selective Publish** will be available only if the bot is published from **Staging** to **Production** 
:::

## 2.4 Revert 

Published bots can be reverted as well. This feature comes handy if the published bot has bugs.

1. Click **Revert** on the top.

![](https://i.imgur.com/q37ebzW.png)

2. Select the bot to be reverted and click **Revert** in the following dialog box.

![](https://i.imgur.com/T1Ixoqp.png)


:::info
1. **Revert** action is possible only in **Live** environments.
2. Only admins can use the **Revert** option.
:::

