---
title: November 2023
sidebar_label: Latest product updates (November 2023)
featured: true
---

![](https://i.imgur.com/hIGEIJL.png)

## Chat Widget

### Download transcripts for a comprehensive conversation record

Bot users can now effortlessly download chat transcripts directly from the chat widget. They get access to their entire conversation history with the bot in a convenient plain text (.txt) format. The downloaded transcripts provide comprehensive details, including the bot's name, user's name, timestamp (displaying the full date and time), and all messages exchanged among the bot, agent, and user.

**[Read docs](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/download-transcript)**


   <img src="https://i.imgur.com/2kwdmLR.png" alt="drawing" width="50%"/>

### Effortless file retrieval for users

The bot users can now seamlessly retrieve their uploaded files via the platform by simply clicking on the provided hyperlinks.

   <img src="https://i.imgur.com/his0Lh2.png" alt="drawing" width="50%"/>
   

### Streamline widget styling accross all environments

You can now efficiently publish the **Widget Panel**, **Bot Icon**, and **Settings** options on the Chat Widget setup page, eliminating the need for repeated setup or updates across environments.

This is available for bots under the T3 subscription plan, specifically those with **Sandbox** -> **Staging** -> **Production** environments, and does not apply to T1 & T2 bots with **Dev** -> **Live** environments. For security reasons, the publication of Domain Whitelisting settings is excluded from this feature.

   <img src="https://i.imgur.com/dxLuOuT.png" alt="drawing" width="90%"/>

## Studio

### Enhance bot conversations with preview logs

In the **Preview** section, a new Debug option has been added. This tool shows logs of the tested conversation, including timestamps, IDs, and actions. Hover over the logs to access options that lead to specific nodes or logs. This helps you review and improve the bot-user conversations.
   
   <img src="https://i.imgur.com/jEHDESB.png" width="90%"/>

## Inbox

### Standardized time units and Streamlined metrics for better user experience

* Standardized time units for better clarity: First response duration, Average response time, and Resolution duration are now uniformly measured in seconds by default.
Enhancements:
* Removed duplicate field: TICKET_HANDLING_DURATION_IN_MILLISECONDS to eliminate confusion. Users can now rely on either RESOLUTION_DURATION_ASSIGNED_IN_SECONDS or RESOLUTION_DURATION_CREATE_IN_SECONDS based on their specific use case.

If you have have built reports or dashboards based on the Email tickets table in Data Explorer, especially using the following metrics:

* Average response duration
* Ticket handling duration
* Resolution duration assigned
* Resolution duration create

Please review your reports and dashboards to ensure compatibility and make any necessary adjustments to prevent issues.

### Improved customization with HCF

You can now define four levels of HCF, though the option to mark them as **Required for ticket creation** is not applicable. Additionally, these fields cannot be retrieved from the **Raise ticket** node, preventing you from designating them as read-only. When marked as **Required for transfer/close**, all levels of HCFs become mandatory on the ticket.
