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

**4. Is there a documentation on Mobile SDK?**

Refer to the following documentation links for mobile SDK documentation:

* [IOS](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios)
* [Android](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/android)
* [Cordova](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/cordova)
* [React Native](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/react-native)
* [Flutter](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/flutter)
* [Xamarian](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/xamarin)

**5. How to enable chat history?**

To enable chat history, follow these steps:
1. Ensure that you need to pass ymAuthenticationToken in the config before presenting the bot.
```
if (app.data.event && app.data.event.code === 'authenticate') {
    return app.sendEvent({
        code: "verifiedUser",
        data: app.data.event.payload
    });
}
```
2. Ensure the **Reset Context for every load** checkbox is unchecked in the dashboard settings for "app.yellowmessenger.com" or "app.yellow.ai".

   ![](https://i.imgur.com/VVSmy15.png)
3. Ensure **Show history of the conersation** is enabled for [cloud.yellow.ai](https://cloud.yellow.ai).

   <img src="https://i.imgur.com/PoHJ0Yh.png)" alt="drawing" width="90%"/>


**6. The push notifications are not working as expected. How to resolve this issue?**

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

**7. How to map Firebase Server JSON to a Bot ID?**

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

**8. In Android, can we add a left-to-right view transition/animation or any animation?**

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

**9. How to access the payload in v2 chatbots built on [cloud.yellow.ai](https://cloud.yellow.ai)**?

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

<img src="https://i.imgur.com/3fmiI63.png)" alt="drawing" width="60%"/>








