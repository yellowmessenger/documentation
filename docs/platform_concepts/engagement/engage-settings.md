---
title: Engage settings
sidebar_label: Engage settings
---



# Notifications Settings

The **Notifications** section in Engage allows you to configure how your bot sends updates, reports, and alerts. These settings enhance visibility and control over outbound communications, ensuring your team stays informed in real time.

You can manage the following settings under **Engage > Notifications**:


## 1. API engine

The API Engine enables the **Notification API** for your bot.

To enable notification API:

1. Go to **Settings > Engage > Notifications > API Engine**.
2. Toggle **Enable notification API engine**.
3. Click **Confirm**.

Once enabled, your bot can send notifications via the Notification API.

---

## 2. API Reports

The API Reports setting allows you to receive periodic CSV reports of Notification API activity. Reports are automatically delivered to your chosen recipients.

To configure API reports:

1. Go to **Settings > Engage > Notifications > API Reports**.
2. Under **Send notification API reports to**, enter one or more email addresses.
   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/APIreports.png" width="75%"/>

   * Press **Enter** after each email to add multiple recipients.
3. Select the time period for the reports:

   * **Start time**
   * **End time**
4. (Optional) Enable **WhatsApp v1 Notification API Reports** if applicable.
5. Click **Confirm**.

Reports will be sent automatically to the specified email addresses within the defined time window.

---

## 3. Postback URL

The Postback URL setting allows you to receive **real-time delivery status updates** and payloads from Yellow\.ai.

To configure Postback URL:

1. Go to **Settings > Engage > Notifications > Postback URL**.
2. Enable the toggle button to activate Postback delivery.
3. Enter the **Postback URL** where updates should be sent.
   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/post-back-url.png)
4. (Optional) Add headers if your webhook requires authentication:

   * Enter a **key**.
   * Enter its corresponding **value**.
5. Click **Confirm** to save the configuration.

Delivery status updates (for Notification APIs) will now be sent automatically to your webhook.

---

## 4. Campaign Alerts

Campaign Alerts keep your team informed about critical issues with campaign execution and template statuses.


* Alerts are sent to the **template creator** in case of critical template issues.
* Alerts are sent to the **campaign creator** if a campaign fails due to template disablement.

 To configure campaign alerts:

1. Go to **Settings > Engage > Notifications > Campaign Alerts**.
2. Enable the **Campaign alerts** toggle.
   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/campaign-alerts.png)
3. Select up to **10 email IDs** to receive campaign alerts.
4. Save your preferences.

You will now receive email notifications for critical campaign and template statuses.

---

## 5. WhatsApp API Preferences (MM Lite or Meta Cloud)

This setting lets you define the **default API** (MM Lite or Meta Cloud) for sending WhatsApp notifications via Flows, Campaigns, and the Notification API.

The MM Lite API uses Meta’s predictive delivery system to increase engagement by sending messages when users are most likely to respond. The global setting allows you to define how message delivery should work across all campaigns in your account.


To set up WhatsApp API preference:

1. Go to **Settings > Engage > Notifications > WhatsApp API Preferences**.
2. For each campaign type (Outbound Campaigns, Flows, Notification API), choose one of the following from the dropdown:
    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/metacloud.png" width="70%"/>


   * **MM Lite** – Optimized delivery using Meta’s predictive system.
   * **Meta Cloud** – Instant delivery via Meta Cloud API. 
3. Click **Confirm** to save your selections.

Your chosen API will be applied by default. You can override it when creating individual campaigns.



---

## 6. Limit WhatsApp Notifications per User

The **WhatsApp Notification Limit per User** setting helps you control how many notifications an individual user can receive within a specified time interval. This ensures that users are not over-messaged, while still allowing you to reach them with timely updates.  


| Field | Description |
|-------|-------------|
| **Enabled** | Toggle this option to turn the WhatsApp notification limit on or off. |
| **Limit** | Maximum number of notifications a user can receive in the defined interval. |
| **Enter limit** | Input field to set the numeric value. |
| **Interval (days)** | Number of days over which the notification limit applies. |
