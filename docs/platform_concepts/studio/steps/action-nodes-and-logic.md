---
title: Operational/Logical steps - Action and Logic
sidebar_label: Action and Logic
---


## Action
Action nodes or Action step types are basically used whenever we need to take some action behind the scenes example database insert, API execution or document search etc. 
> To use an action node, simply add it to the flow where you want the action to be done.

### API
### Analytics
### Variables
### Database
### Functions
### Document Search
### Send Email
### Modifier
### Raise Ticket
### Set language
### Trigger Journey
### Send OTP
### Verify OTP

## Logic
### If condition

-- UPDATE CONTENT FROM HERE --


#### Database
> Assumption: You have a database set up in `database` section.


#### DB Insert
Suppose you are taking user input in some step. You want to enter this user input in a database table after it. This is where the `DB Insert` node comes in. 

You can simply,
- Add the node in flow
- Select the table you want Database insertion for
- Select the field (column) and value from value dropdown.
    - Values dropdown includes input taking steps in the journey, business profile details, or sender/channel info.

Like in below example, we are taking `book_name` field from `bookName` step and inserting it into books table. 
![](https://i.imgur.com/stGRNm6.gif)

> :pushpin: You can select multiple fields in a table for DB insert. But for different tables, you need to have different DB insert nodes. 



#### API 
API action node allows you to hit an API at that point of the flow, assign dynamic API parameters (if any) and then store API response in a variable for further use. 
![](https://i.imgur.com/5zvKnCW.jpg)

:::info
Learn how to directly use this variable in your steps to access different fields in API response [**here**](https://docs.yellowmessenger.com/docs/howtos/basics/variables-in-UI)
:::

:::warning
:pushpin: **Note**: To be able to invoke an API at certain point, it should already be added/configured at API management section of platform. All APIs added there are available in dropdown of the action node.

[Click here to learn how to add APIs](https://docs.yellowmessenger.com/docs/howtos/create/api-management)


![](https://i.imgur.com/ENGKa8e.jpg)

:::








---