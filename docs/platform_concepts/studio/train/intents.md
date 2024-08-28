---
title: Intents
sidebar_label: Intents
tags: [intent detection nlp ,intent extraction nlp , intent in nlp,intent nlp, intent recognition nlp, nlp intent, nlp intent classification, nlp intent extraction, nlp intent recognition, nlp intent recognition python, why is intent important in negotiations nlp, intent identification nlp]
---

An intent in a conversation flow represents the specific goal or purpose a user aims to achieve when interacting with a chatbot. For example, asking a question, making a request, or providing information. Intents help the chatbot understand the user's inquiries and enable it to respond accurately to their queries.

For example, in a customer service chatbot:

**Intent**: Check order status

   **User input**: "Where is my order?:" or "Can you tell me the status of my recent purchase?".
  > **Bot response**: "Sure, please provide your order number."

**Example 2**: 

**Intent**: Booking a flight

**User input**: "I want to book a flight to New York." or "Can you help me schedule a flight for next week?".
  > **Bot response**: "Of course, can you tell me your preferred travel dates?".

:::note
Yellow.ai DynamicNLP simplifies the process of model training by utilizing advanced technology called zero-shot learning. This eliminates the need for tedious and error-prone training processes.
:::

## Add Intents and Utterances 

### Utterances overview

Utterances are specific phrases or queries users use to express intentions. By mapping utterances to corresponding intents, the bot can accurately understand and respond to user queries.

You can add intents (the purpose of the bot users' responses) and utterances (the various ways users might phrase a specific intent, such as 'flight booking' or 'book flights' for the intent of booking a flight). You need to train the bot to identify and understand these sentences to ensure accurate responses.

### Best practices for creating intents and uttrances

To ensure accuracy and effectiveness of your chatbot, adhere to these best practices while creating intents and utterances:

1. To effectively train the intents, ensure you create at least two distinct intents.
2. We recommend adding at least 15 to 20 diverse utterances for each intent.
3. Avoid using similar utterances both within a single flow and across multiple flows.
4. Ensure that all utterances in flows are unique to maintain clarity and accuracy.

## Add Intents and Uttrances

To add intents and utterances, follow these steps:

1. Create a [flow ](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)and add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) based on your use case.

2. Go to **Automation** > **Train** > **Intents** > **+ Add new intent**.

    ![](https://imgur.com/59XChNB.png)

3. Enter the name of the intent and add the utterances. To add multiple utterances, click **Add another utterance**.

   <img src="https://i.imgur.com/DnVeWjt.png" alt="drawing" width="70%"/>

4. Click **Add**.

* This will add the Intent and Utterances to trigger a particular flow or to identify the user goal.

## Search Intent

After creating an intent, you can use the search option to easily find the specific intent among multiple intents.

1. Enter the intent name in the search bar.

    ![](https://imgur.com/3WNdf6c.png)
    
* This will display the intent that you are searching for.

## Edit Intent

1. Hover over the specific intent to enable the **Edit** icon.

     ![](https://imgur.com/PkfMNyU.png)
     
2. Click the **Edit** icon to modify the intent name, then click **Save**.

    <img src="https://imgur.com/1a379hI.png" alt="drawing" width="60%"/>
    
## Delete Intent

To delete an intent, it should not be mapped to any flow. If an intent is mapped to a specific flow, it cannot be deleted.

1. Hover over the specific intent to enable the **Delete** icon.

    ![](https://imgur.com/fmLBNEP.png)
    
2. Click **Delete** icon to remove the intent.


## Add utterances manually

1. Click **+ Add** to add the utterances to an intent.

     ![](https://imgur.com/PWHGd6z.png)
     
     
## Add auto-suggested utterances to the intent

Once you have added the intent, a set of auto-suggested utterances are generated. You can add your preferred utterances that are appropriate for your use case.

### Add auto-generated utterances

To add auto-generated utterances, follow these steps:

1. In the right panel, under *Utterance suggestions*, click the **Refresh** button to generate a new set of utterances. Each click will provide a new set of suggestions.

      ![](https://imgur.com/N7AmTd8.png)

3. Select the suggested utterances that are appropriate for your intent and click **+ Add selected**.

   ![](https://imgur.com/i8mFbgH.png)
   
* This will add the selected utterances to your intent.

2. You can also add specific suggestions by clicking the **+** icon next to each suggestion.

    <img src="https://imgur.com/es7p3A4.png" alt="drawing" width="60%"/>
    
### Edit suggested utterances

You can edit the suggested utterances based on your requirements before adding them:

1. Click the **Edit** icon next to each suggested utterance.

    <img src="https://imgur.com/bju3X08.png" alt="drawing" width="50%"/>
    
2. Make the necessary changes to the suggested utterance.

     <img src="https://imgur.com/xqDKEBW.png" alt="drawing" width="50%"/>
 
3. Click **+** iocn to add the edited utterance.

     <img src="https://imgur.com/fWtxqYU.png" alt="drawing" width="50%"/>
    
## Train your bot with intents and utterances

You need to train your bot after adding intents and uttrances. If the bot is not trained with the intents, it will not understand user queries and will display a [fallback](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/manage-flows#fallback-flow) response. To improve user interaction, you can configure [suggestions](https://docs.yellow.ai/docs/platform_concepts/studio/build/additionalsettings#suggestion-setting-when-bot-does-not-understand-user-utterance) for the bot to show the closest answers to the user query.

1. Add an intent and corresponding utterances as explained above. 
2. Click **Train intent**. This will train the bot with the provided intents and utterances.

   ![](https://imgur.com/BhOezbs.png)
   
3. If you have intents and uttrances in multiple languages, click on the **Train intents** drop-down.

    ![](https://imgur.com/kSnjYtK.png)

4. Choose your preffered **Feature type**.

    <img src="https://imgur.com/Fb9wj9C.png" alt="drawing" width="60%"/>

Option | Description
------- | ----------
Sentence encoder | Converts input sentences or messages into numerical representations, making it easier for the bot to understand and process user inputs.
Multilingual | If your bot is designed to communicate in multiple languages, select this option to enable multilingual capabilities. This allows the bot to communicate with users in different languages, to reach a wider audience.
Bahasa | Select this option if you want your bot to communicate in Bahasa, the Indonesian language, allowing for more personalized and localized interactions.

:::note
If you have not chosen any of the options mentioned above, the Sentence encoder will be selected by default.
:::

4. In **Epochs**, set the required number. Epoch refers to one complete iteration through the entire dataset during training. It helps the chatbot improve its performance by learning from the data multiple times.

5. Click **Train**.

## Trigger flows using intents
   
To trigger a flow based on a specific intent, follow these steps:

1. Navigate to the respective flow and click on the Start node.

2. Choose **Intent** as the trigger type.

    ![](https://imgur.com/2Znxg7W.png)

3. Select the desired intent from the drop-down.
      
    ![](https://imgur.com/t1CQGlt.png)
    
## Test your intents

There are two ways in which you can test your intents- you can either [test the flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/test-flows) in which they are set or you can test them in the **Tools** section. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#test-your-bot).

To test your bot's confidence and intent identification: 

1. Go to **Tools**.

    ![](https://imgur.com/1Cj8Gnq.png)
    
2. Click **Test your bot**, enter the name of the intent that you have created, then click on **Send** icon.

    <img src="https://imgur.com/vPs7Ugi.png" alt="drawing" width="80%"/>

* This will generate code to display the bot's response to that intent. 

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

## Stop or exit bot conversations using intents

You can configure your bot to stop or exit conversations using specific intents and utterances. Follow these steps to set up this functionality:

1. [Add Intents and Utterances](#add-intents-and-utterances):
   * Create intents such as "stop the flow" or "exit the flow".
   * Add corresponding utterances that users might use to indicate they want to end the conversation.
   * Train the bot on these intents and utterances.

2. [Create a new flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)
   * Go to the flow creation section.
   * Create a new flow and set the previously created intent as the start trigger.

3. Add a Text Message Node:
   * Within the flow, add a text message node with a message such as "Your chat has ended".

* By setting up this flow, whenever a user types any of the trained intents or utterances to stop or exit the conversation, the bot immediately triggers this flow and ends the chat. 

## Resolve conflicts in intents and utterances 


A bot is trained with multiple intents and entities to improve its performance. If utterances are not classified correctly during training, it can lead to confusion. To resolve these clashes caused by unclear utterance classification, it is necessary to analyse the report.

### Download utterance report

1. Go to **Intents** > **Generate utterance report**.

    ![](https://imgur.com/mM3mfHf.png)

2. Two reports will be sent to your registered email address:
    * **Utterances within intents/faqs**: Identifies similar or highly diverse utterances that require editing within a specific intent/FAQ, including clashes caused by entity features.
   * **Utterances across intents/FAQs**: Identifies similar utterances across different flows and suggests modifying one of the similar utterances, taking into account clashes caused by entity features.

    ![](https://i.imgur.com/Me6LIQ6.png)

### Resolve conflicts among utterances 

Utterance reports sent to your email address help evaluate the quality of your bot's utterances. They provide insights into the similarity of utterances within an intent and identify any common intents across different flows.

:::note
It is recommended to generate an utterance report after the initial **Train** setup and regularly at least once a month.
:::

#### Conflicts within intents and FAQ's

This report identifies conflicts between two utterances if they have a high level of similarity. It compares utterances with the same intents.

If the similarity exceeds 50%, you need to visit the respective Intents page and either delete one of the similar utterances or rephrase the sentence. 

If the similarity is less than 50%, ignore it.

![](https://i.imgur.com/WCHtIPg.png)

#### Conflicts across intents and FAQ's

This is a comparison between utterances of different intents.

![](https://i.imgur.com/h2ESumE.png)

If the similarity is more than 50%, you must go to any of the Intents page and delete similar utterances or rephrase the sentence.

## Best practices

The following are the recommended best practices to follow while naming intents and adding utteraces to them:

1. [Best practices to follow while naming intents](#naming-intents)
2. [Best practices to follow while adding utterances to the intents](#utterance--flows)


### Naming intents

#### For new bots

Bots created after August 1, 2022.

1. Intent names must be at least 3 words long with unique words and no special characters. 
    * Ensure intent names are descriptive to enhance clarity.
   * Avoid using generic names like "intent test one" or "FAQ number one".
   * Poor intent names can negatively impact NLP performance, leading to false positives and unnecessary bot issues.
   * In the case of cloud, renaming intent names is possible.
2. The more descriptive the intent name, the better (add names with more than 3 words).
3. Avoid uncommon and business-specific abbreviations. Example: PO (purchase order ), GMV, and so on. Use the full forms and add synonyms if necessary. Few common abbreviations like UPI, EMI, and HR are acceptable.
4. Phrase the intent name as a verb followed by a noun. Example: get a premium receipt, pay renewal amount, fetch order status.
5. Keywords and sentences less than 3 words will fallback to the existing bot model and will work as-is. These types of utterances will not go to the new model.
6. This model is applicable and works well for [FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs) as well (since FAQs are descriptive and longer sentences) 
7. Suggestions are automatically enabled for all new bots by default. This default setting is crucial for improving the model and maximizing performance benefits.

#### For existing bots

The following are a few important pointers for bots created before August 1, 2022.

##### Cloud

1. Enable suggestions for bots where they may not be enabled. This ensures that the model is used to the fullest. 
2. Suggestions only show up for intents that are connected to the flows. Verify that unwanted flows are removed (or disconnected from intents).
3. If the intent name is camelCase (example: chatWithAgent)  or has underscore/hyphens (example: chat_with_agent, chat-with-agent), use the edit option to rename these following the guidelines mentioned in the above section (for new bots). 
4. Ensure that there is no Small Talk in FAQs or Flows. If these are present, delete them. Platform small talk is enabled for all cloud bots. 

##### App (app.yellow.ai)

1. Enable suggestions for bots. 
    - To do this, in the [App platform](https://app.yellow.ai) ensure that **enableDidYouMean** is set to true in app options in Function and in **Tools** > **App Options** > **Prediction** > **Enable Suggestions**.
    - If there’s an existing **DidYouMean** function in default:response, remove it.
2. Verify that the flow/journey DESCRIPTION is in line with the guidelines mentioned above. 
    > If these are not in line and are in camelCase or have special characters, change them by going to flow settings for that flow (you need not change the journey name, only the description can be changed).
3. Ensure that there is no Small Talk in FAQs/Flows. If these are present, delete them and enable platform small talk in **Context Management** and enable **Small Talk**.

------

### Utterance & flows


| DONTs ❌ | DOs ✅ | 
| -------- | -------- | 
| Do not add utterances in which the only variation is upper case or lower case|Do add at least 15-20 utterances per flow|
|Do not add utterances in which the only variation is Name, Date, City, and so on|Do ensure that there are an equal number of utterances in each flow |
|Do not create multiple flows that have a similar purpose |Do merge flows that are subsets of other flows|
|Do not overfit the model while training |Do use the didYouMean (suggestions) feature extensively|
|Do not add utterances if a flow will only be triggered through 'Trigger Journey'|Do minimize false positives |
| Avoid business-specific abbreviations |Do add abbreviations/short forms in the “synonyms” section | 
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

sync up with Ram on January 3rd
```
- A few sentences (2–3) such as the ones listed below are acceptable but ensure that there are other utterances that show the different variations in sentence structure.

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

    - Example: “can you please help me apply for home loan?” , “Can you please apply for loan?”

    This will confuse the model during training 

- There are 2 steps to fix this: 
    -    Move all utterances to the parent flow in this case ***apply-for-loan***
    -    Create a step asking the user for additional details (in this case type of loan)
    -  Another option is to setup entities. For example: type-of-loan - Personal, Home can be a type of entity within the flow.


- #### Do not add utterances if a flow will only be triggered through the Trigger Journey option 

There may be some flows in the bot that are meant to be triggered only from another flow (that is, these won't be triggered by the user’s input).

For example, Feedback Flow

For these flows do **NOT** add any user expressions or utterances.
Adding utterances here will unnecessarily increase the complexity of the NLP Model.

- #### Do minimize false positives 
    * When an incorrect flow is triggered with high confidence, it is considered a False Positive.
    * False Positives occur because of overfitting and spoil the customer or user experience.
    * These are minimized by following the best practices laid out in this document.
    * If there are a lot of false positives during training (even after checking for overfitting), try raising the "minConfidence" threshold.
    * The best strategy is to use didYouMean (Suggestions) feature and retrain the bot periodically with the new data.

- #### Do use the didYouMean feature extensively
    * After ensuring that the model did not overfit (no False Positives) the next step is to enable the didYouMean feature
    * When the user’s input is not recognized by the model, the didYouMean feature elegantly handles the case as a fallback.
    * This is especially useful in the first few weeks after deploying a bot in production, when accuracy may be low. 
        * The self-learning capability allows the bot to improve the confidence of different types of user expressions. 

- #### Do add abbreviations/shortforms in the “synonyms” section 
    - For short forms and abbreviations, add all the possible variations in the Synonyms section located under “Entities”. 
    - The NLP pipeline will check for these abbreviations and replace them with the “full form” before passing them into the ML model, which will increase the accuracy.



     


     




