---
title: Question node
sidebar_label: Question
---

Use the Question node to ask users for any kind of input—names, dates, preferences, or other details you need during a conversation.
> This node is available for voice bots also.

You can also collect PCI-sensitive information—such as card number, CVV, PIN, or expiry date—across all supported channels. When you select a PCI input type, the platform automatically encrypts the data and applies strict logging restrictions. The information is securely stored and never retained in logs or databases.

<img src="https://cdn.yellowmessenger.com/assets/yellow-docs/pci.png" width="75%"/>

#### Asking general question using Question node

To ask a question,
  1. In **Input type**, choose *Question*.
  2. In **Bot asks**, enter what the AI agent should ask.  <br/>You can also add multiple variations using **Add multiple text for randomizing**. Your agent will randomly pick one to keep the conversation natural. <br/>To dynamically fetch question from a variable, use the **Fetch from** option and choose the variable that contains the question text.


  ```json
  {
    "type": "text",
    "value": "What is your query?"
  }
  ```
## Collecting PCI Details using Question node
If you're collecting PCI-sensitive information (like card number, CVV, or expiry), select a **PCI input type**. When you do, you will see additional settings.
  * In **Input type**, choose Question to ask the user for any information.
  * In **Bot asks**, enter what the AI agent should ask. You can also add multiple variations using **Add multiple text for randomizing**. Your agent will randomly pick one to keep the conversation natural.
  * **Validator message**: Customize the message that appears if the input doesn’t meet validation rules.
  * **Additional settings** (PCI configuration): Use Additional Settings to define how PCI data is passed to your API.
    * **Encoding type**: Choose how the PCI input is encoded —`Text`, `Hexadecimal`, or `Base64`.
    * **Card number format**: Choose the format in which users are expected to enter the card number. This helps validate and correctly capture card data.
      * `XXXXXXX XXXXXX`
      * `XXXX-XXXX-XXXX-XXXX`
      * `XXXX XXXX XXXX XXXX`