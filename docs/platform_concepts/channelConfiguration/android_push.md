---
title: Android push notifications
sidebar_label: Android push notifications
---


Push notifications help communicate important information through mobile apps. It could be offers, app updates, important announcements, order information, or any other details that you want your app users to notify.

You can send push notifications to Android or iOS applications using the following services:

* **Firebase Cloud Messaging** (FCM):  To send push notifications to Android apps.
* **Apple Push Notification Service** (APNS): To send push notifications to iOS or Mac OS apps.

## 1. Configure Android push notification

### Step 1: Add project to FCM & generate private key 

1. Log on to the [Firebase Developer Console](https://console.firebase.google.com/) and add Firebase to your [Android app](https://firebase.google.com/docs/android/setup).
![](https://i.imgur.com/wWLefrH.png)

2. In Project settings, navigate to **Service accounts**.

   ![](https://i.imgur.com/3Z1ga3w.png)

3. Click on **Generate new private key**. A JSON file will be downloaded which contains all the credentials.

   ![](https://i.imgur.com/Qzdl7Cf.png)


:::info
For detailed help,  [see Firebase documentation](https://firebase.google.com/docs/cloud-messaging/android/client).
2.  To set up Firebase Cloud Messaging client app on Android,  see the [Firebase official documentation](https://firebase.google.com/docs/cloud-messaging/android/client).
:::

- Download JSON and upload it in the server.

### Step 2: Add key to Yellow.ai

Once you get the key JSON file, upload the key on Yellow.ai to establish a connection and grant access to send push notifications from Yellow.ai.

To connect FCM to yellow.ai, follow these steps:
1. Go to **Channels** > **Push Notifications** > **Android (FCM)**.
2.  Click **Upload** and choose the downloaded JSON file.
3. Click **Add**.

![](https://secure-res.craft.do/v2/MXpitnt98nfq77xcERfHs5nKdeJUqQ42x1Paqh34KHvmo25ikVQryimMtxX8fAdU1SBcf9ZSL7SHduNiC1QsYBiwvFXXGgrEXzBXsR66jC14o7djEPtQKjWC2ZNyUmiYiYVsjd8UCUPNBKyRSKiXH3phdZF949jPshsBcT72G3ZqPoFiVGzQbgZLDEfUZSgDZZceh38sz116SVLCrGC4YFrLucpLLcUS41YppMQCXNEwcevcZYmjwagkzDJSJJvCPRUYTmqVkmC3r4sNaL511omqxMGaViz7HZw7LLyhEZVDifig8f/Image.jpg)

## 2. Code snippets for Android Push notifications 

### 2.1 Notification without custom action



```js
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "url"
    },
    "token": {deviceToken}
}
```

### 2.2 Notification with deep link

```js
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "url"
    },
    "data": {
        "botId": {botId},
        "deeplink": "url"
    },
    "token": {deviceToken}
}
```

### 2.3 Notification with bot response

```js
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "url"
    },
    "data": {
        "botId": "{botId}",
        "journeySlug": "slug"
    },
    "token": "{deviceToken}"
}
```