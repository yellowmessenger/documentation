---
title : Okta Integration
sidebar_label : Okta
---

# Okta integration

Your Yellow.ai platform can now be integrated with [Okta](https://www.okta.com/). **Okta** is a customizable, secure, and drop-in solution that adds authentication and authorization services to your applications. Get scalable authentication built right into your application without the development overhead, security risks, and maintenance that come from building it yourself. 

You can connect any application in any language or on any stack to Okta and define how you want your users to sign in. Each time a user tries to authenticate, **Okta** will verify their identity and send the required information back to your app. This integration lets you generate login links and get user details.

## 1. Connect Yellow.ai with Okta

To connect your Okta account with Yellow.ai, follow the steps mentioned below:

### 1.1 Fetch Okta app integration credentials

1. Sign-in to your **Okta** organization with your administrator account. In the **Admin Console**, go to **Applications** > **Applications**. 
2. If you already have the app integration in your org, you can search for it using the search box. Once you find it, click on it to go to the settings page.

![](https://i.imgur.com/a3jLTtQ.png)

3. If you need to create a new Okta app integration to represent your project, click **Create App Integration** and follow the instructions (on the new window) to create a new app integration. 
4. Alternatively, you can search for a pre-existing app integration in the **Okta** catalog and add it to your org by clicking **Browse App Catalog**. 

5. Once you click the app integration, you will be redirected to the setting page. Here, under the **General** tab, the **Client Credentials** section shows the **Client ID** and **Client secrets** for your app integration.

![](https://i.imgur.com/BomtQV0.png)


You can copy the **Client ID** and **Client secret values** using the Copy to Clipboard button beside each text field.

:::note
* In **Grant type** please select **Client credentials** and **Authorization code**.
* In redirectUri , please add the webhook url copied from integration card.
* Ensure that you have selected the user consent.

![](https://i.imgur.com/G7Sazp7.png)

:::

### 1.2 Enable the integration in Yellow.ai

1. Log in to cloud.yellow.ai and click the **Integrations Module** from the module switcher.

![](https://i.imgur.com/uT0eVDT.png)

3. Either search for **Okta** or choose the category named Payment from the left navigation bar and then click **Okta**.

![](https://i.imgur.com/0RXUqde.png)

5. Fill in the fields under **Account Details** and click **Connect**.
6. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

### 1.3 Receive event in Yellow.ai bot

1. Login to cloud.yellow.ai and click **Studio** from the module switcher.
3. Click Event on the left navigation bar and choose **Custom Events**.

![](https://i.imgur.com/M1Tb8Md.png)

5. Create an event named **okta-auth-success** and activate it.
6. A journey needs to be created in the Studio module with this event as its trigger point. Based on the received event data, an appropriate message will be displayed to the end user.

![](https://i.imgur.com/dZo6FdL.png)

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::


## 2. Use-Cases

The following use-cases are accomodated in this integration.

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### 2.1 Generate login link

1. In the [Studio flow builder](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys), choose the node type as **Integrations** and select **Okta** from the list of integrations that have been enabled for that particular bot. An **Integration Action Node** will be added to the flow builder.

![](https://i.imgur.com/xHPgShg.png)


3. When you click the **Integration Action Node**, a drop-down of all the available use-cases for this integration will be displayed. Click **Generate Login URL** from that dropdown.

![](https://i.imgur.com/sodoaqD.png)


5. Fill in the following field for the execution of the use-case. The following is a table that consists of the sample value,data type and description for each of these fields. 



| Field name | Sample value | Data type |Description|
| -------- | -------- | -------- |----|
| Redirect URI     | https://cloud.yellow.ai/integrations/genericIntegration/oauth/okta/x5 | String   | Callback location where the authorization code or tokens should be sent. It must match the value that was pre-registered in Okta during the client registration. <br/> Copy the value from integration card and pass it here.|
|Scope| openid profile | String | ID tokens and access tokens can access openid, profile, email, address, phone, offline_access, and groups.|


5. The **Generate Login URL Integration Action Node** has two outcomes, success or failure. Based on the success/failure of the execution of the **Integration Action Node**, the flow will proceed to success or fallback branches respectively.

**Sample response in case of success:**

```

{
             "success": true,
             "message": "Login URL Generated Successfully.",
             "data": {
               "oktaLoginUrl": "https://login.microsoftonline.com/JDVE/oauth2/v2.0/authorize?client_id=ABXS&response_type=code&redirect_uri=https://app.yellowmessenger.com/integrations/azureauth/&response_mode=query&state=eyJib3QiOiJ4MTY0NTQzMDgyNTY0NSIsInNvdXJjZSI6IlVjaGloYSIsInNlbmRlciI6IjIxODQ5ODMzNTIzNDA0MTQ3MjA4NzE3NjYxMl8yMTg0OTgzMzUyMzQwNDE0NzIwODcxNzY2MTJfV3BjbkYxRlEyZ2lqcTdUdGYwMEJQIn0=&scope=BESB"
             }
           }

```

To use this **Integration Action Node** in an app.yellow.ai bot, refer to the following example:

```
app.executeIntegrationAction({
  "integrationName": "okta",
  "action": "Generate Login URL",
  "dynamicParams": {
      "redirectUri": "https://cloud.yellow.ai/integrations/genericIntegration/oauth/okta/x1632218421575",
      "scope": "openid profile email"
  }
}).then((res) => {
  console.log("response from action node", res);
  app.log(res, '||Response from action node||')
}).catch((err) => {
  console.log("Error in action node", err);
  app.log(err, '||Error in action node||')
})

```
### 2.2 Get user info

1. In the [Studio flow builder](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys), choose the node type as **Integrations** and select **Okta** from the list of integrations that have been enabled for that particular bot. An **Integration Action Node** will be added to the flow builder.

![](https://i.imgur.com/xHPgShg.png)


3. Once you click the **Integration Action Node**, you will see a dropdown of available use-cases for this integration. Click **Get User Info** from that dropdown.

![](https://i.imgur.com/rdWKWC7.png)

5. Fill in the following fields for the execution of the use-case. The following is a table that consists of the sample value, data type and description for each of these fields.



| Field name | Sample value | Data type |Description|
| -------- | -------- | -------- |----|
| Access Token     | asddskeku2iwewbhwjsnmelsdjckmd22eokeds| String   | You will get the access token in okta event after successful login.

**Sample response in case of success:**
```
{
               "sub": "00uid4BxXw6I6TV4m0g3",
               "name" :"John Doe",
               "nickname":"Jimmy",
               "given_name":"John",
               "middle_name":"James",
               "family_name":"Doe",
               "profile":"https://example.com/john.doe",
               "zoneinfo":"America/Los_Angeles",
               "locale":"en-US",
               "updated_at":1311280970,
               "email":"john.doe@example.com",
               "email_verified":true,
               "address" : { "street_address":"123 Hollywood Blvd.", "locality":"Los Angeles", "region":"CA", "postal_code":"90210", "country":"US" },
               "phone_number":"+1 (425) 555-1212"
           }
```
To use this **Integration Action Node** in an app.yellow.ai bot, refer to the following example:

```
app.executeIntegrationAction({
  "integrationName": "okta",
  "action": "Get User Info",
  "dynamicParams": {
       "accessToken": "youraccessTokenValue"
  }
}).then((res) => {
  console.log("response from action node", res);
  app.log(res, '||Response from action node||')
}).catch((err) => {
  console.log("Error in action node", err);
  app.log(err, '||Error in action node||')
})
```
















