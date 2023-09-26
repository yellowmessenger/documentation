---
title: Agent assist bot in the chat screen 
sidebar_label: Agent assist bot
---

## Introduction to agent assist bot

Support agents often find themselves repeatedly performing actions such as retrieving or updating customer information in external tools like CRM systems. Additionally, agents often need to execute tasks on behalf of customers, like canceling orders or initiating service requests, which often involve navigating through multiple tools or tabs.

This constant tool-switching disrupts the agents' workflow, reduces their productivity, and can lead to frustration. It also increases the average handling time for customer inquiries, especially when these repetitive tasks are essential for every chat session.

A viable solution to this problem is to centralize all these operations within the support inbox using an assist bot. Think of the assist bot as a virtual assistant for agents, where you can configure various workflows. For instance, you can provide buttons within the inbox to create tickets or process refunds.

By implementing this solution, agents would no longer need to perform these manual tasks. Instead, they can efficiently complete their tasks directly within the inbox. This not only streamlines their work but also allows them to concentrate on addressing high-priority customer issues, ultimately enhancing overall support efficiency.

### Use cases of agent assist bot

1. **Customer service**: Assist bots help address customer inquiries, troubleshoot issues, track orders, and handle returns/refunds, improving customer satisfaction.
2. **Sales and lead generation**: Bots assist in recommending products, qualifying leads, and scheduling sales appointments, enhancing sales and lead conversion.
3. **HR and employee services**: These bots aid in onboarding, answer HR-related queries, and recommend training and development resources for employees.
4. **IT support**: Agent assist bots assist with IT-related tasks like password resets, software installation, and network issue troubleshooting, reducing IT support workload.

### Agent assist bot vs @bot

- **Agent assist bot**: This is a feature that allows the agent to interact with another customized bot from within their inbox to enable quick and seamless resolution. It's for the agent's use during the conversation and doesn't involve the bot communicating with the customer at all. 
- **@bot**: This is a command used by the agent to initiate a conversation flow directly with the customer, essentially asking the bot to take over the conversation on behalf of the agent. Read more [here](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#initiate-studio-flow-with-bot). 



------

## Steps to use an agent assist bot within the chat screen 

> Bot admins, bot developers, or administrators have the necessary permissions to create a new bot.

1. [Create a new bot](https://docs.yellow.ai/docs/platform_concepts/studio/overview) under your subscription, giving it a unique name (e.g., Mia Support). 
2. Create multiple [custom flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) based on your business use cases.
    - All the data within the inbox, including contacts and custom fields, is accessible within **Studio**. You can design flows to automatically retrieve information without manual input. For instance, when an agent clicks on "cancel order," the order ID can be automatically captured, and the order can be marked as canceled without the agent needing to search for the order ID and confirm it again.
3. In the new bot, navigate to **Channels** > **Chat Widgets** > **Settings**.
4. Enable the option **Show the conversation history** and disable **Create a new session for every new tab**.
    ![](https://hackmd.io/_uploads/Bk07mmklT.png)
5. After completion of the above steps, reachout to the Yellow.ai's Inbox team to integrate your agent assist bot to the chat screen. 

**Within Inbox chat screen:** 

> Inbox agents and inbox admins will have access to use the agent assist bot within the chat screen.

- Inside Inbox chat screen, simply press Cmd + K (Ctrl + K on Windows) or click on the agent assist bot icon within the chat interface to open the agent assist bot.
    ![](https://hackmd.io/_uploads/rygEwmyxp.png)

- Each chat session will include a dedicated bot instance, allowing agents to ask questions or perform various operations tailored to the ongoing customer interaction.
    ![](https://hackmd.io/_uploads/rJf_D7Jxp.png)
