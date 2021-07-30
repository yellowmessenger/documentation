---
title: Prompts and Messages
sidebar_label: Prompts and Message
---
In this section we will talk about Interactive nodes, viz, 
- Messages
- Prompts

![](https://i.imgur.com/N5367FZ.png)


**Messages** are one-way communication nodes. Message nodes do not wait for any user input. 
**Prompts** on the other hands are questions bot asks user. Prompts expected a response from users. 

:::info
:pushpin: **Note**:  You can personalise prompts and messages based on language and channels:grey_exclamation: 


![](https://i.imgur.com/r9Z4P0C.gif)
:::

## Messages


### Text 
Text can be used when you wish to send a simple message to your user, without expecting any input from their end. 
For example, an Acknowledgement message.

![](https://i.imgur.com/QnQG7ck.png)


### Files, Images, Videos
Apart from Text, you can also send above three by simply attaching the respective file you need to send. 

## Prompts
Prompts are nodes that take some user input. All prompts have a "**store response in**" option to store input user gives in a [bot variable.](./tools)


### Use case specific
#### Name, Email , Phone : 
Name, Email, Phone prompts are used for asking for respective details. They already have a Name/Email/Phone validator attached to them for validating user input and a 'validation failure message' shown when user input is not validated. 

![](https://i.imgur.com/oQ1IV5r.png)

:::info
:question: **What happens when user constantly keeps entering the wrong input?** 

:spiral_note_pad: **Enable Limit for Retries** in [Prompt-validation settings](../tools#prompt-validation-settings)
 
:::

#### Location Prompt : 
Location prompt can be used to ask for and validate location inputs.

![](https://cdn.yellowmessenger.com/jwxiYsJ6GauO1627622859207.png)

Validation is passed only once we are able extract all the fields specified in "Required fields". This does not mean user needs to provide all these fields, we use whatever info the user has provided to extract the other fields.

It is then stored in the specified varialble with the folowwing format:
    {
        userMessage: '',
        coordinates: {
        lat: "",
        lng: "",
        },
        fullAddress: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
    }

:::info
All fields specified in required fields will definitely be present in the variable but fields that were not specified may also be present


You can also send a "Share location" button to allow users to share their current location. You can customize the text in this button by clicking on it. 
:::info
The "share location" button will be sent only in Web/PWA channels.



#### Feedback Prompt: 


Feedback Prompt can be used to take user feedback. Like any other prompt you can attach it any journey in the flow. You can ask for bot feedback, to Question feedback etc. 

![](https://i.imgur.com/pv2tlzm.png)

On feedback prompt you can configure what your questions should be when you ask for feedback. Feedback prompt will ask for rating on a scale of 5, and additional comments prompt will take additional comments from user in a text field (not compulsory)

![](https://i.imgur.com/Zu99Ssq.png)

:::warning  **Feedback widget is only available on chat-widget 2.0** :warning:
:::

:::warning
 :information_source: All of the feedback data can be found in Growth section > Data Explorer. 
 
:warning: **You do not need to store it seperately.**


Still, You can access this data if needed by using `{{variables.var_name.rating}}` and `{{variables.var_name.comment}}`

:::


#### Date prompt

You can use the date prompt to ask for and validate date inputs. 

![](https://cdn.yellowmessenger.com/EnNVBl4TeM1m1626264357943.png)



**Widgets**
You can send a calendar widget along with your prompt message. There are 3 widget types you can choose from - single date picker, date range picker, and month picker.

Widgets are optional. Chat will not be disabled when a widget is sent, users can choose to type in their response. If you want to disable chat for this step please do so in channel options.

:::info
Widget will be sent only if the channel is web/PWA.
:::

**Validation**
If the user input contains a date or a time, it will pass the validator. Else the specified validation fail message will be sent

:::warning 
Time inputs will also pass validation 

Validation will pass as long as the user query contains a valid date, even if there are other words in it.
:::

**Storing date variables**
Post validation, the user entered date will be stored in the specified variable as an object. The structure of the object is as follows:

For a single value

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

For a range

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
            "exists": true,
            start:
                {
                    "timestamp": "2021-09-08T00:00:00.000Z",
                    "year": 2021,
                    "month": 8,
                    "date": 8,
                    "day": "Sunday",
                    "hour": 0,
                    "minute": 0
                },
            end:
                {
                    "timestamp": "2021-09-08T00:00:00.000Z",
                    "year": 2021,
                    "month": 8,
                    "date": 9,
                    "day": "Monday",
                    "hour": 0,
                    "minute": 0
                }
        }
    }

:::info
In the case of range, value key will be the same as start date
:::

Values can be accessed using moustache expressions. 





---


### General - Question
Apart from these use case based questions, you can directly ask any custom question using **`Question`** prompt and store response in variable if needed ahead.

### Quick Replies
Quick replies can be used to give end-user 'quick' options. **Users can  either select from options or type out option.**  

![](https://i.imgur.com/TMsahjb.png)


You can drag and extend each quick reply to attach with further flow you want ahead of it. 
There is also an option to configure *fallback* which will work when none of the quick replies are validated from user input (Nor any other intent detected)

#### Quick reply settings
If you click on a quick reply button - you can find a few additional options (advanced settings) to configure. 
- Button value  : If configured, this is the actual value of this button - that will go to any Database insert or be stored in variable. 
- Text aliases : You can also configure different variations of quick reply word which has to be accepted for that button value/label.
- Link and Postback : You can also have a quick reply redirecting to a particular URL. 
- Text Color and Background color can also be configured. 

> :information_source: [How Quick replies look on Whatsapp?](../tools#prompt-validation-settings)

#### Dynamic Quick replies

In above way to add quick replies if you see, you had to add each button yourself. You knew the number and text of buttons beforehand to create quick replies. 
But what about some options you want to generate from maybe an API response or Database query where you either don't know what will be the option or number of options can change from where you want to fetch it from. 

In this case, you need to dynamically generate quick replies. 

:bulb: To do this, we have a **`Fetch from`** option in quick reply prompt. 
Here, instead of adding quick replies manually, you can select a variable containing a quick reply object. 
**`Format of quick reply object`**
```
 {
    title: "My QR Title",
    options: [
            {title: "Project0", text: "Project0"},
            {title: "Project1", text: "Project1"}
            ]
}
```
To dynamically generate quick replies, you can apply any logic in code (functions) around quick replies and store value of final object in intented variable. For example, you can apply for loop around options to dynamically add to them while parsing through some API response etc. 
You will learn more about function nodes in next section. 

### Carousal
You can also add a Carousals to your bot. Carousal can be used in places like displaying a list of products.

* Carousal response contains option to add image, title and description. 
* You can also add multiple buttons in carousal and control what these buttons do. 


> :pushpin: Note: Carousals without buttons will act as `Messages` instead of `Prompts`.


![](https://i.imgur.com/qAea1te.png)


#### Dynamic Carousals
Similar to quick replies, Carousals can also be dynamically created using **`Fetch from`** option. Carousal object is an array of each card (JSoN objects). 
**`Sample Carousal object`** 

```
[ 
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

**Actions** above describe the card button, you can add multiple actions to a single card in carousal. 

To add a URL type action, for example, format becomes
```
    {
        "title": "Explore more",
        "buttonDefault": "url",
        "url": "https://sampleurl.com",
    }
                    
```

Since we looked at objects, let's also look at one sample function to add carousals to understand this. You can call this function from function node we will learn about and store the returning value in a variable.

**`Sample code`**

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

----

### Prompt settings

There is also some additional options in prompt settings that you can use. 


![](https://i.imgur.com/Zylyvin.png)

- You can choose **`entity type/variable`** to autoskip a prompt node if value of that entity or variable is available. (You will learn more about entities and variables later)
- You can also mask this info from appearing in conversation logs by using **`Mask sensitive info`** button. 

:::info
You can also mask sensitive info channel wise :- 


1. ![](https://i.imgur.com/oJZhZvT.png)


2. ![](https://i.imgur.com/Sruf07q.png)

:::

---