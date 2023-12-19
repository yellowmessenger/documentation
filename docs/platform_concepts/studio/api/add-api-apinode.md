---
title: API node
sidebar_label : Add APIs via API node
---

The API node lets you add a new API from a third-party system and access it in conversational flows.

There are three ways by which you can add an API to the API node: 

* [Import API](#import-api)
* [Create new API](#create-new-api)
* [Use existing API](#use-existing-api)

   <img src="https://i.imgur.com/Fnsvd0z.png" alt="drawing" width="70%"/>

## Import API

If you have a CURL script or a JSON file you can import that to yellow.ai.

### Import cURL

1. Click **Import API**.

   <img src="https://i.imgur.com/QUPXN9D.png" alt="drawing" width="70%"/>

2. In **Name** enter a name for your API, in **Type** choose the API type as **cURL** and in **cURL** field, copy/paste the cURL snippet.

   <img src="https://i.imgur.com/83KAI5o.png" alt="drawing" width="78%"/>
3. Click **Import**.

### Import JSON file with API details

1. Click **Import API**.
2. In **Name** enter a name for your API, in **Type** choose the API type as **JSON** and in the **Import** field, click **Drag & Drop** to upload the JSON file or drag and drop the file directly.

   <img src="https://i.imgur.com/fiKmiaS.png" alt="drawing" width="78%"/>
3. Click **Import**. The API details such as **Headers**, **Params**, **Dynamic variables**(that collects dynamic data) gets auto populated in the API node. 

## Create new API

This option lets you add a new API on the go:

1. Click **Create new API**.

   <img src="https://i.imgur.com/51f2cQb.png" alt="drawing" width="78%"/>

2. Fill in the following fields:

   <img src="https://i.imgur.com/4Uu7sO6.png" alt="drawing" width="78%"/>

| Fields                             | Descriptions                                                                                                                                                                                               |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                           | Enter a name for your API                                                                                                                                                                                  |
| **Method**                         | Choose the method of your API request.                                                                                                                                                                     |
| **URL**                            | Paste the API URL.                                                                                                                                                                                        |
| **Description**                    | Describe the functionality of your API.                                                                                                                                                                   |
| **Headers**                        | Headers in API requests are additional pieces of information sent alongside the main request. For example, if you are authenticating an API, set the **Key** as **Authorization** and the Value as the API key. |
| **Params**                         | API parameters are essential components used when making requests to an API. They serve as specific instructions or information that you include with your request, helping the API understand and fulfill your requirements accurately. Examples of key-value pairs for static and dynamic parameters: **Static parameter**: - Key: botId - Value: x766543323dwe_34 **Dynamic parameter**: - Key: city - Value: {{{city}}} In these examples: The botId key has a static value (it remains constant). The "city" key has a dynamic value represented as {{{city}}}, indicating that the value will be dynamically replaced with the actual value of the "city" parameter during runtime. |
| **Body type**                      | The body in an API is the main content of the request containing data or information that should be sent to the third-party server. For POST, PUT, or DELETE methods, you can add the request body under the Body section. The supported formats are **x-www-form-urlencoded**, **JSON**, **XML**, **GRAPHQL**, **form-data**, and **raw**. |
| **Dynamic variable configuration** | Here's where you will assign a variable to collect the dynamic value from users. The data type of the variable and dynamic value should be the same. |

## Additional configuration to enhance the API usage

The **+More** button holds configurations that would optimize the usage of that particular API. 

   <img src="https://i.imgur.com/XViQNgB.png" alt="drawing" width="78%"/>

| Configuration                      | Description                                               |
|---------------------------|-----------------------------------------------------------|
| Timeout                   | Maximum time allowed for API response.                      |
| Retry on failure (5xx)    | Number of attempts to retry in case of server. errors       |
| Follow redirect(s)        | Determines if API should automatically follow. redirects   |
| Encoding                  | Method used to encode data (for example JSON, XML)              |
| Use strictSSL             | Enforces strict SSL certificate validation. You might not get response if this is enabled and there is some problem with SSL certificate.    |                 |
| API alerts on             | Events triggering alerts (for example errors, high traffic).      |
| Default message on invoking API | Default response or action when API is invoked           |
| API failure message (4/5xx code) | Message displayed upon API failure with specific codes.   |
| Add MTLS auth           | Enables mutual TLS authentication for enhanced security.   |
|Configure environment keys|Adding environment variables allows you to store and manage dynamic values such as API keys, tokens, or any sensitive information that keep changing for each environment. This makes it easier to manage and use APIs seamlessly across your testing and development flows.|

## Use existing API

If you have already added the API to the bot either [through API node](#create-new-api) or through the [API section](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api), you can fetch the API here.

1. Click **Use existing API**.

   ![](https://i.imgur.com/9PczJZv.png)
   
2. In **API**, choose the API. All the details of that API will get auto-populated in the respective fields

   <img src="https://i.imgur.com/shCH4h5.png" alt="drawing" width="78%"/>
   

## Test the API

After adding an API, you can test it to ensure that the API is working properly.

1. Click the API node and click **Test response**.
 
   <img src="https://i.imgur.com/X6cbKop.png" alt="drawing" width="78%"/>

2. Provide a sample input for your dynamic variables (if any) and click **Run**. If the API works successfully, you will receive a response code of 200.

   
   <img src="https://i.imgur.com/1n3iMFJ.png" alt="drawing" width="78%"/>
   
## Store the API response

You can store API responses in a variable and filter out the required information and display it to the consumer. To do so: 

:::info
API responses typically belong to one of three data types: object, array, or string. It's important to store the received response in a variable with the same data type as the response.
:::

1. Click the API node and click **Test response**.

   <img src="https://i.imgur.com/X6cbKop.png" alt="drawing" width="78%"/>

2. Scroll down and go to **Store all response**. **Create** or **choose a variable** in which you want to store the API response based on its datatype.

   
   ![](https://i.imgur.com/qSX9VG4.png)

## Display API response

Depending on the response datatype, use a syntax to fetch or display the necessary data from the API response.

To display the received API response: 

1. Add a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to the API node.
2. Choose the variable created in the [previous section](#store-the-api-response)(step 2).

    ![](https://i.imgur.com/RudXA5G.png)

3. Along with the variable, use a syntax to filter out the required data from the API response. You can refer to the following table for syntaxes to use depending on the data type.


| Datatype | Syntax |
|----------|--------|
| Array    | `{{{variables.variablename.[position of the array].fieldname}}}` |
| JSON Response Array | `{{{variables.variablename.arrayname.[position of the array].field}}}` or `{{{variables.variablename.fieldname}}}` |
| String   | `{{{variables.variablename}}}` |

You can tweak the above syntaxes based on the API responses you recieve.