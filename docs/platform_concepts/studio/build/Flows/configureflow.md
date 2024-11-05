---
title: Configure flow trigger 
sidebar_label: Configure flow triggers
---

In order for a flow to operate, it must be initiated by specific triggers. By setting triggers like Intent, Entities, Page URL, and Event, the AI-agent can automatically start the right flow.

To initiate a specific flow in a AI-agent, you need to configure flow triggers. These triggers can include predefined intents (example, "I want to order food"), entities, page URLs, and events. By training your AI-agent to recognize these triggers, it will automatically start the appropriate flow when users provide matching intents, entities, URLs, or events.

## Configure start trigger

The start trigger is an entry point for a AI-agent to begin a conversation with the user. The start trigger configures how a AI-agent communication flow begins, initiating a conversation based on the trigger logic and customer queries. You can define the start trigger using Intents, Entities, Events, or Page URLs. 

To configure a start trigger, follow the steps below:

1. Go to the AI-agent flow and click the **Start** node.

    ![](https://i.imgur.com/53Cpx3w.png)

2. In the Start trigger setup screen, select a type of trigger from the drop-down menu. You can choose from Intents, Entities, Events, or Page URLs. In the next field, select the value of the type of trigger.

     ![](https://imgur.com/zuP3R7W.gif)


### Trigger a flow using Intent

An intent in a AI-agent represents the user’s purpose or goal, such as ordering food or checking the weather. Users often type their needs directly, making intents an easy way for the AI-agent to understand and start the right flow. For more information on intents, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents).

   ![](https://i.imgur.com/pSQAisy.gif)

### Trigger flow using Entities

Entities capture specific details such as dates, locations, or product names within user inputs. They help the AI-agent accurately understand the user's intent and provide relevant responses.

For example, if a user types, “I am looking for Italian restaurants in New York to accommodate four people,” the identified entities are the location (New York), cuisine (Italian), and the number of people (four).


   ![](https://i.imgur.com/N5elkrA.gif)


### Trigger flow using event

You can trigger AI-agent flows when a specific event occurs allowing you to automate responses and actions. With event based triggers, you can create personalized and timely interactions with your customers based on their actions.

Example:

If you run an online store, and a customer adds items to their shopping cart but abandons it without completing the purchase. You can set up an event trigger to activate a AI-agent flow that sends a reminder message to the customer, encouraging them to complete their purchase. This automated response can help recover potentially lost sales.

To configure an event-based trigger:

1. Create the flow you want to trigger for a specific event.
2. Set the start node to the event.

   <center><img src="https://i.imgur.com/kCWiZah.png" width="70%"/></center>

You can trigger flows using any event that is enabled for the AI-agent. This can include system events, user events, custom events, and integration related events. To know about various events that are available in the system, see [Events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub).

### Trigger flow using page URL

You can trigger specific AI-agent interactions by using a page URL, which activates flows based on the webpage a user is visiting. This URL should be provided only if the AI-agent is deployed on the corresponding website.

For instance, imagine you have a customer support AI-agent on your website. You can configure the AI-agent to trigger a flow specifically for users who visit the "Contact us" page. When users navigate to this page, the AI-agent can automatically initiate a flow that offers assistance related to common contact queries, such as providing the help center URL, offering contact information, or starting a live chat.

   ![](https://i.imgur.com/wt8EyFh.png)
   
## Add multiple triggers

 Click **Add new trigger** to add multiple triggers to the flow. You can train the AI-agent with more than one start trigger to accommodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger a particular flow.


 ![](https://i.imgur.com/fF9TrGB.png)

A start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of a trigger, the AI-agent triggers the flow.

Let's say you have a AI-agent for a customer support service. The start trigger for initiating a flow could include the following:

* **Events:** Customer visits the website's Contact Us page, Customer opens the mobile app.
* **Intents:** "I need assistance with my order, "Help me with a technical issue."
* **Entities:** Customer's order number, Product name or ID, Billing account number.

In this scenario, if any of the events occur or if a customer types one of the specified intents or provides relevant entities, the AI-agent will trigger the flow and assist the customer accordingly.
