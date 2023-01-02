---
title: Mobile push
sidebar_label: Mobile push
---

Push notifications help in communicating important information through mobile or web apps as notifications. It could be offers, app updates, important announcements, order information, or any other information that you want your app users to notify.

You can send push notifications to mobile or desktop applications using the following services:

* **Firebase Cloud Messaging** (FCM):  To send push notifications to Android apps.
* **Apple Push Notification Service** (APNS): To send push notifications to iOS or Mac OS apps.

## 1. Configure FCM for Android push

### Set up push notification for Android apps

To send push notifications on Android apps, you need to have a Firebase account with the app configured.

For managing push notifications, you must have a  [Firebase account](https://console.firebase.google.com/).

#### Prequisites
* Create an Android project on Firebase.

### Add Firebase to your Android project

1. Login to [Google Firebase](https://console.firebase.google.com/) with the client's account.
2. Select the project that is connected to the the mobile app.

![](https://i.imgur.com/wWLefrH.png)

:::note
To add a new project, click **Add project**. 
:::

3. On the *Push notification* screen, select the android app and click Configure. To add a new app, click **+Add app**.

![](https://i.imgur.com/YyFXXLE.png)

4. Navigate to **Service accounts** option from the top navigation bar
5. Click on **Generate new private key**. A JSON file will be downloaded which contains all the credentials.

![](https://lh5.googleusercontent.com/rF2x0PNOdJqnkqxQyd_i3AZj8KEK4jdnFB6e-2sFGDMYdLoMgZpR_Ewpf0eoM4XWHJirHLDjCyV9LZTMSi3oMLoRxEh02XrcrWy5QQswYADaWlKTvXDyV7wkAHQH7yUZc0FocAlp7Q0KWcaKphXy7tmiyA4DBqKZAlV2TuYuucU2_PtHmcZDFTToh3rQrg)

:::info
For a detailed help,  [see Firebase documentation](https://firebase.google.com/docs/cloud-messaging/android/client).
2.  To setup Firebase Cloud Messaging client app on Android,  see the [Firebase official documentation](https://firebase.google.com/docs/cloud-messaging/android/client).
:::

### Enable FCM and upload API key on Yellow.ai
To enable FCM in yellow.ai: 

1. Go to **Channels** > **Push Notifications** > **Android (FCM)**.
2.  Click **Upload** and choose the downloaded JSON file.
3. Click **Add** to upload

![](https://secure-res.craft.do/v2/MXpitnt98nfq77xcERfHs5nKdeJUqQ42x1Paqh34KHvmo25ikVQryimMtxX8fAdU1SBcf9ZSL7SHduNiC1QsYBiwvFXXGgrEXzBXsR66jC14o7djEPtQKjWC2ZNyUmiYiYVsjd8UCUPNBKyRSKiXH3phdZF949jPshsBcT72G3ZqPoFiVGzQbgZLDEfUZSgDZZceh38sz116SVLCrGC4YFrLucpLLcUS41YppMQCXNEwcevcZYmjwagkzDJSJJvCPRUYTmqVkmC3r4sNaL511omqxMGaViz7HZw7LLyhEZVDifig8f/Image.jpg)

### Create a notification service

Notification Extra Payload

This is used to pass a custom object with key-value pairs while hitting the notification API for any extra data that needs to be received on the webhook along with delivery updates.

These extra params will be sent along with the notification in case of an on tap action template

botId - The bot id for which the notification has been triggered

journeySlug - The journey name which has to be triggered for bot execute flow templates.


### Code snipets

#### Fetch extra data from notification when clicked

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

#### Start bot with extra data and bot details

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


#### Handle notification for foreground app

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
:::info
* For more details regarding integration, go through our [Android mobile SDK documentation](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android).
* You can also refer to our [Test app with Android mobile SDK and Firebase integration](https://github.com/yellowmessenger/YmChatBot-Android-DemoApp)
:::

### Example payloads

#### Notification without custom action

```java
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "url"
    },
    "token": < deviceToken >
}
```

#### Notification with deep link

```java
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "url"
    },
    "data": {
        "botId": < botId > ,
        "deeplink": "url"
    },
    "token": < deviceToken >
}
```

#### Notification with bot response:

```java
{
    "notification": {
        "title": "Hey there",
        "body": "Body",
        "image": "url"
    },
    "data": {
        "botId": < botId > ,
        "journeySlug": "slug"
    },
    "token": < deviceToken >
}
```


## 2. Set up push notifications for iOS/Mac apps

Integrating with APNs

* Using these [instructions](https://help.apple.com/developer-account/?_gl=1*1ydwszb*_ga*MTE1NjEzMTkzLjE2NTc3MTEyMzA.*_ga_8VQ6F1K67R*MTY2OTcxNDEzNS44OS4wLjE2Njk3MTQxNDMuMC4wLjA.*_ga_05Y0102HN7*MTY2OTcxNDEzNS40LjAuMTY2OTcxNDE0My4wLjAuMA..#/devcdfbb56a3), create and download a private key with APNs enabled. Note the Key ID for the next step. Alternatively, use an existing private key with APNs enabled.

To enable APNs in yellow.ai, follow these steps:
1. Go to **Channels** > **Push Notifications** > **iOS  (APNs)**.
2.  Click **Upload** and choose the .p8 file that you created.
3. Enter the *Key ID*, the Bundle ID and the Apple Team ID from the previous step.
4. Click **Add** to upload

![](https://secure-res.craft.do/v2/MXpitnt98nfq77xcERfHs5nKdeJUqQ42x1Paqh34KHvmo25ikVQryimMtxX8fAdU1SBcf9ZSL7SHduNiC1QsYBiwvFXXGgrEXzBXsR66jC14o7djEPtQKjWC2ZNyUmiYiYVsjd8UCUPNBKyRSKiXH3phczPr5qEBBoRoSV3iqCoFycXWFy15mVNCUZX1Adjze6y7ZKhWDgfpAD1441wesaaVVXcax81jmqN8N5cSPaSqPm19dLwQUjSGuofoMCvsVwi5P5tha29zHoQWcocWjaZXU4E41UbPy5C3aLWBEYofj9D5Wt/Image.jpg)

### Sample Payloads:

#### Notification without custom action

```json
{
 "topic": {bundleId},
 "contentAvailable": true,
 "title": "hey there",
 "body": "description",
 "payload": {
 "image": "url"
 }
}
```


#### Notification with Deep-link:

```json
{
  "topic": "{bundleId}",
  "contentAvailable": true,
  "title": "hey there",
  "body": "description",
  "payload": {
    "image": "url",
    "botId": "{botID}",
    "deeplink": "url"
  }
}
```

#### Notification with bot response:

```json
{
  "topic": "{bundleId}",
  "contentAvailable": true,
  "title": "hey there",
  "body": "description",
  "payload": {
    "botId": "{botID}",
    "image": "url",
    "journeySlug": "slug"
  }
}
```

