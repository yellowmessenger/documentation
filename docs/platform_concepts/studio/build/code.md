---
title: Code
sidebar_label : Code
---

The code section is used to add function code. It is available in **Studio** -> **Build** -> **Code**.

![](https://i.imgur.com/vFb21QP.png)

Following topics are discussed in this document: 

1. [How to add a new function?](#1) 
    - [Function format](#11)
    - [Args to access code](#12)
    - [How to check for warnings and errors?](#13)
2. [Tools and settings](#ts) 
3. [Using function in a flow](#uf)
4. [Sample code](#sc)
5. [Math operations](#math)


> To work around this section, you will require minimal coding skills. 

## <a name="1"></a> 1. Function Creation 

You can add a new function to write custom logic in the **`code`** section by clicking **+Add new function**.

> To execute these functions in a flow, attach a [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#function)- action node.

### <a name="11"></a>1.1 Format of cloud functions
```js
return new Promise(resolve => {
      // Your logic goes here
      resolve();
  }); 
```

### <a name="12"></a>1.2 Arguments- Args 

Useful args to access in code:

| arg | Data type | Use |
| -------- | -------- | -------- |
| data.variables.<variable_name>   | Key : String, Value: any |To access any bot variable in code. |
| data.channel | String | To access channel names like whatsapp, yellowmessenger, facebook etc|
|data.profile| Object| Contains user profile values like name, number, email, city , country, language |
| data.sender | String | User ID |
|data.bot | String| Bot ID|
|data.message | String | To access Last/latest user message in the conversation|
|data.event.<event_name>|Object|To access events in code|
|ymLib.args.apiResponse | any | To access API response in API transformation function|
| ymLib.args.logger | Object | Can be used to add logs |
| context.history | Object | Contains history of nodes visited by user|
| prediction.intents |  | To get Intents predicted from user message |
| prediction.entities || To get entities predicted from user message |

---

### <a name="13"></a>1.3 Check Warnings

Click the warnings link at the bottom left of the screen and correct the displayed warnings/errors.

![](https://i.imgur.com/712jhMk.jpg)

---

## <a name="ts"></a> 2. Tools and Settings 

* **Tools** - This is a global testing and setting tab. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools) to learn more.
* **Logs** - Helps in identifying events that occur during preview testing, and debugging.
* **Compare** - Compares the Production and Staging functions. 
* **Flows** - Used to copy and paste the flow and step names from this page. 
* **Localization** - Localization can be used to set up a bot response or messages in different languages by adding messages and it can be configured according to the preferred language. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#31-variable-in-localisation-message) to learn more.

![](https://i.imgur.com/0jxDdIS.png)


### 2.1 Flows

Flows functionality is to quickly support copy and visit a flow with the use of their names.

- Select a flow-category.
- Select a flow.
    - You will have an option to copy the flow name. 
    - By clicking the flow link, you will be redirected to the respective flow. You can check how the function works for that flow. 
    - You can view the nodes used in each of the flows. 


![](https://i.imgur.com/pmnxMAB.png)

---

## <a name="uf"></a> 3. Functions in Flow

Function can be used to parse data through an API. Function is also used to manipulate API responses.

 To create a flow with a function node, follow the below steps: 

> **Use-case**: Function to parse Weather Data API and to show the different parameters in a carousel format. 

1. Open **Studio** –> **Code**. Click **Add new function**.
For example: transformationFunction (as shown below).

        
![](https://i.imgur.com/VhtUaHr.png)

        
2. The API response is given in JSON object (as displayed below) for the temperature details.
        
        
![](https://i.imgur.com/xiQ3wUM.png)

        
3. Fetch and parse the API response as a JSON object. 
        
        
![](https://i.imgur.com/ZE7whNf.png)

In the above code, Weather Data is parsed and stored in the response body in a variable “main”.
        
4. The API data is now ready to be used in your bot flow. 
5. After the global variable is added, open the respective API node and store the response in that global variable.
        
        
![](https://i.imgur.com/SI6adHZ.png)

        
6. Use any prompt to display this data. 

In our example, a carousel is used to display the Temperature and Wind details. You can also add an image of your choice (optional).

        
![](https://i.imgur.com/5ZynLHG.png)

        
You can use the variable symbol and access the various parameters of the JSON object as shown in the above example.
        

![](https://i.imgur.com/gBjO3vm.png)

----

## <a name="sc"></a> 4. Sample code

### 4.1 Autocomplete

```js
return new Promise(resolve => {
    console.log("inside autoSuggestion");
    let result = data.variables.autoComponents;
    const { term } = data;
    let suggestions = [];
    result.forEach((hit) => {
        if (hit.component.toLowerCase().includes(term.toLowerCase())) {
            suggestions.push([hit.component, hit.component]);
        }
    });
    resolve(suggestions);
});
```

### 4.2 Decode BASE64

The Base64 Alphabet contains 64 basic ASCII characters.
If we receive an encrypted string through API, then we need to decrypt it first then only we can get the actual object. Then upload to YM Server, at last, we can share the URL.

```js
    let call_api = await app.executeApi('api_name', { argument: _value});
    let api_data = JSON.parse(call_api.body);
    app.log(api_data, "#####API DATA");

    let buffer = new Buffer.from(api_data.obj_name, "base64"); // Decode the file
    let file_url = await app.uploadFile(buffer, 'File.pdf');  // Upload the file to YM server
    // await app.sendDocument(file_url, { caption:"FILE", filename: 'File.pdf', mime: 'application/pdf' });
    // Share the File URL
    await app.sendCards([
        {
            title: "Kindly download the same as PDF",
            actions: [{
                title: "DOWNLOAD",
                url: file_url
            }]
        }
    ]);
```

For more information, [click here](https://developer.mozilla.org/en-US/docs/Glossary/Base64).


---

## <a name="math"></a> 5. Math operations

Our code section enables us to perform various types of mathematical operations in each session (that is, the conversation between the end user and the bot). 

**Use-cases**

To understand the math operations, consider the following use-cases: 

1. [Converting user input from minutes to seconds.](#m2s)
2. [Calculating the date 45 days before the current date.](#dyh)

### <a name="m2s"></a> 5.1 Minutes to seconds

1. Create a flow to take **Number of minutes** as an input and store it in a variable. 


![](https://i.imgur.com/6m4eA3L.png)

2. Take the input from the user for the number of minutes (stored in pizzaMin)


![](https://i.imgur.com/uqfI60v.png)

3. Call the variable in the function using the format shared below
> let minutesTaken = data.variables.pizzaMin {{**data.variables.variableName**}}

```
return new Promise(resolve => {
    let minutesTaken = data.variables.pizzaMin;
    let secondsTaken = minutesTaken * 60;
    let stringSeconds = secondsTaken.toString();
    resolve(stringSeconds);
  });                          
```

4. Convert the string into an integer using parseInt().
5. Perform a regular mathematical operation.
6. number of seconds = number of minutes x 60.
7. Convert it back into a string using toString().

![](https://i.imgur.com/Y68T3s3.png)

8. resolve() the value and assign a variable in the function node.





### <a name="dyh"></a> 5.2 To calculate 45 days before the present date

1. Create a flow that uses the `{{date}}` object in the variables section which shares the present date, month, year and other details, using the Variables node.
```
{
    //Date object
    
    "timestamp": "Wed, 28 Jul 2022 05:04:18 GMT",
    "year": 2022,
    "month": 7,
    "date": 28,
    "day": "Thursday",
    "hour": 5,
    "minute": 4
}

```
![](https://i.imgur.com/o4DSX2B.png)

3. Assign the timestamp as shown below and run a function to calculate 45 days before the present date.
![](https://i.imgur.com/UUkUjEU.png)

4. Use the variable `bookingDate` inside our scheduleBooking() function.

```
return new Promise(resolve => {
    let bookingDate = data.variables.bookingDate;
    let dt = new Date(bookingDate);

    dt.setDate(dt.getDate() - 45);
    console.log("Final Timestamp ---> ", dt.toLocaleString());

    let pdate = dt.toLocaleString()
    console.log(pdate,"PDATE IS --->");
    const myArraydate = pdate.split(",");
    const myArray = myArraydate[0].split("/");
    let newDate = myArray[1] + "/" + myArray[0] + "/" + myArray[2]
    data.variables.bookingDate = newDate;

    resolve(newDate);
});    
```

5. resolve() the data back into the bookingDate variable in the function.

![](https://i.imgur.com/KwMGBFu.png)


### 5.3 Output

The text node first prints the current timestamp and the second message is exactly 45 days from the present date.

![](https://i.imgur.com/iPAqfeC.png)

 

---

**What Next?**

* Create your own function and use it by adding an [API node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#api) in the flow.
* You can visit our [community](https://community.yellow.ai/) and share your ideas with other fellow bot builders!!