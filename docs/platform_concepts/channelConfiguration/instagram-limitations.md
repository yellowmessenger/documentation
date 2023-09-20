---
title : Components and limitations of Instagram bot
sidebar_label : Components and limitations of Instagram bot
---

This guide contains the components and character limitations, a generic template, and supported messages for Instagram's bot.

## 1. UI components and character limitations

The following are the supported UI components and character limitations of Instagram bot:

Components | Character limit
-----------|----------------
Quick Replies | In conversations, quick replies display a set of buttons for users to respond with. When a quick reply is tapped, the buttons are dismissed, and the title of the tapped button is posted in the conversation as a message. A message event will be sent to your webhook that contains title of the button and an optional payload. <br/> **Limitations:** <br/>• This feature is currently not available on desktop. <br/>• A maximum of 13 quick replies are supported. <br/>• Each quick reply allows up to 20 characters before being truncated. <br/>• Quick replies only support plain text. <br/> <img src="https://i.imgur.com/EGh1d0m.png" alt="drawing" width="40%"/><img src="https://i.imgur.com/en7PHOK.png" alt="drawing" width="40%"/>
Private Replies | Private Replies allows businesses to reply the comments on their posts with a single message on Instagram. When this feature is enabled, the user will get a message with a reference link to the comment that is getting the reply. <br/>**Sample use case:** Initiating conversation with a user who comments on a post.<br/> **Limitations:** <br/>•Private replies are currently not supported for Instagram ads and IGTV comments.<br/>•Private replies are permitted within 7 days (except on Instagram Live) of the creation date of the comment.<br/>•Private replies do not open the 24 hour window for standard messaging. <br/><img src="https://i.imgur.com/Ht9XepM.png" alt="drawing" width="40%"/><img src="https://i.imgur.com/GEx0hiD.png" alt="drawing" width="40%"/><img src="https://i.imgur.com/EMqDJou.png" alt="drawing" width="40%"/>
Ice Breakers | Ice Breakers provide a way for users to start a conversation with a business with a list of frequently asked questions.<br/> **Sample use case 1:** Pre-purchase product queries. <br/><img src="https://i.imgur.com/1EAXgDU.png" alt="drawing" width="40%"/> <br/>**Sample use case 2:** Post-purchase customer support.<br/> <img src="https://i.imgur.com/76IXMOG.png" alt="drawing" width="40%"/>

Following are some of the limitations set up by Instagram:

* A conversation is initiated when the user comments on any posts. NOTE: If the user has not interacted with the bot directly but only made a comment, a temporary user_id will be created so that the bot can respond only to that comment via direct message.
* A maximum of 13 quick replies can be added in a single prompt.
* A single quick reply can have a maximum of 20 characters and it supports only text. If the limit exceeds, those characters will be truncated.
* Brands can only access a user’s profile name, and profile picture.
* Bot can handle only one message at a time.
---

## 2. Generic Templates

The generic template allows you to send a structured message that includes an image, text and buttons. A generic template with multiple templates described in the [`elements`](https://developers.facebook.com/docs/messenger-platform/instagram/features/generic-template/#elements) array will send a horizontally scrollable carousel of items, each composed of an image, text and buttons.

<img src="https://i.imgur.com/ym3afee.png" alt="drawing" width="40%"/>



The generic template supports a maximum of 10 elements per message.
At least one property must be set in addition to `title`.

| **Property Name** | **Type**                                                                                                               | **Requirement** | **Description**                                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`           | String                                                                                                                 | Mandatory       | The title to display in the template. 80 character limit.                                                                                                                                                                                  |
| `subtitle`        | String                                                                                                                 | Optional        | The subtitle to display in the template. 80 character limit.                                                                                                                                                                               |
| `image_url`       | String                                                                                                                 | Optional        | The URL of the image to display in the template.                                                                                                                                                                                           |
| `default_action`  | Object                                                                                                                 | Optional        | The default action executed when the template is tapped. Accepts the same properties as [URL button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button), except `title`.                               |
| `buttons`         | Array < [`button`](https://developers.facebook.com/docs/messenger-platform/instagram/features/generic-template/#button) > | Optional        | An array of [buttons](https://developers.facebook.com/docs/messenger-platform/send-api-reference/buttons) to append to the template. A maximum of 3 buttons per element is supported. Only `postback` and `web_url` buttons are supported. |

##### Limitations

---

1. This feature is currently not available on desktop.

:::note
This feature is currently under development. More limitations (if any) will be added further.
:::

---

## 3. List of supported messages by Yellow AI platform




| **Action type** | **Message type**                 | **Bot Support?**                                                  | **User Support?**                                                 |
| --------------- | -------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| Message         | Text                             | Yes                                                               | Yes                                                               |
| Message         | Image                            | Yes. Supported formats: jpg, png, ico, bmp. Size: Less than 8 MB. | Yes. Supported formats: jpg, png, ico, bmp. Size: Less than 8 MB. |
| Message         | Product Template                 | No                                                                | NA                                                                |
| Message         | Generic Template                 | Yes*                                                              | NA                                                                |
| Message         | Sticker                          | No                                                                | Yes #                                                             |
| Message         | Attachments (video, voice, file) | No                                                                | Yes #                                                             |
| Reaction        | React                            | No                                                                | No                                                                |
| Reaction        | Unreact                          | No                                                                | No                                                                |
| Media Share     | Image                            | Yes                                                               | Yes #                                                             |
| Media Share     | Video                            | Yes                                                               | Yes #                                                             |
| Media Share     | Story                            | No                                                                | No                                                                |
| Media Share     | IGTV                             | No                                                                | No                                                                |
| Media Share     | Reels                            | No                                                                | No                                                                |
---

#### Human Agent Escalation

Apps with instagram_manage_message permission must have an escalation path to a human agent. Experiences can either start by directly interacting with a human agent or can start from an automation to qualify intent but must have a way for users to chat with a human agent as needed.

Following are the sample use cases:


* **Sample use case 1:** Pre-purchase discovery support

<img src="https://i.imgur.com/fZA2tFY.png" alt="drawing" width="40%"/>


* **Sample use case 2:** Post-purchase customer support

<img src="https://i.imgur.com/0mkNIm2.png" alt="drawing" width="40%"/>

<img src="https://i.imgur.com/ZkErbFG.png" alt="drawing" width="40%"/>

----

## 4. Supported features

Connecting your Instagram Professional account with the [Yellow platform](https://cloud.yellow.ai/) enables the following features to communicate with your bot:

* **Direct Message:** The bot can handle direct messages from your Instagram account. When a bot user posts a direct message on Instagram page, the bot responds within 24 hours. If the bot is not able to resolve the query of the user, then a live agent can respond back to the user within 7 days.

    ![](https://i.imgur.com/9rYDrjA.png)

* **Comment or Private Replies**: This enables businesses to reply to their users for any comment made on their Instagram posts. When a comment is made on the Instagram post, an event `instagram-comment` is sent to the bot, and a ticket is raised in the Inbox module for agents to respond to the user.

   <img src="https://i.imgur.com/Nb3piqe.png" alt="drawing" width="80%"/>

:::note
* Private replies are currently not supported for Instagram ads and IGTV comments.
:::

* **Story Mentions:** An Instagram (IG) business account can be notified when a user mentions the businesses on their story. When this happens, an event is sent to the bot, and a message will be displayed in the Inbox referencing the story so that the live agent can respond back. For more information, click [here](https://developers.facebook.com/docs/messenger-platform/instagram/features/story-mention). 

    ![](https://i.imgur.com/TqXqJ39.png)<img src="https://i.imgur.com/HYPPT21.png" alt="drawing" width="40%"/> 

:::note
* In the Inbox module, the user response should be displayed appropriately for the agent to understand in which story the account was mentioned. For more information, click [here](https://developers.facebook.com/docs/messenger-platform/instagram/features/story-mention#rendering-story-in-agent-s-inbox-client-view).
* If the story mentioned occurs outside the session window, the agent should be notified to close the ticket. 
* Agents can reply to the story mentions only once and cannot send more than one message for a particular story mention.
* Stories will expire after 24 hours, and the agents won't be able to respond post-expiration.

   ![](https://i.imgur.com/tiZwtey.png)
:::

* **Story Replies:** An Instagram (IG) business account enables the businesses to add a story, and when their user replies to the story, the bot gets triggered automatically.

    <img src="https://i.imgur.com/l2xqKns.png" alt="drawing" width="40%"/>


* **Media Share:** An Instagram (IG) business account allows business to share or repost the media content such as posts, images, videos, IGTV, stories, and reels for their users.

    ![](https://i.imgur.com/M87cpNf.png)

The following are the events of the above features:

Features | Code | Description
---------|------|------------
Story reply | instagram-story-reply | Bot receives an event with the available information when a user replies to the business instagram story.
Story mention | instagram-story-mention | Bot receives an event with the available information when a user mentions the Business in their insta story. 
Media share | instagram-media-share | Bot receives an event with the available information when the business shares a media from a post.
Comment | instagram-comment | Bot receives an event with the available info when a user comments on the business insta post.