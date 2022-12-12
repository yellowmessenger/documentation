---
title: Mobile SDK FAQs
sidebar_label: Mobile SDK FAQs
---

**1. How can we change the colour of the bot close button, which is currently white?**

You can changes close button color from ym config. For more information, see [Close bot](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android#close-bot).


**2. How to change the status bar color?**

You can change the colour of the status bar in ym config. For more information, see [Status bar](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/android/#status-bar).

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


**4. Where can I find mobile SDK documentation?**

Refer to the following documentation links for mobile SDK documentation:

* [IOS](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios)
* [Android](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/android)
* [Cordova](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/cordova)
* [React Native](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/react-native)
* [Flutter](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/flutter)
* [Xamarian](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/xamarin)

**5. How to enable history?**

To enable history follow steps below:
1. Ensure that mobile SDKs are passing the ymAuthenticationToken in the config before presenting the bot.
2. Copy paste the following piece of code in the main function of the bot code:

```
if (app.data.event && app.data.event.code === 'authenticate') {
    return app.sendEvent({
        code: "verifiedUser",
        data: app.data.event.payload
    });
}
```


3. Ensure the reset context checkbox is unchecked in the dashboard settings
For "app.yellowmessenger.com" or "app.yellow.ai".

![](https://i.imgur.com/VVSmy15.png)


For cloud.yellow.ai make sure Show history is enabled.

![](https://i.imgur.com/RXjnN5E.png)


**6. Why are the push notifications not working?**

Push notifications can be debugged by customer in two ways:

* **Verify in demo app**

Ask customers to download our demo app for iOS or Android and see if they are able to receive push notifications for these apps. Here are links for demo apps [iOS](https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp) and [android](https://github.com/yellowmessenger/YmChatBot-Android-DemoApp).

If notifications are working fine on a demo app, then the customer has not configured their app properly to receive push notifications. Ask customer to refer to the code of the demo app to properly configure the push notifications.

Else, If notifications are not coming in the demo app, then there are the following possibilities:
  * Ensure the customer has enabled push notifications in the Firebase console.
  * Ensure the customer has shared their service key and it is properly configured.
  * Ensure the device token is being passed from the SDK. A lot of times, an empty string gets passed from the SDK.

* **Verify using firebase test notifications**

Ask clients to see if they are able to receive notifications in their own app from the Firebase notification testing system. This will ensure notifications are properly configured on the app side. https://firebase.google.com/docs/cloud-messaging/ios/first-message

**7. How to map Firebase Server JSON to a Bot ID?**

Copy the following code and import it in Postman, put the service key in the json body, replace the BotId in the request with your bot ID, and add an access token in the header against x-auth-token.

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

**8. In Android, Can we add left-to-right view transition/animation or any animation?**

Yes, it is possible to achieve that. Clients need to override the activity style by adding the following lines to their themes.xml or styles.xml files.

This is an example of adding Slide in Left and Slide out right transition. Clients can add their own animation as well.

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

**9. How to access the payload in v2 chatbots built on cloud.yellow.ai**?

When payload is sent from mobile SDK it is always string JSON, please parse it before accessing the values. 
Follow the steps below:
* Add function node and add code to parse payload.

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

* Save the resolved value from function node to variable of type `Object` ( ex: `payload` )
* Now you can access the values on the variable ( ex: `{{{variables.payload.name}}}` )