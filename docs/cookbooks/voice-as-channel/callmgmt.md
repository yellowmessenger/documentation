---
title : Call disconnection and call recording
sidebar_label : Call management options
---


Managing calls effectively is crucial to ensure seamless customer experience. The Yellow.ai platform offers several advanced call management options that enable you to configure your voice bot as per your specific requirements. 

This article provides an overview of the additional call management options available on the Yellow.ai platform like **call disconnection** and **call recording** and how to configure them.

These are [node level options](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot), you can find them by clicking the tools icon and selective voice options. 

![](https://i.imgur.com/fvQNhlg.png)



## 1. Configure your flow to disconnect a call

Enabling the call disconnect option will atutomatically disconnect the voice call when the respective node is reached in the flow. 

**Use-cases:** 
- Call disconnect can be used to **end a use case**.
- When the **bot is unable to understand the user's response** due to noise or any other reason, you can add a [condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) to identify the user's intent and disconnect the call. 
- When the user's input is not relavant despite repeated attempts, you can set maxium number of retries on the voice input node and disconnect once the limit is reached. 

On the node (question, text, voice input, etc.) that you want to disconnect the call, configure the following: 
1. Click the **Tools** icon > **Voice**.
2. Enable **Disconnect call**.
3. Click **Save**. 
4. When this node is reached, the configured **bot says** message will be played, and the call gets disconnected. Example: *Thanks  for the details*. 


![](https://i.imgur.com/T6bjkPK.png)


------

## 2. Manage call recording through bot flows 


By default, the **end-to-end call is always recorded**, but you can change this behavior (**pause, stop, resume**) based on specific cases.
The Yellow.ai platform provides an additional option to manage call recording effectively. 

> This must be configured for each node individually based on your use-case. 

**Use-cases:** 

- If the user shares sensitive information like a PAN number, you can pause the recording to prevent such information from being recorded. 
- If you need to comply with regulations that require you to avoid recording the support agent and user conversation, you can configure the platform to pause the recording during that part of the conversation.

On the node (question, text, voice input, etc.) that you want to **pause** recording, configure the following: 
1. Click the **Tools** icon > **Voice**.
2. Under **Recording action** select **Pause**. 
3. Click **Save**. 

![](https://i.imgur.com/q5H5b2Q.png)

:::info 

You can also select **Resume** and **Stop** for other nodes. Resume will resume the paused recording and Stop will stop the call recording altogether. 
:::