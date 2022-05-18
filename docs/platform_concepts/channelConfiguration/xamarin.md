---
title: Chatbot SDK for xamarin
sidebar_label: xamarin Chatbot SDK
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

### Xamarin

Open NuGet package manager

- Search for YmChat
- Install the package for
  - Xamarin.Forms
  - Android
  - iOS

## Pre-requisite

### Setting up Xamarin.Forms

- Go to `App.xaml.cs`
- import namespace YmChat
  ```c#
  using YmChat;
  ```
- Accept parameter `IYmChat` in the `App` constructor
  and pass down to the class where you are using the SDK
  ```c#
  public App(IYmChat iymchat)
  {
      InitializeComponent();
      MainPage = new MainPage(iymchat);
  }
  ```

### Setting up Android

- Go to `MainActivity.cs`
- import namespace YmChat
  ```c#
  using YmChat;
  ```
- Inside `onCreate` function add this snippet at the end
  ```c#
  YmChatImplementation ymchat = new YmChatImplementation();
  LoadApplication(new App(ymchat));
  ```

### Setting up iOS

- Go to `AppDelegate.cs`
- import namespace YmChat
  ```c#
  using YmChat;
  ```
- Inside `FinishedLaunching` function add this snippet before return
  ```c#
  YmChatImplementation ymchat = new YmChatImplementation();
  LoadApplication(new App(ymchat));
  ```

#### File provider

Add following key in your `strings.xml` file found at `yourproject.Android/Resources/values/strings.xml`, this will override default file provider used by SDK.

Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"
Example - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider

```xml
<string name="application_id_for_provider">your.application.id.fileprovider</string>
```

## Usage

### Set botId

This is the first and compulsory step.

```c#
ymChatInterface.setBotId("botId");
```

### YM AuthenticationToken

ymAuthenticationToken is used to associate an identity of the user with the chat bot.

Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since **inception**.

```c#
ymChatInterface.setAuthenticationToken("token");
```

Note: History will load only when `Show history` flag is enabled in the channel settings

### Push Notifications

YMChat supports firebase notifications. Pass your `FCM token` in setDeviceToken method.

```c#
ymChatInterface.setDeviceToken("token");
```

Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)

### Payload

Additional information can be passed in the form of key value pair from app to bot using payload.

```c#
var Payload = new Dictionary<string, object> { { "name": "Integration", "type": "Xamarin" } };
ymChatInterface.setPayLoad(Payload);
```

Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown

For passing data from bot to app refer bot [Bot Events](#bot-events)

:::note payload security
Payload is securely passed in HTTPS post request to protect the information passed in it
:::

#### Trigger journey

A specific journey can be triggered on launch, by passing the slug in the payload.

```dart
ymChatInterface.setPayload({ "JourneySlug" : "checkout-cart" });
```

### On-Premise / Region Specific deployments

YmChat supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to `setCustomURL()` method.

```c#
ymChatInterface.setCustomURL("https://your-on-prem-url.com");
```

If the bot is deployed in a specific region(e.g. r1,r2,r3..rn)) on yellow.ai cloud, set the `customBaseUrl` as follows

```c#
ymChatInterface.setCustomURL("https://rx.cloud.yellow.ai");
```
Here rx = r1,r2,r3,r4,r5 etc

### Custom loader

You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif

```c#
ymChatInterface.setCustomLoaderURL(
  "https://example.com/your/custom/image.gif"
);
```

### V2 bot

You can enable V2 bot by calling `setVersion()` method. Default value is 1

```c#
ymChatInterface.setVersion(2);
```

### Speech to Text

Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is `false`

```c#
ymChatInterface.setEnableSpeech(true);
```

### Colors

#### Status bar

Status bar color can be set by calling `setStatusBarColor` method

```c#
ymChatInterface.setStatusBarColor("#FFFFFF")
```

#### Close button

Close button color can be set by calling `setCloseButtonColor` method

```c#
ymChatInterface.setCloseButtonColor("#000000")
```

#### iOS

If you are supporting Speech recognition, add following snippet to Info.plist of the host app

```
<key>NSMicrophoneUsageDescription</key>
<string>Your microphone will be used to record your speech when you use the Voice feature.</string>
<key>NSSpeechRecognitionUsageDescription</key>
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
```

### Present chatbot

Chat bot can be presented by calling `startChatbot()`. This method will display full screen chat view

```c#
ymChatInterface.startChatBot();
```

## Bot Events

Bot events are used to pass information from bot to app. For passing events from app to bot refer [Payload](#payload)

```c#
 ymChatInterface.onEventFromBot((botEvent) =>
  {
    Console.WriteLine(botEvent["code"]);
    Console.WriteLine(botEvent["data"]);
  });
```

#### Bot close event

Bot close event is separately sent and it can be handled in following way.

```c#
ymChatInterface.onBotClose(() =>
  {
    Console.WriteLine("Chatbot closed");
  });
```

## Close bot

Bot can be closed by tapping on cross button at top, and they can be programmatically closed using `closeBot()` function

```c#
ymChatInterface.closeBot();
```

## Unlink Device Token

If you want to stop receiving push notifications you can unlink the device token.
Device token typically is unlinked when the user logs out of the app.

```c#
  ymChatInterface.unLinkDeviceToken(
    botId,
    apiKey,
    deviceToken,
    (isDeviceTokenUnlinked) {
      Console.WriteLine("Device token unlinked");
      },
    (failureMessage) {
      Console.WriteLine(failureMessage);
      });
```

## Demo App

A demo app can be used as a reference to better understand how this SDK can be integrated in the app
[https://github.com/yellowmessenger/ymchat-xamarin-demo](https://github.com/yellowmessenger/ymchat-xamarin-demo)
