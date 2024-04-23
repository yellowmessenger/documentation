---
title: Configure flow trigger 
sidebar_label: Configure flow triggers
---

In order for a flow to operate, it must be initiated by specific triggers. 

To initiate a specific flow, you need triggers. One popular trigger option is using predefined intents, such as "I want to order food" or "Food order". By training your bot to recognise these intents and the corresponding phrases, whenever a user enters a matching intent or similar phrases, it automatically triggers the corresponding flow.

## <a name="starttrigger"></a> 1. Configure start trigger

To configure a start trigger, follow the steps below:

1. Go to **Studio** and click a flow.

 ![](https://i.imgur.com/47ONnMU.png)


3. Click the **Start** node.

   ![](https://i.imgur.com/uGpfjTZ.png)

4. In the Start trigger pop-up, select a type of trigger from the drop-down - **Intents**, **Entities**, **Event**, or **Page URL**. In the next field, select the value of the type of trigger.

   ![](https://i.imgur.com/uRV6zAC.png)

The Start trigger configures how a bot communication flow begins, initiating a conversation based on customer queries and trigger logic.


### 1.1 Trigger a flow using Intent

Initiate a flow with an action statement such as booking a test drive, connecting to a service center, checking the status of an order, or finding the best product on a website. For instance, if a customer types 'How to book a test ride', the bot triggers the flow that has been configured for the '#test ride' intent.

To learn more about intents, [click here. ](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)

   ![](https://i.imgur.com/24m919A.png)

### 1.2  Trigger flow using Entities

Start the flow with the primary object(s) of a query, such as the cheapest flight, customer service number, sedan cars, rooms in a hotel, and best beauty products. For example, if a customer types studio, the bot triggers the configured flow. 

To learn more about entities, [click here. ](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities#-3-types-of-entities)


   ![](https://i.imgur.com/Y5dviXE.jpg)


### 1.3 Trigger flow using event

You can trigger bot flows when a specific event occurs allowing you to automate responses and actions. With event based triggers, you can create personalized and timely interactions with your customers based on their actions.

Example:

If you run an online store, and a customer adds items to their shopping cart but abandons it without completing the purchase. You can set up an event trigger to activate a bot flow that sends a reminder message to the customer, encouraging them to complete their purchase. This automated response can help recover potentially lost sales.

* To configure event based trigger: Create a flow that you want to trigger for a specific event and set the start node to event 

   <center><img src="https://i.imgur.com/kCWiZah.png" width="70%"/></center>

You can trigger flows using any event that is enabled for the bot. This can include system events, user events, custom events, and integration related events. To know about various events that are available in the system, see [Events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub).

### 1.4 Trigger flow using page URL

Initiate a flow with a page Url. For example, triggering the help centre URL on the contact us page.

   ![](https://i.imgur.com/wt8EyFh.png)


### 1.5 Trigger flows from others flows via Execute flow node

You can set up when to trigger a flow manually from or inside another flow using [Execute Flow action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow).

 Add the **Execute Flow** node and select the flow you want to execute next. 
 
 For example, track your application, know your ID and view FAQs are three user responses linked to different flows (which are configured as separate flows). When one of the responses is sent, respective flows are executed.

   ![](https://i.imgur.com/zr7bkqW.jpg)
   
## 2. Add multiple triggers

 Click **Add new trigger** to add multiple triggers to the flow. You can train the bot with more than one start trigger to accommodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger a particular flow.


 ![](https://i.imgur.com/fF9TrGB.png)

A start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of a trigger, the bot triggers the flow.

Let's say you have a chatbot for a customer support service. The start trigger for initiating a flow could include the following:

* **Events:** Customer visits the website's Contact Us page, Customer opens the mobile app.
* **Intents:** "I need assistance with my order, "Help me with a technical issue."
* **Entities:** Customer's order number, Product name or ID, Billing account number.

In this scenario, if any of the events occur or if a customer types one of the specified intents or provides relevant entities, the bot will trigger the flow and assist the customer accordingly.
