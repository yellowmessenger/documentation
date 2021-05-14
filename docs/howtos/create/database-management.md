---
title: Database Management
sidebar_label : Database
---

**Keywords** :  create , edit, upload, modify, delete, index, note on indexing issue and red symbol


### How to access the Database on the Yellow Messenger platform?

Headover to the `Data` tab from the left sidebar to access the database.

![how to access the database](https://cdn.yellowmessenger.com/OoM6M6mK2bAI1615891898315.png)

### How to create a new database and make changes to it? 

1. Adding a new table : You can add a new table by simply clicking on the ‘create table’ button. You can add fields here along with custom mapping of the fields if required. 

![how to add a new table 1](https://cdn.yellowmessenger.com/2fKv3p5foiAm1615891942921.png)

![how to add a new table 2](https://cdn.yellowmessenger.com/gG2nOWmdLsv81615892026783.png)

2. Download the table and add/edit/remove any data from this table. 

![Download the table](https://cdn.yellowmessenger.com/geXLTc7saBDC1615892768708.png)


Edit the table as you want and save it in CSV format. Please make sure that the headers of the table are not changed. 

3. Truncate the table in the database and upload the new updated table. Please make sure you don’t Drop the table. Dropping the table will delete the table entirely. 

![Truncate table](https://cdn.yellowmessenger.com/8sGWAKv3FORp1615892832779.png)

Once changes are made, can upload the table in CSV format back on the same page using 'Upload' button. 

![Upload CSV](https://cdn.yellowmessenger.com/NGuXuTaP3lOE1615893169294.png)


**Note** : When willing to add single record without downloading and uploading, basically without making a fuss.  
Click on ‘Add Record’ and you can add one record at a time.

![Add record](https://cdn.yellowmessenger.com/ISbs9PfBEf121615893406287.png)

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