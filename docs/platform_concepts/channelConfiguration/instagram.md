---
title : Instagram
sidebar_label : Instagram
---


This document will help you understand features and limitations of Instagram channel, and guide you in setting up your own Instagram chatbot on Yellow AI platform.

## Pre-requisites


**Before setting up a chatbot make sure you have:**

- An [**Instagram Professional Account**](https://www.facebook.com/help/instagram/138925576505882) (either Creator or Business account).
- A **Facebook Page** [connected to that Instagram account](https://developers.facebook.com/docs/instagram-api/overview#pages). Make sure that you have a Facebook Page that represents your Instagram Professional account identity when connecting with users. To create a new Page, visit [https://www.facebook.com/pages/create](https://www.facebook.com/pages/create), you can also set up a test Page to start.
- Enabled **Access to Messages** is enabled in the Instagram account
Steps: **Settings → Privacy → Messages → Enable Allow Access to Messages**

#### Set up a business account on Instagram

On Instagram, you can convert your personal profile to a business account to access features that can help you grow your business.

**Note:** [You may only have five Instagram accounts](https://l.facebook.com/l.php?u=https%3A%2F%2Fhelp.instagram.com%2F1682672155283228%3Ffbclid%3DIwAR26QtzM_0hTNg-1d4KBbctcw_l4JrVH9xn2WUqeQRGqwSZbeT2qBQsmJoY&h=AT0-raQ9NUsNKCDI0NEahsCfXnVivLQA5wLV5RR4gd36QB2XZGOc5u2EX8O2Xhc6YcKaM_f9p6skRnRiixkcwmOH7OZlQZMT3hCWNE5IEpipN7Hwtod1ywVRT39DLLvFOPULF8G0ncw) at a time.

> ## To switch your profile to a business account:

---

- Go to your profile and tap **Hamburger Menu** in the top right-hand corner.
- Tap **Settings.**
   - For some accounts, the **Switch to professional account** option will be listed directly under **Settings.**
- Tap **Account**.
- Tap **Switch to professional account**.
- Tap **Continue.**
- Select a category for your business and tap **Done.**
- Tap **OK** to confirm.
- Tap **Business**.
- Tap **Next**.
- Add contact details and tap **Next.** Or tap **Don't use my contact info** to skip this step.
- If you'd like, you can follow the steps to connect your business account to a Facebook Page associated with your business. This step is optional, and will make it easier to use all of the features available for businesses across the Facebook family of apps. At this time, only one Facebook Page can be connected to your business account.
- Tap **X** in the top-right corner to return to your profile.

With a business account, you'll be able to access insights that can help you understand who is engaging with your business on Instagram. You'll also have access to the professional dashboard, where you can track your performance, access and discover professional tools and explore educational information curated by Instagram.

You also have the option to display or hide your business category and contact information on your profile. After setting up, go to your profile and tap **Edit profile**. Go to **Profile display** under Public business information to choose whether you want to hide or display your category label and contact info. Then, tap **Done**.

> **Source:** [https://www.facebook.com/business/help/502981923235522](https://www.facebook.com/business/help/502981923235522)

#### Connecting Facebook page and Instagram account

> ## To connect your Facebook Page and Instagram account

---

1. From your News Feed, click **Pages** in the left menu.
2. Go to your Page and click **Page settings** in the bottom left.
3. Click **Instagram** in the left column, then click **Connect Account**.
4. Toggle **Allow access to Instagram messages in Inbox** on or off. When on, it provides access to people who manage your Page to view and respond to Instagram messages.
5. Click **Confirm**.
6. Enter your username and password and click **Log In**.
7. Click **Connect account**, then click **Confirm**. If you're connecting a personal Instagram account to a Page managed in Business Manager, change your Instagram account to a professional one:
   - Click **Business** or **Creator** account.
   - Click **Next**.
   - Click **Done**.

Learn what happens when you [connect your Facebook Page and Instagram account](https://www.facebook.com/help/2546917405323366).

> ## Sync business contact info

---

You can sync your business contact info between your Facebook Page and Instagram account. To sync your info you'll need to have a business profile on Instagram.

1. From your News Feed, click **Pages** in the left menu.
2. Go to your Page and click **Page settings** in the bottom left.
3. Click **Instagram** in the left column.
4. Click **Connect Account**.
5. Follow the prompts on the screen.

> ## Disconnect your Facebook Page and Instagram account

---

To disconnect your Facebook Page and Instagram account:

- From your News Feed, click **Pages** in the left menu.
- Go to your Page and click **Page settings** in the bottom left.
- Click **Instagram** in the left column.
- Scroll down and click **Disconnect**.

> **Source:** [https://www.facebook.com/help/1148909221857370](https://www.facebook.com/help/1148909221857370)

> ## Account setup

---

1) [Sign-up](https://cloud.yellow.ai/auth/signup) on Yellow AI platfrom: app.yellow.ai. If you have already signed-up, just sign-in.

2) Navigate to your chatbot: **Projects → Select your chatbot**.

3) To connect your Instagram account, go to **Configuration → Channels → Select Instagram** on app.yellow.ai platform.

![setup_1.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/78bdb997-0cc9-7068-7d7c-d6821b77cef5/setup_1.png)

4) Click on **Connect with Instagram**. You will be redirected to Facebook login page. Login to your account and grant requested permissions.

![setup_2.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/943859bd-7b66-2975-fdb6-4cadd69c5d6e/setup_2.png)

**NOTE:** If you have multiple Instagram accounts linked to your Facebook page, select the one that you want to connect to the bot.

> ## Features and Developer documentation

---

#### Generic Templates

The generic template allows you to send a structured message that includes an image, text and buttons. A generic template with multiple templates described in the [`elements`](https://developers.facebook.com/docs/messenger-platform/instagram/features/generic-template/#elements) array will send a horizontally scrollable carousel of items, each composed of an image, text and buttons.

![product_template_1.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/b9186c0b-459b-6ee9-1d7b-b2d73b166b9c/product_template_1.png)

The generic template supports a maximum of 10 elements per message.
At least one property must be set in addition to `title`.

| **Property Name** | **Type**                                                                                                               | **Requirement** | **Description**                                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`           | String                                                                                                                 | Mandatory       | The title to display in the template. 80 character limit.                                                                                                                                                                                  |
| `subtitle`        | String                                                                                                                 | Optional        | The subtitle to display in the template. 80 character limit.                                                                                                                                                                               |
| `image_url`       | String                                                                                                                 | Optional        | The URL of the image to display in the template.                                                                                                                                                                                           |
| `default_action`  | Object                                                                                                                 | Optional        | The default action executed when the template is tapped. Accepts the same properties as [URL button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button), except `title`.                               |
| `buttons`         | Array < [`button`](https://developers.facebook.com/docs/messenger-platform/instagram/features/generic-template/#button) > | Optional        | An array of [buttons](https://developers.facebook.com/docs/messenger-platform/send-api-reference/buttons) to append to the template. A maximum of 3 buttons per element is supported. Only `postback` and `web_url` buttons are supported. |

> ## Limitations

---

1. This feature is currently not available on desktop.

**NOTE:** This feature is currently under development. More limitations (if any) will be added further.

#### Private Replies

Private Replies allows Businesses to reply to comments made on their posts with a single message on Instagram. When using this feature, the user will get a message with a reference link to the comment that is getting the reply.

**Sample use case:** Initiating conversation with a user who comments on a post.

![private_reply_1.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/1997fc3e-3d13-cafd-1c26-54930064407d/private_reply_1.png)

![private_reply_2.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/07ce4db5-ba53-ddae-1dd9-9094e4ac67be/private_reply_2.png)

![private_reply_3.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/cef4e6c9-f73e-8b17-4dca-28f5517ab89e/private_reply_3.png)

> ## **Limitations**

---

1. Private replies are currently not supported for Instagram ads and IGTV comments.
2. Private replies are allowed within 7 days (except IG live) of the creation date of the comment.
3. Private Replies do not open the 24 hour window for standard messaging.

#### Story Mentions/Replies

An Instagram Professional account can be notified when a user mentions them in a story. When this happens, the IG Professional account will get a message in the inbox referencing the story that the user posted. Due to a story being ephemeral by nature (it will disappear after 24 hours or when deleted by the user), you must meet specific requirements and implementation guidelines to comply and respect user privacy for ephemeral content.

Story mention is part of the app review requirements for `instagram_manage_messages` permission. Please ensure that you meet all the story mention requirements before submitting for [app review](https://developers.facebook.com/docs/messenger-platform/instagram/app-review).

> ## Important Points

---

- A Story mention webhook will only flow in if the user mentioning the account has their account setup as public. Story mentions from a private account will only flow in if the account follows the said account.
- You must not store/cache the media content on your server.

#### Quick Replies

Quick replies provide a way to present a set of buttons in-conversation for users to reply with.

When a quick reply is tapped, the buttons are dismissed, and the title of the tapped button is posted to the conversation as a message. A messages event will be sent to your webhook that contains the button title and an optional payload.

![quick_reply_1.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/8225d40c-6185-a11c-be91-e1809c4bf131/quick_reply_1.png)

![quick_reply_2.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/fbc93788-7c36-c113-2142-62c7c0832ceb/quick_reply_2.png)

> ## Limitations

---

1. This feature is currently not available on desktop.
2. A maximum of 13 quick replies are supported.
3. Each quick reply allows up to 20 characters before being truncated.
4. Quick replies only support plain text.

#### Ice Breakers

Ice Breakers provide a way for users to start a conversation with a business with a list of frequently asked questions.

**Sample use case:** Pre-purchase product queries

![ice_breaker_1.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/5660e1dd-fb73-7cd2-81dc-b02a0dba2231/ice_breaker_1.png)

**Sample use case:** Post-purchase customer support

![ice_breaker_2.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/1cd01305-f681-acc4-e760-addd10927e9d/ice_breaker_2.png)

> ## Limitations

---

1. This feature is currently not available on desktop.
2. A maximum of 4 questions can be set via the Ice Breaker API.
3. Ice Breaker will be available only once, and for the first time users.

#### Human Agent Escalation

Apps with instagram_manage_message permission must have an escalation path to a human agent. Experiences can either start by directly interacting with a human agent or can start from an automation to qualify intent but must have a way for users to chat with a human agent as needed.

**Sample use case:** Pre-purchase discovery support

![human_agent_escalation_1.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/a167ad72-1c3b-d66f-22ab-371b627ba339/human_agent_escalation_1.png)

**Sample use case:** Post-purchase customer support

![human_agent_escalation_2a.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/5f93617e-7427-47b5-9778-ef8682541f37/human_agent_escalation_2a.png)

![human_agent_escalation_2b.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/7df95020-e3aa-0f0c-6a6f-29ab54e34f0c/human_agent_escalation_2b.png)

> ### List of supported messages by Yellow AI platform

---

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

* **Coming Soon**

**# Events will be received by the platform, and responses can be configured at the bot level**

> ## Channel limitations

---

**Following are some of the limitations set up by Instagram:**

1. Conversation should always be initiated by the user unless they comment on any posts.  **NOTE:** If user has not interacted with the bot directly but, only made a comment, a temporary user_id will be created so that the bot can respond only to that comment via direct message.
2. A maximum of 13 Quick replies can be added in a single prompt.
3. A single quick reply can have a maximum of 20 characters and supports only text. If the limit exceeds, those characters will be truncated.
4. Brands can only access a user’s Profile Name, and Profile Picture.
5. Bot can handle only one message at a time.

> ## Frequently asked questions

---

+ Is it mandatory to have a professional Instagram account? Can we not setup the chatbot using personal account?
   + **Yes. Both are mandatory.**
+ Does Instagram let brands to proactively reach out to customers?
   + **No. Currently, brands cannot run any campaigns on Instagram.**
+ Is it mandatory for users to start converstaion using Ice breakers?
   + **No. Users can choose to tap on an Ice breaker OR send any message.**
+ Is it mandatory to have Ice breakers?
   + **No. Brands can choose not to display Ice breakers. However, it’s suggested to have them in order to help users understand the bot’s capabilities.**
+ What happens if users share audio/video/sticker in between a conversation?
   + **A webhook event will be received on the platform which can be handled at a bot level.**
+ Can the bot respond if a user replies to a previous thread?
   + **No. The bot can only repond to the latest single message from the user.**
+ Can the bot retain a context if the user switches to a different context?
   + **Yes. This can be configured in the Builder/Studio module of the platform.**
+ Can there be multiple images in a single template/product card?
   + **No. Currently only a single image can be displayed in a single template/product card. However, brands can display upto 10 cards at once.**
+ How many buttons are supported in a template/product card?
   + **Currently upto 3 buttons can be added in a template/product card.**

> # Sample Messenger API support for Instagram Experience - Original Coast Clothing

---

You can experience the sample bot built by Facebook by sending a message to [**@originalcoastclothing**](https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Foriginalcoastclothing%3Fref%3DDEVDOCS%26fbclid%3DIwAR3lNgARJ786nDwyRwBTcWdtn3yzS4SbD6LXI10_HDQuMU2KDF2KOMwccZc&h=AT2EEdvM5fRZ7oiY8Qp8N7kWv21l-3LHPhLOFLjwEOxHA-8qpl0cyiSkJ_edVUnCdpSHVXJjeVLRrEjSAseKtefkF6ge55W_Ml49Tqf9kzrfcovdesF1BG9X1rfmxa8_HDhUTHZcdw9sepR_4R8pSv1k0d0) or [**commenting on a post**](https://www.instagram.com/p/CNaLh5xgppt/?fbclid=IwAR25MQqch_ofU_HWv5CFjGOPJmfiqV8qIjImlShqFvpOdSTwm-0_QCpdIjc).

![Image](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/5B5988ED-7107-42A1-BC6E-5A53870DFB35/3fa05cdd-b6a7-5bf3-526b-344e84bd812a/Image)

