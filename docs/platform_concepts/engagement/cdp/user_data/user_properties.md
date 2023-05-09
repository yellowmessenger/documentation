---
sidebar_label: User properties
title: User properties
---

## User properties overview

Properties are individual fields to be captured for a customer. For example, name, phone number, gender, email address and more. There are several predefined fields that you can use to capture a user's data. You can also create custom properties if required.

A customer is identified with a unique identifier `userId`. This can be any unique identifier such as mobile number, email adress, or any other identifier. However, you can set only one property for the `userId` for your org.



:::info
This is enabled only for https://cloud.yellow.ai
:::


We store three types of data about your users:

1. [System user properties](#system-user-properties): A default set of data that you can capture about your users.
2. [Custom user properties](#custom-user-properties): Custom data that you can capture about your users and send us.
3. Events: Data that records specific activities of your users.

  






***


## System user properties

System properties are the default user properties that contain the essential data organizations need to capture from their users. If you need to capture additional information, you can [create custom user properties](#custom-user-properties).

  
The following are the available system user properties, you can see these in User 360.

| **Property Name** | **Data Type** | **Description** |
|-------------------|---------------|------------------------|
| userId | string | Unique identifier for a user. <br/>NOTE: This can be passed |
| firstName | string | The first name of the user |
| lastName | string | Last name of the user |
| gender | string | Gender of the user |
| country | string | Country of the user. In bot conversation, it identifies this property based on the location of the user’s IP address |
| city | string | City of the user. In bot conversation, it identifies this property based on the location of the user’s IP address |
| ip | string | In bot conversation, it fetches this property from the user’s browser |
| latitude | number | In bot conversation, it identifies this from the location of the user’s IP address |
| longitude | number | In bot conversation, it identifies this from the location of the user’s IP address |
| language | string | Preferred language of the user |
| timezone | string | Identifies based on the location of user's IP address |
| email | email | Email address of the user |
| phone | phone | Phone number of the user with country code |
| lastChannel | string | Recent channel (set up on yellow.ai) where the user had an active session <br/>You can update this property to cover touch-points/channels outside yellow.ai. |
| dob | date | Date of birth of the user. |
| lastSession | dateTime | timestamp of the last time the user had an active session on one of the channels set up on yellow.ai NOTE: You can update this property to cover touch-points/channels outside yellow.ai |
| emailOptin | boolean | Subscription status of the user to emails. The value is `true` if a user has subscribed to your emails, else it is `false` |
| smsOptin | boolean | Subscription status of the user to SMS. The value is `true` if a user has subscribed to your SMS, else it is `false` |
| whatsAppOptin | boolean | WhatsApp subscription status of the user. This is `true` if a user has subscribed to your WhatsApp messages, else it is `false`. |
| createdAt | dateTime | Timestamp of when the user record was created |
| updatedAt | dateTime | Timestamp of when the user record was recently updated |
| tags | list | List of groups associated to the user. You can add tags to users manually. |


### 1. `User ID` (userId) as a property


`userId` is a unique property in the users schema and is used to identify a user.

You need to set a userId (a unique user identifier) for every user that you create, to be able to recognise them as the same user on multiple touch-points. If `userId` is the same as email, you might want to pass it both as `userId` and email address. 

Passing the userId for your users will allow you to identify them on multiple touch-points, which will further allow you to:

   <img src="https://i.imgur.com/aWczHLm.png"/>

- Offer personalised engagement across multiple touch-points/channels
- Enrich the profile of that user with the data collected from multiple touch-points/channels

You can use `userId` to identify a user and use it to capture add/update user data, capture data through bot conversation.

:::warning
No two users can have the same userId
:::


### 2. `Tag` as user property

A tag is a label used to categorise users based on certain characteristics or attributes. These labels can be used to segment customers into different groups for targeted marketing, sales, or customer service efforts. Some examples of customer labels include High-value, New customer, Inactive, or campaign responders.

A user can have more than one tag.

![](https://i.imgur.com/om7QH6j.png)



## Custom user properties

Custom user properties refer to additional fields that you can create to capture information that is not covered by the default system properties. You can define these custom properties according to your business specific needs and requirements.

For instance, you might want to store details such as the number of times they have visited your pricing page, their department, and their preferred product.


To create a new user property with your preferred label name and datatype, follow these steps:

1. On the **User 360** page, click **User properties**.

   ![](https://i.imgur.com/BOUV1hq.png)

2. Click on **+Custom property**
3. In **Property name**, enter a name for the property. 

   <img src="https://i.imgur.com/KrGzGpD.png" width="60%"/>

3. In **Property type**, choose the data type of the property.

The table lists the different datatypes supported for user properties.

| **Data Type** | **Description** |
|---------------|-----------------|
| string | Stores String data |
| number | Stores positive or negative integer, or a decimal number |
| time | Stores time in hh:mm:ss format |
| date | Stores date in YYYY-MM-DD format |
| datetime | Stores date and time in YYYY-MM-DD hh:mm:ss format |
| list | Stores an array of String values |
| boolean | Stores true or false |
| phone | Stores phone numbers with country code and validates the format by checking country code and number of digits |
| url | Stores URL and validates the format for the same |
| email | Stores email and validates the format for the same |

4. To add more properties, click **New property**.
   
   <img src="https://i.imgur.com/vB9DKVX.png" width="60%"/>

5. Click **Save**.

:::info
Currently, you cannot modify or delete a custom property once created.
:::










<!--

## 3. Create personalised conversations with user properties

If you’ve built a bot on yellow.ai, you can use the [Conversational Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview) to create hyper-personalised conversations based on user properties.

While these user properties are accessible in all the nodes of Studio, we’ll cover some of them with-in this document, to show you how you can create the right conversion for the right set of users.

For more details, see [Using Builder to capture user data through conversations](/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder).

:::info
All user properties are accessible in nodes under “User properties”.
:::

You can improve the engagement rates by creating personalised content. To do this, in your **Message Nodes**, you can can access user properties by clicking on the variable dropdown and selecting any **User Property**, or my simply accessing it using {{user.**propertyName**}}.


<img src="https://i.imgur.com/UWscij0.png" alt="drawing" width="60%"/>

-->