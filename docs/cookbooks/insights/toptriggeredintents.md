---
title: How to identify top triggered intents
sidebar_label : Identifying most triggered intents
---


The **Top Flows Visited** widget in the **Insights** > **Overview** section provides information about the most frequently initiated sequences of actions within the platform. 

In this article, you will learn a work around to obtain the **top triggered intents**. 
While the most viewed flows might be those promoted as default options, the most triggered flows are determined by actual user interactions, taking into account various entry points like start points and in-flow buttons. This distinction is important because it reveals which intents or underlying user goals are most frequently pursued. Essentially, this data helps you understand the actions users take most often, providing valuable insights into user preferences and needs.


Follow the below steps to obtain the most triggered intents:

1. When creating a flow with a [start trigger as an intent](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#11-trigger-a-flow-using-intent), connect a function node to the start node.

2. In the function, you can use `data.prediction.intents`. 
    - If the flow is triggered by an **Execute flow** node, the intents object will be *empty*.
    - When the flow is triggered by a highly confident utterance, the intents object will contain the flow name along with its confidence level (you can also add an extra condition to ensure this confidence surpasses the minimum confidence threshold you've configured for the bot).

3. Within the function, If it has high confidence, you can insert the flow name and its confidence level to a custom [database table](https://docs.yellow.ai/docs/platform_concepts/studio/database) and then proceed with the bot flow. If it has no confidence or lesser confidence, you can directly proceed to the bot flow, without inserting anything into the custom DB Table.

4. To gain insights into top intents, you can generate [custom analytics](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables) based on the custom table you've created. This analytics allows you to determine which flows are frequently triggered and the frequency of these triggers.



:::note

**Limitations**:
- **Contextual utterances**: These utterances may not be seamlessly integrated here, as they fall under the `global_model` domain, which cannot currently be accessed via `data.prediction.intents`.
- **FAQs integration**: For insights related to frequently asked questions (FAQs), each question necessitates a distinct flow. Functions, database insertions, and similar actions are feasible exclusively within flows.

:::