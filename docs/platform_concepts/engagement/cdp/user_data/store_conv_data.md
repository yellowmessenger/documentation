---
title : Store conversational data in User 360
sidebar_label : Store user data in User 360
---


## Store user ID through Builder

There are three ways in which you can capture the user ID through bot Builder.

### Using Prompt nodes

When capturing user information through [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes), you can store a specific user response both as a property value and user ID. For example, if mobile number is the unique identifier, you can use the prompt node, Phone and store the user's response in phone property and user ID simultaneously. 

To do this: 
1. Open the Prompt node that you want to set as the user ID.
2. In **Store response in**, choose the user property where you want to store the user's response.
3. Click on **Make prompt smarter**.
4. Check Use this as unique id for user.

  <center><img src="https://i.imgur.com/Vq38RIl.png" width="60%"/></center>


:::note
You cannot update a user ID once it is added. If the user ID is captured again in a flow 
* it will map to the existing record if it already exists.
* it will create a new user ID if it does not exist. To know about user identification in Builder, see [How user records are created through conversations & unified in User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers).
:::

### Using the Store response in option

In [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes), you can set **Store response in** as `userId` to store that specific user input to user ID.

   <center><img src="https://i.imgur.com/1sgic0u.png" width="50%"/></center>

### Using the Variable node

Alternatively, you can also use the Variable node (under Actions) to store a specific property value as user ID. For more details, see [Variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables)

  <center><img src="https://i.imgur.com/mAFehuO.png" width="60%"/></center>

***

## Automated capturing of location-specific data

This optimizes your user profiles with better accuracy and enhances profile completeness, while saving time and effort. By using this information, you can create location-based segments that allow for personalized campaigns and tailored content.

:::note
This is currently supported for web, email, and WhatsApp bots.
:::

The following are the auto-captured details for each bot channel.

Channel | User properties captured | Additional details
--------- | --------------------- | ----------
WhatsApp bot | Phone number, Country code | Captures country code using the phone number.
Web bot | Timezone and country code | Uses IP address to capture these details.
Email channel | Email address | Captures this when a user sends an email for the first time using email ticketing.



***

## Store user properties through Builder

Similar to user ID, you can also store other user properties through the bot Builder. Bots can capture user details and store them in User 360 or other database tables. You can use this to create personalised conversations with bot users based on their previous interactions and preferences.

To store user details (such as name, email address, phone number, and any other relevant information) through the bot, use prompt nodes or variable nodes in the bot Builder.

Once you have captured the user's details, you can store them in User 360 table or other database tables. This will enable you to access and use the user's information in bot conversations.

:::note
* All user properties captured for a record will be mapped to the user as soon as the `userId' is captured during the session.
:::

To store the user’s response in User 360, in **Store Response in**, choose variables only under **User properties**. If a specific user property is not avilable, [create a custom property](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#21-add-user-property) and use it.


   ![](https://i.imgur.com/h8FfpZE.png)






## Update user properties through Builder

Once the user is identified, you can update the user properties (other than user ID) using the Prompt or Vaiable nodes.

:::note
You cannot update user properties once captured. If the user ID is captured again in a flow, it will map to the existing record if it already exists, or create a new user ID if it does not exist. To know about user identification in Builder, see [How user records are created through conversations & unified in User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers).
:::

To update existing user properties:
1. Capture the user property that you want to update using the Variable node or Prompt node, as explained in [Store user ID through builder](#store-user-id-through-builder).

2. Store them in the respective User properties, as explained in [Store user properties through builder](#store-user-properties-through-builder).

In Prompt nodes, choose the relevant name under User properties.

  <center> <img src="https://i.imgur.com/mFz74Ka.png" width="60%"/></center>


In the Variable node, choose the relevant user property or add it manually using the syntax `{{user.propertyName}}`
  <center> <img src="https://i.imgur.com/1MvEa5O.png" width="60%"/></center>


