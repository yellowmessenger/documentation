---
title: Getting started with Omnichannel Notifications Engine
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

Time to get hands dirty. Lets now look into how to use the API.