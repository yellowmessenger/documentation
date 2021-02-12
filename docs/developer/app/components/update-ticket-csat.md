---
title: app.updateTicketCsat
sidebar_label: app.updateTicketCsat
---

app.updateTicketCsat is used to update the CSAT score for the ticket. This information will also reflect in the report downloaded from tickets tab.

## Input Parameters
ticketId, csatData
​
## Output Parameters
An Object, with success/failure message
​
## Example Usage
​
```javascript
app.updateTicketCsat({
	ticketId: ticketData.ticketId, csatData: {
		ticketCsatScore: 1, // integer - either 0 or 1. (0 for unsolved, 1 for solved)
        agentCsatScore: 5 // integer - range is between 1-5.
}}).then(res => {
    app.log(res, "success csat data");
}).catch(err => {
	app.log(err, "error in csat data");
});
```

## Note:
> Custom CSAT should be triggered upon receiving ticket-closed event.