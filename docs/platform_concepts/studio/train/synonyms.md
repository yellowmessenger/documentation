---
title: Synonyms 
sidebar_label : Synonyms
---


Following topics are covered in this document:

* [Synonyms](#hea-0)
* [Add Synonyms](#hea-1) 
* [Add Intent](#hea-3) 
* [Add Utterances](#hea-4)
* [Train Intents](#hea-5)
* [Connect to Bot](#hea-6)
* [Test Intent](#hea-7)


## <a name="hea-0"></a> 1. What are Synonyms?

The platform provides the ability to add multiple synonyms to newly created or existing bots. You can add the synonyms for a word or the set of words for the respective bot. When you enter a synonym in the bot, the bot understands the synonym and automatically converts it to the appropriate word. 

> **Definition**
> Synonyms are words that have the same or almost the same meaning as another word in the same language. For example: 
> **Good**: fine, excellent, great
> **Find**: Seek, search, look for

### Use-case

Consider you are the CEO of NEET Training Institute and want to set up a bot for your website. Here, the students would like to enroll to your institute through the bot. For this to happen, you want your bot to understand the different synonyms to help the students fill in the application so that the flow you built gets triggered.
Before you add Synonyms, you must create your first [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys) in the studio module. To learn more  about setting up your first bot, click [here](https://docs.yellow.ai/docs/platform_concepts/getting-started).


## <a name="hea-1"></a>  2. Add Synonyms 
Consider that you wish to add the synonym ‘Date of Birth’, which is specified as DOB for your bot.

To add Synonyms:

- Open Studio > NLU > Synonyms.

![](https://i.imgur.com/MvU2stC.png)


- Synonyms page is displayed. Click **Add new synonyms**.

![](https://i.imgur.com/6tqmoqG.png)

- Add new Synonyms pop-up box is displayed.

![](https://i.imgur.com/pZHPhq3.png)

- Enter the Synonym name and Synonym or abbreviation. For example, the synonym for the ‘Date of Birth’ is specified as ‘DOB’.  


![](https://i.imgur.com/mwVSGjV.png)


- To add a synonym to the list, click Add list item.
A confirmation message is displayed indicating that the synonyms are successfully added to the bot. The newly created synonym is displayed under the Synonyms List. 
Also, you can add new synonym by clicking the Add new synonyms button corresponding to Synonyms list.

![](https://i.imgur.com/d1tG9KL.png)


> You can also edit or delete the respective synonym based on your requirements.



## <a name="hea-3"></a> 3. Add Intent 

There are several ways in which a student would like to fill the application form:

> 1. Fill an application form with DOB
> 2. I want to fill application form
> 3. To fill application form online and many more.

You can group all these statements in an intent called NEET Application Form.
Consider you want to add NEET Application Form intent to your bot.

To add a new intent: 

- Click + Add new Intent button.

![](https://i.imgur.com/pNRDjrT.png)

- Add new intent pop-up box is displayed.

![](https://i.imgur.com/yTpeqi8.png)

- Enter Intent name and first Utterances. Click Add intent.

![](https://i.imgur.com/e9lzLfR.png)

- A confirmation is displayed indicating that Intent is added successfully.

Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) to learn more. 

## <a name="hea-4"></a> 4. Add Utterance 

After creating an intent, you must add utterances to the intent. There are two ways to add the utterances to an intent. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-utterance). 


## <a name="hea-5"></a> 5. Train Intents

Once you create the utterance, you must train the intents. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#train-intents) to learn more. 

![](https://i.imgur.com/qB7A3Qb.png)


## <a name="hea-6"></a> 6. Connect to Bot

After training your intent, you must connect to bot. You must connect the flow that you have built to the intent 'Application Form'.

- To perform this, click on the Start Trigger and configure the intent to the node.
- Click the Intent drop-down and select ‘#NEET Application Form’ intent,

![](https://i.imgur.com/TsbEslF.png)


- When a user performs a query similar to the utterances within 'Application Form' the flow you created would get triggered.

Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys#5-configure-start-trigger) to learn more about start trigger. 

## <a name="hea-7"></a> 7. Test Synonyms and Intents

After training the intents, you can open tools and test it to view the expected results. You can also verify the accuracy of your bot whether it can identify the synonym you have built.

Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) to learn more. 




