---
title: Engage Updates
sidebar_label: Engage
featured: true
---
### 1. Allow users to set frequency of the Inbound Campaign
Users will be able to define how frequently the same visitor will see the same [**Inbound campaign**](https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign)

Defining frequency is essential because If the user keeps viewing the same campaign repeatedly and frequently, it might lead to a poor UX.
![](https://i.imgur.com/Az5kFAx.png)

### 2. Introduced New Inbound Trigger -- On Hover & Custom Events

- On hover would be very similar to a CTA event. However, instead of mouse click, this event will be triggered on hovering of the mouse. So now any inbound campaign can be triggered by hovering on an object defined under [**Web behaviour (When)**](https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType) of that particular campaign.

- Also, now the campaign can be launched using any custom events that has been defined under the Event Hub section present in studio section of the platform
![](https://i.imgur.com/g0hKnpc.png)

![](https://i.imgur.com/amBNogz.png)

### 3. Data validation cases have been added for Create and Update Audience APIs

There are data validations added for adding Audience in the user table such as 
- **invalidDataType:** It contains the columns/properties for which the wrong data type was passed
- **invalidProperty:** The column/property provided in the request body does not exist in DB.
- **propertiesRequired:** These are the mandatory columns/properties that need to be passed in the request body
 




