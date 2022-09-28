---
title : Freshteam
sidebar_label : Freshteam
---

Yellow.ai Integration with Freshteam enables you to seamlessly access Freshteam services. Any customer who has an account in Freshteam will be able to connect it with yellow.ai. Using this integration one can fetch employee info, create and manage time off requests, and retrieve  job posting information from Freshteam.

## 1. Use cases 
Following are the use-cases which are currently accommodated in the Integration:
	
### 1.1 List all employees
List all employees integration node helps in retrieving all the employees available in Freshteam. One can retrieve employee information by applying sort and sortType filters as well.

:::note
Only users in HR Partner, Admin, and Account Admin roles can access this API.
:::

**Node Sample Inputs**


| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   Sort       |  String        |first_name/last_name/employee_id      |
|   SortType       |  String        |   asc/desc       |

**Return Value**  

List all employee's integration node returns the value of array type, use array variable as an output variable.

### 1.2 Retrieve employee information

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


### 1.3 List all time-off types

List all time off types integration node helps in retrieving all the time off types available in the freshteam.

:::note
Only users in HR Partner, Admin, and Account Admin roles can access this API.
:::

**Return Value**  

List all time off types integration node returns the value of array type, use array variable as an output variable.

### 1.4 List all time off requests

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

### 1.5 Create a time off request

Create a time off request integration node helps in applying for leave(time off).

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   StartDate       |  String        |2022-09-19 |
|   EndDate       |  String        |2022-09-19|
|   LeaveTypeID       |  Number        |5000063084|
|   Comments       |  String        |Fever, cold, and headache|
|   OptionalLeaveDays       |  Array        |[]|
|   Notify       |  Array        |[]|
|   AddToCalendar       |  Boolean        |True|
|   AutoDeclineEvents       |  Boolean        |True|

**Return Value**  
Create a time off request integration node returns the value of object type, use object variable as an output variable.

### 1.6 Approve a time off request

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

### 1.7 Cancel a time off request
Cancel a time off request integration node helps in rejecting a leave based on the time off id provided.

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   TimeoffID       |  Number        |5000402776      |

**Return Value**  

Cancel a time off request integration node returns the value of object type, use object variable as an output variable.


### 1.8 List all Job Postings

List all job postings integration node helps in retrieving all the available open jobs in an organization. One can apply an optional filter “title” for returning job information based on that title.

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   Title       |  String        |Sample Job Posting      |

**Return Value**  

List all time off requests integration node returns the value of array type, use array variable as an output variable.

### 1.9 Retrieve Job Posting information

Retrieve Job posting information integration node helps in retrieving available job information based on the job id provided.

**Node Sample Inputs**

| Parameter | Type | Sample |
| -------- | -------- | -------- |
|   JobID       |  Number        |5000402776      |


**Return Value**  

Retrieve Job posting information integration node returns the value of object type, use object variable as an output variable.

## 2. Configure freshteam

Configuring the integration with Freshteam is straightforward. Follow the steps below to integrate Freshteam:

1. **Navigate to integration tab**

Inside your project, from the switcher, open Integrations, search for **Freshteam** in the search bar or you can find **Freshteam** under HR.

![](https://i.imgur.com/wvRnq7s.png)


2. **Connect your Freshteam account**

Follow the below steps to enable Freshteam integration for your bot:

- Login to https://www.freshworks.com/hrms/login/ and click on your Profile Avatar.
     
![](https://i.imgur.com/B1bHeZz.png)

- From the drop-down select API key, generate or use the existing API key.
     
![](https://i.imgur.com/n2SADMw.png)

     
- Provide your Freshteam Domain and API key details in the Freshteam Integration page in cloud.  
- Click **connect** to connect your freshteam account to the bot.


---

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

