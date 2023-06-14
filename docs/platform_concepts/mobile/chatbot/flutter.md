---
title: Flutter Chatbot SDK
sidebar_label: Flutter
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

### Pub.dev

```sh
$ flutter pub add ymchat_flutter
```

or manually add dependency to the pubspec.yaml

```yaml
dependencies:
  ymchat_flutter: <version>
```

### Android

#### File provider

:::note
Note: Only required for version v.2.5.0 and below. Post v.2.5.0, it is not required to add the following key in your strings.xml
:::

Add following key in your `strings.xml` file found at `yourproject/platforms/android/app/src/main/res/values/strings.xml`, this will override default file provider used by SDK.

Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"
Example - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider

```xml
<string name="application_id_for_provider">your.application.id.fileprovider</string>
```

## Usage

Import the YMChat library in your dart file.

```dart
import 'package:ymchat_flutter/ymchat_flutter.dart';
```

### Set botId

This is the first and **compulsary** step.

```dart
YmChat.setBotId("x1234567890");
```

### YM AuthenticationToken

ymAuthenticationToken is used to associate an identity of the user with the chat bot.

Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since **inception**.

```dart
YmChat.setAuthenticationToken("token");
```

Note: History will load only when `Show history` flag is enabled in the channel settings

### Push Notifications

ymchat_flutter supports firebase notifications. Pass your `FCM token` in setDeviceToken method.

```dart
YmChat.setDeviceToken("token");
```

Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)

### Payload

A specific journey can be triggered on launch, by passing the slug in the payload.

```dart
YmChat.setPayload({ "name": "Integration", "type": "Flutter" });
```

Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown

For passing data from bot to app refer bot [Bot Events](#bot-events)

:::note payload security
Payload is securely passed in HTTPS post request to protect the information passed in it
:::

#### Trigger journey

A specific journey can be triggered on launch, by passing the slug in the payload.

```dart
YmChat.setPayload({ "JourneySlug" : "checkout-cart" });
```

### On-Premise / Region Specific deployments

ymchat_flutter supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to `setCustomURL()` method.

```dart
YmChat.setCustomURL("https://your-on-prem-url.com");
```

If the bot is deployed in a specific region(e.g. r1,r2,r3..rn) on yellow.ai cloud, set the `customBaseUrl` as follows

```dart
YmChat.setCustomURL("https://rx.cloud.yellow.ai");
```

Here rx = r1,r2,r3,r4,r5 etc

### Custom loader

You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif

```dart
YmChat.setCustomLoaderUrl("https://example.com/your/custom/image.gif");
```

### V2 bot

You can enable V2 bot by calling `setVersion()` method. Default value is 1

```dart
YmChat.setVersion(2);
```

### Speech to Text

Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is `false`

```dart
YmChat.setEnableSpeech(true);
```

### Hide Input Bar

You can hide the input bar while bot is loading by calling the `setDisableActionsOnLoad` API . Default value is `false`

```dart
YmChat.setDisableActionsOnLoad(true);
```

### Colors

#### Status bar

Status bar color can be set by calling `setStatusBarColor` method

```dart
YmChat.setStatusBarColor("#FFFFFF");
```

#### Close button

Close button color can be set by calling `setCloseButtonColor` method

```dart
YmChat.setCloseButtonColor("#000000");
```

#### iOS

If you are supporting Speech recognition, add following snippet to Info.plist of the host app

```xml
<key>NSMicrophoneUsageDescription</key>
<string>Your microphone will be used to record your speech when you use the Voice feature.</string>
<key>NSSpeechRecognitionUsageDescription</key>
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
```

Info.plist is found at path

```
<YourProjectRootDir>/ios/Runner/info.plist
```

## Present chatbot

Chat bot can be presented by calling `startChatbot()`. This method will display full screen chat view

```dart
YmChat.startChatbot();
```

## Bot Events

Bot events are used to pass information from bot to app. For passing events from app to bot refer [Payload](#payload)

```dart
  EventChannel _ymEventChannel = const EventChannel("YMChatEvent");
    _ymEventChannel.receiveBroadcastStream().listen((event) {
      Map ymEvent = event;
      log("${ymEvent['code']} : ${ymEvent['data']}");
    });
```

#### Bot close event

Bot close event is separetly sent and it can be handled in following way.

```dart
  EventChannel _ymCloseEventChannel = const EventChannel("YMBotCloseEvent");
    _ymCloseEventChannel.receiveBroadcastStream().listen((event) {
      bool ymCloseEvent = event;
      log(event.toString());
    });
```

## Close bot

Bot can be programmatically closed using `closeBot()` function

```dart
YmChat.closeBot();
```
## Reload bot

To reload the bot with the same configuration, use the `reloadBot()` function. This will reload the bot without closing and reopening it.

```dart
YmChat.reloadBot();
```

## Register Device

If you want to receive push notifications without or before launching the bot, you can register your device.
To use this api `apiKey`, `botId`, `deviceToken` and `ymAuthenticationToken` are mandatory parameters.

```dart
YmChat.setBotId("botId");
YmChat.setAuthenticationToken("authToken");
YmChat.setDeviceToken("deviceToken");

YmChat.registerDevice(
  apiKey,
  () {
    log("Device token linked successfully");
  },
  (failureMessage) {
    log(failureMessage);
  }
);
```

## Unlink Device Token

If you want to stop receiving push notifications you can unlink the device.
To use this api `apiKey`, `botId` and `deviceToken` are mandatory parameters.
Device token typically is unlinked when the user logs out of the app.

```dart
YmChat.unLinkDeviceToken(
  botId,
  apiKey,
  deviceToken,
  () {
    log("Device token unlinked");
  },
  (failureMessage) {
    log(failureMessage);
  }
);
```

:::note API Key
API key can be generated/found by visiting `https://cloud.yellow.ai` -> Overview -> Configure -> API Key section
:::

## Unread Message Count

If you want to show an indicator in your app if there is any unread messages, you can achieve that by calling the given api when bot is in closed state.
Pre condition to use this api is that customer must have opened the bot at least once with `ymAuthenticationToken` otherwise you will receive an error message.
To use this api `botId` and `ymAuthenticationToken` are mandatory parameters.

```dart
YmChat.setBotId("botId");
YmChat.setAuthenticationToken("authToken");

YmChat.getUnreadMessages(
  (count) {
    log("Unread Message Count: ${count}");
  },
  (failureMessage) {
    log(failureMessage);
  }
);
```

## Demo App

A demo app can be used as a reference to better understand how this SDK can be integrated in the app
[https://github.com/yellowmessenger/ymchat-flutter-demo](https://github.com/yellowmessenger/ymchat-flutter-demo)
