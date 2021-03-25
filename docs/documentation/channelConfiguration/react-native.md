---
title: react-native Chatbot SDK
sidebar_label: react-native Chatbot SDK
---

## Installation
### npm
```
$ npm install ymchat-react-native --save

$ react-native link ymchat-react-native
```

### yarn
```
yarn add ymchat-react-native --save
```

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `ymchat-react-native` and add `YMChat.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libYMChat.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.YMChatPackage;` to the imports at the top of the file
  - Add `new YMChatPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':ymchat-react-native'
  	project(':ymchat-react-native').projectDir = new File(rootProject.projectDir, 	'../node_modules/ymchat-react-native/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':ymchat-react-native')
  	```


## Usage
Import YMChat in App.js
```javascript
import YMChat from 'ymchat-react-native';
```

### Set botId
This is the first and **compulsary** step.
```javascript
YMChat.setBotId("x1234567890");
```

## Present chatbot
Chat bot can be presented by calling `startChatbot()`. This method will display full screen chat view
```javascript
MChat.startChatbot();
```

## Close bot
Bot canbe closed by tapping on cross button at top, and they can be progrmatically closed using `closeBot()` function
```javascript
YMChat.shared.closeBot();
```

## Other configurations

### Speech to Text
Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is `false`
```javascript
YMChat.setEnableSpeech(true);
```

If you are supporting Speech recognization, add following snippet to Info.plist of the host app
```
<key>NSMicrophoneUsageDescription</key>  
<string>Your microphone will be used to record your speech when you use the Voice feature.</string>
<key>NSSpeechRecognitionUsageDescription</key>  
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
```

### History
Chat history can be enabled and disabled by calling setEnableHistory(). Default value is `false`
```javascript
YMChat.setEnableHistory(true)
```

### Event from bot
Bot can send events to the host app. The events can be handled in `onEventFromBot` handler
```javascript
YMChat.onEventFromBot((code, data) => {
  console.log("Bot event:  " + code);
})
```

### Payload
Additional payload can be added in the form of key value pair, which is then appended to the bot
```javascript
YMChat.setPayload({ "name": "Purush", "age": "21" });
```
  
## Push Notifications
ymchat-react-native supports firebase notifications. Push notifications needs `authentication token` and `device token`

### Authentication Token
Authentication token can be set using `setAuthenticationToken` method. Auth token can be a unique identifier like email or UUID
```javascript
YMChat.setAuthenticationToken("token");
```

### Device Token
Device token can be set using `setDeviceToken` method. Pass `fcmToken` as a parameter to this method.
```javascript
YMChat.setDeviceToken("token");
```
It is recommended to set authentication token and device token before `startChatbot()`

Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)
