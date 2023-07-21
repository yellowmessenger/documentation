---
title : Salesforce CRM
sidebar_label : Salesforce CRM
---


Integrate your yellow.ai platform with your [Salesforce CRM](https://www.salesforce.com/in/crm/) account to recieve updates on your Salesforce objects and to perform actions like create and update objects, etc.,

:::note

An object is a Salesforce CRM term which means a collection of related fields, which can be customized to suit the specific needs of an organization. These fields are essentially data points that hold specific pieces of information related to the entity represented by the object.

For example, in Salesforce CRM, an **Account** object is used to store information about your customers or clients. This object can include fields such as **Company Name**, **Phone Number**, **Billing Address**, and **Industry**. By using the **Account** object, you can easily track and manage information about your customers, such as their contact information, buying history, and preferences.
:::

## 1. Connect Salesforce CRM with Yellow.ai

To connect your Salesforce CRM account with Yellow.ai, follow the these steps:

1. Go to cloud.yellow.ai and click **Integrations** on the module switcher.

 ![](https://i.imgur.com/1EjCvqy.png)


2. Search for **Salesforce CRM** in the search box or go to the category **CRM** > **Salesforce CRM**.

 ![](https://i.imgur.com/KkbUVou.png)


3. Choose the **Salesforce CRM environment**. 

 ![](https://i.imgur.com/xwCT87l.png)


4. Click **Connect to Salesforce CRM** button. 

 ![](https://i.imgur.com/Rn5nXuX.png)


5. Log in to your Salesforce CRM account in the following pop-up to establish this integration. 

 ![](https://i.imgur.com/W4rrs7W.gif)

 6. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::



## 2. Payload to access Salesforce CRM on app.yellow.ai 

```
app.executeIntegrationAction({
        "action": <NODE TO BE EXECUTED>,
        "dynamicParams": {
    "context": [{
       "key": "objects",
       "value": <VALUE OF OBJECT SELECTED>,
       "label": <VALUE LABEL OF OBJECT SELECTED>,
       "nextStep":"fields"
   }],
   "botId": <BOT ID>,
   "integrationName": "salesforce-crm",
   "nodeName": <NODE NAME>,
   "source": <SOURCE>,
   "sender": <SENDER>,
   "dynamicParams": {
       <VALUES TO BE POPULATED>
   }
}})
```

:::note
Yellow.ai uses oAuth 2.0 to connect with a client's Salesforce account and refrains from retaining the client's authentication details. During the integration process, Yellow.ai redirects the user to either the [Salesforce login page](https://www.salesforce.com/in/?ir=1), or to the previously used subdomain within the same browser. If the integration is required in a different browser, the user must delete their cookies and then login via the Yellow.ai platform.
:::

## 3. Use-case

Through this integration you can create,update,fetch objects and perform further more actions in your Salesforce CRM account.

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

1. In the [Studio flow builder](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys), choose the node type as **Integrations** and select **Salesforce CRM** from the list of integrations that have been enabled for that particular bot. An **Integration Action Node** will be added to the flow builder.

![](https://i.imgur.com/oGH7ZRI.png)


2. Click the node, choose the action to be performed and the object in which it has to be performed.

<img src="https://i.imgur.com/QdJX2pg.png" alt="drawing" width="50%"/>

<img src="https://i.imgur.com/BnqxBTc.png" alt="drawing" width="60%"/>


**Sample success response:**

```
{
   "success": true,
   "message": "Execution Successful",
   "data": {
       "statusCode": 201,
       "body": "{\"id\":\"00Q5i00000DcsbKEAR\",\"success\":true,\"errors\":[]}",
       "headers": {
           "date": "Tue, 21 Feb 2023 09:03:59 GMT",
           "set-cookie": [
               "CookieConsentPolicy=0:1; path=/; expires=Wed, 21-Feb-2024 09:03:59 GMT; Max-Age=31536000",
               "LSKey-c$CookieConsentPolicy=0:1; path=/; expires=Wed, 21-Feb-2024 09:03:59 GMT; Max-Age=31536000",
               "BrowserId=re5NTLHGEe2nD8spPHPlfg; domain=.salesforce.com; path=/; expires=Wed, 21-Feb-2024 09:03:59 GMT; Max-Age=31536000"
           ],
           "strict-transport-security": "max-age=63072000; includeSubDomains",
           "x-content-type-options": "nosniff",
           "x-xss-protection": "1; mode=block",
           "x-robots-tag": "none",
           "cache-control": "no-cache,must-revalidate,max-age=0,no-store,private",
           "sforce-limit-info": "api-usage=16/15000",
           "location": "/services/data/v51.0/sobjects/Lead/00Q5i00000DcsbKEAR",
           "content-type": "application/json;charset=UTF-8",
           "vary": "Accept-Encoding",
           "content-encoding": "gzip",
           "transfer-encoding": "chunked",
           "connection": "close"
       },
},

```
**Sample failure response:**

```
{
   "success": false,
   "message": "Execution Failed",
   "data": {
       "success": false,
       "error": "Error processing createRecord :: {\"message\":\"[INTG ERROR] Node API Execution failed for salesforce-crm_createRecord in bot x1664176494495: 4xx or 5xx series code encountered\",\"name\":\"IntegrationNodeAPIError\",\"response\":{\"statusCode\":400,\"body\":\"[{\\\"message\\\":\\\"Required fields are missing: [Company]\\\",\\\"errorCode\\\":\\\"REQUIRED_FIELD_MISSING\\\",\\\"fields\\\":[\\\"Company\\\"]}]\",\"headers\":{\"date\":\"Tue, 21 Feb 2023 09:12:48 GMT\",\"set-cookie\":[\"CookieConsentPolicy=0:1; path=/; expires=Wed, 21-Feb-2024 09:12:48 GMT; Max-Age=31536000\",\"LSKey-c$CookieConsentPolicy=0:1; path=/; expires=Wed, 21-Feb-2024 09:12:48 GMT; Max-Age=31536000\",\"BrowserId=6Oq-_bHHEe2M0bfscs6ulA; domain=.salesforce.com; path=/; expires=Wed, 21-Feb-2024 09:12:48 GMT; Max-Age=31536000\"],\"strict-transport-security\":\"max-age=63072000; includeSubDomains\",\"x-content-type-options\":\"nosniff\",\"x-xss-protection\":\"1; mode=block\",\"x-robots-tag\":\"none\",\"cache-control\":\"no-cache,must-revalidate,max-age=0,no-store,private\",\"sforce-limit-info\":\"api-usage=18/15000\",\"content-type\":\"application/json;charset=UTF-8\",\"transfer-encoding\":\"chunked\",\"connection\":\"close\"},\"request\":{\"uri\":{\"protocol\":\"https:\",\"slashes\":true,\"auth\":null,\"host\":\"101.53.168.117\",\"port\":443,\"hostname\":\"101.53.168.117\",\"hash\":null,\"search\":null,\"query\":null,\"pathname\":\"/services/data/v51.0/sobjects/Lead\",\"path\":\"/services/data/v51.0/sobjects/Lead\",\"href\":\"https://101.53.168.117/services/data/v51.0/sobjects/Lead\"},\"method\":\"POST\",\"headers\":{\"content-type\":\"application/json\",\"authorization\":\"Bearer 00D5i000009LFUq!AQIAQBNgSYLObvxoKFK.j8O7bIkkus.vcKGUHB75C8RfTUgK0kZNe6W6TCH.FAkF3hejM5fLLVPmewiFfk6x8wcBByElBUTQ\",\"host\":\"yellowai-b-dev-ed.my.salesforce.com\",\"user-agent\":\"yellow-ai/api_processor\",\"accept-encoding\":\"gzip, deflate\",\"content-length\":18}}}}",
       "node": "createRecord",
}

```

#### Supported Version

This integration will support the latest version's (52.0) releases. For more information on this, please click [here](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm).





