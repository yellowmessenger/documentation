---
sidebar_label: Function & APIs related use cases
title: Functions & API related use cases
---


## Store API response in a variable

#### How can I store all the values of an API response as an object and use them in different nodes?

You can store the response as an object using the following code:

```js
const response = {
  "school": "School Name",
  "address": "123 Main Street",
  "city": "Anytown",
  "state": "CA",
  "zip code": "91234"
};
```

You can then access the values in the object using the following code:

```js
return  new  Promise(resolve => { 
	const { apiResponse } = ymLib.args; 
	let { body } = apiResponse 
	body = JSON.parse(body) 
	console.log(body, "apiresponse in test") 
	let { school } = body; 
	resolve(school); });
```
1. If the variable is a string type, to store the variable in the property `school` you will need to use the property like this:  `{{{variables.school}}}`
2. If the variable is an object, you will need to use the dot notation to access the property, like this: `{{{variables.school.name}}}`.

:::note
* You can use the `console.log()` function to check the value of the variable in the logs. This will help you to debug the issue.
* If you are debugging an API call and you are not seeing the data that you expect, it is possible that the response is missing a body. In this case, you will need to parse the response body in order to access the data.
:::

**Checklist**

1.  Make sure that the API call is successful. You can check this by inspecting the response in the developer tools.
2.  Make sure that the response is stored in the appropriate variable. You can check this by inspecting the variable in the developer tools.
3.  Make sure that the response is being parsed correctly. You can check this by inspecting the response object in the developer tools.