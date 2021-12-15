---
title: How to send bearer token from one API result to another APIs header?
sidebar_label : Using Bearer Token in an API
---

1. Open any journey where you've added API Action Node which invokes auth API.

![](https://i.imgur.com/bqTKe0s.png)

2. Add a new transformation function to parse bearer token from the API response. Store the response in a variable, here we'll be storing the response in `auth` variable.

**Transformation Function: getAuthToken**

```js
let { apiResponse } = ymLib.args; // retrieve API response
let token = JSON.parse(apiResponse.body);

console.log(token);

return token.token_type + " " + token.access_token;
```

3. Open the API where you need to pass the bearer token and pass the bearer token using this syntax: `{{{variable_name}}}`.
Here we need to pass the bearer token under headers, so click on `Add Headers` and enter this text: `{{{auth_token}}}`.

<img src="https://i.imgur.com/wadPMWR.png" alt="drawing" width="60%"/>

4. To try this workflow, try invoking the journey where you're using the auth API. :rocket: