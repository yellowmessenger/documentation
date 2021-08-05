---
title: react-native Chatbot SDK
sidebar_label: react-native Chatbot SDK
---

## Installation
### npm
```sh
$ npm install ymchat-react-native --save

$ react-native link ymchat-react-native
```

### yarn
```sh
yarn add ymchat-react-native
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
4. Add following key in your `strings.xml` file, this will override default file provider used by SDK.
   Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with `.fileprovider`
   Example - applicationId : `com.abc.xyz` then  application_id_for_provider = `com.abc.xyz.fileprovider`
   ```xml
    <string name="application_id_for_provider">your.application.id.fileprovider</string>
   ```


## Usage
Import YMChat in App.js
```javascript
import { YMChat } from 'ymchat-react-native';
```

### Set botId
This is the first and **compulsary** step.
```javascript
YMChat.setBotId("x1234567890");
```

## Present chatbot
Chat bot can be presented by calling `startChatbot()`. This method will display full screen chat view
```javascript
YMChat.startChatbot();
```

## Other configurations

### Speech to Text
Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is `false`
```javascript
YMChat.setEnableSpeech(true);
```

### Payload
Information can be passed from app to bot using payload.

The payload dictionary should be JSON compatible else an error will be thrown

```javascript
YMChat.setPayload({ "name": "Purush", "age": 21 });
```

If you are supporting Speech recognization, add following snippet to Info.plist of the host app
```
<key>NSMicrophoneUsageDescription</key>  
<string>Your microphone will be used to record your speech when you use the Voice feature.</string>
<key>NSSpeechRecognitionUsageDescription</key>  
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
```

### History
Chat history can be enabled by calling `setEnableHistory()` and setting "UserID" in the payload
Default value is `false`
```javascript
YMChat.setPayload({ "UserId": "unique-id"}); //set unique id like email or UUID
YMChat.setEnableHistory(true)
```

### Event from bot
Bot can send events to the host app. Import `YMChatEvents` from `ymchat-react-native`
```javascript
import { YMChat, YMChatEvents } from 'ymchat-react-native';
..
..
YMChatEvents.addListener('YMChatEvent', (event) => {
   console.log(event.code, event.data); // you get access to all incoming bot events.
});
```

## Close bot
Bot canbe closed by tapping on cross button at top, and they can be progrmatically closed using `closeBot()` function
```javascript
YMChat.shared.closeBot();
```
 
 ## Close bot event
Bot close event is separetly sent and it can be handled in following way.
```javascript
import { YMChat, YMChatEvents } from 'ymchat-react-native';
..
..
YMChatEvents.addListener('YMBotCloseEvent', () => {
   console.log("Bot closed");
});

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

## On-Prem Deployments
ymchat-react-native supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to `setCustomURL()` method.
```javascript
YMChat.setCustomURL('https://your-on-prem-url.com');
```

## Demo App
A demo app can be used as a reference to better understand how this SDK can be integrated in the app
[https://github.com/yellowmessenger/ymchat-react-native-demo](https://github.com/yellowmessenger/ymchat-react-native-demo)