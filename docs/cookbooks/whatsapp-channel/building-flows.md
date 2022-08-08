---
title: Things To Know While Building Flows On Whatsapp
sidebar_label: Building Flows
---


On WhatsApp, User can build automated flows and use WhatsApp Business API account to connect a number to the bot.

You can design your conversation flows freely in studio like in case of other channels but

**1. Collecting user details became simpler:**

We have a few system variables like:
- ***Sender***: This shows the WhatsApp number of the user
- ***Profile***: Gives user details like name,country of the user to access the name.
                 For example: use {{{profile.name}}}

**2.  Using Channel Filter:**

* If you want to customize your prompt to look or ask different question on WhatsApp than that of web you can use channel filter to set it to WhatsApp and customize accordingly.
* You can use system variable {{{source}}} to get source of users message and using condition node branch flows on basis of channel like web, whatsapp.

**3. WhatsApp reply buttons:**

If you want to give users a button clickable option to choose from, you can use WhatsApp reply button in that case.

Know how to configure WhatsApp reply buttons [here](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages/#whatsapp-reply-buttons)

**4. WhatsApp list:**

If you want to give your user clickable list even on whatsapp to choose from you can use whatsapp list instead of quick reply.

Know more about WhatsApp List [here](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages/#whatsapp-list-prompt)


#### But there are a few limitations:

* Carousel node will not work on whatsapp 
* In date node, the web view will not be available on whatsapp
* Try your bot is not the preview for whatsapp but for web. For whatsapp preview use the demo whatsapp account setup by yellow.ai
* When you configure platform quick replies, they appear on whatsapp as a list of numbered items in text. 
* The current feedback prompt present on platform doesn't work on WhatsApp.


## How to test your WhatsApp bot?

To test your development bot, we have two options available:

**1. WhatsApp Orch Bot:**

If you want to test your bot on whatsApp, you can test that using the test whatsapp account set up by yellow.ai

To access the same:
Go to try your bot click on the redirection link
Under chatbot preview you will find a QR code, scan the same and use it.

But there are a few limitations:
* Push notifications cannot be tested
* Conversation with live agents cannot be tested
* Each bot forgets context after 24 hrs, so in order to restart the conversation send talk to <bot_id> again


**2. Enable development mode:**

1. Go to channel, then WhatsApp
![](https://i.imgur.com/ky5O5eZ.png)
2. Click on edit
3. Click on `"Enable development mode"`
4. Then add your number in `Developer WhatsApp phone number`
5. In `Development bot ID`, choose the stagging bot ID

In this case, when you ping on the whatsapp number connected to the bot from Developer WhatsApp phone number, development bot will respond rather than live bot.
So you can test your development bot also.