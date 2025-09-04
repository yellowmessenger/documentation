---
sidebar_label: Create Flow campaign manually
title: How to Create a Flow Campaign
---

Flow campaigns allow you to create automated, multi-step user journeys that are triggered by specific user actions or segment changes. This guide will walk you through the concepts, a step-by-step tutorial, and a detailed reference for all available options.

### The structure of a Flow Campaign

A Flow campaign is a visual workflow built from nodes. These nodes are organized into four main categories that define how and when users enter the flow, the path they take, and the actions they experience.

1.  **Entry Rule:** The trigger that starts the journey for a user (e.g., performing an event or entering a segment).
2.  **Condition:** Checkpoints that filter users into different paths based on their properties or behavior.
3.  **Flow Control:** Nodes that manage the timing and progression of the journey, such as adding delays.
4.  **Action & Message:** The communications sent to the user (like WhatsApp messages or emails) or actions performed on their profile (like API calls).

:::note Important
An active Flow campaign cannot be edited directly. To make changes, you must pause the current campaign and create a new one. Users who are already in a campaign journey cannot be removed.
:::

---
## Building your first Flow Campaign

This tutorial will guide you through creating and launching a basic flow campaign.

1.  **Navigate to Flows:** From the main menu, go to **Engage** > **Flows**.
2.  **Create a New Flow:** Click **Create flow** and choose **Create from scratch**.
    ![](https://i.imgur.com/i9NZiqL.png)
3.  **Name Your Campaign:** Click on the "Untitled workflow" title at the top and give your campaign a descriptive name.
    <center><img src="https://i.imgur.com/yplyiKP.png" width="70%"/></center>
4.  **Define the Entry Rule:** Click the first node (e.g., **User events**) to configure what triggers the campaign. For this quickstart, you can leave the default.
    <center><img src="https://i.imgur.com/qlLGKvj.png" width="70%"/></center>
5.  **Build Your Journey:** Drag and drop nodes from the right-hand panel to create your user journey. Connect a **Message** node (like **WhatsApp**) to the **Entry Rule** node.
6.  **Set a Campaign Goal (Optional):** Click **Add new goal to flow** to define a conversion event. The campaign journey will end for any user who achieves this goal.
7.  **Publish Your Campaign:**
    * Click **Publish** in the top-right corner.
    * Confirm by clicking **Publish** again in the pop-up window.
    ![](https://i.imgur.com/XOoCuIQ.png)

---

## Understanding different nodes in Flow Campaign

This section provides a detailed breakdown of every node available in the Flow campaign builder.

### Entry rule nodes

Entry Rules are the starting point of every campaign, defining the trigger that enrolls a user into the journey.

<center><img src="https://i.imgur.com/gwgWer5.png" width="60%"/></center>

#### **User Events**
Triggers the flow when a user performs a specific action.

| Option                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Campaign triggers when user** | Choose the event that qualifies the user. Learn more about [activating events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#1-activatedeactivate-event).                                                                                                                                                                                                                                                                     |
| **After event, campaign triggers** | <ul><li>**Immediately:** Triggers the campaign instantly.</li><li>**At a specific time:** Triggers on a future date for all qualified users.</li><li>**After a delay:** Triggers after a set number of hours, days, or weeks. You can also use an event property for dynamic delays (e.g., 2 days before a `renewal_date` property).</li></ul> |
| **Campaign frequency & duration** | <ul><li>**Run this campaign:** Choose `Once per user` or `Every time when the event happens`.</li><li>**Start/End:** Set the active date and time range for the campaign.</li></ul>                                                                                                                                                                                                                       |
| **Target audience** | Filter who is eligible for the campaign. Choose **All users** or select **One or more segments** to target specific user groups.                                                                                                                                                                                                                                                                                                                    |

#### **User Enters/Exits a Segment**
Triggers the flow when a user is added to or removed from a specific segment. The configuration options are the same as for **User Events**.

:::note Segment Refresh Times
Segments created using date or time properties are only refreshed once daily at midnight. They will not trigger campaigns in real-time throughout the day.
:::

#### **User Present in a Segment**
Triggers the flow for all users who are currently in a segment at a specific scheduled time.

| Option                      | Description                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------- |
| **User segment** | Choose the segment of users to target, or select **All users**.                                         |
| **Select start date and time** | Choose the specific date and time to run the campaign for the selected users.                         |

---
### Condition Nodes

Condition nodes act as checkpoints to filter users and create different paths within your flow.

<center><img src="https://i.imgur.com/FSaF7NN.png" width="60%"/></center>

* **User Property Check:** Checks if a user's profile attribute matches a specific value (e.g., `Country` is `USA`).
* **Is in Segment Check:** Checks if the user is a member of a specific segment.
* **Has Done Event Check:** Checks if the user has performed a certain event in the past.
* **Opt-in Check:** Checks if the user has opted in to receive notifications on a specific channel.

---
### Flow control nodes

Flow Control nodes manage the timing and progression of a user's journey.

<center><img src="https://i.imgur.com/sHqUUZF.png" width="60%"/></center>

* **Wait for this duration:** Pauses the user's journey for a relative amount of time (e.g., wait for 3 days).
* **Wait until a specific timestamp:** Pauses the user's journey until a specific future date and time.
* **End flow:** Marks the end of a specific path in the journey. This is optional.

---
### Message nodes

Message nodes are used to send communications to users on various channels. Before adding channels to a flow, ensure the senderID is configured and templates for that channel are available.

<center><img src="https://i.imgur.com/PruprxG.png" width="30%"/></center>

#### **1. WhatsApp channel configuration**
1. In **From**, choose the sender's number.
2. In **To**, choose the variable that contains the user's WhatsApp number.
   <center><img src="https://i.imgur.com/a2DsA8x.png" width="50%"/></center>
3. In **Templates**, select **Existing templates** and choose your template. Map any variables to user properties, event properties, or static text. Or, select **AI generated** to create templates dynamically.
   <center><img src="https://i.imgur.com/7zgzxbP.png" width="70%"/></center>
4. In **Template media** (if applicable), choose **Static** to upload one file for all users, or **Dynamic** to use a variable containing a media URL for personalized content.
   <center><img src="https://i.imgur.com/GEh50DO.png" width="50%"/></center>
5. In **API preference**, choose how the message is delivered:
   * **Default**: Uses the [org-level setting](https://docs.yellow.ai/docs/platform_concepts/engagement/engage-settings#5-whatsapp-api-preferences-mm-lite-or-meta-cloud) configured for API preference.
   * **Meta Cloud:** Sends the campaign exactly at the scheduled time.
   * **MM Lite:** Allows Meta to optimize the delivery time based on user engagement potential (for marketing templates only).
   <center> <img src="https://i.ibb.co/b5J0MT82/3.png" width="50%"/> </center>
   :::note
   The MM Lite option is only available for eligible customers and is supported only for MARKETING templates.
   :::
6. Enable **During workflow business hours** to send the message only during your configured business hours.

#### **2. SMS channel configuration**
1. In **From**, choose the sender's number.
2. In **To**, choose the variable that contains the user's mobile number.
3. In **Templates**, choose the desired SMS template.
4. Map any **Template variables** as needed.
5. Enable **During workflow business hours** to send only during business hours.

#### **3. Email channel configuration**
1. In **From**, choose the sender's email address.
2. In **To**, choose the variable that contains the user's email address.
3. In **CC** and **BCC**, add any additional recipient addresses.
4. In **Templates**, choose your email template.
5. Map any **Template variables** as needed.
6. Enable **During workflow business hours** to send only during business hours.

#### **4. Push notification channel configuration**
* In **Template**, choose the push notification template you want to use.
  <center><img src="https://i.imgur.com/HAv4z3J.png" width="50%"/></center>

#### **5. Voice Call Channel Configuration**
1. Check **Enable answering machine detection (AMD)** to automatically identify answering machines.
2. In **AI-agent flow**, choose the welcome flow to be triggered for the call.
3. In **From**, choose the IVR number(s) to make the call from.
4. In **To**, choose the variable that contains the user identifier.

#### **Define flows based on delivery status**
After sending a message, you can create different paths based on its delivery status. This allows for powerful follow-up actions.

<center><img src="https://i.imgur.com/QNZQ4GA.png" width="50%"/></center>

* **Supported Statuses:** Include `Delivered`, `Read`, `Replied`, `Button clicked`, `Answered`, and more, depending on the channel.
* **Wait Time:** For each status, you can proceed to the next step `Immediately`, after a `Duration`, or at a specific `Timestamp`.
* **Use Case Example:** If a message `Status` is `Read`, but the user doesn't reply, you can wait for 24 hours and then send a follow-up reminder.

---
### Action nodes

Action nodes perform tasks that don't involve sending a message.

* **API Call:** Make a request to any internal or external API during the flow.
* **Update User Property:** Change the value of a property on the user's profile (e.g., set `subscription_status` to `active`).
  :::note
  You can only update custom user properties, not default system properties.
  :::

---
### Add goal

Setting a goal defines the primary conversion event for your campaign. When a user achieves the goal, they are automatically exited from the flow.

* **Goal Event:** Choose a user event that signifies success (e.g., `purchase_completed`).
* **Goal Validity:** Set a time limit for the user to achieve the goal after entering the campaign. This can be a relative **Duration** (e.g., 7 days) or a fixed **Timestamp**.