---
title: Build a Bot with Yellow.ai
sidebar_label: Step by Step Guide to Build a Bot 
---

This is a step by step guide to help you understand yellow.ai platform and build your very own bot.
As we proceed, to learn more, you can gets your hands on our detailed [Guides](https://docs.yellow.ai/docs/cookbooks/getting_started).

:::info
Here is a walkthrough of our platform.

<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/w80U82cU0l0" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen="True"></iframe></p>
:::




To get started, visit our official website (https://cloud.yellow.ai/ ) and **sign up or sign in** with your Email.

![](https://i.imgur.com/dc5NS91.png)

Watch how to create a bot project.
<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/LaeNb_IV-UE" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen="True"></iframe></p>

    
:::info
Get live sessions on how to create your own bot using yellow.ai by signing up to our free academy training: https://academy.ascend.yellow.ai/
:::


## 1. Prerequisites 


### 1.1 Understand Your Use Case 

Our platform yellow.ai assists you to build virtual assistants(bots) for various use cases. Most common use cases are: 
* Lead Generation
* Connecting a user with a live agent
* Automating responses FAQs
* Accommodating a complete e-commerce experience
* HR automation and many more!

Having a well defined use-case will make your bot building journey simpler and fun. For this, we recommend you to establish a flow that matches your primary use-case.



---

Attached below is a simple flowchart (for ordering a phone) that we will use as a reference to walk you through the bot building process. 


![](https://i.imgur.com/axuVMs9.png)


---

### 1.2 Get Familiar With the Bot Terms 

After signing into our platform, click **Create New Project**.

If you land on the **Overview** page, it means that you have a project created. 
Click the dropdown icon next to the **Overview** label on the top left corner of the page, you will be able to see various modules available on the platform. 

![](https://i.imgur.com/eKsXp8v.jpg)


Functionalities of the modules are listed below: 



| Name     | Description                                                                                                                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Studio   | The yellow.ai Studio is the place to build those intelligent bots to power your business using conversational AI. To know more, click **[here](https://docs.yellow.ai/docs/platform_concepts/studio/overview)**.             |
| Inbox    | Bring a human touch with the help of the Inbox module for your agents to take up conversations beyond the automation. More on that **[here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox)**.                    |
| Insights | Watch how the conversations unfold and which journeys you're taking your users through the most using our Insights module. Check out the docs **[here](https://docs.yellow.ai/docs/platform_concepts/growth/growth)**. |
| Engage   | Make use of our world class automation to run marketing campaigns across 20+ channels.**[here](https://docs.yellow.ai/docs/platform_concepts/engagement/engage)**.                                                           |
| Channels | The bots you build can be plugged across various applications. A list on all the channels available can be found **[here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration)**.      |
|      Integrations    |                                                                                                                   The yellow.ai Studio is the place to build those intelligent bots to power your business using conversational AI. To know more, click **[here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/razorpay)**.                                                                                                           |

## 2. Bot Building

Let us get started...

On the **Overview** page, click **Studio**. 
You will be directed to the **Studio** page where you can play around with our cool features!

![](https://i.imgur.com/R3t2nXx.png)


---

Follow the steps below to create your own bot: 
### 2.1. Configure the welcome message

The message displayed to the users when the bot is opened is termed as the welcome message. 
It can be as simple as “Hey! How can I help you today” or “Welcome to the Phone company. I am Lana and I will be assisting you with your concerns. Please type in your name to get started.”
* It is important to keep the **[conversational design](https://docs.yellow.ai/docs/platform_concepts/studio/overview#1-design-your-conversations)**  aspect in mind right from the opening message as you build the flow. 
* This message can be configured by clicking the **Welcome Message** button. 

* Select **Click here to Add New Response** button or edit the existing response displayed by default. Here, new text/ button can be added and the flow can be triggered.

![](https://i.imgur.com/hceA8s2.png)


### 2.2. Set up a Flow/Journey

The words Flows and Journeys are used interchangeably throughout this documentation, it stands for the actual customer journey/ path we’d like our end users to go through. 

A more elaborate description can be found **[here](https://docs.yellow.ai/docs/platform_concepts/studio/journeys/)**..
* To create a flow, click the dropdown **FLOWS** in the middle of the screen and select **+ CREATE FLOW**.

![](https://i.imgur.com/bjIlt6H.png)




### 2.3 Add Nodes

Once that the flow is created, you will be directed to a canvas from where the nodes can be added. Each node is a point of a flow. 

In the below flow, the rectangular boxes (Start, New Step, SAP Success Factors, etc.) are the nodes.

![](https://i.imgur.com/HzjArCC.jpg)


Nodes can be added using two different methods, listed below: 
1. By clicking on the black dot in the center of any node, a popup window will be displayed with the available nodes. Select the type of node you require for your flow. 

![](https://i.imgur.com/9Nc8ztc.png)


2. By clicking on any 4 of the icons on the left which represent each category of nodes. From these popups, you can drag and drop the nodes to your canvas. 

![](https://i.imgur.com/uGOUyyI.png)

For example, from **Prompts**, if you select **Name**- your bot will ask the user for their Name after getting started. Similarly, from **Actions**, if you select **Send OTP**, generated OTP will be sent to the email ID or the Phone Number. You can find more information on the nodes **[here](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages)**.

Flow of the below use-case consists of Quick-Repy, Email, DB and Text nodes.

![](https://i.imgur.com/sjFlMBv.png)



### 2.4 Create and Store Values in Variables

**Variables** are used when you want to save the user response to any of the questions asked during the flow. 

There are different types of variables, some are pre-made for every bot and others are customizable. 
Custom variables can be added by you based on your needs. All the information you need on variables can be found **[here](https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/)**.

Attached below is an example of custom variable that is used to store the user's query.

* Open the **Variables** prompt by clicking the Variables icon on the left.

![](https://i.imgur.com/GqeQ2oL.png)

* Click **+Add Variable**. 

![](https://i.imgur.com/n7wpkek.png)

* Add **Variable** and continue creating with the respective data type. Once the **Variable** has been created, you can access it anywhere on the bot builder. 


### 2.5. Handle User Response

Often times, instead of going with the flow that is expected, users type in queries that don't really resonate with the rest of the flow. 
In such cases, we have a robust **Natural Language Understanding(NLU**) engine which can be used to train the bot with commonly asked phrases based on which flows can be triggered.

* This can be viewed and edited on the **NLU page**. Click **+ Add New Intent** to train the bot to respond accordingly. 

![](https://i.imgur.com/y8g93H7.jpg)

> Note: You must always have a minimum of 2 trained intents.


Our documentation does a deep dive on **how to setup intents, utterances and entities** along with best practices. You can find them **[here](https://docs.yellow.ai/docs/platform_concepts/studio/natural-language-understanding/intents)**.

Attached below is an intent to identify and initilise a flow when a user wants **to place an order**.


![](https://i.imgur.com/5HMaYEi.png)


### 2.6. Trigger a Flow
It is considered as a good practice to build smaller flows and direct the users from one flow to another. For this, you will have to trigger the flow. 

There are two methods to trigger a flow: 

1. Using the [Trigger Journey node](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic/#trigger-journey). For example, in the below flowchart, PlaceOrder flow has been triggered.

![](https://i.imgur.com/eK9A2xw.png)

2. Another way to trigger a flow is based on the intent.

![](https://i.imgur.com/84CPWK4.png)


### 2.7. Store Records in a Database

All the details and interactions with the bot can be stored in the database that can be designed to fetch the required details. 

* Start by creating **Tables** on the **Database** page. Learn more **[here](https://docs.yellow.ai/docs/platform_concepts/data/create-tables)**.

![](https://i.imgur.com/ZEXZO5P.png)

* On the Database Node, add the fields you want to track by clicking on **+Add button.** 
![](https://i.imgur.com/RfSElwI.png)

* Make use of the [Database Node](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic/#database) to perform all the operations you intend to carry out like Insert, Update, Search and Count.

Attached below is the screenshot of the data collected by the bot for the fields assigned to it. 

![](https://i.imgur.com/n7L3hig.jpg)




## 3. Add Ons

### 3.1 Integrations
For certain use-cases, there might be dependencies on modules which are not a core part of our platform. Such dependencies can be enabled with the help of out-of-the-box integrations.

![](https://i.imgur.com/RgGBzsQ.jpg)


In this example, we'll be using a [Google Sheets integration](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/google-sheets) to push all the data into a Google Sheet using the out of the box support.

![](https://i.imgur.com/n20AItW.jpg)


You can search for the integration you are looking for  at docs.yellow.ai.

![](https://i.imgur.com/ZooBWqK.png)



### 3.2 Marketplace

**Marketplace** has pre designed templates of the most commonly used bots. 
For most use-cases and integrations, templates of user-journeys are available on this page. They can be further modified based on your needs. 

Explore **Marketplace** by clicking on the Marketplace icon on the top-right corner of the **Overview** page. 

![](https://i.imgur.com/uQjekjD.png)



---

### 3.3 Live Customer Support Agents
By using the **Chat with Agent template** you can direct your users to your agents.

![](https://i.imgur.com/MdTCVFM.jpg)


For example, when the **Chat With an Agent** template is selected, the bot is pre-populated with all the necessary intents and flows needed for you to plug and play with. You can see this flow on the **Studio** page. 

![](https://i.imgur.com/5udk4We.png)

Interactions here can be monitored on the **Inbox** module. Learn more about Agents and Inbox module **[here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox)**.

![](https://i.imgur.com/tb68Mze.jpg)

#### **Studio**:
The yellow.ai Studio is the place to build those intelligent bots to power your business using conversational AI. To know more, click **[here](https://docs.yellow.ai/docs/platform_concepts/studio/overview)**.

---

### 3.4 Channels 

**Channels** module enables you to engage your customer on external channels like Emails or SMS.
Our bots can be setup across 20+ channels to give you the exact same experience of a web based chatbot — whether it's on Whatsapp, SMS, Instagram, or Slack.

![](https://i.imgur.com/2r0259F.jpg)


A detailed description on how to configure your channel can be found **[here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound)**.

## Building the bot
### Step 1: Configuring the welcome message
As we build out the flow, it's important to keep the **[conversational design](https://docs.yellow.ai/docs/platform_concepts/studio/overview#1-design-your-conversations)** aspect in our mind right from the opening message. This can be configured by 

- Clicking on the Welcome button 
- Changing the text/ Adding buttons / Triggering a flow

![](https://i.imgur.com/hceA8s2.png)



### Step 2: Setting up a flow/journey
We use Flows and Journeys interchangeably throughout our documentation and it stands for the actual customer journey/path we'd like our end users to go through. A more elaborate explaination can be found **[here](https://docs.yellow.ai/docs/platform_concepts/studio/journeys/)**.

To create a flow, you can click on the dropdown **FLOWS** in the middle of the screen and click on **CREATE A FLOW**.

![](https://i.imgur.com/bjIlt6H.png)


### Step 3: What are nodes
Now that a flow has been created, you have this open canvas to add nodes (the little box called start is a node). You can add nodes in two ways:-
- Click on the black dot in the center of a node

![](https://i.imgur.com/9Nc8ztc.png)


- Click on any 4 of the icons on the left which represent each category of nodes

![](https://i.imgur.com/uGOUyyI.png)


You can find more information on the nodes **[here](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages)**.

For our use-case, I've built out a flow using the Quick-Repy, Email, DB and Text nodes.

![](https://i.imgur.com/sjFlMBv.png)



### Step 4: How to create and store values in Variables
Let's say you want to ask the user a question during this flow and save their response, you can make use of Variables. We have different types of variables some of which are pre-made for every bot and custom variables that can be created by you. All the information you need on variables can be found **[here](https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/)**.

Here, I've created a custom variable to store the user's query

![](https://i.imgur.com/n7wpkek.png)

![](https://i.imgur.com/vqMbUEj.png)


### Step 5: How do I handle the user responses
Often times, instead of going with the flow that we want to take the user through, the user could type in queries that don't really resonate with the rest of the flow. 
In such cases, we have a robust **Natural Language Understanding(NLU**) engine which can be used to train the bot with commonly asked phrases based on which flows can be triggered.

### 3.5 Whatsapp as a Channel
We have an elaborate guide on the best practices to be followed while setting up the **Whatsapp channel**. To learn more, click **[here](https://docs.yellow.ai/docs/cookbooks/whatsapp-channel/whatsapp-channel)**.



---

**What's Next?**

Jump into Studio and automate your conversations like never before.
Happy Bot building!!
