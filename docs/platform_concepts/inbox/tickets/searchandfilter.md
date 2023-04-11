---
title: Search, sort and filter tickets
sidebar_label : Search and filter
---

In this article, you will learn how to [search](#1), [sort](#2), and [filter](#3) the email tickets. 




## <a name="2"></a>  1. Sort the tickets based on dates 

You can sort the list of tickets based on: 
- **Due Date**:  The latest date for the agent's response  
- **Date Created**: The date when the ticket was created  
- **Modified Date**: The date when the ticket was last updated  

> You can further sort the ticket list in either **ascending** or **descending** order of the ticket ID.
    
![](https://i.imgur.com/CQXyAuc.png)


------

## <a name="3"></a>  2. Filters email tickets 

With **Filters** you can refine the ticket list according to a particular condition. 

### 2.1 Add filters on tickets page 

1. Go to the **All tickets** list. Click **Filters**.

    ![](https://i.imgur.com/JfC2BcA.png)


2. You can filter tickets based on the following: 

    | Name | Description |
    |:-------- |:--------:|
    | **Created date** | Refines the ticket list by start & end date |
    | **Tags** | Filters by tag assigned to a ticket |
    | **Groups** | Filters by the group the ticket is assigned to | 
    | **Agents** | Filters by an agent who is handling a ticket |
    | **Status** | Filters by the status of the ticket |
    | **Priority** | Filters the ticket list based on priority |
    | **Due Date** | Filters by the date the ticket is due for the agent's action |
    | **Response/Resolution due by** | Filters ticket according to the selected SLA condition |

3. Click **Apply Filter** to see the results.
    ![](https://i.imgur.com/aQDOmXO.png)


:::note
Currently, it is not possible to conduct a keyword search within the filtered results.
:::

### 2.2 Clear filters on tickets page 

Follow either of the following to clear the applied filters:

- At the bottom of the filters panel, click **Clear filters** to remove all the applied filters.
<img src="https://i.imgur.com/m3u6jw6.png" alt="drawing" width="30%"/>

- In the results list, cancel each of the filters you want to delete or click **Clear filters** to clear all filters.
![](https://i.imgur.com/LYi5O86.png)


-------

## <a name="1"></a>  3. Search for/within a ticket 

:::note
* **Admins** have the ability to search for any ticket.
* **Collaborators** and **supervisors** can only search for tickets that were created within the group they have access to.
* **Agents** can only search for tickets that they have been assigned to or resolved.
:::


The search functionality offers two search categories:

1. **Ticket details**: This category allows you to search for email subject, ticket ID, customer's email ID, custom fields (except the type [number and date](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields#-21-types-of-custom-fields)) and other details related to the ticket.
2. **Message details**: This category enables you to search for specific keywords contained within the email body.

The search feature provides several options, like:

* **Recently searched** keywords will appear when you access the search bar.
* The **top five results** related to the keyword within the ticket details will be displayed when you enter a keyword into the search bar.
* Click on **Try message search**, to conduct a keyword search within the email body directly. 
* Click on **See all results**, to view all the search results related to the keyword entered.
    ![](https://i.imgur.com/t50W6bd.png)

### 3.1 Ticket and message details search results page

Upon clicking **See all results**, you will be directed to the results page, where you can choose to view the matches found in either the **Ticket** details or **Message** details. 
- The screen will **highlight** the entered keyword in yellow, allowing you to easily identify the matches. Examples of highlighted matches include the ticket ID, message body, and more.
    ![](https://i.imgur.com/VkjFs9D.png)    
- **Custom field** match is displayed as purple box. 
    ![](https://i.imgur.com/CiqP9d1.png)
- The **filter** operation is integrated with the search functionality. It allows you to add filters or quick filters (Group, Agent name, and Ticket status) to the search results (only for ticket details), which can help refine your search further. 
    > These filters are added only for the search results. They can be deleted by clicking **Clear filters**.       
     
    ![](https://i.imgur.com/CafO3VS.png)
- In addition to filtering and searching, the results can also be **sorted** based on date. By default, the results are sorted based on the last modified date in decending order to easily access the recent tickets. 


--------

:::info

**Point to remember:**

* You can only search for keywords that are at least 2 characters long. For instance, typing "t" won't yield any results, while "tes" will.
* Search keywords are not case-sensitive, meaning that the search results will be the same regardless of whether the characters are in uppercase or lowercase.
* If you search for multiple keywords, such as "test reply," the search results will include tickets that contain either "test" or "reply," or both.
    ![](https://i.imgur.com/curnPdl.png)
* The search results will also display merged tickets.
* Bulk actions cannot be performed on the searched results.

:::