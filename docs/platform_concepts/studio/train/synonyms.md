---
title: Synonyms 
sidebar_label : Synonyms
---

Synonyms are words that share a similar meaning or nearly the same meaning as another word in a given language. For instance, in the context of Yellow.ai, synonyms help the bot recognize specific intents and utterances and initiate a particular sequence of actions.

 Let's consider an example where you have a bot for ordering greeting cards. Whenever a user mentions anything related to ordering greeting cards, you want a specific flow to be activated.
 
 By using synonyms, you can add a synonym like 'Cards' and include various words that users might employ when placing an order for greeting cards. Training the intent with the word 'Cards' enables the bot to trigger the desired flow whenever users type 'cards' or any synonym associated with it.

## Add synonyms

**Prerequisites before adding Synonyms**
 
1. Create a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) for your use case with required [intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#23-add-intent) with [utterances](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance). 
2. [Train](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#3-train-intents) your intents. 
:::

3. Go to **Studio** > **Train** > **Synonyms**.
4. Click **+Add new synonyms**. 

   ![](https://i.imgur.com/ORwd0Bv.png)

5. In **Synonym name**, add the name of your synonym, and in **Synonym name or abbreviation**, enter the words similar or that mean as same as the synonym.

   <img src="https://i.imgur.com/gFwsg3j.png" alt="drawing" width="50%"/>

4. Click **Add list item**.
5. Go to **Intents** and click the intent that will trigger the respective flow.

   ![](https://i.imgur.com/sztife2.png)

6. Type the **Synonym nam**e in utterances and click **Train intents**.

## Add abbreviations
 
Follow the above mentioned steps to add abbreviations. 

![](https://i.imgur.com/ORwd0Bv.png)

## Test your synonyms and abbreviations

There are many ways by which you can test your synonyms and abbreviations:

### Tools

Go to [tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) and check if your bot identifies the synonyms and abbreviations correctly.

![](https://i.imgur.com/hOvtnVf.jpg)

### Flows

You can test your flows to check whether the bot is recognizing the synonyms. To know more, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-3-test-a-specific-flow).

![](https://i.imgur.com/G9QGlTm.gif)


