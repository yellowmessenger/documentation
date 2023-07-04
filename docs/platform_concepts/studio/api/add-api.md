---
title: Add or import APIs
sidebar_label : Add APIs
---

In this article, you will learn -
1. [How to add a new API with all the configurations](#1)
2. [How to test the API before saving](#1.4)
2. [How to import one or more APIs from a JSON file](#2)

## <a name="1"></a>1. Add a new API (using URL)

APIs facilitate fetching data directly from third-pary systems without the need of syncing or importing the entire data to yellow.ai. The following are the steps involved in adding a new API in Studio module.
  

:::note
In this article, we will be using [OpenWeather API](https://openweathermap.org) to retrieve weather information of the city provided by the user. Sign up at [https://openweathermap.org](https://openweathermap.org) and retrieve an API key.
:::

  
### 1.1 Provide API details
1. In **Studio**, go to the **API** tab. 
2. Click on **+ Create new API** button and enter the following details.
3. Enter a unique **API name**. Supports alpha-numeric and no spaces are allowed. 
4. Choose the appropriate HTTP **Method**. Example - `GET` 
5. Enter the  API **URL** of the API. You can just add the base URL and add request parameters later or enter the entire URL with params in the {param}. Example - `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`.
   <img  src="https://i.imgur.com/E2xo2qr.png" width="80%%"/>
 6. Click **Add new API** to save the details.
Proceed to next step Add request parameters.
In the example, the API requires City name and API key to run.
   <img  src="https://i.imgur.com/9wl5Tqj.png" width="80%%"/>



### 1.2 Add request parameters
The preceding section explains how to add a API end point and set the HTTP method. However, to run a API you would need authentication, input parameters depending on the method. For example path params, query params, or request body. 

To add request information to your API, follow these steps - 

1. On the API details page, click **Add Params** 
2. Enter params in key-value pairs. 
   
   In the example - for the key `q`,  add a value {{{cityName}}}. This will fetch city name from the `cityName` variable. In the bot flow, you can store user response in the `cityName` variable and use here.
   Also add `appid` - the API key you retrieved from [OpenWeather API](https://openweathermap.org).
3. Click **+Add params**.
   ![](https://i.imgur.com/lVQpW6P.png)
   
   * **Params**: This includes the path and query parameters of the API. Click **Add params** and enter enter **Key** and **Value** pairs. For example, if `cityName` is a param that has a dynamic value, You can set Key as cityName and Value as {{{city_name}}}, where city_name is a variable to capture city name from the user.
   * **Headers**: You can set all the request headers here including authorization tokens. For example, you can pass Barer token, OAuth, or Basic Auth in Headers along with other mandatory and optional headers. Learn [how to use access token generated from an API response to authenticate an API](../api/bearer-token.md).
   * **Body**: Use this for POST or PUT calls where you need to pass request body. Choose the body format - x-www-form-urlencoded, JSON, XML, GraphQL, or form-data. Click **Add body** and paste the code.
      ![](https://i.imgur.com/WE3eVOS.png)
   * **Configuration**: Any settings related to the API such as Timeout, retry attempts, encoding, strictSSL, default success and failure message, and more.

:::note
You can pass the access key or auth token in the way that the API is designed. You could pass it in the request URL, body, or headers. You can ignore this for APIs where no authentication is required.
:::


### 1.3 Add environment variables

In some cases you might have different API endpoints for different deployment environments such as staging, production, sandbox or cluster. You can add all the variables and use the appropriate variable when making an API call. 

:::note
* This is not applicable for API with single end point.
* This is a global setting and applicable to all APIs of your current bot and not a specific to an API.
:::

To add environment variable, follow these steps - 
  

1. Go to **Studio** > **Build** > **API**.
2. Navigate to the API to add environment variables.
3. On the right sidebar, click on the **Configure Environment** icon.

   ![](https://i.imgur.com/bybT0Eh.png)


:::note
The **Configure environment** option is disabled in Live environment.
:::


  4. Add a placeholder for the API endpoint. 
   > In the example, we have used host as the API placeholder.
  ![](https://i.imgur.com/qHQFY4u.png)

  5. In the respective placeholder, add API endpoints for each environment.


   <img  src="https://i.imgur.com/xIldDOM.png"  alt="drawing"  width="80%"/>

7. Lastly, before making an API call, select an environment from the dropdown. Based on the environment variables you’ve configured earlier, 






### <a name="1.4"></a>1.4 Test the API

Before saving, ensure the API details are correct and working as expected. 
* Click **Send** to see if it's showing the desired response. It prompts to enter all the parameter values added in the API.

In the example. as `cityName` variable is empty, you'll be asked for a city name. Provide the city name and click **SEND**. 

If the API details are properly added, you should be able to see a sample response as shown here.

![API Response](https://i.imgur.com/cU30hAy.png)




### 1.5 Save the API
* If the API is working fine, click **Save**. 

  
:::note
> API response has a size limit of 250kb.You will get an error if the response exceeds the limit
><img src="https://i.imgur.com/8fTglp1.png" alt="drawing"  width="50%"/>
:::

### 1.6 Configure MTSL authentication

MTSL (Message Transmission Security Layer) authentication is a method used for securing APIs by ensuring the integrity and authenticity of messages exchanged between the client and the server. It provides a secure communication channel and verifies that the messages have not been tampered with during transmission.

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
**Developer**, **Admin** and **Super admin** roles can view this feature but only the **Super Admin** can make changes such as add a new certificate, delete the existing certificate, etc.
:::
  
---  

## <a name="2"></a>2. Import a new API (CURL/JSON)
The preceding section helps you add new APIs manually. However, if you have a CURL script, JSON file, or collection URL, you can directly import it using the following procedure.   

1. In **Studio**, go to the **API** tab. 
2. Click on the arrow icon next to API management and select **Import** .

![](https://i.imgur.com/1gfjuHi.png)


 ### 2.1 Import API from CURL

1. In **Type**, choose CURL .
<img  src="https://i.imgur.com/5BJSXRa.png" alt="drawing"  width="75%"/>

2. In **API name** specify a unique name for the API. Use alpha-numeric characters without space.
 
   <img  src="https://cdn.yellowmessenger.com/SkWOLKxwJxyI1623865511502.png" alt="drawing"  width="80%"/>


### 2.2 Import API(s) from a JSON file
If you have a one or more APIs, save your collection in a JSON file and import it as mentioned in the following -  
1. Choose **Type** as *Collection* or *JSON* depending on the file you want to import
2. Drag & Drop the file in Import JSON or use the **Import** button to upload the file.
<img  src="https://i.imgur.com/7Jsu5KE.png" alt="drawing"  width="75%"/>
3. Click **Import**.

---

#### What next?
> * [Know how to dynamically pass access tokens in a API](bearer-token.md)
> * [Know how to send data to the API](send-data.md)
> * [Monitor errors in APIs](api-settings.md)