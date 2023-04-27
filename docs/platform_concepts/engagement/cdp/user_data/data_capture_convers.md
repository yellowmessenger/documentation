---
title : How user records are created through conversations & unified in User 360?
sidebar_label : User records creation & unification process
---

This article provides complete information on how user records are automatically created in User 360 and unified based on bot conversations.

Bot users are classified into the following categories:

1. Unidentified user - A user whose user ID is not known or captured by the bot yet.
2. Identified user - A user whose user ID has been captured by the bot.

## How are unidentified records auto-created from bot conversations?

When a user starts a conversation with the bot and starts capturing user properties, it automatically creates a new unidentified record in User 360. A record for which the user ID is unknown is considered as an unidentified record.

   ![](https://i.imgur.com/3nMWou9.png)

### Auto-capturing of location-specific information

To optimize your user records with better accuracy and enhance profile completeness, the system can auto-capture location specific information for Web and WhatsApp bots.

* For users on web bot, the system automatically captures location-specific information such as timezone and country. By using this information, you can create location-based segments that allow for personalized campaigns in Engage.

<center>
   <img src="https://i.imgur.com/l51XMt7.png" width="80%"/>
</center>

* For users on the WhatsApp bot, the system automatically captures the phone number and identifies their country and name. However, the system may not capture the user's name in all cases, as the user might not have provided it, or the name might contain numbers or special characters that fail validation for the `firstName` and `lastName` properties.

Any user property captured during the session will be stored in that unidentified record, until the `userId` is captured. 


<center>
   <img src="https://i.imgur.com/SL1Z0Ca.png" width="80%"/>
</center>

:::note
To know properties that are auto-captured for different channels, see [Automated capturing of location-specific data](/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#automated-capturing-of-location-specific-data).
:::

<!-- * All user properties captured for a record will be mapped to the user as soon as the `userId' is captured during the session.

   ![](https://i.imgur.com/zsOnheR.png) -->

***

## What happens to the record when the user is identified?

A user is identified through the user ID. A user ID is a unique indetifier such as mobile number, email address, or any other identifier such as driving livence number. 

You can capture the user ID through Prompt or Variable nodes when creating bot flows. The following sections explain how the current record is affected based on the user ID provided.


### When a new user ID is captured

If the provided user ID does not exist in User 360, the current record will be updated with the user ID without affecting the details captured during the session.


   <img src="https://i.imgur.com/kWWhX4m.png" width="90%"/>

### When an existing user ID is captured

If the provided user ID already exists, it switches the mapping to the existing record and merges new details, without overriding the existing data. It then deletes the unidentified record.

These are the steps that take place:

1. It **Switches** to the existing record.

   ![](https://i.imgur.com/v2rK5EV.png)


2. It then **Merges** the details that are not available in the existing record.

  <center>
   <img src="https://i.imgur.com/p9cDdHl.png" width="90%"/>
   </center>

   * **Properties with single values**:<br/>
   The user properties that are not present in the identified record will be obtained from the unidentified record. For example, refer to `emailOptin` in the above table. <br/>The user properties that already exist in the identified record will be skipped without making any change. For example, refer to `firstName` in the above table.
   * **Properties with list values**: The values will be unified. Example: `labels` in the above table.
   * **Auto-captured property values**: The blank values for country and timezone in the existing record will be updated with the auto-captured values.
3. It deletes the unidentified record after merging. However, if either country or timezone is already captured in the existing record, no changes will be made to both the values as shown in the following.
 
  ![](https://i.imgur.com/68MCC0a.png)


## Scenarios in which merging of user properties happen

There are two scenarios in which merging of user properties can happen.

#### Scenario 1: When an unidentified record is identified as an existing record

This happens when an user ID provided for an unidentified record already exists in User 360.

In this, the mapping **Switches** to the existing record and the details that are not available in the existing record will be updated as explained in the following.


   ![](https://i.imgur.com/vfkGucl.png)


See the [Effect of merging on user properties](#effect-of-merging-on-user-properties).

#### Scenario 2: When an unidentified record is identified on a different channel

Consider a user who is on WhatsApp is identified on Web bot with the same user ID. Similar to the previous case, it switchs the current mapping to the existing record and then merges new details. For instance, consider a user already on WhatsApp, started a conversation on the web bot and provides the same user ID.


<img src="https://i.imgur.com/QC5Bf0v.png" width="90%"/>

The existing property values will remain unchanged, and any missing property values will be added to the existing account.


Learn about the [Effect of merging on user properties](#effect-of-merging-on-user-properties).

### Effect of merging on user properties

 The following are the effects of account merging:

![](https://i.imgur.com/hqybAgj.png)

* **Properties with single values**: 
   * The user properties that are not present in the identified record will be obtained from the unidentified record. For example, refer to `WhatsAppOptIn`.
   * User properties that already exist in the identified record will be ignored and no changes will be made to them. For example, `firstName` in the above table.
* **Auto-captured property values**: 
   * If the existing record has blank values, the country and timezone in the existing record will be updated with the auto-captured values.
   * If the existing record has some value for timezone or country, the system will skip those values without making any changes. 
* **Properties with list values**: These values will be unified. Example: `labels` in the above table.
*  The **Unidentified record** will be deleted post-merging.
   

## What happens when the user ID is recaptured?

There could be cases when a user ID is recaptured. For example, the user logs out and logs in again or when the user whats interacts with the bot with a different user ID.

### When the new user Id already exists

When a user provides a new user ID that already exists in User 360, the chatbot will switch the current record mapping to the respective record that already exists. It uses information associated with that user ID to personalize conversations.

   ![](https://i.imgur.com/Ew2Efrb.png)


### When the new user Id does not exist

The chatbot will create a new record with the provided user ID. This means that the chatbot will treat the user as a new user and will not have access to any previous information or conversation history associated with that user. However, the chatbot can still capture new information about the user's preferences and behavior going forward, which can be used to personalize future interactions.

   ![](https://i.imgur.com/pPxBuhn.png)


