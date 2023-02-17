---
title: Intents
sidebar_label: Intents
tags: [intent detection nlp ,intent extraction nlp , intent in nlp,intent nlp, intent recognition nlp, nlp intent, nlp intent classification, nlp intent extraction, nlp intent recognition, nlp intent recognition python, why is intent important in negotiations nlp, intent identification nlp]
---

The following topics will be covered in this artice,

1. [What are intents?](#intent)
2. [How to add intents and utterances?](#add) 
3. [How to train Intents?](#train)
4. [How to test bots prediction-accuracy?](#test)
5. [How to resolve clashes in intents and utterance?](#clash)
6. [Best practices to create intents and utterances](#bp)

:::info
The words **Flows** and **Journeys** are used synonymously.
:::

------


## <a name="intent"></a> 1. Intents overview

Intent refers to the purpose or goal behind an action or uterance. In the context of natural language processing, it often refers to the underlying intention of a user in a conversational context, such as the intention to ask a question, make a request, or provide information. Understanding the intent behind a user's input is crucial for building effective conversational AI systems.

Knowledge of word meanings or sentence formation help in training the AI Models better with a few key concepts such as **Intents**, **Entities** and **Context**.

For example, any sentence can be broken down into smaller components - 


![](https://cdn.yellowmessenger.com/7M9C8YcyuCJk1626109495211.png)



| **Intents** | **Entities** | **Context** |
| -------- | -------- | -------- |
| These are the literal meanings or core objectives of any sentence like in the above example it is **booking a flight**.| These are facts or additional information that adds meaning to sentences, for example, Delhi, New York and 11th August.| In a day-to-day conversation, this generally refers to the underlying meaning of the previous few exchanges. For Example - if a person is asking repeated questions about a product and says "Buy IT", the IT here refers to the product.     |



On our platform, you can add your **intents** (the intention of the bot users response) and **utterances**(the information that the bot user asks for when this intention is detected). **Train** the model to recognise such sentences. 

---

### 1.1 Zero-shot model 

Yellow.ai DynamicNLP is based on cutting-edge technology, Zero-shot Learning, that will allow you to bypass the tedious, complex, and error-prone process of model training.
Continuous upgrade to the NLP engine helps our Dynamic AI Agents improve the intent performance, which ensures that your customers get accurate responses from day one. Our NLP has “seen” all different syntactic variations of sentences from billions of conversational data. With a better understanding of the context and intention of their queries, your customers enjoy a seamless experience.
You can just add in your intents by following our [Intent naming conventions](#Intn) and train the bot.

---

Even though Zero-shot model does not require manual addition of utterances, we will consider that scenario and discuss  intent and utterances in this document. 

### 1.2 Use-case 

Creating intents for Jimmy's cafe:

> *You are the owner of Jimmy's cafe and are setting up a bot for your website. Your customers would like to enjoy the simplicity of ordering a coffee through your bot. For this to happen, you want your bot to understand the different ways a customer may ask to place an order so that the [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) you built gets triggered.*
> **I want coffee** will be recognized as intent: **#ordercoffee**.
> **I want a croissant** will be recognized as intent: **#ordersnack**.

After creating the required flows, click on **Intents** in the **Train** dropdown. Use the `i` key to access Intents directly from any Studio page. 

## <a name="add"></a> 2. Add intents and utterances  

To add intents and utterances, follow the given steps: 

### 2.1 Create a flow 

A prerequisite to training your bot with the required intents is to have a basic flow ready. Create your first [flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) in the studio module of the platform. 

> Click [here](https://docs.yellow.ai/docs/platform_concepts/getting-started#step-by-step-guide-on-how-to-get-started-with-yellowai) to learn more. 


### 2.2 Open intents page

After creating the required flows, click **Studio** > **Train** > **Intents**. 

![](https://i.imgur.com/5EJzAUi.jpg)

:::tip
You can access Intents using the keyboard shortcut `i`.
:::

### 2.3 Add intent

There are several ways in which a customer would like to  place an order for a cup of coffee:
* Place an order
* I want to place an order
* Place order, and many more...

You can group all these statements in an intent called **order**. 

To add a new intent, click on **+Add new Intent** button and manually add the first Utterance.

![](https://i.imgur.com/aXfco3M.png)

:::info
With “Yellow.ai DynamicNLP”, NLP based on Zero-shot learning we eliminate the need for training the NLP model with utterances. To take advantage of this, follow the guidelines in Best Practices > [6.1 Intent Naming](#Intn) .
:::

### 2.4 Add utterance

 Utterances are phrases or queries that users may type in the bot conversation with an expectation of a response to that exact query. These utterances need to be added to each intent for the bot to identify the intent based on the utterance.

There are two ways to add Utterances to an intent:

#### 2.4.1 Add utterance manually

While adding utterances manually to your intent, you do not need to pay attention to the case of the utterance, the bot will consider all such scenarios.

Type in your utterance and click  **+Add** to add the utterance to an intent.

![](https://i.imgur.com/N7S5mO5.png)

#### 2.4.2 Use suggested utterance

Yellow.ai has data collected from over 100+ bots. This data is used to curate the suggested utterance section. In this section, you can see phrases similar to the first utterance you added. 

The refresh button will allow you to access a fresh batch of utterances every time you click on it. You may add a few utterances by clicking the **'+'** sign next to them or add all of them by selecting the check box next to 'Suggested utterances'.

![](https://i.imgur.com/YQ9p7HK.png)

This would save you the effort of thinking of phrases and help you create intents in minutes.

---

## <a name="train"></a> 3. Train intents

Click **Train Intents**.

You can train the intent after adding 2 utterances, but it's recommended to train your intent after adding at least 15 utterances. 

![](https://i.imgur.com/DCbNCkp.png)


### 3.1 Change epochs 

(Optional)

You can increase the number of epochs for training your intent. The number of epochs is set to 20 by default. However, they could be a deciding factor when it comes to underfitting or over-fitting the model.

![](https://i.imgur.com/pGySd37.png)

### 3.2 Connect to bot

After training intents you can connect it to your bot. You have to connect the flow you built to the intent '**Order**'. To do this click the [Start Trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow) and configure the intent to the node. 


Click the drop-down and select ‘**#order**’ intent.

![](https://i.imgur.com/weM5JJD.png)

Every time a user asks a query similar to the utterances within 'order' the flow you created would get triggered.

:::success
Congratulations! You trained and connected your first intent! :tada::tada::tada:
:::
---

## <a name="test"></a> 4. Test intents

Once you have trained your intent you can test it for the results and retrain it (if required) based on the utterance report. 
There are two methods to test your intent. 

### 4.1  Test bot

To test your bot you can follow these steps:

* On the **studio** page, click the right panel to test your bot.
* To test your intent, type "**Place an order**" in your bot.
* You will see that your flow gets triggered.

![](https://i.imgur.com/WqSgkzc.gif)



### 4.2 Test intent
 
To see what response is generated by the model when a user types a query. Click on [Tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools) and the section 'Test your bot'.

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
 
As you can see in the above code, the model understands that the phrase is a part of the intent '**order**' and is completely confident about it (0.999). 

You can also [automatically generate intents and utterances](https://docs.yellow.ai/docs/cookbooks/studio/regressiontest) and test them in your bot.


---

## <a name="clash"></a> 5. Resolve clashes in intents and utterances


A bot is trained with multiple custom intents and entities to get the best result. There might be situations that will confuse the bot if the utterances are not classified correctly while training. These clashes that have resulted due to unclear utterance classification can be resolved by studying the utterance report. 

Follow the given steps to learn: 
1. How to download an utterance report 
2. How to resolve clashes among utterances 


### 5.1 Download utterance report

1. Open **Studio** > **Train** > **Intents** , click **Generate utterance report**.


![](https://i.imgur.com/Botct6y.png)


2. Two reports will be sent to your registered email ID. 

    * Utterances within intents/faqs
    * Utterances across intents/faqs 


![](https://i.imgur.com/Me6LIQ6.png)

:::note

- Report for **utterances within intents/faq** highlights similar or extremely diverse utterances that must be edited within an intent/FAQ including clashes due to entity featurisation.
- Report for **utterances across intents/faqs** highlights similar utterances across the flows, it will recommend you to change any one utterance of the similar pair including clashes due to entity featurisation.
:::

### 5.2 Resolve clashes among utterances 

Utterance reports sent to your mail ID are used to evaluate how well your bot utterances are designed. You can learn how 'similar' your utterances are within an intent and if there are any intents common in between the flows.

:::note
It is recommended to generate an utterance report after initial Train setup and regularly at least once a month.
:::

#### 5.2.1 Conflicts within intents and FAQ's

This report will point to the relationship between the two utterances as a conflict if they have a high similarity.
It is a comparison between utterances of the same intents.

If the similarity is more than 50%, you must go to the respective Intents page and delete one of the similar utterances or rephrase the sentence. 

![](https://i.imgur.com/WCHtIPg.png)

If the similarity is less than 50%, it can be ignored. 


#### 5.2.2 Conflicts across intents and FAQ's

This is a comparison between utterances of different intents.

![](https://i.imgur.com/h2ESumE.png)

If the similarity is more than 50%, you must go to any of the Intents page and delete similar utterances or rephrase the sentence. 

----


## <a name="bp"></a> 6. Best practices

This section is divided into:
1. [Best practices to follow while naming intents](#61-intent-naming)
2. [Best practices to follow while adding utterances to the intents](#62-utterance--flows)


### <a name="Intn"></a> 6.1 Intent naming

There are guidelines for new bots and for the bots in productions. For your intent to work best globally, follow the respective guidelines:

#### 6.1.1 New bots

Bots created after August 1, 2022.

1. Intent names must be at least 3 words long with unique words and no special characters. 
    * Be mindful of intent names, make sure they are as descriptive as possible.
    * Don't create intent names like intent test one, FAQ number one etc.
    * Bad intent names will result in bad NLP performance (False positives) and unnecessary issues in the bot.
    * For Cloud, it is possible to rename intent names.
2. The more descriptive the intent name, the better (add names with more than 3 words).
3. Avoid uncommonly and business-specific abbreviations: Example: PO (purchase order ), GMV, etc - use the full forms and add synonyms if necessary. Few common abbreviations like UPI, EMI, and HR are acceptable.
4. Phrase the intent name as a verb followed by a noun. Example: get a premium receipt, pay renewal amount, fetch order status.
5. Keywords and sentences less than 3 words will fallback to the existing bot model and will work as-is. These types of utterances will not go to the new model.
6. This model is applicable and works well for [FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs) as well (since FAQs are descriptive and longer sentences) 
7. Suggestions are enabled by default for all new bots - as this is critical for model improvement and to provide the full performance benefit.

#### 6.1.2 Existing bots

Following are a few important pointers for bots created before August 1, 2022.

##### Cloud

1. Enable suggestions for bots where they may not be enabled. This ensures that the model is used to the fullest. 
2. Suggestions only show up for intents that are connected to the flows. Verify that unwanted flows are removed (or disconnected from intents).
3. If the intent name is camelCase (eg: chatWithAgent)  or has underscore/hyphens (eg: chat_with_agent, chat-with-agent), use the edit option to rename these following the guidelines mentioned in the above section(for new bots). 
4. Ensure that there is no Small Talk in FAQs / Flows. If these are present, delete them - platform small talk is enabled for all cloud bots. 

##### App (app.yellow.ai)

1. Enable suggestions for bots. 
    - To do this, in app.ym ensure that **enableDidYouMean** is set to true in app options in Function and in Tools → App Options → Prediction → Enable Suggestions.
    - If there’s an existing **DidYouMean** function in default:response, remove it.
2. Verify that the flow/journey DESCRIPTION is in line with the guidelines mentioned above. 
    - If these are not in line and are in camelCase or have special characters, change these by going to flow settings for that flow (you need not change the journey name, only the description can be changed).
3. Ensure that there is no Small Talk in FAQs/Flows. If these are present, delete them and enable platform small talk in **Context Management** and enable **Small Talk**.

------

### 6.2 Utterance & flows


| DONTs ❌ | DOs ✅ | 
| -------- | -------- | 
| Do not add utterances in which the only variation is Upper Case/Lower Case|Do add at least 15-20 utterances per flow|
|Do not add utterances in which the only variation is Name, Date, City etc|Do ensure that there are an equal number of utterances in each flow |
|Do not create multiple flows which have a similar purpose |Do merge flows that are subsets of other flows|
|Do not overfit the model while training |Do use the didYouMean (suggestions) feature extensively|
|Do not add utterances if a flow will only be triggered through 'Trigger Journey'|Do minimize False Positives |
||Do add abbreviations/short forms in the “synonyms” section | 
|Do not add single words as utterances|Add complete sentences|

- #### Do not add utterances in which the only variation is upper case/lower case

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

- #### Do add at least 15-20 utterances per flow
* The minimum number of utterances in each flow heavily depends on the complexity of the bot (number, type of flows and quality of the utterances)
* More utterances are always better especially when there are less than 10 flows.

- #### Do ensure that there are an equal number of utterances in each flow 

**Wrong**  ❌
```
Apply Leave flow - 50 Utterances

Leave Balance flow - 2 Utterances

Schedule Meeting flow - 30 Utterances
```
**Correct** ✅

```
Apply Leave flow - 50 Utterances 

Leave Balance flow - 50 Utterances 

Schedule Meeting flow - 50 Utterances
```

* Try to maintain a balance in the number of utterances per flow
* The NLP model is robust enough to handle small variations in the number of utterances (difference of 3-5 utterances) 
* For smaller bots (< 10 flows) maintaining balance is important to ensure good performance. 

- #### Do not create multiple flows which have a similar purpose 

**Wrong**  ❌
```
Flow: talk-to-agent

Flow: transfer-to-live-chat

Flow: speak-to-agent
```
**Correct** ✅

```
Single Flow: talk-to-agent
```
* Having multiple flows which have similar utterances will confuse the model since there is a high amount of overlap.
* Merge all these flows into one single flow.

- #### Do merge flows that are subsets of other flows

**Wrong**  ❌
```
Flow: apply-for-loan

Flow: apply-for-home-loan

Flow: apply-for-personal-loan

Flow: benefits-of-home-loan

Flow: benefits-of-automobile-loan
```
**Correct** ✅

```
Flow: apply-for-loan

    Steps: What kind of loan are you interested in?

        - Home, Personal, Automobile

Flow: benefits

    Steps: Which loan would you like to know more about?

        - Home, Personal, Automobile
```

- In the example above ***apply-for-home-loan*** is a subset or part  of the ***apply-for-loan flow***. 
This means that ***apply-for-home-loan*** will have utterances that are very similar to ***apply-for-loan***

    - Eg: “can you please help me apply for home loan?” , “Can you please apply for loan?”

    This will confuse the model during training 

- There are 2 Steps to fix this: 
    -    Move all utterances to the parent flow in this case ***apply-for-loan***
    -    Create a step asking the user for additional details (in this case type of loan)
        *    Another option is to setup entities (eg: type-of-loan - Personal, Home can be a type of entity) within the flow.


- #### Do not add utterances if a flow will only be triggered through the Trigger Journey option 
There may be some flows in the bot that are meant to be triggered only from another flow. (i.e. these won't be triggered by the user’s input)

Eg: Feedback Flow

For these flows do **NOT** add any user expressions/utterances 
Adding utterances here will unnecessarily increase the complexity of the NLP Model.

- #### Do minimize false positives 
    * When an incorrect flow is triggered with high confidence it is considered a False Positive.
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
    - The NLP pipeline will check for these abbreviations and replace them with the “full form” before passing them into the ML model which will increase the accuracy 

- #### Do not overfit the model while training

---

:::info
:pushpin: **Training Checklist**
- Add 15-20 Utterances in each flow.
- Utterances in flows must be varied and unique.
- Flows are distinct and conflicting flows must be merged.
- Model should not overfit (False Positives have to be handled).
- When didYouMean (Suggestions) feature is enabled, make use of those suggestions.
- Minimum 2 intents are required to train a bot.
:::

---

**What next?**

- Train your model to recognize [Entities](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities), [Synonyms](https://docs.yellow.ai/docs/platform_concepts/studio/train/synonyms), and [FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs). 