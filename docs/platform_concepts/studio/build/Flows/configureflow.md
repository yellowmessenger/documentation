---
title: Configure start trigger 
sidebar_label: Configure flow triggers
---

In this article, you will learn: 
1. [How to configure a start trigger](#1-configure-start-trigger)
2. [How to trigger a flow?](#2-trigger-the-flow)

## <a name="starttrigger"></a> 1. Configure start trigger

To configure a start trigger, follow the steps below:

1. Open the bot **Studio** page.
2. Design bot flows > Flows tab. Click the Flows node of the bot. Expand a category and select a flow.

   ![](https://i.imgur.com/d1V0J56.png)

3. Click anywhere on the **Start** node.

   ![](https://i.imgur.com/uGpfjTZ.png)

4. In the Start trigger pop-up, select a type of trigger from the drop-down - Intents, Entities, Event, or Page URL. In the Select field, select the value of the type of trigger.

   ![](https://i.imgur.com/uRV6zAC.png)

:::info
 Start trigger enables you to configure the initiation of a bot communication flow. When a customer types a query, the bot starts the conversation based on the logic of the trigger.
:::

Flow is triggered using one of the following:

### Trigger a flow using Intent
Start the flow with an action statement, how to book a test drive, connect to a service centre, find the status of an order, and find the best product on a website. For example, if a customer types How to book a test ride, the bot triggers the configured flow of the *#test ride* intent. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)to learn more about intents.

   ![](https://i.imgur.com/24m919A.png)

#### Trigger flow using Entities
Start the flow with the primary object(s) of a query, such as the cheapest flight, customer service number, sedan cars, rooms in a hotel, and best beauty products. For example, if a customer types studio, the bot triggers the configured flow associated with the studio model. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities#-3-types-of-entities) to learn more about entities.


   ![](https://i.imgur.com/Y5dviXE.jpg)


#### Trigger flow using Event
Start the flow with an event, such as a bot that pops up when a customer visits the Contact us page or the Home page of the website or app. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub)to learn more about the configuration of events.

#### Trigger flow using Page Url
Start a flow with a page Url. For example, triggering the help centre URL on the contact us page.

   ![](https://i.imgur.com/wt8EyFh.png)


#### Trigger flow using the Execute flow node

Apart from the start trigger, you can also set up when to trigger another flow manually from or inside a flow using Execute Flow action node.

Add the action node **Execute Flow** and select the flow you want to execute next. For example, track your application, know your ID and view FAQs are three user responses linked to different flows (which are configured as separate flows). When one of the responses is sent, respective flows are executed.

   ![](https://i.imgur.com/zr7bkqW.jpg)

:::info
- Click **Add new trigger** to add additional triggers for the flow. You can train the bot with more than one start trigger to accommodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger the communication flow.

 ![](https://i.imgur.com/fF9TrGB.png)

- For example, a start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of a trigger, the bot triggers the flow.
:::

---

## <a name="triggerflow"></a> 2. Test a specific flow (Trigger bot flow)

When you are configuring a bot, there could be several complex flows in the bot. You need to always ensure whether the outcome of a flow is as desired before moving on to the next flow and it’s tedious to run the entire bot every time you make some change in a flow.

You just need to add a parameter to the URL or widget code to preview changes made in a particular flow of your bot. You no longer have to run through the entire bot flow every time you make some changes to a flow.

To preview a specific bot flow there are two methods, discussed in the further sections:
1. [Trigger bot flow via. URL](#21-trigger-bot-flow-via-url)
2. [Trigger bot flow via. Code](#22-trigger-bot-flow-via-code)

### 2.1 Trigger bot flow via. URL

To preview a bot via URL, follow the given steps:

1. Open the bot and navigate to **Studio** > **Flows**.
2. Click the Flows drop-down and select the flow that you want to preview.
3. Copy the path of the flow that you see in the URL (after `flow/`)

![](https://i.imgur.com/K9naz4Z.jpg)


4. Click Preview bot. You will see the entire bot flow in a new tab.
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

### 2.2 Trigger bot flow via. code

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

## 3. Flow settings

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