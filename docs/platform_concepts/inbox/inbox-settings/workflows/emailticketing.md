---
title: Email ticketing configuration 
sidebar_label : Email settings 
---

Email settings must be enabled to handle support emails in the Inbox tickets module. 

:::note
**Prerequisites to no-code email ticketing**
1. Create an email channel(email ID)
2. Link email channel to Inbox (with forwarding address)
3. Enable email ticketing from settings

Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/setupandconfig) for details.
:::

Follow the below steps to configure email settings: 

1. Open **Inbox** > **Settings**. 
2. Search and select **Email settings**.
    ![](https://i.imgur.com/2HwgDYg.png)
3. Select **Support email**. Enabling the support email option means that all incoming emails will be forwarded to the yellow.ai Inbox instead of the actual mailbox, where they will be automatically converted into support tickets.
    ![](https://i.imgur.com/yAF6i63.png)
4. Add **Acknowledgement email for new tickets**. This allows an acknowledgement email to be automatically sent to the customer when a new support ticket is created in the inbox, while the inbox agent takes up the ticket to resolve the customer's query. This practice is widely used in the support ticketing industry. You can choose to not send an acknowledgement email by selecting the **Do not send acknowledgement email** option. 
    ![](https://i.imgur.com/hDE2Goz.png)
5. Add details and write the **Acknowledgement email**. 
    - **Subject** : Add `{{userSubject}}` to reply to the same mail or you can type a new subject to send the acknowledgement as a new email instead of a reply.
    - **Acknowledgement message**: You can make use of the options available on the response screen (explained [here](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro#22-email-response-screen)) and type a message. You can also use dynamic variables in the message, commonly used variables such as Ticket ID, User subject and User name can be included by clicking **Add** next to the name in ticket details.
    ![](https://i.imgur.com/5CoCMca.png)
    - Click **Save**. 


-----

#### Sample acknowledgement emails

```
Dear [User Name],
Thank you for contacting us regarding [Email Subject]. We have received your support request and a ticket has been created with the ID [Ticket ID]. Our support team will review your request and get back to you as soon as possible.
Best regards,
[Your Company]
```

```
Hello [User Name],
Thank you for reaching out to us with your question about [Email Subject]. This email is to confirm that your message has been received and a ticket with ID [Ticket ID] has been created. We will investigate your issue and get back to you shortly with a resolution.
Best,
[Your Company]
```

```
Hi [User Name],
Thank you for your email about [Email Subject]. We appreciate your business and want to assure you that we have received your message. Your support request has been assigned a ticket with the ID [Ticket ID], and one of our support agents will follow up with you soon.
Best regards,
[Your Company]
```

```
Dear [User Name],
Thank you for contacting our support team with your question about [Email Subject]. We want to assure you that your support request has been received and assigned a ticket with the ID [Ticket ID]. We will investigate your issue and provide a prompt response as soon as possible.
Best,
[Your Company]
```