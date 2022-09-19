---
title : Azure AD
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


## Steps to configure App in Azure AD:

**Step 1:** Go to [portal.azure.com](https://portal.azure.com/) > Active Directory > App Registrations.

![](https://paper-attachments.dropbox.com/s_DFCB7E05F047CA7FA3CB9A713F6B533B7C793BE35DB3541E48AEDA22175EEBBB_1613053809080_image.png)


**Step 2:** Register a new app for the chatbot (if not already registered)

**Step 3:** Copy and Save the Application/Client ID and tenant ID from overview section.


![](https://lh6.googleusercontent.com/TG1sKk4JqfF-GB_PP5cjIiC9q9AGTRE5ml06XPtLPC_r3aPwrYkM-gcoRGLl7ZUCN2_P5AD_YRcduzYnKnfbE2B4QLKtZ13f22tFjmBktPWPd9pS9CPoA2NXjKbFyd1AIbRplOr6)


**Step 4:** Go to Certificates & Secrets > New client secret > Fill the description & select expires to Never, After clicking on Add button a Client Secret will be generated, save the value of the Client Secret.

**Step 5:** Goto Authentication > Add a platform > Web > Add the redirect url > Save.
Redirect-Url: https://app.yellowmessenger.com/integrations/azureauth/

**Step 6:** Add / Remove permission and Grant Admin consent for the App.
Goto API Permissions > Add the required permissions.

![](https://lh6.googleusercontent.com/z37T-8_2hO-v88FOY15bYZs3ZhNy7HK2hX3mR_uKF6Qh1L77cnBuHBc2IPXZX_Qm-glHTF5mBPkQnWNVa2eo3t6MmkDGhQWrpg-jDZdVWr3So_JH7QKeS9milnNcDW7YWTDj1dhP)


**Common permission:**

| Scope                             | Description                                                    |
| --------------------------------- | -------------------------------------------------------------- |
| openid, email, profile, User.Read | Used to retrieve login details & their profile using Graph Api |
| offline_access                    | Required to obtain refresh token                               |
| User.Read.All                     | Read profile of all the user in the tenant.                    |
| Calendars.ReadWrite               | Edit User’s calendar / meetings                                |

Graph Permission: https://docs.microsoft.com/en-us/graph/permissions-reference


## Steps to configure registered app in YM bot:
1. Go to the YM bot > Configuration > Integrations > Azure Active Directory
2. Enter the obtained Tenant ID, Client ID, Client Secret
3. Enter the API version to v2.0
4. Enter the required scope > Save


![](https://paper-attachments.dropbox.com/s_DFCB7E05F047CA7FA3CB9A713F6B533B7C793BE35DB3541E48AEDA22175EEBBB_1613055445398_image.png)


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
