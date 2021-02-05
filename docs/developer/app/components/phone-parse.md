---
title: app.phoneParse
sidebar_label : app.phoneParse
---

# app.phoneParse

This object contains methods for parsing phone number i.e. `getPhone`
and `isPhone`. These methods are mostly used in IVR bots for parsing
phone numbers.


## Methods

## getPhone

This method used for getting phone numbers from voice response.

### Syntax

``` js
app.phoneParse.getPhone(message)
```

### Parameters

### message \| `string`

A string containing phone number text

#### example

``` java
"double 9 double 4 triple 8 triple 6"
```

### Return Value \| `string`

It returns the parsed mobile number

#### example


``` java
"9944888666"
```


### Example

``` js
let message = 'double 9 double 4 triple 8 triple 6';
let mobile = app.phoneParse.getPhone(message);
app.log(mobile,"Parsed mobile");
//the log will be
"9944888666"
```

------------------------------------------------------------------------

## isPhone

This method used for testing a string is a valid phone number or not

### Syntax

``` js
app.phoneParse.isPhone(phone)
```


### Parameters

### phone\| `string`

A string containing phone number text

#### example

``` java
"9876543210"
```


### Return Value \| `boolean`

It returns the boolean value. If it is valid number returns `true`
otherwise `false`.

#### example


``` java
true
```


### Example

``` js
let phone = '9876543210';
let isPhone = app.phoneParse.isPhone(phone);
app.log(isPhone, "is mobile?");
//the log will be
true
```
------------------------------------------------------------------------
