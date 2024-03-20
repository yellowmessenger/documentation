---
title: Intents
sidebar_label: Intents
tags: [intent detection nlp ,intent extraction nlp , intent in nlp,intent nlp, intent recognition nlp, nlp intent, nlp intent classification, nlp intent extraction, nlp intent recognition, nlp intent recognition python, why is intent important in negotiations nlp, intent identification nlp]
---


Intent is the purpose or goal behind someone's action or words. In natural language processing, it specifically relates to determining a user's intention in a conversation, like asking a question, making a request, or giving information. 

Let's say that you want to book a flight to Singapore, **book a flight** is the intent of this case.

On our platform, you can add **intents** (the purpose of the bot users' response) and **utterances** (the various responses used by bot users for a specific intent, for example, to book a flight the utterances can be 'flight booking' or 'book flights'). You need to **train** the bot to identify and understand these sentences.

---

:::note
Yellow.ai DynamicNLP simplifies the process of model training by utilizing advanced technology called Zero-shot Learning. This eliminates the need for tedious and error-prone training processes.
:::

## Add intents and utterances 

Intents represent the intentions or goals behind user inputs, while utterances are the specific phrases or queries users use to express those intentions. By mapping utterances to corresponding intents, the bot can accurately understand and respond to user queries.


1. Create a [flow ](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)and add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) based on the conversation design.

  > Intents are added to trigger this flow or a identify user goal and trigger this flow accordingly.

2. Go to **Train** > **Intents** > **+ Add new intent**.

![](https://i.imgur.com/fIxfttM.png)

3. Provide a name to your intent, followed by the utterances that should trigger that flow.

<img src="https://i.imgur.com/WjgI4nY.png" alt="drawing" width="70%"/>

 > To add multiple utterances, click **Add another utterance**.

4. Click **Add intent** when you're done.

## Add utterances manually

Type in your utterance and click **+Add** to add the utterance to an intent.

![](https://i.imgur.com/FGlxFu1.png)

## Add suggested utterances

The Yellow.ai platform generates suggestions for utterances. In this section, you will find phrases similar to the initial utterance you provided.

### Generate utterances

The refresh button will allow you to access a fresh batch of utterances every time you click on it. You may add a few utterances by clicking the **+** sign next to them or add all of them by selecting the check box next to **Suggested utterances**.

![](https://i.imgur.com/lPgv03i.png)

### Add utterances in bulk

To add them in bulk, select the preferred ones and click **Add selected** on top.

### Edit utterances

The suggested utterances can also be edited, click the pen icon to do so.

## Train your bot with intents

Once you have added the intents and utterances, click Train intents to train your bot on this data.

![](https://i.imgur.com/1yo9Lwa.png)

### Train your model

You can train your bot on the following features by setting the right number of epochs.

* Sentence encoder
* Multilingual
* Bahasa

1. Click the arrow.

![](https://i.imgur.com/w44xhyP.png)

2. Choose the **Feature type** and set the required number of **Epochs**.

![](https://i.imgur.com/QNdA2w0.png)

* **Sentence Encoder:** Converts input sentences or messages into numerical representations, making it easier for the bot to understand and process user inputs.

* **Epochs:** Epoch refers to one complete iteration through the entire dataset during training. It helps the chatbot improve its performance by learning from the data multiple times.

* **Multilingual:** Choose this option if your bot is multilingual. This allows the bot to communicate with users in different languages, catering to a broader and more diverse audience.

* **Bahasa:** Bahasa is an Indonesian language. If you choose this option, the bot can communicate with users in Indonesian, providing more personalized and localized interactions.

3. Click **Train**.

If a bot is not trained on intents, it won't understand user queries so it will resort to [Fallback](https://docs.yellow.ai/docs/platform_concepts/studio/build/additionalsettings#fallback-fallback-flow). You can configure [Suggestions](https://docs.yellow.ai/docs/platform_concepts/studio/overview#suggestion) for bot to show the closest answers to the user query.

## Map intents to flows

To trigger a flow, set this intent to that flow. 

1. Go to the respective flow and click the **Start** node.

![](https://i.imgur.com/dxHgwao.png)

2. Choose **Intent** and select the intent.

## Test your intents

There are two ways by which you can test your intents, you can either test the flows in which they are set or you can test them in the **Tools** section.

To know about testing specific flows, click [here.](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) 

To test your bot's confidence and intent identification: 

1. Go to **Tools** > **Test your bot** and enter a phrase. Upon hitting enter, a generated code will display the bot's response to that intent. 

In the example code below, the bot confidently recognizes the phrase as part of the **order intent**, with a confidence score of 0.999.

```
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
:::info

To stop or exit bot conversations using intents:

1. Add intents and utterances for stop, for example 'stop the flow', 'exit the flow' and train the bot on the same.
2. Create a new flow,  add this intent as the start trigger , for the flow and include a text message node that says 'Your chat has ended'.

By this way, whenever a user types any one of the trained intents or utterances, the bot immediately triggers this flow and ends the chat.
:::

## Resolve conflicts in intents and utterances 


A bot is trained with multiple intents and entities to improve its performance. If utterances are not classified correctly during training, it can lead to confusion. To resolve these clashes caused by unclear utterance classification, it is necessary to analyse the report.

### Download utterance report

1. Go to  **Studio** > **Train** > **Intents** , click **Generate utterance report**.


![](https://i.imgur.com/Botct6y.png)


2. Two reports will be sent to your registered email address. 

    * Utterances within intents/faqs
    * Utterances across intents/faqs 


![](https://i.imgur.com/Me6LIQ6.png)

:::note

*  **Utterances within intents/faqs** report identifies similar or highly diverse utterances that require editing within a specific intent/FAQ, including clashes caused by entity features.
* **Utterances across intents/FAQs** report identifies similar utterances across different flows and suggests modifying one of the similar utterances, taking into account clashes caused by entity features.
:::

### Resolve conflicts among utterances 

Utterance reports sent to your email address help evaluate the quality of your bot's utterances. They provide insights into the similarity of utterances within an intent and identify any common intents across different flows.

:::note
It is recommended to generate an utterance report after initial **Train** setup and regularly at least once a month.
:::

#### Conflicts within intents and FAQ's

This report identifies conflicts between two utterances if they have a high level of similarity. It compares utterances within the same intents.

If the similarity exceeds 50%, you need to visit the respective Intents page and either delete one of the similar utterances or rephrase the sentence.

![](https://i.imgur.com/WCHtIPg.png)

If the similarity is less than 50%, ignore it.


#### Conflicts across intents and FAQ's

This is a comparison between utterances of different intents.

![](https://i.imgur.com/h2ESumE.png)

If the similarity is more than 50%, you must go to any of the Intents page and delete similar utterances or rephrase the sentence. 

----

## Best practices

The following are the recommended best practices to follow while naming intents and adding utteraces to them.

1. [Best practices to follow while naming intents](#61-intent-naming)
2. [Best practices to follow while adding utterances to the intents](#62-utterance--flows)


### Naming intents

#### For new bots

Bots created after August 1, 2022.

1. Intent names must be at least 3 words long with unique words and no special characters. 
    * Ensure intent names are descriptive to enhance clarity.
   * Avoid using generic names like "intent test one" or "FAQ number one".
   * Poor intent names can negatively impact NLP performance, leading to false positives and unnecessary bot issues.
   * In the case of cloud, renaming intent names is possible.
2. The more descriptive the intent name, the better (add names with more than 3 words).
3. Avoid uncommonly and business-specific abbreviations: Example: PO (purchase order ), GMV, etc - use the full forms and add synonyms if necessary. Few common abbreviations like UPI, EMI, and HR are acceptable.
4. Phrase the intent name as a verb followed by a noun. Example: get a premium receipt, pay renewal amount, fetch order status.
5. Keywords and sentences less than 3 words will fallback to the existing bot model and will work as-is. These types of utterances will not go to the new model.
6. This model is applicable and works well for [FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs) as well (since FAQs are descriptive and longer sentences) 
7. Suggestions are automatically enabled for all new bots by default. This default setting is crucial for improving the model and maximizing performance benefits.

#### For existing bots

The following are a few important pointers for bots created before August 1, 2022.

##### Cloud

1. Enable suggestions for bots where they may not be enabled. This ensures that the model is used to the fullest. 
2. Suggestions only show up for intents that are connected to the flows. Verify that unwanted flows are removed (or disconnected from intents).
3. If the intent name is camelCase (eg: chatWithAgent)  or has underscore/hyphens (eg: chat_with_agent, chat-with-agent), use the edit option to rename these following the guidelines mentioned in the above section(for new bots). 
4. Ensure that there is no Small Talk in FAQs / Flows. If these are present, delete them - platform small talk is enabled for all cloud bots. 

##### App (app.yellow.ai)

1. Enable suggestions for bots. 
    - To do this, in the [App platform](https://app.yellow.ai) ensure that **enableDidYouMean** is set to true in app options in Function and in **Tools** > **App Options** > **Prediction** > **Enable Suggestions**.
    - If there’s an existing **DidYouMean** function in default:response, remove it.
2. Verify that the flow/journey DESCRIPTION is in line with the guidelines mentioned above. 
    > If these are not in line and are in camelCase or have special characters, change these by going to flow settings for that flow (you need not change the journey name, only the description can be changed).
3. Ensure that there is no Small Talk in FAQs/Flows. If these are present, delete them and enable platform small talk in **Context Management** and enable **Small Talk**.

------

### Utterance & flows


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
 