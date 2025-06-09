---
title: Data formatter
sidebar_label: Data formatter
---

Data Formatter node allows you to convert CSV (or) XML file responses to JSON format. This node is used when an API is giving the response in CSV or XML Format. By converting these formats to JSON, the data becomes more accessible and usable within your bot's flow.

* **Supported input formats**: CSV (Raw), CSV (Base64), CSV (URL), XML
* **Supported output format**: JSON

**Use case**

For instance, if an API returns a user's name and email in CSV format, the Data Formatter node can convert this into a structured JSON object, making it easier to manage and process the information within the bot's flow.

**Configure Data formatter node**

To configure data formatter node, follow these steps:

1. Drag and drop the Data formatter node in the flow editor.

2. Define the following fields:
   i. **Input**: Create/select the variable that contains the data to be converted and select the format of the data. CSV (raw, base64, url) and XML are supported in our platform.
  ii. **Format to**: Select JSON option.
  iii. **Parse json output**: Choose the function that filters out a certain data from the JSON. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) to know about writing functions.

     ![](https://i.imgur.com/X20qA35.png)
     
Refer to the following GIF to see how the Data formatter node works:

   ![](https://imgur.com/pd9x7FJ.gif)
