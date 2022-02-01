---
title: Code
sidebar_label : Code
---
## How to create a new function? 
You can add a new function to write your custom logic in code in the **`code`** section of the studio. 
To execute these functions in a flow, you can attach function action node.

**Format of cloud functions**
```js
return new Promise(resolve => {
      // Your logic goes here
      resolve();
  }); 
```

---

## Useful args you can access in code


| arg | data type | Use |
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

## Useful Code Snippets

### Autocomplete
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

### Decode BASE64

**The Base64 Alphabet contains 64 basic ASCII characters.**

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

For more information : [Click Here](https://developer.mozilla.org/en-US/docs/Glossary/Base64)