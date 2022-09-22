---
title: Manage database tables & data
sidebar_label: Database
---

Databases can be used to store information in the form of  tables.
During bot conversation, you might need to store a specific information from the user or show data depending on the user input.  Database makes it easy to insert and query data from the database. 

![](https://i.imgur.com/pwcKB9z.png)

> Sample use cases
> * Create a table with different columns - city, pin code, and address columns. Show store address to the user based on the selected city or pin code.
> * Store feedback of user in a database table.
> * Store products in a table and show product details to the bot user based on the SKU or name selected.

In this article, you will learn how to -
* [Create a table](#create)
* [Fetch table data](#a-namefetcha-2-fetch-table-data)
* [Edit table and add associate relations if required](#edit)
* [Insert/update data from bot flows](#insert)
* [Delete table or table fieldst](#delete)


---

## <a name="create"></a> 1. Create table

1. Open the bot and switch to Development or Staging environment.
2. Navigate to **Studio** > **Database**.
3. Click **Create new table**.

   ![](https://i.imgur.com/9yNPeR1.jpg)

* In **Table name**, name the table in lowercase without spacing.
* In **Field name**,  enter a name for the field you want to insert in lowercase without any space. 
* In **Type**, choose the datatype of the field.
* Check **Searchable** to make the field searchable inside the database node in flows. These fields are available for filtering and summarization in data explorer. 

:::note
* T2 subscribers can have upto five searchable fields within a table. However, there is no limit for T3 subscribers. 
:::
  ![](https://i.imgur.com/eEeZwOi.png)


4. Click **Create table**. 

:::note
To download the table data, select the table and click **Table actions** > **Download**. 
:::

---

## <a name="fetch"></a> 2. Fetch table data
If there are a number of records created in a table, it becomes difficult scroll through each field when you want to see a specific information. You can easily filter records by fields containing a specific keyword. 

To fetch a specific information, select the desired table. In the drop-down box highlighted below, you will see the list of all searchable columns along with *Inserted date* and *Updated date*.
![](https://i.imgur.com/XECkfAG.jpg)

Choose the column in which you want to fetch a specific information, and use the Search box to filter records.
For example, the following screenshot says in the table `b_two_b_queries`, get records whose company_name (column) has bites in it.
![](https://i.imgur.com/55XmW5v.png)
 
* To get the records that were inserted or updated in a specific period, choose Inserted date or Updated date and select your preferred duration as shown here.

  . ![](https://i.imgur.com/Hh7oVvL.png)

 ---

## <a name="import"></a> 3. Import data into table
When you need to insert multiple records into a table, it becomes difficult to add each record manually. You can easily upload multiple entries through a CSV file.

To import table data, follow these steps - 
1. On the **Studio** > **Database** screen, click on the table for which you want to import data.
2. Create a CSV file with the data you want to upload. 

:::tip
To easily create a CSV file, first download the table (Table actions > Download) and add the records that you want to upload.
:::


3. Click on <img src="https://i.imgur.com/DQdsTtg.png"  width="20"/>.
4. Select the file from your local system and upload it.

You will see a new record(s) created in the table post upload.

---

## <a name="edit"></a> 4. Edit table
You can add new columns to the existing table or rename existing fields. You can also add relation associations between tables.

To edit a table, follow these steps
1. On the Database screen, select the table to edit and click **Table actions** > **Edit table**.
2. Modify the required columns.
  ![](https://i.imgur.com/jjaGBlK.png)

:::note
You cannot modify the datatype or searchability of a column once created.
:::

3. To set up relations with other table, click **Add relations**.
![](https://i.imgur.com/oaNF6qH.png)
   * Column: Choose the column of the current table that you want to map.
   * Name: Name the relation.
   * Type: Choose the type of association - One to one, One to many, Many to one, and Many to many.
   * Related table: Choose the table that you want to associate.
   * Related column: Choose the column that you want the current column to associate with.
4. Click **Update**.

---

## <a name="insert"></a> 5. Insert/update field values from bot flow

### 5.1 Insert field values from bot flow

You can pass field values to the table directly from bot flows. 
> Use case: You might need to collect the user's email address, phone number, and interested product, as part of a lead generation flow, 

To push such data into the table, use the Database node and follow these steps -
1. In Search type, choose Insert.
2. In the in drop-down, choose the destination table (where to insert the value).
 
![](https://i.imgur.com/aCWfB15.png)

 3. Click **Add** Records to select the destination column name.


![](https://i.imgur.com/vMNDqQ7.png)

 4. Map each field with the respective value.

![](https://i.imgur.com/X3u1Pos.png)

 ### <a name="update"></a> 5.2 Update field values from bot flow

To update an existing field value of a table -  
Use the Database node and choose **Select type** as *Update* along with other configurations.

![](https://i.imgur.com/PPmnqPl.png)

  

![](https://i.imgur.com/lHajFi7.png)

---

## <a name="delete"></a>  6. Delete table fields or table

On the Database screen, select the table to edit and click **Table actions** and choose the desired option from the list.
  ![](https://i.imgur.com/jjaGBlK.png)
* **Truncate**: Deletes all the data that exists in a specific table without removing the structure of the table.
* **Drop Table**: Deletes the entire table structure along with all the records it contains.

  

> Let us know if you have any clever use cases through our [community](https://community.yellow.ai/).


## 7. Mask database columns

The Super Admin of the bot can mask certain database columns. For example, passwords or any PII data stored in plain text. The data of the masked column will be visible as `*****` instead of real values.

:::note
The masking of data happens at the application level in the backend. You cannot access it in any other way.
:::

To mask columns, follow these steps -

1. Go to **Table actions** and choose **Mask columns**.

   ![](https://i.imgur.com/zGiPOCs.png)

2. Choose columns that store sensitive information.

   <img src="https://i.imgur.com/jZHDSza.png" width="500"/>


> Example: You can see the column named ‘test’ with `****` instead of real values.
>
> ![](https://i.imgur.com/ceC7f7Z.png)
