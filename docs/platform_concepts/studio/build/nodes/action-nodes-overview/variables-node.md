---
title:  Variables
sidebar_label:  Variables
---

Variable node allows you to assign static values or capture dynamic inputs during AI agent conversation and store them for later use within the conversational flow. It acts as a memory unit within the conversation, enabling you to retrieve, update, or reference information at different stages of the flow. For more detailed information on variables, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).

Variable node is used when you need to store and reuse data throughout the conversation. 

**Use case**

* **User data storage**: Stores user inputs like names, emails, or selections, which can be used across multiple flows.
* **API response handling**: Stores the response of an API call (example, saving order status) for reference in subsequent steps.
* **Session management**: Using the Variable node to store session-related data like timestamps or flags that track user behavior within the flow.

**Configure Variable node**

1. Add the Variable node where you need to store or manage data in your bot’s flow.

    ![](https://imgur.com/4v80zZ5.png)

2. [Create a variable name](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#create-a-variable) and assign it either a static value or a dynamic value fecthed from user input, another node, or an API response.

* Once the value is stored, reference it in other nodes by using the variable name. You can update the variable's value at any point by reassigning it with new value.

**How to configure Static value**

**Scenario:** A chatbot for a retail store provides information about store hours.

* The static value "9 AM" is predefined and stored in the Variable node during the flow creation. This value will not change unless manually updated in the bot flow.
* When the user asks, "What time do you open?", the bot retrieves the stored value ("9 AM") from the Variable node.

Refer to the following GIF to see how to store the static value:

   ![](https://imgur.com/CefS8fZ.gif)

**How to configure Dynamic value**

**Scenario:** A chatbot collects and stores user information like name and email for future reference.

* Use a Variable at each point where user input is collected (example, name, email).
* Assign each variable a unique name (example, userName, userEmail).
* The value is updated dynamically based on the user’s input, and can be used later in the conversation or for follow-up actions like sending emails or confirming details.

Refer to the following GIF to see how to store the dynamic value:

   ![](https://imgur.com/yVr5s9j.gif)