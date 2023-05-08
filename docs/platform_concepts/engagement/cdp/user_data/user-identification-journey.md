---
title: User identification flow
sidebar_label: User identification flow 
---

The User identification flow in bot conversation is the process of identifying the bot user. This is typically done by requesting the unique identifier such as an email address, phone number or other identifier from the user. For details on user identification and profile unification, see [Profile identification & unification](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers)..


### Significance of user identification

The user identification is an important aspect of bot conversation design, as it allows for a more personalized and engaging user experience. User identification helps in the following:

* **Personalized responses**: When a user is identified, the bot can tailor its responses to the individual user's needs and preferences. This can lead to more relevant and helpful responses, which can improve the overall user experience.
* **Context maintenance**: User identification allows the bot to maintain context throughout the conversation and across different channels. This means that the bot can use user data and the interaction with the user, and use that information to provide more accurate and useful responses in subsequent interactions.
* **Improved engagement**: By providing personalized responses and maintaining context, the bot can create a more engaging conversation with the user. This can lead to increased user satisfaction and higher levels of engagement with the bot.
* **Better data collection**: User identification also allows the bot to collect more detailed and accurate data on individual users. This can be used to improve the bot's performance over time, by providing insights into user behavior and preferences.



By identifying the user, the bot can provide personalized and relevant responses to their queries, and maintain context throughout the conversation. This improves the overall user experience and can lead to higher engagement and satisfaction.

### Understand how user identification flow works

The User Identification flow serves as a nudge to check if the user ID is captured during the bot conversation. If the bot is unable to capture the user ID, it will automatically trigger the User Identification flow at the starting of the conversation to capture the user ID. 

To enable this, you need to add the user identification flow separately in Studio as mentioned in the following:


1. Navigate to **Studio** > **Build** and click **Add user identification**.
   
   ![](https://i.imgur.com/VFlV6tJ.png)


2. On the pop-up screen that appears, click **Create**.

  <center><img src="https://i.imgur.com/s6SQPZN.png" width="50%"/></center>

3. Choose the user identifier flow that you want to add.


  <center> <img src="https://i.imgur.com/KGeBIwq.png" width="60%"/></center>

   * **Phone identifier flow**: Select this to add the user ID flow using phone number.
   * **Email identifier flow**: Select this to add the user ID flow using email address.
   * **Custom property flow**: Select this to add the user ID flow using any other property.

4. For the Phone/Email identifier flow, you will see the respective prompt nodes. To know how to store user ID, see [Store conversational data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#using-prompt-nodes).

5. For the Custom property flow, you can either choose an existing user property or **Create a new property** and set it as the user ID. To know how to store user ID, see [Store conversational data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#using-prompt-nodes).

   <center><img src="https://i.imgur.com/fqhxItb.png" width="50%"/></center>
