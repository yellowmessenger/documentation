---
title: Notification status node
sidebar_label: Notification status
---

Notification status node is used to monitor and report the delivery status of a notification sent through the system. Notifications may include emails, SMS messages, app alerts, or other forms of communication. The node provides feedback on the outcome of the notification, such as whether the message was successfully delivered, opened, or if it encountered an error during transmission.

You can use the notification, when you want to:
* **Track delivery success**: To know whether an email, SMS, or notification has been delivered to its recipient.
* **Error handling**: Receive immediate feedback if a notification fails to deliver, allowing you to take corrective action.
* **Ensuring user engagement**: To track if the user has interacted with the notification, like reading or responding to it.

**Use case**

* **Email delivery tracking**: Track whether emails sent to users for verification or updates have been successfully delivered, and if they were opened.
* **SMS delivery confirmation**: Ensure that SMS messages, such as OTPs or alerts, have been successfully delivered to a recipient’s phone.
* **Push notification read status**: Track if a user opened or dismissed an app notification, allowing businesses to measure engagement.

**Configure Notification status**

To configure notification status node, follow these steps:

1. Add the notification status node to your flow.

    ![](https://imgur.com/Bea0NWC.png)

2. Define the following fields:
    * **Type**: Choose the type of notification you would like to track. For example, SMS, WhatsApp, Voice.
    * **Message ID**: Use the variable that contains the Message ID.


1. Add an [Outbound Notification node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes-overview/outbound-notification) to your flow and store the response of that node in a variable. To know more about Outbound notifications, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).

   ![](https://i.imgur.com/9YFdHas.png)

2. Add a **Notification Status node** to the outbound notification node.

   ![](https://i.imgur.com/ngOYViI.png)

3. In **Type**, choose the communication channel: SMS,  WhatsApp, or Voice and in **Message ID** fetch the variable that contains the Message ID.

   ![](https://imgur.com/Bea0NWC.png)

4. In **notifStatusStoreCustomPayloadIn**, create or choose the variable to store the payload.

5.  Connect relevant nodes to **Sent** and **Delivered** options based on what you want the bot to do if the particular notification was sent and delivered.

  ![](https://i.imgur.com/IboR5jj.png)