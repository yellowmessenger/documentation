---
title: Download API logs
sidebar_label : Download API logs
---

Downloading API logs is crucial for maintaining, optimizing, and troubleshooting applications. Yellow.ai lets you download API logs of the past 15 days from the current date.

You can download the API logs for the following use cases:

1. Determine whether issues arise from Yellow.ai or customers' APIs by downloading data to review past requests and responses.
2.  Retrieve data for a specific date and time of a failure incident to pinpoint relevant requests and responses.

:::info
Use developer tools like VS Code or Jupyter Notebook to enhance the readability of downloaded data for efficient issue identification and resolution.
:::

An API log contains the following information:

* API name
* API requests
* API response
* Requests timestamp
* Status code (Failed/Success)
* Userid


## Download API logs

To download the logs of an API:

1. Go to **Studio** > **API** > hover over the specific API and click **Download**.

   ![](https://i.imgur.com/4TVcAQP.png)

:::info
Select the environment while downloading API logs as the logs will be downloaded only for the selected environment. For example, if you have selected the Dev environment it would download requests sent from the dev env only.
:::


2. Choose the **Start time** and **End time** and click **Download**. The downloaded data will be in Plain Text format.

   <img src="https://i.imgur.com/CWMIepq.png" alt="drawing" width="80%"/>

   The logs, available from October 21, cover the last 15 days, and you can choose to download data for a specific day at a time. Please note there is a 1-hour delay, meaning a request made at 6 PM becomes available for download after 7 PM.



