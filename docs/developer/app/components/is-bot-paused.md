---
title : app.isBotPaused
sidebar_label : app.isBotPaused
---


## Input Parameters
app.bot : *bot id*
app.sender : *sender value*
app.source : *source/platform*

​
## Output Parameters
returns a promise, if the bot is in paused state--> returns " {"paused":true} "
​
## Examples
​
```js
 app.isBotPaused(app.bot, app.sender, app.source)
 					.then((data)=>console.log(data,`Pause status of the bot ${app.bot}-${app.source} : `))
 					.catch(E=>console.log(E))

```
​
> This method can be utilised to check if the bot is in pause state. This functionality can be used while pausing an unpausing the bot from connecting agent.
