---
title : app.transferTicket
sidebar_label : app.transferTicket
---

This function transfers the ticket to the given agent or given group. If groupCode is passed then agent id is ignored.

## Input
ticketId, agentId, customFields(optional), keepCollaborator, and groupCode.

## Output
String containing `Ticket Assigned` or an error object.

## Example

```js
app.transferTicket({
        ticketId: '100134',
        agentId: 'soujanyaagent1yellowmessengercom',
        customFields: {},
        keepCollaborator: true / false // whether agent who transfers should be kept as collaborator
        groupCode: 'test_grp'
    })
```