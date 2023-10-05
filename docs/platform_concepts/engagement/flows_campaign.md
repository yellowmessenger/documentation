---
sidebar_label: Create Flow campaign manually
title: Create Flow campaign manually
---


## Create Flow campaign

The campaign flow builder consists of five categories of nodes:

* Entry point
* Condition
* Flow control
* Message 
* Action

To create a flow, follow these steps:

1. Click on the Module Switcher and navigate to **Engage**.
2. Navigate to **Flows** and click **Create flow** > **Create from scratch**.

  ![](https://i.imgur.com/AsPgjaT.png)

2. Click on  to **Flows**.
  
  ![](https://i.imgur.com/wrBLa4B.png)

:::note
You can also reuse an existing flow using More options > **Duplicate**.
:::

3. Click on the Edit icon of the Untitled workflow (the default name) and enter the campaign name.

   ![](https://i.imgur.com/9VMYAuN.png)
   
4. Select the rule when users should enter the flow.
	
	<center><img src="https://i.imgur.com/Y9SkBqg.png" width="50%"/></center>



5. Define the journey using [Flow control](#flow-control), [Conversations](#message-start-conversation), and [Actions](#action).
6. Set the [campaign goal](#add-goal) as required. The campaign ends when the goal is achieved.
7. Click **Publish**. You will see a pop-up screen asking for confirmation.
8. Click **Publish** again on the pop-up screen.

   ![](https://i.imgur.com/XOoCuIQ.png)



## Entry rule

This is the starting point of the flow where you can configure the criteria based on which a user can enter the flow.

### User events 
Select this to trigger the flow when a specific user event occurs.

To set an event for which the user qualifies to enter the flow:

* On the flow builder screen, click on the **User events** node.

   <center><img src="https://i.imgur.com/gwgWer5.png" width="60%"/></center>



| Option | Description |
| ------ | ------------ |
| **Campaign triggers when user**  | Choose the event for which the user qualifies to enter the flow. Learn more about [how to activate events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#1-activatedeactivate-event) and [how to add custom events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-event). |
**After event, campaign triggers** | <ul><li>Choose *Immediately* to trigger the campaign right after the event has occured.</li><li>Choose **At a specific time** to trigger the campaign on a specific date for the qualified users. <br/><img src="https://i.imgur.com/SdcMiVJ.png" width="50%"/></li><li>Choose **After a delay** to trigger the campaign after a specific number of hours, days, or weeks from the event occured time. <img src="/img/cdp/afteraDelay.png" width="60%"/><br/> You can also define a custom property (Click **Add property input**) by which you want to trigger the campaign. <br/><img src="/img/cdp/addPropertyInput.png" width="60%"/> <br/>1. Set the duration in minutes, hours, days or weeks. <br/>2. Choose when to remind - Before or After, and <br/>3. Enter your preferred event property in the last box. <img src="/img/cdp/property2.png" width="60%"/><br/>For example, send a notification 2 days before a subscription renewal date, Send a greeting on the customer's birthdate, send a reminder 30 minutes before the appointment, or send a thank you message an hour after the flight departure.</li></ul> | 
| **Campaign frequency & duration** | Setup when to run the campaign.<br/><ol><li>In **Run this campaig**, choose between *Once per user* or *Everytime when the event happens*.</li><li>In **Start** and **End**, set the duration of the campaign (date and time).</li></ol> | 
| **Target audience** | <ul><li>If you want the campaign to be applicable for specific users groups, select **One or more segments** and choose your preferred user segments.</li><li> If you want the campaign to be enabled for all users, select **All users**. </li></ul> | 

***


### User entered a segment

Select this to trigger the flow when a user enters a segment.

To trigger the campaign when a user enters a segment, on the flow builder screen, click on the **User enters segment** node.



<center><img src="https://i.imgur.com/NuiRCDg.png" width="50%"/></center>

Option | Description
--------- | --------
**User entered segment** | Triggers the campaign when the user enters a specific segment. Select your preferred segment in the respective box.
After entering segment, campaign triggers | Once a user enters the segment, choose when to schedule the campaign - Immediately, At a specific time, or After a delay.
**Frequency & duration** | Set the campaign's frequency and duration.
**Run this campaign** | Choose whether to run the campaign only *Once per user* or *Every time event happens*.
**Start** / **End** | Choose the duration of the campaign using the calendar boxes. It should be a future duration.
**Target audience** | *Select one or more segments* to make the campaign applicable to users in specific segments. Select your preferred segments in the Select segments box.<br/>[OR]<br/>Select *All users* to make the campaign applicable to all users.

:::note
Once the flow is published, do not modify the segment condition.
:::

*** 

### User exited a segment 
Select this to trigger the flow when a user exits a segment.

To trigger the campaign when a user exits a segment, on the flow builder screen, click on the **User exited segment** node.

<center><img src="https://i.imgur.com/b8lQP7O.png" width="60%"/></center>

Option | Description
--------- | --------
**User exited a segment** | Triggers the campaign when the user exits a specific segment. Select the segment in the respective box.
After exiting segment, campaign triggers | Once a user exits the segment, choose when to schedule the campaign - Immediately, At a specific time, or After a delay.
**Campaign frequency & duration** | Set the campaign frequency and duration.
**Run this campaign** | Choose whether to run the campaign only *Once per user* or *Every time event happens* (every time a user exits a segment).
**Start** / **End** | Choose the duration of the campaign using the calendar boxes.
**Target audience** | *Select one or more segments* to make the campaign applicable to users in specific segments. Select your preferred segments in the Select segments box.<br/>[OR]<br/>Select *All users* to make the. campaign applicable to all users.


***

### User present in a segment 
Select this to trigger the flow when a user is in a particular segment.

<center><img src="https://i.imgur.com/Uu1Nvu3.png" width="60%"/></center>

Option | Description
-------- | ---------
**User segment** | Triggers the campaign only when the user is in a specific segment. Select your preferred segment in the Select segment box.<br/>[OR]<br/>To enable it for all users, select *All users*.
**Select start date and time** | Choose the date and time when you want to run the campaign.

***

## Condition to trigger flow campaign

This section helps you set the qualifying condition for users to enter a specific step of the flow. You can choose the target audience based on their user property values, current segments, event occurrence, or opt-in status.

<center><img src="https://i.imgur.com/FSaF7NN.png" width="60%"/></center>


### User property check 
Checks if the user property matches a specific value. You can validate the value using the operators `is`, `isn't`, `contains`, or `doesn't contain`.

<center><img src="https://i.imgur.com/FTZZu9W.png" width="60%"/></center>

### Is in segment check 
Checks if the user is in a specific segment.

<center><img src="https://i.imgur.com/86MrZhE.png" width="60%"/></center>

### Has done event check
Checks if a specific event has occurred to the user. 

<center><img src="https://i.imgur.com/qAT2pKH.png" width="60%"/></center>

### Opt in check 
Checks if the user has opted in for notifications of a specific channel.

<center><img src="https://i.imgur.com/glD5AoC.png" width="60%"/></center>

***

## Flow control

This section allows you to control the movement of the user within a flow. You can choose to wait for a specific duration before proceeding to the next point of the flow or end the flow if there are no further flows.

<center><img src="https://i.imgur.com/sHqUUZF.png" width="60%"/></center>


### Wait until a specific timestamp

This allows you to set a future timestamp (date and time) for which the user has to wait at a specific point in the flow before proceeding to the next action.

1. Drag-and-drop **Wait until a timestamp** to the preferred step of the flow.

<center><img src="https://i.imgur.com/5VWceBf.png" width="60%"/></center>

2. Click on the calendar box and select your preferred date and time. To set the current date and time, click **Now**.
3. Click **Ok** to save.

### Wait for this duration

This allows you to define a relative duration during which the user must wait at a specific point in the flow before proceeding to the next action. You can set the duration either in  days, hours, or minutes.

1. Drag-and-drop **Wait until this duration** to the desired step of the flow.

<center><img src="https://i.imgur.com/SLRRaCa.png" width="60%"/></center>

2. Choose your preferred duration in **Days**, **Hours**, or **Minutes**. For example, setting 12 days, takes the next action configured in the flow after this duration. 


### End flow

Drag-and-drop **End flow** to the last step of your flow. However, this step is optional and signifies the completion of the flow.

* Drag-and-drop **End flow** to the end of the flow.

<center><img src="https://i.imgur.com/6wFfp5M.png" width="50%"/></center>

***

## Message (Conversations)

This category lets you configure conversations across different channels. You can also configure different actions based on the message delivery status. For example, after sending a WhatsApp notification to announce a new product launch, you can nudge users who have read the notification by sending a discount coupon after 24 hours. Increase user engagement and ROI by sending out different messages when the user reads the message and clicks on the CTA used in the message template.

### Prerequisites

Before adding channels to a flow, ensure the following:

1. The senderID/channel is configured.
2. A template is available for that channel.


### Channels configuration

Use this to send a WhatsApp notification. You can set when to proceed to the next step of the flow using **Add wait upto** - Immediately, Duration, or Timestamp.

<center><img src="https://i.imgur.com/PruprxG.png" width="30%"/></center>

* **Immediately**: Proceed to the next step of the flow immediately after sending the message.
* **Duration**: Proceed to the next step after a specific number of days, hours, or minutes from the message sent time. 
* **Timestamp**: Proceed to the next step on a specific date and time.

#### 1. WhatsApp channel configuration

1. In **From**, choose the sender's number.
2. In **To**, choose the variable that contains the WhatsApp number of the user.

<center><img src="https://i.imgur.com/a2DsA8x.png" width="50%"/></center>

3. In **Templates**, you can select from the following options:

   * **AI generated**: Choose this option to generate templates dynamically using advanced AI technology. You can configure all the necessary options, including *Include emoji, Include quick reply buttons*, and *Consider brand guidelines*.

   
   <center><img src="https://i.imgur.com/VWPy22v.png" width="50%"/></center>

   * **Existing templates**: Select this option to choose from manually created templates and choose your preferred **Template**. You can also see the preview of each template using the eye icon. You need to Map template variables to properties.

   <center><img src="https://i.imgur.com/7zgzxbP.png" width="70%"/></center>

   #### Map template variables to user or event properties

   If there are variables in the template, you will see an option to map those variables to user or event properties. To map:

   a. Click on the specific Map variable option you want to configure.

   <img src="https://i.imgur.com/pWwPkw6.png"/>

   b. To map a user property, select **User property** and choose the desired property from the dropdown.

   <img src="https://i.imgur.com/AwgdgKB.png" width="50%"/>

   c. To map an event property, select **Event property**, and enter the relevant event variable.

   <img src="https://i.imgur.com/Pg1iZFA.png" width="50%"/>

   d. To map a static text, select **Static text** and enter the text that you want to replace with for the variable.

   <img src="https://i.imgur.com/QpwCHL0.png" width="50%"/>


4. If your template includes media content, you can add it in the **Template media** section.

   * In **Template media**, select *Dynamic* to send personalized media to each user, and choose the dynamic variable that contains the media file.

   <center><img src="https://i.imgur.com/GEh50DO.png" width="50%"/></center>

   * Select *Static* to send a single media file for all users. Upload the static file using the **+Upload** option.

    <center><img src="https://i.imgur.com/oAvPu7k.png" width="50%"/></center>


5. Enable **During workflow business hours** to send the message only during business hours.

#### 2. SMS channel configuration

1. In **From**, choose the sender's number.
2. In **To**, choose the variable that contains the mobile number of the user.

<center><img src="https://i.imgur.com/RdJwTtk.png" width="50%"/></center>

3. In **Templates**, choose the SMS template that you want to use.
4. In **Template variables**, map each variable in the template with user properties, event properties, or static text. For more information, see [Map variables to user or event properties](#map-template-variables-to-user-or-event-properties-1).

<center><img src="https://i.imgur.com/QvVZwi4.png" width="50%"/></center>

5. Enable **During workflow business hours** to send the message only during business hours.

#### 3. Email channel configuration

1. In **From**, choose the sender's number.
2. In **To**, choose the variable that contains the email address of the user.

<center><img src="https://i.imgur.com/ykOxSYJ.png" width="50%"/></center>

4. In **CC**,  add the email addresses to which you want to send a copy of the email. Recipients in the CC field are visible to all the recipients of the email.
5. In **BCC**, add other email addresses to which you want to send the email copy.  Recipients in the BCC field won't be visible to anyone else.
6. In **Templates**, choose the email template that you want to use for sending the message.
7. If there are variables in the template, you will see an option to map those variables to user or event properties. <br/>In **Template variables**, associate each variable with a user or event property as explained [here](#map-template-variables-to-user-or-event-properties-1).
7. Enable **During workflow business hours** to send the message only during business hours.


#### 4. GBM channel configuration

1. In **Template**, choose the GBM template that you want to use for the notification. To know how to create a template, see [GBM template](/docs/platform_concepts/engagement/outbound/templates/gbm-template).

  <center><img src="https://i.imgur.com/YXtLI03.png" width="50%"/></center>

2.  If there are variables in the template, you will see an option to map those variables to user or event properties. <br/>In **Template variables**, associate each variable with a user or event property as explained [here](#map-template-variables-to-user-or-event-properties-1).
3. If your template includes media content, you can add it in the **Template media** section. [Know more about](#add-media-content-in-your-template---static-or-dynamic)



#### 5. Push notification channel configuration

*  In **Template**, choose the push notification template that you want to use for the notification.

  <center><img src="https://i.imgur.com/HAv4z3J.png" width="50%"/></center>

#### 6. Line channel configuration

1. In **Template**, choose the Line template that you want to use for the notification. To know how to create a template, see [Line template](/docs/platform_concepts/engagement/outbound/templates/linetemplate).

   <center><img src="https://i.imgur.com/cqSqHJ9.png" width="50%"/></center>

2.  If there are variables in the template, you will see an option to map those variables to user or event properties. <br/>In **Template variables**, associate each variable with a user or event property as explained [here](#map-template-variables-to-user-or-event-properties-1).

3. If your template includes media content, you can add it in the **Template media** section. [Know more about](#add-media-content-in-your-template---static-or-dynamic)


#### 7. Voice call channel configuration

1. Check **Enable answering machine detection (AMD)** to automatically identify answering machines.
2. In **Bot flow**, choose the welcome flow to be triggered (Studio) for the current channel.
3. In **From**, choose the IVR number(s) through which the voice call is made. When multiple IVRs are added, calls are made from any of those numbers randomly.
4. In **To**, choose the variable that contains the user identifier.

<center><img src="https://i.imgur.com/lBvitpz.png" width="50%"/></center>

:::note
For a detailed help doc on how to create an outbound campaign via Voice channel, see [this article](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/OBcampaign/setupOBC).
:::

### Map template variables to user or event properties

When using templates that contain variables, you can map those variables to user or event properties, or you can choose a static text replacement for a variable. This gives you control over how you customize your template content.

To map template variables:

1. Click on the specific Map variable option you want to configure.

   <img src="https://i.imgur.com/pWwPkw6.png"/>

2. To map a user property, select **User property** and choose the desired property from the dropdown. For URLs, you can just append the user property to the configured URL.

   <img src="https://i.imgur.com/AwgdgKB.png" width="50%"/>

3. To map an event property, select **Event property**, and enter the relevant event variable (key name). For URLs, you can just append the event property.

   <img src="https://i.imgur.com/Pg1iZFA.png" width="50%"/>

4. To map a static text, select **Static text** and enter the text that you want to replace with for the variable.

   <img src="https://i.imgur.com/QpwCHL0.png" width="50%"/>

### Add media content in your template - Static or Dynamic

If your template includes media content, you can customize how this media is sent to users based on the template type. In the "Template Media" section:

In the **Template media** section:

* Select *Dynamic* to send personalized media to each user, and choose the dynamic variable that contains the media file.

   <center><img src="https://i.imgur.com/GEh50DO.png" width="50%"/></center>

* Select *Static* to send a single media file for all users. Upload the static file using the **+Upload** option or paste the URL of the media file.

    <center><img src="https://i.imgur.com/oAvPu7k.png" width="50%"/></center>



### Define flows based on delivery statuses

This helps you to automate campaign triggers based on the delivery status of your messages to achieve more effective marketing outcomes. You can also have customizable wait times. If users don't take action within the specified period, trigger follow-up actions like reminders. This can maximize engagement and campaign effectiveness.

<center>
<img src="https://i.imgur.com/QNZQ4GA.png" width="50%"/></center>


The following table provides the delivery statuses supported for different channels:

<center>
<img src="https://i.imgur.com/XW0qyTI.png" width="30%"/></center>

Channel | Supported statuses
---------- | ---------------
WhatsApp/Email/ Google Business Message | Delivered, Not delivered, Read, Replied, and Button clicked.
Push notification | Delivered, Not delivered, Clicked, and Impression.
SMS | Delivered, and Not delivered.
Voice | Answered, Not answered, Busy, and Failed to connect.

The following table provides the different wait time supported:

<center>
 <img src="https://i.imgur.com/NBm6d4w.png" width="30%"/></center>

Wait time | Description
--------- | -----------
Immediately | Select this option to trigger the next action in the flow or launch a campaign instantly without any delay when a specific delivery status is identified. 
Duration | Choose this option to set a custom time duration before triggering the next action or campaign. For example, you can wait for 1 hour, 1 day, or any other specified time frame to allow users to interact with the message before proceeding with the campaign.
Timestamp | Choose this option to set a specific date and time for the next action or campaign to be triggered.


#### Use cases:

Below are some examples that illustrate how to effectively use the feature:

* **Delivery Status: Delivered**:<br/>Use Case: After a promotional message is delivered, wait for 24 hours to see if the message is read by any of the recipients. If the user does not read the message during this time, send a reminder to prompt their attention and increase the chances of interaction.

* **Delivery Status: Read**:<br/>
   Use Case: After a message is read by a user, wait for 24 hours to see if the user interacts with the message using the call-to-action (CTA). If the user does not take any action, even after the 24-hour period, send an automatic reminder to re-engage them with the content and encourage them to respond to the CTA.

* **Delivery Status: Replied**:<br/>
   Use Case: After a user clicks on a button in the message, wait for 12 hours to see if they complete the desired action, such as signing up for an event or making a purchase. If the action is not completed, send a follow-up message with more information or a special discount to entice them to complete the action.

* **Delivery Status: Button Clicked**: <br/>
   Use Case: If a user clicks on a survey link but does not complete the survey, wait for 48 hours to see if they return to complete it. If no response is received, send a gentle reminder with a shortened survey or an incentive to increase survey completion rates.




*** 

## Action

This section helps you configure other actions in the campaign's flow, such as adding users to segments and making API calls.

### API call

Use this to call any internal or external API in between flows. For more information about APIs, see [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api).

### Update user property

During Flow campaign interactions, you can update user properties. This includes user details such as subscription status, preferences, or gather other relevant information. This enables you to create highly personalized experiences for each user, enhancing user engagement and enriching your user data for better insights and decision-making.

:::note

You can only update custom user properties and the tags property. However, modifying standard user properties, which are available by default, is restricted to avoid any unintended changes that might impact the user experience in a Flow campaign. 
:::

To update a user property in a flow campaign:

1. In **Action**, select **Update user property** and drag it to the desired position in the flow.

  <center> <img src="https://i.imgur.com/FUujXCR.png" width="70%"/></center>

2. In **Property name**, choose the custom property that you want to update.
3. In **New value**, enter a new value that you want to assign to the selected property.
4. For a **Date** property, you will see two options:

   * Select **Real-time value** to set the date when the user reaches the step in the Flow campaign.
   * Select **Custom** to set a static date of your preference.
 
 <center><img src="https://i.imgur.com/YxsLQAe.png" width="60%"/></center>

***

## Add goal

A goal is an activity that a user performs after receiving the campaign message. You can also set the objective of a flow campaign. Once a user achieves a goal, the flow automatically exits the user from the campaign. 

To add a goal:

1. In the campaign flow builder, click **Add new goal to flow**.

   <center><img src="https://i.imgur.com/jp1Clr2.png" width="40%"/></center>

2. In **Name**, enter a name for the goal.
3. In **Event**, choose the event that you want to associate with the goal. See [how to add events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-event).
4. In **Goal validity**, set the validity of the goal using any of the following:

   i. Choose *Duration* to set the validity of the goal in Hours, Days or Weeks and enter your preferred value in the respective text box.
   
   ii. Choose a *Timestamp* to end the validity on a specific date and time. Select your preferred date and time using the calendar box.

