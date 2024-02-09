---
title: Mobile SDK FAQs
sidebar_label: Mobile SDK FAQs
---

**1. How to change the colour of the bot's close button?**

You can change the colour of the close button in ym config. To know more about Close bot, click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android#close-bot).

**2. How to change the colour of the status bar?**

You can change the colour of the status bar in ym config. To know more about Status bar, click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android#use-lite-version).

**3. How to send bot events to the user?**

Use the following code snippet to send an event from bot code:

```
app.sendEvent({
   code: 'sendIOSEvent',
   data: {
      code: `user_logged_out`,
      data: JSON.stringify({"actionType": "login"})
   }
})
```

**4. Where can I find the documentation on Mobile SDK??**

Refer to the following documentation links for mobile SDK documentation:

* [IOS](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios)
* [Android](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android)
* [Cordova](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/cordova)
* [React Native](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/react-native)
* [Flutter](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/flutter)
* [Xamarian](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/xamarin)

**5. The push notifications are not working as expected. How to resolve this issue?**

There are two ways to debug push notifications: 

#### 1. Verify in demo app

You must download our demo app for iOS or Android and see if they are able to receive push notifications for these apps. Here are links to demo apps for [iOS](https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp) and [android](https://github.com/yellowmessenger/YmChatBot-Android-DemoApp).
If notifications are working as expected on a demo app, then  you have not configured the app properly to receive push notifications. You must refer to the code of the demo app to configure the push notifications.
If notifications are not displaying in the demo app, then you must follow these steps: 
* Ensure that you have enabled push notifications in the Firebase console. 
* Ensure that you have shared the service key and it is properly configured. 
* Ensure the device token is being passed from the SDK. A lot of times, an empty string gets passed from the SDK.

#### 2. Verify using firebase test notifications

You must see if they are able to receive notifications in their own app from the Firebase notification testing system. This will ensure notifications are properly configured on the app side. https://firebase.google.com/docs/cloud-messaging/ios/first-message

**6. How to map Firebase Server JSON to a Bot ID?**

Copy the following code and import to Postman. Enter the service key in the JSON body, replace your BotId in the request, and add an access token in the header against x-auth-token.

```
curl --location --request POST 'https://cloud.yellow.ai/api/data/vault/saveBotConfig?bot=x1640006213013' \
--header 'x-auth-token: access-token-of-bot-admin ' \
--header 'Content-Type: application/json' \
--data-raw '{
	"notification": {
    	"firebaseConfig": {
        	"serviceAccount": {}// Your Firebase Server json
    	}
	}
 }
```

**7. In Android, can we add a left-to-right view transition/animation or any animation?**

Yes, it is possible to add left-to-right view transition/animation. You need to override the activity style by adding the following lines to the **themes.xml** or **styles.xml** files.

This is an example of adding slide in left and slide out right transition. You can add your own animation based on your business needs.

```
<style name="YmAppTheme.NoActionBar">
<item name="windowActionBar">false</item>
<item name="windowNoTitle">true</item>
<item name="snackbarTextViewStyle">@style/YmSnackbarText</item>
<item name="android:windowAnimationStyle">@style/WindowAnimationStyle</item>
</style>


<style name="WindowAnimationStyle">

     <item name="android:activityOpenEnterAnimation">@android:anim/slide_in_left</item>

     <item name="android:activityOpenExitAnimation">@android:anim/slide_out_right</item>

     <item name="android:activityCloseEnterAnimation">@android:anim/slide_in_left</item>

     <item name="android:activityCloseExitAnimation">@android:anim/slide_out_right</item>

     <item name="android:windowEnterAnimation">@android:anim/slide_in_left</item>

     <item name="android:windowExitAnimation">@android:anim/slide_out_right</item>

</style>
```

**8. How to access the payload in v2 chatbots built on [cloud.yellow.ai](https://cloud.yellow.ai)**?

When payload is sent from mobile SDK, it is always a string of JSON. Ensure that you parse it before accessing the values.
Follow the steps below:

* Add a function node and code to parse the payload.

The following is a sample code:
```
return new Promise(resolve => {
          let payload = data.profile.payload
          if (typeof (payload) == "string") {
            payload = JSON.parse(payload)
          }
          resolve(payload)
        });
```

* Save the resolved value from the function node to a variable of type `Object` (for example, `payload` )
* Then, you can access the values of the variable ( For example, `{{{variables.payload.name}}}` )

<img src="https://i.imgur.com/3fmiI63.png" alt="drawing" width="60%"/>

**9. What is the file size of Mobile SDKs?**

* iOS SDK (Native): 158 KB
* Android SDK (Native): 80.7KB
* React Native: 39.2 KB
* Cordova SDK: 47.4 KB
* Xamarin SDK: 790KB
* Flutter SDK: 156 KB

**10. Why are TTS and STT features not supported on Mobile SDK?**

Mobile SDK uses a web view with the Webkit browser, which lacks the necessary capabilities for STT. To enable STT, native OS capabilities are required, implemented through a custom mic button. Disabling the "enableSpeech" flag can temporarily disable STT.  For further assistance, contact our [support team](mailto:support@yellow.ai).

**11. What is the maximum length of the YM auth token?**

The YM auth token can have a maximum length of 40 characters.

**12. What is the character set used to create the YM auth token?**

The character set comprises `A-Z a-z 0-9 _ -` including English uppercase and lowercase letters, numbers 0-9, underscore (_), and dash (-).

**13. How to handle notifications in the foreground when the bot is closed?**

Use the following code snippet to handle the notifications you receive when the app is open in the foreground.

```js
import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class MyFirebaseMessagingService: FirebaseMessagingService() {
    final
    var TAG: String = "YMLog"
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        Log.i(TAG + " Remote message", remoteMessage.toString())
        Log.i(TAG + " Remote message", remoteMessage.data.toString())
        super.onMessageReceived(remoteMessage)
    }
}
```

:::info
For more details regarding the integration, see 
* [Android SDK documentation](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android). 
* [Test app with Android SDK and Firebase integration](https://github.com/yellowmessenger/YmChatBot-Android-DemoApp)
:::

**14. How to trigger a specific bot flow when the user clicks on the notification?**

Use the following code snippet to open the bot and trigger a specific bot flow when the user clicks on the notification. 

```js
if (payloadData.get("botId") != null) {
    String botId = (String) payloadData.get("botId");
    YMChat ymChat = YMChat.getInstance();

    ymChat.config = new YMConfig(botId);
    ymChat.config.version = 2;
    ymChat.config.ymAuthenticationToken = "2gs20emoof1666164936076";

    if (payloadData.get("journeySlug") != null) {
        String journeySlug = (String) payloadData.get("journeySlug");
        botPayloadData.put("JourneySlug", journeySlug);
        ymChat.config.payload = botPayloadData;
    }

    try {
        ymChat.startChatbot(this);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

15. **How to deploy the bot for mobile SDK in the URL of a specific region?**

To deploy the bot for the mobile SDK in a specific region using a custom base URL, replace "rx" in the below URL with the specific region identifier (r1, r2, r3...) where you want to deploy the bot. Here rx = r1, r2, r3, r4, r5.

```
ymChat.config.customBaseUrl = "https://rx.cloud.yellow.ai";
```

This configuration ensures that the bot is deployed in the specified region on the Yellow.ai cloud.




