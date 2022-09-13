---
title: Synonyms 
sidebar_label : Synonyms
---


In this article, you will learn:

1. [What are Synonyms?](#syn)
2. [How to use Synonyms?](#addsyn) 

---

## <a name="syn"></a> 1. What are Synonyms?


**Definition**

Synonyms are words that have the same or almost the same meaning as another word in the same language. For example: 
- **Good**: fine, excellent, great
- **Find**: Seek, search, look for



The platform provides the ability to add multiple synonyms to newly created or existing bots. You can add the synonyms for a word or the set of words for the respective bot. When you enter a synonym in the bot, the bot understands the synonym and automatically converts it to the appropriate word. 


## <a name="addsyn"></a> 2. How use Synonyms? 

:::note

**Prerequisites before adding Synonyms**
1. Create a bot. 
2. Create a [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys) for your use case with required [intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#23-add-intent) with [utterances](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance). 
3. [Train](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#3-train-intents) your intents. 
:::

### 2.1 Use case 

To understand how to use synonyms on the yellow platform, let us consider a bot that suggests birthday presents and lets you order a product of your choice. 
This bot will have to be trained for intents that identify if the bot user is searching for greeting cards or other gifts. Utterances can be added to identify these intents accurately. 

![](https://i.imgur.com/clWvvDk.png)

### 2.2 Add Synonyms 

1. Open **Studio** > **Train** > **Synonyms**.
2. Click **+Add new synonyms**. 

![](https://i.imgur.com/nXajpWV.png)

3. Add **Synonym name** and **Synonyms**. Click **Add list item**.

![](https://i.imgur.com/1rBiAsI.png)


:::note 

You can also add **Abbreviations** in the same manner.

![](https://i.imgur.com/s98g4uG.png)

:::


### 2.3 Test the bot

- Open [tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) and check if your bot identifies the synonyms and abbreviations correctly.

![](https://i.imgur.com/hOvtnVf.jpg)

