---
title: API error alerts and logs
sidebar_label : Handle API errors
---

API error logs and alerts are essential components that provide real-time detection and proactive troubleshooting of errors. They help in enhancing security by identifying potential threats promptly and also contribute to optimizing API performance. By addressing issues promptly, they improve the user experience. 

## Set up email alerts for API failures

To ensure timely alerts of any API failures or issues, Yellow.ai provides an option to send email notifications to designated recipients. These alerts are not limited to specific APIs but includes all the APIs listed in the API section. 

To set up an alert:

1. Go to **Automation** > **API**.

   ![](https://i.imgur.com/P36r4kT.png)


2. Click **Setup alerts** and enable **Setup alerts**.

   ![](https://i.imgur.com/faimdrv.png)

3. In **Email**, type the email address to receive the alert and click **Include**. To omit sending alerts to a specific email address, enter the email and click **Exclude**.

   <img src="https://i.imgur.com/e9he8hM.png" alt="drawing" width="70%"/>

4. Click **Save**.

The following is a sample screenshot of the error alert email.

<img src="https://i.imgur.com/71ey7Ch.png" alt="drawing" width="70%"/>

## Check API error logs

API error logs capture information about issues in an application's API. They help swiftly identify and troubleshoot errors during API calls, ensuring the reliability and security of the software.

To check API error logs:

1. Go to **Automation** > **API** > **API failure logs**.

   ![](https://i.imgur.com/h6oI3pN.png)

2. * **API**: Choose the API.
   * **Status code**: Type the particular error status code and click **Search**.
   * Click on each timestamp to view the error log.
   
    ![](https://i.imgur.com/UvtQctT.png)
   
   The log consists of API details such as BotID, API name, etc. It is used to understand and rectify the error.

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

### Status codes

| HTTP Status Code | Error Description |
|-------------------|---------------------|
| 401 (**Unauthorized**) | Indicates issues like an expired, missing, or invalid token causing authentication failure. |
| 403 (**Forbidden**) | Denotes authorization failure; also used when the consumer is unaware of the resource's existence (similar to 404). |
| 400 (**Bad Request**) | Occurs when the request is unclear or flawed, for instance, due to missing required fields or incomplete header values. |
| 404 (**Not Found**) | Signifies that the requested resource is not available. |
| 500 (**Internal Server Error**) | Represents a server error, advising users to try the request again later. |








