---
title: Response types - Message 
sidebar_label: Response Types - Message
---
Now that we understand Steps & Journeys, let's talk about different kinds of responses we can add in a Step. Responses simply mean any way we are responding/communicating with user. It will become more clear as we move on, In this section we will limit our discussion to Message Response type & talk about validators.  

> :pushpin: **Note**: You can add multiple types of responses in a single step. 

![](https://i.imgur.com/C6jzhe6.gif)

> **Note** : All of the responses types can also be triggered through code, please refer Developer Guide for more information. 

## Message Types

In this section we will describe various 'Message Types'. Message types can be broadly of two types
![](https://i.imgur.com/R3dEEva.png)

* What this means is for message types that do not need user input, in a conversational flow, *bot will not wait for any user input after that message.* This includes text,Images, Videos, Files and also trigger journey. 
* For Message types that need user input, bot will have to wait for it in a conversational flow. An additional input validation step can also be added in these cases which varies based on message type. This includes Quick replies, Carousal, Question.

### Text 
Text can be used when you wish to send a simple message to your user, without expecting any input from their end. 
For example, an Acknowledgement message.
### Files, Images, Videos
Apart from Text, you can also send above three by simply attaching the respective file you need to send. 

### Question
Question is similar to Text, but here we are expecting an input from user. 

 *Example*,
| |When Input validation passes | When Input validation fails |
| -------- | -------- | -------- |
| Bot: |Can you provide your name? | Can you provide your name?|
|User:| Aakanksha | abc |
|Bot: |`Validation passed, Moves to Next Step ` | `Validation failed, sends validation message` Please enter a valid name   |

#### Validate user response
Validation may not always be needed, but it's a good practice to add validation when the accuracy of input you're taking is very important. 

![Types of Validations](https://i.imgur.com/FTOej7G.png)

* You can validate basic inputs like Name, Phone, Location, Email by directly selecting from platform options. 
* If you're validating something of specific format, like some ID number, you can use Regex from options.  
* Additionaly, if you want a custom validation that cannot be covered from above options, you can also validate using a function from code section. 

### Quick Replies
Quick replies can be used to give end-user options. **Users can  either select from options or type out option.**  
![](https://i.imgur.com/kiwxYnn.jpg)

You can click on a particular quick reply to open it's settings. 

![](https://i.imgur.com/L3z2bVc.gif)

* You can control how a quick reply looks. 
* You can also set what action should happen when user clicks on a quick reply. 
* One other option is the ability to use `Text Aliases`. If user doesn't select anything and types instead, you can set multiple text here which can be used to validate that quick reply.


:::warning
- For whatsapp channel there is no option to click on a quick reply button, instead it will display as:
> Please select what would you like to do next?
> 1. New Booking
> 2. Cancel/Reschedule Booking
> 3. Check Refund Status
> 4. Other Query

In such case it's extremly important to use **Text Aliases** and also add option values 1,2,3 etc to text aliases. 
:::

### Carousal
You can also add a Carousals to your bot. Carousal can be used in places like displaying a list of product. 
![](https://i.imgur.com/q0wRsgz.jpg)
* Carousal response contains option to add image, title and description. 
* You can also add multiple buttons in carousal and control what these buttons do. See image below for options you get for a button.
* ![](https://i.imgur.com/RG6D3rV.jpg)

> You can create more customised cards in carousal using code if this doesn't fit your use case.

### Trigger Journey
Trigger Journey option simply allows you to set up starting another journey at certain point in your flow. 
You can select which journey to trigger from dropdown containing all your bot journeys. This option is for your use as a bot developer to design flow and doesn't need any input from user. 

:::info
### Contextual Questions
Once you add a response type that needs input, you will see one more option in message types `Contextual Questions`
Suppose the following
> Bot asks user 'Can you please enter your phone number?'
>Now instead of answering this, what if user asks 'Why?'

***Contextual Questions can be used to answer questions in context of that step.*** 

![](https://i.imgur.com/1ap5fRR.gif)

:::
---

So we're done with all Message Types. In next section we will explore two more response types - Action Nodes & Logic. 
