---
title: Handling User inactivity events
sidebar_label: User inactivity event guide
---


**User Inactivity Events** help manage conversations when users stop responding. You can use them to follow up, repeat prompts, or even redirect the conversation automatically—ensuring conversations remain active and productive.

To know how to configure User inactivity event, see [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-user-inactivity-event)


### Common use cases

1. **Send a Reminder Message to the User**
   Gently re-engage users who have gone silent.

2. **Nudge Users to Respond to the Previous Prompt**
   Remind the user and repeat the last unanswered question.

3. **Trigger a Flow (e.g., Feedback or Survey)**
   Automatically redirect the user to another flow after inactivity.

---

### How to set up inactivity events

#### 1. **Send a reminder message**

1. Go to **Automation > Events**, then click **User Inactivity Events**.
2. Click **+ Add Event**, provide an event name, description, and delay (recommended: 5+ minutes).
   ![](https://imgur.com/n4J55CT.png)   
3. Enable the **Handle event with message** toggle.
4. Enter the reminder message (e.g., *“You haven’t responded in a while. Need help?”*).
5. Save the event.

#### 2. **Send a reminder and repeat the last prompt**

1. Follow steps in **Use Case 1** above.
2. Additionally, select the **Show previous prompt** checkbox.
  This will re-display the previous question along with the reminder message.

#### 3. **Trigger a flow on inactivity**

1. Go to **Automation > Events > User Inactivity Events**.
2. Create a new event and set a delay (e.g., 5 minutes).
  **Do not** enable the **Handle event with message** toggle.
3. Save the event.
4. Open the flow you want to trigger. On the **Start Node**, choose:

  * **Event** as the trigger type.
  * Select the **User Inactivity Event** you just created.

This setup ensures the new flow is triggered automatically when the user is inactive.


### Advanced configuration options

| Option                          | Description                                                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Activate for specific steps** | Limits the inactivity event to selected flows and steps only, giving you granular control over when the event should trigger.               |
| **Handle event with message**   | If enabled, allows sending a reminder message and optionally repeating the last prompt. If disabled, use it to trigger other flows instead. |
| **Allow context switching**     | Lets users break out of the current conversation and start a new one, helping them switch context smoothly.                                 |



:::note
This event gets triggered for the specific node in a flow only if the user has been previously responding in the flow. If the user does not respond at all from the beginning of the flow, this event will not get activated.
:::
