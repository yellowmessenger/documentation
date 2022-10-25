---
title: Custom fields in chat details 
sidebar_label : Custom fields
---



In this article, you will learn: 
1. [Function of custom fields.](#1)
2. [How to add custom fields?](#2)
3. [How to download custom field report?](#3)
4. [How to capture custom field event on Studio?](#4)




---


## <a name="1"></a> 1. Custom field in chat details

You can find the custom fields in the chat details. These are customized fields created by the admin to obtain additional details of the ticket based on the industry. 
Custom fields are necessary for the agent/admin to Resolve/Transfer any ticket. 

![](https://i.imgur.com/9ws77BL.png)

**What are custom fields?**

Custom fields can be added to tickets and are used to track business-specific information related to the customer like Order ID, Address, case details, etc. Custom fields enable your teams to add more information about a case and add further context, which helps with better reporting and to resolve issues faster. Custom fields are available for both chats and email (ticketing) modules.

**Access**

- **Inbox Agent** with access to edit that particular ticket will have permission to update these fields in the chat. 
- **Inbox Admins** can update/create custom fields for all the tickets. Agents can also search by custom field values (for example: searching by custom field **Country**)

![](https://i.imgur.com/6pLT9Cm.png)



## <a name="2"></a> 2. Add custom fields

Follow the given steps to add new custom fields:

1. Open **Inbox** > **Chats** > **Settings**.
2. Search and select **Custom fields**.

![](https://i.imgur.com/RS3lgWj.jpg)

3. You can add custom fields for **Chat** and **Email** tickets. Select the required tab.

![](https://i.imgur.com/mdezMvJ.png)

:::info
Chat custom fields can have **Short text** and **Long text** as read-only fields (agents will not be able to edit this value).
This is not available for Email custom fields.
:::

4. Click **+Add custom field**.
5. Add the required custom field details as per your requirement.
    - **Custom field type**: Select from the dropdown.
    
    ![](https://i.imgur.com/6BMzMfs.jpg)

    - **Field name**: Type the name that must appear on the ticket details page.
    - **Placeholder**: This is the placeholder text that appears on the input bar on the ticket details page. Example: Enter phone number here, Type user name. 
    - **Options**: If the custom field is of the type checkbox or radio button, you must enter the values in the options field by using enter key after each value. 
    
    ![](https://i.imgur.com/dgiHjOz.png)


**Types of custom fields**

|  Custom field |                          Application                         |
|:-------------:|:------------------------------------------------------------:|
| Short Text    | Short text like credit card number or order id               |
| Long Text     | Long text like Address, Detailed reason for complaint, etc                   |
| Keyword       | A single word text/ alphanumeric value                                               |
| Tags          | Predefined [tags](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags/) like product category                        |
| Checkbox      | Agent can select multiple values that are listed. For example following values can be listed VIP customer, Sales, IT department, and the agent can select one or many of the relevant values |
| Radio buttons | Agent can select only one value from the defined list. For example Location, Store name |
| Email         | Any email ID                                                 |
| Number        | Any numerical /decimal value like an amount                           |
| Phone         | Contact number. Example: Customer’s emergency contact            |
| Date          | Any date value. Example: Date of return of the item, Order placement date             |
|Hierarchical |When there are multiple levels of information, you can use this field |

:::info
**Hierarchical custom field**
For example, when the customer sends "Charging broken", the agent can obtain the product details (Laptop/Mobile) and assign it to a component (Charger) and find a resolution for that component. 

![](https://i.imgur.com/HgH1VrT.png)
:::

6. Click **Create**. Once these fields are added, they will be listed on the ticket/chat details section on the right sidebar.


### 2.1 Transfer/Resolve chat ticket

For chat disposition with custom fields, you must mark the below checkboxes: 

1. Required to create ticket- A ticket cant is created if this field value is not entered. 
2. Required to transfer ticket- This value must be entered by the agent to transfer the ticket to another agent. 
3. Required to close ticket- This value must be entered by the agent if the ticket must be closed. 

![](https://i.imgur.com/e5TbTK6.png)

If these checkboxes are marked, the agent can not dispose of the chat without providing a value for the custom field.

![](https://i.imgur.com/gb1Fcyw.png)


## <a name="3"></a>  3. Download custom fields report

There is a column dedicated to each custom field in the [chat archives report](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/chats/chat-archives-report).


 ![Custom field reports](https://cdn.yellowmessenger.com/5JZOkYaOM9KO1635072241566.jpg)

> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/reports) to learn to download the chat archive report. 

## <a name="4"></a>  4. Automation on custom fields

When a custom field is updated, the app sends an event **ticket-update** with changeType **change_custom_field**, you can capture this event in Builder/Studio on [Event Hub](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#inb-1) to develop automation flows following custom field updates.
For example: Updating an order in Shopify when the order ID custom field is updated in Yellow AI.