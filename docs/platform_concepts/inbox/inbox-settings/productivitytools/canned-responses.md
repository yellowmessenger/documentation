---
title: Canned Responses
sidebar_label : Canned responses
---

Canned responses are displayed on the [chat screen](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#1-chat-screen) when the agent presses # (hash key), configure these responses in this section . 

In this article, you will learn:
1. [How to add canned responses for chat and email?](#add)
2. [How to delete canned responses?](#delete)

---

Pre-defines snippets of texts that can be used as shortcuts, greetings, and conversation dialogues while an agent is typing a message. It reduces the time taken by an agent to respond to a chat/ticket. 
With the canned response feature, you can directly add frequently uses content (image/text) in a message without typing it multiple times. For example, questions like 'What is your return policy?' are asked frequently, for such questions, instead of typing the policy, an agent can add a canned response(which will have the policy).

Canned responses can be configured for:
1. **Live chats**- Can have Text and Media as a response
2. **Email tickets**- Can have only Text as a response

Based on the requirement, these canned responses can be added or edited by an admin. The process to add/delete canned responses for chat and email is the same. 

These saved responses will be available in the chats/ticket section, you can add it by clicking canned response icon or by typing "#" followed by the required tag. 

![](https://i.imgur.com/5CqmfB6.png)


## <a name="add"></a> 1. Add canned responses 

Follow the steps below to add a canned response:

1. Open **Inbox** > **Settings**. Search and select **Canned responses**.

    ![](https://i.imgur.com/LMuoMr3.png)

2. On the canned response page, there are 2 tabs - Chat and Email. You can configure responses for both chat and email in the same manner. Select any of the tabs.

    ![](https://i.imgur.com/QlybMMh.png)

> Email does not support Media canned response. 

3. Click **+Create canned response**. Select **Text** or **Media** from the drop-down menu. 

    ![](https://i.imgur.com/iBujuJF.png)

4. In **Text**, you can save a canned response as text by entering **Canned response text** along with required **expressions** like agent email, bot title, etc (can be copy pasted from the right panel).  
    - **Tag**: Tag is a short keyword that you can add on your chats screen (when you type # and your tag) the text canned response configured will be displayed. Example: #welcomemessage.
    - **Canned response text**: Enter a text that must be displayed when the tag(#welcomemessage) is used on chat screen. 
    
    ![](https://i.imgur.com/Zj1e8iL.png)   

:::note 
**Dynamic variables**     
The list of expressions available on the left side can be added along with your text by copying and pasting the required expression. For example:        
- **Agent name** (available to the bot): {{agent.name}}
- **Bot name** (available to the bot): {{agent.username}}
- **Customer name** (to be entered by the agent on the chat screen/fetched from the flow): {{bot.botname}}
- **Custom fields** (to be entered by the agent on the chat screen):  Will vary based on the custom fields
:::


(or)

4.  In **Media** you can add image/file as canned response. 
    - **Tag**: Tag is a short keyword that you can add on your chats screen (when you type # and your tag) the media canned response configured will be displayed. Example: #confirmation.
    - **Media type**: Select media type as **Image/ File** and upload an image(JPEG, PNG format) or file(any format) from your local system. 
    
    ![](https://i.imgur.com/jsUqUB0.jpg)
    
5. Click **Create**.  
6. All the canned responses will be displayed on the page.   

    ![](https://i.imgur.com/N0kjNRg.png) 


------

## <a name="delete"></a> 2. Edit/Delete canned response

To edit/delete a canned response, click the 3 dots beside the Template name you wish to edit.

1. Select **Edit**/**Delete**.
2. Save the edited changes/ Confirm to delete.

    ![](https://i.imgur.com/HuV4z76.png)
