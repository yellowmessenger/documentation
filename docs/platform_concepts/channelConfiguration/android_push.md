---
title: Android push notifications
sidebar_label: Android push notifications
---


Push notifications help communicate important information through mobile apps. It could be offers, app updates, important announcements, order information, or any other details that you want your app users to notify.

<center><img src="https://i.imgur.com/pYaY53f.jpg" width="50%"/></center>


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


### Step 2: Add key to Yellow.ai

Once you get the key JSON file, upload the key on Yellow.ai to establish a connection and grant access to send push notifications from Yellow.ai.

To connect FCM to yellow.ai, follow these steps:
1. Go to **Channels** > **Push Notifications** > **Android (FCM)**.
2. Click **Upload** and choose the downloaded JSON file.
3. Click **Add**.

![](https://secure-res.craft.do/v2/MXpitnt98nfq77xcERfHs5nKdeJUqQ42x1Paqh34KHvmo25ikVQryimMtxX8fAdU1SBcf9ZSL7SHduNiC1QsYBiwvFXXGgrEXzBXsR66jC14o7djEPtQKjWC2ZNyUmiYiYVsjd8UCUPNBKyRSKiXH3phdZF949jPshsBcT72G3ZqPoFiVGzQbgZLDEfUZSgDZZceh38sz116SVLCrGC4YFrLucpLLcUS41YppMQCXNEwcevcZYmjwagkzDJSJJvCPRUYTmqVkmC3r4sNaL511omqxMGaViz7HZw7LLyhEZVDifig8f/Image.jpg)

:::note
To know how to create a push notification campaign, see [Mobile push template](/docs/platform_concepts/engagement/outbound/templates/mobilepush.md).
:::

## 2. Code snippets for Android Push notifications

The following table provides descriptions of different parameters:

Parameter | Datatype | Description
--------- | -------- | ---------
notification | Obj | Details of the notification
title | String | Title of the notification.
body | String | Content of the notification.
payload | String | Contains additional parameters such as iamge, botId, deeplink and journeySlug.
botId | String | The bot ID for which the notification has been triggered.
image | String | Path of the image file or URL of the image.
deeplink | String | URL which redirects the user to a particular page of the application.
journeySlug | String | The journey which has to be triggered in the bot, when the user taps on the notification

### 2.1 Notification without custom action


```js
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "{ImageUrl}"
    },
    "token": "{deviceToken}"
}
```

### 2.2 Notification with deep link

```js
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "{imageUrl}"
    },
    "data": {
        "botId": {botId},
        "deeplink": "{url}"
    },
    "token": "{deviceToken}"
}
```

### 2.3 Notification with bot response

```js
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "{imageUrl}"
    },
    "data": {
        "botId": "{botId}",
        "journeySlug": "{slug}"
    },
    "token": "{deviceToken}"
}
```


### 2.4 Handle notification for foreground app

Use the following code snippet to display the notification when an incoming event notification payload is received.

```js
import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class MyFirebaseMessagingService: FirebaseMessagingService() {
    final
    var TAG: String = "YMLog"
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        Log.i(TAG + " Remote message", remoteMessage.toString())
        Log.i(TAG + " Remote message", remoteMessage.data.toString())
        super.onMessageReceived(remoteMessage)
    }
}
```

### 2.5 Fetch extra data from notification when clicked

Use the following code snippet to define what happens when the user clicks on the notification. You can fetch additional information from the user when the user clicks on the notification.

```js
HashMap < String, Object > payloadData = new HashMap < > ();
HashMap < String, Object > botPayloadData = new HashMap < > ();

Bundle bundle = getIntent().getExtras();
if (bundle != null) {
    String tmp = "";
    for (String key: bundle.keySet()) {
        Object value = bundle.get(key);
        payloadData.put(key, value);
        tmp += key + ": " + value + "\n\n";
    }
    mTextView.setText(tmp);
}
```

### 2.6 Start bot with extra data and bot details

Use the following code snippet to open the bot and trigger a specific bot flow when the user clicks on the notification. 

```js
if (payloadData.get("botId") != null) {
    String botId = (String) payloadData.get("botId");
    YMChat ymChat = YMChat.getInstance();

    ymChat.config = new YMConfig(botId);
    ymChat.config.version = 2;
    ymChat.config.ymAuthenticationToken = "2gs20emoof1666164936076";

    if (payloadData.get("journeySlug") != null) {
        String journeySlug = (String) payloadData.get("journeySlug");
        botPayloadData.put("JourneySlug", journeySlug);
        ymChat.config.payload = botPayloadData;
    }

    try {
        ymChat.startChatbot(this);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

:::info
For more details regarding the integration, see 
* [Android SDK documentation](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android). 
* [Test app with Android SDK and Firebase integration](https://github.com/yellowmessenger/YmChatBot-Android-DemoApp)
:::

