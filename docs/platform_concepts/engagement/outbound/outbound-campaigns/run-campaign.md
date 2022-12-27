---
sidebar_label : Outbound campaign
title : Create outbound campaign
---


This article provides how to create campaigns for any channel. The process for creating a campaign remains same for all channels. However, certain steps change in *Step 2: Message template* depending on the channel and variables used in the selected template.

## 1. Prerequisites

**For WhatsApp**

* You need to have [Whatsapp channel](https://docs.yellow.ai/docs/cookbooks/whatsapp-channel/whatsapp-channel/) configured with a business number.
* Add only whitelisted templates (approved templates) in the [templates](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/overview) module.


## 2. Create campaign

1. Navigate to your project and go to the **Engage** module.
2. Click **+ Create Campaign**.

   ![](https://i.imgur.com/CwsX8ok.png)
  

3. Provide **Basic information**.

   a. Enter a suitable **Campaign name** that resonates well with the purpose of the campaign.

   b. Select your preferred channel through which you want to send communication in active channels.

   c. Click **Next**.

  
   ![](https://i.imgur.com/wrrBEkl.gif)

  

4. Select your preferred **Message template** ([WhatsApp](/platform_concepts/engagement/outbound/templates/whatsapptemplate.md), [Email](/platform_concepts/engagement/outbound/templates/email-template.md), [SMS](/platform_concepts/engagement/outbound/templates/sms-template.md), [Viber](/platform_concepts/engagement/outbound/templates/viber-template.md)) using the radio button. For more details, see [Templates overview](/platform_concepts/engagement/outbound/templates/overview.md).


:::note
To view details of a template, click on the respective template. You can also see the preview of the template once you select it.
:::




You will see template configuration slide screen where you need to configure details like variables mapping, user identifier and so on.


5. Configure each template details and click **Next** to continue. 

* For SMS, choose the user's phone number variable and map the variables used in the template to the user property variable.For more details, [see here](#21-sms-template)
* For Email, choose the variable that contains email Id, select the sender ID (email ID), and map the user variables used in the template. For more details, [see here](#22-email-template)
* For WhatsApp or Viber, choose the variable containing WhatsApp number, sender ID, and map the user variables used in the template. For more details, [see here](#23-whatsappviber-template)

   ![](https://i.imgur.com/NXuyf1Q.gif)

  

:::note
The user contact details/ recipient column and other others can be selected from user data which you can upload/maintain in Yellow.ai User module.
:::

  

:::tip
In case you want to switch to User module to add audience, you can save the campaign as draft and continue later.
:::
  

6. Select your **Target Audience** and click **Next** to proceed to scheduling the message (**Schedule**).

   * You can either choose audience from the list of segments that you already created [OR]

   * Create a new segment using **+ Add new segment**. For more details, see [Users module and segment creation](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview).

7.  **Schedule** your Campaign: Define when to send the campaign (Timezone: Asia/Kolkata). For detailed procedure, see [Schedule message](#3-schedule-message).  From the options, select 

    * **Once** to run the campaign for one occurrence.
    * **Now** to run after 10 min once you schedule the campaign.
    * **Later** to send out the campaign message on a specific date and time. Use the Calendar box to set your preferred date and time.
    * **Run multiple times** to configure a recurring campaign.

   ![](https://i.imgur.com/ffRXb4m.png)

8. Use **Test Campaigns** to test it with internal team members before sending out actual audience. You can add upto five recipients. For a detailed procedure on how to test campaigns, see [Test campaign](#5-test-campaigns-recommended).

9.  **Review and Launch** the campaign. Preview all the campaign details on this page. You can go back to previous steps if you want to make any changes.

     ![](https://i.imgur.com/WlmnEYU.png)


  

   * Click **Save as draft** to save all your changes. You can resume from here anytime.

   * Once you have reviewed all the details and is good to go, click on **Launch Campaign** to schedule. You will be redirected to *Campaigns overview* page where you can monitor the campaign.

  

***


  
## 3. Configure templates for different channels

This appears in the *Basic information* screen once you select a channel template. You need to configure some settings depending on the channel and template. For example, setting up the sender ID, and mapping variables used in the template.

This section guides you on how to configure template for each channel - 

### 3.1 SMS campaign

1. In **Choose the field that contains users contact or number where they can receive the campaign**, select the variable that contains the user's phone number.
 
   <img src="https://i.imgur.com/pndA2y7.png" width="40%"/>

2. In **Map variables**, associate each variable mentioned in the template with the user variables. You can map a variable or provide a bot link 

   <img src="https://i.imgur.com/12hci2Z.png" class="center" width="60%"/>

### 3.2 Email campaign

1. In **Choose the field that contains users contact or number where they can receive the campaign**, select the variable that contains the user's email address.

   <img src="https://i.imgur.com/Y1h9Ui3.png" width="350" height="auto"/>

2. In **Select the email address from which you want to send the campaign**, choose the email address from which you want to send the campaign. To know how to add email accounts, see [Email channel](/platform_concepts/channelConfiguration/email-outbound.md)

3. In **Map variables**, associate each variable mentioned in the template with the user variables. You can map a variable or provide a bot link 

 

### 3.3 WhatsApp/Viber campaign 

1. In **Choose the field that contains users contact or number where they can receive the campaign**, select the variable that contains the user's WhatsApp number (mobile number).

   <img src="https://i.imgur.com/94QMG8p.png" width="350"/>

2. In **Sender ID**, choose the WhatsApp business number from which you want to send the campaign.
   
   <img src="https://i.imgur.com/C2IrHHc.gif"/>

3. In **Map variables**, associate each variable mentioned in the template with the user variables. You can map a variable or provide a bot link.

4. Use **Media** to configure personalized media for the campaign.
   *  **Static**: Select to send a common media file to all the recipients. Use **Browse** to upload the media file.
   *  **Dynamic**: Select to send a personalized media to each user. Map the column from the db where you have included these details.
 


## 4. Schedule message

As explained in the Step 6, you can choose when to run your campaign. However, there are advanced options to customize scheduling your message and make your campaign more effective.

### 4.1 How many times you want to run the campaign

Choose whether to run the campaign only once or on a recurring basis.

  

##### Run once

* Select **Now** to run after 10 min once you schedule the campaign.

* Select **Later** to send out the campaign message on a specific date and time. Use the Calendar box to set your preferred date and time.

![](https://i.imgur.com/L8lNjcM.png)

  

##### Run multiple times

Select this to schedule a recurring campaign.

*  **Repeat**: Select the frequency of running the campaign.

*  **Daily**: Set your preferred date and time.

*  **Weekly**: Select the day of the week (Sun-Sat) when you want to run the campaign and set your preferred **Time**.

*  **Monthly**: Select the date of the month (1-31) when you want to send out the message and set your preferred **Time**.

*  **Ends**: Choose when you want to end the campaign.

  

| Option | Description |
| -------- | -------- |
| never | To run the campaign for ever |
| on | To end on a specific date and set the desired date and time. |
| after | to end after n number of occurrences and configure the respective options

  
  

![](https://i.imgur.com/6yd0sww.png)

  
  

### 4.2 Business hours

  

This lets you can honor DND timings, so that you can prevent users from receiving campaigns during specific periods, such as late nights.

  

You can set business hours for each day of a week so that your campaign message will be sent out only during the configured business hours.

  

1.  **Enable Business hours**.

![](https://i.imgur.com/mCl051T.png)

  

2. Click on **+ Add business hours setting** > **Add new business hour**.

3. Click on each day of the week and configure business hours for that particular day. Enable **Business hours same every day** to set a common timeframe for all days.

<img src="https://i.imgur.com/SLqHfLu.png" width="50%"/>

  
  
  

4.  **Message handling during DND hours**

You can configure what to do with the messages after the configured business hours using the following options.

  

![](https://i.imgur.com/POhWjum.png)

*  **Discard the message**: The message will not be sent and will be marked failed.

*  **Postpone to next day**: The campaign will be paused and will resume the next business hours.

  

![](https://i.imgur.com/63KYDaH.png)

  
:::note
You can Pause a scheduled campaign and Resume it when required using the respective options from the Outbound campaign homepage.

![](https://i.imgur.com/BlRcStg.png)


:::

## 5. Segments

  

Segment is grouping of users based on certain condition sets. Segmentation can be based on city, tags, names, or any another user property.

* You can add multiple condition sets as required.

* In the below example, a segment is created with users whose country is mentioned as "india" from the User module.

  

![](https://i.imgur.com/6UpBV4r.gif)

  

* Once the segment is created, you can see the number of users under the segment.

  

![](https://i.imgur.com/mV0dGW4.png)

![](https://i.imgur.com/HCNM7HD.png)



***

## 6. Test campaigns (Recommended)

It is recommended to test your campaign with internal or test users before launching to ensure the campaign notifications are flawless. Especially, verify if images, buttons, deep links, and elements of personalisation are working or rendering as expected.

The following are the benefits of testing a campaign before launching -

* Prevent sending wrong content to the customers.
* Enables viewing the notification messages as and how the end-users receive.
* Ensures the variables are mapped to the right user properties.
* Reduces campaign failures due to mismatch in parameters or issues with images size.

#### Prerequisites for adding test user details

* Test users data should be available in the *User 360* module
* Test users should have all the data which will be mapped to the variables used in the template.

#### Test campaign


1. Once you Schedule a campaign, you will see an option to Test campaign in Step 8 of [Create campaign](#2-create-campaign), Review and launch.

   ![](https://i.imgur.com/CzxSZrO.png)





2. Click on **Test campaign**.

   ![](https://i.imgur.com/Xfxyepv.png)



3. Search for test users.

* A wizard will be opened to add test user details.

* You can search users by name, email, phone number or userID. You will see auto-suggestions in the drop-down as you type.

   ![](https://i.imgur.com/UqXJZ3h.gif)

  
  

4. Add test users

   a. Click on the relevant user to populate all values like recipient ID and other parameters if any.

   b. Check whether all the parameters are mapped correctly to the desired user columns.

   c. Ensure all the values are available for the user. If not, use a different user use whose required details are available.

   ![](https://i.imgur.com/mPC8ArU.png)


   d. To add more users (up to 5 test users) click on **+Add Users** and repeat the process.

   ![](https://i.imgur.com/OFDwZvH.gif)

  

5. Click on **Send test campaign** to trigger campaign to the selected users.

   ![](https://i.imgur.com/AV194YX.png)


You will see the *Sending* status. You can see the actual delivery status after a while (about 15 seconds) - Delivered or Failed.

   ![](https://i.imgur.com/Sm9nuYW.png)


* To send the test campaign to more users, click on **Send new test campaign**.

   ![](https://i.imgur.com/UsOTzmX.png)


For Failed messages, you can also see the reason for failure.

:::note
* It takes 15 seconds to update the sent status of messages.
* If there is any mismatch in the data, save the campaign using **Save as draft**. Then, navigate to templates step, correct your mappings and test again.
:::

***


**What next**

* See how your campaign is performing using [Outbound campaign report](/platform_concepts/engagement/outbound/outbound-campaigns/outbound-report.md).