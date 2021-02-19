---
id: ym-academy
title: Yellow Messenger Academy
description: Companion guides for Yellow Messenger Academy participants.
featured: true
---


# Day 1

## Platform Basics Exercise Guide
### Introduction to Use-Case 
A popular restaurant in town is planning to implement a chatbot as an alternative for food ordering. On launching the webpage of the restaurant or on using the App on the mobile platform the user should be greeted by the chatbot. The user would speak to a chatbot to order food instead of talking to a staff member. The user would chat with the bot as if she is speaking to a real staff member. She would ask the bot, what is on the menu? Or What kind of cuisine is offered in the restaurant? The bot would respond back by giving the user the different Cuisine options to choose from. For Example, a South Indian Cuisine and North Indian Cuisine. On clicking the respective option, the menu is displayed as display cards. The user can go ahead and choose the food items she wants to order by selecting the respective display cards.

[ADD DEMO VIDEO OF FOOD ORDERING BOT]

### Pre-Session Task 
    • Signup on https://cloud.yellowmessenger.com 

    • Provide a valid email address. 

    [ADD LOGIN SCREEN SCREENSHOT]

    • Login to https://cloud.yellowmessenger.com 

    [ UPDATE WRT CLOUD.YM ]

    • Click on the Projcts button and look for an ‘invitation’ for a sandbox bot 

    • Click on Sandbox on the right side to check for a bot 

• Now you are ready build your first bot on YM platform

### Exercise 1.1: Initial Configuration of the Bot 
#### Objective: 
End of the Exercise you should be able to understand how to
    
    • Know the platform features 

    • Do the initial configuration of a bot 

#### Task:
1. Explore the platform 
2. Perform the initial Configure

#### Task 1: Explore the Platform
[ADD PLATFORM GIF]
1. Click on the Projects.
2. Click on the bot. This would launch the platform as shown in the image above.
3. Explore the buttons on the left side.

#### Task 2: Perform the initial Configure
Note: *This process would help you define your bot by giving it an identity
(Name, Title, Description and Intro message)*

[ADD CONFIG GIF]

1. Click on the configuration button (gear icon) on the botton left corner. 
2. Fill in the details: 

    • Name

    • Description

    • Bot Icon (Click on `Add Icon`) 

Rest of the text boxes are optional.

3. Click on `Save` button.


4. Click on the `Overview` button on the top left.

5. Under the `Try your bot` section, you can see your bot with the bot icon you've added in the configuration. You can also notice that bot name has also been updated.


### Exercise 1.2: Creating a Journey and Testing the Model  
#### Objective: 
End of this exercise you should be able understand 

    • Creating a Journey 

    • Configuring the journey with user utterances 

    • Training the Model and testing 

    • Configure Default Journey (for Default Bot Message) 

#### Task: 
1. Create a Journey and Configure the Journey with User Expressions (Utterance) 
2. Test the Model 
3. Configure the Default Journey

#### Task 1: Create a Journey

Note: *In the following exercise we could create a Journey that the user would go through to check for the menu and place his order*

1. Click on `Create Journey` button on the bottom left corner.
2. Leave `Template` as `Black Journey` and `Category` as `Default Category` only. Enter `Journey name` and `Journey description`. 
3. Now go to Studio and select the journey you've created. 
4. Click on `Start Trigger`, it'll open up a new panel on the right side.
5. In the grey space, you can add utterances. Utterances are the phrases users may say to trigger this journey.  

#### Task 2: Test the Bot
Note: *Test the bot to check if it has learned the user expressions*

1. Click on ‘Train’ button on top right corner.
2. Once the training is finished, click on `Tools` (wrench & screwdriver icon).
3. Under `TEST YOUR BOT` section, enter an utterance. 
4. In the JSON response, under `intents` you can see entered utterance will invoke which journey. It also shows confidance in percentage. Here, 1 means 100%.

#### Task 3: Configure the Default Journey
Note: *Configure Default Journey to enter the Default Message of the Bot.*

1. In the `Journeys` section select `Welcome` journey.
2. On your screen you can see two boxes `START TRIGGER` and `DEFAULT`. Click on `DEFAULT`. 
3. On the right side, you can see `Generic responses`. Under the `TEXT MESSAGE`, there is a text messange already which you've entered earlier while creating a bot. Update the `TEXT MESSAGE`.
4. Go to `Try your bot` under `Overview` tab from the left panel. Here if you click on home button, it'll trigger the default journey and show Text message you've just entered.

### Exercise 1.3: Adding Messages to the Journey
#### Objective: End of this exercise you should be able understand 
    • Adding Messages to the Journey 
    • Adding Text response and Quick reply for the steps 

#### Task: Add message to the Journey, Adding Text response and Quick reply for the message
Note: *When you user enters an expression like ‘Show me the Menu’ you would expect the bot to reply back asking the user ‘What kind of Cuisine do you like?’ with Cuisine (South Indian, North Indian...) listed as options to select.
This process is achieved by adding `Messages` to the Journey.*


1. Go to `Studio` and select the journey you've created (Restaurant).
2. Click on the `+` icon to add new step, then Select `Text` message type.
3. On the right side, enter 'Cuisine Type' as step name. In the Generic responses, enter "We serve north and south indian cuisines."
 in the `TEXT MESSAGE` field. You can also add multiple text fpr randomizing by clicking on plus sign.
[ADD MESSAGE GIF]
4. Go back to `Try your bot` and enter the expression 'Show me the Menu'.
5. You should see the message ‘What kind of Cuisine do you like?’
[ADD BOT GIF]
6. Now to add `Quick Replies` go back to `Studio` and add a new step in the `Restaurant` journey.
7. Add `Step Name` and under `QUICK REPLY` enter "What kind of Cuisine do you like?".
8. Using add sign below, you can add multiple options to choose from. Add 'North Indian' and 'South Indian' options.
9. Go back to `Try your bot` and enter "Menu please" or "Show me the menu".
[ADD BOT GIF]
10. Look for the chat response, "What kind of Cuisine do you like" with two quick reply buttons 'South Indian' and 'North Indian'.

### Exercise 1.4: Final Response to the Steps
#### Objective: End of this exercise you should be able understand 
• Add Carousel response to the journey

#### Task:
1. Add Carousel response to the journey
2. Validating the input from Carousel

#### Task 1: Add Carousel response 
Note: *In this task you would add response to the buttons clicked in a Step. Like, when a  user clicks ‘South Indian’ Or ‘North Indian’ button related to cuisine what would be the response. *

1. 




## Day 2
### Cloud Functions Exercise Guide

### Code Snippets


#### namePrompt
```
return new Promise(resolve => {
   app.log(app.prediction, "Prediction");
   app.sendTextMessage("Can you please tell me your name?").then(() => {
       return resolve();
   });
});
```

#### mobilePrompt
```
return new Promise(resolve => {
   app.log(app.context, "Context");
   let steps = app.context.steps;
 
   app.sendTextMessage(`Hey ${steps.name}, Can I know you mobile?`).then(() => {
       return resolve();
   });
});
```


#### emailPrompt
```
return new Promise(resolve => {
   let steps = app.context.steps;
 
   app.sendTextMessage(`Noted! Can you help me with you email?`).then(() => {
       return resolve();
   });
});
```

#### optinPrompt

```
return new Promise(resolve => {
   let title = "Are you willing to receive notifications regarding your orders in Whatsapp?";
   let options = [
       {
           title: "Yes",
           text: "Yes"
       },
       {
           title: "No",
           text: "No"
       }
   ];
 
   app.sendQuickReplies({ title, options }).then(() => {
       return resolve();
   });
});
```


#### confirmationPrompt
```
return new Promise(resolve => {
   let steps = app.context.steps;
 
   app.sendCards(
       [
           {
               title: "Please confirm your details below",
               text: "Please let us know if any of your details is wrong!",
               table: [
                   {
                       title: "Name",
                       value: steps["name"]
                   },
                   {
                       title: "Mobile",
                       value: steps["mobile"]
                   },
                   {
                       title: "Email",
                       value: steps["email"]
                   },
                   {
                       title: "Optin",
                       value: steps["optin"]
                   }
               ],
               actions: [
                   {
                       title: "Confirm",
                       text: "Confirm"
                   },
                   {
                       title: "Enter Details Again",
                       text: "Enter Details Again"
                   }
               ]
           }
       ]
   ).then(() => {
       return resolve();
   });
});
```

#### leadsInit
```
return new Promise(resolve => {
   app.sendTextMessage("In Init Function").then(() => {
       return resolve();
   });
 
   // app.setStep("mobile", "9487813680").then(() => {
   //     return resolve();
   // });
 
   // app.setMultipleSteps(
   //     {
   //         name: "Sam",
   //         mobile: "1234567890"
   //     }
   // ).then(() => {
   //     return resolve();
   // });
});
```




## Day 3

### Code Snippets

#### Database Insert
```
app.dataStore.insert({
    table: "leads",
    record: {
        name: steps["name"],
        mobile: steps["mobile"],
        email: steps["email"],
        optin: steps["optin"]
    }
});
```
#### Database Search
```
let mobile = "9487813680";
app.dataStore.search({
       table: "leads",
       body: {
           query: {
               bool: {
                   must: [
                       {
                           match: {
                               "mobile": mobile
                           }
                       }
                   ]
               }
           }
       }
   }).then((result) => {
       if (result && result.hits && result.hits.hits.length > 0) {
           app.log(result, "DB Result");
 
           let id = result.hits.hits[0]._id;
           let name = result.hits.hits[0]._source.name;
           let mobile = result.hits.hits[0]._source.mobile;
           let email = result.hits.hits[0]._source.email;
 
           app.sendTextMessage(`Hey ${name}, these are your details\n\nMobile: ${mobile}\nEmail: ${email}`);
 
       } else {
           app.log("No Records Found");
       }
   }).catch((e) => {
       app.log(e, "Er in db serch");
   });
```

#### Database Update
```
let mobile = "9487813680";
 
   app.dataStore.search({
       table: "leads",
       body: {
           query: {
               bool: {
                   must: [
                       {
                           match: {
                               "mobile": mobile
                           }
                       }
                   ]
               }
           }
       }
   }).then((result) => {
       if (result && result.hits && result.hits.hits.length > 0) {
           app.log(result, "DB Result");
 
           let id = result.hits.hits[0]._id;
           let name = result.hits.hits[0]._source.name;
           let mobile = result.hits.hits[0]._source.mobile;
           let email = result.hits.hits[0]._source.email;
 
           app.sendTextMessage(`Hey ${name}, these are your details\n\nMobile: ${mobile}\nEmail: ${email}`);
 
           app.dataStore.update({
               table: "leads",
               record: {
                   _id: id,
                   email: "nitinnithilesh@ym.com",
                   optin: "No"
               }
           }).then((res) => {
               app.log(res, "Response");
           }).catch((e) => {
               app.log(e, "Er in updating");
           });
 
       } else {
           app.log("No Records Found");
       }
   }).catch((e) => {
       app.log(e, "Er in db serch");
   });
```

#### Set Memory
```
let memoryDataToStore = [
       {
           name: steps["name"],
           mobile: steps["mobile"],
           email: steps["email"],
           optin: steps["optin"]
       }
   ];
   app.memory.set("leads", memoryDataToStore).then(() => {
       app.sendTextMessage("Lead Generated!").then(() => {
           return resolve();
       });
   });
```

#### Get Memory
```
app.memory.get("leads").then((leadsFromMemory) => {
       app.log(leadsFromMemory, "Memory Result before parsing");
       let leadsParsed = JSON.parse(leadsFromMemory);
       app.log(leadsParsed, "Memory Result");
 
       let name = leadsParsed.name;
       let mobile = leadsParsed.mobile;
       let email = leadsParsed.email;
 
       app.sendTextMessage(`Hey ${name}, these are your details\n\nMobile: ${mobile}\nEmail: ${email}`);
   }).catch((e) => {
       app.log(e, "Er in memory search");
       app.sendTextMessage(`Memory not present`);
   });
```

#### Delete Memory
```
app.memory.delete("leads");
```

#### Execute API
```
/* WITHOUT PARAMS */
   app.executeApi("test_3").then((response) => {
 
       let body = JSON.parse(response.body);
       app.log(body, "API Response");
   });
 
   /* WITH PARAMS */
   let paramToSend = {
       nameOfUser: "Nitin"
   };
   app.executeApi("test", paramToSend).then((response) => {
       let body = JSON.parse(response.body);
       app.log(body, "API Response");
   });
```

#### Handle Language
```
let languageSelected = app.context.steps['change-language'];
 
   let lan;
 
   switch (languageSelected.toUpperCase()) {
       case 'EN': {
           await app.memory.set("target_language", "en");
           lan = 'en';
           app.setTargetLanguage("en");
           break;
       }
       case 'HI': {
           app.log('Inside Action of Hindi Language');
           await app.memory.set("target_language", "hi");
           lan = 'hi';
           app.setTargetLanguage("hi");
           break;
       }
       default: {
           await app.memory.set("target_language", "en");
           lan = 'en';
           app.setTargetLanguage("en");
           break;
       }
   }
 
   languageSelected = languageSelected.toUpperCase();
   await app.memory.set('languageSelected', 'true');
 
   app.options.targetLanguage = app.setTargetLanguage;
 
   return app.triggerIntent('default');
```

#### Main Function - Language
```
app.customOptions = {
   minConfidence: 0.7,
   i18n: true
}
 
app.memory.get('target_language').then((targetLanguage) => {
   if (targetLanguage) {
       app.customOptions.targetLanguage = targetLanguage;
   }
}, (error) => {
   app.customOptions.targetLanguage = 'en';
});
 
return app.start(app.customOptions);
```