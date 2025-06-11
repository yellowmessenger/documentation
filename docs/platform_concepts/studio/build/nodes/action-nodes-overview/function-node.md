---
title: Function node
sidebar_label: Function
---

The Function node allows you to define and execute custom logic within a flow. It can process input data, perform calculations, transform information, or handle complex logic that other flow nodes cannot manage. After execution, the Function node can either store or retrieve data as needed, making it available for use in subsequent nodes.

**You can use the Function node when you need to**:
* Perform custom logic that is not available through existing nodes in the workflow.
* Manipulate, transform, or calculate data based on inputs from the workflow.
* You need to process input data dynamically before passing it to the next stage in the flow.
* Implement conditional logic or complex decision-making that cannot be handled by the built-in nodes.

**Use cases**

* **Data transformation**: Use the Function node to clean, combine, or transform raw data from sources like user inputs or APIs. It handles tasks such as converting date formats, concatenating strings, or normalizing values.
* **Complex calculations**: In financial applications, the Function node performs complex arithmetic operations like calculating compound interest. You can input values such as the principal amount, interest rate, and time period, and it will handle the calculations.
* **Conditional logic**: Function node evaluates conditions and dynamically sets variables based on these conditions. For instance, it can determine discount rates based on the total order value or select execution paths based on a user’s status (VIP or regular customer).
* **API response parsing**: If you are working with JSON or XML responses from external APIs, the Function node can parse the response and extract specific data points to store in variables for future use.

#### Configure Function node

Before configuring the Function node, you need to create the functions that you require. This involves defining the custom logic and operations that your flow will execute effectively to meet your specific needs. For more detailed information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/code).

To configure function node, follow these steps:

1. In the flow editor, drag and drop the Function node  at the point where you want to add the custom logic.

     ![](https://imgur.com/Kq6Ntic.png)

2. Select the function that you created in the Functions section and add the variable in which you want to store the function response.

    ![](https://imgur.com/0qtrU8s.png)
    
Refer to the following GIF to see how the Function node works:
 
   ![](https://imgur.com/cfszWMv.gif)