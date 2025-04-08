---
title : Workday Integration Guide
sidebar_label : Workday
---

Workday is a leading Human Capital and Financial Operations managing platform that offers centralized access to critical business data—employee records, payroll, financial transactions, supplier contracts, and more.

This guide helps you integrate Workday with the Yellow.ai platform to automate data exchange, improve operational efficiency, and support business decision-making. Whether you're looking to sync employee information, trigger workflows based on Workday events, or use Workday data to personalize interactions, this guide will walk you through setup and best practices.

This integration enables you to perform the following actins from the Yellow.ai bot:



| **Action**                         | **Description** |
|-----------------------------------|-----------------|
| **Fetch employee information** | Retrieve employee details like job title, department, manager, ID, and contact info. |
| **Fetch employee time-Off plan details** | Get the time-off plans assigned to an employee. |
| **Get employee time-Off types for a plan** | View applicable time-off types for a specific plan. |
| **Apply time-Off** | Submit a time-off request for a worker. |
| **View employee benefits** | Fetch benefit details assigned to a worker. |
| **Change employee preferred name** | Update the preferred name with options to use legal name. |
| **Update marital status** | Modify the marital status of a worker. |
| **Update home contact information** | Update home address or phone number. |
| **View personal information** | Access details like gender, DOB, marital status (ACL applied). |
| **View personal contact** | Retrieve personal contact information like phone number, address. |
| **View work contact** | Get the work phone numbers for a worker. |
| **View PTO balance** | View current time-off balances across all leave types. |
| **View compensation** | Fetch compensation information of a worker. |
| **Request time-Off** | Alternate flow for submitting time-off requests with attachments. |
| **Update personal information** | Modify home address, email, marital status, and phone. |
| **Update personal contact** | Update personal phone contact details. |
| **Update work contact** | Change work phone or contact details. |
| **Add emergency contact** | Add or update emergency contact info (name, phone, email, address). |
| **Request employment verification** | Generate employment verification letter per company templates. |
| **Request paystub for specific period** | Fetch paystub for a defined time range (or latest by default). |
| **Request tax details for specific year** | Get tax forms like W2 for a selected year (or latest). |




## Connect Workday with Yellow.ai

To integrate Workday with the Yellow.ai platform, follow the steps below:

1. Switch to the Development/Staging environment and go to **Extensions** > **Integrations** > **HR** > **Workday**. Alternatively, you can use the Search box to quickly find the required integration.

   ![](https://i.imgur.com/WJoWvEI.png)

2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).
   
   ![](https://i.imgur.com/xTllnFx.png)

3. Configure the following fields required for integration and click **Connect**.


**Field**           | **Description**    
--------------------|--------------------
**API Base URL** *  | The root URL for your Workday API environment. This is typically provided by Workday and may vary depending on whether you're using a production or sandbox instance. Example: `https://api.workday.com/tenant`.
**Instance ID** *   | A unique identifier for your Workday instance (or tenant). This helps the system direct API calls to the correct environment. You can find this in your Workday admin settings or API documentation.
**Client ID** *     | The unique identifier for your registered application in Workday. Used during OAuth authentication to identify the client making API requests.
**Client Secret** * | A confidential string known only to your application and Workday. Used in combination with the Client ID to securely authenticate API requests. Keep this value secure.
**Refresh Token** * | A token that allows your integration to obtain new access tokens without user interaction. This ensures continuous connectivity without requiring repeated logins. Typically generated during the OAuth flow. 


:::note
You can add a maximum of 15 accounts. Use **+Add account** and proceed with the previous steps to add each accoount.
:::


## Actions supported via AI Agent (Bot)

Once you integrate Workday, you can perform the following actions to directly from the AI Agent conversations:


<center>   <img src="https://i.imgur.com/E8z4WsS.png" width="60%"/>  </center>



### Fetch employee information

Retrieve key employee details such as job title, department, manager, employee ID, and contact information. Useful for quick lookups during HR or IT support conversations.

#### Required inputs

* Employee ID (`number`): Unique numeric identifier assigned to each employee in the Workday system. 

### Fetch employee time off plan details

View an employee’s time off plan, including accrual policies, available leave balances, and plan eligibility. Helps users better understand their leave entitlements.

#### Required inputs

* Employee ID (`number`): Unique numeric identifier assigned to each employee in the Workday system. 

### Get employee time off types for a plan

Return a list of time off types (e.g., vacation, sick leave, personal leave) associated with an employee's time off plan. Ideal for guiding employees during leave application.

#### Required inputs

* Employee ID (`number`): Unique numeric identifier assigned to each employee in the Workday system. 



### Apply time off

Allows employees to apply for time off directly through the bot by specifying the number of days and relevant identifiers. Useful for streamlining HR requests and improving employee experience.

#### Required inputs

- **Days** (`:array`): The list of dates for which time off is being requested. Each date should be in the appropriate format (e.g., `YYYY-MM-DD`).

- **Employee WID** (`:string`): The unique Workday ID assigned to the employee. This is required to correctly associate the time-off request with the employee’s record.



### View employee benefits

Provide employees with an overview of their enrolled benefits, including healthcare, insurance, retirement plans, and other offerings. Helps reduce dependency on HR teams.

#### Required inputs

* Effective Date (:string - date): The date for which the benefits information should be retrieved. Format should be YYYY-MM-DD. This helps pull the accurate benefits as of that point in time.
* Employee ID (WID) (:string): The unique Workday ID associated with the employee whose benefit details are being requested.

### Change preferred name

Allow employees to update their preferred name in Workday through a simple conversational flow. This may include updating first and last names, or opting to use the legal name as the preferred name.


#### Required inputs

- **Use Legal Name as Preferred Name** (`:boolean`): Set to `true` if the legal name should be used as the preferred name. If `false`, provide a new preferred first and/or last name.

- **Employee ID** (`:number`): The unique numeric identifier assigned to the employee in Workday.

#### Optional inputs (if not using legal name)

- **Country Reference (ISO_3166-1_Alpha-2_Code)** (`:string`): The country code to determine locale-based formatting and naming standards. Example: `US`, `IN`.

- **First Name** (`:string`): New preferred first name.

- **Last Name** (`:string`): New preferred last name.


### Update marital status

Let employees update their marital status with appropriate documentation or input validation via the bot.

#### Required inputs

- **Employee ID** (`:number`): The unique numeric identifier assigned to the employee in Workday.

- **Marital Status (Marital_Status_ID)** (`:string`): The updated marital status code. Example values may include `SINGLE`, `MARRIED`, `DIVORCED`, depending on your Workday configuration.



### Update home contact information

Empower employees to change their home address, phone number, or other contact details through the bot, ensuring quick and easy updates to personal information.


#### Required Inputs

- **Contact Type** (`:string`): The type of home contact information to update. Values could include `Phone`, `Email`, or `Address`.  


### Other supported actions

Here are other actions supported with the Workday integration:

| **Action**                          | **Description** |
|------------------------------------|-----------------|
| **View Personal Information**      | Retrieve personal details such as marital status, gender, date of birth, and ethnicity. Role-based access controls what information is visible. |
| **View Personal Contact**          | Fetch home address, personal email, and phone number of a worker. |
| **View Work Contact**              | Get professional contact details like work phone number and email. |
| **View PTO Balance**               | View current leave balances across all eligible time-off types. |
| **View Compensation**              | Retrieve salary, bonuses, and other compensation details for a worker. |
| **View Benefit**                   | Fetch benefits assigned to a worker such as insurance or retirement plans. |
| **Request Time Off**               | Submit a leave request by specifying type, duration, dates, and optional attachments. |
| **Update Personal Information**    | Update address, email, marital status, or phone number. |
| **Update Personal Contact**        | Edit personal phone number for a worker. |
| **Update Preferred Name**          | Set or change a preferred name; optionally use the legal name. |
| **Update Work Contact**            | Modify work contact details like office phone number or email. |
| **Add Emergency Contact**          | Add or update emergency contact details including name, phone, email, and address. |
| **Request Employment Verification**| Auto-generate an employment verification letter using a pre-defined or custom template. |
| **Request Paystub for Specific Period** | Fetch a paystub for a specific date range or the most recent one. |
| **Request Tax Details for Specific Year** | Retrieve W-2 or other tax documents for a specific year or the latest available year. |

