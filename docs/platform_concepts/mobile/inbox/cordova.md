---
title: Inbox SDK for Cordova
sidebar_label: Cordova
---

## Installation

Run this command in terminal form project root folder

```shell
ionic cordova plugin add cordova-plugin-yellowinbox
```

#### Demo App

A demo app has been created to understand the integration and usage of the SDK. It can be found here [https://github.com/yellowmessenger/yellowinbox-ionic-demo](https://github.com/yellowmessenger/yellowinbox-ionic-demo)

## Initialization

To initialize the SDK, API_KEY, USER_ID and BOT_ID are three mandatory parameters.
Users can call the following method for initialization.

```js
cordova.plugins.YellowInbox.initialize(
  "API_KEY",
  "USER_ID",
  "BOT_ID",
  (successResponse) => {
    console.log(successResponse); //prints "OK"
  },
  (failureJSON) => {
    console.log(JSON.stringify(failureJSON));
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

1. apiKey:
   API_KEY will be provided by yellow.ai. It's clients responsibility to keep the API_KEY safe.
2. userId:
   UserId will be the id registered/provided to yellow.ai by the client to authenticate their employee. This is a mandatory parameter.
3. botId:
   BOT_ID will be provided by yellow.ai, Client apps need to keep it safe such that no one else apart from the app can access it.

## Overview

Overview gives a high level picture of all the work by showing details like total online agents, average response time and so on.

```js
cordova.plugins.YellowInbox.startOverviewScreen(
  (successResponse) => {
    console.log(successResponse); //prints "OK"
  },
  (failureJSON) => {
    console.log(JSON.stringify(failureJSON));
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

## My Chats

My Chats lets you view chats that are assigned to you, open and archived. You can also interact with the customer from my chats

```js
cordova.plugins.YellowInbox.startMyChatScreen(
  (successResponse) => {
    console.log(successResponse); //prints "OK"
  },
  (failureJSON) => {
    console.log(JSON.stringify(failureJSON));
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

## Notification

### Background Notification

To receive firebase notification clients need to send Firebase device token to SDK. To do so the following method can be used.

```js
cordova.plugins.YellowInbox.setFirebaseDeviceToken("DEVICE_TOKEN");
```

Clients will receive firebase notification if the app is not running in foreground or in background, or if Ticket Create, User Message or Agent is added as collaborator actions happening on a ticket.
Clients need not to listen to these notifications when the app is running, SDK will take care of such events.

Call the following method if you want to take user to appropriate view once user clicks on notification delivered in system tray and sent by yellow.ai. Call `handleBackgroundNotification` only if payload contains key "ym". This key indicates notification is coming from Yellow.ai

```js
if (payload["ym"] != undefined) {
  cordova.plugins.YellowInbox.handleBackgroundNotification(
    backgroundNotificationData
  );
}
```

### Local Notification

Clients will receive local notification that will be triggered by the SDK based on the events received over XMPP.

In case a client wants to override the normal behaviour of notification or want to update title/body, they can do so by calling following method and catch the events
Clients need to call following method for listening to local event notification and modifying them

```js
cordova.plugins.YellowInbox.setLocalReceiver(
  (event) => {
    console.log(JSON.stringify(event));
    /*console.log prints
        {
          title: String,
          body: String,
          model: Object,
          eventType: String
        }
      */
  },
  (failureJSON) => {
    console.log(JSON.stringify(failureJSON));
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

- eventType: `String`
  - “TicketCreateEvent”
  - “TicketUpdateEvent”

Send back the updated data, to show local notification by calling `setUpdatedEvent`.

```js
cordova.plugins.YellowInbox.setUpdatedEvent(
  event,
  (successResponse) => {
    console.log(successResponse); //prints "OK"
  },
  (failureJSON) => {
    console.log(JSON.stringify(failureJSON));
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

Clients will receive events for Ticket Create and Ticket Update (new message, agent added as collaborator).
We recommend not to modify model data as it may result in not showing notification at all. Model is exposed so the client can make use of data present in it to create the required title and body.

### Video call Notification

If a client is receiving a video call notification while the app is in background, there is no special handling required for it. Simply tapping on notification will take the user to the appropriate view and show a dialog to answer/decline the call.
In case the app is running and in the foreground, the client needs to listen to Firebase notification and call the following function.
Assuming client is already using FCM

1. Client need to set the Firebase token in case device token changes by calling

   ```js
   cordova.plugins.YellowInbox.setFirebaseDeviceToken("DEVICE_TOKEN");
   ```

2. In firebase push notification payload callback client need to check if payload contains “callJoinUrl” call the SDK function to handle it
   ```js
   cordova.plugins.YellowInbox.handleBackgroundNotification(
    if (payload.data["callJoinUrl"] != undefined) {
       cordova.plugins.YellowInbox.handleBackgroundNotification(payload.data);
     }
   );
   ```
   A call declined from notification can be joined from the Chat view by tapping on the call icon

## Agent Status

### Get All Agent Statuses

To get all possible statuses of logged in User against the bot id (Used for initialising the SDK), client can call the following method.
This can be used to show all the possible status when Agent want to change the status.

```js
cordova.plugins.YellowInbox.getAllAgentStatus(
  (agentStatus) => {
    console.log(agentStatus);
    /* Console.log prints list of agent status
      [
        {
          "parentStatus":"Available",
          "status":"Working",
          "statusId":"123456"
        },
         {
          "parentStatus":"Busy",
          "status":"Lunch",
          "statusId":"789012"
        }
      ]
    */
  },
  (failureJSON) => {
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

### Get Agent Status

To get availability status of logged in user, client can call the following method.

```js
cordova.plugins.YellowInbox.getAgentStatus(
  (agentStatus) => {
    console.log(agentStatus);
    /* Console.log prints Agent status
      {
          "parentStatus":"Busy",
          "status":"Lunch",
          "statusId":"789012"
        }
    */
  },
  (failureJSON) => {
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

### Set Agent Status

To set the status of logged in User, the client can call the following method.
Client need to pass the AgentStatus object received from making `cordova.plugins.YellowInbox.getAllAgentStatus()` call.

```js
cordova.plugins.YellowInbox.setAgentStatus(
  {
    parentStatus: "Available",
    status: "Working",
    statusId: "123456",
  },
  (successResponse) => {
    /* Console.log prints
      "OK"
     */
  },
  (failureJSON) => {
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

### Logout

By calling logout, all the services and notifications will be terminated. You can call this function when user logs out of the app

```js
cordova.plugins.YellowInbox.logout(
  (successResponse) => {
    console.log(successResponse); //prints "OK"
  },
  (failureJSON) => {
    console.log(JSON.stringify(failureJSON));
    /* Console.log prints
    {
      "success": false,
      "error": "This is the error occurred"
    } */
  }
);
```

## Mandatory overrides

Please add the following key in your strings.xml file and change the value.

```xml
<string name="application_id_for_provider">your.app.id.fileprovider</string>
```

By doing this all the images/files will be sandboxed for your app.

## Optional overrides for Android

### colors.xml

You can update your colors.xml. By overriding these value you can the color as per your app design
Navigate to project/platforms/android/app/src/main/res/values and in values/colors.xml add the following

```xml
<color name="ym_app_bar_color">@color/primaryColor</color>
<color name="ym_status_bar_color">@color/primaryDarkColor</color>
<color name="ym_app_bar_text_color">@color/white</color>
<color name="ym_app_bar_icon_color">@color/white</color>
<color name="ym_text_color_primary">@color/primaryTextColor</color>
<color name="ym_text_color_secondary">@color/secondaryTextColor</color>
<color name="ym_accent_color">@color/colorAccent</color>
<color name="ym_icon_color">#707E8A</color>
<color name="ym_event_msg_background_color">#EAF5FB</color> //light color
<color name="ym_sent_msg_background_color">#007ED4</color> //dark color
<color name="ym_rcv_msg_background_color">#F5F8FA</color> // light color
<color name="ym_progressbar_color">#14568E</color>
```

Note : if colors.xml is not present create it

### Dimens.xml

Navigate to project/platforms/android/app/src/main/res/values and in values/dimens.xml add the following

By overriding the client can control text size and progress bar.

```xml
<dimen  name="ym_title_size">16sp</dimen>
<dimen  name="ym_subtitle_size">14sp</dimen>
<dimen  name="ym_caption_size">12sp</dimen>
<dimen name="ym_body_size">14dp</dimen>
<dimen name="ym_progress_bar_size">36dp</dimen>
<dimen name="ym_in_view_progress_bar_size">24dp</dimen>
```

## Informational

### Versions

YellowInbox SDK usage following minimumSdkVersion targetSdkVersion.

minSdkVersion 21
targetSdkVersion 30

### Dependencies

YellowInbox SDK usage following dependencies.

```java
dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
    implementation 'androidx.core:core-ktx:1.5.0'
    implementation 'androidx.appcompat:appcompat:1.3.0'
    implementation 'com.google.android.material:material:1.3.0'
    implementation 'androidx.legacy:legacy-support-v4:1.0.0'
    implementation 'androidx.gridlayout:gridlayout:1.0.0'

    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
    implementation 'com.squareup.okhttp3:logging-interceptor:4.7.2'

    implementation 'com.google.dagger:dagger:2.27'
    implementation 'androidx.constraintlayout:constraintlayout:2.0.4'
    kapt 'com.google.dagger:dagger-compiler:2.27'

    implementation 'androidx.lifecycle:lifecycle-livedata-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-common-java8:2.3.1'

    // Glide
    implementation 'com.github.bumptech.glide:glide:4.12.0'
    annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'

    //Smack
    implementation "org.igniterealtime.smack:smack-android-extensions:4.2.0"
    implementation "org.igniterealtime.smack:smack-tcp:4.2.0"

    //Event bus
    implementation 'org.greenrobot:eventbus:3.2.0'

    testImplementation 'junit:junit:4.+'
    androidTestImplementation 'androidx.test.ext:junit:1.1.2'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'
}
```

### Permissions

YellowInbox SDK usage following permissions.

```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
```
