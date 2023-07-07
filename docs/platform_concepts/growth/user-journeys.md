---
title: User journey visualisation
sidebar_label: User journey visualisation
---
This article introduces the different features available for visualising user [flows/journey](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys). They are:
1. [Understanding the paths users are taking](#1): This feature allows you to gain insights into the routes users follow while interacting with the bot. By understanding the various flows, you can better comprehend user behavior.
2. [Viewing steps within each flow](#2): With this feature, you can examine individual steps within a flow to determine where users are switching or dropping off. This information helps you pinpoint critical points in the user journey.
3. [Visualising insights for each flow](#3): By visualising insights for each flow, you can gather valuable information about user interactions. This feature enables you to analyze the performance of different flows and identify areas for improvement.

-----

## User journey viz. overview 


User journey visualisation provides a comprehensive view of how users navigate through different flows during conversations with the bot. It allows you to detect significant drop-off or path changes, allowing you to make design adjustments that enhance engagement and conversion rates.

### Navigate to user journey visualisation

To access the User journey visualisation feature, follow these steps:

1. Go to **Insights** in the platform.
2. Select **User journeys**.
3. Choose **User journey visualisation**.

![](https://i.imgur.com/GPQooDP.png)



### Use cases of visualisation 

- **Analyzing user paths**: You can analyze the different paths users have taken during their interactions.
- **Identifying drop-off and path changes**: This feature helps you identify major points where users may be dropping off or deviating from expected paths.
- **Assisting with hypothesis building**: User journey visualisation aids customers in formulating hypotheses for making changes or additions to bot journeys.
- **Improving engagement and journey completion**: By utilizing the insights gained from user journey visualisation, you can enhance user engagement and increase the rate of journey completion.

### Filter data for channels 

This section can be viewed for all channels or specifically for active channels in your bot.

![](https://i.imgur.com/jE0qcDE.png)

### Filter data for a time period 

You can view data for a specific date range by selecting the dates on the calendar. 

![](https://i.imgur.com/tpjMXBl.png)


-------

## <a name="1"></a> Understand the user journey

To understand how to visualise the user journey, follow the steps below:

1. When you open the user journey visualisation page, you will see a flowchart. This chart includes a start node followed by all the available flows in your bot.

    ![](https://i.imgur.com/jLqm2y7.png)

2. **Start**: This represents the beginning of the flowchart. Paths are created to track ongoing bot-user sessions until there is a 30-minute period of inactivity. 

    > This session definition differs from the standard definition used across the dashboard. This is for more accurate visualisations. 


    ![](https://i.imgur.com/m1UlUv4.png)

3. Click the **-** sign on a flow component to view the connected flows. By hovering over any flow, you can see the following parameters:

    | label       | Description                                                                                  |
    | ------------ | -------------------------------------------------------------------------------------------- |
    | **User Dropped** | Indicates when the user has dropped off the chat window or has not responded for an extended period of time |
    |**Flow completion rate** | Total number of times a flow has been successfully completed divided by the total number of times it was triggered. |
    |**Flow dropped rate** | Percentage of times users dropped off during the flow. |
    |**Flow switched rate** | Percentage of times users switched paths between two flows. |

#### What do the numbers above each flow indicate?

Take the example of the **Free trial subscription** flow, with a rate of **1.12% (7)**:

<img src="https://i.imgur.com/ZXkkCi5.png" alt="drawing" width="80%"/>

This means that out of 100% of sessions triggered in the chat, approximately **1.12%** (around 7) of them directly entered the **Free trial subscription** flow after starting the session.

- This doesn't imply that only 7 users went through this flow.
- This doesn't mean that the **Free trial subscription** flow was triggered only 7 times.
- The flow was triggered 7 times directly after starting the session, excluding cases where it was triggered at a later stage.



### <a name="2"></a> View steps within the flow

This modal allows you to visualise how users progress from one step to another within a flow, as well as where they drop off, switch paths, or complete the flow. The option **View steps** is available below each flow when the respective flow is open.

<img src="https://i.imgur.com/0yv7SxV.png" alt="drawing" width="80%"/>

This chart illustrates the path taken after entering the flow, and the following components can be observed:

1. **Flow switched**: Indicates when users switch from Flow A to Flow B.
2. **Flow completed**: Indicates the completion of the flow. Completion time may vary for different users based on the steps within the flow and their responses.
3. **User dropped**: Indicates when the user has dropped off the chat window or has not responded for an extended period of time.


![](https://i.imgur.com/QFfzzEQ.png)

------

## <a name="3"></a> visualisation insights

The user journey visualisation section provides a widget with actionable insights regarding the performance of flows and steps, including maximum drop-offs, switches, and agent transfers. 
- The purpose of automating the analysis of user journey visualisation is to help you quickly identify areas of concern and improve bot performance. 
- The actionable insights provided in this section allow you to analyze the highlighted flows and steps, make necessary bot design changes in the **Studio/Builder**, and assess the impact of these changes by checking week-on-week improvement numbers. 
- This automated analysis aims to streamline the process and provide you with direct insights to facilitate effective optimization of your bot. 
- These insights are available on the right side of the section.


![](https://i.imgur.com/Cj46e5s.png)

1. To view insights for the following categories, select a value:
    * **Poor performing flows**
    * **Good performing flows**
    * **Steps with maximum drop off’s**
    * **Steps with maximum journey switches**
    * **Steps with maximum agent transfers**


2. The relevant steps and flows, along with their corresponding data points, will be listed:
    1. Take the example of **Steps with maximum drop-offs**. The step names, along with their related flow names, are listed when the drop-off rate is high.
    <img src="https://i.imgur.com/N9o97iU.png" alt="drawing" width="80%"/>
    2. Select any of the flow names, such as **Quick replies**.
    <img src="https://i.imgur.com/UKXjx9H.png" alt="drawing" width="80%"/>
    3. You will be directed to the steps within the flow model, where you can see how users have progressed within that particular flow.
    4. The step with the highest drop-off rate is highlighted for quick and easy reference.
    <img src="https://i.imgur.com/x3z01fI.png" alt="drawing" width="100%"/>
    5. Click **Show steps** on the top right to be redirected to **Studio > Builder** to make necessary changes in the flow design.
    <img src="https://i.imgur.com/lHb8Ko9.png" alt="drawing" width="80%"/>



:::note

- The data is distributed at a **session level**.
- Individual user paths cannot be visualised here.
- The numbers inside the black boxes represent the **number of user hits, not unique users**.
- **journeyVizOther (~3.12%)** represents the number of hits where paths did not follow any specific pattern.
    ![](https://i.imgur.com/RBM5nLL.png)
:::


