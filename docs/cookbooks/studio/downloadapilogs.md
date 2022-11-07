---
title: Download API logs data of the last 15 days
sidebar_label : Download API logs data
---

When there is an API issue, we don’t know if our API calls are failing or if the client API is failing. To resolve this issue we are now storing all the API requests and responses which will help establish the issues.

**How to use this log data?**

- There are multiple issues arising out of API failures. In these cases, we are not aware if calls from our platform are failing or if there are issues with customers' API only. You can download the data in this case and see some past requests and responses to establish what is the actual root cause.
- If the date and time of an incident of failure are known, then you can select the respective date and download the data. In the downloaded data search for the respective time and check the requests and responses.
- For better readability you can use tools like **VS code**, **jupyter notebook** etc.


## 1. API Logs data

API logs data stores all the API data like requests, responses, etc. The data would be available for requests sent from the [API Node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api) only.
API download data would contain this information:
* API Name
* API Requests
* API Response
* Requests Timestamp 
* Status Code (Failed/Success)
* Userid


## 2. Download API Logs

Follow the given steps to download the API logs:

1. Open **Studio** > **API** tab.
2. Select the environment.
    - Logs will be downloaded only for the selected environment. For example, if you have selected the dev environment it would download requests sent from the dev env only.
3. Select the API for which you want to download logs data.

![](https://i.imgur.com/aMdmxq9.jpg)

4. Select the date for which you want to download the data and click **Download**. Downloaded data will be Plain Text. You can open it in any tool for better readability.

![](https://i.imgur.com/mAy70vq.png)

Timeframe for which logs data is available:  
- Data is available from 21st October.
- Data is available for the last 15 days.
- You can select only one day at a time to download.
- Data is not real-time, there is a 1 hr delay (if a request has been made at 6 PM, this data would be available to be downloaded after 7 PM).



