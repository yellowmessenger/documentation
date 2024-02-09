---
title: Variables
sidebar_label : Bot Variables
---


Variables are placeholders that can hold a value and can be used to store user input, data from external systems, or any other relevant information that needs to be saved and used later in the bot conversation. Variables help in creating dynamic and personalized bot conversations.

For example, let's sya that you want to create a chatbot that greets users by name. You can use a variable to store the user's name and then use it later in the conversation. 

For example,  

```

Hello {{user_name}}, how can I help you?
```

The following table consists of various data types that are supported by variables, along with their examples.

| Data Type | Description | Example |
| --- | --- | --- |
| Number | For storing numbers, including floating-point numbers. | 10, 3.14, -15 |
| String | For storing alphanumeric characters. | 'Harry', 'PAN9856', '123starbucks' |
| Object | For storing batch data such as database, API responses, or results from a date prompt. | {"Name": "Ron", "Phone": 9980808080, "Age": 40} |
| Array | For storing a list of multiple values of different data types. | [1,2,3,"Text"], ["india", "+91"] |
| Boolean | For storing logical data with true or false values (1/0). | true, false |

:::note

Ensure you add the data type values in the format mentioned here, for example, if you're storing a string value it should be within ''
:::


## Types of variables

There are 4 different types of variables offered by yellow.ai. They are:

1. Custom variables

   * Journey variables (flow level variables)
   * Global variables (bot level variables)

2. System variables
3. Config variables
4. User properties

### Custom Variables

Custom Variables are variables created by bot builders to meet their specific business requirements. They are further divided into two types: Journey Variables and Global Variables. 

#### Journey Variable

A Journey Variable is accessible only within the journey for which it was created, meaning that it can be used exclusively within that journey.


#### Global Variable

A Global Variable is a type of variable that can be accessed across different bot flows, you can also use Global variables in APIs. 

:::note
These variables store values only within a session. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs#11-session) to know more about sessions.
:::
 
In the following example, **Email** is stored as a Global Variable (as it remains unchanged throughout the bot). In contrast, the **State_ride** variable (which stores the departure location) is a Journey Variable because the user is directed to a different flow where this information is no longer needed.

![Custom Variables Example](https://i.imgur.com/140xW0K.jpg)

### System Variables

System variables are pre-defined variables that store information about the user session, conversation, and bot configuration. They're available by default in the platform and can be used across bot flows to personalize the conversation and provide relevant information to the user.

:::note
 The variable names cannot be altered, and new variables cannot be added to this category.
:::

The following are the system variables available on the platform:

| Variable             | Data type | Use                                                                      |
| -------------------- | --------- | ------------------------------------------------------------------------ |
| source               | string    | Returns the channel from which the message was sent.                     |
| sender               | string    | Returns the sender ID. For example: mobile number for WhatsApp.                   |
| profile              | object    | Returns the user’s profile as an object.                                  |
| pageUrl              | string    | Returns the URL of the user's current page.                                                  |
| sentiment            | object    | Returns the sentiment of the user message- positive, negative, or neutral. |
| sessionMessageLogUrl | string    | Returns a URL to the chat’s transcript.                                   |
| date                 | object    | Returns the current date and time.                                        |
| channelProfile       | string    | Returns profile ID of the user in that specific channel.                                             |
| channelProfileName   |   string  | Returns the profile name of the user in that specific channel.|

> {{{system_variable_name}}} notation is used to access system variables.

:::info
You can access the user profile using this syntax: `{{{profile.field_name}}}`.

The following fields are available in the user profile object:
- city
- country
- country_code
- firstTime (if the user is visiting the bot for the first time)
- ip
- latitude
- longitude
- name (generated user name)
- region


To know more, see [System user properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#system-user-properties). 
:::

### Config Variables 

Config variables are used to store a wide range of information, including API keys, URLs, database connection strings, and other configuration settings that are used throughout the bot flow. By storing these values in Config Variables, bot builders can easily update them in the platform without modifying any code. 

For example, suppose that a bot needs to connect to a specific external API. Rather than hardcoding the API key directly into the bot's code, bot builders can create a Config Variable called **api_key** and store the value there. If the API key ever needs to be updated, the bot builder can simply modify the value of the **api_key** Config Variable in the Yellow.ai platform, without needing to make any changes to the bot's code.

### User Properties

User Properties are variables that store information about each individual user interacting with the bot. These properties are stored directly in [User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties) help personalize the user's experience and can be used to make decisions about which messages or actions to display. Examples of User Properties include name, email address, and location.


:::note
 To create new user properties, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#custom-user-properties) for the steps. 
:::

## Add custom variables

You can only add only custom and config variables in Studio. To know how to create user properties, see [https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#custom-user-properties].

### Add variable via Variables option

:::note
You cannot add new  **System** variables.
:::

To create variables from Variables page:

1. Go to **Studio** and click the variable icon on the left.

   ![](https://i.imgur.com/JbbJU4b.png)

2. Navigate to the tab based on the type of variable you want to create - **Custom** or **Config**. <br/>For **Custom** variable, click **Journey variables** to create access the variable within the current journey, or choose **Global variables** to access across all studio flows and APIs.

   <img src="https://i.imgur.com/ZWOQK1f.png" width="80%"/>

3. Click **Add variable**.
4. Enter your preferred **Variable name** and choose its **Data type**. 

   <img src="https://i.imgur.com/Puety3D.png" alt="drawing" width="60%"/>

   You will see sample **Value**  based on the chosen datatype. you can add a static value to the variable if needed. For example, greeting message, and API key.
6. Click **+Add**. 

### Create journey variables using nodes

You can create journey variables directly within a specific journey using nodes. These journey variables can then be accessed within that flow.

To create a journey variable:

1. Select **Flows** > **Create flow**. To know more about creating flows, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).
2. Add a [Prompt node](](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)) or [Action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) within a flow. when storing response using **Store response in**, click **Create new vaiable**. 
   <img src="https://i.imgur.com/X5UpV2B.png" width="70%"/>

:::note
Not all Action nodes support the option to create a variable. This may not be applicable for certain nodes, such as those related to database operations or OTP.
:::

3. Click **Create new variable**. You will see a pop-up screen to add a journey variable.. 

   <img src="https://i.imgur.com/EbvlK7k.png" alt="drawing" width="70%"/>

4. Add the **variable nam**e and **datatype**, and click **Add**. This global variable can be used in any node/flow.

   <img src="https://i.imgur.com/Zp3YaKA.png" alt="drawing" width="70%"/>

---

## Store data in variables

Variables can be used to store data, which can then be retrieved and displayed to end users.


You can store data that you capture using Action nodes and specific Prompt nodes.

1. Add a [Prompt node](](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)) or [Action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) within a flow. when storing response using **Store response in**, click **Create new vaiable**. 
   <img src="https://i.imgur.com/X5UpV2B.png" width="70%"/>
2. Click **Store Response In** option at the bottom of the action/prompt node. You will see the list of all variables that are available.
3. Navigate to your preferred category and select the variable where you want to store the information. For instance, if you want to store a user's name in the User table, choose the appropriate variable under User properties.

   ![](https://i.imgur.com/KSNG1EL.png)

:::note
 
 * You can also use the [variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables) to store values.
 
     <img src="https://i.imgur.com/l6aRHLK.png" width="80%"/>

:::

## Retrieve data stored in variables

You can access data stored in a variable in bot flows using the syntax `{{{variables.variable_name}}` or by clicking  the variables icon. 

   ![](https://i.imgur.com/dPrh4eJ.png)

:::note
Journey and Global variables expire after 48 hours of inactivity.
:::

Data entered in a variable is stored in a specific node and can be retrieved using the same variable in another node. The following is a sample screenshot of a Bot that illustrates the use of variables: 


   <img src="https://i.imgur.com/DvYxITj.png" alt="drawing" width="60%"/>
 
### Datatypes of standard variables

Different prompts and action nodes return responses in various formats and data types. Refer to the tables below to understand what types of variables can be stored in each node.


#### [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)


| Prompt    Nodes                                                                 | Variable Datatype |
|----------------------------------------------------------------------------|-------------------|
| [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name)             | string            |
| [Email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email)            | string            |
| [Phone](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone)            | string            |
| [Location](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#24-location)           | object            |
| [Carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel)                  | string            |
| [Quick Replies](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies)         | string            |
| [Date](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#21-date)                    | object            |
| [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question)         | string            |
| [Feedback](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-feedback)            | object            |
| [Whatsapp List](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list) | string            |
| [Multiselect](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#23-multi-select)                                                                | string            |
| [Image/file](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#26-file-prompt)        | string            |

#### [Actions](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes)


| Action Nodes                                                                 | Variable Datatype             |
|-----------------------------------------------------------------------------|-------------------------------|
| [API](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api)                           | object, array, number, string |
| [Database (search)](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database)          | array                         |
| [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function)                 | object, array, number, string |
| [Outbound Notification](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#32-outbound-notification)                                                       | object, array, number, string |
| [Notification Status](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#33-notification-status)                                                         | object, array, number, string |
| [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket)         | object, array, number, string |
| [Modifier](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#25-modifier)                 | object, array, number, string |
| [Document Search](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#14-document-search)   | object, array, number, string |
| [Set Language](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#31-set-language)         | object, array, number, string |
| [Send OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#12-send-otp)   | object, array, number, string |
| [Verify OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#13-verify-otp) | object, array, number, string |
| Payment                                                                     | object, array, number, string |
| [Generate PDF](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#19-generate-pdf-image)         | object, array, number, string |


### Accessing string variable data  

Accessing string and number data types is simple, but it can be slightly different for array and object data types. For instance, in the [API action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api) example, the stored response is not a simple string or number value.


### Accessing data from an Object variable

Consider the following response from a weather API , this consists of an object and array with different indexing.

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

To access the fields and index of a JSON object or array stored in a variable, follow these steps:

* To access fields, use {{variables.variable_name.field_name}}, which can be nested for deeper fields.

For example, {{variables.API_var.main.temp}} can access the temp field.


### Accessing data from an Array variable


* To access array values, use keys.

For instance, to access the weather description from the above response, use {{variables.API_var.weather.0.description}} because the value is inside an array and is the first value (0th index).


