---
title : Extract user responses from conversations and create custom reports
sidebar_label : Conversational details report
---

In this document, we will cover a use case where custom fields are used to track customer details obtained from the conversation.


**Conversational details that can be tracked on call**

Voice bot developers have the ability to define custom fields based on their business logic requirements, in addition to standard fields. This allows them to derive additional insights from their data. A few examples of custom details are additional phone numbers, ages, names, etc.

Examples of insights you can derive from the conversational details report: 
- Retrieve the percentage of callers who are selecting the Hindi language option.
- For an e-commerce chatbot, retrieve the percentage split between inquiries related to order status and those related to registering a complaint.


-----

## 1. Create a flow to collect and store custom details from calls

**Use-case to understand how to create reports with conversational details data**

If you are developing a voice bot for educational counseling for students across various age groups, it may be required as per company guidelines to keep track of the customer/student's age and the type of query asked. This information can be recorded as custom fields, allowing you to gain insights into the types of queries being asked by different age groups and improve performance accordingly.


### Step 1. Create a flow to store data in variables 

To store the age and query type along with the rest of the flow, follow these steps:

1. Go to **Studio** and create a flow that supports your use case.
2. In the node that collects age and query type, select **Store response in** a variable.
    ![](https://i.imgur.com/qyw4l5R.png)
3. Add a **Database** node to store all the collected details in a table.
    ![](https://i.imgur.com/oUYYcPT.png)    
> Refer to [these steps](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database)  to learn how to use the DB node.


### Step 2: Create a table to store variable data

To store data collected from flows, you need to create a table. For instance, you can create a table with two columns that collect the age and query from all calls. Follow these steps to create a table:

1. Go to **Studio** > **Database**.
2. Create a **table** with two columns.
     ![](https://i.imgur.com/4lXUJo5.png)
3. The database will store all the details obtained from the calls.
    ![](https://i.imgur.com/icLbN3u.png)

> Refer to [these instructions](https://docs.yellow.ai/docs/platform_concepts/studio/database#-1-create-table) for creating a table in Studio.

------

## 2. Download or visualize conversational details for better insights

To download this data, navigate to **Studio** > **Database**, and click on **Table actions**. From there, you can easily download the data.
![](https://i.imgur.com/ZCrHFs2.png)


You can also view this data on the data explorer, where it can be summarized, visualized, and even added as a custom dashboard for easy access to analytics.
![](https://i.imgur.com/Xyig1o0.png)


**Understand other operations on insights**

> - Check out the available actions for custom tables by visiting [this page](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables).    
> - To visualize the data collected from calls, follow the steps outlined in [this guide](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/cdr).
> - Understand other operations on [Insights modules](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights). 

