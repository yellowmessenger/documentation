---
title: Understanding how chat search works 
sidebar_label :  Chat search and filters
---

This document explains how the search works in the chats section when an agent or an admin desires to look into a particular chat for more information about the user, how the chat started, what was the bot user looking for, etc.
- **Search** the entire chat inbox for a particular input like ticket ID, customer details, etc. You can also apply filters on top of the global search results to further refine them. 
- You can apply **filters** like date, agent in their current chat tab, etc.  

    
In this article, you will learn:
1. [How to search chats?](#search) 
2. [How to filter chats?](#filter)
   

> To navigating to the Chats section, click **Overview** > **Inbox**. Select **Chats**.   
> 
> ![](https://i.imgur.com/sQvGw89.png)


:::info
**Global search**

The search function by default is global which means that the entire chat list of an agent is searched. Searches for the input keyword will be fetched from all of the agent's tickets whereas filtering is local (which means that the results obtained from the search can be further refined for a particular keyword or data). 
For example, you can refine the list of chats in the current tab - my chats, resolved chats, etc.
:::

> On the chats section, you can find **Chats list**, **Message pane**, and **Details list**.
>
> ![](https://i.imgur.com/m0FfeXj.png)

## <a name="search"></a> 1. Search chats

There is a search and several filtering options to help you find messages, live chat request info, description, and other info shared in chats.

<img src="https://i.imgur.com/M7G5NVg.png" alt="drawing" width="80%"/>  

Start any search from the search box at the top of the chats page. When you type a keyword, ticket ID, or description, chats will show all related results. 
Either choose one of the suggested results or press Enter to get a full list.

You will see a list below the search bar of the chats page. Choose one of the chats to get a full view in the middle message pane.

When searching globally through the entire list of chats, there are two types of the search process:

* Details Search
* Message Search

:::info
information_source: Once a user starts searching, the default tabs would change to two fixed tabs - Details search and Message Search.
:::


![](https://i.imgur.com/jMGLHEf.png)


### 1.1 Details search

Details search provides results from chat meta details like name, ticket ID, description, etc, which searches from the details pane. The results can be changed based on the search items you are looking for. The following can be searched for using in details search:

- Ticket No
- Description
- Note
- Contact name
- Contact email
- Contact phone
- Custom Field - All fields except radio buttons, checkboxes, tags, etc., can be searched (i.e multiple selectable options are not available).

The search result changes when you switch from details to message search.

### 1.2 Message search

This search shows results from content within the conversation i.e searches the keyword you are looking for within the messages.

![](https://i.imgur.com/BiIMpqO.png)

The keyword "agent" is searched from the entire list of chat messages and gives the exact place of the keyword in the conversation which will be highlighted for a quick view.


## <a name="filter"></a> 2. Filter chats

Filters enable you to search your chat list to quickly find specific messages to and from your customers. Filters make it particularly easy to find things like keywords, the exact needs of a user, etc.

Filters can only be applied to the different search results:

1. **Details Search**

Filters can be applied in the details tab list based on the following options:

* Agent
* Date
* Group
* Source
* Status
* Tags


2. **Message search**

In the messages tab, the filtering option is disabled for time being as the filter icon will be disabled.

:::note
This filter is only available for Admins/supervisors. Agents will not have any filter for message searches.
:::

After searching and filtering for the data user is looking for, the user can go back to the default settings. There is a floating exit button at the bottom of the search results to exit the search operation & go back to the default tabs.

<img src="https://i.imgur.com/3g6VjPW.png" alt="drawing" width="60%"/>

:::note
Clicking the 'X' icon in the search bar would only clear the search term and does not exit the search operation.
:::

When a user does a details search with a term, we will produce a label that matches the search term with the particular chat's details
For example, Description, Ticket Id, Note, etc.

1. Hovering over the labels present in the chat preview, will show the matching detail type.
2. Each label will have a size of 82px.
3. If a search result has multiple matches i.e labels, we'll show at most 3.
4. The order/priority in which these labels are shown below:

    - Ticket Id
    - Contact name
    - Contact email
    - Contact number
    - Notes
    - Description
    - Custom field


![](https://i.imgur.com/5Zjk90M.png)


The number displayed next to both the search tabs in the above image indicates the number of results found in the chat preview i.e even though the search term "dhinesh" matches 6 times (as shown in the labels), the search displays 2 chats which means that it works on the exact match only.

When a user does a message search and clicks on any of the search results, they will be taken/scrolled to that particular message in their entire conversation (each message has its message id for reference). Here the entire exchange will be highlighted as it is currently not possible to just highlight the matching term.

![](https://i.imgur.com/wZOAYsT.png)


The usage of time stamps in the search is as follows:


| Duration | Description |
|:-------- |:--------:|
| < 1 hour  |  'x' minutes ago |
| < 24 hours | 'x' hours ago |
| > 24 hours | 'x' days ago |
| > month | 'x' months ago |


A number of search results:

| Number | Usage |
|:-------- |:--------:|
| 0 - 999  |  The same number Eg: If the number is 851, the same number will be used |
| 1000 - 1999 | 1k+ |
| 2000 - 2999 | 2k+ |
| 999000 - 999999 | 999k+ |
| > 1000000 | 1M+ |


:::note
- If a user searches with more than 1 term, the result should be an OR operation.

- Agents can only search for the tickets that are assigned to/transferred/collaborated with them while Admins can search for all the tickets.
:::


:::info
When you search first and apply a filter next, the filter will be applied on top of the search results. Whenever you search, it is a new operation and it is global. It'll look for matching results across all tabs irrespective of the current tab.

Whenever you first apply a filter, it'll only filter within the current tab [ My chats, Active chats, etc.,] i.e, the chats list as shown in the image below:

<img src="https://i.imgur.com/oyByMRC.png" alt="drawing" width="60%"/>  

If a user has applied some filters already and then searches for another keyword, the search will reset the applied filters and provide completely new results.
:::



### 2.1 Search details



| Description | Event | Properties |
| -------- | -------- | -------- |
| When user performs a details search on chat tickets     | chat-ticket-search     | type - details, maxRole, botId, botName, moduleName     |
|When user performs message search on chat tickets|chat-ticket-search|type - message, maxRole - Inbox Agent, Inbox Admin, Admin, botId, botName, moduleName|


## 3. Tradeoffs

When a message search result is clicked, instead of loading -100 & +100 messages from the matching part of the conversation, we'll load the entire conversation messages since we currently can't paginate the recent (bottom) messages.



:::info

**Assumption**:
Ideally, a live chat would not have 1000s of messages in it. 

**Look out for**:
Count of instances where the live chat has a large no. of messages
Increased loading time to product search results
:::


![](https://i.imgur.com/YzV8X1r.png)
