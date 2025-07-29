---
title:  WhatsApp AI agent issues
sidebar_label:  WhatsApp AI agent issues
---

This document outlines why your AI agent on WhatsApp may stop responding to certain users and provides clear steps to help you troubleshoot and resolve the issue.

The AI agent becomes unresponsive only for specific users on the WhatsApp channel. This issue is not caused by Yellow.ai’s platform. Yellow.ai relies on Meta's WhatsApp Business Cloud API to send and receive messages. If the AI agent does not respond to certain users, it indicates one of the following:
* Message delivery issues on Meta's infrastructure
* Temporary API delivery failures
* User-side network or device-related restrictions

### Steps to troubleshoot

1. **Perform initial self-check**
   * Refer to Meta's official WhatsApp troubleshooting documentation:
[Meta WhatsApp cloud API support guide](https://developers.facebook.com/docs/whatsapp/cloud-api/support/)
   * Check the following:
       - Is the affected user online and receiving messages from other WhatsApp contacts?
       - Has the user blocked the business number?
       - Are other WhatsApp features (like media sharing or links) working for that user?
       
2. **Raise a ticket with meta**

   If the issue continues and appears isolated to Meta's infrastructure, you need to raise a support ticket directly with [Meta](https://business.facebook.com/direct-support/).

3. **Contact Yellow.ai support**

   If you are unable to reach out to Meta directly, contact [support](mailto:support@yellow.ai) with the following details:

Required details | Description
-----------------|------------
Problem summary	| A brief explanation of what's not working
Start time & date | When the issue first occurred
Impacted WhatsApp Number(s)	| Provide phone number(s) affected
Screenshots / Screen Recording | Visual evidence of the issue (if available)
Device details | Device model, OS version, browser if applicable
      
Support team will raise a Meta support ticket on your behalf and keep you updated as we receive information. As this issue originates from Meta's WhatsApp infrastructure, Yellow.ai cannot guarantee a resolution timeline.

Support team will provide status updates based on responses from the Meta support team.