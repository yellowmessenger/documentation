---
title: Dyte Event Integration in Cloud Web Bots
sidebar_label : Dyet event in bots   
---


When the video call feature is enabled in the **Raise Ticket** node, the bot receives an event called `dyte-event`. This event has multiple sub-events that allow the bot to send messages or follow up with clients accordingly.

:::note

**Prerequisites**
- **Chat with Agent Flow**: Ensure that the chat flow is set up to enable communication with an agent.
- **Video Call Feature**: The video call feature must be activated in the bot configuration.
:::

## Steps to use dyet event 

1. Navigate to **Automation > Flows**. Open the **Raise Ticket** node > **Advance settings**.   
2. Select the options for **Voice Call** and **SIP Call**.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXedt9NmVANaZnziKXp2UR9-bWT7XAh-940zUqzNXPMC2Z7tj1-ufjF7Ml3f5yhJz_W5rsVpJRNjhiUd0qF7lKkIltucpEtd-OjNKm6NlKW4iTyg2icePzLxlQgbgu6gVAXCHsuwTpur9CrNRBpcjmMHyyN_?key=sYXyf5rNT6tPLRLPPwri7g)**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf87N8MHgXkrlZCAildT2jo3Z_o5sfiQvhDhQm5pb6AF5_gdkXbI6lXjdZlsmewL3h475UUtgbkjGfoH6Of9LLJwpDndkf8iXk32MexbNg-C8ECXUIdS0C8Cm5EVuC83rOvAMqpE0PI3DdnPTwEFFXgiDY?key=sYXyf5rNT6tPLRLPPwri7g)**

3. **Initiate Video Call**:
   - Once these settings are configured, a call symbol will appear beside the **Transfer** and **Resolve** buttons when the chat is assigned to you within the **Inbox** module.
   - Click on the call symbol to initiate a video call with the end user.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeYPG29TlIviC_9N-C88vXve_R8ZwRHHdCkjoU-yuc8RJuuGFuN4muOJP-arCZzMJb_vBfAcUv0CaipX7EGvKyKAnZSgk7B7A0pHY-440QRHQZ1ced2dq-d6--p46t2oQUjZedkvtzTxh0_bhWNF6HbgGri?key=sYXyf5rNT6tPLRLPPwri7g)**


4. After the video call is connected, the bot will receive a `dyte-event`. This event includes several sub-events that can be used to trigger further actions.


## Sub-Events in Dyte Event

- **meeting.started**: Triggered when the meeting starts.
- **meeting.participantJoined**: Triggered when a participant joins the meeting.
- **recording.statusUpdate**: Triggered to provide updates on the recording status.
- **meeting.participantLeft**: Triggered when a participant leaves the meeting.
- **meeting.ended**: Triggered when the meeting ends.

