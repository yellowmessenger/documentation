---
title: Descriptions of default table columns on data explorer 
sidebar_label : Default DB table descriptions 
---

## Knowledge base report table


| Field             | Description                                                   |
|-------------------|---------------------------------------------------------------|
| TIMESTAMP         | Time at which the query was made to the Language Model (LLM)  |
| ORIGINAL_QUERY    | Message typed out by the user  (Input)                                |
| CONV_HISTORY      | Previous user and bot messages before the user's message      |
| REPHRASED_QUERY   | True query considering context from conversational history   |
| DOCUMENT_TAGS     | Document tag values, if any, passed                            |
| WAS_SUMMARY_GIVEN | True or false value stating if the response was summarized    |
| ANSWER            | Copy of the answer provided by the bot to the asked query     |
| LINKS             | Copy of the web links provided by the bot                      |
| SITE_KEY          | Website domain based on which the answer was retrieved        |
| UID               | Unique user ID of the user having the conversation             |
| TRACE_ID          | Unique ID of the query for further analysis on search          |


----

## Bot events


| Events | Description |
| -------- | -------- |
|bot_loads     | Fired when a gets bot loaded on the platform    |
|datastore-bulk-upsert|Fired when Bulk insert or update operation is performed on the datastore|
|datastore-delete| Fired when a delete operation is performed on the datastore |
|datastore-failed-delete|Fired when a delete operation fails on the datastore|
|datastore-failed-dropdata| Fired when a drop data action fails on the datastore |
|datastore-failed-find|Fired when a find request is received on the datastore and the request fails|
|datastore-failed-insert|Fired when an insert operation is performed and it fails to insert into the datastore|
|datastore-failed-search|Fired when a search operation is performed on the datastore and it fails|
|datastore-failed-searchDocuments| Fired when a step of the journey is expected or a prompt is shown to the user|
|datastore-failed-update|Fired when the update operation is performed on the datastore and it fails|
|datastore-feedback| Fired when feedback is pushed into the datastore|
|datastore-find|Fired when a find operation is performed on the datastore|
|datastore-insert|Fired when an insert operation is performed on the datastore|
|datastore-search|Fired when a search operation is performed on the datastore|
|datastore-searchDocuments| Fired when a document search operation is performed on the datastore |
|datastore-update|Fired when an update operation is performed on the datastore|
|db_node_fallback|Fired when a notification is received to the mobile widget|
|email-sent|Fired when an email is sent|
|function-execution-time| Fired when a session is created based on a USER message|
|invocation|Fired when a new session is created from a user message for the WhatsApp channel|
|otp-sent|Fired when an OTP is sent|
|otp-verified|Fired when an OTP is verified|
|pdf-convert-api|Fired when a PDF convert API is being hit|
|redis-del |Fired when the delete operation is performed on the Redis memory|
|redis-get|Fired when data is fetched from the Redis memory|
|redis-set |Fired when write operation is performed on the Redis memory|
|synonyms|Fired when a synonym is detected|
|unknown-message |Fired when an unknown message is received|
|widget_loaded|Fired when a widget is loaded|

> Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#2-type-of-events) to learn about events. 

-----

## Platform user events

| Events | Description |
| -------- | -------- |
|unidentified-utterance|Fired when a user message is not understood by the Bot|
|agent-transfer|Fired when a chat conversation is transferred to a live agent|
|feedback|Fired when a user gives feedback after completing the chat|
|first-message|Fired when a new profile of a user is created|
|first-message-bid|Fired when a user profile is updated with the bid for the first time|
|home-button-click|Fired when a user clicks on the home button in the chat widget|
|journey-started|Fired when a journey starts for the user|
|journey-completed|Fired when a journey gets completed for the user|
|journey-switched|Fired when a journey is switched by NLP System for the user due to an utterance matching another journey|
|step-expected|Fired when a step of the journey is expected / prompt is shown to the user|
|step-recorded|Fired when input is given by the user for a step (step value is recorded) of a journey|
|user-visited|Fired when a user is visiting the chat widget for the first time (chatting for the first time)|
|user-revisited|Fired when a user is revisiting the chat widget (chatting again)|
|optin|Fired when a WhatsApp opt-in is added|
|optout|Fired when a WhatsApp opt-out is added|
|otp-sent|Fired when an OTP is sent from the bot using the platform function|
|otp-verified|Fired when an OTP verified from the bot using platform function|
|notification-received|Fired when notification received to the mobile widget|
|new-session|Fired when a new session is created|
|user-session|Fired when a session is created based on a user message|
|user-initiated|Fired when a new session is created from a user message for the WhatsApp channel|
|business-initiated|Fired when a new session is created by notification from the business side for the WhatsApp channel|

-------

## User engagement events table

Following are the fields tracked on the user engagement events table: 

| Field            | Description                                                                                                          |
|------------------|----------------------------------------------------------------------------------------------------------------------|
| TIMESTAMP        | The TIMESTAMP field represents time intervals in 30-minute slots within a 24-hour day. When an event occurs, its timestamp is rounded to the nearest 30-minute interval. The first occurrence creates a new row with the timestamp, and if the same event occurs again within the same 30-minute slot, the count column value for that timestamp is incremented by 1. This allows tracking the number of occurrences of the same event within each 30-minute interval. Subsequent occurrences in the same interval contribute to the count column value.
For example: Suppose an event occurs at 9:46, its timestamp would be 9:30, creating a new row. If the same event happens at 9:59, the count becomes 2 for the 9:30 timestamp. Another event at 10:13 creates a new row with a timestamp of 10:00. The count column tracks repeated occurrences within the same 30-minute slot. |
| BID              | Business Identifier, a unique identifier for the business associated with the event.                                  |
| CATEGORY         | An umbrella term for journeys; certain journeys can be grouped under this category.                                    |
| CITY             | Approximate city location identified by the platform.                                                                  |
| COUNTRY          | Approximate country location identified by the platform.                                                               |
| CUSTOMID1        | Custom Identifier from Customer Data Platform (CDP).                                                                   |
| CUSTOMID2        | Custom Identifier from Customer Data Platform (CDP).                                                                   |
| DEVICE           | Approximate user device value identified by the platform, such as mobile or desktop.                                   |
| EVENT            | The specific event that occurred.                                                                                     |
| EVENTINFO        | Additional information stored by the platform (not for customer customization).                                       |
| JOURNEY          | The flow name under which this event was generated.                                                                    |
| PLATFORM         | Approximate underlying platform of the user device (e.g., Desktop can have Windows, Linux).                            |
| STEP             | Step name in the Studio flow under which this event was generated.                                                     |
| REGION           | Geographical location (state) identified where the bot is being used.                                        |
| SOURCE           | Different channel integration from where the user triggered the event, such as Yellowmessenger, WhatsApp, etc.        |
| TARGETINFO       | Used for storing additional information for some events, such as journey switched.                                     |
| UID              | Unique Identifier of the User.                                                                                        |
| SESSIONID        | Unique Identifier of the User for a 24-hour timeframe from the first event triggered by the user.                     |
| LANGUAGE         | Language identified by the platform during the ongoing interaction.                                                    |
| INTERACTIONTYPE  | User input classification, for example, whether the user chose a quick reply or typed the input.                       |
| COUNT            | Rolled-up value of the event where the data was exactly the same, with differences only in time (this is associated with the timestamp description). |
| VALUE            | The VALUE field is used for pushing a numerical value associated with an event. By default, if no specific value is provided, it is set to 0. This field allows you to convey a quantitative aspect related to the event, providing additional context or information.      |


### User engagement events

Following are the events tracked on the user engagement events table: 

| Event                   | Description                                                                                                         | Produced by                    | Queue (Kafka)                   | Destination (Druid) - userEvents |
|-------------------------|---------------------------------------------------------------------------------------------------------------------|--------------------------------|----------------------------------|-----------------------------------|
| unidentified-utterance  | Fired when a user message is not understood by the Bot                                                            | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| agent-transfer          | Fired when a chat conversation is transferred to a live agent                                                       | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| feedback                | Fired when a user gives feedback after completing the chat                                                         | Data Service                   | druid-bot-user-queue             | Druid - userEvents, ES - feedbacks|
| first-message           | Fired when a new profile of a user is created                                                                     | Data Service                   | druid-bot-user-queue             | userEvents                         |
| first-message-bid       | Fired when a user profile is updated with the bid for the first time                                                | Data Service                   | druid-bot-user-queue             | userEvents                         |
| home-button-click       | Fired when a user clicks on the home button in the chat widget                                                       | Controller                     | druid-bot-user-queue             | userEvents                         |
| journey-started         | Fired when a journey starts for the user                                                                            | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| journey-completed       | Fired when a journey gets completed for the user                                                                   | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| journey-switched        | Fired when a journey is switched by NLP System for the user due to utterance matching another journey              | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| step-expected           | Fired when a step of the journey is expected / prompt is shown to the user                                          | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| step-recorded           | Fired when input is given by the user for a step (step value is recorded) of a journey                               | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| user-visited            | Fired when a user is visiting the chat widget for the first time (chatting for the first time)                      | Plugin Service                 | druid-bot-user-queue             | userEvents                         |
| user-revisited          | Fired when a user is revisiting the chat widget (chatting again)                                                    | Plugin Service                 | druid-bot-user-queue             | userEvents                         |
| optin                   | Fired when a WhatsApp opt-in is added                                                                             | Data Service                   | druid-bot-user-queue             | userEvents                         |
| optout                  | Fired when a WhatsApp opt-out is added                                                                            | Data Service                   | druid-bot-user-queue             | userEvents                         |
| otp-sent                | Fired when an OTP sent from the bot using the platform function                                                    | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| otp-verified            | Fired when an OTP is verified from the bot using the platform function                                              | Executer, Executer V2          | druid-bot-user-queue             | userEvents                         |
| notification-received   | Fired when a notification is received on the mobile widget                                                          | Controller                     | druid-bot-user-queue             | userEvents                         |
| new-session             | Fired when a new session is created                                                                               | Controller, whatsapp-service, executor v1 (zendesk), executor v2(zendesk) | druid-bot-user-queue | userEvents                         |
| user-session            | Fired when a session is created based on a USER message                                                            | Controller, whatsapp-service, executor v1 (zendesk), executor v2(zendesk) | druid-bot-user-queue | userEvents                         |
| user-initiated          | Fired when a new session is created from a user message for the WhatsApp channel                                    | whatsapp-service               | druid-bot-user-queue             | userEvents                         |
| business-initiated      | Fired when a new session is created by notification from the business side for the WhatsApp channel               | whatsapp-service               | druid-bot-user-queue             | userEvents                         |
| bot-closed              | Fired when the Bot is closed by the user (close button)                                                            |                                 |                                  |                                   |
| bot-icon-clicked        | Fired when the Bot avatar (in title bar) is clicked by the user                                                     |                                 |                                  |                                   |
| bot-icon-loaded         | Fired when the Bot avatar is displayed to the user (on load)                                                        |                                 |                                  |                                   |
| bot-opened              | This occurs when a user clicks on the chat bubble to open the bot.                                                   |                                 |                                  |                                   |
| card-cta-clicked        | Fired when the User clicks on the link configured in the card buttons                                                |                                 |                                  |                                   |
| message-hyperlink-clicked| Fired when the User clicks on the link configured in the text message                                                |                                 |                                  |                                   |
| banner-cta-clicked      | Fired when the User clicks on the link configured in the callout banner                                               |                                 |                                  |                                   |
| page-loaded             | Fired every time the client website page is loaded/reloaded where our script is running                              |                                 |                                  |                                   |
| pwa-loaded              | Fired when the PWA version of the bot script is loaded                                                             |                                 |                                  |                                   |
| pwa-opened              | Fired when the PWA bot is opened by the user                                                                       |                                 |                                  |                                   |
| bot-loaded              | Fired when the Bot script is loaded on the website                                                                 |                                 |                                  |                                   |
| bot-session             | Fired when a session is created based on a bot message (first message sent by the bot). It has a session time window of 24hrs for a given UID and source |                                 |                                  |                                   |
| condition-recorded      | Fired when a condition node is executed in a flow                                                                 |                                 |                                  |                                   |
| invalid-response        | Fired when an invalid response other than the provided option is selected/entered by the user                      |                                 |                                  |                                   |

**Other events**:

- inbound-overlay-closebtn
- inbound-overlay-conversion
- inbound-overlay-impression
- inbound-widget-closebtn
- inbound-widget-conversion
- inbound-widget-impression


