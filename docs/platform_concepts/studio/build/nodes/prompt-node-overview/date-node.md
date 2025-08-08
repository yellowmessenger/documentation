---
title: Date node
sidebar_label: Date
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Date node** allows you to capture a date or time from users through an interactive calendar widget during a conversation. When a date is selected, the system validates the input. If the date or time is invalid, a custom validation failure message is displayed.  
This node helps ensure accurate date and time inputs, reducing errors from manual entry.

**Common use cases include:**
- **Appointment booking**: Schedule meetings, consultations, or services by selecting a specific date and time.
- **Event registration**: Choose event dates or attendance slots during sign-ups.
- **Form completion**: Collect dates for applications, travel itineraries, or scheduling needs.

---

#### Types of date pickers available in AI Agent

Different date picker types are available, each designed for specific requirements. You can choose the one that best suits your needs.  
Learn more about each type [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-components#13-date-picker).

<img src="https://i.imgur.com/JNHbV83.png" width="40%"/> 

1. **Single Date Picker** – Select a specific date from a calendar.  
2. **Date Range Picker** – Select a start and end date for a range.  
3. **Month Picker** – Select a specific month in a given year.  
4. **Single Date and Time Picker** – Select both a date and time in one interface.  
5. **Time Picker** – Select a specific time.

:::note
To change the date format captured through the Date node, [write a custom function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#writing-ai-agent-function-code) to reformat it as needed.
:::

---

### Limitation
The Date node is supported only on **Web** and **Mobile** apps. It is not available on platforms such as voice or SMS-based interactions.

---

### Configure Date node

To configure a Date node:

1. Drag and drop the **Date** node onto the flow editor.  
   ![](https://i.imgur.com/VTUnE1C.png)  
2. Enter the message to display when prompting the user for a date.  
3. Select the widget type: *Single Date Picker*, *Date Range Picker*, *Month Picker*, *Single Date and Time Picker*, or *Time Picker*.  

---

#### [Storing date variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-variables)

When a user selects or enters a date, the input is validated and stored in the specified variable as an **object**.  
Users can also manually enter dates, which will still be validated and stored.

After validation, the system saves the date in the specified object variable.

---

### Object structures and retrieval syntax

<Tabs class="tabs-schema">

<TabItem value="singleDatePicker" label="Single Date Picker" default>

Retrieve a field from the date object using:  
```handlebars
{{{variables.variable_name.objectname.field}}}
````

Example:
To get the **day**:

```handlebars
{{{variables.variable_name.value.day}}}
```

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

<TabItem value="DateRangePicker" label="Date Range Picker">

Retrieve dates from the range object:

* **Start Date**:

```handlebars
{{{variables.variable_name.range.start.date}}}
```

* **End Date**:

```handlebars
{{{variables.variable_name.range.end.date}}}
```

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

<TabItem value="MonthPicker" label="Month Picker">

Example to retrieve the **month**:

```handlebars
{{{variables.variable_name.value.value.month}}}
```

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

<TabItem value="SingleDateTimePicker" label="Single Date and Time Picker">

Example to retrieve the **date**:

```handlebars
{{{variables.variable_name.value.value.date}}}
```

Example to retrieve the **day**:

```handlebars
{{{variables.variable_name.value.value.day}}}
```

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

<TabItem value="TimePicker" label="Time Picker">

Example to retrieve **hour**:

```handlebars
{{{variables.variable_name.value.value.hour}}}
```

Example to retrieve **minute**:

```handlebars
{{{variables.variable_name.value.value.minute}}}
```

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

---

### Restricting the date picker to past or future dates

You can restrict selection to either past or future dates.
This feature is available only for the **Single Date Picker** and **Single Date and Time Picker**.

To restrict date selection:

1. In **Widget Type**, select either *Single Date Picker* or *Single Date and Time Picker*.
   A **Restrict to** field will appear. <img src="https://i.imgur.com/8TJxBge.png" width="60%"/>
2. In **Restrict to**, choose:

   * **Future Dates** – Allow only future date selection.
   * **Past Dates** – Allow only past date selection.

  **Example in action:**
  ![](https://imgur.com/ikGYUu2.gif)


