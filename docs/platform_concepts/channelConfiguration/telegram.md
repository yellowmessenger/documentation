---
title : Telegram
sidebar_label : Telegram
---

## 1. Connect bot to Telegram

To connect your bot with Telegram, follow these steps:
1. Open the telegram app in your device and search for a Bot named @BotFather to create a new Telegram Bot.
2. Start the conversation with that bot, then you can see the option to create a new bot in the message.


<center><img src="https://cdn.yellowmessenger.com/zzeVMD31ud7Z1613188664508.png" width="50%"/></center>

3. And now it will ask you to choose a name for your bot, Provide the name for the bot and this will show up as the display name to the users.
4. And then it will ask you to provide the username for the bot and it should end with ‘bot’ ex: stagingbot, demoBot etc..
5. Then after it will send a congratulation message along with the access token, Copy that access token and put it in the bot’s telegram channel integration page and connect.
6. That’s it your bot is now connected to the telegram bot and you can search for bot name and start the conversations with it.

Reference : 
<center>
<img src="https://cdn.yellowmessenger.com/TBYUqiqEtYhs1613188729295.jpg" width="50%"/>
</center>

***

## 2. APIs to send active notifications

You can use these APIs to send different type of notifications to your Telegram customers. 

:::info

* **Prerequisites**: A Yellow Messenger bot which is integrated with the Telegram.

:::

### 2.1 Notification Limitation

* You can send notifications to a Telegram user only if the end-user has interacted with the bot.
* Currently, the notification APIs can be triggered 10 times in a minute successfully.


### 2.2 Send text message

Here is the curl to send a text message.

```c
curl --location --request POST 'https://app.yellowmessenger.com/integrations/telegram/send/<encrypted_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "message": "<Text Message>"
    },
    "sender": "<SENDER_ID>",
    "bot": "<BOT_ID>"
}'
```

### 2.3 Send image

Here is the curl to send an image.

```c
curl --location --request POST 'https://app.yellowmessenger.com/integrations/telegram/send/<encrypted_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "image": "<url>"
    },
    "sender": "<SENDER_ID>",
    "bot": "<BOT_ID>"
}'
```

### 2.4 Send Video

Here is the curl to send a video message on Telegram.


```c
curl --location --request POST 'https://app.yellowmessenger.com/integrations/telegram/send/<encrypted_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "video": {
                      "url" : “<Videourl>”
	         }
    },
    "sender": "<SENDER_ID>",
    "bot": "<BOT_ID>"
}'
```

### 2.5 Send document

Here is the curl to send a document on Telegram.


```c
curl --location --request POST 'https://app.yellowmessenger.com/integrations/telegram/send/<encrypted_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "document": "<url>"
    },
    "sender": "<SENDER_ID>",
    "bot": "<BOT_ID>"
}'
```

### 2.6 Send Quick replies

Here is the curl to send quick replies.


```c
curl --location --request POST 'https://app.yellowmessenger.com/integrations/telegram/send/<encrypted_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "quickReplies": {
            "title": "<Text of the quick reply>",
            "options": [
                {
                    "title": "<Title of the quick reply>",
                    "text": "<Text for the quick reply>"
                }
            ]
        }
   },
    "sender": "<SENDER_ID>",
    "bot": "<BOT_ID>"
}'
```

#### Example 

```c
curl --location --request POST 'https://app.yellowmessenger.com/integrations/telegram/send/<encrypted_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "quickReplies": {
            "title": "Sorry, you are looking for some other loans. You can explore other products here",
            "options": [
                {
                    "title": "Main Menu",
                    "text": "Main Menu"
                }
            ]
        }
    },
    "sender": "<SENDER_ID>",
    "bot": "<BOT_ID>"
}'
```

### 2.7 Send Cards

Here is the curl to send cards on Telegram.


```c
curl --location --request POST 'https://app.yellowmessenger.com/integrations/telegram/send/<encrypted_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "cards": [{
            "image": "<url>",
            "title": "<Title of the card>",
            "text": "<Card description>",
            "actions" : [{
                "title" : "<Title of the action button>",
                "text" : "<Text of the action button>"
            }]
        }]

   },
    "sender": "<SENDER_ID>",
    "bot": "<BOT_ID>"
}'

```

#### Example

```c
curl --location --request POST 'https://app.yellowmessenger.com/integrations/telegram/send/<encrypted_token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "cards": [{
	    “image”: "https://cdn.yellowmessenger.com/FP2JNuO6K2w51570862143975.png",
	    “title” : “Home Loan”
                “text”: "Make your dream home a reality",
                “actions”: [
                    {
                        “title”: “Get now”,
                        “text”: “test_info”
                    },
                    {
                        “title”: “Know More”,
                        “text”: “test_homeloan”
                    }
                ]
            }]
   },
    "sender": "<SENDER_ID>",
    "bot": "<BOT_ID>"
}'
```