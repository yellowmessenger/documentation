---
title: Getting Started With Flows
sidebar_label: Flow
---

> The words **Flows** and **Journeys** are used synonymously. 


In this document, we discuss: 

1. Home 
2. Workflow 
3. Flow
     * How to create a flow?
5. How to trigger a flow?
     * Types of start trigger 



## 1. Home

This is a general (**Home**) flow that the bot follows irrespective of the training given to it. First, there is always a welcome message [configured](https://docs.yellow.ai/docs/platform_concepts/getting-started/#21-configure-the-welcome-message) and displayed to the user, then, bot responds to the queries it understands and does not understand. 
Such a flow is configured on the Home -flow. It is further customized as per the usecase.


![](https://i.imgur.com/yGwYdRl.png)

## 2. Workflow 

Workflows are background processes that run along with the conversational flow. Workflow option can be selected while creating a flow. 

![](https://i.imgur.com/eMMSl5H.jpg)


Workflow is the same as any other flow page, it will have a start node. Nodes connecting the start node can only be **Action** or **Logic** nodes (Message and Prompt nodes are not available to build a workflow).


![](https://i.imgur.com/U3akD5c.jpg)



## 3. Flow 

** Flow is the logical design of your conversational flow, which will be the actual path that the end users will go through.**
    - User: “Show me the menu”
    - Bot: “Please select your Cuisine: South Indian, North Indian”
    - User: “South Indian”
    - Bot: “Please select the Item: Dosa, Pongal . . .”


Once you have the scope of your bot ready, depending on the purpose user has for chatting with your bot, the bot must be built to respond accordingly. This is done by dividing the scope into multiple flows. 

![](https://i.imgur.com/1SsOIAA.jpg)

Suppose the bot is used as an office portal to apply for leaves or check salary, bot must converse with the user and fetch the information from all the steps(Nodes) to do just that. 

![](https://i.imgur.com/ckLhNXJ.png)

> Flows can be further categoriesed using Categories.


   

### 3.1 Create a Flow 



You must create a flow before you create a start trigger for the flow. You can create a flow using a template or from scratch. When you create a flow from scratch, you create a placeholder for the flow first.

Follow the steps below to create a flow:

1. Log in to your studio account. On the Overview page, select your bot.
2. Select **Overview** > **Studio**.

![](https://i.imgur.com/jGuxkYh.png)

3. Select **Flows** > Create flow.

![](https://i.imgur.com/JlpH4nD.jpg)

4. If you want to select from the available template, click a suitable template. 

![](https://i.imgur.com/cSzWyao.jpg)

5. Otherwise, Click **Start from scratch** in the top menu bar.

![](https://i.imgur.com/CmT5YpH.jpg)


6. Enter the following details:

* **Flow name**: Name of the flow; make sure the name is accoridng to the task of the flow. For example, flight booking, customer service, and products on discount.
* **Flow Description**: Description of the flow; you can also convert the description in
to any language other than English by clicking Google translator button.   . For
example, this flows lead customers to flight booking workflow.

* **Category**: One flow can have multiple categories. The created flow will fall into default categories if no category is mentioned. You can either select an existing category from the drop-down or, add a new category:
    * Click **+Create category**
    * Enter the **Name** of the category
    * Click **Create Category** to save it



* **Create as a workflow**: Click on the right of the toggle to convert the flow to a workflow. Workflows run in the back-end along with the conversational flow.


![](https://i.imgur.com/gsXNfvM.png)

7. Click Save.

## 4. Configure Start trigger 


Follow the steps below to configure a start trigger:

1. Open the bot **Overview** page. 
2. Click Design bot flows > Flows tab. Click Flows node of the bot. Expand a category and click a flow.



![](https://i.imgur.com/xOt35dU.png)


3. Click anywhere on the Start node.


![](https://i.imgur.com/2bBwPfh.png)


4. In the Start trigger pop-up, select a type of trigger from the drop-down. In the Select field, select the value of the type of trigger.

![](https://i.imgur.com/aKBVekp.png)



Start trigger enables you to configure the initiation of a bot communication flow. When a customer types a query, the bot starts the conversation based on the logic of the trigger.

Flow is triggered using one of the following:

* **Intent**: Start the flow with an action statement, how to book a test drive, connect to a service center, find the status of an order, and find the best product on a website. For example, if a customer types How to book a test ride, the bot triggers the configured flow of the *#test ride* intent. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents/)to learn more about intents. 

![](https://i.imgur.com/nGgAQVN.png)



* **Entities**: Start the flow with the primary object(s) of a query, such as the cheapest flight, customer service number, sedan cars, rooms in a hotel, and best beauty products. For example, if a customer types studio, the bot triggers the configured flow associated with the studio model. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities/#entity-types)to learn more about entities. 


![](https://i.imgur.com/pMCcjPJ.png)


* **Event**: Start the flow with an event, such as a bot pops up when a customer visits the Contact us page or the Home page of the website or app. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/)to learn more about configuration of events.

* **Page Url**: Start a flow with a page Url. For example, triggering the help center url on contact us page.


![](https://i.imgur.com/wt8EyFh.png)


* **Execute Flow**: Apart from start trigger, users can also set up when to trigger another flow manually from or inside a flow using Execute Flow action node.
You can add an action node- **Execute Flow** and select the flow you want to execute next. 

For example, track your application, know your ID and view FAQ's are three user responses linked to different flows (which are configured as separate flows). When one of the response is sent, respective flows are executed. 

![](https://i.imgur.com/aSBbMJX.png)




> Click **Add new trigger** to add additional triggers for the flow. You can train the bot with more than one start trigger to accomodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger the communication flow.
> For example, a start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of trigger, the bot triggers the flow.
  

---


## 5. Trigger the flow

When you are configuring a bot, there could be several complex flows in the bot. You need to always ensure whether the outcome of a flow is as desired before moving on to the next flow and it’s tedious to run the entire bot everytime you make some change in a flow.

You just need to add a parameter to the URL or widget code to preview changes made in a particular flow of your bot. You no longer have to run through the entire bot flow everytime you make some changes to a flow.

To preview a specific bot flow there are two methods, discussed in the further sections: 

1. Via URL
2. Via Code

### 5.1 URL

Follow the given steps to preview a bot via URL: 

1. Open the bot and navigate to **Studio** > **Flows**.
2. Click the Flows drop-down and select the flow that you want to preview
3. Copy the path of the flow that you see in the URL (after `flow/`)

   ![](https://i.imgur.com/eXcmAlN.png)

4. Click Preview bot. You will see the entire bot flow in a new tab.
5. In the address bar, append `?ym.triggerJourney={flow path}`.

    Example: 
   `https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=docs-feedback`



   ![](https://i.imgur.com/CLmlHyp.png)



Ensure that you clear the browser cache before you preview the bot. It is recommended to use Incognito mode or Private window to preview flows.


> Note:
> * Use `?` to append right after the base URL of the bot. Example: https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback
> * Use & if you want to append it after a variable. Example: https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback

### 5.2 Code

Follow the steps below to preview a bot via code (embedded on your website).

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

--- 


**What Next?**

Series of **nodes** are used to create a flow. There are multiple nodes available on our platform.
* Learn about different **nodes** [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes/) and create a complete flow.
* [Test](http://localhost:3000/docs/platform_concepts/studio/tools#21-test-your-bot) the flow.