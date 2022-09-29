---
title: Sep updates
sidebar_label: Overview
---

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


### 3.2 Enable user_delete system event whenever a user is deleted

### 3.3 User Search Public APIs
Support similar queries for User Search, User Search now supports the queries that are supported for Create User Segment.
Cover both System & Custom Properties
Response time needs to be fast enough to enable auto-complete feature in builder
 
UI to filter users using queries similar to that of segments
