---
title: WhatsApp phone number migration
sidebar_label : WhatsApp phone number migration
---

WhatsApp phone number migration is the process of transferring a business phone number between WhatsApp Business Accounts (WABAs) to retain their display names, quality ratings, template messaging limits, official business account statuses, and approved high-quality templates. This process is initiated when a user wants to move their number from one solution partner to another.

The migration process requires the following assets:

* **Source WABA**: The account where the phone number is currently registered.
* **Source phone number**: The phone number that is currently registered with the source WABA.
* **Destination WABA**: The account to which the new phone number will be migrated.
* **Destination phone number**: The new phone number to which the current phone number is to be transferred.


:::note
* The source Business Solution Provider (BSP) has to disable two-factor authentication (2FA) for the older WhatsApp Business Account (WABA) number to allow the Yellow.ai team to initiate the migration.
* If the bot is in the R0 region, the migration should be done in the same region. There should not be a mismatch in the region.
:::

The business assets must satisfy the following requirements to be eligible for migration: 

| Asset | Migration requirements |
|-------|-----------|
| Phone number | • The phone number should be registered with the WABA.<br/>• If two-factor authentication is not enabled for the number, the administrator of the source WABA needs to disable the previously configured two-factor 6-digit pin. For more information, click [here](https://developers.facebook.com/docs/whatsapp/on-premises/reference/settings/two-step-verification/). **Note**: The phone number owner is responsible for contacting the WABA source administrator. |
| Source WABA | • Business verification must be completed and approved.<br/>• The review status of WABA needs to be approved. |
| Destination WABA | • Both business verification and the WABA review need to be completed and approved.<br/>• Set up a payment method.<br/>• Messages must be sent on behalf of the same business as the source WABA. <br/>• It needs to represent the same business as the source WABA. This means that the ID of the business that owns the source WABA or the ID of the business that the source WABA is messaging for must match the ID of the business that owns the destination WABA or the ID of the business that the destination WABA is messaging for. |
| Webhooks        | • Subscription to at least one app in the destination WABA. For more information, click [here](https://developers.facebook.com/docs/whatsapp/business-management-api/guides/set-up-webhooks/).|

### Migrate WA phone number

To migrate your WhatsApp (WA) phone number, follow these steps:

1. On the switcher, click **Channels**.

   <img src="https://i.imgur.com/kv01RDY.png" alt="drawing" width="90%"/>


2. On the Messaging page, click **WhatsApp Messenger > Get Started**. 

   <img src="https://i.imgur.com/14XbqIg.png" alt="drawing" width="90%"/>

3. Choose your account type from the drop-down and enable the checkbox to ensure that you have read the above information. Click on **Connect WhatsApp**.

   <img src="https://i.imgur.com/amgaRP3.png" alt="drawing" width="90%"/>

:::note
Ensure that you have admin access to the Facebook business manager account.
:::

4. Login to your Facebook account that is linked with your WhatsApp business manager account.

   <img src="https://i.imgur.com/qgTnAqa.png" alt="drawing" width="40%"/>
  

5. Click **Get started** to proceed with the next steps.

   <img src="https://i.imgur.com/ioTcCkc.png" alt="drawing" width="40%"/>

6. Read the terms and conditions of WhatsApp Business and Meta and click on **Continue**.

    <img src="https://i.imgur.com/wdqRUON.png" alt="drawing" width="40%"/>
  
7. Select the existing business account that you want to migrate.

    <img src="https://i.imgur.com/AOgCsrW.png
  " alt="drawing" width="40%"/>

8. Enter the required details such as *Meta business*, *Business name*, *Business website or profile page*, and *Country* to create a new WABA account, and click **Next**.

    <img src="https://i.imgur.com/VuuaWeV.png
  " alt="drawing" width="40%"/>
  
  
9. Select your WhatsApp business profile and click **Next**.

     <img src="https://i.imgur.com/h3r8EzA.png
  " alt="drawing" width="40%"/>
  
10. You will see a dialog box is displayed to enter the phone number and OTP. Close the dialog box to proceed further.


After creating a WABA, contact our [support](mailto:support@yellow.ai) team to perform the migration. The team will configure the following: 
    
1. To allow the Yellow.ai team to initiate the migration, the source Business Solution Provider (BSP) has to disable two-factor authentication (2FA) for the older WhatsApp Business Account (WABA) number.
2. Yellow.ai will initiate the migration process by sending an OTP to the WhatsApp number through an SMS/Call (The OTP is sent from a virtual US number. It's suggested to verify that the incoming services are active for the WABA number to receive OTP).
3. Once Yellow.ai verifies the OTP, the number along with the approved templates will be migrated to the Yellow.ai platform.
4. You then need to connect your bot to the new number using the [admin portal](https://admin.yellowmessenger.com).
5. 2FA is re-enabled on the Yellow.ai platform.

This process ensures the successful connection and migration of your phone number.
   