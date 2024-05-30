---
title: Generate and implement YM authentication tokens
sidebar_label: YM authentication 
---

## YM authentication overview

Yellow.ai Messenger (YM) authentication facilitates the seamless synchronization of previous chat conversations across different devices for authenticated users. Businesses using the yellow.ai bot can configure YM authentication tokens. 

This enables users to access and review their historical conversations, ensuring a consistent chat experience. Users can seamlessly pick up where they left off, regardless of the device used to log into the bot.



**What is YM authentication token?** 

The YM authentication token is a unique ID assigned by the organization to each user. This ID, selected by the organization and provided to the yellow.ai team, should be unique for every customer. Examples of suitable YM authentication tokens include phone numbers, user account numbers, email IDs, reference numbers, etc in an encoded format.

:::note
In the backend, changing YM Auth tokens and UIDs occurs at regular intervals to ensure data security through YM authentication.
:::
    
    
**Use cases**: 
1. **Seamless conversations across devices**: Users can switch devices without losing chat history, ensuring a smooth experience.
2. **Tailored customer support**: Agents use past conversations to provide personalized assistance.
3. **Enhanced security measures**: Regular changes in authentication tokens protect against unauthorized access.
4. **Data privacy compliance**: Users control and manage their chat history for privacy compliance.
5. **Multi-user privacy**: Authentication ensures private chat histories in shared device environments.


**Who can use YM Auth**: 

- **E-commerce**: Users can review past orders and track deliveries through chat history.
- **Banking and finance**: Customers access transaction details and support interactions from previous sessions.
- **Healthcare**: Patients can refer to past health-related discussions for continuity.
- **Travel and hospitality**: Travelers retrieve booking information and preferences from their chat history.


This guide outlines how organizations can configure YM authentication, enabling customers to access their chat histories for a more seamless and personalized experience.



----

## Configure YM authentication token 

**YM authentication token workflow:**

<img src="https://imgur.com/ujFMaNs.png" alt="drawing" width="75%"/>

**YM authentication workflow**: 

1. Your backend initiates an API call to Yellow.ai to **encrypt** the YM authentication token.
2. The frontend UI uses the encrypted data (payload) to **load** the customized Yellow bot. 
3. Yellow's backend **validates** the passed token: 
    - If identified and validation is **successful**, the user's previous conversation is loaded onto the bot.
    - If validation **fails**, an event is sent to your backend, requesting a new token creation. Your platform generates a new token for the user, serving as a new token for the chat, and tracks the new conversation.

Steps to configure YM authentication token are mentioned below: 

### <a name="i1"></a>  Step 1: Make an API call to encrypt your token

**Here is the API (cURL request) to encrypt your token**: 

```
curl --location --request POST 'https://{{bot-region}}.cloud.yellow.ai/api/plugin/encryptYmAuth' \
--header 'content-type: application/json' \
--header 'x-api-key: {{generate api key from platform}}' \
--data-raw '{
    "ymAuthenticationToken": {{ymAuthenticationToken}},
    "botId": {{botId}}
}'
```


Parameter | Datatype | Description
--------- | -------- | -----------
`{{ymAuthenticationToken}}` | String | This is the unique identifier (string value that changes for each user and each log-in) assigned to users for validation |
| `x-api-key` | String | This is the access key. Generate a new API key with **Developer role**, follow [these steps](https://docs.yellow.ai/api#generate-api-keys) on your respective bot |
| `{{botId}}` | String | This is your bot ID. It can be obtained by logging into the Yellow platform and copying it from the bot URL. Refer to [this guide](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/publish-env#finding-your-bot-id) to know how |

**Expected response**: 

```json
{
    "success": true,
    "message": "Success",
    "data": {
        "token": {{encrypted token}}
    }
}
```



**Action on the Yellow.ai backend:**

The following details (flags) are set to the respective keys while mapping on the Yellow.ai platform:

```
isSecuredYmAuth : true
ymAuthSessionDurationInSec : 1800 (30min default)
```

Parameter | Datatype | Description
--------- | -------- | -----------
`ymAuthSessionDurationInSec` | Numeric | This defines the expiry of a token. Each time a token expires, an event is sent to your platform to generate a new token through the API, and the encrypted payload can be sent. This case must be handled on your backend to reload the bot with the fresh token. |

### Step 2: Include the encrypted token in the bot script

Pass the encrypted token in `ymAuthenticationToken` as shown below: 

```json
window.ymConfig = {
    "bot": "×1655700426047", // Add your bot ID
    "host": "https://cloud.yellow.ai",
    "payload": {},
    "ymAuthenticationToken": "{{userIdentifier}}"
};
```

### Step 3: Validate the token for success/failure

#### Success 

The YM authentication token is validated, and the chat is successfully loaded. Previous chats can be accessed on the bot.


#### Failure 

Validation fails when the token expires due to customer inactivity. In such situations, a function must be called assigning the `refreshUI` value. Follow these steps:

1. Add an **event listener** on your platform to identify if the token gets expired in between the conversation of the chat bot. Use:
    - **Event name**: ym-revalidate-token
    - **Data**: currentToken, refreshUI (true/false value stating if the bot is currently in open state)
2. Obtain a **new encrypted token** by calling the encrypt API (cURL) mentioned above in [Step #1](#i1).
3. Pass the newly generated encryption token to the bot by calling the below **function**.
    - `refreshUI`  flag must be passed as false if you want the bot to remain open and show the loading spinner while the input box is disabled. If it is not false, the bot closes and opens again, which might confuse your customer.
    ```
    window.YellowMessengerPlugin.revalidateToken(token: string, refreshUI = true)
    ```

:::info
Click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/secure-ymauth) to learn how to add YMAuth token for Mobile SDK.   
::: 
