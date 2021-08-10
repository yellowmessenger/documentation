---
title: Agent SDK for Android
sidebar_label : Android
---

## SDK integration
1. You can download the sdk [here](https://firebasestorage.googleapis.com/v0/b/ym-mobile-app.appspot.com/o/android-agent-sdk%2FYellowInbox_v1.0.0.aar?alt=media&token=055feb63-3599-4b75-9abd-e46d72ddb35e)
2. Add the SDK to your project

## Initialization  
The SDK can be initialised by passing API_KEY, USER_ID and BOT_ID to the init method.

```java
YellowInbox.init(applicationContext : Context, 
    apiKey : String, 
    userId: String,
    botId : String
) : LiveData<Resource<Void>>
```

#### applicationContext
Application context is used to initialise the service which runs XMPP.

#### apiKey
API_KEY will be provided by yellow.ai, It is clients responsibility to keep the API_KEY safe. 
This is a mandatory parameter.

#### userId
UserId will be the id registered/provided to yellow.ai by the client to authenticate their employee. This is a mandatory parameter.

#### botId
BOT_ID will be provided by yellow.ai. 
This is a mandatory parameter.

#### Example
```java
import android.app.Application
import androidx.lifecycle.ProcessLifecycleOwner
import com.yellowmessenger.YellowInbox
import com.yellowmessenger.YmAppProcessLifeCycleListener

class TestApplication : Application() {

  override fun onCreate() {
    super.onCreate()

    //Set Process lifecycle listener
    // This is required to listen to application state 
    ProcessLifecycleOwner.get()
        .lifecycle
        .addObserver(YmAppProcessLifeCycleListener())

    // Initialise the SDK
    YellowInbox.init(applicationContext, "API_KEY", "USER_ID", "BOT_ID")
           .observe(lifecycleOwner, Observer {
              when(it.status) {
              SUCCESS-> Log.d(TAG, "SDK initialised successfully")
              ERROR -> Log.d(TAG, "Error while initialising the SDK")
              else-> null
         }
      })
    }
}
```

## Overview
Overview view is provided as a fragment and activity

### Overview Activity
If clients want to use Overview Activity in their application, they can call the following method to get the Activity.
```java
YellowInbox.startOverviewActivity(context:Context)
```

### Overview Fragment
If clients want to use Overview Fragment in their application, they can call the following method to get the fragment

```java
val fragment =YellowInbox.getOverviewFragment()
```
Clients can embed this fragment in their activity and begin the transaction as they do for any other fragment.

## My Chat
Chats view is provided as a fragment and activity

### My Chat Activity
If clients want to use MyChat Activity in their application, they can call the following method to get the Activity.
```java
YellowInbox.startMyChatActivity(context:Context)
```

### My Chat Fragment
If clients want to use MyChat Fragment in their application, they can call the following method to get the fragment
```java
val fragment =YellowInbox.getMyChatsFragment()
```
Clients can embed this fragment in their activity and begin the transaction as they do for any other fragment.

## Notifications
### Background Notification	

To receive firebase notification clients need to send Firebase device token to SDK. To do so the following method can be used.
```java
YellowInbox.setFirebaseDeviceToken("FIRE_BASE_DEVICE_TOKEN")
```
:::note
Make sure to call this function when the device token is changed.
:::

Clients will receive firebase notification if the app is not running in foreground or in background, or if Ticket Create, User Message or Agent is added as collaborator actions happening on a ticket.

Clients need not to listen to these notifications when the app is running, SDK will take care of such events.

Clients need to call following method if they want to take user to appropriate view once user clicks on notification delivered in system tray and sent by yellow.ai

```java
fun getDataFromIntent(): MutableMap<String, Any?> {
   val data = mutableMapOf<String, Any?>()
   if (intent.extras != null) {
     for (key in intent.extras!!.keySet()) {
       val value = intent.extras!![key]
       data[key] = value
     }
     this.intent.putExtras(Bundle.EMPTY)
   }
   return data
}

val data: Map<String, Any?> = getDataFromIntent()

if (data.containsKey("ym")) {
  YellowInbox.handleBackgroundNotification(
    context = applicationContext,
    data = data
  )
}
```

Notification data will get delivered as intent extra in launcher Activity. Clients can use the above mentioned method to fetch data from Intent and create a map.

### Local Notification
Clients will receive local notification that will be triggered by the SDK based on the events received over XMPP.
In case a client wants to override the normal behaviour of notification or want to update title/body, they can do so by overriding the YmMessageReceiver class.

Clients need to call following method for listening to local event notification and modifying them

```java
YellowInbox.setLocalReceiver(receiver:BroadcastReceiver)
```

Example (How to use YmMessageReceiver)

```java
import com.yellowmessenger.YmMessageReceiver
import com.yellowmessenger.ui.xmpp.model.YmTicketCreateModel
import com.yellowmessenger.ui.xmpp.model.YmXMPPMessageModel

class TestMessageReceiver : YmMessageReceiver() {
    override fun onTicketCreateEventReceived(
        title: String?,
        body: String?,
        model: YmTicketCreateModel
    ) {
        super.onTicketCreateEventReceived(title, body, model)
    }

    override fun onTicketUpdateEventReceived(
        title: String?,
        body: String?,
        model: YmXMPPMessageModel
    ) {
        super.onTicketUpdateEventReceived(title, body, model)
    }
}
```

Clients will receive events for Ticket Create and Ticket Update (new message, agent added as collaborator).
We recommend not to modify model data as it may result in not showing notification at all. Model is exposed so the client can make use of data present in it to create the required title and body.


### Video call Notification
If a client is receiving a video call notification while the app is in background, there is no special handling required for it. Simply tapping on notification will take the user to the appropriate view and show a dialog to answer/decline the  call.

In case the app is running and in the foreground, the client needs to listen to Firebase notification and call the following function.

Assuming client has already have a service which overrides FirebaseMessagingService

1. Client need to set the Firebase token in case device token changes by calling
```java
YellowInbox.setFirebaseDeviceToken(token)
```

2. In onMessageReceived(message:RemoteMessage) function client need to check if message contains “callJoinUrl” call the SDK function to handle it

```java
if (message.data.containsKey("callJoinUrl") && !message.data["callJoinUrl"].isNullOrEmpty()) {
    YellowInbox.handleBackgroundNotification(applicationContext, message.data)
}
```

Example

```java
class YmSupportFirebaseMessagingService : FirebaseMessagingService() {
    override fun onNewToken(token: String) {
        sendRegistrationToServer(token)
    }

    private fun sendRegistrationToServer(token: String) {
        val hasValidData = hasValidData(this.applicationContext)
        if (hasValidData) {
            YellowInbox.setFirebaseDeviceToken(token)
        }
    }

    override fun onMessageReceived(message: RemoteMessage) {
        super.onMessageReceived(message)
        if (message.data.containsKey("callJoinUrl") && !message.data["callJoinUrl"].isNullOrEmpty()) {
            YellowInbox.handleBackgroundNotification(applicationContext, message.data)
        }
    }
}
```
A call declined from notification can be joined from the Chat view by tapping on the call icon

## Agent Status
### Get Agent Status

To get availability status of logged in User against the bot id (Used for initialising the SDK), client can call the following method and observe on it.

```java
YellowInbox.getAgentStatus(): LiveData<Resource<YmAgentStatus>> 
```

Example
```java	
YellowInbox.getAgentStatus().observe(lifecycleOwner, Observer {
  when(it.status) {
    Resource.SUCCESS -> {
      val data:YmAgentStatus = it.data
    }
    Resource.ERROR -> {
      val msg:String = it.message
    }
    else -> {

    }
  }
})
```
	
### Set Agent Status

To set the status of logged in user against the bot id (Used for initialising the SDK), the client can call the following method and observe on it.
```java
YellowInbox.setAgentStatus(status: YmAgentStatus): LiveData<Resource<Void>> 
```

Example
```java	
YellowInbox.setAgentStatus(YmAgentStatus.BUSY)
  .observe(lifecycleOwner,Observer{
     when(it.status){
       Resource.SUCCESS -> {
         showToast("Status changed")
       }
       Resource.ERROR -> {
         val msg:String = it.message
       }
       else -> {

       }
   }
})
```

## Logout
By calling logout, all the services and notifications will be terminated. You can call this function when user logs out of the app
```java
YellowInbox.logout()
```

## Mandatory overrides
Please add the following key in your strings.xml  file and change the value.
```xml
<string name="application_id_for_provider">your.app.id.fileprovider</string>
```

By doing this all the images/files will be sandboxed for your app.

## Optional overrides
### colors.xml
You can update your colors.xml. By overriding these value you can the color as per your app design
```xml
<color name="ym_app_bar_color">@color/primaryColor</color>
<color name="ym_status_bar_color">@color/primaryDarkColor</color>
<color name="ym_app_bar_text_color">@color/white</color>
<color name="ym_app_bar_icon_color">@color/white</color>
<color name="ym_text_color_primary">@color/primaryTextColor</color>
<color name="ym_text_color_secondary">@color/secondaryTextColor</color>
<color name="ym_accent_color">@color/colorAccent</color>
<color name="ym_icon_color">#707E8A</color>
<color name="ym_event_msg_background_color">#EAF5FB</color> //light color
<color name="ym_sent_msg_background_color">#007ED4</color> //dark color
<color name="ym_rcv_msg_background_color">#F5F8FA</color> // light color
<color name="ym_progressbar_color">#14568E</color>
```

### Dimens.xml
By overriding the client can control size texts and progress bar.
```xml
<dimen  name="ym_title_size">16sp</dimen>
<dimen  name="ym_subtitle_size">14sp</dimen>
<dimen  name="ym_caption_size">12sp</dimen>
<dimen name="ym_body_size">14dp</dimen>
<dimen name="ym_progress_bar_size">36dp</dimen>
<dimen name="ym_in_view_progress_bar_size">24dp</dimen>
```

## Informational

### Versions
YellowInbox SDK usage following minimumSdkVersion targetSdkVersion.

minSdkVersion 21
targetSdkVersion 30

### Dependencies
YellowInbox SDK usage following dependencies.
```java
dependencies {

    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
    implementation 'androidx.core:core-ktx:1.5.0'
    implementation 'androidx.appcompat:appcompat:1.3.0'
    implementation 'com.google.android.material:material:1.3.0'
    implementation 'androidx.legacy:legacy-support-v4:1.0.0'
    implementation 'androidx.gridlayout:gridlayout:1.0.0'

    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
    implementation 'com.squareup.okhttp3:logging-interceptor:4.7.2'

    implementation 'com.google.dagger:dagger:2.27'
    implementation 'androidx.constraintlayout:constraintlayout:2.0.4'
    kapt 'com.google.dagger:dagger-compiler:2.27'

    implementation 'androidx.lifecycle:lifecycle-livedata-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.3.1'
    implementation 'androidx.lifecycle:lifecycle-common-java8:2.3.1'

    // Glide
    implementation 'com.github.bumptech.glide:glide:4.12.0'
    annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'

    //Smack
    implementation "org.igniterealtime.smack:smack-android-extensions:4.2.0"
    implementation "org.igniterealtime.smack:smack-tcp:4.2.0"

    //Event bus
    implementation 'org.greenrobot:eventbus:3.2.0'

    testImplementation 'junit:junit:4.+'
    androidTestImplementation 'androidx.test.ext:junit:1.1.2'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'
}
```

### Permissions

YellowInbox SDK usage following permissions.
```xml
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```
