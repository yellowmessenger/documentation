---
title: Phone validator node
sidebar_label: Phone validator
---

Phone validator node is used to collect and validate phone numbers from users in a chatbot conversation. This node ensures that the entered phone number adheres to standard formatting rules like the correct number of digits. The node automatically checks missing digits or invalid number.

Phone validator node is used when phone numbers are used for important actions like sending SMS notifications or contacting users for support. This node ensures that only valid and correctly formatted phone numbers are collected from users.

**Use cases**

* **Event registration**: A chatbot asks users for their phone numbers to send SMS event reminders. The Phone validator node checks the number to make sure it is valid.
* **Account creation**: During account setup, a chatbot asks for a phone number for two-factor authentication. The Phone validator ensures the number is correct before sending a verification code.
* **Customer support**: A support bot collects phone numbers for follow-up service. The Phone validator ensures the numbers are formatted correctly so customer support can easily reach the users.

**Configure Phone validator node**

To configure Phone validator node, follow these steps:

1. Drag and drop the Phone validator node in the flow editor.

2. Select a country code and enter a message that prompts the user to provide valid phone number.

    ![](https://imgur.com/wE3VKDH.png)

Refer to the following GIF to see how the Phone validator node works.

   ![](https://imgur.com/g0qfFsY.gif)