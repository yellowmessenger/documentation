---
title : Google Play store Integration
sidebar_label : Google Play store
---

The integration with the Google Play store account enables active management of user ratings and reviews directly from the bot. For this integration, you need Google Play Console, Google Cloud Console, and an Android app deployed on the Play Store.

This integration is compatible with any version supported by the Google Play Store. For further details on the action nodes used in this integration, please refer to the [documentation](https://developers.google.com/android-publisher/reply-to-reviews).

## Connect your Play Store with yellow.ai

Connect your cloud console and Google Play accounts (as mentioned [here](https://developers.google.com/android-publisher/getting_started)) before integrating your Play Store account with Yellow.ai. 

### Authenticate Yellow.ai to access Google Play Store

1. On the Staging/Development environment, go to **Extensions** > **Integrations** > **Tools & Utilities** > **Google playstore**. You can also search for Google Playstore in the Search box.

 ![](https://i.imgur.com/cIbeLnW.png)

 2. In the **Give account name** field, provide a name to your account in yellow.ai.
 3. In **Email**, enter the email address of your Google Playstore account.
 4. In **Private key** and **Package name**, enter the private key and package name of your Google Play store account. For steps to fetch the private key from your google console, click [here](https://www.iwantanelephant.com/blog/2020/11/17/how-to-configure-api-access-to-google-play-console/).
 5. Click **Connect**. 
 
### Enable Google Playstore review event in Yellow.ai

Activating the `playstore_review` event will enable the bot to receive notifications when a review is posted for your app on the Google Play Store. For this, you need to Connect the Play Store in the staging environment and activate the events as explained below.


:::note
Ensure you provide the correct credentials and permissions. After successful connection, publish the bot to production to activate the same events in the production environment as well.
::

1. In the Development/Staging enveronment, go to **Studio** > **Event** > **Integrations** and search for **playstore_review**.

 ![](https://i.imgur.com/b42Ztir.png)
2. Click on the more options icon and select **Activate**.

## Manage Google play store from Yellow.ai

After integrating your Google Play Store account with Yellow.ai, you will be able to respond to the ratings and reviews that users have left for your app on the Google Play Store via emails (tickets).

:::info
The credentials used during integration with yellow.ai will generate access and refresh tokens for the specified connected package. These tokens will be utilized to fetch the ratings and reviews posted by users on the application.
:::

1. Add the event **playstore_review** in the Start node.

![](https://i.imgur.com/lx14ZkH.png)
2. Include a [Raise a Ticket node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) to capture reviews and ratings as tickets, and build the remaining flow based on your specific use case.

:::note
Currently, the use case is restricted to receiving ratings and reviews through tickets and responding to them via tickets.
:::


**Sample success response:**

```js
{
   "success": true,
   "message": "Execution Successful",
   "data": {
       "statusCode": 201,
       "body": {
  "reviewId": "87654321",
  "authorName": "Joan Smith",
  "comments": [
    {
      "userComment": {
        "text": "This app is awesome!",
        "lastModified": {
          "seconds": "1452114723",
          "nanos": 913000000
        },
        "starRating": 5
      }
    }
  ]
}
```





