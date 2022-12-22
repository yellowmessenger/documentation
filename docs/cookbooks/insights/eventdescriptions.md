---
title: Event descriptions of default tables on data explorer 
sidebar_label : Event(DB column names) descriptions 
---


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

> Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#2-type-of-events) to learn about other events. 