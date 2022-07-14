---
title: Intents
sidebar_label: Intents
---

NLU deals with training machines to read and converse in any human language. Making AI Models understand nuances of language is very complex problem. Thankfully, using Linguistic Semantics i.e. by creating a structured format of sentences, models are able to percieve natural language with good accuracy.

In this doc, following topics will be covered:
- What is evaluate confidence?
- Sample utterances
- How many utterance to add?

> Note - 
 - **Linguistic** : study of language
 - **Semantics** : study of the meaning of words, phrases or sentences i.e. how arranging group of words in particular fashion to derive meaning.

Question is - how does knowledge of word meanings or sentence formation help in better training AI Models?

Fortunately, solution is easy to gauge by learning about a few key concepts - **Intents**, **Entities** and **Context**.

Any sentence can be broken down into smaller components - 

![](https://cdn.yellowmessenger.com/7M9C8YcyuCJk1626109495211.png)

**Intents** - These are the literal meanings or core objective of any sentence like in the above example it is booking a flight.

**Entities** - These are facts or additional information that adds meaning to sentence, for example Delhi, New York and 11th August.

**Context** - In a day-to-day conversation, this generally refers to the underlying meaning of previous few exchanges. For Example - if a person is asking repeated questions about a product and says "Buy IT" , the IT here refers to the product.

## 1. Usecase 

In this guide, we will be building an intent for Jimmy's cafe. You can consider the following scenario for your bot.

> *You are the owner of Jimmy's cafe and are setting up a bot for your website. Your customers would like to enjoy the simplicity of ordering a coffee through your bot. For this to happen, you want your bot to understand the different ways a customer may ask to place an order so that the [flow](https://docs.yellow.ai/docs/platform_concepts/studio/journeys) you built gets triggered.*

## 2. Intent Training 

Follow the given steps to train your intents: 

### Set up a flow/journey 

Before you train your first intent, create your first [flow](https://docs.yellow.ai/docs/platform_concepts/studio/journeys/) in the studio module of the platform. 

To know more about setting up your first bot [click here](https://docs.yellow.ai/docs/platform_concepts/getting-started#step-by-step-guide-on-how-to-get-started-with-yellowai)


### Open Intents Page

After creating the required flows, click on **Intents** in the **NLU** dropdown.

![](https://i.imgur.com/Eh21nPG.png)


### Add Intent

There are several ways in which a customer would like to  place an order for a cup of coffee:
* Place an order
* I want to place an order
* Place order, and many more...

You can group all these statements in an intent called **order**. 

To add a new intent, click on **+ Add new Intent** button and manually add the first Utterance.

![](https://i.imgur.com/AnO2L8s.png)

### Add Utterance

Once you have created an intent, add utterances to the intent. Utterances are phrases or queries that users may type in the bot hoping that the bot would understand. 

There are two ways to add Utterances to an intent:

#### 1. Add Utterance Manually

While adding utterances manually to your intent, you do not need to pay attention to the case of the utterance, the bot will consider all such scenarios.

Type in your utterance and click on add to add the utterance to an intent.

![](https://i.imgur.com/N7S5mO5.png)

#### 2. Use Suggested Utterance

Yellow.ai has data collected from over 100+ bots. This data is used to curate the suggested utterance section. In this section, you can see phrases similar to the first utterance you added. 

The refresh button will allow you to access a fresh batch of utterances every time you click on it. You may add a few utterances by clicking the **'+'** sign next to them or add all of them by selecting the check box next to 'Suggested utterances'.

![](https://i.imgur.com/YQ9p7HK.png)

This would save you the effort of thinking of phrases and help you create intents in minutes.

### Train Intents

Finally, all you need to do is click on **Train Intents**.

You can train the intent after adding 2 utterances, but it's recommended to train your intent after adding at least 15 utterances. 

![](https://i.imgur.com/Rh5BkD1.png)

:::info
To know more about best practices [**click here**](https://docs.yellow.ai/docs/platform_concepts/studio/natural-language-understanding/intents/#utterance--journey-best-practices).
:::
#### Change the Number of Epochs

You can increase the number of epochs for training your intent. The number of epochs is set to 20 by default. However, they could be a deciding factor when it comes to underfitting or overfitting the model.

![](https://i.imgur.com/EzsE4ZB.png)




### Connect to Bot

Now that you have trained your intent,  it is time to connect it to your bot. You have to connect the flow you built to the intent '**Order**'.

To do this click on the **Start Trigger** and configure the intent to the node. 

Click the drop-down and select ‘#order’ intent.

![](https://i.imgur.com/arEPFgW.gif)


Every time a user asks a query similar to the utterances within 'order' the flow you created would get triggered.

:::success
Congratulations! You trained and connected your first intent!:tada::tada::tada:
:::


### Testing

Once you have trained your intent you can test it for the results. There are two ways to test your intent. 

#### 1. Test the Bot

To test your bot you can follow these steps:

* On the studio page, click the right panel to test your bot.
* To test your intent, type "Place an order" in your bot.
* You will see that your flow gets triggered.

![](https://i.imgur.com/WqSgkzc.gif)



#### 2. Test Your Intent
 
To see what response is generated by the model when a user types a query. Click on [Tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools) and the section 'Test your bot'.

![](https://i.imgur.com/I8iUEwt.gif)

You can test how confident your bot is about a phrase and whether it can identify the intent you just built.

```json=
{
  "text": "place order.",
  "intents": {
    "order": 0.999
  },
  "global_model": {},
  "intent": "order",
  "confidence": 0.999,
  "global_entities": [],
  "entities": {}
}
```
 
As you can see my model understands that the phrase is a part of the intent 'order' and is completely confident about it. 

### Generate Utterance Report 

For a better understanding of your intent, you can generate an utterance report after the intital NLU is set up on a monthly basis.

The report will give you insights into the following:

#### 1. Conflicts within Intents and FAQs
Let's say that you have an intent to Welcome a customer. You add two utterances:
1. Hi
2. Hiii

The report would point out the relation between the two utterances as a conflict as they have high similarities. 

To dismiss this conflict you can delete one of the utterances.




#### 2. Conflicts across Intents and FAQ's
Let's say that you have 2 intents in Jimmy's cafe and you want to trigger 2 different flows for 2 different varieties of coffee you serve at the cafe.
1. Coffee 1
2. Coffee 2

You add an utterance "Order Coffee" in both the intents. 

This would result in a 100% similarity between both the intents and would confuse the bot on which intent to pick and which flow to trigger. 

This conflict can be resolved by either deleting the intent or by deleting a similar utterance. 

To learn more about generating an utterance report [click here](https://docs.yellow.ai/docs/platform_concepts/studio/natural-language-understanding/intents/#understanding-confidence-and-utterance-report)




### Utterance & Journey Best Practices:


| DONTs ❌ | DOs ✅ | 
| -------- | -------- | 
| Do not add utterances in which the only variation is Upper Case/Lower Case|Do add at least 15-20 utterances per journey|
|Do not add utterances in which the only variation is Name, Date, City etc|Do ensure that there are equal number of utterances in each journey |
|Do not create multiple journeys which have similar purpose |Do merge journeys that are subsets of other journeys|
|Do not overfit the model while training |Do use the didYouMean (suggestions) feature extensively|
|Do not add utterances if a journey will only be triggered through 'Trigger Journey'|Do minimize False Positives |
||Do add abbreviations/shortforms in the “synonyms” section | 
|Do not add single words as utterances|Add complete sentences|

- #### Do not add utterances in which the only variation is Upper Case/Lower Case

**Wrong** ❌  
```
apply for leave

Apply for leave

apply For Leave

APPLY FOR LEAVE
```
**Correct** ✅

```
please apply for leave

can you please apply for leave?

how do I apply for leave?

procedure to apply for leave
```
This will make the model overfit and not learn the underlying sentence structure resulting in bad performance. 

- #### Do not add utterances in which the only variation is Name, Date, City etc

**Wrong** ❌  
```
apply for leave on 23rd Jan

apply for leave on 24th Jan

apply for leave on 5th Jan
```
**Correct** ✅

```
please apply for leave on 23rd Jan

can you please apply for leave tomorrow?

how do I apply for leave?

procedure to apply for leave
```
**Wrong** ❌  
```
schedule meeting with John

Schedule meeting with Adam

Schedule meeting with Ram
```
**Correct** ✅

```
schedule meeting with John 

please block Adams calendar tomorrow for a meeting

sync up with Ram on 3rd Jan
```
- A few utterances (2-3) like the ones mentioned below are ok but ensure that there are other utterances that show the different variations in sentence structure 

    - apply for leave tomorrow 
    - apply for leave on 3rd 

- #### Do add at least 15-20 utterances per journey
* The minimum number of utterances in each journey heavily depends on the complexity of the bot (number, type of journeys and quality of the utterances)
* More utterances are always better especially when there are less than 10 journeys.

- #### Do ensure that there are equal number of utterances in each journey 

**Wrong**  ❌
```
Apply Leave Journey - 50 Utterances

Leave Balance Journey - 2 Utterances

Schedule Meeting Journey - 30 Utterances
```
**Correct** ✅

```
Apply Leave Journey - 50 Utterances 

Leave Balance Journey - 50 Utterances 

Schedule Meeting Journey - 50 Utterances
```

* Try to maintain a balance in the number of utterances per journey
* The NLP model is robust enough to handle small variations in the number of utterances (difference of 3-5 utterances) 
* For smaller bots (< 10 journeys) maintaining balance is important to ensure good performance. 

- #### Do not create multiple journeys which have similar purpose 

**Wrong**  ❌
```
Journey: talk-to-agent

Journey: transfer-to-live-chat

Journey: speak-to-agent
```
**Correct** ✅

```
Single Journey: talk-to-agent
```
* Having multiple journeys which have similar utterances will confuse the model since there is a high amount of overlap.
* Merge all these journeys into one single journey

- #### Do merge journeys that are subsets of other journeys

**Wrong**  ❌
```
Journey: apply-for-loan

Journey: apply-for-home-loan

Journey: apply-for-personal-loan

Journey: benefits-of-home-loan

Journey: benefits-of-automobile-loan
```
**Correct** ✅

```
Journey: apply-for-loan

    Steps: What kind of loan are you interested in?

        - Home, Personal, Automobile

Journey: benefits

    Steps: Which loan would you like to know more about?

        - Home, Personal, Automobile
```

- In the example above ***apply-for-home-loan*** is a subset or part  of the ***apply-for-loan journey***. 
This means that ***apply-for-home-loan*** will have utterances that are very similar to ***apply-for-loan***

    - Eg: “can you please help me apply for home loan?” , “Can you please apply for loan?”

    This will confuse the model during training 

- There are 2 Steps to fix this: 
    -    Move all utterances to the parent journey in this case ***apply-for-loan***
    -    Create a step asking the user for additional details (in this case type of loan)
        *    Another option is to setup entities (eg: type-of-loan - Personal, Home can be a type of entity) within the journey.


- #### Do not add utterances if a journey will only be triggered through Trigger Journey option 
There may be some journeys in the bot that are meant to be triggered only from another journey. (i.e. these wont be triggered by the user’s input)

Eg: Feedback Journey

For these journeys do **NOT** add any user expressions/utterances 
Adding utterances here will unnecessarily increase the complexity of the NLP Model.

- #### Do minimize False Positives 
    * When an incorrect journey is triggered with high confidence it is considered a False Positive.
    * False Positives occur because of overfitting and spoil the customer/user experience
    * These are minimized by following the best practices laid out in this document.
    * If there are a lot of false positives during training (even after checking for overfitting) try raising the minConfidence threshold.
    * The best strategy is to use didYouMean(Suggestions) feature and retrain the bot periodically with the new data.

- #### Do use the didYouMean feature extensively
    * After ensuring that the model did not overfit (no False Positives) the next step is to enable the didYouMean feature
    * When the user’s input is not recognized by the model the didYouMean feature elegantly handles the case as a fallback.
    * This is especially useful in the first few weeks after deploying a bot in production when accuracy may be low. 
        * The self-learning capability allows the bot to improve the confidence of different types of user expressions. 

- #### Do add abbreviations/shortforms in the “synonyms” section 
    - For short forms and abbreviations add all the possible variations in the Synonyms section located under “entities” 
    - The NLP pipeline will check for these abbreviations and replace it with the “full form” before passing it into the ML model which will increase the accuracy 

- #### Do not overfit the model while training

:::info
:pushpin: **Training Checklist**
- [ ] 15-20 Utterances in each journey 
- [ ] Utterances in journeys are varied and unique 
- [ ] Journeys are distinct and conflicting journeys have been merged
- [ ] Model does not overfit (False Positives have been handled)
- [ ] didYouMean (Suggestions) feature is enabled
- [ ] Mininum 2 intents are required to train a bot
:::

### Understanding Confidence and Utterance Report

***Confidence score*** (0 to 1) is a rating generated for every utterance to show how accurate is that utterance in pointing towards the given intent. 
- Once you have trained your bot. Every utterance under the NLU section will generate this confidence. A value between 0 to 1 (1 being good and 0 being bad) will be assigned to every utterance. 
- Any utterance with lower value (lower confidence) will mean that the utterance is bad or does not go with the utterances added in that particular intent. 

![](https://i.imgur.com/Qf1fVKK.png)


:::info
### Generate Utterance Reports :spiral_note_pad: 
Now you can also run **Generate utterance reports** on your bot to evaluate how well your bot utterances are designed. The report will tell you how 'similar' your utterances within an intent and if there are any intents common in between journeys' 

![](https://i.imgur.com/FOl18v1.png)

***Request folks to generate utterance report after initial NLU setup and regularly at least once a month.***
:::


### Testing Utterances

There is an option in the Studio/ Flows section called [Tools](../tools), also available in the NLU section. 

Under tools, you'll see the 'Test your bot' box where you can test your utterances and see the score and intent they are triggering and many more details. 

![](https://i.imgur.com/iZyoZrj.png)
