---
title: Limitations of WhatsApp channel
sidebar_label: Limitations of WhatsApp channel
---

This guide contains the limitations of WhatsApp channel.


| Options | Limit |
|---------------------|-----------------|
| [Quick reply button](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) | Supports a maximum of 3 buttons and 20 characters per button. If more than 3 buttons are added, it defaults to a numbered list. |
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
Date picker, Multi-select, Location, Feedback, and Speak nodes are not supported for WhatsApp channels.  
:::