---
title: Disable callout banner 
sidebar_label : Disable callout banner 
---

You can remove or disable the callout banner in the website AI-agent by triggering a specific event using the Send event node in your flow.

**Use case**

The callout banner is used to display promotions or important messages to users. If you want to remove the banner based on user actions or AI agent logic, you can use a Send event node.

## Configuration steps

### Step 1: Add a Send event node

In your AI agent flow, add a Send Event node at the point where you want to remove or disable the callout banner.

### Step 2: Configure the Event name in Send event node

In the Event name field, type the event name `ui-event-close-promotion`.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/pro.png" alt="drawing" width="60%"/>

When the AI agent reaches this node during a conversation, the above event gets triggered and automatically the callout banner will be removed or disabled from the AI agent.