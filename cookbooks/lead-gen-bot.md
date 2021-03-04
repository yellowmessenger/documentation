---
id: lead-gen-bot
title: Building your first Bot
description: Building a bot which can generate leads for you.
rank: 6
---
## Create Lead Generation Bot

We are starting with our next recipe which will be ready in few minutes just like 2 minute noodles😉. In this recipe we will create a lead generation bot which will capture some information of the user while answering the FAQs or if the user is interested in certain offerings. Lets get started!

### `Step 1:` Create a Journey

What is a Journey? -- A journey starts when the user queries for a certain answer and the bot gets the relevant information and shares it with the user. While getting the right information the bot might require some more details to identify the exact info to be shared which are known as steps/actions later. Below is an example of how a journey look like:


**Bot**: *How may I help you?*

**User**: *What is my order status?*

**Bot**: *Please enter your Order ID.*

**User**: *YM10X*

**Bot**: *Your order status is: Shipped on 12th Jan 2021 and will reach on or before 15th Jan 2021.*

<p>--------------- End Of Order Status Journey---------------</p>


Now lets create our own journey to generate leads. 


---

In the Studio Dashboard you can create a Journey by heading to the left bottom section and select Create Journey. 

![](https://cdn.yellowmessenger.com/Q8CjY97hpxWO1613018676058.png)


---
You have to select a Blank Journey, give it a name and description for reference and select the category as Default. Once done you will be inside the journey Dashboard where we would be creating the User Journey as required in our lead generation flow.

![](https://cdn.yellowmessenger.com/YZGjlTDx51YT1613018946967.png)

> _Quick Tip💡: You can also select template journeys for Agent Connect and Form Based Journeys which will have the flow already created for you just like cup noddles🍜_

---
### `Step 2:` Add User Expressions

User Expressions are what your users can type in order to fullfil the intent of this journey. Its suggested that you should add atleast 5-8 expressions to train the bot accurately.

![](https://cdn.yellowmessenger.com/MXd8MBBMVIqi1613029480475.png)

> _Quick Tip💡: Punctuations are not required while adding user utterances._


Once the User Expressions are added you can add the Responses/Questions required to be shown to the users in order to get the required information. There are multiple types of responses that you can use. You can also use combination of the different types of responses in order to make the bot response more intuitive. 

![](https://cdn.yellowmessenger.com/5bltCorsPHGQ1613104473061.png)

---
### `Step 3:` Adding of Responses

In our case we will be using Question Type Message Response in order to ask the name, email, phone number etc. to the user. The reason of using a Question Type Response and not a generic Message response is for the validation of each user input for each question. You can use the available validations or write your own Regex to validate the input.

In case if you need variances to your question for each question you can also do that by adding randomize text just below the input text bar of the response.

![](https://cdn.yellowmessenger.com/Lr2wc66ssaCg1613104821044.png)

You can select Name Validator in this case to validate the user input. Adding a validator is not mandatory but suggested so that valid inputs are captured. 

![](https://cdn.yellowmessenger.com/0b2IyhjPXKrZ1613105420402.png)

Once the validator is added you can add the message to be shown for invalid inputs. The bot will not allow the users to proceed if the user doesn't enter a valid response. You can also add number of retries for a valid response which will be discussed later.

---
### `Step 4:` Contextual Question/Response

You can add Contextual Question responses as well for each questions wherever required in order to make the bot more user friendly. It is suggested to add Common Contextual Responses for every question.

![](https://cdn.yellowmessenger.com/rITfsdJPOPWw1613107702044.png) ![](https://cdn.yellowmessenger.com/CufP3Qva6zI81613108060676.png)

---
### `Step 5:` Quick Reply Input

To make the bot more user friendly you can add quick replies as an input option. You can also configure the quick reply button colour, design etc. from Advanced Settings. 

> _Quick Tip💡: You can trigger a different journey from any Quick Reply using **Go to journey** _

![](https://cdn.yellowmessenger.com/vhYmC2EvFu601613110323588.png)
![](https://cdn.yellowmessenger.com/zZq1r4KEbTpK1613110386008.png)

---
### `Step 6:` Train and Try your Bot

Once you are done with adding of the utterances, questions and the contextual responses you can train and try your bot to confirm the flow is working as you designed. 

To Train your bot you need to click *Train* on the right top

![](https://cdn.yellowmessenger.com/PUSjIck2mpPk1613125572918.png)
![](https://cdn.yellowmessenger.com/sT6VGMa0y6av1613126056073.png)

Ater the training is completed you can go to Try Your Bot and verify your created flow.

You are ready with your first Bot! 🎉

Next we will discuss on how we can save those user information in a Data Base and do an import of the records as in when required. You can check the next cookbook on Data Base creation [here](https://docs.yellowmessenger.com/cookbooks/data-layer)