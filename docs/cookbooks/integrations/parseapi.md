---
title: Parse API response field
sidebar_label : Parse API response field
---


The Parse API response node can help you extract the important information from an API response. 

Let's say that you receive a response that looks like this,
```
{
  "body": x,
  "status": y
}
```

and you only need the **body** part, you can use the **Parse API response** node to filter out and extract the **body** information. 

:::info
For example, you made a request to an API to get a list of people along with their contact information. The API will send back a response containing this data in a specific format.

However, the response might contain more information than you need. For example, if you're only interested in the name and email of the first person in the list, you would need to parse the response. Parsing means to extract only the data you need and convert it into a data structure that you can work with in your code.

Once you have parsed the response, you can access the specific pieces of data that you need. You can then use this information for further processing or display it in your application as needed.
:::

1. To add the code to filter the necessary information from the API response, go to [Functions](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#1) section and click **+Add new function** to add a new function that contains the specific code. This function will be used in the Parse API response node later.

 ![](https://i.imgur.com/7ueoDNE.png)


2. Next, go to the integration that receives the API response and locate the Parse API response node. This node filters the response to extract only the required information.

 ![](https://i.imgur.com/FJiBb5C.png)


3. In the **Parse API response** field, pass the function you created earlier that contains the code to filter the necessary information. This function will be executed by the Parse API response node to extract the required information from the API response.

Once you have completed the above steps, you should be able to receive a filtered API response that contains only the required information specified in your custom function. You can either use that for further processing or display it to the user.