---
title: Transformation Function
sidebar_label : Transformation Function
---

API section can be used to invoke APIs but to parse and manipulate the API response, transformation function come in handy. Let's see how to add a new transformation function and use it to parse the API response.


1. Go to Studio>Code and click on add a new function.

![](https://i.imgur.com/Nsi7oCD.png)



2. As you can see on the right side of the below screenshot, API response is given which is in JSON format. Let's fetch and parse the API response as JSON using following code snippet.

![](https://i.imgur.com/ttqljrF.png)

```js
let apiResponse = ymLib.args.apiResponse; // fetch API response
let body;

if(apiResponse && apiResponse.body)
{
    body = JSON.parse(apiResponse.body) // parse API response and store it in body variable
}
```

3. In the API response, it starts with an array followed by JSON objects. To access response from the array and store it in the `postOffice` variable, we can add following lines of code in the transformation function.
```js
let postOffice = body[0].PostOffice; // Access and store PostOffice field from the API response
console.log(postOffice);
    
let postofficeName = [];
```

4. Now that we have access to JSON object, we can use a for loop to iterate over all objects and parse `Name` key from the objects, which will be pushed to the `postofficeName` array.

```js
for(let i=0;i< postOffice.length; i++) 
    {
        postofficeName.push(postOffice[i].Name) // fetch PostOffice Name and store in postOfficeName array
    }

return resolve(postofficeName);s
```

5. Finally, in the API node select transformation function we created now and you bot is good to go!

<img src="https://i.imgur.com/cxV10YT.png" alt="drawing" width="60%"/>