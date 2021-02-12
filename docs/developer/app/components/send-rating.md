---
title : app.sendRating
sidebar_label : app.sendRating
---

## Input

Rating object with relavant parameters.

## Example
```js
app.sendRating(data: Rating, options).then(()=>{
  // After sending rating
}).catch(error=>{
  // Error in sending Rating
})

declare Rating {
  "type": String, // different types ('star', )
  "max": Number // Number of ratings to be shown (0, 10)
}
```