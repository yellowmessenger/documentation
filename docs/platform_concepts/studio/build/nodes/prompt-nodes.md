---
title: Prompt Nodes
sidebar_label: Prompts
---

Prompts are Interactive/conversational nodes which expect  user input.
When user provides an invalid input to the prompt, fallback message will be displayed. There are 3 different types of prompt nodes: 
1. **User Details**- Used to collect user details.
2. **Feature**- Used for creative display of information and collection of response.
3. **Social Media**- Nodes to collect social media related details.

> All these prompts must be followed by another node as a response to this node.

You can also make your **prompts smarter**. It will be discussed at the end of this document. 

## 1. User Details

### Name

Ask and validate the user name with this node. When the user enters a sentence instead of first + last name, validation fails and the bot replies- 'Can you please repeat this, looks like an Invalid name'.

>If you are building a multilingual bot, it's recommended to use a Question node instead of Name node.

![](https://i.imgur.com/Rr81uih.png)


Create a Name [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/) and store the user name in it. 


![](https://i.imgur.com/t8UFyzS.png)


### Phone

Ask and validate the phone number with this node. **Default ISD** value can be selected if the bot is customized for a region.
When the user enters a number of length greater than 10, validation fails and the bot replies- 'Enter a valid phone number'.


![](https://i.imgur.com/OE9W6fH.png)

> One phone node can only support validation of one country code. 

Create a Phone [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/) and store the number in it. 

### Date 

User will be able to select a date on the calendar widget with this node.
If the user input contains a date or a time, it will pass the validator. Else the specified validation fail message will be sent.
Widgets are optional. Chat will not be disabled when a widget is sent, users can choose to type in their response.



![](https://i.imgur.com/XZ2Im2N.png)

> This node is supported only on Web and Mobile apps.


Different types of date pickers are available to be displayed to the users. 
Example of a Single Date Picker. 





![](https://i.imgur.com/QAIhG8M.png)


**Storing date variables**: Post validation, the user entered date will be stored in the specified variable as an object. The structure of the object is as follows:

For a single value

```
{
    "value": {
        "timestamp": "2021-09-08T00:00:00.000Z",
        "year": 2021,
        "month": 8,
        "date": 8,
        "day": "Sunday",
        "hour": 0,
        "minute": 0
    },
    "range": {
        "exists": false
    }
}
```
For a range

```
{
    "value": {
        "timestamp": "2021-09-08T00:00:00.000Z",
        "year": 2021,
        "month": 8,
        "date": 8,
        "day": "Sunday",
        "hour": 0,
        "minute": 0
    },
    "range": {
        "exists": false
    }
}
```
### Location 

Ask, validate and store user location with this node. 

Validation is passed after extracting all the fields specified in "**Required fields**". This does not mean user needs to provide all these fields, any info provided by the user is extracted.

It is then stored in the specified varialble with the folowing format: { userMessage: '', coordinates: { lat: "", lng: "", }, fullAddress: '', city: '', state: '', country: '', postalCode: '', }



![](https://i.imgur.com/ukkmvnZ.png)


You can also send a "**Share location**" button to allow users to share their current location. Customize the text in this button by clicking on it.


![](https://i.imgur.com/bicgYat.png)


### Store Comment

Ask and store user messages and other comments with this node. 


![](https://i.imgur.com/ARH5lVv.png)



## 2. Feature 

### Question

Ask a simple question with this node. 


![](https://i.imgur.com/MU4Awmg.png)


### Carousel 

Display interactive carousel cards with buttons with this node. Carousel can be used in places like displaying a list of products.


![](https://i.imgur.com/plQBWHs.png)


Carousel response contains option to add image, title and description.
You can also add multiple buttons in carousel. Clicking on the button can display a text, another flow, URL entered or will be sent to phone number. Configure this in the Carousel settings.

>On Whatsapp, carousel cards do not support hyper linking and allows for upto 3 clickable buttons

![](https://i.imgur.com/seysnzN.png)


> 📌 Carousels without buttons will act as Messages instead of Prompts.

**Success** and **Fallback** cases must be handled by connecting them to other nodes to continue the flow.  

#### Dynamic Carousels

Similar to quick replies, Carousels can also be dynamically created using Fetch from option. Carousel object is an array of each card (JSoN objects). Sample Carousel object

```
[
  {
    "title": "Shirts",
    "description": "Do you really need a shirt?",
    "actions": [
      {
        "title": "Button #1",
        "buttonDefault": "text",
        "text": "Message1"
      },
      {
        "title": "Button #2",
        "buttonDefault": "triggerJourney",
        "analytics": "analytics",
        "triggerJourney": "test"
      },
      {
        "title": "Button #3",
        "buttonDefault": "url",
        "analytics": "analytics",
        "url": "https://www.yellow.ai",
        "postback": "post-back"
      }
    ],
    "image": "https://cdn.yellowmessenger.com/oCYK22c0vdoI1654657000460.jpg",
    "text": "Description for item1"
  },
  {
    "title": "Title",
    "description": "Description",
    "actions": [
      {
        "title": "Button #1"
      },
      {
        "title": "Button #2"
      }
    ],
    "image": "",
    "video": "",
    "text": "This is button 2"
  }
]

```

Actions above describe the card button, you can add multiple actions to a single card in carousel.

To add a URL type action, for example, format becomes:

```
    {
        "title": "Explore more",
        "buttonDefault": "url",
        "url": "https://sampleurl.com",
    }
                    
```
**Sample function to add carousels**

You can call this function from function node we will learn about and store the returning value in a variable.

```
return new Promise(resolve => {
    // Your logic goes here
    let cars = data.variables.cars_h; //this bot variable contains an API response
    let cars_cards = []; 

    for (let i = 0; i < cars.length; i++) {
        
            cars_cards.push({
                "title": cars[i].model,

                "actions": [
                    {
                        "title": "Explore more",
                        "buttonDefault": "text",
                        "text": cars[i].model,

                    }
                ],
                "image": cars[i].main_img,
                // "video" : "",
                // "text" : "Desc1",

            });

    }

    return resolve(cars_cards);
});
```

### Feedback 

>Supported for all the mobile SDKs (Flutter, Android , iOS) and web.
>Not Supported for WhatsApp, Instagram, Facebook , Teams, and Slack.

Display a feedback widget and receive ratings and feedback with this node. 
On this prompt you can configure what your questions should be when you ask for feedback. Feedback prompt will ask for rating on a scale of 5, and additional comments prompt will take additional comments from user in a text field if entered.


![](https://i.imgur.com/v61glfs.png)


> Feedback data can be found in Insights section > Data Explorer. You do not need to store it seperately.
> You can access this data if needed by using {{variables.var_name.rating}} and {{variables.var_name.comment}}


### Quick Replies

Display a question along with quick reply buttons as its response with this node.
Users can either select from options or type out option.
You can drag and extend each quick reply to attach with further flow you want ahead of it. There is also an option to configure fallback which will work when none of the quick replies are validated from the user input.



![](https://i.imgur.com/Ign5Rz9.png)



Buttons can be further customized by adding:
* **Button value** - If configured, this is the actual value of the button - that will go to any Database insert or be stored in variable.
* **Text aliases**: Other phrases user can type which means the same as the button. 
* **Link and Postback**: external URL link 
* **Prefix Image**: icon that must be displayed for the button.


![](https://i.imgur.com/mlA3ZYS.png)


#### Dynamic Quick Replies 

In above method to add quick replies you had to add each button yourself. You knew the number and text of buttons beforehand to create quick replies. You can generate some options from an API response or Database query where you either don't know what will be the option or number of options can change from where you want to fetch it from.
In this case, you need to dynamically generate quick replies.
To do this, we have a **Fetch from** option in quick reply prompt. Here, instead of adding quick replies manually, you can select a variable containing a quick reply object. Format of quick reply object:

```
{
  "title": "Select one of the option",
  "options": [
    {
      "title": "Docs",
      "url": "https://docs.yellow.ai"
    },
    {
      "title": "Community",
      "url": "https://community.yellow.ai"
    },
    {
      "title": "yellow.ai",
      "text": "yellowdotai"
    }
  ]
}
```

To dynamically generate quick replies, you can apply any logic in code (functions) around quick replies and store value of final object in intented variable. For example, you can apply for loop around options to dynamically add to them while parsing through some API response etc.


#### Workaround for WhatsApp

Quick Replies are currently not supported on WhatsApp. That is, buttons wont be visible on the WhatsApp chat. 
To use buttons (Quick reply like action) use one Carousel card without adding any images.  

![](https://i.imgur.com/nmWXMaR.png)

You will be permitted to add only 3 buttons on the Carousel. Create a [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/) and store the selected response in it. 

Given below is the whatsapp chat screen for the above flow.

![](https://i.imgur.com/xw1ksvM.jpg)





### Multi Select 

>Supported for all the mobile SDKs (Flutter, Android , iOS) and web.
>Not Supported for WhatsApp, Instagram, Facebook , Teams, and Slack.


Similar to Quick Replies node, display a question along with quick reply buttons where the user can select multiple responses with this node. 

**Success** and **Fallback** cases must be handled by connecting them to other nodes to continue the flow.  


![](https://i.imgur.com/YfWQNyZ.png)


### File Prompt 

Ask, validate and store JPG/ PNG files with this node.



![](https://i.imgur.com/2W8klkr.png)


It will validate if the uploaded file is in JPG/PNG format and its size is less than 5MB.

Create a file [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/) and store the file in it. 


## 3. Social Media 

### WhatsApp List

Configure lists displayed on the WhatsApp channel with this node. 

Whatsapp API provides a better UI for businesses to send List items (within 24 hours window). 
To create a Whatsapp List:
* Select Whatsapp List under Prompt Nodes.
* Edit Body Message, Footer, Section Title and Button Title/Name and list.


![](https://i.imgur.com/vmDdimd.png)


**Limitations**

* Maximum of 10 Buttons can be added. Multiple buttons cannot be selected in one go and are not supported in notifications.
* Character limit of Body is 1024.
* Character limit of Footer is 60.
* Character limit of Button Text and Response is 24.
* Section Title and List Headers are optional.

### Email

Ask, validate and store the user email with this node.


![](https://i.imgur.com/LRJ93DG.png)


**Validation**
bot checks if the entered email is in username@company.domain format.

Create a email [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/) and store the email ID in it. 

## 4. Make Prompt Smarter

Make Prompt Smarter option is available on all the prompt nodes. 

### Auto Complete

* Configure auto complete by using the **Function** option (add the following code)

```
return new Promise(resolve => {
    console.log("inside autoSuggestion");
    let result = data.variables.autoComponents;
    const { term } = data;
    let suggestions = [];
    result.forEach((hit) => {
        if (hit.component.toLowerCase().includes(term.toLowerCase())) {
            suggestions.push([hit.component, hit.component]);
        }
    });
    resolve(suggestions);
});
```
* Use **User Properties**.
You can filter by the selected variables for the global variable. 


![](https://i.imgur.com/7ct8QZs.png)


### Autoskip

You can keep your conversations from being repetitive by auto-skipping the prompt with entities or variables if you already received the value and have stored it.

In the below example, the user wont be asked for the name, phone number and email again in any of the flows. 



![](https://i.imgur.com/jIgnQRZ.png)


### Additional 

1. **Use this as Unique ID for User**: This info will be unique for an user.
2. **Mark user message as sensitive info**: Mask this user info from appearing in conversation logs.
3. **Mark bot message as sensitive info**: Mask this bot info from appearing in conversation logs.


![](https://i.imgur.com/0W4y8pO.png)
