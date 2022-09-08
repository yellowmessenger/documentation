---
title: Set Error Alerts and View Error Log
sidebar_label : API Errors & Alerts 
---

Once everything is setup and data is flowing through APIs, there could be chances of getting errors for any reason. 
* You can keep all the PoCs associated with the bot configuration informed if there is any error in sending or retrieving data from any of the APIs you added in the API section.
* See error log to identify the reason for failure and troubleshoot the API.
There are 4 options available on the platform to test and Configure and configure API:

1.  **Tools and settings** - This is a global testing and setting tab. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#2-explore-tools) to learn more.
2.  **Configure environment** - Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/enviroment-variables) to learn how to configure an environment. This can be configured when the bot is in development stage.
3.  **Setup alerts** - Configure the mail list of users to whom the alerts must be sent/not sent.
4.  **API failure logs** - View logs of APIs that have failed with details.

![](https://i.imgur.com/p2kJpgw.png)



**Setup alerts** and **API failure logs** are discussed in detail in this document.

  
## 1. Send alerts in case of API failures
You can email alerts to be sent to specific recipients (email) when there is some issue with an API and call got failed.  Recipients will get error alerts for all the APIs added in the API section and is not specific to one API.   

To add recipients to whom you want to notify about the API failures - 
1. In **Studio** > **API**.
2. Click on the **Setup alerts** icon and enable **Setup alerts**.
3. In **Email**, enter each email address of the recipient you want to notify and click **Include**.
4. Click **Save**.

![](https://i.imgur.com/Cx2lIw8.png)

:::note
* To remove a recipient from the included list, click **Exclude**.
* To move a recipient from the Include to Exclude list  or vice-versa, click on that respective email address. 
:::

The following is a sample screenshot of the error alert email.

![](https://i.imgur.com/rAYsGkC.png)

  
  

## 2. View API failure log

To see the failure log of the API, click on the API failure log icon.
![](https://i.imgur.com/OwHi4yQ.png)

You will see the summary of all errors. Click on the arrow to expand that particular error details. 

![](https://i.imgur.com/Q1zzyH4.jpg)

To see errors of a specific API, use the API drop-down box and choose your preferred API. 

:::note
If there are many errors, you can further filter the summary by error code using the **Search** box. 
:::

There are response codes tagged to each error to help you identify why the error has occurred. The following section provides the list of status codes and its description to help help you troubleshoot an error.

### Status Codes

The following table contains the list of common HTTP Status codes - 

| **Code** | **Error** |
|--------- | --------- |
| 401 (**Unauthorized**) | Error may be because of an expired, missing, or invalid token. |
| 403 (**Forbidden**) | When the authorization fails. 404 is also used when the consumer is unaware that the resource exists. |
| 400 (**Bad Request**) | Error when the request is bad/unclear. Example: if required fields are missing or header values are not filled. |
| 404 (**Not Found**) | Error when the requested resource is not found. |
| 500 (**Internal Server Error**) | Server error. The users can try again later. |

The timestamp(log) consists API details such as BotID, API name, etc. It is used to understand and rectify the error.

``` 
{
"botId": "x1624003758366",
"apiName": "sony"
"responseTime": 10133,
"args": "{\"env\":{\"test\":\"198\"}}",
"@version": "1",
"@timestamp": "2022-07-25T04:12:08.385Z",
"response": "ETIMEDOUT",
"statusCode": "err",
"id": "hdSOM4IB6hgCAvQOH-eq",
"key": "hdSOM4IB6hgCAvQOH-eq"
}
```