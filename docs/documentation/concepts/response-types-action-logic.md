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
* Search
* Update

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

#### DB Search

You can also perform simple database searches on YM platform without writing code using Database action Node, 'Search Action'.

* Similar to Insert node, you need to select which table you want to search in here. 
* You can add filters to this search as well , as shown in following GIF. You can filter using 5 conditions : *Contains*, *Does not contain*, *Is*, *Is Not* and *Range*. 
* Value to compare against column can be taken from a variable or a custom text can be used. 
* You can again sort the results, put limit on no. of results (columns) and store it then in a variable for further use. 
![](https://i.imgur.com/ifwcspW.gif)



#### DB Update
to be updated

---

### Function 
Function action node allows you to use a function from code in your flow and pass any function arguments needed. 
The purpose of this is simply to bring in your function at the exact point in flow you need it. To write/view the function, you'll need to visit code section.
![](https://i.imgur.com/tTMV0AJ.jpg)


### API 
API action node allows you to hit an API at that point of the flow, assign dynamic API parameters (if any) and then store API response in a variable for further use. 
![](https://i.imgur.com/5zvKnCW.jpg)

:::warning
:pushpin: **Note**: To be able to invoke an API at certain point, it should already be added/configured at API management section of platform. All APIs added there are available in dropdown of the action node.

[Click here to learn how to add APIs](https://docs.yellowmessenger.com/docs/howtos/create/api-management)


![](https://i.imgur.com/ENGKa8e.jpg)

:::



### Memory 
Memory node helps you store something temporarily. For example, if you get some input from user that you want to use in some upcoming step or same session, but do not want stored permanently, you can use this node. 
Memory node has 3 options - Set, Fetch & delete for you to do this. 
![](https://i.imgur.com/Lg9IY4T.gif)

> :pushpin: **Note** : Memory variables are available globally. For any other use case or limiting to a journey, it's recommended use simple variables. 


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