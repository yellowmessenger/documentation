---
title: Google identity management
sidebar_label : Google identity management
---

Integrate your yellow.ai platform with Google Identity management for a simplified user authentication and enhanced security. This integration lets you effortlessly create a login URL within the Yellow.ai platform. This URL allows users to conveniently log in and access their  information, ensuring a smooth and efficient experience.

## Connect Google identity management with Yellow.ai.

To integrate your Google Identity Management account with Yellow.ai, follow these steps:

### Fetch Client ID and Client Secret from Google console

1. Go to Google's [developer portal](https://developers.google.com/) and [create a new project](https://console.cloud.google.com/projectcreate).
2. Fill in the details and click **Create**.

 ![](https://i.imgur.com/lNt2y3R.png)

3. Click more on the top right corner and click **APIs & Services** > **Enabled APIs & services**.

 ![](https://i.imgur.com/qJ2c3Zs.png)

4. To set up the OAuth, click **Configure consent screen** on the right.

 ![](https://i.imgur.com/MznNEgO.png)

5. Choose the **User Type** as **Internal** and click **Create**.

 ![](https://i.imgur.com/KXMHXpd.png)

6. Fill in all the mandatory fields in the following page and click **Save and Create** at the bottom of the page.

 ![](https://i.imgur.com/rOyOQlF.png)

7. Set the scopes in the following screen. Click [here](https://developers.google.com/identity/protocols/oauth2/scopes) to know about the scopes in detail.

 ![](https://i.imgur.com/JMOWurb.png)

8. Go to **+ Create Credentials** > **OAuth client ID**.

 ![](https://i.imgur.com/BeMY196.png)

9. Copy the **Client ID** and **Client Secret**.

 ![](https://i.imgur.com/8Eh1LsA.png)

 :::info

 To retrieve package name and private key from google console, please follow the steps mentioned [here](https://www.iwantanelephant.com/blog/2020/11/17/how-to-configure-api-access-to-google-play-console/).
 :::


### Add the credentials in Yellow.ai

1. Go to **Integrations** > Search for **Google Identity Management**.

 ![](https://i.imgur.com/Vr2BsVw.png)

2. Fill in the following fields:

* **Give account name**: Provide a name to your account.
* **Client ID**: Paste the Client ID. (copied from the previous step)
* **Client secret**: Paste the Client secret. (copied from the previous step)
 
 3. Click **Connect**.
 4. After a successful integration, copy the Webhook URL.

 ![](https://i.imgur.com/6sg3nT8.png)

5. Go to your **Google console** > **APIs & Services** > **Credentials** and paste it under **Authorized redirect URIs**.

 <img src="https://i.imgur.com/K33FVMn.png" alt="drawing" width="60%"/>


## Activate Google auth success event 

To let the yellow.ai bot know that the user has successfully logged in, you need to activate this event.

1. Go to **Automation** > **Event** > **Integration** > Search for google-auth-success > **Activate**.

 ![](https://i.imgur.com/O37vUGE.png)

2.  You can set this event as a [start trigger for a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#trigger-flow-using-event). This flow will get triggered after a user has successfully been authorized. [Build the flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) to execute the desired action immediately after the user's authorization.

 ![](https://i.imgur.com/vW8ByJJ.png)

## Set up the Google login URL on Yellow.ai

1. Go to **Automation** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) based on your usecase.
2. Include the integration node at the point in the flow where you want to authorize the user or when the bot needs to request user authorization. To accomplish this, navigate to **Integrations** and select **Google Identity Management**.

 <img src="https://i.imgur.com/Ot8CkLL.png" alt="drawing" width="60%"/>

2. Click the node and fill the following fields:

* **Account name:** Select the name of the Google account you will be using.
* **Action:** Choose Generate Login URL.
* **Redirect URI:** Copy the webhook url from integration card(as mentioned here) and paste it.
* **Scope:** Enter your Google console scope seprated by space. For example, openid https://www.googleapis.com/auth/userinfo.profile 

 [Store the reponse of this node](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) in a variable.

 ![](https://i.imgur.com/AW84QoK.png)

3. To display the URL to the user, pass this variable in a message node in this syntax  ```{{variables.variable.arrayname.fieldname}}```.

 ![](https://i.imgur.com/J9jjMBY.png)


