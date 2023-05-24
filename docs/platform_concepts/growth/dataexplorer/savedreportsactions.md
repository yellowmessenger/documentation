---
title: Enhance reporting with available actions for saved reports
sidebar_label : Actions on saved reports 
---


When you click on **Save query** on the tables page, you can create saved reports that include filters, summarization, and visualization. These saved reports can be scheduled for automatic alerts, can be used for advanced data analytics, added to a dashboard for easy access, or downloaded/deleted as needed. 

You can find your **Saved reports** at the top of the data explorer section.
![](https://i.imgur.com/NguWtaB.png)


## 1. Schedule a report

Scheduling a recurring report (instead of downloading the CSV files and monitoring dashboards) is important because it provides consistency, efficiency, reliability, and flexibility. It ensures timely and accurate delivery of information while freeing up time and resources.

To schedule a report, follow the below steps: 
1. Saved queries are available as saved reports on the data explorer page, open any of your saved reports. For example: Studio feedback. 
    ![](https://i.imgur.com/DkPaVC3.png)
2. On the queries page, click **Actions**. From the dropdown select **Schedule report**. 
    ![](https://hackmd.io/_uploads/BJZYDJ9S2.png)
3. On the side panel, configure the following: 
    - **Frequency**: You can choose hourly, weekly (select the days of the week that the report needs to be sent on), monthly or quarterly (choose timezone and dates).
    - **Email**: Specify the email IDs of the recipients to which the report needs to be sent. You can add up to a maximum of 10 email IDs (they can also be external to your organization).
    - **Subject**: Subject is pre-filled with the report name.
    - **Message**: Type in a message that you want to add to the body of the email.

![](https://i.imgur.com/bESvQgj.png)

<img  src="https://i.imgur.com/zxTLVCF.png"  width="50%"/>

4. After configuring the details, you can send a test email to check if the format of the email is as expected, this test email is sent out to the entered email idea.
    <img  src="https://i.imgur.com/iGVGPiB.png"  width="70%"/>
5. Click **Save**. This report will be sent to the respective email IDs as per the schedule. 

-----

## 2. Add report to dashboard

For faster access and visualization, you can add this saved report to your dashboard by clicking **Add to dashboard** from the **Actions** dropdown. 

![](https://i.imgur.com/LH0DHCv.png)

> Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards#--12-create-a-dashboard-from-data-explorer) for more details on Dashboard. 

------

## 3. Delete a saved report

To delete the saved query, select **Delete query** from the **Actions** dropdown.

![](https://hackmd.io/_uploads/rJohv1cB2.png)

----

## 4. Add a formula column to a report 

To add a formula to a column, follow these simple steps:

1. Click on the **Actions** dropdown menu and select **Add formula column**.
    ![](https://i.imgur.com/9YI7A27.png)
2. Enter a **Name** for the formula in the tab that appears.
    ![](https://hackmd.io/_uploads/BkRYoJqS3.png)
3. Add the required formula using entities like calculating values in a column, calculating values in a specific cell, adding integers or arithmetic operators.
    - To add a column, select **Select column** under **table operations**. The available columns (of integer data type) in your summarized table will be listed on the right side. Click **Add** next to the column name.
    ![](https://hackmd.io/_uploads/rkgPsk5rn.png)
    - To add a cell, select **Select cell** after choosing a column. All the available rows for the selected column will be displayed in the dropdown list. Select a value.
    ![](https://hackmd.io/_uploads/ry64oJcr3.png)
    - Complete the formula with numbers and operators.
    - Click **Next**.
    ![](https://hackmd.io/_uploads/SkDlsk9B3.png)

4. The summarized table will now have a new column with the calculated formula values. You can edit or delete this data as needed by clicking on the new column name.
    ![](https://i.imgur.com/Ru1zaDZ.png)
5. Click **Save query** to save this as a new report or add it to the existing one. 
    ![](https://i.imgur.com/hoPwKin.png)


### Common formulas that can be applied on summarized tables

1. **Ticket status percentage split** (used to Summarise Chat tickets table by their ticket status count)      
**New column**: `Status %`     
**Formula**: `Count / (Count, RTotal) * 100`     
![](https://i.imgur.com/fQmaZzl.png)

2. **Journey retention rate** (Used to summarise flows started count and group by flows - to see funnel of users from one flow to another)     
**New column**: `Retention rate`     
**Formula**: `Count / (Count, R1) * 100`     
![](https://i.imgur.com/fKPKvKh.png)

3. **Average session duration every month** (Used to get count of unique Session IDs and sum of user response time for each message - grouped by month)     
**New column**: `Average session duration`     
**Formula**: `SUM_SESSION_SUM / DISTINCT_SESSIONID`     
![](https://i.imgur.com/FGREMwr.png)

----

## 5. Pivot a report

To rearrange rows with integer datatype based on a base column of string datatype, follow these steps:

1. Click on the **Actions** dropdown menu and select **Create pivot table**.
    ![](https://i.imgur.com/akWlSfI.png)
2. You will be redirected to create a new table. Select a **base column** by choosing a column from the list displayed (which contains column names with string datatype). Only one column can be selected.
3. Add multiple **rows** by selecting them from the dropdown list (which will contain row values only if they consist of integer datatype).
4. Click **Apply**.
    ![](https://hackmd.io/_uploads/SyJPt1cHh.png)
5. The selected base column's values will become the row headers and the added rows will be displayed as columns.
For example, if the base column is "Platform" and rows are "Avg Session Duration," "DISTINCT_SESSIONID," and "SUM_SESSION_SUM" (choose multiple), the resulting pivot table will look like this:
    ![](https://hackmd.io/_uploads/HkLWhJcSh.png)
6. You can edit the column name/rows, click **Edit pivot table** from actions.  You can also save this table by clicking **Save query**. 
    ![](https://hackmd.io/_uploads/SJliFJcB3.png)
