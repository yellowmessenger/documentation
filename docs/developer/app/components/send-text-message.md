---
title: app.sendTextMessage
sidebar_label: app.sendTextMessage
---
The process to sent text messages in the bot

## Examples

```js
app.sendTextMessage(`Your message with value ${variable_name}`).then(() => {
    // do this part if something has to be done only after sending the message
})
```

> If the variable is a JS Object or a JSON Object, then using JSON.stringify(variable_name) would be better so that you don’t miss any of the fields.

> It would be better to not use text messages to display an object in practice, apart from testing and debugging purposes.

> The function is asynchronous and hence it may happen that the text message may not come in the order that you expect. So, since the function is Promisified writing further instructions inside the .then block is the best practice.