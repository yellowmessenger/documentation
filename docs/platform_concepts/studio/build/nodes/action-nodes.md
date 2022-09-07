---
title: Action Nodes
sidebar_label: Actions
---


Actions are non-interactive nodes that can be used to perform a specific task (background action). These nodes will not display any messages to the user while having a conversation but they run the said tasks in the background. 
Following are the different types of action nodes: 

1. [General](#gen)
2. [Code Based](#cb)
3. [Language & Notification](#lang)
4. [Nodes available only for Workflow](#wf)

---

## <a name="gen"></a> 1. General

### 1.1 Send Event 

Record an event with this node. 
Events are used to record specific actions or capture an important conversion, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub) to learn more.

![](https://i.imgur.com/6obnCs8.png)

----

### 1.2 Send OTP 

Send OTP to a phone number with this node. 

* Ask and Store the phone number in a variable. 
* Select the variable name (phone) on the Send OTP node. 

![](https://i.imgur.com/SKvCnqm.png)

Following text message will be sent to the respective number. 

![](https://i.imgur.com/mDlVuCn.jpg)

----

### 1.3 Verify OTP

Store the entered OTP as a variable and verify it with this node. 

![](https://i.imgur.com/hH8AAr0.png)

**Success** and **Fallback** cases must be handled by connecting them to other nodes to continue the flow.
That is, node connected to success will be executed if the OTP is matched, otherwise, node connected to fallback will get executed. 

----

### 1.4 Document Search

Answer user queries referring to the available documents from your knowledge base using this node. 

<img src="https://i.imgur.com/cu1uk7M.png" alt="drawing" width="50%"/>


Document Search action node is used to answer user query at any point in the flow (or fallback) from documents uploaded in the Knowledge base (This node shows results from configured [Document Cognition](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition)).


![](https://i.imgur.com/plCzZin.png)

- You can select a variable containing a search query
- You can also choose to add metadata filters (optional) to your query (the filters you tagged your documents with will show in dropdown). 
- You can branch flow from here based on whether any results were found in the documents (success) or not (failure).
- There is no store output here, as the results are directly shown in carousels. 
- In node settings, you can configure the total no. of results shown, the total number of results per document and messages shown while showing results/reporting failure. 

![](https://i.imgur.com/7qtaA9G.png)

-----

### 1.5 Execute Flow 

Enter another flow with this node. 
For example, in the below flow, based on the entered user reply the conversation gets directed to other flows. Once that flow is executed, control comes back to the current flow. 

![](https://i.imgur.com/se58HZm.png)

-----

### 1.6 Delay

Add a time delay between components with this node. 
Select the number of minutes/hours you want the bot to wait for before executing the next node.

![](https://i.imgur.com/Bh3ly48.png)

> Alternative method is to set the delay on each of the nodes: 
> ![](https://i.imgur.com/t8cBzXn.png)

-----

### 1.7 Raise Ticket 

Raise ticket is used in order to connect bot user to the human agent. 
Connect the user to an agent after collecting info and query with this node.  

This simple UI node can be used to set up basic & advanced scenarios such as Working Hours, Agent Availability, voice/video calling, etc required to create a ticket.

#### Raise Ticket Outputs 

1. **Ticket Closed** - This essentially is bot behaviour after the Agent closes a ticket (i.e. s/he has resolved user query).
2. **Error** - This can be used as a generic message in any case ticket creation is not successful. For customised messages, specific errors event hub can be configured. 

#### Raise Ticket Response

Raise Ticket action node returns an object response as shown below. You can parse important information from this response to store it in a database or use it on another journey.

```json
{
  "tags": [],
  "responded": false,
  "ticketType": "livechat",
  "ticketCsatScore": null,
  "agentCsatScore": null,
  "assignedByAdmin": false,
  "manualAssignment": false,
  "lastAgentMessageTime": null,
  "lastUserMessageTime": null,
  "lastBotMessageTime": null,
  "userActiveStatus": null,
  "agentActiveStatus": null,
  "replyCount": 0,
  "voiceCall": false,
  "sipCall": false,
  "agentCurrentHandlingTicketsCount": 0,
  "autoStartCall": false,
  "autoTranslate": false,
  "autoDetectLanguage": false,
  "_id": "6156df377b7bb14e16bae116",
  "botId": "YOUR_BOT_ID_HERE",
  "uid": "106265078787462873391306131746",
  "source": "yellowmessenger",
  "issue": "ISSUE_TITLE_HERE",
  "priority": "MEDIUM",
  "severity": "MEDIUM",
  "contact": {
    "phone": "1234567890",
    "name": "CUSTOMER_NAME",
    "email": "[community@yellow.ai](mailto:community@yellow.ai)"
  },
  "assignedTo": "community_yello_ai",
  "sessionId": "5b8a665e69dbc5c451d88bf0",
  "userLanguage": "en",
  "ticketId": "100001",
  "logs": [],
  "timestamp": "2021-10-01T10:13:11.657Z",
  "reassignmentLog": [],
  "collaborators": [
    {
      "_id": "6156df377b7bb15d9fbae11a",
      "username": "community_yello_ai",
      "xmppUsername": "user_1624003758958",
      "name": "yellow.ai Community"
    }
  ],
  "agentLanguage": "en",
  "status": "ASSIGNED",
  "assignedTime": "2021-10-01T10:13:11.695Z",
  "xmpp": "user_1624003758958"
}
```
![](https://i.imgur.com/br1Lrcf.png)

While raising a ticket, you can pass fields such as **Name** , **Contact** (Email/Phone Number), and **Query**. Message after ticket assignment will be seen by the user on getting connected to the agent.

#### Advanced Options

To provide additional information to the ticket.

![](https://i.imgur.com/hWTC8FI.png)

As configured in Inbox Settings, [Tags](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/chats-configuration/tags) and [Custom Fields](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/chats-configuration/custom-fields) will be visible in a multi-select dropdown(i.e. more than one options can be added to ticket)

- **Tags** - Selected Tags from dropdown will be added to the extra details of the ticket (useful for agents to get a quick overview of the issue).
- **Department** - Similar tickets can be assigned to relevant departments.
- **Priority** - Denotes the priority of tickets from high, medium or low. (default priority is MEDIUM)
- **Voice Call Options** - Voice Call, SIP Call and Auto Start Call can be enabled.
- **Custom Fields** - Based on the use case additional information collected by bot can be added to ticket. for example, in eCommerce Order ID, Payment Mode, Delivery date etc can be asked before connecting to the agent. Just like key value pairs, once a custom field is selected, an additional prompt will be seen.

<img src="https://cdn.yellowmessenger.com/iE4ppldmrE7k1625673583277.png" alt="drawing" width="65%"/>

#### Error Handling

Output of Raise Ticket Node dictates general behaviour for any error in creating a ticket. In most real life scenarios, it is preferred to show appropriate reasons to users as to why they cannot to an agent. 

> Once any specific event is active and configured, the corresponding flow will be given preference. Bot is never paused unless a ticket is in ASSIGNED state (i.e. Agent is interacting with the user).


Follow two steps to handle custom scenarios -
1. In Event Hub, activate the custom inbox event. Scenarios that can be handled:
  - All Available Agents Busy
  - All Available Agents Away
  - All Available Agents Offline
  - All Available Agents Limit Reached
  - Queue Not Enabled
  - Group Queue Not Enabled
  - Group Queue Limit Reached
  - Offline Ticketing Not Enabled
  - Offline Ticketing Not Enabled for Groups
  - Offline Ticket Queue Limit Reached

2. Build a Flow with relevant events added in the Start Trigger.

#### Working Hours

If the bot is supposed to respond with a different message outside of agent working hours, **[Logic Node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes)** can be used. 

<img src="https://cdn.yellowmessenger.com/ciDa5Gn2ZzbK1625675537775.png" alt="drawing" width="60%"/>

> The bot default timezone is considered while evaluating whether a user is outside working hours.

Inbox support auto translate feature out of the box so agents don't need to know the customer's language in order to help them. Just enable `Translate User Message` in the raise ticket node configuration to use this feature.

<img src="https://i.imgur.com/frCvffs.png" alt="drawing" width="40%"/>

-----

### 1.8 Analytics 

Capture analytics with this node. 

Analytics node can be used to send analytics events at any point in the execution of journey. You type the event name to push and select a value.

The analytics node can be used to capture custom events at any point in the execution of a journey. The data passed via the node will flow into the analytics table of Data Explorer inside the Insights section.

**Event** - This can be a static name or a variable which will be captured under the Events column on the analytics table.

**Value** - A variable needs to be selected here which will be captured under the eventValue column.

**Keys** - This is an optional field to capture metadata and will be created as a new column. Multiple columns can be created using keys.

**Pro-tip**: Using custom events, you can analyse user flow from one journey/step to another, filter by specific custom events, summarise by different user responses, visualise drop offs and conversion funnels, etc.

![](https://i.imgur.com/GlLrwaa.png)

Open the Analytics page by clicking the Analytics Table link.  

![](https://i.imgur.com/BvNwdWt.jpg)

-----

### 1.9 Generate PDF/ Image 

Generate PDF/JPG/JPEG/PNG files having dynamic details with this node. 


![](https://i.imgur.com/eQvbk2I.png)


Steps to generate dynamic documents:

1. **Upload a template document**: This document should be in .docx format and have placeholder values wherever the dynamic data is to be inserted. The placeholder should be enclosed in single brackets, that is`{placeholdername}`. For example, The company name is {company name}.
2. **Map placeholder names to variables**: Enter the placeholder name without the brackets in the left column and select a variable value in the right column. 
3. **Save to a variable**: This can now be sent through the **Send file** node. Simply choose the relevant variable from the **fetch from variable** dropdown, it will send the dynamically generated file as a PDF to the user.

-----

### 1.10 Data Formatter 

Convert data from CSV to JSON with this node.
you can ask and store the CSV data in any variable and change it to JSON using the data formatter node. The formatted value can be stored in a variable of type array or object and be displayed using another node. 

![](https://i.imgur.com/X20qA35.png)

-----

### 1.11 Payment

(Currently unavailable.)

Generate a payment link with this node. 

---

### 1.12 Switch Flow 

(Currently unavailable.)

Quit the current flow and launch another flow with this node. Here, flow switches to another flow from that point (one cannot have any nodes post this).

---

## <a name="cb"></a> 2. Code Based 


### 2.1 API 

API action node allows you to hit an API at that point of the flow, assign dynamic API parameters (if any) from user inputs and then store API response in a variable for further use. 

![](https://i.imgur.com/E0pFw7e.png)

In the above node, we selected an API (explore_car) to hit, and we provided value to the parameter using a variable. 
Then we store the whole response we will get from that API in a variable.

<!--- 
> Learn how to directly use this variable, if JSON response in your nodes to access different fields in API response [**here**](../bot-variables#advanced-example---accessing-variable-fields-and-index-in-json-object-array-type-stored-in-a-variable)
--->

#### Function (optional field)

 Sometimes, an API response can be too big, or not in a proper format for us to be able to parse easily. (A function is not needed just to access a simple field of a JSON API response). 
In those cases, we can write a [function](http://localhost:3000/docs/platform_concepts/studio/build/code#3-functions-in-flow) to parse and transform API response according to our needs and return desirable response. 

#### Snippet for function
```
return new Promise
  (resolve => {

    // For transfromation function tagged in API Node, To fetch api response
    const response = ymLib.args.apiResponse;

    // Your logic here 

    // Any value returned (or promisified value) - is stored in bot Variable storing API response
    
    return resolve(<parsed response>);
  });         
       

```

> **Note**: To be able to invoke an API at a certain point, it should already be added/configured at the API management section of the platform. All APIs added there are available in dropdown of the action node. [Click here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) to learn how to add APIs.

![](https://i.imgur.com/dklBqQZ.jpg)

-----

### 2.2 Variables 

Set the value of one or more variables with this node. Learn how to create a variable [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).
> If the value is blank, it will be set to an empty string.

![](https://i.imgur.com/FTDanHl.png)

-----

### 2.3 Database 

Database action node helps you in performing simple insert, update and search operations on your [database tables](https://docs.yellow.ai/docs/platform_concepts/studio/database). 

#### 1. Insert
You select the insert operation to insert details in each column into any existing database table you select. 

![](https://i.imgur.com/Tb0EHym.png)

You can collect the entered information and store it in the new record (by adding a new record to the existing database table).


<!---

#### Bulk Insert

You can perform a bulk insert into database instead adding details of just one row at a time. 
Select a variable containing data you want to insert. 

![](https://i.imgur.com/eLowVBI.png)

-->

#### 2. Search
You can perform the search operation for database node. 


1. **Select Table**: For searching, you can **select a table** you want to perform a search on. 
2. **Add filter**: You can also add filters to your search. 
3. **Sort Response**: Sort the entered information. 

![](https://i.imgur.com/Y92xIGt.png)

##### Filter 

Each of the following filter conditions are explained for the use-case when the user enters a date : 15/aug/2022

* **Is** : searches for the exact match. Eg: To search how many times 15/aug/2022 is entered. 

*  **Contains** : This will be matched if it contains the given value. Eg: contains 08 (august), any date with 08 will be searched 10/aug/2022, 25/aug/2005, so on.

*  **Does not contain**: This will be matched if it does not contain the given value. Eg: Does not contain aug/2022, all the available dates that are not from August 2022 will be searched.

*  **Range**: In range you can enter a `from` and `to` value as a filter. Eg: date `from`:'10' `to`: '20'.

##### And / Or Filter 

* You can add another filter which compares both the filter with and/or condition. 
* **And**: Search will display results only when both the filters are true. 
* **Or**: Search will display results if either of the filters holds true. 

![](https://i.imgur.com/nAU53aM.png)


3. **Output** : You can sort the output based on a string type column (optional), modify the size of output (maximum no. of records to fetch) and store this result in a variable.

##### Sort Response 

* Select the column name you want to sort and click ASC/DEC (this will sort the info in the table in ascending/descending order based on that column).

![](https://i.imgur.com/GUMXUfd.png)


##### More Options 

* **Filter distinct** : Select a column on which distinct must be performed (this removes all the duplicate records when retrieving the records from a table).
* **Pagination** :Page number and Size limit can be set here.

#### 3. Update

Update option in the database node can be used to update values stored in the tables following the given steps:
1. Select update option in database node.
2. Select the name of the table.
3. You can add a where condition that acts as condition that has to be met in order to update the value.
4. In Update with :
  - In Fields add the name of column.
  - In with value add the variable storing the value that you want to update current.

<img src="https://i.imgur.com/o7lvCdC.png" alt="drawing" width="50%"/>

--------

### 2.4 Function 

Execute custom code written for a function with this node. In this node, you can select the function you wish to execute and [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) to store the return value of a function (optional).


![](https://i.imgur.com/v4HNlCq.png)
 
-----

### 2.5 Modifier 

Modify input variable or text to lowercase, capitalize, remove from the end, replace with’ and store the modified value using this node. 
This node can be used when you want to modify some user input before entering them to a Database or pass them to an API node, or fetch from API and show them to user etc.


You can also test your series of modifiers by entering different input strings to check whether you are getting the desired output in the test window shown below. 

![](https://i.imgur.com/EbhyWqD.png)

-----

### 2.6 Connect TransXT 

(This node is Currently unavailable.)


Connect TransXT function with this node.  

---

## <a name="lang"></a>  3. Language & Notification

### 3.1 Set Language 

Change the bot language to any of the configured languages using this node. 


Set language action node takes only one input - variable containing **ISO code** of language you wish to change to.  Arrange the nodes as follows:

* Configure a node to ask for a valid ISO code (only languages configured with the bot are allowed) and store the value in the variable. You can use a question node for this. [Click here](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported) for the list of languages that we support.
* Connect the **Set Language node** to the node that takes ISO input. Select the variable in which the previous reply is stored. 
This language will be permanently set (currently set 2 days of expiry), unless it is being changed by same action node only.

![](https://i.imgur.com/1jPB6iz.png)

> Language can only be changed to only if that language is configured in bot settings, otherwise, the node will fail. 

---

Notification Nodes (Outbound Notification, Notification Status and Voice Call) are currently not in use. 
Coming soon!

### 3.2 Outbound Notification 

Send outbound SMS, email, WhatsApp, and voice notification with this node. 

---

### 3.3 Notification Status 

Check outbound notification status with this node. 

---

### 3.4 Voice Call 

Make voice calls with this node.

---

## <a name="wf"></a> 4. Workflow nodes

> These nodes are only available when a flow is created as a [workflow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys#3-workflow). 


### 4.1 Sync Database

This node enables bulk operations like "Import, Insert, Update" on tables (of bigger databases) from external data sources through APIs instead of updating them manually. You can also schedule database updates.

#### Usage

Follow the steps below: 

1. Create a [Schedule Event](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#sch-1) (if there is a requirement to schedule the database updates).

![](https://i.imgur.com/QjIIo2d.png)

2. Create an [API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api). Create a table in the required format (template without any rows).

![](https://i.imgur.com/JeMgAdJ.jpg)

3. Create/open a [workflow](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys#3-workflow). On the start node, select the scheduled event as the start trigger. 

![](https://i.imgur.com/BpOb6o5.png)

4. Connect the start node to the Sync Database node. 
5. Select the API, Table and appropriate action.
    - **Insert**: Adds rows from API call to the end of the table.
    - **Update**: Compares rows from API call to the existing table and checks if there is a match in Unique ID and updates those rows.
    - **Import**: Truncates existing table completely and replaces it with data from API call.

![](https://i.imgur.com/SsJcSCp.png)

6. When this is triggered, the node pulls all the data through API. 

> Data is supported only in CSV format.
> There is no restriction on the file size. 
> All the rows will be imported, processed and sent to the selected table to perform the selected action.

**(Optional)**

7. Configure a parser function where individual row attributes could be accessed with a custom code: 

```
return new Promise(resolve => {
  let record = ymLib.args.record;
  /*
    record is an object, representing a row. all values will be of type string, keys will be fetched from the csv-header.
  */
  resolve({
    identifier: record.identifier,
    category: record.category
  });
});
```

8. On the scheduled time, status of the sync can be viewed in "status" object.

```
{
success: true,
error : 'if any, we show it',
recordsProcessed: 1230,
}
```