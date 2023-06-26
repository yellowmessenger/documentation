---
title : AI Copilot
sidebar_label : AI Copilot
tags: [AI copilot, auto flow creation, GPT-4]
---

Yellow.ai's AI Copilot, powered by GPT-4, simplifies flow creation. Just input your requirements, and our bot generates flows automatically. Say goodbye to manual creation and template downloads. Automate flow generation, save time, and work conveniently.

## How to use AI copilot?

1. Go to **Studio** > **+ Create flow** > **Create with AI Copilot**.

![](https://i.imgur.com/V83Hfi1.png)

2. In **Flow name**, enter a name for your flow.

<img src="https://i.imgur.com/HZLFYW0.png" alt="drawing" width="80%"/>

4. Choose a Category from Category, to create a new category for your flow click **+Create category**.
5. In **AI Copilot**, describe the desired outcome of your flow. This will help the bot in designing the flow tailored to your needs. Click **Generate Description** to let the bot autonomously create a description for you.
6. In Industry, choose the industry your business belongs to and click **Generate**.

Generating a flow typically takes around 3 to 4 minutes. The bot efficiently creates a basic outline of a flow, consisting of [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) and [Message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) nodes. You can then customize this flow to suit your specific use case.

For example, lets say that you have used AI Copilot to generate a lead generation flow. Once the bot has designed the initial flow, you have the flexibility to connect a Database node or API node. This allows you to store the lead information in an external database or CRM system. 

![](https://i.imgur.com/566zaRk.png)

Alternatively, you can also integrate an external CRM software with our platform and utilize it as a storage solution for your data. Click [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview) to know more about our in-house integrations.

## Use cases of AI copilot

| Industry | Usecase                                                | Input required from user                                    | Additional actions to enhance the flow                                                                 |
|----------|--------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Airline  | Booking and managing flight reservations                | Name, email, phone number, origin city, destination city, date | API call to fetch flights, API call to book the selected flight                                   |
|          | Checking flight status and schedule updates             | Name, email, phone, booking reference number                  | API call to get flight status, API call to add email to receive updates                           |
|          | Assisting with baggage tracking and lost luggage claim  | Name, email, phone, baggage request number                    | API call to track status, API call to send lost luggage claim                                      |
|          | Offering personalized travel recommendations            | Name, email, phone, destination & travel dates                | API call to provide recommendation                                                                  |
| Automotive | Scheduling test drives and service appointments         | Name, email, phone, car series, appointment type, date and time | API call to book the service                                                                         |
|          | Assisting with financing and insurance options          | Name, email, phone number, car model, loan option, insurance option | API call to send these details                                                                      |
| Real Estate | Providing information on property listings              | Name, email, phone, property type, budget                     | API call to fetch the required listings                                                             |
|          | Assisting with scheduling property viewings and appointments | Name, email, phone, property type, viewing date               | API call to schedule the meeting                                                                     |
|          | Offering personalized property recommendations          | Name, email, phone, property type, bedrooms, budget            | API call to fetch properties                                                                         |
| Education | Providing information on courses                         | Name, email, phone, selected course                           | API call to gather more course information or DB store to store                                    |
|          | Scheduling demo class for the selected course            | Name, email, phone, course, preferred date of demo, preferred time | API call to schedule / DB to store                                                                   |
|          | Connecting with educators, advisors, and support staff    | Name, email, phone, type of support required                   | API call to raise request / DB to store                                                              |
## What's next?

The following are the set of options we have planned for the next phases of AI copilot.

1. API and DB nodes added automatically, with pre-selected DB action and table.
2. Choose industry, use cases, and prompt options. Usecases will be shown based on industry selection.
3. Generate Intents and Utterances.
4. Quick reply options for subflows.
5. Notifications and auto page refresh after flow creation.