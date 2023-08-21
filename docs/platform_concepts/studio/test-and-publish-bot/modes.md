---
title : Publish your bot
sidebar_label : Publish your bot
---

:::info
To learn about different bot enviornments (modes), click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/publish-env).
:::

## Publishing roles


- **Bot admins** or **Approvers** have the authority to publish bots. 
    - The **initial publication** can only be performed by the **Super admin** who created the bot.
- Only **Super admins** can add **Approvers**. To learn to add approvers, refer  [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators). 
- To identify the **Super admin** of the bot, navigate to **Access control**.
![](https://i.imgur.com/gd7yn1Q.png)


:::note

Following changes are not transferred to the **Live** environment upon publishing the bot. They must be configured seperately in **Development** and **Live** enviornment. 

* Database records
* Inbox module settings
* Bot analytics in the Insights tab
* Scheduled campaigns in the Engage module
* Applied templates in the Engage module
* Bot ID differs between development and live environments

:::

-----

## Request for bot publish approval

>  Bot publish option is only available when the bot is in **Development** mode.


To initiate a bot publishing request:

1. Go to **Studio** and click on **Publish changes**.
    ![](https://i.imgur.com/KpPExXP.jpg)

2. Verify the *List of changes pushed*, enter a **Comment message**.
    <img src="https://i.imgur.com/Vw2K047.png" width="70%"/>

3. Click **Publish**. You will see the *Publish approval awaited* status until the bot is published.
    <img src="https://i.imgur.com/KP1Z06P.jpg"/>


---

## Approve request and publish bot

:::info

**When a publish request is raised:**

- **Super admins** and **Approvers** receive an email with the subject:::
*Approval Needed to Publish Assistant: <YOUR_BOT_NAME>*.

**Before approval:**

- Confirm that the bot functions as expected in the development environment.
- Ensure the bot is trained with correct intents.

:::

To publish the bot, follow these steps:

:::note
If the publish button is disabled and indicates the bot is in read-only mode, ensure all prior publish requests are approved and published.
:::


1. Open the email and click **Check publish request**. This redirects to the bot approval page.
    ![](https://i.imgur.com/2P0Muuy.png)

2. From the Profile dropdown, select **Take actions** and navigate to the **Bot approval** tab.
    ![](https://i.imgur.com/fWqYPzH.png)

3. Click **Approve**.
4. Complete the checklist verification by selecting checkboxes.
    <img src="https://i.imgur.com/FT5KrCR.png" width="70%"/>

5. Click **Approve** to confirm.


After successful publishing, admins and approvers receive an email confirming the publication, including the user's name who performed the action with the subject:::
*Assistant : <BOT_NAME> has been approved* 

![](https://i.imgur.com/tcdvurC.png)


----

## Selective publish for specific flows

Selective publish enables publishing specific flows rather than the entire bot. 

:::info 

**Use-cases of Selective publish:**

* You can release a part of your bot and start seeing results while working on the other flows.
* You can make quick bug fixes or copy changes after your first release without disturbing the ongoing work.
* Proactively plan your work based on the feedback received for the currently published flows.
:::

To access Selective publish, follow these steps: 

1. Click **Publish changes** button on the top and select **Publish selected flows**.
    ![](https://i.imgur.com/feRhJWR.png)

2. Choose the flows to be published, select the approvers, and post a comment on what the publish does. Click **Publish** to publish the bot.
    ![](https://i.imgur.com/9wX1vRD.png)

:::info
For bots with **Sandbox**, **Staging** and **Production** modes, **Selective Publish** will be available only if the bot is published from **Staging** to **Production** 
:::

---

## Revert published changes 

Reverting published bots can be used for addressing bugs in the published version.

1. Click **Revert** on the top.
    ![](https://i.imgur.com/q37ebzW.png)

2. Select the bot to be reverted and click **Revert** in the following dialog box.
    ![](https://i.imgur.com/T1Ixoqp.png)


:::info
- **Revert** action is only possible in the **Live** environments.
- Only admins can use the **Revert** option.
:::

