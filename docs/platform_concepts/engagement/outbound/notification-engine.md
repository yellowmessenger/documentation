---
sidebar_label : Notification API
title : Notification API
---

## 1. Introduction

Yellow.ai's Notification API lets you send business-initiated messages from the various supported channels directly from your CRM or internal Systems.

The API supports different channels (SMS, email, and WhatsApp) and makes it more easy for developers to integrate it anywhere in less time.

**To view Notification API collections for each channel**, see

[![](https://i.imgur.com/adPhuBf.png)](https://documenter.getpostman.com/view/9982063/UzBvGPGB#6b08f300-6405-457e-aaf7-7df822e258c8).

### 1.1 Features of the Notification API

*   Single endpoint for multiple channels
*   Enable range of API services with one-click
*   Real-time reports on YM Platform with the basic features of the BI tool to visualise your data
*   Callback Webhook Configuration support to receive delivery updates directly on your system

### 1.2 IPs Whitelisting

Additionally, our outbound IPs given below must be whitelisted for the reports callback to flow into your system.

*   13.71.52.164
*   13.71.49.46


### 1.3 Enable Notification API

In order to use the Notification API you have to enable it on the platform as explained here

1.  Go to the **Engage** module,
2.  Navigate to **Preferences**.
3.  Click **Enable API Access**.
    
  ![](https://i.imgur.com/h40gmOZ.png)


:::note
If notification API is not enabled for the bot, you will get a `400` error (API access is not enabled).
:::

### 1.4 Send delivery status to Webhook

You can use webhooks to share delivery notifications in real-time from yellow.ai to third-party applications. A Webhook is a HTTP callback function that allows communication between two applications.

To enable sending delivery staus to the Client's webhook:

1. Go to the **Engage** module,
2. Navigate to **Preferences**.
3. Enable **Postback URL**.

   ![](https://i.imgur.com/vV8neaA.png)

3. In **Send the delivery status to (applicable only for notifications API)**, enter the Webhook URL to which the delivery needs to be pushed. Ensure that no authentication is required to push data to the Webhook URL.

### 1.5 Send notification API reports

You can send reports of notifications sent through API to your preferred users. The report is sent as a CSV file for the chosen duration.

To send Notification API reports to your preferred recipients:

1. Go to the **Engage** module,
2. Navigate to **Preferences**.
3. Enable **Notification API reports**.

   ![](https://i.imgur.com/tcwOzpL.png)

4. In **Send notification API reports to**, enter email IDs of each recipient to whom you want to send reports. Press Enter after entering each email ID.

   ![](https://i.imgur.com/dEHh91d.png)

5. In **for time period between**, set the duration (**Start date** and **End date**)for which you want to send the report.
6. To also send report of WhatsApp notification API, enable **Whatsapp v1 Notification API**.





## 2. Notification API Details


### 2.1 Request Information

**Base URL**

`https://cloud.yellow.ai/api/engagements/notifications/v2/push?bot={botId}`

**Headers**

| **Header** | **Description/Value** |
| --- | --- |
| `Content-Type` | application/json |
| `x-api-key` | * **For** **`app.yellow.ai`** **platform**: Get the API key from the path **Configuration** > **Access Control** > **Bot API Key**.   **For** **`cloud.yellow.ai`** **platform**: Click the Yellow logo on top left corner > Select your bot from the dropdown > On the top-right corner, click **Configure** > On the left sidebar, click **API Keys** (you can see keys only if you are the super admin). |

> **Note**: Only users with Super Admin role can create a Bot API key.

#### Request Query Parameter

| **Parameter** | **Datatype** | **Description** |
| --- | --- | --- |
| botId* | String | Unique ID of the bot. Login to the Platform and navigate to the bot . You can find the bot ID in the URL Eg: x16387123456 |

#### Request Body Parameters

| **Parameter** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| `userDetails` | Object | Yes | Details of the user to be notified. Eg. Phone Number for WhatsApp. |
| `notification`  (fields: `params`) | Object | Yes | Template details |
| `media` | Object | Optional | Template Media URL, Quick Reply Payload can be passed here |
| `config` fields: (`customPayload`, `postbackUrl`) | Object  (Obj, String) | Optional | Configuration details for the API.<br/> <br/>`customPayload` - Custom information will be sent back with delivery updates.  <br/><br/>`postbackUrl` - Used to receive delivery updates on the client's webhook. <br/>To receive delivery updates on the clients webhook, enable **Postback URL** in **Engage** > **Preferences** and enter the Webhook URL in **send the delivery status to**. <br/><img src="https://i.imgur.com/32xQQhQ.png" /><br/>* **Note**: Ensure the Webhook URL does not require any authentication*.


##### `userDetails` Object

This object contains all relevant information about the user. It needs to have at least one contactable information and any number of additional parameters. For a WhatsApp notification, the `number` field is mandatory.

``` json
  "userDetails": {
       "number": "919090909090", //mandatory for SMS, WhatsApp, Voice     //country code to be added without space // if not added default 91
       "email": "abc@xyz.com", //mandatory for email channel
       "cc": "cc@xyz.com", //applicable only for email // array of string or string
       "bcc": "bcc@xyz.com", //applicable only for email // array of string or string
   }

```

##### `notification` Object

This contains the message template details that needs to be sent as a notification. `templateId` is mandatory.

``` json
"notification": {
    "templateId": "template_name", // name of the template from template manager// mandatory for WhatsApp, SMS(wherever applicable)
    "params": { //renderable parameters defined in the template.
           "emiValue": "15000", // variable parameter names as shown on template manager. Dynamic values can be passed.
           "balance": "79999",
           "media": [{ //applicable for whatsapp // 
                       "title": "title", //optional for document media types
                       "mediaLink": "https://URL.com.jpeg",
                       "quickReplies": [
                                {
                                    "type": "quick_reply",
                                    "value": "payload 1"
                                },
                                {
                                    "type": "quick_reply",
                                    "value": "payload 2"
                                }
                            ]
                     }],
           "quickReplies": {
                "ctaUrlParam": "pricing-ai-chatbot" // over here, "pricing-ai-chatbot" represents the extension of the URL after the domain (as configured in the template)
           }

```

##### `config` Object

This contains the list of available pre-configuration that will be validated before sending the messages to the user.

``` json
"config": {
        "customPayload": {
            "firstName": "Wasim",
            "phone": "91999999999",
            "UID" : "Got the details"
        },
       "postbackUrl": "https://webhook.url"
   }

```

### 2.2 Sample Webhook Payload

As soon as we receive a callback from the downstream services, we will post that data to the configured Webhook if available. Webhooks will be called with the request body.

``` json
{
  "event": {
    "status": "delivered"
  },
  "userId": "919999999999",
  "source": "whatsapp",
  "campaign": "apiNotifications",
  "templateId": "video_button1",
  "msgId": "3Yp8jdIUj8jNeoFOP1ZLT",
  "workflowId": null,
  "firstName": "Wasim",
  "phone": "91999999999",
  "UID": "Got the details"
}

```

### 2.3 Status codes (of response)

On successful queueing of the notification, you will receive a 202 status code with the relevant `msgId`. This confirms that the message details has been received by us and will be queued for sending on the relevant channel. The downstream service will pick the queue and will start sending it and updating the delivery status on the webhook and on the reports under Data Explorer on the platform.

| **Code** | **Description** |
| --- | --- |
| 202 | Message queued successfully. You will receive a msgId for acknowledgement and tracking. |
| 400 | Bad request. Request structure is not formed correctly. Please check the `message` field for more information. |
| 401 | Unauthorised. Please check your auth token. Only Super Admin Auth tokens are accepted for using API. |
| 422 | Invalid inputs. The request structure is evaluated to be correct but the parameter values are not within expected range. Channel not configured. |
| 429 | Rate limited. Occurs when there are too many requests sent to the API within a short time. Once a rate limit error is captured the rate of the API call should be decreased to honour the limits.  *Default Rate Limit is 2000 requests/min per Bot.* |
| 500 | Internal server error. TraceId will be sent back for tracking. |

#### API Error Codes
| **Code**                                        | **Description**                                                                                                                                                                                                                                                  |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   1004 - mediaUploadError                   |   UTA -- Failed to upload media to whatsapp \| wa tier - cloud-api/onprem)                                                                                                                                                                                   |
|   1400 - authException                      |   UTA -- If no sub-code is present, the login status or access token has expired, been revoked, or is otherwise invalid. Get a new access token. If a sub-code is present, see the subcode. \| wa tier - cloud-api/onprem)                                     |
|   1401 - apiUnknown                         |   UTA -- Possibly a temporary issue due to downtime. Wait and retry the operation. If it occurs again, check that you are requesting an existing API. See Authentication and Authorization Errors for debugging information. \| wa tier - cloud-api/onprem)  |
|   1402 - apiService                         |   UTA -- Temporary issue due to downtime. Wait and retry the operation. See Troubleshooting, Error 2 for debugging information. \| wa tier - cloud-api/onprem)                                                                                               |
|   1403 - apiMethod                          |   UTA -- Capability or permissions issue. Make sure your app has the necessary capability or permissions to make this call. \| wa tier - cloud-api/onprem)                                                                                                   |
|   1404 - apiTooManyCalls                    |   UTA -- Temporary issue due to throttling. Wait and retry the operation, or examine your API request volume. \| wa tier - cloud-api/onprem)                                                                                                                 |
|   1405 - apiPermissionDenied                |   UTA -- Permission is either not granted or has been removed. Handle the missing permissions. \| wa tier - cloud-api/onprem)                                                                                                                                |
|   1406 - parameterIsInvalid                 |   UTA -- One or more parameters are invalid \| wa tier - cloud-api/onprem)                                                                                                                                                                                   |
|   1406 - invalidUser                        |   UTA -- The recipient WhatsApp number is invalid / The user doesn't have a WhatsApp Account \| wa tier - cloud-api/onprem)                                                                                                                                   |
|   1407 - accessTokenExpired                 |   UTA -- Get a new access token. \| wa tier - cloud-api/onprem)                                                                                                                                                                                              |
|   1408 - contactsError                      |   UTA -- Failed to validate contact \| wa tier - cloud-api/onprem)                                                                                                                                                                                           |
|   1409 - phoneNumberNotAllowed              |   UTA -- You are not allowed to onboard this phone number in Cloud API, please contact us for more information \| wa tier - cloud-api/onprem)                                                                                                                |
|   1410 - temporaryBlockForPolicyViolations  |   UTA -- Wait and retry the operation. \| wa tier - cloud-api/onprem)                                                                                                                                                                                        |
|   1411 - duplicatePost                      |   UTA -- Duplicate posts cannot be published consecutively. Change the content of the post and try again. \| wa tier - cloud-api/onprem)                                                                                                                     |
|   1412 - platformRateLimit                  |   UTA -- You hit platform rate limits, please refer to the Rate Limit section for more information. \| wa tier - cloud-api/onprem)                                                                                                                           |
|   1413 - mediaError                         |   UTA -- Failed to download the media file used \| wa tier - cloud-api/onprem)                                                                                                                                                                               |
|   1413 - mediaError                         |   UTA -- Failed to download the media file used \| wa tier - cloud-api/onprem)                                                                                                                                                                               |
|   1414 - paymentIssues                      |   UTA -- There is some issue with the payment method of the Account. Please check on WhatsApp Business Manager if the payment method is set. \| wa tier - cloud-api/onprem)                                                                                  |
|   1415 - messageExpired                     |   UTA -- Message failed to send during its Time To Live (TTL) duration. \| wa tier - cloud-api/onprem)                                                                                                                                                       |
|   1416 - rateLimitError                     |   UTA -- Message failed to send because there were too many messages sent from this phone number in a short period of time. Resend the failed messages. \| wa tier - cloud-api/onprem)                                                                       |
|   1417 - unsignedCertificate                |   UTA -- Message failed to send because there was an error related to your certificate. Please contact support to investigate \| wa tier - cloud-api/onprem)                                                                                                 |
|   1418 - reEngagementMessage                |   UTA -- Message failed to send because more than 24 hours have passed since the customer last replied to this number. Use a message template to respond. \| wa tier - cloud-api/onprem)                                                                     |
|   1419 - messagingLimitReached              |   UTA -- Failed due to WhatsApp 24Hour Limit restrictions. Please check the link to know more: https://developers.facebook.com/docs/whatsapp/api/rate-limits#messaging \| wa tier - cloud-api/onprem)                                                        |
|   1419 - messagingLimitReached              |   UTA -- Failed due to WhatsApp 24Hour Limit restrictions. Please check the link to know more: https://developers.facebook.com/docs/whatsapp/api/rate-limits#messaging \| wa tier - cloud-api/onprem)                                                        |
|   1420 - genericError                       |   UTA -- WhatsApp was unable to send the message. Please try again. \| wa tier - cloud-api/onprem)                                                                                                                                                           |
|   1421 - unsuppotredMessageType             |   UTA -- Message type is not currently supported \| wa tier - cloud-api/onprem)                                                                                                                                                                              |
|   1422 - messageTooLong                     |   UTA -- Message length exceeds 4096 characters. \| wa tier - cloud-api/onprem)                                                                                                                                                                              |
|   1423 - invalidRecepientType               |   UTA -- Valid recipient types are: individual \| wa tier - cloud-api/onprem)                                                                                                                                                                                |
|   1424 - accessDenied                       |   UTA -- Number is already registered on WhatsApp See Migrating a Phone Number for information on moving a phone number from WhatsApp to the WhatsApp Business API. \| wa tier - cloud-api/onprem)                                                           |
|   1425 - resourceNotFound                   |   UTA -- File or resource not found \| wa tier - cloud-api/onprem)                                                                                                                                                                                           |
|   1426 - parameterMissing                   |   UTA -- Parameter Missing \| wa tier - cloud-api/onprem)                                                                                                                                                                                                    |
|   1427 - parameterTypeError                 |   UTA -- Value entered for a parameter is of the wrong type or other problem. \| wa tier - cloud-api/onprem)                                                                                                                                                 |
|   1428 - badUser                            |   UTA -- You will receive this message when you send a message to yourself. To resolve, send the message to a number that is not your own. \| wa tier - cloud-api/onprem)                                                                                    |
|   1429 - parameterMissing                   |   UTA -- Number of parameters provided does not match the expected number of variable parameters. \| wa tier - cloud-api/onprem)                                                                                                                             |
|   1430 - templateTextTooLong                |   UTA -- Translated text too long \| wa tier - cloud-api/onprem)                                                                                                                                                                                             |
|   1431 - formatCharacterPolicyViolated      |   UTA -- Format character policy violated \| wa tier - cloud-api/onprem)                                                                                                                                                                                     |
|   1432 - parameterTypeError                 |   UTA -- Parameter format does not match format in the created Template. \| wa tier - cloud-api/onprem)                                                                                                                                                      |
|   1432 - parameterTypeError                 |   UTA -- Parameter format does not match format in the created Template. \| wa tier - cloud-api/onprem)                                                                                                                                                      |
|   1433 - incompleteDelete                   |   UTA -- A previous delete operation failed. A delete retry is needed before registering again. \| wa tier - cloud-api/onprem)                                                                                                                               |
|   1434 - decryptionError                    |   UTA -- Decrypting the backup blob failed for an unknown reason. \| wa tier - cloud-api/onprem)                                                                                                                                                             |
|   1435 - backupBlobDecryptionError          |   UTA -- Backup blob cannot be decrypted due to bad format or bad password.'}, \| wa tier - cloud-api/onprem)                                                                                                                                                |
|   1436 - recoveryTokenDecryptionError       |   UTA -- Recovery token cannot be decrypted due to bad format or bad password.'}, \| wa tier - cloud-api/onprem)                                                                                                                                             |
|   1437 - serverTemporaryUnavailable         |   UTA -- Registration server is temporarily unavailable.'}, \| wa tier - cloud-api/onprem)                                                                                                                                                                   |
|   1438 - securityPinMismatch                |   UTA -- Wrong PIN used. \| wa tier - cloud-api/onprem)                                                                                                                                                                                                      |
|   1439 - recoveryTokenIncorrect             |   UTA -- The recovery token used for migration is stale. \| wa tier - cloud-api/onprem)                                                                                                                                                                      |
|   1440 - accountBlocked                     |   UTA -- Account is blocked by the registration server. \| wa tier - cloud-api/onprem)                                                                                                                                                                       |
|   1441 - tooManyPinGuesses                  |   UTA -- Too many PIN guesses for this account. \| wa tier - cloud-api/onprem)                                                                                                                                                                               |
|   1442 - pinGuessedTooFast                  |   UTA -- Registration request was made too fast. \| wa tier - cloud-api/onprem)                                                                                                                                                                              |
|   1443 - templateError                      |   UTA -- Template name does not exist in the translation \| wa tier - cloud-api/onprem)                                                                                                                                                                      |
|   1444 - systemOverloaded                   |   UTA -- system overloaded wa cloud api`} \| wa tier - cloud-api/onprem)                                                                                                                                                                                     |
|   1500 - messageExpired                     |   UTA -- Message failed to send due to some issue with the WhatsApp Business Account, possibly down or disconnected for more than 1 day \| wa tier - cloud-api/onprem)                                                                                       |
|   1501 - ttlLimitReached                    |   UTA -- Message failed to send during its Time To Live (TTL) duration.Resend the message \| wa tier - cloud-api/onprem)                                                                                                                                     |
|   14271 - invalidParameter                  |   UTA -- One or more parameters are invalid \| wa tier - cloud-api/onprem)                                                                                                                                                                                   |
|   14272 - invalidUser                       |   UTA -- The recipient WhatsApp number is invalid / The user doesn't have a WhatsApp Account \| wa tier - cloud-api/onprem)                                                                                                                                   |
|   14272 - invalidUser                       |   UTA -- The recipient WhatsApp number is invalid / The user doesn't have a WhatsApp Account \| wa tier - cloud-api/onprem)                                                                                                                                   |

### 2.4 Postman Collections

To access the entire Postman documentation and run collections, click the following button.

[![](https://i.imgur.com/adPhuBf.png)](https://documenter.getpostman.com/view/9982063/UzBvGPGB#6b08f300-6405-457e-aaf7-7df822e258c8)

For API details of a specific channel, click the respetive channel.

1. [WhatsApp](https://documenter.getpostman.com/view/9982063/UzBvGPGB#5961e189-e9cb-40ad-8ba6-7bada77acc06)
2. [SMS](https://documenter.getpostman.com/view/9982063/UzBvGPGB#c5013846-87a9-4062-9c1a-055eb7806f38)
3. [Email](https://documenter.getpostman.com/view/9982063/UzBvGPGB#5fea5e39-8168-4c9e-977c-fc667dfba0e2)
4. [Bulk messaging API](https://documenter.getpostman.com/view/9982063/UzBvGPGB#6b08f300-6405-457e-aaf7-7df822e258c8)

> **Note**: Whem you raise any support ticket, include `msgId` or `traceId` in the request.

### 2.5 Response Codes


| Error Code                                        | Description                                                                                                                                                                                                                                                  |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   1004 - mediaUploadError                   |   UTA -- Failed to upload media to whatsapp \| wa tier - cloud-api/onprem)                                                                                                                                                                                   |
|   1400 - authException                      |   UTA -- If no sub-code is present, the login status or access token has expired, been revoked, or is otherwise invalid. Get a new access token. If a sub-code is present, see the subcode. \| wa tier - cloud-api/onprem)                                     |
|   1401 - apiUnknown                         |   UTA -- Possibly a temporary issue due to downtime. Wait and retry the operation. If it occurs again, check that you are requesting an existing API. See Authentication and Authorization Errors for debugging information. \| wa tier - cloud-api/onprem)  |
|   1402 - apiService                         |   UTA -- Temporary issue due to downtime. Wait and retry the operation. See Troubleshooting, Error 2 for debugging information. \| wa tier - cloud-api/onprem)                                                                                               |
|   1403 - apiMethod                          |   UTA -- Capability or permissions issue. Make sure your app has the necessary capability or permissions to make this call. \| wa tier - cloud-api/onprem)                                                                                                   |
|   1404 - apiTooManyCalls                    |   UTA -- Temporary issue due to throttling. Wait and retry the operation, or examine your API request volume. \| wa tier - cloud-api/onprem)                                                                                                                 |
|   1405 - apiPermissionDenied                |   UTA -- Permission is either not granted or has been removed. Handle the missing permissions. \| wa tier - cloud-api/onprem)                                                                                                                                |
|   1406 - parameterIsInvalid                 |   UTA -- One or more parameters are invalid \| wa tier - cloud-api/onprem)                                                                                                                                                                                   |
|   1406 - invalidUser                        |   UTA -- The recipient WhatsApp number is invalid / The user doesn't have a WhatsApp Account \| wa tier - cloud-api/onprem)                                                                                                                                   |
|   1407 - accessTokenExpired                 |   UTA -- Get a new access token. \| wa tier - cloud-api/onprem)                                                                                                                                                                                              |
|   1408 - contactsError                      |   UTA -- Failed to validate contact \| wa tier - cloud-api/onprem)                                                                                                                                                                                           |
|   1409 - phoneNumberNotAllowed              |   UTA -- You are not allowed to onboard this phone number in Cloud API, please contact us for more information \| wa tier - cloud-api/onprem)                                                                                                                |
|   1410 - temporaryBlockForPolicyViolations  |   UTA -- Wait and retry the operation. \| wa tier - cloud-api/onprem)                                                                                                                                                                                        |
|   1411 - duplicatePost                      |   UTA -- Duplicate posts cannot be published consecutively. Change the content of the post and try again. \| wa tier - cloud-api/onprem)                                                                                                                     |
|   1412 - platformRateLimit                  |   UTA -- You hit platform rate limits, please refer to the Rate Limit section for more information. \| wa tier - cloud-api/onprem)                                                                                                                           |
|   1413 - mediaError                         |   UTA -- Failed to download the media file used \| wa tier - cloud-api/onprem)                                                                                                                                                                               |
|   1413 - mediaError                         |   UTA -- Failed to download the media file used \| wa tier - cloud-api/onprem)                                                                                                                                                                               |
|   1414 - paymentIssues                      |   UTA -- There is some issue with the payment method of the Account. Please check on WhatsApp Business Manager if the payment method is set. \| wa tier - cloud-api/onprem)                                                                                  |
|   1415 - messageExpired                     |   UTA -- Message failed to send during its Time To Live (TTL) duration. \| wa tier - cloud-api/onprem)                                                                                                                                                       |
|   1416 - rateLimitError                     |   UTA -- Message failed to send because there were too many messages sent from this phone number in a short period of time. Resend the failed messages. \| wa tier - cloud-api/onprem)                                                                       |
|   1417 - unsignedCertificate                |   UTA -- Message failed to send because there was an error related to your certificate. Please contact support to investigate \| wa tier - cloud-api/onprem)                                                                                                 |
|   1418 - reEngagementMessage                |   UTA -- Message failed to send because more than 24 hours have passed since the customer last replied to this number. Use a message template to respond. \| wa tier - cloud-api/onprem)                                                                     |
|   1419 - messagingLimitReached              |   UTA -- Failed due to WhatsApp 24Hour Limit restrictions. Please check the link to know more: https://developers.facebook.com/docs/whatsapp/api/rate-limits#messaging \| wa tier - cloud-api/onprem)                                                        |
|   1419 - messagingLimitReached              |   UTA -- Failed due to WhatsApp 24Hour Limit restrictions. Please check the link to know more: https://developers.facebook.com/docs/whatsapp/api/rate-limits#messaging \| wa tier - cloud-api/onprem)                                                        |
|   1420 - genericError                       |   UTA -- WhatsApp was unable to send the message. Please try again. \| wa tier - cloud-api/onprem)                                                                                                                                                           |
|   1421 - unsuppotredMessageType             |   UTA -- Message type is not currently supported \| wa tier - cloud-api/onprem)                                                                                                                                                                              |
|   1422 - messageTooLong                     |   UTA -- Message length exceeds 4096 characters. \| wa tier - cloud-api/onprem)                                                                                                                                                                              |
|   1423 - invalidRecepientType               |   UTA -- Valid recipient types are: individual \| wa tier - cloud-api/onprem)                                                                                                                                                                                |
|   1424 - accessDenied                       |   UTA -- Number is already registered on WhatsApp See Migrating a Phone Number for information on moving a phone number from WhatsApp to the WhatsApp Business API. \| wa tier - cloud-api/onprem)                                                           |
|   1425 - resourceNotFound                   |   UTA -- File or resource not found \| wa tier - cloud-api/onprem)                                                                                                                                                                                           |
|   1426 - parameterMissing                   |   UTA -- Parameter Missing \| wa tier - cloud-api/onprem)                                                                                                                                                                                                    |
|   1427 - parameterTypeError                 |   UTA -- Value entered for a parameter is of the wrong type or other problem. \| wa tier - cloud-api/onprem)                                                                                                                                                 |
|   1428 - badUser                            |   UTA -- You will receive this message when you send a message to yourself. To resolve, send the message to a number that is not your own. \| wa tier - cloud-api/onprem)                                                                                    |
|   1429 - parameterMissing                   |   UTA -- Number of parameters provided does not match the expected number of variable parameters. \| wa tier - cloud-api/onprem)                                                                                                                             |
|   1430 - templateTextTooLong                |   UTA -- Translated text too long \| wa tier - cloud-api/onprem)                                                                                                                                                                                             |
|   1431 - formatCharacterPolicyViolated      |   UTA -- Format character policy violated \| wa tier - cloud-api/onprem)                                                                                                                                                                                     |
|   1432 - parameterTypeError                 |   UTA -- Parameter format does not match format in the created Template. \| wa tier - cloud-api/onprem)                                                                                                                                                      |
|   1432 - parameterTypeError                 |   UTA -- Parameter format does not match format in the created Template. \| wa tier - cloud-api/onprem)                                                                                                                                                      |
|   1433 - incompleteDelete                   |   UTA -- A previous delete operation failed. A delete retry is needed before registering again. \| wa tier - cloud-api/onprem)                                                                                                                               |
|   1434 - decryptionError                    |   UTA -- Decrypting the backup blob failed for an unknown reason. \| wa tier - cloud-api/onprem)                                                                                                                                                             |
|   1435 - backupBlobDecryptionError          |   UTA -- Backup blob cannot be decrypted due to bad format or bad password.'}, \| wa tier - cloud-api/onprem)                                                                                                                                                |
|   1436 - recoveryTokenDecryptionError       |   UTA -- Recovery token cannot be decrypted due to bad format or bad password.'}, \| wa tier - cloud-api/onprem)                                                                                                                                             |
|   1437 - serverTemporaryUnavailable         |   UTA -- Registration server is temporarily unavailable.'}, \| wa tier - cloud-api/onprem)                                                                                                                                                                   |
|   1438 - securityPinMismatch                |   UTA -- Wrong PIN used. \| wa tier - cloud-api/onprem)                                                                                                                                                                                                      |
|   1439 - recoveryTokenIncorrect             |   UTA -- The recovery token used for migration is stale. \| wa tier - cloud-api/onprem)                                                                                                                                                                      |
|   1440 - accountBlocked                     |   UTA -- Account is blocked by the registration server. \| wa tier - cloud-api/onprem)                                                                                                                                                                       |
|   1441 - tooManyPinGuesses                  |   UTA -- Too many PIN guesses for this account. \| wa tier - cloud-api/onprem)                                                                                                                                                                               |
|   1442 - pinGuessedTooFast                  |   UTA -- Registration request was made too fast. \| wa tier - cloud-api/onprem)                                                                                                                                                                              |
|   1443 - templateError                      |   UTA -- Template name does not exist in the translation \| wa tier - cloud-api/onprem)                                                                                                                                                                      |
|   1444 - systemOverloaded                   |   UTA -- system overloaded wa cloud api`} \| wa tier - cloud-api/onprem)                                                                                                                                                                                     |
|   1500 - messageExpired                     |   UTA -- Message failed to send due to some issue with the WhatsApp Business Account, possibly down or disconnected for more than 1 day \| wa tier - cloud-api/onprem)                                                                                       |
|   1501 - ttlLimitReached                    |   UTA -- Message failed to send during its Time To Live (TTL) duration.Resend the message \| wa tier - cloud-api/onprem)                                                                                                                                     |
|   14271 - invalidParameter                  |   UTA -- One or more parameters are invalid \| wa tier - cloud-api/onprem)                                                                                                                                                                                   |
|   14272 - invalidUser                       |   UTA -- The recipient WhatsApp number is invalid / The user doesn't have a WhatsApp Account \| wa tier - cloud-api/onprem)                                                                                                                                   |
|   14272 - invalidUser                       |   UTA -- The recipient WhatsApp number is invalid / The user doesn't have a WhatsApp Account \| wa tier - cloud-api/onprem)                                                                                                                                   |



---

## 4. Reports

You can view data regarding the campaigns you execute through the **Insights** module.

1.  Within **Insights**, select the **Data Explorer** tab on the left.
2.  In the **Data Explorer** section, select **Notification Reports** under **Default Datasets.**
3.  To begin experimenting with **Campaign Reports**, you can select **Filters**, and use filters such as **BOTID**, **CAMPAIGNID**, and **TEMPLATEID** individually, or in different combinations to pull data.
4.  Once you have generated a data set that you find useful, click on **Summarise**. With this, you can group and summarise this data set in different ways.




## 4. Examples
### 4.1 Normal Text  Notification
#### CURL request

```json
curl --location --request POST 'https://app.yellowmessenger.com/api/engagements/notifications/v2/push?bot=BOT_ID_HERE' \
--header 'x-auth-token: TOKEN' \
--header 'Content-Type: application/json' \
--header 'Cookie: ym_xid=TOKEN' \
--data-raw '{
   "userDetails": {
       "number": "USER_PHONE_NUMBER"
   },
   "notification": {
       "type": "whatsapp",
       "sender": "SENDER_PHONE_NUMBER",
       "templateId": "TEMPLATE_ID",
       "params": {
           "1": "var1",
           "2": "www.yellow.ai"
       }
   }
}'
```

#### Sample
<img src="https://i.imgur.com/YwkQ7Xr.png" alt="drawing" width="70%"/>


### 4.2 Image Notification
#### CURL request
```json
curl --location --request POST 'https://app.yellowmessenger.com/api/engagements/notifications/v2/push?bot=BOT_ID_HERE' \
--header 'x-auth-token: TOKEN' \
--header 'Content-Type: application/json' \
--header 'Cookie: ym_xid=TOKEN' \
--data-raw '{
   "userDetails": {
       "number": "USER_PHONE_NUMBER"
   },
   "notification": {
       "type": "whatsapp",
       "sender": "SENDER_PHONE_NUMBER",
       "templateId": "TEMPLATE_ID",
       "params": {
       "media": {
           "mediaLink": "MEDIA_URL"
           },
           "1": "var1",
           "2": "www.yellow.ai",
           "3": "test"
}
 
   }
}'
```

### 4.3 File Notification
#### CURL request
```json
curl --location --request POST 'https://app.yellowmessenger.com/api/engagements/notifications/v2/push?bot=BOT_ID_HERE' \
--header 'x-auth-token: TOKEN' \
--header 'Content-Type: application/json' \
--header 'Cookie: ym_xid=TOKEN' \
--data-raw '{
   "userDetails": {
       "number": "USER_PHONE_NUMBERs"
   },
   "notification": {
       "type": "whatsapp",
       "sender": "SENDER_PHONE_NUMBER",
       "templateId": "TEMPLATE_ID",
       "params": {
       "media": {
           "mediaLink": "MEDIA_URL"
           },
           "1": "var1",
           "2": "www.yellow.ai",
           "3": "test"
}
 
   }
}'
```

#### Sample
![](https://i.imgur.com/YLbGCo7.png)

