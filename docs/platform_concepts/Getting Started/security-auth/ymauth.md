---
title: Generate and implement YM authentication tokens
sidebar_label: YM authentication 
---

## YM authentication overview

Yellow.ai Messenger (YM) authentication facilitates the seamless synchronization of previous chat conversations across different devices for authenticated users. Businesses using the yellow.ai's AI-agent can configure YM authentication tokens. 

This enables users to access and review their historical conversations, ensuring a consistent chat experience. Users can seamlessly pick up where they left off, regardless of the device used to log into the AI-agent.

    
### Use cases

1. **Seamless conversations across devices**: Users can switch devices without losing chat history, ensuring a smooth experience.
2. **Tailored customer support**: Agents use past conversations to provide personalized assistance.
3. **Enhanced security measures**: Regular changes in authentication tokens protect against unauthorized access.
4. **Data privacy compliance**: Users control and manage their chat history for privacy compliance.
5. **Multi-user privacy**: Authentication ensures private chat histories in shared device environments.


### Who can use YM Auth         

- **E-commerce**: Users can review past orders and track deliveries through chat history.
- **Banking and finance**: Customers access transaction details and support interactions from previous sessions.
- **Healthcare**: Patients can refer to past health-related discussions for continuity.
- **Travel and hospitality**: Travelers retrieve booking information and preferences from their chat history.


This guide outlines how organizations can configure YM authentication, enabling customers to access their chat histories for a more seamless and personalized experience.



----

## YM authentication workflow


**YM authentication token workflow:**

<img src="https://imgur.com/ujFMaNs.png" alt="drawing" width="75%"/>

**YM authentication workflow**: 

1. Your backend initiates an API call to Yellow.ai to **encrypt** the YM authentication token.
2. The frontend UI uses the encrypted data (payload) to **load** the customized Yellow AI-agent. 
3. Yellow's backend **validates** the passed token: 
    - If identified and validation is **successful**, the user's previous conversation is loaded onto the AI-agent.
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
| `x-api-key` | String | This is the access key. Generate a new API key with **Developer role**, follow [these steps](https://docs.yellow.ai/api#generate-api-keys) on your respective AI-agent |
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
`ymAuthSessionDurationInSec` | Numeric | This defines the expiry of a token. Each time a token expires, an event is sent to your platform to generate a new token through the API, and the encrypted payload can be sent. This case must be handled on your backend to reload the AI-agent with the fresh token. |

### Step 2: Include the encrypted token in the AI-agent script

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

The YM authentication token is validated, and the chat is successfully loaded. Previous chats can be accessed on the AI-agent.


#### Failure 

Validation fails when the token expires due to customer inactivity. In such situations, a function must be called assigning the `refreshUI` value. Follow these steps:

1. Add an **event listener** on your platform to identify if the token gets expired in between the conversation of the AI-agent. Use:
    - **Event name**: ym-revalidate-token
    - **Data**: currentToken, refreshUI (true/false value stating if the AI-agent is currently in open state)
2. Obtain a **new encrypted token** by calling the encrypt API (cURL) mentioned above in [Step #1](#i1).
3. Pass the newly generated encryption token to the AI-agent by calling the below **function**.
    - `refreshUI`  flag must be passed as false if you want the AI-agent to remain open and show the loading spinner while the input box is disabled. If it is not false, the AI-agent closes and opens again, which might confuse your customer.
    ```
    window.YellowMessengerPlugin.revalidateToken(token: string, refreshUI = true)
    ```

:::info
Click [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/secure-ymauth) to learn how to add YMAuth token for Mobile SDK.   
::: 


-----------

## Enable YM authentication within yellow.ai 

You can enable YM authentication by following these steps: 

1. Log into your Yellow.ai account.               
2. Open **Extensions > Channels > Chat widget**.        
    ![image](https://imgur.com/MFaPDz0.png)
3. Under **Secure bot**, open **Secured YM authentication**. Enable the YM authentication toggle.
![image](https://imgur.com/eP8qy0w.png)
4. You can manage the authentication using two methods: 
    - By using the token generated by Yellow.ai for authentication 
    - By providing your own private key


### YM authentication managed by Yellow.ai 

The YM authentication token is a unique ID assigned by the organization to each user. This ID, selected by the organization and provided to the yellow.ai team, should be unique for every customer. Examples of suitable YM authentication tokens include phone numbers, user account numbers, email IDs, reference numbers, etc in an encoded format.

To enable: 

1. Under **Secure bot**, open **Secured YM authentication**. 
2. Enable the YM authentication toggle. 
3. Select **Managed by yellow**. 
4. Set the default minutes for token session timeout (from 0 to 30).
5. Click **Save changes**. 


<img src="https://imgur.com/dYlBmOK.png" alt="drawing" width="75%"/>


:::note
In the backend, changing YM Auth tokens and UIDs occurs at regular intervals to ensure data security through YM authentication.
:::
 
### YM authentication managed using your own key 

You can use your private key as an authentication token. It serves as a unique and confidential credential that verifies your identity and grants access. Instead of using a username-password combination or an API key, you can authenticate requests by passing your private key.

To enable: 

1. Under **Secure bot**, open **Secured YM authentication**. 
2. Enable the YM authentication toggle. 
3. Select **Bring your own key**.
4. Add YOUR_PUBLIC_KEY. The public key is used to verify the token. Use the following format for token generation:

```c
{
    "ymAuthenticationToken": {{Example_Token__eLqh8P7BR4FL7nQbFwUX5IyzpD5QO2X0ZBjtCmA}}, //Your private key 
    "botId": {{botId}} //Bot ID
}
```
5. Click **Save changes**. 

<img src="https://imgur.com/C5sBTm8.png" alt="drawing" width="75%"/>


