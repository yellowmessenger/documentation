---
title : app.createEmailTicket
sidebar_label : app.createEmailTicket
---
This method is used for switching from bot chat to email ticket.

### Input params

1.  ticketOptions - _Object_
2.  mailData - _Object_

### Example

```js
 const ticketOptions = {
 		//required
        contact: {
            name: "Steve Rogers",
            phone: "9876543210",
            email: "steverogers@shield.com",
        },
        issue: "Attack at SHIELD by Loki",
        //optional
        category: ["attack", "loki"],
        priority: "HIGH", //'LOW/'MEDIUM'/'HIGH
        severity: "HIGH", //'LOW/'MEDIUM'/'HIGH
        tags: ["attack", 'SHIELD'],
        manualAssignment: false, //true
        assignedTo: "avengers@shield.com",
        customFields: {},

    }

    const mailData = {
        from: "nickfury@shield.com", //from is required.
        to: ["steverogers@shield.com"] // if not passed, ticketOptions.contact.email will be used.
    }

    app.createEmailTicket(ticketOptions, mailData)
    .then(response => app.log(response));
```