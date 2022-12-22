---
title: Variables
sidebar_label : Bot Variables
---


In this article, you will learn: 
1. [What is a variable?](#hed-1)
2. [What are the different types of variables?](#hed-3)
3. [How to create a variable?](#hed-2)
4. [How to store and access variables via node?](#hed-4)
5. [How to access array/object Variables](#hed-5)

---

## <a name="hed-1"></a> 1. Variables

Variables are data that do not have a fixed value (values that change with the flow). In our platform variables are used to store data that may change. 

When variables are defined on the platform, they must be assigned a data type. The data types are:

- **Number**: To store numbers including floating-point numbers. 

> 10, 3.14, 7009398700, -15, etc. 

- **String**: To store alphanumeric characters.

> 'Harry', 'PAN9856', '990*', 'Richa_0', '123starbucks', etc.

- **Object**: To store batch data. Example, to store database, API responses, results from date prompt, etc.

> {"Name": "Ron", "Phone": 9980808080, "Age": 40, "ID": "Rono555"}

- **Array**:  To store a list of multiple values of different data types.

> [1,2,3,"Text"], ["india", "+91"], etc.

- **Boolean**: To store logical data with true or false values (1/0).

### Use-case

Let us consider a simple use case to understand how and where variables can be used: 

To update the dates on a travel website, you want to know the name of the user and verify the phone number. 
Here, variables play a key role, as explained below:
Ask for the name of the user and store it in the name variable. Use the variable to address the user. Say "Thanks,  Shelly". 
User enters OTP when prompted. Store it in the OTP variable and use it to verify the user. 
If the OTP matches,  execute the next flow. Otherwise, ask the user to enter OTP again. 


![](https://i.imgur.com/Jfkph9J.jpg)

---

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
- **Journey Variable**: It is accessible only within the journey for which it was created.
- **Global Variable**: It is accessible across journeys and in API.

![](https://i.imgur.com/liTEWc7.jpg)


> These variables store value only within a session.


In the following example, **Email** is stored as a Global variable (because it will remain unchanged throughout the flow). **State_ride** variable (that stores the departure location) is a Journey variable because a user gets directed to a different flow where this information is no longer needed. 

![](https://i.imgur.com/140xW0K.jpg)


### 2.2 System Variables

These are fixed sets of variables.  

:::note
 The variable names cannot be altered, and new variables cannot be added to this category.
:::

The following are the system variables available on the platform:

| Variable             | Data type | Use                                                                      |
| -------------------- | --------- | ------------------------------------------------------------------------ |
| source               | string    | Returns the channel from which the message was sent.                     |
| sender               | string    | Returns the sender ID. eg: mobile number for WhatsApp.                   |
| profile              | object    | Returns the user’s profile as an object.                                  |
| pageUrl              | string    | Returns the page’s URL.                                                  |
| sentiment            | object    | Returns the sentiment of the user message- positive, negative, or neutral. |
| sessionMessageLogUrl | string    | Returns a URL to the chat’s transcript.                                   |
| date                 | object    | Returns the current date and time.                                        |
| channelProfile       | string    | Returns channel profile id.                                             |
| channelProfileName   |   string  | Returns channel profile name.|

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
:::

To know more, see [System user properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview#22-system-user-properties). 

### 2.3 Config Variables 

A configuration variable is used for calculating specific values. They will retain their value for the bot, irrespective of the users. 
Config variables can change their value (but not specifically for each session / each user), and they are mainly used for bot settings, authentication tokens, configuration related use cases, etc. 


### 2.4 User Properties

There are 22 user properties that are tracked by the bot. These values will be different for each instance (specific to each user). To know more, see [User properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties). 

:::note
 User properties cannot be modified. New variables cannot be added. 
:::
----

## <a name="hed-2"></a> 3. Create a Variable

:::note
 Custom and Config variables can be added. 
:::

1. Open **Studio**. On the right, click the **Variable** icon. 

![](https://i.imgur.com/VGE5O5o.jpg)

2. On the Custom/Config Variables tab, click +Add Variable. 
3. Enter your preferred **Variable name**.
4. Select the respective **Data type** for the variable. 

![](https://i.imgur.com/ynzcS2x.png)

5. The sample **Value** will be displayed automatically. Custom values for that data type to be stored in the variable can also be added. 
6. Click **+Add**. 

:::info
- Two types of custom variables can be created - Journey and Global. 
- **Journey** variables are created to be used for that specific flow. **Global** variables can be used anywhere on the platform. Select the required variable option before adding a custom variable. 
 
![](https://i.imgur.com/b3213L7.png)
:::

### 3.1 Create a Variable via nodes

You can also create global variables with the help of [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/) nodes, which can be used in any flow or node.


**To create a variable via Prompt node:**


1. Select **Flows** > **Create flow**. For more information on how to create a flow, see [Create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).

2. While creating a flow, if you want to store a user response in a variable and that variable does not exist, you can create a new variable via node by clicking **Store Response in > Select variable**. 

![](https://i.imgur.com/eCsilSz.png)

3. Click **Create new variable**.

![](https://i.imgur.com/EbvlK7k.png)

4. Add the variable name and datatype, and click Add. This global variable can be used in any node/flow.

![](https://i.imgur.com/Zp3YaKA.png)

5. The variable has been successfully added to the node.

![](https://i.imgur.com/3hSF6lH.png)

---

## <a name="hed-4"></a> 4. Store and Access Variables via Nodes

Action nodes and Prompt nodes are used to store variables (and display them via other node data). 

### 4.1 Store Variables 

There are two different methods to store node data in a variable:

#### 4.1.1 Store response in 

1. There is an option available at the bottom of each of the action/prompt node- **Store Response In**.
2. When this option is clicked, a list of variables are displayed. 
3. Select the variable you want to store the user response for what the bot has asked through the node. For example, when the bot asked the user to enter the name- response can be stored in the global variable - name. Similarly, if the phone number is asked, it can be stored in the variable- phone. 

![](https://i.imgur.com/OewhdE2.png)

:::note
 Only names of the existing variables are displayed on the **store response in** dropdown. Create a new variable if you want to add more variables to the dropdown.
:::

 #### 4.1.2 Variables -action node
 
Variables can also be stored with the help of a Variable node in the flow.
 
 ![](https://i.imgur.com/l6aRHLK.png)

 
 
 
 ### 4.2 Access Variables

A Bot variable can be accessed inside any node using the notation `{{{variables.variable_name}}` or by clicking on the variables icon. 

![](https://i.imgur.com/dPrh4eJ.png)

Variables created above can be accessed using {{{variables.category}}}.

:::note
  Journey and Global variables get **expired after 48 hours** of inactivity.
:::

The data that is entered in the variable is stored in a particular node, and the same data is retrieved when you use the same variable for the other node. The following is a sample screenshot of Bot that demonstrates the usage of variable: 


<img src="https://i.imgur.com/DvYxITj.png)" alt="drawing" width="60%"/>

 ### 4.3 Variable Datatypes


Different prompts/action nodes return responses in different formats and datatype. To understand the types of variables that can be stored in each of these nodes, refer to the tables below: 


#### [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)


| Prompt    Nodes                                                                 | Variable Datatype |
|----------------------------------------------------------------------------|-------------------|
| [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-name)             | string            |
| [Email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#32-email)            | string            |
| [Phone](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-phone)            | string            |
| [Location](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-location)           | object            |
| [Carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-carousel)                  | string            |
| [Quick Replies](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#24-quick-replies)         | string            |
| [Date](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-date)                    | object            |
| [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#21-question)         | string            |
| [Feedback](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#23-feedback)            | object            |
| [Whatsapp List](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#31-whatsapp-list) | string            |
| [Multiselect](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#25-multi-select)                                                                | string            |
| [Image/file](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#26-file-prompt)        | string            |

#### [Actions](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes)


| Action Nodes                                                                 | Variable Datatype             |
|-----------------------------------------------------------------------------|-------------------------------|
| [API](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api)                           | object, array, number, string |
| [Database (search)](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database)          | array                         |
| [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function)                 | object, array, number, string |
| [Outbound Notification](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#32-outbound-notification)                                                       | object, array, number, string |
| [Notification Status](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#33-notification-status)                                                         | object, array, number, string |
| [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket)         | object, array, number, string |
| [Modifier](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#25-modifier)                 | object, array, number, string |
| [Document Search](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#14-document-search)   | object, array, number, string |
| [Set Language](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#31-set-language)         | object, array, number, string |
| [Send OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#12-send-otp)   | object, array, number, string |
| [Verify OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#13-verify-otp) | object, array, number, string |
| Payment                                                                     | object, array, number, string |
| [Generate PDF](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#19-generate-pdf-image)         | object, array, number, string |

---



## <a name="hed-5"></a> 5. Access Array/Object Variables

Accessing string/number is simple, it is slightly different for array/object datatype. In this example  [API action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#21-api), the response stored is not a simple string or number value.


Consider the following responses from a weather API - this consists of an object and array with different indexing.

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
To access variable fields and index in a JSON object, array type stored in a variable, follow the steps below:

* To access any fields of this you can simply type {{variables.variable_name.field_name}}. This can go upto fields of fields.

> Use {{variables.API_var.main.temp}} to access temp field.  

* To access array values, use keys.
To access the weather description above, you can see it's inside an array [ ] and is the first [0th index] value of the array. 

> Use {{variables.API_var.weather.0.description}} 

---
**What Next?**

* Try building a flow with [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes) that store and display variables. 
* Use variables in [code](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) and [API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api).