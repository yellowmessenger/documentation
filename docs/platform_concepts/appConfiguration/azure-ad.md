---
title : Azure AD integration
sidebar_label : Azure AD
---

Azure Active Directory (Azure AD) enhances user management by enabling **Single Sign-On (SSO)** and personalized app experiences through the use of organizational data APIs. This integration also offers IT administrators comprehensive control over application and resource access, using advanced security features like **Multi-Factor Authentication (MFA)** and conditional access.

#### Key Features:
- **SSO for Seamless Access:** Azure AD supports integration with over 2,800 pre-configured Software as a Service (SaaS) applications, simplifying access management across systems.  
- **Security and Personalization:** Use organization-specific data to create secure, tailored experiences.

#### Yellow.ai Compatibility:
Yellow.ai comes pre-integrated with:
- **Active Directory Federation Services (ADFS)**  
- **Generic OAuth** implementation  

This ensures secure authentication while supporting diverse organizational needs.

#### Authentication Flow:  
When ADFS is enabled:  
1. The bot redirects you to the **Active Directory login page** for credential input.  
2. AD validates the credentials.  
3. Upon successful authentication, ADFS triggers a callback to Yellow.ai to indicate the result.  
4. If authentication succeeds, ADFS generates:  
   - An **authentication token**  
   - A **refresh token**  
   - The token’s **time-to-live (TTL)**  

These tokens allow secure access while maintaining control over session duration.


---


## **App Registration on Azure AD**

To connect Azure AD with your Yellow.ai bot, you must first register an app in Azure AD and retrieve the following details:  
1. **Client ID** (Application ID)  
2. **Tenant ID**  
3. **Client Secret**


### **Steps to Configure the App in Azure AD**

1. Log in to [Azure Portal](https://portal.azure.com) and navigate to **Active Directory** > **App Registrations**.  
   ![](https://i.imgur.com/CcHq8fL.png)

2. [Register a new application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate) for the chatbot (if not already registered).  

3. Copy and save the **Application/Client ID** and **Tenant ID** from the **Overview** section.  
   ![](https://i.imgur.com/CcHq8fL.png)

4. Navigate to **Certificates & Secrets**:  
   - Click **New Client Secret**.  
   - Provide a description and set the expiration to **Never**.  
   - Click **Add**, and copy the generated Client Secret for future use.

5. Go to **Authentication**:  
   - Click **Add a Platform** > **Web**.  
   - Add the Redirect URL:  
     `https://app.yellowmessenger.com/integrations/azureauth/`  
   - Click **Save**.

6. Configure Permissions:  
   - Navigate to **API Permissions** > **Add Permission**.  
   - Add the following common permissions and grant **Admin Consent**:

   | **Scope**          | **Description**                                              |
   |---------------------|--------------------------------------------------------------|
   | openid, email, profile, User.Read | Retrieve login details and user profiles using Graph API. |
   | offline_access      | Required for refresh token retrieval.                        |
   | User.Read.All       | Read user profiles in the tenant.                            |
   | Calendars.ReadWrite | Modify user calendars and meetings.                          |

   For more details, refer to the [Graph Permissions Guide](https://docs.microsoft.com/en-us/graph/permissions-reference).

---

### **Steps to Integrate Azure App with Yellow.ai Bot**

1. In the Yellow.ai platform, navigate to the **Development** or **Staging** environment:  
   - Go to **Extensions** > **Integrations** > **Tools & Utilities** > **Azure**.  
   - Use the search box if needed.  
   ![](https://i.imgur.com/UG4GJpt.png)

2. In the **Account Name** field, provide a unique name for the integration (use lowercase alphanumeric characters and underscores only).  

3. Enter the following details obtained from Azure AD:  
   - **Tenant ID**  
   - **Client ID**  
   - **Client Secret**

4. Set the API version to **v2.0**.  

5. Specify the required **Scope** (e.g., `Calendars.ReadWrite offline_access User.Read`).  

6. Click **Connect**.  
   ![](https://i.imgur.com/IfoUcrn.png)

7. To connect additional accounts, click **+ Add Account** and repeat the steps above. A maximum of 15 accounts can be added.

---

### **Authentication Workflow**

When a user initiates authentication via Azure AD:  
1. The bot redirects the user to the **Active Directory login page**.  
2. After entering their credentials, AD validates them.  
3. Upon successful authentication, Azure AD sends a callback to Yellow.ai with:  
   - **Access Token**  
   - **Refresh Token**  
   - **Token Expiry Details**

#### **Access Token Usage**  
The **Access Token** allows secure access to resources within the permissions granted. Note: Tokens expire in 1 hour but can be refreshed using the **Refresh Token** for up to 90 days.

---

### **Retrieve User Profile via Graph API**

To fetch user details using the **Access Token**, send a GET request to the Microsoft Graph API:

#### **Request:**

```bash
curl --location --request GET 'https://graph.microsoft.com/v1.0/me' \
--header 'Authorization: Bearer {accessToken}'
```

#### **Response Example:**

```json
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
```

---

### **Other Useful Graph APIs**

1. [Get User Events](https://docs.microsoft.com/en-us/graph/api/user-list-events?view=graph-rest-1.0&tabs=http)  
2. [Send Email on Behalf of a User](https://docs.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0&tabs=http)  
3. [Retrieve User Tasks](https://docs.microsoft.com/en-us/graph/api/planneruser-list-tasks?view=graph-rest-1.0&tabs=http)  
4. [Update Password](https://docs.microsoft.com/en-us/graph/api/resources/passwordprofile?view=graph-rest-1.0)

---

### **Resources for Exploration**

- [Microsoft Graph API Documentation](https://docs.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0)  
- [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)

--- 

This version ensures clarity, professionalism, and adherence to documentation standards. It is structured for easy navigation and a seamless user experience.













## App Registration on AAD

For connecting Azure AD with YM bot, following details need to be obtained using AD App registration:

1. Client ID / Application ID
2. Tenant ID
3. Client Secret


## Steps to configure App in Azure AD

1. Go to [portal.azure.com](https://portal.azure.com/) > Active Directory > App Registrations.

   ![](https://i.imgur.com/CcHq8fL.png)


2. [Register a new app](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate) for the chatbot (if not already registered)

3. Copy and Save the Application/Client ID and tenant ID from overview section.


   ![](https://i.imgur.com/CcHq8fL.png)


4. Go to Certificates & Secrets > New client secret > Fill the description & select expires to Never, After clicking on Add button a Client Secret will be generated, save the value of the Client Secret.

5. Goto **Authentication** > **Add a platform** > **Web** > **Add the redirect URL** > **Save**.

   Redirect-Url: https://app.yellowmessenger.com/integrations/azureauth/

6. Add/Remove permission and Grant Admin consent for the App.

7. Go to API Permissions > Add the required permissions.


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
