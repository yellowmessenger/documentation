---
title: app.allSteps
sidebar_label: app.allSteps
---

## Input Parameters
It is an Array contains info of each step id and slug as an object. 

## Examples
```javascript
app.log(app.allSteps);

// the log will look like below
[
    {
        "id": "5e31aa76069ba4001001e341",
        "slug": "hi"
    },
    {
        "id": "5e31aa8a7971bc0010d1f32a",
        "slug": "bye"
    }
]
```