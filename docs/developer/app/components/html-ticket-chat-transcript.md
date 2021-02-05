---
title: app.htmlTicketChatTranscript
sidebar_label: app.htmlTicketChatTranscript
---

This function returns the chat transcript in HTML form for use by the bot.

## Input 

Ticket ID and the timezone.

## Output

The HTML data for chat transcript.

### Example
```js
app.htmlTicketChatTranscript({ ticketId: '100025', timezone: 'UTC'}).then((res) => {
    app.log(res, 'html data');
})
```