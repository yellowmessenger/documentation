---
title: Prompt Nodes
sidebar_label: Prompts
---

# Nodes- Prompts


Prompts are Interactive/conversational nodes which expect  user input.
When user provides an invalid input to the prompt, fallback message will be displayed. There are different types of prompt nodes: 
1. **User Details**- Used to collect user details.
2. **Feature**- Used for creative display of information and collection of response.
3. **Social Media**- Nodes to collect social media related details.
4. **Voice**

> All these prompts must be followed by another node as a response to this node.

You can also make your **prompts smarter**. It will be discussed at the end of this document. 


> **Note**
> The nodes which have an option to ask the users a question/ display a text are enabled with **Randomization** feature. On any such node, click **Add multiple text for randomizing**. Enter variations of text that you want your users to see. This feature will display different message to the user in a random order (instead of the same message every time) making the conversation more humanly. 
>  
> ![](https://i.imgur.com/KucDPVJ.png)


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


Carousel response contains option to add image (less than 10MB), title and description.
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

## 4. Voice

### Speak

Users can input the SSML text and can play the configured/generated audio on the go.

You can enter what a bot must ask the user in SSML format. This can be tested by clicking **Test Audio** and playing the produced audio. When this node is reached in the flow, the user will be sent a voice message (when bot is configured for it).



![](https://i.imgur.com/A1komJk.png)

Sample SSML code: 

```
<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="en-US"><voice name="en-US-JennyNeural"><prosody rate="0%" pitch="0%"> What is your  query</prosody></voice></speak>
```


## 5. Make Prompt Smarter

Make Prompt Smarter option is available on all the prompt nodes. 

![](https://i.imgur.com/QoIUylO.png)

----

### Auto Complete

Autocomplete is set so that the bot can start predicting rest of the word or sentence for users as they start typing. This feature can be used for: 
* Discoverability: End user can easily discover what a bot or a point does
* When there are multiple options available and a limit is set on the display, autocomplete is a good singular or assisiting alternative to show options.
* Faster typing, and improved user experience.

> Autocomplete shows results after 3 characters are typed and it keeps filtering the results as customer continous typing / or selects an option.

![](https://i.imgur.com/anyDc8z.png)

Auto complete is available at a [global level](https://docs.yellow.ai/docs/platform_concepts/studio/train/tools#22-conversation) and prompt level (that is triggered inside a prompt).

![](https://i.imgur.com/i0u48Ru.gif)


Following options can be set to auto-complete: 

1. **Database column** - Select a database table > column directly to populate autocomplete using that. 
2. **List entity** - Select a list entity , items of which will be used to populate autocomplete. 

>Only List Item names are considered, the is no search based on all synonyms. 

3. **User properties** -  Select a user property(string type ) from Users table to autocomplete. (Note: Only distinct results will be shown) and add upto one filter on any column. 
4. **FAQs** - Multiselect categories of FAQs which you want to include in Autocomplete. FAQ descriptions are populated in autocomplete (which are by default same as question itself) 
5. **Function** - If the use case turns is complicated complicated and none of the above steps work, select a function where you can write your custom logic to ultimately return an array of string items which will populate your autocomplete.

Sample code snippet for function: 
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


--------

### Autoskip

You can keep your conversations from being repetitive by auto-skipping the prompt with entities or variables if you already received the value and have stored it.

In the below example, the user wont be asked for the name, phone number and email again in any of the flows. 



![](https://i.imgur.com/jIgnQRZ.png)

Configure Autoskip at a global level (from tools section), click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/tools/#224-autoskipping-settings). 

### Additional 

1. **Use this as Unique ID for User**: Info entered at this node will be unique for an user. 
For example, instead of setting a new user ID, you can use the phone number as an unique ID to recognize this user. Other nodes that can be used as Unique IDs are Car Number, Aadhar Card, SSN, etc. that are unique to an individual. 

2. **Mark user message as sensitive info**: Mask this user info from appearing in conversation logs.
3. **Mark bot message as sensitive info**: Mask this bot info from appearing in conversation logs.


![](https://i.imgur.com/0W4y8pO.png)

#### Use-case

* Where there are 2 nodes in this flow, one asking for password (**marked user message as sensitive info**) and the other providing a new password (**marked bot message as sensitive info**). 

![](https://i.imgur.com/ycX3lFa.png)

* Text entered at these nodes will be displayed as "sensitive information" on the chat log. 

![](https://i.imgur.com/qW4MoKt.png)
