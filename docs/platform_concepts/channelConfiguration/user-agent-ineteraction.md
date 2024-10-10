---
title: User-agent interaction control
sidebar_label : User-agent interaction control
---

When a user engages with a live agent, the bot temporarily pauses to enable direct communication between the user and the agent.

A callout banner can be configured to display a "Close chat" button. However, clicking this button does not immediately end the conversation. When you click "Close chat" button, a message is sent to the live agent, indicating that the user has requested to close the chat. The agent then decides manually whether to close the conversation.

  ![](https://imgur.com/HqNLXU1.png)

### Load the banner when a live agent is connected

To implement the Close chat option in the callout banner, follow the below steps:

* **Step 1**: Create a function

   You need to [create a function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-a-function) that captures the user's click on the "Close chat" button and triggers a custom event. A sample code:

```c
return new Promise(resolve => {
// for adding title and text to close chat banner 
    let response = [{
        
        title: "Do you want to exit from chat?",
        options: [{
            title: "Close chat",
            text: "talk to bot"
           // event:"exit-chat-queue"

        }]
    }]

    resolve(response);
}); 
```

* **Step 2**: Train the bot

  After configuring the function, train the bot with a "talk to bot" utterance. This triggers the flow that sends a message to the live agent when the user requests to close the chat.

* **Step 3**: Create two [custom events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#custom-events):
    * `ui-event-update-promotion` (to load the banner).
    * `ui-event-close-promotion` (event to close the banner).

* **Step 4:** When an agent is connected to the user, use the [send event](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#11-send-event) node to send the `ui-event-update-promotion` event data as the above function variable (array) to display the banner with the option to close the chat.
   * When the user clicks on the **Close chat** button, a message is sent to the live agent notifying them of the user's request. The agent will then manually close the conversation if necessary.















