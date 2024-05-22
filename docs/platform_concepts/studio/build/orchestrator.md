---
title: Create Orchestrator bot
sidebar_label : Create Orchestrator bot
---

Orchestrator helps in orchestrating multiple bots under one bot. It serves as an umbrella under which you can oversee and control certain aspects of the child bots. The orchestrator provides 

1. **Modularity** - for bot development since each of the child bots can be developed independently from other bots by seperate teams.
2. **Automation** - Since the inter linkage / orchestration is a one time setup in the Orchestrator bot and multiple usecases can be taken care automatically

## 1. Use cases

Here are a couple of use cases where **Orchestrators** come in handy.

1. Sometimes enterprises need one representative bot through which the customer can communicate with any of the child bots depending on their requirements, eg., organization with multiple internal departments who have to maintain seperate child bots for individual usecases but need an umbrella bot that can understand the requirement at hand and redirect to the right child bot. 

2. When enterprises have a live agent team to resolve customer queries, they need one single place to collect and deal with the user requirements, eg., users from a certain region / organisation / country etc., need to be redirected to certain bots, i.e. users with certain attributes should have access to certain bots only. An orchestrator will help in redirecting the users to the respective bots.

These are some of the use cases that are currently accomodated, there are more coming your way. Keep watching this space.

## 2. Create an orchestrator

1. Go to the **Overview** page and click the bot drop-down.

![](https://i.imgur.com/O6eFHj0.png)

2. Click **+Create bot > +Create orchestrator**. 

![](https://i.imgur.com/PyPHPA9.png)

4. Fill in the fields and click **Create Orchestrator**.

![](https://i.imgur.com/fG0HKTr.png)

| Field Name | Description | 
| -------- | -------- | 
| Bot subscription     | Choose the subscription in which you want to create your orchestrator     |
|Bot name| Provide a name to your bot|
|Choose avatar| Choose an animated avatar for your bot|
|Industry| Choose the industry to which you belong.|
|Region| Choose the country to which your bot belongs|
|Select child bots| Choose the child bots you'd like to manage under the orchestrator bot|

4. Enable **Unify inbox to all child bots** if you'd like to manage all the support tickets from the child bots in your orchestrator bot. This choice cannot be modified later.
5. Click **Create orchestrator**.

:::note
The orchestrator bot and its child bots must be in the same subscription and region.
:::

After you create the **Orchestrator**, you will be redirected to the **Overview** page of the **Orchestrator**. 

![](https://i.imgur.com/qoAKx4q.png)


An orchestrator has three sections,

1. **Orchestrator for automation**
2. **Inbox for agents**
3. **Add Channels**

### 2.1 Orchestrator for automation

This is where you configure the orchestrator bot. You can refer the video below to set it up.

<iframe width="720" height="315" src="https://www.youtube.com/embed/LKnYlHE1MxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

You can set welcome and fallback messages, add furthermore child bots and enable or disable child bots temporarily.

![](https://i.imgur.com/4oj8aRi.png)


### 2.2 Inbox for agents

This is where you manage all the customer queries. Ensure you have done the following to use this feature,

1. Enabled **Unify inbox to all child bots** while creating the **Orchestrator**. 
2. [Set up](https://docs.yellow.ai/docs/platform_concepts/inbox#try) the **Inbox** module.
3. [Provided access](https://docs.yellow.ai/docs/platform_concepts/inbox#-3-manage-support-agents) to the **Inbox** agents to handle user queries.

You can refer to the following video to set this up.

<iframe width="720" height="315" src="https://www.youtube.com/embed/dZ1zYsBXKs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 2.3 Add channels

You can [add](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) the following channels to your orchestrator:

1. Yellow Messenger
2. Whatsapp
3. Google Assistant
4. Line
5. MS Teams
6. Viber and Viber Business
7. FB Messenger

