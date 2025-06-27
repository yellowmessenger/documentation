---
title: Outbound notification node
sidebar_label: Outbound notification
---

Outbound notification node allows you to send notifications during a bot conversation via SMS, Email, Whatsapp and Voice. For more information on how to setup outbound campaigns, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).

You can use this node when you want to send important messages, updates to users, promotional messages, or campaign-related content (for example, discounts, new product launches) via SMS, Email, WhatsApp, or Voice. 




**Use case**

* **Order confirmation**: When a user has placed an order, the bot uses the Outbound notification node to send an SMS or WhatsApp message with the order details
* Shipping updates: Once the order is shipped, the bot sends an email or voice notification with the shipping details and tracking information.
* **Promotional campaigns**: You can use this node to send WhatsApp or Email campaigns promoting discounts, special offers, or new products.

## Configure Outbound notification node

### Prerequisites
* Ensure that an [email template is created](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/email-template).
* The communication channels (SMS, Email, WhatsApp, etc.) must be properly set up for the Outbound Notification node to work.

### Steps to configure outbound notifications
To configure Outbound notification node, follow these steps:

1. Drag and drop the Outbound notification node in the flow editor.

      ![](https://imgur.com/NxyEN3A.png)
      
2. Enter the following options:
    * **Type**: Select the type of communication you want to send (SMS, Email, WhatsApp, or Voice). For this scenario, choose Email.
    * **Sender**: Choose the sender ID from which the email will be sent.
    * **To**: Select the variable holding the user’s email address.
          <img src="https://imgur.com/YivlZUa.png" alt="drawing" width="80%"/>
   * **CC**: Choose recipients for CC (Carbon Copy) if needed.
   * **BCC**: Choose recipients for BCC (Blind Carbon Copy) if needed.
   * **Select template**: Pick a template to use for your communication.

**Additional channel configurations**:
     
When configuring the WhatsApp communication channel in the Outbound Notification node, the following options are available:

Option | Description
------ | ----------
Sender | Choose the sender ID that will be used to send the WhatsApp message.
To | Select the appropriate variable containing the recipient's details, such as their phone number. 
Select template | Select a template to use for your communication.

When you select SMS type, the following options are displayed:
  
Option | Description
------ | ----------  
Profile | Select the sender ID for the SMS notification. This is applicable only for SMS notifications sent within India.
To | Choose the variable containing the recipient's details, such as the SMS phone number.. 
Select template | Select the template that you have created for sending the SMS.

When you select Voice type, the following options are displayed:

Option | Description
------ | ---------- 
Sender | Choose the sender ID from which you want to send the voice communication.
To | Select the variable containing the recipient details, such as the SMS phone number or email address.
Text type | Select Text or SSML (Speech Synthesis Markup Language) from the dropdown.
Text | Enter the text content that will be converted into speech.
TTS Engine | Select the Text-to-Speech engine, such as Microsoft Azure, Google Wavenet, or Amazon Polly from the drop-down.
Language| Enter the language for the voice communication.
Voice ID | Input the voice ID characters. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML".
Speed | This value defines how fast the bot must converse. This value can be 0.9 - 1.5 for the bot to soundly humanly. You can add this for Microsoft if text_type = "text" and for Google if text_type = "text" and "SSML".
Pitch | Pitch value can be any decimal value depending on the base of voice required, 0 is ideal. You can add this for Microsoft if text_type = "text" and for Google for text_type = "text" and "SSML".
Capture DTMF length	| Enable this option if the DTMF is to be collected on the specific node.
DTMF digital length	| Enter the length of characters to be captured. Example: For an Indian phone number, it is 10.

Refer to the following GIF to see how the outbound notification works:

  ![](https://imgur.com/w1nY1xx.gif)



## Configrure Outbound notification node for WhatsApp notification


You can use the **Outbound notification** node to send WhatsApp template messages to end users as part of a flow. 


### Prerequisites

Before using this node, ensure the following requirements are met:

* A **WhatsApp template message** must be approved by **Meta (Facebook)**.
  Learn how to create and submit templates:
  [Create WhatsApp Templates →](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/whatsapptemplate#docusaurus_skipToContent_fallback)

* Your bot must be connected to a **WhatsApp Infrastructure**. Without this, the WhatsApp option will not be available in the node.


### Steps to configure

1. **Drag and drop** the **Outbound notification node** in your flow.

2. **Set the Notification type** to `WhatsApp`.

3. **Select the sender**:  Choose the bot’s connected **WhatsApp phone number**.

   * Ensure it matches the one registered in your WhatsApp Infra.

4. **Specify the recipient (`To`)**:

   * Use a **flow variable** that stores the user’s phone number.
   * This allows dynamic delivery to individual users.

5. **Choose a template**:

   * Select an approved WhatsApp template from the dropdown. Only templates associated with the connected WhatsApp sender will appear.

6. **Configure template parameters**:

   * Dynamic fields (e.g., name, date, order ID) can be mapped using:

     * Flow variables (created in the same flow).
     * Global variables (reusable across flows).
   * Ensure all required parameters are filled.

7.  **Save and publish** the flow.

When the flow reaches this node, the WhatsApp template will be sent automatically to the user, using the values from the current session.

:::notes
* **All parameters** in the template must be mapped.
  Missing parameters will cause the message to **fail silently** (it won’t be sent).

* Always choose the **correct sender number** from your connected WhatsApp numbers.

* If a user's phone number is available in the flow (for example, collected during onboarding), it can be used as the **recipient**.

:::


