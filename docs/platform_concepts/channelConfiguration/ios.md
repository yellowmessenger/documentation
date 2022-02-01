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

### Swift Package Manager Install
To integrate YMChatbot into your Xcode project using SPM, specify it in your `Package.swift`:

```ruby
dependencies: [
    .package(url: "https://github.com/yellowmessenger/YMChatbot-iOS.git", .upToNextMajor(from: "1.7.3"))
]
```

:::info Supported iOS versions:
iOS 12 and above
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

### Custom loader
You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif

```swift
config.customLoaderUrl = "https://example.com/your/custom/image.gif"
```

### V2 bot
You can enable V2 bot by setting the version in config. Default value is 1

```swift
config.version = 2
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
#### Status bar background
Status bar background color can be set using `statusBarColor` variable present in YMConfig

```swift
config.statusBarColor = UIColor.red
```

#### Status bar style
Status bar style can be set on `statusBarStyle` variable present in YMConfig.

Values can be either `default`, `lightContent` or `darkContent`. Default type is `default`

```swift
config.statusBarStyle = UIStatusBarStyle.darkContent
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

## Unlink Device Token
If you want to stop receiving push notifications you can unlink the device token.
Device token typically is unlinked when the user logs out of the app.

```swift
YMChat.shared.unlinkDeviceToken(botId: <#bot-id#>, apiKey: <#api-key#>, deviceToken: <#firebase-device-token#>) {
    print("Token removed successfully")
} failure: { errorString in
    print("ERROR: \(errorString)")
}
```
Note: API key can be found in account settings under Access keys section after you login.

## Logging
Logging can be enabled to understand the code flow and to fix bugs.

```swift
YMChat.shared.enableLogging = true
```

## Demo App
A demo has been created to better understand the integration of SDK in iOS app
[https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp](https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp)