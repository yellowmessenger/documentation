---
title : app.memory
sidebar_label : app.memory
---

This object contains methods for storing, accessing, deleting data in
Redis In memory

## Methods

## set

This method sets a value using the key in memory

### Syntax

``` js
app.memory.set(key, data, expiry)
.then(()=>{
})
.catch(()=>{
});
```

### Parameters

#### key \| `string`

A key to store the data

#### data \| `string or object`

The data to be stored in the memory

#### expiry \| `int` \| `optional`

The expiry time in seconds. It is optional, the default value is
`172800` seconds ( 2 days ).

### Return Value

It returns a promise

### Example
``` js
app.memory.set('mobile', '9876543210', 3600)
.then(()=>{
  //your code
})
.catch(()=>{
  //memory set failed, deal with error
})
```
> app.memory.set has an expiry of 1 hour by default. If required, timeout can be configured from case to case basis.

------------------------------------------------------------------------

## get

This method is used to access the stored data using the key.

### Syntax

``` js
app.memory.get(key)
.then((value)=>{
})
.catch(()=>{
});
```


### Parameters

#### key | `string`

A key for getting the stored data

### Return Value

It returns a promise along with the data

### Example


``` js
app.memory.get('mobile')
.then((value)=>{
  app.log(value);
})
.catch((error)=>{
  //memory get failed deal with error
  //may be key not found in the memory
  app.log(error);
});
//if memory get success, the log will be
"9876543210"
//if memory get fails, the log will be
key mobile not found in memory
```

------------------------------------------------------------------------

## delete | del

This method deletes a value using the key in memory

### Syntax 

``` js
app.memory.delete(key) or app.memory.del(key)
``` 

### Parameters

#### key | `string`

A key to delete the data from the memory

### Example
``` js
app.memory.delete('mobile') (or) app.memory.del('mobile')
```
------------------------------------------------------------------------

## getMultiple

This method is used to get multiple values stored in memory

### Syntax

``` js
app.memory.getMultiple(keys)
.then((results)=>{
})
.catch(()=>{
});
```


### Parameters

#### keys | `array`

An array of keys to get values from memory

### Return Value

It returns the results object containing key-value pairs

### Example

``` js
app.memory.getMultiple(['mobile', 'name'])
.then((results)=>{
  app.log(results);
})
.catch(()=>{
  //deal with error
});

//the log will be
{
    "mobile": "9876543210",
    "name": "Yellow Messenger"
}
```
------------------------------------------------------------------------