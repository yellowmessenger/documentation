---
title: Mobile push template
sidebar_label: Mobile push template
---


## Create Mobile Push template
To create a Mobile push template, follow these steps:

:::note
#### Prerequisites:
Before creating push notifications, you need to configure the following on the Yellow.ai platform.
- [Android push notification or Firebase Cloud Messaging channel](/docs/platform_concepts/channelConfiguration/android_push) to send push notifications on the Android app.
- [iOS or Apple push notification service](/docs/platform_concepts/channelConfiguration/ios_push) to send push notifications on the iOS app.

:::


1. On the left navigation bar, click **Engage** > **Templates**.
2. Click **+Create new templates** > **Mobile push notifications**.

   <img src="https://i.imgur.com/U3x9dn2.png" width=""/>

3. In **Template name**, enter a unique name for the template.
<center>
<img src="https://i.imgur.com/8thc54i.png" width="90%"/>
</center>

4. In **Message title**, enter the title of the notification.
5. In **Message**, enter the message content. Use `{{Name}}` to add variables in the content wherever required such as firstName, lastName, and city.
6. In **Image**, click **Upload** to add an image to the notification. It is recommended to use a 2:1 landscape image and the maximum size supported is 10 MB.
7. In **On tap action**, configure the action to be performed when the user taps on the push notification and click **Create template**. For details on each action, refer to the following sections.

<center>
<img src="https://secure-res.craft.do/v2/MXpitnt98nfq77xcERfHs5nKdeJUqQ42x1Paqh34KHvmo25ikVQryimMtxX8fAdU1SBcf9ZSL7SHduNiC1QsYBiwvFXXGgrEXzBXsR66jC14o7djEPtQKjWC2ZNyUmiYiYVsjd8UCUPNBKyRSKiXH3phcsUxJQ6YNJq6GZgw1cwZ9wXTJceB63ByzUQEgAMTkcJFYfL2XjLrLqtD9NFNXvvEc5hL7YddsYtx54aiHEArxJGBma6vLfUtsrdJn2PkTGb9H5ms3HErmocZBYeYEtxXkfR7vH1XssMVsw9p7ZKiesGoKT/Image.jpg" width="60%"/>
</center>

The following are the possible actions when a user taps on the push notification:

#### Your app
Choose to redirect the user to the main activity of the app where the deeplink is pointing to.

#### A deep link to your app
Choose to redirect the recipient to a specific screen of the app.
   
<center><img src="https://i.imgur.com/FF5lZUh.png" width="60%"/></center>

   - Enter the URI in the **Android deeplink** URI box.

#### Bot with message
Choose to redirect the user to a specific bot flow or show a predefined bot response.

   * To show a predefined message, select *Text* in **Bot response** and enter the message in **Bot says**. Use variables in the message wherever required.
  
<center><img src="https://i.imgur.com/gYaHqc9.png" width="60%"/></center>

   * To execute a bot flow, select *Execute flow* in **Bot response** and choose the flow in **Execute flow**.


 <center> <img src="https://i.imgur.com/sdu8dWA.png" width="60%"/></center>

***

**What's next?**

Create a push notification campaign using the Mobile push template as explained in [Create outbound campaign](/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).