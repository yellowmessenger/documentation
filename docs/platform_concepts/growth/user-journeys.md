---
title: User journey visualization
sidebar_label: User journey
---

In this article, you will learn about the various features available for the visualization of user flow(/journey), namely: 
1. [Understand the flows your users are taking](#1)
2. [View steps inside each flow to know where the users switched/dropped off](#2)
3. [Visualize insights of each flow](#3)


- This can be found in **Insights** > **User journeys** > **User journey visualization**.

![](https://i.imgur.com/GPQooDP.png)


User journey visualization enables you to view how your users are moving across different [flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) when conversing with the bot. You can identify major points where users are dropping off or changing paths, and make changes in bot design to improve overall engagement and conversion.


Some high-level insights you can derive from this section are:

1. Various paths are taken by the users.
2. Identify major points where users are dropping off or changing paths.
3. Help our customers build a hypothesis for adding/making any changes in the bot journeys.
4. Improve engagement & journey completion rate.


----------

## <a name="1"></a> 1. Understand user flows

Follow the below steps to understand how to visualize the user journey: 


1. On the user journey visualization page, you will find the below flowchart. This chart will consist of the start node followed by all the flows available in your bot. 

![](https://i.imgur.com/jLqm2y7.png)

2. **Start**: This is the start of the flow chart. Paths are created for continued bot-user sessions until there is a 30 minutes stretch of inactivity. This session definition differs from the standard definition used across the dashboard. This is for more accurate visualizations. 

![](https://i.imgur.com/m1UlUv4.png)

3. Click **-** on the flow component and you can view the connected flows. By placing the cursor on any of the flow, you can view the following parameters: 



| label       | Description                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------- |
| **User Dropped** | This means the user got dropped off the chat window or did not respond for a very long time |
|**Flow completion rate**|Total times a flow was completed / total times it was triggered|
|**Flow dropped rate**|Percentage of times users dropped off the chat|
|**Flow switched rate** |Percentage of times users switched paths between two flows|

:::note

**What do the numbers above each flow indicate?**

Let us take the below example (**Free trial subscription** flow **1.12%(7)**) to understand these numbers. 
<img src="https://i.imgur.com/ZXkkCi5.png" alt="drawing" width="80%"/>


This means, out of 100% of the sessions which got triggered on the chat, 1.12 % (~ 7) times people went to the Free trial subscription flow directly after starting the session.
* This does not mean 7 users went through this flow. 
* This also does not mean that only 7 times the  Free trial subscription flow was triggered. 
* The flow was triggered 7 times directly after starting the session. This does not include the numbers for cases where this flow was triggered at a later stage.
:::

### <a name="2"></a> 1.1 View steps inside the flow


This modal helps you visualize how users have moved from one step to another inside a flow, and where they have dropped off, switched, or completed their flow. The option **View steps** can be accessed below each flow when that respective flow is open. 

<img src="https://i.imgur.com/0yv7SxV.png" alt="drawing" width="80%"/>

This chart indicates the path taken after entering this flow, following can be monitored by the components within:

1. **Flow switched**: This means the user switched from flow A to flow B.
2. **Flow completed**: This denotes the completion of the flow. It might take longer for certain users to complete the flow based on the steps in the flow and their responses to it.
3. **User dropped**: This means the user got dropped off the chat window or did not respond for a very long time.

![](https://i.imgur.com/QFfzzEQ.png)

------

## <a name="3"></a> 2. Visualization insights

Widget with actionable insights around good/poor performing flows, and steps with maximum drop-offs, switches, and agent transfers. 
- This is to automate the analysis of Journey Visualisation and help you identify areas of concern quickly, to improve bot performance. 
- You can further analyze the flows/steps highlighted and visit Builder to make necessary bot design changes. You can also check week-on-week improvement numbers to understand the impact of the changes made. 
- The analysis of user journey visualization has been automated to provide direct actionable insights, available on the right side of the section.

![](https://i.imgur.com/Cj46e5s.png)

1. View insights of the following by selecting a value:
    * **Poor performing flows**
    * **Good performing flows**
    * **Steps with maximum drop off’s**
    * **Steps with maximum journey switches**
    * **Steps with maximum agent transfers**


2. The related steps and flows along with their relevant data points would be listed out 
    - Take an example of **Steps with maximum drop offs**. The step names along with their related flow names are listed for which the drop-off rate is high.
    <img src="https://i.imgur.com/N9o97iU.png" alt="drawing" width="80%"/>
    - Select any of the flow names. For example - Quick replies.
    <img src="https://i.imgur.com/UKXjx9H.png" alt="drawing" width="80%"/>
    - You will reach the steps inside the floor model where you can see how the users have traversed within that particular flow.
    - The step with the highest drop rate is highlighted for quick and easy reference.
    <img src="https://i.imgur.com/x3z01fI.png" alt="drawing" width="100%"/>
    -  Click **Show steps** on top right to get redirected to **Studio** > **Builder** to make necessary changes in the flow design.
    <img src="https://i.imgur.com/lHb8Ko9.png" alt="drawing" width="80%"/>



:::note

Important pointers about the visualization section: 

- This can be viewed for all channels or the active channels on your bot. 

![](https://i.imgur.com/jE0qcDE.png)

- This can be viewed for a specific range of dates. 

![](https://i.imgur.com/tpjMXBl.png)

- The data is distributed on a ***session level***.
- Individual user paths cannot be visualized here.
- All the numbers mentioned inside the black boxes denote the number of ***user hits and not the unique users***.
- journeyVizOther(~3.12%) is the number of hits where paths did not follow any pattern.


![](https://i.imgur.com/RBM5nLL.png)
:::


