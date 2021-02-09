---
title: app.triggerIntent
sidebar_label: app.triggerIntent
---

## Input Parameters
 **journey-slug :** *the slug name of the journey i.e. Journey name converted to kabab case.(Delete memory becomes delete-memory) (Mandatory),  "String type"*

 **entities :** *any entites that are required by the journey (Optional) , "JSON object"*
 
 **step :** *set of steps along with there values(optional), "JSON object"*

​
## Output Parameters
returns null. Trigger the mentioned journey if exist.
​
## Examples
​
```js
return app.triggerIntent(delete-memory, {}, {...data.steps});

```
​
> *It usually is a good practice to return the above statement hence skipping any code below it.*
> *When doing a trigger Intent, all the context to that Intent( context.intent information) is reset to null values.*
