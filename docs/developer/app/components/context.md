---
title: app.context
sidebar_label: app.context
---

Lists all the data of Current Journey

## Arrays

**dataHistory** contains an array of most recent incoming messages, intent, and their confidences. 

```javascript
"dataHistory": [
        {
            "data": {
                "message": "login"
            },
            "intent": "login",
            "confidence": 0.908
        },
        .
        .
        .
        {
            "data": {
                "message": "9876543210"
            },
            "intent": "trains-search",
            "confidence": 0.23
        },
        {
            "data": {
                "message": "9222"
            },
            "intent": "trains-search",
            "confidence": 0.23
        }
    ]
```
**History**  is an array which contains data about previous intents like intent name, complete status, step values

```javascript
"history": [
        {
            "intent": "login",
            "complete": true,
            "steps": {
                "mobilenumber": "9876543210",
                "verifyotp": "9222"
            }
        }
    ]
```

## Objects

**steps** 
1. app.context.steps is an object which contains key-value pairs of steps and the step values user inputs in the format step_name: step_value

1. A new step is added into app.context.steps only after the validation of that step.

1. When it hits an intent, this steps object is initially empty

```javascript
"steps": {
        "mobilenumber": "9876543210",
        "verifyotp": "9222"
    },
```

**journeyDetails** is an object which contains all details about the current journey i.e. all the steps it has, actions,  stepConditions, name, description, slug, intiFunction and etc.

```javascript
"journeyDetails": {
        "steps": [
            {
                "id": "5e0daaabe0f5fc001181f77b",
                "slug": "mobilenumber"
            },
            {
                "id": "5e0dbf256debc20010b7f80b",
                "slug": "verifyotp"
            }
        ],
        "_id": "5e0daa1fe0f5fc001181f77a",
        "createdDate": "2020-01-02T08:30:23.460Z",
        "updatedDate": "2020-01-04T10:26:13.053Z",
        "deleted": false,
        "defaultJourney": false,
        "actions": [
            {
                "type": "func",
                "id": 0,
                "func": "loginAction"
            }
        ],
        "stepConditions": [],
        "name": "Login",
        "description": "Login journey",
        "botId": "x1577939877999",
        "categoryType": "Default Category",
        "survey": false,
        "slug": "login",
        "__v": 83,
        "initFunction": "loginInit"
    }
```

## Properties

intent | string - *Has the value of journey slug*

> "intent": "login"

journeyName | string - *Has the value of journey name*

> "journeyName": "Login"

journeyId | string - *Has the value of journey Id*

> "journeyId": "5e0daa1fe0f5fc001181f77a"

complete | boolean - *Status whether journey complete*

> "complete": true

invalidCound | int - *value of invalid count*

> "invalidCount": 0