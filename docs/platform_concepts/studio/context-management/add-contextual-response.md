---
title : Adding Contextual Responses
sidebar_label : Contextual Responses
---

### How to add Contextual Responses? 


Setting up contextual responses means adding more context to the response to a particular step. To simplify it further lets take an example  
**Bot** : Can you share your email with me?  
~~**User** : Sure, gooduser@email.com~~   
**Bot** : Why do you need my email?  

What if instead of giving their email address during a conversation, customer asked *What is an email* Or *Why do you need my email*. 
These type of contextual intents can be handled in the following ways :

#### First Way of Adding Contextual Responses : Adding Global Contextual Responses
Setting up standard contextual responses for all steps in all journeys in the bot. Basically if the users ask Why/What/How/ etc at any step, the response will be the same. If you want the same, please follow the following steps : 

1. On the Yellow Messenger Platform, under Studio > Learn > Context Management as shown below.

![contextual](https://cdn.yellowmessenger.com/VcWZIGBahtyb1615525545331.png)

2. You can change or add the responses for the various predefined contextual intents like What/Why/How/When/Where/etc. 

![contextual](https://cdn.yellowmessenger.com/lDKUvR0i95JI1615525572272.png)

3. You can Bulk Upload and Export these intents and responses as well. 

![contextual](https://cdn.yellowmessenger.com/Cvhplh0fIFoc1615525606462.png)

4. In order to add new intents click on * '+ Add Contextual Responses'* 

![contextual](https://cdn.yellowmessenger.com/grzVMIxid0Tr1615525631900.png)

5. Add as many training utterances as possible, prompts that the user can type for a particular context. 


Now when the user will ask for these questions [Why/What/How/etc] at any step during the conversation. The bot will be able to send these contexual responses to the user. 

Please note that the user is not moving ahead while user is asking contextual responses. The user will remain at the same step untill the correct response if given. 

![contextual](https://cdn.yellowmessenger.com/fZN8lIisIfxw1615525657154.png)


### How to setup context at any step? 

>We humans are always aware of context. Even chatbots also store the context to maintain the state of conversation.
Conversations always happen on a particular topic (like intent), and it is a chain of texts (steps) exchanged between the user and the bot. So, this context keeps the conversation flowing.

This context is stored as a JSON which is constantly updated at each and every step of a conversation. It stores all the info required to identify the state of a conversation, like the *step information* (visited steps), *intent name* (current intent) any many more.
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
* getting data of the steps
* knowing the current status of the conversation ( Intent name & the number of steps visited )
* changing a step value

#### Getting data of the steps
* app.context.steps is an object which contains key-value pairs of steps and the step values (user inputs) in the format step_name: step_value
* A new step is added into app.context.steps only after the validation of that step.
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