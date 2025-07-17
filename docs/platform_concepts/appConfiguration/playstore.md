---
title : Google Play store Integration
sidebar_label : Google Play store
---

The Google Play Store integration with Yellow.ai enables businesses to monitor and manage app reviews **directly within the AI Agent**, eliminating the need to switch between platforms. 

By centralizing review management within the bot, businesses can streamline feedback handling, enhance customer engagement, and reduce response time, all without leaving the Yellow.ai platform.

With this integration, the AI Agent can:  

- **Fetch user reviews and ratings**: Automatically retrieve new app reviews and ratings in real time from Google Play Store. This allows teams to track app performance, analyze user sentiment, and respond proactively.  
- **Respond to user reviews**: The AI or Human agent can respond to reviews **from within the platform**. The AI Agent can send automated replies, while low ratings can be escalated to a human agent for personalized engagement.


**Limitation**

* Bot or agent can send only one reply per feedback, with a maximum of 250 characters.

**Prerequisites**

Before proceeding with this integration, ensure you have:

* Google play console access
* Google cloud console access
* An Android app deployed on the Play store

## Integrate Google Play store with Yellow.ai

To integrate Google Play store with Yellow.ai, follow these steps:

### Get Google console credentials

For steps to fetch the private key from your google console, click [here](https://www.iwantanelephant.com/blog/2020/11/17/how-to-configure-api-access-to-google-play-console/).

1. Log in to the [Google developer console](https://console.cloud.google.com/).

2. On the [Google console developer](https://developers.google.com/workspace/guides/create-project#create_a_new_google_cloud_platform_gcp_project) portal, click **Go to create a project**.

3. Enter the **Project name**, **Organization**, and **Location**, then click **Create** to create a project.

    ![](https://i.imgur.com/Pz8F3TN.png)
    
* Your project will be successfully created.

     ![](https://i.imgur.com/zKou5jD.png)
     
4. On the navigation panel, go to **IAM & Admin** > **Service Accounts**.

     ![](https://i.imgur.com/do384LL.png)
     
5. Click on **+ CREATE SERVICE ACCOUNT**.

     ![](https://i.imgur.com/gN31KZ0.png)
     
6. Add the *Service Account Details* such as **Service account name**, **Service account ID**, and **Service account description**, then **CREATE AND CONTINUE** in Step 1. Skip Step 2 and 3. 

     ![](https://i.imgur.com/gN31KZ0.png)   

* The service account details for your project will be added successfully. 

     ![](https://i.imgur.com/yByfMn1.png)
      
7. Once the service account is created, click on the **email link**.

      ![](https://i.imgur.com/CAq3YFX.png)
      
8. Go to **KEYS** tab and click on **ADD KEY** > **Create new key**.

      ![](https://i.imgur.com/AvKOUU1.png)
      
9.  Select the *Key type* as **JSON** and click **Create**. 

:::note
* Ensure that you save this file properly, it cannot be recovered once lost.
:::

   <img src="https://i.imgur.com/rZtypMi.png" alt="drawing" width="50%"/>
<br/>   
   
• A confirmation message <b>Private key saved to your computer</b> is displayed.

   <img src="https://i.imgur.com/wDDpoOa.png" alt="drawing" width="80%"/>
   
10. Copy the **Private key**, which is required to connect the Google play store with Yellow.ai. For more information, click [here](https://www.iwantanelephant.com/blog/2020/11/17/how-to-configure-api-access-to-google-play-console/).
 5. Click **Connect**. 

### Connect Google play store to Yellow.ai

To integrate Google play store with Yellow.ai, follow these steps:

1. Login to the [Yellow platform](https://cloud.yellow.ai/) and navigate to the **Development** environment.
   * In a two-tier environment, you can only add accounts in the Development environment.
   * In a three-tier environment, you can only add accounts in Staging/Sandbox environment.

2. Go to **Extensions** > **Integrations** > **Tools & Utilities** > **Google playstore**. You can also search for Google Playstore in the Search box.

   ![](https://i.imgur.com/cIbeLnW.png)

 2. In the **Give account name** field, enter a unique name, you cannot edit the account name once it is created.
 3. In **Email**, enter the email address of your Google play store account.
 4. In **Private key** and **Package name**, enter the private key copied from the Google console and package name of your Google play store account. 

     ![](https://imgur.com/TLWC3rL.png)
     
5. Click **Connect**.

* Similarly, you can add a maximum of 15 accounts.

## Enable Google play store event to receive events in bot

To receive notifications when a user posts a review for your app on the Google play store, you need to enable the `playstore_review` event in your bot. Once enabled, the bot can automatically fetch new reviews and trigger actions such as responding to feedback or escalating low-rated reviews to a live agent.

To enable Google play store event, follow these steps:

1. On the [Cloud platform](https://cloud.yellow.ai/), go to **Staging** or **Development** environment.

2. On the left navigation bar, click **Automation** > **Event** > **Integrations** and search for `playstore_review`.

    ![](https://imgur.com/Wb5ngqw.png)

3. Click on the **more options** icon and select **Activate**. If you have connected multiple accounts, you need to enable the event for each account.

     ![](https://imgur.com/yaHkUER.png)

4. Once the event is activated, navigate to **Automation > Build** to create a flow. 
5. Create a new flow and set **playstore_review** as the trigger event and configure action for receiving rating and review.

     ![](https://imgur.com/jttbbc3.png)
     
## Use cases supported for Google play store integration

1. **Fetch user reviews and ratings**: The bot can automatically fetch new app reviews and ratings from the Google play store. This integration enables real-time retrieval of user feedback. This helps to analyse the user sentiment and track app performance.

2. **Send response to user reviews**: The bot or a live agent can respond to user reviews directly from the platform. When a user submits a review, the bot can send an automated response, or if the rating is low, escalate it to a human agent for personalized engagement. However, each review can receive only one response, with a maximum length of 250 characters. 

Refer to the following video to see how the Google play store integration works:

<video width="600" controls>
  <source src="/files/Playstore-integration-demo.mp4" type="video/mp4"/>
</video>

