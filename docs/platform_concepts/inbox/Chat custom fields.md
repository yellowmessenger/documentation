---
title: Chat Custom fields
sidebar_label : Chat Custom fields
---


### What are custom fields?

Custom fields can be added to tickets and are used to track business-specific information related to the customer like Order ID, Address, case details, etc. Custom fields enable your terams to add more information about a case and add further context, which helps with better reporting and to resolve issues faster. Custom fields are available for both chat as well as ticketing modules.

#### Adding a new custom field

You can define a new custom field by going to,
>Inbox > Chats > Settings > Chats configuration > Custom Fields > Add custom fields

![Adding custom fields](https://cdn.yellowmessenger.com/iMY5utFBNX5I1635071973851.png)

There are several different types of custom fields availabel as shown below :
![Types of custom fields](https://cdn.yellowmessenger.com/WWLml6pNIMQz1635072064837.png)

Following are the steps to add a new field :

1. Add custom field type
2. Add field name - this is the name that appears in the ticket details page
3. Add placeholder - this is the placeholder text that appears on the input bar in the ticket details page

Following are the types and their examples :

|  Custom field |                          Application                         |
|:-------------:|:------------------------------------------------------------:|
| Short Text    | Short text like credit card number or order id               |
| Long Text     | Address, Detailed reason for complain, etc                   |
| Keyword       | A single word                                                |
| Tags          | Predefined tags like product category                        |
| Checkbox      | e.g. is this a VIP customer, or was this a sale item?        |
| Radio buttons | It acts like a drop-down list e.g. location, store name, etc |
| Email         | Any email ID                                                 |
| Number        | Any numerical value like an amount                           |
| Phone         | Contact number, e.g. customer’s emergency contact            |
| Date          | Any date value e.g. date of return of the item               |
  
Once added, the field will be listed on the ticket/chat details section on the right sidebar as shown below :
![Example](https://cdn.yellowmessenger.com/k5VEorRDldSg1635072109945.png)

Only **inbox admin** can create new custom fields.

#### Updating a custom field
Any agent who has access to edit a ticket can update custom fields for that ticket by simply adding the information. Admins can, therefore, update custom fields for all the tickets. Agents can also search by custom field values as seen below (searching by custom field country)
![Custom field search](https://cdn.yellowmessenger.com/gJqieNE8tqm61635072154648.png)

### Chat disposition with custom fields
You can also mark a custom field as mandatory to create/transfer or close a ticket while creating the custom field. In such cases, the agent can not dispose off the chat without providing a value for the custom field as seen in the example below :
![Chat disposition](https://cdn.yellowmessenger.com/NQEV68vQU6oF1635072213029.jpg)

### Reporting on custom fields
There is a column dedictaed to each custom field in the chat archives report as shown below
 ![Custom field reports](https://cdn.yellowmessenger.com/5JZOkYaOM9KO1635072241566.jpg)

### Automation on custom fields
Whenever a custom field is updated, we send an event **ticket-update** with changeType **change_custom_field**, you can capture this event in builder using event hub to develop automation flows following custom field updates - *e.g. updating an order in shopify when the order ID custom field is updated in Yellow AI.* 