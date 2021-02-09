---
title: Slack
sidebar_label: Slack
---
## Index
1. Introduction
2. Creating new App on slack
3. Configuration of single workspace / multi-workspace
4. Adding Slack app to Direct message / Channel
5. Slack Apis integration
6. Slack Interactive Features
    1. Block Kit
    2. Modals
    3. Slash Commands / Shortcuts
    4. Ephemeral Message ( only visible to you )
    5. Initiate Direct Message
    6. App Home Tab
7. References

## Introduction

Slack is a workplace communication tool, “a single place for messaging, tools and files.” This means Slack is an instant messaging system with lots of add-ins for other workplace tools. Slack has an intuitive UI with both group and person-to-person messaging. These are more than 1500 apps and allows users to create their own app which has evolved Slack to become a one-stop-shop for a lot of users.

Video Recording of how to get started - https://www.loom.com/share/ca1c315947204b168310e20eeb6c5523



### Slack context management using YM

Slack provides threaded messaging so It is important to understand how yellow messenger platform handles the context in channel, threads and in DM.

**Channel:** 

1. Bot will always reply in respective thread
2. Each thread conserve independent context, if multiple threads are activated by same/different person → bot will maintain individual context/journey for each thread. Parallelly same journey can be run in different threads.
3. Each thread has its own local memory (app.memory), So local memory cannot be accessible cross threads, cross channels, groups. Use global memory for cross memory requirements.
4. User profile is preserved cross channels/threads/DMs therefore oauth/integrations/tokens is accessible for user irrespective of channels.
> app.sender = T01XXXJA9T8_G01XXXF2P7S_1605XXX144.000200  (i.e WorkspaceID_ChannelD_ThreadID) 

    
![](https://cdn.yellowmessenger.com/DL6bokDi0ycB1612443392644.png)


**DM:**

1. Bot will always reply in 1-1 conversation (no threads formation)
2. Bot ignore thread formation for better conversational experience
3. Local memory is accessible within DM irrespective of threads.
> app.sender = T01XXXJA9T8_D01XXX5V4TD (i.e WorkspaceID_ChannelID)
![](https://cdn.yellowmessenger.com/ZqjZAPydoVtY1612443431420.png)

## Creating new App on Slack

**Step 1:** Goto [https://api.slack.com/apps](https://api.slack.com/apps) and click on **Create a new app**.
**Step 2:** Fill up the app name and select your app development workspace.
**Step 3:** After creating the app, goto the event subscription on the left panel. Enable the event subscription and add request URL to [*https://app.yellowmessenger.com/integrations/slack/receive/*](https://app.yellowmessenger.com/integrations/slack/receive/)*botID*

![](https://lh5.googleusercontent.com/EE7lHurT8gLSuBoIDm7KyQCa-jsfPSgk5t2P3xBP2qyIvCJAVEO1mkTcWEn071rdLyWyEpcQPNGVExe7J-iijKoDcQjE678ImmLrpQ-WgZgQzEYqrd4ST-Fs-zuJjg08HDdk1OYu)


**Step 4:** Now scroll down on the event subscription section and expand **Subscribe to bot events** and add the events scope according to your bot requirement. 

**Some of the common events:**  [**references**](https://api.slack.com/events)

| **Event Name**                                                    | **Description**                                             |
| ----------------------------------------------------------------- | ----------------------------------------------------------- |
| [app_home_opened](https://api.slack.com/events/app_home_opened)   | User clicked into your App Home tab                         |
| [message.channels](https://api.slack.com/events/message.channels) | A message was posted to a channel                           |
| [message.groups](https://api.slack.com/events/message.groups)     | A message was posted to a private channel                   |
| [message.im](https://api.slack.com/events/message.im)             | A message was posted in a direct message channel            |
| [message.mpim](https://api.slack.com/events/message.mpim)         | A message was posted in a multiparty direct message channel |


**Step 5:** Goto OAuth & Permission and add the redirect URL: [https://app.yellowmessenger.com/integrations/oauth/redirect](https://app.yellowmessenger.com/integrations/oauth/redirect)
and **Bot Token Scope** according to your requirement, [Reference](https://api.slack.com/scopes)

**Some Useful scopes** are:

- [**channels:history**](https://api.slack.com/scopes/channels:history)
    View messages and other content in public channels that App has been added
- [**chat:write**](https://api.slack.com/scopes/chat:write)
    Send messages as @yourBot
- [**commands**](https://api.slack.com/scopes/commands)
    Add shortcuts and/or slash commands that people can use
- [**groups:history**](https://api.slack.com/scopes/groups:history)
    View messages and other content in private channels that App has been added
- [**groups:read**](https://api.slack.com/scopes/groups:read)
    View basic information about private channels that App has been added to
- [**im:history**](https://api.slack.com/scopes/im:history)
    View messages and other content in direct messages that App has been added
- [**im:read**](https://api.slack.com/scopes/im:read)
    View basic information about direct messages that App has been added to
- [**incoming-webhook**](https://api.slack.com/scopes/incoming-webhook)
    Post messages to specific channels in Slack
- [**mpim:history**](https://api.slack.com/scopes/mpim:history)
    View messages and other content in group direct messages that App has been added to
- [**mpim:read**](https://api.slack.com/scopes/mpim:read)
    View basic information about group direct messages that App has been added to
- [**team:read**](https://api.slack.com/scopes/team:read)
    View the name, email domain, and icon for workspaces App is connected to
- [**users:read**](https://api.slack.com/scopes/users:read)
    View people in a workspace

 

![](https://lh3.googleusercontent.com/TWad9j0sixFAxPPQfXavsuRp8MFSkLMZyt_tZpXw5IFm42aTzcmMYUtE-YbMHGp9i-ZKWeWrFUsMUu5Bk4Vwsz8C_70pWxwOM5vNiR152XRDFTS32reRT-G7KMgAPrL22BKqT23j)


**Step 6:** Now goto Interactivity & Shortcuts, enable it and add request URL to:
[https://app.yellowmessenger.com/integrations/slack/interaction/](https://app.yellowmessenger.com/integrations/slack/interaction/)*botID*

![](https://lh5.googleusercontent.com/lTcMQByoJJNlQ4F-dpQk751BoqZinWddKIJ2gvRV3mOdzOxlRX1RojEqDQ4PeAdwdCDk4X0XnJ9mnDnil0vf_1-D6rsXbtHEvNL68yWnX6Ut7_SlZGRxGcqiCvWIxdmWHOHrsXAu)

## Configuration of single / multi-workspace

Slack App can be built for both single workspace use cases like building for a particular organisation or can be built for multi-tenant workspaces like building apps for marketplace.

### Single Workspace:

Slack app uses bot access token (xoxb) to communicate with workspace users, **Bot access token** is obtained when the slack workspace admin add the app to their workspace. 

**Steps to configure single workspace:**
**Step 1:** Goto OAuth & Permissions, Click on the Install App to Workspace

![](https://lh4.googleusercontent.com/S5shb-6GRvLCvG3opxTTG63ACIz376s-ZpqJEX9-wzkjlrs0uD7T1_O8nplucvCLCZIwYEG0tw_7PdMF6gWLfBm5FN_zY6SAT4JdnOV9cAYdBPiHzPxHPY-wE92ssXII493mh2h7)


**Step 2:** Select a channel (communicate the workspace that a new app has been added to the workspace)

![](https://lh3.googleusercontent.com/KUbz_iS-iAoOOhmVcPAc-eO0JSJIIiyMp6NCh9ez5BLkWCtW2Z-tlwGCCvs1TO_QoGtW59lJSb9OOkYsoe5toOiF5u49h1gPCEfFaTZ6BaXQxDPSApUpxof5eXq2gMH4VUJkMFgQ)


**Step 3:** After installing the app to workspace, go back to the **OAuth & Permission** copy the Bot Access token (xoxb- ) and paste at the Yellow messenger > Channels > Slack > Add the Slack access token > Save. 

![](https://lh5.googleusercontent.com/Ibx2cKKWZaAxk-HMR3ZUsL2fNUhwmqeXlm32m1MrHPbWkqFuPq8MU4GH1AE_Rspw3XxzlQ1W4i9ZsmHUXpN6JX1EWTSFpbnmn9v8dwUqBv_3pKVMDDOgZbJM5iKcTyF9TMhorXI4)



### Multiple Workspace:

Slack multi-workspace can be handled using the OAuth token, YM bot will map the bot access token according to the requesting user workspace

**Steps to configure multi workspace**
**Step 1:** Goto [https://api.slack.com/apps/](https://api.slack.com/apps/) > Basic Information on the left panel and copy the Client ID & Client Secret.

![](https://lh3.googleusercontent.com/mUMeIHSjnvZG45kYDtSs6I-eFySQnKmsaljmKAJTGiO3nJ_OR88cHHATazCGg11q2ZKaneGkNW-gFmxPvsidPQj_eYvMB7368Jxq8JZ5c7h149-f3Aam1hA0EafAOg8kzLZupEwy)


**Step 2:** Paste the client ID, Client Secret and scopes (comma separated) in the yellow messenger Slack channel OAuth Tokens

![](https://lh6.googleusercontent.com/UAsBEeONP3wbUE224ruAto5mYvq13bgc0KJmsCNjJY3-SqmozPvoeD1BeKt-l-8bklw42L4bg0GJUl8l3AeXS-9DtJK9Y5e9vFeY_QEkpxDT1FNVnr7oCx8EmWxZ6FnK2v-ncQCy)



**Step 3:** For manual / development purposes you can use the **Connect** button to connect / add the slack app to the workspace. For marketplace share following url to connect / add the app to their workspaces. [https://app.yellowmessenger.com/integrations/slack/install/](https://app.yellowmessenger.com/integrations/slack/install/)*botId*

![](https://cdn.yellowmessenger.com/RzDD6tuFd2n91612443533385.png)


In case of multi workspace bot access token can be obtained using:
```js
    app.getAccessToken().then(slackTAuth => { app.log(slackTAuth) })
```
## Adding Slack app to Direct message / Channel

After adding the Slack app to the workspace, you are required to add the app to a group or DM for testing or interacting with the bot.
**Adding slack app to DM:** Use the **+** button near **Apps** and **Select the app** > Add > **Messages**
**Adding slack app to Group / Channel:** Goto Channel details > More > View App in channels
Now you can add / remove the app to the channel.

![](https://lh3.googleusercontent.com/Oy--Eew-8ydNDFHA8-FfoPzChCSWu9PghnzFw-160OWHj7r4fjmf72tc_boLY-8lC16cM0U5-xn-OFDCpNWrcujHdYxwLGtmVaGATx4qEVeCYZwibVGSQVU1kNf9pUEWBD8PTjkD)


    

![](https://lh5.googleusercontent.com/dCtPbKRTu3pXmGbTmz7uk77lefcTz7cNRikc1jk-Y7b-sEInGXZUBfP-hPmaidO_33af_Ko0YUjAeNeDVUhBldykkZhYbz_7G6HylsPXReNhhvg-J6FPVMsMsB1oBXM5UEo1EkFF)


**Message event format at YM**
Test your bot using **app.sendTextMessage(“Hi”)**

    app.log(app.data)

**DM:** Bot will reply in 1-1 conversation fashion (no threads will be formed)

    {
            "message": "Hi",
            "slackChannel": "D01BXXXV4TD",   //D stand for DM channel
            "userId": "U01B4XXX9A7",         // slack userID of sender
            "threadTs": "",                  // threadID (not present in DM) 
            "channelType": "im",             //im => DM
            "eventType": "message"        //event can be from message/button/slash etc
    }

**Group / Channel :** Bot will reply in the threads and context will be mentioned within the respective threads only, app.memory will be accessible within the particular thread only.
Group : private channel
Channel: public channel
```js
    {
            "message": "Hi",
            "slackChannel": "G01CNXXXP7S",   //G stand for group / C stand for channel
            "userId": "U01B4XXX9A7",           // slack userID of sender
            "threadTs": "1605XXX466.000200",   // threadID
            "channelType": "group",            //from group / from channel
            "eventType": "message"        //event can be from message/button/slash etc
    }
```

## Slack Apis integration

The Slack Web API is an interface for querying information from and enacting change in a Slack workspace.
Reference: [https://api.slack.com/methods](https://api.slack.com/methods)
**Api to fetch user info in a workspace.**
```js
    {
            name: "user_info",
            type: "GET",
            encoding: "utf8",
            url: "https://slack.com/api/users.info",
            headers: [],
            params: [{
                            key: "user",
                            value: "{{userID}}"
                    },
                    {
                            key: "token",
                            value: "{{{slacktoken}}}"
                    }
            ]
    }
```
**Bot accessToken**: 

1. For single workspace configuration: 
   > let slackTAuth = app.oauth.mapping.slackAuthToken
2. For multi-workspace configuration: 
   > app.getAccessToken().then(slackTAuth => { app.log(slackTAuth) })

## Slack Interactive Features
### Block Kit:

Slack has its own way to present messages in interactive fashion using message blocks, **app.sendCards()** will not work on slack while **app.sendTextMessage()** and **Quick Replies** will work with Slack too.

Slack Block Kit gives you a way to create rich, interactive UI for your app. Each block displays or handles information in a different way, and multiple blocks can stack to form:

1. Message block: *Rich message (styled text, action buttons, drop-downs etc)*
![](https://lh6.googleusercontent.com/FXfkmRGsdu6YrEMbLnqzG2Fwt8l_XW5Orl7T9Q4LN2CSfnfJusfml9j-hpJ5T1Q8z_z2sNfOK5pP6bQZ0vHjlV2OkjdHCXoJQfDJMSFfJ549Uu9DTmnC7U_KmWy5J-PN0BlYmo6I)

2. Attachments: *Similar to Message block, automatic collapse lengthy message with expand button.*
3. Modals: *Pop-up to allow users to fill a form.*
4. App Home: *Layout of home tab of app.*

Slack has its own designer to design blocks.
[https://app.slack.com/block-kit-builder/](https://app.slack.com/block-kit-builder/)

**Sending message block using YM:**
Message block allows you to send message as section and actions type
```js
    app.sendActions({
            "blocks": [
                    {
                            "type": "section",
                            "text": {
                                    "type": "plain_text",
                                    "text": "Click below to continue",
                                    "emoji": true
                            }
                    },
                    {
                            "type": "actions",
                            "elements": [
                                    {
                                            "type": "button",
                                            "text": {
                                                    "type": "plain_text",
                                                    "text": "Continue",
                                                    "emoji": true
                                            },
                                            "value": "value123",
                                            "action_id": "action123"
                                    }
                            ]
                    }
            ]
    })
```
**Event receive on button click**
```js
    app.log(app.data)
    {
            "action_id": "action123",
            "text": {
                    "type": "plain_text",
                    "text": "Continue"
            },
            "value": "value123",
            "type": "button",
            "channelName": "directmessage",
            "userId": "U01BXXXX9A7",
    }
```
**Sending message attachments using YM:**
```js
    app.sendActions({"attachments": [{"blocks": [ … ]}]})
```
Button click event will be the same as the message block case.

### Modals: 

Modals provide focused spaces ideal for requesting and collecting data from users, or temporarily displaying dynamic and interactive information.

![](https://cdn.yellowmessenger.com/X5rzc67VwGFE1612443582779.png)


Each modal consists of some standardized UI elements — a title, an *x* button to dismiss the modal, a *cancel* button — that wrap around a fully-customizable space — the modal's **view**.
Reference: [https://api.slack.com/surfaces/modals/using](https://api.slack.com/surfaces/modals/using)

This interaction happened **only using button** which is capable of creating trigger_id, trigger_id is handled automatically in backend of YM, the app is sent a payload containing a special trigger_id.
Modals can be designed using [block-kit-builder](https://app.slack.com/block-kit-builder/).

**Sending modals using YM**
```js
    //After receiving event of button click action
    app.sendModal({
            "type": "modal",
            "submit": {...},
            "private_metadata": JSON.stringify(metadata), //sending private data / IDs .
            "close": {..},
            "title": {...},
            "blocks": [
                  {
                        "type": "input",
                                    "block_id": "block123",
                        "label": {
                                "type": "plain_text",
                                "text": "Anything else you want to tell us?",
                        },
                        "element": {
                                "type": "plain_text_input",
                                "multiline": true
                        },
                        "action_id": "action123",
                        "optional": true
                  },
                  {
                        "type": "divider"
                  }
          ]
    })
```

**Event receive at YM after submission**
```js
    app.log(app.data)
    {
      "userId": "U01B4XXX9A7",
        "event": {
            "code": "view_submission",
            "data": {
                  "id": "V01XXXUSHF",
                  "team_id": "T01AxXXA9T8",
                  "type": "modal",
                  "blocks": [...],
                  "private_metadata": "{\"action\":\"generateTicket\"}",
                  "state": {
                        "values": {
                              "block123": {               //unique block id
                                    "action123": {        //unique action id
                                            "type": "plain_text_input",
                                            "value": "pc is not working"
                                    }
                              },
                              "blockO123": {                //in case of drop-down
                                    "actionO123": {
                                            "type": "static_select",
                                            "selected_option": {
                                                    "text": {..},
                                                    "value": "2"
                                            }
                                    }
                                }
                          }
                    }
          }
    }}
```
### Slash Commands / Shortcuts:

**Slash Commands**
It allows users to invoke your app by typing a string into the message composer box. Slash commands are not sent as a message but as a command to the bot.
> E.g:  /channel invite @bob to #tech
Reference: [https://api.slack.com/interactivity/slash-commands](https://api.slack.com/interactivity/slash-commands) 

**Steps to add slash command**
**Step 1:** Goto [https://api.slack.com/apps/](https://api.slack.com/apps/) > Select you App > Select the Slash Commands in left panel > Create New Command

![](https://lh5.googleusercontent.com/gi8aCuibqASoTUbFB1dd7PC8bCG2CBoLJH6MFrbR5l5qsiGIhoua0Y6Wie-_cKslKX9i-Py22thk29gAwfkTPqeJXZLjrdRsLayEnQNSMtpyzl7Ynmutn8-e_R618-nBFpfjpXmU)


**Step 2:** Fill the command, Description and add Request URL > SAVE
Request URL: [https://app.yellowmessenger.com/integrations/slack/shortcuts/](https://app.yellowmessenger.com/integrations/slack/shortcuts/)*botID*

![](https://lh4.googleusercontent.com/O57LXorBBGZWnF32lB6U6uENu04wrUSe3kZQqxxADFVu3m7nVh9tcpXppvxGWULD-NVFez-F3ZIYxLFrEdhRuW-At8icKcz41_s8JGKSmLhw3zE5yNPmSGpr37j7hkgLbACPCqde)



**Event receive at YM for slash command**
```js
    app.log(app.data)
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

**Shortcuts**:
Similar to Slash command to send command to the bot. Shortcut can be initiated from the shortcuts button in the message composer, or from within search.
Reference: [https://api.slack.com/interactivity/shortcuts/using](https://api.slack.com/interactivity/shortcuts/using) 

![](https://lh6.googleusercontent.com/SgELjOml-tWwUISj_4l2BBGa5BFcQX7jL4K9tUWKhjNvkvoMbxUjdXo8PNUuGcMojKWg22DMGXi-e78CiQbHQzAuk06DNrErjeD9AyFGOX2va2w8EbVMII_VurHPSQ2joJwZezZJ)


  

![](https://lh5.googleusercontent.com/EPN8qw2bpO0fUxEeCU4jnYMAYBnOvosOhI2AEx8AWECYJJq26hBRCx06iJI2XYfM9Y7IFEoeR-IZ7OWjEHTPVeCTTT5X7KWpboHXcFvqEFuOoVHr0BJwZJ1JBQZ63JIsyssPusYY)


**Steps to add shortcuts:**
> Goto api.slack.com > Interactivity & Shortcuts  > Create new Shortcut 

![](https://lh4.googleusercontent.com/6TM9JIHMdGtnkqB6V15GefpEWD1QYGYWs4eI-TXfjlxPZav7Jeo0qkx3jE3ilVqvlfROczHYPDOOum_gdDvmWgO2u3JL0PlLbNh2UlTy_kdoZHcex6GU2ga30zxHJOS5khkUs8uP)



### Ephemeral Message ( only visible to you ): 

This method posts an ephemeral message, which is visible only to the assigned user in a specific public channel, private channel, or private conversation.
Reference: [https://api.slack.com/methods/chat.postEphemeral](https://api.slack.com/methods/chat.postEphemeral)

![](https://lh6.googleusercontent.com/oEopkGDAjf_o-JB9GynKO8Og5LB89LVamBGDUWS7gHzZLelR8B2waipmrD4GxSOnTugdPO7APQStqhpw_mjLJrP4l2UpmvgUpnp-_BAB392zcvohqPgvWW5LX7MrKxFVZJ2wWLpv)



**Sending ephemeral messages:**
```js
app.sendActions(blocks, { ephemeral: true })
app.sendTextMessage(msg, { ephemeral: true })
app.sendQuickReplies(payload, { ephemeral: true })
```

## Initiate Direct Message: 

This method can be used by bot to initiate a DM with the user.
Example: 

![](https://lh3.googleusercontent.com/QV-fgScM-v0D7ykJlG0J2HxnUl1MNH5bvUbRT6RS2UtIFhxF6Q5SNSpFBcBTUxUfgZy8kyo8mHKkdTLetmxX5kgtotp-UCd9oR0zs0WWtLMjHVZUj9gh9JDhj-pBHEduvlnKyWog)



**Sending DM to user** 
```js
app.sendActions(payload, { senderId: userChannelID })
app.sendTextMessage(payload, { senderId: userChannelID })
app.sendQuickReplies(payload, { senderId: userChannelID })
```

### App Home Tab: 
![](https://lh5.googleusercontent.com/jyt3kT4xuVoebZkYh9KAOFl42p0fbAf1xNcxJ9i1QghQ95FcHeq6hZzl1QsUt29G_K8xWoxN0b2uMkN7py5bApOtcqDqJNx329_YV6m3plpiqEgWMtnwooFSAt5nQSfqSaAr6OTD)

App home tab content is also generated using the block kit payload.

**Step to add home tab:**
**Step 1:** Goto [https://api.slack.com/apps/](https://api.slack.com/apps/) > Select your App > App Home in left panel > Enable Home tab

![](https://lh6.googleusercontent.com/2JoaZhv0alUAnpwW2WzbMzoMSl1Bnnw89QmnJKw40JneRUnmdVKI056rpAnIo_ElKSE1J0srbdo8-A6pded5dMUQwIjFNbHmOz6--5nx266qqa7PQ3YX1CCOQ04VCEeyy4ZvDBlm)


**Step 2:** add [app_home_opened](https://api.slack.com/events/app_home_opened) event in the **Event subscription** (Follow Create new app > Step 4)
**Step 3:** Click on the Home tab of your app, event received will be:
app.data.eventType : "app_home_opened”
**Step 4:** After receiving the app_home_opened event you can respond using the following api:
[https://api.slack.com/methods/views.publish](https://api.slack.com/methods/views.publish) with view type : “home”.


## References
1. [Getting start with Slack app](https://api.slack.com/start)
2. [Slack Apis](https://api.slack.com/methods/)
3. Interaction:
    - Guidelines: https://api.slack.com/start/planning/guidelines
[](https://api.slack.com/methods/)    - [Interactive components](https://api.slack.com/surfaces/)
4. Designing:
    - Guidlines: https://api.slack.com/start/designing/guidelines
    - [Block Kit Builder](https://app.slack.com/block-kit-builder/)

Explore different apps on slack to better understand flow and interacting components usage.
[](https://app.slack.com/block-kit-builder/)