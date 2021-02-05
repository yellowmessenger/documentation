---

title : app.getSupportSettings

sidebar_label : app.getSupportSettings

---

getSupportSettings Returns support settings for the bot. Useful for getting the names of custom fields.

Example

```js
app.getSupportSettings().then(app.log)

//output

{
     "customFieldsValidationFn": null,
     "closeTicketOptionsRequiredTocloseTicket": false,
     "tags": [],
     "csatRatingType": "numbers",
     "csatEnabled": false,
     "enableCollaboration": false,
     "ticketRatingQuestion": "Did we resolve your case?",
     "agentRatingQuestion": "How would you rate your agent?",
     "askTicketRating": true,
     "askAgentRating": true,
     "solved": "solved",
     "unsolved": "unsolved",
     "emailChatLogsToUser": false,
     "allowDuplicateAgentSessions": true,
     "ticketUpdateEventSettings": {
         "assignedFromQueue": true,
         "ticketClosed": true,
         "tagUpdate": false,
         "noteUpdate": false,
         "customFieldUpdate": false,
         "ticketTransfer": false,
         "ticketInactivity": false,
         "ticketAssignedUI": false,
         "_id": "5f8b1d8215ed390010ede226"
     },
     "_id": "5eb94eec7b8b900010da8cb2",
     "closeTicketOptions": [],
     "botId": "x1588565299602",
     "createdDate": "2020-05-11T13:11:08.227Z",
     "updatedDate": "2020-05-11T13:11:08.227Z",
     "ticketsQueueConfig": [
         {
             "allowTicketsQueue": false,
             "maxQueueLimit": 50,
             "_id": "5eb94eec7b8b900010da8cb3",
             "groupCode": "default"
         }
     ],
     "agentUiConfiguration": [
         {
             "ticketReportDownloadVisibility": true,
             "enableAttachments": true,
             "publicChatUrlVisibility": true,
             "chatTranscriptDownloadVisibility": true,
             "userActivityVisibility": true,
             "userLocationVisibility": true,
             "enableEmoji": true,
             "enablePauseBot": true,
             "showBotAttachments": true,
             "_id": "5eb94eec7b8b900010da8cb4"
         }
     ],
     "__v": 0
 }
```
