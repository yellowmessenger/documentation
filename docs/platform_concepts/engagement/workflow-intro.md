---
title: Workflow campaign Overview
sidebar_label: Workflow campaign
---

## 1. Introduction

The Workflow campaign lets you automate your marketing or collection campaigns by providing you with the leverage to reach out to your customers on multiple channels. You can also configure fallback channels and check the delivery status of messages inside the workflow.

![](https://i.imgur.com/aJ1Espm.png)

:::note
The Workflow campaign is not an alternative to the Scheduler of app.ym platform.
:::

### 1.1 Workflow vs. outbound campaigns

You can use Outbound campaigns only with a single channel and all the users will receive the same template. You cannot configure Fallbacks in case of failed notifications. 

With Workflow campaigns,  you can configure multiple channels and add fallbacks to each priority channel. 

### 1.2 Features & benefits

The following are some key benefits of Workflow campaigns - 

* Reach out to the target audience through multiple channels.
* Build Curated Flows based on the status of the outbound notification
* Higher chances of user engagement compared to single channel outbound campaigns
* Check in-flow outbound status.
* Better fallback handling for failed cases.
* Ability to call functions and APIs during execution.

### 1.3 Types of Workflow campaigns

1. [Time-based workflow campaign](/docs/platform_concepts/engagement/workflowCampaign)
2. [Event-triggered workflow campaign](/docs/platform_concepts/engagement/event-triggered-campaign)

### 1.4 Use cases


1. For Collection use cases, the primary pain point of business is reachability and ensuring that the user is getting information about the pending or upcoming payment. 

   But the concerning issue could be that the user is inactive or unavailable on the primary channel used by the business. This creates a necessity for businesses to track the delivery status for each user and then run separate campaigns on a different channel.
   ![](https://i.imgur.com/ivewgA4.png)

> The above image shows a sample Workflow where three channels were used to ensure that the message is delivered to the user at least on one channel.

2. Workflow campaigns can also increase the ROI of campaigns by targeting the users on lesser expensive channels as the primary channel and then using the higher cost-consuming channels as fallback channels to minimise the cost incurred in a single collection campaign.

![](https://i.imgur.com/zgoXaUP.png)

The above workflow shows how the campaign channels can be arranged by the preference of low to high cost consumption channels to keep the overall campaign ROI high for a  similar impression rate. 

:::note
One drawback of such type of campaigns is that the read rate for the lower cost incurring channels are also low compared to channels like WhatsApp.
:::

***

**What's next**

* See how to create [Time-based workflow campaign](/docs/platform_concepts/engagement/workflowCampaign) and [Event-triggered workflow campaign](/docs/platform_concepts/engagement/event-triggered-campaign).
* Once you run a Workflow campaign, analyze the [performance of your Workflow campaign](/docs/platform_concepts/engagement/workflow-report).