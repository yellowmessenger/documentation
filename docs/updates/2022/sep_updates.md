---
title: September updates
sidebar_label: September
---

## 1. **Inbox**

#### 1.1 Message reliability enhancements

| *Enhancement*

Message delivery mechanism is improved to reduce message drops and is enhanced for reliability. Tracking, message statuses, and retries are added to ensure message delivery even in case of API failures, or internet connection disruptions.

#### 1.2 Internal Knowledgebase

| *New feature*

The internal Knowledge base is introduced as a feature of inbox, it is a centralized location to store information about the organization’s products and services. You can store policies, handbooks, and guidelines for the agents to follow in specific situations. It eliminates the time spent by the agent in searching for relevant information & referencing them in tickets in need. It also helps businesses onboard new agents.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/inbox/knowledge-base/edit-publish-articles). 



 
#### 1.3 Proactive notifications on WhatsApp

| *New feature*

Proactive notifications can be configured on the contacts tab, it let agents reach the customers (outbound) and create a ticket to continue their conversation. This is helpful in solving relationship management use cases in B2B and sales-support hybrid use cases.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/inbox/contacts). 

  
  

#### 1.4 API for sticky agent assignment (v1)

  

| *New feature*


Sticky agent assignment is the process of connecting your customers to the agents they are already familiar with. Chat tickets raised in this manner will be assigned to their preferred agents. The tickets can also be assigned to the next available agent if the preferred agent is busy or unavailable at that moment.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/stickyagent). 
  
  
***

## 2. **Engage**

  
  

#### 2.1 Duplicate and delete options in template manager

| *Enhancement*


*  **Duplicate template**: You can now reuse an existing template by just duplicating or cloning it. This helps reduce your efforts in a new template from scratch that has similar content to an existing template.
*  **Delete rejected templates**: To avoid seeing redundant and irrelevant templates on the Overview page, you can now use this option to delete specific templates or clean up all rejected templates at once.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/overview/#duplicate--edit-existing-templates). 


  
  
  
***

## 3. **User 360**

  

#### 3.1 Search field to search for user segments

| *Enhancement*


You can now search segments using the Search box (this is similar to the search option available in the outbound campaign). To search from multiple segments, use filters to get your preferred segment from the Active segments or Archived segments.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment/#2-view-segment-users). 





#### 3.2 Track deletion of CDP data using user_delete event 

| *Enhancement*

New system event user_delete is available on events. It is triggered when the user record is deleted in the identified CDP database through the following operations: 
1. Single user deletion from UI 
2. Bulk user deletion from UI 
3. User deletion using merge
4. User deletion through API

**Event schema**: User object and Event creation timestamp    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/#7-user-360-events-system-events). 



#### 3.3 User Search Public APIs

User Search now supports the queries that are supported for Create User Segment: 
1. It covers both System & Custom Properties.
2. Response time is fast enough to enable the auto-complete feature in the builder.
3. UI filters users using queries similar to that of segments.

![](https://i.imgur.com/AqBTVWv.jpg)


  
  
***

## 4. **Integration**

  

#### 4.1. SAP IO Integration

| *New feature*

Clients can now use SAP.IO Integration in the cloud to create, update or get the service request that is raised by users.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/sap-io).
  

#### 4.2 AWS S3 Integration

| *New feature*

Yellow.ai Integration with AWS-S3 allows you to seamlessly connect your remote bucket with our platform. Clients can now use this integration in the cloud to upload or delete files, get signed URLs, and create buckets.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/aws-s3).


#### 4.3. Improvised logging in Integrations backend

| *Enhancement*

There will be improved logging in general for our service which helps to deep dive further and analyze the root cause of issues.

  

#### 4.4. Salesforce Live Chat enhancement

| *Enhancement*

Inside Salesforce integration the Agent timeout value can now be configured on the platform. Additionally, tickets that get auto-closed due to agent inactivity will now be reflected in the Agent Portal.     
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/salesforcelivechat).


#### 4.5. Freshchat enhancement

| *Enhancement*

We have implemented multiple bot support using a single Freshchat account. This implementation allows users to configure multiple bots with one Freshchat account. Additionally, we support multiple media file formats and users will now be able to receive multiple messages/attachments sent together.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/freshchat).
  

#### 4.6 Genesys On-Prem Live chat integration

| *New feature*

Clients who are having their solution in Genesys On-prem can also integrate with Yellow.ai using this integration for agent user conversations.       
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys).
  


  
  
***

## 5. **Marketplace**

  
  
#### 5.1 New Marketplace components were added

| *New feature*


1. **WhatsApp Template Manager**: Allows you to track quick-reply clicks and direct users through a personalized flow at scale depending on the template name and button clicked.  
      - Employee Engagement surveys
      - Employee Engagement Initiatives
      - Onboarding: 1 week
      - Onboarding: 30 days
      - Onboarding: 90 days
      - Onboarding: 365 days
      - Survey: Covid Break
      - Survey: ESOPs
      - Survey: New policy change
      - Feedback after a performance review meeting  
2. **Dashboards**: Visualize survey metrics to understand the overall employee experience.
3. **Healthcare**: Book a doctor consultation - book a video/ physical consultation with a doctor from your nearest branch/clinic.

#### 5.2 Marketplace infrastructure

| *New feature*


1. New Marketplace landing page.
2. UI design revamp with different card themes for templates.
3. Collections with predefined filters to retrieve a specific set of templates.
4. Improved search and discoverability.
5. Auto-suggestion feature implemented for search.
6. Enhanced search capability using ElasticSearch(Fuzzy searches and filters added based on various component attributes).
7. Micro discovery pop up with marketplace templates while creating new projects and flows.
8. Notification on newly added templates.

  
  
***

## 6. **Insights**

  

#### 6.1 Voice overview dashboard

| *Enhancement*


An all-new analytics dashboard- **Insights** > **Voice overview** is introduced specifically for voice bots.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/growth/voiceoverview).
  
  

#### 6.2 Low Flow completion rate (FCR) reasons

| *Enhancement*


In the Flows Summary section (**User Journeys** > **Funnels**), you can see the list of reasons why certain flow completion rates might be low and nudge to what immediate steps you can take to improve them.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/growth/funnels/#31-flow-completion-rate-fcr).
  

#### 6.3 Channel filter on User Journey Visualisation  

| *Enhancement*


On the User journey visualisation page, we have added a filtering option based on channels (like Yellow Messenger, WhatsApp, etc.) in addition to the time filter. 
This helps you analyse flow paths taken by end-users in much better detail and depth.

  
***

## 7. **Channels**

  

#### 7.1 Slack channel support in the cloud

| *New feature*

Slack is a workplace communication tool - a single place for messaging, tools and files. It is an instant messaging system with lots of add-ons for other workplace tools. Besides an intuitive UI, you can leverage group and person-to-person messaging. These are more than 1500 apps and allow the creation of custom apps which have evolved Slack to become a one-stop-shop for a lot of users.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/slack2).
  


***

## 8. **Studio** 

#### 8.1 SyncAPI added to Channel Filter Node
 
| *Enhancement*

Earlier, if a client had hosted their channels on a third-party vendor, they could not extract the channel on our platform using the same third-party API. 
Now using sync API, third-party API can be used as a channel, hence it gets reflected on the [Channel filter node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes/#2-channel-filter). 

**![](https://lh6.googleusercontent.com/bd6nV55XUH9EVENY8s5sCg_YTvhi3dwi2BvHlMcqes8fFU9yocJj5ZLqcryws1imW3EWGOyzKR5P-gCbEe1UXUJJPDi2eeNiq1FTU655OQMcnxlM3VmuaOBei93HdaxWtHkHyyLpfH69FfrXY1Za2i9P12d0Rig2d1OQf5ORF0fchVd_ld5xv7-cqA)**

#### 8.2 Global FAQ Search
 
| *Enhancement*

Right now, to search for a FAQ, we need to know which category it belongs to because the search is limited to categories only. With this feature, we would be able to search questions across categories from the search bar.

#### 8.3 Quick Reply (QR) in Store Comment Node

   
| *Enhancement*

In the store comment node, there is a toggle added to enable QR. QR in the comment store node is to capture the comment as well as the QR response.    
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#25-store-comment).
  


#### 8.4 Debugging- know Intent is getting triggered

   
| *Enhancement*

When flows are triggered, earlier it was difficult to go and find which intent will trigger with what confidence. We have added the same in debug logs in the chat widget.   
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow).


#### 8.5 Input node v2
   
| *Enhancement*  (Beta release- some settings may not be available as per expectations like autocomplete and auto skipping options)

For better & dynamic conversation design, we release a new input node.   
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#29-input).



#### 8.6 Local Context Handler options in condition node 

| *New feature*
  
In condition node, questions around why, what, No, repeat etc can be answered locally. Which handles multiple paths except for just validation failure or success.   
[**Learn more here**](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition).


***

## 9. **Voice**

#### 9.1 User Response Acknowledgement/Filler Words 


| *New feature*  (Private Beta) 

User Response Acknowledgement/Filler Words, if configured for a particular step in the conversational journey, allow the voice bot to acknowledge the user’s response quickly. This acknowledgement is executed prior to processing any backend intent detection/CRM API calls etc that might add to the conversational delay.  
* **Legacy Behavior**: {User Speech Ends} -> {Bot Processes User Inputs} -> {Bot Proceeds to the next step}.  
* **New configurable Behavior**: {User Speech Ends } -> {Bot Acknowledges user response by playing a configurable voice/sound like “ok”/”got it”/”mm-hmm”} -> {Bot Processes User Inputs} -> {Bot Proceeds to the next step}



#### 9.2 New Mode for speech silence detection

| *New feature*

A new “Streaming Advanced” mode for capturing user voice utterances on the call. In addition to the existing “Static” and “Streaming” modes, the “Streaming advanced” mode allows better control of the silence duration configurations associated with speech detection.
Bot Developers can now select “Streaming Advanced Mode” and additionally provide the following configuration parameters:   
- Initial Silence Duration
- Final Silence Duration

#### 9.3 UI configurations for recording 

| *New feature*

Onboarded Recording Management controls on the Builder UI. Bot Developers can now use these controls, available under **Node Level Settings** > **Voice Configuration** > **Recording Action**, to Stop, Pause or Resume the Voice recording during a conversation between the Voice bot and the customer.    
[**Learn more here**](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/callrecording).




#### 9.4 Dashboard for monitoring voice bot performance

| *New feature* (owned by the data and analytics team. Available for use on Insights)

Voice bot metrics is now found on the **Insights** > **Voice Overview** section.  
[**Learn more here**][links](/platform_concepts/growth/voiceoverview.md).
