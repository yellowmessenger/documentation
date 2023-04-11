---
title : How to create dynamic quick replies?
sidebar_label : Create dynamic quick replies
---

A **Fetch from** field is available in the quick replies node to add the code to generate dynamic quick replies. 

1. Include a [function node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function) and write the code to generate dynamic quick replies(you can also refer to the [sample code](#sample-snippet-to-generate-dynamic-quick-replies) below). 
2. Store the response of that function node in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#21-custom-variables).
3. Use quick replies node to display this data by passing the variable in the **Fetch from** field(as shown below).

![](https://i.imgur.com/EJpq5WO.png)


### Sample snippet to generate dynamic quick replies

```
return new Promise(resolve => {
      // Your logic goes here
      let title = data.variables.carsData2;
      let options = [];
      for (let i = 0; i < title.length; i++) {
        options.push({title : title[i].Mfr_CommonName, text:title[i].Mfr_Name});
      }
      let qrObject = {
        "title": "Here are list of cars from JAPAN",
        "options": options
      };
    console.log(qrObject,"qrObject");
    resolve(qrObject);
  });                                               

```


### Convert API Responses to Arrays

To parse API responses and convert them into an array format, refer the following snippet. 

```
return new Promise(resolve => {
    let apiResponse = ymLib.args.apiResponse; // fetch API response
    let body;

    if (apiResponse && apiResponse.body) {
        body = JSON.parse(apiResponse.body) // parse API response and store it in body variable
    }
    console.log(body,"2w2w2w2w2")
    let cars = body.Results
    let carsInfo = []
    for(let i=0;i< cars.length; i++) 
    {
        if(cars[i].Country=="JAPAN"){
            carsInfo.push({"Mfr_CommonName":cars[i].Mfr_CommonName,"Mfr_Name":cars[i].Mfr_Name}) // fetch PostOffice Name and store in postOfficeName array
        }
    }
    resolve(carsInfo);
});    
```

