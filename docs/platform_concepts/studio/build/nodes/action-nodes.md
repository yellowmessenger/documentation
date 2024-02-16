---
title: Action Nodes
sidebar_label: Actions
---

You can use Action nodes to perform a specific task. For example, you can use the **Send OTP** node to send out an OTP to the user.

:::info
Action nodes will not display any message to the user during conversation, they run the configured tasks in the background.
:::

The following are the different types of Action nodes available on Yellow.ai:

1. [Interactive nodes](#1-interactive-nodes)
2. [Code Based](#2-code-based-nodes)
3. [Language & Notification](#3-nodes-for-language--notification)
4. [Skill nodes](#4-workflow-nodes)

## 1. Interactive nodes

Interactive nodes lets you manage and improve bot conversations. These nodes help you trigger events, handle OTPs, search documents and respond to user queries, execute flows within flows, delay implementation, ticket generation, analytics capture, PDF/image generation, user event triggering, data formatting, and flow switching.

### 1.1 Send Event

Record an event with this node. 
Events are used to record specific actions or capture an important conversion, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub) to learn more.

![](https://i.imgur.com/6obnCs8.png)

----

### 1.2 Send OTP

This node lets you send an OTP to the mentioned number. 

:::info
One-Time Passwords (OTPs) serves as a versatile security measure, enhancing user authentication in scenarios such as user registration, account recovery, two-factor authentication (2FA), transaction verification, login security, identity verification, secure messaging, device pairing, coupon redemption, and attendance tracking.
:::

1. Use the [prompt node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to capture the phone number from the user and store that phone number in a variable.

   ![](https://i.imgur.com/xgQ2A5t.png)

2. Add the **Send OTP node** and choose the variable in which the phone number is stored (in the previous step).

   <img src="https://i.imgur.com/StadUVa.png" alt="drawing" width="80%"/>
   
  The user will recieve the OTP in a text message.
  
  <img src="https://i.imgur.com/mDlVuCn.jpg" alt="drawing" width="50%"/>

### 1.3 Verify OTP

Use this node to verify the OTP sent to bot users. OTP verification is an important security measure that is used to confirm user identity during various processes.

1. Add a [prompt node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to get the OTP and store that in a variable.

   ![](https://i.imgur.com/xgQ2A5t.png)

2. Add the **Verify OTP** node.

     * **OTP variable**: Choose the variable that contains the otp.
     * **Store response in**: Choose the variable to store the response of the Verify OTP node. If the variable is not available, create a new one.

   <img src="https://i.imgur.com/e0tytJq.png" alt="drawing" width="80%"/>

3. Add a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-text) to **Success** and **Fallback**. Success indicates the successful verification of the otp, Fallback indicates that the verification has failed.
   
   <img src="https://i.imgur.com/T2UM4xp.png" alt="drawing" width="80%"/>

----

### 1.4 Document search

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

### 1.5 Execute flow 

> This node is available for voice bots.

This node lets you executes a different flow from the current flow. Use this node when you want to trigger a flow within a flow. 

For example, in a customer support bot, you can provide multiple options such as **Talk to an agent**, **Raise a ticket**, **Check status** and add execute flow node to each of the option. So, when a user clicks on an option, the respective flow gets triggered. 

   ![](https://i.imgur.com/A9EPpfz.png)

Once you add the node, you can choose the flow you want to execute. Click **Go to flow** to check the added flow.

### 1.6 Delay

This node allows you to delay the progression of the conversation to the next node by a few minutes or hours.

For example, in response to a user query about the current temperature, the bot incorporates a delay, imitating real-time data retrieval like "Checking the latest weather in New York City..." After a short pause, it provides the up-to-date information, creating a more effective and engaging interaction.

You can delay by minutes/hours.

   ![](https://i.imgur.com/MLyOwwi.png)
   
:::info
 Alternative method is to set the delay on each of the nodes: 
![](https://i.imgur.com/t8cBzXn.png)
:::

### 1.7 Raise Ticket

Raise ticket node lets your users connect with live agents in your bot. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox) to know more about adding live agents to Yellow.ai. You can also connect users with live chat agents in [different third-party applications](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview#6-live-chat). 

This node is used create a live chat request with basic or advanced scenarios such as **Working Hours**, **Agent Availability**, **Voice/Video calling**, etc.

   ![](https://i.imgur.com/Z8VkgD8.png)
   
 * **Live chat agent:** Choose the portal in which your live agents are available. It can be Yellow.ai Inbox or any live chat integration integrated with your bot.
 * **Message after ticket assignment:** The message displayed to the user when an agent is assigned to the chat.

Name, Mobile, Email and Query fields can be filled by passing variables. Use prompt nodes to collect these data in variables and pass it in the corresponding fields.

**Advanced options:**

To provide additional information to the ticket.

![](https://i.imgur.com/qt9Y87D.png)

As configured in Inbox Settings, [Tags](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags) and [Custom Fields](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields) will be visible in a multi-select dropdown(i.e. more than one options can be added to ticket)

- **Tags**: Selected Tags from dropdown will be added to the extra details of the ticket (useful for agents to get a quick overview of the issue).
- **Group code**: Similar tickets can be assigned to relevant groups.
- **Priority**: Denotes the priority of tickets from high, medium or low. (default priority is MEDIUM)
- **Voice Call Options**: Voice Call, SIP Call and Auto Start Call can be enabled.
- **Custom Fields**: Based on the use case additional information collected by bot can be added to ticket. for example, in eCommerce Order ID, Payment Mode, Delivery date etc can be asked before connecting to the agent. Just like key value pairs, once a custom field is selected, an additional prompt will be seen.

<img src="https://cdn.yellowmessenger.com/iE4ppldmrE7k1625673583277.png" alt="drawing" width="65%"/>

The response of a Raise ticket node:

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

#### Raise ticket outputs 

1. **Ticket Closed**: Add any node to perform the preferred action when a ticket is closed successfuly.
2. **Error**: Add any node to perform the preferred action when there's an error connecting to an agent.

   <img src="https://i.imgur.com/Fn7QnKd.png" alt="drawing" width="50%"/>

#### Error handling

The output of a Raise Ticket Node dictates general behaviour for any error in creating a ticket. In most real life scenarios, it is preferred to show appropriate reasons to users as to why they cannot to an agent. 

:::note
Once any specific event is active and configured, the corresponding flow will be given preference. Bot is never paused unless a ticket is in ASSIGNED state (i.e. Agent is interacting with the user).
:::

Two steps to handle custom scenarios are as follows:
1. In [Events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub), activate the custom inbox event. Scenarios that can be handled:
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

2.[ Build a flow with relevant events added in the Start Trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#13-trigger-flow-using-event).

#### Working hours

If the bot is supposed to respond with a different message outside of agent working hours, [Logic Node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) can be used. 

<img src="https://i.imgur.com/J3W0HWX.png" alt="drawing" width="70%"/>

:::note
The bot default timezone is considered while evaluating whether a user is outside working hours.
:::

#### Auto-translate incoming chats

Inbox supports automatic translation, allowing agents to assist customers without requiring knowledge of the customer's language. Just enable `Translate User Message` in the raise ticket node configuration to use this feature.

<img src="https://i.imgur.com/frCvffs.png" alt="drawing" width="40%"/>

### 1.8 Analytics 

This node lets you capture analytics. 

You can use the analytics node to send analytics events and capture custom events at any point in the execution of a flow.  You can type the event name to push and select a value.
 The data passed via the node will flow into the analytics table of Data Explorer inside the Insights section.
 
 For instance, use the analytics node to record a **SignUp** event with a corresponding value and keys, allowing you to analyze user interactions and track metadata in the Data Explorer's Insights section. 

**Event**: This can be a static name or a variable which will be captured under the Events column on the analytics table.

**Value**: A variable needs to be selected here which will be captured under the eventValue column.

**Keys**: This is an optional field to capture metadata and will be created as a new column. Multiple columns can be created using keys.

:::info 
Using custom events, you can analyse user flow from one flow/step to another, filter by specific custom events, summarise by different user responses, visualise drop offs and conversion funnels, etc.
:::

![](https://i.imgur.com/GlLrwaa.png)

Open the Analytics page by clicking the Analytics Table link.  

![](https://i.imgur.com/BvNwdWt.jpg)

-----

### 1.9 Generate PDF/Image 

Use this node to generate PDFs and images (JPG/JPEG/PNG) files from docsx, html and Base64 files.

#### To convert from docsx

![](https://i.imgur.com/eQvbk2I.png)

1. In **Template**, click **Upload file** and upload the template based on which the PDF should be generated. This document should be in .docx format and have placeholder values wherever the dynamic data is to be inserted. The placeholder should be enclosed in single brackets, that is`{placeholdername}`. For example, The company name is {company name}.
2. In **+ Add Variable Mapping**: Enter the placeholder name without the brackets in the left column and select a variable (in which the value is collected from the user) in the right column. 

   <img src="https://i.imgur.com/RW5UWNW.png" alt="drawing" width="60%"/>

3. **Select an output format** will be auto-populated by PDF as that's the only available option for docs.

#### To convert from HTML

![](https://i.imgur.com/IP7PcU4.png)

1. In **Select variable containing HTML string**, choose the variable that contains the HTML string.
2. In **Select an output format**, choose the format in which the file should be generated, **PDF**/**JPG**/**JPEG**/**PNG**

Enable **Advanced options** to set the margin and dimensions based on which the file should be geenrated.

  <img src="https://i.imgur.com/JTS0zZ8.png" alt="drawing" width="50%"/>

#### To convert from Base64

There are two ways by which you can convert Base64 files:

**From APIs**

  ![](https://i.imgur.com/fVfihOO.png)

1. In **Input type** choose **API**.
2. In **API**, choose the API added to your bot. If your API has dynamic paramters, add nodes to collect that information from users.
3. In **Path to a BASE64 key**, enter the path to the BASE64 key. 
4. **Select an output format** will be auto-populated by PDF as that's the only available option for docs.

**From variables**

  ![](https://i.imgur.com/L1F16Ud.png)

1. In **Input type** choose **Variable**.
2. In **Select variable**, choose the variable that contains the BASE64 file.
3. **Select an output format** will be auto-populated by PDF as that's the only available option for docs. 

Display the file though the [File node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#6-file). Simply choose the relevant variable from the **fetch from variable** dropdown, it will send the dynamically generated file as a PDF to the user.

### 1.10 User event

This node lets you trigger an event with a certain amount of delay. For example, if you can get feedback from users after the chat gets over, you can use this node to trigger that event which will trigger the feedback flow.

To use this node:

1. Create a user event. To do so, go to **Studio** > **Builder** > **User Events** > **+ Add Even**t.

 ![](https://i.imgur.com/GwSPuxH.png)

2. In **Event name**, provide a name for that event and in **Event description** descruibe the nature of that event. Click **Create Event**.
3. Go back to **Build**, create a flow with the [start trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#13-trigger-flow-using-event) as this event created in the previous step. This flow should essentially contain all the nodes required to execute the action when this event takes place.
4. Then go to the flow which should send this event and include the **User event** node.

 ![](https://i.imgur.com/VtyLltz.png)

5. Fill in the following fields:

* **Event key**: Choose the event created in step 2.
* **Event delay**: Enter the time by which the event occurence should be delayed.
* **Payload**: Choose the variable that contains the data that should be sent along with the event.

6. Once the flow reaches this node, the event is triggered, and the associated flow will be executed precisely after the specified delay time.

### 1.11 Data formatter 

Use the **Data Formatter** node to convert the incoming data to JSON. For instance, convert user input, such as name and email, into a structured JSON object for better processing in downstream applications.

![](https://i.imgur.com/X20qA35.png)

* **Input**: Create/select the variable that contains the data to be converted and select the format of the data. CSV (raw, base64, url) and XML are supported in our platform.
* **Format to**: Select JSON.
* **Parse json output**: Choose the function that filters out a certain data from the JSON. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) to know about writing functions.


----

### 1.12 Switch flow 

This node lets you quit the current flow and launch another flow. The conversation switches from the current flow to another flow from that point and you cannot add any nodes post this. 

For instance, you can use this to guide users from an initial greeting flow to a specific feedback flow, ensuring a smooth transition.

Add the node and choose the flow to which the bot should switch from the flows drop-down.

  ![](https://i.imgur.com/FnHGLKg.png)


---

### 1.13 Prompt Executor node

:::info
This node works only if you have configured an LLM model. For steps on configuring the LLM model, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#model-configuration).
:::

 The Prompt Executor node processes the prompt you provided, using input from the user. It fetches instant responses from the AI model and displays them to end users, adhering to the specified prompt.

![](https://i.imgur.com/ZKKHrQ5.png)

Use a [prompt nod](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)e to [collect the dynamic user response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables) and pass the variable in **User Query**. 

For instance, imagine you wish to share food recipes with the end user. Use a prompt node to inquire about the preferred recipe, save the response in a variable, and pass it here. The node will display the recipe for the ingredient the user asked about.

### Goal configuration settings

Here you can control randomness, sets limits for concise outputs and refine word selection based on probability. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#goal-configuration-setting) to know about this in detail.

### Model configuration

Model configuration provides you the freedom to manually input your own custom GPT or LLM credentials into the bot. You can then use various models on different dynamic nodes within the same bot independently. This grants you the flexibility to conduct extensive experiments. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#model-configuration) for the steps.

## 2. Code-based nodes

Code-based nodes allow you to execute actions such as retrieving or sending data via API responses, implementing custom logic for specific actions, and using stored variable data effectively.

### 2.1 API 

> This node is also available for voice bots. 

With the API node, you can connect to an API at a specific point in a flow to send and get responses from a third-party system outside of your chatbot.

   <img src="https://i.imgur.com/Fnsvd0z.png" alt="drawing" width="70%"/>

To know about the various features of the node and how to use it, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode).

-----

### 2.2 Variables 

> This node is available for voice bots. 

Use the variable node to assign values to a new variable which has not been previously used to collect/store data.

![](https://i.imgur.com/aZzdF0J.png)

 There are two ways by which you can assign values:

* **Assign a static value**

 1. In **Name** select a variable or [create a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).
 2. In **Value**, type the value you'd like to assign to that variable.

    <img src="https://i.imgur.com/Qh4qqPe.png" alt="drawing" width="60%"/> 

* **Assign a dynamic value**

1. In **Name**, select a variable or [create a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).
2. In **Value**, click the variable icon to fetch the variable value you'd like to assign to the variable.

   <img src="https://i.imgur.com/HzUsnqB.png" alt="drawing" width="69%"/>

For example, let's say that you have captured the **First name** and the **Last name** of a user and you want to save both the names under one variable **Full Name**.

1. Add two [prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to [capture the responses in two different variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#store-data-in-variables). 
2. Add a **Variable node**, create a new variable **Customer Name** and fetch the variable values of the prompt nodes. This **Customer Name** can then be used throughout the flow for a different use case. Refer to the gif below to understand how this works. 

![](https://i.imgur.com/B0qUAvJ.gif)

-----

### 2.3 Database 

> This node is available for voice bots. 

This node helps you perform database operations such as insert, update and search operations in your [database tables](https://docs.yellow.ai/docs/platform_concepts/studio/database). 

  <img src="https://i.imgur.com/Tb0EHym.png" alt="drawing" width="80%"/>
  

* **Insert:** Select **Insert** to insert data in each column into any existing database table you select. To know more, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database#insert-new-records-or-values-to-a-database-table). 
* **Search:** Select **Search** to look for specific data in the database. To know mroe, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database#fetch-database-records-using-the-database-node).
* **Update:** Select **Update** to update any column in the databse. For steps to do so, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/database#update-database-table-records-using-the-database-node).
--------

### 2.4 Function 

> This node is available for voice bots. 

This node lets you run custom logic written in the [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) section for specific use cases and store the result in a variable to use it in bot ocnversations.


![](https://i.imgur.com/v4HNlCq.png)

* **View function** takes you to the function chosen in the **Function** field.
* **+Create new function** button takes you to the function section where you can create a new function.
* **Store Response in** lets you store the response of the function in a variable which can later be used in the flow if required.

Function node is most commonly used to fetch transformation codes that parses API responses to filter specific data. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/api/send-receive-apiresponses#parse-api-response-using-function-node) for the steps to use this node.
 
-----

### 2.5 Modifier 
 
The node lets you convert the user input to a certain format before passing it to a database/API, or displaying it to the user. Use **Store Response in** option in this node to store the modified input in a variable to use it further in a flow. 

For example, let's say that you want to convert the user input to all caps. Your input would be **Test** and the would be **TEST**.

To see how this node works, click the button at the top and enter your input to observe the corresponding output.

![](https://i.imgur.com/EbhyWqD.png)

The following actions can be performed:


| Action | Description | Output type | Sample input | Sample output |
|-----------------------|-------------------------------|-------------|--------------|---------------|
| Capitalize 1st letter | Capitalizes the first letter of the input                        | String      | i am aakanksha | I am aakanksha |
| Capitalize 1st char of word | Capitalizes the first character of the input                        | String      | hi aakanksha | Hi Aakanksha |
| Lower case all | Converts all the letters of the input to lower case                        | String      | Hi AakanKsha | hi aakanksha |
| Upper case all | Converts all the letters of the input to upper case                         | String      | Hi AakanKsha | HI AAKANKSHA |
| Clean Input | Cleans the input off extra characters                        | String      | vidyadhār nāgār,jaĭpŭr | vidhyadhar nagar, jaipur |
| Add on both sides | Adds a character on both sides of the input (The length should be lesser than teh defined length) | String | Akku (x = - , y = 6) | -Akku- |
| Add at end | Adds a character at the end of the input (will be added if length is lesser than the defined length) | String | Akku (x = - , y = 6) | Akku-- |
| Add at start | Prefix the input with a character. (will be added if the length is lesser than the defined length) | String | Akku (x = - , y = 6) | --Akku |
| Replace first | Replaces the character entered in find preset with the character in replace preset at the prefix of the input. | String | abc@gmail.com (x=.,y=[dot]) | abc@gmail[dot]com |
| Replace All | Replaces the character entered in find preset with the character in replace preset at any part of the input. | String | abc@gmail.com (x=.,y=[dot]) | abc@gmail[dot]com |
| Remove from both sides | Removes the specified character from both the sides of the input| | -Akku- (x=-) | Akku |
| Remove from start | Removes the specified character from the prefix of the input | String | -Akku- (x=-) | Akku- |
| Remove from end | Removes the specified character from the suffix of the input | String | -Akku- (x=-) | -Akku |
| Limit length | The input length is restricted to the specified number in the length preset, and any additional characters beyond that are substituted with the character defined in the omission preset. | Length limit | Aakanksha Jain (x=12) | Aakanksha Ja... |
| Slice | Provides the input between the set positions | Array | [1,2,3,4,5] (2,4) | 3 |Slice|
|Split by space|Splits the input into arrays|Array|tree house|["tree", "house"]
|Split into words|The input is divided into individual words based on the character specified in the preset.| Array|treehouse ,| ["tree", "house"]|
| Join | Join the input array with the character in preset | String | ["My", "Name", "is", "Aakanksha"] (with = '-') | My-Name-is-Aakanksha |
|Pick by position|Picks the word in the array in the specified position| String | ["My", "Name", "is", "Aakanksha"]  (3)| is
|Get length|Returns an array's length |String | []"My", "Name", "is", "Aakanksha"]| 4|
| For each | Apply modifier options on each element of the array | Select modifier | ["My", "Name", "is", "Aakanksha"] (operation = Upper case all) | ["MY", "NAME", "IS", "AAKANKSHA"] |  

---

## <a name="lang"></a>  3. Nodes for language & notification

### 3.1 Set language 

Change the bot language to any of the configured languages using this node. 


Set language action node takes only one input - variable containing **ISO code** of language you wish to change to.  Arrange the nodes as follows:

* Configure a node to ask for a valid ISO code (only languages configured with the bot are allowed) and store the value in the variable. You can use a question node for this. [Click here](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#1-supported-languages) for the list of languages that we support.
* Connect the **Set Language node** to the node that takes ISO input. Select the variable in which the previous reply is stored. 
This language will be permanently set (currently set 2 days of expiry), unless it is being changed by same action node only.

![](https://i.imgur.com/1jPB6iz.png)

:::note
Language can only be changed to only if that language is configured in bot settings, otherwise, the node will fail. 
:::

---

### 3.2 Outbound notification

You can integrate an Outbound Notification node into your bot flows to seamlessly send messages to your bot users across various channels. This dynamic node enables you to send SMS, email, WhatsApp, and voice notifications. Within the bot's flow, you can select your preferred sender ID, manage CC and BCC recipients, and choose from a variety of templates.



To know more,  See [Outbound notifications or Workflow campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign).

Here is how you can configure the Outbound notification node:

  <center><img src="https://i.imgur.com/7GEgUGE.png" width="70%"/></center>

Option | Description
------ | ----------
Type | Choose the type of communication you want to send: SMS, Email, WhatsApp, or Voice.
Sender | Choose the sender ID from which you want to send the communication.
Profile | Select the sender for the SMS notification. Applicable only for SMS in India.
To | Choose the appropriate variable containing the recipient details, example, SMS phone number, Email address, etc.
CC | Choose recipients for CC (Carbon Copy) if needed. Applicable only for email.
BCC | Choose recipients for BCC (Blind Carbon Copy) if needed. This allows you to include additional recipients without exposing their email addresses to other recipients. Applicable only for email.
Select template | Pick a template to use for your communication.
Store message ID in | Select the variable where you would like to store the Message ID after it has been sent.




---

### 3.3 Notification status

The Notification status node helps you track the delivery and status of your [outbound notifications](#32-outbound-notification). It uses the **Message ID** to retrive the notification status. The node offers valuable insights, such as delivery confirmation, read receipts, or error notifications, depending on the capabilities of the communication channel. 

You can make use of message status (Sent/Delivered) to take appropriate actions based on the status of your outbound notification, ensuring effective and responsive communication with your audience.

 <center> <img src="https://i.imgur.com/rHvs8mM.png" width="70%"/></center>

Option | Description
------ | ----------
**Type:** | Choose the specific type of communication you wish to track: SMS, Email, WhatsApp, or Voice.
**Message ID:** | Choose the Message ID variable associated with the sent communication. Selecting the message ID retrieves real-time information about the status of that specific communication.
**Sent**/**Delivered** | You can see this node level options to configure desired action for each status.

:::note
To know more about Outbound notifications, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).
:::

---

### 3.4 Voice call 

> This node is not in use. 


---

## <a name="wf"></a> 4. Workflow nodes

:::info
These nodes are only available when a flow is created as a [workflow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#workflow). 
:::

### 4.1 Sync database

The Sync database node is an action workflow node that lets you sync the bot tables with external databases in real-time. It is useful when the data in the bot tables needs to be updated frequently, and manual editing becomes tedious and non-scalable. The Sync database node enables users to connect any bot table to an external database through APIs.


1. Create a [Schedule Event](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#sch-1) (if there is a requirement to schedule the database updates).

![](https://i.imgur.com/QjIIo2d.png)

2. Create an [API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api). Create a table in the required format (template without any rows).

![](https://i.imgur.com/JeMgAdJ.jpg)

3. Create/open a [workflow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#workflow). On the start node, select the scheduled event as the start trigger. 

![](https://i.imgur.com/BpOb6o5.png)

4. Connect the start node to the Sync Database node.

#### Sync database node via CSV 

1. Select the API, Table and appropriate action.
    - **Insert**: Adds rows from API call to the end of the table.
    - **Update**: Compares rows from API call to the existing table and checks if there is a match in Unique ID and updates those rows.
    - **Import**: Truncates existing table completely and replaces it with data from API call.

![](https://i.imgur.com/SsJcSCp.png)

#### Sync database node via JSON

1. Select the API you want to sync with the bot tables. 
2. Select the API Response Type as JSON.
3. Select the path where the relevant data lies in the JSON response. For e.g., the JSON path  for the following code would be the  is "data.results.*

```
{
      data: {
                results: {
                                 record1 :{},
                                 record2: {},
                                 ........
                 } 
       }
}
```

4. Pass the record that comes from the selected path in **Parse API response** so that the response comes in a dictionary format.
5. Select the custom variable and select the bot table where they want to store the API response.
6. Select the operation type. There are three types of operations that users can perform: Insert, Update, and Import.

* **Insert:** Insert the data as new rows to the existing table.
* **Update:** Update the existing data with the new data to update the existing rows. Users need to select the primary key. If there is a primary key match, the row will be updated else a new row will be added.
* **Import:** Truncates existing table completely and replaces it with data from API call.

:::note
1. The column names in the table should be exactly the same as the attribute names in the JSON response.
2. You can also refer this video for further clarity.

[![Sync DB node](https://cdn.loom.com/sessions/thumbnails/1e7104db203c4061a5d6839ea515198e-with-play.gif)](https://www.loom.com/share/1e7104db203c4061a5d6839ea515198e)

:::

5. When the Sync Db node gets triggered, it pulls all the data through API. 

:::note
- Data is supported only in CSV format.
- There is no restriction on the file size. 
- All the rows will be imported, processed and sent to the selected table to perform the selected action.
:::

6. On the scheduled time, status of the sync can be viewed in "status" object.

```
{
success: true,
error : 'if any, we show it',
recordsProcessed: 1230,
}
```

 Configure a parser function where individual row attributes could be accessed with a custom code: 

 **This is optional for CSV**

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