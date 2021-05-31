---
title: Getting started with Omnichannel Notifications Engine
sidebar_label: Send Message
---


API to send notifications to the user

- **URL** [https://app.yellowmessenger.com/api/engagements/notifications/v1/push](https://app.yellowmessenger.com/api/engagements/notifications/v1/push)

- **Method:** `POST`

- **URL Params** None

- **Authentication(Header)**

   `x-auth-token" : "token`

- **Data Params**

   ```[
    "userDetails" : {
        "number" : "919876543210", //Number is a mandatory parameter in case of sms, whatsapp, voice push, 
        "email" : " ['abc@xyz.com']
    },
   "channels":[
       {
        "type" : "sms",
        "templateId" : "12345678",
        "sender" : "9876543210"
   }],
   "metadata":
        {
        "scheduleAt": "1970-01-01T00:00:00.000Z", // Date time at which the notification should be sent.
        "customPayload" : {} // Payload that will flow back to the postback webhook and reports.
   }
   ]```

- **Success Response:**

**Code:** 202 `Message queued successfully. You will receive a msgId for acknowledgement and tracking.`

**Code:** 400 `Bad request. Request structure is not formed correctly. Please check the ‘message’ field for more information.`

**Code:** 401 `Unauthorised. Please check your auth token.`

**Code:** 422 `Invalid inputs. The request structure is evaluated to be correct but the parameter values are not within expected range.`

**Code:** 429 `Message queued successfully. You will receive a msgId for acknowledgement and tracking.`

**Code:** 500 `Message queued successfully. You will receive a msgId for acknowledgement and tracking.`


- **Notes:**

   <*This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here.*>

