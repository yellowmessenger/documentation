---
title : Zoho CRM
sidebar_label : Zoho CRM
---


Integrate your yellow.ai platform with your [Zoho CRM](https://www.zoho.com/en-in/crm/) account to create, update and search for records in your Zoho CRM modules.

:::note
In Zoho CRM, data is categorized into groups or divisions based on similarity. Each division that has similar data is called a **module**. For example, Leads is a module that contains all your business leads' details.
:::

## 1. Connect Zoho CRM with Yellow.ai

To connect your Zoho CRM account with Yellow.ai, follow these steps:

1. Go to cloud.yellow.ai and click **Integrations** on the module switcher.

![](https://i.imgur.com/1EjCvqy.png)

2. Search for **Zoho CRM** in the search box or go to the category **CRM** > **Zoho CRM**.

![](https://i.imgur.com/07zbS8L.png)

3. Click **Connect to Zoho-CRM** button and log in to your Zoho CRM account in the following pop-up to establish this integration. 


## 2. Payload to access Zoho CRM on app.yellow.ai 

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
   "integrationName": "zoho-crm",
   "nodeName": <NODE NAME>,
   "source": <SOURCE>,
   "sender": <SENDER>,
   "dynamicParams": {
       <VALUES TO BE POPULATED>
   }
}})

```
:::note
Yellow.ai adopts a secure approach towards client credential storage, whereby it refrains from storing the said credentials. Instead, it utilizes the oAuth 2.0 to integrate with the client's Zoho account. During the integration, Yellow.ai directs the user to log in to their Zoho CRM account and seek authorization to access the account on Yellow.ai. This process ensures optimal security and eliminates any potential risks associated with the storage of client credentials.
:::

## 3. Use-case

Through this integration you can create and update all the standard records in your Zoho CRM account.

1. In the [Studio flow builder](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys), choose the node type as **Integrations** and select **Zoho CRM** from the list of integrations that have been enabled for that particular bot. An **Integration Action Node** will be added to the flow builder.

![](https://i.imgur.com/IYe9Wxp.png)


2. Choose the action to be performed, the module in which it has to be performed and fill in the respective fields.

![](https://i.imgur.com/RGVFM3e.png)

![](https://i.imgur.com/trU9nS8.png)


**Sample success response:**

```
{
   "success": true,
   "message": "Execution Successful",
   "data": {
       "statusCode": 201,
       "body": "{\"data\":[{\"code\":\"SUCCESS\",\"details\":{\"Modified_Time\":\"2023-02-21T14:47:17+05:30\",\"Modified_By\":{\"name\":\"Raksha R\",\"id\":\"332678000000228001\"},\"Created_Time\":\"2023-02-21T14:47:17+05:30\",\"id\":\"332678000000867006\",\"Created_By\":{\"name\":\"Raksha R\",\"id\":\"332678000000228001\"}},\"message\":\"record added\",\"status\":\"success\"}]}",
  }

```

**Sample failure response:**

```
{
   "success": false,
   "message": "Execution Failed",
   "data": {
       "success": false,
       "error": "Error processing createRecord :: {\"message\":\"[INTG ERROR] Node API Execution failed for zoho-crm_createRecord in bot x1664176494495: 4xx or 5xx series code encountered\",\"name\":\"IntegrationNodeAPIError\",\"response\":{\"statusCode\":400,\"body\":\"{\\\"code\\\":\\\"INVALID_DATA\\\",\\\"details\\\":{\\\"expected_data_type\\\":\\\"jsonobject\\\"},\\\"message\\\":\\\"body\\\",\\\"status\\\":\\\"error\\\"}\\n\",\"headers\":{\"server\":\"ZGS\",\"date\":\"Tue, 21 Feb 2023 09:18:38 GMT\",\"content-type\":\"application/json;charset=UTF-8\",\"content-length\":\"104\",\"connection\":\"close\",\"set-cookie\":[\"941ef25d4b=1bfe2db6d19f9173efced4a75c6b6506; Path=/\",\"crmcsr=6e24c89f-15af-4a8d-a2ae-4a9ae41cd463;path=/;SameSite=None;Secure;priority=high\",\"_zcsr_tmp=6e24c89f-15af-4a8d-a2ae-4a9ae41cd463;path=/;SameSite=Strict;Secure;priority=high\",\"JSESSIONID=FAC2412202E8AC272350783D5A196B56; Path=/; Secure\"],\"referrer-policy\":\"strict-origin\",\"x-content-type-options\":\"nosniff\",\"x-xss-protection\":\"1; mode=block\",\"cache-control\":\"no-store, no-cache, must-revalidate, private\",\"pragma\":\"no-cache\",\"expires\":\"Thu, 01 Jan 1970 00:00:00 GMT\",\"x-frame-options\":\"SAMEORIGIN\",\"x-accesstoken-reset\":\"2023-02-21T15:46:28+05:30\",\"clientversion\":\"6007735\",\"clientsubversion\":\"73cb86c33821cf861d01dedd6b33d075\",\"content-disposition\":\"attachment; filename=response.json\",\"x-download-options\":\"noopen\",\"content-language\":\"en-US\"},\"request\":{\"uri\":{\"protocol\":\"https:\",\"slashes\":true,\"auth\":null,\"host\":\"169.148.148.66\",\"port\":443,\"hostname\":\"169.148.148.66\",\"hash\":null,\"search\":null,\"query\":null,\"pathname\":\"/crm/v2/Leads\",\"path\":\"/crm/v2/Leads\",\"href\":\"https://169.148.148.66/crm/v2/Leads\"},\"method\":\"POST\",\"headers\":{\"content-type\":\"application/json\",\"authorization\":\"Zoho-oauthtoken 1000.50a47d7f8e057fc7af19e15308f42d14.4013b576fa075e0dd91f586196903f27\",\"host\":\"www.zohoapis.in\",\"user-agent\":\"yellow-ai/api_processor\",\"accept-encoding\":\"gzip, deflate\",\"content-length\":0}}}}",
       "node": "createRecord",
}}

```

#### Supported version

This integration will work for API versions v1 and v2. 

:::note
For more information on the action nodes you can use here, click [here](https://www.zoho.com/crm/developer/docs/api/v2/insert-records.html).
:::



