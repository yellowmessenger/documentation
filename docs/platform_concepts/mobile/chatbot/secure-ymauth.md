---
title: Secure Authentication Workflow for Mobile SDK
sidebar_label: Secure Authentication Workflow for Mobile SDK
--- 

The "ymAuthenticationToken" is a unique token that is used to connect the user's identity with the chatbot to fetch chat history (conversations between users and the bot). The chat history includes details such as user’s input, bot responses, and the date and time of the conversation. 

To enhance security and protect the "ymAuthenticationToken" from unauthorized access, you can use the "secure YMAuthentication". This authentication provide additional security to your bot conversations.


The following are the steps involved in setting up secure YMAuthentication: 

1. **Enable secure YMAuthentication**:<br/> Set `config.useSecureYmAuth` to `true` in your bot configuration to activate secure YMAuthentication.
2. **Obtain encrypted ymAuthenticationToken**:<br/> Initiate an API request to acquire an encrypted **ymAuthenticationToken**.
3. **Set ymAuthenticationToken**:<br/> During bot initialization, set the obtained ymAuthenticationToken to `config.ymAuthenticationToken`.
4. **Handle token expiry**:<br/> When the token expires, you will receive an event with the code `ym-revalidate-token`, containing data in the form of `{ "refreshSession": true|false }`.
5. **Retrieve a new token**:<br/> Create another API request to retrieve a new encrypted ymAuthenticationToken.
6. **Update configuration**:<br/> Once you receive the new token, update the configuration’s ymAuthenticationToken with a new value.
7. **Revalidate the token**:<br/> Pass this updated token, along with the "refreshSession" value (obtained earlier), by invoking the revalidateToken function from the Chatbot SDK. This action revalidates the token and refreshes the chat session.
8. **Handling invalid tokens**:<br/> If the token is found to be invalid, you will receive another `ym-revalidate-token` event (up to 3 incorrect attempts). Follow the above steps to revalidate the token. After three unsuccessful attempts, if the token remains invalid, you will be directed to an error page with a *Try again* option.

### Bot session validation upon launch

![](https://cdn.yellowmessenger.com/IwSJq5KuWhFg1695958536969.mp4)


### Revalidating a loaded bot session when it expires

![](https://cdn.yellowmessenger.com/fJNg53raWVim1695958730603.mp4)