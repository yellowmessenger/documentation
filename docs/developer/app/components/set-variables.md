---
title: app.setVariables
sidebar_label: app.setVariables
---

app.setVariables is used to set variables within a journey

## Input Parameters
variable name, variable value
​
## Output Parameters
Success/Error message, in .then()
​
## Example Usage
​
```javascript
app.setVariables("var1", "value1").then(res => {
	app.log(res);
})
```


