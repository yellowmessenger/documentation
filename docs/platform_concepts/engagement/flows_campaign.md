---
sidebar_label: Flow campaign
title: Flow campaign
---

Yellow.ai's Flow campaign is a conversational marketing tool with an advanced campaign building tool. It helps marketers deliver a comprehensive customer experience across different channels and engage customers at every stage of their journey. 


A Flow campaign consists of user journeys which you can utilise to strategically target customers across various channels. You can quickly develop flows using the no-code builder in accordance to your business needs. This also allows tracking customer activities across platforms, and you can further analyse the data to make decisions. 

  
#### Use case

This sample use case shows how to effectively engage users by nudging them at different stages in a flow using the Flow campaign.

Consider a cart abandonment example in an e-commerce store.

1. Send a reminder message through a Push notification to proceed with the purchase after one day.
2. For users who have read the push notification, send an exclusive 10% off coupon on WhatsApp.
3. If the user has not responded to the message, resend the coupon over WhatsApp after 48 hours.
4. Wait a couple more days and end the flow.
 
 
The campaign flow builder consists of five categories of nodes:

* Entry point
* Condition
* Flow control
* Message 
* Action

See how to configure each node in the following sections.

## Create flow 

To create a flow, follow these steps:
1. In Engage, go to **Outbound**.


2. In the **Flows** tab, click **Create workflow**.
  
  ![](https://i.imgur.com/qjajBeX.png)


3. Click on the Edit icon of the Untitled workflow (the default name) and enter the campaign name.

   ![](https://i.imgur.com/gxQL2E5.png)
   
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

Option | Description
------ | -----------
Campaign triggers when user | Choose the event for which the user qualifies to enter the flow. Learn more about [how to activate events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#1-activatedeactivate-event) and [how to add custom events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-event).
After event, campaign triggers | Choose when to trigger the flow. <ul><li>Choose *Immediately* to trigger the campaign after the event has occurred.</li> <li>Choose *At a specific time* to trigger the campaign on a future date and time. </li><li>Choose *After a delay* to trigger the campaign after a specific number of hours, days, or weeks from the event occured time.</li></ul>

   <center><img src="https://i.imgur.com/SdcMiVJ.png" width="50%"/></center>
   
4. In **Target audience**, **select one or more segments** to choose specific [user segments](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview) for the current campaign; select **All users** to include all your [User 360 users](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/viewuser).

<center><img src="https://i.imgur.com/CEreQxC.png" width="50%"/></center>


### User entered a segment

Select this to trigger the flow when a user enters a segment.

To trigger the campaign when a user enters a segment, on the flow builder screen, click on the **User enters segment** node.

<center><img src="https://i.imgur.com/NuiRCDg.png" width="50%"/></center>

Option | Description
--------- | --------
User entered segment | Triggers the campaign when the user enters a specific segment. Select your preferred segment in the respective box.
After entering segment, campaign triggers | Once a user enters the segment, choose when to schedule the campaign - Immediately, At a specific time, or After a delay.
Frequency & duration | Set the campaign's frequency and duration.
Run this campaign | Choose whether to run the campaign only *Once per user* or *Every time event happens*.
Start / End | Choose the duration of the campaign using the calendar boxes. It should be a future duration.
Target audience | *Select one or more segments* to make the campaign applicable to users in specific segments. Select your preferred segments in the Select segments box.<br/>[OR]<br/>Select *All users* to make the campaign applicable to all users.

### User exited a segment 
Select this to trigger the flow when a user exits a segment.

To trigger the campaign when a user exits a segment, on the flow builder screen, click on the **User exited segment** node.

<center><img src="https://i.imgur.com/b8lQP7O.png" width="60%"/></center>

Option | Description
--------- | --------
User exited a segment | Triggers the campaign when the user exits a specific segment. Select the segment in the respective box.
After exiting segment, campaign triggers | Once a user exits the segment, choose when to schedule the campaign - Immediately, At a specific time, or After a delay.
Campaign frequency & duration | Set the campaign frequency and duration.
Run this campaign | Choose whether to run the campaign only *Once per user* or *Every time event happens* (every time a user exits a segment).
Start / End | Choose the duration of the campaign using the calendar boxes.
Target audience | *Select one or more segments* to make the campaign applicable to users in specific segments. Select your preferred segments in the Select segments box.<br/>[OR]<br/>Select *All users* to make the. campaign applicable to all users.




### User present in a segment 
Select this to trigger the flow when a user is in a particular segment.

<center><img src="https://i.imgur.com/Uu1Nvu3.png" width="60%"/></center>

Option | Description
-------- | ---------
User segment | Triggers the campaign only when the user is in a specific segment. Select your preferred segment in the Select segment box.<br/>[OR]<br/>To enable it for all users, select *All users*.
Select start date and time | Choose the date and time when you want to run the campaign.



## Define the condition to trigger flow

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

This allows you to set a relative duration (in days, hours, or minutes) for which the user has to wait at a specific point of the flow before proceeding to the next action.

1. Drag-and-drop **Wait until this duration** to the desired step of the flow.

<center><img src="https://i.imgur.com/SLRRaCa.png" width="60%"/></center>

2. In **Days**, **Hours**, and **Minutes**, enter your preferred duration. For example, setting 12 days, 23 hours, and 34 minutes, takes the next action configured in the flow after this duration. 


### End flow

This allows you to end the flow. Use this in the last step of the flow.

* Drag-and-drop **End flow** to the end of the flow.

<center><img src="https://i.imgur.com/6wFfp5M.png" width="50%"/></center>

## Message (Start conversation)

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

#### WhatsApp channel configuration

1. In **From**, choose the sender's number.
2. In **To**, choose the variable that contains the WhatsApp number of the user.

<center><img src="https://i.imgur.com/IFiqgEH.png" width="50%"/></center>

3. In **Templates**, choose the WhatsApp template that you want to use for the conversation.
4. In **Template media** 

   * Select *Default* to send personalized media to each user, and choose the variable that contains the media file in the relevant box.

   <center><img src="https://i.imgur.com/VgKrGTI.png" width="50%"/></center>

   * Select *Static* to send a single media file for all users. Upload the static file using the **+Upload** option.

    <center><img src="https://i.imgur.com/8sl6gwl.png" width="50%"/></center>

5. To use AI recommended template (uses GPT-3 APIs), enable **Generate AI suggested templates** and configure the following:
 
 <center><img src="https://i.imgur.com/0kXTCsp.png" width="50%"/></center>
 
   i. In **User segment**, choose the user segment that you want to target.
   
   ii. In **Campaign goal**, choose the objective of the campaign.
   
   iii. Click **Generate**. An AI based template will be added automatically.
   
   iv. To customise the message and personalise the message using user properties, click on the message.
   
   <center><img src="https://i.imgur.com/v3TELtL.png" width="50%"/></center>

   v. Enter the template name, choose the language, customise the message as required, and click **Create template**. 
   
   ![](https://i.imgur.com/dVV4Evg.png)

6. Enable **During workflow business hours** to send the message only during business hours.

#### SMS channel configuration

1. In **From**, choose the sender's number.
2. In **To**, choose the variable that contains the mobile number of the user.

<center><img src="https://i.imgur.com/RdJwTtk.png" width="50%"/></center>

3. In **Templates**, choose the SMS template that you want to use.
4. In **Template variables**, map each variable with user properties or static text.

<center><img src="https://i.imgur.com/QvVZwi4.png" width="50%"/></center>

5. Enable **During workflow business hours** to send the message only during business hours.

#### Email channel configuration

1. In **From**, choose the sender's number.
2. In **To**, choose the variable that contains the email address of the user.

<center><img src="https://i.imgur.com/ykOxSYJ.png" width="50%"/></center>

4. In **CC**,  add the email addresses to which you want to send a copy of the email. Recipients in the CC field are visible to all the recipients of the email.
5.  In **BCC**, add other email addresses to which you want to send the email copy.  Recipients in the BCC field won't be visible to anyone else.
6.  In **Templates**, choose the email template that you want to use for sending the message.
7. Enable **During workflow business hours** to send the message only during business hours.

#### Push notification channel configuration

*  In **Template**, choose the push notification template that you want to use for the notification.

  <center><img src="https://i.imgur.com/HAv4z3J.png" width="50%"/></center>

#### Google business messages channel configuration

*  In **Template**, choose the GBM template that you want to use for the notification.

   <center><img src="https://i.imgur.com/cqSqHJ9.png" width="50%"/></center>

#### Voice call channel configuration

1.  Check **Enable answering machine detection (AMD)** to automatically identify answering machines.
2.  In **Bot flow**, choose the welcome flow to be triggered (Studio) for the current channel.
3. In **From**, choose the IVR number(s) through which the voice call is made. When multiple IVRs are added, calls are made from any of those numbers randomly. 
4. In **To**, choose the variable that contains the user identifier.

 <center><img src="https://i.imgur.com/lBvitpz.png" width="50%"/></center>

### Define flows based on delivery statuses
You can also perform different actions based on different delivery statuses. For example, if the message is not delivered, send an email. If the user opens the message, send an exclusive discount coupon over WhatsApp.
<center>
<img src="https://i.imgur.com/QNZQ4GA.png" width="50%"/></center>


The following table provides the delivery statuses supported for different channels.

Channel | Supported statuses
---------- | ---------------
WhatsApp/Email/ Google Business Message | Delivered, Not delivered, Read, Replied, and Button clicked.
Push notification | Delivered, Not delivered, Clicked, and Impression.
SMS | Delivered, and Not delivered.
Voice | Answered, Not answered, Busy, and Failed to connect.

## Action

This section helps you configure other actions in the campaign's flow, such as adding users to segments and making API calls.

### API call

Use this to call any internal or external API in between flows. For more information about APIs, see [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api).



## Add goal

A goal is an activity that a user performs after receiving the campaign message. You can also set the objective of a flow campaign. Once a user achieves a goal, the flow automatically exits the user from the campaign. 

To add a goal:

1. In the campaign flow builder, click **Add new goal to flow**.

   <center><img src="https://i.imgur.com/jp1Clr2.png" width="40%"/></center>

2. In Name, enter a name for the goal.
3. In **Event**, choose the event that you want to associate with the goal. See [how to add events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-event).
4. In **Goal validity**, set the validity of the goal using any of the following:

   i. Choose *Duration* to set the validity of the goal in Hours, Days or Weeks and enter your preferred value in the respective text box.
   
   ii. Choose a *Timestamp* to end the validity on a specific date and time. Select your preferred date and time using the calendar box.