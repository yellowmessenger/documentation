---
sidebar_label : WhatsApp Campaign
title : WhatsApp Campaigns
---
 
## 1. Prerequisites for setting up WhatsApp campaigns
1. You need to have Whatsapp channel configured with a business number.
2. Ensure you add whitelisted templates (approved templates) in the templates module. 

> **Note**: You can also create a new template from the Message template screen in the campaign creation flow.


## 2. Create WhatsApp campaign

1. Navigate to your project and go to **Engage** module.


   ![](https://i.imgur.com/T0xqzoI.png)


1. On the top-right of the overview screen, click **+ Create Campaign**.

   ![](https://i.imgur.com/uG8mDMY.png)


3. Provide **Basic information** 
   i. Enter a suitable **Campaign name** that resonates well with the purpose of the campaign.
   ii. Select **Whatsapp** in active channels.
   iii. Click **Next**.

   ![](https://i.imgur.com/wrrBEkl.gif)

4. Select your **Message template**.
   i. Select the message template that you want to send using the radio button.
   To view the message content, click on the template name as shown in the following.

   ![](https://i.imgur.com/C2IrHHc.gif)
   ii. Choose your preferred **Sender ID** using the drop-down. 
   iii. Choose the field that contains users contact or number where they can receive the campaign.
   iv. In **Map Variables**, use **Click to map** to associate variables to the dynamic tags used in the message. 
   v. Use **Media** to configure personalized media for the campaign.
   * **Static**: Select to send a common media file to all the recipients. Use **Browse** to upload the media file.
   * **Dynamic**: Select to send a personalized media to each user. Map the column from the db where you have included these details.

   vi. Click **Next** to continue.

   ![](https://i.imgur.com/NXuyf1Q.gif)
   

> **Note**:
The user contact details/ recipient column and other others can be selected from user data which you can upload/maintain in Yellow.ai User module.`

> **Tip**: 
> In case you want to switch to User module to add audience, you can save the campaign as draft and continue later.

5. Select your **Target Audience** and click **Next** to proceed to scheduling the message (**Schedule**).
   * You can either choose audience from the list of  segments that you already created [OR] 
   * Create a new segment using **+ Add new segment**. For more details, see [Users module and segment creation](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/cdp/overview).

6. **Schedule** your Campaign: Define when to send the campaign (Timezone: Asia/Kolkata). 
* Select **Once** to  run the campaign for one accurance.
   * Select **Now** to run after 10 min once you schedule the campaign. 
    - Select **Later** to send out the campaign message on a specific date and time. Use the Calendar box to set your preferred date and time.
* Select **Run multiple times** to configure a recurring campaign. 
   ![](https://i.imgur.com/ffRXb4m.png)
   
7. Use **Test Campaigns** to test it with internal team members before sending out actual audience. You can add upto five recipients.
8. **Review and Launch** the campaign.

   Preview all the campaign details on this page. You can go back to previous steps if you want to make any changes.

   ![](https://i.imgur.com/A5cRXqT.png)

   * Click **Save ad draft** to save all your changes. You can resume from here anytime.
   * Once you have reviewed all the details and is good to go, click on **Launch Campaign** to schedule. You will be redirected to *Campaigns overview* page where you can monitor the campaign.

---


### 2.1 Schedule message
As explained in the Step 6, you can choose when to run your campaign. However, there are advanced options to customize scheduling your message and make your campaign more effective.
#### 2.1.1 How many times you want to run the campaign 
Choose whether to run the campiagn only once or on a recurring basis.

##### Run once
* Select **Now** to run after 10 min once you schedule the campaign. 
* Select **Later** to send out the campaign message on a specific date and time. Use the Calendar box to set your preferred date and time.
   ![](https://i.imgur.com/L8lNjcM.png)

##### Run multiple times
Select this to schedule a recurring campaign. 
   
* **Repeat**: Select the frequency of running the campaign.
   * **Daily**: Set your preferred date and time.
   * **Weekly**: Select the day of the week (Sun-Sat) when you want to run the campaign and set your preferred **Time**.
   * **Monthly**: Select the date of the month (1-31) when you want to send out the message and set your preferred **Time**.
   
* **Ends**: Choose when you want to end the campaign.  

   | Option | Description |
   | -------- | -------- | 
   | never     | To run the campaign for ever     | 
   | on | To end on a specific date and set the desired date and time. | 
   | after | to end after n number of occurances and configure the respective options


   ![](https://i.imgur.com/6yd0sww.png)


#### 2.1.2 Business hours

This lets you can honor DND timings, so that you can prevent users from receiving campaigns during specific periods, such as late nights.

You can set business hours for each day of a week so that your campaign message will be sent out only during the configured business hours.

1. **Enable Business hours**.
   ![](https://i.imgur.com/mCl051T.png)

2. Click on **+ Add business hours setting** > **Add new business hour**.
3. Click on each day of the week and configure business hours for that particular day. Enable **Business hours same every day** to set a common timeframe for all days. 
  ![](https://i.imgur.com/SLqHfLu.png)



4. **Message handling during DND hours**
   You can configure what to do with the messages after the configured business hours using the following options.

   ![](https://i.imgur.com/POhWjum.png)
* **Discrad the message**: The message will not be sent and will be marked failed.
* **Postpone to next day**: The campaign will be paused and will resume the next business hours.

![](https://i.imgur.com/63KYDaH.png)


### 2.2 Segments

Segment is grouping of users based on certain condition sets. Segmentation can be based on city, tags, names, or any another user property. 
   * You can add multiple condition sets as required.
   * In the below example, a segment is created with users whose country is mentioned as "india" from the User module.

   ![](https://i.imgur.com/6UpBV4r.gif)

   * Once the segment is created, you can see the number of users under the segment.

   ![](https://i.imgur.com/mV0dGW4.png)

   ![](https://i.imgur.com/HCNM7HD.png)


---
## 3. Test Campaigns (Recommended)
Make sure your campaign notifications are flawless by testing it with internal team members.

Although this is an optional step, we highly recommend you to test your campaigns that contain images, buttons, deep links, and elements of personalisation in the message to ensure that everything's in order.

#### How does it help?
* Prevents sending wrong content to the customers
* Enables viewing the notifications messages from end-user experience
* Makes sure variables are mapped to the right user properties
* Reduces campaign failures due to parameters mismatch or images size issues

#### Where do I get this option?

* While creating outbound campaigns, at final step "Review and Launch" you can review the content of the notifications once and click on "Test Campaign" from bottom right.
* Step by Step guidance to run test campaigns
* Prerequisites for adding test user details 
* Test users data should be available in Users module 
* Make sure the test users has all the data which will be mapped as variables in notification templates
* Doing so will enable viewing a user preview of the message with all the personalised data.

#### Steps to test your campaign

1. Login to cloud.yellow.ai and navigate to outbound notifications

![](https://i.imgur.com/Jzqlncs.png)


2. Create campaigns and proceed till "review and launch" step. Click on "Test campaign" button

**`Note: Test campaign is supported for all channel campaigns`**

![](https://i.imgur.com/SAjth2N.png)


3. Search test users
* A wizard will be opened to add test user details.
* You can search users by name, email, phone number or userID.
`For example, type any name and available users will be suggested in dropdown.`

![](https://i.imgur.com/UqXJZ3h.gif)


4. Add test users

* Click on relevant user to populate all values like recepient ID and other paramters if any.
* You can check whether all the parameters are mapped correctly to the desired user columns.
* Here you can ensure that all the values are available for the user. If not, then you can search an alternate user to personalise the message.

![](https://i.imgur.com/qD091UD.png)

* You can add up to 5 test users at a time. Click on "+Add Users" to search and add multiple users.

![](https://i.imgur.com/OFDwZvH.gif)

5. Send Test Messages
* Once all the data is cross verified, you can click on "send test campaign" to trigger notifications to recipient IDs added.

![](https://i.imgur.com/Z3NC91L.png)

* This screen will be frozen for 15 seconds to update the sent status of messages. 
* In case of any data mismatch you can save the campaign by clicking "save as draft", navigate to templates step, correct your mappings.
* You can use "Test Campaign" option more than once.
 
> **Note**:
After the Test Message has been sent, you will see that it is in "sending" state. After some time you will be able to see the delivery status of the test message as Delivered or Failed.**

If the Test Message has Failed to deliver, then you will be able to see the reason for failure

6. Check message sent status

* Click on **Test Campaign** will give you sent status of last test users and you can click on "Send new test campaign" to add new test users.
* Once the notification is good to go, you can launch the campaign anytime.

![](https://i.imgur.com/oVgpJRm.png)





---



 