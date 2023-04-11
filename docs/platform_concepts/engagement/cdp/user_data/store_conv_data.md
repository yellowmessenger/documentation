---
title : Store conversational data in User360 & create personalized conversations
sidebar_label : Store user data & personalize conversations
---


## Store user ID through Builder

There are three ways in which you can capture the user ID through bot Builder.

### Using Prompt nodes

When capturing user information through [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes), you can store a specific user response both as a property value and user ID. For example, if mobile number is the unique identifier, you can use the Phone prompt node and store the user's response in phone property and user ID simultaneously. 

To do this: 
1. Open the Prompt node that you want to set as the user ID.
2. In **Store response in**, choose the user property where you want to store the user's response.
3. Click on **Make prompt smarter**.
4. Check Use this as unique id for user.

  <center><img src="https://i.imgur.com/Vq38RIl.png" width="60%"/></center>


:::note
You cannot update a user ID once added.
:::

### Using the Store response in option

In [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes), you can set **Store response in** as `userId` to store that specific user input to user ID.

   <center><img src="https://i.imgur.com/1sgic0u.png" width="50%"/></center>

### Using the Variable node

Alternatively, you can also use the Variable node (under Actions) to store a specific property value as user ID. For more details, see [Variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables)

  <center><img src="https://i.imgur.com/mAFehuO.png" width="60%"/></center>


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



