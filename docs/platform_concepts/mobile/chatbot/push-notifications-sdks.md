---
title: Setup push notifications for Mobile SDKs
sidebar_label: Setup push notifications for Mobile SDKs
---

This guide provides step-by-step instructions for setting up push notifications for Mobile SDKs.

To configure push notifications for your app, you need to map the Firebase server JSON to enable engagement with your users through bot notifications.

To setup push notifications, follow these steps:

1. On the left navigation bar, click **Extensions**.

    ![](https://imgur.com/PIOvT6K.png)

2. Click **Channels** > **Push notifications** > **Android** (FCM).

   ![](https://imgur.com/lVEnYy6.png)
   
3. Click on **Connect your account** and upload the Firebase service (.json) file.

   ![](https://imgur.com/xxEbxOv.png)

4. After uploading the JSON file, configure the device token while initializing the chatbot SDK in your app using the following code:

    `ymChat.config.deviceToken = "your-firebase-device-token"`

Your bot is now configured with Firebase, and your app will be able to handle chatbot SDK notifications.

## Troubleshooting

### App not receiving notifications

If your app is not receiving notifications, follow these troubleshooting steps:

* Check the demo app for [iOS](https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp) or [Android](https://github.com/yellowmessenger/YmChatBot-Android-DemoApp) to verify if you are receiving push notifications. If notifications are working in the demo app, you may not have properly configured your app to receive push notifications. You need to refer to the code of the demo app to configure push notifications. If notifications are not displaying in the demo app, then you must follow these steps:
  * Ensure push notifications are enabled in the Firebase console.Check the demo app for iOS or Android to verify if they are receiving push notifications. If notifications are working in the demo app, you may not have properly configured your app to receive push notifications. Refer to the code of the demo app to configure push notifications correctly.
  * Verify that the service key is properly configured and shared.
  * Ensure the device token is being passed from the SDK correctly.
   * Utilize firebase cloud messaging test notifications to receive notifications in your own app.
