---
title: Studio Updates
sidebar_label: Studio
featured: true
---

## August 2021 Updates
### 1. New WhatsApp Builder Nodes
* **WhatsApp Reply Buttons** : Latest version of WhatsApp API allows businesses to send reply buttons along with media so we have introduced this in our builder section.
> Read more about this node [**here**](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#whatsapp-reply-buttons)

![](https://cdn.yellowmessenger.com/uurhPH2Y6xze1626345610351.png)

* **Whatsapp List Prompt** : In the  Latest version of Whatsapp API, we can send List items. To do so using the bot, you can drag the arrow and select Whatsapp List under Prompt Nodes in any step of a journey
> Read more about this node [**here**](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#whatsapp-list-prompt)

![](https://cdn.yellowmessenger.com/Le4ABBmWj8SY1627961158582.png)

### 2. New Prompt Nodes
* **Date Prompt** : You can now use the date prompt to ask for and validate date inputs. Also there are 3 widget types you can choose from - single date picker, date range picker, and month picker.

> You can use this [**link**](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#date-prompt) to know more about the node and how to use it.

![](https://cdn.yellowmessenger.com/EnNVBl4TeM1m1626264357943.png)

* **Feedback Prompt** : You can now use the feedback prompt to take the user feedback. Like any other prompt you can attach it to any journey in the flow.

>You can use this [**link**](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#feedback-prompt) to know more about the node and how to use it.

![](https://i.imgur.com/pv2tlzm.png)

### 3. Fallback Flow Improvement
Now when showing suggestions as a fallback mechanism, the end user can get an additional button to mention if they are ‘Not satisfied’ with suggestions. In that case, they will move to the next step in fallback flow. (It could be document search or fallback message as of now)

### 4. Auto-skipping Using Prompt
You can now add an acknowledgement to your auto-skipping using the prompts for a better conversational experience 
> Read more about this tool [**here**](https://docs.yellow.ai/docs/platform_concepts/studio/tools/#autoskipping-settings)

### 5. Supporting Dynamic URLs
Now Wildcard(*) can be used to set dynamic URLs in the start trigger

- URLs like yellow.ai/* (will work for anything after 'yellow.ai/')
- URLs like yellow.ai/*/ something will also work
