---
id: data-layer
title: Understanding Data Base Actions
description: How to add records in Data Base
featured: true
rank: 5
---

### Create a Data Base Table

To create a data base you need to design the scehma of the table that will be required for your requirement. Make sure you select the right data type for each field of the records that will be added to your table. 

Some points that should be keept on mind while creating the table are as below:

* You can add a column in the DB later but deleting a column is not allowed once you have added it successfully.
* Table name should be lower case without special characters and spaces
* Column name should be lower case without special characters and spaces
* You can add underscore( _ ) in Table or Columne names incase needed for readablilty 
* UPDATEDDATE and INSERTEDDATE columns are created by default
* There will be few actions allowed on the table once its created: `Add Columns`, `Truncate`, `Drop` & `Download`

#### `Step 1:` Create New Table

![](https://cdn.yellowmessenger.com/mobQ2e2OApqo1613547611511.png)

![](https://cdn.yellowmessenger.com/it9Olwbd6Wcj1613547697034.png)

Once a DB is created you can start saving the user information in your DB as shown in the next steps.

#### `Step 2:` Insert in DB

To save your user entered inputs in the DB you need to add an Action Node - `Database` on the point at which you want to add the details as shown below

Click on ⊕ , select Action > Database and select the table on which you want to insert the data.

![](https://cdn.yellowmessenger.com/fDLcPdIB7kG41613559097722.png)

Make sure you map the right Step Name with the Column names on your DB so that the unser entered values are inserted into the table.

Here `Field` means the Column Names that you have given in the DB Table and the `With Value` parameter is for mapping the appropriate step value to fill in.

![](https://cdn.yellowmessenger.com/8LR0MiBywueB1613559300319.png)

Once this is done you can test your flow to confirm if the records are getting inserted to your table. Make sure you have selected the right Data Types for each value else you can keep it as `String` for all columns.

#### `Step 3:` Export DB Records in CSV File

To download the records in bulk you can go to Data on the Platform Dashboard and click `Table actions` drop down and click the Download button to download the DB in CSV format. 

![](https://cdn.yellowmessenger.com/A2mhUuox6zAC1613561519647.png)

Other available actions are as follows:

`Add Column`: To add a new column to the Table.

`Truncate`: To clear all the records in the DB.

`Drop`: To Delete the entire table.
