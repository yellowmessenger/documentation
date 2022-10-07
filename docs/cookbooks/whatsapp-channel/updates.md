---
title: Latest updates
sidebar_label: Latest updates
---

## 1. Onboarding new verticals including Pharmacies & Drugstores and Digital Subscriptions

> Release: 25 October 2022

![](https://i.imgur.com/JDAxqpB.jpg)


Some business types currently restricted by the [Commerce policy](https://www.whatsapp.com/legal/commerce-policy?l=et) will soon be able to use WhatsApp. Businesses from the following verticals will have access to WhatsApp onboarding, with the listed restrictions:

1. Pharmacies and Drugstores can onboard for all use cases including commerce features for convenience and grocery items, but may not promote or transact in the sale of pharmaceuticals in any messaging or features
2. Digital Services and Subscriptions can onboard for all use cases except commerce features
3. Supplements can onboard for all use cases except commerce features
4. Animals (pet adoption, livestock, raw products, but excluding sale of pets and other non-livestock animals) can onboard for all use cases except commerce features
Additionally, the [Business Messaging policy](https://www.whatsapp.com/legal/business-policy) will solely govern which businesses can onboard and how they use business messaging on WhatsApp. The Commerce policy will determine which businesses can access commerce features like (catalog and payments (when available in the future, TBD).

[Business Messaging policy](https://www.whatsapp.com/legal/business-policy/?lang=en) and [Help Center article](https://faq.whatsapp.com/1473079883061196/?locale=en_US) will be updated to reflect these policy changes on October 25. 

To learn more about this policy change please review this [one-pager](https://meta.highspot.com/accounts/select/config) and the [FAQs](https://meta.highspot.com/accounts/select/config).

---

## 2. Display name visible for all verified businesses



> Release: Launching in Indonesia, Mexico, Colombia on 18 October 2022

![](https://i.imgur.com/WLFbNN5.png)


All existing and new businesses that have completed business verification and display name review will show their WhatsApp Business display name instead of their phone number in the chat list, chat screens, chat groups, and contacts view for any customers that have not added them to their contacts. Previously, we only enabled this for businesses that completed the Official Business Account process. Refer to the [documentation](https://developers.facebook.com/docs/whatsapp/overview/business-accounts#official-business-account) for more details.

-----

## 3. Additional phone numbers can start messaging immediately for verified businesses

> Release: Globally on 18 October 2022

Businesses that have completed business verification can add additional phone numbers and begin messaging immediately with up to 250 conversations per day on each number. Once the display name review is complete, this limit will automatically be updated to 1,000 conversations.  
Businesses will be notified via email and webhook once a new phone number is added and also when display name review is complete.   
Users can check the conversation limit for each phone number at any time in Account Tools within WhatsApp Manager.

-----

## 4. Transforming the value of marketing notifications: Additional features rolling out this month

> Release: October 2022


We will continue to ship features that transform the value of marketing notifications on the platform. These will enable faster scaling, enable better campaign insights, and reduce quality disruptions.  
- **Performance metrics**, including message sends and reads at the template level and top block reason, will roll out throughout the month of October via WhatsApp Manager and will be available via API/webhook next month. 
- **Limiting poorly** performing templates, not phone numbers, via **template pausing**, will be available globally. Be sure to subscribe to the [message_template_status_update](https://developers.facebook.com/docs/whatsapp/business-management-api/guides/set-up-webhooks) webhook; refer to this [dev doc](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines) for more details.
- **Increasing messaging limits faster** will be available globally. Be sure to subscribe to the [phone_number_quality_update](https://developers.facebook.com/docs/whatsapp/business-management-api/guides/set-up-webhooks) webhook; refer to this [dev doc](https://developers.facebook.com/docs/whatsapp/messaging-limits#messaging) for more details. 


----

## 5. 350 messages per second and other new features available on Cloud API

> Release: October


The following features are now available on the Cloud API hosted by Meta with no upgrades necessary:
- **350 messages** per second is now supported on the Cloud API. See more instructions on how to request higher throughput and migrate in our [developer documentation](https://developers.facebook.com/docs/whatsapp/cloud-api/overview#throughput). Cloud API will continue to increase throughput, surpassing on-premise throughput. 
- **Reactions** are now supported on the Cloud API only; See our [developer documentation](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages#reaction-messages) for how to send and receive reactions 
- The **About field** on Business Profile is now supported. See more detail about [Business Profiles here](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/business-profiles).
- New **webhook** design allows for webhook configuration per business instead of by App.
- Increasing **template text limits** from 1k to 32k for body-only templates to align with the on-premise API.
- **Embedded Signup** is now available on mobile, making it easy for your clients to onboard. Please make sure that the web page hosting your Embedded Signup flow is mobile-compatible.
- **Graph API V15** is now available.

:::info
Coming soon!

On October 12th, we will allow phone migration between WABAs for Cloud API numbers. Please view our developer documentation on October 12 for more detail. 
:::

View our [changelog](https://developers.facebook.com/docs/whatsapp/business-platform/changelog) and [Postman](https://www.postman.com/meta?tab=collections) for more information. 

We believe the Cloud API hosted by Meta is our future for business messaging and recommend all clients migrate to our cloud-hosted API if possible. We will continue to maintain our on-premise platform for required use cases. Please view our [Get Started guide](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started) for the Cloud API.

----

## 6. On-Premises API v2.43 

> Release: 11 October 2022

The next version of the **WhatsApp Business API, v2.43**, will become available. Starting from 11/10/22, please follow your regular process to upgrade to v2.43. 

**What to expect on v2.43**

* Changes to contacts node
* New API for blocking contacts
* Media reliability improvements
* Extended API timeout
* Incoming contact message fix

**Backwards incompatible changes for v2.43 and v2.45**, including contact API. For more information, please refer to the [changelog](https://developers.facebook.com/docs/whatsapp/on-premises/changelog) which will have the complete changes for v2.43.


As a reminder, [here is the guide](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/migrate-between-on-premises-and-cloud-api#on-premises-to-cloud) for migration from on-premise to Cloud API, which takes a few minutes per number with no downtime.


-------
## **Product launch delays**

:::note
We shared these products as launches we expected in H2 2022. However, we wanted to provide an update that the following have been delayed:

1. **Additional Financial Services Policy**: WhatsApp is excited about opening the platform to additional financial services businesses, such as short-term loans. Currently however, local regulatory requirements across various regions will likely impact lenders' ability to have conversations on WhatsApp. We are exploring our options to bring this vertical to our platform and will provide updates as appropriate.

2. **OTP**: WhatsApp will no longer make available a one-tap OTP feature to all customers in October; however, partners and clients can continue to send OTP on our platform with our existing text-based solution.

3. **Catalog, and Multi-Product Message call-to-action in marketing template**: Due to unanticipated technical complexity, catalog and Multi-Product Message call-to-action features will not be available in the second half of 2022 as originally communicated. We expect to communicate an updated GA timeline closer to 2023.

:::