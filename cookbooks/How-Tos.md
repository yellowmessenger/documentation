---
id: how-tos
title: How Tos
description: Get answers to all your questions and learn some great tricks. 
featured: true
---

Get answers to all your questions and learn some great tricks. 

<!-- SECTION 1 -->
## Basics - Setup

### Sign up and accept bot invite? 
**Keywords** : invite

`Step 1` : Go to https://app.yellowmessenger.com/ and sign up with your email. Share the email with the YM team to send you the bot invite. 

`Step 2` : The bot will be visible under the ‘Invites’ section, please accept the bot invite and then it will be visible either under Sandbox/ Staging/ Production.
![how to accept an invite](../img/howtos/invite.gif)

---------------------------------------

### Share Bot Access?

**Keywords** : bot access, invite

`Step 1` : Go to configurations page inside the bot, open Access control - https://app.yellowmessenger.com/a/Your BOT ID here/config/access

![how to accept an invite](../img/howtos/access.png)

`Step 2` : The bot will be visible under the ‘Invites’ section, please accept the bot invite and then it will be visible either under Sandbox/ Staging/ Production.

---------------------------------------


### Create a bot? 
Please contact sales@yellowmessenger.com or go to https://app.yellowmessenger.com/ and register yourself. 

---------------------------------------


### Publish a bot?

**Keywords** : bot publish, live

`Step 1` : Check the following before pushing the bot either from sandbox to staging or staging to production. 

1. Bot Should be trained. 
2. Compare the code in the developer section
3. Test the bot and especially the changes made recently. 

`Step 2` : The bot will be visible under the ‘Invites’ section, please accept the bot invite and then it will be visible either under Sandbox/ Staging/ Production.

---------------------------------------


### Compare code? 

**Keywords** : compare

Note : 
1. This activity can be done only when the bot has been pushed and staging/ production bots exist. 
2. Compare changes will appear only if there are changes. 
3. The following combinations can be compare. Sandbox > Staging and Staging >  Production. 


`Step 1` : Go to the developer section.

`Step 2` : Under cloud functions, on the top left you will see the COMPARE button. 

`Step 3` : Click on the compare button to see new files created (C with green)/ deleted files (D with red) and modified files (M with blue) as compared to the next environment



![how to accept an invite](../img/howtos/compare.png)

**---------------------------------------**

<!-- SECTION 2 -->
## Learn - Create / New

### How to create a new function? 
- create , edit, save, add to a step, note on adding multiple functions 
refer to concepts or add a link here

---------------------------------------


### Create a new database and make changes to it? 

**Keywords** :  create , edit, upload, modify, delete, index, note on indexing issue and red symbol

`Step 1 ` : Adding a new table : You can add a new table by simply clicking on the ‘create table’ button. You can add fields here along with custom mapping of the fields if required. 

![how to add a new table](../img/howtos/database/create.gif)

`Step 2 ` : Download the table and add/edit/remove any data from this table. Truncate the same table and reupload the new table. As shown in the following steps. 
Edit the table as you want and save it in CSV format. Please make sure that the headers of the table are not changed. 

![how to download a table](../img/howtos/database/download.gif)

`Step 3` : Truncate the table in the database and upload the new updated table. Please make sure you don’t Drop the table. Dropping the table will delete the table entirely. 

![how to download a table](../img/howtos/database/truncate.gif)

Once changes are made, can upload the table in CSV format back on the same page using 'Upload' button. 


**Note** : When willing to add single record without downloadig and uploading, basically without making a fuss.  
Click on ‘Add Record’ and you can add one record at a time.
![how to make changes](../img/howtos/database/edit.gif)


---------------------------------------


### Validate(city, name, phone, etc)? 
Create a journey
Add steps
Select the validate button

Validation using regex with code

---------------------------------------


### How to add a new API?


1. Click on Studio go to API tab. On the API tab, click on `+ Add new API` button.

[SCREENSHOT]

2. Enter an API name. API names are alpha-numeric names in Camel Case and we can not have multiple APIs with the same name. The [joke API](https://official-joke-api.appspot.com/random_joke) used below returns a joke with a punchline in the GET request.

[SCREENSHOT]

2. You can select your request type(GET, POST, etc.) and add params and headers if any. 

3. Once added, you can test the API by hitting Send. If the API is correctly added and the endpoint works, you should be able to see a sample response as below. 

[SCREENSHOT]

4. Don't forget to click on save button on the bottom left conrne, otherwise you won't get a joke. Now you may laugh! :laughing:
Get answers to all your questions and learn some great tricks.

---------------------------------------

### How to add a messages to localisation/ rendermsg? 

**Keywords** : localisation

![how to make changes](../img/howtos/database/localisation.gif)

---------------------------------------

### How to setup suggestions? 

---------------------------------------

### How to setup did you mean? 
https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/418578433/didYouMean

---------------------------------------


### How to receive an event from an external third party? 

---------------------------------------

### How to do elastic search for database

---------------------------------------

### How to add messages to localisation? 
- rendermsg

<!-- SECTION 3 -->
## Design - Related To BOT UI 

### Change the name,title, sub-title, description of the bot? 

🤓 Trick : If you want to see live preview of the changes you’re making then go to your bot journeys, click on ‘Test your bot' on top right. And click on Bot Direct Link as shown here -

![how to make changes in UI](../img/howtos/configurations.gif)

You can also upload a new bot icon here. 

---------------------------------------

### Change the color schema and design of the bot? 

Creativity is intelligence having fun. Better color combinations and effective aesthetics can be a cherry on the cake, so we should make sure that these features, the color, font, etc can be matched with the clients websites and a standard template can be followed for all chatbots.  

`Step 1` : Access Chat Widget here - Go to app.yellowmessenger.com -> Login with YM credentials -> Open a bot -> Go to configurations tab on the left -> Go to Channels at the top -> Click on the first tile there i.e. Chat Widget as show here.

`Step 2` : Under Chat-Widget, you will see the following sections inAppearances and Settings. 

1. Basic 

2. Advance

3. General 

4. Publish your bot : Use the code snippet provided there, add it to the bottom of the ‘body’ tag. This should be shared with the client and can be added to their index.html page. 

![how to make changes in UI](../img/howtos/appearance.png)

`Step 3` : As highlighted here in the below image. We have default theme selected now, we can change the settings in the four tabs and save it as a theme.   
![how to make changes in UI](../img/howtos/theme.png)

Just one more thing, don’t forget to 'Save your Settings' and your beautiful bot is good to go! 🙂 

---------------------------------------


### How to change the name, color, UI of the bot? 
- chat widget

---------------------------------------


### How to bulk insert journeys? 

---------------------------------------

### How to change the font of a bot? 
- chat widget https://docs.google.com/document/d/1NX5VPLW7iT1enRJSboDG5eHJm_cX-D9tq70jyaT2V5g/edit

---------------------------------------

### How to setup multiple languages? 
- code and adding prompts in localisation

---------------------------------------

### How to add analytics to the custom dashboard? 
- code and adding prompts in localisation

---------------------------------------

### How to add a scheduler? 
- code and adding prompts in localisation

---------------------------------------

<!-- SECTION 4 -->
## Change - Enable / Disable
---------------------------------------

### How to add/ enable small talks? 

---------------------------------------

<!-- SECTION 5 -->
## Tricks - All interesting stuff here. 

---------------------------------------

### How does Self Learning work? 

https://docs.google.com/document/d/1vEcJEKNguvWfuTxb1z4W6lds2P5JfgETG4J6QZWl8ko/edit

---------------------------------------

### How to train a bot? 
Adding utterances
Train a bot
Evaluating the training
Testing utterances under tools
Meaning of the Test journey prediction model thing
Kinds of training
Word2vec 
Sentence Encoder 
Multilingual - ? 

---------------------------------------

### How to add constants? 

---------------------------------------

### How to create and use entities effectively? 

---------------------------------------

### How to create synonyms?

---------------------------------------

### How to add contextual intents or New Secondary Intent? 

---------------------------------------

### How to see/download/export user-bot interactions? 

---------------------------------------

### How to push user response into the database? 

---------------------------------------





