---
title: Custom Dashboards
sidebar_label: Custom Dashboards
---

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

## Create custom dashboards 

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

--------

## <a name="3"></a> Add new widget to the custom dashboard

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


## Manage dashboards

### Access dashboards

To view the Dashboards page, on the left navigation bar, click  **Insights** > **Dashboards**. 

### Edit dashboard

To edit a dashboard:

1. Click **Edit** dashboard at the top right corner.
2. You can change the **Name**, **Description** of the dashboard and create filters.
3. Add more widgets to the dashboard or delete existing widgets.
4. Rearrange the widgets by dragging and dropping them.
5. Click **Save** to apply the changes.

   ![](https://i.imgur.com/8tNItnb.png)

### Add filters to custom dashboards

Adding filters to custom dashboards enhances your ability to analyze and visualize data tailored to your specific needs. Filters allow you to refine your dashboard views, focusing on the most relevant information for your analysis. Follow the steps below to create filters for your custom dashboard:

1. On the **Custom** dashboard page, navigate to the dashboard where you want to add filters.
2. Click the **Edit** button to enter edit mode.

   ![Custom Dashboard](https://i.imgur.com/Vq2ujGC.png)

3. Click on the **Create filter** button. This action will display a list of all available reports within the dashboard.

4. Provide a descriptive name for your filter to easily identify its purpose in **Enter Filter Name:**.

5. For each widget where you want to apply the filter, select the relevant column using the available drop-down list. On the right side, you will see the status as mapped for each widget, confirming the column selections.

6. Click the **Create** button to finalize the filter creation process. 
7. Repeat the above steps to add more filters as needed.
8. After adding all desired filters, click **Save** to save your changes.
   Once saved, you will see all the filters for the custom dashboard displayed, as shown here.

   ![img](https://i.imgur.com/CxjQijp.png)

#### Delete custom filter

To delete a custom filter:

1. Click on the **Edit** icon.
2. Select the filter you want to remove.
3. Click on **Delete filter**.

   ![Delete Filter](https://i.imgur.com/niZ34hU.png)

### Apply filters to Custom dashboard data

You can drill-down data using the date filter and custom filters customized to meet your specific requirements.

To filter dashboard data:

1. Open the custom dashboard and locate the filter dropdown menu at the top
2. Click on the dropdown, configure your filter settings, and click **Apply** to refine your data.

   <img  src="https://i.imgur.com/BSvI4Do.png"  width=""/>


### Delete custom dashboard

If you want to delete a dashboard, click **Actions** at the top right corner of the dashboard and select **Delete**.

<!--    ![](https://hackmd.io/_uploads/H1Yyz-pt3.png) -->

   <img src="https://i.imgur.com/4BBP5oJ.png"  width="50%"/>