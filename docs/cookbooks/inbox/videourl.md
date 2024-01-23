---
title: Configuring call URLs
sidebar_label: Configure video call URLs
---

The **Video Call URL** is a meet link with a built-in authentication token. Clicking on this URL allows individuals to join the call effortlessly.

This URL is generated and sent to every participant in the call. 
- For agents, it is readily available on the UI along with their authentication token. 
- For end users accessing Yellow.ai via the widget, the option to join a video call(URL) is found as a call button on their UI. 
- For end users in other channels, the bot must create and send the URL.


Video call URL is used when a video call ticket is created, and the user interface (UI) is not controlled by Yellow.ai in certain channels, excluding the widget.


This article will guide you through the process of shortening and configuring video call URLs.


## Steps to configure video call URL 

To configure video call URL, follow these steps: 

1. When a ticket is created for video call, an event is triggered.
2. Handle the triggered event and call the below function (this returns the long-form URL): 
```
https://app.yellow.ai/api/agents/settings/getVideoCallUrlForTicket?bot=x1553936559750&ticketId=103987&baseRegionUrl=https://app.yellow.ai
```
3. Pass the long-form URL to a URL shortening API.
4. Send out the shortened URL to the intended participants.


By integrating a URL shortening API into the process, the Video Call URL is easily shareable and accessible, regardless of the communication channel.

