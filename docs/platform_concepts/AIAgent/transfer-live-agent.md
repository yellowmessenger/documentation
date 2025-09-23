---
title: Transfer to Live agent  
sidebar_label: Transfer to Live agent 
---


Transfer to Live Agent action allows you to seamlessly connect a user to a human agent when the AI agent cannot resolve their query or when live assistance is required.

The table below describes the fields available in the Transfer to Live agent action:

Field name | Description
-----------|------------
What is the query | The user’s query or issue that needs to be passed to the live agent. This ensures the agent has context before taking over the conversation.
Username | The name or identifier of the user, which helps the live agent recognize who raised the query and personalize the assistance.

### How to configure Transfer to live agent

To configure Transfer to Live agent, follow these steps:

#### Step 1: Configure a Live agent flow

1. Go to the **Flows** section and create a flow that handles live agent transfer.

      ![](https://cdn.yellowmessenger.com/assets/yellow-docs/live-agent-flow.png)
      
#### Step 2: Link Flow in Super agent profile
      
1. Go to **Super agent** > **Profile** > **Live agent** and select the flow you created.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/profile-live-agent.png)
   
#### Step 3: Call the Transfer to live agent action in Prompt section.
   
1. Go to **Agents** > **Prompt** section, fetch the user query.

     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/user-query.png)
     
4.  Add a **Transfer to live agent** action to pass the user query to connect to live agent.

     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/live-chat-action.png)
     
#### Step 4: Conversation handoff in Inbox

Once the transfer to live agent action is triggered, the conversation is handed over to the live agent. 

1. Go to Inbox > Chats, where a live agent can view the query and assist the user further.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/inbox-agent.png)



   

   

     

     









