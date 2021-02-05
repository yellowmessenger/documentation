---
title: app.regexValidator
sidebar_label: app.regexValidator
---

app.regexValidator - Validates the given string against the regular expression

## Input Parameters

**regex** : *Regular experession to validate string*
**message** : *String to be validated*
**flag** : *Flags to be used for regular expression*
**fallBackMessage** : *Fallback message in case of failure*


## Output 
1. Function returns a **promise**

## Examples

```js
app.regexValidator(
    { regex: '(dart|cart)', message: "bart gun" }).then((res) => {
    app.log(res);
})
```

> it prints an object with success key set to **false**

