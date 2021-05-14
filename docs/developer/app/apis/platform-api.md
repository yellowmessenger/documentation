---
title : Platform API
sidebar_label : Platform API
---

## Message API

### Request

This API takes in user’s query as input and returns the bot’s response as an output. Once you have created a journey in the bot, you can call it like this -

```js
https://app.yellowmessenger.com/integrations/yellowmessenger/message
```

In order to test it, please import the following cURL request into Postman/terminal and update the bot ID with the ID of the bot that you are looking to test -

```js
curl --location --request POST 'https://app.yellowmessenger.com/integrations/yellowmessenger/message' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sender": "X_AUTH_TOKEN",
    "botId": "botID",
    "data": "{\"message\":\"raise issues\"}",
    "source": "syncApi"
}'
```
The bot ID can be found in the bot URL. The sender is a unique identity used to identify each user in this bot. It can be random string, email, phone, etc.

### Response

The API returns a JSON as a response with sender ID and message. message contains the response of the chatbot to the user’s query after performing all specified actions.

Note, session management happens automatically through this API. If the time difference between two consecutive messages from the same user is more than 30 mins, automatically a new session is started. If it's less, the message automatically gets added to the same session.

## Prediction API

### Request

Prediction API is used to trigger the NLP service and get intents and entities detected by the bot. Below is a sample request -

```js
https://app.yellowmessenger.com/api/ml/prediction?bot=x1557296852218&text=asd&language=en
```
In order to test it, please import the following cURL request into Postman/terminal and update the bot ID with the ID of the bot that you are looking to test -

```js
curl --location --request GET 'https://app.yellowmessenger.com/api/ml/prediction?bot=x1557296852218&text=asd&language=en' \
--header 'x-auth-token: X_AUTH_TOKEN'
```
Here, x-auth-token is the unique token of each user to identify permissions for this user on the platform. You can access your auth token by going to Home → Account Settings → Access Keys.

### Response

```js
{
    "core": false,
    "intents": {
        "viti": 0.306,
        "wow_there": 0.699
    },
    "language_detected": "en",
    "sentiment": "neutral",
    "small_talk_model": {},
    "text": "asd",
    "parser": {
        "noun_chunks": [],
        "lemmas": [
            "asd"
        ],
        "sentences": [
            "asd"
        ],
        "tokens": [
            {
                "text": "asd",
                "pos": "X",
                "lemma": "asd"
            }
        ],
        "entities": [],
        "other_keywords": [
            {
                "text": "asd",
                "pos": "X",
                "lemma": "asd"
            }
        ],
        "parsed_tree": [
            {
                "head_pos": 101,
                "dep": "ROOT",
                "text": "asd",
                "pos": "X",
                "head_text": "asd",
                "children": []
            }
        ],
        "lemma_list": [
            {
                "lemma": "asd",
                "pos": "X",
                "text": "asd"
            }
        ]
    },
    "confidence": 0.699,
    "global_entities": [],
    "entities": {},
    "synonym_detected": false,
    "intent": "wow_there",
    "global_model": {},
    "response": {}
}
```
