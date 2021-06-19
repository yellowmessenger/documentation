---
title: Prompts and Messages
sidebar_label: Prompts and Message
---
In this section we will talk about Interactive steps, viz, 
- Messages
- Prompts

![](https://i.imgur.com/N5367FZ.png)


**Messages** are one-way communication steps. Message steps do not wait for any user input. 
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
Prompts are steps that take some user input. All prompts have a "**store response in**" option to store input user gives in a [bot variable.](./tools)


### Use case based 
- **`Name`**, **`Email`** , **`Phone`** : Name, Email, Phone prompts are used for asking for respective details. They already have a Name/Email/Phone validator attached to them for validating user input and a 'validation failure message' shown when user input is not validated. 

    ![](https://i.imgur.com/oQ1IV5r.png)



- **`Location Prompt`** : Location prompt can be used to ask for and validate locations.

> Image to be added

- **`Feedback Prompt`**: 

> To be added

---
:::info
:question: **What happens when user constantly keeps entering the wrong input?** 

:spiral_note_pad: **Enable Limit for Retries** in [step-validation settings](./tools#step-validation-settings)
 
:::

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

> :information_source: [How Quick replies look on Whatsapp?](./tools#step-validation-settings)

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

- You can choose **`entity type/variable`** to autoskip a prompt step if value of that entity or variable is available. (You will learn more about entities and variables later)
- You can also mask this info from appearing in conversation logs by using **`Mask sensitive info`** button. 

:::info
You can also mask sensitive info channel wise :- 


1. ![](https://i.imgur.com/oJZhZvT.png)


2. ![](https://i.imgur.com/Sruf07q.png)

:::

---