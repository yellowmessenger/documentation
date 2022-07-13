---
title: Resolving Clash in Utterance
sidebar_label: Utterance Report
---



A bot is trained with multiple custom-intents and entities to get the best result. There might be situations that will confuse the bot if the utterances are not classified correctly while training. These clashes that have resulted due to unclear utterance classification can be resolved by studying the utterance report. In this document you will learn: 

1. How to download an utterance report 
2. How to resolve clashes among utterances 


## 1. Download Utterance Report

1. Open **Studio** > **NLU** > **Intents** , click **Generate utterance report**.


![](https://i.imgur.com/FQMZzGB.jpg)


2. Two reports will be sent to your registered email ID. 

    * Utterances within intents/faqs
    * Utterances across intents/faqs 


![](https://i.imgur.com/Me6LIQ6.png)


> Report for **utterances within intents/faq** highlights similar or extremely diverse utterances that must be edited within an intent/FAQ including clashes due to entity featurisation.

>Report for **utterances across intents/faqs** highlights similar utterances across the journeys, it will recommend you to change any one utterance of the similar pair including clashes due to entity featurisation.

## 2. Resolve Clashes Among Utterances 

Utterance reports sent to your mail ID are used to evaluate how well your bot utterances are designed. You can learn how 'similar' your utterances are within an intent and if there are any intents common in between journeys.

>It is recommended to generate utterance report after initial NLU setup and regularly at least once a month.

### 2.1 Conflicts Within Intents and FAQ's

This report will point the relation between the two utterances as conflict if they have a hight similiarity.
It is a comparasion between utterances of the same intents.

If the similarity is more than 50%, you must go to the respective Intents page and delete one of the similar utterances or rephrase the sentence. 

![](https://i.imgur.com/WCHtIPg.png)

If the similarity is less than 50%, it can be ignored. 


### 2.2 Conflicts Across Intents and FAQ's

This is a comparasion between utterances of the different intents.

![](https://i.imgur.com/h2ESumE.png)

If the similarity is more than 50%, you must go to any of the Intents page and delete similar utterances or rephrase the sentence. 

