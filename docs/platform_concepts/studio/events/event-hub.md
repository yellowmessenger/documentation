---
title: Events
sidebar_label: Handle bot events
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




Events are occurences that happen in a platform or system.

For example, let's consider a customer support chatbot for an e-commerce platform. When a user initiates a conversation, a welcome event is triggered, presenting a greeting message along with options for the user to select from.

You can use these events to trigger specific bot flows, run campaigns, or perform any other actions based on your requirements.

## Types of events in yellow.ai

The following are the different types of events available for different modules.

### <a name="wid-1"></a> Widget related events

The following are the events available for our chat widget.

| Event | Description |
|--------|---------------|
| bot-opened | For websites:  When a user clicks on the chat bubble to open the bot.<br/>For PWA: When the bot loads. |
| bot-closed | When the user closes the bot.|
| bot-loaded-on-page-reload | When the user reloads the current bot page or the page gets reloaded automatically. |
| ym_home | When the user clicks the home button. |
| ym_closed_promotion | When the user closes the promotion in the bot. |
| page-url-based-trigger | Triggers based on a specific URL or webpage. |

***

### Inbox related events

Refer to this [doc](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxevent) for inbox events.

### <a name="eng-1"></a> Engage related events

The following are the events available for **Engage**.


<Tabs>


<TabItem value="quick_reply_event" label="quick_reply_event" default>

This event occurs when a user clicks on Quick reply option in whatsapp.

**Event schema**

```json
{
  "event": {
    "code": "quick_reply_event",
    "data": "Haan, vapas aana hai",
    "templateName": "Template name",
    "userId": "919533211xxx",
    "campaignId": "apiNotifications",
    "extraParams": {
      "campaignId": "apiNotifications",
      "templateId": "element name:”Template name",
      "workflowId": "null"
    }
  }
}
```

</TabItem>

<TabItem value="campaign-notification-updates" label="campaign-notification-updates" default>

Receive updates on campaign notifications

</TabItem>

<TabItem value="whatsapp-referral" label="whatsapp-referral" default>

When a user referral is identified through WhatsApp. 

</TabItem>

<TabItem value="fb-ad-referral " label="fb-ad-referral " default>

When a user interacts with a Facebook ad and is referred to a specific destination or webpage.       

</TabItem>
</Tabs>

-------------------

#### Facebook Click-to-WhatsApp Campaign Event

This event is triggered by Facebook campaigns that utilize the Click-to-WhatsApp feature, which allows users to navigate directly to WhatsApp from the ad.

When a user interacts with a Facebook ad, a referral event is received by the bot, containing information about the user and the campaign.

##### Prerequisites
1.  The Facebook page where the campaigns are run should be linked with a WhatsApp Business Account number which is integrated with the bot. [See how to do it](https://www.facebook.com/help/iphone-app/2783732558314697).
2.  The following events need to have enabled from the event hub for that particular bot.
 
   * whatsapp-referral
   * fb-ad-referral
    
   ![](https://i.imgur.com/Up3dBHY.png)


The referral event follows the following process:

1. The user clicks on an ad that has the Click-to-WhatsApp call-to-action (CTA) configured.
2. The user is redirected to WhatsApp with a pre-configured message related to the ad.
3. To trigger the referral event in the bot, the user needs to send the pre-configured message without making any edits.
4. The advertising business receives an inbound message notification that includes the referral property. This referral property provides additional context about the ad that triggered the message.
5. The business can utilize the information received from the event to appropriately respond and engage with the user.


:::note
If the user modifies the pre-configured message, the referral event will not be triggered.
:::

By leveraging the referral event and the associated information, businesses can effectively track the success of their Facebook Click-to-WhatsApp campaigns and tailor their responses accordingly.
    

You can get the following fields in your referral event object:

| Field        | Datatype        | Description                                                                                                                                                                                                                                                                                                                                                             |
|--------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `headline`   | String          | Represents the text used in the ad that generated the message.                                                                                                                                                                                                                                                                                                           |
| `body`       | String          | Represents the source type of the ad. Supported values are "ad" and "post".                                                                                                                                                                                                                                                                                             |
| `source_id`  | String          | Represents the Facebook ID for an ad or a post.                                                                                                                                                                                                                                                                                                                        |
| `source_url` | String          | Represents the URL that leads to the ad or post. Opening this URL takes you to the ad viewed by the user. A referral object may contain only the `source_url` field in some cases. This can happen if: <ul><li>A user sends the message before the context for the ad or post has been rendered on the user’s app.</li><li>An error or mismatch occurs when the user's client tries to look for the ad or post’s context.</li></ul> |
| `image` and `video` | [Media object](https://developers.facebook.com/docs/whatsapp/api/webhooks/components#media) | Represents the image or video that the user saw and clicked. This object will not appear if the `skip_referral_media_download` application setting is set to `true`. See application settings for more details.                                    |

---

<img src="https://i.imgur.com/HoEs2lH.png" alt="drawing" width="60%"/>

<img src="https://i.imgur.com/N0tyDzL.png" alt="drawing" width="50%"/>

**Sample event data that will be captured in bot logs**

```json
"event":
{
“code”:“whatsapp-referral”,
"data": {
"body":"Find the quickest answers to the hardest questions with EMBIBE’s Doubt Resolution",
"headline":"Chat with us",
“source_id":“23849768127610425",“source_type":"ad",
“source_url":"https://fb.me/1h8GtCKq7",
“video":{

"id":"42ac72f-204d-4f5b-81f4-f09bf1952253"
},
“message":“How can I use the Doubt Resolution feature?"
}
}
```

![](https://lh3.googleusercontent.com/GLf8hJ60i47iUPB2I1DcMrR02CAzieRUpkepQr4eGgJAMoJpwBOdO2hhGiBh3F69nBQu-T69OOL7EHEvMwLlwn7rK3rEt_cinNh-I_NYeloG1xaByMJwnV12_CSIdnyu_qAedCZohqsd1TlPa1KzhkVHTyX7aN3uTZcgEp3pgJ2MWiNP6CYuZ833zoEi)

![](https://lh6.googleusercontent.com/Uy8n_hGEaF2UxU0di4TtiWVoUIc2rPXOwESYpKlCMIkj2M0Yd32GVvh91BHXR0Rjw1itlr9UgUlpHDwwgYbJFHiGnaPJN6THh14qePQxd1AWwv8IDfqXyRjOJii2oYMF_FTuQjAYRfgn8LBd5MUct8dqF-sRv4rQn2S7B_odV_aVoq5oDrj1S5gEeg4h)

***

### <a name="int-1"></a>  Integration related events

The integration related events depend completely on the events the respective third-party app supports. Hence, the list of supported events might vary for each integration.

#### Shopify related events

Event | Description
----- | ----------
|shopifyCustomerUpdate | When there's an update to a customer's information in a Shopify store.
|shopifyNewOrder| This event occurs when a new order is created in a Shopify store, indicating a customer's purchase.
|shopifyNewProduct | When a new product is added to the Shopify store's inventory.
|shopifyOrderCancelled | This event happens when an order in the Shopify store is canceled.
|shopifyOrderFulfilled | When an order is marked as fulfilled, indicating that it has been shipped or completed.
|shopifyOrderPaid | When an order in the Shopify store is marked as paid.
|shopifyRefundCreated | When a refund is created for an order in the Shopify store.
|shopifyNewCustome | When a new customer is added to the Shopify store.
|shopifyCheckoutCreated | When a customer initiates the checkout process in the Shopify store.
|shopifyCheckoutUpdate | When there's an update to a checkout in progress.
|shopifyOrdersUpdated | When there are updates or modifications to existing orders in a Shopify store.
|shopifyCartCreate | When a customer creates a shopping cart in the Shopify store, indicating their intent to make a purchase.
|shopifyCartEmpty | When a customer empties their shopping cart, indicating the removal of items they previously intended to purchase.
|shopifyUserSessionCreate | When a user initiates a session in the Shopify store, typically by logging in or visiting the site.
|shopifyUserSessionUpdate | When there's an update or change in the user's session within the Shopify store.



***

### <a name="uie-1"></a> User inactivity events

User inactivity event refers to a specific event that is triggered when a user remains inactive or doesn't respond to the bot's prompts for a certain period of time. 

For example, if we ask for an email and get no response, we may check if they are still available or repeat the request. Options include sending a message, repeating the prompt, or starting a new flow to handle inactivity.

For a detailed use case guide on this event, click [here](https://docs.yellow.ai/docs/cookbooks/studio/user-inactivity).

### To create user inactive events:

1. Go to **Studio** > **Event** > **User inactivity events** > **+ Add event**.

   ![](https://i.imgur.com/1Tie3If.png)

2. In **Event name**, provide a name to that event.

   <img src="https://i.imgur.com/6osVbAp.png" alt="drawing" width="50%"/>

3. In **Event description**, describe that event.
4. In **Event delay**, type the inactive time in minutes/seconds.
5. Activate **Activate for specific steps** to activate this event for a certain step in a flow.
6. Activate **Handle event with message** to display a message when a user has been inactive.
7. Enable **Show previous prompt** to nudge the user to provide answer to the question.
8. Click **Create event**.

###  Schedule events

Schedule events are used to define the exact timing at which a workflow of your choice need to be triggered. Schedule events work only for flows that have been created as a workflow. To know about workflows in detail, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#workflow).

By setting up Schedule events, you can determine when certain actions or processes within your system should be executed, providing better control and automation over your workflows.

#### To schedule an event:

1. Go to **Schedule events** > **+Add Event**

   ![](https://i.imgur.com/Dp1g6rN.png)

2. In **Event name**, enter the name of the event.


   <img src="https://i.imgur.com/Thn8N4W.png" alt="drawing" width="50%"/>

3. In **Event description**, describe that event.
4. Choose any option under **Execute event**.

| Fields      | Descriptions                                                                                                                                                                                                                                                       |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Once        | Execute the event once on a specific date and time.                                                                                                                                                                                                                |
| Recurring   | Set regular event occurrences with options like Hourly, Daily, Weekly, or Monthly intervals. Customize timing based on Minutes, Time, Date, or Day. Choose Timezone and End date for concluding recurring events.                                                    |
| Advanced    | Use cron expressions for flexible scheduling of complex scenarios. Cron expressions consist of six or seven subexpressions (fields) defining various schedule aspects. This option offers greater control over event timing and execution. |


:::note
It is advisable to use the Advanced option solely for intricate use cases that cannot be accommodated through Once or Recurring. Familiarity with [Cron expressions](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.html) is essential when utilizing this feature.
:::

5. In **Date** and **Timezone**, choose the date and timezone in which the event should be carried out.
6. Click **Create event**.


:::note
By default, a scheduled event is in activate state. You can deactivate, edit, or delete the event by using the more options icon.
    ![](https://i.imgur.com/gAjgQEw.png)
:::


### User 360 events (System events)

These are sytem events that helps in triggering flows or perform actions on user profile related activities - when a user is created, user details are updated, and user profile is deleted.

The following are some real-time use cases that you can solve with these events:

* Send onboarding campaigns when a new user is created
* Send message when a user information is updated or deleted.
* Sync data to an external CRM through APIs when a user is added/upated/deleted.
* Sync data from an external database through APIs when these events occur.

Event | Description | Sample payload
------ | ---------- | -------------
USER_CREATE | When a user record is created in (CDP) DB through any of the following operations:<br/>- Single User Creation in UI<br/> - User Creation through Builder<br/> - User Creation through API<br/> - User Creation through CSV Import |  {<br/>            "id": "IN5TK-OyZekJUT2xldP1J",<br/>            "botId": "x1659503658437",<br/> "userId": "x1659503658437_jolly@example.com",<br/>           "event": "USER_CREATE",<br/>            "source": "SYSTEM",<br/>            "payload”: {<br/>                "timestamp": 1666340842464,<br/>                "user": {                    <br/>"firstName”: "Jolly",<br/>                   "gender": "FEMALE",<br/>                   "profileComplete": "17.65",<br/>                   "userId": "jolly@example.com"  <br/>              },<br/>                "userId": "jolly@example.com"<br/>            },<br/>         "createdAt": "2022-10-21T08:27:23.000Z"<br/>,<br/>           "updatedAt": "2022-10-21T08:27:23.000Z"<br/>,<br/>     "deletedAt": null<br/>        }
USER_UPDATE | When a user record is updated in (CDP) DB through the following operations:<br/> - Single User Updation in UI<br/> - User Updation through Builder <br/> - User Updation through API<br/> - User Updation through CSV Import | **Setting an unset field**:<br/> {<br/> "id": "5IjS7mCLBEWehufVSa3Jj",<br/> "botId": "x1659503658437",<br/> "userId": "x1659503658437_jolly@example.com",<br/>"event": "USER_UPDATE",<br/>"source": "SYSTEM",<br/>"payload": {<br/>"newPayload": {<br/>"city": "Bengaluru",<br/> "country": "IN",<br/>"lastName": "Harsha",<br/>"profileComplete": "35.29"<br/>},<br/>"oldPayload": {<br/>"city": null,<br/>"country": null,<br/>"lastName": null,<br/>"profileComplete": "17.65"<br/> },<br/> "timestamp": 1666352773812,<br/>"userId": "jolly@example.com"<br/> },<br/>"createdAt": "2022-10-21T11:46:15.000Z",<br/>"updatedAt": "2022-10-21T11:46:15.000Z",<br/>  "deletedAt": null<br/> } <br/> **Updating an already set field**: <br/>{<br/> "id": "O0-AanNYjvHzWB-l62tKM",{<br/> "botId": "x1659503658437",{<br/>  "userId": "x1659503658437_jolly@example.com",{<br/> "event": "USER_UPDATE",{<br/> "source": "SYSTEM",{<br/> "payload": {{<br/> "newPayload": {{<br/> "city": "Mysore"{<br/> },{<br/> "oldPayload": {{<br/> "city": "Bengaluru"{<br/> },{<br/> "timestamp": 1666353518569,{<br/> "userId": "jolly@example.com"{<br/> },{<br/> "createdAt": "2022-10-21T11:58:40.000Z",{<br/> "updatedAt": "2022-10-21T11:58:40.000Z",{<br/> "deletedAt": null{<br/> }
USER_DELETE | When a user record is updated in (CDP) DB through any of the following operations: <br/> - Single User Updation in UI<br/> - Bulk User Deletion from UI<br/> - User Deletion during MERGE<br/> - User Deletion through API | {<br/>    "user": {<br/>        "firstName": "kumar",    <br/>        "userName": "sasi",<br/>        "userId": "10"<br/>    },<br/>    "userId": "10",<br/>    "timestamp": 1657713515000<br/>  }

### Custom events

In addition to the standard events available, you have the flexibility to create custom events that allow you to perform various actions and activities not listed on th events page.

To create a custom event, follow these steps:

1. Go to **Studio** > **Event** **Custom events** > **+Add Event**.

   ![](https://i.imgur.com/yz0DL7n.png)

3. Add **Event name** and **Event description**. 

   <img src="https://i.imgur.com/N3hkCdN.png" width="300"/>

3. Then, push the event data using the Push user event [POST /v1/internal/event/](https://documenter.getpostman.com/view/17583548/UVsEVUsg#00eb59cf-7f00-461e-8d53-94eafb056a9a) API.

:::note
1. The above-mentioned API doesn't allow genric payloads and cannot be used as a general webhook.
2. Once a custom event is created, you can activate, deactivate, edit or delete a custom event. 
:::

### Whatsapp events

Whatsapp events refer to the events related to Whatsapp.



| Event | Description | 
| -------- | -------- | 
| whatsapp-product-query | When a user enquires about a product on whatsapp|
|whatsapp-cart | When a user adds a product to the cart on Whatsapp|

## Activate events

For the bot to perform certain actions when an event occurs, the event needs to be activated. To activate an event and use it in your flow,

1. Go to **Event** and click any module (except **Schedule**, **User 360**, **Custom** and **User events**, refer the docs above to create those events)
2. Click more and click **Activate** on the respective event.

   ![](https://i.imgur.com/BHmLQQk.png)

3. Go to a flow and include that event in the Start node and [build the flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) to carry out the action when that event occurs.

   ![](https://i.imgur.com/JrzUEOo.png)

## Deactivate/Delete events

Deactivate will deactivate an event and delete will remove that event from the platform.

:::info
You cannot delete standard events, only custom events can be deleted
:::

To deactivate/delete an event,

1. Go to **Event** > click any module.
2. Click more and click **Deactivate** or **Delete** on the respective event.

   ![](https://i.imgur.com/bnfCMIs.png)