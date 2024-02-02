---
title : Amazon Connect Live Chat
sidebar_label : Amazon Connect Live Connect
---

Your yellow.ai account can be integrated with Amazon Connect Live Chat through this integration. This will help you connect your chats with live agents.

## 1. Use Case

This integration lets you use raise ticket node to start a conversation with Amazon connect agent, and once the conversation gets initiated, the user can talk to the agent.

<img src="https://i.imgur.com/HHKLO97.png" alt="drawing" width="100%"/>

:::note
1. In Raise ticket action node, Amazon Connect Live Agent Custom Fields will accept object type variable.
2. Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::

Example:
```
{“ticketId”:”hello”}
```

## 2. Configuration

Follow the below mentioned steps to set up this integration:

1. Inside your project, navigate to the **Integrations** tab and on the left side bar select **Live Chat**. You will find **Amazon Connect Live Chat**.

<img src="https://i.imgur.com/oFUZHBc.png" alt="drawing" width="100%"/>

2. Fill in the following fields to connect your yellow.ai bot with an Amazon Connect Live chat account.

* **Region:** The region in which your AWS connect is configured 

* **Access Key Id:** Your AWS Access Key Id. To create the access key,

 
 Go to **AWS console** -> Search for **IAM** -> Go to  **Users** -> Click on your User -> Select **Security  credentials** -> **Create Access Key** 


* **Access Secret Key:** Your AWS Secret Key.

* **Instance ID:** The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.

* **Contact Flow ID:** The identifier of the flow for initiating the chat. 

To see the ContactFlowId in the Amazon Connect console user interface, 

* Go to **Routing** on the navigation menu and click **Contact Flows**. Choose the flow. 
* In the following page, under the name of the flow, select **Show additional flow information**. The ContactFlowId is in the last part of the ARN.

**Example:**
```
arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx
```

* **Polling Timeout**(In milliseconds): Chat will automatically close after user inactivity’s time.

* **Chat Duration**(In minutes):- The total duration of a new chat session. If it's not specified, the duration of the chat session duration will be 25 hours by defualt. The minumum configurable time is 60 minutes and the maximum configurable time is 10,080 minutes (7 days).


**Reference**

https://docs.aws.amazon.com/connect-participant/latest/APIReference/Welcome.html
https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html

