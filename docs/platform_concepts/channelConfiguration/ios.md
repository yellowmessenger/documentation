---
title: iOS Chatbot SDK
sidebar_label: iOS Chatbot SDK
---

## Installation
### CocoaPods
To integrate YMChatbot into your Xcode project using CocoaPods, specify it in your `Podfile`:

```ruby
pod 'YMChat'
```

:::info Supported iOS versions:
iOS 12, 13 and 14
:::

## Basic Usage
Import the `YMChat` framework in the Swift file

```swift
import YMChat
```

After the framework is imported the bot can be presented with few lines as below 

```swift
do {
    let config = YMConfig(botId: "x1234567890")
    YMChat.shared.config = config
    try YMChat.shared.startChatbot(on: self)
} catch {
    print("Error occured while loading chatbot \(error)")
}
```

## YMConfig
YMConfig can be used to set the bot id and other bot related settings. It is recommended to set all appropriate config **before** starting the bot

### Initialize YMConfig
YMConfig requires `botID` to initialize. All other settings are optional.

```swift
let config = YMConfig(botId: "<bot-id>")
```

### YM AuthenticationToken
ymAuthenticationToken is used to associate an identity of the user with the chat bot.

Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since **inception**.

```swift
config.ymAuthenticationToken = "your-token"
```

Note: History will load only when `Show history` flag is enabled in the channel settings

### Push Notifications
YMChat supports firebase notifications. Assign your `FCM token` to deviceToken

```swift
config.deviceToken = "your-firebase-device-token"
```

Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)

### Payload
Additional information can be passed in the form of key value pair from app to bot using payload.

```swift
config.payload = ["name": "ym.bot.name", "device-type": "mobile"]
```

Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown

For passing data from bot to app refer bot [Bot Events](#bot-events)

:::note payload security
Payload is securely passed in HTTPS post request to protect the information passed in it
:::

### On Premise deployments
Your on-prem deployment URL can be set to `customBaseUrl`

```swift
config.customBaseUrl = "https://yourcustomurl.com"
```

### Speech to Text
Speech to text can be enabled by setting the enableSpeech flag. Default value is `false`
```swift
config.enableSpeech = true
```

If you are adding Speech recognization, add following snippet to Info.plist of the host app
```xml
<key>NSMicrophoneUsageDescription</key>  
<string>Your microphone will be used to record your speech when you use the Voice feature.</string>
<key>NSSpeechRecognitionUsageDescription</key>  
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
```

### Colors
#### Status bar
Status bar color can be set on `statusBarColor` color variable

```swift
config.statusBarColor = UIColor.red
```

#### Close button
Close button color can be set on `closeButtonColor`
```swift
config.closeButtonColor = UIColor.blue
```

## Start chatbot
Once the config is set, chat bot can be presented by calling `startChatbot()` method and passing your view controller as an argument

```swift
do {
    try YMChat.shared.startChatbot(on: self)
} catch {
    print("Error occured while loading chatbot \(error)")
}
```

## Bot Events
Bot events are used to pass information from bot to app. For passing events from app to bot refer [Payload](#payload)

Events from bot can be handled using delegate pattern.

```swift
YMChat.shared.delegate = self
```

Once the delegate is assigned define the `eventResponse(_:)` function. The handler class should conform to `YMChatDelegate`

```swift
func onEventFromBot(_ response: YMBotEventResponse) {
    print("Event received \(response)")
    if response.code == "code-from-bot" {
        print("Even from a bot has been received", response.data)
    }
}
```

#### Bot close event

Bot close event is separetly sent and it can be handled in following way. The handler class should conform to `YMChatDelegate`

```swift
func onBotClose() {
    print("Bot closed")
}
```

## Close bot
Bot can be programatically closed using `closeBot()` function

```swift
YMChat.shared.closeBot()
```

## Logging
Logging can be enabled to understand the code flow and to fix bugs.

```swift
YMChat.shared.enableLogging = true
```

## Demo App
A demo has been created to better understand the integration of SDK in iOS app
[https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp](https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp)