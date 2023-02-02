---
sidebar_label: Capture user data through conversations
title: Capture data through Studio & create personalised conversations
---


In a bot conversation, every bot session is mapped to a record in User 360. When building a bot using [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview), you can use [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to capture [User properties](/docs/platform_concepts/engagement/cdp/user_data/user_properties) and store it in the database. 

It can store responses of conversations that involve asking for user details such as name, email, phone number, location, or any system/custom user property in the relevant field. You can also enrich user data and create personalised conversations using [User properties](/docs/platform_concepts/engagement/cdp/user_data/user_properties) in Studio conversations. 

:::note
You need to use the **userId** property to identify a user in a conversation.
:::

## Capture `userId` through conversations

To update `userId` of customers through bot conversations:

1. When building flows in [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview), use the **Prompt** node or *Variables* node. 
3. Click **Make prompt smarter** and scroll-down to the *Additional section*.  

  ![](https://i.imgur.com/t2p6uHD.png)

4. Check **Use this as Unique ID for user**.

   ![](https://i.imgur.com/7TPjvkH.png)



## Capture user properties through conversations

The user record is updated in the database using the session mapping. 

* In the bot Builder, use [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) or [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables/#412-variables--action-node) nodes to capture user properties (such as name, email, phone number, location, or any system/custom user property) through conversations.

<center>
<img src="https://i.imgur.com/p6DvR3D.png" width="60%"/>
</center>

* To extract data from a payload, use the **Input** node and store information in the relevant user property. For example, fetch user details from the user add event payload and store them in relevant user properties. 

   ![](https://i.imgur.com/0kX3iJT.png)



<center>
<img  src="https://i.imgur.com/7ltkBj4.png" width="40%"/>
</center>

:::note
The data captured through Studio conversations for [Identified Users](/docs/platform_concepts/engagement/cdp/user_data/add_user_overview#11-user-types) will be updated automatically in the Users table.
:::

## Fetch user properties through conversations

You can fetch user properties in conversations using the **Text** node by clicking on the variable dropdown and selecting any User Property manually. Instead, you can also use `{{{user.propertyName}}}`.

![](https://i.imgur.com/tFyoRXF.png)


You can also use user properties to improve engagement rates by creating personalised content.

> For example, Hi {{{variables.user_name}}}, you have unlocked an exclusive offer. Shop today and get flat 50% off. 

The property value is fetched from the user record mapped to the current session.



