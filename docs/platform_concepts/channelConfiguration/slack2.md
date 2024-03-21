---
title: Slack
sidebar_label: Slack
---

Slack is a collaboration platform that is used by organizations to facilitate communication among team members. The team members can have conversations, share files, images, video, audio, and schedule meetings. It also provides a secure, collaborative environment for teams to work together by using chat, video meetings, file storage, and application integration.

**Watch the video on how to setup Slack channel:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/GAWy6lBBAZE" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>

### Slack Context Management

Slack provides threaded messaging. It is important to understand how Yellow.ai platform handles context in channel, threads, and DM.

**Channel**

1. Bot will always reply in the respective thread.

2. Each thread has an independent context, if multiple threads are activated by same or different person → bot will maintain individual context or flow for each thread. Same flow can be run in parallel on different threads.

3. User profiles are preserved across channels, threads, and DMs, ensuring that the sender is always the same.

  ![](https://i.imgur.com/lh44QmC.png)

**DM**

1. Bot will always reply in 1-1 a conversation (without threads formation).

2. Bot ignores thread formation for a better conversational experience.

3. User profiles are preserved across channels, threads, and DMs, ensuring that the sender is always the same.

  ![](https://i.imgur.com/YXkKVHi.png)

### Supported slack features

Yellow.ai supports the following slack features: 

| Feature              | Supported? |
| -------------------- | ---------- |
| Two-way conversation |     yes    |
| Outbound messaging   |     no     |
| Interactive Features |     no     |
| Slash Commands/Shortcuts|  yes    |
| Ephemeral Message|         no     |
| V2 Notification API|       no     |

## Create an app in Slack

You need to create an app in Slack to connect your bot using the following procedure.

To create an app in Slack, follow these steps:

1. Go to the [Slack website](https://api.slack.com/apps) and click **Create an App** > select **From scratch**.

     ![](https://i.imgur.com/gdiyQT4.png)

2. Enter the app name and select an app development workspace, then click **Create App**.

     <img src="https://i.imgur.com/VB59aXm.png)" alt="drawing" width="60%"/> 
	  	 
### Step 1: Add a new redirect URL

After creating an app, you need to add a redirect URL.

To add a new redirect URL, follow these steps:

1. Select **OAuth & Permissions**.

    ![](https://i.imgur.com/UFL2MGQ.png)

2. Under *Redirect URLs*, click **Add a new Redirect URL**.
    
	 ![](https://i.imgur.com/ZHKe9cn.png)

3. Enter the `https://cloud.yellow.ai/integrations/oauth/redirect` redirect URLs and click **Add**. For more details, see [Scope references](https://api.slack.com/scopes).

    <img src="https://i.imgur.com/BKDcxn7.png)" alt="drawing" width="60%"/>
	
4. Click **Save URLs**.	

5. Under the *Scope* section, add the **Bot Token Scope** according to your requirements.

- **Required Bot Token Scopes:**

  - [channels:history](https://api.slack.com/scopes/channels:history)- View messages and other content in public channels to which the app has been added.
  - [app_mentions:read](https://api.slack.com/scopes/app_mentions:read)- View messages that directly mention the @Yellow test bot in conversations that the app is in.
  - [chat:write ](https://api.slack.com/scopes/chat:write)- Send messages as @yourBot.
  - [commands](https://api.slack.com/scopes/commands)-  Add shortcuts and/or slash commands that people can use.
  - [groups:history](https://api.slack.com/scopes/groups:history)- View messages and other content in private channels to which the app has been added.
  - [groups:read](https://api.slack.com/scopes/groups:read)- View basic information about private channels to which the app has been added.
  - [im:history](https://api.slack.com/scopes/im:history)- View messages and other content in direct messages to which the app has been added.
  - [im:read](https://api.slack.com/scopes/im:read)- View basic information about direct messages that App has been added to.
  - [im:write](https://api.slack.com/scopes/im:write)- Start direct messages with people.
  - [incoming-webhook](https://api.slack.com/scopes/incoming-webhook)- Post messages to specific channels in Slack.
  - [mpim:history](https://api.slack.com/scopes/mpim:history)- View messages and other content in group direct messages that the app has been added to.
  - [mpim:read](https://api.slack.com/scopes/mpim:read)- View basic information about group direct messages that the app has been added to.
  - [team:read](https://api.slack.com/scopes/team:read)- View the name, email domain, and icon for workspaces the app is connected to.
  - [users:read](https://api.slack.com/scopes/users:read)- View people in a Slack workspace.
  - [links:write](https://api.slack.com/scopes/links:write)- Show previews of URLs in messages.
  - [channels:read](https://api.slack.com/scopes/channels:read)- View basic information about public channels in a workspace.
  - [chat:write.public](https://api.slack.com/scopes/chat:write.public)- Send messages to channels that the @Yellow test bot is not a member of.

  <img src="https://i.imgur.com/zlmk4ai.png" alt="drawing" width="70%"/>

  
### Step 2: Subscribe to bot events 

After adding the redirect URL, you need to subscribe your app to bot events. Slack will notify your bot based on the user activity as per the specified URL.

1. Select **Event Subscriptions**.
 
    ![](https://i.imgur.com/yQJV2q9.png)
	
2. Toggle **Enable Events** and add the **Request URL** `https://cloud.yellow.ai/integrations/slack/receive/botID`.

     ![](https://i.imgur.com/VcYThF8.png)


3. In *Event subscription* section, expand **Subscribe to bot events** and click **Add Bot User Event** to add the scope according to your bot. For more details, click [common events](https://api.slack.com/events).

   <img src="https://i.imgur.com/cQYL1pr.png" alt="drawing" width="70%"/>

The following are required bot events:


| Event Name | Description                               
| -----------| -----------|
| [app_home_opened](https://api.slack.com/events/app_home_opened) | The user clicked on the home tab of your tab.           |
| [app_mention](https://api.slack.com/events/app_mention)         | Subscribe to only the message events that mention your app or bot. |
| [message.channels ](https://api.slack.com/events/message.channels)                                     | A message was posted to a channel.                |
| [message.groups](https://api.slack.com/events/message.groups)                                        | A message was posted to a private channel.        |
| [message.im](https://api.slack.com/events/message.im) | A message was posted in a direct message channel. |
| [message.mpim](https://api.slack.com/events/message.mpim)|A message was posted in a multiparty direct message channel. |

4. Click **Save changes.** 

### Step 3: Add interactive messages

To add interactive messages, follow these steps:

1. Select **Interactivity & Shortcuts**, enable the **Interactivity**, and add the request URL `https://cloud.yellow.ai/integrations/slack/interaction/botID`.

    ![](https://i.imgur.com/BkNWWpN.png)

:::note
You have to configure different regions for each URL, and for each region, the URL will change.
:::     
	  
### Step 4: Enable permissions to interact with your bot

You need to select your preferred permissions for your users to interact with the bot in the workplace.
	  
1. Select **App Home** and enable the following permissions:
    * **Always show my bot as online**
    * **Show tabs**
    * **Messages tab**

   ![](https://i.imgur.com/MZ1JzkN.png)
   
### Step 5: Slash Commands

**Slash Commands** allows users to invoke the app by typing a string into the message composer box. Slash commands are not sent as a message but as a command to the bot.
Example: `/channel invite @bob to #tech Reference: https://api.slack.com/interactivity/slash-commands`

Follow the below steps to add the slash command:

1. Go to `https://api.slack.com/apps/` > **Select your App** > select the **Slash Commands** in the left panel > **Create New Command**.

  ![](https://i.imgur.com/2ekQevv.png)

2. Enter the **Command**, **Short description**, and **Request URL** (`https://cloud.yellow.ai/integrations/slack/shortcuts/botID`) > click **Save**. 

  ![](https://i.imgur.com/uQPsWzQ.png)

3. Enable `slack-shortcuts` event in the [Event Hub](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub). If a flow is triggered using this event, you can access the event payload in builder  using `{{data.event.[]}}`. The following is the schema for this event:

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
### Step 6: Shortcuts

You can use shortcuts to send commands to the bot.
Shortcuts can be initiated from the **shortcuts** button in the message composer or from search. For more details, click [Shortcuts](https://api.slack.com/interactivity/shortcuts/using).

  ![](https://i.imgur.com/2qIzPz0.png)

To add shortcuts, follow these steps:

1. Open api.slack.com **> Interactivity & Shortcuts > Create new Shortcut**.

  ![](https://i.imgur.com/CzzQbJu.png)   
	  
## Configure Single/Multi-workspace

Slack apps can be built for both **single** workspace use cases (for example, apps for a particular organisation) and **multi-tenant** workspaces (example, apps for marketplaces).

### Single Workspace

The Slack app uses a *`bot access token (xoxb)`* to communicate with workspace users. A Bot access token is obtained when the Slack workspace admin adds the app to their workspace.

To configure a single workspace, follow these steps :

1. Select **OAuth & Permissions**, then click **Request to Install** to add the app to the Workspace.

   ![](https://i.imgur.com/c0q0Cfp.png)

2. Select a channel if you have enabled external incoming [webhooks](https://api.slack.com/messaging/webhooks).

  ![](https://i.imgur.com/DKInjMd.png)

3. After installing the app in workspace, go back to **OAuth & Permission**. Copy the Bot *`Access token (xoxb- )`*. 
   ![](https://i.imgur.com/zssPPbX.png)
   
4. Log in to https://cloud.yellow.ai and navigate to **Overview** > **Channels** > **Messaging** > **Slack** > **Select token type** > **Slack tokens** > **Add the Slack access token** > **Save**.

   ![](https://i.imgur.com/vTd1WQT.png)
   
5. Navigate to the **Overview** page, under the **Active channels** section, you can see that the Slack channel is successfully connected to your bot. 

     ![](https://i.imgur.com/NJbAFeO.png) 


### Configure multiple workspaces

Slack multi-workspace can be handled using the `OAuth token`, and the Yellow bot will map the `accessToken` to the requesting workspace's `teamId`.

To configure multi-workspaces, follow the steps : 

1. Go to `https://api.slack.com/apps/`
2. Select Basic Information and copy the **Client ID** & **Client Secret**

    <img src="https://i.imgur.com/IPcSv6T.png)" alt="drawing" width="70%"/>

2. Log in to https://cloud.yellow.ai and navigate to **Overview** > **Channels** > **Messaging** > **Slack** > **Select token** type > **OAuth tokens** > Add the **Client ID**, **Client Secret**, **Scope**, **User Scope** > **Save**.

   ![](https://i.imgur.com/9Mswcpr.png)

3. To use Slack APIs, you need to store the accessToken for each workspace by mapping accessToken with [APIs](#5). Set up a flow to capture your **`accessToken <> teamId`** mapping in the [Bot Table](https://docs.yellow.ai/docs/platform_concepts/studio/database#1-create-table):

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


4. You can install a multi-workspace app through the OAuth flow by using the following link:

   `https://app.yellow.ai/integrations/slack/install/ botId`

## Add app to Slack workspace

After adding the Slack app to the workspace, you can add the app to a channel for testing or interacting with the bot.

To add the app to Slack workspace, follow these steps:

1. Under **Apps**, click **Add Apps**.

    <img src="https://i.imgur.com/yDZtZVj.png)" alt="drawing" width="40%"/>

2.  In the **Search** bar, search for the app that you have created on the Slack website using the top workspace search or select the app.

     ![](https://i.imgur.com/gyzBJXj.png)

* Under the **Apps** section, the app will be added.

   <img src="https://i.imgur.com/ypcDOa0.png)" alt="drawing" width="40%"/>

### Add an app to Channel

To an Add app to the Channel, follow these steps: 

1. Select **Channel**  > click **channel drop-down** > **Integrations** > **Add an app**. You can add or remove the app from the channel. 

     <img src="https://i.imgur.com/OUkXsAG.png)" alt="drawing" width="50%"/>
	 
2. In the **Search** bar, You can search for the app or click **Add** to add your app.

      ![](https://i.imgur.com/AzvWZ39.png)
	  
* The app will be successfully added to the selected channel.  

> **Group or Channel**: The bot will reply in the threads, and context will be mentioned within the respective threads.	
  
## Test your bot on Slack

After connecting your bot to your Slack channel, you can test your bot. 
     
#### Prerequisite

* You need to create the respective intents and configure bot flows with the same intent. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/create-a-bot). 

To test your bot on Slack, follow these steps:

1. Open your Slack app, under *Apps* select the app that you have created. 

      ![](https://i.imgur.com/0KLB8LL.png)

2. Start the conversation to test your app.

      ![](https://i.imgur.com/PWPEvq6.png)

### API

The [Slack Web API](https://api.slack.com/methods) serves as a means to retrieve data from and make modifications within a Slack workspace.



#### Bot access token

* **For single workspace configuration**, you would already have the accessToken.
* **For multi-workspace configuration**, you should complete Step 3 mentioned in the Multi-Workspace Configuration guide.
   * To obtain the teamId for each user interacting with the bot, retrieve it from the [sender](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#22-system-variables). The sender will be in the format `[teamId]_[userId]`.
   * Using the `teamId`, fetch the corresponding `accessToken` from the Bot Table.