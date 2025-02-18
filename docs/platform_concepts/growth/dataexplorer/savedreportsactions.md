---
title: Enhance reporting with available actions for saved reports
sidebar_label : Actions on saved reports 
---


When you click on **Save query** on the tables page, you can create saved reports that include filters, summarization, and visualisation. These saved reports can be scheduled for automatic alerts, can be used for advanced data analytics, added to a dashboard for easy access, or downloaded/deleted as needed. 

You can find your **Saved reports** at the top of the data explorer section.
![](https://i.imgur.com/NguWtaB.png)


## 1. Schedule a report

Scheduling a recurring report (instead of downloading the CSV files and monitoring dashboards) is important because it provides consistency, efficiency, reliability, and flexibility. It ensures timely and accurate delivery of information while freeing up time and resources.

To schedule a report, follow the below steps: 
1. Saved queries are available as saved reports on the data explorer page, open any of your saved reports. For example: Studio feedback. 
    ![](https://i.imgur.com/DkPaVC3.png)
2. On the queries page, click **Actions**. From the dropdown select **Schedule report**. 
    ![](https://hackmd.io/_uploads/BJZYDJ9S2.png)


3. Configure the **Frequency**. You can choose hourly, weekly (select the days of the week that the report needs to be sent on), monthly or quarterly (choose timezone and dates).

| Frequency | Description/Example | Selection | 
|-----------|---------------------|-----------|
| **Hourly** | Reports will be sent to the recipient every hour, starting from the beginning of the next hour. The timing is based on the timezone selected for the bot, not your local system time. <br> **Example**: If the current time is **12:30 PM** when you create the alert, the first report will be sent at **1:00 PM**, the next at **2:00 PM**, and so on.  | No specific days or times need to be selected. The system automatically sends the report every hour based on the bot's timezone. <br> ![image](https://hackmd.io/_uploads/Hk4DX13Yke.png) |  
| **Weekly** | Reports are generated on specific days of the week, at a designated time and timezone. <br/> **Example**: The report can be configured to be sent every **Tuesday and Thursday at 1:00 PM**. If the current time is **1:30 PM on Tuesday**, the next report will be generated at **1:00 PM on Thursday**.   | Select specific days of the week (e.g., Monday, Wednesday, Friday) and the time (e.g., 9:00 AM, 3:00 PM). The timezone determines when the report is generated. <br/> ![image](https://hackmd.io/_uploads/Bkrh7k2Y1l.png) |
| **Monthly** | Reports are generated on a specific day of the month, at a designated time and timezone. <br/> **Example**: The report can be set to be generated on the **first day of every month at 9:00 AM**. If today is the **15th of the month**, the next report will be generated on the **1st of the following month at 9:00 AM**. | Select the specific day of the month (e.g., 1st, 15th, 30th) and the time (e.g., 10:00 AM, 2:00 PM). The timezone determines when the report is generated. <br/> ![image](https://hackmd.io/_uploads/H1veEJ3Yye.png) |
| **Quarterly** | Reports are generated every three months (quarterly) on a specific day, at a designated time and timezone. The quarters are typically divided as **January, April, July, and October**. <br/> **Example**: The report can be set to be generated on the **first day of every quarter at 9:00 AM**. If today is **February 10th**, the next report will be generated on **April 1st at 9:00 AM**.  | Select the specific day of the quarter (e.g., 1st, 15th) and the time (e.g., 11:00 AM, 4:00 PM). The timezone determines when the report is generated. <br/>![image](https://hackmd.io/_uploads/S1xmEJ3Kyg.png) |


4. On the side panel, configure the following: 
    - **Email**: Specify the email IDs of the recipients to which the report needs to be sent. You can add up to a maximum of 10 email IDs (they can also be external to your organization).
    - **Subject**: Subject is pre-filled with the report name.
    - **Message**: Type in a message that you want to add to the body of the email.

<img  src="https://i.imgur.com/zxTLVCF.png"  width="50%"/>


4. After configuring the details, you can send a test email to check if the format of the email is as expected, this test email is sent out to the entered email idea.
    <img  src="https://i.imgur.com/iGVGPiB.png"  width="70%"/>
5. Click **Save**. This report will be sent to the respective email IDs as per the schedule. 

-----

## 2. Add a report to dashboard

For faster access and visualisation, you can add this saved report to your dashboard by clicking **Add to dashboard** from the **Actions** dropdown.      

![](https://i.imgur.com/LH0DHCv.png)

> All the changes made to these saved reports will be reflected on Dashboards. Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/dashboardintro) for more details on customising your dashboard. 

------

## 3. Delete a saved report

To delete the saved query, select **Delete query** from the **Actions** dropdown.

![](https://hackmd.io/_uploads/rJohv1cB2.png)
