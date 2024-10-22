---
sidebar_label: Function & APIs related use cases
title: Functions & API related use cases
---


# Store API response in a variable

## How to store API response values as objects in your bot

In this tutorial, you will learn how to store all the values from an **API** (Application Programming Interface) response as an object. This allows you to use the data effectively across different nodes of your bot. By following the steps mentioned below, you can easily manage and utilize API data throughout your bot’s features.

## What is an API response?

An API response is the data that you receive from an API when you request information. This data can include various details, like names, addresses, and other relevant information. Storing this response as an object helps you access the data easily.

---
## Steps to store API response

### Step 1: Define the response object

You will begin by defining what the response from the API looks like. This is done by creating a response object. Consider the code provided below:

```javascript
// Define an object to store key information about a school
const response = {
  "school": "School Name",      // Name of the school (string)
  "address": {                  // Address of the school (object)
    "street": "2nd Main",       // Street address
    "doorNo": "23/1",           // Door number
    "city": "New Delhi"         // City of the school
  },
  "city": "Anytown",            // City where the school is located (string)
  "state": "CA",                // State abbreviation (string)
  "zip code": "91234"           // Postal code (string)
};
```
### Explanation:

**Purpose:**  
In the code snippet provided above, we created an object called response that holds both string values (like the school name, city, state, etc.) and a nested object (the address of the school).

**Components:**
- **Constant variable:**  
  `const response` establishes a constant variable that holds the API response.
- **Object structure:**  
  The curly braces `{ }` define an object, which is a way to group related information.
- **key-value pairs:**  
  Each piece of information is represented as a key (like `"school"`) paired with its corresponding value (like `"School Name"`). We also have an object inside another object for the "address" key. This structure allows for easy access and management of the data.


## Step 2: Access values from the Object

In this step, you will learn how to access and use specific values from the API response object. The following code snippet demonstrates this process:

```javascript
return new Promise(resolve => {
    const { apiResponse } = ymLib.args;      // Extract the API response
    let { body } = apiResponse;              // Retrieve the body of the response
    body = JSON.parse(body);                 // Parse the body into a JavaScript object
    console.log(body, "API response in test"); // Log the response for debugging

    // Access string value (school name)
    let { school } = body;

    // Access nested object properties (address details)
    let { address: { street, doorNo, city } } = body;  

    resolve({ school, street, doorNo, city }); // Resolve the promise with the desired values
});

```

### Explanation:

#### Purpose:
This code snippet retrieves and manages data from an API response. It shows how to access both string values (like the school name) and nested object properties (like address details).

#### Components:

- **Promise creation:**  
  `return new Promise(resolve => { ... })` initiates an asynchronous operation to handle the API response while the rest of your code continues executing.
- **API response extraction:**  
  `const { apiResponse } = ymLib.args;` extracts the API response from `ymLib.args`.
- **Body retrieval and parsing:**  
  `let { body } = apiResponse;` retrieves the main content of the response, and `body = JSON.parse(body);` converts it into a JavaScript object.
- **Accessing string value:**  
  `let { school } = body;` extracts the school name
- **Accessing object properties:**  
  `let { address: { street, doorNo, city } } = body;` retrieves the street, door number, and city from the nested `address` object.
- **Promise resolution:**  
  `resolve({ school, street, doorNo, city });` resolves the promise with the extracted values for further use.

  
### Accessing variables

1. **For string variables**: To access and display a string variable (e.g., `school`), use:  
   `{{{variables.school}}}`
2. **For object variables**: If the variable is an object, access its properties using dot notation. For example, to get the `street` property from the nested `address` object, use:  
`{{{variables.school.address.street}}}`

:::note
* You can use the `console.log()` function to check the value of the variable in the logs. This will help you to debug the issue.
* If you are debugging an API call and you are not seeing the data that you expect, it is possible that the response is missing a body. In this case, you will need to parse the response body in order to access the data.

:::

**Checklist**

1. **Verify API call success**: Make sure that the API call is successful. You can check this by inspecting the response in the developer tools.
2. **Check variable assignment**: Confirm that the API response is correctly stored in the relevant variable. You can check this by inspecting the variable in the developer tools.
3. **Ensure proper parsing**: If working with a response object, verify that it is parsed properly to access the desired data. You can check this by inspecting the response object in the developer tools.






