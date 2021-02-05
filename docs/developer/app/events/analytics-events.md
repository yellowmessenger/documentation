---
title : Analytics Events
sidebar_label : Analytics Events
---


> Druid is used in our platform to quickly ingest massive quantities of event data, and provide low-latency queries on top of the data.

You can read more about Druid Over here : [https://druid.apache.org/docs/latest/design/](https://druid.apache.org/docs/latest/design/ "https://druid.apache.org/docs/latest/design/")

## UserEvents Datasource

This datasource contains all the user related events.

1.  **first-message** : This event is pushed into druid when a new user comes interacts with our platform through bot for the first time.
    
2.  **journey-started :** This event is pushed into druid when a new journey is started by any user.
    
3.  **journey-completed** : This event is pushed whenever a journey is successfully completed by the user.
    
4.  **step-recorded** : This event is pushed whenever a step in a journey is successfully recorded.
    
5.  **agent-transfer :** This event is pushed whenever a user interaction is transfered from a bot to an agent.
    

## BotEvents Datasource

Bot Events contain all the bot related events.

1.  **function-execution-time :** Whenever a function is executed from the bot code this event is pushed to this datasource containing all the metrics related to the function call.
    
2.  **unknown-message :** When the bot is able to figure out a suitable utterance for the reply.
    
3.  **synonyms** : When the user reply contain a synonyms configured in a bot then this event is send to record the step.
    

## Messages Datasource

This datasource stores the events related to all the message send between the bot and user.

## ApiEvent Datasource

This datasource stores the events related to all the API calls made through the bot.