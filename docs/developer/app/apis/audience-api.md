---
title : Campaigns using Audience API
sidebar_label : Audience API
---
**Adding Audience using an API:**

Call the following API for adding an audience:

```js
curl --location --request POST' 
https://app.yellowmessenger.com/api/scheduler/audience/record/india_mock_test?bot=x1588761516561 
--header 'Content-Type: application/json' 
--header 'x-auth-token: X_AUTH_TOKEN' 
--data-raw 
'
{"number": "918723062265",
"name": "Wasim",
"tags": ["UG","india","Test"],
"audienceId": " "
}'
```

## Steps 

1. Enter the audience details like phone no., name, tags..
2. Enter the audience id to which you want to add it accordingly.
3. After calling the API you will receive a success message as given in the sample below, after
which the new audience would have been added.
4. Please pass the column values that are already available on the specific Audience.
5. Tags should be passed in array only.

> Note: You can use your own API key for this. Please check account settings on YM Platform for API
Key.

### Request
```js
{
    "number": "918723062265",
    "name": "Wasim",
    "tags": [
        "UG",
        "india",
        "Test"],

        "audienceId": " "
}'
``` 

### Response

```js
"success" : true,
"message" : "record",
"data":{
    "name": [
        "Wasim2"
    ],
    "tags": [
        "UG",
        "INDIA",
        "TEST"
    ],
    "segments": [],
    "_id": "",
    "number": "",
    "audienceId" : "",
    "botId" : "",
    "inserted" : "",
    "updated" : "",
    "__v" : 0
    }
}
```
