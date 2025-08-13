---
title: API node
sidebar_label: API
---

API node allows you to integrate APIs from third-party systems and use them within conversational flows. It acts as a gateway for triggering HTTP-based APIs (GET, POST, PUT, DELETE, CREATE) and enables sending data from your workflow to external systems, and receiving data from external systems. You can then process data and use in subsequent steps or store in the database.

You can use the API node when your chatbot needs to communicate with external systems or services. This is useful for:
* Triggering client APIs to perform specific operations.
* Sending or receiving data from third-party services.
* Enhancing workflows with real-time data from other platforms.

**Use cases**

* **Fetching data**: Retrieve live data from external APIs, such as weather, stock prices, or inventory updates.
* **Triggering actions**: Send commands to internal APIs to trigger tasks like database updates, order placements, or account creation.
* **Data submission**: Submit form data or feedback to external services.

**Managing static and dynamic data in API node**

* **Static data**: Use hardcoded values for the request body, URL, or headers. This is ideal when the API call details remain consistent and do not change frequently.
* **Dynamic data**: Use variables to pass dynamic data such as user inputs, workflow outputs, or information fetched from previous nodes. This allows API calls to adjust according to the current context of the conversation.

**Configure API node**

To configure API, follow the below steps:

1. Drag and drop the API node in the flow editor. For more detailed information on how to add an API to the API node, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#steps-to-store-api-response).

    ![](https://imgur.com/7eCFauj.png)

2. To store and view the entire API response, select the following option in the API node:

    ![](https://imgur.com/3GaZVKD.png)

3. Add the variable you selected in the API node to the Database node to store the API response.

    ![](https://imgur.com/LPdOoWB.png)

4. Go to the database to view the API response stored in the column you selected in the database node.

    ![](https://imgur.com/GJ3UHOw.png)

Refer to the following gif to see how the API node store the response in the database node.

   ![](https://imgur.com/VW3n6Ll.gif)

#### Extract specific value from API response

If you need to fetch a specific value from the API response, use the following syntax:

`{{{variables.variablename.fieldname}}}`

For example, to get the user’s first name from the response:
`{{{variables.user360response_obj.data.firstName.value}}}`

Refer to the following GIF to see how it works:

   ![](https://imgur.com/pRDeVC4.gif)