---
title: Email node
sidebar_label: Email
---

Email node captures and validates a user’s email address during a conversation. Use this node when the AI-agent needs contact information for follow-ups, registrations, or verifications.  

The built-in validator checks if the email format is correct (`example@domain.com`) before proceeding to the next step. If the user provides an incorrectly formatted email, the AI-agent prompts them to re-enter it, ensuring the information collected is accurate and usable.

**Supported input types**

|Input Type|User Input|Accepted/Not Accepted as a valid email address|Email address processed by the platform|
|------|------|-------|------|
|number@valid email domain|12@gmail.com|Not Accepted|-|
|Text @valid email domain |1234w@gmail.com|Not Accepted|-
|nothing@valid email domain|@gmail.com |Not Accepted|-|
|Sentence (validator works on other languages too)|My email is vikash@gmail.com|Accepted|vikash@gmail.com|

**Use cases**

* **Customer support**: Could you provide an email where we can send further assistance details?
* **Order confirmation**: Please enter your email to receive a confirmation of your order.
* **Verification**: Please provide an email for verification before accessing sensitive account information.

**Confugure Email node**

To configure Email node, follow these steps:

1. Drag and drop the Email node in the flow editor.

2. Enter a message to capture the email ID of the user.
3. In **If validation fails** field, enter the message to be displayed when the user enters an invalid response and store the user response in a variable.

     ![](https://imgur.com/WERYeW8.png)
     
     
Refer to the following GIF to see how the email node works:

   ![](https://imgur.com/aMm6Juv.gif)