---
title: WhatsApp
sidebar_label: WhatsApp
---

WhatsApp is a messaging platform that allows you to send text messages, group chats, status updates, and other media like images, documents, voice messages, and calls. 

There are three types of WhatsApp accounts:

- WhatsApp (WA)
- WhatsApp Business (WAB)
- WhatsApp Business API (WAB API)

Yellow.ai integrates with WhatsApp via the WhatsApp Business API, acting as an official WhatsApp Business Service Provider (BSP). This integration enables seamless communication and facilitates the [setup of WhatsApp chatbot](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration).

Connecting WhatsApp with the Yellow.ai cloud platform enables businesses to send campaigns, provide customer support, engage in conversational marketing, and drive sales.

This channel enables the following key features:

* **Automated Replies**: Provides the ability to automatically respond to user messages.
* **Multi-message types support**: Supports various message types, including image, video, file, Quick reply, Carousel, WA quick reply, Dynamic WA list message, and WA list, enhancing the overall communication experience.

### Differences between WhatsApp, WhatsApp Business App, and WhatsApp Business API:

... |WhatsApp |WhatsApp Business App | WhatsApp Business API
---------|--------|-------------|----|
Target Audience | Designed for personal one-on-one and group messages | Designed for small and local businesses (entrepreneurs, local shops, small enterprises) | Designed for medium to large businesses (enterprises with a larger customer base and higher messaging volumes)
Availability | Available as a free mobile app | Available as a free mobile app | Contact [Yellow.ai support team](mailto:support@yellow.ai) for setup
Interaction | 1-1 messaging | 2 people to 1 messaging | Many-to-one messaging |
Pricing | Free messaging | Free messaging | Messages should be responded to within 24 hours; otherwise, a paid service is required. Both [WhatsApp](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/WA-pricing) and the Business Service Provider (BSP) have detailed pricing information
Supported message types | Supports text and emoji based messaging with attachments | Supports text and emoji based messaging with attachments | Supports text and rich media messages
Verification | No | No | Need approval of templates to send template messages and access to the API
Interface | Front-end interface in the form of an app installable on mobile devices | Front-end interface in the form of a business app installable on mobile devices | There is no front-end interface. Communication is facilitated through Business Solution Providers (BSP)
WhatsApp pay | Yes | Yes | No
Device Support | Single user per device | Single user per device | Supported on multiple users and devices 
Functionality | Supports sending one-on-one and group messages | Supports sending a high volume of messages with quick replies and automated greeting messages for efficient communication | Supports more advanced use cases like transactional messages, appointment reminders, and customer alerts | 
Auto responses | No | Yes | Yes | 
Verified green tick mark | Not available	| Requires approval from WhatsApp | Requires approval from WhatsApp
Automation | No message automation | Limited automation. App automation includes greeting messages, away messages, and quick replies | Supports complete message automation |
Usability | Used on an iOS or Android app | Used on an iOS or Android app |Used on automated systems or chatbots. There is no real mobile interface |

### Limitations of WhatsApp channel

| Options | Limit |
|---------------------|-----------------|
| [Quick reply button](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) | Supports a maximum of 3 buttons and 20 characters per button. If more than 3 buttons are added, it defaults to a numbered list. <br/><img src="https://i.imgur.com/NDzr4JO.png" alt="drawing" width="60%"/> |
| [Carousel card](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) | Supports a single carousel card. |
| Carousel button | Supports a maximum of 3 buttons.<br/><img src="https://i.imgur.com/isKubvH.png" alt="drawing" width="60%"/> |
| Carousel character limit | The maximum number of characters supported is 1024. <br/><img src="https://i.imgur.com/sndE43Y.png" alt="drawing" width="60%"/> |
| Image type | Supported image types are JPG and PNG.
| Image size | Supported image size is 5MB.
| Image diemensions | Supported image dimension is 250*250.
| Video type | Supported video type is MP4.
| Video size | Supported video size is 15MB.
| Video dimensions | No restrictions.
| File size | Supports any valid MIME type up to 15 MB in size.

The following are the character limits for **WhatsApp Dynamic Quick Replies**:
 
Fields | Mandatory | Description | Character Limit | 
|--------|-------|------|-------|
Title | yes | Enter the message | 1024
Options | yes (1 title is mandatory) | "Title" will be the button. After pressing the button, the value names and text will be returned. | 3
Options.title | yes | String value | 20
Options.text | yes | String value | 20
footer | no | Faded text below the body | 60

:::note
Multi-select, Feedback, and Speak nodes are not supported for WhatsApp channels. However, Date picker and Location nodes are supported on WhatsApp, but the UI similar to the web is not supported in WhatsApp. 
:::