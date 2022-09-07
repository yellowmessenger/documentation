---
sidebar_label : Viber Campaign 
title : Viber Business Campaigns
---


Yellow.ai now supports sending campaigns on [Viber Business](https://www.forbusiness.viber.com/en/viber-for-business/). These campaigns can be sent out using customised [templates] < TBA LINK TO VIBER Business TEMPLATE >.  
Using this feature, brands can engage with the customers for various **use-cases**.
Follow the steps below to create a Viber Business campaign: 


## 1. Basic Information

1. Open **Engage** > **Outbound Campaign**. 
2. Click **+Create campaign**. 

![](https://i.imgur.com/CwsX8ok.png)

3. Create a new campaign: 

- Enter **Campaign name**. 
- Select Viber Business from the active channels. 
 

> Viber Business channel must be enabled for this to work. 
> Open **Channel** > **Viber Business** and Enable Viber Business. 

- Click **Next**. 

![](https://i.imgur.com/Bjj2yQP.png)

--- 

## 2. Template


1. You can select an **existing template** (that has been previously created) and reuse it or create a new template by clicking **+New template**.

![](https://i.imgur.com/zf5pMkA.png)

2. Add a template **Name** that consists only of lowercase letters, numbers and underscores.
3. Select the **message format**. 

- **Text only**: The template can contain only text. 

![](https://i.imgur.com/oHdQk1X.png)

> You can bold/italicize the words and add variables if required. 


- **Media message**: Template can contain an image(jpg, png), video(mp4, mp3 for video, jpg, png for thumbnail) or a file (doc, CSV, PDF). 

![](https://i.imgur.com/3maBZJK.png)


- **Actionable message**: The emplate can be a combination of text and a button (which directs to a given URL).

![](https://i.imgur.com/swd5ZxK.png)

> Scroll down. Click **Attach media** to attach an image or a video along with the other element. 
>
>![](https://i.imgur.com/o6KdAuj.jpg)


4. Click **Create template**.

### 2.1 Template details -

Add the following Template details and click **Next**:
    
* **Users contact details** - It's the 'phone number' for Viber Business channel.
* **Sender ID**
* **Map variables** - Map variables of the template to the user 360 properties or trigger bot flows


![](https://i.imgur.com/5DNS1Sl.png)

--- 

## 3. Target audience

1. Select a segment of users you want to send this campaign to. For example, all users, monthly buyers and daily buyers. 
2. To add a new segment, click **+New segment**. 

![](https://i.imgur.com/65u9s4j.png)

3. Add **Name** of the segment. 
4. Add **Conditions** (Variable name - condition - matching string).
    - **+Add segment** to add **and** condition (both conditions must be true). 
    - **+Add segment set** to add **or** condition (one of the conditions can be true).

![](https://i.imgur.com/ugRq2Ia.png)

5. Click **Create segment**. 

---

## 4. Schedule

* Select **Once** to run the campaign for one occurrence.
    * Select **Now** to run after 10 min once you schedule the campaign.
    * Select **Later** to send out the campaign message on a specific date and time. Use the Calendar box to set your preferred date and time.
* Select **Run multiple times** to configure a recurring campaign.


You can choose when to run your campaign. However, there are advanced options to customize scheduling your message and make your campaign more effective.
Choose whether to run the campaign only once or on a recurring basis.

### 4.1 Run once
* Select **Now** to run after 10 min once you schedule the campaign. 
* Select **Later** to send out the campaign message on a specific date and time. Use the Calendar box to set your preferred date and time.


![](https://i.imgur.com/L8lNjcM.png)

### 4.2 Run multiple times

Select this to schedule a recurring campaign. 
   
* **Repeat**: Select the frequency of running the campaign.
   * **Daily**: Set your preferred date and time.
   * **Weekly**: Select the day of the week (Sun-Sat) when you want to run the campaign and set your preferred **Time**.
   * **Monthly**: Select the date of the month (1-31) when you want to send out the message and set your preferred **Time**.
   
* **Ends**: Choose when you want to end the campaign.  

   | Option | Description |
   | -------- | -------- | 
   | never     | To run the campaign forever     | 
   | on | To end on a specific date and set the desired date and time. | 
   | after | to end after n number of occurrences and configure the respective options

![](https://i.imgur.com/6yd0sww.png)


#### 4.2.1 Business hours

This lets you can honor DND timings, so that you can prevent users from receiving campaigns during specific periods, such as late nights.

You can set business hours for each day of the week so that your campaign message will be sent out only during the configured business hours.

1. **Enable Business hours**.
   ![](https://i.imgur.com/mCl051T.png)

2. Click **+ Add business hours setting** > **Add new business hour**.
3. Click on each day of the week and configure business hours for that particular day. Enable **Business hours same every day** to set a common timeframe for all days. 
![](https://i.imgur.com/SLqHfLu.png)

4. **Message handling during DND hours**

You can configure what to do with the messages after the configured business hours using the following options.

![](https://i.imgur.com/POhWjum.png)
* **Discard the message**: The message will not be sent and will be marked failed.
* **Postpone to next day**: The campaign will be paused and will resume the next business hours.

![](https://i.imgur.com/63KYDaH.png)



---

## 5. Review and Launch 

### 5.1 Test Campaigns (Recommended)

You can make sure your campaign notifications are flawless by testing it with internal team members.

> Although this is an optional step, we highly recommend you to test your campaigns that contain images, buttons, deep links, and elements of personalisation in the message to ensure that everything's in order.

**Advantage**

* Prevents sending wrong content to the customers.
* Enables viewing the notifications messages from end-user experience.
* Makes sure variables are mapped to the right user properties.
* Reduces campaign failures due to parameters mismatch or image size issues.


**Steps to test campaign**


![](https://i.imgur.com/UqXJZ3h.gif)


1. Add test users

* Click on a relevant user to populate all values like recipient ID and other parameters if any.
* You can check whether all the parameters are mapped correctly to the desired user columns.
* Here you can ensure that all the values are available for the user. If not, then you can search for an alternate user to personalise the message.

![](https://i.imgur.com/qD091UD.png)

* You can add up to 5 test users at a time. Click on "+Add Users" to search and add multiple users.
![](https://i.imgur.com/OFDwZvH.gif)

2. Send Test Messages
* Once all the data is cross verified, you can click on "send test campaign" to trigger notifications to recipient IDs added.

![](https://i.imgur.com/Z3NC91L.png)

* This screen will be frozen for 15 seconds to update the sent status of messages. 
* In case of any data mismatch, you can save the campaign by clicking "save as draft", navigate to the templates step, and correct your mappings.
* You can use "Test Campaign" option more than once.
 
> After the Test Message has been sent, you will see that it is in the "sending" state. After some time you will be able to see the delivery status of the test message as Delivered or Failed.**

* If the Test Message has Failed to deliver, then you will be able to see the reason for failure

3. Check the message sent status

* Click on **Test Campaign** will give you sent status of last test users and you can click on "Send new test campaign" to add new test users.
* Once the notification is good to go, you can launch the campaign anytime.

![](https://i.imgur.com/oVgpJRm.png)


### 5.2 Launch Campaign 

* Click **Launch Cammpaign**. The campaign gets launched. 
* To Pause/ Deactivate it, on the Outbound campaigns page- select the campaign name. From Actions select **Deactivate**. 

![](https://i.imgur.com/pSmFzsT.png)

**Launched campaign example**

![](https://i.imgur.com/H4XjTPp.png)
