---
title : Streamline customer support by connecting voice bot to live agent
sidebar_label : Transfer call to an agent
---

Transfer to human agent refers to the process of transferring a customer's interaction from an automated voice bot to a human agent. This is typically done when the voice bot cannot resolve the customer's issue, or when the customer requests to speak to a human.

In this article, you will learn how to configure your voice bot to transfer the voice call to a support agent. 


## 1. Overview of call transfer to an agent 

On the Yellow platform, to transfer a user's call to a human agent, the platform makes a call to the agent, who subsequently answers the call. 
The platform then connects the end user's call to the agent, allowing the user to speak directly with the human agent.

![](https://hackmd.io/_uploads/BkndT4Hrh.png)


#### <a name="ex"></a>  Scenarios for voice bot transfer to an agent

There are various situations in which transferring a call to a human agent becomes necessary. The Yellow.ai platform offers a dedicated flow that can be configured for seamless call transfers. Here are two common scenarios:

1. **Fallback limit reached**: This flow is utilized when the voice bot repeatedly fails to comprehend the user's query or when the user's query goes beyond the scope of the bot's predefined intents. 
2. **User intent for human agent**: This flow is activated when the user explicitly expresses the need to speak with a human agent, as indicated by an identified intent in their response. 


----------


## 2. Set up call transfer to an agent 

Follow the steps below to create agent tranfer workflow: 

### Step 1: Set up live agents

To configure live agents for your voice bot on Yellow.ai, you need to establish a connection between Yellow.ai and a third-party live agent support platform such as Genesys PureCloud Live Agent or Freshchat. Follow the steps below: 

1. Sign up with the [third-party live chat platform](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview#6-live-chat ) and set up your live agent team, who will be available to receive calls.
2. Obtain the necessary credentials from the third-party platform. These credentials will be used to connect Yellow.ai to the live agent integration.
3. Refer to the [integration articles](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview#6-live-chat) for the specific instructions on how to connect the chosen live chat support application with Yellow.ai.
4. Once the configuration and connection to the third-party tool are completed, during an ongoing voice bot call when agent transfer is required, Yellow.ai will send a request to the third-party tool to establish a connection between the voice bot customer and the live agents.

----


### Step 2: Design flows to transfer calls

To streamline customer support for your voice bots, you can incorporate the mentioned flows from the above mentioned [scenarios](#ex).

#### 1. Flow to transfer a call to an agent when the fallback limit exceeds

When the voice bot repeatedly fails to understand the user's input or when the conversation goes beyond the bot's capabilities, it's considered a fallback scenario.  To handle this, you can set the fallback flow to execute the **transfer to agent** flow or set up a **node** to forward the call to an agent. 

1. Identify the voice input node where the agent transfer should occur. For example, if the voice input node (e.g., phone number) repeatedly triggers fallback scenarios, the bot can automatically transfer the call to a live agent.
2. Connect the node's **fallback for failure** and **fallback for no response** to the agent transfer.
3. Establish connection through another voice input or prompt node: If you choose the voice input node, you can simply enter a message in the **Bot asks** field, which will be played before the call transfer. Use the **make prompts smarter** icon to configure the [forwarding details](#fwd).
    ![](https://hackmd.io/_uploads/SkaAUVSrh.png)

(or)

3. Use an execute flow node to connect to an agent: This can be combined with the second scenario where an intent triggers the *Chat with agen*t flow. In this case, create a new flow called *Chat with agent* and add a prompt node. Enter a message in the **Bot asks** field to be played before the call transfer. Use the **make prompts smarter** icon to configure the [forwarding details](#fwd).    

    **Main flow**: 
    ![](https://hackmd.io/_uploads/HyfcONrS3.png)
    **Chat with agent flow**:
    ![](https://hackmd.io/_uploads/B16_KVHr2.png)

4. When a fallback is encountered, the call will automatically be transferred to a live agent.


---

#### 2. Flow to transfer a call to an agent when the user requests for it

This flow is activated when the user explicitly expresses the need to speak with a human agent, as indicated by an identified intent in their response. 
you can set specific intents or keywords that indicate the customer's desire to speak with a human agent. 

1. Create an [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)  called `chat with agent` with relevant utterances indicating the customer's desire to speak with a human agent.
    > The utterances can include phrases such as "you are not able to understand me, I need someone else," "I want to talk to the manager," "connect me to someone," or "I can't understand, I want to talk to your executive."

2. Set up a [new flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-1-configure-start-trigger) with the start trigger configured as the intent `chat with agent`.
    ![](https://hackmd.io/_uploads/r19ziNHHh.png)

3. In the flow design, add nodes as needed and end the flow with a prompt node. Enter a message in the **Bot asks** field, which will be played before the call transfer. Click **make prompts smarter** icon and configure the [forwarding details](#fwd).
    ![](https://hackmd.io/_uploads/rypeRVBHh.png)

----


### <a name="fwd"></a>  Step 3: Add call forwarding details




To configure call forwarding options at the [node level](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot) for each node, follow the steps below: 

> **Prerequisite**: Inside the dedicated `Chat with agent` flow, add a question/voice input/speak node to trigger the call transfer to an agent. Configure the message that the bot will play before transferring the call.

1. Click on the **make prompts smarter** icon, select **Voice**. 
    <img src="https://hackmd.io/_uploads/S1N2EHHH2.png" alt="drawing" width="70%"/>

2. Enable **Forward call**. 
    ![](https://hackmd.io/_uploads/SkBSVrSS3.png)


3. Enter the forwarding details:      

    |Field Name|	Description |
    | -------- | -------- |
    |Forward call|	Enable this to forward the call at the specific node.|
    |Number to forward or SIP extension|	Either define the **number to forward** or **SIP extension** of the contact center or live agent.|
    |Caller ID number for Agent screen(Caller line identity) | You can define the caller ID to be shown on the agent screen. If left empty, the voice bot number will be displayed on the agent screen as it is making the call to the agent. If supported, the end-user number can also be shown on the agent screen.|
    |Sending Contextual Meta Data to Agent	(Custom SIP headers) | Transfer contextual information such as the user's name, age, and query to the agent so that they are aware of these details before the call is connected.|

    **Sample agent screens with the forwarding details**:

    ![](https://hackmd.io/_uploads/rJNkDHSS3.png)

> You can configure recording options after the call transfer on the [tools section](https://docs.yellow.ai/docs/platform_concepts/studio/tools#recording-related-voice-settings). 



