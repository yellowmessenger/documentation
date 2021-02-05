---
title: app.updateTicketCustomFields
sidebar_label: app.updateTicketCustomFields
---

app.updateTicketCustomFields is used to update the custom fields that are declared when creating a ticket.

## Input Parameters
ticketId, customFields
​
## Output Parameters
Object, giving success/failure message.
​
## Example
​
```javascript
//lets assume the custom field we wish to update is the address of the user.
 app.updateTicketCustomFields({ticketId: "12345", address: "new address of the user."}).then((res) => {
    app.log(res); //object, with sucess message
}).catch(err => {
    app.log(err); //object, with failure message
});
```