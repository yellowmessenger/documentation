---
title : Azure AD integration
sidebar_label : Azure AD
---
## Introduction
Azure AD enables features like SSO and for personalizing the app experiences using existing organization data through APIs. For IT admins, it allows complete control over access to applications and resources utilizing security controls like MFA and conditional access.

Simplify single sign-on. Azure AD supports more than 2,800 pre-integrated software as a service (SaaS) applications.

Yellow.ai comes pre-built with the ADFS (Active Directory Federation Services) integration and generic OAuth implementation.

If ADFS is enabled for authentication, the bot will redirect the user to the AD (Active Directory) login page, wherein the user will need to provide their credentials and once AD authenticates the user, a callback is triggered by ADFS to YM indicating the success or failure of the authentication. When the authentication is successful, ADFS provides the authentication token along with a refresh token and time to live for the token.



## App Registration on AAD

For connecting Azure AD with YM bot, following details need to be obtained using AD App registration:

1. Client ID / Application ID
2. Tenant ID
3. Client Secret


## Steps to configure App in Azure AD

1. Go to [portal.azure.com](https://portal.azure.com/) > Active Directory > App Registrations.

   ![](https://i.imgur.com/CcHq8fL.png)


2. Register a new app for the chatbot (if not already registered)

3. Copy and Save the Application/Client ID and tenant ID from overview section.


   ![](https://i.imgur.com/CcHq8fL.png)


4. Go to Certificates & Secrets > New client secret > Fill the description & select expires to Never, After clicking on Add button a Client Secret will be generated, save the value of the Client Secret.

5. Goto **Authentication** > **Add a platform** > **Web** > **Add the redirect URL** > **Save**.

   Redirect-Url: https://app.yellowmessenger.com/integrations/azureauth/

6. Add/Remove permission and Grant Admin consent for the App.

7. Goto API Permissions > Add the required permissions.


**Common permission:**

| Scope                             | Description                                                    |
| --------------------------------- | -------------------------------------------------------------- |
| openid, email, profile, User.Read | Used to retrieve login details & their profile using Graph Api |
| offline_access                    | Required to obtain refresh token                               |
| User.Read.All                     | Read profile of all the user in the tenant.                    |
| Calendars.ReadWrite               | Edit User’s calendar / meetings                                |

Graph Permission: https://docs.microsoft.com/en-us/graph/permissions-reference


## Steps to integrate Azure app with yellow.ai bot:
1. On the Cloud platform, navigate to Development/Staging environment and go to **Extensions** > **Integrations** > **Tools & Utilities** > **Azure**. Alternatively, you can use the Search box to find a specific integration.
   ![](https://i.imgur.com/UG4GJpt.png)

2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (`_`).
3. Enter the obtained **Tenant ID**, **Client ID**, **Client Secret**.
3. Enter the API version to v2.0
4. Enter the required scope.
5. Click **Connect**.


   ![](https://i.imgur.com/IfoUcrn.png)

5. If you want to connect multiple accounts, click **+ Add account** and proceed with the previous steps. You can add a maximum of 15 accounts.



**Obtain Azure AD** **Login url:**

    let consent = "&prompt=login"  //prompt=login allow user to choose a logging account

    {
       "title": "Login",
       "url": app.azure.auth() + consent                     
    }

**Response**

    app.log(app.data)
    {
       "event": {
           "code": "azure-auth-success",
           "data": {
               "token_type": "Bearer",
               "scope": "Calendars.ReadWrite email openid profile User.Read",
               "expires_in": 3599,
               "ext_expires_in": 3599,
               "access_token": "eyJ0eXXXXXXXXXXXXXXXXX",
               "refresh_token": "aiJ0eXXXXXXXXXXXXXXXX"
           }
       }
     }

**Access Token** can be used to get access to resources of allowed applications.
Expire time : 1 hour.

Azure allows an expired access-token to be refreshed using the **Refresh Token** for a maximum period of time of 90 days.

**Retrieve user profile using AD refresh token & Graph Api**

Request

    curl --location --request GET 'https://graph.microsoft.com/v1.0/me' \
    --header 'Authorization: Bearer {accessToken}' \

Response

    {
        "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity",
        "businessPhones": [],
        "displayName": "Shubhi Saxena",
        "givenName": "Shubhi",
        "jobTitle": null,
        "mail": "shubhi@bitonictexxxxxxx.onmicrosoft.com",
        "mobilePhone": null,
        "surname": "Saxena",
        "userPrincipalName": "shubhi@bitonictexxxxxxx.onmicrosoft.com",
        "id": "e4a5dbe5-4750-41e7-8axxxxxxxxx"
    }

**Other useful Graph APIs:**

1. [Get events of user](https://docs.microsoft.com/en-us/graph/api/user-list-events?view=graph-rest-1.0&tabs=http)
2. [Send email on behalf of user](https://docs.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0&tabs=http)
3. [Load tasks of user](https://docs.microsoft.com/en-us/graph/api/planneruser-list-tasks?view=graph-rest-1.0&tabs=http)
4. [Update password](https://docs.microsoft.com/en-us/graph/api/resources/passwordprofile?view=graph-rest-1.0)

**Graph APIs:**
 
 [https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0](https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0)

**Graph Explorer:** [https://developer.microsoft.com/en-us/graph/graph-explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)


## References
1. [Azure ADFS](https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/overview/whats-new-active-directory-federation-services-windows-server)
2. [Active Directory authentication](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-flow-tab)
3. [Graph APIs](https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0)
4. [App Registration](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
