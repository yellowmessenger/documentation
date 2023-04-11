---
title: Monitoring bot performance and setting alerts for failures and issues 
sidebar_label : Health & alerts 
---

:::note
As of now, only the Alerts tab is available for use, with two pre-built alerts.     
Health (to monitor performance of bot, API reports, etc.) and Alert  (to create custom rules to alert email recipients) features are still under development. 
:::

As an internal platform user, you will be able to use the Health module for the following purposes:
1. Monitor the overall health and performance of your bot.
2. Create custom alerts to receive email notifications for any issues/failures that occur.

----

## 1. Health 

Health tab displays details of **bot performance** (during its uptime and downtime) and **API failures** along with its logs.  

### 1.1 Monitor bot health 

The Health tab's Health widget displays the following information:

* The bot is pinged every minute to monitor its health. If a response is received, the bot is considered to be up. If the bot does not respond for more than 30 minutes, it is considered to be down.
* The **average bot uptime** is calculated for a selected set of three months, such as July to September of 2022.
* The **uptime for each month** is displayed in the top right corner of the respective calendars.
* The **downtime** is represented by a **yellow dot** on the calendar. Hover over the date with a yellow dot to see the instances when the bot was down.
    ![](https://i.imgur.com/fjP5nUF.png)

----

### 1.2 Monitor API failures

The Health tab's API failures widget displays the following information:
* The widget lists all available APIs along with their **names**, **success rate**, **failure rate**, **API hits**, **average response time**, and detailed logs for the selected timeframe (for the maximum of the last 3 months).
* You can sort each column based on its values by clicking on the sort option next to the column name.
* To see the details of a particular API, you can search for it using its name.
* If you want to view the logs and other information related to an API, click on the **View** button next to its name.
    ![](https://i.imgur.com/TsThWq6.png)
* Click the menu option on the top right:
    * Click **Export data** to download the available data of API failure (monitored for all the APIs) to your local system. 
    * Click **Create alert** to create a new alert (discussed in the next section).
    * Click **Modify schedule reports** to receive a scheduled email of the API report monitored for all the APIs. 
    ![](https://i.imgur.com/TBsiUgb.png)


-----

#### Detailed analysis of your API failure

* Clicking on the **View** button next to an API name will take you to the **Track my order** page.
* On this page, you can filter and view data related to a [specific error code](https://docs.yellow.ai/docs/platform_concepts/studio/api/api-settings#21-status-codes) and **timeframe** by using the available options.
* You can also see the top three reasons (error codes) for API failures and % of their frequency of occurrence.
* You can also see detailed **failure logs** including the **type of error**, the **date and time** of occurrence, and the complete **log** (these details are available only for the maximum of the last 15 days. 
* Click **Learn common fixes** to see the steps that can be used to debug the common errors. 
    ![](https://i.imgur.com/8ETWKVp.png)



-----

## 2. Alerts 

On the alert tabs, you can proactively monitor when there is any failure or issue. You can create alerts to receive alerts if any of the set rules for the alerts are met so that you can fix them on time. 
For example: you can create an alert to get notified when the bot is down for more than 30 minutes.


### 2.1 Enable default alerts

Follow these steps to enable pre-configured alerts:

1. Go to the **Alerts** section of **Insights** > **Health**.
2. Activate the toggle button for the required alert. There are two pre-configured alerts available:
    - **API failure**: When enabled, an email notification will be sent if any APIs set up in Studio fail more than 5% in the last 7 days.
    - **Bot downtime**. When enabled, an email notification will be sent if the bot is down for more than 30 minutes.
    ![](https://i.imgur.com/ivKNwXt.png)
3. Add multiple recipients by typing their email addresses, hitting enter, and clicking **Add**. 
    ![](https://i.imgur.com/psNzedR.png)
    - If you need to modify the recipients, click **Edit** in the menu next to the Alert name and add or remove email IDs.
    ![](https://i.imgur.com/yOCs4D1.png)
4. When there is a failure or issue, an email alert will be sent to the recipients you entered. The time of the alert will be recorded in the **Last fired** column next to the alert name.

-----

### 2.2 Create custom alerts

Follow these steps to create new alerts:

1. Go to **Insights** and select **Health**.  Open the **Alerts** tab.
2. Click the **+Create alert** button.
3. Fill in the details:
    - **Name**: Provide a **Name** for the alert.
    - **Description**: Optionally, add a **Description** for the alert.
    - **Event type**: Select an appropriate **Event type** from the drop-down menu. 
        - **Select APIs to track**: In case you choose **API failures**, all available APIs will be listed in the drop-down menu, and you can choose the ones you want to monitor.
    - **When**: Specify the alert trigger conditions under When:
        - Select **Immediately** to receive an email as soon as an issue or failure is detected.
        - Choose **Set threshold** to create a custom alert. For instance, receive an alert when APIs fail more than **X%** within the last **Y days**.
    - **Recipients**: Enter the email addresses of the recipients under Recipients.
    ![](https://i.imgur.com/BGHmBi5.png)
4. Click on **Create alert**. The alert will be added to the Alerts page. You can enable or disable it by toggling the status switch.


