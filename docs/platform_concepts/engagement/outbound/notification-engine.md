---
sidebar_label : Message Notifications
title : Message Notifications
---

## 1. Introduction

Yellow.ai's Notification API lets you send business-initiated messages from the various supported channels directly from your CRM or internal Systems.

The API supports different channels (SMS, email, and WhatsApp) and makes it more easy for developers to integrate it anywhere in less time.

### 1.1 Features of the Notification API

*   Single endpoint for multiple channels
*   Enable range of API services with one-click
*   Real-time reports on YM Platform with the basic features of the BI tool to visualise your data
*   Callback Webhook Configuration support to receive delivery updates directly on your system

### 1.2 IPs Whitelisting

Additionally, our outbound IPs given below must be whitelisted for the reports callback to flow into your system.

*   13.71.52.164
*   13.71.49.46
    

## 2. Notification API

### 2.1 Enable API Access

In order to use the Notification API you have to enable it on the platform as explained here

1.  Go to the **Engage** module,
2.  Navigate to **Preferences** and
3.  Click **Enable API Access**.
    

> **Note**: If Engage is not enabled, you will get a `400` error (API access is not enabled).

### 2.2 Request Information

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
| `config` fields: (`customPayload`, `postbackUrl`) | Object  (Obj, String) | Optional | Configuration details for the API `customPayload` - Custom info. Will be sent back with delivery updates.  `postbackUrl` - To receive delivery updates on clients webhook. Configurable from platform for now. Please go to **Engage** > **Preferences** for setting up the `postbackUrl.` |

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

### 2.3 Sample Webhook Payload

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

### 2.4 Response status codes

On successful queueing of the notification, you will receive a 202 status code with the relevant `msgId`. This confirms that the message details has been received by us and will be queued for sending on the relevant channel. The downstream service will pick the queue and will start sending it and updating the delivery status on the webhook and on the reports under Data Explorer on the platform.

| **HTTP Status Code** | **Description** |
| --- | --- |
| 202 | Message queued successfully. You will receive a msgId for acknowledgement and tracking. |
| 400 | Bad request. Request structure is not formed correctly. Please check the `message` field for more information. |
| 401 | Unauthorised. Please check your auth token. Only Super Admin Auth tokens are accepted for using API. |
| 422 | Invalid inputs. The request structure is evaluated to be correct but the parameter values are not within expected range. Channel not configured. |
| 429 | Rate limited. Occurs when there are too many requests sent to the API within a short time. Once a rate limit error is captured the rate of the API call should be decreased to honour the limits.  *Default Rate Limit is 2000 requests/min per Bot.* |
| 500 | Internal server error. TraceId will be sent back for tracking. |



## 3. Reports

You can view data regarding the campaigns you execute through the **Insights** module.

1.  Within **Insights**, select the **Data Explorer** tab on the left.
2.  In the **Data Explorer** section, select **Notification Reports** under **Default Datasets.**
3.  To begin experimenting with **Campaign Reports**, you can select **Filters**, and use filters such as **BOTID**, **CAMPAIGNID**, and **TEMPLATEID** individually, or in different combinations to pull data.
4.  Once you have generated a data set that you find useful, click on **Summarise**. With this, you can group and summarise this data set in different ways.


For complete details on how to use Notification API for each channel, see the following.

1. [WhatsApp](https://documenter.getpostman.com/view/9982063/UzBvGPGB#5961e189-e9cb-40ad-8ba6-7bada77acc06)
2. [SMS](https://documenter.getpostman.com/view/9982063/UzBvGPGB#c5013846-87a9-4062-9c1a-055eb7806f38)
3. [Email](https://documenter.getpostman.com/view/9982063/UzBvGPGB#5fea5e39-8168-4c9e-977c-fc667dfba0e2)
4. [Bulk messaging API](https://documenter.getpostman.com/view/9982063/UzBvGPGB#6b08f300-6405-457e-aaf7-7df822e258c8)

> **Note**: Whem you raise any support ticket, include `msgId` or `traceId` in the request.

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

