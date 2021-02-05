---
title : app.sendWebViews
sidebar_label : app.sendWebViews
---
## Input 
WebView object with relevant parameters.

## Output
Will send web views in bot.

## Example

```js
app.sendWebViews(data: WebView).then(()=>{
  // After sending webview
})

declare WebView {
	"webView",
	"scrollable",
	"fullWidthWidget",
	"fixedPosition",
	"fullWidthWidget",
	"hideInput",
	"url",
	"id",
	"title",
	"height",
	"teamId",
	"extension",
}
```