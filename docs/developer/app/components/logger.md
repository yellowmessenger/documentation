---
title: app.logger
sidebar_label: app.logger
---

This object contains `log` method to log data to console

## log

This method logs data to the console (debugging purpose)

### Syntax
``` js
app.logger.log(data, tag);
or
app.log(data, tag);
```

### Parameters

#### data

This is data to be logged to the console. This can be a string, int,
object, boolean

#### tag \| `optional`

This is similar to the key to identify logged data. This is optional,
the default value is `tag`

### Example

``` js
let message = "This is sample log";
app.log(message, "test log");
//the log will be
test log:  This is sample log
```