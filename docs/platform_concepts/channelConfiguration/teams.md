---
title: Microsoft Teams
sidebar_label: Microsoft Teams
---

Microsoft Teams (MS Teams) is a collaboration platform that provides a digital workspace for various teams within the organisation to communicate and work together. The team members can have conversations, share files, images, video, audio, and schedule meetings. It includes chat, video meetings, file storage, and application integration to provide a secure, collaborative environment for teams to work together.

In this article, you will learn:
1. [How to set up MS Teams using Developer portal](#1-set-up-ms-teams-using-developer-portal)
2. [How to connect Teams app with your bot](#2-connect-your-teams-app-with-a-bot)
3. [How to set permissions on Azure portal](#3-set-permission-on-azure-portal)

## 1. Set up MS teams using Developer portal

To set up MS teams using Developer portal, follow these steps:

1. Open MS Teams.

   ![](https://i.imgur.com/gdRgLI0.png)
   
2. Navigate to **Apps** and search for **Developer Portal**.

   ![](https://i.imgur.com/TrhO5i8.jpg)
   
3. Open **Developer Portal**.

   ![](https://i.imgur.com/8GBNT4s.jpg)
   
4. Navigate to **Tools > Bot Management**.

   ![](https://i.imgur.com/ta47wqQ.png)
   
5. Click **+ New Bot** to set up a bot.

   ![](https://i.imgur.com/vkukJf1.png)
   
6. To set up the bot, follow these steps:

   6.1. Enter the bot's name and click **Add**.

      ![](https://i.imgur.com/DeUnJ6m.png)
   
    6.2 To define a messaging endpoint, use the below URL and click **Save**. 
       `https://app.yellowmessenger.com/integrations/botframework/{<botID>}`
	
	  ![](https://i.imgur.com/wwLG6rG.png)
	
   6.3 Go to **Client secrets** and click **Add a client secret for your bot**.
	
	   ![](https://i.imgur.com/rdqbs8M.png)
	
    6.4 Copy the **Client secret** and save it for future reference.
	
	   ![](https://i.imgur.com/ykcfSjP.png)
	
   6.5 Go back to **Bot management** and copy the Bot ID.
	
   :::note
   The bot Id is required for configuration.	
   :::
	
   ![](https://i.imgur.com/oGWpSch.png)
	
7. Navigate to **Apps** to create a **New app**. Click **+ New app**.
	
   ![](https://i.imgur.com/LWmvWl8.png)
	
8. Enter the name of your app.
	
	![](https://i.imgur.com/tsPkMNP.png)


9. Enter the following details that are required for your app:
	* **Short Name**: Enter a name for your bot app.
    * **Full Name**: Enter a full name for your bot app (it can be the same name as short name).
    * **Short Description**: Enter a short description for your bot app.
	* **Long Description**: Enter a long description for your bot app.
    * **Version**: Enter the version number. For example, 1.0.0.
    * **Developer or Company Name, Website, Privacy Policy & TnC**: Ask Enterprises to use their details
    * **Application ID**: Paste the application ID, which you have copied from the Step 6.5, and click **Save**.
	
	 <img src="https://i.imgur.com/CytFL5J.jpg" alt="drawing" width="80%"/>

10. Navigate to **Branding** under **Configure** to change the available branding options.
	
	![](https://i.imgur.com/fGsFh9l.jpg)

11. Navigate to **App Features** under **Configure** and select **Bot**.
	
	![](https://i.imgur.com/QpknYd6.jpg)
 
	I. Select your bot name from the drop-down.<br/>
	II. If you want to enable file sharing, enable the **Upload and download files** check box.<br/>
    III. Select **Personal** under the scope.<br/>
    IV. Click **Save** at the bottom.<br/>
	
	![](https://i.imgur.com/vV1JxAg.jpg)
	
12. To install and distribute app, navigate to **Publish > App package**. 
	
	![](https://i.imgur.com/phBhR6J.jpg)
	
13. Click **Publish** and select an option based on your enterprise policy.
	
	![](https://i.imgur.com/WgKGHfs.png)

	I. If it does not work, then download the Manifest zip file.

   II. Go to `https://admin.teams.microsoft.com`.

   III. Navigate to **Teams Apps > Manage Apps** and Upload app.
	
	![](https://i.imgur.com/LzoJyej.png)
	
## 2. Connect your Teams app with a bot
	
To configure the Channel on the Yellow.ai platform, follow below sreps:
	
1. On the switcher click **Channels** > **Microsoft Teams**.
	
2. Add below details:
   * Profile Id (for your reference)
   * Client ID from Step# 6.4 
   * Client Secret from Step# 6.5

    ![](https://i.imgur.com/8SE3KWq.png)
	
3. Now you are ready to use MS team with Yellow.ai bot. Test by sending a message using "app.sendTextMessage()".		
4. Go back to MS Teams.	
5. Search the **App** under **Apps**. 
6. Click **Add** to start a conversation with the bot.
	
   ![](https://i.imgur.com/1FdGpEN.png)

	
## 3. Set permission on Azure portal 
	
After connecting the Teams app with your bot, you need to set permissions on the Azure portal to execute certain use cases based on the business requirements. Follow these steps:	

1. Login to `https://portal.azure.com`.
2. Navigate to **App Registration**.
3. Click on the app created with the same name as your MS Teams bot.

   ![](https://i.imgur.com/2QrZRi4.png)

4. Navigate to the **Overview** screen. Make a note of the client and tenant IDs and click on **Redirect URLs**.

   ![](https://i.imgur.com/I5C8yL3.png)
	
5. Click **Add a Platform > Web**.
    
    ![](https://i.imgur.com/2SWdXqw.png)
	
6. Add `https://app.yellowmessenger.com/integrations/azureauth`URL under **Redirect URIs**, enable the **Access Token** check box, and click **Configure**. 

   ![](https://i.imgur.com/1Fn2xUx.jpg)

	
7. Navigate to **API Permissions > Add Permission > Microsoft Graph**.

   ![](https://i.imgur.com/y1vpad4.png)
   
8. To add the permissions for your app as per business requirements, select the permission type you want to provide: <br/>• **Application Permissions:** This enables the app to use the services without any user’s authorization. The app work with its credentials.<br/>• **Delegated Permissions:** This requires users to authorize the app to work on their behalf. Once approved, the app contains the privileges of authorising users for the defined scope.
	
   ![](https://i.imgur.com/sviY2eg.png)


9. Click **Add Permissions**.

   ![](https://i.imgur.com/DUYW0Px.png)	
		
:::note
You need to grant the admin's consent as per the defined permissions.
:::	
	
10. The permission has been successfully added to your app.		