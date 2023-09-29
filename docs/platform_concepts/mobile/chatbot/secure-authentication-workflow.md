# Secure Authentication Workflow for Your Bot for mobile SDK: Managing and Refreshing Authentication Tokens  

- Enable secure YM authentication by setting `config.useSecureYmAuth` to `true` in your bot configuration.
- Initiate an API request to acquire an encrypted **ymAuthenticationToken**.
- During bot initialization, provide the obtained **ymAuthenticationToken** by setting it to `config.ymAuthenticationToken`.
- When the token expires, you'll receive an event with code `ym-revalidate-token` containing data in the form of `{ "refreshSession": true|false }`.
- Make another API request to retrieve a new encrypted **ymAuthenticationToken**.
- Once you receive the new token, update the configuration's **ymAuthenticationToken** with the new value.
- Pass this updated token along with the refreshSession value (obtained earlier) by invoking the revalidateToken function from the Chatbot SDK. - This action will revalidate the token and refresh the chat session.
- If the token proves to be invalid, you will receive a `ym-revalidate-token` once more (up to 3 incorrect attempts), prompting you to repeat the aforementioned steps. Post that you will be shown an error page with Try Again option.

### Bot Session Validation Upon Launch

![](https://cdn.yellowmessenger.com/IwSJq5KuWhFg1695958536969.mp4)

### Revalidating a Loaded Bot Session When It Expires

![](https://cdn.yellowmessenger.com/fJNg53raWVim1695958730603.mp4)