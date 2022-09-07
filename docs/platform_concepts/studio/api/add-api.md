---
title: Add or import APIs
sidebar_label : Add APIs
---

## 1. Add a new API (using URL)

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
   ![](https://i.imgur.com/E2xo2qr.png)
 6. Click **Add new API** to save the details.
Proceed to next step Add request parameters.
In the example, the API requires City name and API key to run.
![](https://i.imgur.com/9wl5Tqj.png)



### 1.2 Add request parameters
You can also add params after saving the API. 

1. On the API details page, click **Add Params** 
2. Enter params in key-value pairs. 
   
   In the example - for the key `q`,  add a value {{{cityName}}}. This will fetch city name from the `cityName` variable. In the bot flow, you can store user response in the `cityName` variable and use here.
   Also add `appid` - the API key you retrieved from [OpenWeather API](https://openweathermap.org).
3. Click **+Add params**.
   ![](https://i.imgur.com/lVQpW6P.png)


### 1.3 Test the API

Before saving, ensure the API settings are correct. 
* Click **Send** to see if it's showing the desired response. 

In the example. as `cityName` variable is empty, you'll be asked for a city name. Provide the city name and click **SEND**. 

If the API details are properly added, you should be able to see a sample response as shown here.

![API Response](https://i.imgur.com/cU30hAy.png)

  
### 1.4 Save the API
* If the API is working fine, click **Save**. 

  
:::note
> API response has a size limit of 250kb.You will get an error if the response exceeds the limit
>![](https://i.imgur.com/8fTglp1.png)
:::
  
---  

## 2. Import a new API (CURL/JSON)
The preceding section helps you add new APIs manually. However, if you have a CURL script, JSON file, or collection URL, you can directly import it using the following procedure.   

1. In **Studio**, go to the **API** tab. 
2. Click on the arrow icon next to API management and select **Import** .

![](https://i.imgur.com/1gfjuHi.png)


 ### 2.1 Import API from CURL

1. In **Type**, choose CURL .
![](https://i.imgur.com/5BJSXRa.png)

2. In **API name** specify a unique name for the API. Use alpha-numeric characters without space.
 
  . ![API](https://cdn.yellowmessenger.com/SkWOLKxwJxyI1623865511502.png)


3. Click **Import**.

### 2.2 Import API(s) from a JSON file
If you have a one or more APIs, save your collection in a JSON file and import it as mentioned in the following -  
1. Choose **Type** as *Collection* or *JSON* depending on the file you want to import
2. Drag & Drop the file in Import JSON or use the **Import** button to upload the file.
![](https://i.imgur.com/7Jsu5KE.png)
3. Click **Import**.