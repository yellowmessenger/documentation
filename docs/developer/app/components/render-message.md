---
title: app.renderMessage
sidebar_label: app.renderMessage
---

Process to get text messaeg from code

## Input Parameters
1. The first argument is the code that we add in the localization tab.
1. The second argument deals with the value you want to pass.
1. The third argument sets a fall back message which gets displayed if it is unable to generate the text message.


## Output Parameters

## Examples

```js
app.renderMessage('code-goes-here',{input parameters as object},'default message')
```

> Usage 
```js
app.sendTexMessage(app.renderMessage("id-number"),{id : id_number},"Here are the details for your login id: {{id_no}}")
```