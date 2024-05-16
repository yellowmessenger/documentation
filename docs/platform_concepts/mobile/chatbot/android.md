---
title: Android Chatbot SDK
sidebar_label: Android
---

Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken

Version 2.x has fix for this issue and thus a correct ymAuthenticationToken is always passed.
However, as the correct ymAuthentication is different from the corrupted token, our server treats this user as a new user which leads to a complete loss of history of user conversations.
The user will have a fresh start after updating the app.

Note:

1. ymAuthentication was corrupted only when it contained `=` character in 1.x versions
2. This issue was happening only on Android platform.

For more info feel free to email us at mobile@yellow.ai

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
	   implementation 'com.github.yellowmessenger:YMChatbot-Android:v2.2.+
}
```

Note: By puting + at the end, you need not to worry about updating and releaseing your app for every patch we are making in SDK.
Still, if you want to use exact and latest version please visit the github repository mentioned
[https://github.com/yellowmessenger/YMChatbot-Android/releases](https://github.com/yellowmessenger/YMChatbot-Android/releases)

### File provider

:::note
The following key in your strings.xml file is only required for version v1.4.0 to v2.5.0. Starting from version v2.5.0, it is no longer necessary to add this key.
:::

Add following key in your `strings.xml` file, this will override default file provider used by SDK.

Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"
Example - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider

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

ymAuthenticationToken is used to associate an identity of the user with the chat bot. This token is unique and remains constant for each individual user, and should be kept secure.

Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since **inception**.

```java
ymChat.config.ymAuthenticationToken = "your-token"
```

:::note
History will load only when `Show history` flag is enabled in the channel settings.
:::

### Use Secure YM Auth

You can pass `useSecureYmAuth` to enable additional security to your chat history. This safeguards your chatbot from unauthorized access even if an unauthorized party tries to access the token. 

To enable secure YmAuth, set `useSecureYmAuth` to `true`.

```java
ymChat.config.useSecureYmAuth = true
```

:::note
For more detailed information on how to set up secure YMAuthentication, click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/secure-ymauth).  
:::

### Push Notifications

YMChat supports firebase notifications. Assign your `FCM token` to deviceToken

```java
ymChat.config.deviceToken = "your-firebase-device-token"
```
:::note Mapping Firebase service key against Bot Id
To [set up push notifications](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/push-notifications-sdks), a Firebase service account JSON file is required. You need to map the service account JSON file against your bot ID. For detailed instructions on obtaining and using the Firebase service account JSON file, please refer to the link provided [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key).
:::

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

#### Trigger journey

A specific journey can be triggered on launch, by passing the slug in the payload.

```java
HashMap<String, Object> payloadData = new HashMap<>();
//Setting Payload Data
payloadData.put("JourneySlug", "checkout-cart");
ymChat.config.payload = payloadData;
```

### On Premise / Region Specific deployments

Your on-prem deployment URL can be set to `customBaseUrl`

```java
ymChat.config.customBaseUrl = "https://yourcustomurl.com";
```

If the bot is deployed in a specific region (Example: r1,r2,r3..rn) on yellow.ai cloud, set the `customBaseUrl` as follows

```java
ymChat.config.customBaseUrl = "https://rx.cloud.yellow.ai";
```
Here rx = r1,r2,r3,r4,r5 etc.

### Custom loader

You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif

```java
ymChat.config.customLoaderUrl = "https://example.com/your/custom/image.gif"
```

### V2 bot

You can enable V2 bot by setting the version in config. Default value is 1

```java
ymChat.config.version = 2;
```

### Speech to Text

#### Enable Speech to Text

Speech to text can be enabled by setting the enableSpeech flag present in config. Default value is `false`

```java
ymChat.config.enableSpeech = true
```

:::note
To enable Speech to text please add record audio permission  (`<uses-permission android:name="android.permission.RECORD_AUDIO" />`) in manifest file.
:::

#### Mic Icon Color

You can change the mic button icon color by setting `fabIconColor` in `enableSpeechConfig` of YMConfig:

```java
ymChat.config.enableSpeechConfig.fabIconColor = "#000000"
```

### Mic Background Color

You can change the mic button bakground color by setting `fabBackgroundColor` in `enableSpeechConfig` of YMConfig:

```java
ymChat.config.enableSpeechConfig.fabBackgroundColor = "#0000FF"
```

### Hide Input Bar

You can hide the input bar while bot is loading by setting the disableActionsOnLoad flag present in config. Default value is `false`

```java
ymChat.config.disableActionsOnLoad = true
```
### Use Lite version 

You can use lite version of the bot by setting the useLiteVersion flag present in config. Default value is `false`

```java
ymChat.config.useLiteVersion = true
```

### Colors

#### Status bar

Status bar color can be set on `statusBarColor` color variable

```java
ymChat.config.statusBarColor = R.color.red
```

or

```java
ymChat.config.statusBarColorFromHex = "#FF0000"
```

Note: if both `statusBarColor` and `statusBarColorFromHex` is used then `statusBarColorFromHex` will take priority

#### Close button

Close button color can be set on `closeButtonColor`

```java
ymChat.config.closeButtonColor = R.color.white
```

or

```java
ymChat.config.closeButtonColorHex = "#FFFFFF"
```

Note: if both `closeButtonColor` and `closeButtonColorFromHex` is used then `closeButtonColorFromHex` will take priority.

***

### Theme setup

You can customize the appearance of your chatbot interface by applying a theme. Using the YMConfig's theme property, you can modify various aspects of your chatbot, including its name, description, primary and secondary colors, icon, and click icon.

You can set the theme using the `theme` property of the YMConfig object.

```java
YMTheme theme = new YMTheme(); // YMTheme will holds the theme properties for your chatbot.

// update properties of theme variable

ymChat.config.theme = theme; // sets the theme to your bot config
```

#### Set bot name

Define your bot's name using `theme.botName`.

```java
theme.botName = "Demo Bot Name";
```

#### Set bot description

Provide a description for your bot using `theme.botDesc`.

```java
theme.botDesc = "Demo Bot Description";
```

#### Set bot primary color

Customize the primary color of your bot using `theme.primaryColor`.

```java
theme.primaryColor = "#000000";
```

#### Set bot secondary color

Define the secondary color of your bot using `theme.secondaryColor`.

```java
theme.secondaryColor = "#FFFFFF";
```
#### Set bot bubble background color

Customize the background color of your bot bubble or message using `theme.botBubbleBackgroundColor`.

```java
theme.botBubbleBackgroundColor = "#0000FF";
```

#### Set bot icon

Choose an icon to represent your bot using `theme.botIcon`.

```java
theme.botIcon = "https://cdn.yellowmessenger.com/XJFcMhLpN6L91684914460598.png"
```

#### Set bot click icon

Define an icon for the minimized state of your bot using `theme.botClickIcon`.

```java
theme.botClickIcon = "https://cdn.yellowmessenger.com/XJFcMhLpN6L91684914460598.png"
```
***

## Starting the bot

Once the config is set, chat bot can be presented by calling `startChatbot()` and passing your Activity context as an argument

```java
ymChat.startChatbot(this);
```

## Get Chatbot Fragment

If clients want to use Chatbot Fragment in thier application, they can call the following method to get the fragment

```java
Fragment chatbotView = ymChat.getChatBotView(this);
```

Clients can embed this fragment in their activity and begin the transaction as they do for any other fragment.

## Bot Events

Bot events are used to pass information from bot to app. Events from bot can be handled using event Listeners. Simply define the `onSuccess` method of `onEventFromBot` listener.

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

## Reload bot

To reload the bot with the same configuration, use the `reloadBot()` function. This will reload the bot without closing and reopening it.

```java
ymChat.reloadBot();
```

## Register Device

If you want to receiving push notifications without or before launching the bot, you can register your device.
To use this api `apiKey`, `botId`, `deviceToken` and `ymAuthenticationToken` are mandatory parameters.

```java
    try {
            YMChat ymChat = YMChat.getInstance();
            //Mandatory config  `botId`, `deviceToken` and `ymAuthenticationToken`
            YMConfig ymConfig = new YMConfig("your bot id");
            ymConfig.deviceToken = "your FCM Token";
            ymConfig.ymAuthenticationToken = "your ymAuthentiction token";
            // Set custom base url in case your bot does not belong to india region and yellow cloud
            // Example- If your bot is in `r5` region custom base url would be `https://r5.cloud.yellow.ai
            // ymConfig.customBaseUrl = "https://r5.cloud.yellow.ai";
            ymChat.registerDevice(apiKey, ymConfig, new YellowCallback() {
                @Override
                public void success() {
                    Toast.makeText(MainActivity.this, "Device Registered", Toast.LENGTH_SHORT).show();
                }

                @Override
                public void failure(String message) {
                    Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();
                }
            });
        } catch (Exception e) {
            //Catch and handle the exception
            e.printStackTrace();
        }
```

## Unlink Device Token

If you want to stop receiving push notifications you can unlink the device.
To use this api `apiKey`, `botId` and `deviceToken` are mandatory parameters.
Device token typically is unlinked when the user logs out of the app.

```java
    try {
            YMChat ymChat = YMChat.getInstance();
            YMConfig ymConfig = new YMConfig("your bot id");
            // Set the FCM token as device token, this is required so that it can be removed and customer stop receiving the notification
            ymConfig.deviceToken = "your FCM Token";
            // Set custom base url in case your bot does not belong to india region and yellow cloud
            // Example- If your bot is in `r5` or EURO region custom base url would be `https://r5.cloud.yellow.ai
            // ymConfig.customBaseUrl = "https://r5.cloud.yellow.ai";
            ymChat.unlinkDeviceToken(apiKey, ymConfig, new YellowCallback() {
                @Override
                public void success() {
                    Toast.makeText(MainActivity.this, "Token unlinked", Toast.LENGTH_SHORT).show();
                }

                @Override
                public void failure(String message) {
                    Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();
                }
            });
        } catch (Exception e) {
            //Catch and handle the exception
            e.printStackTrace();
        }
```

:::note API Key
API key can be generated/found by visiting `https://cloud.yellow.ai` -> Overview -> Configure -> API Key section

Existing client can upgrade their dependency to `v2.1.+` and replace exisitng key with new API Key.
Client using SDK version below `v2.1.0` will have no impact.
:::

## Unread Message Count

If you want to show an indicator in your app if there is any unread messages, you can achieve that by calling the given api when bot is in closed state.
Pre condition to use this api is that customer must have opened the bot at least once with `ymAuthenticationToken` otherwise you will receive an error message.
To use this api `botId` and `ymAuthenticationToken` are mandatory parameters.

```java
        try {
            YMChat ymChat = YMChat.getInstance();
            YMConfig ymConfig = new YMConfig("your bot id");
            // `ymAuthenticationToken` is required to identify the right
            ymConfig.ymAuthenticationToken = "your ymAuthentiction token";
            // Set custom base url in case your bot does not belong to india region and yellow cloud
            // Example- If your bot is in `r5` region custom base url would be `https://r5.cloud.yellow.ai
            // ymConfig.customBaseUrl = "https://r5.cloud.yellow.ai";
            ymChat.getUnreadMessagesCount(ymConfig, new YellowDataCallback() {
                @Override
                public <T> void success(T data) {
                    YellowUnreadMessageResponse response = (YellowUnreadMessageResponse) data;
                    Toast.makeText(MainActivity.this, "Unread messages - " + response.getUnreadCount(), Toast.LENGTH_SHORT).show();
                }

                @Override
                public void failure(String message) {
                    Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();
                }
            });
        } catch (Exception e) {
            //Catch and handle the exception
            e.printStackTrace();
        }
```

## Revalidate Token

When your authentication token expires, you can use revalidate token to generate a new token.

Once your secure YMAuth is enabled, whenever your authentication token expires, the server will automatically initiate a request to get a fresh token from Yellow.

When you are using the `ym-revalidate-token` event, your application must include both the `apiToken` and `refreshSession` as mandatory parameters. This ensures a seamless and secure revalidation process.

```java
    try {
        YMChat ymChat = YMChat.getInstance();
        ymChat.revalidateToken("new token", refreshSession);
    } catch (Exception e) {
        //Catch and handle the exception
        e.printStackTrace();
    }
```
***

:::note 
For more detailed information on how to set up secure YMAuthentication, click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/secure-ymauth).
:::

***

## Send Event To Bot

If you intend to transmit data back to the bot after it has been successfully launched and is in a running state, you can make use of this API.

To use this api `event` is a mandatory parameter.

```java
    try {
        YMChat ymChat = YMChat.getInstance();

        HashMap<String, Object> payloadData = new HashMap<>();
        //Setting Payload Data
        payloadData.put("some-key", "some-value");

        YMEventModel model = new YMEventModel(code, payloadData);
        ymChat.sendEventToBot(model);
    } catch (Exception e) {
        e.printStackTrace();
    }
```

:::note 
For more detailed information on how to send event to bot workflow, click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/send-event-workflow). 
:::

***

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
```

All permissions will be asked at run time except INTERNET.
For attachment (picking file/images from phone storage)

```java
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

### Conditional Permission

#### Record Audio

If you want to use Speech to text feature please add following permission in your manifest

```java
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
```

#### Location

If your bot requires Location permission please add following permission in your manifest

```java
     <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
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
