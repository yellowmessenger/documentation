---
title: Training, you say?
sidebar_label: Training
---

After all is said and done, our bot built, training is the part we come at. Before you click on that 'Train' button on top, let's make sure you are aware of the best practices!


## Utterance & Journey Best Practices:


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
:::

:::info
### Training reports :spiral_note_pad: 
Now you can also run **Training reports (beta)** on your bot to evaluate how well your bot utterances are designed. 
:::

