---
title: Prompt executor
sidebar_label: Prompt executor node
---

:::info
* This node works only if you have configured an LLM model. For steps on configuring the LLM model, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#model-configuration).
* This node is not available for WhatsApp.
:::

 The Prompt Executor node processes the prompt you provided, using input from the user. It fetches instant responses from the AI model and displays them to end users, adhering to the specified prompt.

![](https://i.imgur.com/ZKKHrQ5.png)

Use a [prompt nod](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)e to [collect the dynamic user response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables) and pass the variable in **User Query**. 

For instance, imagine you wish to share food recipes with the end user. Use a prompt node to inquire about the preferred recipe, save the response in a variable, and pass it here. The node will display the recipe for the ingredient the user asked about.

### Goal configuration settings

Here you can control randomness, sets limits for concise outputs and refine word selection based on probability. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#goal-configuration-setting) to know about this in detail.

### Model configuration

Model configuration provides you the freedom to manually input your own custom GPT or LLM credentials into the AI-agent. You can then use various models on different dynamic nodes within the same AI-agent independently. This grants you the flexibility to conduct extensive experiments. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#model-configuration) for the steps.