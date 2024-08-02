---
title : Salesforce Live Chat
sidebar_label : Salesforce Live Chat
---

Yellow.ai’s integration with [Salesforce](https://www.salesforce.com/in/) lets you connect with the live chat agents of **Salesforce** to resolve your queries.

:::note      
Agents must remain available (online) on Salesforce (when queue management and offline support are not configured).
:::


## Connect Salesforce with Yellow.ai

In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.



To connect your yellow.ai account with **Salesforce**, follow these steps.

1. On the left navigation bar, go to **Extensions** > **Integrations** > **Live chat** > **Salesforce live chat**.

   <img src="https://i.imgur.com/JagYT5w.png" alt="drawing" width="100%"/>

2. Search for **Salesforce Live Chat** or choose the category named **Live chat** from the left navigation bar and then click on **Salesforce Live Chat**.

   ![](https://i.imgur.com/nCJ9Tdd.png)


3. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).
Fill in the required fields. 

4. In **Organization Id**, enter the unique identifier of the Salesforce account that represents a particular organization. To fetch this, refer to the following steps:

   a. Login to your Salesforce account.

   b. Click on the app launcher and choose **Service Console**.

   c. Click on the setup button at the top right corner and select **Setup**.
 
   d. In the **Quick Find** section, search for **Deployments** in the **Chat** section.

   e. Click on the deployment that is already created (if not, create a deployment).

   f. In the deployment script, locate an ID starting with **00D**, which is the Organization ID.

4. In **Deployment Id**, enter the identifier for the specific deployment within your organization. To fetch this, refer to the following steps:

   a. Login to your Salesforce account.

   b. Click on the app launcher and choose **Service Console**.

   c. Click on the setup button at the top right corner and select **Setup**.

   d. In the **Quick Find** section, search for **Deployments** in the **Chat** section.

   e. Click on the deployment that is already created (if not, create a deployment).

   f. In the deployment script, locate an ID **not starting with 00D**, which is the Deployment ID.

5. In **Button Id**, enter the unique identifier for the chat button that initiates a live chat session. Ensure that the agent is available with the Button ID you are configuring for the integration to connect successfully. To obtain this ID, follow these steps

   a. Login to your Salesforce account.

   b. Click on the app launcher and choose **Service Console**.
 
   c. Click on the setup button at the top right corner and select **Setup**.
 
   d. In the **Quick Find** section, search for **Chat Buttons and Invitations** in the **Chat** section.
 
   e. Click on the button that is already created (if not, create a button).
 
   f. In the **Chat Button Code**, locate an ID starting with **573**, which is the Button ID.

6. In **Organization Base URL**, enter the chat API endpoint of a particular salesforce organization. To fetch this, refer to the following steps:

   a. Login to your Salesforce account.
 
   b. Click on the app launcher and choose **Service Console**.
 
   c. Click on the setup button at the top right corner and select **Setup**.
 
   d. In the **Quick Find** section,  search for **Chat Settings** in the Chat section.
 
   e. Find the **Chat API Endpoint** present and copy the URL value till **.com**. This is your Organization Base URL.

 7. In **Agent device**, specify the type of device the agent will use (e.g., desktop, mobile)
 8. In **Agent screen resolution**, enter the screen resolution of the agent's device to ensure optimal chat interface display. Example: For desktop, it could be 2560 x 1600.
 9. Configure other details:
    
    Option | Description
    ------ | -----------
    **Language** | Language preferred by the user to chat with the live agent.
    **Agent Timeout** | The time duration (in minutes) after which an agent will be timed out if inactive. Default Value: 5 minutes
    **Enable queue updates** | Enable this for users to receive updates on their position in the queue during chat interactions.
    **Enable sticky agent** | Enable this option to assign returning users to the same agent they previously interacted with.
    **Disconnect chat from** | Enable this to immediately close tickets for users waiting in the queue but not yet assigned to an agent.
    **Send queue updates event to** | Enable this to inform users about their queue position with real-time updates sent as events to the bot, allowing developers to customize bot flows based on the queue status.
    **Customise chat headers** | Enable this to personalize the bot headers with agent names and descriptions. The bot headers will be restored ot orginal settings once the ticket is closed.

10. Once you're done, click **Connect**.
11. If you have multiple accounts, click on **+ Add account** and follow the above mentioned steps to add each of them. You can add a maximum of 15 accounts.




## Connect bot users to live agents on Salesforce

This integration lets you connect with live agents on the **Salesforce** platform from your yellow.ai account. 

:::note
- When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
- During the testing process, agents should be **online** for the specific button ID or group mapped in the configuration.
:::

:::info
Use **Ticket-closed** in the **Raise Ticket node** to perform specific actions when a live chat closes, instead of using the **ticket-close** event.
:::
 
 1. In the Studio flow builder, select the **Raise Ticket** node.

   <img src="https://i.imgur.com/k3kIkVd.png" alt="drawing" width="80%"/>

2. Select **Salesforce Live Chat** from the **Live chat agent** drop-down list.

   <img src="https://i.imgur.com/JHYS5Tz.png" alt="drawing" width="60%"/>

   <img src="https://i.imgur.com/bfVBodc.png" alt="drawing" width="60%"/>


The following table contains the details of each field in the **Raise ticket** node.


   | Field name | Sample value | Data type |Description
   | -------- | -------- | -------- |-----|
   |Message after ticket assignment|Requesting live agent connection.|String| The message that will be displayed to the end user after a ticket is successfully assigned to an agent|
   |Name| Rajesh|String|Name of the user|
   |Mobile| 9876543210| String|Mobile number of the user|
   Email|test@gmail.com|String|Email address of the user
   Query|I have a concern regarding my flight ticket|String| The subject/topic/reason why the ticket was created|
   Salesforce Live Chat Custom Fields|<pre lang="json"> [<br/> {<br/> "label": "Mobile",<br/>"value": "9999444443",<br/>"transcriptFields": [<br/>"Mobile_Number__c"<br/> ],<br/> "displayToAgent": true<br/>},<br/>{<br/>"label": "Chat",<br/>"value": "sessionURL",<br/>"transcriptFields": [<br/>"chat_transcript__c"<br/>],<br/>"displayToAgent": true<br/>}<br/>]</pre>|Array| The list of details provided by the user before initiating the chat with the live agent|
   |Salesforce Live Chat Custom Entities|<pre lang="json">[<br/> {<br/> "entityName":"Contact",<br/>"saveToTranscript":"contact",<br/> "linkToEntityName":"Case",<br/>"linkToEntityField":"ContactId",<br/>"entityFieldsMaps":<br/>[<br/>{<br/>"fieldName":"LastName",   <br/> "label":"LastName",<br/>"doFind":true,<br/>"isExactMatch":true,<br/> "doCreate":true<br/>},<br/> {<br/>"fieldName":"FirstName",<br/> "label":"FirstName",<br/> "doFind":true,<br/>"isExactMatch":true,<br/>"doCreate":true<br/>},<br/>{<br/>"fieldName":"Email",<br/>"label":"Email",<br/>"doFind":true,<br/>"isExactMatch":true,<br/>"doCreate":true<br/>}<br/> ]<br/>}<br/>]<br/></pre>|Array|The records created/ searched depending on what [EntityFieldsMaps](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm#EntityFieldMaps) has enabled.

**Advanced options**

<img src="https://i.imgur.com/OT7Nfp3.png" alt="drawing" width="55%"/>
<img src="https://i.imgur.com/E6H9TJw.png" alt="drawing" width="50%"/>



The following table contains the details of each field in the **Advanced options** section.

| Field name   | Sample value  | Data type | Description |
|----------------------------------------------------------|------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message after agent assignment                           | You are now connected to {liveAgent}.                      | String    | This message is displayed to the end user when an agent is assigned, us the dynamic parameter{liveAgent} to display the name of the agent. |
| Language preference                                      | English                                                    | String    | Language preferred by the end user to chat with the live agent.                                                                                                                                |
| Message to display queue position                        | Your queue position is {position}                          | String    | This message is displayed to the user when the ticket is in queue, use the dynamic parameter {position} to display the position. |
| Message to display updated queue position                | Your current queue position is {position}                  | String    | This message is displayed to the user when the queue position changes, use the dynamic parameter {position} to display the position. |
| Message after agent transfer                             | Your chat has been transferred to {liveAgent}              | String    | This message is displayed to the end user when the chat gets transferred from one agent to another, use the dynamic parameter {liveAgent} to display the name of the agent. |
| Message to display estimated wait time before agent assignment | The estimated wait time for the chat to get assigned is {waitTime} seconds | String | This message notifies the the user on the approximate time the user needs to wait before an agent is assigned, use the dynamic parameter {waitTime} to display the wait time. |
| Display agent name                                       | true                                                       | Boolean   | Enable this flag will to display the chat agent's name if there's an assignment or transfer of the chat.                                                                                              |
| Warning message to display after end user inactivity     | Idle warning                                               | String    | This message is displayed if the user is inactive.                                    |
| Timeout message to display after end user inactivity     | Idle timeout                                               | String    | This message will be displayed to the user when the live chat ends because of their inactivity for a specific duration of time.                                                                    |
| Message after failure in establishing connection         | Connection failure                                         | String    | This message will be displayed to the user when there is a failure in connecting with a live agent.                                                                                            |
| Message after agent has disconnected from the chat       | Agent has disconnected                                     | String    | This message will be displayed to the user when their agent disconnects the chat. (This message will be displayed only if there are other active agents with the capacity to take new chats, otherwise, the message configured in the field **Message after failure in establishing connection** will be displayed) |
| Message to display after chat ends due to agent inactivity | Agent timeout occurred                                     | String    | This message will be displayed to the user when the Agent Timeout value has been surpassed.   
|Send chat transcript| **True** or **False** | Boolean |The Send chat transcript field allows you to send the conversation history between the end user and the bot as the initial message to the agent. Since this is a boolean field, pass the value **True** to send the chat transcript to the agent and if you don’t want to send the chat transcript to the agent, pass the value **False**.<br/><br/> Note: In cases where the entire transcript exceeds the character limit of a single message packet in Salesforce, the content will be divided and sent as multiple message packets. For example, if the chat transcript contains 8000 characters and the message packet limit is 4000 characters, the transcript will be divided into two packets of 4000 characters each and sent as separate messages to the agent.|


                                                                                                        |

**Sample success response**

```json
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note 
apiresponse represents the raw response from the Salesforce create ticket API
:::

**Sample failure response**

```json
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}
```


## Steps to set up bot in Salesforce Live Chat

1. Login to your [Salesforce account](https://login.salesforce.com/?locale=in) and click **Setup**

   ![](https://i.imgur.com/oMnJ2yc.png)

2. On the left side bar search, search for **Visualforce Pages** and click on it.

   <img src="https://i.imgur.com/XOwD557.png" alt="drawing" width="40%"/>

3. Click **New** to create a new VF page.

   ![](https://i.imgur.com/M1h9H27.png)

4. Perform the following actions:

* Enter the **Label**,**name** and check the **Available for Lightning. Experience, Experience Builder sites, and the mobile app** option.
* Paste the embedded bot code into the markups section between the <apex:page> </apex:page> tags.
* Click **Save**.

   ![](https://i.imgur.com/ddX5fGC.png)

5. Go back to the left side bar search and search for **App Manager** and click it.

   ![](https://i.imgur.com/ddX5fGC.png)

6. Scroll down to **Service Console** and click **Edit**.

   ![](https://i.imgur.com/mbiy9SW.png)

7. Click **Utility items(Desktop only)** and click **Add Utility Item**.

   ![](https://i.imgur.com/1UT4ElB.png)

8. Select **VisualForce** from the drop-down.

   ![](https://i.imgur.com/WOZgdEV.png)

9. Perform the following actions in the following page.

* Add **Label** , **Icon**, **Panel Width**, **Panel Height**.
* Under **Component Properties** deselect **Show Label**.
* In **Visualforce Page Name**, add the name of the VF page created in **step 4**.
* Click **Save**.

   ![](https://i.imgur.com/FDOn8Ht.png)

10. Go to **App launcher** and navigate to Service Console. You should see the bot at the bot footer.

   ![](https://i.imgur.com/PuNynWd.png)


### Reference

https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_API_requests.htm


