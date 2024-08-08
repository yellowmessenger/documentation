---
title : Create flows to combine call and conversational details for analysis
sidebar_label : Call & conversational details analysis 
---

This document outlines the application of **conversational details report** and **call detail report** parameters for customer tracking purposes.

Along with standard fields present in [CDR](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/cdr) and [conversational details report](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/convdata), voice bot developers can define fields based on their business logic requirements.

Examples of insights you can derive from the call and conversational details reports: 
- Retrieve average call duration for callers from Gujarat state by combining **duration** fields from CDR table and **state** name from conversational details report table.
- Retrieve the success rate for answered calls with Hindi language selection by combining **call status** field from CDR table and selected **language** from conversational details report table.

------------

**Use-case:** 

To analyze both call details and conversational details for certain use cases, you can create a flow that integrates data from both sources. By doing so, you can gain insights by analyzing the combined data.

For example, if you are developing a voice bot for medical counseling aimed at different age groups, it may be necessary to track the age of customers, the nature of their queries, and the length of their calls, in accordance with company guidelines. You could record the customer's age and query as custom fields, while the call duration can be automatically tracked by CDR. By combining both sources of data, you could create a dashboard that is tailored to this use case.


To accomplish use cases that involve using both conversational data and CDR data, three steps need to be followed:
1. Set up a flow that can **collect and store** custom details from the conversation.
2. **Create a callbackStatus** event that can retrieve CDR data once the call has ended.
3. **Merge** the CDR data and custom fields into a table for analysis.

![](https://i.imgur.com/026bBkJ.png)


-----

## Step 1. Call data collection and storage using variables

To store the age and query type along with the rest of the flow, follow these steps:

1. Create a flow on Automation using prompts to  store conversational data in variables.
2. Create a table with required columns to store variable data. 
3. Use database nodes to send variable data to a table. 

> [Refer this](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/convdata#1-create-a-flow-to-collect-and-store-custom-details-from-calls) for elaboration on these 3 steps. 


------



## Step 2. Create a callbackStatus event

To streamline call management, create a custom event named `callbackStatus`. You can follow the steps provided [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-events) to create a custom event. Once you've created the event, verify that its status is set to **Active**.
 
![](https://i.imgur.com/TA01UPR.png)


#### Functionality of callbackStatus custom event

The `callbackStatus` object is a container that holds important CDR data and is dispatched to the platform immediately after a call is disconnected. In addition to this, an event is also dispatched to the platform as soon as the call is disconnected, which can be utilized by bot developers to receive the 'callbackStatus' JSON object.

------

## Step 3. Merge  CDR and conversation data post-call disconnection

1. Create a new flow from scratch by following the steps provided [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow).
2. On the start node, add an [event trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#trigger-flow-using-event) by selecting **Event** as the trigger and `callbackStatus` as the value. This will ensure that the flow executes when the call has ended as per the backend logic.     
    ![](https://i.imgur.com/5xbfRqM.png)
3. Create new [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-3-create-a-variable) to retrieve CDR-related entries. For example, to retrieve **Call duration**, create a variable *Duration* and add value as `{{variables.EVENT_DATA.duration}}`. [Click here](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/variables#variables-available-for-disconnected-calls) for detailed explaination. 
4. Add a [database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node to combine CDR and conversational detail fields [into one table](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/convdata#step-1-create-a-flow-to-store-data-in-variables).   
    - Add type as **Update**. Select the same table name. 
    - Filter for **SID**.
    - Add CDR fields/variables. 

    ![](https://hackmd.io/_uploads/rkdLGYiV2.png)
   


------

## Step 4. Download or visualize call  details for better insights

You can find all the information related to your use case, including data from both CDR and conversational detail fields, on the table.

1. To download this data, navigate to **Automation** > **Database**, and click on **Table actions**. From there, you can easily download the data.

![](https://i.imgur.com/bZZlNeW.png)

2. You can also view this data on **Insights** > **Data explorer**, where it can be summarized, visualized, and even added as a custom dashboard for easy access to analytics.

![](https://i.imgur.com/Xyig1o0.png)


---------

**Understand other operations on insights**

- Check out the available actions for custom tables by visiting [this page](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables).    
- To visualize the data collected from calls, follow the steps outlined in [this guide](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/cdr).
- Understand other operations on [Insights modules](https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights). 
