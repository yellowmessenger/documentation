---
title: Prompt Nodes
sidebar_label: Prompts
---

Prompts are Interactive or conversational nodes, which expect user input. When a user provides an invalid input to the prompt, a fallback message will be displayed. 

In this article, you will learn about the different types of prompt nodes: 
1. [Frequently used prompts](#used)
2. [Other prompts](#others) 
3. [Make prompt smarter](#smarter)

> All these prompts must be followed by another node as a response to this node. 

---

**Randomization**

The nodes that have an option to ask the users a question or display a text are enabled with **Randomization** feature. On any such node, click **Add multiple texts for randomizing**. Enter variations of text that you want your users to see. This feature will display different messages to the user in a random order (instead of the same message every time), making the conversation more humanly. 
  
   ![](https://i.imgur.com/KucDPVJ.png)

---

**Configure text displayed on the bot**

To know more about how to configure the text, click [here](https://docs.yellow.ai/docs/cookbooks/studio/text-format).

---

## <a name="ud"></a>  1. Frequently used promts


### 1.1 Question

> This node is available for voice bots. 

Ask a simple question with this node. 


![](https://i.imgur.com/MU4Awmg.png)

Click **Fetch from** to see the dynamic value. You can edit the value of the question by entering the code. 
```
{
  "type": "text",
  "value": "What is your query?"
}
```

---
### 1.2 Name

> This node is available for voice bots. 


Ask and validate the user name with this node. When the user enters a sentence instead of the first + last name, validation fails, and the bot replies. ‘Can you please repeat this, looks like an invalid name’.

:::note
 If you are building a multilingual bot, it's recommended to use a Question node instead of a Name node.
:::

![](https://i.imgur.com/Rr81uih.png)


Create a Name [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) and store the user name in it. 


![](https://i.imgur.com/t8UFyzS.png)

---

### 1.3 Phone

> This node is available for voice bots. 

Ask and validate the phone number with this node. If the bot is customised for a specific region, select a **default ISD** value.

When the user enters a number of length greater or less than the expected number (10 for India +91), validation fails and the bot replies, 'Enter a valid phone number'.


![](https://i.imgur.com/OE9W6fH.png)

:::info
 One phone node can only support validation of one country code. 
:::

Create a Phone [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) and store the number in it. 


---

### 1.4 Quick Replies

Display a question along with quick reply buttons as the response for this node.
Users can either select from options or manually type out options.
You can drag and extend each quick reply to attach it to the flow you want to use further. You can also configure fallback, which will work when none of the quick replies are validated from the user's input.


![](https://i.imgur.com/Ign5Rz9.png)



You can further customize buttons by adding:
* **Button value** - If configured, this is the actual value of the button - that will go to any Database insert or be stored in a variable.
* **Text aliases**: Other phrases users can type which means the same as the text in the button. 
* **Link and Postback**: External URL link. 
* **Prefix Image**: Image icon that you want to show for the button.

![](https://i.imgur.com/mlA3ZYS.png)


#### Dynamic Quick Replies 


In the above method to add quick replies you had to add each button yourself. You knew the number and text of buttons beforehand to create quick replies. You can generate some options from an API response or Database query where you either don't know what will be the option or the number of options can change from where you want to fetch it from.
In such cases, you need to dynamically generate quick replies.
To do this, we have a **Fetch from** option in the quick reply prompt. Here, instead of adding quick replies manually, you can select a variable containing a quick reply object. Format of quick reply object:

```
{
  "title": [
    "Select an option",
    "Pick an option"
  ],
  "options": [
    {
      "text": "cold drink",
      "title": "Cold Drink",
      "advancedSettings": true,
      "aliases": [
        "coke",
        "soft drink"
      ],
      "url": "https://www.tasty-food.com",
      "postback": "post-back",
      "image": "https://cdn.abc.com/coke-img.jpeg",
      "textColor": "#4384f5",
      "backgroundColor": "#FFFF",
      "id": "quick_01d78e38b44e1915",
      "analytics": {
        "aevent": "test-analytics"
      }
    },
    {
      "text": "",
      "title": "Btn #2",
      "advancedSettings": false,
      "id": "quick_d9eda393404266d4"
    },
    {
      "text": "",
      "title": "Btn #3",
      "advancedSettings": false,
      "id": "quick_39563a54f6889f4d"
    }
  ]
}
```

To dynamically generate quick replies, you can apply any logic in code (functions) around quick replies and store value of final object in intended variable. For example, you can apply for a loop around options to dynamically add to them while parsing through some API responses etc.


### 1.5 Email

Ask, validate and store the user's email with this node.


![](https://i.imgur.com/LRJ93DG.png)


**Validation**
Bot checks if the entered email is in username@company.domain format.

Create an email [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) and store the email ID in it. 

---

### 1.6 Carousel 

Display interactive carousel cards with buttons with this node. Carousel can be used in places like displaying a list of products.


![](https://i.imgur.com/DJkmnpT.png)


Carousel response contains an option to add an image (less than 10MB), title, and description.
You can also add multiple buttons to a carousel. Clicking on the button can display a text, another flow, a URL entered, or will be sent to the phone number. Configure this in the Carousel settings.

:::info
 On WhatsApp, carousel cards do not support hyperlinking and allow for up to 3 clickable buttons.
:::

![](https://i.imgur.com/seysnzN.png)


:::note
Carousels without buttons will act as Messages instead of Prompts.
:::

**Success** and **Fallback** cases must be handled by connecting them to other nodes to continue the flow.  

#### Dynamic Carousels

Similar to quick replies, Carousels can also be dynamically created using **Fetch from** option. Carousel object is an array of each card (JSON objects). Sample Carousel object:

```
[
  {
    "title": "Item1",
    "description": "Description",
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
        "url": "https://www.sample-site.com",
        "postback": "post-back"
      },
      {
        "title": "Button #4",
        "buttonDefault": "phoneNumber",
        "analytics": "test-analytics",
        "phoneNumber": "9876543210"
      }
    ],
    "image": "https://cdn.abc.com/sample-img.jpeg",
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
    "text": ""
  }
]

```

The actions above describe the card button. You can add multiple actions to a single card in a carousel.

To add a URL type action, for example, the format becomes:

```
    {
        "title": "Explore more",
        "buttonDefault": "url",
        "url": "https://sampleurl.com",
    }                
```
**Sample function to add carousels**

You can call this function from the function node we will learn about and store the returning value in a variable.

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

---


## <a name="feature"></a> 2. Other prompts


### 2.1 Date 

Users will be able to select a date on the calendar widget with this node.
If the user input contains a date or a time, it will pass the validator. Else the specified validation fail message will be sent.
Widgets are optional. Chat will not be disabled when a widget is sent, users can choose to type in their response.

![](https://i.imgur.com/XZ2Im2N.png)

:::info
 This node is supported only on Web and Mobile apps.
:::

Different types of date pickers are available to be displayed to the users. 
Example of a Single Date Picker. 





![](https://i.imgur.com/QAIhG8M.png)


**Storing date variables**: Post validation, the entered date by the users will be stored in the specified variable as an object. 

The structure of the object is as follows:

**Store date for a single value**

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
**Store date for a date range**

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
---

### 2.2 WhatsApp List

Configure lists displayed on the WhatsApp channel with this node. 

WhatsApp API provides a better UI for businesses to send List items (within 24 hours window). 
To create a WhatsApp List:
* Select WhatsApp List under Prompt Nodes.
* Edit Body Message, Footer, Section Title and Button Title/Name and list.


![](https://i.imgur.com/vmDdimd.png)


**Dynamic WA List**

Enable **Advanced options** and `i` option next to **fetch from** to see the dynamic data.

```
{
  "title": "Please select your preferred slot for Appointment",
  "optionText": "Appointment Slots",
  "options": [
    {
      "section": "June 5, 2021",
      "options": [
        {
          "title": "9am-11am",
          "text": "5.9-5",
          "description": "General Medicine"
        },
        {
          "title": "12pm-2pm",
          "text": "5.12-2",
          "description": "Orthopedic"
        },
        {
          "title": "2pm-4pm",
          "text": "5.2-4",
          "description": "Physiotherapy"
        }
      ]
    },
    {
      "section": "June 6, 2021",
      "options": [
        {
          "title": "9am-11am",
          "text": "6.9-5",
          "description": "General Medicine"
        },
        {
          "title": "12pm-2pm",
          "text": "6.12-2",
          "description": "Orthopedic"
        },
        {
          "title": "2pm-4pm",
          "text": "6.2-4",
          "description": "Physiotherapy"
        }
      ]
    },
    {
      "section": "June 7, 2021",
      "options": [
        {
          "title": "9am-11am",
          "text": "7.9-5",
          "description": "General Medicine"
        },
        {
          "title": "12pm-2pm",
          "text": "7.12-2",
          "description": "Orthopedic"
        },
        {
          "title": "2pm-4pm",
          "text": "7.2-4",
          "description": "Physiotherapy"
        }
      ]
    }
  ],
  "footer": "Please follow Covid Guideline while consulting."
}
```

**Limitations**

* Maximum of 10 Buttons can be added. Multiple buttons cannot be selected in one go and are not supported in notifications.
* Character limit of Body is 1024.
* Character limit of Footer is 60.
* Character limit of Button Text and Response is 24.
* Section Title and List Headers are optional.

---

### 2.3 Multi Select 

:::info
- Supported for all the mobile SDKs (Flutter, Android , iOS) and web.
- Not Supported for WhatsApp, Instagram, Facebook , Teams, and Slack.
:::

Similar to the Quick Replies node, this node displays a question along with quick reply buttons where the user can select multiple responses.

**Success** and **Fallback** cases must be handled by connecting them to other nodes to continue the flow.  


![](https://i.imgur.com/YfWQNyZ.png)

---

### 2.4 Location 

Ask, validate and store user location with this node. 

Validation is passed after extracting all the fields specified in **Required fields**. This does not mean users needs to provide all these fields, any info provided by the user is extracted.

It is then stored in the specified variable with the following format:
```
 { userMessage: '', coordinates: { lat: "", lng: "", }, fullAddress: '', city: '', state: '', country: '', postalCode: '', }
```


![](https://i.imgur.com/ukkmvnZ.png)


You can also send a "**Share location**" button to allow users to share their current location. Customize the text in this button by clicking on it.


![](https://i.imgur.com/bicgYat.png)

---

### 2.5 Store comment


This node helps you to skip triggering of NLU, intents, or entities for a respective flow. Using this node, you can provide inputs such as feedback, questions, suggestions, and so on.

User inputs are stored in a variable through the Store comment node without triggering the NLU of that particular flow.

For example, you have created a bot to order food from a restaurant. You want to allow the  user to provide feedback after delivering the food. In such cases, you can use the store comment node to provide feedback without triggering the NLU of the respective flow.

![](https://i.imgur.com/oub8uVE.png)

:::note
It is recommended not to use Quick reply option for Store comment node.
:::

In the store comment node, there is a toggle to enable Quick reply. Quick reply in the comment store node captures both the comment and the Quick reply response. The comment will be stored as a fallback when the user hits enter after writing the comment, and if the user clicks on Quick reply, then that Quick reply response will be stored in the variable.

---

### 2.6 File Prompt 

Ask, validate and store JPG/PNG/MP4/MOV/HEVC files with this node.
The file size can be set to a certain number. 

It will validate if the uploaded file is in JPG/PNG/MP4/MOV/HEVC format and if its size is less than or equal to the mentioned file size. 

![](https://i.imgur.com/UvhKJn1.png)

Create a file [Variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) and store the file in it. 

---

### 2.7 Feedback 

:::info
- Supported for all the mobile SDKs (Flutter, Android, iOS) and web.
- Not Supported for WhatsApp, Instagram, Facebook , Teams, and Slack.
:::

Display a feedback widget and receive ratings and feedback with this node. 
On this prompt, you can configure what your questions should be when you ask for feedback. Feedback prompt will ask for a rating on a scale of 5, and the additional comments prompt will take additional comments from the user in a text field if entered.


![](https://i.imgur.com/v61glfs.png)

:::info
- Feedback data can be found in the Insights section > Data Explorer. You do not need to store it separately.
- You can access this data if needed by using {{variables.var_name.rating}} and {{variables.var_name.comment}}
:::

---

### 2.8 Speak

> This node is available for voice bots. 


Users can input the SSML text and can play the configured/generated audio on the go.

This node can be used for two purposes: 
1. When voice bot developers can test the SSML inputs directly from this node (with the help of the **Test Audio** button).
2. This node can be used as an alternative for the **Question** node but as a voice message. 


You can enter what a bot must ask the user in SSML format. This can be tested by clicking **Test Audio** and playing the produced audio. When this node is reached in the flow, the user will be sent a voice message (when the bot is configured for it).

The response message (user utterance) obtained for this node can be stored as a variable (similar to the question node)


![](https://i.imgur.com/BVIW5bs.png)


Sample SSML code: 

```
<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="en-US"><voice name="en-US-JennyNeural"><prosody rate="0%" pitch="0%"> What is your  query</prosody></voice></speak>
```

---

### 2.9 Input

Ask and store user input and other comments with this node. 

:::note
 Use this node only to store text comments from users - these replies will not trigger NLP.
:::

In many use cases, there is a need for a non-linear flow. For example, if the phone number node asks "Please enter your phone number"- the user enters a number in the wrong format, the bot displays the validation message saying "Entered number is wrong. Please enter again". For the same, if the user enters "Why do you want my phone number?" the reply will still be "Entered number is wrong. Please enter again". To handle such cases, the Input node can be used to handle different types of user replies. 


For better & dynamic conversation design, use the functionalities of the input node:  

1. Custom validator design.  
2. Attachment of different custom flows/messages every time validation fails. Validation failure messages need not be monotonous as it can be configured for each of the failed attempt separately.  
3. Can attach the new [Context handler](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) locally for dynamic conversations. 

![](https://i.imgur.com/MSHE9HW.png)

---

## 3. Make prompt smarter

Make Prompt Smarter option is available on all the prompt nodes. 3 options available broadly are auto complete, autoskip and other related options. 

![](https://i.imgur.com/QoIUylO.png)

----

### 3.1 Auto complete

Autocomplete is set so that the bot can start predicting the rest of the word or sentence for users as they start typing. For example, if you want to find your location and you start typing Jai, you will get the city names starting with Jai - Jaipur. Similarly, if you type Ban, you will get suggestions such as Bangalore, Bangla, Banswara, etc.

This feature can be used: 
* When the end user wants to easily discover what a bot or a point does.
* When there are multiple options available and a limit is set on the display, autocomplete is a good singular or assisting alternative to show options.
* Faster typing, and improved user experience.

:::note
 Autocomplete shows results after 3 characters are typed and it keeps filtering the results as the customer continues typing / or selects an option.
:::

![](https://i.imgur.com/anyDc8z.png)

Auto complete is available at a [global level](https://docs.yellow.ai/docs/platform_concepts/studio/tools#22-conversation) and prompt level (that is triggered inside a prompt).

![](https://i.imgur.com/Tpm7Qkb.png)


The following options can be set to auto-complete: 

1. **Database column** - Select a database table > column directly to populate autocomplete using that. 
2. **List entity** - Select a list entity , items of which will be used to populate autocomplete. 

> Only List Item names are considered, the is no search based on all synonyms. 

3. **User properties** -  Select a user property(string type ) from Users table to autocomplete. (Note: Only distinct results will be shown) and add up to one filter on any column. 
4. **FAQs** - Multi-select categories of FAQs which you want to include in Autocomplete. FAQ descriptions are populated in autocomplete (which are by default same as the question itself) 
5. **Function** - If the use case turns is complicated and none of the above steps work, select a function where you can write your custom logic to ultimately return an array of string items which will populate your autocomplete.

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

### 3.2 Autoskip

You can keep your conversations from being repetitive by auto-skipping the prompt with entities or variables if you already received the value and have stored it.

In the below example, the user wont be asked for the name, phone number and email again in any of the flows. 



![](https://i.imgur.com/jIgnQRZ.png)

Configure Auto-skip at a global level (from tools section), click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#224-autoskipping-settings). 

---

### 3.3 Additional 

1. **Use this as Unique ID for User**: Info entered at this node will be unique for a user. 
For example, instead of setting a new user ID, you can use the phone number as a unique ID to recognize this user. Other nodes that can be used as Unique IDs are Car Number, Aadhar Card, SSN, etc. that are unique to an individual. 

2. **Mark user message as sensitive info**: Mask this user info from appearing in conversation logs.
3. **Mark bot message as sensitive info**: Mask this bot info from appearing in conversation logs.


![](https://i.imgur.com/0W4y8pO.png)

#### Use-case

* Where there are 2 nodes in this flow, one asking for a password (marked user message as sensitive info) and the other providing a new password (marked bot message as sensitive info). 

![](https://i.imgur.com/FKZSynh.jpg)


* Text entered at these nodes will be displayed as "sensitive information" on the chat log. 

![](https://i.imgur.com/UCfr8gn.png)


:::note
 Click the tools icon and configure the node. For more details, see [Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes). 
:::

--- 
## 4. Voice input node

A voice input node is used to gather user information, process it, and manage various scenarios of conversing in a human-like manner. This node is in auto-sync with the conversation design so all the designs you add there will appear here automatically. To learn about using this node, click [here](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput).

:::note
Voice input node will work only for voice bots, i.e you should have enabled **Voice bot** while creating your bot.

![](https://i.imgur.com/8f5cdfK.png)
:::