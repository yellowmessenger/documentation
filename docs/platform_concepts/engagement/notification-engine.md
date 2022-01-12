---
sidebar_label : YM Notification Engine
title : YM Notification Engine (v1.0.2)
---

## Description

Notification Engine API offers capability to push dynamic content notification across to users on various channels.


Key capabilities include:
1. On demand notification delivery.
2. Support for scheduling notifications.
3. Support for postbacks on delivery updates.
4. Reporting is available.


## API Details

**Endpoint:**

```
https://app.yellowmessenger.com/api/engagements/notifications/v2/push?bot=botID
```

**Method : **POST

### Authentication

All requests to notification engine should be accompanied with this header.
```
{
   "x-auth-token" : "token"
}
```

\* Token will be shared separately by the yellow.ai Team.

### Request body

### Parameters

| Parameter Name | Type   | Required | Description                                                                                       |
|----------------|--------|----------|---------------------------------------------------------------------------------------------------|
| userDetails    | Object | Yes      | Details of the user to be notified, Variables                                                     |
| notification   | Object | Yes      | Template and Channel details.                                                                     |
| config         | Object | Yes      | Metadata about the notification. Parameters like postBackUrl, customPayload etc can be specified. |


### userDetails

User details may contain all relevant information about the user. It needs to have atleast one contactable information and any number of additional parameters. For example, in case of voice notification, it needs to have a ‘number’ field mandatory and any number of extra parameters. It also contains the template parameters that needs to be rendered in the content.


```
   "userDetails": {
       "number": "919876543210", //mandatory for sms, wa, voice     //country code to be added without space if not added default 91
       "email": "abc@xyz.com", //mandatory for email
       "fbId": "987543212", //mandatory for fbm
   }
```


### notification

Notification contains the message template that needs to be sent as a notification. templateId is mandatory. templateId can be fetched Either it can contain the plain message directly or contain parameters to be rendered for a template on a particular channel. 


```json
{
    "notification": {
        "templateId": "emi-reminder-template01", // name of the template in YM portal. if template is created in waba, name of the template given there. mandatory for wa, sms(wherever applicable)
        "params": { //renderable parameters defined in the template.
            "EMI Value": "15000",
            "First Name": "Wasim",
            "media": {
                "mediaLink": "mediaPublicUrl",
                "title": "titleOfDoc"
            } //applicable only for whatsapp 
        },
        "freeTextContent": "Your content goes here", //if template is not renderable, notification engine will try to send this, subject to channel restrictions
        "profileId": "kaleyra-sms", //set during channel-configuration. optional if only one profile
        "type": "whatsapp", // channel type - whatsapp,sms,email,voice,fbmessenger
        "sender": "919876543210",
        "language": "en", // applicable for whatsapp
        "namespace": "1bhjasd67123jjka", // applicable for whatsapp
    }
}
```


### config

Channels is a list of channels the user needs to be notified on. Each element is in turn an object containing configuration about the channel.

```json
"config": {
       "checkOptIn": "true", //  true/false. default value is false.
       "scheduleAt": "1970-01-01T00:00:00.000Z", // Date time at which the notification should be sent. Default value is immediate. Max limit - 24 hours
       "customPayload": { // Payload that will flow back to the postback webhook and reports.
           "BUID": "asdasd", //Can add upto 3 custom reference parameters
           "userID": "asdasd",
           "departmentID": "67576q"
       },
       "checkOfficeHours":"true" //default value is true. working hours can be configured in portal
   }
```

Currently metadata supports

- **scheduleAt :** ISO formatted date time string at which the notification must be sent.
- **customPayload :** JSON object which will flow back to the postback URL if configured and also reflect in the reports. Can be used to associate identifying information for a particular notification.
- **postBackURL :** URL to send delivery post back.
	

### Response status codes:

On successful queueing of the notification, you will receive a 202 status code with the msgId.

| HTTP Status code | Description                                                                                                              |
|------------------|--------------------------------------------------------------------------------------------------------------------------|
| 202              | Message queued successfully. You will receive a msgId for acknowledgement and tracking.                                  |
| 400              | Bad request. Request structure is not formed correctly. Please check the ‘message’ field for more information.           |
| 401              | Unauthorised. Please check your auth token.                                                                              |
| 422              | Invalid inputs. The request structure is evaluated to be correct but the parameter values are not within expected range. |
| 429              | Rate limited. Occurs when there are too many requests. Please retry later.                                               |
| 500              | Internal server error. TraceId will be sent back for tracking.                                                           |

### Postback webhook
As soon as we receive callback from the downstream services, we will post that data to the configured webhook if available.

```
{
   "msgId" : "AsdihS21_",
   "userId" : "9876543210",        //This will be the contactable user info we notified on.
   "customPayload" : {},
   "event" : {
       "status" : "delivered",
       //Other channel specific parameters will be present
   }
}
```

Webhooks will be called with the above request body.

- **customPayload: **This is the payload passed when queueing the notification.
- **event: ** event will always have the status field and additional fields depending on the channel and the status.

    Status can be one of the following.
    - queued/triggered
    - sent
    - delivered
    - acknowledged/read
    - failed

### Support
While raising any support issues, please add the msgId or the traceId in the support request.

## Examples
### Normal Text  Notification
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


### Image Notification
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

### File Notification
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

**Notes:**

* These are our outbound IPs. These need to be whitelisted for the reports callback to flow into your system.
    * 13.71.52.164
    * 13.71.49.46
* The messages will be acknowledged first and delivered at the scheduled time. Can be tracked by the msgId we send back.