---
title: September updates
sidebar_label: What's New 
featured: true
---


Here, at Yellow.ai, our Product and Developement team work hard to consistently improve the product to help you solve numerous use cases and provide a better user experience.

Stay tuned to know what's going on with Yellow.ai products.

***


## 1. Inbox updates

### 1.1 Message reliability enhancements

> Type - Enhancement

We have improved our message delivery mechanism to reduce message drops and enhance reliability. We have also added tracking, message statuses, and retries to ensure message delivery even in case of API failures, internet connection disruptions.


### 1.2 Internal Knowledgebase

> Type - New feature

  
Internal Knowledge base is a centralized location to store information about the organization’s products and services. One can store policies, handbooks, and guidelines for the agents to follow in specific situations. It eliminates the time spent by the agent in searching for relevant information & referencing them in tickets in need. It also helps businesses onboard new agents.

![](https://i.imgur.com/402mVio.png)


### 1.3 Proactive notifications in WhatsApp

> Type - New feature

Proactive Notifications let agents do a 1:1 outbound reach out to customers and create a ticket to continue their conversation. This is helpful in solving relationship management use cases in B2B and sales-support hybrid use cases.


![](https://i.imgur.com/gadUXvG.png)


### 1.4 API for sticky agent assignment (v1)

> Type - New feature

  

Sticky agent assignment is the process of connecting your customers to the agents they are already familiar with. This is vital in industries, like education, health tech, financial services, and other concierge services, where customer relationship management is a high priority.

  

Chat tickets raised in this manner will be assigned to their preferred agents. The tickets can also be assigned to the next available agent if the preferred agent is busy or unavailable at that moment.


## 2. Engage updates


### 2.1 Duplicate and delete options in template manager

* **Duplicate template**: You can now reuse an existing template by just duplicating or cloning it. This helps reduce your efforts in a new template from scratch that has similar content of an existing template.

* **Delete rejected templates**: To avoid seeing redundant and irrelevant templates on the Overview page, you can now use this option to delete specific templates or clean up all rejected templates at once.

[Know more](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/overview/#duplicate--edit-existing-templates)



## 3. User 360 updates

### 3.1 Search field to search for user segments

In the current user's module, there is no way to search segments in the list of segments. 

Similar to the search option available in outbound campaign, you can now search segments using the Search box. To make it more easy for you to search from multiple segments,  you can now use filters to get your preferred segment from the Active segments or Archived segments.


Choose the desired option in Change All.
    
-   If you select Active, search will filter out only Active Segmens.
-   If you select Archived, search will filter out only Archived Segments.

<img src="https://i.imgur.com/v8dF5Qf.png" width="50%"/>


### 3.2 Enable user_delete system event whenever a user is deleted

![](https://i.imgur.com/aEdCgaD.png)


### 3.3 User Search Public APIs
Support similar queries for User Search, User Search now supports the queries that are supported for Create User Segment.
Cover both System & Custom Properties
Response time needs to be fast enough to enable auto-complete feature in builder
 
UI to filter users using queries similar to that of segments

![](https://i.imgur.com/3L8NtbN.png)


## 4. Integration updates

### 4.1. SAP IO Integration 
Clients can now use SAP.IO Integration in the cloud to create, update or get the service request that is raised by users.  

### 4.2 AWS S3 Integration
Yellow.ai Integration with AWS-S3 allows you to seamlessly connect your remote bucket with our platform. Clients can now use this integration in cloud to upload or delete files, get signed URLs, and create buckets.

### 4.3. Improvised logging in Integrations backend
Going forward there will be improved logging in general for our service which helps to deep dive further and analyze the root cause of issues.

### 4.4. Salesforce Live Chat enhancement 
Inside Salesforce integration the Agent timeout value can now be configured in the UI itself. Additionally, tickets that get auto-closed due to agent inactivity will now be reflected in the Agent Portal.

### 4.5. Freshchat enhancement
	
We now have implemented multiple bot support using a single Freshchat account which wasn’t supported earlier. This implementation now allows users to configure multiple bots with one Freshchat account. Additionally, now we support multiple media file formats and users will now be able to receive multiple messages/attachments sent together.

### 4.6 Genesys On-Prem Live chat integration 
From now, clients who are having their solution in Genesys On-prem can also integrate with Yellow.ai using this integration for agent user conversations. [Reference link](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys).



## 5. Marketplace updates

### 5.1 Marketplace templates

* **WhatsApp Template Manager**: Allows you to track quick-reply clicks and direct users through a personalized flow at scale depending on template name and button clicked.
* Employee Engagement surveys
   * Employee Engagement Initiatives
   * Onboarding: 1 week
   * Onboarding: 30 days
   * Onboarding: 90 days
   * Onboarding: 365 days
   * Survey: Covid Break
   * Survey: ESOPs
   * Survey: New policy change
    * Feedback after performance review meeting

* **Dashboards**: Visualize survey metric to understand the overall employee experience.
* **Healthcare**: Book a doctor consultation - book a video/ physical consultation with a doctor from your nearest branch/clinic.


### 5.2 Marketplace infrastructure

* New Marketplace landing page
   * UI design revamp with different card themes for templates
   * Collections with predefined filters to retrieve a specific set of templates
   * Improved search and discoverability
      * Auto-suggestion feature implemented for search
     * Enhanced search capability using ElasticSearch (Fuzzy searches and filters added based on various component attributes).
* Micro discovery pop up with marketplace templates, while creating new projects and flows.
* Notification on newly added templates.



## 6. Insights updates

### 6.1 Voice overview dashboard

An all-new analytics dashboard in Insights specifically for voice bots called - Voice Overview. Voice bots are built on the IVR channel and hence, there are telephony metrics that are very critical while understanding overall voice bot performance like call statuses, average call duration, user traffic, etc. ( along with the bot engagement metrics that are already available on Insights).

  

Additionally, all the data can be filtered based on dates and call direction (outbound or inbound). Call statuses data can be filtered by phone numbers. The dashboard has all current and historical data. Moreover, users can access the raw data for each report using the Export functionality.

![](https://i.imgur.com/QbUD9Yl.jpg)


### 6.2 Low FCR reasons

In the Flows Summary section (User Journeys > Funnels), you can now see the list of reasons why a certain flow completion rates might be low and nudges to what immediate steps you can take to improve them. This helps you create hypotheses around poor performing flows, make improvements in them, and ultimately boost completion rates of bot flows.

<img src="https://i.imgur.com/21iu3Xu.png" width="50%"/>

  

### 6.3 Channel filter on User Journey Visualisation

On the User journey visuvalisation page, we have added a filtering option based on channels (like Yellow Messenger, WhatsApp, etc.) in addition to the time filter.  This helps you analyse flow paths taken by end-users in a much better detail and depth.



## 7. Channels

### 7.1 Slack channel support in cloud
Slack is a workplace communication tool - a single place for messaging, tools and files.

Slack is an instant messaging system with lots of add-ons for other workplace tools. Besides an intuitive UI, you can leverage  group and person-to-person messaging. These are more than 1500 apps and allows creating custom apps which has evolved Slack to become a one-stop-shop for a lot of users.