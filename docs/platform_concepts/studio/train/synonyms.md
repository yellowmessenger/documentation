---
title: Synonyms 
sidebar_label : Synonyms
---

Synonyms are used to understand user inputs by recognizing different ways users might express the same intent. By mapping synonyms and its abbreviations to a specific intent, the bot can accurately interpret different ways of a query and provide relevant responses.

For example, for ordering spectacles through bot, you can have synonyms like 'Specs', 'Shades', and 'Goggles'. Training the relevant intent with these synonyms enables the bot to trigger the desired flow whenever users type these terms or any other synonym associated with ordering spectacles.

## Add synonyms

In order for the bot to understand the user query and provide relevant responses, you need to add the synonym name and the synonym or abbreviation and train the bot.

Before adding synonyms, ensure you have:

1. Created a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) for your use case with the required [intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#23-add-intent) and [utterances](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance). 
2. [Trained](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#3-train-intents) your intents.

To add synonyms, follow these steps:

1. Go to **Studio** > **Train** > **Synonyms**.

     ![](https://imgur.com/5QaAHea.png)

2. Click **+ Add new synonyms**. 

   ![](https://imgur.com/5TM6MXz.png)

5. In the **Synonym name** field, add the name of your synonym. In the **Synonym or abbreviation** field, enter the similar words, separated by commas.

   <img src="https://imgur.com/tGrAVzD.png" alt="drawing" width="50%"/>

4. Click **Add**.

* This will add the Synonym to the bot.

5. Go to **Intents** and click the intent that will trigger the respective flow, and click **Train intents** to train the intent with the added synonym.

   ![](https://i.imgur.com/sztife2.png)

### Edit synonyms

You can edit a synonym name along with its associated words or abbreviations.

To edit synonyms, follow these steps:

1. Go to the added synonym, click on the more options icon, and click **Edit**.

    ![](https://imgur.com/bt8Zo6o.png)
    
2. Edit the **Synonym name** or **Synonym or abbreviation** as needed, and click **Save**.

     <img src="https://imgur.com/SN5aOZW.png" alt="drawing" width="40%"/>
     
### Delete synonym

When the added synonym becomes irrelevant, inaccurate, or redundant, you can delete it.

To delete a synonym, follow these steps:

1. Go to the added synonym and click on **more-options** > **Delete** icon.

    ![](https://imgur.com/j9QlA5P.png)
    
2. A confirmation message is displayed, click **Delete** to confirm the deletion.

   <img src="https://imgur.com/Kp05yOP.png" alt="drawing" width="50%"/>

         
## Test your synonyms

Test your synonyms and abbreviations to ensure they are identified correctly by the bot.

You can test your synonyms via:

* [Tools](#test-synonym-via-tools)
* [Flows](#test-the-synonyms-via-flows)

### Test Synonym via Tools

1. Go to [tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot).

    ![](https://imgur.com/1Cj8Gnq.png)
  
2. On the **Test your bot** tab, enter the synonym that you want to test.
3. Enable the **Verbose** toggle button.

    <img src="https://imgur.com/dZDN4NP.png" alt="drawing" width="70%"/>

4. Click on the **Send** icon.

* A JSON response will be generated at the bottom of the page.
   You can see the added synonym under `processed_text`.

    <img src="https://imgur.com/lH7n3n6.png" alt="drawing" width="70%"/>

### Test the Synonyms via Flows

You can test your flows to check whether the bot is recognizing the synonyms. To know more how to test your flow, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-3-test-a-specific-flow).

   <img src="https://imgur.com/ihcpSxd.png" alt="drawing" width="40%"/>





