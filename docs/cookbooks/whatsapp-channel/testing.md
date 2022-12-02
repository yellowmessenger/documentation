---
title: WhatsApp Testing
sidebar_label: WhatsApp Testing
---

We have added a new feature where you can test your bot on whatsapp as you are building it. There are two scenarios in which you will be testing your bot. 
1. Testing when your **WhatsApp number is not connected** to Yellow.ai 
2. Testing when your **WhatsApp number is connected** to yellow.ai

We will be looking at both of these scenarios and will guide you on how to test your bot.

## 1. WhatsApp number not connected.

You can now test your bot on whatsapp even when your number is **not connected** to yellow.ai. You can perform this testing in any environment and within builder itself. Although few features wont be available in this testing environment, as mentioned later in **limitations**.

#### Step 1 - Go to studio section -> Click on flows - > select any flow.

![](https://i.imgur.com/oDxFYM6.jpg)

#### Step 2 - Select channel -> WhatsApp -> Click on the collapsable chat panel on the right corner.

![](https://i.imgur.com/JVIcSRC.jpg)

#### Step 3 - Scan the QR Code and voila your bot is connected .

![](https://i.imgur.com/x4vtjef.jpg)

**Note:**

* You can toggle between the channel directly from the collapsable panel too.
* You can also connect your whatsapp number to yellow.ai by clicking on **Add WhatsApp channel**

### Limitations 
It has to be noted that all the feature testing wont be possible until and unless you connect your whatsapp number to yellow.ai platform. 

Following features wont be available when your whatsapp number is not connected to yellow.ai - 
* Notifications
* Catalogues
* Events
* Live Agent support

## 2. Whatsapp number is connected 

Once your whatsapp number is connected with the yellow.ai platform you can follow the below steps to test your bot.
You can test your bot in any environment and within builder itself.

#### Step 1 - Go to studio section -> Click on flows - > select any flow.

![](https://i.imgur.com/oDxFYM6.jpg)

#### Step 2 - Select channel -> WhatsApp -> Click on the collapsable chat panel on the right corner.

![](https://i.imgur.com/JVIcSRC.jpg)

#### Step 3 - Choose the connected WhatsApp number -> Scan the QR code. Your bot is now connected

![](https://i.imgur.com/IUhkXNu.jpg)

* You can also copy the test link and test the bot on whatsapp web.
* You can also add a **tester number**, the steps for the same are mentioned in the below section.
### Adding a tester number

In scenarios where your bot is live and is connected to a WhatsApp number but a developer wants to test out the bot in development environment, he can use this feature to test out the dev environment without affecting the live environment.


#### Step 1 - Go to Channels

![](https://i.imgur.com/6JVW1K4.png)

#### Step 2 - Click on WhatsApp -> Click on Edit.

![](https://i.imgur.com/qngg3RV.png)

#### Step 3 - Scroll down -> Enable development mode.

* Once you have enabled it, add bot ID that you want to test out in development environment.
* Add the developer WhatsApp phone number i.e the number of the developer who will be testing out the bot.
* Click on Save/Update.


![](https://i.imgur.com/DZTyDJX.png)


Now when you ping on the whatsapp number connected to the bot from developer WhatsApp phone number, development bot will respond rather than live bot. So you can test your development bot also.

**Note:**
* Notifications triggered from development environment's engage section will also work for the development mode connected WhatsApp number.
* Orchestrator bot wont trigger default flows.