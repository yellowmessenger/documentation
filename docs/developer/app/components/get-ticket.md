---
title : app.getTicket
sidebar_label : app.getTicket
---
It is used to a fetch ticket details.

## Input Parameters
ticketId
​
## Output Parameters
An Object, with success data/failure message
​
## Example Usage
​
```javascript
app.getTicket({ticketId: "123"}).then((result) => {
    app.log(result, "getTicket result")
}).catch(err => {
	app.log(err, "getTicker error");
});
```