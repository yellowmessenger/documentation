---
title : Publish your bot
sidebar_label : Publish your bot
---

## 1. Modes

For a hassle-free management of your bot and ongoing changes, Yellow.ai supports *Production* and *Live* environments. 

The *Development Mode* helps in making changes and testing, whereas the *Live mode* is where end users are interacting with the bot.

![](https://i.imgur.com/zZS1e4X.png)


:::tip
Use keyboard shortcuts to directly access different environments -
* Development environment: m + d
* Live environment: m + p
* Sandbox environment: m + x
:::

### 1.1 Development mode 

> Keyboard shortcut: m+d

Use the Development mode for all the ongoing developments such as adding/updating flows or functions, and testing them. 
* If all changes are working as expected, you can create a request to Publish. 
* The bot admins will Publish the bot. 



### 1.2 Live mode 

> Keyboard shortcut: m+p

This is the equivalent of production environment where all the end users are interacting with the bot. This is a *read only* mode for the Studio module. You cannot make any changes in this mode. 

With live mode, you can 
* see the analytics of live users in the Insights module
* run campaigns using *Engage* 
* attend customer queries as an agent 

## 2. Publish bot


Bot admins or approvers (access) can publish the bot. However, only super admin (who has created) can publish for the first time.

> To know how to add someone as an approver, see [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators/). 

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

## 2.3 Publish selected flows

You can choose to publish only certain set of flows in your bot. To do so, 

1. Click **Publish changes** button on the top and select **Publish selected flows**.

![](https://i.imgur.com/feRhJWR.png)

2. Choose the flows to be published, select the approvers and post a comment on what the publish does. Click **Publish** to publish the bot.

![](https://i.imgur.com/9wX1vRD.png)

Published bots can be reverted as well. To do so, 

1. Click **Revert** on the top.

![](https://i.imgur.com/q37ebzW.png)

2. Click **Revert** in the following dialog box.

![](https://i.imgur.com/SjXcuvZ.png)



