---
title: Database node
sidebar_label: Database
---

Database node allows you to perform different database operations such as inserting, updating, and searching data within your database tables during bot conversations. This enables bots to fetch dynamic data, store information, retrieve specific records, or update details based on user inputs. For more detailed information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database).

You can perform the following actions in the Database node:
* **Insert**: Use to add new data into specific columns in an existing database table.
* **Search**: Use to retrieve specific data from the database based on user-provided information or predefined conditions. For example, to find a customer’s order details or account status during a support interaction.
* **Update**: Use to modify existing data, such as updating a user’s contact details or changing the status of an order.

> This node is also available for voice bots. 

**Configure Database node**:

To configure database node, follow these steps:

1. Add a prompt node to get the user details and store the user response in a variable.

    ![](https://imgur.com/pDt6GEx.png)

2. Drag and drop the Database node to the flow editor and select the following types:
   * **Insert:** Select **Insert** to insert data in each column into any existing database table you select. To know more, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database#insert-new-records-or-values-to-a-database-table). 
   * **Search:** Select **Search** to look for specific data in the database. To know more, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database#fetch-database-records-using-the-database-node).
   * **Update:** Select **Update** to update any column in the databse. For steps to do so, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database#update-database-table-records-using-the-database-node)

    ![](https://imgur.com/k5H3ugw.png)
    
Refer to following GIF to see how the Insert type works in Database node.

   ![](https://imgur.com/TDQZGxP.gif)

Refer to following GIF to see how the Search type works in Database node.

  ![](https://imgur.com/PCs1gv1.gif)

Refer to following GIF to see how the Update type works in Database node.

   ![](https://imgur.com/X7VxhT0.gif)