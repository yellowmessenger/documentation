---
title: Template overview
sidebar_label: Template overview
---

A message template refers to a predefined format or structure of a message that ensures consistency and standardization in different communication channels. It serves as a convenient tool for businesses to create and reuse common messages sent to their customers. 

These templates often consist of variables that can be dynamically populated with personalized information like customer names, order details, or transaction specifics. By leveraging message templates, businesses can streamline their communication processes, save time, and maintain a consistent messaging approach across different communication channels.

The following are the different channels that Engage supports for sending out campaigns:

* [WhatsApp](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/whatsapptemplate)
* [SMS](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/sms-template)
* [Email](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/email-template)
* [Viber](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/viber-template)
* [Mobile push](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/mobilepush)
* [Google Business Message](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/gbm-template)

## 1. Access Template manager

To access Template manager, follow these steps -

1. Log on to the yellow.ai platform and select your bot 
2. Click on **Engage for campaigns**. [OR] From the menu, click **Engage**.

   ![](https://i.imgur.com/WTdyVg4.jpg)
   ![](https://i.imgur.com/v7ejLMF.jpg)

  

2. In the **Engage** module, select **Templates** from left panel.

   <img src="https://i.imgur.com/THa7a10.png"/>


Column Name | Description
------------- | ----------
Template name | Name of the template.
Status | The current status of the template.<ul><li>**Pending**: Templates that have been submitted for approval but are still awaiting review from Facebook.</li> <li>**Rejected**: Templates that have been reviewed and rejected for not meeting the guidelines or requirements set by WhatsApp. These templates cannot be used for messaging purposes.</li> <li>**Disabled**: Templates that were previously approved but have been disabled either by the business or by WhatsApp. Disabled templates cannot be used for messaging until reactivated.</li> <li>**Approved**: Templates that have successfully passed the review process and meet the guidelines and requirements set by WhatsApp. These templates are eligible for use in messaging campaigns.</li> <li>**1st phase**: WhatsApp templates that have successfully passed the review process but received negative feedback from users. The campaign using these templates will be suspended for 3 hours as a precautionary measure.</li> <li> **2nd phase**: If you resend the same WhatsApp template after the 3-hour suspension, the templates will be blocked for 6 hours as a further measure to prevent any potential issues or misuse.</li></ul>
Quality | The quality rating of the template based on users feedback.<ul><li>**Not available**: This is the initial rating for approved message templates.</li><li>**High**: Templates with positive performance and user feedback.</li><li>**Medium**: Templates with moderate performance and user feedback.</li><li>**Low**: Templates with poor performance and negative feedback.</li></ul>
Template category | Classification of the template based on its purpose or content - Utility, Marketing.
Created on | Date and time of the template creation. 
Created by | The platform user who the template.
  
:::note
When a WhatsApp template is rated as "Active - Low quality," the campaign is paused to preserve the quality rating of associated phone numbers. Pausing durations are as follows: 1st instance - 3 hours, 2nd instance - 6 hours, and the 3rd instance leads to disabling of the campaign. If you wish to edit a paused template, it must be re-approved before it can be used again.
:::

:::info
When using [Notification APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine), you may encounter the following error message if a WhatsApp template receives a low rating.
```json
{ 
    success: false, 
    message: "Template:<template-name> has reached low quality and cannot be used"
}
```

:::


## 2. Search & filter templates

Use the search box to fetch templates by its name. You can further filter templates by channels to easily find the template that you needed.

![](https://i.imgur.com/J6a9jY7.png)

To see templates of a specific channel - 
* Click on **All templates** and choose your preferred channel.

## 3. Sync templates

You can get the latest instance of the templates created in the channel’s native manager and the latest template approval status. 

Click **Sync Templates**  to get the updated templates whenever there is a change in the status or addition of templates from the channel's native manager side.

![](https://i.imgur.com/STliaGv.png)

  



  



## 4. Duplicate an existing template

Templates also help in duplicating existing templates where you want to make slight changes in a template and use it instead of creating from scratch.


Sample Use case:

A brand x wants to use the same content of a whatsapp template "image_cta" but with minor content changes and added button.

  

1. Click on kebab menu icon against any template.
2. Select **Duplicate**. It opens the current template.
3. Edit the content wherever required, and save it as new template.

  
:::note
You cannot use the existing template name. Specify a unique name, preferably meaningful can be searched easily.
:::
  

> In the example screenshot, a template is duplicated with the following changes 
> *  A new CTA button is added with 
> * Minor text changes are made 
>  * Saved with a new name *image_cta_with_phone*
> ![](https://i.imgur.com/GVYprGv.gif)

  
  

## 5. Delete rejected template(s)

  
You can delete only rejected templates. 

**To delete a rejected template** - 

On the Templates home page, navigate to the template that you want to delete.
Click the More options icon > **Delete**.

   ![](https://i.imgur.com/24ycziU.gif)

:::note
You cannot edit or delete an approved template.
:::  

**To remove all the rejected templates at once** - 

1. On the Templates home page, click on the **Clean up** option.

   You will see all the rejected templates. These are selected by default.
   
3. If you do not want to delete a specific template, uncheck it to deselect. 
4. Click **Delete**.


   ![](https://i.imgur.com/fKoTP1I.gif)


## 6. FAQs

1. **What are the channels that Yellow.ai supports?**

   Currently, we support WhatsApp, SMS, Email, and Viber business. However, we also add Facebook messenger soon.

  

2. **What does the approval status Pending mean for whatsapp channels?**

   WhatsApp reviews and approves each WhatsApp template.  Pending means that the template is pending for approval. WhatsApp is committed to responding to template submissions within 48 hours, excluding weekends and holidays.

  

3. **How do I delete templates?**

   Currently we do not support deleting the templates from template manager considering the stability of recurring campaigns. However, you can delete rejected templates (applicable for WhatsApp).

   You can raise a ticket to support@yellow.ai if you want to delete any templates.

  

4. **Can I change the language of templates?**

   Once approved, you cannot change the language of a template. You need to create new templates with your preferred language.