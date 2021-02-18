---
title: Response types - Action, Logic
sidebar_label: Response types - Action, Logic
---


## Action
Action nodes or Action response types are basically used whenever we need to take some action - not send something to user, not receive something from user - but take a backend action. 
Action nodes include - API, Analytics, Database operations, and Memory nodes. 
These nodes often help us manage actions in a flow which are configured in some other section. Let's understand each of these better.
> To use an action node, simply add it to the flow where you want the action to be done.

### Database
> Assumption: You have a database set up in `database` section.


Database actions taken in a flow can be of three types: 
* Insert 
* Fetch/Search

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

#### DB Fetch
> to be updated

---

### Function 
Function action node allows you to use a function from code in your flow and pass any function arguments needed. 
The purpose of this is simply to bring in your function at the exact point in flow you need it. To write/view the function, you'll need to visit code section.
![](https://i.imgur.com/tTMV0AJ.jpg)


### API 

### Memory 

### Analytics
With Analytics node, you can push an event to analytics with some value
![](https://i.imgur.com/HJNKw6c.jpg)

## Logic 
Logic is another response time which contains IF condition action node. 
This can help you branch your flow based on conditions. 


![](https://i.imgur.com/fJ3oqcv.gif)

A simple example is shown below,
![](https://i.imgur.com/vNrajS7.jpg)
---