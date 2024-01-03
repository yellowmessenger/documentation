---
title: Send, receive and parse API responses
sidebar_label : Use APIs in bot conversations
---

The [API node](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#display-api-response) allows you to connect the APIs you added, make requests, get responses, and present the information to the customer in a way they can understand.

## Send data and handle responses

1. Go to **Studio** and [build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) for your use case.
2. Include the [API node](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#display-api-response) at whichever point of the conversation you want the bot to access API.

   ![](https://i.imgur.com/heDgub5.png)

3. Click the **API node** and choose the option by which you want to add the API. To know about each option in detail, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode).

   <img src="https://i.imgur.com/Fnsvd0z.png" alt="drawing" width="70%"/>
   
4. The API details (it can be receiving an API response or sending data to another API) get auto-populated in the node. If you are collecting dynamic information from clients and sending them to an API, [add a node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes), collect that information and [store it in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables). Pass that variable here under **Dynamic variable configuration**.

   ![](https://i.imgur.com/jl5DNLS.png)

5. Test the API response, for steps, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#test-the-api).
6. Store the API response in a variable for future use. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#store-the-api-response) for the steps.
7. Display the API response to the end user by following the steps mentioned [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#display-api-response).

## Parse API responses
   
Yellow.ai provides an option to parse the API responses you recieve. To parse an API repsonse you need to write a custom logic that filters out the necessary data from your response. Then using a message node you can display that to the end-user. 

There are two ways by which you can parse an API response in Yellow.ai.

1. [Parse API response within the API node](#parse-api-response-within-the-api-node)
2. [Parse API response using Function node](#parse-api-response-using-function-node)

### Parse API response within the API node

You can parse an API response as you recieve it and display only the required info to the end user.

1. [Build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#create-a-flow) for your use case, include an [API node](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#display-api-response). [Store the response of the API node in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#store-the-api-response).
2. Go to the [Functions](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) section, fetch the variable created in the previous step and [write a custom logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-a-new-function) to parse the API response. 

For example, to extract only the weather description from the following API response you can write a custom logic as mentioned below.

| **API Response** | **Custom Logic** |
|-------------------|-------------------|
{<br/>"coord":<br/> {<br/> "lon": 80.2785,<br/>"lat": 13.0878<br/>},<br/> "weather": [<br/>{<br/>"id": 721,<br/>"main": "Haze",<br/>"description": "haze",<br/>"icon": "50d"<br/>}<br/>],<br/>"base": "stations",<br/>"main": {<br/>"temp": 304.14,<br/>"feels_like": 310.72,<br/>"temp_min": 304.14,<br/>"temp_max": 304.14,<br/>"pressure": 1004,<br/>"humidity": 70<br/>},<br/>"visibility": 5000,<br/>"wind": {<br/>"speed": 4.12,<br/>"deg": 240<br/>},<br/>"clouds": {<br/>"all": 75<br/>},<br/>"dt": 1701769926,<br/>"sys":<br/>{<br/>"type": 1,<br/>"id": 9218,<br/>"country": "IN",<br/>"sunrise": 1701737256,<br/>"sunset": 1701778274<br/>},<br/>"timezone": 19800,<br/>"id": 1264527,<br/>"name": "Chennai",<br/>"cod": 200<br/>}<br/>|return new Promise(resolve => {<br/>let  apiResponse = ymLib.args.apiResponse; // fetch API response<br/>let  body;<br/>if(apiResponse && apiResponse.body);<br/>{<br/>body = JSON.parse(apiResponse.body) // parse API response and store it in body variable<br/>};<br/>resolve(body);<br/>});<br/>

3. Go back to the API node and click **Test response**.

   ![](https://i.imgur.com/kl7A0Ch.png)

4. Scroll down to **Parse using function** and add the following:

   ![](https://i.imgur.com/KY3qGe8.png)

  * **Select variable**: Create/choose the variable in which you want to store the parsed response.
  * **Add function**: Choose the function created in step 2.

5. Include a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) and pass the variable created in step 4 to display the info to the end user.

   ![](https://i.imgur.com/nFxjCfO.png)
   
   
:::info
* When you test this API within the node, it will not return the expected output. However, when you pass the response in a message node to the end user, it will show the output.
* The data type of the variable in which you store the response and data type of the API response should be the same.
:::

### Parse API response using Function node

You can also parse an API response via Function node by passing the function in a separate node.

1. Go to the [Functions](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) section and [write a custom logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-a-new-function) to parse the API response. 

For example, to extract only the weather description and temperature from the following API response you can write a custom logic as mentioned below.

| **API Response**  | **Custom Logic** |
|---------------------------------------------|-------------------|
{<br/>"coord":<br/> {<br/> "lon": 80.2785,<br/>"lat": 13.0878<br/>},<br/> "weather": [<br/>{<br/>"id": 721,<br/>"main": "Haze",<br/>"description": "haze",<br/>"icon": "50d"<br/>}<br/>],<br/>"base": "stations",<br/>"main": {<br/>"temp": 304.14,<br/>"feels_like": 310.72,<br/>"temp_min": 304.14,<br/>"temp_max": 304.14,<br/>"pressure": 1004,<br/>"humidity": 70<br/>},<br/>"visibility": 5000,<br/>"wind": {<br/>"speed": 4.12,<br/>"deg": 240<br/>},<br/>"clouds": {<br/>"all": 75<br/>},<br/>"dt": 1701769926,<br/>"sys":<br/>{<br/>"type": 1,<br/>"id": 9218,<br/>"country": "IN",<br/>"sunrise": 1701737256,<br/>"sunset": 1701778274<br/>},<br/>"timezone": 19800,<br/>"id": 1264527,<br/>"name": "Chennai",<br/>"cod": 200<br/>}<br/>| return new Promise(resolve => {<br/>let weatherResponse = data.variables.weather_response;<br/>let weatherDescription = weatherResponse.weather[0].description;<br/>let temperature = weatherResponse.main.temp;<br/>let output = {<br/>weatherDescription: weatherDescription,<br/>temperature: temperature<br/>};<br/>resolve(output);<br/>});<br/>
                                          
2. Go to **Studio** > **Build** > to the respective flow and [store the response of this API node in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#store-the-api-response).
3. Add a [function node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function) to the flow and pass the function you created in step 1. [Store the response of this function node in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables) depending on its data type.

    <img src="https://i.imgur.com/4PTK4Q9.png" alt="drawing" width="90%"/>

4. Include a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) and pass the variable in which you stored the function's reponse with the syntax that displays the required data to the customer.

    <img src="https://i.imgur.com/Wf4cnkD.png" alt="drawing" width="100%"/>



