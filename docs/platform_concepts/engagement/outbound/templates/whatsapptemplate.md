---
title: WhatsApp template
sidebar_label: WhatsApp template
---


Unlike other channel templates that are approved by default, you need to send each WhatsApp template for approval as soon as you create it. Facebook might take upto 48 hours to review the template. A template gets approved if it is as per the Facebook's guidelines, else it will be rejected.

The following are the different steps involved in a WhatsApp template - 

1. Create a WhatsApp and send for approval.
2. Facebook verifies the WhatsApp template and updates the status within 48 hours.
3. Use the approved template in your campaign.
  

**Prerequisites**

The following are the prerequisites for creating a WhatsApp template -

* You need to have the WhatsApp channel configured under [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration).

* Account should be active with its status as *Connected*.


## 1. Create WhatsApp template

 
To create a WhatsApp template and send for approval - 

1. Navigate to your project and go to **Engage** > **Templates**.

   ![](https://i.imgur.com/Hvh6o2m.jpg)

  

2. Click **Create new template** > **Whatsapp**.

   ![](https://i.imgur.com/GNCxave.png)


4. Configure the template using the available options and click **Save**.

   ![](https://i.imgur.com/cbxvaHy.png)

  
  
Option | Description
--------- | --------
Template name | Enter a name for the template. This is used only for your reference and the client cannot see it.
Select category | Choose for what type of messages you want to use th current template - *Transactional*, *Marketing*, or *One-time passwords*.
Select language | Choose the language for which you want to use the template. You can create WhatsApp templates in multiple languages.
Header | Enter the message title If you want to include media or documents (Image, Video, Document, or Text) in your template messages, then Header Section will be of high importance. WhatsApp has certain guidelines for Header. WhatsApp Text supports upto 60 characters with only one variable.
Body | Enter the main content. Use variables wherever required. It is the most critical part of your template and is thoroughly checked by the WhatsApp team. You can use upto 1024 characters, which can include text and variables.
Footer | Use this to mention something at the end of your message. You can use up to 60 words.
Button type | Choose the button type - None, Call to action (CTA) or Quick reply.<br/>Call to action: There can be a maximum of two buttons while choosing call to action - Visit Website or Call Phone.
Quick reply | You can add a maximum of 3 quick reply buttons, each button text can have a maximum of 20 characters.

5. To add another CTA, click **Add new button**.
6. Preview the message on the right pane and click **Send for approval**. 

   ![](https://i.imgur.com/wJnIgW4.png)

The template will be sent for reviewing. You can use can use it in your campaign once Facebook approves it.

   ![](https://i.imgur.com/FmTmtzY.png)


:::note
You can either add up to two CTAs or three Quick replies. 
:::



### 1.1 Add CTAs/Quick replies

You will see these options in Buttons under Button Type.

#### Call to Action

In Type of action, You can either choose between Visit Website or Call Phone. Currently it supports up to two CTAs in a template.

![](https://i.imgur.com/OpV6j9P.png)
 
For the action, Visit website -
1. In **Button** text, enter the label name (character limit 20) for the CTA.
2. In the drop-down box, choose the type of URL - *Static* or *Dynamic*.
3. In URL, enter the URL that you want recipients to redirect upon clicking the button.
  
For the action, Phone number -
1. In **Button** text, enter the label name (character limit 20) for the CTA.
2. In the drop-down box, choose the country of the phone number.
3. In **Phone number**, enter the phone number that you want your recipients to call to.

  

#### Quick reply

  
You can add a maximum of three quick reply buttons and the button text can have up to 20 characters.

 
  ![](https://i.imgur.com/lKAIipS.png)

  
Enter label names for each reply. Use the Delete icon to remove any button. 

 ![](https://i.imgur.com/wJnIgW4.png)
 


 
### 1.2 Add variables
Variables allow you to personalize your template content for the user. You can include variables it in the Body or Footer.

You can add variables by adding two curly brackets before and after the variable name.

![](https://i.imgur.com/2DX9Uiu.png)

  

By doing so you define a variable user, which can contain unique names of the user you want to send out campaigns to.

  

You can see in the preview tab below, the variable user we just created is highlighted in blue for your own convenience.

![](https://i.imgur.com/jRhm0jE.png)

  

  
  

## 2. Best practices to avoid rejections

  

Once you send a template for approval, Facebook might approve it if everything's as per the guidelines or will reject it if it is not as per their standards.

You can see the template status on the Templates home page.

![](https://i.imgur.com/FmTmtzY.png)


Here are some basic guidelines that you can follow to get your templates approved -    

:::note
For a complete list of rejection reasons, see [here](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/).
:::
  

* Spelling or grammatical errors.
* Missing variable parameters or incorrect curly braces. The correct format is {{1}}.
* Undefined variable parameters.
* Non-sequential variable parameters. For example, {{1}}, {{2}}, {{4}}, {{5}} are defined but {{3}} does not exist.
* Mismatch in the defined language and the template content. For example, Spanish was select but the content is English or the content is a mixture of languages containing both Spanish and English.
* The URL domain in your links does not belong to your business.

  

### 2.1 Examples of approved & rejected templates

  

1. The template on the **left** got rejected because it placed a link inside the body instead of using call to action. The one on the **right** got approved after removing the link.


![](https://i.imgur.com/mBJxZ7t.png)

  
2. The template on the **left** got rejected because user didn't pass any parameter inside curly braces. The one on the **right** got approved after passing a parameter inside the bracket.

![](https://i.imgur.com/OpceI9g.png)

  
  

## 3. Schedule a campaign

  

To learn to schedule a campaign to a user segment at the desired time, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign/#4-schedule-message).

***

**What next?**

After creating a WhatsApp template, create a WhatsApp campaign using the template as explained [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).