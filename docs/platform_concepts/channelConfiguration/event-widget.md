---
title : Chat widget events
sidebar_label : Chat widget events
---

Yellow.ai offers a wide range of options to customize features for its web widget. However, sometimes, our clients need even more flexibility in crafting the widget’s design, and functionality as per their use cases. 

You can use certain tricks to customize your web widget to suit your needs. This section helps you with different ways to customize your chat widget’s look and feel,  functionality, and capture bot events.

When your bot is operational, it generates various events. You can use them to capture those occurrences and trigger a flow or automation workflow.

## 1. Send event to bot

```js
// find the yellow.ai widget iframe
const ymIframe = document.getElementById('ymIframe');
// event_name should be a valid name supported by the widget.
const message = JSON.stringify({code: 'event_name', data: {...}});
// send a cross-site message using 
// window.postMessage(message, targetOrigin, transfer) API.
ymIframe.contentWindow?.postMessage(message, window.location.origin);
```

## 2. Listen to a bot event

```js
<script type="text/javascript">
         window.addEventListener('message', function(eventData) {
							// make sure to verify origin to prevent XSS attacks.
							// https://blog.yeswehack.com/yeswerhackers/introduction-postmessage-vulnerabilities/
							// if (event.origin !== <your_origin>) throw new Error('Message not allowed");
            console.log(eventData,"eventData");
         })
</script>
```

### 1.3 Available events


| Event | Functionality |
| --- | --- |
| ym-bot-opened | Bot opened |
| ym-bot-closed | Bot closed |
| ym_event_quick_reply | Quick Reply clicked |
| ym_event_image_clicked | Image opened in preview |
| ym_event_card_action | Card action button clicked |
| ym-bot-loaded-on-page-reload | When the refresh context is false, the bot will receive events as soon as the page reloads |
| ym_home | Home button clicked |
| message-received | New message received by user that is, sent by the bot |
| page-url-based-trigger | Whenever a notification is sent in the bot (for electron apps) |