---
title: API node
sidebar_label : Add APIs via API node
---

# Connect APIs to AI Agents

The API node is a powerful tool that helps you to integrate external services directly into your conversational flows. 

By connecting APIs, your AI-agent can perform tasks like fetching real-time data, automating processes, and interacting with third-party platforms such as CRMs, payment gateways, or weather systems.

### Optimizing API management and reusability

When using the **API node** in AI-agent flows, we need to consider the below functionalities:

- **Centralized API management**:  
  When an API is added using the API node, it becomes available in the central **API module.** This means the API can be managed, updated, or reused from the API module directly.

- **Reusability of API across different flows**:  
  If you configure an API for a particular node in one flow, you can access and reuse the same API in other flows through the API node.

There are three ways by which you can add an API to the API node: 

* [Connect API via cURL/JSON](#import-API) using **Import API**
* [Add API via the interface](#create-new-API) using **Create new API**.
* [Reuse an existing API](#use-existing-API) with **Use existing API**

<img src="https://imgur.com/3m3re6g.png" alt="drawing" width="90%"/>



## Import API

You can add an API by importing a cURL script or a JSON file containing all the required details. Use this if you have pre-configured API setups.


### Import a cURL script


:::note
The API name you choose should be alphanumeric, contain no spaces, and have a minimum of 3 characters.
:::

1. Selct **Import API**.
 
    <img src="https://i.imgur.com/QUPXN9D.png" alt="drawing" width="88%"/>

2. Enter a **Name** for your API (for example, "**ImportedAPI**").
3. In the **Type** field, select **cURL**.
4. Under the **cURL** field, paste your cURL command.

    <img src="https://i.imgur.com/83KAI5o.png" alt="drawing" width="88%"/>

5. Click on  **Import** to complete.

---

### Importing a JSON file with API Details

1. Selct **Import API**
    <img src="https://i.imgur.com/QUPXN9D.png" alt="drawing" width="88%"/>

2. Enter a **Name** for your API (for example, "**ImportedAPI**").
3. In the **Type** field, select **JSON**.
4. In the **Import** field, click **Drag & Drop** to upload your JSON file, or drag and drop it directly into the field.
  
   <img src="https://i.imgur.com/fiKmiaS.png" alt="drawing" width="90%"/>
   
5. Click on **Import**.  
   - The API details, such as **Headers**, **Params**, and any **Dynamic Variables** needed for real-time data, will automatically populate in the API node.


## Add an API using the interface

You can use the *Create new API* option to add an API through a user-friendly interface. With this, you can add requests, headers, parameters, and body content manually. Use this option if you do not have any pre-written scripts.

To add an API using the API interface:

1. Select **Create new API**.

   <img src="https://i.imgur.com/51f2cQb.png" alt="drawing" width="78%"/>

2. Fill in the following fields:

   <img src="https://imgur.com/iqNv4Cm.png" alt="drawing" width="88%"/>

   <img src="https://imgur.com/2KdYPrh.png" alt="drawing" width="88%"/>

   
| **Fields**                         | **Descriptions**   |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**| Enter a name for your API.|
| **Method**| Select the method for your API request (e.g., GET, POST, PUT, DELETE, PATCH).|
| **URL**| Paste the URL for your API endpoint.|
| **Description**| Enter a description explaining the functionality of your API.     |
| **Headers**| Enter the headers required for your API request. Headers are additional pieces of information sent alongside the main request. <br/> **Example:** For authentication, enter **Authorization** as the **Key** and the API key as the **Value**.|
| **Params**| Enter the parameters to include in your API request. Parameters help instruct the API on how to fulfill the request. <br/><br/> **Examples of key-value pairs for static and dynamic parameters:** <br/><br/> **Static parameter:**<br/> - **Key:** botId <br/> - **Value:** x766543323dwe_34 <br/><br/> **Dynamic parameter:**<br/> - **Key:** city <br/> - **Value:** "{{{city}}}" <br/><br/> In these examples: the `botId` key has a static value, while the `city` key has a dynamic value that will be replaced during runtime. |
|**Body type**| Enter the body type for your API request, if applicable (typically for POST, PUT, or DELETE methods). Supported formats include **x-www-form-urlencoded**, **JSON**, **XML**, **GRAPHQL**, **form-data**, and **raw**. <br/><br/> **Note:** Multipart/form-data is not supported.|
| **Dynamic variable configuration** | Enter the dynamic variable to capture user inputs. Ensure the data type of the variable matches the dynamic value it is intended to capture. You'll need to map the dynamic parameters to the corresponding variables under the **Dynamic Variable Configuration** section to ensure the API receives the required input data before initiating the API call.|

:::note
 If the dynamic parameters are not mapped to the corresponding variables, the API call will fail as it won't receive the required input data.
:::

### Configure additional API settings

Here you can configure advanced settings like timeout, retries, redirects, and more. Refer to the table below for a detailed explanation of these configurations and their functionality.

  
  <img src="https://imgur.com/XswdOH5.png" alt="drawing" width="78%"/>
 
  <img src="https://imgur.com/dlocZQH.png" alt="drawing" width="78%"/>
  

| **Configuration**                  | **Description**                                                                                      |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| **Timeout**                  | Allows you to set the maximum time allowed for an API response. Example: Set to 10 seconds for quick responses.  |
| **Retry on Failure (5XX)**   | Enables or disables automatic retries for requests that fail with 5XX status codes. Example: Retry 3 times for temporary server issues. |
| **Follow Redirect(s)**       | Controls whether HTTP redirects should be automatically followed during API requests. Example: Enable to handle 301 or 302 redirects seamlessly. |       |
| **Encoding**                 |Lets you choose the format for encoding the response data from the API. Example: Use UTF-8 for most languages.|
| **Use StrictSSL**            | Enforces strict SSL certificate validation for secure connections. Example: Enable for added safety. |
| **API Alerts on Events (4XX/5XX)**     | Receive real-time alerts for API errors (4XX/5XX) to quickly diagnose and resolve issues. Example: Get notified when server traffic spikes. |
| **Default Message on API Call** | Displays a default response or message when an API is invoked. Example: “Fetching your data, please wait.” |
| **Add MTLS Auth**            | Enables mutual TLS authentication for enhanced security. Example: Upload a certificate for secure data exchange. |
| **Configure Environment Keys** | Allows you to store dynamic values like API keys and tokens for each environment. Example: Different API keys for Staging, Sandbox and Production. 
| **Wait Music**            | Lets you paste the URL or upload an audio file to play while waiting. Example: Add soothing music to play during API response time. |

## Reuse preconfigured APIs

You can reuse pre-configured APIs without re-adding or re-configuring them. This works if the API is added through the [through API node](#create-new-api) or through the [API section](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api).

This is very efficient when you need to apply the same API in various stages of the conversation flows.


To use an existing API, follow the steps below:

1. Select **Use existing API**.

   ![](https://i.imgur.com/9PczJZv.png)
   
2. In the **API** field, select your preferred API from the drop-down, based on the selected API it will automatically populate the corresponding fields.
   <img src="https://i.imgur.com/shCH4h5.png" alt="drawing" width="78%"/>
   

## Test the connected API

After adding the API, you need to test it to ensure it operates correctly and performs the intended functions.

1. Select the API node and click on  **Test response**.
 
   <img src="https://i.imgur.com/X6cbKop.png" alt="drawing" width="78%"/>

2. **Enter a Sample Input** for testing to ensure API has all the required information to run properly and validate its functionality in a real-world scenario.
   
   - In **Input fields**, provide the necessary values for any dynamic variables required by the API.  
   - For example: If the variable is `city`, enter a value like *Paris* to provide the relevant data. This acts as a real-world test data to validate the API's functionality.
   
2. **Run the API**  
   - Click on the **Run** button to execute the API .  A successful test will return a `200` status code along with the API's response data.
   <img src="https://i.imgur.com/1n3iMFJ.png" alt="drawing" width="78%"/>


---

## Store and display API responses

This section explains how to store API responses in a variable, filter the relevant details, and show them to the user if needed or store it as needed.


:::info
API responses can be of object, array, or string data type. You need to store the response in a variable that matches its data type.
:::


### Steps to store API response:



1. Select the API node and click on **Test response**.

   <img src="https://i.imgur.com/X6cbKop.png" alt="drawing" width="78%"/>

2. Scroll down to the  **Store response** section and under **Store all response** you can either **create** a new variable or **select** an existing one to store the API response, ensuring the variable's data type matches the response type. 



   
   ![](https://i.imgur.com/qSX9VG4.png)

### Steps to display API response: 

Depending on the response datatype, you can use the following syntax to fetch or display the necessary data from the API response.

To display the received API response: 

1. Add a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) after the API node.
2. Select the variable created in the [previous section](#store-the-api-response) (step 2) to retrieve the API response.

    ![](https://i.imgur.com/RudXA5G.png)

3. Use the appropriate syntax alongside the variable to filter and display the specific data you need from the API response. Refer to the table below for the correct syntax based on the data type.


| Datatype | Syntax |
|----------|--------|
| Array    | `{{{variables.variablename.[position of the array].fieldname}}}` |
| JSON Response Array | `{{{variables.variablename.arrayname.[position of the array].field}}}` or `{{{variables.variablename.fieldname}}}` |
| String   | `{{{variables.variablename}}}` |

You can adjust the above syntaxes according to the structure and content of the API responses you receive.


