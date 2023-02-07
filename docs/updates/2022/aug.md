---
title: August updates
sidebar_label: August 2022
---

## 1. **Inbox**

#### 1.1 Email tickets deeplink

| *Enhancement*

Email tickets are now deep linked to improve the overall process of navigation and usability within Inbox. Agents and Admins can search, and filter ticket history when the emails are configured for support ticketing.   
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/setupandconfig#--2-set-mail-forwarding). 





#### 1.2 No code email ticketing

| *New feature*


One can configure an email ticketing channel and raise tickets in the Inbox cloud without the hassle of getting code access, app object, main function, etc anymore. This speeds up the process and the experience of going live with an email channel for support use cases.   
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/manualticket). 




#### 1.3 Queued chat access for Inbox Supervisor

| *Enhancement*

[Queued chats](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#13-queued-chats) will now be visible to the Inbox Supervisor role. They also have more control over queued chats wherein admins & supervisors can now assign or push chats from the queue to agents in case of need.

***

## 2. **Insights**

  

#### 2.1 Enriched channel filter

| *Enhancement*

To understand user behavior in depth, the YellowMessenger channel filter is now divided into:  
1. **Web** - users interacting with bots deployed on websites.
2. **Mobile** - users interacting with the bot via mobile apps.  

Additionally, **Yellow API** is a new channel introduced for users who only use our backend API to deploy bots with their in-house UI.

#### 2.1 Failure reasons in Notifications report

| *Enhancement*


Introduced a new column, **ERRORMESSAGE**, in the Notifications report of **Data Explorer** specifying the reasons behind the failure of notifications delivery. 
There are filters to drill down data that help understand different reasons for notifications failing, retargeting of those users, planning how to avoid such failures in the future, etc.   
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer). 




#### 2.3 Extended session period (24 hrs)

| *Enhancement*


The definition of a session is now updated to user interaction occurring with the bot within a 24-hours window. A single session is considered for any number of interactions the user has within 24 hours from the start of a session. A new session starts after 24 hours. This ensures better accuracy in the Sessions data and brings consistency across channels (like WhatsApp).   
From a billing point of view, irrespective of the number of messages sent in the last 24 hours time frame, only 1 session will be counted for billing purposes.

  ---

  
  
  

## 3. **Integrations**
  
#### 3.1 CleverTap integration  

| *New feature*


The CleverTap integration allows you to create Whatsapp templates on Yellow.ai and run campaigns for your user base directly on CleverTap.   
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/clevertap). 


  
#### 3.2 Integration UI enhancements

| *Enhancement*

* Updated the Descriptions section on the Integration page with improved UX. 
* Added video tutorials for complex integrations that would help bot builders set up flows.



  
#### 3.3 In-Bot reply events for Webhook-based integrations  

| *Enhancement*


Clients using webhook-based live chat integrations will receive the agent reply events in the bot itself so that they can perform further operations based on that event data which was not supported earlier  
  
#### 3.4 Cashfree - Whatsapp payment  integration

| *New feature*


With this integration, you can now generate Cashfree tokens that can be passed on to WhatsApp pay to process payments. Post transactions you can also receive notifications on payment statuses.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/cashfree). 

----

## 4. **Marketplace**

  
#### 4.1 New Marketplace components were added

| *New feature*


* **Healthcare**: Collect reports, access, and download lab test reports in PDF format.
*   **HR**: For use cases like applying for leave, dispatch of onboarding kit, compensation roll out, and employee feedback.
*   **Energy and Utility**: For use cases like billing inquiries, payments, meter readings; change of personal information, and address, and also provides information around new connections, transfer of connections, and latest customer benefit schemes.

***

## 5. **Engage**

#### 5.1 Test campaign feature for outbound campaigns
    
| *New feature*

You can schedule campaigns from Cloud Engage targeting a larger audience and test their notification messages just before launching them. You can add up to five test users and send real-time notifications.   
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign#6-test-campaigns-recommended). 


#### 5.2  App to cloud migration

| *Enhancement*


App bots are provided with an option to upgrade the Engage module by migrating all the campaigns and audience data with simple steps.   
The following are new in the New Engage Cloud: 
-   User 360
-   Inbound Campaigns
-   Template manager
-   Viber Business outbound campaign  
[**Learn more here**](https://docs.yellow.ai/docs/cookbooks/Upgrade_new_engage_app). 

