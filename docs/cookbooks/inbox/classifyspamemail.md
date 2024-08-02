---
title: Automatically resolving spam email tickets
sidebar_label: Resolve spam email tickets  
---

In cloud bots, we can resolve email tickets if the ticket has been raised by a particular email ID recognized as spam.

## Prerequisites to resolve

- Ensure Ticket-created event is set up.
- Maintain a list of email addresses identified as spam.
- Ensure you have the API endpoint and necessary credentials to resolve tickets.

## Steps to resolve

1. **Create the Ticket-created Event**:
    - Go to **Studio > Events > Custom Events**.
    - Click on Add Event and add `ticket-created`.

2. **Create a Flow from Scratch:**
    - Go to Build and create a new flow.
    - In the start node, select the trigger type Event and choose `ticket-created`.
    - This flow will be triggered as soon as a ticket gets created in the email tickets section.

3. Get the Incoming Email from the `ticket-created` Event:
    - The ticket-created event contains the following data that can be accessed as needed:

```
{
   "event": {
       "code": "ticket-created",
       "emailThread": {
           "_id": "669baa6ac95bf92836c2486e",
           "messageIds": [
               "<CAFseUiAfD5a+ySCO2MQq2zKNEAun3TOP9Pa=pXeAQL=NeNsjzA@mail.gmail.com>"
           ],
           "botId": "x1694470802970",
           "initiatorMail": "bhavana.thakkelapati@yellow.ai",
           "fromMail": "bhavana.thakkelapati@yellow.ai",
           "to": [
               {
                   "address": "testyellowdotai@gmail.com"
               }
           ],
           "subject": "testing",
           "replyEmail": "testyellowdotai@gmail.com"
       },
       "ticketData": {
           "id": 5315,
           "ticketId": 332,
           "botId": "x1694470802970",
           "uid": "669baa6ac95bf92836c2486e",
           "source": "",
           "contactId": "878e8e26-f225-46c6-a20a-de6066de8eb2",
           "subject": "testing",
           "lastMessage": null,
           "priority": "MEDIUM",
           "statusId": 1,
           "status": {
               "id": 1,
               "createdAt": "0001-01-01T00:00:00Z",
               "updatedAt": "0001-01-01T00:00:00Z",
               "deletedAt": null,
               "name": "OPEN",
               "settingId": null
           },
           "internalStatus": null,
           "groupCode": null,
           "xmpp": null,
           "dueDate": null,
           "responded": false,
           "firstRespondedTime": null,
           "firstResponseDuration": null,
           "firstResponseDurationCreated": null,
           "assignedTo": null,
           "assignedAgent": {
               "id": 0,
               "botId": "",
               "agentId": "",
               "currentAssignedTicketCount": null,
               "maxTicketConcurrency": 0,
               "lastTicketAssignedTime": null
           },
           "assignedTime": null,
           "resolvedTime": null,
           "assignedByAdmin": false,
           "manualAssignment": false,
           "lastUserMessageTime": null,
           "lastAgentMessageTime": null,
           "lastBotMessageTime": null,
           "averageResponseTime": 0,
           "replyCount": 0,
           "userReplyCount": 0,
           "customFields": {},
           "ticketType": 0,
           "createdAt": "2024-07-20T12:15:39.583188Z",
           "updatedAt": "2024-07-20T12:15:39.583188Z",
           "deletedAt": null,
           "tags": [
               {
                   "id": 4,
                   "createdAt": "0001-01-01T00:00:00Z",
                   "updatedAt": "0001-01-01T00:00:00Z",
                   "deletedAt": null,
                   "botId": "",
                   "code": "auto_assignment_pending",
                   "name": "auto_assignment_pending",
                   "settingId": null,
                   "tickets": null
               }
           ],
           "parent": false,
           "parentTicketId": null,
           "contact": {
               "contactId": "878e8e26-f225-46c6-a20a-de6066de8eb2",
               "primaryEmail": "bhavana.thakkelapati@yellow.ai",
               "botId": "x1694470802970",
               "firstName": "Bhavana",
               "lastName": "Thakkelapati",
               "uids": [
                   {
                       "botId": "x1694470802970",
                       "uid": "6584fe9e27d39a938d2b174a",
                       "channelName": "email"
                   }
               ]
           },
           "slaId": 0,
           "slaPause": {
               "id": 0,
               "createdAt": "0001-01-01T00:00:00Z",
               "updatedAt": "0001-01-01T00:00:00Z",
               "deletedAt": null,
               "ticketIdPk": 0,
               "paused": false
           },
           "slaActivity": null,
           "activityLog": null,
           "frtBreached": 0,
           "ertBreaches": 0,
           "ertAchievements": 0,
           "rtBreached": 0,
           "slaAchievement": "",
           "transferred": false,
           "reopened": false,
           "reopenedCount": 0,
           "reopenedBy": null,
           "lastReopenedTime": null,
           "agentFirstResponseTimeRecorded": false,
           "lastAssignmentId": null,
           "agentTicketHandlingTimeStartedAt": null,
           "handlingTime": null,
           "transferCount": 0,
           "sourceEmail": "testyellowdotai@gmail.com",
           "collaborators": null,
           "resolutionTarget": "",
           "resolutionDueTime": null,
           "firstResponseTarget": "",
           "firstResponseDueTime": null,
           "collaboratorsUserNames": null,
           "agentName": "",
           "agentAliasName": "",
           "agentEmail": "",
           "reopenedAgentEmail": "",
           "resolutionDurationCreate": 0,
           "resolutionDurationAssigned": 0,
           "tagNames": null,
           "isNewTicket": true,
           "unreadMsgCount": 0,
           "highlight": null,
           "cdpId": "x1694470802970_qX6KmO7eEGUy6KAWSHW_V",
           "sessionId": "669baa6ae58187819623d88c",
           "es_doc_props": null
       }
   },
   "medium": "message",
   "type": "event"
}

```

4. **Get the Initiator Email**: Extract the user email ID from the event using `{{{data.event.emailThread.initiatorMail}}}'.
5. **Check for Spam Email**: Compare the extracted email ID with your spam emails list. If the email is in the spam list, proceed to resolve the email ticket.
6. Resolve the Email Ticket:

**API to resolve the email ticket**

```
curl --location --request PUT 'https://cloud.yellow.ai/api/ticketing/ticket/23?botId=x1667286708237' \
--header 'Content-Type: application/json' \
--header 'x-api-key: TUl4bVHPpUm8hYan-7V9nb8UvuoCyIi_OdRo2-yS' \
--header 'Origin: https://cloud.yellow.ai' \
--data '{
"statusId": 2 // The status ID 2 indicates the resolved status of the email ticket.

}'

```




**![](https://lh7-us.googleusercontent.com/docsz/AD_4nXceqPxxwliSeret0VTRZXhocdRn-OELf2_xkJycOWrN5uXyUwvJg_oTukJv7NgMqS5sg3v_tTkPHrgKBUAFko4126UR0zb29miGX_PRSWPJ78O36NAqAJLzbxBmB-rGsI2Zu9WXzoVpUaHKHyRYMNhbM6o2?key=74k5vsRH0KrNI5DXkdXVKg)**

**![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdeMQ0tLiIUZ9x1IpyoelvK7pVUuqttV7YcwlB3bPq7ge6Sareo1HJFd2nxh_vj4jple3OKsp4DxvmvXwquA5M-LaZw007-2E9f5yiSURv4Iw_QOHKzWfH2FLlRrgAkvXoK1J0SH-UR55Cs5H0JfkCpfn07?key=74k5vsRH0KrNI5DXkdXVKg)**