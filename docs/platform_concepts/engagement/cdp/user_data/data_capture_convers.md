---
title : How user records are created through conversations & unified in User 360
sidebar_label : User records creation & unification process
---

This article provides complete information on how user records are automatically created in User 360 and unified based on bot conversations.

## Automated record creation for unidentified users

An unidentified user record is created automatically in User 360 when a user initiates a bot conversation. A record for which user ID is unknown is deemed as an unidentified record.

   ![](https://i.imgur.com/3nMWou9.png)

The unidentified record will contain all user properties captured during the session, except for the userId. 

For instance, if a user starts a conversation and provides his name, an unidentified record will be created with the given name.

   <img src="https://i.imgur.com/afNlSpI.png" width="80%"/>

As the user provides more user properties, the record will be updated accordingly.

   <img src="https://i.imgur.com/qLFP8CG.png" width="70%"/>


<!-- * All user properties captured for a record will be mapped to the user as soon as the `userId' is captured during the session.

   ![](https://i.imgur.com/zsOnheR.png) -->

***

## User identification via user ID

A user ID is a unique indetifier such as mobile number, email address, or any external identifier such as driving livence number. It is used to identify users across different channels. When creating bot flows, you can set the unique identifier using Prompt or Variable nodes.

### Effect of user ID on existing record

The system stores the user property details captured during the session in the User 360 table. When the user ID is obtained, the system identifies the user in the existing records, which can result differently depending on the identifier type as explained in the following sections.

#### When a new user ID is captured
If the user ID does not exist in User 360, the current record will be updated with the user ID without affecting the details provided during the session.

   <img src="https://i.imgur.com/aE7zT9i.png" width="80%"/>

#### When a user ID existing on the same channel is captured

If the User ID already exists in User 360, the session is mapped to the existing record and the user properties that are currently not available in that record will be updated (Switch concept).

<img src="https://i.imgur.com/eiFCy90.png" width="80%"/>


#### When a user ID existing on a different channel is captured

If the user identified on a different channel, the session will switch the current mapping to the existing record - Account merging happens. For instance, consider a user already on WhatsApp, started a conversation on the web bot and provides the user ID.

<img src="https://i.imgur.com/pWmUi55.png" width="80%"/>

The existing property values will remain unchanged, and any missing property values will be added to the existing account.

<img src="https://i.imgur.com/rCfeZ4y.png" width="90%"/>


### Effects of account merging

 The following are the effects of account merging:

<img src="https://i.imgur.com/Y82Fghd.png" width="70%"/>

* **Properties with single values**: The user properties that do not exist in the identified record will be migrated from the unidentified record. For example, refer to firstName and whatsAppOptin in the above tables.
* **Properties with list values** (Enum):  The values will be unified. For example, refer to deviceToken and Tags in the above tables.
*  **Unidentified record** will be deleted post-merging.