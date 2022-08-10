---
title: Variables
sidebar_label : Variables
---


This document covers: 
1. [What is a variable?](#hed-1)
2. [What are the different types of variables?](#hed-3)
3. [How to create a variable?](#hed-2)
4. [How to store and access variables via node?](#hed-4)
5. [How to access array/object Variables](#hed-5)


## <a name="hed-1"></a> 1. Variables

Variables are data that do not have a fixed value (values that can vary with the flow). In our platform variables are used to store data that may change. 

When variables are defined on the platform, they must be assigned a data type. The datatypes are:

- **Number**: To store numbers including floating-point numbers. 

> 10, 3.14, 7009398700, -15, etc. 

- **String**: To store alphanumeric characters.

> 'Harry', 'PAN9856', '990*', 'Richa_0', '123starbucks', etc.

- **Object**: To store batch data. Example, to store database, API responses, results from date prompt, etc.

> {"Name": "Ron", "Phone": 9980808080, "Age": 40, "ID": "Rono555"}

- **Array**:  To store a list of multiple values of different datatypes.

> [1,2,3,"Text"], ["india", "+91"], etc.

- **Boolean**: To store logical data with true or false value (1/0).

### Use-case

Let us consider a simple use case to understand how and where variables can be used - 

To update the dates on a travel website, you want to know the name of the user and and verify phone number. 
Here, variables play a key role as explained below - 
Ask for the name of the user and store it in the name variable. Use the variable to address the user . Say "Thanks,  Shelly". 
User enters OTP when prompted. Store it in the OTP variable and use it to verify the user. 
If the OTP matchs,  execute the next flow. Otherwise, ask the user to enter OTP again. 


![](https://i.imgur.com/YveDip0.png)

## <a name="hed-3"></a> 2. Variable Types

You can use the following variables in a bot flow:
- Custom variables
    - Journey 
    - Global 
- System variables
- Config variables
- User properties 


### 2.1 Custom Variables

These are variables defined by bot builders. Custom variables are further subdivided into journey and global variables.
- **Journey Variable**: It is accessible only within the journey it was created.
- **Global Variable**: It is accessible across journeys and in API.

![](https://i.imgur.com/5gHptlc.jpg)


> These variables store value only within a session.


In the following example, **Email** is stored as a Global variable (because it will remain unchanged through out the flow). **State_ride** variable (that stores the departure location) is a Journey variable, because a user gets directed to a different flow where this information is no longer needed. 

 ![](https://i.imgur.com/yKNO6v6.png)


### 2.2 System Variables

These are fixed set of variables.  
> The variable names can not be altered and new variables can not be added to this category.


The following are the system variables available on the platform:

| Variable             | Data type | Use                                                                      |
| -------------------- | --------- | ------------------------------------------------------------------------ |
| source               | string    | Returns the channel from which the message was sent.                     |
| sender               | string    | Returns the sender ID. eg: mobile number for WhatsApp.                   |
| profile              | object    | Returns the user’s profile as an object                                  |
| pageUrl              | string    | Returns the page’s URL                                                   |
| sentiment            | object    | Returns the sentiment of the user message- positive, negative or neutral |
| sessionMessageLogUrl | string    | Returns a URL to the chat’s transcript                                   |
| date                 | object    | Returns the current date and time                                        |
| channelProfile       | string    | Returns channel profile id                                             |
| channelProfileName   |   string  | Returns channel profile name|

> {{{system_variable_name}}} notation is used to access system variables.

:::info
You can access user profile using this synax: `{{{profile.field_name}}}`.

Following fields are available in the user profile object:
- city
- country
- country_code
- firstTime (if user is visiting the bot for the first time)
- ip
- latitude
- longitude
- name (generated user name)
- region
:::

Learn more [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data#system-user-properties). 

### 2.3 Config Variables 

A configuration variables are used for the calculating specific values. They will retain their value for the bot irrespective of the users. 
Config variables can change their value (but not specifically for each session / each user) and they are mainly used for bot settings, authentication tokens, configuration related use cases, etc. 


### 2.4 User Properties

There are 22 user properties that are tracked by the bot. These values will be different for each instance (specific to each user). Click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data) to learn more. 

> User properterties cannot be modified. New variables cannot be added. 


## <a name="hed-2"></a> 3. Create a Variable

> Custom and Config variables can be added. 


1. Open **Studio**. On the right, click the **Variable** icon. 

![](https://i.imgur.com/IUw47tq.png)

2. Click **+Add Variable** (on Custom/Config Variable tab). 
3. Enter your preferred **Variable name**.
4. Select the respective **Data type** of the variable. 

![](https://i.imgur.com/ynzcS2x.png)

5. Sample **Value** will be displayed automatically. Custom values for that data type to be stored in the variable can also be added. 
6. Click **+Add**. 

> Two types of customer variables can be created - Journey and Global. 
> **Journey** variables are created to be used for that specific flow. **Global** variables can be used anywhere on the platform. Select the required variable option before adding a custom variable. 
> 
>   ![](https://i.imgur.com/uUrTvqq.png)
 
 
 



## <a name="hed-4"></a> 4. Store and Access Variables via Nodes

Action nodes and Prompt nodes are used to store variables (and display them via other node data). 

### 4.1 Store Variables 

Two different methods to store node data to a variable:

#### 4.1.1 Store response in 

1. There is an option available at the bottom of each of the action/prompt node- **Store Response In**.
2. When this option is clicked, list of variables are displayed. 
3. Select the variable you want to store the user response for what the bot has asked through the node. For example, when the bot asked the user to enter the name- response can be stored in the global variable - name. Similarly, if phone number is asked it can be stored in the variable- phone. 

![](https://i.imgur.com/OewhdE2.png)

> Only names of the existing variable are displayed on the **store response in** dropdown. Create a new variable if you want to add more variables to the dropdown.


 #### 4.1.2 Variables -action node
 
Variables can also be stored with help of Variable node in the flow.
 
 ![](https://i.imgur.com/l6aRHLK.png)

 
 
 
 ### 4.2 Access Variables

Bot variable can be acessed inside any node using the notation `{{{variables.variable_name}}` or clicking on variables icon. 

![](https://i.imgur.com/dPrh4eJ.png)

Variables created above can be acessed using {{{variables.category}}}.

:::info
Journey and Global variables get expired after 48 hours of inactivity.
:::


 ### 4.3 Variable Datatypes


Different prompts/action nodes return response in different formats and datatype. To understand the type of variables that can be stored in each of these nodes, refer to the tables below: 


#### [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)


| Prompt    Nodes                                                                 | Variable Datatype |
|----------------------------------------------------------------------------|-------------------|
| [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#name)             | string            |
| [Email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#email)            | string            |
| [Phone](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#phone)            | string            |
| [Location](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#location)           | object            |
| [Carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#carousel)                  | string            |
| [Quick Replies](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#quick-replies)         | string            |
| [Date](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#date)                    | object            |
| [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#question)         | string            |
| [Feedback](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#feedback)            | object            |
| [Whatsapp List](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#whatsapp-list) | string            |
| Multiselect                                                                | string            |
| [Image/file](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#image)        | string            |

#### [Actions](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes)


| Action Nodes                                                                 | Variable Datatype             |
|-----------------------------------------------------------------------------|-------------------------------|
| [API](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#api)                           | object, array, number, string |
| [Database (search)](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#database)          | array                         |
| [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#function)                 | object, array, number, string |
| Outbound Notification                                                       | object, array, number, string |
| Notification Status                                                         | object, array, number, string |
| [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket)         | object, array, number, string |
| [Modifier](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#modifier)                 | object, array, number, string |
| [Document Search](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#document-search)   | object, array, number, string |
| [Set Language](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#set-language)         | object, array, number, string |
| [Send OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#send-otp)   | object, array, number, string |
| [Verify OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#verify-otp) | object, array, number, string |
| Payment                                                                     | object, array, number, string |
| [Generate PDF](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#generate-pdf-image)         | object, array, number, string |





## <a name="hed-5"></a> 5. Access Array/Object Variables

Accessing string/number is simple, it is slightly different for array/object datatype. In this example  [API action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#api), the response stored is not a simple string or number value.


Consider following response from a weather API - this consists of object and array with different indexing.

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
Follow the steps below to access variable fields and index in JSON object, array type stored in a variable.

* To access any fields of this you can simply type {{variables.variable_name.field_name}}. This can go upto fields of fields.

> Use {{variables.API_var.main.temp}} to access temp field.  

* To access array values, use keys.
To access weather description in above, you can see it's inside an array [ ] and is the first [0th index] value of array. 

> Use {{variables.API_var.weather.0.description}} 