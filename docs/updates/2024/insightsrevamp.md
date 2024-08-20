---
title: Insights Module Revamp (Phase 1)
sidebar_label: Insights Module Phase 1 Revamp
featured: true
---
## What has happened?
We have revamped the Insights module UI to significantly cut down on legacy features and the black-box nature of our reporting based on valuable customer feedback. In this vein, we have sunset some of our old, out of the box dashboards.

#### Discontinued sections

We have removed the following screens from the UI:

* **Overview** 
* **Metrics**
* **User Journeys**
* **Voice Overview**
* **Doc Cog**

### Why have we done this?

You might have noticed that while these reports were informative and accurate, they acted like black boxes when it came to the underlying raw data. You couldn't perform custom drill-down opertions, change filters, or adjust visualizations for specific metrics. That's why we decided to remove these screens and widgets to make reporting more accessible, transparent, and robust on the Dashboard and Data Explorer pages.

### Where have the old reports gone?
You can check the detailed breakdown [here](https://docs.yellow.ai/docs/updates/2024/insightsrevamp#report-migration).

1. All of the discontinued reports have been partially or fully migrated to [Default Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard). 
2. Metrics/widgets are moved to default reports labeled as *Created by Yellow.ai*.
3. You can **clone** default reports and dashboards for custom drill-down operations.
4. [Custom dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/custom_dashboards) and reports are still available on custom tab.

> You will soon be able to setup **Custom alerts** on these reports.

### Where can I find the old exports for Chat transcripts, User traffic, Bot performance, etc.?

Previously, we had standard data exports which could have been downloaded from our out of the box dashboards. We have partially or fully migrated these exports into the Data Explorer in order to give you complete transparency in terms of the availability of raw data and the precise parameters used for metric calculations.

<img  src="https://i.imgur.com/ZtcYRCT.png"  width="60%"/>

You can find the status of the migration [here](https://docs.yellow.ai/docs/updates/2024/insightsrevamp#report-migration).


### Data Explorer and Dashboards - The centre pieces

We've elevated the **Dashboards** and **Data Explorer** features to the heart of the Insights module. All of our reporting has now been consolidated into the **[Default Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard)** section of Insights. 

Every report you used to refer to from those screens is available on dashboards labeled '**Created by Yellow.ai**'. 

**Default reports**

[Default reports](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard) are a curated list of Data Explorer powered reports which give you access to the underlying data and parameters, allowing you to tailor them to your analytics needs. They can serve as a starting point for building complex queries or be used out of the box for basic insights. You can clone our [Default Reports](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard) and Dashboards to incorporate custom drill-down operations.

   ![image](https://imgur.com/Xd26lSE.png)

We have curated the following new Dashboards for you:

New Dashboard	| Details
----------- | ------------------------
[Bot Overview](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard)| Replaces the old Overview screen. Contains reports for user traffic and channel consumption.
[Bot performance metrics](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#bot-performance)| Replaces the old Metrics screen. Contains reports for bot performance and accuracy.
[Generative AI](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#generative-ai)| New dashboard for GenAI and KB usage.
[Inbox chats](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#inbox-chats)| New dashboard for Inbox tickets and their statuses.
[Inbox agent performance](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#inbox-agent-performance)| New dashboard for Inbox agent metrics.
[Email tickets](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#email-tickets) | New dashboard for email ticket reports.
[Voice](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#voice)| Replaces the old Voice Overview screen. Contains voice consumption reports.

> We plan to support even more curated reports as we develop new features and expand our data and analytics capabilities.

**Custom reports** 

All reports and dashboards created by you are now available in one place under the **Custom** tab, alongside the Default dashboards curated by us. This makes the Insights module much leaner and easier to navigate.

![image](https://imgur.com/8WDVSRw.png)

-----------

## Report Migration

This section will give you a detailed breakdown of the extent of changes and help you navigate our dashboards to find all of the old reports and metrics that you were earlier referring to, on our old screens.

### Overview
We've migrated the reports from the Overview screen to the 'User Traffic' and 'Bot Performance' Dashboards. You can find this Dashboard at [Dashboards > User Traffic](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#user-traffic) or [Dashboards > Bot Performance](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#bot-performance).

 ![img](https://i.imgur.com/rJHP4Z3.png)

Old Report	|New Dashboard| New Report | Migration Status
----------- |--------| -----------|------------------
Users|Bot Overview| New Users <br/>Unique Users|Completed
Messages|Bot Overview| Messages by Day| Completed
Sessions|Bot Overview| Sessions by Day| Completed
Session Duration|Bot Overview| Average Session Duration in Minutes| Completed
Users By Country|Bot Overview| Unique Users by Country | Completed
Users By Traffic Channel|Bot Overview| Users Traffic by Channel | Completedd
Users By Device|Bot Overview| Unique users by Device | Completed
User Acquisition|Bot Overview|User Traffic by Channel <br/>User Traffic by Platform  | Completed
Messages exchanged between user and bot|Bot Overview|Messages exchanged between user and bot|Completed
Messages exchanged between user and agent|Bot Overview|Messages exchanged between user and agent|Completed

   ![img](https://i.imgur.com/B8rYDdW.png)

Old Report	|New Dashboard| New Report | Migration Status
----------- |---------| -----------|------------------
CSAT |Bot Performance Metrics| Bot Feedback| Completed
Flow Visits | Bot Performance Metrics| Flow visits for each flow| Completed

   ![img](https://i.imgur.com/efLmMko.png[/img)

Old Report	|New Dashboard| New Report | Migration Status
----------- |---------| -----------|------------------
Bot Accuracy|Bot Performance Metrics|Bot Accuracy|Completed
Flow Completion Rate|Bot Performance Metrics|Flow completion rate <br/> Flow completion rate for each flow| Completed
Deflection Rate | Bot Performance Metrics| Deflection rate by day| Completed

   ![img](https://i.imgur.com/NEBze9h.jpeg)

Old Report	|New Dashboard| New Report | Migration Status
----------- |---------| -----------|------------------
Real Time User Activity|Bot Overview|Unique Users in the Last Minute|Completed
User Activity by Time (heatmap)|||Coming Soon
Whatsapp Channel Consumption|||Coming Soon
Conversation Issues|||Coming Soon
	

***

### Metrics
This was a very redundant screen with hardly any differentiation from the Overview Dashboard. We've moved the old reports to the 'User Traffic' and 'Bot Performance' dashboards. You can find these Dashboards at [Dashboards > User Traffic](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#user-traffic) or [Dashboards > Bot Performance](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#bot-performance).

   ![img](https://i.imgur.com/7Z7QDdF.png)

Old Report	|New Dashboard| New Report | Migration Status
----------- |--------| -----------|------------------
Users|Bot Overview| New Users <br/>Unique Users|Completed
Messages|Bot Overview| Messages by Day| Completed
Sessions|Bot Overview| Sessions by Day| Completed
Session Duration|Bot Overview| Average Session Duration in Minutes| Completed
Users By Country|Bot Overview| Unique Users by Country | Completed
Users By Traffic Channel|Bot Overview| User Traffic by Channel| Completed
Users By Device|Bot Overview| Unique Users by Device | Completed


***

### API Usage
We've moved reports from this screen to the 'Bot Performance' dashboard. You can find these Dashboards at [Dashboards > User Traffic](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#user-traffic) or [Dashboards > Bot Performance](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard#bot-performance).

   ![img](https://i.imgur.com/rdx0tol.png)

Old Report	|New Dashboard| New Report | Migration Status
----------- |--------| -----------|------------------
Usage By Status Code|Bot Performance|API usage by status code|Completed
API Hits | Bot Performance|API requests by day|Completed
Response Time ||| Coming soon



***

### Funnels

   ![img](https://i.imgur.com/rfpYUUC.png)

Old Report	|New Dashboard| New Report | Migration Status
----------- |--------| -----------|------------------
Flows visited|Bot Performance Metrics| Flow Visits|Completed
Flows completion rate |Bot Performance Metrics|Flow completion rate <br/> Flow completion rate for each flow|Completed
Step-wise interactions ||| Coming soon




-------

## Standard Exports 

Previously, we had a bunch of standard exports which were available on each of the screens which we have sunset. Below is a detailed breakdown of where you can find alternatives to these reports and their migration status.

The ability to [export your data](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/defaulttables#download-filtered-data-as-a-csv-file) queries will be available for Default and Custom reports. You can also [schedule report](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#1-schedule-a-report) downloads. 

Old Report	|Where to find this?|Alternatives| Migration Status
----------- |--------| -----------|------------------
User traffic| Bot Overview Dashboard|New Users<br/>Unique Users<br/>Sessions<br/>Average session duration| Completed
Real time bot activity|||Coming Soon
User activity by time|||Coming Soon
User acquisition|||Coming Soon
Unique users by country|||Coming Soon
Users by device|||Coming Soon
Bot performance|Bot Performance Metrics Dashboard|Bot Accuracy<br/>Deflection Rate<b/r>Flow Completion Rate|Completed
Top flows visited|Bot Performance Metrics Dashboard|Flow Visits|Completed
User feedback|Bot Performance Metrics Dashboard|Bot Feedback|Completed
User by demographics|||Coming Soon
Chat transcripts| Data Explorer| Message Events Table|Partially Migrated
User details|Data Explorer| User Engagement Events Table|Completed
Notification statuses by campaign ID|||Coming Soon (we will be creating a new Dashboard for Campaign Metrics)
Flows summary|Bot Performance Metrics Dashboard|Flow completion rate for each flow| Completed
Flow Day Wise Data|Bot Performance Metrics Dashboard|Flow visits|Completed
