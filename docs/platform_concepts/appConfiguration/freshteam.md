---
title : Freshteam
sidebar_label : Freshteam
---

Yellow.ai Integration with Freshteam enables you to seamlessly access Freshteam services. With this integration, the bot can fetch employee info, create and manage time off requests, and retrieve  job posting information from Freshteam.

## Integrate Freshteam with Yellow.ai

In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.


### Get your Freshteam's API key

Follow the below steps to enable Freshteam integration for your bot:

1. Login to https://www.freshworks.com/hrms/login/ and click on your Profile Avatar.
     
   ![](https://i.imgur.com/B1bHeZz.png)

2. From the drop-down select **API key**. You can generate new API key and copy it or just copy the existing API key.
     
   ![](https://i.imgur.com/n2SADMw.png)


### Connect your Freshteam account to Yellow.ai

To connect to Yellow, you need your account's API key. In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment. 


1. Switch to the Development/Staging environment and go to **Extensions** > **Integrations** > **HR** > **Freshteam**.
   ![](https://i.imgur.com/yZ0Dmss.png)

2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).
3. In **API key**, paste that API Key that you copied earlier.
4. In **Domain name**, enter your account's domain URL.
5. Click **Connect**.
6. To connect another account, click **+ Add Account** and proceed with the previous steps. You can add a maximum of 15 accounts.

---


## Accessing Freshteam Functions through bot conversations

The Freshteam integration enables bot to perform the following actions.



	
### 1. List all employees
List all employees integration node helps in retrieving all the employees available in Freshteam. One can retrieve employee information by applying sort and sortType filters as well.

:::note
* Only users in HR Partner, Admin, and Account Admin roles can access this API.
* When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

**Node Sample Inputs**


| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   Sort       |  String        |first_name/last_name/employee_id      |
|   SortType       |  String        |   asc/desc       |

**Return Value**  

List all employee's integration node returns the value of array type, use array variable as an output variable.

### 2. Retrieve employee information

Retrieve employee information integration node helps in retrieving a particular employee based on the employee id provided.

:::note
Only users in HR Partner, Admin, and Account Admin roles can access this API.
:::

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
| EmployeeID |  Number  |5000402776 |



**Return Value**  

Retrieve employee information integration node returns the value of object type, use object variable as an output variable.


### 3. List all time-off types

List all time off types integration node helps in retrieving all the time off types available in the freshteam.

:::note
Only users in HR Partner, Admin, and Account Admin roles can access this API.
:::

**Return Value**  

List all time off types integration node returns the value of array type, use array variable as an output variable.

### 4. List all time off requests

List all time off requests integration node helps in retrieving all the time off requests applied by an employee based on the employee id provided.  

:::note
Only users in HR Partner, Admin, and Account Admin roles can access this API.
:::

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   EmployeeID       |  Number        |5000402776      |


**Return Value**  

List all time off requests integration node returns the value of array type, use array variable as an output variable.

### 5. Create a time off request

Create a time off request integration node helps in applying for leave(time off).

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   StartDate |  String        |2022-09-19 |
|   EndDate |  String        |2022-09-19|
|   LeaveTypeID |  Number        |5000063084|
|   Comments |  String        |Fever, cold, and headache|
|   OptionalLeaveDays       |  Array        |[]|
|   Notify |  Array        |[]|
|   AddToCalendar |  Boolean        |True|
|   AutoDeclineEvents |  Boolean        |True|

**Return Value**  
Create a time off request integration node returns the value of object type, use object variable as an output variable.

### 6. Approve a time off request

Approve a time off request integration node helps in approving a leave based on the time off id provided.

:::note
Only users in HR Partner, Admin, Reporting Manager, and Account Admin roles can access this API.
:::

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   TimeoffID       |  Number        |5000402776      |

**Return Value**    

Approve a time off request integration node returns the value of object type, use object variable as an output variable.

### 7. Cancel a time off request
Cancel a time off request integration node helps in rejecting a leave based on the time off id provided.

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   TimeoffID       |  Number        |5000402776      |

**Return Value**  

Cancel a time off request integration node returns the value of object type, use object variable as an output variable.


### 8. List all Job Postings

List all job postings integration node helps in retrieving all the available open jobs in an organization. One can apply an optional filter “title” for returning job information based on that title.

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   Title       |  String        |Sample Job Posting      |

**Return Value**  

List all time off requests integration node returns the value of array type, use array variable as an output variable.

### 9. Retrieve Job Posting information

Retrieve Job posting information integration node helps in retrieving available job information based on the job id provided.

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   JobID       |  Number        |5000402776      |


**Return Value**  

Retrieve Job posting information integration node returns the value of object type, use object variable as an output variable.


**References**

* [List all employees](https://developers.freshteam.com/api/#list_all_employees)
* [Retrieve employee information](https://developers.freshteam.com/api/#retrieve_employee_information)
* [List all time off types](https://developers.freshteam.com/api/#list_all_leave_types)
* [List all time off requests](https://developers.freshteam.com/api/#list_all_leave_requests)
* [Create a time off request](https://developers.freshteam.com/api/#create_a_leave_request)
* [Approve a time off request](https://developers.freshteam.com/api/#approve_time_off)
* [Cancel a time off request](https://developers.freshteam.com/api/#cancel_time_off)
* [List all job postings](https://developers.freshteam.com/api/#list_all_job_postings)
* [Retrieve job posting information](https://developers.freshteam.com/api/#retrieve_job_posting_information)

