---

title : app.utilFunctions
sidebar_label : app.utilFunctions
---

This object contains utility functions to speed up the development
process like `emailValidator`, `pinCodeValidator`, and
`mobileNumValidator`

## Methods

## emailValidator

This method validates the given string for any valid emails are present
or not. If valid emails are present it returns the matched emails array
otherwise it returns an empty array.

### Syntax
``` js
app.utilFunctions.emailValidator(emailString)
```

### Parameters

#### emailString \| `string`

A string to test it contains any valid emails

#### example

``` text
example@example.com
```
### Return Value \| `array`

If valid emails are present it returns the matched emails array
otherwise it returns an empty array.

#### example

``` text
[
  "example@example.com"
]
or
[] //if emails not matched
```

### Example

``` js
let email = `example@example.com`;
let matches = app.utilFunctions.emailValidator(email)
```
------------------------------------------------------------------------

## mobileNumValidator

This method validates the given string is a valid mobile number or not.
Then it returns the matched mobile number as an array otherwise it
returns an empty array.

### Syntax

``` js
app.utilFunctions.mobileNumValidator(mobile)
```

### Parameters

#### mobile\| `string`

A string to test it contains any valid mobile numbers

#### example

``` text
9876543210
```
### Return Value \| `array`

If a valid mobile number is present it returns the matched number as an
array otherwise it returns an empty array.

#### example
``` text
[
  "9876543210"
]
or
[] //if mobile number is not matched
```

### Example

``` js
let mobile = '9839874325'; //[6-9]XXXXXXXXX, 091[6-9]XXXXXXXXX, 091-[6-9]XXXXXXXXX
let matches = app.utilFunctions.mobileNumValidator(mobile);
```
------------------------------------------------------------------------

## pinCodeValidator

This method validates the given string is a valid mobile number or not.
Then it returns the matched mobile number as an array otherwise it
returns an empty array.

### Syntax

``` js
app.utilFunctions.pinCodeValidator(pincode)
```

### Parameters

#### pincode \| `string`

A string to test whether it is valid Pincode or not

#### example

``` text
516390
```
### Return Value \| `array`

If a valid Pincode is present it returns the matched Pincode as an array
otherwise it returns an empty array.

#### example

``` js
[
  "516390"
]
or
[] //if pincode number is not matched
```

### Example

``` js
let pincode = '516390';
let matches = app.utilFunctions.pinCodeValidator(pincode);
```

>Update : *Phone, Email, Number and Name Validators are available in UI and using them is highly recommended. Incase of errors, please reachout to Platform Team or Developer Community Lead directly.*
------------------------------------------------------------------------
