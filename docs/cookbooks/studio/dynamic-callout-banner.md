---
title: Dynamically load the callout banner in chatbot
sidebar_label : Dynamically load the callout banner 
---

You can dynamically load the callout banner in the bot by updating the relevant data in the database. This allows for real-time changes and customization of the banner content based on specific needs. 

   <center><img src="https://i.imgur.com/BJgdGNZ.png" alt="drawing" width="30%"/></center>

Consider an e-commerce bot where you want to display promotional offers based on data in the database columns like date, start time, and end time. By configuring the database appropriately, the e-commerce bot will display and update promotional banners dynamically.

**Scenario**: For an e-commerce platform, display a Christmas promotion from December 20th to December 25th.

Sample database entries:

date | start_time | end_time |banner_data
-----|------------|----------|----------
20-12-2024  | 00:00 | 23:59	| "Christmas sale starts now! 30% Off!"
21-12-2024 | 00:00	| 23:59 |	"Exclusive christmas offers!"
22-12-2024 | 00:00 | 23:59	| "Last minute christmas deals!"
23-12-2024 | 00:00 | 23:59 | "Hurry! Christmas sale ending soon!"
24-12-2024 | 00:00 | 23:59| "Christmas eve specials!"
25-12-2024	| 00:00 | 23:59 | "Merry Christmas! final day of sales!"

**Outcome**:

* On 20 December, the bot will display: "Christmas sale starts now! 30% Off!"
* On 21 December, the banner updates to: "Exclusive Christmas offers!"
* This process continues dynamically, displaying the relevant banner data until the end of 25 December.

If you do not want the banner to be displayed, you can set the entire Date in the DD-MM-YYYY format and modify the logic accordingly in the flow to work.

#### Prerequisite

To load the callout banner dynamically, consider the following prerequisites:

* **Database setup**: Create a database with the relevant columns based on the banner requirement. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database#create-database-table).
* Use [send event](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#11-send-event) node:  Use this node to call the event `ui-event-update-promotion`. When this event is triggered, the bot fetches the details from the database and displays them in a callout banner format.


#### Loading callout banner dynamically

To load the callout banner dynamically, follow these steps:

1. Create a flow to trigger the event. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#13-trigger-flow-using-event).
2. Based on the date specified in the database it searches the info and passes the response to the send event node.
 
   ![](https://i.imgur.com/EhPbfwm.png)
   
3. Inside the send event node configure the custom data. 
Select the event type as **Custom** and inside the data field pass the below code as per your requirement.

   ![](https://i.imgur.com/2mmbcV6.png)
     
Below is the sample code:

```javascript
{
    "banners": [
        {
            "title": "{{{variables.dbbanner_data.records.0.banner_message}}}",
            "options": [
                {
                    "title": "Devrev",
                    "url":"{{{variables.dbbanner_data.records.0.banner_but1}}}"
                },
                {
                    "title": "Google",
                    "url": "{{{variables.dbbanner_data.records.0.banner_but2}}} "
                }
            ],
            "type": "text"
        },
        {
            "type": "image",
            "imageURL": "{{{variables.dbbanner_data.records.0.banner_image}}} ",
            "linkType": "url",
            "linkURL": "{{{variables.dbbanner_data.records.0.banner_urlimage}}} "
        }
    ],
    "bannerSettings": {
        "state": "close",
        "textOnMinimise": "Hello this is banner minimize text"
    }
}
```
   





