---
title: Android Chatbot SDK
sidebar_label: Android Chatbot SDK
---

## Installation
### Gradle
To integrate YMChat into your Android project using gradle, specify the following configurations in App level `build.gradle` file

```gradle
repositories {
    jcenter()
    // Add these two lines 
    maven { url "https://jitpack.io" }
    maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }
}

...
...
...

dependencies {
    ...
    ...
	   implementation 'com.github.yellowmessenger:YMChatbot-Android:v1.4.+
}
```

Note: By puting + at the end, you need not to worry about updating and releaseing your app for every patch we are making in SDK.
Still, if you want to use exact and latest version please visit the github repository mentioned
[https://github.com/yellowmessenger/YMChatbot-Android/releases](https://github.com/yellowmessenger/YMChatbot-Android/releases)

### File provider
Note: Only for version v1.4.0 & above

Add following key in your `strings.xml` file, this will override default file provider used by SDK.

Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"
Example - applicationId : "com.abc.xyz" then  application_id_for_provider = com.abc.xyz.fileprovider

```xml
<string name="application_id_for_provider">your.application.id.fileprovider</string>
```

## Basic Usage
Import the YMChat library in your Activity.

```java
import com.yellowmessenger.ymchat.YMChat;
import com.yellowmessenger.ymchat.YMConfig;
```

After the library is imported the basic bot can be presented with few lines as below 

Example `onCreate` method of the Activity:

```java

@Override
protected void onCreate(Bundle savedInstanceState) {
	super.onCreate(savedInstanceState);
    // Dummy bot id. (Purrs a lot)
    String botID = "x1587041004122";
	
    //Get YMChat instance
	YMChat ymChat = YMChat.getInstance();
	ymChat.config = new YMConfig(botId);
	setContentView(R.layout.activity_main);
	FloatingActionButton fab = findViewById(R.id.fab);
	fab.setOnClickListener(view -> {
		//Starting the bot activity
		try {
            ymChat.startChatbot(this);
          } catch (Exception e) {
           //Catch and handle the exception
            e.printStackTrace();
          }
	});
}
```

## YMConfig
YMConfig can be used to set the bot id and other bot related settings. It is recommended to set all appropriate config **before** starting the bot

### Initialize YMConfig
YMConfig requires `botID` to initialize. All other settings are optional.

```java
ymChat.config = new YMConfig("<BOT-ID>");
```

### YM AuthenticationToken
ymAuthenticationToken is used to associate an identity of the user with the chat bot.

Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since **inception**.

```java
ymChat.config.ymAuthenticationToken = "your-token"
```

Note: History will load only when `Show history` flag is enabled in the channel settings

### Push Notifications
YMChat supports firebase notifications. Assign your `FCM token` to deviceToken

```java
ymChat.config.deviceToken = "your-firebase-device-token"
```

Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)

### Payload
Additional information can be passed in the form of key value pair from app to bot using payload.

```java
HashMap<String, Object> payloadData = new HashMap<>();
//Setting Payload Data
payloadData.put("some-key", "some-value");
ymChat.config.payload = payloadData;
```

Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown

For passing data from bot to app refer bot [Bot Events](#bot-events)

:::note payload security
Payload is securely passed in HTTPS post request to protect the information passed in it
:::

### On Premise deployments
Your on-prem deployment URL can be set to `customBaseUrl`

```java
ymChat.config.customBaseUrl = "https://yourcustomurl.com";
```

### Speech to Text
Speech to text can be enabled by setting the enableSpeech flag present in config. Default value is `false`

```java
ymChat.config.enableSpeech = true
```

### Colors
#### Status bar
Status bar color can be set on `statusBarColor` color variable

```java
ymChat.config.statusBarColor = R.color.red
```

#### Close button
Close button color can be set on `closeButtonColor`
```java
ymChat.config.closeButtonColor = R.color.white
```

## Starting the bot
Once the config is set, chat bot can be presented by calling `startChatbot()` and passing your Activity context as an argument

```java
ymChat.startChatbot(this);
```

## Bot Events
Bot events are used to pass information from bot to app. Events from bot can be handled using event Listeners.  Simply define the `onSuccess` method of `onEventFromBot` listener.

```java
ymChat.onEventFromBot(botEvent -> {
	switch (botEvent.getCode()) {
	case "event-name": break;
	}
});
```

#### Bot close event
Bot close event is separately sent and it can be handled by listening to onBotClose event as mentioned below. To programatically close bot use `ymChat.closeBot()` method

```java
ymChat.onBotClose(() -> {
  Log.d("Example App", "Bot Was closed");
 });
```

## Close bot
Bot can be programatically closed using `closeBot()` function

```java
ymChat.closeBot();
```

## Dependencies
Following dependencies are used in chat bot SDK

```java
    implementation 'androidx.appcompat:appcompat:1.3.0'
    implementation 'androidx.legacy:legacy-support-v4:1.0.0'
    implementation 'com.google.android.material:material:1.3.0'
    implementation 'com.squareup.okhttp3:okhttp:4.7.2'
    implementation 'com.google.code.gson:gson:2.8.6'
    implementation 'androidx.multidex:multidex:2.0.1'

    testImplementation 'junit:junit:4.13.2'
    androidTestImplementation 'androidx.test.ext:junit:1.1.2'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'
```

## Permissions
We are declaring and asking for following permission in our manifest file

```java
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />

```

All permissions will be asked at run time except INTERNET.
For attachment (picking  file/images from phone storage)

```java
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

For voice input

```java
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
```

## Important
If facing problem in release build, add the following configuration in the app's proguard-rules.pro file.

```java
-keep public class com.yellowmessenger.ymchat.** {
   *;
}
```

## Demo App
A demo has been created to better understand the integration of SDK in Android app
[https://github.com/yellowmessenger/YmChatBot-Android-DemoApp](https://github.com/yellowmessenger/YmChatBot-Android-DemoApp)
