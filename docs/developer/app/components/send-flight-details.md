---
title : app.sendFlightDetails
sidebar_label : app.sendFlightDetails
---

## Input

Flight Details object with relevant parameters.

## Output

Send Flight details as a card.

## Example

```js
app.sendFlightDetails(data: FlightDetails).then(()=>{
  // After Sending Flight Details Card
  
})

declare FlightDetails {
	"options",
	"options.list",
	"trips",
	"pnr",
	"pnr.label",
	"tkpnr",
	"tkpnr.label",
	"from",
	"from.code",
	"to",
	"to.code",
}
```