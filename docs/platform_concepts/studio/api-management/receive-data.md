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



1. Add the a function in the transformation function


2. In the transformation function, you could access the API response in ymLib.args.
You could write your own logic in javascript to fetch only the fields you wish to have in the response of API.



3. After your logic, please return the value so that would be saved in a variable. You could use the variable in Prompt or Message node to send that to user.
![API Response](https://cdn.yellowmessenger.com/AcpS8JuDUAbu1623865522897.png)



A sample transformation function to modify the information which we get from shopify API.

Another example transformation function here. 
```
return new Promise(resolve => {
    // userdetals api => {name:"Ravi", age:34}
    ymLib.logger.log((ymLib.args.apiResponse, "response"));
    return resolve(ymLib.args.apiResponse.name);
});

```