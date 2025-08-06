---
title: Date node
sidebar_label: Date
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
     
Date node allows you to select a date or time through an interactive calendar widget within a conversation. When you select a date using the picker, the system validates the input. If the date or time is invalid, a custom validation failure message is displayed. This node is used to get the accurate date or time inputs to reduce the chances of errors in manual input.

Date node is used for:
* **Appointment booking**: Used for scheduling meetings, consultations, or services by selecting a specific date and time.
* **Event registration**: When you need to select event dates or attendance during sign-ups.
* **Form completion**: Collects date inputs for applications, travel itinerarie dates, or scheduling.

#### Types of date pickers available in AI-agent

There are various types of date pickers available, each catering to different needs and preferences. You can choose the one that best suits your requirements. To know more about different date pickers, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-components#13-date-picker).
   

<img src="https://i.imgur.com/JNHbV83.png" width="40%"/> 

1. **Single date and time picker** - Allows users to select a specific date from a calendar.
2. **Date range picker** - Allows you to select a start and end date for a given period.
3. **Month picker** - Allows you to select a specific month in a particular year.
4. **Single date and time picker** - Allows you to select both date and time selection in a single interface.
5. **Time picker** - Allows you to select a specific time.

:::note
* If you need to change the date format selected by the user through a date picker node, [write a custom function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#writing-ai-agent-function-code) to reformat the date as per your requirements. 
:::


**Limitation**

* Date node is only supported on Web and Mobile apps. It does not work on other platforms like voice or SMS based interactions.

**Configure Date node**

To configure date node, follow these steps:

1. Drag and drop the Date node to the flow editor.

    ![](https://i.imgur.com/VTUnE1C.png)

2. Enter the message that should be displayed for the user to enter the date.

3. Select the type of the widget (Single Date Picker, Date Range Picker, Month Picker, Single Date and Time Picker, and Time Picker).

#### [Storing date variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-variables)

When a user enters or selects a date, the input undergoes validation and is stored in the specified variable as an object. Users are not limited to using only the date picker; they can also input the date manually, which will still be saved in the variable.

After validating, the system will store the date entered date by users in the specified object variable.

The structure of the date object is as follows:

<Tabs class="tabs-schema">


<TabItem value="singleDatePicker" label="singleDatePicker" default>


To retrieve date from the date object, use this syntax: `{{{variables.variable_name.objectname.field}}}`. For example, to retrieve day from the following object, use `{{{variables.variable_name.value.day}}}`.

```json
{
  "value": {
    "timestamp": "Tue, 12 Dec 2023 13:03:31 GMT",
    "year": 2023,
    "month": 12,
    "date": 12,
    "day": "Tuesday",
    "hour": 13,
    "minute": 3,
    "selected": {
      "hour": 7,
      "minute": 33
    }
  },
  "range": {
    "exists": false
  }
}
```

</TabItem>


<TabItem value="DateRangePicker" label="DateRangePicker" default>


Syntax to retrieve dates from date range object:

* **Start Date**: ```{{{variables.variable_name.range.start.date}}}```
* **End Date**: ```{{{variables.variable_name.range.end.date}}}```

```json
{
  "value": {
    "timestamp": "Sun, 05 Nov 2023 05:30:00 GMT",
    "year": 2023,
    "month": 11,
    "date": 5,
    "day": "Sunday",
    "hour": 5,
    "minute": 30,
    "selected": {
      "hour": 0,
      "minute": 0
    }
  },
  "range": {
    "exists": true,
    "start": {
      "timestamp": "Sun, 05 Nov 2023 05:30:00 GMT",
      "year": 2023,
      "month": 11,
      "date": 5,
      "day": "Sunday",
      "hour": 5,
      "minute": 30,
      "selected": {
        "hour": 0,
        "minute": 0
      }
    },
    "end": {
      "timestamp": "Fri, 17 Nov 2023 05:30:00 GMT",
      "year": 2023,
      "month": 11,
      "date": 17,
      "day": "Friday",
      "hour": 5,
      "minute": 30,
      "selected": {
        "hour": 0,
        "minute": 0
      }
    }
  }
}
```

</TabItem>

<TabItem value="MonthPicker" label="MonthPicker" default>


Syntax to retrieve date or time from the object: `{{{variables.variable_name.objectname.field}}}` 

**Example**:
To capture month: `{{{variables.variable_name.value.value.month}}}`



```json
{
	"value": {
		"value": {
			"timestamp": "Tue, 19 Mar 2024 00:00:00 GMT",
			"year": 2024,
			"month": 3,
			"date": 19,
			"day": "Tuesday",
			"hour": 0,
			"minute": 0,
			"selected": {
				"hour": 18,
				"minute": 30
			}
		},
		"range": {
			"exists": false
		}
	}
}
```

</TabItem>


<TabItem value="SingleDateTimePicker" label="SingleDateTimePicker" default>


Syntax to retrieve date or time from the object: `{{{variables.variable_name.objectname.field}}}` 

Example:
To capture date: `{{{variables.variable_name.value.value.date}}}`
To capture day: `{{{variables.variable_name.value.value.day}}}`



```json
{
	"value": {
		"value": {
			"timestamp": "Tue, 19 Mar 2024 10:33:00 GMT",
			"year": 2024,
			"month": 3,
			"date": 19,
			"day": "Tuesday",
			"hour": 10,
			"minute": 33,
			"selected": {
				"hour": 5,
				"minute": 3
			}
		},
		"range": {
			"exists": false
		}
	}
}
```

</TabItem>

<TabItem value="TimePicker" label="TimePicker" default>


Syntax to retrieve time from the object:  `{{{variables.variable_name.value.value.{timeUnit}}}}`

Example:  `{{{variables.variable_name.value.value.hour}}}`, `{{{variables.variable_name.value.value.minute}}}`



```json
{
	"value": {
		"value": {
			"timestamp": "Tue, 19 Mar 2024 10:33:00 GMT",
			"year": 2024,
			"month": 3,
			"date": 19,
			"day": "Tuesday",
			"hour": 10,
			"minute": 33,
			"selected": {
				"hour": 5,
				"minute": 3
			}
		},
		"range": {
			"exists": false
		}
	}
}
```

</TabItem>

</Tabs>


#### Restrict date picker to display past or future dates
 
You can restrict date selection to past or future dates. This restriction applies only to the Single date picker and Single date and time picker.


To restrict the date picker to display historic dates:

1. In **Widget Type**, ensure you either have *Single Date Picker* or *Single date and time picker* You will see a new field, Restrict to.

  <img src="https://i.imgur.com/8TJxBge.png" width="60%"/>

2. In **Restrict to**, select *Future Dates* to allow users to select only future dates; select *Past Dates* to restrict selection to only past dates.

Refer to the following GIF to see how the Date node works:


   ![](https://imgur.com/ikGYUu2.gif)