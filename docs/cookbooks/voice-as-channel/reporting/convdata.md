---
title : Extract user responses from conversations and create custom reports
sidebar_label : Conversational details report
---

In this document, we will cover a use case where custom fields are used to track customer details obtained from the conversation.


**Conversational details that can be tracked during the call**

Voice bot developers have the ability to define custom fields based on their business logic requirements, in addition to standard fields. This allows them to derive additional insights from their data. A few examples of custom details are additional phone numbers, ages, names, etc.

Examples of insights you can derive from the conversational details report: 
- Retrieve the percentage of callers who are selecting the Hindi language option.
- For an e-commerce chatbot, retrieve the percentage split between inquiries related to order status and those related to registering a complaint.


-----

## 1. Create a flow to collect and store custom details from calls

**Use-case to understand how to create reports with conversational details data**

If you are developing a voice bot for educational counseling for students across various age groups, it may be required as per company guidelines to keep track of the customer/student's age and the type of query asked. This information can be recorded as custom fields, allowing you to gain insights into the types of queries being asked by different age groups.


### Step 1. Create a flow to store data in variables 

To store the age and query type along with the rest of the flow, follow these steps:

1. Go to **Automation** and create a flow that supports your use case.
2. In the node that collects age and query type, select **Store response in** a variable.
    ![](https://i.imgur.com/qyw4l5R.png)

--------


### Step 2: Create a table to store variable data

To store data collected from flows, you need to create a table (this is a prerequisite to step#3). Follow these steps:

1. Go to **Automation** > **Database**.
2. Create a **table**. Add field names and mark them as **Searchable**.
    ![](https://hackmd.io/_uploads/HyhZ1toVh.png)
3. The database will store all the details obtained from the calls.
    ![](https://hackmd.io/_uploads/SkG2Bus4h.png)

> [Learn more](https://docs.yellow.ai/docs/platform_concepts/studio/database#-1-create-table) about creating a table in Automation.

------

### Step 3: Use DB node to send variable data to a table

To store all the collected details in a table, add **database** nodes to the flow(step#1) after collecting each variable, using the following steps:

1. Add a **database** node at the beginning of the call to send the system-generated unique identifier (**SID**) value to the table.
    * Select the type as **Insert** and add the table name.
    * Under records, add the field as **SID** (column name) and the value as **mp_sid** (the custom variable name you have created for the SID).

    ![](https://hackmd.io/_uploads/B1P3_uoE3.png)

:::info
SID is a voice data variable which is available immediately after the call is initiated and can be used as a filter for subsequent database nodes.
> [Learn more](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/variables) about voice data variables. 
:::

2. Add **database** nodes after storing responses in a variable.
    * Select the type as **Update** and add the table name.
    * Add a **filter** `Where SID = mp_sid` to ensure that the data is added only if the SID is the same.
    * Add variables, for example, after collecting the Age, add the Age value to the table.

    ![](https://hackmd.io/_uploads/BJw0qOs43.png)

To ensure that you have the customer details even if the customer disconnects in the middle, add a database node after every prompt node to send the collected data to the table. This data can then be used to reach out to the customer or as a survey.

> [Learn more](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) about the DB node.


-----------------






## 2. Download or visualize conversational details for better insights

1. To download this data, navigate to **Automation** > **Database**, and click on **Table actions**. From there, you can easily download the data.

![](https://i.imgur.com/ZCrHFs2.png)


2. You can also view this data on the **Data explorer**, where it can be summarized, visualized, and even added as a custom dashboard for easy access to analytics.

![](https://i.imgur.com/Xyig1o0.png)

---------

**Understand other operations on insights**

- Check out the available actions for custom tables by visiting [this page](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables).    
- To visualize the data collected from calls, follow the steps outlined in [this guide](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/cdr).
- Understand other operations on [Insights modules](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights). 

