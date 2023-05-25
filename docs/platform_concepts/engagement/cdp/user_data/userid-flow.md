---
title: User identification flow
sidebar_label: User identification flow 
---

## Overview

The User Identification flow in bot conversation is the process of identifying the user interacting with the bot. This is achieved by requesting the unique identifier from the user. It could be an email address, phone number or other identifier. 

:::note
Date datatypes are not supported as the userId. It supports String, Number, email, and phone types.
:::

### Significance of identifying users

The user identification is an important aspect of bot conversation design, as it allows for a more personalized and engaging user experience. User identification helps in the following:

* **Personalized responses**: When a user is identified, the bot can tailor its responses to the individual user's needs and preferences. This can lead to more relevant and helpful responses, which can improve the overall user experience.
* **Context maintenance**: User identification allows the bot to maintain context throughout the conversation and across different channels. This means that the bot can use user data and the interaction with the user, and use that information to provide more accurate and useful responses in subsequent interactions.
* **Improved engagement**: By providing personalized responses and maintaining context, the bot can create a more engaging conversation with the user. This can lead to increased user satisfaction and higher levels of engagement with the bot.
* **Better data collection**: User identification also allows the bot to collect more detailed and accurate data on individual users. This can be used to improve the bot's performance over time, by providing insights into user behavior and preferences.

***

### Understand how user identification flow works

The primary objective of the User Identification flow is to ensure that the userId is captured for users that interact with the bot on any channel.

The following are the steps involved:

1. You first need to define the user property that needs to considered as the userId. Whenever the selected property is updated, the userId will be automatically updated with the same value.

   For example, if you select the `phone` user property, each time a value is captured for the phone property, that same value will also be automatically copied and assigned to the userId field.

2. At the beginning of every conversation, the bot verifies if the userId is known. 
3. If it is not known, the **User identification flow** is triggered to capture the userId.

:::note
For details on how user identification is handled, see [Profile identification & unification](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers).
:::

***

## Setup user identification flow

To add the User identification flow to your bot, follow these steps:


1. Navigate to **Studio** > **Build** and click **Add user identification**.
   
   ![](https://i.imgur.com/VFlV6tJ.png)


2. On the pop-up screen that appears, click **Create**.

  <img src="https://i.imgur.com/s6SQPZN.png" width="50%"/>

3. Select the relevant identification flow - [Phone identification flow](#phone-identifier-flow), [Email identification flow](#email-identifier-flow) or [Custom property flow](#custom-property-flow).

   <img src="https://i.imgur.com/KGeBIwq.png" width="60%"/>

#### Phone identifier flow
  
   Select this option if the `phone` user property serves as the unique identifier for your users. Make sure to collect the phone number and store it in the `phone` user property, which is already set by default for this identifier flow.

   ![](https://hackmd.io/_uploads/HkrzKJcH3.png)

 #### Email identifier flow
 
 Select this option if `email` user property serves as the unique identifier for your users. Make sure to collect the email address and store it in the `email` user property, which is already set by default for this identifier flow.

   ![](https://hackmd.io/_uploads/ByMjFyqr3.png)

#### Custom property flow

Select this option if the unique identifier of your users is any property other than email or phone. In this case:

1. Choose the custom property that serves as the unique identifier for your users. Please note that only String, Number, email, and phone data types are supported for the custom property.
   
   <img src="https://i.imgur.com/fqhxItb.png" width="60%"/>
   
2. To create a new property and store it as userId, click on **+Create new user property** > Enter **Property name** and choose **Property type** > Click **Add**.
  
   <img src="/img/cdp/customproperty.png" width="60%"/>

   
3. Collect the selected user property using the [Prompt node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes).
4. Store the value in the relevant user property.
   
   ![](https://hackmd.io/_uploads/B1kn1dsHn.png)




:::caution
In the User identification flow, if you don't store the user property correctly, the bot will stop and won't continue. If the user prompts the bot again, the user identification flow will start again as shown below.

<img src="https://hackmd.io/_uploads/H11CsQqS2.png" width="50%"/>

So, if the user property is not captured correctly, this loop will continue, and the end user will be stuck.
:::