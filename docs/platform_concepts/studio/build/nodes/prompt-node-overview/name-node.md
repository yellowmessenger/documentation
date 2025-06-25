---
title: Name node
sidebar_label: Name
---

The Name node collects and verifies a user's name during a conversation. It prompts users to enter their name and checks the input to ensure it includes only alphabetic characters. If users enter numbers or special symbols, the AI-agent asks them to provide a valid name. 

> **Example**:

> **Support**: "Hi! May I know your name to find your account?"<br/>
> **Booking and reservations**: "Can I get your name for the reservation?"<br/>
> **Account setup**: "What name would you like to register with?"

:::note
If you are building a multilingual bot, it is recommended to use a Question node instead of a Name node.
:::


Following are the supported input types:

|Input Type|User Input|Accepted/Not Accepted as a valid name|Name processed by the platform|
|------|------|-------|------|
|Only numbers|139344|Not Accepted|-|
|Numbers + Special characters|13143=?|Not Accepted|-|
|At least one alphabet, Numbers + Special character|1243242swqw=?|Accepted|1243242swqw=?|
|Gibberish|scsadf|Accepted|scsadf|
|Sentence|My Name is Vikash|Accepted|Vikash|
|Sentence in any language |मेरा नाम विकाश कुमार |Accepted|काश कुमार|

**Configure name node**

To configure name node, follow these steps:

1. Drag and drop the Name node in the flow editor.

    ![](https://imgur.com/qa5nAC3.png)

2. Enter message to capture the first and the last name of the user. 
3. In **If validation fails**, enter the message to be displayed when the user enters an invalid response and store the user response in a variable.

  ![](https://imgur.com/qa5nAC3.png)
   
Refer to the following GIF to see how the Name node works:

  ![](https://imgur.com/4g07yHl.gif)