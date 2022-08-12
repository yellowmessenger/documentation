---
title: Database
sidebar_label: Database
---

Databases can be used to store information in the form of  tables.

![](https://i.imgur.com/pwcKB9z.png)

In this doc, we'll cover the following:-
* [Creating a table](#create)
* [Table Actions](#actions)
* [Insert data from the bot](#insert)
* [Search/Update from the bot](#update)


## Setup
### <a name="create"></a> Create a Table

In the Development/Staging environment
* Click on the Database on the left panel
    * Table/Field name: must be in lowercase without spacing
    * Type: refers to the datatype of the data you'll be inserting
    * Searchable: We support a fixed number of searchable fields within a table at the moment

![](https://i.imgur.com/2NtSpRj.png)

![](https://i.imgur.com/JMlqb98.png)


### <a name="actions"></a> Table actions
Filter data based on various conditionals and perform various table actions. Some of them are listed below:-

![](https://i.imgur.com/jjaGBlK.png)

* Edit Table: Allows you to add new columns to an existing table by adding more columns or renaming specific fields.

> Note: You cannot change the datatype or searchability of a column once created

* Truncate Table: Deletes all the data that exists in a specific table without deleting the structure of the table created.
* Drop Table: Deletes the entire table structure along with all the records of data it contains.
* Download Table: Allows you to export the entire table as a .csv file.
* Upload into Table: The blue upload icon allows you to import data as a .csv into the database.





### <a name="insert"></a> Insert data Table
As part of a lead generation flow, *Email, Phone number and Interested Product* are collected in the bot flow. To push this data into the table, use the Database node.

![](https://i.imgur.com/aCWfB15.png)

![](https://i.imgur.com/vMNDqQ7.png)

![](https://i.imgur.com/X3u1Pos.png)


### <a name="update"></a> Update Table
To update a specific field in an existing record of a database, we can make use of the Database node with the Update operation.

![](https://i.imgur.com/PPmnqPl.png)

![](https://i.imgur.com/lHajFi7.png)


Let us know about your clever usecases over on our [community](https://community.yellow.ai/).