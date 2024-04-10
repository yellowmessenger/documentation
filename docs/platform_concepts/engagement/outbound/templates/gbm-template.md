---
title:  Google Business Message (GBM) template
sidebar_label: GBM template
---

Yellow.ai's Engage lets you schedule campaigns on Google Business Messages. Using GBM campaigns, you can proactively send messages to public in text and image formats.


Outbound campaigns on GBM enable re-engaging with your users to achieve different use cases, such as:

* **Inform users** about a new product launch or special holiday hours.
* **Drive conversion** by reminding users about their recently viewed product and encouraging them to add it to their basket, notifying users if a product is back in stock, or following up after a free trial.
* **Proactively manage post-sales** by notifying users when their order has shipped or encouraging them to leave a review.
* **Manage appointments** by sending appointment reminders or allowing users to check in online.

:::note
According to Google Business Messages policy, you can reach out to your users on GBM within 30 days of their last message. You will no longer be able to contact them after this period.
:::



## Create your first GBM template

You can use the template that you create here in [Flow campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign).

To create a GBM template, follow these steps:

1.  On the left navigation bar, go to  **Engage**  >  **Templates**.
2.  Click  **+Create new templates**  >  **Google Business Messages**.

   ![](https://i.imgur.com/5bGHDIO.png)

3. In  **Template name**, enter a unique name for the template in lower case without space or special characters.

   ![](https://i.imgur.com/9xtw5kg.png)

4. In **Template language**, enter the language that you want to use in the template.
5. In **Body text**, enter the message. It supports up to 3072 characters, including variable values. 
   * To create personalized conversations, you can insert [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) in the message using the syntax `{{<name>}}`  and map them to your preferred [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-2-variable-types) before sending out the actual message. 
   * You can also include hyperlinks and text formating such as bold, italics, and line breaks.
6. In **Media**, choose *Image* to insert an image in the message or leave it to *None* for a text message.
7. For the image message, click **Upload** and add an image from your local system.
    * **Maximum file size**: 5 MB
    * **Supported file formats**: image/jpeg, image/jpg, and image/png
8. In **Buttons**, add your preferred button types to the message - [Call to action](#add-cta-buttons-in-gbm-template) or [Quick reply buttons](#add-quick-reply-buttons-in-gbm-template).

:::note
You cannot add two buttons of the same type in a template.
:::

9. Preview your message on the right screen to ensure the message looks as intended.

   <img src="https://i.imgur.com/Pty35e7.png" width="40%"/>

10. Click **Create template**.

## Add CTA buttons in GBM template

  
A GBM template supports two different Call to action (CTA) - 

1. [Open URL](#1-add-redirect-url-cta) and 
2. [Dial action](#2-add-make-a-phone-call-cta)

You can only add different types of CTAs in a template and cannot use two same CTA types in a template. That is, you cannot use two Open URL actions or two Dial actions in a template.

   <img src="https://i.imgur.com/FGgnqod.png" width="80%"/>

In the Buttons section (Step 8),  choose **Type of button** as *Call to action*.


### 1. Add Redirect URL CTA

1. In **Type of action**, choose *Open URL*.
2. In the **Button text**, enter the label name (character limit 20) for the button.
4. In **URL**, enter the URL that you want recipients to redirect upon clicking the button.

   ![](https://i.imgur.com/ko9ypU3.png)


### 2. Add CTA to Make a phone call

  

1. In **Type of action**, choose *Dial action*.
2. In the **Button** text, enter the label name (character limit 20) for the CTA.
3. In the drop-down box, choose the country of the phone number.
4. In **Phone number**, enter the phone number that you want your recipients to call.
  ![](https://i.imgur.com/ODdGjjG.png)

  

## Add Quick reply buttons in GBM template

The GBM template supports three different quick reply actions. You can use the desired action for each button, and a maximum of three quick reply buttons are supported. Each button text can have up to 20 characters.

There are three different quick replies available.



### 1. Add button to Trigger NLP

Use this to initiate or start a bot journey based on the user utterances, trained under [Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents). For example, use it to send a transactional notification about order cancellation, and provide a talk-to-customer support button to trigger Live Agent flow.

:::note
**Prerequisite**: 
Live agent flow should be trained with the *Talk to customer support* utterance.
:::

1. Enter the **Button text**.
2. Choose the **Type of action** as *Trigger NLP*.


   ![](https://i.imgur.com/LUmPc7A.png)




### 2. Add button to Trigger journey


Use this to trigger a specific journey when the user clicks on the button. For example, you can use it to send a promotional notification about store offers and trigger the bot flow through which users can buy products when the user clicks on it.

:::note
**Prerequisite**: A journey should already be created for offers and purchasing products.
:::

To add trigger a journey CTA on button click:

1. Enter the **Button text**. 
2. Choose the **Type of action** as *Trigger journey*.
3. Select the **Journey name** that you want to trigger.

  
   ![](https://i.imgur.com/Hjpi5Jl.png)

  

### 3. Add button to send template data (as event)

Use this to send all the template data to the bot and create custom flows. For example, you can capture the button clicked and the userId in a custom dataset and use them in building flows.

Choose the **Type of action** as *Send as event* and enter the **Button text**.

 
![](https://i.imgur.com/ib6zszr.png)


:::note
To remove any added button, click on the Delete icon.
:::

***

**What next?

* Schedule the campaign with the created GBM template using [Flow campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign).
