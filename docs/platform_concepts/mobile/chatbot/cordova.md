---
title: Chatbot SDK for cordova
sidebar_label: Cordova
---

# Migration Guide for Android

Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken

Version 2.x has fix for this issue and thus a correct ymAuthenticationToken is always passed.
However, as the correct ymAuthentication is different from the corrupted token, our server treats this user as a new user which leads to a complete loss of history of user conversations.
The user will have a fresh start after updating the app.

Note:

1. ymAuthentication was corrupted only when it contained `=` character in 1.x versions
2. This issue was happening only on Android platform.

For more info feel free to email us at mobile@yellow.ai

## Installation

### cordova

Run this command in terminal form project root folder

```
ionic cordova plugin add cordova-plugin-ymchat
```

### Android

#### File provider

Add following key in your `strings.xml` file found at `yourproject/platforms/android/app/src/main/res/values/strings.xml`, this will override default file provider used by SDK.

Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"
Example - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider

```xml
<string name="application_id_for_provider">your.application.id.fileprovider</string>
```

## Usage

### Set botId

This is the first and compulsory step.

```javascript
cordova.plugins.ymchat.setBotId("botId");
```

### YM AuthenticationToken

ymAuthenticationToken is used to associate an identity of the user with the chat bot.

Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since **inception**.

```javascript
cordova.plugins.ymchat.setAuthenticationToken("token");
```

Note: History will load only when `Show history` flag is enabled in the channel settings

### Push Notifications

YMChat supports firebase notifications. Pass your `FCM token` in setDeviceToken method.

```javascript
cordova.plugins.ymchat.setDeviceToken("token");
```

Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)

### Payload

Additional information can be passed in the form of key value pair from app to bot using payload.

```javascript
cordova.plugins.ymchat.setPayload({
  name: "Integration",
  type: "cordova",
});
```

Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown

For passing data from bot to app refer bot [Bot Events](#bot-events)

:::note payload security
Payload is securely passed in HTTPS post request to protect the information passed in it
:::

#### Trigger journey

A specific journey can be triggered on launch, by passing the slug in the payload.

```js
cordova.plugins.ymchat.setPayload({ JourneySlug: "checkout-cart" });
```

### On-Premise / Region Specific deployments

cordova-plugin-ymchat supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to `setCustomURL()` method.

```javascript
cordova.plugins.ymchat.setCustomURL("https://your-on-prem-url.com");
```

If the bot is deployed in a specific region(e.g. r1,r2,r3..rn) on yellow.ai cloud, set the `customBaseUrl` as follows

```javascript
cordova.plugins.ymchat.setCustomURL("https://rx.cloud.yellow.ai");
```

Here rx = r1,r2,r3,r4,r5 etc.

### Custom loader

You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif

```javascript
cordova.plugins.ymchat.setCustomLoaderURL(
  "https://example.com/your/custom/image.gif"
);
```

### V2 bot

You can enable V2 bot by calling `setVersion()` method. Default value is 1

```javascript
cordova.plugins.ymchat.setVersion(2);
```

### Speech to Text

Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is `false`

```javascript
cordova.plugins.ymchat.setEnableSpeech(true);
```

### Hide Input Bar

You can hide the input bar while bot is loading by calling the `setDisableActionsOnLoad` API . Default value is `false`

```javascript
cordova.plugins.ymchat.setDisableActionsOnLoad(true);
```

### Colors

#### Status bar

Status bar color can be set by calling `setStatusBarColor` method

```javascript
cordova.plugins.ymchat.setStatusBarColor("#FFFFFF");
```

#### Close button

Close button color can be set by calling `setCloseButtonColor` method

```javascript
cordova.plugins.ymchat.setCloseButtonColor("#000000");
```

#### iOS

If you are supporting Speech recognization, add following snippet to Info.plist of the host app

```
<key>NSMicrophoneUsageDescription</key>
<string>Your microphone will be used to record your speech when you use the Voice feature.</string>
<key>NSSpeechRecognitionUsageDescription</key>
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
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

## Bot Events

Bot events are used to pass information from bot to app. For passing events from app to bot refer [Payload](#payload)

```javascript
cordova.plugins.ymchat.onEventFromBot((result) => {
  console.log("Code : " + result.code); // Prints the event sent to the chat bot
  console.log("Data : " + JSON.stringify(result.data)); // Prints the event sent to the chat bot
});
```

#### Bot close event

Bot close event is separately sent and it can be handled in following way.

```javascript
cordova.plugins.ymchat.onBotClose(() => {
  console.log("Bot Closed"); // Prints Bot Closed
});
```

## Close bot

Bot can be closed by tapping on cross button at top, and they can be programmatically closed using `closeBot()` function

```javascript
cordova.plugins.ymchat.closeBot();
```

## Unlink Device Token

If you want to stop receiving push notifications you can unlink the device token.
Device token typically is unlinked when the user logs out of the app.

```javascript
cordova.plugins.ymchat.unlinkDeviceToken(
  botId,
  apiKey,
  deviceToken,
  () => {
    console.log("Device token unlinked");
  },
  (error) => {
    console.log(`error ${error.message}`);
  }
);
```

:::note API Key
API key can be generated/found by visiting `https://cloud.yellow.ai` -> Overview -> Configure -> API Key section

Existing client can upgrade their dependency to `v2.1.+` and replace exisitng key with new API Key.
Client using SDK version below `v2.1.0` will have no impact.
:::

## Demo App

A demo app can be used as a reference to better understand how this SDK can be integrated in the app
[https://github.com/yellowmessenger/YMChatIonicDemo](https://github.com/yellowmessenger/YMChatIonicDemo)
