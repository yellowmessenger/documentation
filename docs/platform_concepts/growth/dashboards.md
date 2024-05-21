---
title: Insights Dashboard
sidebar_label: Dashboards
---

Dashboards are useful for organizing and analyzing data based on common themes. For example, if your company has three different types of products and you want to check the analytics for each product separately but in the same place, you can create dashboards for each product and add relevant metrics to each dashboard. This allows you to view all the connected values under one view.

You can have multiple dashboards, and each dashboard can contain multiple widgets.


:::note
Actions in Dashboard must be configured separately for **Live and Production** environment.
:::



## Default dashboard

In Insights > Dashboard, you can see the default dashboards created by yellow.ai for common business scenarios. Yellow.ai curates these dashboards, and they cannot be modified.

To view the Dashboards page, on the left navigation bar, click  **Insights** > **Dashboards**. 


#### Filter data by date range

To filter data by duration, navigate to **Insights** > **Dashboard** and use the Date filter to select your preferred date range. This date range selection will apply to all the reports of the dashboard.


   ![](https://i.imgur.com/NztrxaE.png)


:::note
You can duplicate a dashboard by clicking the **Duplicate** button, allowing you to save the default dashboard as a custom dashboard with new changes and name.
:::



### User traffic 

This provides user traffic metrics such as Unique Users, New Users, User Traffic Channel, Platform/Medium, Unique Users By Country, User by Device, and Messages to understand user traffic trends.

   <img src="https://i.imgur.com/MK4YWr3.png"/>
   


> Learn more about [User Traffic dashboard](https://docs.yellow.ai/docs/platform_concepts/growth/metrics#-user-traffic).

**KPI descriptions for User Traffic report**

| KPI                             | Description                                                                                              |
|---------------------------------|----------------------------------------------------------------------------------------------------------|
| **Unique Users**                | Tracks the number of distinct users who visit or interact with the system. It helps in understanding the reach and audience size. |
| **New Users**                   | Measures the number of users who visit or interact with the system for the first time. It provides insights into user acquisition and growth. |
| **Average Session Duration per Day** | Displays the average length of user sessions on a daily basis. It helps in analyzing user engagement and interaction patterns over time. |
| **Average Session Duration**    | Shows the overall average length of user sessions. It provides a general benchmark for user engagement and interaction time. |
| **Sessions per User**           | Calculates the average number of sessions per user. It helps in understanding user retention and repeat visits. |
| **Messages by Day**             | Tracks the number of messages sent or received each day. It provides insights into daily user activity and engagement levels. |
| **User Traffic by Channel**     | Categorizes user traffic based on different channels (e.g., social media, email, direct). It helps in identifying the most effective channels for user acquisition. |
| **User Traffic by Platform**    | Categorizes user traffic based on different platforms (e.g., web, mobile). It helps in understanding user preferences and optimizing platform-specific strategies. |
| **Unique Users by Device**      | Measures the number of unique users categorized by device type (e.g., desktop, mobile, tablet). It helps in understanding device usage trends and optimizing for different devices. |
| **Unique Users by Country**     | Tracks the number of unique users categorized by their country. It provides insights into geographic distribution and helps in targeting specific regions. |

   

### Inbox agent performance

This lets you evaluate the performance of your support agents to ensure high-quality customer service. Track metrics such as average response time, number of resolved tickets, customer satisfaction ratings, and agent activity levels. Identify top-performing agents and areas where additional training or support may be needed to improve performance.

![](https://i.imgur.com/eAxXhdy.png)


| KPI                                | Description                                                                                              |
|------------------------------------|----------------------------------------------------------------------------------------------------------|
| **Average Handling Time by Agent** | Measures the average time each agent spends handling tickets. It helps in evaluating individual agent efficiency and performance. |
| **Average Handling Time**          | Shows the overall average time taken to handle tickets. It provides a general benchmark for handling times across the team. |
| **Average Handling Time by Day**   | Displays the average handling time for tickets on a daily basis. It helps in identifying daily trends and potential issues affecting handling times. |
| **Average FRT by Agent**           | Tracks the average first response time (FRT) for each agent. It helps in assessing how quickly agents respond to new tickets. |
| **Average FRT**                    | Shows the overall average first response time for tickets. It provides a general benchmark for response times across the team. |
| **Average FRT by Day**             | Displays the average first response time for tickets on a daily basis. It helps in identifying daily trends and potential issues affecting response times. |
| **Average Chat Response Time by Agent** | Measures the average response time for chat interactions for each agent. It helps in evaluating individual agent performance in real-time communication. |
| **Average Chat Response Time**     | Shows the overall average response time for chat interactions. It provides a general benchmark for chat response times across the team. |
| **Average Chat Response Time by Day** | Displays the average response time for chat interactions on a daily basis. It helps in identifying daily trends and potential issues affecting chat response times. |
| **Average Queue Time**             | Measures the average time tickets spend in the queue before being handled. It helps in understanding delays in ticket processing. |
| **Average Queue Time by Day**      | Displays the average queue time for tickets on a daily basis. It helps in identifying daily trends and potential bottlenecks in ticket processing. |
| **Agent Transfers by Day**         | Tracks the number of ticket transfers between agents on a daily basis. It helps in understanding collaboration and potential inefficiencies in ticket routing. |


### Voice

Gain insights into interactions conducted through voice channels such as phone calls or voice assistants. Monitor call volume, average call duration, call resolution rates, and customer feedback. Understand how customers engage with your business through voice channels and identify opportunities to enhance the voice experience.

![](https://i.imgur.com/Y65DRMB.png)

### KPI descriptions for Voice bot report

| KPI Title                               | Description                                                                                                     |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Call Disconnect Split by Day**        | This KPI displays the number of call disconnections on a daily basis. It helps in identifying patterns or anomalies in call disconnections over time. |
| **Call Disconnect Split**               | This KPI categorizes call disconnections into various time intervals (e.g., <1 minute, 1-3 minutes, 60-90 minutes, 90-120 minutes). It provides insights into the duration before calls are disconnected, helping to understand user behavior and potential issues. |
| **API Status Split by Day and API Name**| This KPI tracks the number of API errors by day and API name. It provides a detailed view of API performance, highlighting error counts in each region for specific APIs. |
| **API Status Split by API Name**        | This KPI provides a breakdown of API statuses for each API name, such as "agent check" and "get access token." It helps in monitoring the performance and reliability of individual APIs. |
| **Call Hangup Reason Split by Day**     | This KPI shows the reasons for call hangups on a daily basis. It helps identify trends and common reasons why calls are being terminated. |
| **Call Hangup Reason Split**            | This KPI categorizes the reasons for call hangups, providing a comprehensive view of the factors leading to call termination. It aids in diagnosing and addressing call quality issues. |
| **Call Engagement Split by Day**        | This KPI measures daily call engagement levels. It tracks user interaction with the voice bot, helping to assess user interest and engagement over time. |
| **Call Engagement Split**               | This KPI provides an overall view of call engagement, categorizing engagement levels. It helps in understanding how effectively the voice bot is engaging with users. |
| **Average Ring Duration by Day**        | This KPI calculates the average duration of the ring time before a call is answered, measured on a daily basis. It helps in evaluating the responsiveness of the system. |
| **Average Call Duration by Day**        | This KPI measures the average length of calls on a daily basis. It provides insights into the typical duration of user interactions with the voice bot, aiding in performance analysis. |



### Bot performance

This provides insights into the effectiveness and efficiency of your chatbot. Track key performance indicators such as response time, conversation completion rates, user satisfaction scores, and frequently asked questions. Identify areas for improvement and optimize your chatbot to provide better customer service and support.

   <img src="https://i.imgur.com/rXZ6dn4.png" width=""/>
            


### KPI Descriptions for Bot Performance Report

KPI | Description
--- | -----------
**Flow Visits** | This KPI tracks the number of times users enter a specific flow within the bot. It helps measure the popularity and usage of different bot flows.
**Bot Accuracy**  | This KPI measures the accuracy of the bot in understanding and responding to user queries. High accuracy indicates effective natural language processing and a well-trained bot.
**Bot Feedback** | This KPI gathers user feedback on their interactions with the bot. It helps in assessing user satisfaction and identifying areas for improvement.
**Flow Completion Rate** | This KPI calculates the percentage of users who successfully complete a flow from start to finish. It is an indicator of how effectively the bot guides users through a process.
**Deflection Rate** | This KPI measures the percentage of user inquiries handled by the bot without needing to escalate to a human agent. A higher deflection rate indicates that the bot is effectively resolving issues.
**Utterance Status Split** | This KPI categorizes user utterances based on their status (e.g., recognized, unrecognized, ambiguous). It helps in understanding how well the bot processes different types of user input.
**API Usage by Status Code** | This KPI tracks the status codes returned by API requests made by the bot. It provides insights into the performance and reliability of the APIs used by the bot.
**API Requests by Day** | This KPI shows the number of API requests made by the bot on a daily basis. It helps in monitoring the bot's activity levels and identifying trends or spikes in API usage.

### Inbox chats

The Inbox Chats report offers a comprehensive overview of ticket management and activity within the system. It includes detailed metrics such as Ticket Status Split by Day, providing insights into the daily evolution of ticket statuses. 

The Ticket Status Split section offers a snapshot of the distribution of ticket statuses across all tickets. Users can also monitor real-time ticket activity with Active Open Tickets in the Last Hour. Open Tickets by Day provides a trend analysis of open tickets over time, while Tickets Created by Day offers insights into ticket creation patterns. 

Additionally, the report includes the Deflection Rate, measuring the effectiveness of self-service options in resolving customer issues without agent assistance.


   <img src="https://i.imgur.com/QZjlUeo.png"/>


**KPI Descriptions for Inbox Chat Report**

| KPI                           | Description                                                                                          |
|-------------------------------|------------------------------------------------------------------------------------------------------|
| **Ticket Status Split by Day**       | Displays the status of support tickets on a daily basis. It helps in monitoring the progress and resolution of tickets over time, identifying trends, and managing workload. |
| **Ticket Status Split**       | Categorizes tickets based on their current status (e.g., open, in-progress, closed). It provides a snapshot of the overall status distribution of tickets, aiding in resource allocation and prioritization. |
| **Active Open Tickets in the Last Hour** | Shows the number of tickets that are currently open and were active within the last hour. It helps in assessing the immediate workload and urgency of issues needing attention. |
| **Open Tickets by Day**       | Tracks the number of open tickets each day. It helps in understanding daily ticket volume and trends, which can inform staffing and process improvements. |
| **Tickets Created by Day**    | Displays the number of new tickets created each day. It provides insights into the volume of incoming issues and helps in forecasting support demand. |
| **Deflection Rate**           | Measures the percentage of user inquiries that are resolved by automated systems or self-service options, preventing the creation of a ticket. A higher deflection rate indicates effective use of self-service resources, reducing the load on support staff. |




## Create Custom dashboards


In addition to the default dashboards, you can create custom dashboards for a more tailored view of your bot data. A custom dashboard offers a dedicated page where you can configure and display information from a linked database. Select the specific data you want to monitor and visualize it through various charts and graphs, providing a comprehensive and easily accessible overview of your bot's performance and metrics.


Here are the features of the insights dashboard:
- You can create multiple dashboards, each of which can include multiple widgets (reports).
- **Widgets** are the saved reports that are present on the [data explorer page](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#2-add-report-to-dashboard). The dashboard helps the analysts to add multiple widgets to the single page layout. 
- Widgets can be directly added to the Dashboard from the **data explorer**.

   ![](https://i.imgur.com/LJz5RoC.png)









You can create a dashboard using either of the following methods:


:::note
You can also duplicate the default dashboard by going to the **Default** tab and clicking **Duplicate**. You cannot modify or edit the Default Dashboard directly.
:::

### <a name="1"></a> Method 1: Create a dashboard from the dashboard page

1. On the left navigation bar, go to **Insights** > **Dashboard**.
2. Click on the **Custom** tab, then click **+ New dashboard**. 

   ![img](https://i.imgur.com/gmxIYqM.png)

3. On the Dashboard details pop-up, enter **Name** and **Description**. 
4. Click **Save**.




### <a name="2"></a>  Method 2: Create a dashboard from Data explorer (Saved reports)

> Prerequisites: [Data explorer](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions)

1. On the left navigation bar, click **Insights** > **Data explorer**. 
2. Click and open any of the saved reports. 
    ![](https://i.imgur.com/Sy9bmBJ.png)
3. From **Actions** dropdown, select **Add to dashboard**.
4. Select **New dashboard**. Add **Name** and **Description** (the saved report that you have selected is going to be the widget inside a dashboard. You can choose to add this widget to an existing dashboard or you can create a new dashboard and add this widget to it).
5. Click **Save**. You can view this on the dashboard page. 
    ![](https://i.imgur.com/o3ila14.png)

:::note
All the changes made in the Saved reports are automatically updated on the Dashboard.
:::


### <a name="3"></a> Add new widget to the custom dashboard

You can add new widgets to the custom dashboard using the reports that were saved. To add a saved report as a widget to your dashboard, follow these steps:

:::note
To learn more about creating a saved report, refer to [custom tables](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables).    

<!-- img  src="https://i.imgur.com/MFgmkwk.png"  width="70%"/> -->
:::



1. On the **Dashboard** page, navigate to the **Custom** tab.
2. Click **+Add widget**. You will be prompted to create a new widget.

   ![](https://imgur.com/9xatiMR.png)

3. To create a new widget, click **+ Create new widget**.
 
   <img src="https://i.imgur.com/oyDuwuQ.png" width="80%"/>

4. Select **Custom query** and choose your preferred table from the drop-down box. Click **Next** to proceed.
5. Apply filters, summarize, and visualize the data as per your need.

   ![](https://i.imgur.com/vuvy6kf.png)


------




## Manage dashboard

### Access dashboards

To view the Dashboards page, on the left navigation bar, click  **Insights** > **Dashboards**. 

### Filter dashboard data for a time period 

Irrespective of the filters added to the saved reports(widgets) you can add a data filter to your dashboard from the top left to specify a time period. This filter applies to all the widgets on the dashboard and allows you to focus on specific data within a given time frame.

- On  **Insights** > **Dashboards**, click **Date filter** and choose your preferred duration.

<!-- ![](https://hackmd.io/_uploads/HJ_aWb6Fn.png) -->

   <img  src="https://i.imgur.com/XHr9FpN.png"  width="50%"/>



### Edit dashboard

To edit a dashboard:

1. Click **Edit** dashboard at the top right corner.
2. You can change the **Name** and **Description** of the dashboard.
3. Add more widgets to the dashboard or delete existing widgets.
4. Rearrange the widgets by dragging and dropping them.
5. Click **Save** to apply the changes.

![](https://i.imgur.com/8tNItnb.png)


### Delete custom dashboard

If you want to delete a dashboard, click **Actions** at the top right corner of the dashboard and select **Delete**.

<!--    ![](https://hackmd.io/_uploads/H1Yyz-pt3.png) -->

   <img src="https://i.imgur.com/4BBP5oJ.png"  width="50%"/>