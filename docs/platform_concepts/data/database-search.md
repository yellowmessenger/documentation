---
title: Database Search
sidebar_label : Database Search
---

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

### How to search Database?

As you can see in the screenshot below, we have a userdata table where we're storing super important and classified information of Superheros. Now, to search in this database we've two options.

![User Data DB](https://cdn.yellowmessenger.com/IayOU3SuI8Q01616761692169.png)

#### **1. Search using search bar:**

In the search bar you can enter your search string and results will be showed below. You can also select in which column you want to search from the `All fields` dropdown menu.

![Search DB](https://cdn.yellowmessenger.com/yloJuXwtyJz21616761857240.png)

#### **2. Search using query:**

Go to Data > Developer tools and select table. In the `Query` section, you can enter your query and Output will be shown on the right.

For example, to search which Superheros lives in the Gotham city you can write a query like this:

```
{
    "query":{
        "match":{
            "city": "Gotham" // search keyword
        }
    }
}
```
![Query DB](https://cdn.yellowmessenger.com/KqGlwDEAuqhj1616761866852.png)

