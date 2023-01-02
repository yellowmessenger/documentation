---
title: Mobile push template
sidebar_label: Mobile push template
---

## Prerequisites

Before creating push notifications, you must have configured the following on the Yellow.ai platform.
- [Android push notification or Firebase Cloud Messaging channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/android_push) to send push notifications on the Android app
- [iOS or Apple Push Notifications](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/ios_push) to send push notifications on the iOS app


## Create Mobile push template

To create a Mobile push template, follow these steps:

1. Navigate to your project and go to **Engage** > **Templates**.
2. Click **+Create new templates** > **Mobile push notifications**.

<center>
<img src="https://i.imgur.com/s7tflBN.png" width=""/>
</center>

3. In **Template name**, enter a unique name for the template.
<center>
<img src="https://i.imgur.com/8thc54i.png" width="90%"/>
</center>
4. In **Message title**, enter the title of the notification.
5. In **Message**, enter the message content. Use `{{Name}}` to add variables in the content wherever required such as firstName, lastName, and city.
6. In **Image**, click **Upload** to add an image to the notification. It is recommended to use 2:1 landscape image and the maximun size supported is 10 MB.
7. In **On tap action**, choose the action to be performed when the user taps on the push notification. These are the possible actions when a user taps on the push notification:
<center>
<img src="https://secure-res.craft.do/v2/MXpitnt98nfq77xcERfHs5nKdeJUqQ42x1Paqh34KHvmo25ikVQryimMtxX8fAdU1SBcf9ZSL7SHduNiC1QsYBiwvFXXGgrEXzBXsR66jC14o7djEPtQKjWC2ZNyUmiYiYVsjd8UCUPNBKyRSKiXH3phcsUxJQ6YNJq6GZgw1cwZ9wXTJceB63ByzUQEgAMTkcJFYfL2XjLrLqtD9NFNXvvEc5hL7YddsYtx54aiHEArxJGBma6vLfUtsrdJn2PkTGb9H5ms3HErmocZBYeYEtxXkfR7vH1XssMVsw9p7ZKiesGoKT/Image.jpg" width="70%"/>
</center>
* **Your app**: Choose to redirect the user to the home screen of the app.
* **A deep link to your app**: Choose to redirect the recipient to a specific screen of the app.
   
   <img src="https://i.imgur.com/FF5lZUh.png" width="70%"/>

   - Enter the URI in the Android Deeplink URI box.
* **Bot with message**: Choose to redirect the user to execute a specific bot flow or show a predefined bot response.

   * To show a predefined message, select *Text* in **Bot response** and enter the message in **Bot says**. Use variables in the message wherever required.
<img src="https://i.imgur.com/gYaHqc9.png" width="70%"/>
   * To execute a bot flow, select *Execute flow* in **Bot response** and choose the flow in **Execute flow**.

   <img src="https://i.imgur.com/sdu8dWA.png" width="70%"/>


8. Click **Create template**.