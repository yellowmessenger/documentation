---
title: Cloud Function
sidebar_label : Functions
---
### How to create a new function? 
Cloud Functions compose of all the user defined functions that defines and controls the flow of the bot. The whole structure of writing the code is modularised. Main is the default function which is executed for every message. In the builder section, we can link the cloud functions directly in validators or steps or init functions by selecting the corresponding cloud function created in Developer section.

![how to add a new function](https://cdn.yellowmessenger.com/GqzX0iZ60ZCO1615523745204.png)


### What are stateless functions? 
Stateless means that the previous state is not remembered by the bot. The following stateless functions can be used to implement logics without using any app objects. 

#### Example stateless functions - > 

The arguments passed in cloud functions: (console, data, prediction, context, ymLib)
```
interface data {
	variables: {[key: string]: value: any}; // botVariables ma
 channel: string; // channel name - eg. yellowmessenger, facebook, whatsapp
 profile: object; // user profile - name, contact, etc.
 sender: string; // user ID
 bot: string; // bot ID
}
```

```
interface ymLib {
 args?: {
   apiResponse?: any; // passed in transformation functions tagged in API node
 },
 logger: object; // used for logging
}
interface context {
 history: object[]; // history of nodes visited by user.
}
prediction {
 intents: any; // to get NLU intents predicted from user message
}
```

#### Another Example here

```
return new Promise( resolve => {
 // To get any bot variable value e.g. score
 const value = data.variables['score'];
 // For transfromation function tagged in API Node, To fetch api response
 const response = ymLib.args.apiResponse;
 //
   // For functions used in Function Action node or Transformation Functions:
   // Any value returned (or promisified value) - this is actually stored in bot Variable
   return resolve(345); 
 });        
```
#### Another Exmaple here - 
```
return new Promise(resolve => {
   const variables = data.variables;
   // Do your logic here
     const qr = {
         title: 'Select an option from here',
         options: [
             {title: 'Btn1', text: 'btn1'},
             {title: 'Btn2', text: 'btn2'}
         ]
     };
     // return Quick Reply object to store in bot variable
     resolve(qr);
 }); 
```
#### Another example
```
    const cards = [
                   {
                       "title" : "Title1",
                       "description" : "Description",
                       "actions" : [
                           {
                               "title" : "Button #1",
                               "buttonDefault" : "text",
                               "text" : "btn1"
                           },
                           {
                               "title" : "Btn2",
                               "buttonDefault" : "text",
                               "text" : "Btn2"
                           }
                       ],
                       "image" : "https://cdn.yellowmessenger.com/P1EbYON6d3GK1623249355856.png",
                       "video" : "",
                       "text" : "Desc1"
                   },
                   {
                       "title" : "Title2",
                       "description" : "Description",
                       "actions" : [
                           {
                               "title" : "Btn2.1",
                               "buttonDefault" : "text",
                               "text" : "btn2.1"
                           }
                       ],
                       "image" : "",
                       "video" : "",
                       "text" : "Desc2"
                   }
               ]

```
