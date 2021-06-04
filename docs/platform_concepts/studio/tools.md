---
title: Understand different settings and options in Tools
sidebar_label: Tools 
---
This section is dedicated to
-  `Tools` section in Studio
    -  Test your bot
    -  Conversation Settings
    -  NLU settings

This will help you understand purpose and usability of each setting.

---

## Tools 
You can find tools button on top in Design and NLU sections inside Studio. 

Tools section is divided into 3 parts -

#### 1. Test your bot

Test your bot section helps your test for any 'User utterance' which intent will be triggered with what confidence. (according to your bot training). 
You can also enable verbose to see more details like sentiment confidence, synonyms detected or not etc.

![](https://i.imgur.com/1Sb3ay3.gif)

#### 2. Conversation Settings
These settings more or less control conversation flow, messages display etc. Let's go through them one by one. 

- **Target language** - Target language is default language before auto suggestion or change language journey occurs. 
- **Translate quick reply responses** - You can enable this if you also want Quick reply buttons to auto-translate. 
- **Enable Hinglish** - This will allow bot to understand `Hinglish` user utterances. 
- **Auto Detect Language** - Enabling this, bot can auto-detect the language user typed in and change own language to that in response (if configured). This remains in place till 2 days or until bot language is changed by user selection through `set language` action node. 
- **Enable Go back/Go Home** - This enables hot keywords for `Go home` -> Triggering welcome prompt *and* `Go back` -> Going to previous step in a journey
    > :warning: **Note** : Go back keywords inside a journey take user to previous step. If used outside journey (As first step of a journey or after a journey is completed) - Go back goes to Welcome prompt. 
- **Go back aliases** and **Go home aliases** - These help you configure hot keywords of your choice for triggering Go back or Go home respectively. 

- **Step validation settings**
    - **Whatsapp indexing settings**
When you configure quick replies , they appear on whatsapp as a list 
Default is like following:-

> What do you want to do next?
        1. Check order status
        2. Receive notification
        3. Go back to Main Menu
        
**To give more customisation over how it can look, we have two settings:**
    - **Whatsapp Quick reply index** - You can select from three options numbers(default), alphabets or emojis (numerical emojis) to as your index in cases like above.
    - **Structure Prefix** You can also your overall prefix with bold & italic support. 
    Default  preset entry in this box is `{{index}}` which looks like example above (when type is numbers).
    Let's see one more example -
    `_Type_ *{{index}}** for` will give you prefix  - 
    > "*Type* **1** for ", "*Type* **2** for " and so on. 

Your quick reply can look like : 
    > "*Type* **1** for Check order status"


- **Show prompt again** - Enabling this will show original prompt again after validation failure message (which we learnt in earlier sections)

    For example, for phone prompt
    > Phone number entered is not correct [validation failure message]
    > Can you please share your phone number? [original prompt]
        
- **Enable Limit on Retries** - Enabling this will set limit of 3 over total times validation failure can be allowed. If validation fails it shows **Error message** which can be cofigured (next setting)
    
- **Intelligent Switching**
:::info
It is highly recommended this feature is turned on! 
:::
Before going into exact settings, let us understand this more conceptually. 
Suppose your user is in middle of a journey , say , `Bank account opening journey` and halfway through giving details, question comes about asking type of account. 
Confused, user asks a question "What is the difference between two types of accounts" 

Assume you already have a FAQ configured for this -> 
What does in back is, since a new intent is detected -> it switches to that intent and answer user query (Fair enough!)

But after this , previous journey is lost and user will have to trigger and start that journey again. 

**After enabling Intelligent switching** , this scenario will look like below- 
![](https://i.imgur.com/6JStpcm.gif)



**Other settings**
- **Follow-up message** : Follow-up message is the message in above example "Do you want to continue where you left off?" -> This message is editable. 
- **Sticky Journeys**
If you have some journeys more complicated, where user interruption is not ideal , you can mark them as sticky journeys. 
For these journeys, if an interruption is received, **Sticky journey prompt**(editable) will nudge users to stick to this journey. If selected `Yes` current journey will continue and other will be suggested later in followup message. 

Working example below - 

![](https://i.imgur.com/Nouk1jD.gif)




- **Voice Settings**

To be updated

---

#### NLU settings

NLU settings include settings related to Natural language Understanding as name suggests, and include the following

- **Primary Model confidence**
You can modify primary model confidence . Confidence basically is a minimum below which intent will not be triggered. 
    > ML model matches user utterances to an intent with certain confidence which lies between 0 to 1. 
- **Secondary Model confidence** 
Similary you can also select secondary model confidence. Secondary model is basically your Global contextual model. 
- **Document Search Threshold** 
Document Search thershold is minimum confidence needed to show documents in document search node. 
- **Multi-Intent settings**
Enabling Multi-Intent will help model detecting two - intents in one user utterances. 
Basically, if this is enabled and user says
" Book a flight and reserve a hotel" (assuming appropriate training)
Model will detect two intents "Book a flight" and "Reserve a hotel"

Responding to this, model will acknowledge this (**Acknowledgement message**) ask user what they would like to do first, with these two options as quick replies. 
Remaining option and `Go home` will be suggested as quick replies with **followup message** like in Intelligent switching. 

---

