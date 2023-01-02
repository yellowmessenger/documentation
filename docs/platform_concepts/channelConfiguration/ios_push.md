---
title: iOS push notifications
sidebar_label: iOS push notifications
---



## 1. Set up push notifications for iOS apps


To send push notifications on your iOS app using Yellow.ai, you must have a Apple Push Notification (APN) account configured with the app and upload the key file in Yellow.ai.

### Step 1: Create APNs private key

* Download the private key (.p8 file) with APNs enabled using these [instructions](https://developer.apple.com/help/account/).  Alternatively, you can also use an existing private key with APNs enabled.

### Step 2: Upload APNs private key on Yellow.ai

1. Go to **Channels** > **Push Notifications** > **iOS  (APNs)**.
2.  Click **Upload** and choose the .p8 file that you created.
3. Enter the *Key ID*, the Bundle ID and the Apple Team ID from the previous step.
4. Click **Add** to upload

![](https://secure-res.craft.do/v2/MXpitnt98nfq77xcERfHs5nKdeJUqQ42x1Paqh34KHvmo25ikVQryimMtxX8fAdU1SBcf9ZSL7SHduNiC1QsYBiwvFXXGgrEXzBXsR66jC14o7djEPtQKjWC2ZNyUmiYiYVsjd8UCUPNBKyRSKiXH3phczPr5qEBBoRoSV3iqCoFycXWFy15mVNCUZX1Adjze6y7ZKhWDgfpAD1441wesaaVVXcax81jmqN8N5cSPaSqPm19dLwQUjSGuofoMCvsVwi5P5tha29zHoQWcocWjaZXU4E41UbPy5C3aLWBEYofj9D5Wt/Image.jpg)


:::info
To know how to create a push notification campaign, see [Mobile push template](/docs/platform_concepts/engagement/outbound/templates/mobilepush.md).
:::


## 2. Code snippets for iOS Push notifications

The following table provides descriptions of different parameters in the code snippets:


Parameter | Datatype | Description
------------ | ----- | -----------
title | String | Title of the notification.
body | String | Content of the notification.
payload | String | Additional parameters such as image, botId, deep-link and journeySlug.
botId | String | The bot ID for which the notification has been triggered.
image | String | The path to the image file or a URL of the image.
deeplink | String | URL which redirects the user to a particular page of the iOS application.
journeySlug | String | The journey which has to be triggered in the bot, when the user taps on the notification.
contentAvailable | Boolean | Whether to handle background notifications.

### 2.1 Notification without custom action

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


### 2.2 Notification with Deep-link:

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

### 2.3 Notification with bot response

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


:::note
For code snippets in how to integrate Yellow Messenger bot, see the following:
* [iOS chatbot](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios)
* [YM chatbot iOS demo app](https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp)
:::



### 2.4 Extract parameters from notifications

```
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

### 2.5 Handle image notifications

```
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