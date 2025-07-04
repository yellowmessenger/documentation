---
title: Engage overview
sidebar_label: Overview
---

Engage is a customer engagement module that enables marketers to craft multichannel campaigns intuitively.  Engage helps marketers deliver total lifecycle CX from acquisition through transaction, to retention and growth.



Yellow has dedicated features to help manage your business campaigns efficiently.


![](https://i.imgur.com/InpWUnu.png)

Effective campaign management is necessary for a successful business workflow. Creating an effective campaign requires a lot of effort and time.

With the Engage module, admins can build and execute marketing campaigns by targeting a set of customers with relevant marketing content across a variety of channels.


## 1. Types of engagement
The following are the different types of campaigns Yellow.ai supports.

### 1.1 Outbound campaign

Outbound engagement is a type of campaign that help brands reach out to their customers proactively. You can send out outgoing messages to your end consumers for promotional and transactional objectives.

* Bulk email campaign for **promotional reasons**. For example, holiday offers, clearance sales, new product or store launching announcements.
* Personal high-context email notifications for **transactional updates**. For example, appointment reminders, email confirmation, OTP, and password change notifications.


You can send an outbound campaign through multiple channels such as Email, SMS, WhatsApp, FB Messenger, Viber, and Slack. [Know more](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/overview).

:::note
The campaigns on messaging channels such as *FB Messenger* will be in the form of notifications.
:::  

To know how to create an Outbound campaign in detail, see [this article](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign)

### 1.2 Flow campaign

The Flow campaign is an outbound campaign that lets you automate your marketing or collection campaigns by providing you with the leverage to reach out to your customers on multiple channels. You can also configure fallback channels and check the delivery status of messages inside the workflow.

:::note

**Flow vs. outbound campaigns**:

Outbound campaigns can only be used with a single channel and all the users will receive the same template. You cannot configure Fallbacks in case of failed notifications. 

With Workflow campaigns, you can configure multiple channels and add fallbacks to each priority channel. 

:::


### 1.3 Inbound campaign

Inbound engagement is carried out when customers visit the brand's website to explore the product or service offerings. Inbound engagement helps in converting casual visitors into prospective leads or buyers.

To know about Inbound engagement in detail, see [this article](https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign).



## MMLite API integration for campaign messages


The **MM Lite API** is an intelligent delivery enhancement that leverages Meta’s infrastructure to optimize the timing of message delivery. It is designed to improve campaign performance by delivering messages when users are most likely to engage—based on behavioral signals and Meta's predictive delivery logic.

This feature is supported across:

* **Outbound campaigns**
* **Flows**
* **Notification APIs**


### Key benefits

* **Smarter Timing**: Messages are delivered when users are most active or likely to respond.
* **Effortless Setup**: Once onboarded, MM Lite works behind the scenes. No changes needed to how you create campaigns.
* **Granular Control**: Use global preferences or override settings at the campaign/module level.


### Availability

| Criteria             | Details                                             |
| -------------------- | --------------------------------------------------- |
| Customer Eligibility | Only available for customers onboarded to MM Lite   |
| Template Support     | Only supports Meta-approved **MARKETING** templates |
| Modules Supported    | Outbound Campaigns, Flows, Notification API         |


### Behavior


By default, MM Lite follows the delivery mechanism defined in **Global settings**. If enabled, all supported campaigns will use MM Lite unless explicitly overridden.


You can override the global MM Lite setting at the following points:

* **Outbound Campaign creation screen**
* **Flows configuration**
* **Notification API payloads (via `apiReference`)**


### How to enable

For accounts managed by Yellow.ai:

* Your **Customer Success Manager (CSM)** will assist you with MM Lite onboarding.
* You can also request your CSM to enable this your CS.

Once enabled, you can configure MM Lite delivery preferences as explained here:

#### Set MM Lite preference at org level
Use this setting to define default delivery preferences for all campaign types—Flow Campaigns, Outbound Campaigns, and Notification API messages—across your organization.

1. On the left navigation pane, go to **Settings** > **Engage** > **WhatsApp API Preference**.

   ![](/img/cdp/whatsapp-preference.png)

2. For each API type, choose your delivery preference.

    <img src="/img/cdp/p2.png" width="50%"/>

3. Click **Confirm**.

#### Setting MM Lite at individual campaign level


You can also configure this setting while creating a Flow, Outbound campaign, or using Notification APIs. It overrides the global (org-level) configuration and applies only to the specific campaign or use case.


For more details, refer to the relevant documentation.



### Reporting for messages delivered through MMLite 

A new column called **API Preference** has been added to notification reports. This column displays the delivery method used for each message (e.g., **Cloud API**, or **MM Lite**) to improve transparency and traceability.


### Limitations

* MM Lite is not available for **non-Marketing** templates.
* Only eligible for customers who have completed MM Lite onboarding.
* Delivery optimization is controlled by Meta; Yellow\.ai does not guarantee exact timing.


---





## 2. Access Engage module

:::note
There are two user roles for Engage module. 

* **Engagement admin**: Authorized to send campaigns and create audience groups.
* **Engagement user**: Can only schedule campaigns.
:::

To access Engage, follow these steps -
1. Login to https://cloud.yellow.ai and go to your AI-agent.  
2. Use any of the following ways -
   * Click on **Engage for campaigns** under *Quick links*.
   * Click on the main menu to expand and select **Engage**.

   ![](https://i.imgur.com/eyL6QxV.png)

:::note
If you are unable to access the Engage module, check your role with the Ai-agent's Super admin and request the required role - 
* *Engagement admin* to send campaigns and create audience groups.
* *Engagement user* to just schedule campaigns.
:::













