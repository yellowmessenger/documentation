---
title: Manage database tables & table data
sidebar_label: Manage database tables
---


A database (DB) for a bot is a structured system that stores and manages essential data for its operations. You can create a database table with rows and columns, each with a specific name and data type. Database enables the bot to function effectively and provide personalized, responsive interactions. 

It acts as the bot's memory, holding information such as:

- **User Details:** Profiles, preferences, and credentials.
- **Interaction History:** Logs of past conversations and user activity.
- **Feedback:** Ratings, reviews, and survey responses.
- **Operational Data:** Configuration settings and content like knowledge base articles.
- **Transactional Records:** Details of transactions and payment information.
- **Integration Data:** Information from external APIs and systems.

## Create database table

You can create a table with different columns, each with a specific name and data type.

Database tables should be created in the Development or Sandbox environment. These tables will only become visible in the Production environment after the bot is published from Sandbox to Staging, and then from Staging to Production.

#### Supported data types and limitations:

| Data types | Limitations | 
-------------|-------------
String | You can create a maximum of 47 string data type columns per table.<br/> <img src="https://imgur.com/YIRXAOE.png" width="70%"/>
Integer | You can a create maximum of five integer data type columns per table. <br/> <img src="https://imgur.com/IrD3Qln.png" width="70%"/>
Boolean | You can a create maximum of two boolean data type columns per table.<br/> <img src="https://imgur.com/JfyfDPV.png" width="70%"/>
JSON | You can a create maximum of one JSON (object) column in a database table.<br/> <img src="https://imgur.com/yxXYj1f.png" width="70%"/>
Date | You can a create maximum of two date data type columns per table.<br/> <img src="https://imgur.com/MuqOGhQ.png" width="70%"/>

#### Creating table

To create a database table, follow these steps:

1. Navigate to the base environment (Sandbox or Development).
2. Go to **Automation** > **Database** > **+ Create new table**.

    ![](https://imgur.com/jmdGLhy.png)

3. Define the following fields and click **Create table**.

   <img src="https://i.imgur.com/crYFfXk.png" width="70%"/>
   
    1. In **Table name**, enter a name for your table. The table name must be at least 3 characters long.
    2. In **Field name**,  enter a unique column name. 

        * Each Field name (column name) must be unique
        * Field name should be at least 3 characters long.
        * Currently, there is no limit on the number of columns you can create.
    3. In **Type**, choose the datatype of the column. You cannot modify the datatype once the table is created.
    4. Enable **Searchable** to make a String datatype field searchable in the database node (in flows). 
        * You can add up to 10 searchable string-type columns. Once this limit is reached, no additional searchable string-type columns can be added.
        * When creating columns, you can set them as searchable or non-searchable. Once you save the column name, this setting cannot be changed.


:::note
* You cannot delete a column once added.
:::

## Insert data into a database table

When publishing the bot, only the database structure (table and column names) is automatically transferred to higher environments. 

To manually transfer the data within those tables, you need to download it from the current environment and upload it to the target environment.

However, the following are the different ways in which you can add data to your database tables:

### Add individual records to the db table manually

To add each record manually, follow these steps:

1. Choose the environment where you want to add record.
2. Go to **Automation** > **Database**, navigate to the table where you want to add a new record.

     ![](https://imgur.com/jmdGLhy.png)

3. Click **Add new record**.

   <img src="https://i.imgur.com/ldkA1om.png"/>

4. Enter the values for each field and click **Add record**.

   <img src="https://i.imgur.com/dLFQoY4.png" width="80%"/>
   
### Import bulk data into a db table

Manually adding multiple records to a table can be tedious. Instead, you can upload multiple entries using a CSV file. 


#### CSV file upload guidelines

1. **Column headers:** Ensure all column headers are in lowercase.

2. **Data types:** Verify that the data types in the CSV match the database requirements.

3. **Exponential notation:** If the first column appears in exponential notation (e.g., 3.67406E+15), consider converting it to a number or formatting it as a string.

4. **Formatting tip:** To avoid issues, upload the CSV file to a spreadsheet application like Google Sheets or Microsoft Excel, and then download it as a CSV file before re-uploading.

#### Importing CSV file

To import bulk data to DB, follow these steps:

1. Go to **Table actions** > **Download** to download the existing table structure.

   ![](https://i.imgur.com/1esIUQL.png)

2. Open the downloaded CSV file and add the records you want to upload. Ensure the data is correctly formatted according to the table structure. Here is the screenshot of a sample CSV file:

   ![](https://i.imgur.com/08Hyv9a.png)

3. Go to **Automation** > **Database**. Click the <img src="https://i.imgur.com/4P3IIy6.png" width="40"/> icon to select the CSV file from your local system and upload it.

    ![](https://i.imgur.com/ZZ7HYbp.png)

* After the upload is complete, you will see the new records created in the table.

## Manage database records using the Database node

### Insert new records or values into a database table

You can directly pass field values to the table from bot flows. For instance, in a lead generation flow, you might need to collect the user's email address, phone number, and interested product and store them in a database table.

To insert data into the table, follow these steps:

1. Select the [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node and choose 'Insert' in the *Select type* field.

2. In the drop-down, choose the respective table where you want to insert the values
 
   <img src="https://i.imgur.com/aCWfB15.png" alt="drawing" width="80%"/>

 3. Click **Add** to select the respective column name.

    <img src="https://i.imgur.com/vMNDqQ7.png" alt="drawing" width="80%"/>

 4. Map each field with the respective value you want to insert.

    <img src="https://i.imgur.com/X3u1Pos.png" alt="drawing" width="80%"/>
    
Refer to following GIF to see how the Insert type works in Database node.

   ![](https://imgur.com/TDQZGxP.gif)    

### Update database table records using the database node

To update an existing field value of a table use the [Database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) and choose **Select type** as **Update** along with other configurations.

   <img src="https://imgur.com/HUhNRrn.png" alt="drawing" width="80%"/>
   <img src="https://i.imgur.com/lHajFi7.png" alt="drawing" width="80%"/>

Refer to following GIF to see how the Update type works in Database node.

   ![](https://imgur.com/X7VxhT0.gif)
   
### Fetch database records using the Database node

To search for specific information in a bot conversation using the [Database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database), follow these steps:

1. Select the [Database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) and choose **Select type** as **Search**.

   <img src="https://i.imgur.com/zdictxI.png" alt="drawing" width="70%"/>

2. In **Select columns of** field, select the columns you want to search.
3. Under **Response**, in **Sort By**, choose the column by which the results should be sorted. Specify the order as either ASC (ascending) or DSC (descending).

4. Enable **More options** to view other fields associated with the search results.

   <img src="https://i.imgur.com/4zlnEAc.png" alt="drawing" width="70%"/>

5. Enable **Create URL for extracted records** to generate a URL that stores the extracted records. This URL will be saved in the selected 'Store response in' variable.

6. In **Filter distinct**, choose the column that should serve as distinct parameter in the search.
7. Under **Pagination**, enter the **Page number** and **Size limit** to display the records to the user. You can fetch these values dynamically from variables. If pagination is not required, leave these fields empty.


The search reponse will be in the form of object. You can use the snippet ```{{{variables.variablename.records.0.fieldName}}}``` in a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-text) to display the response to the user.

Refer to following GIF to see how the Search type works in Database node.

  ![](https://imgur.com/PCs1gv1.gif)

## Filter table data

When a table contains numerous records, scrolling through each field to find specific information can be challenging. However, you can simplify the process by filtering records based on fields containing a specific keyword.

**To filter a certain set of data, follow these steps:**

1. Go to the specific table to filter the data. Click **Inserted date**. 

   ![](https://i.imgur.com/6dUn2sf.png)
   
 * The drop-down displays all the columns of that table.  

2. Select the column that contains the information you want to filter. Use the search bar to enter keywords or specific values to filter records accordingly. For example, in a table named 'book_an_appointment', you can filter records where the 'speciality' column contains 'Cardiology'.
   
    ![](https://i.imgur.com/dMdQYlO.png)
 
3. To get records that were inserted or updated within a specific period, choose "Inserted date" or "Updated date" and select your preferred duration, as shown below.

   ![](https://i.imgur.com/dIgy09h.png)
   
## Manage database tables

You can manage individual rows in a database table by editing, updating, truncating, masking specific columns, and downloading the table data.

### Edit database table

You can add new columns to the current table, rename existing fields, and establish relationships between tables.

To edit a table, follow these steps:

1. Go to **Automation** > **Database** and navigate to the base environment according to your environment hierarchy. 
2. Select the table you want to edit and click **Table actions** > **Edit table**.

    <img src="https://i.imgur.com/d7bisxP.png" alt="drawing" width="70%"/>

3. Modify the required columns. You cannot modify the datatype or searchability of a column once it is created.

    ![](https://i.imgur.com/lBh8dWG.png)

4. Enable **Case insensitive search** option to search the field regardless of the case used in the search phrase.

5. To set up relations with other table, click **Add relations** and define the following fileds:

    ![](https://i.imgur.com/SyHnKra.png)
    
   * **Column**: Choose the column of the current table that you want to map.
   * **Name**: Enter a name for the relation.
   * **Type**: Choose the type of association.
   * **Related table**: Choose the table that you want to associate.
   * **Related column**: Choose the column that you want the current column to associate with.
6. Click **Save**.
7. Publish the bot to observe changes in the subsequent environment within the hierarchy. For instance, you can deploy updates from the Sandbox to Staging, and then further push changes from Staging to the Production environment.

### Mask database columns

The Super Admin of the bot can mask certain database columns. You can use this in cases where you need to block showing specific information to other agents or users or any PII (Personally Identifiable Information) data stored in plain text. The data in masked columns will appear as `*****` instead of real values.

:::note
* Masking of data happens at the application level in the backend. You cannot access it in any other way.
* You can mask database columns only in lower-tier environments. In a two-tier setup, you can mask columns in the Development environment. In a three-tier setup, you can mask columns only in the Sandbox environment.
:::

To mask columns, follow these:

1. Go to **Table actions** and choose **Mask columns**.

   ![](https://i.imgur.com/zGiPOCs.png)

2. Choose columns that store sensitive information and click **Update** to apply the masking.

   <img src="https://i.imgur.com/jZHDSza.png" width="60%"/>

For example, after masking, you can see a column named ‘test’ displayed as `****` instead of real values

  ![](https://i.imgur.com/ceC7f7Z.png)


### Delete database table fields or table

You can delete a database table only in the sandbox or development environment.

To delete database table fields or table, follow these steps:

1. Go to **Automation** > **Database** and select the table that you want to delete. 

2. Click **Table actions** and choose the preferred option.

   ![](https://i.imgur.com/b7OdELU.png)
  
   * **Truncate**: Deletes all the data that exists in a specific table without removing the table structure.
   * **Drop**: Deletes the entire table structure along with all its the records. All the data will be lost (even in production) if you create a new table with the same name. You will also need to update the reference of this table in all the journey nodes where this table was used.


