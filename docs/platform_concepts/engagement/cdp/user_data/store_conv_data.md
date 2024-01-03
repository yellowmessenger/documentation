---
title : Add or update user properties from bot conversations
sidebar_label : Add/update user properties from bot conversations
---

## Auto-capturing of location-specific user properties 


The system can automatically capture essential user details based on the user's location for both Web and WhatsApp bots.

Channel | User properties captured | Additional details
--------- | --------------------- | ----------
WhatsApp bot | Phone number, Country code | Captures `country` using the country code in phone number. However, the system may not capture the user's name in all cases, as the user might not have provided it, or the name might contain numbers or special characters that fail validation for the `firstName` and `lastName` properties.
Web bot | Timezone and country code | Uses IP address to capture these details.

:::note
This is currently supported for web, and WhatsApp bots.
:::

<!--
## Store `userId` from bot conversation

### Significance of identifying users

The user identification is an important aspect of bot conversation design, as it allows for a more personalized and engaging user experience. User identification helps in the following:

* **Personalized responses**: When a user is identified, the bot can tailor its responses to the individual user's needs and preferences. This can lead to more relevant and helpful responses, which can improve the overall user experience.
* **Context maintenance**: User identification allows the bot to maintain context throughout the conversation and across different channels. This means that the bot can use user data and the interaction with the user, and use that information to provide more accurate and useful responses in subsequent interactions.
* **Improved engagement**: By providing personalized responses and maintaining context, the bot can create a more engaging conversation with the user. This can lead to increased user satisfaction and higher levels of engagement with the bot.
* **Better data collection**: User identification also allows the bot to collect more detailed and accurate data on individual users. This can be used to improve the bot's performance over time, by providing insights into user behavior and preferences.

There are three ways in which you can capture the userId through bot Builder.

:::note
To understand the significance of the userId in a record and its impact on the current session record, see [this section](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers).
:::

***

### Using Prompt nodes

When capturing user information through [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes), you can store a specific user response both as a property value and userId. For example, if mobile number is the unique identifier, you can use the prompt node, Phone and store the user's response in phone property and userId simultaneously. 

To do this: 
1. Open the Prompt node that you want to set as the userId.
2. In **Store response in**, choose the user property where you want to store the user's response.
3. Click on **Make prompt smarter**.
4. Check Use this as unique id for user.

  <center><img src="https://i.imgur.com/Vq38RIl.png" width="60%"/></center>


:::note
You cannot update a userId once it is added. If the userId is captured again in a flow 
* it will map to the existing record if it already exists.
* it will create a new userId if it does not exist. To know about user identification in Builder, see [How user records are created through conversations & unified in User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers).
:::

### Using the Store response in option

In [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes), you can set **Store response in** as `userId` to store that specific user input to userId.

   <center><img src="https://i.imgur.com/1sgic0u.png" width="50%"/></center>

### Using the Variables node

Alternatively, you can also use the Variable node (under Actions) to store a specific property value as userId. For more details, see [Variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables)

  <center><img src="https://i.imgur.com/IAfz380.png" width="70%"/></center>

***

-->


## Different ways to add/update user properties

There are four different ways in which you can capture user properties:

### Store user properties from bot conversations

In addition to the userId, you can also store other user properties in real-time within the user record. User properties are stored in the current record, which is mapped in User 360. You can utilize these properties to [create personalized conversations](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/personalise_conversations) with bot users, taking into account their previous interactions and preferences.



To store user details (such as name, email address, phone number, and any other relevant information) through the bot, use [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) or [Variables node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables) in the bot Builder.


:::note
* All user properties captured for a record will be mapped to the user as soon as the `userId' is captured during the session.
:::

To store the user’s response in User 360, in **Store Response in**, choose variables only under **User properties**. If a specific user property is not avilable, [create a custom property](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#custom-user-properties) and use it.


   ![](https://i.imgur.com/h8FfpZE.png)


 ### Capture user property values from the bot script

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



### Capture user property values from Function
   
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


### Capture user properties from API or integration action payload

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


***

## Update user properties through bot conversations

Once the user is identified, you can update the user properties (other than userId) using the Prompt or Vaiable nodes.

:::note
You cannot update user properties once captured. If the userId is captured again in a flow, it will map to the existing record if it already exists, or create a new userId if it does not exist. To know about user identification in Builder, see [How user records are created through conversations & unified in User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers).
:::

To update existing user properties:
1. Capture the user property that you want to update using the Variable node or Prompt node, as explained in [Store userId through builder](#store-user-id-through-builder).

2. Store them in the respective User properties, as explained in [Store user properties through builder](#store-user-properties-through-builder).

  * In Prompt nodes, choose the relevant name under User properties.

  <center> <img src="https://i.imgur.com/mFz74Ka.png" width="60%"/></center>


  * In the Variable node, choose the relevant user property or add it manually using the syntax `{{user.propertyName}}`

  <center> <img src="https://i.imgur.com/1MvEa5O.png" width="60%"/></center>

  * Furthermore, learn [how to capture variables from Functions, Payload, and Bot script](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/userid-flow#custom-property-identifier-flow). Please note that the process for capturing userId or any  any other user property remains the same.
 
***

