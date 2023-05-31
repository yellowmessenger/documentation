---
title: Function use cases
sidebar_label: Function use cases
---

The following are some of the use cases of the **Functions** section in **Studio**.

## Display  weather in your bot in a caraousel node

1. [Add the weather API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api#1-add-a-new-api-using-url) to the platform.
2. [Create a flow ](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow)and add an [API node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api). Select the relevant API in this node to fetch weather data.

![](https://i.imgur.com/Jklf0Ia.png)

3. Save the response from the API node into a variable for further use.

![](https://i.imgur.com/dKN4rrr.png)

4. Navigate to **Functions** and pass the variable containing the API response and write a code that matches the dynamic format of the carousel node. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#4-carousel) for the dynamic format.

![](https://i.imgur.com/Jklf0Ia.png)

5. Include a [Function node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function) and choose the function you created in the previous step. Save the response of this node into another variable.

![](https://i.imgur.com/PQhxMKE.png)

6. Add a [carousel node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#4-carousel) to the flow. In the **Fetch from** field of the carousel node, fetch the variable created in the previous step to populate the carousel with the desired data.

![](https://i.imgur.com/Mlh4Xzv.png)

:::note
Instead of including the Function node, you can also pass the function in the **Parse API response** field.
![](https://i.imgur.com/eIReCNg.png)
:::


## Calculate 45 days before the present date

To achieve this, we will retrieve the timestamp from the **Date** variable in the platform.

```
{
    //Date object
    
    "timestamp": "Wed, 28 Jul 2022 05:04:18 GMT",
    "year": 2022,
    "month": 7,
    "date": 28,
    "day": "Thursday",
    "hour": 5,
    "minute": 4
}
```

1. [Create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) and add a [variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables). In the node, create a variable, **bookindate** and set the value as {{{date.timestamp}}}.

![](https://i.imgur.com/e2JnHnf.png)

2. Add a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-text) and pass the variable **bookindate** in it. 

![](https://i.imgur.com/aQMaaUM.png)

3. Write the following code and pass the function into a node. Store it's response in a variable.

```
return new Promise(resolve => {
    let bookingDate = data.variables.bookingDate;
    let dt = new Date(bookingDate);

    dt.setDate(dt.getDate() - 45);
    console.log("Final Timestamp ---> ", dt.toLocaleString());

    let pdate = dt.toLocaleString()
    console.log(pdate,"PDATE IS --->");
    const myArraydate = pdate.split(",");
    const myArray = myArraydate[0].split("/");
    let newDate = myArray[1] + "/" + myArray[0] + "/" + myArray[2]
    data.variables.bookingDate = newDate;

    resolve(newDate);
});    
```
![](https://i.imgur.com/GIQH8Op.png)


4. Pass that variable in the text node to display the result to the end user.

![](https://i.imgur.com/2cCX1By.png)

**Result:**

<img src="https://i.imgur.com/fioBFmp.png" alt="drawing" width="60%"/>


## Code snippet to perform sentence autocompletion 


```
return new Promise(resolve => {
    console.log("inside autoSuggestion");
    let result = data.variables.autoComponents;
    const { term } = data;
    let suggestions = [];
    result.forEach((hit) => {
        if (hit.component.toLowerCase().includes(term.toLowerCase())) {
            suggestions.push([hit.component, hit.component]);
        }
    });
    resolve(suggestions);
});
```

## Code snippet to decode BASE64

Base64 encoding represents data using 64 ASCII characters. When we receive an encrypted string via an API, we decrypt it to obtain the original object. After decryption, we can upload it to a server like Yellow's server. We can then share the URL of the uploaded object to enable access by others. Base64 encoding safeguards data integrity during transmission and simplifies its decoding back to the original format. To know more about BASE64, click [here](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

```
 let call_api = await app.executeApi('api_name', { argument: _value});
    let api_data = JSON.parse(call_api.body);
    app.log(api_data, "#####API DATA");

    let buffer = new Buffer.from(api_data.obj_name, "base64"); // Decode the file
    let file_url = await app.uploadFile(buffer, 'File.pdf');  // Upload the file to YM server
    // await app.sendDocument(file_url, { caption:"FILE", filename: 'File.pdf', mime: 'application/pdf' });
    // Share the File URL
    await app.sendCards([
        {
            title: "Kindly download the same as PDF",
            actions: [{
                title: "DOWNLOAD",
                url: file_url
            }]
        }
    ]);

```