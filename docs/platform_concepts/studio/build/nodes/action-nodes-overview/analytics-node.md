---
title: Analytics node
sidebar_label: Analytics node
---

Analytics node allows you to capture and track custom analytics during a chatbot conversation. It is used to push some data into the **Analytics** table within the **Data explorer** under the **Insights** section.
  
For instance, you can do a custom analytics on the "SignUp" process in a user registration flow, to analyze how many users are completing the process. The  configured name and value is displayed in the **Events** and **Event value** column.

You can filter by specific custom events, summarise by different user responses, and visualise.

   ![](https://imgur.com/ct4koHA.png)


**Configure Analytics node**

To configure Analytics node, follow these steps:

1. Add the Analytics node where you want to capture the user action. 

     ![](https://imgur.com/ZMci9HG.png)
     
2. Enter the following details:

    i. **Event**: Specify a static name or variable. This will be logged under the "Events" column in the analytics table.

   ii. **Value**: Choose a variable containing the value. This value will be logged under the **Event value** column.

    iii. **Keys**: This is an optional field. Add metadata, which will create additional columns in the analytics table. You can create multiple columns using different keys.
    
Refer to the following GIF to see how the Analytics node works:

   ![](https://imgur.com/3gAxpkx.gif)
    