---
title : How user records are created through conversations & unified in User 360
sidebar_label : User records creation & unification process
---

This article provides complete information on how user records are automatically created in User 360 and unified based on bot conversations.

Bot users are classified into the following categories:

1. Unidentified user - A user whose user ID is not known or captured by the bot yet.
2. Identified user - A user whose user ID has been captured by the bot.

## How are unidentified records auto-created from bot conversations?

When a user starts a conversation with the bot and starts capturing user properties, it automatically creates a new unidentified record in User 360. A record for which the user ID is unknown is considered as an unidentified record.

   ![](https://i.imgur.com/3nMWou9.png)

Any user property captured during the session will be stored in that unidentified record, until the userId is captured. 

For instance, if a user starts a conversation and provides his name, an unidentified record will be created with the given name.

<center>
   <img src="https://i.imgur.com/afNlSpI.png" width="80%"/>
   </center>

As the user provides more user properties, the record will be updated accordingly.

<center>
   <img src="https://i.imgur.com/qLFP8CG.png" width="70%"/>
</center>


<!-- * All user properties captured for a record will be mapped to the user as soon as the `userId' is captured during the session.

   ![](https://i.imgur.com/zsOnheR.png) -->

***

## What happens to the record when the user is identified?

A user is identified through the user ID. A user ID is a unique indetifier such as mobile number, email address, or any other identifier such as driving livence number. 

You can capture the user ID through Prompt or Variable nodes when creating bot flows. The following sections explain how the current record is affected based on the user ID provided.


### When a new user ID is captured

If the provided user ID does not exist in User 360, the current record will be updated with the user ID without affecting the details captured during the session.

   <img src="https://i.imgur.com/kF52Va6.png" width="80%"/>

### When an existing user ID is captured

If the provided user ID already exists, it **switches** the mapping to the existing record and **merges** new details overriding the existing data.

1. It **Switches** to the existing record.

   ![](https://i.imgur.com/Nc27feD.png)

2. It then **Merges** the details that are not available in the existing record.

  <center>
   <img src="https://i.imgur.com/u9IKhBA.png" width="70%"/>
   </center>

   * **Properties with single values**: The user properties that do not exist in the identified record will be migrated from the unidentified record. For example, refer to firstName and whatsAppOptin in the above table.
   * **Properties with list values**: The values will be unified. Example: `lable` the above table.
3. It deletes the unidentified record after merging.


## Scenarios in which merging of user properties happen

There are two scenarios in which merging of user properties can happen.

#### Scenario 1: When an unidentified record is identified as an existing record

This happens when an user ID provided for an unidentified record already exists in User 360.

In this, the mapping **Switches** to the existing record and the details that are not available in the existing record will be updated as explained in the following.

   ![](https://i.imgur.com/Nc27feD.png)

   ![](https://i.imgur.com/xFUSJAn.png)

See the [Effect of merging on user properties](#effect-of-merging-on-user-properties).

#### Scenario 2: When an unidentified record is identified on a different channel

Consider a user who is on WhatsApp is identified on Web bot with the same user ID. Similar to the previous case, it switchs the current mapping to the existing record and then merges new details. For instance, consider a user already on WhatsApp, started a conversation on the web bot and provides the same user ID.

<img src="https://i.imgur.com/pWmUi55.png" width="80%"/>

The existing property values will remain unchanged, and any missing property values will be added to the existing account.

<img src="https://i.imgur.com/rCfeZ4y.png" width="90%"/>

See the [Effect of merging on user properties](#effect-of-merging-on-user-properties).

### Effect of merging on user properties

 The following are the effects of account merging:

<img src="https://i.imgur.com/Y82Fghd.png" width="70%"/>


* **Properties with single values**: The user properties that do not exist in the identified record will be migrated from the unidentified record. For example, refer to firstName and whatsAppOptin in the above table.

   ![](https://i.imgur.com/CeMfVHt.png)

   * **Properties with `list` values**: The values will be unified. Example: `lables` the above table.

   ![](https://i.imgur.com/82kmphS.png)

*  **Unidentified record** will be deleted post-merging.
   

## What happens when the user ID is recaptured?

There could be cases when a user ID is recaptured. For example, the user logs out and logs in again or when the user whats interacts with the bot with a different user ID.

### When the new user Id already exists

When a user provides a new user ID that already exists in User 360, the chatbot will switch the current record mapping to the respective record that already exists. It uses information associated with that user ID to personalize conversations.

   ![](https://i.imgur.com/XtCkcOF.png)

### When the new user Id does not exist

The chatbot will create a new record with the provided user ID. This means that the chatbot will treat the user as a new user and will not have access to any previous information or conversation history associated with that user. However, the chatbot can still capture new information about the user's preferences and behavior going forward, which can be used to personalize future interactions.

   ![](https://i.imgur.com/7K01MNK.png)

