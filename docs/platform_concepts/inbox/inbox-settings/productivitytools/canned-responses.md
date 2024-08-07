---
title: Canned responses
sidebar_label : Chat/ticket canned responses
---

Canned responses are displayed on the [chat screen](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#1-chat-screen) when the agent presses # (hash key), configure these responses in this section . 

In this article, you will learn:
1. [How to add canned responses for chat and email?](#add)
2. [How to delete canned responses?](#delete)
3. [How to use canned reponse in chat/ticket screen?](#can)

---

Canned responses are pre-defined snippets of texts that can be used as shortcuts, greetings, and conversation dialogues while an agent is typing a message. It reduces the time taken by an agent to respond to a chat/ticket. 

You can directly add frequently used content (image/text) in a message without typing it multiple times. For example, questions like 'What is your return policy?' are asked frequently, for such questions, instead of typing the policy, an agent can add a canned response(which will have the policy).

Canned responses can be configured for:
1. **Live chats**- Can have Text and Media as a response
2. **Email tickets**- Can have only Text as a response

Based on the requirement, canned responses can be added or edited by an inbox admin. The process to add/delete canned responses for chat and email is the same. 

-------

## <a name="add"></a> Add canned responses 

Follow the steps below to add a canned response:

1. Open **Settings** > **Inbox**. Search and select **Canned responses**.

    ![image](https://imgur.com/CeaTmJK.png)

2. On the canned response page, there are 2 tabs - Chat and Email. You can configure responses for both chat and email in the same manner. Select any of the tabs.

    ![](https://i.imgur.com/QlybMMh.png)

> Email does not support Media canned response. 

3. Click **+Create canned response**. Select **Text** or **Media** from the drop-down menu. 

    ![](https://i.imgur.com/iBujuJF.png)

#### Add text to your canned response 
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

#### Add a media file or image to your canned response 

4.  In **Media** you can add image/file as canned response. 
    - **Tag**: Tag is a short keyword that you can add on your chats screen (when you type # and your tag) the media canned response configured will be displayed. Example: #confirmation.
    - **Media type**: Select media type as **Image/ File** and upload an image(JPEG, PNG format) or file(any format) from your local system. 
    ![](https://i.imgur.com/jsUqUB0.jpg)
5. Click **Create**.  
6. All the canned responses will be displayed on the page.   
    ![](https://i.imgur.com/N0kjNRg.png) 
    

:::note
Bulk upload of canned response is currently not supported via the user interface (UI) or API.
:::


------

## <a name="delete"></a> Edit/Delete canned response

To edit/delete a canned response, click the 3 dots beside the Template name you wish to edit.

1. Select **Edit**/**Delete**.
2. Save the edited changes/ Confirm to delete.
    ![](https://i.imgur.com/HuV4z76.png)

------

## <a name="can"></a> Use canned response on the chat/ticket screen 

Saved/configured canned responses will be available in the chats/ticket section automatically, you can them by clicking canned response icon or by typing **#** followed by the required tag. 

**Canned response on live chat screen** 
<img src="https://imgur.com/KNGeBhb.png" alt="drawing" width="70%"/> 


**Canned response on email tickets screen**      
    ![](https://i.imgur.com/VMHjZNZ.png)

### Canned response search functionality 

You can search for canned responses in the dropdown list by clicking on the canned response icon and entering relevant tags/content. Here are some tips on how to use the canned response search effectively:
- **Search by tag or content**: Canned responses can be searched using either tags or the exact words within their content.     
    > If you have a canned response tagged as "greeting" and the content "Hello, how can I assist you?", searching for either "greeting" or "assist" will display this response.
    
    **Tag search**:
    ![](https://hackmd.io/_uploads/SyNXe9aL3.png)
    **Content search**:
    ![](https://hackmd.io/_uploads/rkYpx5pUn.png)


- **Highlighting of matching terms**: When you perform a search, the matching content or tag from the search term will be highlighted in bold. This makes it easier to identify relevant responses. 
    > If you search for the tag "discount," any canned responses with that tag will have it highlighted.
    
    ![](https://hackmd.io/_uploads/ByTM-5pU3.png)

- **Preference for tag results**: Results that match the assigned tags will be given priority over those that match the content. 
    > If you have a canned response tag as "billing" and another response with the word "billing" in its content, the tag "billing" will appear first in the search results.
- **Case insensitivity**: The search function is case insensitive, meaning it considers uppercase and lowercase letters as equivalent. 
    > Searching for "Fashion" or "fashion" will yield the same results.
    ![](https://hackmd.io/_uploads/SJrK15aUn.png)

- **Combined result for multiple search terms**: When you use multiple search terms, the results will only be shown if both terms match in the exact order. 
    > Searching for "fanta" and "offers" will only display responses that contain both of these words in that specific order.


:::note
Media type canned responses can only be searched through their assigned tags and not their attachment names.
:::

