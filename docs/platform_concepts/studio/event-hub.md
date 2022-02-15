---
title: Events Hub
sidebar_label: Events Hub
---

Event is general programming term which is used to describe an occurance recognised by the bot (mostly asynchronous). When your bot is operational, it generates various events which can be used to trigger a journey or automation workflow. Event hub and all is about handling those occurances to do something
For example, popup closed is an event, you can handle it by maybe sending another message in the journey

Here is a list of events along with description on when a specific event is generated.

## Type of Events
### Widget
| Event                         | Description                                              |
|----------------------------|-----------------------------------------------------------------------------------------------------|
| bot-opened                 | For website bot when someone clicks on the chat bubble to open the bot/ for PWA when the bot loads. |
| bot-closed                 | This event is when some closes the bot on website.                                                  |
| bot-loaded-on-page-reload  | When the refresh context is false, the bot will receive events as soon as the page reloads.         |
| ym_home                    | When someone clicks the home button.                                                                |
| ym_closed_promotion        | When the user closed the promotion in the bot.                                                      |
| electron-notification-data | For electron app, whenever a notification is sent in the bot.                                       |
| page-url-based-trigger     | When the URL is matched with the loading page URL, specific journey gets triggered.                 |

### Inbox

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

### Engagement
| Event                         | Description                                              |
|-------------------------------|----------------------------------------------------------|
| quick_reply_event             | Receive WhatsApp Quick Reply Template related events     |
| campaign-notification-updates | Receive Notification API delivery updates to the bot     |
| whatsapp-referral             | Receive Click to WhatsApp(CTWA) referral property events |
| fb-ad-referral                | Receive facebook ad referral property events             |


### Custom Event
| Event                            | Description                                     |
|----------------------------------|-------------------------------------------------|
| send-delayed-message-for-session | To transfer to agent after 5 mins of inactivity |

## Activate an Event

1. Headover to Studio > Events Hub and enable the event you want to use.

![](https://i.imgur.com/9htNdNg.png)

2. Open a journey and under the `Start Trigger` configuration, select `Event` from the dropdown menu. Under `Select` field find the event you've enabled before and select it.

![](https://i.imgur.com/3bk5S0j.png) 