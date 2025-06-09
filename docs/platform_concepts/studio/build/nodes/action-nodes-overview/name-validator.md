---
title: Name validator
sidebar_label: Name validator
---

Name validator node allows you to validate the name  entered during the bot conversation do not contain any special characters. This node prevents invalid inputs during interactions.

You can use Name validator node to verify names that you capture from users during bot conversations:
* **User registration**: To ensure users provide valid names without special characters or numbers.
* **Booking systems**: When users enter names for reservations, tickets, or appointments.
* **Customer service**: For name verification during identification or authentication processes.

:::note
If you are building a multilingual bot, it is recommended to use a Question node instead of a Name node.
:::

**Use case**

In a customer onboarding chatbot, when the user is asked to provide their first and last names. The Name validator node checks that the names contain only valid alphabetic characters. If the user enters numbers or special characters, the bot will prompt the user to enter a valid name.

**Configure name validator node**

To configure name validator node, follow these steps:

1. Add a prompt node to fetch the user's first and last name and store the user response in a variable.

    ![](https://imgur.com/dGrFRgC.png)

2. Drag and drop the name validator node in the flow editor and in the **If validation fails** field, enter the message to be displayed when the user enters an invalid response.

   ![](https://imgur.com/5lzqaY8.png)
   
Refer to the following GIF to see how the Name validator node works:

  ![](https://imgur.com/VMZw2vO.gif)