---
title:  Google sheet integration for dynamic record update
sidebar_label : Google Sheet integration for dynamic record update
---

This guide will walk you through integrating Google sheets with your AI-agent to automatically update records based on user interactions.


**Scenario**

Consider that you have created a [campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign) to notify users about current offers, and you want to automatically update a Google sheet with user interaction details when the campaign is sent. The goal is to capture and insert the following information into the Google sheet:
* **Template name**: Name of the template used in the campaign.
* **Quick reply clicked**: User's selected quick reply option.
* **Campaign ID**: Unique identifier for the campaign.
* **User phone number**: Contact number of the user.
* **Timestamp**: Date and time of the interaction.


**Prerequisites**

Consider the following prerequisite to automatically update records in Google sheet:

* **Google sheets integration**: Configure the integration with [Google sheets](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/google-sheets#scope-of-integration).
   ![](https://i.imgur.com/DKcySrP.png)
* **Create an event**: Set up an [event](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub) in the **Engagement** section to trigger the data capture flow.
    ![](https://i.imgur.com/RqrWo8v.png) 
    
    
### Steps to automatically update a Google sheet 

To configure a bot flow that dynamically updates a Google sheet based on user interactions, follow these steps:

1. Go to the flow editor and select the start trigger type as **Event** and choose the event that you have created.

    <img src="https://i.imgur.com/x7TL32I.png" alt="drawing" width="50%"/>
    
2. Add a Variable node to store to store all template values retrieved from the quick reply event and the values of the Google sheets nodes:
   * **spreadSheetID**: Unique Google Sheet ID.
   * **range**: Defines the cell range for data insertion/deletion/updates.
   * **majorDimension**: Specifies how data is should be arranged (ROWS or COLUMNS).

3. To append new entries in new rows and to avoid overwriting existing records, use the **Google sheets** node to retrieve existing sheet data and store the result in an object variable.

Sample success response of GetValuesFromSheet:

```c
{
  "spreadsheetId": "1FXBz2k8m9Ys3zkJy6n8G4237q1x43Tq4nu6CdM1A66Y",
  "valueRanges": [
    {
      "range": "Sheet1!A1:A5",
      "majorDimension": "COLUMNS",
      "values": [
        [
          "J",
          "O",
          "H",
          "N"
        ]
      ]
    }
  ]
}
```

   <img src="https://i.imgur.com/ZEORR4B.png" alt="drawing" width="80%"/>

4. Connect **Analytics** node to the Google Sheets node’s fallback to capture any errors or event data for further analysis.

   ![](https://i.imgur.com/4DH3WbE.png)

5. After retrieving the sheet records, add a Function node to insert the data. The function node performs two operations:
   * **Adjust the range value**: The function increments the row index by +1 to ensure new data is inserted into the next available row, avoiding any overwriting of existing records.
   * **Output**: The function's output should be saved in an object variable that includes the array of values to be inserted into the sheet and the updated range for data placement.

     ![](https://i.imgur.com/7j0hE4s.png)

A sample code to get the total length of records and to populate an array variable for inserting the records in the sheet: 

```c
return new Promise(resolve => {
        // Your logic goes here

    let templateName = data.variables.template_name
    let phone = data.variables.phone
    let campaignid = data.variables.campaignId

    let qrclicked = data.variables.QRclicked

    let currentTime = new Date();
    

    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330;   // IST offset UTC +5:30 
    let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    console.log(ISTTime, " istToday ")
    let hoursIST = ISTTime.getHours()
    let minutes = ISTTime.getMinutes()
    // console.log(hoursIST, " hoursIST ")
    // console.log(minutes, " minutes ")

    let date = ISTTime.getDate()
    let month = ISTTime.getMonth() + 1
    let year = ISTTime.getFullYear()
    let day = ISTTime.getDay()
    console.log(month, "month ==")

    console.log(day, "day ==")

    let d = `${date}/${month}/${year}`
   let t

    if (hoursIST >= 0 && hoursIST < 12) {
        t = " AM";
    } else if (hoursIST >= 12 && hoursIST < 24) {
      t = " PM";
    }
    let time = `${d}, ${hoursIST}:${minutes} ${t}`
    console.log(time, " time ")


    let myArray = [
                    [phone], 
                    [qrclicked],
                    [templateName],
                    [campaignid],
                    [time]
                     ]

 console.log(myArray, " ==== my array ====")
 
    let y = data.variables.obj.valueRanges[0].values.length
    // console.log(data.variables.obj, " === data.variables.obj")
    console.log(y, "====== Number of Records =====" )
 //Range = Main!A:Z
    let range = `Main!A${y + 1}:Z`


    let obj = {
        "a": myArray,
        "b": range
    }

     console.log(obj," === obj ===")
        resolve(obj);
    });                                 
```

6. Add a Variable node to modify the **majorDimension** variable to "COLUMNS". This ensures each array record is added to a separate column within the sheet.

     ![](https://i.imgur.com/Rn8RqLu.png)

**Example**: If your data is: 
```
 [
    [1, 2, 3],
    [4, 5, 6]
]
```

  * If major dimension is rows the data in the sheets will be added as vertically

    <img src="https://i.imgur.com/vfecWkN.png" alt="drawing" width="60%"/>

* If the major dimension is COLUMNS then the data shall be added as horizontally.

   <img src="https://i.imgur.com/dkAHzID.png" alt="drawing" width="60%"/>

7. In Google sheets nodes, define the following:
    1. Select **Insert/UpdateValuesInSheet** option from Google Sheets node. 
    2. Pass the parameters such as majorDimension, Range (updated value from step 5), values (data array to be inserted), spreadSheetID.
    3. Store the node output in an object variable.

    ![](https://i.imgur.com/c7drrps.png) 

8. Connect **Analytics** node to the Google sheet's node fallback. This node will capture the event name and error response for analysis.

   ![](https://i.imgur.com/4DH3WbE.png)
   
The screenshot below illustrates how user interaction data from a campaign is automatically inserted into a Google sheet:
   
   ![](https://i.imgur.com/noNjlSl.png) 

