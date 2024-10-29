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
* The following key in your strings.xml file is only required for versions below v2.5.0. Starting from version v2.5.0, it is no longer necessary to add this key.
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


### Use Secure YM Auth

You can pass `useSecureYmAuth` to enable additional security to your chat history. This safeguards your chatbot from unauthorized access even if an unauthorized party tries to access the token. 

To enable secure YmAuth, set `useSecureYmAuth` to `true`.

```dart
YmChat.useSecureYmAuth(true);
```

:::note
For more detailed information on how to set up secure YMAuthentication, click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/secure-ymauth).
:::

### Push Notifications

ymchat_flutter supports firebase notifications. Pass your `FCM token` in setDeviceToken method.

```dart
YmChat.setDeviceToken("token");
```

:::note
To [set up push notifications](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/push-notifications-sdks), a Firebase service account JSON file is required. You need to map the service account JSON file against your bot ID. For detailed instructions on obtaining and using the Firebase service account JSON file, please refer to the link provided [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key).
:::

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

#### Enable Speech to Text

Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is `false`

```dart
YmChat.setEnableSpeech(true);
```

#### Mic Icon Color

You can change the mic button icon color using the `setMicIconColor` function:

```dart
YmChat.setMicIconColor("#000000");
```

#### Mic Background Color

To change the background color of the mic button, use the `setMicBackgroundColor` function:

```dart
YmChat.setMicBackgroundColor("#0000FF");
```

####  Set Mic Button Movable

To set the mic button as movable or static, use the `setMicButtonMovable` function:

```dart
YmChat.setMicButtonMovable(true);
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
***

### Theme setup

You can customize the appearance of your chatbot interface by applying a theme. Using the YMConfig's theme property, you can modify various aspects of your chatbot, including its name, description, primary and secondary colors, icon, and click icon.

#### Set bot name

Define your bot's name using `setThemeBotName` method.

```dart
YmChat.setThemeBotName('Demo Bot Name');
```

#### Set bot description

Provide a description for your bot using `setThemeBotDescription` method.

```dart
YmChat.setThemeBotDescription('Demo Bot Description');
```

#### Set bot primary color

Customize the primary color of your bot using `setThemePrimaryColor` method.

```dart
YmChat.setThemePrimaryColor('#000000');
```

#### Set bot secondary color

Define the secondary color of your bot using `setThemeSecondaryColor` method.

```dart
YmChat.setThemeSecondaryColor('#ffffff');
```

#### Set bot bubble background color

Customize the background color of your bot bubble or message using `setThemeBotBubbleBackgroundColor` method.

```dart
YmChat.setThemeBotBubbleBackgroundColor('#0000ff');
```

#### Set bot icon

Choose an icon to represent your bot using `setThemeBotIcon` method.

```dart
YmChat.setThemeBotIcon('https://cdn.yellowmessenger.com/XJFcMhLpN6L91684914460598.png') ;
```

#### Set bot click icon

Define an icon for the minimized state of your bot using `setThemeBotClickIcon` method.

```dart
YmChat.setThemeBotClickIcon('https://cdn.yellowmessenger.com/XJFcMhLpN6L91684914460598.png') ;
```
***

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

## Revalidate Token

When your authentication token expires, you can use revalidate token to generate a new token.

Once your secure YMAuth is enabled, whenever your authentication token expires, the server will automatically initiate a request to get a fresh token from Yellow.

When you are using the `ym-revalidate-token` event, your application must include both the `apiToken` and `refreshSession` as mandatory parameters. This ensures a seamless and secure revalidation process.

```dart
YmChat.setBotId("botId");
YmChat.setAuthenticationToken("authToken");
    
YmChat.revalidateToken("new token", refreshSession);
```

:::note 
For more detailed information on how to set up secure YMAuthentication, click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/secure-ymauth).
:::

## Send Event To Bot

If you intend to transmit data back to the bot after it has been successfully launched and is in a running state, you can make use of this API.

To use this api `code` and `data` are mandatory parameter.

```dart
YmChat.sendEventToBot('code', { "some-key": "some-value" });
```

:::note 
For more detailed information on how to send event to bot workflow, click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/send-event-workflow).
:::

## Important

If you encounter any issues with the Android release build, add the following code to the app's **proguard-rules.pro** file:

```java
-keep public class com.yellowmessenger.ymchat.** {
   *;
}
```

## Demo App

A demo app can be used as a reference to better understand how this SDK can be integrated in the app
[https://github.com/yellowmessenger/ymchat-flutter-demo](https://github.com/yellowmessenger/ymchat-flutter-demo)
