---
title: Sync database
sidebar_label: Sync database
---

:::info
This node is only available when a flow is created as a [workflow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#create-a-skill). 
:::

The Sync database node lets your bot synchronize its database with external databases via APIs. This node streamlines the process of automating data synchronization with external databases.

Let's say you have a bot that assists with inventory management for an e-commerce website. You want to ensure that the inventory data in your bot's database is always up-to-date with your main inventory database. By using the **Sync database node**, you can seamlessly integrate your bot's database with your main inventory database, ensuring that any changes or updates made externally are reflected in real-time within your chatbot, thus providing accurate and timely information to your users.


**Configure Sync database node**

To configure the **Sync Database** node, follow these steps:

1. Drag and drop the **Sync Database** node to flow editor.

   ![](https://imgur.com/RkLZsbJ.png)

2. In **API**, choose the preferred API in the drop- down. For steps to add a new API to the bot, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api).
2. In API response type, choose the response type of the API added. **JSON** and **CSV** are the options available. Fill the following fields based on the option selected.
     i. **JSON path selector:(this field is available only for the JSON response)** Select the path where the relevant data lies in the JSON response. For example, the JSON path  for the following code would be  "data.results.*

```json
{
  data: {
    results: {
      record1 :{},
      record2: {},
      ........
      } 
  }
}
```

   ii. **Parse API response:** Choose the function that contains the transformation logic. This helps access individual row attributes. Note that, the column names in the table should be exactly the same as the attribute names.

 **Sample code**
 
   (This is optional for CSV)

 ```
return new Promise(resolve => {
  let record = ymLib.args.record;
  /*
    record is an object, representing a row. all values will be of type string, keys will be fetched from the csv-header.
  */
  resolve({
    identifier: record.identifier,
    category: record.category
  });
});
```


    iii. **Store Response in:** Choose the variable in which the response of this node should be stored.
    iv. **Select table:** Choose the database table in which the data should be populated.
    iv. **Select action:** Choose the following preferred actions:
     - **Insert**: Adds rows from API response.
     - **Update**: Compares rows from API response to the existing table and checks if there is a match in Unique ID and updates those rows.
     - **Import**: Truncates existing table completely and replaces it with data from API response.

To use this node in a flow:

1. Create a [Schedule Event](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#schedule-events) (if there is a requirement to schedule the database updates).
2. [Add the API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) and [create a database table ](https://docs.yellow.ai/docs/platform_concepts/studio/database#create-database-table)in the required format (template without any rows).
:::note
* The column names in the table should be exactly the same as the attribute names in the JSON response. 
* All the rows will be imported, processed and sent to the selected table to perform the selected action.
:::
3. Create or open a [skill](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#create-a-skill). On the start node, select the scheduled event as the start trigger. 

![](https://i.imgur.com/BpOb6o5.png)

4. Connect the start node to the **Sync Database** node.
5. When the Sync DB node gets triggered, it pulls all the data through API. 
6. On the scheduled time, status of the sync can be viewed in **status** object.

```
{
success: true,
error : 'if any, we show it',
recordsProcessed: 1230,
}
```


:::note
When an event is created using the action node, the *eventID* can be found in the response (payload) of that action node.
:::

Watch this video to see how this node works:

[![Sync DB node](https://cdn.loom.com/sessions/thumbnails/1e7104db203c4061a5d6839ea515198e-with-play.gif)](https://www.loom.com/share/1e7104db203c4061a5d6839ea515198e)

