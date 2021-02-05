---
title: app.datastore
sidebar_label: app.datastore
---

This app.dataStore or app.datastore object provides methods to insert, search, delete and update MongoDB database. search method is a wrapper over full-text search engine elasticsearch(https://www.elastic.co/).

## Methods

**Insert**

Insert methods inserts a given record (document in MongoDB technology) into the table.

```javascript
app.dataStore.insert(document) // document => { table: collection, record: recordObject }
```

Input Parameters

document | object 

    table | object - A string representing the name of the record in the table (collections in MongoDB).
    record | object - An object representing the data to be inserted into the table.


Output Parameters

returns a Promise which resolves an object representing the record information that is just inserted.

Example
```javascript
app.dataStore.insert({ table, record }
    .then(result => result)
```

## Search

Search method is a wrapper over elasticsearch(https://www.elastic.co/) which is used to query the database MongoDB.

```javascript
app.dataStore.search(options)
```
Input Parameters

Options | object 
 
    table | string
    A string representing the name of the record in the table (collections in MongoDB).

    record | object
    An object representing the elasticsearch search syntax to query the database.

Output Parameters

returns a Promise which resolves an object representing the meta of search result and list of resultant records.


Example
```javascript
app.dataStore.search({
        table: table,
        body: {
            "query": {
                "term": {
                    [column]: query
                }
            }
        }
    }).then(result => result)
```

## Update

Update method updates the given record (document in MongoDB terminology)  in the table.

```javascript
app.dataStore.update(options)
```

Input Parameters

Options | object 
 
    table | string
    A string representing the name of the record in the table (collections in MongoDB).

    record | object
    An object representing record data to be updated in the table.

Output Parameters

returns a Promise which resolves an object representing the record information that is just updated.

Examples
```javascript
app.dataStore.update({ table, record })
        .then(result => result)

```

> Remember, To update the record in the table, we need to pass  _id of the record ( In MongoDB, Every document has a unique ID). So, to get the _id of the record, we need to do perform a search on database and grab the _id of the record from the result. 