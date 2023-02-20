---
title: Canned Responses
sidebar_label : Canned responses
---

Canned responses are displayed on the [chat screen](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#1-chat-screen) when the agent presses # (hash key), configure these responses in this section . 

In this article, you will learn:
1. [How to add canned responses for chat and email?](#add)
2. [How to delete canned responses?](#delete)

---

<!--
**What are canned responses?**

Canned Responses are pre-defined notifications for frequent replies, with which the support reps can reply to emails with ease. Other than a customized template for individual emails, the canned response can be sent to the frequently raised requests. It reduces the response time and also provides a personal touch to the request. The response can be made private or public according to your convenience. You can add, manage and share a canned response.
 
It allows you to:

* Create and manage customizable templates for comments and issue descriptions.
* Add automated actions to templates/chats.
* Quickly insert favorite templates with just one click.

-->


There are two sections of canned responses:
1. **Live chat**- Can text Text and Media as a response
2. **Email ticket**- Can have only Text as a response

Based on the requirement, these canned responses can be added or edited. The process to add/delete canned responses for chat and email are the same. 


**These saved responses will be available in the chats section**

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
