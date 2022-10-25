---
title: Automation agent actions with Studio
sidebar_label : Automation with Studio
---

Actions are displayed on the [chat screen](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#1-chat-screen) when the agent presses "/", configure these actions in this section. 

In this article, you will learn:
1. [What are agent actions?](#intro)
2. [How are agent actions updated?](#update)
3. [How to add agent actions?](#add) 

---
## <a name="intro"></a> 1. Agent actions

Agent actions are commands that agents can trigger from within the inbox to automate a micro-task. These can be invoked by typing "/" in the message box to help save agents’ time and improve their productivity.

<img src="https://i.imgur.com/v67ccp5.png" alt="drawing" width="80%"/>


## <a name="update"></a> 2. Updation of agent actions

All the flows that are created in the builder/studio section are available in the inbox to be converted into an automated agent action.

![](https://i.imgur.com/V2qyXdC.jpg)

- On the **Inbox** > **Automation with studio** section, you can **enable** the flow that must be available as an agent action. 

![](https://i.imgur.com/4kafoOU.png)

- **default** and **ym_fallback** are the 2 agent actions available by default. 
- As you create new flows on the studio, they get updated on the **Automation with Studio** screen.



## <a name="add"></a> 3. Enable agent actions

:::note
Only Admins can enable agent actions.
:::

To enable the available agent actions, follow the given steps: 
1. Open **Inbox** > **Settings** > **Automation**. Search and select **Automation with Studio**.

![](https://i.imgur.com/iSooZ14.jpg)


2. All the flows created (and are live) in the builder are available here and can be enabled as an agent action.

<img src="https://i.imgur.com/vfep9Jr.jpg" alt="drawing" width="90%"/>

3. Click the edit icon:

![](https://i.imgur.com/Z5tlZhD.png)   

4. Enable **Mark action enabled for this flow**.
5. Enable **Mark shortcut enabled for this flow**. In this case, agents can directly pass arguments as part of the message while triggering an action. 

> For example, PlaceOrder OrderID can be triggered by simply typing /PlaceOrder AABV123009.

<img src="https://i.imgur.com/jnktBcm.png" alt="drawing" width="80%"/>

6. For each flow, there are multiple steps/variables that can be enabled. 
    
    - Each step of the flow is converted into an argument that is expected to be passed so that the entire action can be executed.
    
    <img src="https://i.imgur.com/diPNrmC.png" alt="drawing" width="60%"/>
    
    - When you mark a step as mandatory, the bot will prompt the agent to enter this value to trigger the action. If it is not marked as mandatory, make sure that you handle an empty value for this step in your flow definition (by providing a default value for that step).
    
        <img src="https://i.imgur.com/qntAnbQ.png" alt="drawing" width="60%"/>
    
    - For example, in the below screenshot, agent action will only be triggered when the **InputQuery** and **InputName** are entered/available. 
    
    ![](https://i.imgur.com/jCQ3j2i.png)


7. After enabling the required fields, **Save** the changes. 


8. On the chat screen, when the agent tries to trigger any agent action, the bot triggers the corresponding flow and presents the final response to the agent. This can be validated by the agent and sent to the customer (bot user) by clicking the green tick icon. 
For example, when the “PlaceOrder” action is triggered, the following message is displayed on the screen. The agent can click the tick to proceed. 

![](https://i.imgur.com/yiyl2Ju.png)




:::info
- Agent actions are stateless. The flow defined should be an independent unit. 
- You cant use a variable previously defined in another flow. 
- You can fetch a variable from the database.
- Agent action is currently a single shot, all the step values must be passed before the action is triggered.
:::