---
title: app.feedbackEvent
sidebar_label: app.feedbackEvent
---

This object contains a method `feedbackProvided` to get the feedback
event data

## Methods

## feedbackProvided

This method returns the feedback event data

### Syntax

``` js
app.feedbackEvent.feedbackProvided();
```

### Return Value

This method returns an `object` if there is a feedback event otherwise
returns `false`

### Example

``` javascript
let feedback = app.feedbackEvent.feedbackProvided();
app.log(feedback);
//the log will be
//if feedback event is present
{
    "event": "feedback-event",
    "data" : "event-data"
}
//if feedback event is not present
false
```