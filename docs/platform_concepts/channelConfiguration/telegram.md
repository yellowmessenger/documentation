---
title : Telegram
sidebar_label : Telegram
---

Telegram is a free messaging app that allows you to send text messages, videos, images, and documents to people around the world.

Businesses can use a Telegram bot to provide automated customer support, promote their brands, collect user feedback, and so on.

In this article, you will learn:

* [How to create a Telegram account?](#create)
* [How to configure a bot on Telegram account?](#setup)
* [How to connect your bot on Telegram channel?](#channel)
* [How to test your bot on Telegram?](#test)
* [How to send notifications to a Telegram user via API?](#API)

## 1. Create a Telegram account

You can create a registered Telegram account using the Telegram app or website.

To create a Telegram account, follow these steps:

1. Navigate to the [Telegram](https://web.telegram.org/z/) website. You can either scan the QR code or log in by phone number. Click **LOG IN BY PHONE NUMBER**.

   <img src="https://i.imgur.com/dAz6SkH.png" alt="drawing" width="40%"/>
   
2. Enter your phone number and click **Next**.  

   <img src="https://i.imgur.com/1TYIjxQ.png" alt="drawing" width="50%"/>

3. Enter the verification code that is sent to your device.
 
   <img src="https://i.imgur.com/2FNgsun.png" alt="drawing" width="40%"/>

4. Your Telegram account will be created successfully.

    ![](https://i.imgur.com/YLICsC3.jpg)


## 2. Configure your bot on Telegram

1. Navigate to your Telegram account and search for a bot named **@BotFather** to create a new Telegram bot where you can start a conversation with the bot.

    ![](https://i.imgur.com/88CQrvY.jpg)
   
2. To create a new bot on Telegram, enter **/newbot** in the input bar and click send button. 

    ![](https://i.imgur.com/SzdpccO.jpg) 

3. You need to provide the username for the bot, and it must end with ‘bot’, for example, stagingbot, demoBot, and so on.

4. A congratulations message is displayed, indicating that your bot has been created. Along with that, an access token is generated. Copy that access token and paste it in the bot’s Telegram channel integration page and connect.

   ![](https://i.imgur.com/kN7zLT0.jpg)

5. Now that your Telegram bot is configured, you can search for the bot name.


## 3. Connect Telegram channel to your bot

To connect the Telegram channel on the Yellow.ai platform, follow these steps:

1. On the switcher, click **Channels > Telegram**.

   ![](https://i.imgur.com/XGauvh7.png)
   
2. Enter your **OAuth token** and click **Save**.  
   
   ![](https://i.imgur.com/PJ2dMuX.png)

3. Your Telegram channel will be successfully connected.

## 4. Test your bot on Telegram

After connecting your bot on Telegram, you can test your bot on the Telegram, and you can start responding to the user's queries.

To test your bot on Telegram, follow these steps:

1. Open the Telegram app on your mobile device.

2. Search for the bot by its username.

3. Click **START** to start the conversation.

   <img src="https://i.imgur.com/BJNhTeD.png" alt="drawing" width="80%"/>

## 5. APIs to send active notifications

You can use these APIs to send different types of notifications to your Telegram customers.

:::info

* **Prerequisites**: A Yellow Messenger bot which is integrated with the Telegram.

:::

### 5.1 Notification Limitation

* You can send notifications to a Telegram user only if the end-user has interacted with the bot.
* Currently, the notification APIs can be triggered 10 times successfully in a minute.


### 5.2 Send text message

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

### 5.3 Send image

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

### 5.4 Send Video

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

### 5.5 Send document

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

### 5.6 Send Quick replies

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

### 5.7 Send Cards

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