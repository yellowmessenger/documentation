---
title: API Management
sidebar_label : Receiving data from an API
---

### How to access data from an API/Response?

To retrieve the API response and to display it to the user, please follow the below steps.


1. Add a Prompt/Message node after the actions node.

2. Select the Variable where you stored API Response.

3. Using the dot notation, access the value of API response.


![API Response](https://cdn.yellowmessenger.com/pM8aYXXUTfPf1623906957904.gif)

Finally, when a user messages the bot, the id would be displayed to the user.


### How to access transformation Function in API actions node

Transformation Function can be used when you wish to modify/manipulate the API response in order to present the API response in a more meaningful format to the user.

1. Add the a function in the `Code` module and add the code snippet below.

![](https://i.imgur.com/b4AJP3Y.png)

In the transformation function, you could access the API response in ymLib.args. You could write your own logic in javascript to fetch only the fields you wish to have in the response of API.

**Code Snippet**: transformationFN
```js
let { apiResponse } = ymLib.args; // retrieve API response
let weather_condition, actions = [],result=[]; 
let response = JSON.parse(apiResponse.body); 

response = response.weather; // fetch weather data from API response
response.forEach((element, index) => {
      actions = [];
      weather_condition = `<strong>${element.main}</strong>`;
});
console.log(weather_condition);
return weather_condition; 
```
2. Once the transformation function is in place, return the value (here `name`) so that would be saved in a variable (here `response`). You could use the variable in Prompt or Message node to send that to user. 

![](https://i.imgur.com/ADPdxJ7.png)