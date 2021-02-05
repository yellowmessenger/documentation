---
title : app.ask
sidebar_label: app.ask
---
This function will send message/data to the specified bot

## Input Parameters

1. botId
2. data

## Output Parameters

1. No Output

(It will directly shows the data sent by the bot)

## Example

```js
app.ask("x1602139738821", {
        "message": "testing"
    }).then((data) => {
        
    }).catch(error => {
        // do somthing on fail
    })
```