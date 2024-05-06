---
title: Create Dashboards and add widgets 
sidebar_label: Dashboards
---
:::note
Actions in Dashboard must be configured separately for **Live and Production** environment.
:::

## Custom dashboards overview 

A dashboard is a visual display of your bot data that provides information at a glance. It has its own dedicated page and receives information from a linked database that can be configured according to your needs. You can choose the data you want to see and visualize it using charts or graphs.

Here are the features of the insights dashboard:
- You can create **Multiple Dashboards**. In this, each dashboard can include multiple widgets (reports).  
- **Widgets** are the saved reports that are present on the [data explorer page](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#2-add-report-to-dashboard). The dashboard helps the analysts to add multiple widgets to the single page layout. 
- Widgets can be directly added to the Dashboard from the **data explorer**.

![](https://i.imgur.com/LJz5RoC.png)

#### Usecase of insight dashboard

Dashboards are useful for organizing and analyzing data based on common themes. For example, if your company has three different types of products and you want to check the analytics for each product separately but in the same place, you can create dashboards for each product and add relevant metrics to each dashboard. This allows you to view all the connected values under one view.

#### Access dashboards

To view existing dashboards, go to the **Insights** section and select **Dashboards**. You can have multiple dashboards, and each dashboard can contain multiple widgets.

#### Filter dashboard data for a time period 

Irrespective of the filters added to the saved reports(widgets) you can add a data filter to your dashboard from the top left to specify a time period. This filter applies to all the widgets on the dashboard and allows you to focus on specific data within a given time frame.

![](https://hackmd.io/_uploads/HJ_aWb6Fn.png)

<img  src="https://i.imgur.com/XHr9FpN.png"  width="50%"/>

#### Delete dashboard

If you want to delete a dashboard, click **Actions** at the top right corner of the dashboard and select **Delete**.

![](https://hackmd.io/_uploads/H1Yyz-pt3.png)

<img  src="https://i.imgur.com/4BBP5oJ.png"  width="50%"/>

----

## Create a Dashboard 

You can create a dashboard using either of the following methods:



### <a name="1"></a> Method 1: Create a dashboard from the dashboard page

1. Login to [yellow.ai](https://cloud.yellow.ai). Go to Overview. Open **Insights** > **Dashboard**.
2. Click **+Add new dashboard** or **+New dasbhoard** from the top right. 
3. On the Dashboard details pop-up, enter **Name** and **Description**. 
4. Click **Save**. 

![](https://i.imgur.com/LRDZwpM.png)


### <a name="2"></a>  Method 2: Create a dashboard from Data explorer (Saved reports)

> Prerequisites: [Data explorer](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions)

1. Login to [yellow.ai](https://cloud.yellow.ai), click on Overview. Open **Insights** > **Data explorer**. 
2. Click and open any of the saved reports. 
    ![](https://i.imgur.com/Sy9bmBJ.png)
3. From **Actions** dropdown, select **Add to dashboard**.
4. Select **New dashboard**. Add **Name** and **Description** (the saved report that you have selected is going to be the widget inside a dashboard. You can choose to add this widget to an existing dashboard or you can create a new dashboard and add this widget to it).
5. Click **Save**. You can view this on the dashboard page. 
    ![](https://i.imgur.com/o3ila14.png)

:::note
All the changes made in the Saved reports are automatically updated on the Dashboard.
:::

------

## <a name="3"></a> Add saved reports as widget on dashboard

To add a saved report as a widget to a dashboard:

1. To add a widget to a new dashboard, you must have an existing saved report on the data explorer page. Click **+Add widget**. You will be prompted to create a new widget.  
![](https://i.imgur.com/22q7kUO.png)

:::note
To learn more about creating a saved report, refer to [custom tables](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables).    

<img  src="https://i.imgur.com/MFgmkwk.png"  width="70%"/>
:::

2. To add a widget to a dashboard with existing widgets, click **+Add widget** on the top right. Select from the existing widgets (reports). Multiple reports can be selected at once. You can also click **+Create new widget** to create new widgets. 
![](https://i.imgur.com/ZXJkgqk.png)
3. Click **Add**. 

---

## Edit dashboard

To edit a dashboard:

1. Click **Edit** dashboard at the top right corner.
2. You can change the **Name** and **Description** of the dashboard.
3. Add more widgets to the dashboard or delete existing widgets.
4. Rearrange the widgets by dragging and dropping them.
5. Click **Save** to apply the changes.

![](https://i.imgur.com/8tNItnb.png)
