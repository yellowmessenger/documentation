---
title: Send bearer token from one API result to another APIs header
sidebar_label : Bearer Token 
---

## 1.  Without using Code function

Follow the steps below to send bearer token from one api result to another APIs header without using Code function:

1. Navigate to Studio > Build > API and [add a new API](./add-api) to fetch bearer token. Here we’ve added a salesforce API to create a bearer token. During the course of this tutorial, we’ll call it auth API. This API returns a bearer token which we will use later in another API.

![](https://i.imgur.com/zZCcghI.png)

2. Add another API where the bearer token API will be used. Here we will be adding a search lead API from Salesforce. One thing to note here is that we need to pass a bearer token in the headers and email as a [parameter to this API](./send-data). So we will fetch values from [variables](../build/bot-variables) and pass it to the API using this syntax `{{{variable_name}}}`; as shown in the screenshots below. 

<img src="https://i.imgur.com/HJUtzk7.png" alt="drawing" width="60%"/>

<img src="https://i.imgur.com/Xu6yn3O.png" alt="drawing" width="60%"/>

3. Go back to Studio > Build > Flows and create a journey named `salesforceAuth` to invoke auth API using [API action node](../build/nodes/action-nodes#api) and store response in `sf_auth_response` variable. 

Problem with this API is that most API which requires bearer token authentication requires the token to be in this format `Bearer TOKEN_HERE`. Auth API only returns a token without `Bearer` prefix. Hence, we can use a [variable action node](../build/nodes/action-nodes#variables) to add a `Bearer` prefix to the token. Create another variable `auth_token` and use this syntax to add a prefix `Bearer {{{variables.sf_auth_response}}}`.

On the other hand, incase API node goes to fallback You can add a text message node and trigger a welcome journey.

![](https://i.imgur.com/3w31otL.png)

4. Create / open journey where you’re planning to use Salesforce Search API. During the course of this tutorial we will call it `salesforceSearchLead` journey. Here what we want is to trigger the `salesforceauth` API first and store the bearer token in the `auth_token` variable which will be used here.

Hence, in this journey, you need to add a [Trigger journey node](../build/nodes/action-nodes#trigger-journey) and trigger `salesforceauth` journey. Once the `salesforceauth` journey is executed, the current journey `salesforceSearchLead` will be executed. Now in the API action node, select the `get_lead` API and under parameters select `auth_token` and `email` variables.

Finally, store the response of this API in `sf_search_lead_response`.

![](https://i.imgur.com/4mC1FvJ.png)

## 2.  Using Code function

Follow the steps below to send bearer token from one api result to another APIs header  using Code function:

1. Open any journey where you've added API Action Node which invokes auth API.

![](https://i.imgur.com/bqTKe0s.png)

2. Add a new transformation function to parse bearer token from the API response. Store the response in a variable, here we'll be storing the response in `auth` variable.

**Transformation Function: getAuthToken**

```js
let { apiResponse } = ymLib.args; // retrieve API response
let token = JSON.parse(apiResponse.body);

console.log(token);

return token.token_type + " " + token.access_token;
```

3. Open the API where you need to pass the bearer token and pass the bearer token using this syntax: `{{{variable_name}}}`.
Here we need to pass the bearer token under headers, so click on `Add Headers` and enter this text: `{{{auth_token}}}`.

<img src="https://i.imgur.com/wadPMWR.png" alt="drawing" width="60%"/>

4. To try this workflow, try invoking the journey where you're using the auth API. :rocket: