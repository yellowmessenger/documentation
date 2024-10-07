---
title: Functions
sidebar_label : Function (code)
keywords : [code, function, math, calculations]
---


Functions extend the capabilities of your bot by allowing you to implement custom logic and perform actions that go beyond the built-in features. 


Your bot can use them to execute various tasks. For instance, it can  can display the bot ID, format dates into readable strings, extract specific categories from user input, parse multi-part FAQ responses into manageable outputs, and much more.



### Why use functions for your chatbot:

* **Personalized Logic Integration**: Functions enable you to add tailored logic that meets specific requirements, which might not be covered by default bot capabilities.
* **Enhanced flexibility**: By writing custom functions, you can handle unique scenarios, perform complex operations, and integrate with external systems.
* **Improved user experience**: Functions can help deliver personalized and dynamic responses, leading to a more engaging and satisfying user interaction.
* **Seamless integration**: Functions facilitate smooth integration with third-party APIs, databases, and other external services, extending the bot's utility.
---
## Create functions in bot builder:

To create a function, follow these steps:

1. Go to **Automation** > **Build** > **Functions** > **+ Add new function**.

      ![](https://imgur.com/50y8OZt.png)  

2. Provide a specific name to your function and click on **Add**.

<img src="https://i.imgur.com/1hrPa3c.png" alt="drawing" width="70%"/>

   When creating functions, it's important to adhere to the following **naming rules** to ensure validity and consistency within your coding environment. Make sure to adhere to these naming conventions:
    - Function names must contain a minimum of 2 characters.
    - No special characters (e.g., `@`, `#`, `!`, `$`, etc.) or spaces are allowed.
    - The function name should follow camelCase (e.g., `checkAgentAvailability`).
    - Function names must be unique, with no duplicates.



### Function arguments


 In programming, *arguments* serve as inputs that allow the bot to retrieve precise information or perform specific actions within your code, enabling more tailored and dynamic responses.

The table below provides the list of arguments you can use to access relevant information:


| **arg** | **Data type** | **Use** |
| -------- | -------- | -------- |
| data.variables.<variable_name>   | String | Retrieves the relevant bot variable within the function based on the provided `variable_name`. |
| data.channel | String | Retrieves the current channel name of the bot user like whatsapp, yellowmessenger, facebook, etc.|
|data.profile| Object  | Retrieves properties of the current user such as name, number, email, city, country, and language. |
| data.sender | String | Retrieves the sender ID. For example, on WhatsApp, the sender ID is the user's phone number, while for website bots, it's a long string representing the unique session ID. |
|data.bot | String | Retrieves the bot ID specific to the environment (staging, production, or sandbox).|
|data.message | String | Retrieves the message inputted by the user during the conversation. This allows the bot to respond to the latest input.|
|data.event.<event_name> | Object | Retrieves the data related to a specific event, allowing the bot to handle scenarios like ticket creation or resolution.|
|ymLib.args.apiResponse | any | Retrieves and processes an API response within a parser function before assigning it to a variable.|
| ymLib.args.logger | Object | Retrieves and pushes the API response into the logs for debugging and tracking purposes. |
| context.history | Object | Retrieves the history of nodes that the user has passed through on the cloud platform.|
| prediction.intents | String | Retrieves predicted [intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) from the user message,  based on the confidence level.|
| prediction.entities |String| Retrieves the list of predicted  [entities](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities)  from the user message. |


#### Parameters to access user data

The table below lists all parameters associated with accessing user information:


| **User property name** | **arg** | **Data type** | **Description** |
|-------------------|-------------------|---------------|------------------------|
| userId | data.user.userId | string | Retrieves the unique identifier of the user as configured in User 360. This could be a mobile number, email, or any other identifier. For more details, visit [documentation](#1-userid-as-a-property). |
| firstName | data.user.firstName | string | Retrieves the first name of the user. |
| lastName | data.user.lastName | string | Retrieves the last name of the user.|
| gender | data.user.gender | string |  Retrieves the gender of the user. |
| country | data.user.country | string | Retrieves the country of the user based on their IP address. |
| city | data.user.city | string | Retrieves the city of the user based on their IP address. |
| language | data.user.language | string | Retrieves the preferred language of the user.|
| timezone | data.user.timezone | string | Retrieves the timezone of the user based on their IP address. |
| email | data.user.email | email | Retrieves the email address of the user.|
| phone | data.user.phone | phone | Retrieves the phone number of the user with the country code.|
| lastChannel | data.user.lastChannel | string | Retrieves the most recent channel (set up on yellow.ai) where the user had an active session. |
| dob | data.user.dob | date | Retrieves the date of birth of the user. |
| emailOptin | data.user.emailOptin | boolean | Retrieves the subscription status of the user for emails. The value is`true` if subscribed, else `false`. |
| smsOptin | data.user.smsOptin | boolean | Retrieves the subscription status of the user for SMS. The value is `true` if subscribed, else`false`. |
| whatsAppOptin | data.user.whatsAppOptin | boolean | Retrieves the subscription status of the user for WhatsApp messages. The value is `true` if subscribed, else `false`. |
| tags | data.user.tags | list | Retrieves the list of labels associated with the user.|

---



## Writing bot function code

You can define a custom function using JavaScript. Here is a sample code snippet. Just replace the placeholder 'Your logic goes here' with the specific functionality you wish to implement.

```javascript
return new Promise(resolve => {  
      // Your logic goes here
      resolve();
  }); 
```
---

### How functions work:

This section provides an overview of how functions operate within your bot. 

We will begin with basic examples and gradually move to more complex scenarios, allowing you to build up your knowledge and skills.


In the code examples provided below, you'll see some fundamental JavaScript terms such as `let`, `resolve`, `if/else`, and `console.log`:

- **`let`**: This keyword is used to declare a variable that can hold data.
- **`resolve`**: This function signals the completion of a promise by providing the output from the function.
- **`if/else`**: This construct enables the bot to make decisions based on specified conditions.
- **`console.log`**: This command is used to display messages or data, which is helpful for debugging.


#### 1. Display bot ID (Basic)


Here is a sample code snippet to display the current bot ID:


```javascript
return new Promise(resolve => {
    let botId = data.bot;  // Retrieve the bot ID from the data object
    resolve(`The current bot ID is ${botId}`); // Return a message containing the current bot ID
});
```


 **Explanation:**
 - **Access Bot ID:** The `botId` is extracted from the `data` object.
 - **Display Message:** The function generates a message with the bot ID to be shown as the output.

**Output:** 
The current bot ID is [botId]

---
#### 2. Log current date and time (Intermediate)

The below code snippet captures the current date and time in the Asia/Kolkata time zone. It formats the time accordingly and logs both the date and time. The function then returns the current date.


```javascript
return new Promise(resolve => {
    let currentdate = new Date();
    let currentTime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
    console.log("timestamp#########"); // Outputs a marker for timestamp logging.
    console.log(currentdate);   // Logs the value of currentdate.
    console.log(currentTime);  //  // Logs the formatted current time.
    resolve(currentdate); // // Resolves the promise with currentdate, indicating the operation is complete.
});
```


**Explanation:**

- **Get Current Date:** The `currentdate` variable captures the system's current date and time.
- **`let currentTime`**: This declares a variable named `currentTime` using the `let` keyword, allowing it to be reassigned if necessary.
    - **`new Date()`**: This creates a new `Date` object that represents the current date and time.
    - **`.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })`**: This method formats the time according to the specified locale and options:
  - **`'en-IN'`**: This indicates the desired locale, in this case, English as used in India.
  - **`{ timeZone: 'Asia/Kolkata' }`**: This option specifies the time zone to be used for formatting, ensuring that the returned time corresponds to Indian Standard Time (IST).
- **Log Information:** The complete date and the formatted time are logged for printing both `currentdate` and `currentTime`  to the console, allowing you to confirm that the correct date and time are being captured and formatted as expected.
- **Return Date:** The function returns the system's current date and time.

**Output:**
Logs the current date and time in 'Asia/Kolkata' timezone and returns the current date.

---
### 3. Check email verification status (Intermediate)

This function checks whether the user's email address has been verified. It retrieves the user's email verification status and returns an appropriate message.

```javascript
return new Promise(resolve => {
    let emailVerified = data.user.emailOptin; // retrieves the email verification status from the data object.
    
    if (emailVerified) { // Checks if the email is verified.
        resolve("Your email address has been successfully verified."); // if verified, resolves the promise with a success message.
    } else {
        resolve("Your email address is not verified. Please verify your email to continue."); // else, resolves the promise with a failure message.
    }
});
```
**Explanation:**
- **Retrieve Email Verification Status:** The `emailVerified` variable gets the email verification status from the user's properties.
- **Check Verification:** The function checks if the email is marked as verified.
- **Return Message:** Depending on the verification status, it returns a confirmation message or a prompt to verify the email.

**Output:**
A message stating whether the user's email is verified or not, based on their stored email verification status.

---
## Complex use cases

### 4. Limit error message display (Advanced)

This function limits the display of a validation error message to a specified number of times. It uses a session variable to count the number of attempts a user has made and restricts the error messages after a certain limit.
```javascript
return new Promise((resolve) => {
    let maxAttempts = 3; // Set the maximum allowed attempts for validation
    
    // Get the current number of attempts from the history or initialize it to 0
    let attempts = context.history.getItem('validationAttempts') || 0;
    
    // Check if the current number of attempts is less than the maximum allowed
    if (attempts < maxAttempts) { 
        context.history.setItem('validationAttempts', attempts + 1); // Increment the attempt count and store it in the history
        resolve("Please enter a valid email address."); // Return a message asking the user to enter a valid email address
    } else {  
        resolve("Error limit reached. Please refresh or contact support."); // If the maximum attempts are reached, return an error message
    }
});
```
**Explanation:**
- **Initialize Maximum Attempts:** Set the `maxAttempts` variable to define the maximum number of times the error message can be displayed.
- **Retrieve and Increment Attempts:** The `attempts` variable retrieves the current count of error attempts from the session history. If it's below the maximum, it increments the counter and updates the session.
- **Conditional Message Display:** If the user has not exceeded the maximum attempts, it shows the error message. If the limit is reached, it provides a different message to indicate no more error messages will be displayed.

**Output:**
An error message prompting a valid input if under the limit, or a message to contact support or refresh if the limit is reached.

---


### 5. Check category match (Advanced)

The following code snippet checks if the text provided by the user matches with any of the categories listed in the data.

It processes the categories and the user text, checks if the text includes the word "and" (replacing it with "&"), and then compares the processed text against each category. It returns "yes" if there is a match and "no" otherwise.


```javascript
return new Promise(resolve => {
  let categories = data.variables.query_result.records[0].main_categories; // Get the list of categories from the bot's data
  let userTextData = data.message; // Capture the user's input message
    
    
  // If the user's input contains 'and', replace it with '&'  
  if (userTextData.includes('and')) { 
    userTextData = userTextData.replace('and', '&');
  }
  console.log("userTextData??", userTextData); // Log the modified user input for debugging
  let cat_arr = categories.split(",");
  const arr_length = cat_arr.length;
    
    
  // Loop through the categories array to find a match with user input
  for (let i = 0; i < arr_length; i++) { /
    if (cat_arr[i].trim().toLowerCase() == userTextData.toLowerCase()) {  // Compare each category (case-insensitive) with the user's input
      return resolve("yes"); // If a match is found, return "yes"
    }
  }
  return resolve("no"); // If no match is found, return "no"
});
```



**Explanation:**

- **Retrieve Categories:** The `categories` variable gets the list of categories from the data.
- **Process User Text:** The `userTextData` is checked for the word "and", which is replaced with "&" if found.
- **Split Categories:** The `categories` string is split into an array of category strings (`cat_arr`).
- **Check for Match:** The function compares the user-provided text with each category in a case-insensitive manner.
- **Return Result:** If a match is found, it resolves with "yes"; otherwise, it resolves with "no".


**Output:**
"yes" or "no" based on whether the user text matches any category.

---
### 6. Dynamically add authorization token (Advanced)


This function retrieves the authorization token from an API response and prepares it for use in future requests.

It extracts the `auth_token` from the API response, allowing for automated token management without the need for manual entry of the token key.

```javascript
return new Promise(resolve => {
  let { apiResponse } = ymLib.args; // Retrieve API response
  let token = JSON.parse(apiResponse.body); // Parse the response body to extract token

  console.log(token); // Print the token for debugging

  // Return the token in the required format
  return resolve(token.token_type + " " + token.access_token);
});
```
**Explanation:**

- **Retrieve API Response:** The `apiResponse` variable gets the response data from the API call.
- **Parse Response Body:** The response body is parsed using `JSON.parse` to extract the `token_type` and `access_token`.
- **Log Information:** The token is printed to the console for debugging.
- **Return Token:** The function gives back the token in the correct format.

**Output:**
The function will return the extracted authorization token.

---
### 7. Checking agent or service availability by time zone (Complex)

Here is a sample code snippet to check whether an agent or a service is available based on the current time in a specific time zone (Asia/Kolkata). 

It captures the current time in the Asia/Kolkata time zone and determines if the time falls within the business hours (between 9 AM and 11 PM). Based on this, it either returns "ALLOW" (if within the allowed hours) or "Not ALLOW" (if outside the allowed hours).


```javascript
return new Promise(resolve => {
  let dates = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false }); // Get the current time in the Asia/Kolkata time zone in 24-hour format
  let status;  
  let hour = dates.split(':')[0]; // Extract the hour from the time string
    
  // Check if the hour is between 9 AM (09:00) and 11 PM (23:00)
  if (hour >= 9 && hour <= 23) {  
    status = "ALLOW"; // Action/service is allowed
  } else {
    status = "Not ALLOW"; // Action/service is not allowed
  }

  return resolve([status]); // Return the status as an array
});
```

**Explanation:**

- **Fetch Current Time:** Retrieves the current hour in the "Asia/Kolkata" timezone using 24-hour format.
- **Check Time Window:** If the time is between 9 AM and 11 PM(business hours), the bot will allow the action or service; otherwise, it will restrict it.
- **Return Status:** Sends a message indicating whether the action/service is allowed or not.

**Output:** 
"ALLOW" or "Not ALLOW" based on the current time.

---
### 8. Split FAQ response (Complex)

This function splits a FAQ response into two parts and returns them as an array.

It processes the faq_response data, splits it at the $ symbol, and returns the two parts as an array.


```javascript
return new Promise(resolve => {
    let res = data.variables.faq_response; // Get the FAQ response from the input data
    
    // Split the response at the '$' symbol into two parts
    let responses1 = res.split('$')[0];
    let responses2 = res.split('$')[1];

    // Optional: Log the responses for debugging purposes
    console.log("reeeeeee%%%%%%");
    console.log(responses1);
    console.log(responses2);
    
    let responses = [responses1, responses2];  // Combine both parts into an array
    
    resolve(responses); // Return the array of responses
});
```



**Explanation:**

- **Retrieve FAQ Response:** The `res` variable gets the FAQ response from the data.
- **Split Response:** The `res` string is split into two parts using `$` as the delimiter, resulting in `responses1` and `responses2`.
- **Log Information:** Logs the split parts for debugging purposes.
- **Return Responses:** The function returns the two split responses as an array.



**Output:** 

An array containing the two parts of the FAQ response, such as `[responses1, responses2]`.


---

Once you've entered your custom logic in the available editor, referring to the arguments, parameters and custom code examples provided above, click on **Save**.



   ![](https://imgur.com/JOkktAW.png)

If there are any errors in the code, you can view them under **Warnings**  at the bottom.  Address the displayed warnings/errors if any.

   ![](https://imgur.com/v6vtymj.png)
   


## Additional options for functions

This section has some funcionalities common to the entire bot that will help you to adjust your bot's performance.

![](https://imgur.com/1hOchRq.png)

#### Tools

This is a global testing and settings tab. It allows you to test your bot's responses by entering user inputs. For example, if you type "speak to support" or "schedule a meeting," it predicts the most relevant intents along with the associated confidence score, helping you understand how effectively your bot can recognize user utterances. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) to learn more.

![](https://imgur.com/A8Ia9gx.png)


#### Compare (the function between Staging & Production environment)

This option compares the function between staging and production environments depending on the environment the bot is currently in. 

   ![](https://i.imgur.com/o39MHHR.png)

#### Flows

Flows streamline the management of conversation paths, allowing you to make edits without switching back to the build section. For example, while working on the "Book a Test Drive" flow, you can see relevant nodes like text and carousel. By entering/copying the journey name, you can locate all nodes, modify them in functions, and any updates will be automatically reflected in the flow. This makes managing your bot’s conversations much more efficient.

   ![](https://imgur.com/Cjzmph9.png)

#### Localization

The Localization feature allows you to easily add translation capabilities to your bot. Instead of creating separate workflows for each language, it offers a unified solution. For instance, the phrase "Hi, how are you?" can be translated into various languages, like English, Hindi, and Tamil, ensuring users receive messages in their preferred language. For more details, visit [documentation](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#-12-add-translations-using-code).

![](https://imgur.com/l35JSvb.png)

## Using functions in flows

Functions are used in flows via the [Function node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function). 

The following is an example where the function node is used to convert minutes to seconds.

1. Create a flow with the [Question node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#21-question) to take an input from the user and store the response in a variable, pizzamin.

![](https://i.imgur.com/FS5E7IW.png)

2. Go to **Functions**, pass this variable and write a code to convert minutes to seconds.

For example,

```
return new Promise(resolve => {
    let minutesTaken = data.variables.pizzamin;
    let secondsTaken = minutesTaken * 60;
    let stringSeconds = secondsTaken.toString();
    resolve(stringSeconds);
  });                          
  
```

3. Include a function node, pass the function created in the previous step, and store the response in another variable, pizzasec.

![](https://i.imgur.com/0rC44SF.png)

5. To display the result to the end user, include a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-text) and choose the pizzasec variable.

![](https://i.imgur.com/lpEw972.png)

**Result:**

<img src="https://i.imgur.com/dBTzVuR.png" alt="drawing" width="50%"/>


---

**What Next?**

* Create your own function and use it by adding an [API node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#api) in the flow.
* You can visit our [community](https://community.yellow.ai/) and share your ideas with other fellow bot builders.

