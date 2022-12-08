---
title: Wait music for APIs
sidebar_label : Wait music
---



Without **Wait Music**, the silence on the call while executing APIs results in a sub-optimal conversational experience. To improve the conversation, wait music can be added in the API node settings. 

![](https://i.imgur.com/eCsR3Cy.jpg)

When the wait music is configured for high latency API calls, it allows voice bot developers to play music on the call while waiting for the API response. After the API call is completed, the wait music is stopped and the further steps (nodes) are executed. 
You can configure the wait music in the [API node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api) where bot developers can upload a public URL or upload a music file.   

> **Supported formats for wait music files**: .mp3 and .wav.

<img src="https://i.imgur.com/skrJN8c.jpg" alt="drawing" width="100%"/>


 

:::note
- Wait music option on API nodes work only for voice bots.
- This feature is an add-on hence nothing changes on the LIVE bots. Though, the team recommends implementing wait music if the latency of some APIs is high for a better user experience.
- Ensure that the **Wait Music Length** (duration) is greater than the timeout configured for the API for a better experience to avoid unseen race condition scenarios.
:::