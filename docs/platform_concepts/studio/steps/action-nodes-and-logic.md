---
title: Operational/Logical Nodes - Action and Logic
sidebar_label: Action and Logic
---


## Action
Action nodes are used whenever we need to take some action behind the scenes example database insert, API execution or document search etc. 
> To use an action node, simply add it to the flow where you want the action to be done.

![](https://i.imgur.com/aBB6iDw.png)

---
### 1. API

API action node allows you to hit an API at that point of the flow, assign dynamic API parameters (if any) from user inputs and then store API response in a variable for further use. 

![](https://i.imgur.com/gh4hTyr.png)

In above node, we selected an API (explore_car) to hit, we provided value to parameter using variable. 
Then we store the whole response we will get from that API in a variable.
>:information_source: Learn how to directly use this variable, if JSON response in your nodes to access different fields in API response [**here**](../bot-variables#advanced-example---accessing-variable-fields-and-index-in-json-object-array-type-stored-in-a-variable)

:computer:  **`Optional field`** : **`Transformation function`**
 Sometimes, an API response can be too big , or not in a proper format for us to be able to parse from easily. (Note that a function is not needed just to access a simple field of a JSON API response). 
In those cases, we can write a function to parse and transform API response according to our needs and return desirable response. 

**Snippet for Transformation function**
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


:::warning
:pushpin: **Note**: To be able to invoke an API at certain point, it should already be added/configured at API management section of platform. All APIs added there are available in dropdown of the action node.

[Click here to learn how to add APIs](../api-management/add-api)


![](https://i.imgur.com/ENGKa8e.jpg)

:::

---

### 2. Analytics
Analytics node can be used to sent analytics events at any point in the execution of journey. You type the event name to push and select value. 
![](https://i.imgur.com/ZrlJRWi.png)

---

### 3. Variables
Variables node can be used to set value of one or more variables at any point in the node. ([Learn how to create a variable](../bot-variables))
> :information_source: If you leave value blank, it will set to empty string

![](https://i.imgur.com/f0mF278.png)

---

### 4. Database
Database action node helps you in perform simple insert and search operations on your [database tables](../../data/create-tables). 

*  **Insert**
You select insert operation to insert details against each column into any database table you select. 
![](https://i.imgur.com/Bs3DcfA.png)

*  **Bulk Insert**
You can also do bulk insert in database instead of just one row at a time. All you need on this node is to select a variable containing data you want to insert. 
[To be updated]

![](https://i.imgur.com/8rnAtQ9.png)

*  **Search**
You can also perform search operation in database node. 

![](https://i.imgur.com/9yCz0DD.png)


1. For searching, you can **select a table** you want to perform search on. 
2. **Add filter**: You can also add filters to your search (optional). 

Following filter conditons are available,
let's understand with examples of what all will match with '**`Model car`**' string - 

**a**. **Is/Is not** : for exactly matching/exactly not matching with value given. 
Eg: 'Model car' will be matched 

**b**. **contains/does not contain** : will be matched/omitted if it contains the given value
Eg: 'Model car', 'this is a Model car', 'Model car 101' all will be matched/omitted

**c**. **contains any/does not contain any**: this is like above, but here each word will be matched/omitted as contains instead of whole phrase. 
Eg: 'Model car', 'Model', 'car', 'this is a Model', 'car 242' etc all will be matched

**d**. **range**: In range you can enter a `from` and `to` value as a filter. 
Eg: prince `from`:'1000' `to`:5000

3. **Output** : You can sort the output based on a string type column (optional), modify the size of output (maximum no. of records to fetch) and store this result in a variable.
 




---

### 5. Functions
You can use function node to excute code at any point in the flow. 
In this node you can select the function you wish to execute and variable to store the return value of function in (optional).
> :information_source: Learn [here](../cloud-function) about different methods/args you can use in functions. 

![](https://i.imgur.com/hCnAPvz.png)

---


### 6. Document Search
Document Search action node is used to answer user query at any point in the flow (or fallback) from documents uploaded in the [knowledge base](../../knowledge-management/what-is-document-cognition).  (This node shows results from document cognition)

![](https://i.imgur.com/0V43oWI.png)

- You can select a variable containing search query
- You can also choose too add metadata filters (optional) to your query (the filters you tagged your documents with will show in dropdown). 
- You can branch flow from here based on whether any results were found in the documents (success) or not (failure).
- There is no store output here, as the results are directly shown in carousals. 
- In node settings, you can configure total no. of results shown, total number of results per document and messages shown while showing results/reporting failure. 

![](https://i.imgur.com/cu1uk7M.png)

---

### 7. Send Email
> To be updated

---

### 8. Modifier

Modifier node is used to perform a series of simple operations like lower case, capitilise, remove from end, replace with etc on input variable and store the 'modified' output. This node can be quick used when you want to say, modify some user input before entering to DB or pass to API node, or fetch from API and show to user etc.

> :information_source:  You can also test your series of modifiers by entering different input strings to check whether you are getting desired output in test window shown below. 

![](https://i.imgur.com/ENukZvc.png)

---

### 9. Raise Ticket

Raise ticket is used in order to connect user to the human agent. Raise Ticket Node can be found in Actions List - 
![](https://cdn.yellowmessenger.com/06DOgJSptFtI1625671454725.png)

This simple UI node can be used to setup basic & advanced scenarios such as Working Hours, Agent Availibiity, voice/video calling, etc required to create a ticket.

**Raise Ticket Outputs** - 
**1. Ticket Closed** - This essentially is bot behaviour after the Agent closes a ticket (i.e. s/he has resolved user query).
**2. Error** - This can be used as a generic message in any case ticket creation is not successful. For customised messages, specific errors event hub can be configured.


![](https://cdn.yellowmessenger.com/rppNdLtUR4MN1625671670507.png)

While raising a ticket, you can pass certain optional fields such as **Name** , **Contact** (Email/Phone Number), and **Query**. Message after Ticket Assignment will be seen by user on getting connected to the agent.

**Advanced Options** - to provide additional information to the ticket.

![](https://cdn.yellowmessenger.com/4RHn4Fh3AzoS1625672881317.png)

As configured in Inbox Settings, Tags and Custom Fields will be visible in a multi-select dropdown(i.e. more than one options can be added to ticket)

- **Tags** - Selected Tags from dropdown will be added to the extra details of the ticket (useful for agents to get a quick overview of the issue).

- **Department** - Similar tickets can be assigned to relevant departments.

- **Priority** - Denotes the priority of ticket from high, medium or low. (default priority is MEDIUM)

- **Voice Call Options** - Voice Call, SIP Call and Auto Start Call can be enabled.

- **Custom Fields** - Based on the use case additonal information collected by bot can be added to ticket. for example, in ecommerce Order ID, Payment Mode, Delivery date etc can be asked before connecting to the agent. Just like key value pairs, once a custom field is selected, additional prompt will be seen.

![](https://cdn.yellowmessenger.com/iE4ppldmrE7k1625673583277.png)

**Error Handling**

Output of Raise Ticket Node dictates general behaviour for any error in creating a ticket. In most real life scenarios, it is preferred to show appropriate reason to user as to why they cannot to an agent. 

> **Note** : Once any specific event is active and configured, the corresponding flow will be given preference.


Follow two steps to handle custom scenarios -
1. In Event Hub, activate the custom inbox event.
> Scenarios that can be handled - 
  All Available Agents Busy
  All Available Agents Away
  All Available Agents Offline
  All Available Agents Limit Reached
  Queue Not Enabled
  Group Queue Not Enabled
  Group Queue Limit Reached
  Offline Ticketing Not Enabled
  Offline Ticketing Not Enabled for Groups
  Offline Ticket Queue Limit Reached

2. Build a Flow with relevant event added in the Start Trigger.

**Working Hours**

If bot is suppose to respond with a different message outside of agent working hours, Working Hours in **Logc Node** can be used. 

![](https://cdn.yellowmessenger.com/ciDa5Gn2ZzbK1625675537775.png)

> Note : The bot default timezone considered while evalutaing whether a user is outside working hours.

---

### 10. Set language
You can use Set language action node to set or change the bot language at any given point in the flow. Set language action node takes only one input - variable containing ISO code of language you wish to change to. 

![](https://i.imgur.com/kNWdMP4.png)

> :warning: Language can only be changed to only if that language is configured in bot settings, otherwise the node will fail. 


### 11. Trigger Journey
Trigger Journey action node can be used to trigger another journey at any point in the flow. 
> :information_source: If you add more nodes after trigger journey, the bot will return to the remaining flow in the journey after triggered journey ins completed. 

![](https://i.imgur.com/60xWXCn.png)

---

### 12.Send OTP and verify OTP
Send OTP and Verify OTP are simple nodes that can be used for sending and verifying OTPs. 
In verify otp node, you can also branch the flow based on verification success and failure. 

 ![](https://i.imgur.com/PedjC6o.png)
 
![](https://i.imgur.com/aRvqus8.png)

---

## Logic
### If condition
Using this condition node, you can branch flow based on multiple conditions. There are a variety of conditions available , as well as multiple things you can compare with.  

![](https://i.imgur.com/sSq1fSG.png)


---