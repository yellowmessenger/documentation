---
title: Events Hub
sidebar_label: Events Hub
---



Event is general programming term which is used to describe an occurance recognised by the bot (mostly asynchronous). When your bot is operational, it generates various events which can be used to trigger a journey or automation workflow. Event hub is for handling those occurances to do something.
For example, popup closed is an event, you can handle it by maybe sending another message in the journey.

Types of events are listed below: 

1. [Widget](#wid-1)
2. [Inbox](#inb-1)
3. [Engagement](#eng-1) 
4. [Integrations](#int-1) 
5. [User inactivity events](#uie-1) 
6. [Schedule events](#sch-1) 
7. [Custom events](#cust-1) 

Description of each event is as follows: 

## Type of Events

### <a name="wid-1"></a> 1. Widget

> Activate/ Deactivate any of the event by clicking the menu by the right. 
> 
> ![](https://i.imgur.com/x4eGpZG.png)



| Event                         | Description                                              |
|----------------------------|-----------------------------------------------------------------------------------------------------|
| bot-opened                 | For website bot when someone clicks on the chat bubble to open the bot/ for PWA when the bot loads. |
| bot-closed                 | This event is when some closes the bot on website.                                                  |
| bot-loaded-on-page-reload  | When the refresh context is false, the bot will receive events as soon as the page reloads.         |
| ym_home                    | When someone clicks the home button.                                                                |
| ym_closed_promotion        | When the user closed the promotion in the bot.                                                      |
| electron-notification-data | For electron app, whenever a notification is sent in the bot.                                       |
| page-url-based-trigger     | When the URL is matched with the loading page URL, specific journey gets triggered.                 |

### <a name="inb-1"></a> 2. Inbox

> Activate/ Deactivate any of the event by clicking the menu by the right. 
> 
> ![](https://i.imgur.com/x4eGpZG.png)

| Event                         | Description                                              |
|-----------------------------------------------|-----------------------------------------------------------------------------------|
| offline-ticketing-disabled                    | ticket tried to go to open state but offline ticketing disabled                   |
| offline-ticketing-not-configured-for-group    | ticket tried to go to open state but offline ticketing config not there for group |
| offline-ticket-limit-reached                  | open ticket limit reached                                                         |
| offline-disabled-group-absent                 | no group given (i.e. default) and offline not enabled                             |
| offline-ticketing-disabled-for-group          | group given and offline ticketing not enabled for group                           |
| no-agents-online                              | no agents online                                                                  |
| all-agents-busy                               | all online agents are busy, and online agents > 0                                 |
| ticket-queue-state-only-inside-working-hours  | ticket tried to go to queue but not in working hours                              |
| ticket-assign-state-only-inside-working-hours | ticket tried to go to assign but not in working hours                             |
| default-queue-disabled                        | default queue config disabled                                                     |
| group-queue-not-configured                    | specific group queue config not allowed                                           |
| group-queue-limit-reached                     | max queue limit for group reached                                                 |
| ticket-open-state-only-outside-working-hours  | ticket tried to go to open but it's inside working hours                          |
| agent-reply                                   | Triggered when an agent replies                                                   |
| assigned-from-queue                           | Triggered when a conversation is assigned to an agent from the queue              |
| custom-field-update                           | Triggered when the agent updates a custom field                                   |
| note-update                                   | When ticket note is updated by agent                                              |
| ticket-assigned-UI                            | When a ticket is created from the bot messages from Inbox                         |
| ticket-inactive                               | When the ticket is marked as inactive                                             |
| ticket-queue-to-open                          | When a ticket is moved from queued to the open state                              |

### <a name="eng-1"></a> 3. Engagement

> Activate/ Deactivate any of the event by clicking the menu by the right. 
> 
> ![](https://i.imgur.com/x4eGpZG.png)

| Event                         | Description                                              |
|-------------------------------|----------------------------------------------------------|
| quick_reply_event             | Receive WhatsApp Quick Reply Template related events     |
| campaign-notification-updates | Receive Notification API delivery updates to the bot     |
| whatsapp-referral             | Receive Click to WhatsApp(CTWA) referral property events |
| fb-ad-referral                | Receive facebook ad referral property events             |

### <a name="int-1"></a> 4. Integration 

These events are populated based on the integrations selected. 

### <a name="uie-1"></a> 5. User inactivity events

On this tab, you can create events that handle situations when no sign of input is received from the user after a specified period of time.

### 6. <a name="sch-1"></a> Schedule events

Schedule events can be used to create events that define the time at which specific workflows of your choice must be triggered.

* Open Events> Schedule events. 
* Click **+Add event**. 
* Create new event by adding a **Name** and **Description**. 

![](https://i.imgur.com/7IDoJFa.png)

* **Execute Event**

    * **Once**: Select if the event must be created to be run once at a particular date-time and timezone. 

![](https://i.imgur.com/yFdMiBq.png)

* **Recurring**: Select if the event is recurring, Hourly, Daily, Weekly, Monthly. Select Minutes/ Time/ Date/ Day, **Timezone**, and the **End date** (when the recurring events must end). 

![](https://i.imgur.com/jah6j2F.png)


* **Advanced**: Advanced is the combination of both the options above. 



### <a name="cust-1"></a> 7. Custom Event

* Customized events can be added as per the requirement, click **+Add Event**. 
* Add **Event name** and **Description**. 

![](https://i.imgur.com/imArzhX.png)

> Activate/ Deactivate/ Delete any of the event by clicking the menu by the right. 
> 
> ![](https://i.imgur.com/tht7i8m.png)



| Event                            | Description                                     |
|----------------------------------|-------------------------------------------------|
| send-delayed-message-for-session | To transfer to agent after 5 mins of inactivity |

## Activate an Event

1. Open Studio > Events Hub. 
2. Enable the event you want to use.

![](https://i.imgur.com/9htNdNg.png)

3. Open a journey.  Under the `Start Trigger` configuration, select `Event` from the dropdown menu. Under `Select` field find the event you've enabled before and select it.

![](https://i.imgur.com/3bk5S0j.png) 