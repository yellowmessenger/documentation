---
title: September updates
sidebar_label: September
---

## 1. **Inbox**

#### 1.1 Message reliability enhancements

> Type - Enhancement

We have improved our message delivery mechanism to reduce message drops and enhance reliability. We have added tracking, message statuses, and retries to ensure message delivery even in case of API failures, or internet connection disruptions.

#### 1.2 Internal Knowledgebase

> Type - New feature

The internal Knowledge base is a centralized location to store information about the organization’s products and services. One can store policies, handbooks, and guidelines for the agents to follow in specific situations. It eliminates the time spent by the agent in searching for relevant information & referencing them in tickets in need. It also helps businesses onboard new agents.

[Know more.](https://docs.yellow.ai/docs/platform_concepts/inbox/knowledge-base/edit-publish-articles)

![](https://i.imgur.com/opArL6S.png)

 
#### 1.3 Proactive notifications on WhatsApp

> Type - New feature

Proactive notifications let agents reach the customers (outbound) and create a ticket to continue their conversation. This is helpful in solving relationship management use cases in B2B and sales-support hybrid use cases.

![](https://i.imgur.com/gadUXvG.png)

  
  

#### 1.4 API for sticky agent assignment (v1)

  

> Type - New feature


Sticky agent assignment is the process of connecting your customers to the agents they are already familiar with. This is vital in industries, like education, health tech, financial services, and other concierge services, where customer relationship management is a high priority.
Chat tickets raised in this manner will be assigned to their preferred agents. The tickets can also be assigned to the next available agent if the preferred agent is busy or unavailable at that moment.

  
  
***

## 2. **Engage**

  
  

#### 2.1 Duplicate and delete options in template manager

  > Type - Enhancement


*  **Duplicate template**: You can now reuse an existing template by just duplicating or cloning it. This helps reduce your efforts in a new template from scratch that has similar content to an existing template.
*  **Delete rejected templates**: To avoid seeing redundant and irrelevant templates on the Overview page, you can now use this option to delete specific templates or clean up all rejected templates at once.

[Know more](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/overview/#duplicate--edit-existing-templates)

  
  
  
***

## 3. **User 360**

  

#### 3.1 Search field to search for user segments

  > Type - Enhancement


In the previous version o user's module, users couldn't search segments in the list of segments.
In the current release, you can now search segments using the Search box (this is similar to the search option available in the outbound campaign). To search from multiple segments, use filters to get your preferred segment from the Active segments or Archived segments.
Choose the desired option in Change All.
- If you select Active, the search will filter out only Active Segments.
- If you select Archived, the search will filter out only Archived Segments.

![](https://i.imgur.com/UGY9jjI.png)

#### 3.2 Track deletion of CDP data using user_delete event 

  > Type - Enhancement

New system event user_delete is available on events. It is triggered when the user record is deleted in the identified CDP database through the following operations: 
1. Single user deletion from UI 
2. Bulk user deletion from UI 
3. User deletion using merge
4. User deletion through API

**Event schema**: User object and Event creation timestamp





#### 3.3 User Search Public APIs

User Search now supports the queries that are supported for Create User Segment: 
1. It covers both System & Custom Properties.
2. Response time is fast enough to enable the auto-complete feature in the builder.
3. UI filters users using queries similar to that of segments.

![](https://i.imgur.com/AqBTVWv.jpg)


  
  
***

## 4. **Integration**

  

#### 4.1. SAP IO Integration

> Type - New feature

Clients can now use SAP.IO Integration in the cloud to create, update or get the service request that is raised by users.

[Know more](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/sap-io/).
  

#### 4.2 AWS S3 Integration

> Type - New feature

Yellow.ai Integration with AWS-S3 allows you to seamlessly connect your remote bucket with our platform. Clients can now use this integration in the cloud to upload or delete files, get signed URLs, and create buckets.

  [Know more](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/aws-s3/).

#### 4.3. Improvised logging in Integrations backend

  > Type - Enhancement

There will be improved logging in general for our service which helps to deep dive further and analyze the root cause of issues.

  

#### 4.4. Salesforce Live Chat enhancement

  > Type - Enhancement

Inside Salesforce integration the Agent timeout value can now be configured in the UI itself. Additionally, tickets that get auto-closed due to agent inactivity will now be reflected in the Agent Portal.



#### 4.5. Freshchat enhancement

  > Type - Enhancement

We now have implemented multiple bot support using a single Freshchat account which wasn’t supported earlier. This implementation now allows users to configure multiple bots with one Freshchat account. Additionally, now we support multiple media file formats and users will now be able to receive multiple messages/attachments sent together.

  

#### 4.6 Genesys On-Prem Live chat integration

> Type - New feature

Clients who are having their solution in Genesys On-prem can also integrate with Yellow.ai using this integration for agent user conversations.     

[Know more](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys).

  
  
***

## 5. **Marketplace**

  
  
#### 5.1 New Marketplace components were added

Following marketplace templates were relased:


  > Type - New feature


* **WhatsApp Template Manager**: Allows you to track quick-reply clicks and direct users through a personalized flow at scale depending on the template name and button clicked.  
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

* **Dashboards**: Visualize survey metrics to understand the overall employee experience.

* **Healthcare**: Book a doctor consultation - book a video/ physical consultation with a doctor from your nearest branch/clinic.

  
  

#### 5.2 Marketplace infrastructure

> Type - New feature


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

  > Type - Enhancement


An all-new analytics dashboard in Insights specifically for voice bots called - Voice Overview. Voice bots are built on the IVR channel and hence, there are telephony metrics that are very critical while understanding overall voice bot performance like call statuses, average call duration, user traffic, etc. (along with the bot engagement metrics that are already available on Insights).

Additionally, all the data can be filtered based on dates and call directions (outbound or inbound). Call status data can be filtered by phone numbers. The dashboard has all current and historical data. Moreover, users can access the raw data for each report using the Export functionality.

  

![](https://i.imgur.com/QbUD9Yl.jpg)

  
  

#### 6.2 Low FCR reasons

> Type - Enhancement


In the Flows Summary section (User Journeys > Funnels), you can see the list of reasons why certain flow completion rates might be low and nudge to what immediate steps you can take to improve them.   
This helps you create hypotheses around poor-performing flows, make improvements to them, and ultimately boost completion rates of bot flows.

<img  src="https://i.imgur.com/21iu3Xu.png"  width="50%"/>

  

  

#### 6.3 Channel filter on User Journey Visualisation  

> Type - Enhancement


On the User journey visualisation page, we have added a filtering option based on channels (like Yellow Messenger, WhatsApp, etc.) in addition to the time filter. 
This helps you analyse flow paths taken by end-users in much better detail and depth.

  
***

## 7. **Channels**

  

#### 7.1 Slack channel support in the cloud

> Type - New feature

Slack is a workplace communication tool - a single place for messaging, tools and files.
Slack is an instant messaging system with lots of add-ons for other workplace tools. Besides an intuitive UI, you can leverage group and person-to-person messaging. These are more than 1500 apps and allow the creation of custom apps which have evolved Slack to become a one-stop-shop for a lot of users.

[Know more.](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/slack2/).

***

## 8. **Studio** 

#### 8.1 SyncAPI added to Channel Filter Node
 
 > Type - Enhancement

Earlier, if a client had hosted their channels on a third-party vendor, they could not extract the channel on YAI using the same third-party API. 
Now using sync API, third-party API can be used as a channel.

**![](https://lh6.googleusercontent.com/bd6nV55XUH9EVENY8s5sCg_YTvhi3dwi2BvHlMcqes8fFU9yocJj5ZLqcryws1imW3EWGOyzKR5P-gCbEe1UXUJJPDi2eeNiq1FTU655OQMcnxlM3VmuaOBei93HdaxWtHkHyyLpfH69FfrXY1Za2i9P12d0Rig2d1OQf5ORF0fchVd_ld5xv7-cqA)**

#### 8.2 Global FAQ Search
 
 > Type - Enhancement

Right now, to search for a FAQ, we need to know which category it belongs to because the search is limited to categories only. With this feature, we would be able to search questions across categories from the search bar.

#### 8.3 QR in Store Comment Node

   
> Type - Enhancement

In the store comment node, there is a toggle added to enable QR. QR in the comment store node is to capture the comment as well as the QR response. The comment will be stored as a fallback when the user hits enter after writing the comment, and if the user clicks on QR then that QR response will be stored in the variable.
Note: It is recommended to use the store comment node without enabling QR. The feature was built due to special requirements from a client.

<img src="https://lh5.googleusercontent.com/_WXZXUD8IsWKZ3oJmIgiXoTP9K-7lCipw0-PHZHrUQuK2u4kmWtMYBOsYB7fzmzCk7-E4Cy7WBRxnPIjVGhpzDPF9_QtBOAdF--LjaVDZCnTgl0DMniNU_Zx8ddT8tMOjh-Xy4Rla4M_IdA7juiZc_O4sto6p284q6pfapdivciAt3uYPW3e-uoG-w" alt="drawing" width="60%"/>



#### 8.4 Debugging- know Intent is getting triggered

   
> Type - Enhancement

When flows are triggered, earlier it was difficult to go and find which intent will trigger with what confidence. We have added the same in debug logs in the chat widget.

<img src="https://lh3.googleusercontent.com/mxmMOgpFXRVd9zZx1S4Ksu6es4s-NLoN6ljZFvQOFUxpmGWx6JsTNXTEMK2mv9VDZXRMfgduPPBzjGf1T_QfiHbqiJETehiRjavPAWfr06ANUMIYKmA3UWfOWI30XhAz0ULlbg8kAIM1BZt3mVGQUVacq2p1VMJ2B8O_J78ubTNO55OqBjinkVvchg" alt="drawing" width="60%"/>



#### 8.5 Input node v2
   
> Type - Enhancement. This is a beta release and some settings may not be available as per expectations like autocomplete and auto skipping options

For better & dynamic conversation design, we release a new input node. This allows:  
1. Custom validator design.
2. Attachment of different custom flows/messages every time validation fails. (So your validation failure messages are not monotonous.
3. Can attach the new “Context handler” locally for even dynamic conversations.

#### 8.6 Local Context Handler options in condition node 

> Type - New feature
  
In condition node, questions around why, what, No, repeat etc can be answered locally. Which handles multiple paths except for just validation failure or success  
For example:   
- The user asks: “Why do I need to share my phone number”  
- Configure answer: “Hi your phone number is needed to connect with you about your application updates, we promise not to spam you”



***

## 9. **Voice**

#### 9.1 User Response Acknowledgement/Filler Words 

> Type - New feature.  This feature is currently in Private Beta. 

User Response Acknowledgement/Filler Words, if configured for a particular step in the conversational journey, allow the voice bot to acknowledge the user’s response quickly. This acknowledgement is executed prior to processing any backend intent detection/CRM API calls etc that might add to the conversational delay.  
**Legacy Behavior**: {User Speech Ends} -> {Bot Processes User Inputs} -> {Bot Proceeds to the next step}.  
**New configurable Behavior**: {User Speech Ends } -> {Bot Acknowledges user response by playing a configurable voice/sound like “ok”/”got it”/”mm-hmm”} -> {Bot Processes User Inputs} -> {Bot Proceeds to the next step}



#### 9.2 New Mode for speech silence detection

> Type - New feature

A new “Streaming Advanced” mode for capturing user voice utterances on the call. In addition to the existing “Static” and “Streaming” modes, the “Streaming advanced” mode allows better control of the silence duration configurations associated with speech detection.
Bot Developers can now select “Streaming Advanced Mode” and additionally provide the following configuration parameters:   
- Initial Silence Duration
- Final Silence Duration

#### 9.3 UI configurations for recording 

> Type - New feature

Onboarded Recording Management controls on the Builder UI. Bot Developers can now use these controls, available under “Node Level Settings” > “Voice Configuration” > “Recording Action”, to Stop, Pause or Resume the Voice recording during a conversation between the Voice bot and the customer.  

[Know more](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/callrecording).  

**![](https://lh3.googleusercontent.com/b2hoUeS2HNogAvY-V-sIWWwfMnruzXVAWm-8GVJAr-3EQffImA9P3qGQPYf3StLbWf6igrrQoTBXmyaaoVeGyDQLTcWVCJ8SxHaDAppKaW7-kxqPXgAIrVUfgkD3dl3_lD4YdeabxWPoBjaaLiUxnFqf-h0upgFucz3T9et2kdte_HLYT06-Pi9tMA)**



#### 9.4 Dashboard for monitoring voice bot performance

> Type - New feature (Primarily owned by the data and analytics team. Available for use on Insights)

Voice bots are built on the IVR channel. Apart from regular bot engagement metrics already available on the insights page, telephony metrics are critical while understanding overall voice bot performance like call statuses, average call duration, etc. These metrics help stakeholders to better understand voice bot performance & further optimize.
Voice metrics to be found in the Insights > Voice Overview section:
1.  **User Traffic** - Total Calls, Total/Average Duration, and Unique Callers.
2.  **Call Statuses** - Answered/Not answered/Failed calls.

**![](https://lh4.googleusercontent.com/7ObtqHB4d_iom0BDErjeDxKrYVvz_Nk3MiOFUzUufjUPUJIC1gq7vxCDt7b6mgREsnQq_Y-zwWo6Hr6BdyiBLQDK_bmHpYpCCoIIAwAaNGU6uqpFJQzm4Ta0bNHKd9BTW434qmRNv5ExCdoBEy8l2xmx0uOVDV_Hdg3wfLx88T5WRUBuHeGTYDTL7g)**

**![](https://lh6.googleusercontent.com/bt1jGe3u_nbjVJ8n68pRPe2JytBO7tJSeLzqaoqYdQrF9rGlYG9UfUikwh0UoDLRG1-8i8kN-Y5ZMAiVa8XtkzuZ9GUKauqYdO8RhEvuOgT_xI8rROxOJSeA3LgWHkKArFXSmjdhzR7qDvIn3QUusUTRd6BcrArYfNPj_jwNEIREM_794aIKXpMcgA)**



