---
title: MS Outlook Calendar
sidebar_label: MS Outlook Calendar
---

Yellow.ai integrates with MS Outlook Calendar to make it easy for you to manage your schedule. With this integration, you can create, reschedule, retrieve, and cancel online meetings and events. You can also see when others are free or busy and suggest times that work best for everyone. Lastly, you can attach files to events for easy organization.

## 1. Connect MS Outlook with Yellow.ai

Yellow.ai integrates with the Outlook calendar using the OAuth 2.0  authentication. During integration, Yellow.ai guides you to login page of the Microsoft Identity provider, where you must log in to their work account and provide consent to access their calendar data. Follow the below- mentioned steps to connect your MS Outlook account with your yellow.ai bot. 

### 1.1 Register an app on Azure Active Directory

1. Go to portal.azure.com > **Active Directory** > **App Registrations**.

![](https://i.imgur.com/Oi2mf5O.png)

2. Click **New Registration** and provide the details for the new app.

![](https://i.imgur.com/bF6XPpu.png)


3. To get the Redirect URI details, retrieve the redirect URL from the Outlook Calendar integration card in the Yellow.ai platform integration module. For e.g., https://cloud.yellow.ai/integrations/genericIntegration/oauth/outlook-calendar

![](https://i.imgur.com/1i0Z6MV.png)


4. Navigate to **Certificates & Secrets** > **New client secret** > Fill the description & select **Expires** to your convenience (recommended 6 months), click  **Add** button, a **Client Secret** will be generated, save the value of the Client Secret.

![](https://i.imgur.com/vpA762g.png)

5. Under **API Permissions** > **Add a permission** -> **Select Microsoft Graph** -> **Delegated permission** -> search and add the required permissions.

![](https://i.imgur.com/ctnoNzO.png)


**Permission scopes of Outlook Calendar:**


| Scope                        | Description                                                                                                           |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Calendars.ReadWrite          | The app can create, read, update, and delete events in the user's calendars with the user's permission.                                           |
| Calendars.ReadWrite.Shared   | The application can perform operations such as creating, reading, updating, and deleting events in all calendars of the organization that the user has access to, including delegate and shared calendars. |

### 1.3 Enable MS Outlook on Yellow.ai

1. Go to cloud.yellow.ai > **Integrations**.

![](https://i.imgur.com/P1HQiDR.png)

2. Search for **Outlook calendar** and enter the obtained **Tenant ID**, **Client ID** and **Client Secret** from the Azure portal in the integration card and click **Connect**.

![](https://i.imgur.com/WRvwNX2.png)


 You'll need to log in to your Microsoft work account and give the app permission to access your calendar data. 
 
 <img src="https://i.imgur.com/Rv7tLpj.png" alt="drawing" width="60%"/>

 
## 2. Use-cases

This integration currently supports the following use-cases:

### 2.1 Create calendar event 

This actions allows you to create online events in your default calendar, specifying the date, time, and time zone. Invitations are automatically sent to attendees' Outlook inboxes. Recurring events can also be set up.

<img src="https://i.imgur.com/YM0695x.png" alt="drawing" width="60%"/>

<img src="https://i.imgur.com/FJuP7u7.png" alt="drawing" width="60%"/>

The table below has sample inputs, data types and remarks of the fields for this action.

| Field Name      | Sample Input                                                               | Datatype    | Remarks                                                                   |
|----------------|----------------------------------------------------------------------------|-------------|---------------------------------------------------------------------------|
| Start time      | {"dateTime":"2023-04-11T09:00:00.000","timeZone":"India Standard Time"}   | Object Type | The start date, time, and time zone of the event.                         |
| End time        | {"dateTime":"2023-04-11T10:00:00.000","timeZone":"India standard Time"}   | Object Type | The date, time, and time zone when the event concludes.                   |
| Can invitees propose a new time? | True                                        | bool        | The meeting organizer has enabled the option for invitees to suggest an alternative time while responding. |
| Attendee details | [{"emailAddress":{"address":"samanthab@contoso.onmicrosoft.com","name":"Pradeep"},"type":"required"}] | Array | The list of people attending the event.                                    |
| Meeting description | {"contentType":"HTML","content":"Scrum"}                               | Object Type | Meeting agenda                                                            |
| Importance of the event | High                                                  | String      | The priority of the event, the possible values are: low, normal, high.     |
| Recurrence      | {"pattern":{"type":"daily","interval":3},"range":{"type":"endDate","startDate":"2023-04-11"}} | Object Type | The pattern of how often the event will occur.                            |
| Meeting title   | Scrum                                                                     | String      | A brief summary that identifies the purpose of the meeting.               |



**Sample response:**


```
{
  "id":"AAMkAGI1AAAt9AHjAAA=",
    "createdDateTime":"2017-04-15T03:00:50.7579581Z",
    "onlineMeetingUrl":null,
    "isOnlineMeeting":true,
    "body":{
        "contentType":"html",
        "content":"<html><head></head><body>Does late morning work for you?</body></html>"
    },
    "start":{
        "dateTime":"2017-04-15T11:00:00.0000000",
        "timeZone":"Pacific Standard Time"
    },
    "end":{
        "dateTime":"2017-04-15T12:00:00.0000000",
        "timeZone":"Pacific Standard Time"
    },
    "recurrence":null,
 "attendees":[
        {
            "type":"required",
            "status":{
                "response":"none",
                "time":"0001-01-01T00:00:00Z"
            },
            "emailAddress":{
                "name":"Samantha Booth",
                "address":"samanthab@contoso.onmicrosoft.com"
            }
        }
    ],
    "organizer":{
        "emailAddress":{
            "name":"Dana Swope",
            "address":"danas@contoso.onmicrosoft.com"
        }
    }
},
 "onlineMeeting": {
        "joinUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDJmZWY5NTUtY2YxNy00NTJjLTllMWMtNGUxOGM0MWE5ZTEy%40thread.v2"
    }

```

### 2.2 Get calendar events

The Get Calendar Events function returns a list of events from the your default calendar based on the defined start and end date time, including both single instance and recurring meetings.

<img src="https://i.imgur.com/qrexSTP.png" alt="drawing" width="60%"/>

The table below has sample inputs, data types and remarks of the fields for this action.

| Field Name         | Sample Input                | Data Type | Remarks                                                             |
|--------------------|-----------------------------|-----------|---------------------------------------------------------------------|
| Start date time     | 2023-04-11T12:00:00.000     | String    | The start date, time, and time zone of the event.                   |
| End date time       | 2023-04-12T12:00:00.000     | String    | The date, time, and time zone when the event concludes.                     |
| Response time zone  | India standard time         | String    | Returns the event’s start time and end time in the specified time zone.   |

**Sample Response:**

```
{
    "value": [
        {
            "id": "AWtBH7_RLmY0nAoX3PzBwCh69yUb7hwSIjZoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAATuTBzAAA=",
            "subject": "Hangouts",
            "isCancelled": false,
            "type": "singleInstance",
            "allowNewTimeProposals": true,
            "recurrence": null,
            "start": {
                "dateTime": "2023-04-15T05:30:00.0000000",
                "timeZone": "UTC"
            },
            "end": {
                "dateTime": "2023-04-15T06:30:00.0000000",
                "timeZone": "UTC"
            },
            "attendees": [
                {
                    "type": "required",
                    "status": {
                        "response": "none",
                        "time": "0001-01-01T00:00:00Z"
                    },
                    "emailAddress": {
                        "name": "Samantha Gupta",
                        "address": "samanthab@contoso.onmicrosoft.com"
                    }
                }
            ],
            "onlineMeeting": {
                "joinUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzI1ZWNkMTQtYjM0OS00MzViLWE5ZmYtMDA2NTA4NGViMDZh%40thread.v2/0?context=%7b%22Tid%22%3a%"
            }
}
```

### 2.3 Recommend meeting slots

This option allows you to set parameters such as date, time, and attendees for a meeting. It takes into consideration everyone's schedules and suggests appropriate times for the meeting. If it can't suggest any times, it will let you know why, such as if the organizer or a required attendee is unavailable. You can use this information to adjust your parameters and try again.


<img src="https://i.imgur.com/1KIjMYr.png" alt="drawing" width="60%"/>


The table below has sample inputs, data types and remarks of the fields for this action.


| Field Name                      | Sample Input                                                                                                                                                                                                                    | Data Type | Remarks                                                                                                                                                                                                             |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Time constraints               | `{"timeslots":[{"end":{"dateTime":"2023-04-11T12:30:20.2020","timeZone":"India Standard Time"},"start":{"dateTime":"2023-04-11T09:00:00.000","timeZone":"India Standard Time"}},null]}` | Object    | You can set restrictions on a meeting's timing and nature by specifying the activity domain and available time slots.                                                                                             |
| Attendee details               | `[{"emailAddress":{"address":"samanthab@contoso.onmicrosoft.com","name":"Samantha"}}]`                                                                                                                                       | Array     | Details of the people who will attend or be involved in the meeting.                                                                                                                                               |
| Length of the meeting in minutes | `60`                                                                                                                                                                                                                            | String    | The length of the meeting                                                                                                                                                                                         |
| Response time zone             | `India standard time`                                                                                                                                                                                                           | String    | This provides the event's start and end times in the designated time zone.                                                                                                                                         |

**Sample Response**

```
{
    "@odata.context":"https://graph.microsoft.com/v1.0/$metadata#microsoft.graph.meetingTimeSuggestionsResult",
    "emptySuggestionsReason":"",
    "meetingTimeSuggestions":[
        {
            "confidence":100.0,
            "organizerAvailability":"free",
            "suggestionReason":"Suggested because it is one of the nearest times when all attendees are available.",
            "meetingTimeSlot":{
                "start":{
                    "dateTime":"2017-04-21T14:00:00.0000000",
                    "timeZone":"Pacific Standard Time"
                },
                "end":{
                    "dateTime":"2017-04-21T16:00:00.0000000",
                    "timeZone":"Pacific Standard Time"
                }
            },
            "attendeeAvailability":[
                {
                    "availability":"free",
                    "attendee":{
                        "type":"required",
                        "emailAddress":{
                            "address":"samanthab@contoso.onmicrosoft.com"
                        }
                    }
                }
            ],
        }
    ]
}
```

### 2.4 Update an event

This action allows you to change the details of an event that is already on your calendar. To do this, you need to provide the ID of the event and a new object with the updated information.

<img src="https://i.imgur.com/p18qnuL.png" alt="drawing" width="60%"/>

<img src="https://i.imgur.com/fJOuWmX.png" alt="drawing" width="60%"/>

The table below has sample inputs, data types and remarks of the fields for this action.

| Field Name           | Sample Input                                                                                                             | Datatype   | Remarks                                                                                                    |
|----------------------|--------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------|
| Start time           | {"dateTime":"2023-04-11T09:00:00.000","timeZone":"India Standard Time"}                                                  | Object Type| Start date, time, and time zone of the event.                                                               |
| End time             | {"dateTime":"2023-04-11T10:00:00.000","timeZone":"India standard Time"}                                                  | Object Type| End date, time, and time zone for the event's end.                                                          |
| Event ID             | AAMkADA1ODMyOWE0LWNkZmUtNDJiYy1hNWI1LWE1NmQwY2RmNDhlOQBGAAAAAAAXtAWtBH7%2BRLmY0nAoX3PzBwCh69yUb7hwSIjZoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAAFJQ9WAAA%3D | String     | Event ID                                                                                                   |
| Can invitees propose | True                                                                                                                     | bool       | Option to propose a new time if the organizer allows it.                                                   |
| a new time?          |                                                                                                                          |            |                                                                                                            |
| Attendee details     | [{"emailAddress":{"address":"samanthab@contoso.onmicrosoft.com","name":"Pradeep"},"type":"required"}]                    | Array      | List of attendees for the event.                                                                            |
| Meeting description  | {"contentType":"HTML","content":"Scrum"}                                                                                | Object Type| Message body associated with the event.                                                                     |
| Importance of event  | High                                                                                                                     | String     | Importance of the event (low, normal, or high).                                                             |
| Recurrence           | {"pattern":{"type":"daily","interval":3},"range":{"type":"endDate","startDate":"2023-04-11"}}                            | Object Type| Recurrence pattern for the event.                                                                           |
| Meeting title        | Scrum                                                                                                                    | String     | A brief summary of the meeting agenda.                                                                      |


**Sample Response:**

```
{
  "originalStartTimeZone": "originalStartTimeZone-value",
  "originalEndTimeZone": "originalEndTimeZone-value",
  "responseStatus": {
    "response": "",
    "time": "datetime-value"
  },
  "recurrence": null,
  "reminderMinutesBeforeStart": 99,
  "isOnlineMeeting": true,
  "onlineMeetingProvider": "teamsForBusiness",
  "isReminderOn": true,
  "hideAttendees": false,
  "onlineMeeting": {
        "joinUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzIyNzhlMGEtM2YyZC00ZmY0LTlhNzUtZmZjNWFmZGNlNzE2%40thread.v2/0?context=%7b%22Tid%22%3a%2272f988bf-86f1-41af-91ab-2d7cd011db47%22%2c%22Oid%22%3a%22bc55b173-cff6-457d-b7a1-64bda7d7581a%22%7d",
        "conferenceId": "177513992",
        "tollNumber": "+91 22 6241 6885"
  }
}

```

### 2.5 Add an attachment

This action adds a file to an event, and the size of the file should be less than 3 MB.

<img src="https://i.imgur.com/wiMkvcB.png" alt="drawing" width="60%"/>

The table below has sample inputs, data types and remarks of the fields for this action.


| Field Name | Sample Input | Data Type | Remarks |
| --- | --- | --- | --- |
| File URL | https://image.crictracker.com/wp-content/uploads/2019/04/home.jpg | String | URL of the file being attached. |
| Event ID | AAMkAGI1AAAt9AHjAAA= | String | Event ID. |
| Name of the file | image.jpeg | String | Custom name (not necessarily the file name) to be displayed with the attachment icon. |

**Sample Response**

```
{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('6aoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAATuTBwAAA%3D')/attachments/$entity",
    "@odata.type": "#microsoft.graph.fileAttachment",
    "@odata.mediaContentType": "image/png",
    "id": "AAMkADA1ODMyOWE0LWNkZmUtNDJiYy1hNWI1LWE1NmQwY2RmNDhlOQBGAAAAAAAXtAWtBH7_RLmY0nAoX3PzBwCh69yUb7hwSIjZoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAATuTBwAAABEgAQAKfJP9iJETBGnLIDXGog7_Q=",
    "lastModifiedDateTime": "2023-03-30T06:05:51Z",
    "name": "mahi.png",
    "contentType": "image/png",
    "size": 78744,      
 "contentBytes": "iVBORw0KGgoAAAANSUhEUgAAA7sAAAJKCAYAAADtI1L+AAAAAXNSR0IArs4c6QAAIABJREFUeF7snQf"
}
```

### 2.6 Cancel an event

This action lets the meeting organizer cancel an event by sending a cancellation message, which moves the event to the Deleted Items folder. For recurring meetings, the organizer can also cancel a specific occurrence by providing the occurrence event ID.

<img src="https://i.imgur.com/aUqeWRp.png" alt="drawing" width="60%"/>

The table below has sample inputs, data types and remarks of the fields for this action.

| Field Name                  | Sample Input                 | Data type | Remarks                  |
|-----------------------------|------------------------------|-----------|--------------------------|
| Event ID                    | AAMkAGI1AAAt9AHjAAA=          | String    | Event ID.                |
| Send a cancellation message | Out of office                | String    | Sends a cancellation message.    |

### 2.7 Get event details

This action will provide information about a specific event, including its properties and relationships. The start and end times of the event will be in the time zone chosen by the user.

<img src="https://i.imgur.com/wQrxfrG.png" alt="drawing" width="60%"/>


The table below has sample inputs, data types and remarks of the fields for this action.

| Field Name         | Sample Input                                                                                              | Data type | Remarks                                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Event ID           | AAMkADA1ODMyOWE0LWNkZmUtNDJiYy1hNWI1LWE1NmQwY2RmNDhlOQBGAAAAAAAXtAWtBH7%2BRLmY0nAoX3PzBwCh69yUb7hwSIjZoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAAFJQ9WAAA%3D | String    | Unique identifier for the event                                                                                                      |
| Response time zone | India standard time                                                                                       | String    | Provides the start and end time of the event adjusted to the time zone specified by the user.                                         |

### 2.8 Get busy time slots

This action shows a someone's scheduled events during a specific time period from their default calendar, indicating whether they are free or busy. If no events are scheduled, the user is assumed to be free during that time range.

<img src="https://i.imgur.com/1ULuPGI.png" alt="drawing" width="60%"/>

The table below has sample inputs, data types and remarks of the fields for this action.

| Field Name         | Sample Input                                                                                     | Datatype | Remarks                                                                                         |
|--------------------|--------------------------------------------------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------|
| Email addresses    | ["samanthab@contoso.onmicrosoft.com", "Rahul@contoso.onmicrosoft.com"]                         | Array    | SMTP addresses of users to get availability information for.                                    |
| Start time         | {"dateTime":"2023-04-04T09:00:00.000","timeZone":"India Standard Time"}                         | Object   | The start date, time, and time zone of the event.                                              |
| End time           | {"dateTime":"2023-04-04T12:43:49.4949","timeZone":"India standard Time"}                        | Object   | The end date, time, and time zone of the event.                                                |
| View available interval | 40                                                                                               | number   | Duration of a time slot in the [availability View] of the response.                            |



