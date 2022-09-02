---
title: Inbox SDK for iOS
sidebar_label: iOS
---

## SDK integration

To add SDK into your project add the following pod into your pod file

```ruby
 pod 'YellowInbox'
```

## Initialization

The SDK can be initialised by passing API_KEY, USER_ID and BOT_ID to the initialize method.

```swift
 @objc public class func initialize(with 
     botId: String, 
     apiKey: String, 
     userId: String,
     completion: ((_ isSuccess: Bool) -> Void)? = nil
)
```

#### apiKey

apiKey will be provided by yellow.ai, It is clients responsibility to keep the API_KEY safe.
This is a mandatory parameter.

#### userId

userId will be the id registered/provided to yellow.ai by the client to authenticate their employee. This is a mandatory parameter.

#### botId

botId will be provided by yellow.ai.
This is a mandatory parameter.

#### Example

```swift
import UIKit 
import YellowInbox
 
class ViewController: UIViewController {
 
  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view.
 
    YellowInbox.initialize(with: <#"bot id"#>, 
        apiKey: <#"API key"#>, 
        userId: <#"USER_ID"#>) { success in
            if success {  print("SDK initialized successfully") }
            else {  print("Error while initializing the SDK")  } 
      }
   }
}
```

## Overview

Overview view is provided as a viewcontroller.

### Overview Viewcontroller

If clients want to use the Overview viewcontroller in their application, they can call the following method to get the viewcontroller object.

```swift
let viewController = YellowInbox.makeOverviewViewController()
```
client can push, present and embed this viewcontroller as they do for any other viewcontrollers.

## My Chat

Chats view is provided as a viewcontroller.

### My Chat Viewcontroller

If clients want to use the MyChat viewcontroller in their application, they can call the following method to get the viewcontroller object.

```swift
let viewController = YellowInbox.makeMyChatsViewController()
```

client can push, present and embed this viewcontroller as they do for any other viewcontrollers.

## Notifications

### Background Notification

To receive firebase notification clients need to send Firebase device token to SDK. To do so the following method can be used.

```swift
YellowInbox.setNotificationToken(<#"device token"#>)
```

:::note
Make sure to call this function when the device token is changed.
:::

Clients will receive firebase notification if the app is not running in foreground or in background, or if Ticket Create, User Message or Agent is added as collaborator actions happening on a ticket.

Clients need not to listen to these notifications when the app is running, SDK will take care of such events.

Clients need to call following method if they want to take user to appropriate view once user clicks on notification delivered in system tray and sent by yellow.ai

```swift
let viewController = YellowInbox.makeConversationView(ticketId: <#"ticket id"#>)
```

client can push and present this viewcontroller as they do for any other viewcontrollers.


### Local Notification

Clients will receive local notification that will be triggered by the SDK based on the events received over XMPP.
In case a client wants to override the normal behaviour of notification or want to update title/body, they can do so by they can do so by delegate methods.

Clients need to do the following step.

```swift
YellowInbox.delegate = self
```
Following are the delegates methods:

```swift
@objc func willShowCreateTicketLocalNotification(
    title: String?, 
    body: String?) -> YellowLocalNotification?
 
@objc func willShowUpdateTicketLocalNotification(
    title: String?, 
    body: String?) -> YellowLocalNotification?
```
Example 

```swift
class ViewController: UIViewController, YellowInboxDelegate {
    func willShowCreateTicketLocalNotification(
        title: String?,
        body: String?) -> YellowLocalNotification? {
          return YellowLocalNotification(title: <#"title"#>, body: <#"body"#>)
    }
    
    func willShowUpdateTicketLocalNotification(
        title: String?,
        body: String?) -> YellowLocalNotification? {
          return YellowLocalNotification(title: <#"title"#>, body: <#"body"#>)
    }
}  
```
 
Clients will get callbacks on these methods for creating and updating tickets notification. Clients can return a YellowLocalNotification instance with a modified title and body. if client dont wont to update the content the can return nil.

### Video call Notification

If a client is receiving a video call notification while the app is in background, Simply tapping on notification and check for the notification type in didReceive response function.

In case the app is running and in the foreground, client need to check for notification type into will present method.


1. Client need to set the Firebase token in case device token changes by calling

```swift
	YellowInbox.setNotificationToken("DEVICE_TOKEN")
```

2.  In didReceive response function client need to check if notification type is video call. client can open received url on webview or any default webapp.

```swift
let notificationType: YellowInbox.Notification? = YellowInbox.notificationType(response.notification)
switch notificationType {
  case let .videoCall(url, ticketId):
      // Use this url to open in web browser  		
  default: break;
}
```

Example

```swift
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate,   MessagingDelegate { 
    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        let notificationType: YellowInbox.Notification? = YellowInbox.notificationType(notification)
            if case .videoCall(let url, let ticketId) = notificationType {
                SceneDelegate.shared?.showVideoCallAlert(for: url, ticketId: ticketId)          
            }
        completionHandler([.alert, .badge, .sound])
    }
 
    func userNotificationCenter(_ center: UNUserNotificationCenter didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        let notificationType: YellowInbox.Notification? = YellowInbox.notificationType(response.notification)
            if case .videoCall(let url, let ticketId) = notificationType {
                SceneDelegate.shared?.showVideoCallAlert(for: url, ticketId: ticketId)          
            }
        completionHandler()
    }
}
```

A call declined from notification can be joined from the Chat view by tapping on the call icon

## Agent Status

### Get All Agent Statuses

To get all possible statuses of logged in User against the bot id (Used for initialising the SDK), client can call the following method. This can be used to show all the possible status when Agent want to change the status.

```swift
@objc public class func getAllAgentStatus(
    onSuccess: @escaping ([YellowAgentStatus]?) -> Void, 
    onFailure: @escaping (Error) -> Void)
```

### Get Agent Status

To get availability status of logged in User against the bot id (Used for initialising the SDK), client can call the following method

```swift
@objc public class func getAgentStatus(
    onSuccess: @escaping (YellowAgentStatus?) -> Void, 
    onFailure: @escaping (Error) -> Void)
```

Example

```swift 
YellowInbox.getAgentStatus(
    onSuccess: { agentStatus in let status = agentStatus }, 
    onFailure: { error in print(error) }
)
```

### Set Agent Status

To set the status of logged in user against the bot id (Used for initialising the SDK), the client can call the following method and observe on it. Client need to pass the YellowAgentStatus object received from making `YellowInbox.getAllAgentStatus()` call

```swift
@objc public class func setAgentStatus(
    _ status: YellowAgentStatus, 
    onSuccess: @escaping (YellowAgentStatus) -> Void, 
    onFailure: @escaping (Error) -> Void)
```

Example

```swift
YellowInbox.setAgentStatus(
    status,
    onSuccess: { _ in print("Status changed") },
    onFailure: { error in print(error) }
)
```

## Logout

By calling logout, all the services and notifications will be terminated. You can call this function when user logs out of the app

```swift
@objc public class func logout(completion: @escaping ((Bool, Error?) -> Void))
```

Example

```swift
YellowInbox.logout { isSuccess, error  in
    if isSuccess { print("Logout successfully") }
    else if let error = error { print(error) }
}
```

## Informational

### Versions

YellowInbox SDK requires iOS 13.0 and above

### Permissions

YellowInbox SDK usage following permissions.

```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Your description</string>
<key>NSCameraUsageDescription</key>
<string>Your description</string>
```
Clients need to add this permissions to their app’s Info.plist.
