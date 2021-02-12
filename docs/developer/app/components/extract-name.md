---
title : app.extractName
sidebar_label : app.extractName
---
## Input Parameters
A string

## Output Parameters
returns a promise, if the string contains a name, it will return a name
​
## Examples
​
```
app.extractName("my name is yellowMessenger").then((data)=>console.log("data",data)).catch(e=>console.log(e));


```
​
> This method utilises the prediction to identify any name that may be there in the provided string.
 The real time demo can be viewed from "test your bot", and the returning name will be visible under "parser.noun_chunks "