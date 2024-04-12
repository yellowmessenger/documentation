---
title: iOS push notifications
sidebar_label: iOS push notifications
---


## Set up push notifications for iOS apps


To send push notifications on your iOS app using Yellow.ai, you must have an Apple Push Notification service (APNs) account configured with the app and upload the key file in Yellow.ai.

### Step 1: Create APNs private key

* Download the private key (.p8 file) with APNs enabled using these [instructions](https://developer.apple.com/help/account/).  Alternatively, you can also use an existing private key with APNs enabled.

### Step 2: Upload APNs private key on Yellow.ai


1. On the left navigation bar, click **Extensions**.

   ![](https://imgur.com/PIOvT6K.png)
   
2. Click **Channels** > **Push Notifications** > **Android (FCM)**. 

   ![](https://imgur.com/PCuLOw8.png)

3. Click **+ Connect your account**.

   ![](https://imgur.com/A0h1dX8.png)

4. Click **Upload** and choose the .p8 file that you created. 

5. Enter the *Key ID*, the Bundle ID and the Apple Team ID from the previous step.
4. Click **Add**.

    <img src="https://imgur.com/C9JGuWf.png" alt="drawing" width="70%"/>

:::info
To know how to create a push notification campaign, see [Mobile push template](/docs/platform_concepts/engagement/outbound/templates/mobilepush.md).
:::

***


## Code snippets for iOS Push notifications


Notifications are sent to Apple Push Notification Service (APNs) service which then pushes them to the app using the user's device. This section provides payloads that are sent to APN for different on-tap actions.

The following table provides descriptions of different parameters in the code snippets:


Parameter | Datatype | Description
------------ | ----- | -----------
title | String | Title of the notification.
body | String | Content of the notification.
payload | String | Additional parameters such as image, botId, deep-link and journeySlug.
botId | String | The bot ID for which the notification has been triggered.
image | String | The path to the image file or a URL of the image.
deeplink | String | URL which redirects the user to a particular page of the iOS application.
journeySlug | String | The name of the journey which has to be triggered in the bot, when the user taps on the notification.
contentAvailable | Boolean | Whether to handle background notifications.

:::note
* Either `deviceToken` or `ymAuthToken` is needed. For campaigns, `deviceToken` is mandatory and `ymAuthToken` is optional. <br/>However, to push notifications from from your app to User 360, only `ymAuthToken` is required.
* Ensure you create users along with their device and ym authentication tokens.
* When sending out notifications, the yellow.ai consumes these details automatically, decides the platform, and sends out notifications accordingly.
:::


### Notification without custom action

This is used to redirect the user to the main activity of the app - On tap action, open the app (your app)]- Step 7 of [Push notification template](/docs/platform_concepts/engagement/outbound/templates/mobilepush). 


We do not send any payload, instead, we just trigger the notification containing the title and body along with the image (if included). There is no action included in the payload.

```json
{
 "topic": {bundleId},
 "contentAvailable": true,
 "title": "hey there",
 "body": "description",
 "payload": {
 "image": "{imageUrl}"
 }
}
```


### Notification with Deep-link

This is used for the On tap action to open a deep link to the app - when a user clicks on the notification, it redirects to a specific screen of the app.

The payload consists of the standard notification details (title, body, and image) along with the `botId` and `deeplink` URI.

```json
{
  "topic": "{bundleId}",
  "contentAvailable": true,
  "title": "hey there",
  "body": "description",
  "payload": {
    "image": "{imageUrl}",
    "botId": "{botID}",
    "deeplink": "{url}"
  }
}
```

### Notification with bot response

This is used for the On tap action to open a specific bot flow - when a user clicks on the notification, it opens the bot that can [trigger a specific bot flow](#payload-to-trigger-bot-flow) or [shows a predefined response](#payload-to-open-the-bot-with-a-predefined-response).

#### Payload to trigger bot flow

Here is the payload to trigger a specific bot flow when the user clicks on the notification.

```json
{
  "topic": "{bundleId}",
  "contentAvailable": true,
  "title": "hey there",
  "body": "description",
  "payload": {
    "botId": "{botID}",
    "image": "{imageUrl}",
    "journeySlug": "slug"
  }
}
```

#### Payload to open the bot with a predefined response

Here is the payload to show a specific bot response (text message) when the user clicks on the notification.

It just contains `botId` in the response under the `data` parameter. 

```json
{
  "topic": "{bundleId}",
  "contentAvailable": true,
  "title": "hey there",
  "body": "description",
  "payload": {
    "botId": "{botID}",
    "image": "{imageUrl}",
  }
}
```
:::note
For code snippets on how to integrate the yellow.ai bot, see the following:
* [iOS chatbot](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios)
* [YM chatbot iOS demo app](https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp)
:::

***


## Implementation codes for iOS app developer

### Extract parameters from notifications

Use the following code snippet to define what happens when the user clicks on the notification. You can fetch additional data from the user when the user clicks on the notification.

```js
class NotificationService: UNNotificationServiceExtension { 
  var contentHandler: ((UNNotificationContent) -> Void)? 
  var bestAttemptContent: UNMutableNotificationContent? 

override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) { 
self.contentHandler = contentHandler bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)

  let title = request.content.userInfo["title"]; 
  let body = request.content.userInfo["body"]; 
  let payload = request.content.userInfo["payload"]; 
  let botId = request.content.userInfo["payload"]["botId"]; 
  let image = request.content.userInfo["payload"]["image"]; 
  let journeySlug = request.content.userInfo["payload"]["journeySlug"]; 
  }
}
```

### Handle image notifications

Use the following code snippet to handle image notifications.

```js
import UserNotifications 
class NotificationService: UNNotificationServiceExtension { 
   var contentHandler: ((UNNotificationContent) -> Void)? 
   var bestAttemptContent: UNMutableNotificationContent? 

override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) { 
   self.contentHandler = contentHandler bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent) if let  
   bestAttemptContent = bestAttemptContent { // Modify the notification content here... bestAttemptContent.title = "\(bestAttemptContent.title) [modified]" 
   var urlString:String? = nil if let urlImageString = request.content.userInfo["image"] as? String { 
   urlString = urlImageString 
} 

if urlString != nil, let fileUrl = URL(string: urlString!) { print("fileUrl: \(fileUrl)") 

   guard let imageData = NSData(contentsOf: fileUrl) else { 
     contentHandler(bestAttemptContent) 
     return } 
   
   guard let attachment = UNNotificationAttachment.saveImageToDisk(fileIdentifier: "image.jpg", data: imageData, options: nil) else { 
   print("error in UNNotificationAttachment.saveImageToDisk()") 
   contentHandler(bestAttemptContent) 
   return 
 } 
   bestAttemptContent.attachments = [ attachment ] 
   } 
   contentHandler(bestAttemptContent) 
  } 
} 

override func serviceExtensionTimeWillExpire() { 
// Called just before the extension will be terminated by the system. 
// Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used. 
if let contentHandler = contentHandler, let bestAttemptContent = bestAttemptContent { 
   contentHandler(bestAttemptContent) 
   } 
  } 
} 

@available(iOSApplicationExtension 10.0, *) 
extension UNNotificationAttachment { 
static func saveImageToDisk(fileIdentifier: String, data: NSData, options: [NSObject : AnyObject]?) -> UNNotificationAttachment? { 
  let fileManager = FileManager.default 
  let folderName = ProcessInfo.processInfo.globallyUniqueString 
  let folderURL = NSURL(fileURLWithPath: NSTemporaryDirectory()).appendingPathComponent(folderName, isDirectory: true) do { 
  try fileManager.createDirectory(at: folderURL!, withIntermediateDirectories: true, attributes: nil) 
  let fileURL = folderURL?.appendingPathComponent(fileIdentifier) 
  try data.write(to: fileURL!, options: []) 
  let attachment = try UNNotificationAttachment(identifier: fileIdentifier, url: fileURL!, options: options) 
  return attachment 
} 
catch let error { 
  print("error \(error)") 
 } 
 return nil 
 } 
}
```