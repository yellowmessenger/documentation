---
title: User event node
sidebar_label: User event
---

User event node allows you to send an event to the bot, and trigger specific actions in the background without requiring immediate user interaction.

This node is used to perform tasks like API calls, sending emails, or executing other time-consuming processes after a certain delay.

**Use case**

For example, you can configure this node to send an event to the bot after a live agent closes a support ticket, prompting the bot to send an email to multiple recipients or trigger other automated tasks. 

**Configure User event node**

**Scenario**: A chatbot assists in customer support, and after a live agent closes a support ticket, the bot can send follow-up emails to the customer and team members after a short delay.

To configure User event node, follow these steps:

1. To use this node create a user event. To do so, go to **Automation** > **Events** > **User Events** > **+ Add Even**t.

   ![](https://imgur.com/X6grR3o.png)

2. In **Event name**, provide a name for that event and in **Event description** describe the event. Click **Create Event**.

     <img src="https://imgur.com/sIoYTDD.png" alt="drawing" width="50%"/>

3. Go back to the **Build** section, add a prompt node to ask for feedback and store it in a string variable.

      ![](https://imgur.com/Nepj3J1.png)
      
4. If you need to pass a variable of object data type in the payload section of the User Event node, use the [Function](#) node to convert the string variable into an object data type and store the user response in object datatype.

     ![](https://imgur.com/qRxR1fF.png)

5. Add the User event node and define the following options:
      * **Event key**: Choose the event created in step 2.
      * **Event delay**: Enter the time by which the event occurence should be delayed.
      * **Payload**: Choose the object variable (converted using the Function node) that contains the data to be sent with the event.

     ![](https://imgur.com/0UhoK90.png)

6. Go to Engage and [create a Email template](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/email-template#create-email-template) to send the email to the user.

7. Go back to build and create a new flow with the [start trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#13-trigger-flow-using-event) as **Event** and select the event that you have created in step 2. 

     ![](https://imgur.com/5neu9qy.png)
     
8. Add an Outbound Notification node for sending the email and configure the following fields:
     * **Type**: Choose the type of communication as **Email**.
     * **Sender**: Select or enter the sender ID of the email.
      * **To**:	Select the variable holding the user’s email address.
          <img src="https://imgur.com/YivlZUa.png" alt="drawing" width="80%"/>
      * **CC**: Choose recipients for CC (Carbon Copy) if needed.
      * **BCC**: Choose recipients for BCC (Blind Carbon Copy) if needed.
      * **Select template**: Choose the template that you have created in step 6.

   <img src="https://imgur.com/IMmZawq.png" alt="drawing" width="80%"/>
   
Refer to the following GIF to see how the User event node works.

   ![](https://imgur.com/1pcFzPk.gif)

**Limitation:**

* This node can trigger events after a minimum delay of 1 minute. It cannot be used for actions that require immediate response or execution.   