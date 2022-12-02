---
title: Use access token directly from API response
sidebar_label : Use dynamic access token
---

We support different authentication types to ensure you can configure any type of API irrespective of the authentication method. You can use Basic Auth, OAuth, Barer token and more.

In this article, you will learn - 
1. How to pass access token variables in the API header
2. How to use access token variable in the code function

This article explains different ways of using access token generated directly from the generate auth token API.

## 1. Pass access token in API's Header

If you do not want to use code function, you can directly pass the access token received in the auth API response and pass it in the Header of another API that you want to authenticate.

To do so, follow these steps - 

1. In **Studio** > **Build** > **API**  and [add a new API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api/#1) to fetch the access token.
2. Copy the access token from the source. 

> Here, we’ve added a salesforce API to create a bearer token. During the course of this tutorial, we’ll call it auth API. This API returns a **Bearer token** which we will use in another API for authentication.

   ![](https://i.imgur.com/zZCcghI.png)

  
4. Open the API or [add a new API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api/#1) to which you want to add access token (Authorization header).

> In the example, we will be adding a search lead API from Salesforce. Pass the bearer token in the header and email as a [parameter to this API](https://docs.yellow.ai/docs/platform_concepts/studio/api/send-data). So we will fetch values from [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables/) and pass it to the API using this syntax `{{{variable_name}}}`; as shown in the screenshots below.
  

<img  src="https://i.imgur.com/HJUtzk7.png"  alt="drawing"  width="80%"/>

<img  src="https://i.imgur.com/Xu6yn3O.png"  alt="drawing"  width="80%"/>

  

5. Go back to **Studio** > **Build** > **Flows** and 
6. Create an [API action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#21-api) to invoke auth API and store the response in a custom variable.

> In the example, create an action node named `salesforceAuth` to invoke auth API and store response in `sf_auth_response` variable.

  

:::note
Problem with this API is that most API which requires bearer token authentication requires the token to be in this format `Bearer TOKEN_HERE`. Auth API only returns a token without `Bearer` prefix. Hence, we can use a [variable action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#22-variables) to add a `Bearer` prefix to the token. Create another variable `auth_token` and use this syntax to add a prefix `Bearer {{{variables.sf_auth_response}}}`.
:::
  

If the API node goes to fallback,  you can add a text message node and trigger a welcome journey.

<img src="https://i.imgur.com/3M3NWMe.png" width="400"/>

  

> In the example
> * Create or open a flow where you want to use Salesforce Search API, say `salesforceSearchLead` journey. Here, what we want is to first trigger is the `salesforceauth` API and store the bearer token in the `auth_token` variable which will be used here.
> * Hence, in this flow,  add a [Trigger journey node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#15-execute-flow) and trigger `salesforceauth` flow. Once the `salesforceauth` flow is executed, the current `salesforceSearchLead` will be executed. Now, in the API action node, select the `get_lead` API and under parameters, select `auth_token` and `email` variables.
> * Finally, store the response of this API in `sf_search_lead_response`.
> <img src="https://i.imgur.com/ijhgh60.png" width="400"/>

  

## 2. Pass access token in Code function

You can also use the Code function to send token from the generate auth token API and use it in another API that you want to authenticate.

  
To do so - 

1. Open any journey where you've added API Action Node which invokes auth API.

<img src="https://i.imgur.com/sQsTVL9.png" width="90%"/>


  
2. Add a new function to parse bearer token from the API response. Store the response in a variable, here we'll be storing the response in `auth` variable.

  

**Function: getAuthToken**

  
```js
let { apiResponse } = ymLib.args; // retrieve API response
let  token = JSON.parse(apiResponse.body);

console.log(token);

return  token.token_type + " " + token.access_token;
```

3. Open the API where you need to pass the bearer token and pass the token using this syntax: `{{{variable_name}}}`.

Here we need to pass the bearer token under headers, so click on `Add Headers` and enter this text: `{{{auth_token}}}`.
 
<img  src="https://i.imgur.com/wadPMWR.png"  alt="drawing"  width="50%"/>

4. To try this workflow, try invoking the journey where you're using the auth API. :rocket:

---

#### What next?
> * [Know how to send data to the API](send-data.md)
> * [Monitor errors in APIs](api-settings.md)