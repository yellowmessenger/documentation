---
title : How user records are created through conversations & unified in User 360?
sidebar_label : How are user records created from conversations & unified in User 360
---

This article provides complete information on how user records are automatically created in User 360 and unified based on bot conversations.

Bot users are classified into the following categories:

1. Unidentified user - A user whose userId is not known or captured by the bot yet.
2. Identified user - A user whose userId has been captured by the bot.



## How are unidentified records auto-created from bot conversations?

When a user starts a conversation with the bot and starts capturing user properties, it automatically creates a new unidentified record in User 360. A record for which the userId is unknown is considered as an unidentified record. The ongoing session is always mapped to the record in user 360 and user properties captured will be stored in that record.

   ![](https://i.imgur.com/bCResoU.png)

   ![](https://i.imgur.com/3nMWou9.png)

The following table summarizes the behavior of userId capturing in User 360.

[UserId captured for the first time](#what-happens-when-a-userid-is-captured-for-the-first-time) | Effect 
----------| ----------
[userId is new](#when-a-new-userid-is-captured) | The current session record will be updated with the provided `userId` without altering the details captured during the session.
[userId exists](#when-an-existing-userid-is-captured) | The mapping switches to the existing record, and any new properties captured during the session are merged.

[UserId recaptured](#what-happens-when-the-userid-is-recaptured) | Effect 
----------| ----------
[userId is new](#when-the-recaptured-userid-does-not-exist) | A new record is created using the provided `userId`.
[userId exists](#when-the-recaptured-userid-already-exists) | The mapping switches to the respective record.


## What happens when a userId is captured for the first time?

In a bot conversation, a user is identified through the userId and can be captured through [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) or [Variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables) nodes. A userId is a unique indetifier such as mobile number, email address, or any other identifier such as driving livence number. 

For more details, see [How to capture userId in bot conversations](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/userid-flow).

The following sections explain how the current record is affected based on the provided userId.


### When a new userId is captured

If the provided userId does not exist in User 360, the current record will be updated with the userId without affecting the details captured during the session.


   <img src="https://i.imgur.com/kWWhX4m.png" width="90%"/>

### When an existing userId is captured

If the provided userId already exists, it switches the mapping to the existing record and merges new details, without overriding the existing data. It then deletes the unidentified record.

These are the steps that take place:

1. It **Switches** to the existing record.

   ![](https://i.imgur.com/OZU7XCI.png)

2. It then **Merges** the details that are not available in the existing record. For more information, see [Effects of merging on user properties](#effect-of-merging-on-user-properties).

  <center>
   <img src="https://i.imgur.com/p9cDdHl.png" width="90%"/>
   </center>

<!--
   * **Properties with single values**:<br/>
   The user properties that are not present in the identified record will be obtained from the unidentified record. For example, refer to `emailOptin` in the above table. <br/>The user properties that already exist in the identified record will be skipped without making any change. For example, refer to `firstName` in the above table.
   * **Properties with list values**: The values will be unified. Example: `labels` in the above table.
   * **Auto-captured property values**: The blank values for country and timezone in the existing record will be updated with the auto-captured values. 
-->

3. It deletes the unidentified record after merging. However, if either country or timezone is already captured in the existing record, no changes will be made to both the values as shown in the following.
 
  ![](https://i.imgur.com/68MCC0a.png)




#### Effects of merging on user properties

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

#### Scnerios where a user record with the same userId exists in User 360

 * The client created the user record via CSV import or API.
 * The same user was already identified once on a different channel.
   

## What happens when the userId is recaptured?

There are situations where a userId may be recaptured. This can occur when a user logs out and then logs back in, or when the user interacts with the bot using a different userId.

### When the recaptured userId does not exist

The chatbot will create a new record with the provided userId. This means that the chatbot will treat the user as a new user and will not have access to any previous information or conversation history associated with that user. However, the chatbot can still capture new information about the user's preferences and behavior going forward, which can be used to personalize future interactions.

   ![](https://i.imgur.com/pPxBuhn.png)


### When the recaptured userId already exists

When a user provides a new userId that already exists in User 360, the chatbot will switch the current record mapping to the respective record that already exists. It uses information associated with that userId to personalize conversations.

   ![](https://i.imgur.com/Ew2Efrb.png)




