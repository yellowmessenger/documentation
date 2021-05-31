---
title: Template Journeys you can use
sidebar_label: Template Journeys
---

Now that we have a clear understanding of Journeys & Steps, and how flows are created, let us introduce you to some 'Template Journeys' we have already set up for you to use directly.

* Change Language
* Transfer to Agent
* Forms

You can use these by creating new journey using templates. 

## Change Language
![](https://i.imgur.com/pORD0Bq.png)
If you have multiple languages configured for your bot, using this template journey, you have a flow for giving user option to change language. The Special Action Node 'Language Transformation'does the work here. 

You can trigger this in your Welcome/Intial journey right away for user to select language or user can say 'Change language'at any time to change the language of conversation.

*You can only create one Change Language Journey in a bot.*

## Transfer to Agent
![](https://i.imgur.com/rqbzLCL.png)
This Journey is present so you do not have to write complicated logic in code to do the same thing.
Again, we have a special action node here that does the work. 

You can edit this journey and messages shown to user at different points (including in raise ticket action node). 
This is only useful if you are using Inbox Module on the platform. 

This Journey is triggered from Fallback already set up for you. User can also say 'Transfer to Agent' to actually trigger this. 

## Forms Journey
Now this Journey helps you create forms for collecting data from user. The flow includes 
- All the data collection
- Asking user confirmation by displaying the data received.
- Giving them option to edit certain data before confirming. 

This whole back and forth flow is designed for you in the form journey already. You also get an option to select one or more of following steps already to include in your journey. 
*You have to select atleast one of these which can act as unique key for Database Update*
![](https://i.imgur.com/YEyEaMK.jpg)

This is how the form Journey looks. 
![](https://i.imgur.com/BKpo6IP.png)

You can also add custom steps for information you need. Once you add and connect those to flow, you'll need to also make some changes in confirmInputs node. 
1. Edit Confirmation to include your new step. Suppose you added a step named 'AskIDCardNumber'
You would add the line "`ID Number - {{{steps.<stepid>}}}`" 
Step ID can be copied from that particular step.
2. You'd also need to add button mapping for your added step
![](https://i.imgur.com/3FOLyeY.jpg)

Once users completes the whole loop, an acknowledgement message is shown to the user. You can add suitable action node based on what you wish to do with this data. 

for example, If you want to store these details in a  database table , you can add DB Insert node anytime after 'Confirm Inputs' step. 
*If you do this before 'Confirm Inputs', user might edit details but they will not be updated at your source.*


---

We hope these template Journeys make your life as bot developer easy. 