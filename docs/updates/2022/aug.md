---
title: August updates
sidebar_label: August updates
---

## 1. Inbox

### 1.1 Email tickets deeplink

> Type - Enhancement

Email tickets are now deeplinked to improves the overall process of navigation and usability within Inbox. Agents and Admins will find it much easier to search, and filter ticket history.

![](https://i.imgur.com/0ozN6uc.png)



### 1.2 No code email ticketing

> Type - New feature


One can configure email ticketing channel and raise tickets in Inbox cloud without the hassle of getting code access, app object, or  main function etc anymore. This speeds up the process and the experience of going live with email channel for support usecases.

![](https://i.imgur.com/JInKmIw.png)


### 1.3 Queued chats access for Inbox Supervisor

> Type - Enhancement

Queued chats would now be visible to Inbox Supervisor role. They also have more control over queued chats wherein admins & aupervisors can now assign or push chats from queue to agents in case of need.

***

## 2. Insights

  

### 2.1 Enriched channel filter

> Type: Enhancement

To understand user behaviour in much better depth, YellowMessenger channel filter is now divided into -

1. Web - users interacting with bot deployed on websites

2. Mobile - users interacting with bot via mobile apps

Additionally, Yellow API is a new channel introduced for users who only use our backend API to deploy bots with their own in-house UI.

### 2.1 Failure reasons in Notifications report

Introduced a new column, *ERRORMESSAGE*, in the Notifications report of Data Explorer specifying the reasons behind failure of notifications delivery. For example, Recipient number is invalid, the user doesn’t have a WhatsApp account and so on.

There are filters to drill down data that helps understand different reasons for notifications failing, retargeting of those users, plan how to avoid such failures in the future, etc.

  ![](https://i.imgur.com/R2rvE4a.png)

  

### 2.3 Extended session period (24 hrs)

The definition of a session is now updated to user interaction occurring with the bot within a 24-hours window. A single session is considered for any number of interactions the user has within 24 hours from the start of a session. A new session starts after 24 hours. This is to ensure better accuracy in the Sessions data and bring consistency across channels (like WhatsApp).

  

From a billing point of view, irrespective of the number of messages sent in the last 24 hours time frame, only 1 session will be counted for billing purposes.

  ---

  
  
  

## 3. Integrations  
  
### 3.1 CleverTap integration  

The CleverTap integration allows you to create Whatsapp templates on Yellow.ai and run campaigns for your user base directly on CleverTap. [Know more details](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/clevertap).
  
### 3.2 Media File support with caption for custom live agent integrations  

> Type: Fix

Earlier, users were not able to receive videos that were sent during custom live chat. This has now been fixed and clients using Custom Live Agent will now receive media files with correct captions.  
  
### 3.3 Integration UI enhancements

> Type: Enhancements
> 
The following are the enhancements made to the UI - 

* Updated the Descriptions section on the Integration page with improved UX. 
* Added video tutorials for some complex integrations that would help bot builders with setting up flows

  
### 3.4 In-Bot reply events for Webhook based integrations  

Clients using webhook-based live chat integrations will receive the agent reply events in the bot itself so that they can perform further operations based on that event data which was not supported earlier  
  
### 3.5 Cashfree - Whatsapp payment  integration

With this integration, you can now generate Cashfree tokens that can be passed on to WhatsApp pay to process payments. Post transactions you can also receive notifications on payment statuses.  


***

## 4. Marketplace

  
### 4.1 Marketplace components
* Healthcare: Collect reports
   * Access and download lab test reports in pdf format.
*   HR
    * Use cases like apply for leave, dispatch of onboarding kit, compensation roll out and employee feedback.
*   Energy and Utility
   * Use cases like billing enquiries, payments, meter readings; change of personal information, address, and also provides information around new connections, transfer of connections, and latest customer benefit schemes.

***

## 5. Engage

### 5.1 Test campaign feature for outbound campaigns
    
> Type: New feature

You can schedule campaigns targeting larger audience and test their notification messages just before launching it. You can add up to five test users and send real-time notifications
There is no need to create separate campaigns to check the end-user experience.

:::note
Available only from Cloud Engage.
:::

[Documentation link](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/whatsapp-campaign/#3-test-campaigns-recommended)

 
How does it help the customers?

-   Lets business go through the end-user experience
-   Ensures variables are mapped to the respective column
-   Prevents business from sending wrong content to the customers
-   Reduces campaign failures due to parameters mismatch or images size issues
    

### 5.2  App to cloud migration

> Type: Enhancement

Category : Upgradation to Cloud Engage

App bots are provided with an option to upgrade the Engage module by migrating all the campaigns and audience data with simple steps.


App bots can now use new features available from CLOUD engage with improved UI/UX.

The following are new in the New Engage Cloud -

-   User 360
-   Inbound Campaigns
-   Template manager
-   Viber Business outbound campaign



[Documentation link](https://docs.yellow.ai/docs/cookbooks/Upgrade_new_engage_app)

 
:::note
Limitation:The migration to the new platform is not allowed for app bots that have schedule  (Status:pending) cron jobs with Function Executions.
:::
  

