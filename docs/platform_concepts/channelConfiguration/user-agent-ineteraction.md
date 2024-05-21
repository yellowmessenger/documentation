---
title: User-agent interaction control
sidebar_label : User-agent interaction control
---

When a user engages with a live agent, the bot temporarily pauses to enable direct communication between the user and the agent. By default, the ticket remains active until it is closed by the agent. 

* To allow the user to disconnect from the live agent at any time during the conversation, you can load a callout banner with an action button. 
* Once the conversation with the live agent is closed, you can hide the banner.

  ![](https://imgur.com/HqNLXU1.png)

### Load the banner when a live agent is connected

* **Step 1**: You need to [create a function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-a-function) with the following code:

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

* **Step 2**: After configuring this function, you need to train the bot with a "talk to bot" utterance to trigger the flow.

* **Step 3**: Create two [custom events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#custom-events):
    * `ui-event-update-promotion` (to load the banner).
    * `ui-event-close-promotion` (event to close the banner).

* **Step 4:** When an agent is connected to the user, use the [send event](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#11-send-event) node to send the `ui-event-update-promotion` event data as the above function variable (array) to display the banner with the option to close the chat.
   * When user clicks on close chat button, trigger the bot flow to close the live agent ticket and use [send event](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#11-send-event) node to send the `ui-event-close-promotion` to close the banner.







