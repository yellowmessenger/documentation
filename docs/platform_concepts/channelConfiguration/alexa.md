---
title : Alexa
sidebar_label : Alexa
---

Integrating Amazon Alexa with the Yellow.ai bot enables businesses to build voice-enabled experiences for their customers. This integration allows users to interact with the bot using Alexa-powered devices, offering a hands-free, conversational interface for customer support, information retrieval, and task automation.



 Alexa skill consists of two components:
 
 1. [Voice User Interface (VUI)](https://developer.amazon.com/en-US/docs/alexa/custom-skills/define-the-interaction-model-in-json-and-text.html): This is where you define how to handle a user's voice input. 
 2. [Amazon Developer Portal](https://www.amazon.com/ap/signin?openid.pape.preferred_auth_policies=Singlefactor&clientContext=133-4657237-7550651&openid.pape.max_auth_age=7200000&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2Falexa%2Fconsole%2Fask&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_dante_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&#/skills): The backend logic on the Yellow.ai [Platform](https://app.yellowmessenger.com) that determines bot responses.

## Setting up Your Alexa skill in the Developer Portal


1. Login to your [Amazon Developer Portal](https://developer.amazon.com/).

   ![](https://i.imgur.com/b7OXjkh.png)

2. Navigate **Developer Console** and click **Alexa** > **Alexa Skills Kit**.

   ![](https://i.imgur.com/N0jmyTl.png)


4. Create Alexa Skill
   1. Click **Create Skill** to begin with creating a new Alexa skill. 
   ![](https://i.imgur.com/op9tu8H.png)
   2. Build a skill using the instructions provides on [Alexa Documentation](https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html).
   ![](https://i.imgur.com/9JEYmDM.png)
   3. Use the Custom Interaction Model and set the primary language.
   4. Define Skill information
   * **Skill Type** - Create all skills using the Custom Interaction Model. This is the default choice.
   * **Language** - Choose the first language you want to support. You can add additional languages in the future. For now, set it to English(India).
   * **Name** - This is the name that will be shown in the Alexa Skills Store, and the name your users will refer to.
   * **Invocation Name** - This is the name that your users will need to say to start your skill. We have provided some common issues
developers encounter in the list below, but you should also review the entire [Invocation Name Requirements](https://developer.amazon.com/en-US/docs/alexa/custom-skills/choose-the-invocation-name-for-a-custom-skill.html).
5. Define an Intent for Sending Text to the Chatbot Configure Interaction Model
   1. Click the **Continue with template** to move to the Interaction Model.
   ![](https://i.imgur.com/n3BRd6Z.png)
   2. In the **Skill Builder Checklist**, complete the necessary fields.
   ![](https://i.imgur.com/xPAc74n.png)
6. Create a Custom Slot Type
   1. Navigate to Slot Types (0) from the menu.
   2. Click **ADD+** to create a new slot type.
   3. Name it *FreeText* and provide common utterances.
   ![](https://i.imgur.com/mRVu5Un.png)
   4. Enter 10-15 common utterances that users might say to the chatbot.
   ![](https://cdn.yellowmessenger.com/c0lmdBuIy1Xl1612448182867.png)
7.  Define an Intent for Sending Text to the Chatbot
   1. In the **Intents** section, click **ADD+** to create a new intent.
   2. Name the intent *RawText*.<br/>![](https://cdn.yellowmessenger.com/esWT9Lo71fif1612448167000.png)
   3. Select "RawText" from the left panel and navigate to Intent Slots on the right side.
   4. Create a new intent called **RawText** and add an intent slot **RawTextData**, linking it to the **FreeText** slot type. 
   5. Define sample utterances such as `{RawTextData}` to send raw user input to the backend. <br/>![](https://cdn.yellowmessenger.com/Kq4wSatBWxlW1612448343229.png)
8. Build & Configure the Model
   1. Click **Build Model** in the top menu.
   2. Once the model is successfully built, go to Configuration.
   3. Select Endpoint from the menu.
   4. Choose HTTPS as the Service Endpoint Type.
   5. Enter the following URL in the Default Endpoint: `https://cloud.yellowmessenger.com/integrations/alexa/getResponse`<br/>![](https://i.imgur.com/VHhWC15.png)
9. Set Up Permissions & SSL Certificate
   1. If your skill requires device location access, refer to Amazon's Device Address API. [Click for more details](https://developer.amazon.com/docs/custom-skills/device-address-api.html)
   2. Under SSL Certificate Settings, select the second option as shown in the reference image.

## Link Alexa to Yellow.ai Bot
   
1. On your Alexa Developer Console  Navigate to Skill Information and copy the Application ID (e.g., amzn1.ask.skill.111ffc3d-229f-46f7-b537-0c19bf89aca2).
2. Open the Yellow.ai Cloud Platform and go to **Extensions.** > **Channels** and select **Alexa**.
   ![](https://i.imgur.com/j856d0L.png)
3. In Alexa skill ID, enter skill ID (example: mzn1.ask.skill.111ffc3d-229f-46f7-b537-0c19bf89aca1).
   <img src="https://i.imgur.com/FxoJS8Q.png" width="60%"/>
4. Click **Save**.
   ![](https://i.imgur.com/NLWTDE3.png)





