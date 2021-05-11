---
title: Omnichannel Notifications Engine
sidebar_label: Omnichannel Notifications API
---



# Getting Started

Yellow.ai’s Notification Engine API lets you send dynamic notifications to your customers through various conversational channels. The API natively supports Whatsapp, SMS, Email notifications to be sent through simple to use APIs. Right now this is enabled as REST APIs.

The notifications API supports all the media-types that respective channels allows you to send. You can refer to the same over here(link to channels feasibility matrix)

**Features**

1. On demand notification delivery.
2. Support for 10+ channels.
3. Support for scheduling notifications.
4. Support for postbacks on delivery updates.
5. Reporting is available.

**Prerequisites**

- **Access to YM Project -** To use these APIs you would need authentication token, which can be onbainted from the YM profile. Please refer this to get the same.
- **Should have configured a channel in YM Project -** To use these APIs, you should have configured the channel that you want to send notifications on

**Structure of the API**

The API is very simple. It has 5 little segments:

   1. User(s) - who you want to target
   2. Content - what you want to send them
   3. Channels - where you want to reach out to them
   4. Schedule - when to send it
   5. Metadata - if there is anything else you want us to know

**userDetails:**

   Type:  `Object`

   Mandatory:  `Yes`

   What: `Details of the user to be notified.`

User details may contain all relevant information about the user. It needs to have atleast one contactable information and any number of additional parameters. For example, in case of voice notification, it needs to have a ‘number’ field mandatory and any number of extra parameters.

**content:**

   Type:  `Object`

   Mandatory:  `No`

   What: `Content of the notification. Contains message and additional parameters to be rendered`

Content contains the message that needs to be sent as a notification. Either it can contain the plain message directly or contain parameters to be rendered for a template on a particular channel.

**channels:**

   Type:  `List`

   Mandatory:  `Yes`

   What: `List of Channels to send the notification`

Content contains the message that needs to be sent as a notification. Either it can contain the plain message directly or contain parameters to be rendered for a template on a particular channel.

Sender parameter should be the caller id in case of voice notification and sender email id in case of email notification and so on. This field will be validated before sending the notification.

Supported channels are

- sms
- whatsapp
- email
- voice
- facebook (Facebook messenger)
- Currently user will be notified on only the first channel configured.

**metadata**

   Type:  `Object`

   Mandatory:  `Yes`

   What: `Content of the notification. Contains message and additional parameters to be rendered`

Metadata contains meta information fields about the notification itself

Currently metadata supports the following:

      `scheduleAt` : ISO formatted date time string at which the notification must be sent.

      `customPayload` : JSON object which will flow back to the postback url if configured and also reflect in the reports. Can be used to associate identifying information for a particular notification.

