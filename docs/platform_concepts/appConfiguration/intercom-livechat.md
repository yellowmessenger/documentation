---
title : Intercom Live Chat
sidebar_label : Intercom Live Chat
---

## Configuration

Inside your project, navigate to the Integrations tab and on the left side bar select Live Chat. You will find Intercom Live chat

<img src="https://cdn.yellowmessenger.com/FCpN0L5knXru1659415026015.png" alt="drawing" width="60%"/>

Copy webhook details from the Integrations page and enter it in Settings -> Webhooks.
Add conversations.admin.replied and conversations.admin.closed topics.

You’ll need to provide an Intercom access token, which you can find inside your intercom developer app → Configure → Authentication → Access Token. Then click on connect.

If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::


## Use Case

In this integration you can use raise ticket node to create a conversation with intercom agent and once conversation initiates the user can talk to the intercom agent, once the conversation between them ends bot takes over the conversation with user.

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

<img src="https://cdn.yellowmessenger.com/vPfrT6YtytSl1649093680793.png" alt="drawing" width="60%"/>

### Events
Following are the events which are currently accommodated in the Integration:

Event | Description
----- | -----------
intercom_message_reply | This event reaches to bot when intercom agent sends a reply to the user.
intercom_agent_assigned | This event reaches to bot when any of the intercom agent accepts your ticket.
ticket-closed | This event reaches to bot when intercom agent closes the user ticket.

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

## Support

- The text and attachments (image, file, video) are being supported from both user and agent side.
- Custom fields:
  1. Go to Contacts -> All Users -> Most Recent Contact. 
        <img src="https://cdn.yellowmessenger.com/x4P2ag2ZC6H81659415284082.png" alt="drawing" width="60%"/>
  2. Under the Qualification section you can see the Settings icon. Click on it, you'll be redirected to the Qualifications Settings page.
      <img src="https://cdn.yellowmessenger.com/JRRUX7AVT3KM1659415407598.png" alt="drawing" width="60%"/>
  3. By clicking on the Add Data button, you can see the option to Add New Data which is used to add custom fields.
  4. In the bot, you can see a field for “Intercom Live Agent Custom Fields” (if intercom integration is connected). Assign a variable of type object to this field.
  5. That object variable needs to have custom fields as keys.
      <img src="https://cdn.yellowmessenger.com/J45aWDeb3npo1659415443360.png" alt="drawing" width="60%"/>


## Reference

https://developers.intercom.com/intercom-api-reference/reference#conversation-model