---
sidebar_label: Hyper-personalised Conversations
title: Creating Hyper-personalised Conversations in Builder
---

If you’ve built a bot on yellow.ai, you can use the [Conversational Studio](../../../../studio/overview) to create hyper-personalised conversations based on user properties.

While these user properties are accessible in all the nodes of Studio, we’ll cover some of them with-in this document, to show you how you can create the right conversion for the right set of users.

First you might want to read [Using Builder to capture user data through conversations](../enriching_user_profiles/builder_capture_data).

:::info
All user properties are accessible in nodes under “User properties”.
:::

### Creating personalised messages
You can improve the engagement rates by creating personalised content. To do this, in your **Message Nodes**, you can can access user properties by clicking on the variable dropdown and selecting any **User Property**, or my simply accessing it using {{user.**propertyName**}}.

<img src="https://i.imgur.com/Mebonpy.png" alt="drawing" width="60%"/>


### Creating segment specific workflows

While in the above section we covered how to create personalised messages, it’s equally important to target the right set of users with the right message.

For example, when talking about the pricing plan, you might want to share different plans with different set of users. For example, this set of users could be defined on the basis of their country.

This is where the [Condition Node](../../../../studio/build/nodes/action-nodes#if-condition) comes in handy.

![](https://i.imgur.com/h75l167.png)
