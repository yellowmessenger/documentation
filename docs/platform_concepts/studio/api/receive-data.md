---
title: Get response data and alter the the information to show
sidebar_label : Fetch & transform response data
---


In this article, you will learn -
 
1. [How to get response from an API](#1)
2. [How to parse the response information and alter the data to show a specific information the user needs in a better readable format](#2)

## 1. Get the response data from API

In the preceding article you have learnt how to pass input parameters in a API. In this article, we will show how to retrieve the data from response and parse the data in the way that you need to display.
  
To retrieve the API response and display it to the user, follow these steps -

1. When configuring a flow, add a Prompt/Message node after the actions node where you want to retrieve the response.
2. Select the variable where you have stored the API response.
3. Using the dot notation, access the value of API response.

![](https://i.imgur.com/03jY5iw.png)

  

When a user inputs values through the conversation, the bot displays the ID.


Learn more about the API node [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#api).

  

## 2. Display response information using Transformation Function

With the preceding procedure, you get the response object. You can use *Transformation function* to alter the structure and format of the raw data and show it in a more meaningful format.  

API section can be used to invoke APIs but to parse and manipulate the API response, transformation function come in handy.

  

To parse and alter the response data, follow these steps -

1. Open **Studio > Build > Code**. Click **+Add new function**.  

![](https://i.imgur.com/tAgKjlN.png)

  

**Code Snippet**: Example- transformationFN

```js
let { apiResponse } = ymLib.args; // retrieve API response
let  weather_condition, actions = [],result=[];
let  response = JSON.parse(apiResponse.body);
response = response.weather; // fetch weather data from API response
response.forEach((element, index) => {
actions = [];
weather_condition = `<strong>${element.main}</strong>`;
});
console.log(weather_condition);
return  weather_condition;
```

  
  

2. You will see the JSON response in the *API Response* pane on the right. Fetch and parse the API response as JSON using the following code snippet.

![](https://i.imgur.com/ttqljrF.png)

  
```js
let  apiResponse = ymLib.args.apiResponse; // fetch API response
let  body;
if(apiResponse && apiResponse.body)
{
body = JSON.parse(apiResponse.body) // parse API response and store it in body variable
}
```

3. In the API response, it starts with an array followed by JSON objects. To access response from the array and store it in the `postOffice` variable, add the following lines of code in the *Transformation function*.

```js
let  postOffice = body[0].PostOffice; // Access and store PostOffice field from the API response
console.log(postOffice);
let  postofficeName = [];
```

In the transformation function, you can access the API response in ymLib.args. You can write your own logic in javascript to fetch only the fields you wish to have in the response of API.

  

4. After getting access to JSON object, use a for loop to iterate over all objects and parse `Name` key from the objects, which will be pushed to the `postofficeName` array.

```js
for(let  i=0;i< postOffice.length; i++)
{
postofficeName.push(postOffice[i].Name) // fetch PostOffice Name and store in postOfficeName array
}
return  resolve(postofficeName);
```

5. In the API node, select the transformation function that was created using the  **Parse API response** drop-down.

![](https://i.imgur.com/058ZmtW.png)







