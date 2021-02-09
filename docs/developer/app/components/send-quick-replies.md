---
title : app.sendQuickReplies
sidebar_label : app.sendQuickReplies
---

## Input

Quick Replies Object with relavant parameters.

## Example
```js
app.sendQuickReplies(quickReplies: QuickReply, options: Options).then(()=>{
  // after sending the quick replies
});

// Keys Allowed for quickReplies object
delclare QuickReply {
  "hideText",
  "title",
  "grid",
  "submitButtonText",
  "options": QuickReply.Options,
  "multiSelect",
  "version",
  "cancelButton",
  "rating",
  "noRatingLabels",
  "leftAlign",
  "persistentOptions",
  "enableFeedBack",
  "autobuttonWidth",
} 

// Keys Allowed for quickReplies.options object
declare QuickReply.Options {
  "ratingType",
  "primary",
  "image",
  "backgroundColor",
  "textColor",
  "doNotSend",
  "upload",
  "sendSelectedEvent",
  "selfReload",
  "location",
  "notification",
  "locationPicker",
  "post_form",
  "text",
  "analytics",
  "triggerJourney",
  "url",
  "postback",
  "title",
  "buttonCss",
}
```