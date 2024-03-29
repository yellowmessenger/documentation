---
title : Alexa
sidebar_label : Alexa
---

There are two parts to an Alexa skill. The first part is the [Voice User Interface (VUI)](https://developer.amazon.com/en-US/docs/alexa/custom-skills/define-the-interaction-model-in-json-and-text.html). This is where we define how we will handle a user's voice input. The second part is the actual code logic for our skill. Setting up of the VUI will take place completely in the [Amazon Developer Portal](https://www.amazon.com/ap/signin?openid.pape.preferred_auth_policies=Singlefactor&clientContext=133-4657237-7550651&openid.pape.max_auth_age=7200000&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2Falexa%2Fconsole%2Fask&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_dante_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&#/skills), while
the actual code logic will be written in the [Platform](https://app.yellowmessenger.com).

## Setting up Your Alexa Skill in the Developer Portal


1. Go to the Amazon Developer Portal. In the top-right corner of the screen, click the "Sign In" button.

Use your sign in credentials are as follows -

![](https://i.imgur.com/b7OXjkh.png)

2. Once you have signed in, go to "Developer Console". click the Alexa button at the top of the screen.

![](https://i.imgur.com/N0jmyTl.png)


3. Select "Alexa Skills Kit" Option

4. Select "Create Skill" This will get you to the first page of your new Alexa skill.

![](https://i.imgur.com/op9tu8H.png)


5. Fill out the Skill Information screen. Make sure to review the tips provided below the screenshot.

![](https://i.imgur.com/tKYVUoT.png)


### Skill Information Tips

**Skill Type** - Create all skills using the Custom Interaction Model. This is the default choice.
**Language** - Choose the first language you want to support. You can add additional languages in the future. For now, set it to English(India).
**Name** - This is the name that will be shown in the Alexa Skills Store, and the name your users will refer to.
**Invocation Name** - This is the name that your users will need to say to start your skill. We have provided some common issues
developers encounter in the list below, but you should also review the entire Invocation Name Requirements.

6. Click the "Continue with template" to move to the Interaction Model.

![](https://i.imgur.com/n3BRd6Z.png)


7. Selct each options from skills builder checklist and fill the details for each

![](https://i.imgur.com/xPAc74n.png)


8. On slecting " Intents, Samples, and Slots" you will arrive at a page that looks like below.

![](https://i.imgur.com/mRVu5Un.png)


9. Go to "Slot Types (0)" option from menu. Then Click on ADD+ to add a new slot type.

![](https://cdn.yellowmessenger.com/AemONmPx62621612448145110.png)

10. Create a new custom slot type called “FreeText”.

![](https://cdn.yellowmessenger.com/esWT9Lo71fif1612448167000.png)

11. For the slot values, enter the most likely used utterances for the chatbot. You should enter about 10-15 utterances at least.

![](https://cdn.yellowmessenger.com/c0lmdBuIy1Xl1612448182867.png)

12. It’s time to define the intent that sends the text to the backend of the chatbot. Click on ADD+ in “Intents” category.

![](https://cdn.yellowmessenger.com/PVHhEMMzJMtF1612448209501.png)

13. Add an intent called “RawText”.

![](https://cdn.yellowmessenger.com/SHdxO2bu9PaQ1612448232070.png)

14. Now we have to add something called Intent Slots. These intent slots are unique to intents. We have to add an intent slot called “RawTextData” to the intent “RawText”. Click on “RawText” on the left side of the page under the intents header. Then, on the right side of the page, under Intent Slots, type “RawTextData” and click “Add”.

![](https://cdn.yellowmessenger.com/dUbEFzJGrM7L1612448303103.png)

15. You have to set the slot type of the newly created intent slot to “FreeText”

![](https://cdn.yellowmessenger.com/kUF1An0sLMzU1612448320844.png)

16. Now we have to set up the sample utterances for this intent. However, we will only set up one sample utterance, which is going to be the intent slot that we just created. The result of this step will be that whatever is uttered to the Alexa device, will be sent as a raw text to the backend. Type {RawTextData} in the field and press enter.

![](https://cdn.yellowmessenger.com/Kq4wSatBWxlW1612448343229.png)

17. Your VUI is all set. It’s now time to build the model that you’ve just created. In the top menu, click “Build Model”.

18. Now that your model has been built, it’s time to configure it with the backend. In the top menu, click “Configuration”.

19. Go to "endpoint" option from menu. Choose HTTPS as Service Endpoint Type and enter the following URL in Default - https://cloud.yellowmessenger.com/integrations/alexa/getResponse

![](https://i.imgur.com/VHhWC15.png)



20. The same page also contains permissions below. If your skill requires the address of the device, check out the following resource - https://developer.amazon.com/docs/custom-skills/device-address-api.html

21. you need to set up the SSL Certificate settings. Choose the second option. As shown in image at point 19

22. Your VUI is ready. Now it’s time to link it to the backend chatbot. On the left menu, navigate to “Skill Information. Copy the Application Id. (It may look like this - amzn1.ask.skill.111ffc3d-229f-46f7-b537-0c19bf89aca2) Open BotPlatform and navigate to the admin of the desired chatbot that you want to link. In the left menu, click on Channels. Choose Amazon Alexa Skill and paste the Alexa Skill ID that you had copied earlier.

23. Your Alexa skill is good to go. Play around. Have fun.