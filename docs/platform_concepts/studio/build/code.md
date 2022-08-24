---
title: Code
sidebar_label : Code
---

Code section is used to add function code. It is available in **Studio** -> **Build** -> **Code**.

![](https://i.imgur.com/jNHxOtw.png)

Following topics are discussed in this document: 

1. [How to add a new function?](#1) 
    - [Function format](#11)
    - [Args to access code](#12)
    - [How to check for warnings and errors?](#13)
2. [Tools and settings](#ts) 
3. [Using function in a flow](#uf)
4. [Sample code](#sc)

## <a name="1"></a> 1. Function Creation 

You can add a new function to write a custom logic in the **`code`** section.

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

![](https://i.imgur.com/PIhDXVB.jpg)

## <a name="ts"></a> 2. Tools and Settings 

* **Tools** - This is a global testing and setting tab. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools) to learn more.
* **Logs** - Helps in identifying events that occur during preview testing, and debugging.
* **Compare** - Compares the Production and Staging functions. 
* **Flows** - Used to copy and paste the flow and step names from this page. 
* **Localization** - Localization can be used to set up a bot response or messages in different languages by adding messages and it can be configured according to preferred language. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#31-variable-in-localisation-message) to learn more.

![](https://i.imgur.com/oqLieOr.png)


### 2.1 Flows

Flows functionality is to quickly support copy and visit a flow with use of their names.

- Select a flow-category.
- Select a flow.
    - You will have an option to copy the flow name. 
    - By clicking the flow link, you will be redirected to the respective flow. You can check how the function works for that flow. 
    - You can view the nodes used in each of the flow. 


![](https://i.imgur.com/Erv0gxk.jpg)



## <a name="uf"></a> 3. Functions in Flow

Function can be used to parse data through an API. Function is also used to manipulate API responses.

Follow the below steps to create a flow with a function node: 

> **Use-case**: Function to parse Weather Data API and to show the different parameters in a carousel format. 

1. Open **Studio** –> **Code**. Click **Add new function**.
For example: transformationFunction (as shown below).

        
![](https://i.imgur.com/VhtUaHr.png)

        
2. The API response is given in JSON object (as displayed below) for the temperature details.
        
        
![](https://i.imgur.com/xiQ3wUM.png)

        
3. Fetch and parse the API response as JSON object. 
        
        
![](https://i.imgur.com/ZE7whNf.png)

In the above code, Weather Data is parsed and stored in the response body in a variable “main”.
        
 
4. The API data is now ready to be used in your bot journey. 

You can store the entire JSON body data in a variable and parse through them for each parameter of weather data that you want to display in the bot.


![](https://i.imgur.com/mWH4Vy6.png)


5. After the global variable is added, open the respective API node and store the response in that global variable.
        
        
![](https://i.imgur.com/SI6adHZ.png)

        
6. Use any prompt to display this data. 

In our example, a carousel is used to display the Temperature and Wind details. You can also add an image of your choice (optional).

        
![](https://i.imgur.com/5ZynLHG.png)

        
You can use the variable symbol and access the various parameters of the JSON object as shown in the above example.
        

![](https://i.imgur.com/gBjO3vm.png)


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
If we receive an encrypted string through API, then we need to decrypt it first then only we can get the actual object. Then upload to YM Server, at last we can share the URL.

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


