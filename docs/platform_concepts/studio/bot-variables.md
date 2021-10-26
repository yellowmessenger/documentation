---
title: Variables
sidebar_label : Variables
---

## What is a variable
Variables are nothing but a way to store data that can vary/is not fixed.

These are the types of variables that can be used in the bot flow:
- System variables
- Custom variables
    - Journey variables
    - Global variables


## Variable Data Type

When variables are defined they need to be assigned a data type. The datatypes are :``
- **Number**: To store numbers including floating-point numbers
- **String**: To store alphanumeric texts
- **Object**: This datatype is particularly useful to store database and API responses as well as results from date prompt
- **Array**: This can be used to store a list of multiple values of different datatypes.

Let’s dive deeper into these variables.

## System Variables
This is a fixed set of variables. The variable names can not be altered and new variables can not be added to this category.
Following system variables have been exposed on the platform for quick use: -
{{{variables.var_name}}} notation is used to access system variables.



| Variable             | Data type | Use                                                                      |
|----------------------|-----------|--------------------------------------------------------------------------|
| source               | string    | Returns the channel from which the message was sent.                     |
| sender               | string    | Returns the sender ID. eg: mobile number for WhatsApp.                   |
| profile              | object    | Returns the user’s profile as an object                                  |
| pageUrl              | string    | Returns the page’s URL                                                   |
| sentiment            | object    | Returns the sentiment of the user message- positive, negative or neutral |
| sessionMessageLogUrl | string    | Returns a URL to the chat’s transcript                                   |
| date                 | object    | Returns the current date and time                                        |

## Custom Variables

These are variables defined by bot builders. Custom variables are further subdivided into journey and global variables.
- **Journey Variable**: It is accessible only within the journey it was created.
- **Global Variable**: It is accessible across journeys and in API.

:::info
These variables store value only within a session.
:::

## Create a Variable

Coming soon

## Use Variables in a Node

### [Prompt](../studio/steps/prompts-and-messages)

Different prompts return a response in different formats and datatype. You can refer to the table below to understand which variable datatype should be used with which prompt.

| Prompt                                                                     | Variable Datatype |
|----------------------------------------------------------------------------|-------------------|
| [Name](../studio/steps/prompts-and-messages#use-case-specific)             | string            |
| [Email](../studio/steps/prompts-and-messages#use-case-specific)            | string            |
| [Phone](../studio/steps/prompts-and-messages#use-case-specific)            | string            |
| [Location](../studio/steps/prompts-and-messages#location-prompt)           | object            |
| [Carousel](../studio/steps/prompts-and-messages#carousal)                  | string            |
| [Quick Replies](..studio/steps/prompts-and-messages#quick-replies)         | string            |
| [Date](..studio/steps/prompts-and-messages#date-prompt)                    | object            |
| [Question](..studio/steps/prompts-and-messages#general---question)         | string            |
| [Feedback](..studio/steps/prompts-and-messages#feedback-prompt)            | object            |
| [Whatsapp List](../studio/steps/prompts-and-messages#whatsapp-list-prompt) | string            |
| Multiselect                                                                | string            |
| [Image/file](studio/steps/prompts-and-messages#files-images-videos)        | string            |

### Actions
Action nodes provides response in various datatype. You can refer to the table below to understand which variable datatype should be used with which action node.

| Action Node           | Variable Datatype             |
|-----------------------|-------------------------------|
| API                   | object, array, number, string |
| Database (search)     | array                         |
| Function              | object, array, number, string |
| Outbound Notification | object, array, number, string |
| Notification Status   | object, array, number, string |
| Raise ticket          | object, array, number, string |
| Modifier              | object, array, number, string |
| Document Search       | object, array, number, string |
| Set Language          | object, array, number, string |
| Send OTP              | object, array, number, string |
| Verify OTP            | object, array, number, string |
| Payment               | object, array, number, string |
| Generate PDF          | object, array, number, string |


## Storing in a variable
For storing something in a variable, you get an option in each prompt and in action nodes where needed to store. 
Additionally, you can also use variables action node for this purpose.

## Access a variable

You can access a bor variable inside any node using this notation `{{variables.variable_name}}` or clicking on variables icon. 
So for the variable you just created above, you can access using {{variables.category}}

## Advanced example
**Accessing variable fields and index in JSON object, array type stored in a variable.**

Above was very simple, but often, in this example in [API action node](../studio/steps/action-nodes-and-logic#api), the response you store is not a simple string or value.

Consider following response from a weather API

```
{
  "coord": {
    "lon": 77.2167,
    "lat": 28.6667
  },
  "weather": [
    {
      "id": 761,
      "main": "Dust",
      "description": "dust",
      "icon": "50d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 32.54,
    "feels_like": 30.55,
    "temp_min": 32,
    "temp_max": 33,
    "pressure": 1002,
    "humidity": 21
  },
  "visibility": 3500,
  "wind": {
    "speed": 3.09,
    "deg": 260,
    "gust": 8.23
  },
  "clouds": {
    "all": 0
  },
  "dt": 1617278187,
  "sys": {
    "type": 1,
    "id": 9161,
    "country": "IN",
    "sunrise": 1617237667,
    "sunset": 1617282517
  },
  "timezone": 19800,
  "id": 1273294,
  "name": "Delhi",
  "cod": 200
}
```

* **To access any fields of this you can simply do {{variables.variable_name.field_name}} and this can go upto fields of fields.**

For example: to access temp in above, {{variables.API_var.main.temp}} can be used. 

* **You can also access array values using keys.** 
To access weather description in above, you can see it's inside an array [ ] and is the first [0th index] value of array. 
{{variables.API_var.weather.0.description}} will be used.