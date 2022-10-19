---
title: SMS template
sidebar_label: SMS template
---

## Create SMS template

1. Navigate to your project and go to **Engage** > **Templates**.

   ![](https://i.imgur.com/Hvh6o2m.jpg)
  

2. Click **Create new template** > **SMS**.

   ![](https://i.imgur.com/P2Vezjr.png)
  

3. Create the template using the available options and click **Save**. For descriptions of each field, see the following table.

  

   ![](https://cdn.yellowmessenger.com/xUABq9rVRsiP1649260093253.png)

Option | Description
-------- | ---------
Template name | Name the template. Name should be in lower case and you can only use underscore as a special character. Example: sms_name
Sender ID | Enter the sender ID from which you want to send the current SMS.
Template ID | Unique identifier of the SMS template approved by the DLT portal in India. It is a numberic value with length between 12 and 19 characters. You can find this against the template from the DLT portal of the brand.
Language | Choose the language of the message.
Body text | Enter the message body. To add variables such as verification code, payment links, or first nam, use {{ }}. For Example: {{CustName}}<br/>To create a new variable, use the structure {{*variable_name_comes_here*}} - ie, the variable name between double curly brackets.

   ![](https://cdn.yellowmessenger.com/VfiEBNhwk6IM1649261672637.png)


:::note 
* For Indian phone numbers, the details you add here should exactly be same as the one added in the DLT portal. Even slightest change in any of the details or template body will be rejected .
* For some countries, details like entity ID and template ID will be irrelevant. In such cases, you can only add the Sender ID and template message you want to send.
:::
  


***

**What next?**

After creating an SMS template, create an SMS campaign as explained [here](/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign.md)