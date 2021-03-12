---
title: Database Management
sidebar_label : Database
---

### How to create a new database and make changes to it? 

**Keywords** :  create , edit, upload, modify, delete, index, note on indexing issue and red symbol

`Step 1 ` : Adding a new table : You can add a new table by simply clicking on the ‘create table’ button. You can add fields here along with custom mapping of the fields if required. 

![how to add a new table](https://cdn.yellowmessenger.com/bzSJ6BtPnFQQ1615523779900.gif)

`Step 2 ` : Download the table and add/edit/remove any data from this table. Truncate the same table and reupload the new table. As shown in the following steps. 
Edit the table as you want and save it in CSV format. Please make sure that the headers of the table are not changed. 

![how to download a table](https://cdn.yellowmessenger.com/mQW2jB05yQNU1615523803757.gif)

`Step 3` : Truncate the table in the database and upload the new updated table. Please make sure you don’t Drop the table. Dropping the table will delete the table entirely. 

![how to truncate a table](https://cdn.yellowmessenger.com/skJYr0V5Aefd1615524449438.gif)

Once changes are made, can upload the table in CSV format back on the same page using 'Upload' button. 


**Note** : When willing to add single record without downloading and uploading, basically without making a fuss.  
Click on ‘Add Record’ and you can add one record at a time.
![how to make changes](https://cdn.yellowmessenger.com/bvqBEKNp5Wpz1615524478859.gif)

### How to do elastic search for database

#### DataStore
The datastore is the local database that is available with each bot instance. It is stored inside MongoDB and is indexed with ElasticSearch.

Each bot’s table gets it’s own index, by default. If needed, you can specify your own elasticsearch mapping to map the database as per your need.

#### Architecture
Each table in the bot gets its own space in MongoDB and gets indexed into elasticsearch.

You can use the UI to create the table, but in order to query through your code, you will need to know how to write elasticsearch queries

A good place to start would be: [Elastic Search Guide](https://www.elastic.co/guide/en/elasticsearch/reference/6.7/getting-started.html)

#### Datastore UI
The datastore in the UI can be accessed through Developer -> Database, herewith referred to as database section in this document

Datastore API
The datastore is available inside the app library and can be accessed with app.dataStore

#### Datastore methods
* search
* insert
* update
* delete
* find
* aggregate
* updateMany
* get
* getForm
* search
The datastore search can be used to search for the record in the table
```
app.datastore.search({
    table: tableName,
    body: esQuery
})
```
*tableName*: The table name that is present in the database section

*esQuery*: The elastic search query that is to be used to search for the records

This function is promisified and hence can be chained for success and reject cases. The chain would go into the reject block in-case of any errors. It is vital to handle this part.

#### insert
The datastore insert function can be used to add records to your table
```
app.datastore.insert({
        table: tableName,
        record: recordObject
    })

```   
*tableName*: The table name that is present in the database section

*recordObject*: The Object containing the key-value pairs of the record. The keys are the column names and the values are the values for the columns. The keys have to match the exact column name present in the table