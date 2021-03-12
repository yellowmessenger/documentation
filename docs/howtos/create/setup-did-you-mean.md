---
title: didYouMean
sidebar_label : didYouMean
---
### How to setup did you mean? 

**Keywords** : didyoumean, suggestions

By default, when the bot is not able to understand any message, it displays a default message.
To combat this, we can generally provide custom text or quick replies.

But there is a catch, these responses are static in nature and at times is not what the user is looking for.
It is more intuitive to show some suggestions if they are very close to what the user requested or resemble something in the training of the bot.

For this, a default *didYouMean* function is being made available wherein, just by passing in the *app.prediction.intents*, it can provide you the alternative list of journeys that the bot thinks can be triggered.

>The overriding design goal for didYouMean is to make it as simple as possible to get meaningful suggestions.
The idea is that the developer shouldn’t need to re-invent the wheel and should be able to directly utilise this functionality so as to improve the user experience.

#### Where to call
The *didYouMean** function is being made available as the 2nd function in the list of functions in the Developer section of the platform.

So as not to conflict with existing functionality, it is not added as the Default Action for unidentified utterance. For this, *the developer has to go to Default Journey and add it as the response/action*.

#### Function syntax
```
app.getAlternateJourneyOptions(app.prediction.intents, 0.4, [], []).then((options) => {
    
})
// no catch required 
```

The didYouMean uses a util/helper function app.getAlternateJourneyOptions which provides the options back to the developer for further processing.

The function accepts 4 params as of now:

* app.prediction.intents -> Mandatory. To get all the intents from the prediction.

* confidence -> Optional. Confidence threshold below which the journeys are filtered out from the result. By default, 0.0 to allow all journeys to pass through. The good value will be >=0.4

* journeySlugs -> Optional. An array of journey slug names not to be included in the results.

*categoryNames -> Optional. An array of categories whose journeys will not be included in the results.

The function returns an array of objects called options that can be directly passed to app.sendQuickReplies as options.
If no journeys are present (or filtered out), then an empty array is returned.

The provision for handling both of these functions is present in the UI function.

#### The customization that can be done
In the UI, the following options can be customized:

* scripts -> The text related to didYouMean can be customized according to the requirements and personality of the bot in question.

* Agent Transfer -> If Agent Transfer is present in the bot, you can include the journey explicitly. The provision is shown in the UI under the comments itself.
* Caution - Please include the Agent Transfer journey where you pass journeySlugs so as to not show it as the option in between and most importantly to detect when didYouMean is failing.

#### FAQs
*What if I already have a didYouMean function implemented in my code?*
The didYouMean has been added in such a way that if you already have a function called didYouMean, then the function won’t be overwritten. Though we do advise to give our function a shot as additional features will be tied into the functionality.

*What if I want to add more functionality to the function?*
You are always free to customize the UI function according to your needs.
If in some cases, you feel that some features should be made available by default from the Platform side, you can always drop a message to the below-given details.
