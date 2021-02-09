---
title: app.invokeJourney
sidebar_label: app.invokeJourney
---


Process to invoke journey directly from the Developer section. 

##### app.triggerIntent is an alias for this function

## Use case

You can call a journey directly without any prompt to user with the help
of invokeJourney.

There can come a situation where an *intent has to be invoked in a
function of another journey* or a *journey itself has to be reinvoked*
after completing it’s whole flow. In such cases, this invokeJourney can
be useful.

## Format of the function
```js
    app.invokeJourney('journeyName', {entityName: 'entityValue'} , {'stepName': value}).then(() => {
        resolve();
     }).catch((e) => {
        //handle error
     })

    // This will trigger default intent
    app.invokeJourney('intentName')
```

-   The first argument is the **name of that journey** that we want to
    invoke.
 
-   The second argument deals with the **entity** that is being used.

-   The third argument **sets a value to a particular step** of that
    journey.

Note : `journeyName` and `stepName` should be slug names i.e, the name
mentioned in brackets of journeys and steps.
