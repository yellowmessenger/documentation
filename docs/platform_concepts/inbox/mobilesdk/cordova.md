---
title: Agent SDK for Cordova
sidebar_label : Cordova
---

## Installation
Run this command in terminal form project root folder

```shell
ionic cordova plugin add cordova-plugin-yellowinbox
```

## Initialization  

To initialize the SDK, API_KEY, USER_ID and BOT_ID are three mandatory parameters.
Users can call the following method for initialization.

```js
cordova.plugins.YellowInbox.initialize(
  apiKey,
  userId,
  botId,
  successCallBack,
  failureCallBack
);
```


#### apiKey: String
API_KEY will be provided by yellow.ai.It is clients responsibility to keep the API_KEY safe. 
This is a mandatory parameter.

#### userId: String
UserId will be the id registered/provided to yellow.ai by the client to authenticate their employee. This is a mandatory parameter.

#### botId: String
BOT_ID will be provided by yellow.ai,  Client apps need to keep it safe such that no one else apart from the app can access it. 
This is a mandatory parameter.

#### successCallBack: function (successValue)
successValue: String - "OK"

#### failureCallBack: function (errorJson)

errorJson: Object -
```json
{
  "success": Boolean,
  "error": String,
  "stackTrace": Object
}
```


## Overview
Overview gives a high level picture of all the work by showing details like total online agents, average response time and so on.

```js
cordova.plugins.YellowInbox.startOverviewScreen(
  successCallBack,
  failureCallBack
);
```

## My Chats
My Chats lets you view chats that are assigned to you, open and archived. You can also interact with the customer from my chats

```js
cordova.plugins.YellowInbox.startMyChatScreen(
   successCallBack, 
   failureCallBack
);
```



## Notification
### Background Notification	

To receive firebase notification clients need to send Firebase device token to SDK. To do so the following method can be used.
```js
cordova.plugins.YellowInbox.setFirebaseDeviceToken("firebase-deviceToken");
```

Clients will receive firebase notification if the app is not running in foreground or in background, or if Ticket Create, User Message or Agent is added as collaborator actions happening on a ticket.

Clients need not to listen to these notifications when the app is running, SDK will take care of such events.

Clients need to call following method if they want to take user to appropriate view once user clicks on notification delivered in system tray and sent by yellow.ai

```js
cordova.plugins.YellowInbox.handleBackgroundNotification(
  backgroundNotificationData
);
```

backgroundNotificationData: Object

### Local Notification
Clients will receive local notification that will be triggered by the SDK based on the events received over XMPP.
In case a client wants to override the normal behaviour of notification or want to update title/body, they can do so by calling following method and catch the events

Clients need to call following method for listening to local event notification and modifying them
```js
cordova.plugins.YellowInbox.setLocalReceiver(
  eventCallBack, 
  failureCallBack
);
```


event: Object
```js
{
    title: String,
    body: String,
    model: Object,
    eventType: String
}
```

eventType: String 
  “TicketCreateEvent”
  “TicketUpdateEvent”

Send back the updated data, to show local notification by calling setUpdatedEvent.

cordova.plugins.YellowInbox.setUpdatedEvent(
  title,
  body,
  model,
  eventType,
  successCallBack,
  failureCallBack
);


successCallBack: function (successResult)
successResult: String - "OK"

failureCallBack: function (errorJson)

errorJson: Object -

{
  "success": Boolean,
  "error": String,
  "stackTrace": Object
}


Clients will receive events for Ticket Create and Ticket Update (new message, agent added as collaborator).
We recommend not to modify model data as it may result in not showing notification at all. Model is exposed so the client can make use of data present in it to create the required title and body.


Video call Notification
If a client is receiving a video call notification while the app is in background, there is no special handling required for it. Simply tapping on notification will take the user to the appropriate view and show a dialog to answer/decline the  call.

In case the app is running and in the foreground, the client needs to listen to Firebase notification and call the following function.

Assuming client is already using FCM

1- Client need to set the Firebase token in case device token changes by calling

cordova.plugins.YellowInbox.setFirebaseDeviceToken(deviceToken);


deviceToken: String

2- In onMessageReceived(message:RemoteMessage) function client need to check if message contains “callJoinUrl” call the SDK function to handle it

cordova.plugins.YellowInbox.handleBackgroundNotification(
  backgroundNotificationData
);



In case Agent declines the call, need not to worry, a call icon will appear in Chat view using that Agent can join the call.
Agent’s Status
Get Agent Status
To get availability status of logged in User against the bot id (Used for initialising the SDK), client can call the following method.


cordova.plugins.YellowInbox.getAgentStatus(
successCallBack,
 failureCallBack
);

	
	
successCallBack : function (successResult)
successResult: String - "OK"

 failureCallBack :function (errorJson)
  errorJson: Object -

{
   "success": Boolean,
   "error": String,
   "stackTrace": Object
}



status: String
  “AVAILABLE”
  “AWAY”
  “BUSY”
  “UNKNOWN” ( ambiguous state )


Change Agent Status
To change the status of logged in User against the bot id (Used for initialising the SDK), the client can call the following method.


cordova.plugins.YellowInbox.changeAgentStatus(
  status,
  successCallBack,
  failureCallBack
);


successCallBack : function (successResult)
 successResult: String - "OK"

failureCallBack : function (errorJson)
 errorJson: Object -
  
  {
      "success": Boolean,
      "error": String,
      "stackTrace": Object
    }


status: String

“AVAILABLE”
“AWAY”
“BUSY”

Logout

Please call the following api to logout the user from SDK (call the api while the user is logging out from the app for cleanup).
By doing so, all the services and notifications will be terminated.

cordova.plugins.YellowInbox.logout(
  successCallBack, 
  failureCallBack
);


