---
title: Slack
sidebar_label: Slack
---

Slack is a workplace communication tool, “a single place for messaging, tools, and files.” This means Slack is an instant messaging system with lots of add-ins for other workplace tools. Slack has an intuitive UI with both group and person-to-person messaging. These are more than 1500 apps and allow users to create their own app, which has evolved Slack to become a one-stop-shop for a lot of users.

In this article, you will learn: 

* [How to create an app on Slack](#2-create-an-app)
* [How to configure a workspace](#3-configure-singlemulti-workspace)
* [How to add Slack to Direct message/Channel](#4-adding-slack-app-to-direct-messagechannel)
* [Slack APIs integration](#5-api)
* [Slack features supported by yellow.ai](#6-supported-slack-features)


## 1. Slack Context Management 

Slack provides threaded messaging. It is important to understand how Yellow.ai platform handles context in channel, threads, and DM.

#### Channel

1. Bot will always reply in the respective thread.
2. Each thread has an independent context, if multiple threads are activated by same/different person → bot will maintain individual context/flow for each thread. Same flow can be run in parallel on different threads.
3. User profiles are preserved across channels, threads, and DMs, ensuring that the sender is always the same.

  ![](https://i.imgur.com/IV7TTDq.png)

#### DM

1. Bot will always reply in 1-1 a conversation (without threads formation).
2. Bot ignores thread formation for a better conversational experience.
3. User profiles are preserved across channels, threads, and DMs, ensuring that the sender is always the same.

  ![](https://i.imgur.com/GRn6ZVV.png)


## <a name="2"></a> 2. Create an App 

Follow the steps below to create an app on Slack: 

1. Visit https://api.slack.com/apps and click **Create a new app**.
2. Enter app name and select an app development workspace.
3. After creating the app, goto the event subscription on the left panel. Enable the event subscription and add request URL to `https://app.yellowmessenger.com/integrations/slack/receive/botID`

  ![](https://i.imgur.com/hLHzre9.png)

4. Scroll down to the event subscription section and expand **Subscribe to bot events**. Add the events scope according to your bot requirement.

> Some of the common events- [references](https://api.slack.com/events).

- **Required Events:**


| Event Name                                            | Description                                      |
| ----------------------------------------------------- | ------------------------------------------------ |
| [app_home_opened](https://api.slack.com/events/app_home_opened)                                       | User clicked into your App Home tab              |
| [message.channels ](https://api.slack.com/events/message.channels)                                     | A message was posted to a channel                |
| [message.groups](https://api.slack.com/events/message.groups)                                        | A message was posted to a private channel        |
| [message.im](https://api.slack.com/events/message.im) | A message was posted in a direct message channel |
| [message.mpim](https://api.slack.com/events/message.mpim)|A message was posted in a multiparty direct message channel|


5. Open **OAuth & Permission**. Add redirect URL: `https://app.yellow.ai/integrations/oauth/redirect` and Bot Token Scope according to your requirement. 

> Click [here](https://api.slack.com/scopes) for scope references. 

- **Required Bot Token Scopes:**


    - [channels:history](https://api.slack.com/scopes/channels:history) View messages and other content in public channels that App has been added.
    - [chat:write ](https://api.slack.com/scopes/chat:write)Send messages as @yourBot.
    - [commands](https://api.slack.com/scopes/commands) Add shortcuts and/or slash commands that people can use.
    - [groups:history](https://api.slack.com/scopes/groups:history) View messages and other content in private channels that App has been added.
    - [groups:read](https://api.slack.com/scopes/groups:read) View basic information about private channels that App has been added to.
    - [im:history](https://api.slack.com/scopes/im:history) View messages and other content in direct messages that App has been added.
    - [im:read](https://api.slack.com/scopes/im:read) View basic information about direct messages that App has been added to.
    - [incoming-webhook](https://api.slack.com/scopes/incoming-webhook) Post messages to specific channels in Slack.
    - [mpim:history](https://api.slack.com/scopes/mpim:history) View messages and other content in group direct messages that App has been added to.
    - [mpim:read](https://api.slack.com/scopes/mpim:read) View basic information about group direct messages that App has been added to.
    - [team:read](https://api.slack.com/scopes/team:read) View the name, email domain, and icon for workspaces App is connected to.
    - [users:read](https://api.slack.com/scopes/users:read) View people in a workspace.

  ![](https://i.imgur.com/rMWt5KS.png)

6. Open **Interactivity & Shortcuts**, enable and add request URL to: `https://app.yellowmessenger.com/integrations/slack/interaction/botID`

  ![](https://i.imgur.com/ecPETcX.png)

## <a name="3"></a> 3. Configure Single/Multi-workspace

Slack App can be built for both **single** workspace use cases (example, apps for a particular organisation) or app can be built for **multi-tenant** workspaces (example, apps for marketplace).

### 3.1 Single Workspace

Slack app uses a *`bot access token (xoxb)`* to communicate with workspace users. A Bot access token is obtained when the slack workspace admin adds the app to their workspace.

Follow these steps to configure a single workspace:

1. Open **OAuth & Permissions**, Click **Install App to Workspace**.

  ![](https://i.imgur.com/tFspnLG.png)

2. Select a channel, incase you have enabled external incoming [webhooks](https://api.slack.com/messaging/webhooks)

  ![](https://i.imgur.com/3ufAVAy.png)

3. After installing the app in workspace, go back to **OAuth & Permission**. Copy the Bot *`Access token (xoxb- )`*. 
4. Head to Channels > Messaging > Slack > Select token type > **Slack tokens** > Add the Slack access token > Save.

  ![](https://i.imgur.com/8FE6ih8.png)


### 3.2 Multiple Workspace

Slack multi-workspace can be handled using the `OAuth token`, and YM bot will map the `accessToken` to the requesting workspace's `teamId`.

Follow the steps to configure multi-workspace: 

1. Open https://api.slack.com/apps/ > Basic Information on the left panel. Copy the `Client ID` & `Client Secret`.

  ![](https://i.imgur.com/CIdAjUw.png)

2. Open Channels > Messaging > Slack > Select token type > OAuth tokens > Add the Client ID, Client Secret, Scope, User Scope > Save.

  ![](https://i.imgur.com/toGSrt8.png)

3. Store the accessToken of every workspace if you want to use Slack [APIs](#5). Set up a flow to capture your **`accessToken <> teamId`** mapping in the [Bot Table](https://docs.yellow.ai/docs/platform_concepts/studio/database#1-create-table):

- Add a custom event `slack-oauth-access-token` in [Event Hub](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub). You will receive this event each time your app is added to a workspace and will have the following schema:

```
{
  "event": {
    "code": "slack-oauth-access-token",
    "data": {
      "appId": "A03********",
      "teamId": "T03********",
      "teamName": "Slack Bot Testing",
      "accessToken": "xoxb-*************-***********-****************"
    }
  }
}
```

- Using the above event, you can trigger a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow). 
- In the triggered flow, you can access the accessToken with `{{data.event.data.accessToken}}` and teamId with `{{data.event.data.teamId}}`.
- Store the above 2 mappings in the [Bot Table](https://docs.yellow.ai/docs/platform_concepts/studio/database#1-create-table) using the [Database Node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#database).


4. You can install a multi-workspace App through OAuth flow, using the following link `https://app.yellow.ai/integrations/slack/install/botId`

## <a name="4"></a> 4. Adding Slack app to Direct Message/Channel

After adding the Slack app to the workspace, you are required to add the app to a group or DM for testing or interacting with the bot.
* **Adding slack app to DM**: Use the **+button** near Apps and select the app > Add > Messages , or search for the App using the top workspace search.

> **DM**: Bot will reply in 1-1 conversation fashion (no threads will be formed).


* **Adding slack app to Group/Channel**: Open Channel details > More > View App in channels. You can add/remove the app to the channel.

> **Group/Channel**: Bot will reply in the threads and context will be mentioned within the respective threads.

  ![](https://i.imgur.com/sONDbA6.png)

  ![](https://i.imgur.com/gkDK36B.png)


## <a name="5"></a> 5. API

The Slack Web API is an interface for querying information from and enacting change in a Slack workspace. Reference: https://api.slack.com/methods

**Bot access token**

**For single workspace configuration**

- You would already have the accessToken.


**For multi-workspace configuration**
- As a pre-requisite, you should complete Step3 mentioned in Multi-workspace configuration.
- For every user who interacts with the bot, you can fetch their teamId using [sender](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#22-system-variables). Sender would include `[teamId]_[userId]`.
- Using the `teamId`, you can fetch the relevant `accessToken` from the Bot Table.

### 5.1 Slash Commands

**Slash Commands** allows users to invoke the app by typing a string into the message composer box. Slash commands are not sent as a message but as a command to the bot.
E.g: /channel invite @bob to #tech Reference: https://api.slack.com/interactivity/slash-commands

Follow the below steps to add slash command:

1. Goto https://api.slack.com/apps/ > Select you App > Select the Slash Commands in left panel > Create New Command.

  ![](https://i.imgur.com/iqVY0Y3.png)

2. Fill the command, Description and add Request URL > SAVE Request URL: `https://app.yellowmessenger.com/integrations/slack/shortcuts/botID`

  ![](https://i.imgur.com/HU5qrLT.png)

3. Enable `slack-shortcuts` event in [Event Hub](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub). If a flow is triggered using this event, the Event Payload can be accessed in builder using {{data.event.[]}}. Schema for this event would be:

```
{
    "event": {
        "code": "slack-shortcuts",
        "data": {
            "command": "/raiseticket",
            "text": "pc is not working",
            "message": "pc is not working",
            "userId": "U01BXXX9A7"
        }
    }
}
```
### 5.2 Shortcuts

Similar to Slash command, this is used to send commands to the bot. Shortcut can be initiated from the **shortcuts** button the message composer or from within search. Reference: https://api.slack.com/interactivity/shortcuts/using

  ![](https://i.imgur.com/2qIzPz0.png)

Follow the given steps to add shortcuts:

1. Open api.slack.com > Interactivity & Shortcuts > Create new Shortcut.

  ![](https://i.imgur.com/3nmEdaK.png)


## <a name="6"></a> 6. Supported slack features

Yellow.ai supports the following slack features: 

| Feature              | Supported? |
| -------------------- | ---------- |
| 2-way conversation   |      yes      |
| Outbound messaging   |       no     |
| Interactive Features |        no    |
| Slash Commands/Shortcuts|      yes      |
| Ephemeral Message|         no   |
|V2 Notification API|        no    |