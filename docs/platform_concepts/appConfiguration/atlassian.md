---
title : Atlassian
sidebar_label : Atlassian
---

Integrate your Yellow.ai platform with Atlassian, allowing management of your Atlassian account from Yellow.ai. This integration empowers your bot to provide users with access to their Atlassian account and perform Atlassian actions directly within the Yellow.ai bot.


## Steps to integrate with Yellow.ai

The following are the steps to be followed to integrate your Atlassian account with Yellow.ai.

### Create an app on Atlassian

1. Go to https://developer.atlassian.com/console/myapps/ and click **Create** > **Oauth 2.0 integration**.

![](https://i.imgur.com/63pv7VA.png)

2. Go to **Console** > **My apps** > **yourAppName** > **Permission** > **Jira API** > **Add** > **Configure**.

![](https://i.imgur.com/8RBBmcn.png)

3. Add and configure the app’s API scopes for JIRA platform's REST and Service Management API.

**Common permissions**

| Scope | Description |
| --- | --- |
| read:jira-work | Read Jira project and issue information, and search for specific issues. |
| read:jira-user | Read Jira user information that is available to you. |
| write:jira-work | Create and edit Jira issues, including creating and editing them, posting comments on behalf of the user, adding worklogs, and deleting issues. |
| read:servicedesk-request | Read customer requests data, including approvals, attachments, comments, and request participants. |
| write:servicedesk-request | Create and edit customer requests, including creating and editing them, adding comments and attachments. |

4. Go to yellow.ai > **Integrations**, click the URL hyperlink, and copy it. 

![](https://i.imgur.com/VYgJIi8.png)

6. Paste this in the **Callback URL** field.

![](https://i.imgur.com/uHJ9hYX.png)

5. Go to **Settings** and copy the **Client ID** and **Secret**.

![](https://i.imgur.com/iGJtm55.png)


### Connect Atlassian with Yellow.ai

1. Go to cloud.yellow.ai and click **Integrations**.

![](https://i.imgur.com/vUNcUtW.png)

2. To access Atlassian, either search for it from the left navigation bar, select the **Tools and Utilities** category > **Atlassian**.

![](https://i.imgur.com/QZyhSf3.png)

3. Under **Add account**, enter **Client ID**, **Client secret** and add the list of scopes in **Scope** separated by space, including offline_access.

 For example,

```
 "scope": "offline_access read:jira-work read:jira-user write:jira-work read:servicedesk-request write:servicedesk-request"
```

4. Click **Connect**.

![](https://i.imgur.com/hTpOdoC.png)

## Recieve Atlassian events in your bot

1. Go to **Studio** > **Event** > **Custom events** and create a custom event named ```atlassian-auth-success```. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#custom-events) for the steps to create custom event.

   ![](https://i.imgur.com/qVFBaUO.png)

2. You can set this event as a [start trigger for a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#13-trigger-flow-using-event). This flow will get triggered after a user has successfully been authorized. [Build the flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) to execute the desired action immediately after the user's authorization.

![](https://i.imgur.com/Jgg4B2s.png)

## Manage Atlassian from Yellow.ai

The following are the usecases currently supported in this integration.

### Set up the Atlassian login URL on Yellow.ai

1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) based on your usecase.
2. Include the integration node at the point in the flow where you want to authorize the user or when the bot needs to request user authorization. To accomplish this, navigate to **Integrations** and select **Atlassian**.

 <img src="https://i.imgur.com/Opk6Ywe.png" alt="drawing" width="60%"/>

2. [Store the reponse of this node](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) in a variable.


 <img src="https://i.imgur.com/AXrrt1a.png" alt="drawing" width="60%"/>

3. To display the URL to the user, pass this variable in a message node in this syntax  ```{{variables.variable.arrayname.fieldname}}```.

 ![](https://i.imgur.com/qvOS0wC.png)

**Sample success response:**

```
{
   "success": true,
   "message": "Login URL Generated Successfully.",
   "data": {
       "AtlassianLoginUrl": "https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=AjkmqleiLUM0D1BWH3jbdAplNPIepYHb&response_type=code&response_mode=query&scope=read%3Ame%20read%3Ajira-work%20manage%3Ajira-project%20read%3Ajira-user%20write%3Ajira-work%20manage%3Ajira-configuration%20read%3Aservicedesk-request%20write%3Aservicedesk-request%20offline_access&redirect_uri=https://app.yellow.ai/integrations/genericIntegration/oauth/atlassian/x1670616051234&state=eyJib3QiOiJ4MTY3MDQxNDg1NzY2NSIsInNvdXJjZSI6InllbGxvd21lc3NlbmdlciIsInNlbmRlciI6IjM1MTI0MzAyNzEyNzU5MDcyMjQxNjQ4OTA5MSJ9&prompt=consent"
   }
}
```

### Refresh access token on Yellow.ai

1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) based on your usecase.
2. Include the integration node at the point in the flow where you want to refresh the access token. To accomplish this, navigate to **Integrations** and select **Atlassian**.

 <img src="https://i.imgur.com/Opk6Ywe.png" alt="drawing" width="60%"/>

2. Fill the **Refresh token** field.

 <img src="https://i.imgur.com/HU2UWlF.png" alt="drawing" width="50%"/>
 
| Field name    | Sample value                                         | Data type | Description                                                                                |
| -------------- | ---------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------ |
| Refresh Token | asddskeku2iwewbhwjsnmelsdjckmd22eokeds              | String    | Access and refresh token obtained from Atlassian event after successful login.            |
 


**Sample success response:**

```
{
 "access_token": "eyJraWQiOiJmZTM2ZThkMTA2N2RjYTgyNTg5MmEiLCJhbGciOiJSUzI1NiJ9.-sHvMv4K70aHwVkpbE8sLXovfoo2gIZZ2mgsTKzeVQ_YcKX0EMPTnuViXMoDwm1RfwHb",
 "expires_in": 3600,
 "token_type": "Bearer",
 "refresh_token": "eyJraWQiOiI1MWE2YjE2TQ5ZDFiYTdhM2VmZjciLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NQ4YTctODNiMi02E4ODlmNDgiLCJzdWIiOiI2MjgzNTUwNGNjMWQxNTAwNmZ",
 "scope": " offline_access read:jira-user"
}



```