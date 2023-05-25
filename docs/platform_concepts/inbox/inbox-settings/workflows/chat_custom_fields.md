---
title: Custom fields in live chats and email tickets
sidebar_label : Custom fields
---



In this article, you will learn: 
1. [Function of custom fields.](#1)
2. [How to add custom fields?](#2)
3. [How to download custom field report?](#3)
4. [How to capture custom field event on Studio?](#4)


---


## <a name="1"></a> 1. Custom field in chat/ticket details

**What are custom fields?**

Custom fields can be added to tickets and are used to track business-specific information related to the customer like Order ID, Address, case details, etc. These are customized fields created by the admin to obtain additional details based on the industry. Custom fields enable your teams to add more information and further context about a case, which helps with better reporting and faster resolution. 
- As per the configuration, Custom fields can also be used as mandatory fields to **Resolve/Transfer** a chat/ticket.

**Where can you find custom fields?**

11 types of Custom fields are available for both live chats and email tickets.

- On the [chat](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#-2-user-details) screen, expand **Custom fields**. These are captured and passed to inbox via. **Raise ticket node > Advanced options**. 

    ![](https://i.imgur.com/9ws77BL.png)

- On the [email detailed view](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro#25-other-details) screen, expand **Ticket fields**. 

    <img src="https://i.imgur.com/PHBkbaq.png" alt="drawing" width="70%"/>


**Access**

- **Inbox Admins** can update/create and reorder custom fields for all the tickets. Agents can also search by custom field values if they are of the type short test, long text, email, number, phone and date.
- **Inbox Agent** with access to edit that particular ticket will have permission to update these custom fields in the chat/ticket screen. 
- **Inbox Supervisor** can make changes to the custom fields on chat/email screen of any inbox agents they supervise. 

    ![](https://i.imgur.com/3L9jEmR.png)



## <a name="2"></a> 2. Add custom fields 

Follow the given steps to add new custom fields:

1. Open **Inbox** > **Settings**.
2. Search and select **Custom fields**.
    ![](https://i.imgur.com/RS3lgWj.jpg)

3. You can add custom fields for **Chat** and **Email** tickets. Select the required tab.
    ![](https://i.imgur.com/mdezMvJ.png)

4. Click **+Add custom field**.
5. Add the required custom field details as per your requirement.
    - **Custom field type**: Select from the dropdown ([explained below](#cftypes))
        ![](https://i.imgur.com/6BMzMfs.jpg)
    - **Field name**: Type the name that must appear on the ticket details page.
    - **Placeholder**: This is the placeholder text that appears on the input bar on the ticket details page. Example: Enter phone number here, Type user name. 
    - **Options**: If the custom field is of the type checkbox or radio button, you must enter the values in the options field by using enter key after each value. 
    
    ![](https://i.imgur.com/dgiHjOz.png)

:::info
Chat custom fields can have **Short text** and **Long text** as read-only fields (agents will not be able to edit this value). For example, if the customers Account number is a custom field, and the data entered by the customer must not be changed by the agents, it can be marked as read-only. 
This is not available for Email custom fields.
:::

6. Click **Create**. Once these fields are added, they will be listed on the ticket/chat details section on the right sidebar.

#### Re-order custom fields as per their priorities

7. Admins can **drag** and place the custom fields in the desired order. The custom fields will be displayed in the same order in the live chat or email ticket screen. Frequently used fields can be placed at the top for easy accessibility among a larger set of custom fields.
    ![](https://hackmd.io/_uploads/H1qbDs2rn.png)


-------
### <a name="cftypes"></a> Types of custom fields

|  Custom field |                          Application                         |
|:-------------:|:------------------------------------------------------------:|
| Short Text    | Short text like credit card number or order ID               |
| Long Text     | Long text like Address, Detailed reason for complaint, etc                   |
| Keyword       | A single word text/ alphanumeric value                                               |
| Tags          | Predefined [tags](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags) like product category                        |
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


### Transfer/Resolve chat ticket by providing custom fields

For chat disposition with custom fields, you must mark the below checkboxes: 

1. **Required to create ticket**: A ticket cant is created if this field value is not entered. 
2. **Required to transfer ticket**: This value must be entered by the agent to transfer the ticket to another agent. 
3. **Required to close ticket**: This value must be entered by the agent if the ticket must be closed. 

![](https://i.imgur.com/e5TbTK6.png)

If these checkboxes are marked, the agent can not transfer or resolve the chat without providing a value for the custom field.

![](https://i.imgur.com/gb1Fcyw.png)

----

## <a name="3"></a>  3. Download custom fields report

There is a column dedicated to each custom field in the [chat archives report](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/chats/chat-archives-report).


 ![Custom field reports](https://cdn.yellowmessenger.com/5JZOkYaOM9KO1635072241566.jpg)

> To know how to download the chat archive report, click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports). 

------

## <a name="4"></a>  4. Event to identify custom field inputs

When a custom field is updated in the platform, an event ` ticket-update` is triggered, with the `changeType` set as `change_custom_field`. This event can be captured and utilized by activating it in **Studio** on **Events**. 

> For steps to create and activate events, refer to [this article](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-events).

By identifying the `ticket-update` event and custom fields associated with it, you can develop Studio flows to address various use cases. 
- For example: When you have a custom field called "Order ID" in the Inbox and it gets updated, you can create an automation flow on Studio that triggers an action to update the corresponding order details on your website.

This can help keep the information synchronized and save time by avoiding the need for manual updates.