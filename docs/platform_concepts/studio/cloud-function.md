---
title: Cloud Function
sidebar_label : Cloud Functions
---
### How to create a new function? 
You can add a new function to write your custom logic in code in the **`code`** section of the studio. 
To execute these functions in a flow, you can attach function action node.

**Format of cloud functions**
```
return new Promise(resolve => {
      // Your logic goes here
      resolve();
  }); 
```

---

### Useful args you can access in code


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