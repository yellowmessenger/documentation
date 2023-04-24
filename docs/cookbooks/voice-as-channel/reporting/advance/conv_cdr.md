---
title : Create flows to combine call details and conversational details for analysis
sidebar_label : CDR & custom data analysis
---

This document outlines the application of **custom fields** and **call detail report** parameters for customer tracking purposes.

Along with standard fields present in [CDR](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/advance/cdr) and conversational data ([custom fields](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/advance/convdata)), voice bot developers can define fields based on their business logic requirements.

**Use-case:** 

To analyze both call details and conversational details for certain use cases, you can create a flow that integrates data from both sources. By doing so, you can gain insights by analyzing the combined data.

For example, if you are developing a voice bot for medical counseling aimed at different age groups, it may be necessary to track the age of customers, the nature of their queries, and the length of their calls, in accordance with company guidelines. You could record the customer's age and query as custom fields, while the call duration can be automatically tracked by CDR. By combining both sources of data, you could create a dashboard that is tailored to this use case.

---

To accomplish use cases that involve using both conversational data and CDR data, three steps need to be followed:
1. Set up a flow that can **collect and store** custom details from the conversation.
2. **Create a callbackStatus** event that can retrieve CDR data once the call has ended.
3. **Merge** the CDR data and custom fields into a table for analysis.

![](https://i.imgur.com/026bBkJ.png)


-----

## 1. Call data collection and storage using variables

To store the age and query type along with the rest of the flow, follow these steps:

1. Go to **Studio** and create a flow that supports your use case.
2. In the node that collects age and query type, select **Store response in** a global variable.
    ![](https://i.imgur.com/qyw4l5R.png)
> Store the custom variables in a **global variable** so that it can be used in other flows. 


------



## 2. Create a callbackStatus event

To streamline call management, create a custom event named `callbackStatus`. You can follow the steps provided [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-events) to create a custom event. Once you've created the event, verify that its status is set to **Active**.
 
![](https://i.imgur.com/TA01UPR.png)


#### Functionality of callbackStatus custom event

The `callbackStatus` object is a container that holds important CDR data and is dispatched to the platform immediately after a call is disconnected. In addition to this, an event is also dispatched to the platform as soon as the call is disconnected, which can be utilized by bot developers to receive the 'callbackStatus' JSON object.

------

## 3. Merge and analyse CDR and conversation data post-call disconnection

1. Create a new flow from scratch by following the steps provided [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow).
2. On the start node, add an [event trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#trigger-flow-using-event) by selecting **Event** as the trigger and `callbackStatus` as the value. This will ensure that the flow executes when the call has ended as per the backend logic. See the image below for reference.
    ![](https://i.imgur.com/5xbfRqM.png)
3. Add a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables) action node to retrieve CDR-related entries.
    ![](https://i.imgur.com/8wBb4Bf.png)
4. Add a database node to combine CDR and custom fields into one table. Refer to the steps outlined [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) to learn how to use the DB node.
    ![](https://i.imgur.com/yuogCEP.png)
    :::info
    **Pre-requisite** 
    Before using this flow, you must create a table to store the collected data. For example, you can create a table with three columns to store the age, query, and call duration for each call. Here are the steps to create a table:
    1. Go to **Studio** > **Database**.
    2. Create a new table with three columns and mark all of them as Searchable. Refer to [these instructions](https://docs.yellow.ai/docs/platform_concepts/studio/database#-1-create-table) for creating a table in Studio.
    ![](https://i.imgur.com/wWAPpnu.png)
    All the information gathered from the calls will be accessible in the table. 
    ![](https://i.imgur.com/OXqQoHT.png)
    :::


------

## 4. Download or visualize call  details for better insights

You can find all the information related to your use case, including data from both CDR and custom fields, on the table.

To download this data, navigate to **Studio** > **Database**, and click on **Table actions**. From there, you can easily download the data.
![](https://i.imgur.com/bZZlNeW.png)

You can also view this data on **Insights** > **Data explorer**, where it can be summarized, visualized, and even added as a custom dashboard for easy access to analytics.
![](https://i.imgur.com/Xyig1o0.png)



**Understand other operations on insights**

> - Check out the available actions for custom tables by visiting [this page](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#-3-create-custom-tables).    
> - To visualize the data collected from calls, follow the steps outlined in [this guide](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/advance/cdr#1-visualize-call-detail-report).
> - Understand other operations on [Insights modules](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights). 

