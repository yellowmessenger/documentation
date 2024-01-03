---
title: API keys and access tokens
sidebar_label : Add API keys and access tokens
---

API keys and access tokens are crucial for secure communication with APIs. API keys identify applications, and access tokens authenticate and validate requests, ensuring secure data exchange between applications and APIs

## Add API key authorization

To add an API key:

1. Go to **Studio** > **API** > click the particluar API > **Headers** > **+ Add Headers**.

   ![](https://i.imgur.com/nzw4HVO.png)

2. In **Key** enter **Authorization** and in **Value** enter the API key. Click **Add**.

   <img src="https://i.imgur.com/jmggwyO.png" alt="drawing" width="69%"/>

3. Click **Send** to test the API, if you recieve a 200 response the API has been authorized and works successfully.

   <img src="https://i.imgur.com/PzGvJ45.png" alt="drawing" width="100%"/>

4. [Build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) for your use case and include the [API node](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode) wherever you want the flow to hit the API. [Fetch this API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#use-existing-api) in the node and build the rest of the flow.

## Pass dynamic access tokens

To fetch a dynamic access token:

1. [Add the API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api).  In **Key** enter **Authorization** and in **Value** enter the variable name in {{{}}} format, for example {{{auth_token}}}.

   ![](https://i.imgur.com/cvScYi2.png)

2. Go to [Functions](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) and [create a new function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-a-functionhttps://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-a-functionhttps://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-a-function) that filters out the access token from the response.

**Sample code:**

```js
let { apiResponse } = ymLib.args; // retrieve API response
let  token = JSON.parse(apiResponse.body);

console.log(token);

return  token.token_type + " " + token.access_token;
```

3. [Build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) for your use case and include the [API node](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode) wherever you want the flow to hit the API. 

   ![](https://i.imgur.com/cgIJgK1.png)

4. [Store the response of that API node in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#store-the-api-response).

   ![](https://i.imgur.com/qSX9VG4.png)

5. Scroll down to **Parse using function** and add the following:

   ![](https://i.imgur.com/KY3qGe8.png)

  * **Select variable**: Create/choose the variable in which you want to store the parsed response. Here the variable would be auth_token.
  * **Add function**: Choose the function created in step 

6. Include another [API node](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode) and [add](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#create-new-api)/or [fetch the API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#use-existing-api) (created in step 1). In the **Dynamic variable**, fetch the auth_token variable (created in step 5).

   <img src="https://i.imgur.com/vX3vb7O.png" alt="drawing" width="80%"/>

By this way you can authenticate the API and use the dynamic access token throughout the flow to authenticate different APIs from the same server.