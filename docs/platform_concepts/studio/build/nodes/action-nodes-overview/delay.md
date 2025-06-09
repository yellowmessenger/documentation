---
title: Delay
sidebar_label: Delay
---

Delay node allows you to pause the chatbot conversation for a certain period before moving to the next node. This delay can be set for a specific amount of time, ranging from a few minutes to several hours.

This node is used to control the timing of bot responses. It is useful for simulating real-time data like weather updates or order statuses.

**Use case**

* **Real-time data simulation**: When a user asks for live data (for example, weather updates or order statuses), the Delay node can pause the conversation to simulate the process of retrieving that data. For instance, if a user asks for the current weather, the bot can add a short delay to simulate the data retrieval, responding after a few seconds with, "Checking the latest weather in New York city" followed by the actual temperature.

**Configure Delay node**

To configure a delay node, follow these steps:

1. Drag and drop the Delay node to the workflow in the flow editor where the pause is needed.

   ![](https://imgur.com/ld3W5zn.png)
   
2. Enter the delay duration and choose between minute(s) or hour(s).

   ![](https://i.imgur.com/MLyOwwi.png)
   
* **Alternative method**: You can also configure delays individually on different nodes within the flow. Here, you can set a delay up to 5 seconds.
    
    ![](https://i.imgur.com/t8cBzXn.png)
    
Refer to the following GIF to see how the Delay node works:

   ![](https://imgur.com/486ap3r.gif)