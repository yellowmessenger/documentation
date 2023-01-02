---
title: iOS push notifications
sidebar_label: iOS push notifications
---



## 1. Set up push notifications for iOS apps


To send push notifications on your iOS app using Yellow.ai, you must have a Apple Push Notification (APN) account configured with the app and upload the key file in Yellow.ai.

### Step 1: Create APNs private key

* Download the private key (.p8 file) with APNs enabled using these [instructions](https://help.apple.com/developer-account/?_gl=1*1ydwszb*_ga*MTE1NjEzMTkzLjE2NTc3MTEyMzA.*_ga_8VQ6F1K67R*MTY2OTcxNDEzNS44OS4wLjE2Njk3MTQxNDMuMC4wLjA.*_ga_05Y0102HN7*MTY2OTcxNDEzNS40LjAuMTY2OTcxNDE0My4wLjAuMA..#/devcdfbb56a3).  Alternatively, you can also use an existing private key with APNs enabled.

### Step 2: Upload APNs private key on Yellow.ai

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





Parameters

Parameter | Description
------------ | --------
title | Title of the notification
body | Content of the notification
payload | Contains additional parameters such as image, botId, deep-link and journeySlug
botId | The bot ID for which the notification has been triggered
image | contains the path to the image file or a URL of the image
deeplink | URL which redirects the user to a particular page of the application
journeySlug | The journey which has to be triggered in the bot, when the user taps on the notification
contentAvailable | To handle background notifications


### Code Snippets

How to integrate YM bot

[https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios)

[https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp](https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp)
