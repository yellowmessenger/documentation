---
title: User identification flow
sidebar_label: User identification flow 
---

## Overview

The User Identification flow in bot conversation is the process of identifying the user interacting with the bot. This is achieved by requesting the unique identifier from the user. It could be an email address, phone number or other identifier. 

:::note
Date datatypes are not supported for the userId. It supports String, Number, email, and phone types.
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

:::note
If the `userId` is not captured before initiating a conversation, a blank user record is created without a `userId` with a user starts conversation. If capturing of userId is not managed properly, it may result in the creation of duplicate records for the same user, one with a userId and one without. This can also lead to the creation of multiple unidentified records for different sessions.
:::

The following are the steps involved:

1. You first need to define the user property that needs to considered as the userId. Whenever the selected property is updated, the userId will be automatically updated with the same value.

   For example, if you select the `phone` user property, each time a value is captured for the phone property, that same value will also be automatically copied and assigned to the userId field.

2. At the beginning of every conversation, the bot verifies if the userId is known. 
3. If it is not known, the **User identification flow** is triggered to capture the userId.

:::note
For details on how user records are created through conversations and unified in User 360, see [this article](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers).
:::

***

## Setup user identification flow

To add the User identification flow to your bot, follow these steps:


1. Navigate to **Studio** > **Build** > **Conversation settings**.
   
   ![](https://i.imgur.com/f0p7mxb.png)


2. On the pop-up screen that appears, click **User identification**.

  <center><img src="https://i.imgur.com/dqW7gKF.png" width="60%"/></center>

3. Select the relevant identification flow - [Phone identification flow](#phone-identifier-flow), [Email identification flow](#email-identifier-flow) or [Custom property flow](#custom-property-flow).

   <img src="https://i.imgur.com/BGOG8WX.png" width=""/>

### Phone identifier flow
  
   Select this option if the `phone` user property serves as the unique identifier for your users. Make sure to collect the phone number and store it in the `phone` user property, which is already set by default for this identifier flow.

   ![](https://i.imgur.com/1GIGNvw.png)

 ### Email identifier flow
 
 Select this option if `email` user property serves as the unique identifier for your users. Make sure to collect the email address and store it in the `email` user property, which is already set by default for this identifier flow.

   ![](https://i.imgur.com/52UpNaU.png)

### Custom property identifier flow

Select this option if the unique identifier of your users is any property other than email or phone. In this case:


1. Choose the custom property that serves as the unique identifier for your users. Please note that only String, Number, email, and phone data types are supported for the custom property.
   
   <img src="https://i.imgur.com/fqhxItb.png" width="50%"/>
   
2. To create a new property and store it as userId, click on **+Create new user property** > Enter **Property name** and choose **Property type** > Click **Add**.
  
   <img src="/img/cdp/customproperty.png" width="60%"/>

3. Collect property value.

   #### 1. To collect property values from user input

   Collect the selected user property using the [Prompt node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) and use **Save response in** to map the variable to the user property.

   #### 2. To capture property values from the bot script

   Use the syntax: `data.variables.variableName`

   <img src="https://i.imgur.com/vwCUkDo.png" width="60%"/>

   For example, in the sample script below, to capture the phone number as the userId, use `data.variables.phoneNumber`:

   ```js
   `<script type="text/javascript">`  
   window.ymConfig = {"bot":"x1673261303850","host":"[https://cloud.yellow.ai](https://cloud.yellow.ai/)", "payload":{"name":"Tom","phoneNumber":"9090000000","email":"[tom@example.com](mailto:email@example.com)"},};  
   (function() {  
   var w = window,  
   ic = w.YellowMessenger;  
   if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);  
   else {  
   var d = document,  
   i = function() {  
   i.c(arguments)  
   };  
   function l() {  
   var e = d.createElement("script");  
   e.type = "text/javascript", e.async = !0, e.src = "[https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js](https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js)";  
   var t = d.getElementsByTagName("script")[0];  
   t.parentNode.insertBefore(e, t)  
   }  
   i.q = [], i.c = function(e) {  
   i.q.push(e)  
   }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)}  
   })();  
   </script>

   ```



   #### 3. To capture property values from Function
   
   You can use the Function node to capture and store the variable in the respective user property.

   For instance, here `returnId` is the function name containing the provided code.


   ```js
   return new Promise(resolve => {
      let payload = data.profile.payload
      if (typeof (payload) === "string") {
         payload = JSON.parse(payload);
      }
      console.log(payload);
      ymLib.logger.log(payload,"init--Payload");
      resolve(payload)
   });
   ```
   
   Store the response returned by the Function in the corresponding variable, in this case, 'userId`.

   <img src="https://i.imgur.com/qqltmgO.png" width="70%"/>


   #### 4. To capture property values from payload

   First, store the payload in an object variable.

   <img src="https://i.imgur.com/ZdyD8u7.png" width=""/>

   Sample payload

   ```js
   {
      "name": "Tom",
      "phoneNumber":"9090000000",
      "email":"tom@example.com"
   }
   ```

   To access a specific key value from the object variable, use the syntax:  `{{{variables.objVariableName.key}}}`

<img src="https://i.imgur.com/vwCUkDo.png" width="60%"/>

   For example:

   * `{{{variables.userData.phoneNumber}}}`
   * `{{{variables.userData.email}}}`

:::note
* You can also use SDK APIs to programmatically set user properties and the user ID. 
* You can also make use of Function to extract the required information from a payload. 
:::

<!--
   **Collect values that comes through payload**

   * To capture a user property from a payload, use the funtion node and store the response in an object variable and retrieve it using the format: `variables.objVariableName.key` (as per the schema).

   <img src="https://i.imgur.com/g4zb0a8.png" width="70%"/>

**Collect values that comes through function**

   * To capture properties from a function, store the response in a property or object variable depending on the response and store it in the user property using: `{{variables.responseVariable.key}}`.

   <img src="https://i.imgur.com/g4zb0a8.png" width="70%"/>

   > Learn how to usilize the [Function node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function) to capture data from the payload.

:::note
You can also use SDK APIs to programmatically set user properties and the user ID.
:::

4. Store the value in the relevant user property.

   The following screenshots on how to store data captured through user input or payload in a user property. 
   
   ![](https://hackmd.io/_uploads/B1kn1dsHn.png)


  <img src="https://i.imgur.com/U5Rg8pe.png" width="70%"/>

:::caution
In the User identification flow, if you don't store the user property correctly, the bot will stop and won't continue. If the user prompts the bot again, the user identification flow will start again as shown below.

<img src="https://hackmd.io/_uploads/H11CsQqS2.png" width="50%"/>

So, if the user property is not captured correctly, this loop will continue, and the end user will be stuck.
:::


#### Collect user properties from functions or payloads

To collect user properties from functions or payloads:


2. As the first step, collect the customer information. Use the **Question** node to collect the order ID  and store the response in a custom variable (static or dynamic value). Ensure you set the right data type for the [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).

   ![](https://i.imgur.com/3Nr7T6u.png)

-->



***

**What next?**

* See [how to capture user properties from bot conversation](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data).
* Know [how to create personalized conversations in bot conversations](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/personalise_conversations)