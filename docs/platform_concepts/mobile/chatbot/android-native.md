---
title: Android Native Chatbot SDK
sidebar_label: Android Native SDK
---

## Installation

### Gradle

To integrate YellowChatBot into your Android project using gradle, specify the following configurations in App level `build.gradle` file

```gradle
repositories {
    jcenter()
    // Add these two lines
      maven {
            url "https://maven.dyte.in"
        }
        maven {
            url "https://jitpack.io"
            credentials {
                username="jp_i126eu1nt9chsog19kb4ks6lm8"
            }
        }
}

...
...
...

dependencies {
    ...
    ...
	   implementation 'com.github.yellowmessenger:android-chatbot-yellowai:dev-SNAPSHOT'
}
```

### File provider

Note: Only for version v1.4.0 & above

Add following key in your `strings.xml` file, this will override default file provider used by SDK.

Overriding the file provider path will avoid conflict with other app using YellowChatBot SDK. You can use your application id and suffix it with ".fileprovider"
Example - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider

```xml
<string name="application_id_for_yellow_chatbot_provider">your.application.id.fileprovider</string>
```

## Initialization

The SDK can be initialised by passing `Application` and `allowPersistance` defaults to true

```kotlin
YellowChatBot.install(app: this, allowPersistance: true)
```

#### applicationContext

Application context is used to initialise the service which runs XMPP and initialise Database

#### allowPersistance

allowPersistance is used to tell application weather to use persistance database or non-persistance database, by default uses persistance storage

## Basic Usage

Import the YMChat library in your Activity.

```kotlin
import ai.yellow.chatbot.sdk.YellowChatBot
import ai.yellow.chatbot.sdk.vo.YellowBotConfig
```

After the library is imported the basic bot can be presented with few lines as below

Example `onCreate` method of the Activity:

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // Set Process lifecycle listener
    // This is required to listen to application state
    ProcessLifecycleOwner.get().lifecycle.addObserver(YellowAppProcessLifeCycleListener())

    //
    YellowChatBot.install(this, allowPersistance = false)

    val botId = "x1645602443989"
    val yellowBotConfig: YellowBotConfig = YellowBotConfig(botId)
    val fab = findViewById(R.id.floatingActionButton);
    fab.setOnClickListener {
        // Starting the bot activity
        try {
            YellowChatBot.startChatBot(this, yellowBotConfig)
        }
        catch (e: Exception) {
           //Catch and handle the exception
            e.printStackTrace();
          }
    }
}
```

## YMConfig

YMConfig can be used to set the bot id and other bot related settings. It is recommended to set all appropriate config **before** starting the bot

### Initialize YMConfig

YMConfig requires `botId` to initialize. All other settings are optional.

```kotlin
val yellowBotConfig: YellowBotConfig = YellowBotConfig(botId)
```

### YM AuthenticationToken

ymAuthenticationToken is used to associate an identity of the user with the chat bot.

Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since **inception**.

```kotlin
 yellowBotConfig.ymAuthenticationToken = "your-token"
```

### Push Notifications

YMChat supports firebase notifications. Assign your `FCM token` to deviceToken

```java
yellowBotConfig.deviceToken = "your-firebase-device-token"
```

:::note Mapping Firebase service key against Bot Id
Firebase service account Json file is required to send notifications. You need to map service account json file against your bot ID. Request your contact person from `yellow.ai` to share api for same. For more information about Firebase service account json file and how to get it check link [here](https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key)
:::

### Payload

Additional information can be passed in the form of key value pair from app to bot using payload.

```kotlin
val payload: MutableMap<String, Any> = mutableMapOf()
//Setting Payload Data
payloadData.put("some-key", "some-value");
yellowBotConfig.payload = payload
```

Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown

For passing data from bot to app refer bot [Bot Events](#bot-events)

:::note payload security
Payload is securely passed in HTTPS post request to protect the information passed in it
:::

### Region Specific deployments

For bots deployed in specific region, the region can be set to `region`

```kotlin
yellowBotConfig.region = "rx";
```

Here rx = r1,r2,r3,r4,r5 etc.

## Starting the bot

Chat bot can be presented by calling `startChatbot()` and passing your Activity context, YellowBotConfig as an arguments

```kotlin
YellowChatBot.startChatBot(context: this, yellowBotConfig)
```

## Get Chatbot Fragment

If clients want to use Chatbot Fragment in their application, they can call the following method to get the fragment, by passing YellowBotConfig as a argument

```kotlin
 val chatbotView = YellowChatBot.getChatBotView(yellowBotConfig)
```

Clients can embed this fragment in their activity and begin the transaction as they do for any other fragment.

## Bot Events

Bot events are used to pass information from bot to app. Events from bot can be handled using event Listeners. Simply define the `onSuccess` method of `onEventFromBot` listener.

```kotlin
YellowChatBot.onEventFromBot(object : BotEventListener {
            override fun onSuccess(botEventMessage: EventMessage) {
                when (botEventMessage.code) {
                    // Handle data based in the code
                }
            }
        })
```

#### Bot close event

Bot close event is separately sent and it can be handled by listening to onBotClose event as mentioned below.

```kotlin
  YellowChatBot.onBotClose(object : BotCloseEventListener{
            override fun onClosed() {
                Log.d("Example App", "Bot Was closed");
            }
        })
```

## Register Device

If you want to receiving push notifications without or before launching the bot, you can register your device.
To use this api `apiKey`, `botId`, `deviceToken` and `ymAuthenticationToken` are mandatory parameters.

```kotlin
    try {
             val config = YellowBotConfig(
                botId = "bot Id",
                ymAuthenticationToken = "unique id",
                deviceToken = "FCM token"
            )
            YellowChatBot.registerDevice(
                apiKey = "api-key",
                yellowBotConfig = config
            ).observe(this) {
                when (it.yellowStatus) {
                    YellowStatus.SUCCESS -> {
                        Log.i(TAG, "Device registered successfully for push notification")
                    }
                    YellowStatus.LOADING -> {
                        //show loader
                    }
                    YellowStatus.ERROR -> {
                        Log.i(TAG, it.message ?: "Error occurred while registering device")
                    }
                }
            }
        } catch (e: Exception) {
            //Catch and handle the exception
            e.printStackTrace();
        }
```

## Unlink Device Token

If you want to stop receiving push notifications you can unlink the device.
To use this api `apiKey`, `botId` and `deviceToken` are mandatory parameters.
Device token typically is unlinked when the user logs out of the app.

```kotlin
    try {
             val config = YellowBotConfig(
                botId = "bot Id",
                deviceToken = "FCM token"
            )
            YellowChatBot.unlinkDevice(
                apiKey = "api-key",
                yellowBotConfig = config
            ).observe(
                this
            ) {
                when (it.yellowStatus) {
                    YellowStatus.SUCCESS -> {
                        Log.i(TAG, "Device unlinked successfully")
                    }
                    YellowStatus.LOADING -> {
                        //show loader
                    }
                    YellowStatus.ERROR -> {
                        Log.i(TAG, it.message ?: "Error occurred while unlinking device")
                    }
                }
            }
        } catch (e: Exception) {
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

```kotlin
        try {
              val config = YellowBotConfig(botId = "bot Id", ymAuthenticationToken = "your ymAuthenticationToken")

            YellowChatBot.getUnreadMessageCount(
                yellowBotConfig = config
            ).observe(
                this
            ) {
                when (it.yellowStatus) {
                    YellowStatus.SUCCESS -> {
                        val data: YellowUnreadMessageResponse =
                            it.data?.data as YellowUnreadMessageResponse
                        Log.i(TAG, "Unread messages ${data.unreadCount}")
                    }
                    YellowStatus.LOADING -> {
                        //show loader
                    }
                    YellowStatus.ERROR -> {
                        Log.i(
                            TAG,
                            it.message ?: "Error occurred while fetching the unread message count"
                        )
                    }
                }
            }
        } catch (e: Exception) {
            //Catch and handle the exception
            e.printStackTrace();
        }
```

## Mandatory overrides

Please add the following key in your strings.xml file and change the value.

```xml
<string name="application_id_for_yellow_chatbot_provider">your.app.id.fileprovider</string>
```

By doing this all the images/files will be sandboxed for your app.

## Optional overrides

### colors.xml

```xml
    <color name="ym_primaryColor">#5C2CA0</color>
    <color name="ym_primaryLightColor">#F7EFFF</color>
    <color name="ym_secondaryColor">#40CECC</color>
    <color name="ym_colorOnPrimary">#FFFFFF</color>
    <color name="ym_colorOnSecondary">@color/ym_primaryTextColor</color>
    <color name="ym_primaryTextColor">#384248</color>
    <color name="ym_secondaryTextColor">#888E91</color>
    <color name="ym_app_bar_color">@color/ym_primaryColor</color>
    <color name="ym_app_bar_text_color">@color/ym_colorOnPrimary</color>
```

## Informational

### Versions

YellowInbox SDK usage following minimumSdkVersion targetSdkVersion.

minSdkVersion 21
targetSdkVersion 30

## Dependencies

Following dependencies are used in chat bot SDK

```kotlin
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
    implementation 'androidx.core:core-ktx:1.6.0'
    implementation 'androidx.appcompat:appcompat:1.3.0'
    implementation 'com.google.android.material:material:1.3.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.2'
    implementation 'androidx.legacy:legacy-support-v4:1.0.0'
    implementation 'androidx.fragment:fragment-ktx:1.3.2'
    implementation "androidx.lifecycle:lifecycle-extensions:2.2.0"
    // kapt "androidx.lifecycle:lifecycle-compiler:2.4.0"

    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
    implementation 'com.squareup.okhttp3:logging-interceptor:4.7.2'

    //Dagger
    implementation 'com.google.dagger:dagger:2.35.1'
    kapt 'com.google.dagger:dagger-compiler:2.35.1'
    implementation 'com.google.dagger:dagger-android-support:2.35.1'
    kapt 'com.google.dagger:dagger-android-processor:2.35.1'

    //Lifecycle
    implementation 'androidx.lifecycle:lifecycle-livedata-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-common-java8:2.3.1'

    // Glide
    implementation 'com.github.bumptech.glide:glide:4.12.0'
    annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'

    implementation 'androidx.room:room-runtime:2.3.0'
    kapt 'androidx.room:room-compiler:2.3.0'

    //Smack
    implementation "org.igniterealtime.smack:smack-android-extensions:4.2.0"
    implementation "org.igniterealtime.smack:smack-tcp:4.2.0"

    //Event bus
    implementation 'org.greenrobot:eventbus:3.2.0'

    //Play-services-location
    implementation 'com.google.android.gms:play-services-location:18.0.0'

    //Flexbox
    implementation 'com.google.android.flexbox:flexbox:3.0.0'

    api 'androidx.lifecycle:lifecycle-process:2.3.1'

    // dyte SDK
    implementation "com.dyteclientmobile:sdk:0.17.1"


    testImplementation 'junit:junit:4.+'
    androidTestImplementation 'androidx.test.ext:junit:1.1.3'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'
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

#### Location

If your bot requires Location permission please add following permission in your manifest

```java
     <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

## Important

If facing problem in release build, add the following configuration in the app's proguard-rules.pro file.

```java
-keep public class ai.yellow.chatbot.** {
   *;
}
```
