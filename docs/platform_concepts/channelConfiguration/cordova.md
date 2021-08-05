---
title: Chatbot SDK for cordova
sidebar_label: cordova Chatbot SDK
---

## Installation

### cordova

Run this command in terminal form project root folder

```
ionic cordova plugin add cordova-plugin-ymchat
```

## Usage

### Set botId

This is the first and compulsory step.

```javascript
cordova.plugins.ymchat.setBotId("botId");
```

### Present chatbot

Chat bot can be presented by calling `startChatbot()`. This method will display full screen chat view

```javascript
cordova.plugins.ymchat.startChatbot(
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

### Other configurations

Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is `false`

```javascript
cordova.plugins.ymchat.setEnableSpeech(true);
```

### Payload

Information can be passed from app to bot using payload.

The payload dictionary should be JSON compatible else an error will be thrown

```javascript
cordova.plugins.ymchat.setPayload({ "Company-name": "Yellow.ai" });
```

### History

Chat history can be enabled by calling `setEnableHistory()` and setting "UserID" in the payload
Default value is `false`

```javascript
cordova.plugins.ymchat.setPayload({ "UserId": "unique-id" }); //set unique id like email or UUID
cordova.plugins.ymchat.setEnableHistory(true);
```

### Event from bot

Bot can send events to the host app.

```javascript
cordova.plugins.ymchat.onEventFromBot((result) => {
  console.log("Code : " + result.code); // Prints the event sent to the chat bot
  console.log("Data : " + JSON.stringify(result.data)); // Prints the event sent to the chat bot
});
```

## Close bot

Bot can be closed by tapping on cross button at top, and they can be programmatically closed using `closeBot()` function

```javascript
cordova.plugins.ymchat.closeBot();
```

## Close bot event

Bot close event is separately sent and it can be handled in following way.

```javascript
cordova.plugins.ymchat.onBotClose(() => {
  console.log("Bot Closed"); // Prints Bot Closed
});
```

## Push Notifications

cordova-plugin-ymchat supports firebase notifications. Push notifications needs `authentication token` and `device token`

### Authentication Token

Authentication token can be set using `setAuthenticationToken` method. Auth token can be a unique identifier like email or UUID

```javascript
cordova.plugins.ymchat.setAuthenticationToken("token");
```

### Device Token

Device token can be set using `setDeviceToken` method. Pass `fcmToken` as a parameter to this method.

```javascript
cordova.plugins.ymchat.setDeviceToken("token");
```

It is recommended to set authentication token and device token before `startChatbot()`

Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)

## On-Prem Deployments

cordova-plugin-ymchat supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to `setCustomURL()` method.

```javascript
cordova.plugins.ymchat.setCustomURL("https://your-on-prem-url.com");
```