---
title : app.sendCards
sidebar_label : app.sendCards
---

## Input

Cards Object, Cards.actions with relevant parameters and option to hide input from user while cards will be shown.

## Example
```js

app.sendCards(cards: Cards,hideInput: Boolean, options: Options).then(()=>{
  // send cards
});

// Keys Allowed for cards object
declare Cards {
	"backgroundColor",
	"icon",
	"subText",
	"action",
	"vertical",
	"imageAsAction",
	"imageHeight",
	"imageWidth",
	"image",
	"videoOptions",
	"video",
	"title",
	"text",
	"insuranceCard",
	"profile",
	"slider",
	"tableTitleWidth",
	"tableValueWidth",
	"floatTableLeft",
	"table",
	"baggageInformation",
	"flightSeatServices",
	"baggage",
	"dropDown",
	"input",
	"form",
	"actions": Cards.Actions,
	"action.buttonbackgroundColor",
	"action.textColor",
	"action.borderColor",
	"action.text",
	"action.triggerJourney",
	"action.postback",
	"action.analytics",
	"action.url",
	"action.title",
	"imageAsAction.postback",
	"imageAsAction.analytics",
	"imageAsAction.url",
	"videoOptions.thumbnailImage",
	"insuranceCard.title",
	"insuranceCard.subtitle",
	"insuranceCard.premium",
	"insuranceCard.types",
	"insuranceCard.multiSelect",
	"profile.image",
	"profile.header",
	"profile.subHeader",
	"slider.step",
	"slider.text",
	"slider.val",
	"slider.min",
	"slider.max",
	"flightSeatServices.tripInformation",
	"flightSeatServices.Indigo_6EInfo",
}

// Keys Allowed for cards.actions object
declare Cards.Actions {
	"grid",
	"display",
	"list",
	"isMarkdown",
	"enableFeedBack",
	"maskBotMessage",
	"hideInput",
	"enableFeedBack",
	"shouldEndSession",
	"suggestions",
	"ignorei18n",
	"target_language",
	"targetLanguage",
	"translateAPI",
	"refactorApiResponse",
}

```