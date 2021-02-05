---
title : app.xmlToJSON
sidebar_label : app.xmlToJson
---

This object contains two methods `toJson` and `toXml`. These methods are used to convert XML to JSON and vice versa.


## Methods

## toJson

This is used to convert XML to JSON

### Syntax

``` js
app.xmlToJSON.toJson(xml)
```


### Parameters

#### xml \| `string`

An XML string to convert it into JSON

#### example

``` xml
   Tove 
   Jani 
   Reminder 
   Don't forget me this weekend! 
 
```


### Return Value

It returns a JSON string (use `JSON.parse` to convert it into JSON
object)

#### example

``` java
{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don't forget me this weekend!"}}
```


### Example

``` js
let xml = ` 
 
   Tove 
   Jani 
   Reminder 
   Don't forget me this weekend! 
 `;

let json = app.xmlToJSON.toJson(xml);
```
------------------------------------------------------------------------

## toXml

This is opposite to `toJson` method because it converts JSON to XML

### Syntax
``` js
app.xmlToJSON.toXml(json)
```

### Parameters

#### json \| `string`

A JSON string to convert it into XML

#### example

``` js
{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don't forget me this weekend!"}}
```

### Return Value

It returns an XML string

### Example

``` js
let json = `{"note":{"to":"Tove","from":"Jani","heading":"Reminder","body":"Don't forget me this weekend!"}}`;
let xml = app.xmlToJSON.toXml(json);
```
------------------------------------------------------------------------
