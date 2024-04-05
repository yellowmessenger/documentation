---
title: Create WhatsApp template
sidebar_label: WhatsApp template
---

When creating a WhatsApp template, it is important to note that unlike other channel templates, each WhatsApp template requires individual approval. Once created, the template must be submitted for review by Meta. The review process typically takes up to 48 hours. If the template complies with Meta's guidelines, it will be approved. However, if it does not meet the guidelines, it will be rejected.


The following are the different steps involved in a WhatsApp template:

1. Create a WhatsApp and send for approval.
2. Facebook verifies the WhatsApp template and updates the status within 48 hours.
3. Use the approved template in your campaign.

:::note
Important update: FBM made changes to WhatsApp authentication templates for businesses in India. [Click here](#6-important-update-changes-to-whatsapp-authentication-templates-for-businesses-in-india) for more details.
:::


## 1.  Prerequisites to create WhatsApp template

The following are the prerequisites for creating a WhatsApp template:

* Ensure that the WhatsApp channel is configured under [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration).

* Verify that the account is active and its status is showing as *Connected*.

## 2. Creating WhatsApp template

To create a WhatsApp template and send for approval, follow these steps:

1. Navigate to your project and go to **Engage** > **Templates**.

   ![](https://i.imgur.com/Hvh6o2m.jpg)

  

2. Click **Create new template** > **Whatsapp**.

   ![](https://i.imgur.com/GNCxave.png)

3. In **Template Name**, enter a name for the template (supports only lowercase letters without space, including numbers and underscores). This is used only for your internal reference.

4. In **Select language**, choose the language for which you want to use the template.

3. In **Select category**, choose for what type of messages you want to use the current template: *Transactional*, *Marketing* or *One-time passwords*. If you want the template to move to the right category automatically depending on the content, select **If the template does not qualify under the selected category, move it to the correct category**.

4. In **Template Type**, choose the template type for your message.

   * **Standard Template**: Select for straightforward, single-item messages. It suits scenarios where a concise and focused message is preferable.
   * **Carousel Template**: Select for showcasing multiple items in a single, interactive format. Carousels offer a dynamic and engaging way to present diverse content within a single message.


5. Configure the template using the available options - [For standard template](#options-to-create-whatsapp-standard-template), [for carousel template](#options-to-create-whatsapp-carousel-template).

   ![](https://i.imgur.com/jknxfcv.png)

6. In **URL click tracking**, select all the URLs that you wish to monitor for URL clicks. For detailed information, see [how to set up URL click tracking](#4-track-url-clicks-in-whatsapp-campaigns). URL click tracking is available only for premium users.

   ![](https://i.imgur.com/63SeUhj.png)

:::note
You can either add up to two CTAs or three Quick replies. 
:::

7. Preview the message on the right pane and click **Create template** to finalize and create the WhatsApp template.


   The template will be sent for reviewing. You can use can use it in your campaign once Facebook approves it.

   ![](https://i.imgur.com/FmTmtzY.png)


### Options to create WhatsApp standard template

The standard template for WhatsApp consists of three essential components: Header, Body, Footer and Buttons.


   Option | Description
   --------- | --------
   Header type | Choose the type of the header content - *Text* or *Media*.
   Text (Header) | Enter your text-based header content here. You can have upto 60 characters with only one variable in the header.
   Media (Header) | Upload your preferred media file. Supported formats include image files (.jpg/.jpeg/.png) with a maximum size of 5 MB, mp4 files with a maximum size of 12 MB, and PDF files with a maximum size of 12 MB.
   Body text | Enter the main content. Use variables wherever required. It is the most critical part of your template and is thoroughly checked by the WhatsApp team. You can use upto 1024 characters, which can include text and variables.
   Footer |  This lets you include extra details at the end of your WhatsApp message to share important information or calls to action. <br/> Check the box **Use as a footer text** to easily include the text "Reply with STOP to unsubscribe" in the message footer.
   Button type | Choose the button type - None, Call to action (CTA) or Quick replies.<br/>Call to action: There can be a maximum of two buttons while choosing call to action - Visit Website or Call Phone. You can either add up to two CTAs. <br/> For more details, see [Phone call CTA](#add-make-a-phone-call-cta), and [URL redirect CTA](#add-url-redirect-cta).
   Quick replies | You can add a maximum of 3 quick reply buttons, each button text can have a maximum of 20 characters. <br/>For more details, see [Quick replies](#4-add-quick-replies-in-whatsapp-template).


### Options to create WhatsApp carousel template

  Other than the options available in common, here are some options specific to WhatsApp carousel template:

   ![](https://i.imgur.com/IZ24KC3.png)

   Option | Description
   --------- | --------
   Template name | Enter a name for the template (Supports only lowercase letters without space, including numbers and underscores). This is used only for your reference and the client cannot see it. 
   Select language | Choose the language for which you want to use the template. You can create WhatsApp templates in multiple languages.
   Select category | Choose for what type of messages you want to use th current template - *Transactional*, *Marketing*, or *One-time passwords*. <br/>If you want the template to move to the right category automatically depending on the content, **If the template does not qualify under the selected category, move it to the correct category**.
   Template type | Choose *Carousel template*.
   Card | You can add upto 10 cards in a template and set header, body, and buttons for each card separately. 
   Header | Choose the media type for the header. You cannot have one card with an image type and another with a video type. <ul><li>Image: Supports .jpg/.jpeg/.png with a maximum size of 5 MB. </li><li>Video:  Use to add mp4 file. Supports upto 12 MB. </li></ul>
   Body text | Enter the body content for the WhatsApp carousel. Use {{ }} to add variables. For instance, you can use {{firstName}} to dynamically include the customer's first name within the carousel.
   CTA buttons | Add CTAs to the card. If you add another CTA, both should be of the same type. You can add up to two buttons - either CTAs or quick replies or both.
   Quick replies | Add quick replies to the card.  You can add up to two buttons - either CTAs or quick replies or both.





:::note

   To format text in a WhatsApp template, use the following syntax:

   * *Italic*: `_text_`
   * **Bold**:  `*text*`
   * ~~Strikethrough~~: `~text~`
   * `Bullet`: `- text`
:::







## 3. Call to Actions (CTAs) in WhatsApp template

A WhatsApp template supports two different CTAs - *Visit website* and *Call phone*. You can only add two different CTAs in a template. That is, you cannot use two Visit website or two Call phone in the same template.

![](https://i.imgur.com/Ru8T1Uz.png)

Navigate to the **Button Type** section and select *Call to action*.

![](https://i.imgur.com/OpV6j9P.png)

### Add URL redirect CTA

1. In **Type of action**, choose *Visit website*.
2. In the **Button** text, enter the label name (character limit 20) for the CTA.
3. In the drop-down box, choose the type of URL to be embedded for the CTA - [Static](#static-url) or [Dynamic](#dynamic-url). 
4. In **URL**, enter the URL that you want recipients to redirect upon clicking the button.

There are two types of URLs you can use in a CTA:

#### Static URL 
In this type of CTA, you need to specify the URL that needs to be opened when sending the template for approval. You cannot modify the static URL once it is sent for approval or post approval. 

For easy approval, it is recommended to use the company's domain URL. Example: [https://docs.yellow.ai](https://docs.yellow.ai)


#### Dynamic URL

In dynamic URL CTA, you can personalize the URL when sending out the notification through the Notification API/Outbound campaign, as explained below.

Simply specify the static URL (excluding the dynamic path) when submitting it for approval. After approval, append the path with a specific variable before sending the notification to the targeted users.

For example: If the URL is https://exampleshopping.com/checkout/{userId}


   1. In the template configuration , just mention `https://exampleshopping.com/checkout/`

   2. When configuring campaign, specify the path variable (say `userId`).

   3. When the campaign is sent, the user receives the URL https://exampleshopping.com/checkout/userId123

   When the user clicks on CTA sent through notification, it redirects to the
   [Engage documentation](https://docs.yellow.ai/docs/platform_concepts/engagement/engage).

:::note
* You can only append the dynamic variable towards the end.
* You cannot change the parent domain URL dynamically.
:::

### Add make a phone call CTA

1. In **Type of action**, choose *Phone call*.
2. In the **Button** text, enter the label name (character limit 20) for the CTA.
3. In the drop-down box, choose the country of the phone number.
4. In **Phone number**, enter the phone number that you want your recipients to call.

## 4. Add Quick replies in WhatsApp template

WhatsApp template supports three different quick reply actions. You can use the desired action for each button and a maximum of three quick reply buttons are supported. Each button text can have up to 20 characters. 

![](https://i.imgur.com/khDiOw3.png)

The following are the three different quick reply options:

:::note

#### Activation of Quick Reply Event:

* Regardless of the button action chosen ("send as event," "triggerJourney," or "triggerNLP"), activating the quick reply event is mandatory.
This activation step must be completed before proceeding with any other actions.

:::

### Trigger journey

Use this to trigger a specific journey when the user clicks on the button. For example, you can use it to send a promotional notification about store offers and trigger the bot flow through which users can buy products when the user clicks on it.

**Prerequisite**: A journey should be created already for offers and buy products to select from.

Enter the **Button text**, choose the **Action type**,  *Trigger journey*, and select the **Journey name** that you want to trigger.

   ![](https://i.imgur.com/7a6k9Nc.png)



### Trigger NLP 
Use this to trigger the bot conversation as per the utterances trained under intents. For example, use it to send a transactional notification about order cancellation, and provide a talk-to-customer support button to trigger Live Agent flow.

**Prerequisite**: Live agent flow should be trained with the *Talk to customer support* utterance.
  
Enter the **Button text**, choose the **Action type**,  *Trigger NLP*.

  ![](https://i.imgur.com/Ijp1chQ.png)



### Send as Event 
Use this to send all the template data to the bot and use it in custom flows. For example, you can capture the button clicked and the userId in a custom dataset.

:::note
#### Prerequisite to use Send as Event action
If you use the **Send as event** action, you will need to import the corresponding flow from the marketplace. This import is necessary to ensure the smooth functioning of the chosen button action.
:::

Enter the **Button text**, choose the **Action type**,  *Send as event*.

   ![](https://i.imgur.com/ew3RIM0.png)
  

:::note
Use the Delete icon to remove any button.
:::


###  Trigger flow or display messages when clicking on Quick Reply buttons

To enable users to trigger a flow or display messages when Quick Reply buttons are clicked in the WhatsApp template via the quick_reply_event, follow these steps:

1. Go to **Studio** > **Events** > **Engagement** > **quick_reply_event** more options > **Activate**.

  ![](https://i.imgur.com/T22e63k.png)

2. Go to Studio > Click on **Create Flow** > Search for *WhatsApp Template Manager* > Select the template > **Use template**.

   ![](https://i.imgur.com/izhs8OM.png)

   ![](https://i.imgur.com/Bn2t5n8.png)

3. Once the template is imported, open the flow *Template handling*. In this flow, open the start node > Select **quick_reply_event** from the drop-down.
 
   [](https://i.imgur.com/2ECOQxB.png)

4. Once this is done, the user will be redirected to this flow whenever someone clicks on the Quick Reply buttons in the notification template.

5. To manage buttons, go to the flow *Template handling*. After the database node, you will observe a condition node that creates a condition to compare template names. 

   ![](https://i.imgur.com/rJYrbug.png)

   <img src="https://i.imgur.com/i1tUlHb.png" width="60%"/>

6. Change the conditions of the condition node for the button clicked using the variable *button clicked* and enter the expected button value in the condition node (as displayed in the screenshot).
7. Connect a message node or Execute flow node with the condition node in order to either display a message or execute a particular flow.


## 5. Add variables in WhatsApp template

Variables allow you to personalize your template content for the user. You can include variables it in the Body or Footer.

You can add variables by adding two curly brackets before and after the variable name.

   ![](https://i.imgur.com/2DX9Uiu.png)

  

By doing so you define a variable user, which can contain unique names of the user you want to send out campaigns to.

  

You can see in the preview tab below, the variable user we just created is highlighted in blue for your own convenience.

   <img src="https://i.imgur.com/jRhm0jE.png" width="50%"/>

## 6. Track URL clicks in WhatsApp campaigns

URL click tracking in Campaigns allows you to monitor user clicks on links used in messages.  Before sending out the actual message, the URLs in the template are shortened, and each user is provided with a unique identifier. This allows you to track individual clicks on the links, providing valuable insights into user engagement and campaign performance.

You can track URL clicks in three different elements of your template - Template body, CTA, and variable.

:::note
URL click tracking is currently
* supported for SMS and WhatsApp campaigns. If you need it for URLs in other channels, please contact us.
* available only for Premium users.
:::

#### Sample use cases:
1. **E-commerce**: Track how many users clicked on the link to a specific product or offer in your online store.
2. **Surveys**: Measure the response rate by tracking the number of users who clicked on the survey link.
3. **Event invitations**: Monitor the interest level by tracking clicks on event registration links.

To track URL clicks:
1. Create your marketing campaign with the URLs.
2. Navigate to the **URL click tracking** section and select the URL(s) that you want to track. You will see all the URLs used in the template in the respective sections - this includes URLs in Body text, variables and CTAs.

   <img src="https://i.imgur.com/G1ihjVL.png"/>

3. Send out the campaign to users with the template. The URLs in the tracked list are shortended and a unique identifier is provided to each user before sending.

   <img src="https://i.imgur.com/RZGOF9e.jpg" width="40%"/>



## 7. View WhatsApp template approval or rejection status
Once a WhatsApp template is approved and marked as Active, it can be used to send messages to customers, regardless of its quality rating. However, WhatsApp templates are rated based on their quality, reflecting their performance. 

Users can report or block WhatsApp templates which can result in blocking of the campaign. If the template receives consistent negative feedback, its status may change and can interrupt the campaign, impacting its performance. 

By actively monitoring the approval status, you can proactively address any potential issues and maintain seamless communication with your audience.

   <img src="https://i.imgur.com/THa7a10.png"/>

The following are the different statuses available for an Active template:

Column Name | Description
------------- | ----------
Template name | Name of the template.
Status | The current status of the template.<ul><li>**Pending**: Templates that have been submitted for approval but are still awaiting review from Facebook.</li> <li>**Rejected**: Templates that have been reviewed and rejected for not meeting the guidelines or requirements set by WhatsApp. These templates cannot be used for messaging purposes.</li> <li>**Disabled**: Templates that were previously approved but have been disabled either by the business or by WhatsApp. Disabled templates cannot be used for messaging until reactivated.</li> <li>**Approved**: Templates that have successfully passed the review process and meet the guidelines and requirements set by WhatsApp. These templates are eligible for use in messaging campaigns.</li> <li>**1st pause**: Templates that have successfully passed the review process but received negative feedback from users. The campaign using these templates will be suspended for 3 hours as a precautionary measure.</li> <li> **2nd pause**: If you resend the same template after the 3-hour suspension, the templates will be blocked for 6 hours as a further measure to prevent any potential issues or misuse.</li></ul>
Quality | The quality rating of the template based on users feedback.<ul><li>**Not available**: This is the initial rating for approved message templates.</li><li>**High**: Templates with positive performance and user feedback.</li><li>**Medium**: Templates with moderate performance and user feedback.</li><li>**Low**: Templates with poor performance and negative feedback.</li></ul>
Template category | Classification of the template based on its purpose or content - Utility, Marketing.
Created on | Date and time of the template creation. 
Created by | The platform user who the template.
  
:::note
When a WhatsApp template is rated as "Active - Low quality," the campaign is paused to preserve the quality rating of associated phone numbers. Pausing durations are as follows: 1st instance - 3 hours, 2nd instance - 6 hours, and the 3rd instance leads to disabling of the campaign. If you wish to edit a paused template, it must be re-approved before it can be used again.
:::

:::info
When using [Notification APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine), you may encounter the following error message if the template receives a low rating.

```json
{ 
    success: false, 
    message: "Template:<template-name> has reached low quality and cannot be used"
}
```

:::


## 8. Important update: Changes to WhatsApp authentication templates for businesses outside India

Starting from October 2, 2023, older authentication templates will no longer be supported for businesses operating in countries other than India.

Here's what you need to do:

1. **Review Your Templates**: If you currently use authentication templates, please take a moment to review them.
2. **Access Message Templates**: To make the necessary updates, navigate to **Message Templates** in FBM.
   
   ![](https://i.imgur.com/MuRUwtR.jpg)

3. **Download CSV**: In **Message Templates**, you will find an option to download a CSV file. Use this CSV file to identify templates that do not comply with the new format.

   ![](https://i.imgur.com/opG5AGz.jpg)

4. **Create new templates**: To ensure continued functionality, create new templates under the **Authentication** category. These templates should include the OTP button type for a seamless authentication experience.

   ![](https://i.imgur.com/oHsGUIK.jpg)

5. **Sync templates on yellow.ai platform**: On the yellow.ai platform's Engage module, navigate to **Templates** and click **Sync templates**. 

   ![](https://i.imgur.com/IiEndmE.jpg)

:::note
Authentication templates are not available or applicable for India.
:::

## 9. WhatsApp template guidelines

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



### Examples of approved & rejected templates

  

1. The template on the **left** got rejected because it placed a link inside the body instead of using call to action. The one on the **right** got approved after removing the link.

   <img src="https://i.imgur.com/mBJxZ7t.png" width="70%"/>

  
2. The template on the **left** got rejected because user didn't pass any parameter inside curly braces. The one on the **right** got approved after passing a parameter inside the bracket.

   <img src="https://i.imgur.com/OpceI9g.png" width="60%"/>

  


***

**What next?**

* **Schedule a WhatsApp campaign**: Create a WhatsApp campaign using the template as explained in [Outbound campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).
