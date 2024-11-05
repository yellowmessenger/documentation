---
title : Chat disconnecting at the customer level
sidebar_label : Enable user-initiated chat disconnection
---

In some use cases, clients may want users to have the ability to disconnect from a chat without agent intervention. This process outlines the steps for enabling user-initiated chat disconnection.

:::info
To make chat disconnection accessible at the customer level, Display a banner to users, guiding them to type `talk to bot` or click a button on the banner if they want to return to the bot. This interaction will enable customers to disconnect from the chat independently.
:::

## Steps to configure user-initiated chat disconnection

1. **Enable custom events**: Enable the custom events `ui-event-update-promotion` and `ui-event-close-promotion` in the bot settings.
2. **Trigger the banner on agent connection**: When a live agent ticket is raised, use the `ui-event-close-promotion` event to display a banner with the following configuration.

    Banner message with text input:
    ```
    {
      "title": "Do you want to exit from chat? Please type 'talk to bot'",
      "options": []
    }
    ```

    Banner message with button input:
    ```
    {
      "title": "Do you want to exit from chat?",
      "options": [
        {
          "title": "Exit",
          "text": "talk to bot"
        }
      ]
    }
    ```

3. **Send the event**: Use the Send Event node to trigger the `ui-event-close-promotion` event with the configured banner. This banner should now be visible to the customer, allowing them to disconnect the chat on their own.
4. **Train the bot with an intent**: Train the bot with utterances like `talk to bot` and link the intent to the desired journey to enable a smooth transition back to the bot.
5. **Enable bot-triggered journey**: Once the customer clicks the banner button or types the designated phrase, the bot will initiate the assigned journey. Subsequently, the `ui-event-close-promotion` event can be triggered to close the banner.
6. **Close the ticket**: Use the ticket close API to close the ticket accordingly.

:::note
- Ensure the events are in the enabled state for them to trigger correctly.
- The object text should be consistent with what’s defined here for smooth functionality.
::: 