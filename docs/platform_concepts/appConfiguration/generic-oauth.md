---
title : Generic oauth
sidebar_label : Generic oauth
---

Generic OAuth integration allows Yellow.ai to securely connect with various [OAuth providers](https://en.wikipedia.org/wiki/List_of_OAuth_providers) such as Google, Microsoft, Amazon, Apple, and so on. Each provider requires its own set of credentials for authentication.

By leveraging industry-standard OAuth protocols, Yellow.ai generates OAuth URLs that redirect users to the provider’s login page for secure authentication. 

**Key benefits of using this integration:**

* **Multiple provider support**: Allows you to cofigure various OAuth providers like Google, Microsoft, and Amazon based on business requirements.
* **Auto-generated OAuth URL**: Simplifies the authentication process by dynamically generating OAuth URLs for secure user login.

## Integrate Generic Oauth with Yellow.ai

To integrate Generic OAuth with Yellow.ai, obtain the respective credentials. In the following procedure, we have used *Google OAuth* as an example, which requires credentials from the Google Developer Console.


### Get Google console credentials

1. Log in to the [Google developer console](https://console.cloud.google.com/).

2. Navigate to **API & Services**.

   ![](https://i.imgur.com/svo7aVo.png)
   
3. Go to **Credentials**.

    ![](https://i.imgur.com/fQLUb3q.png)
    
4. Click **Create credentials** and select **OAuth Client ID**.

    ![](https://i.imgur.com/k6W0Mrs.png)
    
5. Under **Application type**, select **Web application**.

      ![](https://i.imgur.com/HxshTva.png)
      
6. Enter **Authorized JavaScript origins** URL and **Authorized redirect URIs** and click **Create**.

   ![](https://i.imgur.com/qwFIfz5.png)
   
7. Copy the **Client ID** and **Client Secret**, which is required to connect the Google OAuth provider with Yellow.ai.

    <img src="https://i.imgur.com/coXRCgq.png" alt="drawing" width="60%"/>
    
* Similarly, you can obtain credentials for other OAuth providers, such as Microsoft and Amazon. For more details, refer to their respective documentation.

    
### Connect Generic OAuth account to Yellow.ai

You can add and manage Oauth accounts within Yellow.ai to enable authentication. You need to set up Oauth accounts when integrating various Oauth providers that require user authentication. The number of accounts you can add depends on the bot’s environment structure:

* You can add a maximum of 15 accounts.
* In a two-tier environment (Development/Live), add account names only in Development mode. After building flows, you can select existing account names in Live mode but cannot edit them.
* In a three-tier environment (Staging/Sandbox/Production), add and edit accounts in Staging and Sandbox. In Production mode, use only the accounts added in Staging and map them as needed.

To connect Generic OAuth account, follow these steps:

1. Login to the [Cloud platform](https://cloud.yellow.ai).

2. On the left navigation bar, go to **Extensions** > **Integrations** > **Tools & Utilities** > **Generic oauth**.
   
    ![](https://i.imgur.com/RC66W0d.png)

3. In **Give account name**, enter a unique name to identify the OAuth account.

4. Enter the Google's **Authorization URL**. For example:`https://accounts.google.com/o/oauth2/auth`. For more information, click [here](https://developers.google.com/identity/protocols/oauth2/web-server#httprest).
   
5. Enter the Google's **Token URL**. For example: `https://oauth2.googleapis.com/token`.

6. Paste the **Client ID** and **Client secret**, which you have copied in the Google console developer portal.
   
7. In **Scope**, enter the required API scope. Example:      `https://www.googleapis.com/auth/userinfo.profile`

8. In **Code verifier**, enter an alphanumeric text for added security.
9. Click **Connect**.

   ![](https://i.imgur.com/U0MUZj8.png)
   
## Enable Generic OAuth event to receive events in bot

For your bot to manage OAuth authentication events, you need to enable the `generic-OAuth-success` event. This event enables the bot to perform actions such as generating an OAuth URL and redirecting users to the login page.

To enable Generic OAuth event, follow these steps:

1. On the [Cloud platform](https://cloud.yellow.ai/), go to **Staging** or **Development** environment.

2. On the left navigation bar, click **Automation** > **Event** > **Integrations** and search for `generic-oauth-success`.

    ![](https://i.imgur.com/ziC3PX0.png)

3. Click on the **more options** icon and select **Activate**. If you have connected multiple accounts, you need to enable the event for each account.

     ![](https://i.imgur.com/wI7TWJ6.png)

4. Once the event is activated, navigate to **Automation > Build** to create a flow. 
5. Create a new flow and set **Generic OAuth Success** as the trigger event and configure action for generating an OAuth URL to redirect users to the login page.

     ![](https://i.imgur.com/MULpgwk.png)
     
## Generate OAuth URL link from bot conversation


To generate an OAuth URL link within a bot conversation, follow these steps:

1. Go to **Development** or **Staging** environment and navigate to **Automation** > **Build** > Select the flow where you want to generate OAuth URL link.

2. In the Automation flow builder, navigate to **Nodes** section and click **Integrations** > select **Generic oauth** node.

    <img src="https://i.imgur.com/hp0oAwr.png" alt="drawing" width="40%"/>
    
3. In **Account name**, select the account associated with the OAuth provider. Note that, if there are multiple accounts, you can select from which account you want to perform the action.

4. In **Action**, select **Generate Oauth URL**.

   ![](https://i.imgur.com/HHFxpSb.png)
   
5. Select the Variable to store the response.

6. Add a Text node to display the OAuth URL stored in the selected variable.

    ![](https://i.imgur.com/U9TZBzk.png)
    
* Preview the flow to verify that the OAuth URL is generated.

   ![](https://i.imgur.com/NAhjNt2.png)



