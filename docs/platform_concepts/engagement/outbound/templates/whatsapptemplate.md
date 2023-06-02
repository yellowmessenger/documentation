---
title: Create WhatsApp template
sidebar_label: WhatsApp template
---


When creating a WhatsApp template, it is important to note that unlike other channel templates, each WhatsApp template requires individual approval. Once created, the template must be submitted for review by Facebook. The review process typically takes up to 48 hours. If the template complies with Facebook's guidelines, it will be approved. However, if it does not meet the guidelines, it will be rejected.


The following are the different steps involved in a WhatsApp template:

1. Create a WhatsApp and send for approval.
2. Facebook verifies the WhatsApp template and updates the status within 48 hours.
3. Use the approved template in your campaign.
  

#### Prerequisites

The following are the prerequisites for creating a WhatsApp template:

* Ensure that the WhatsApp channel is configured under [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration).

* Verify that the account is active and its status is showing as *Connected*.


 
To create a WhatsApp template and send for approval - 

1. Navigate to your project and go to **Engage** > **Templates**.

   ![](https://i.imgur.com/Hvh6o2m.jpg)

  

2. Click **Create new template** > **Whatsapp**.

   ![](https://i.imgur.com/GNCxave.png)


4. Configure the template using the available options and click **Save**.

   ![](https://i.imgur.com/cbxvaHy.png)

  
Option | Description
--------- | --------
Template name | Enter a name for the template (Only lowercase letters, numbers and underscores are allowed). This is used only for your reference and the client cannot see it. 
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



## 1. Add Call to Actions (CTAs) in WhatsApp template

A WhatsApp template supports two different CTAs - *Visit website* and *Call phone*. You can only add two different CTAs in a template. That is, you cannot use two Visit website or two Call phone in the same template.

![](https://i.imgur.com/Ru8T1Uz.png)

Navigate to the **Button Type** section and select *Call to action*.

![](https://i.imgur.com/OpV6j9P.png)

### 1.1 Add URL redirect CTA

1. In **Type of action**, choose *Visit website*.
2. In the **Button** text, enter the label name (character limit 20) for the CTA.
3. In the drop-down box, choose the type of URL to be embedded for the CTA - [Static](#static-url) or [Dynamic](#dynamic-url). 
4. In **URL**, enter the URL that you want recipients to redirect upon clicking the button.

There are two types of URLs you can use in a CTA:

#### Static URL 
In this type of CTA, you need to mention the URL that needs to be opened when sending the template for approval. You cannot modify the static URL once it is sent for approval or post approval. 

For easy approval, it is recommended to use the company's domain URL. Example: [https://docs.yellow.ai](https://docs.yellow.ai)


#### Dynamic URL

In this type of CTA, the URL can be personalised when sending out the notification through Notification API/Outbound campaign as explained below. 

You can mention the domain URL with a path variable in the CTA when sending for approval. Once approved, you can replace the variable with a specific path or parameter value before sending the notification to the targetted users.


   Example: [https://docs.yellow.ai/{{1}}](https://docs.yellow.ai/%7B%7B1%7D%7D)

   Here, you can replace `1`  with a parameter or path (say `docs/platform_concepts/engagement/engage`) before sending out the message through Notification API/Outbound campaign. 

   When the user clicks on CTA sent through notification, it redirects to the following link.
   [https://docs.yellow.ai/docs/platform_concepts/engagement/engage](https://docs.yellow.ai/docs/platform_concepts/engagement/engage).

:::note
You cannot change the parent domain dynamically.
:::

### 1.2 Add make a phone call CTA

1. In **Type of action**, choose *Phone call*.
2. In the **Button** text, enter the label name (character limit 20) for the CTA.
3. In the drop-down box, choose the country of the phone number.
4. In **Phone number**, enter the phone number that you want your recipients to call.

## 2. Add Quick replies in WhatsApp template

WhatsApp template supports three different quick reply actions. You can use the desired action for each button and a maximum of three quick reply buttons are supported. Each button text can have up to 20 characters. 

![](https://i.imgur.com/khDiOw3.png)

The following are the three different quick reply options:

### 2.1 Trigger journey

Use this to trigger a specific journey when the user clicks on the button. For example, you can use it to send a promotional notification about store offers and trigger the bot flow through which users can buy products when the user clicks on it.

**Prerequisite**: A journey should be created already for offers and buy products to select from.

Enter the **Button text**, choose the **Action type**,  *Trigger journey*, and select the **Journey name** that you want to trigger.

   ![](https://i.imgur.com/7a6k9Nc.png)



### 2.2 Trigger NLP 
Use this to trigger the bot conversation as per the utterances trained under intents. For example, use it to send a transactional notification about order cancellation, and provide a talk-to-customer support button to trigger Live Agent flow.

**Prerequisite**: Live agent flow should be trained with the *Talk to customer support* utterance.
  
Enter the **Button text**, choose the **Action type**,  *Trigger NLP*.

  ![](https://i.imgur.com/Ijp1chQ.png)



### 2.3 Send as Event 
Use this to send all the template data to the bot and use it in custom flows. For example, you can capture the button clicked and the userId in a custom dataset.

Enter the **Button text**, choose the **Action type**,  *Send as event*.

   ![](https://i.imgur.com/ew3RIM0.png)
  

:::note
Use the Delete icon to remove any button.
:::


## 3. Add variables in WhatsApp template
Variables allow you to personalize your template content for the user. You can include variables it in the Body or Footer.

You can add variables by adding two curly brackets before and after the variable name.

![](https://i.imgur.com/2DX9Uiu.png)

  

By doing so you define a variable user, which can contain unique names of the user you want to send out campaigns to.

  

You can see in the preview tab below, the variable user we just created is highlighted in blue for your own convenience.

![](https://i.imgur.com/jRhm0jE.png)

  

  
  

## 2. WhatsApp template guidelines

A WhatsApp template needs to be approved by Facebook before you start using it. Here are some standard guidelines that you need to follow while creating a template to avoid rejections.

  

:::note
When you send a template for approval, Facebook approves it only if everything is as per the guidelines. or will reject it if it is not as per their standards.
:::

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

  


***

**What next?**

* **Schedule a WhatsApp campaign**: Create a WhatsApp campaign using the template as explained in [Outbound campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).
