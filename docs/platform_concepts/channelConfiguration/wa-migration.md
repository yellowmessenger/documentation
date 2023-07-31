---
title: WhatsApp phone number migration
sidebar_label : WhatsApp number migration
---

The migration process involves 3 main assets:

* **A source WABA** - The account the phone number is currently registered to.
* **A phone number** - The number that will be migrated.
* **A destination WABA** - The account the number will be migrated to.

The business assets must satisfy the following requirements to be eligible for migration: 

| Asset | Migration requirements |
|-------|-----------|
| Phone number | • Phone number registration with WABA.<br/>• If two-factor authentication is not enabled for your number, the administrator of the source WABA needs to disable the previously configured two-factor 6-digit pin. For more information, click [here](https://developers.facebook.com/docs/whatsapp/on-premises/reference/settings/two-step-verification/). <br/>**Note**: The owner of the phone number is responsible for reaching the administrator of the WABA source. |
| Source WABA | • Business verification needs to be finished and approved.<br/>• The review status of WABA needs to be approved. |
| Destination WABA | • Both business verification and the WABA review need to be completed and approved.<br/>• Set up payment method.<br/>• Messages must be sent on behalf of the same business as the source WABA. <br/>• It needs to represent the same business as the source WABA. This means that the ID of the business that owns the source WABA or the ID of the business that the source WABA is messaging for must match the ID of the business that owns the destination WABA or the ID of the business that the destination WABA is messaging for. |
| Webhooks        | • Subscription to at least one app in the destination WABA. For more information, click [here](https://developers.facebook.com/docs/whatsapp/business-management-api/guides/set-up-webhooks/).|

**Process:**
1. WABA is created on the Yellow.ai platform using the embeded sign up process and follow the instructructions mentioned in [Create WhatsApp business account](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#11-create-whatsapp-business-account) from steps 1-11.
2. After Step 11, reach out to the customer support team for the further migration process mentioned below.
3. The WABA created will be reviewed by WhatsApp.
4. Then, the support team should configure the following: 
   
   a. Source BSP has to disable the 2FA for the older WABA number to allow the Yellow.ai team to initiate the migration.

   b. Yellow.ai will initiate the migration process by sending an OTP to the WhatsApp number through an SMS/Call (The OTP is sent from a virtual US number. It's suggested to verify that the incoming services are active for the WABA number to receive OTP).

   c. Once the Yellow.ai verifies the OTP, the number along with the approved templates will be migrated to the Yellow.ai platform.

   d. 2FA is re-enabled on the Yellow.ai platform.