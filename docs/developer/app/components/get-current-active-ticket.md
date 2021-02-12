---
title : app.getCurrentActiveTicket
sidebar_label : app.getCurrentActiveTicket
---


## getCurrentActiveTicket

returns the currently active (open/assigned/queued) ticket.

### Example

```javascript
app.getCurrentActiveTicket()
.then(app.log)
.catch(app.log)


//log

 {
     "success": true,
     "message": "success",
     "data": {
         "tags": [],
         "responded": true,
         "ticketType": "livechat",
         "ticketCsatScore": null,
         "agentCsatScore": null,
         "comments": [],
         "assignedByAdmin": false,
         "manualAssignment": false,
         "lastAgentMessageTime": 1605718004413,
         "lastUserMessageTime": 1605718061222,
         "userActiveStatus": "ACTIVE",
         "agentActiveStatus": "ACTIVE",
         "replyCount": 1,
         "voiceCall": false,
         "sipCall": false,
         "agentCurrentHandlingTicketsCount": 0,
         "autoStartCall": false,
         "_id": "5fb54fdba5254c0011c95a29",
         "ticketId": "100315",
         "botId": "x1586702990815",
         "uid": "918309798602",
         "contact": {
             "name": "Harish",
             "phone": "8309798602",
             "email": ""
         },
         "issue": "Issue not resolved -store",
         "priority": "MEDIUM",
         "status": "ASSIGNED",
         "source": "whatsapp",
         "assignedTo": "harishmukkarayellowmessengercom",
         "xmpp": "user_1599108579034",
         "assignedTime": "2020-11-18T16:46:18.996Z",
         "timestamp": "2020-11-18T16:46:19.003Z",
         "updated": "2020-11-18T16:47:41.222Z",
         "reopenedBy": "harishmukkarayellowmessengercom",
         "reopenedFrom": "100313",
         "agentMobileApp": false,
         "agentProfile": {
             "name": "Harish Mukkara",
             "profile_picture": "https://cdn.yellowmessenger.com/YCxnyq7Lo0L31563442773004.png",
             "description": "Support Agent",
             "email": "harish.mukkara@yellowmessenger.com"
         },
         "logs": [],
         "reassignmentLog": [],
         "collaborators": [
             {
                 "_id": "5fb54fdba5254c0011c95a2c",
                 "username": "harishmukkarayellowmessengercom",
                 "xmppUsername": "user_1599108579034",
                 "name": "Harish Mukkara"
             }
         ],
         "__v": 1,
         "firstResponseTime": "2020-11-18T16:46:32.645Z",
         "avgResponseTime": 5837
     }
 }
```
