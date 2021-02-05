---
title : app.getVariable
sidebar_label : app.getVariable
---
## Input Parameters
A string key that needs to be searched in the context


## Output Parameters
returns a promise, if the string keyword was set in journey at some point, it can be extracted. Else returns not found

## Examples
​
```js
app.getVariable('input').then(data=>{
        console.log(data,"data in context" )
    }).catch(E=>console.log(E))
```
​
> This method utilises the context object and extracts various varaibles that were set in the journey.
> code wise these steps can be set as 
```app.context.variables = {"input":{"value":"output"}}```
> here input was the key and Output was the value that was stored there. The return value against the keyword should always be an object with a child ket > as "variable"
