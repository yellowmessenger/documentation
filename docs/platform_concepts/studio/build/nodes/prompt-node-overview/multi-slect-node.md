---
title: Multi-select node
sidebar_label: Multi-select
---

Multi-select node allows users to choose multiple options from a predefined list during a single interaction. For example, in a food delivery chatbot, users might select multiple toppings for a pizza or several dishes for an order. Similarly, in a survey bot, they could pick multiple interests like "Technology", "Travel", and "Health".

This node makes it ideal for scenarios like shopping carts, preferences, or bulk actions in workflows.

:::note
This node is supported for mobile SDKs (Flutter, Android , iOS) and web.
:::

#### Limitation
* This node is not supported for messaging platforms such as WhatsApp, Instagram, Facebook, Microsoft Teams, and Slack.


#### Use cases of multi-select node

* **Product recommendations**: Allows you to select multiple products or categories based on your preferred choice.
* **Service bookings**: Allows you to choose multiple services or time slots during booking.

#### Configure static multi-select options

To configure the multi-select node, follow these steps:

1. Drag and drop the multi-select node into the flow editor at the point where you want to display options to users.

    ![](https://i.imgur.com/VjaCLRQ.png)

2. Add the buttons that you want to display it to the users. Success and Fallback cases must be handled by connecting them to other nodes to continue the flow.

3. Click **Configure buttons** to customize the buttons.

    <img  src="https://i.imgur.com/3emo5LM.png"  alt="drawing"  width="70%"/>

   * **Button value**: Set a value for each button, which can be stored in a variable or inserted to the database.
   * **Text aliases**:  Define alternative phrases or abbreviations that users might type in place of the button text. For example, if the button text is "number," add aliases like "num" or "no" so the AI-agent can recognize these inputs
   * **Analytics**: Configure any analytics tracking for this node to gather insights on button selections and user interactions.
   * **Prefix image**: Add an image URL to display an icon before the button text if needed.

   ![](https://i.imgur.com/nbIDokS.png)
   
### Configure dynamic multi-select options

To configure the dynamic multi-select node, follow these steps:

1. Go to the Multi-select node and click the highlighted icon to copy the sample variable.

      ![](https://i.imgur.com/kIDGt4e.png)
      
2. Go to the **Functions** section and paste the sample variable into the **Resolve** section.
     
   ![](https://i.imgur.com/zs0hpQK.png)
     
3. In the flow builder section, add a **Function** node and select the function name you created in the previous step.
      ![](https://i.imgur.com/LEJ0cv1.png)

4. Create a variable of type object and select it to store the function’s response.

    ![](https://i.imgur.com/CxVMV9I.png)
    
5. Add a Multi-select node and select the variable created in the previous step

    ![](https://i.imgur.com/falvQss.png) 
    
6. Preview the flow to test and view the dynamic multi-select node.

   <img  src="https://i.imgur.com/t78xhFv.png"  alt="drawing"  width="40%"/>
    
   
Refer to the following GIF to see how the Multi-select node works:
  
  ![](https://i.imgur.com/a6ZjmrX.gif)
 
 
 
 
 
 