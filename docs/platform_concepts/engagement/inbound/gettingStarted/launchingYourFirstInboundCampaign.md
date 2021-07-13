---
title: Launching Your First Inbound Campaign
sidebar_label: First Inbound Campaign
---

## In this guide

1. This guide shows you how to create a campaign with **Slide-in** widget. For more widgets, checkout the 'Types of Inbound Widgets' doc.
2. As you use the campaign builder, you’ll notice a **question mark icon** next to many features. Hovering above that question mark will show you more information around that feature.
3. To be able to create and test the campaign, you’ll need the following
   - Create a Journey **“Homepage Help”** with text → ”Hey, how can I help you”
   - Embed the widget in your website by referring 'How to Embed the Widgets on Your Website' doc.

To create a new Campaign, follow the steps below:

## Basic Information

1. Tapping on the **Engagement** section in the left panel takes you to the **Campaign Overview Screen**
2. Select the **INBOUND** tab and then click on **+ Create Campaign**

![](https://cdn.yellowmessenger.com/WvXywYFcMQMp1626107670054.gif)

3. On the Campaign Creation page, enter the **Campaign Name** and under “Start from scratch” select **INBOUND CAMPAIGN**
4. Once you’re done, click **Next** and your campaign will be “created" and be visible on the _Campaign Overview Screen_

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/C844D219-8355-459C-AABF-F92A280AD0AF_2/Image.png)

## Widget Type

5. On the next screen, select **Slide in** widget. You can check out the **Types of Inbound Widgets** doc to know more
6. At any point in the campaign builder, you can choose to click on any of the following buttons:
   - **Previous** → Takes you back to the previous step in the campaign builder
   - **Cancel** → Exits the campaign builder without saving the campaign
   - **Save as drafts** → Exits the campaign builder and saves the campaign as **status=draft**
   - **Next** → Takes you to the next step in the campaign builder
7. Click next to move to the next step

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/218BD730-D9FE-4D20-A35A-042E5C5FE8A1_2/Image.png)

## Design & Define

7.  This step in campaign creation consists of 2 sub-steps, namely **DESIGN** and **DEFINE**
8.  In the Design step, use various options to design the theme of your widget
9.  In the Define step, choose what the button does. Select the Button Type as **Journey Trigger.** Clicking this button will trigger a journey in the Web Bot. (You can read more about other **Types of Widget Buttons**)
10. Then select the **Journey to Trigger** (**NOTE:** For this, you’ll need existing Journeys to select from. You can use **Studio** to create them)
11. Click Next to move the the next step

![](https://cdn.yellowmessenger.com/D4vljqGXWlS91626172416220.gif)

## Target Audience

11. In this step we define the web behaviour rules that trigger the campaign. For this campaign, we’ll create multiple conditions to target visitors who seem to be lost on the homepage by identifying the following behaviour:

    - They are inactive on the Homepage for more than 10 seconds
    - Spend more than 20 seconds on the Homepage
    - End up going through the entire Homepage by scrolling to the bottom

12. To accomplish the above, we’ll use the following triggers:

    - **URL →** used to specify the URL of the page that is opened
    - **Seconds on page →** used to specify the time spent on the same page, in seconds
    - **Seconds of inactivity →** used to specify for how long the visitor has been inactive

    You can check out all **Types of Web Behaviour Triggers**.

13. Refer to the image below to **Create Segment** and then create 3 C**ondition Sets**. A campaign is triggered if **ALL** _Conditions_ within **ANY** of the *Condition Set*s are met.

**NOTE:** for URL, you can put the URL of any page of the website where your widget is embedded.

![](https://cdn.yellowmessenger.com/tuccUSYKo5hu1626172455444.gif)

## Congrats!!

14. Your campaigns has been successfully launched

# Up Next

**Managing your Campaigns using the Overview Screen.**
