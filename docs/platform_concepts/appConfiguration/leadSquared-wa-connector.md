---
title : LeadSquared Whatsapp Connector Integration
sidebar_label : LeadSquared Whatsapp
---

You can integrate Yellow.ai with LeadSquared’s Converse platform to enable live agent support on WhatsApp. With this integration, your AI Agent can automatically transfer conversations to LeadSquared agents whenever human assistance is required.

Notification delivery reports are sent back to LeadSquared for tracking. If customers respond to these notifications, the AI Agent continues the conversation and can seamlessly escalate to a live agent when needed.

## Prerequisites

Before you begin, ensure you have:  

- An active **LeadSquared WhatsApp Business Account (WABA)**.  
- Super Admin permissions on both **Yellow.ai** and **LeadSquared**.  
- The following details from your LeadSquared account:  
  - **API token**  
  - **Delivery tracking URL**  
  - **Expire after** value  
  - **Username** (your registered WABA number, e.g., `91XXXXXXXXXX`)  
  - **Password**  
  - **Webhook URL**  




### Configure WhatsApp Business in LeadSquared

Refer to the official help guide here: [LeadSquared WhatsApp Cloud API Integration](https://help.leadsquared.com/leadsquared-whatsapp-integration-with-whatsapp-cloud-api/?utm_source=chatgpt.com).

**Steps (in brief):**

1. Go to **Apps → Apps Marketplace** in your LeadSquared account.
2. Search for **WhatsApp Business** and click **Settings → Configure**.
3. Click **Add Number** and fill in the basic details.
4. In the **Service Provider** step, select **WhatsApp Client**.
5. In the **Authentication** step, enter your **WABA number** (e.g., 91XXXXXXXXXX).
6. Save the details and refresh the page to proceed with the next steps.

---




## Add LeadSquared WhatsApp Connector in Yellow.ai

1. Go to **Extensions** → **Integrations**.  
2. Search for **LeadSquared WhatsApp Connector**.  
3. Click **Add account**.  
   ![LeadSquared WhatsApp Connector config](https://i.ibb.co/prjHyddH/2.png)
4. Fill in the configuration fields:  

   - **Account name** → Enter a unique identifier for this account. Only lowercase, numbers, and underscores (_) are allowed.
   - **API token** → Paste your LeadSquared API token.  
   - **Delivery tracking URL** → Enter the LeadSquared tracking endpoint.  
   - **Expire after** → Provide the validity duration for the connection.  
   - **Username** → Enter your registered WABA number (e.g., `91XXXXXXXXXX`).  
   - **Password** → Your LeadSquared password.  
   - **Webhook URL** → [Paste the webhook URL](#enable-notification-api-engine-in-yellowai) generated in LeadSquared.  

   

5. Click **Connect** to complete the setup.


---

### Enable Notification API Engine in Yellow\.ai

After completing the integration, you must enable the Notification API Engine in Yellow\.ai to sync delivery reports with LeadSquared.

1. Copy the **Postback URL** generated after successful integration (available on the same integration page).
2. In Yellow\.ai, go to **Settings > Engage**.
   <img src="https://i.ibb.co/gL2cbbB2/1.png" width="90%"/>
3. Enable **Notification API Engine**.
4. In the **Postback URL** section, turn on the option and paste the copied URL in the **Send the delivery status to** field.


---


## Verify Integration

1. Send a test message to your registered WhatsApp Business number.  
2. Confirm that the AI Agent in Yellow.ai responds.  
3. Check conversation logs under **Analytics → Conversations** to ensure messages are being delivered and tracked correctly.  

---



## Troubleshooting

- **Invalid credentials error** → Verify API token, username, and password from LeadSquared.  
- **Messages not delivered** → Ensure the Webhook URL is correctly configured in both Yellow.ai and LeadSquared.  
- **Expired connection** → Update the *Expire after* field with a valid duration.  

---

## Related Resources

- [Yellow.ai Integrations Overview](/docs/platform_concepts/appConfiguration/integrations)  
- [LeadSquared WhatsApp Business API Docs](https://www.leadsquared.com/)  


