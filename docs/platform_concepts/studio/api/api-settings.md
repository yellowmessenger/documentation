---
title: API Settings - Configuration, Alerts and API logs
sidebar_label : API settings 
---

There are 4 options available on the platform to test  and Configure and configure API: 

1. **Tools and settings** - This is a global testing and  setting tab. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#2-explore-tools) to learn more. 
2. **Configure enviroment** - Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/enviroment-variables) to learn how to configure an environment. This can be configured when the bot is in development stage. 
3. **Setup alerts** - Configure the mail list of users to whom the alerts must be sent/not sent. 
4. **API failure logs** - View logs of APIs that have failed with details. 

![](https://i.imgur.com/p2kJpgw.png)


**Setup alerts** and **API failure logs** are discussed in detail in this document. 

## 1. Setup Alerts

This tab can be used to configure the mailing information to set up alerts for a specific recipient about API failure.

* Add an email address and click include to include it in the alert list or exclude to remove it.

![](https://i.imgur.com/qi7qFLr.jpg)

* Alerts will be sent to all the mail IDs present in the **Include list**. Mail IDs in the **Exclude list** will not recieve any alerts. 

* To move any of the mail IDs from Include to Exclude list (vice-versa), click on that respective mail ID. **Save** the changes. 

![](https://i.imgur.com/LvSOr7k.png)

* When an API fails, attached mail will be sent. 

![](https://i.imgur.com/rAYsGkC.png)


## 2. API Failure Log

In this section, you can view details of the APIs that failed along with the **Status Codes** and timestamp (details).

![](https://i.imgur.com/Q1zzyH4.jpg)

### Status Codes

Browse for HTTP Status codes to look up on how to resolve the failure. Few of the common status codes are: 


| **Code**                        | **Error**                                                                                                       |
|:------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 401	(**Unauthorized**)          | Error may be because of an expired, missing, or invalid token.                                                  |
| 403	(**Forbidden**)             | When the authorization fails.  404 is also used when the consumer is unaware that the resource exists.          |
| 400	(**Bad Request**)           | Error when the request is bad/unclear. Example: if required fields are missing or header values are not filled. |
| 404	(**Not Found**)             | Error when the requested resource is not found.                                                                 |
| 500	(**Internal Server Error**) | Server error. The users can try again later.                                                                                                                                                       |







The timestamp(log) consists API details such as BotID, API name, etc. It is used to understand and rectify the error. 

```   { 
    "botId": "x1624003758366",
    "apiName": "sony",
    "responseTime": 10133,
    "args": "{\"env\":{\"test\":\"198\"}}",
    "@version": "1",
    "@timestamp": "2022-07-25T04:12:08.385Z",
    "response": "ETIMEDOUT",
    "statusCode": "err",
    "id": "hdSOM4IB6hgCAvQOH-eq",
    "key": "hdSOM4IB6hgCAvQOH-eq"
    
```

