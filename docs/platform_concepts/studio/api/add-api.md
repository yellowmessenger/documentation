---
title: Add or import APIs
sidebar_label : Add APIs via Studio's API module
---

In addition to the various integrations supported by Yellow.ai, you can seamlessly integrate any third-party APIs with your chatbot. This comprehensive guide provides step-by-step instructions on connecting your chatbot to external APIs, enabling real-time data storage and retrieval for creating a personalized user experience.

## Add a new API

There are two ways by which you can add API:

* [Add API manually](#add-api-manually)
* [Import APIs](#import-apis-from-a-json-file)

### Add API manually

1. Go to **Studio** > **API** > **+ Add new API**.

   ![](https://i.imgur.com/EguUcSR.png)

2. In the pop-up screen, specify the **API name**, HTTP **Method**, and the request **URL** along with the query parameters. 

   <img src="https://i.imgur.com/csYrfGc.png" alt="drawing" width="60%"/>
   
 6. Click **Add new API** to save the details.

#### Add request components for APIs

To use an API, you need to include parameters for requesting information, incorporate headers to notify the third party about the data being sent, and add a body when transmitting data to the API. Our platform also provides the option to modify settings related to an API.

#### Add query params

API parameters are essential components used when making requests to an API. They serve as specific instructions or information that you include with your request, helping the API understand and fulfill your requirements accurately.

To add params:

1. On the API details page, under **PARAMS**, click **+ Add Params** 

   ![](https://i.imgur.com/fkAvdiN.png)

2. Enter params in key-value pairs and click **Add**. 
   <img src="https://i.imgur.com/le1BjnP.png" alt="drawing" width="70%"/>

Below are examples of key-value pairs for static and dynamic parameters:
**Static parameter**:
* Key: botId
* Value: x766543323dwe_34

**Dynamic parameter**:
* Key: city
* Value: {{{city}}}
In these examples:
The botId key has a static value (it remains constant).
The "city" key has a dynamic value represented as {{{city}}}, indicating that the value will be dynamically replaced with the actual value of the "city" parameter during runtime. 

#### Add request headers

Headers in API requests are additional pieces of information sent alongside the main request. 

To add headers:

1. On the API details page, under **HEADERS** click **+ Add headers** 

   ![](https://i.imgur.com/Rg762S0.png)
   
2. Enter headers in key-value pairs and click **Add**. For example, if you have are authenticating an API, set the **Key** as **Authorization** and the Value as the API key.
 
    <img src="https://i.imgur.com/qtHkgS9.png" alt="drawing" width="70%"/>
 
#### Add body

The body in an API is the main content of the request containing data or information that should be sent to the third-party server. For POST, PUT, or DELETE methods, you can add request body under the Body section.
 
:::note
Multipart/form-data is not supported.
:::

To add a body:

1. On the API details page, under **BODY**, choose the format of the request body. The supported formats are **x-www-form-urlencoded**, **JSON**, **XML**, **GRAPHQL**, **form-data** and **raw**.
2. For **JSON**, **XML**, **GRAPHQLform-data** or **raw** body, type or paste the request body the available box.

   ![](https://i.imgur.com/iZ9mp0K.png)

   
   For other formats, click **+ Add body** and provide body params in key-value pairs.

   <img src="https://i.imgur.com/WE3eVOS.png" alt="drawing" width="70%"/>
     
   <img src="https://i.imgur.com/hP7ay5l.png" alt="drawing" width="70%"/>

To send dynamic data over body use "{{{value}}}".

:::note
* You can pass the access key or auth token in the way that the API is designed. You could pass it in the request URL, body, or headers. You can ignore this for APIs where no authentication is required.
:::


#### Configuration

You can modify the API settings for optimal performance and security. This lets you manage timeout, retry strategies, and SSL enforcement, enhancing your control over communication for a more resilient and secure API integration.    
     
   <img src="https://i.imgur.com/JlERIHD.png" alt="drawing" width="70%"/>

   
| Configuration                      | Description                                               |
|---------------------------|-----------------------------------------------------------|
| Timeout                   | Maximum time allowed for API response                      |
| Retry on failure (5xx)    | Number of attempts to retry in case of server errors       |
| Follow redirect(s)        | Determines if API should automatically follow redirects   |
| Encoding                  | Method used to encode data (e.g., JSON, XML)              |
| Use strictSSL             | Enforces strict SSL certificate validation. You might not get response if this is enabled and there is some problem with SSL certificate.    |                 |
| API alerts on             | Events triggering alerts (e.g., errors, high traffic)      |
| Default message on invoking API | Default response or action when API is invoked           |
| API failure message (4/5xx code) | Message displayed upon API failure with specific codes   |
| enableMutualTLS           | Enables mutual TLS authentication for enhanced security   |

:::note
The **Configure environment** option is disabled in the **Live/Production** environment.
:::

### Import APIs (CURL/JSON)

If you have a CURL script, JSON file, or collection URL, you can conveniently import it to yellow.ai.

1. Go to **Studio** > **API**.
2. Click the arrow icon next to API management and select **Import** .

   ![](https://i.imgur.com/nCvs5WU.png)


 #### Import API from CURL

1. In **Type**, choose Curl .
   <img  src="https://i.imgur.com/5BJSXRa.png" alt="drawing"  width="55%"/>

2. In **API name** enter a unique name for the API. Use alpha-numeric characters without space.
 
   <img  src="https://cdn.yellowmessenger.com/SkWOLKxwJxyI1623865511502.png" alt="drawing"  width="60%"/>

3. In **Import curl**, copy past the CURL script and click **Import**.
4. The imported API will be available under **API Management**.

   ![](https://i.imgur.com/Conv8O3.png)


#### Import API(s) from a JSON file

If you have one or more APIs, save your collection in a JSON file and import them as mentioned in the following steps:

1. Choose **Type** as **Collection** or **JSON** depending on the file you want to import
2. Drag & drop the file in **Import JSON** or use the **Upload file** button to upload the file.

   <img  src="https://i.imgur.com/7N6NdRM.png" alt="drawing"  width="65%"/>
   
3. Click **Import**.
4. The imported API will be available under **API Management**.

   ![](https://i.imgur.com/frifWMw.png)

## Configure environment variables

Streamline API configuration across environments by using the **Configure Environment Variable** option. Instead of manually inputting endpoint or parameter values for each environment, this option allows you to define and manage values uniquely for each environment.

To add environment variables:

1. Go to **Studio** > **API** > **Configure environment**.

   ![](https://i.imgur.com/0fZmKPs.png)


2. Enter the key, for example **endpoint** and enter the respective values for each environment. Click **Save**.

   
   <img src="https://i.imgur.com/jRh5tRe.png" alt="drawing" width="80%"/>


3. Include the key in API URL in the following format: {{{env.variablename}}} for example, {{{env.endpoint}}}

   ![](https://i.imgur.com/Xv74o1h.png)


4. Choose the environment and click **Send** to test the API. A **2xx** response indicates that the API works successfully.

   ![](https://i.imgur.com/mBpQ2vl.png)


## Test the API

To verify the proper functioning of the added API, input all API details and select the **SEND** button adjacent to the API. A sample response will be visible if the API works properly.

   ![API Response](https://i.imgur.com/cU30hAy.png)

Confirm the expected functionality of the API and click **Save** to save the API settings.

   ![](https://i.imgur.com/TrY444S.png)
  
:::note
* API response has a size limit of 250kb. You will get an error if the response exceeds the limit.
* Before testing the API, choose the respective environment from the drop-down.

   ![](https://i.imgur.com/fDs9TKO.png)
:::

## Configure MTLS authentication

MTLS(Mutual Transport Layer Security) authentication is a method used for securing APIs by ensuring the integrity and authenticity of messages exchanged between the client and the server. It provides a secure communication channel and verifies that the messages have not been tampered with during transmission.

Retrieve the following information from the system where you are integrating APIs:

1. Domain
2. Certificate
3. Key
4. Certificate Authority

 ![](https://i.imgur.com/UFthYh1.png)

1. Click the lock button at the right end.
2. Fill in the fields and click **Upload** to upload the required documents. 
3. Click **Save** when you're done.


:::note
**Developer**, **Admin** and **Super admin** roles can view this feature but only the **Super Admin** can make changes such as add a new certificate, delete the existing certificate, etc. Only the **Super Admin** can view the **key**.
:::
  
## Export APIs 

Exporting APIs involves capturing their configuration settings, allowing for seamless sharing, backup, or replication. Follow these steps to export APIs:

1. Go to **Studio** > **API**.
2. Click the arrow icon next to API management and select **Export** .

   ![](https://i.imgur.com/2uCuacD.png)
3. Select the APIs to be exported, you can also select Select all APIs at the left bottom to select all the APIs in one go

   <img src="https://i.imgur.com/2Vzla2Q.png" alt="drawing" width="80%"/>

4. Click **Export**. 


## Troubleshooting

#### API is not working, or the module is not showing any response

* Disabling **Use Strict SSL** can sometimes resolve connectivity issues, especially if there are problems with SSL certificates. Ensure that you're aware of the security implications before making changes to SSL settings.


#### API works in Postman and API management but gives a blank response when tested in Node.

* Check your dynamic environment variables. Ensure you pass the variables in triple braces - `{{{env.variable}}}`.

 In Postman, it would be in double braces - `{{env.name}}`. 

* For cRUL requests, instead of creating the API separately, [import the cURL request](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api#import-apis-curljson) to prevent errors in the cloud. 

#### API working correctly in Postman but returns a 403 error when integrated into the Studio API section

The issue may stem from region-specific URLs being blocked. This could be because the region specific URLs are gettings bloxked, it is recommended to [Whitelist your region specific URL](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/domain-whitelisting#whitelist-domains-to-deploy-chat-widget). For instance, https://r1.cloud.yellow.ai.

