---
title : app.sendBoardingPasses
sidebar_label : app.sendBoardingPasses
---

## Input

Boarding Pass object according

## Output

Send Boarding Pass as a Card

## Example

```js
app.sendBoardingPasses(data: BoardingPassess).then(()=>{
  // After sending the Boarding Cards
})

declare BoardingPassess {
  "pnr",
  "flightNumber",
  "barcode",
  "fullName",
  "gate",
  "boardingTime",
  "from",
  "seat",
  "seqNo",
  "duration",
  "to",
  "actions",
  "from.code",
  "to.code",
  "from.city",
  "to.city",
  "barcode.barcodeData",
  "from.departureDate",
  "from.departureTime",
  "to.arrivalDate",
  "to.arrivalTime",
}
```