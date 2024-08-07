---
title: Product catalogue
sidebar_label: Product catalogue
---

The Product Catalogue helps to streamline your product management process by allowing you to store and showcase your product catalog to end users. It allows you to  store all the specific details of your products in one centralized location. Using the **Product Search** node(powered by GPT in the backend), the bot can seamlessly match user queries with product descriptions stored in the catalog, ensuring accurate and efficient product display to end users. 

Imagine you run an online store and have added the Product Catalog to your bot. When a user asks about a product, like a laptop, the bot quickly finds matching items from the catalog and shows them to the user. This makes it easy for users to find what they're looking for and helps them make purchases smoothly.

## Create a product catalogue

1. Go to **Automation** > **Database** > **Product catalogue** > **+ Create new table**.

   ![](https://i.imgur.com/1QcJv8J.png)

2. Fill in the following fields:

   ![](https://i.imgur.com/ORoENMn.png)

* **Table name**: Provide a name to your product catalogue.
* **Field name**: Enter the name of the product.(this will appear as a column)
* **Description**: Describe the product. We would suggest you to add a detailed description that will help GPT to read the description and fetch the product easily.
* **Type**: Choose the data type for the data that will be added to that column.
* **Searchable**: Enable this field to make this column searchable for the bot. Enable search only for columns with searchable data ton ensure better search results.

3. Click **Create table**.

## Manually add products to product catalogue

1. Click **+ Add new records**.

   ![](https://i.imgur.com/3Asm6np.png)


2. Fill the fields with the relevant data and click **Add record**.

   ![](https://i.imgur.com/KMADt38.png)


## Bulk import products to product catalogue 

The data to be imported should be in .csv format.

1. Click the import button on the top.

   ![](https://i.imgur.com/Ehj0Q2d.png)

 Choose the csv file from your system and click **Open**. 

## Manage the product catalogue table

You can add new columns, delete table data or the entire table and download the existing table.

   ![](https://i.imgur.com/WMNla0y.png)

| Action    | Description                                       |
|-----------|---------------------------------------------------|
| Add columns     | Add new columns to the existing table.            |
| Truncate  | Truncate will erase all the data under each column. |
| Drop      | Drop will delete the entire table.                |
| Download  | Download lets you export the table to your system as .csv files. |

## Filter products in product catalogue  

When a table contains numerous records, it can be challenging to scroll through each field to find specific information. However, you can simplify the process by filtering records based on fields containing a specific keyword.

1. Go to the specific table and click **All fields**. The drop-down displays all the columns of that respective table using which you can search. Fields that were marked **Searchable** while creating the table will only be displayed here. 

   ![](https://i.imgur.com/jZpT2Su.png)

2. Choose the column in which you want to filter specific information, and use the **Search box** to filter records.

   ![](https://i.imgur.com/Ql8oZ9V.png)
 
3.  To get the records that were inserted or updated in a specific period, choose **Inserted date** or **Updated date** and select your preferred duration as shown here.

   ![](https://i.imgur.com/Hh7oVvL.png)

## Display product catalogue in bot conversations

To showcase products from the catalog to a user, you'll need to construct flows containing the **Product Search** node.

1. [Create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#manually-create-a-flow) for your use case.
2. At whichever point of the conversation you want the bot to display the products, include the **Product search** node.

   <img src="https://i.imgur.com/4Mgvn3K.png" alt="drawing" width="80%"/>


3. Fill the following fields in the node:

   ![](https://i.imgur.com/ztWUzV7.png)

* **Bot asks**: Enter the message the bot should display to the end user.
* **Table to search**: Choose the product catalogue from which the products will be displayed.
* **Column**: Choose the specific column from which the products will be listed.
* **Question for bot to ask**: Enter the message to display to the user while displaying products from the column.

4. In **Store response in** create or choose a variable to store the response of this node. The response will be in the form of stringified array. Connect a [Dynamic Chat node](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode) or [Carousel node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#26-carousel), and parse this response within it to build the rest of the flow according to your specific use case.