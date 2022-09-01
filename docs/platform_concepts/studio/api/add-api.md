---
title: Adding API - Importing CURL
sidebar_label : Adding APIs
---
## 1. How to add a new API?


Optional: In this guide, we will be using [OpenWeather API](https://openweathermap.org) to retrieve weather information of the city provided by the user. Sign up at [https://openweathermap.org](https://openweathermap.org) and retrieve an API key.

1. Click on Studio, go to API tab. On the API tab, click on `+ Create new API` button and enter an API name. API names are alpha-numeric names in Camel Case and we can not have multiple APIs with the same name. Select method type as `GET` and enter URL `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`.

In a nutshell, this API requires City name as well API key in order to run.

![Add a new API](https://i.imgur.com/CnbATeb.png)


2. Once API is added, go to `PARAMS` and update it by clicking on 3 dots button. 

For the key- `q`, add a value- {{{cityName}}}. This will fetch city name from cityName variable. In the bot flow, user response can be stored in the cityName variable which can be used here.
Also update `appid` which API key you retrieved from [OpenWeather API](https://openweathermap.org) 

![Update Parameters](https://i.imgur.com/jbCB6X7.png)

3. Once added, you can test the API by hitting `Send` button. Since `cityName` variable is empty right now, you'll be asked for a city name. Provide the city name and hit `SEND`. If the API is correctly added and the endpoint works, you should be able to see a sample response as below. 

![API Response](https://i.imgur.com/cU30hAy.png)

4. Don't forget to click on save button on the bottom left corner. We're having a cloudy weather but we hope you're having a wonderful weather at your place! :sunglasses: 


> **Character limit/size of an API response should be less than 250KB**. Otherwise an error will be displayed. 
> ![](https://i.imgur.com/8fTglp1.png)



## 2. How to import CURL?

Follow the steps below to import a new API: 

1. Click  **Studio**, go to API tab. Here click on arrow icon and select `Import` button.



![](https://i.imgur.com/W65Pk3o.png)

2. Mention the type of API you wish to import and add the CURL and enter an API name. 

> API names are alpha-numeric names in Camel Case and there must not be multiple APIs with the same name. 

![API](https://cdn.yellowmessenger.com/SkWOLKxwJxyI1623865511502.png)

3. Click  **Import**  on the bottom right corner.
