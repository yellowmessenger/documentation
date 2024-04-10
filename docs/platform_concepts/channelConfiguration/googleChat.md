---
title : Google Chat
sidebar_label : Google Chat
---

Google Chat is a messaging platform that allows you to communicate with your users. You can share files, images, videos, and audio and have conversations.

## Setup Google chat using Google console developer portal

Login to the [Google console portal](https://developers.google.com/) to setup your Google Chat.

To setup Googel chat to your bot, configure the following:

1. [Create a new project on the Google Console](#step-1-create-a-new-project-on-google-console)
2. [Enable the service account and Generate keys](#step-2-enable-service-account-and-generate-keys)
3. [Enable the Google Chat API](#step-3-enable-google-chat-api)
4. [Configure your Google chat bot](#step-4-configure-your-google-chat-bot)

### Step 1: Create a new project on Google console

To create a new project on Google console, follow these steps:

1. On the [Google console developer](https://developers.google.com/workspace/guides/create-project#create_a_new_google_cloud_platform_gcp_project) portal, click **Go to create a project**.

2. Enter the **Project name**, **Organization**, and **Location**, then click **Create** to create a project.

    ![](https://i.imgur.com/Pz8F3TN.png)
    
3. Your project will be successfully created.

     ![](https://i.imgur.com/zKou5jD.png)
     
### Step 2: Enable Service account and Generate Keys     
     
To enable service account and generate keys, follow these steps:

1. On the navigation panel, go to **IAM & Admin** > **Service Accounts**.

     ![](https://i.imgur.com/do384LL.png)
     
2. Click on **+ CREATE SERVICE ACCOUNT**.

     ![](https://i.imgur.com/gN31KZ0.png)
     
3. Add the *Service Account Details* such as **Service account name**, **Service account ID**, and **Service account description**, then **CREATE AND CONTINUE** in Step 1. Skip Step 2 and 3. 

     ![](https://i.imgur.com/gN31KZ0.png)   

* The service account details for your project will be added successfully. 

     ![](https://i.imgur.com/yByfMn1.png)
      
5. Once the service account is created, click on the **email link**.

      ![](https://i.imgur.com/CAq3YFX.png)
      
6. Go to **KEYS** tab and click on **ADD KEY** > **Create new key**.

      ![](https://i.imgur.com/AvKOUU1.png)
      
7.  Select the *Key type* as **JSON** and click **Create**. 

:::note
* Ensure that you save this file carefully, it cannot be recovered once lost.
:::

   <img src="https://i.imgur.com/rZtypMi.png" alt="drawing" width="50%"/>
<br/>   
   
• A confirmation message <b>Private key saved to your computer</b> is displayed.

   <img src="https://i.imgur.com/wDDpoOa.png" alt="drawing" width="80%"/>


          
### Step 3: Enable Google chat API

To enable the Google chat API, follow these steps:

1. On the navigation panel, click **APIs & Services**.

    ![](https://i.imgur.com/EMBjm7z.png)
    
2. Click **+ Enable APIs and services**.

    ![](https://i.imgur.com/b7czI0m.png)
    
3. In the **Search** bar, search for "Google Chat API" and select it.

     ![](https://i.imgur.com/3TJpMFZ.png)
     
4. Click **Enable**. The **Google Chat API** will be enabled.

    ![](https://i.imgur.com/xLCYC5Q.png)
    
5. Once the Google Chat API is enabled, you need to configure your Google Chat bot as explained in the following.

### Step 4: Configure your Google chat bot

To configure your Google chat Bot, follow these steps:

1. Go to **Configuration**, and enter the following details to configure your Google Chat Bot:

   * Enter the name of your app.
   * Add the avatar URL.
   * Enter the relevant description based on your app.
   * Enable the **Interactive features**.
   * Under *Functionality*, select both checkboxes.
   * Under *Connection* settings, select App URL and enter  `https://cloud.yellow.ai/integrations/googleChat/receive/[BOT ID]`

:::note
Based on the region of your bot, which is  r1/r2/r3/r4/r5, you need to append that to the domain of the webhook URL. For example, if the domain is https://cloud.yellow.ai, you need to change it to https://r1.cloud.yellow.ai if the region of the bot is r1. If the bot belongs to the Indian region, you can use the origin domain itself.
:::

   * Under *Visibility*, enter the email addresses to add individuals and groups to your domain.
   * Click **Save** to save the configuration details.

     ![](https://i.imgur.com/FRRm7Qy.png)
    
## Connect Google chat to your bot

#### Prerequisite

* Copy the Client Email and Private Key from the JSON file that you downloaded earlier.

    ![](https://i.imgur.com/ZgXktdo.png)

To connect the Google chat channel to your bot on the platform, follow these steps:

1. Navigate to **Overview** > **Extensions**.

    ![](https://imgur.com/PIOvT6K.png)

2. Click **Channels** > **Messaging** > **Google chat**.

    ![](https://imgur.com/ZOZIxUN.png)

3. Enter the **Client email** and **Private key** that you have copied from the downloaded JSON and click **Save**.

   ![](https://imgur.com/q6FVsIU.png)
   
   * Your Google chat channel will be successfully connected.

4. Navigate to the **Overview** page, under the **Active channels** section, to verify that the Google chat channel is successfully connected to your bot.
    
### Add events to your bot

To add events to your bot, follow these steps:

1. Navigate to the **Studio** > **Event** >  **Custom events**.

     ![](https://imgur.com/SLDyZZG.png)
     
2. Click **+ Add event**. 

    ![](https://imgur.com/c3SZMCQ.png)
    
3. Add the following events:
   * `google_chat_added_to_space`: This event is received when your Bot is added to a space.
   * `google_chat_removed_from_space`: This event is received when your Bot is removed from a space. 
   
4. Enter the **Event name** and **Event description**, then click **Create event**.
    
    <img src="https://imgur.com/YlD8fQU.png" alt="drawing" width="70%"/>

5. The events will be successfully added.

    ![](https://imgur.com/qN06csG.png)
    
    <img src="https://i.imgur.com/Oxunyya.png" alt="drawing" width="70%"/>
    
## Test your bot on Google chat

After connecting your bot to the Google chat, you can test your bot. 
     
#### Prerequisites

* Ensure that you have created the bot with intents and configured the flows with the same intent. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/create-a-bot). 

To test your bot on Google chat, follow these steps:

1. Login to your personal email account and click **Chat** > **New Chat** > **Find apps**.   

      ![](https://i.imgur.com/ezZdCpl.png)
      
2. In the **Search** bar, search for the name of the app that you have created.

    <img src="https://i.imgur.com/69JeuE6.png" alt="drawing" width="70%"/>
      
3. Select the app and click **Chat**.

    ![](https://i.imgur.com/ZuzKZ7n.png)
     
4. Start the conversation to test your bot.

     ![](https://i.imgur.com/pkC6B3O.png)    