---
title : Salesforce messaging
sidebar_label : Salesforce messaging
---

Integrating Salesforce messaging with Yellow.ai allows you to connect with live agents for query resolution.

**Key benefits of integrating Salesforce messaging with Yellow.ai**:

* **Live agent support** – Use the Salesforce Messaging app to connect with live agents directly within the chatbot interface for real-time query resolution.
* **Live chat management** – Agents can easily accept and manage chat requests within the Salesforce platform. Once the agent is connected, the chat session is displayed within the Salesforce interface for efficient communication.
* **Enhanced customer experience** – Improves customer support by enabling live agent interactions and faster query resolution.

#### Prerequisites

Before proceeding with the integration, ensure that the Salesforce administrator provides the following details to the Integrations team:
* Organization setup
* Button ID
* Organization URL
* Deployment ID (Developer ID)

## Connect Salesforce messaging with Yellow.ai

To integrate Salesforce messaging with Yellow.ai, follow these steps:

1. Login to the [Yellow platform](https://cloud.yellow.ai/) and navigate to the **Development** environment.
   * In a two-tier environment, you can only add accounts in the Development environment.
   * In a three-tier environment, you can only add accounts in Staging/Sandbox environment.

2. Go to **Extensions** > **Integrations** > **Live chat** > **Salesforce messaging**.

    ![](https://imgur.com/z219qVE.png)
    
3. In **Give account name**, enter a unique name using only lowercase alphanumeric characters and underscores (_).

4. In **Organization Id**, enter the unique identifier of your Salesforce organization.

5. In **Deployment Id**, enter the identifier for the specific deployment within your organization.

6. In the **Organization Base URL**, enter the API endpoint of your Salesforce organization (example, `https://t-ct--fulluat.sandbox.my.salesforce-scfd.com`).
7. In **Customise chat headers**, enable this option to personalize bot headers with agent names and descriptions. The original settings will be restored once the ticket is closed.

7. Click **Connect**.

   ![](https://imgur.com/oeJsBNT.png)
   
* To connect more accounts, repeat the steps outlined above for each account. You can add a maximum of 15 accounts.
    
   
## Connect bot users to live agents on Salesforce

This integration enables bot users to connect with live agents on the Salesforce platform directly from your Yellow.ai account.

 1. In the Automation flow builder, select the **Raise Ticket** node.

     ![](https://imgur.com/wINFHpS.png)

2. Select **Salesforce messaging** from the **Live chat agent** drop-down.

3. In **Account name**, select the appropriate Salesforce account.

   <img src="https://imgur.com/qWh4unI.png" alt="drawing" width="60%"/>
   
 The following table contains the details of each field in the **Raise ticket** node.


   | Field name | Sample value | Data type |Description
   | -------- | -------- | -------- |-----|
   |Message after ticket assignment| Requesting live agent connection | String | Message will be displayed to the user once a ticket is assigned to an agent.|
   |Name| Rio | String |Name of the user|
   |Mobile| 9870000000| String| Mobile number of the user|
   Email|test@gmail.com| String | Email address of the user
   Query| I have a concern regarding my flight ticket|String| Subject/topic/reason why the ticket was created|
   Salesforce messaging custom fields|<pre lang="json">{<br/>"mobile_Number_c": "9999444443",<br/>"email_c": "test@gmail.com"<br/>}<br/></pre>|Array| List of details provided by the user before initiating the chat with the live agent|
  

## Handle chat sessions in Salesforce
   
1. To manage live chat interactions, ensure that agents are available on Salesforce platform to accept chat requests from users. Once connected, the chat session will be displayed within the Salesforce interface.

    <img src="https://imgur.com/ej7HW90.png" alt="drawing" width="40%"/>
    
2. To end the chat, the agent need to close the chat tab, which will automatically trigger the ticket-closed event on the Yellow.ai platform, marking the session as completed.

    
   ![](https://imgur.com/54RuSjV.png)
    
   <img src="https://imgur.com/TRRRSbQ.png" alt="drawing" width="40%"/>
   