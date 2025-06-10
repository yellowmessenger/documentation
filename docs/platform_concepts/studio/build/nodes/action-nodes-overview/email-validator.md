---
title: Email validator node
sidebar_label: Email validator
---

Email validator node simplifies the process of collecting and verifying email addresses from users in a chatbot. This node has a built-in validation mechanism that automatically checks if the email address entered by a user adheres to standard email formatting conventions, such as containing an "@" symbol and a domain name (for example, rio@gmail.com). 

This eliminates the need for bot developers to create complex regular expressions for email validation manually.

This node is used whenever email addresses or phone number are required in the chatbot interaction, especially in forms, registration flows, or customer support queries, to ensure that the email address is accurate and valid.

**Sample Use case**

A chatbot is designed to register users for an event by asking for their email addresses to send confirmation details.

When a user enters an email, the Email Validator checks if it’s in the right format (like having an "@" symbol and a domain). If the email is valid, the chatbot replies, "Thank you! Your registration details will be sent to your email." If the email is invalid, the chatbot prompts the user to enter a correct email address.


**Configure Email validator node**

To configure email vlaidator node, follow these steps:

1. Drag and drop the Email validator node in the flow editor.

2. Enter the message that will appear if the email validation fails, guiding the user to re-enter a valid email.

    ![](https://imgur.com/hTe7ccn.png)

   Refer to the following GIF to see how the Email validator node works.

   ![](https://imgur.com/2TboWFj.gif)