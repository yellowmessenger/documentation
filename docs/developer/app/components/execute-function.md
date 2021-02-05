---
title: app.executeFunction
sidebar_label: app.executeFunction
---

Process to directly call/execute another function from the developer section

## Input Parameters

1. The first argument is the function name that we want to execute.
1. The second argument deals with the arguments/parameters that we want the function to use.

## Output Parameters

## Examples

```js
app.executeFunction('functionName', args).then((optional_returned_value) => {
// good practice to return resolve if nothing else has to be done, otherwise use the returned value (optional)
    return resolve();
 }).catch((e) => {
     //handle error
 })
 ```

 > args is a JSON Object

 ```js
 args = {
    time: date,
    mobile: app.context.steps['phone-number'],
    branch: branch_name,
    documents: documents,
    address: branch_addr
};
```

To use it in a function being called, directly name them as:

```js
app.sendTextMessage(`Branch name is ${args.branch}`);
```

> There is no need to use .then and .catch but it is good practice since this function will be executed asynchronously and you may resolve the function before even actually setting the value.

> If a value has to be returned, then return it as return value.
