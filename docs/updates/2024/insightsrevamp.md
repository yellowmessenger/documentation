---
title: June 2024 Releases
sidebar_label: Latest releases
featured: true
---

   ![](https://i.imgur.com/hIGEIJL.png)


## The new and improved Insights module
We've revamped the Insights module to significantly enhance reporting capabilities based on valuable customer feedback. 

### Discontinued sections

We have removed the following screens from the UI:

* **Overview** 
* **Metrics**
* **User Journeys**
* **Voice Overview**
* **Doc Cog**

#### Reason for discontinuation

You might have noticed that while these reports were informative and accurate, they acted like black boxes when it came to the underlying raw data. You couldn't easily customize drill-downs, change filters, or adjust visualizations for specific metrics. That's why we decided to remove these screens and widgets to make everything more accessible on the Dashboard and Data Explorer pages.

#### Key upgrades

1. All Reports are migrated to [Default Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard). 
2. Metrics/widgets are moved to default reports labeled as *Created by Yellow.ai*.
3. You can **clone** default reports and dashboards for personalized drill-down operations.
4. [Custom dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/custom_dashboards) and reports are available on custom tab.

> You will soon be able to setup **Custom alerts** on these reports.


### New and improved pages 

We've elevated the **Dashboards** and **Data Explorer** features to the heart of the Insights module. All the previous reporting users had access to has now been consolidated into the **[Default Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard)** section of Insights. 

Don't worry—every metric you used to refer to from those screens is still available on our platform, now organized under dashboards labeled **Created by Yellow.ai**.

**Default reports**

[Default reports](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard) give you access to the underlying data and parameters, allowing you to tailor them to your analytics needs. They can serve as a starting point for building complex queries or be used out of the box for basic insights. Additionally, you can clone our [Default Reports](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard) and Dashboards to incorporate custom drill-down operations.

![image](https://imgur.com/Xd26lSE.png)

Our Default Dashboards cover the following use cases:

* [User traffic](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#user-traffic)
* [Bot performance](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#bot-performance)
* [Generative AI](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#generative-ai)
* [Inbox chats](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#inbox-chats)
* [Inbox agent performance](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#inbox-agent-performance)
* [Email tickets](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#email-tickets-dashboard)
* [Voice](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#voice)

> We plan to support even more curated reports as we develop new features and expand our data and analytics capabilities.

**Custom reports** 

All reports and dashboards created by you are now available in one place under the **Custom** tab, alongside the Default dashboards curated by us. This makes the Insights module much leaner and easier to navigate.

![image](https://imgur.com/8WDVSRw.png)

-----------

#### Overview page


Old Report	| Where to find in new report
----------- | ------------------------
-Users	<br/> - Messages<br/>- Sessions	<br/>- Session Duration<br/>- Users By Country<br/>- Users By Traffic Channel	<br/>- Users By Device	| [Dashboards > User Traffic](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#user-traffic)

   ![img](https://i.imgur.com/rJHP4Z3.png)



Old Report	| Where to find in new report
----------- | ------------------------
-Bot Accuracy <br/>- Flow Completion Rate<br/>- Deflection Rate | [Dashboards > Bot Performance](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#bot-performance)

   ![img](https://i.imgur.com/efLmMko.png[/img)



Old Report	| Where to find in new report
----------- | ------------------------
- CSAT <br/> - Flow Visits | [Dashboards > Bot Performance](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#bot-performance)

   ![img](https://i.imgur.com/B8rYDdW.png)



Old Report	| Where to find in new report
----------- | ------------------------
- Real Time User Activity <br/>- User Activity by Time (heatmap)<br/>- Whatsapp Channel Consumption<br/>- Conversation Issues<br/> | Coming Soon
	
   ![img](https://i.imgur.com/NEBze9h.jpeg)


***

#### Metrics page


Old Report	| Where to find in new report
----------- | ------------------------
- Users<br/>- Messages<br/>- Sessions<br/>- Session Duration<br/>- Users By Country<br/>- Users By Traffic Channel<br/>- Users By Device<br/>- Sessions per user | [Dashboards > User Traffic](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#user-traffic)
- Whatsapp Channel Consumption | Coming soon

   ![img](https://i.imgur.com/7Z7QDdF.png)

***

### API usage page


Old Report	| Where to find in new report
----------- | ------------------------
- Usage By Status Code<br/>- API Hits | [Dashboards > Bot Performance](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#bot-performance)
- Response Time | Coming soon

   ![img](https://i.imgur.com/rdx0tol.png)

***

### Funnels page


Old Report	| Where to find in new report
----------- | ------------------------
- Flows visited<br/>- Flows completion rate | [Dashboards > Bot Performance](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#bot-performance)
- Step-wise interactions | Coming soon

   ![img](https://i.imgur.com/rfpYUUC.png)


-------

### Upcoming changes - Exports For standard reporting 

Previously, the following data could have been downloaded from the metrice page, which is currently discontinued.

<img  src="https://i.imgur.com/ZtcYRCT.png"  width="60%"/>

We will be migrating the the following exports to **Data explorer** in the **upcoming release**:

* User traffic
* Real time bot activity
* User activity by time
* User acquisition
* Unique users by country
* Users by device
* Bot performance
* Top flows visited
* User feedback
* User by demographics
* Weekly user traffic
* Chat transcripts
* User details
* Notification statuses by campaign ID
* Flows summary
* Flow Day Wise Data

The ability to [export your data](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/defaulttables#download-filtered-data-as-a-csv-file) queries will be available for Default and Custom reports. You can also [schedule report](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#1-schedule-a-report) downloads. 


