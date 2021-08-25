---
id: model-bot
title: Getting Started with Model Bot
featured: true
---

This document describes the Model Bot, a bot build for the following purposes : 
1. Learn how to build a bot by using no/less code 
2. Follow standard bot building processes/steps as used in this bot. 

## About Yellow.AI

**Yellow.AI** (Product completely owned by Bitonic Technology Labs Pvt Ltd) is an Artificial intelligence powered leading Chatbot platform for enterprises and brands to create, deploy and manage  Intelligent Chatbots across various platforms to engage with their Customers. Yellow.AI closely works with Enterprises to evangelize their requirements, work with them to create customized chatbots for their specific needs using the Yellow.AI chatbot platform. 

**Yellow.AI** is backed by Microsoft Accelerator and a Microsoft Partner for Intelligent Chatbots.

## Getting Started

### What are virtual assistants? 
Virtual Assistants, Chatbots, AI bots are an Artificial Intelligence based software/program which can simulate human-like conversations. Can understand, respond and predict the queries of an individual and support them. 
There can be different types of bots on the basis of features/use-cases/industries. 

Two different types based on technology can be - 
AI Based Intelligent bots : The bots trained on some expected questions and answers and with RPA based features. 
Programmed bots for automated responses, repetitive tasks. 

If you would like to dig-deeper, feel free to explore our Beginners Guide to Chatbots, Virtual Assistants and their differences. 


### Some Examples / References : 

Here are some example case studies for you to explore - 
1. [Reimagine Banking with Conversational AI](https://blog.yellowmessenger.com/resources/case-studies/reimagine-banking-with-conversational-ai/)
2. [Enhanced Agent Assist & Customer Experience for Sayurbox](https://blog.yellowmessenger.com/resources/case-studies/enhanced-agent-assist-customer-experience-for-sayurbox-case-study/)
3. [Conversational AI atop Social Commerce – Next Big Thing After E-Commerce](https://blog.yellowmessenger.com/resources/case-studies/conversational-ai-atop-social-commerce-next-big-thing-after-e-commerce/)
4. [Elevated Customer Engagement with Virtual Real Estate Agent](https://blog.yellowmessenger.com/resources/case-studies/elevated-customer-experience-with-virtual-real-estate-agent/)


### What is NLP ? (Natural Language Processing)
The capability of machines to understand and process the data, documents, and conversations is called natural language processing. 
Based on this processing, for any forthcoming data, a confidence can be defined for better segregation and taking an action on the top of it. 


### What is intent? 
An aim driven by a query or requirement. Something you are determined to do. 
In reference to chatbots, intents can be defined as questions that you may ask the bot. We are going to use a lot of intent based utterances and training moving forward. 

For example - 
I need to make a purchase. 
Can you help check my application status? 
Sign me up for the next event. 


### What is the composition of a virtual assistant ? 
The magic potion contains the following : 
1. An elaborative but short welcome message with buttons to the nearest possible customers requests/features available : **Welcome Message**
2. Things that the bot will understand : **Journeys & FAQs**
3. Things that bot might not understand : **Fallback & Suggestions (Didyoumean)**
In the following guide, we will learn in details what are the best practices for adding the above. 

We can also add other channels and integrations to our bot but we all know the basics have to come first. 

### Use cases  / Features of Model Bot
We have chosen simple use cases which can be used to demonstrate all possible features of the Yellow.AI platform. 

The model bot consists of five journeys : 
1. Change Language : Option to switch between Hindi/English languages
2. Test Drive : By sharing some customer details and selecting the dealer, the customer will be able to apply for a test drive. 
3. Contact Us : Choose to leave a message, or option for notifications. 
4. Product Details : Search about the various features of a product. 
5. Transfer to Agent (Template Journey, available across bots) : This is also set as a fallback response if the user asks questions outside from the defined intents. 
6. Service Now : Give all service options to the customer. This has sub journeys under Service Now - 
- Shield protect
- Buyback
- Roadside assistance
- Warranty, 

As shown in the studio/journey section here. 

** *Add screenshot here* **

## Utterances / Journey Based Utterances and Entities
![](https://assets.website-files.com/5ebd22629dddf75f082c4718/5ebd22629dddf77e2b2c4893_training-data-memes.jpg)
[Source](https://playment.io/blog/training-data-for-computer-vision)

These are some sample utterances/entities which can be used to test the bot. 

** *Add sample utterances/entities here* **


## Exercise 1 : Create your first bot

#### Step 0: Sign Up
Sign up on https://https://cloud.yellow.ai and after email confirmation login again on the same link. 

** *Add screenshot here* **

#### Step 1 - Create a Bot
Create a bot for yourself, every account gets a bot subscription for free with some limited features. Click here for reference - [How to create a bot? ](https://www.youtube.com/watch?v=DWdrstYFlG0)

#### Step 2 - Add a Welcome Message

After creating a bot you will land on the overview page, here we will start with the welcome message. 

** *Add screenshot of welcome message here* **

So what is a welcome message? It's the pick up line that actually works. 

![](https://cdn.yellowmessenger.com/ss1aT2N8neDn1621235455248.png)

1. Sample Greetings : Hi, Hey there!, Howdy!, Good morning/evening/afternoon, Hi John, What’s New? 

2. Sample Introductions :  ** *Add Sample Introductions here* **
 
3. Sample Feature Quick Replies : ** *Add Feature Quick Replies here* **

Use randomisation here to make things interesting !

#### ** Best Practices ** 🛠️

1. Greetings based on time of day / holiday / Persona of the bot. 

2. Give a persona to the bot - [more info](https://blog.yellowmessenger.com/resources/articles/4-best-practices-for-conversational-design/)

3. For returning customers, address them with their name. Example, Welcome Back Mary! How can I help you today? 

** *Add screenshot of studio* **


## Exercise 2 : Bot Configurations

#### Step 1 - Name your bot
Head over to the `Configure` tab from the left panel. Here you can configure your bot such as Name, Icon, Industry, Description etc.

** *Add screenshot of configure* **

The best practice here is - 
Name : It should be short and informative.
Icon : Add a minimalistic icon here. Reference 1, Reference 2, Reference 3
Description : This will be shown under the bot header. It’s recommended to keep it one liner only. 

** *add screenshot of a bot with name, icon, description highlighted* **

#### Step 2 - Look and Feel of your bot.

You can also customize the look and feel of your bot. For more information, check out this [guide](https://docs.yellow.ai/docs/howtos/design/setup-web-widget/#change-the-color-schema-and-design-of-the-bot). 

## Exercise 3:  Learn Bot Basics
#### Step 1 - Bot Basics
Let’s get started with bot basics first. 
- [Journey](https://docs.yellow.ai/docs/platform_concepts/studio/journeys): Journey is the Conversational flow between user and the bot.

- [Utterance](https://docs.yellow.ai/docs/platform_concepts/studio/natural-language-understanding/intents): Utterances(User Expressions) are the conversations that the user might have with the bot. It can be a sentence, a phrase or a single word.

- Training : Model training is required to help the NLP engine understand which Journey the utterance belongs to and trigger the exact Journey.

- [Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/steps/steps): Steps can be seen as building blocks of a Journey.

## Exercise 4:  Create Contact Us Journey

#### Step 1- Add Utterances
Let’s add intent and utterances first in the NLU tab. We will use this intent to invoke a journey.

** *Screenshot for adding intent* **

- Head over to the NLP tab and select Intents. Click on `Add New Intent`.

** *Screenshot for adding intent popup* **

- Add intent name and utterances. To learn what’s the best practise to add add utterances, checkout this [guide](https://docs.yellow.ai/docs/platform_concepts/studio/natural-language-understanding/intents)

** *Screenshot for contact us intent & utterances* **

#### Step 2 -  Create Journey and add Responses

- Go to the Studio tab and select ‘Journey’. Click on ‘Create journey’ and add a blank journey. 

- Click on ‘Start Trigger’ in the Studio and select ‘Contact Us’ intent from the dropdown. Here, you can also add multiple intents to improve the accuracy.

** *Screenshot for start trigger prompt* **

- Add a [Quick Reply](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#quick-replies)  response. Rename it to ‘Contact Options’.

- Add these three buttons:

    - Chat with an Agent: This will redirect to the `Transfer To Agent` journey which we will create later.

    - Leave a message: Leave a message to the support team

    - Keep me informed: Subscribe to receive notifications and updates

    - In the `Chat with an Agent` button you need to invoke a journey from Quick reply advance settings. 

** *Screenshot for quick reply advance settings* **

Add a [logic node](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic#logic) . Add If else conditions like this in the screenshot below.

** *Screenshot for logic node* **

With this logic node setup, if a user selects the `Leave a message` option, they’ll be able to leave a message to the support team and it’ll be saved to the database.
Moreover, if a user selects the `Keep me informed` option, their data will be stored in the database which will be utilized later to send notifications and updates.

#### Step 3 - Create Leave a Comment Journey

- Add a prompt to get the user's name. Also, in order to verify the input name, you can use the [name validator](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#use-case-specific).

** *Screenshot for logic node* **

- Ask for user’s email address using a Question prompt. Here, you can use an email validator, [Email Validator](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#use-case-specific).

- Now, add a Quick Reply response to give user an option to select which type of comment they would like to share: Feedback, Complaint or Enquiry 

** *Screenshot for name prompt, email prompt, quick reply* **

- Let’s add a condition action node to perform different actions according to the option selected by the user.
    
    - If comment type == feedback → Save feedback as well as user data in the feedback table
    
    - If comment type == complaint → save complaint plus user data in the feedback table
    
    - Else save feedback as enquiry and user data in the feedback table

- Now, add a text response in all branches to inform that their feedback has been registered in the db and will be shared with the team shortly.

** * Screenshot for condition node, text response * **

- Add a database action  node in all branches to save feedback in the feedback table. 

Finally, also add a text response thanking the user for sharing their feedback and a quick reply to jump to other journeys.
 
** * Screenshot for database node * **

## Exercise 5: Create Transfer Chat to Agent Journey

When a new bot is created on the Yellow Messenger platform, ‘Transfer Chat to Agent’ journey is created automatically. You can modify it according to your preferences. If you wish, you can also configure your own support system here.

## Exercise 6: Create Service Now Journey

#### Step 1: Add Utterances
Just like we saw in [step 1 of exercise 4](https://docs.yellow.ai/docs/cookbooks/model-bot/exercises#step-1--add-utterances), add intent and utterance for service now in the NLU tab.

** * Screenshot for adding intent * **

- Example Utterances:
    - service
    - want to apply for car service
    - i want to get car service
    - how to get service
    - service now

#### Step 2: Add Question Prompt
- Add a Question prompt and add `It's only <strong>HUMAN</strong> to care. 🙂` as the question. Notice here that ‘HUMAN’  word is wrapped in a `<strong>` tag, which will display it in bold. 

- In the Question prompt only, add Quick Reply response. Add “Explore Model Shield by choosing one of the options below” in the prompt. 

Add following options in the Quick reply response:
- Shield Protect
- Buyback
- Warranty
- Service Center
- Roadside Assistance
- Go back
For now keep these options static, meaning it won’t redirect users to a different journey or page. 

## Exercise 7:  Create Change Language Journey

#### Step 1: Add Utterances
Just like we saw in step 1 of exercise 4, add intent and utterance for change language in the NLU tab.

** *Screenshot for adding intent* **

Example Utterances:

- Change Language
- Switch language
- I want to talk in different language
- I want to chat in different language
- Can we chat in hindi?

#### Step 2: Add Additional Languages
Navigate to the configure tab and under ‘Languages’ field add your preferred languages. Let’s just add ‘Hindi’ for the course of this guide.

** *Screenshot for adding new language* **

#### Step 3 - Create Change Language Journey
- Go to the Studio tab and select ‘Journey’. Click on ‘Create journey’ and add a black journey. 

- Click on ‘Start Trigger’ in the Studio and select ‘Change Language’ intent from the dropdown. 

- Add a quick reply response to select the language. Set step name as ‘inputLanguage’ and add ‘English’ and ‘Hindi’ as options in the Quick Reply.

** *Screenshot for quick reply response* **

- While you add ‘English’ and ‘Hindi’ as options in the Quick Reply go to the advanced settings and under the reply text field add ISO code of respective language.

:::info

ISO code of english is ‘en’ and for Hindi is ‘hi’. Checkout ISO code for different languages [here](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes).

:::

** *Screenshot for quick reply advance settings* **

- Add a text response informing the user that language has been changed successfully. If you don’t provide different text response for language other than english it’ll automatically translate that text response from english to hindi.

- However, it’s good practice to add different responses for each language manually to provide a better user experience.

- To do that, click on response where you want to add responses in different languages. Localization button will appear on the top right corner of the Studio, click on that to add responses in different languages.

** *Screenshot for localization* **

## Exercise 8:  Create Product Details Journey

#### Step 1: Create a Database
- Go to the Data tab and create a database as shown in the screenshot below. Alternatively, you can upload the ** *CSV file(add URL to CSV file)* ** to create the database and populate with the same data.
- To learn more about how to create a database and perform action, checkout this [guide](https://docs.yellow.ai/docs/platform_concepts/data/create-tables)

** *Screenshot of db* **

#### Step 2: Add Utterances
- Just like we saw earlier, add intent and utterance for change language in the NLU tab.

** *Screenshot of product details utterances * **

- Just like we saw earlier, add intent and utterance for change language in the NLU tab.
- Add a Quick Reply response and name it ‘Choose Car’. In the prompt, you can ask the user to select a car model of their choice. Under that, add car model as Quick reply options.
- Make sure that in the ‘Advance Setting’ of Quick reply response you’ve added the car model name in lower under reply text field also.

** *Screenshot of choose car QR advance setting* **

#### Step 3: Using Database Action Node

- Add a Database Action Node. Here we want more information about the selected model. Earlier, we’ve already added the data about all car models in the database. Here, the Database action node will come into picture.  More on that [here](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic#4-database).

- Using the response given by the user, we can search in the database and provide necessary information to the user. In the database node, select the option to ‘Search’ from the dropdown. Earlier, we added the data in the ‘Product’ table, so select the table name ‘Product’ from the dropdown.

- In the ‘product’ table car model name is stored in the product name field. While, the user selected option is saved in the choose_car step. Hence, set the condition as ‘WHERE product_name is VARIABLE choose_car’. 

Again, for more information, check out this guide to learn [how database node works](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic#4-database)


** * Screenshot of database node * **

#### Step 4:
- In the last step, we fetched the information about the product from the database but how do we access it in the studio? Well, it’s stored as variable, which you can access with this convention: {{variables.TABLE_NAME.INDEX.FIELD}}

- For example to access product name from the product table, syntax should be: {{variables.product.0.product_name}} 

- Now, let’s add a text response to show car related information to the user.
Also add a quick reply response which contains more information about the product, add 2 options to Know More about the product & show product catalogue. 

- In the Quick reply advance settings, add URL to redirect users to the website where they can know more about the product and see product catalogue.


** *Screenshot of text response and quick reply* **

## Exercise 9:  Create Test Drive Journey

#### Step 0: Database

- Create a table ‘testdrive’ in the database and add following fields:

Name: String
Email: email
Date: Date
Timing: string
Dealer: string

#### Step 1: Add Utterances

- Just like we saw earlier, add intent and utterance for Test Drive in the NLU tab.

** *Screenshot of Test drive utterances* **

Example utterances:
- i want to ride the car
- possible to test the car
- i want to drive the car once
- please help me with a test drive
- i want to take a test drive
- can you take me on a test drive

#### Step 2: Add Responses

- Ask for the user's name using a Question Prompt and rename the step as ‘name’. To validate the user input, you can also use ‘Name’ Input validator. 

** *Screenshot of question prompt* **

- Now add a text prompt add this phrase in the prompt: 
```
Thanks {{steps.name}}. Nice to chat-meet you. I will need your email ID 📧 as well. Don't worry we won't spam you.
```

- As you can see, we’ve added `{{steps.name}} ` in the phrase, what it does is; it will fetch user input from the `name` step and display it here. Here is how it will look:


** *Screenshot of step name response in try your bot* **

Same can be done for the phone number as well. Don’t forget to use the phone number validator.

- Add a Question prompt to get a suitable date for a test drive. Now add a Quick Reply response to select the preferred time slot on a given date.

** *Screenshot of date & time steps* **

- Now add Quick reply response to select a dealer from the given list of cities. Add another question prompt to get the user address.


** *Screenshot of dealer and address steps* **


- Add a quick reply response to select the car model. Also ask user about the fuel type: Petrol, Diesel or Electric.

** *Screenshot of car model & fuel type* **

#### Step 3: Save Data to the Database
- Use a database action node to push following data we collected in this journey to the database.
    - Name
    - Email
    - Date 
    - Timing
    - Dealer


** *Screenshot of db insert node* **

Finally add a text response to show the submitted details to the user. So, incase there’s any changes required, user can contact the team or submit data again.
Phrase:
```
Thanks for sharing your details with us. 😊
We'll be waiting for you on {{steps.f736f5805cf725c9}}, {{steps.c7d660be4ae51192}} for your favorite  {{steps.car}} 🚘

Customer Details :
Name - {{steps.name}}
Email ID - {{steps.Email}}
Phone - {{steps.Phone}}
Address - {{steps.address}}
Dealer - {{steps.dealers}}
```

- Also add a Quick Reply to redirect user to the following journeys:
    - Product Details
    - Service
    - Test Drive
    - Book Now
    - Contact Us
    - Chat with an Expert

## Exercise 10:  Integrate Business Profile

In these last couple of exercises you must have noticed that, user needs to enter the same data again and again like name, email, phone number. And that sometimes becomes irritating for some users.

To help you with that recently we’ve introduced a new feature called ‘Business Profile’. Here chatbot actually remembers all the data user has entered earlier like:
- Name
- Number
- City
- Country 
- Language
- Email

![](https://media.makeameme.org/created/whats-your-real-5cd45d.jpg)
[Source](https://media.makeameme.org/created/whats-your-real-5cd45d.jpg)

Let’s understand how you can use this feature in your chatbot to make it more human.

- Select any step where you’re taking an input from the user: Question or Quick reply.

- For example, in the ‘name’ step of the Test Drive journey  we’re asking user for their name. Incase they’ve already entered their name in another journey we can just access it from there. To enable that, just click on gear icon in the step, this will open ‘Step Settings’.

- In the step settings, go to ‘Please choose Business Profile field’ and select appropriate field; here it would be ‘name’.

- Do the same for all journeys where you’re asking for the user's name as well as other fields also. 

So next time when a user comes back, all they need to do is enter their name and the rest of the fields will be filled automatically. Is that amazing?


