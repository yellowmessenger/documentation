---
title : Context Management
sidebar_label : Contextual Responses
---


Setting up contextual responses means adding more context as a response to a particular prompt. 

**Use case**

To simplify contextual response further, take an example:
**Bot** : Can you share your email with me?  
~~**User** : Sure, gooduser@email.com~~ (Expected response)  
**User** : Why do you need my email?  (Received response)

What if instead of giving their email address during a conversation, a customer asked *What is an email* Or *Why do you need my email*. 
These types of contextual intents can be handled by adding contextual responses. 

## 1. Add Global Contextual Responses

Setting up standard contextual responses for all prompts in all journeys in the bot will give a response to the users when the bot has been asked questions with Why/What/How/ etc at any prompt. 
To explore the options available, follow the given steps: 

1. **Open Context management tab**

    - On the Yellow.ai Platform, go to **Studio** > **Train** > **Context Management**.

![](https://i.imgur.com/XuwMeQP.png)

2. **Add contextual responses** 

    - To add new intents click **+Add Contextual Responses**. 
    - Add an Intent name and supporting Utterances.
    - Click **Submit**. 

![](https://i.imgur.com/QzpYCLY.png)


3. **Modify existing contexts**

    - **Utterances** for the various predefined contextual intents like What/Why/How/When/Where/etc. can be modified by clicking the **Edit** option.

    ![](https://i.imgur.com/nLiggZ6.png)  
  
  
    - Modify the default response of the existing contexts by clicking **Set default response > Click here to add more response** and adding a new response. 

    ![](https://i.imgur.com/4sGxnOE.png)


4. **Bulk upload**

    - You can add multiple contexts at once. Click **Bulk manage > Import**. 
    - Click **Upload file**.
    - Upload a CSV file from your local system which has 2 columns (intent and utterance).
    - Click **Upload**. 


![](https://i.imgur.com/eBrK6HN.png)

:::note
Add as many training utterances as possible for a particular context. 
:::


:::info

**Enable small-talk**

(This is available only for the **older bots**. New bots can configure small talk separately)

    - If the small talk is enabled, when the user talking about generic topics, the bot will be able to answer the user with an appropriate answer. 

> **Bot**: Please enter your desired location.   
> **User**: Which location are you from?  
> **Bot**: I'm digital, so I'm always just... here.

![](https://i.imgur.com/vtWxpz2.png)
:::





## 2. Train responses 

Click **Train response** to train the contexts. 

![](https://i.imgur.com/xfgFirr.png)

Now, when the user will ask these questions [Why/What/How/etc] at any prompt during the conversation. The bot will be able to send these contextual responses to the user. 

:::note
The user is not moving ahead while the user is asking for contextual responses. They will remain at the same prompt until the correct response is given.
:::



<img src="https://cdn.yellowmessenger.com/fZN8lIisIfxw1615525657154.png" alt="drawing" width="60%"/>







<!---
### How to setup context at any prompt? 

>We humans are always aware of context. Even chatbots also store the context to maintain the state of conversation.
Conversations always happen on a particular topic (like intent), and it is a chain of texts exchanged between the user and the bot. So, this context keeps the conversation flowing.

This context is stored as a JSON which is constantly updated at each and every prompt of a conversation. It stores all the info required to identify the state of a conversation, like the *prompt(step) information* (visited prompts), *intent name* (current intent) any many more.
It is available at app.context

```
app.context object
{
   "complete": true,
   "steps": {
        "mobile_num": "9999999999",
       "customer_id": "-",
        "otp": "-"
    },
    "intent": "login"
}
```
At any point, you can access this object to do things like
* getting data of the prompts
* knowing the current status of the conversation ( Intent name & the number of prompts visited )
* changing a prompt value

#### Getting data of the prompts
* app.context.steps is an object which contains key-value pairs of prompts and the prompt values (user inputs) in the format step_name: step_value
* A new prompt is added into app.context.steps only after the validation of that prompt.
* When it hits an intent, this steps object is initially empty

#### Getting Intent name
* app.context.intent contains the current intent name

#### Other data
(Very limited use cases though)

* app.context.complete contains a boolean value. If it’s true then the intent is done with visiting all the steps
* app.dataHistory contains an array of most recent incoming messages to the bot 
In action function, you can make use of this app.context object to get all the required information to process the answer.

A typical action function below
```
return new Promise(resolve => {

    // Getting the data from the steps
    let otp = app.context.steps.otp
    let mobile = app.context.steps['mobile_number'] // another way of accessing data

    // API CALL which requires the above data
    // api logic here
    
    app.sendTextMessage('You have been successfully logged in')

    resolve();
});

```

This object is always updated for every intent. When it hits another intent all the steps data will erased and the intent name will be changed.
--->