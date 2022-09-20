---
title: Events
sidebar_label: Event
---



Event is general programming term which is used to describe an occurrence recognised by the bot (mostly asynchronous). When your bot is operational, it generates various events which can be used to trigger a journey or automation workflow. Event helps you handle those occurrences and perform some tasks.
For example, popup closed is an event, you can handle it by sending another message in the journey.

In this article, you will learn -
1. [How to activate or deactivate an event](#activatedeactivate-an-event)
2. [About different types of events](#type-of-events) 

   a. [Widget related events](#wid-1)

   b. [Inbox related events](#inb-1)

   c. [Engage related events](#eng-1) 

   d. [Integration events](#int-1) 

   e. [User inactivity events](#uie-1) 

   f. [Schedule events](#sch-1) 

   g. [Custom events](#cust-1) 


## Activate/deactivate event

1. On the **Event** page, navigate to the category in which you want to activate or deactivate an event. 
2. Click on the inactive event that you want to activate.
3. Click the more options icon, <img src="https://i.imgur.com/VTnjRYM.png" width="10"/> > **Activate**.

   ![](https://i.imgur.com/eMEfIG1.png)


4. To use an active event in a flow, in the **Start** node, select *Event* from the first drop-down and select the event that you have enabled.

![](https://i.imgur.com/JwRfFpM.png)

:::note

Similarly, you can deactivate an active event.
![](https://i.imgur.com/tPm5oKy.png)
:::




## Type of Events

### <a name="wid-1"></a> 1. Widget related events

| Event | Description |
|--------|---------------|
| bot-opened | On a website:  when someone clicks on the chat bubble to open the bot.<br/>For PWA: It is when the bot loads. |
| bot-closed | When the user closes the bot on a website. |
| bot-loaded-on-page-reload | When the current bot page is reloaded. |
| ym_home | When someone clicks the home button. |
| ym_closed_promotion | When the user closed the promotion in the bot. |
| page-url-based-trigger | To trigger a specific flow, when the URL matches with the loading page URL. |


### <a name="inb-1"></a> 2. Inbox related events


| Event | Description |
|---------|--------------|
| offline-ticketing-disabled | ticket tried to go to open state but offline ticketing disabled |
| offline-ticketing-not-configured-for-group | ticket tried to go to open state but offline ticketing config not there for group |
| offline-ticket-limit-reached | open ticket limit reached |
| offline-disabled-group-absent | no group given (i.e. default) and offline not enabled |
| offline-ticketing-disabled-for-group | group given and offline ticketing not enabled for group |
| no-agents-online | When there are no agents online |
| all-agents-busy | When there is atleast one online agent and all are busy  |
| ticket-queue-state-only-inside-working-hours | ticket tried to go to queue but not in working hours |
| ticket-assign-state-only-inside-working-hours | ticket tried to go to assign but not in working hours |
| default-queue-disabled | default queue config disabled |
| group-queue-not-configured | specific group queue config not allowed |
| group-queue-limit-reached | max queue limit for group reached |
| ticket-open-state-only-outside-working-hours | ticket tried to go to open but it's inside working hours |
| agent-reply | When an agent replies to the user |
| assigned-from-queue | When a conversation is assigned to an agent from the queue |
| custom-field-update | When the agent updates a custom field |
| note-update | When ticket note is updated by agent |
| ticket-assigned-UI | When a ticket is created from the bot messages from Inbox |
| ticket-inactive | When a ticket is marked as inactive |
| ticket-queue-to-open | When a ticket is moved from queued to open state |                            |

### <a name="eng-1"></a> 3. Engage related events



| Event                         | Description                                              |
|-------------------------------|----------------------------------------------------------|
| quick_reply_event             | Receive WhatsApp Quick Reply Template related events     |
| campaign-notification-updates | Receive Notification API delivery updates to the bot     |
| whatsapp-referral             | Receive Click to WhatsApp(CTWA) referral property events |
| fb-ad-referral                | Receive facebook ad referral property events             |

### <a name="int-1"></a> 4. Integration related events

The integration related events depend completely on the events the respective third-party app supports. Hence, the list of supported events might vary for each integration. 

### <a name="uie-1"></a> 5. User inactivity events



Sometimes, when a user is asked for an input, we might not get a response and would like to nudge them to share a response, otherwise the bot flow cannot move forward.

> Example: You have asked user for their email address and they have not shared it. You would like to ask the user if they're still available by their device or have they dropped off.

On the *User inactivity* tab, you can create events that handle situations when no sign of input is received from the user after a specified period.

#### Use-cases

We treat a user as inactive when a user does not respond to a prompt such as -

* Please share your email-ID
* Please select one of the options (Quick reply/Whatsapp List)
* What is your name?

If there is no response to such a prompt, we can trigger the *Inactivity event*.

#### Handling inactivity

We can handle inactivity in different ways depending on the conversational design and tone in which the flow moves forward in. A few examples are -

* Sending a message asking whether the user is still active.
* Sending the above message followed by repeating the input requested for.
* Triggering a whole new flow for inactivity.


#### Handling inactivity in lead generation

This is a [lead generation template](https://cloud.yellow.ai/marketplace/d18654cb9537eeaf11c7511aff8f9bfe) that's available in the **Marketplace**![](https://i.imgur.com/RHprZir.png)

Take the following inputs from the user -
* Email-id
* Product of interest

Then, insert the data into a table considering as a lead. 

Here, we wouldn't want the user to drop off just because they haven't entered their email ID. So, if we see the user is inactive for more than 5 minutes, we can ask for his email ID once again through chat.

Event | Description
------ | -----------
send-delayed-message-for-session | To transfer to the agent after 5 mins of inactivity


#### Create inactivity event

All user inactivity events have to be created in the same way.

1. On the Studio page, go to **Event** > **User inactivty events**.
2. Click **Add event**.

![](https://i.imgur.com/bumxETE.png)


2. Click **Add event** and configure the event as explained in the following table.

<img src="https://i.imgur.com/qGY1t2n.png" width="300"/>

   Enter the event name and description. In **Event delay**, choose the inactive period (hours/minutes) and enter the value in the respective box. For example, if you set 5 minutes, a user is considered as inactive if the users does not respond to the prompt for five minutes.

   ![](https://i.imgur.com/wqZPD1E.png)


3. Handle event with message.
   There are three different ways to set up the bot response when a user is inactive -

   1. Set up a nudge as a message
   2. Set up the nudge followed by question they dropped off at.

   ![](https://i.imgur.com/Ko3xkH0.jpg)


<img src="https://i.imgur.com/erG3UqL.png" width="300"/>

4. Trigger a different flow to handle inactivity

![](https://i.imgur.com/BrzIHis.png)

5. Activate event for specific steps in a specific flow.
If you are observing consistent drop offs at a particular step, you can set up a unique event exclusively for that step.

> Example: Handle inactivity for email in a flow called 'moreinfo'.
> <img src="https://i.imgur.com/bf4My69.png" width="250"/>


This will trigger the event exclusively for the email step and won't be applicable globally.



:::note
If there are any specific use-cases around inactivity that you'd like to implement, post it in our [Community](https://community.yellow.ai/). Someone from the team will reach out to you.
:::


### 6. <a name="sch-1"></a> Schedule events

Use Schedule events to create events that define the time at which specific workflows of your choice need to be triggered.

To schedule events, follow these steps -

1. Go to **Events** > **Schedule events**. 
2. Click **+Add event**. 
3. Enter the **Event Name** and **Description**. 
<img src="https://i.imgur.com/rGu0zpy.png" width="300"/>

4. In **Execute Event**, select the frequency of schedule

    * **Once**: Select to run the event only once at a particular date and time. 
    <img src="https://i.imgur.com/xaz0Uaf.png" width="350"/>

    * **Recurring**: Select if the event is recurring, *Hourly*, *Daily*, *Weekly*, or *Monthly*. Set when to run according to the chosen options (Minutes/ Time/ Date/ Day). Choose your preferred **Timezone**, and the **End date** (when the recurring events must end) accordingly. 
    <img src="https://i.imgur.com/Dadx3wV.png" width="350"/>



   * **Advanced**: This gives you the flexibility to use corn expressions to handle complex cases. A cron expression is a string consisting of six or seven subexpressions (fields) that describe each information of the schedule.
   
   It is recommended to use the Advanced option only if your use case is complex which cannot be configured through Once or Recurring. Ensure that you are familiar with Cron expression to use it.
 
   [Know more about corn expressions with examples](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm)

   
:::note
By default, a scheduled event is in activate state. You can deactivate, edit, or delete the event by using the more options icon.
![](https://i.imgur.com/gAjgQEw.png)
:::

### <a name="cust-1"></a> 7. Custom Event

Besides the standard events that we have, you can also create custom events to capture your preferred activity.

To create a custom event

* In the **Event** tab, click **Custom events** > **+Add Event**. 
* Add **Event name** and **Description**. 

   <img src="https://i.imgur.com/N3hkCdN.png" width="300"/>


:::note
Once a custom event is created, you can activate, deactivate, edit or delete a custom event. 
:::



