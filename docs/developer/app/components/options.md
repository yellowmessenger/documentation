---
title : app.options
sidebar_labels : app.options
---

This object contains all the data about minConfidence, targetLanguage,
etc. The object passed in `app.start` method is stored as `app.options`
object, if any values not passed in the object then the default value is
taken.

``` js
{
  "minConfidence": 0.8,
  "contextConfidence": 0.9,
  "entityThreshold": 0.96,
  "suggestionConfidence": 0.65,
  "suggestionQuestion": "Did you mean ?",
  "enableSuggestion": false,
  "unknownMessage": "I think you are looking for something I cannot help you with.",
  "transferToAgent": false,
  "transferToAgentMessage": "I am unable to help you with your query at the moment but I can transfer our conversation to my human friend who can help you out.",
  "targetLanguage": "en",
  "listenLanguage": "en",
  "autoResponse": true,
  "spellCorrection": true,
  "intentSwitchExclusions": [],
  "secondaryModelConfidence": 0.84,
  "FAQQuery": "",
  "i18n": false,
  "authOptions": {
      "type": "custom",
      "intents": [],
      "faq": true
  },
  "shouldFAQSessionEnd": true,
  "enableContextForPrediction": false,
  "excludeKeywordsForPrediction": [],
  "excludeParamsForSwitching": [],
  "translateInputMessages": true,
  "saveSuggestions": false
}
```


## Objects

### authOptions

This object contains the type and intents

#### example

``` js
"authOptions": {
      "type": "custom",
      "intents": [],
      "faq": true
  }
```

------------------------------------------------------------------------

### excludeKeywordsForPrediction

This is an array containing values for excluding in prediction

#### Example

``` js
"excludeKeywordsForPrediction": [
  "car",
  "account"
]
```
------------------------------------------------------------------------

### excludeParamsForSwitching

This is an array containing values for excluding in context (intent)
switching

#### Example

``` java
"excludeParamsForSwitching" : [
  'final-check', 
  'marital-status', 
  'loan-type', 
  'company-name'
]
```
------------------------------------------------------------------------

### intentSwitchExclusions

This is also an array containing values for excluding in switching
intents

#### Example

``` js
"intentSwitchExclusions" : [
    'refund-issues',
    'login-issues',
    'get-all-data'
]
```

------------------------------------------------------------------------

## Methods

## onInvalidCountExceeded

This method is executed whenever `invalidCount` reached. invalidCount
contains a max number of validations failed (number of times user
entered wrong data) in a step to trigger this method. This needs to be
set in `app.start` options object.

### Syntax

``` js
onInvalidCountExceeded: () => {
    //your code
}
```
 

### Example

``` js
onInvalidCountExceeded: (context) => {
    return new Promise(resolve => {
        app.sendTextMessage(`Seems like you're stuck, so I am going to take you to main menu.`).then(() => {
            app.triggerIntent('default')
            app.start();
            return;
        })
    })
}
```