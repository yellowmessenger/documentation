---
title: User identification flow
sidebar_label: User identification flow 
---

The User identification flow in bot conversation is the process of identifying the bot user. This is typically done by requesting the unique identifier such as an email address, phone number or other identifier from the user. For details on user identification and profile unification, see [Profile identification & unification](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers).


### Significance of user identification

The user identification is an important aspect of bot conversation design, as it allows for a more personalized and engaging user experience. User identification helps in the following:

* **Personalized responses**: When a user is identified, the bot can tailor its responses to the individual user's needs and preferences. This can lead to more relevant and helpful responses, which can improve the overall user experience.
* **Context maintenance**: User identification allows the bot to maintain context throughout the conversation and across different channels. This means that the bot can use user data and the interaction with the user, and use that information to provide more accurate and useful responses in subsequent interactions.
* **Improved engagement**: By providing personalized responses and maintaining context, the bot can create a more engaging conversation with the user. This can lead to increased user satisfaction and higher levels of engagement with the bot.
* **Better data collection**: User identification also allows the bot to collect more detailed and accurate data on individual users. This can be used to improve the bot's performance over time, by providing insights into user behavior and preferences.


### Understand how user identification flow works

The User Identification flow helps ensure that the userId is captured and associated with the conversation.

The flow works as a nudge or prompt to check whether the userId has been captured during the conversation. If it hasn't been captured, the flow will automatically trigger at the beginning of the conversation to capture the userId. This ensures that the bot can identify the user and provide them with a more personalized experience.



### Setup user identification flow

To enable this, you need to add the user identification flow separately in Studio as mentioned in the following:


1. Navigate to **Studio** > **Build** and click **Add user identification**.
   
   ![](https://i.imgur.com/VFlV6tJ.png)


2. On the pop-up screen that appears, click **Create**.

  <center><img src="https://i.imgur.com/s6SQPZN.png" width="50%"/></center>

3. Choose the user identifier flow that you want to add.


  <center> <img src="https://i.imgur.com/KGeBIwq.png" width="60%"/></center>

   * **Phone identifier flow**: Select this to add the userId flow using phone number.
   * **Email identifier flow**: Select this to add the userId flow using email address.
   * **Custom property flow**: Select this to add the userId flow using any other property.

4. For the Phone/Email identifier flow, you will see the respective prompt nodes. To know how to store userId, see [Store conversational data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#using-prompt-nodes).

5. For the Custom property flow, you can either choose an existing user property or **Create a new property** and set it as the userId. To know how to store userId, see [Store conversational data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#using-prompt-nodes).

   <center><img src="https://i.imgur.com/fqhxItb.png" width="50%"/></center>
