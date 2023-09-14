---
title: Manage database tables & data
sidebar_label: Efficient data management
---

Databases store information as tables. During bot conversations, you can store user-specific data or display information based on input. This simplifies data insertion and querying.

Some use cases include creating a table with city, pin code, and address columns to display store addresses based on selected city or pin code, storing user feedback in a database table, and maintaining product information in a table to showcase details based on the chosen SKU or name.

## Create table

1. Go to **Studio** > **Database**.
3. Click **Create new table**.

   ![](https://i.imgur.com/8hpVAbA.png)

* In **Table name**, enter a name for your table.
* In **Field name**,  enter a name for the field that you want to insert. 
* In **Type**, choose the datatype of the field.
* Enable **Searchable** to make the field searchable inside the database node in flows. These fields are available for filtering and summarization in data explorer. 

  <img src="https://i.imgur.com/eEeZwOi.png" alt="drawing" width="60%"/>


4. Click **Create table**. 

---
## Filter table data

When a table contains numerous records, it can be challenging to scroll through each field to find specific information. However, you can simplify the process by filtering records based on fields containing a specific keyword.

**To filter a certain set of data:**

1. Go to the specific table and click **Inserted date**. The drop-down displays all the columns of that respective table using which you can search. 

   ![](https://i.imgur.com/zhxsXtd.png)

2. Choose the column in which you want to filter specific information, and use the **Search box** to filter records.

 For example, the following screenshot says in the table `b_two_b_queries`, get records whose company_name (column) has bites in it.
   ![](https://i.imgur.com/55XmW5v.png)
 
3.  To get the records that were inserted or updated in a specific period, choose **Inserted date** or **Updated date** and select your preferred duration as shown here.

  . ![](https://i.imgur.com/Hh7oVvL.png)

 ---

## Import data into table

Adding multiple records manually to a table can be tiresome, but you can easily upload multiple entries through a CSV file.

To import table data:

1. Go to **Studio** > **Database** and click the table for which you want to import data.
2. Create a CSV file with the data you want to upload. 

**Sample CSV file**

![](https://i.imgur.com/08Hyv9a.png)

:::info
To easily create a CSV file, first download the table (**Table actions** > **Download**) and add the records that you want to upload.
:::

3. Click <img src="https://i.imgur.com/sTOKCmc.png"  width="40"/>.

![](https://i.imgur.com/A2dKS2V.png)

4. Select the file from your local system and upload it.

You will see a new record(s) created in the table post upload.

## Edit table

You can either add new columns to the current table or rename existing fields. Additionally, you can establish relation associations between tables.

To edit a table:

1. Go to **Studio** > **Database**, select the table to edit and click **Table actions** > **Edit table**.

    <img src="https://i.imgur.com/jjaGBlK.png" alt="drawing" width="60%"/>

2. Modify the required columns.

    ![](https://i.imgur.com/R5pitUv.png)

:::note
You cannot modify the datatype or searchability of a column once created.
:::

3. Enable **Case insensitive search** to find the field regardless of the case used in the search phrase.

3. To set up relations with other table, click **Add relations**.
    ![](https://i.imgur.com/oaNF6qH.png)
    
   1. **Column**: Choose the column of the current table that you want to map.
   2. **Name**: Enter a name for the relation.
   3. **Type**: Choose the type of association.
   4. **Related table**: Choose the table that you want to associate.
   5. **Related column**: Choose the column that you want the current column to associate with.
4. Click **Update**.


## Mask database columns

The Super Admin of the bot can mask certain database columns. For example, passwords or any PII data stored in plain text. The data of the masked column will be visible as `*****` instead of real values.

:::note
The masking of data happens at the application level in the backend. You cannot access it in any other way.
:::

To mask columns:

1. Go to **Table actions** and choose **Mask columns**.

   ![](https://i.imgur.com/zGiPOCs.png)

2. Choose columns that store sensitive information.


   <img src="https://i.imgur.com/jZHDSza.png" alt="drawing" width="60%"/>

For example, you can see the column named ‘test’ with `****` instead of real values.

![](https://i.imgur.com/ceC7f7Z.png)

## Delete table fields or table

1. Go to **Studio** > **Database** and select the table to edit 
2. Click **Table actions** and choose the preferred option.

  ![](https://i.imgur.com/nstJTaR.png)
  
* **Truncate**: Deletes all the data that exists in a specific table without removing the structure of the table.
* **Drop Table**: Deletes the entire table structure along with all its the records.


## Manage records through bot conversations

### Insert field values

You can directly pass field values to the table from bot flows. For instance, in a lead generation flow, you might need to collect the user's email address, phone number, and interested product and store them in a datable table.

To insert data into the table, use the [Database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) and follow these steps:

1. In **Select type**, choose **Insert**.
2. In the in drop-down, choose the respective table (where to insert the value).
 
   <img src="https://i.imgur.com/aCWfB15.png" alt="drawing" width="80%"/>

 3. Click **Add** Records to select the respective column name.

    <img src="https://i.imgur.com/vMNDqQ7.png" alt="drawing" width="80%"/>


 4. Map each field with the respective value.

    <img src="https://i.imgur.com/X3u1Pos.png" alt="drawing" width="80%"/>

### Update field values

To update an existing field value of a table use the [Database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) and choose **Select type** as **Update** along with other configurations.

   <img src="https://i.imgur.com/PPmnqPl.png" alt="drawing" width="80%"/>
   <img src="https://i.imgur.com/lHajFi7.png" alt="drawing" width="80%"/>

---

### Search database records

1. To search for a particular piece of information in a bot ocnversation, use the [Database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) and choose **Select type** as **Search**.

   <img src="https://i.imgur.com/zdictxI.png" alt="drawing" width="70%"/>

2. In **Select columns of** field, choose the columns to be searched 
3. Under **Response**, In **Sort By** choose the column which will be rendered as a response to the user. Choose the order, **ASC**/**DSC**.
4. Enable **More options** for more enhancements.

   <img src="https://i.imgur.com/4zlnEAc.png" alt="drawing" width="70%"/>

5. Enable **Create URL for extracted records** to create a URL for the information exctracted from the search.
6. In **Filter distinct**, choose the column that should serve as distinct parameter in the search.
7. Under **Pagination**, enter the **Page number** and **Size limit** to display the records to the user. The page number and size limit can also be fetched from variables. 

The search reponse will be in the form of object. You can use the snippet ```{{{variables.variablename.record.0.fieldName}}}``` in a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-text) to display the response.


