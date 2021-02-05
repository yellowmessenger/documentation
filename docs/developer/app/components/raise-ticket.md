---
title: app.raiseTicket
sidebar_label: app.raiseTicket
---


app.raiseTicket() is used to raise a ticket and assign it to an agent.

## Output Parameters
Ticket Data, with the details of the ticket and agent it is assigned to.

## Example Usage

```javascript
app.raiseTicket({
            // issue is what you want to go in the ticket description
            issue: 'Test ticket creation',
            //If you add these detais here, they will show up in the right sidebbar of agent window
            contact: {
                email: 'mattew@org.com',
                phone: '9876543211',
                name: 'Matthew',
            },// Please do not add any other properties to the this contact object. You can use custom fields if you'd like to show any other details.
            priority: 'MEDIUM',
            category: category //this decides the agent group
        }).then(async (ticketData) => {
            if (ticketData && ticketData.assignedTo) {
                let email = 'mattew@org.com'
                let phone = '9876543211'
                let name = 'Matthew'
                app.pauseBot();
                return app.sendTextMessage(`Thank You for your patience. You are now connected to our OSE.`).then(() => {
                    return resolve();
                });
            }
            else {
                return resolve();
            }
        }, (error) => {
            return app.sendTextMessage("Oops! It seems that all our agents are busy. Sending an email instead.").then(() => {
                const sender = 'noreply@yellowmessenger.com';
                let body = `Hi, --- This is the inform you that your customer ${app.context.steps.name} ${app.context.steps.email_address} has raised a ticket regarding issue in processing the transactions. \n Kindly connect to him within the next 5 minutes.`
                const subject = 'Customer Query';
                const to = 'shubhi@yellowmessenger.com';
                app.sendEmail(to, subject, body, "", sender).then(() => {
                    app.triggerIntent('default', {});
                return resolve();
             });
            });
        });
```

**IssueString**: Issue string helps the agent to get an idea regarding the context or issue faced by the user

**Contact**: This is an object of user details collected from the user and passed for the agents reference. The object can contain name, email, phone number and so on.

**ticketData**: Once the ticket is generated, the ticketData will contain data regarding the ticket generated. It can be the name of the agent to whom the ticket is assigned to, the ticket number and so on. 

	If the ticket is not created, the error message is sent in the ticketData.

There are 2 types of ticket creation:

1. Online ticket generation

2. Offline ticket generation

 

### Online ticket generation

Online tickets are generated when the customer service agents are online. When the online ticket is generated, the bot will be paused using the command app.pauseBot() to allow the user to converse with the agent.
Code for online ticket generation:

```javascript
app.sendTextMessage(app.renderMessage('pleaseWait', {}, "Please wait while I contact my support center...")).then(() => {
   let issueString = "User Query"
   app.raiseTicket({
       issue: issueString,
       contact: {
           name: app.context.steps.name || "SAMPLE NAME"
       },
       priority: 'MEDIUM',
       manualAssignment: false,
   }).then(function (ticketData) {
       app.log(ticketData, "TICKET DATA")
       if (ticketData && ticketData.assignedTo) {
           app.pauseBot();
           app.sendTextMessage(app.renderMessage('patience', {}, "Thank you for your patience, you are now connected with our agent.")).then(() => {
            return resolve();
           });
       } else {
           app.sendTextMessage(app.renderMessage('unavailable', {}, "Our agents are currently unavailable. We will get back to you as soon as possible."))
           return resolve()
       }
   })
})
```

### Offline ticket generation

Offline tickets are generated when the customer service agents are either busy with serving other users or offline when taking a break after answering the queries of other users.

While generating an offline ticket, 2 main parameters needs to be sent to the app.raiseTicket() method. Offline tickets can be generated if the online tickets are not generated.
```javascript
  manualAssignment: true,
  assignedTo: 'emailId'
 ```

manualAssignment: This flag should be set to true
assignedTo: The email id of the agent to whom the tickets has to be assigned.

Code for offline ticket generation:

```javascript
app.raiseTicket({
  issue: 'Customer Query',
  contact: {
    name: profileName,
    phone: profileName,
    email: "",
  },
  priority: 'MEDIUM',
  manualAssignment: true,
  assignedTo: 'emailId of agent'
}).then((ticketData) => {
  if (ticketData && ticketData.assignedTo) {
    app.pauseBot();
    app.sendTextMessage(app.renderMessage('patience', {}, "Thank you for your patience, you are now connected with our agent.")).then(() => {
      return resolve();
    });
  } else {
    app.sendTextMessage(app.renderMessage('unavailable', {}, "Our agents are currently unavailable. We will get back to you as soon as possible."))
    return resolve()
  }
})

 

Ticket closing event:
After the agent closes the ticket, the bot receives an event with the code ticket-closed, which has to be handled in main().
if (app.data && app.data.event && app.data.event.code === 'ticket-closed') {
// the bot can be unpaused using app.unPauseBot()
}
```

## Note
Please make sure to test your bot by logging in as an agent and seeing if your ticket is being transferred as shown in the demo.