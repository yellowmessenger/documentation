---
title: Date and time validator
sidebar_label: Date and time validator
---

Date and time validator node helps validate whether date and time inputs provided during a bot conversation are valid and follow a predefined format. 


You can use this node in scenarios such as scheduling appointments, booking reservations, or managing time-sensitive information, like reminders and deadlines.

**Use case**

In a healthcare chatbot, the Date and time validator node can be used when scheduling an appointment. When the user provides a date and time for their appointment, the bot checks that the date is in the correct format (example, DD/MM/YYYY) and the time is within working hours (example, 9 AM to 5 PM). If the input is invalid, the bot prompts the user to enter a valid date and time.

**Limitation**

* This node is limited to specific formats and cannot handle unconventional or ambiguous date/time inputs (for example, natural language inputs like "next Monday").
* It requires a predefined format, so flexibility for various time zones or regional date formats may be limited.

**Configure Date and time validator node**

To configure date and time validator node, follow these steps:

1. Drag and drop the Date and time validator node to the flow editor.

2. Enter a validation message if the Date and time format is valid.

   ![](https://imgur.com/2y9xqY1.png)