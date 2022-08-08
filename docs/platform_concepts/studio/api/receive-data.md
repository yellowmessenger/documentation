---
title: Receive Data from API and Parse Response
sidebar_label : Receiving data from an API
---

## 1. Access data from an API/Response

To retrieve the API response and display it to the user, follow the below steps:


1. Add a Prompt/Message node after the actions node.

2. Select the Variable where you stored API Response.

3. Using the dot notation, access the value of API response.


![](https://i.imgur.com/03jY5iw.png)

When a user messages the bot, the ID would be displayed to the user.

> Learn more about the API node 
[here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#api)


## 2. Access transformation Function in API actions node - API Parse Response

Transformation Function can be used to modify/manipulate the API response in order to present the API response in a more meaningful format to the user. 
API section can be used to invoke APIs but to parse and manipulate the API response, transformation function come in handy. 
Follow the given steps to access transform function:


1. Open **Studio > Build > Code**. Click **+Add new function**.

![](https://i.imgur.com/tAgKjlN.png)

**Code Snippet**: Example- transformationFN
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

2. On the right side of the below screenshot, API response is given which is in JSON format. Fetch and parse the API response as JSON using following code snippet.

![](https://i.imgur.com/ttqljrF.png)

```js
let apiResponse = ymLib.args.apiResponse; // fetch API response
let body;

if(apiResponse && apiResponse.body)
{
    body = JSON.parse(apiResponse.body) // parse API response and store it in body variable
}
```

3. In the API response, it starts with an array followed by JSON objects. To access response from the array and store it in the `postOffice` variable, add following lines of code in the transformation function.
```js
let postOffice = body[0].PostOffice; // Access and store PostOffice field from the API response
console.log(postOffice);
    
let postofficeName = [];
```

> In the transformation function, you can access the API response in ymLib.args. You can write your own logic in javascript to fetch only the fields you wish to have in the response of API.

4. After getting access to JSON object, use a for loop to iterate over all objects and parse `Name` key from the objects, which will be pushed to the `postofficeName` array.

```js
for(let i=0;i< postOffice.length; i++) 
    {
        postofficeName.push(postOffice[i].Name) // fetch PostOffice Name and store in postOfficeName array
    }

return resolve(postofficeName);s
```

5. In the API node, select transformation function that was created from the **Parse API response** dropdown.

![](https://i.imgur.com/058ZmtW.png)











