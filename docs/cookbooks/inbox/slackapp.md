---
title: Creating a Slack App for Internal Ticketing
sidebar_label: Slack app creation
---

To enable internal ticketing functionality on your agent's live chat screen, follow these steps:

1. **Create a new Slack app**: Go to the [Slack API page](https://api.slack.com/apps) and click on "Create New App".

![image](https://lh7-us.googleusercontent.com/Ykd3K_AmSrQfInNqOI6JxIBQG9FE-2Ccma9ZDFZ3Z7W4K3AhO1kFhaHpccp7vlBgvIYuDkkNqfx3p1aRQiSxsn0p21ynhjdAUF8FoZk23cYhPkjDYh1ML3JbYDO3-QUeVVeXQEXb5sSQw56AjBoSYZQ)

2. **Configure app settings**:
    - Select **From Scratch** and provide a name for your app.
    ![image](https://imgur.com/gY4ptyq.png)

    - Choose the workspace where you want to deploy the app and click on **Create App**.
    ![image](https://imgur.com/bZcjJaR.png)
    - Dashboard for the app opens up.
    ![image](https://imgur.com/JmO6Kmj.png)
 


3. **Set up incoming webhooks**: 
    - Navigate to **Features** in the left sidebar and select **Incoming Webhooks**.
    ![image](https://imgur.com/zNjF4Sn.png)
    - Toggle **Activate Incoming Webhook** to turn it on.
    ![image](https://imgur.com/fXGrJT1.png)

4. **Configure event subscriptions**:
    * Under **Features**, select **Event Subscriptions**.
    ![image](https://imgur.com/VrJ0Ylb.png)
    * Enable events and provide a Request URL obtained from the Inbox Team.
    ![image](https://imgur.com/GmAEgWs.png)
    ![image](https://imgur.com/asgpjFA.png)
    * Click **Subscribe to bot events**.
    ![image](https://imgur.com/WZZjb8h.png)
    * Subscribe to the following events:                 
        * Channel Deleted
        * Member Joined Channel
        * Member Left Channel
        * Message Channels
        * Message Groups
    ![image](https://imgur.com/0XUyaep.png)
    * Click on **Save Changes**. 
    ![image](https://imgur.com/85zERuz.png)


5. **OAuth and permissions**:
    * Go to **OAuth and Permissions** to deploy the app in your Slack workspace.
    ![image](https://imgur.com/WYTFsje.png)
    * Click on **Install to Workspace** to generate the Bot User OAuth token required for internal ticketing.
    ![image](https://imgur.com/HBXadXV.png)
    * Allow access to the general channel or any specific channels where the app can post messages.
    ![image](https://imgur.com/S6FA7bx.png)

6. **Copy Bot User OAuth Token**: After installation, copy the Bot User OAuth Token, which typically starts with `xoxb-`. Paste this token in the Channels Page in cloud.yellow.ai under **Slack** > **Slack Tokens**.
    ![image](https://imgur.com/UsUE3yM.png)
    ![image](https://imgur.com/4TTv3IS.png)

7. **Add scopes**: Scroll down to the **Scopes** section and add the following scopes for the Bot User OAuth Token:

```
App Mentions: Read
Chat: Write
Channels: Write Invites
Channels: History
Channels: Read
Chat: Write Customize
Chat: Write Public
Files: Write
Groups: History
Groups: Read
Groups: Write
Groups: Write Invites
IM: History
IM: Read
IM: Write Invites
Metadata Message: Read
MPIM: History
MPIM: Read
MPIM: Write Invites
Usergroups: Read
Users: Read
Files: Read
Remote Files: Share
Remote Files: Write

```
![image](https://imgur.com/xVCha9L.png)


8. **Reinstall the app**: Once all scopes are added, reinstall the app to your workspace by clicking on **Reinstall to Workspace**.
    ![image](https://imgur.com/pGzRequ.png)

9. **Finalize configuration**: Your Slack app is now ready for use. Use the Bot User OAuth Token for [configuring internal ticketing](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/slack2#create-an-app-in-slack) on cloud.yellow.ai > **Channels > Slack**. 

:::info
Refer to [this document](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/internal-ticket) for guidance on using internal ticketing within the inbox.

:::


