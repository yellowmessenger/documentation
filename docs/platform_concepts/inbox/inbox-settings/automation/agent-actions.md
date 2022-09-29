---
title: Agent Actions
sidebar_label : Agent Actions
---


Agent actions are similar to commands that agents can trigger from within inbox - to automate a micro-task. Every journey created in the builder/studio section is available in inbox to be converted into an automated agent action, to help save agent’s time and improve their productivity.

Agent actions can be invoked by simply typing “/“ in the message box as shown below:

![](https://i.imgur.com/v67ccp5.png)


Once successfully triggered, the bot triggers the corresponding journey and presents the final response to the agent, which the agent can validate and send to the end user (by clicking on the green tick icon). Note the example response when “PlaceOrder” action is triggered in this case.


![](https://i.imgur.com/yiyl2Ju.png)


## Enabling agent actions


Admins can enable agent actions by going to Inbox > Chats > Settings > Productivity Tools > Agent Actions. All the journeys defined in builder are available here and can be enabled as an agent action.

![](https://i.imgur.com/KMngkZf.png)



To enable an agent action, click on the edit icon to the right of it and set 'mark action enabled for this journey' as TRUE. You can also enable shortcut in which case agents can directly pass arguments as part of the message when trigegring an action - e.g. PlaceOrder OrderID can be triggered by simply typing /PlaceOrder AABV123009.


![](https://i.imgur.com/W6dGyDR.png)


![](https://i.imgur.com/jnktBcm.png)


### How is a journey mapped to an action?

Each step in the journey is converted into an argument that is expected to passed, so that the entire action can be executed:

![](https://i.imgur.com/diPNrmC.png)

You can mnake a step mandatory in which case the bot will prompt the agent to enter this value to trigger the action. If its not marked as mandatory, please make sure that you handle empty value for this step in your journey definition (for example, by providing a default value for that step).

![](https://i.imgur.com/qntAnbQ.png)


:::info
:bulb: **Things to consider**

Please note that agent actions are completely stateless where the journey defined should eb a complete independent unit. So, you cant use a variable previously defined in another journey. You can of course, fetch a variable form the database.

Since agent actions are currently single shot, all the step values must be passed before the action is triggered.
:::