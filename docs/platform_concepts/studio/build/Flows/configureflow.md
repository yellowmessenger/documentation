---
title: Configure flow trigger 
sidebar_label: Configure flow triggers
---

In order for a flow to operate, it must be initiated by specific triggers. 

To initiate a specific flow, you need triggers. One popular trigger option is using predefined intents, such as "I want to order food" or "Food order". By training your bot to recognise these intents and the corresponding phrases, whenever a user enters a matching intent or similar phrases, it automatically triggers the corresponding flow.

## <a name="starttrigger"></a> 1. Configure start trigger

To configure a start trigger, follow the steps below:

1. Go to **Studio** and click a flow.

![](https://i.imgur.com/0UnEjxQ.png)


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

Trigger a flow when an event takes place. An event refers to a recognized occurrence or action that can be used to trigger certain behaviors or actions within the chatbot. 

For example, if all the live chat agents are busy, a message can be triggered to inform the user that all live agents are currently occupied and unavailable to chat.

To learn more about  events, [click here. ](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub)

### 1.4 Trigger flow using page Url

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

------ 
## <a name="triggerflow"></a> 3. Test a specific flow

When configuring a bot with multiple flows, it's important to ensure desired outcomes before moving to the next flow. However, running the entire bot for every change can be time-consuming. To simplify the process, you can test each flow separately using URL, code or the option available on the Studio overview page. This allows you to focus on specific flows without executing the entire bot, saving time and effort during configuration.

To preview a specific bot flow there are two methods, discussed in the further sections:
1. [Test bot flow on the Studio overview page](#31-test-bot-flow-via-studio-overview-page)
2. [Test bot flow via. URL](#32-test-bot-flow-via-url)
3. [Test bot flow via. Code](#33-test-bot-flow-via-code)

### 3.1 Test bot flow via Studio overview page

To preview a bot on the Studio overview page,

1. Go to **Studio**.
2. Click the **Preview button** next to the desired flow. 
3. The flow will get triggered in the chat box on the right end.

![](https://i.imgur.com/ayZl1tb.png)

You can also go to the respective flow and click **Preview current flow**.

![](https://i.imgur.com/BP7lckE.png)

### 3.2 Test bot flow via. URL

To preview a bot via URL, follow the given steps:

1. Go to **Studio** > **Flows**.
2. Click the **Flows** drop-down and select the flow that you want to preview.
3. Copy the path of the flow that you see in the URL (after `flow/`)

![](https://i.imgur.com/K9naz4Z.jpg)

4. Click **Preview bot**, you will see the entire bot flow in a new tab.

![](https://i.imgur.com/jZCPVVI.png)

5. In the address bar, append `?ym.triggerJourney={flow path}`.

Example:
`https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=docs-feedback`

![](https://i.imgur.com/CLmlHyp.png)

Ensure that you clear the browser cache before you preview the bot. It is recommended to use Incognito mode or Private window to preview flows.

:::note
  * Use `?` to append right after the base URL of the bot. Example: https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback
  * Use & if you want to append it after a variable. Example: https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback
:::

#### Flow slug (Journey slug)
A flow slug is the combination of flow name with auto-generated characters for a flow in the format -  `/flow-name_{auto-generated characters}`.

It appends to the URL and you can see it when you select a specific flow.

   ![](https://i.imgur.com/e8MjGPV.png)

### 3.3 Test bot flow via. code

To preview a bot via code (embedded on your website), follow the steps below:

1. Get the path of the flow as explained in the previous section.
2. In `window.ymConfig`, pass the parameter `triggerJourney` and specify the path of the flow you copied.

```
<script type = "text/javascript" >
    window.ymConfig = {
        "bot": "x1625119673009",
        "host": "https://cloud.yellow.ai",
        triggerJourney: "malaga_vftkqv"
    };
(function() {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
    else {
        var d = document,
            i = function() {
                i.c(arguments)
            };

        function l() {
            var e = d.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
        i.q = [], i.c = function(e) {
            i.q.push(e)
        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)
    }
})(); 
</script>
```

3. Paste the code in the Header or body of your website as per your need to preview the flow.

## 4. Flow settings

To access a flow's settings,

1. Click the gear icon at the bottom.

 ![](https://i.imgur.com/toAQbCj.png)

2. In the following screen, you can configure the following,

 ![](https://i.imgur.com/M8b8icy.png)

|Field|Description|
|------|----------|
|Init function| Function that will be executed before going through a flow.|
|Change category| Category of the flow|
|Mandate words| Mandatory words that have to be in the user utterance to trigger this flow.|
| Precluded words| Flow will not be triggered if these words are present in the user utterance.|
|Disable steps for Go Back functionality| If the user response is 'go back' (or related words - configured in tools), this takes them to the previous question. At the flow level, you can disable some steps from which going back should not be allowed.|
|Channels| Flow will only be available in the selected channels.|

**What Next?**

  

Series of **nodes** are used to create a flow. There are multiple nodes available on our platform.

* Learn about different **nodes** [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) and create a complete flow.
* [Test](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) the flow.