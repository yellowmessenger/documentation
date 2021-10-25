# Chat Auto translate

## How to use Inbox's Auto translate
Inbox’s Auto-translate feature provides a real-time 2-way translation between the agent as well as the end-user for over 100+ languages. This allows both the parties to speak in their preferred language while the system takes care of their near-instant translation.

#### Enabling auto translate:
To enable chat auto translate,
>Go to Inbox -> Chats -> Settings -> Chats configuration -> Chat auto translate

![Chat auto translate](https://cdn.yellowmessenger.com/V5AZb4EivnvU1634802769954.png)

Now turn on the toggle. Add your Google Cloud Translate API key in its input field.  
[Here's how you can generate your own google translate API key](https://docs.yellow.ai/docs/platform_concepts/inbox/google-translate-api-inbox/)

Once your API key is validated, you would get a success notification. If not, pls check the API key and try again. If 
the issue persists, regenerate the API key.
![API Success](https://cdn.yellowmessenger.com/sznmMoQf9xkT1634802877386.png)

![API Fail](https://cdn.yellowmessenger.com/4unnXpXEglAD1634802950978.png)

#### Changing Agent’s language: (optional)

English is the default agent messaging language. If you want to change your agent’s messaging languages,

>Go to Inbox -> Chats -> Settings -> Agents configuration. Select the edit icon for that particular agent and change the Default language

![Default language](https://cdn.yellowmessenger.com/twEksPNGUa691634803072880.png)

#### Auto translate in Action:

Any incoming language will be auto-detected by the system. You can also hardcode to translate only a particular set of languages.

Once a foreign language is detected, Agents can identify the language at the top of their chat input box. If needed, agents can manually change the language also
![Language detection](https://cdn.yellowmessenger.com/x6YX7Sw670lb1634803196101.png)

![Change language](https://cdn.yellowmessenger.com/F8nooNQW9uda1634803257954.png)

Now all incoming and outgoing messages would be translated according to the agents’ and end-users preferred language. Agents can toggle and see both the original and translated message by clicking on the label - **Show translated / Show original** below each message as shown below,
![Labels](https://cdn.yellowmessenger.com/Pa8yHsOjOt101634803395295.png)

If for any reason, the agents want to send a generic message such as address without being translated, then all they need to do is to disable this toggle in the chat input box. This will stop translation for that message alone.
![Toggle off](https://cdn.yellowmessenger.com/sgxn9hy3kr2G1634803422903.png)

After that message is sent, the toggle will automatically enable itself for the translation of the next message.


### Note:

- The cost of the Translate API is borne by the client.
    
- You can either choose to auto-translate all the incoming languages or hardcode to translate only a particular set of languages. Note that if you’ve set to auto-translate any language in the bot, it’ll likely increase the billing
    
- The translation will also work when transferring chats. For example, when agent ‘A’ whose default language is English transfers the incoming French chat to agent ‘B’ whose default language is Hindi, our system will translate all the previous messages from English to Hindi for agent ‘B’.
