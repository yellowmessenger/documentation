---
title: General settings
sidebar_label: General settings
---

## Data retention setting




The **Retention** setting helps automate the cleanup of old records based on a configured retention period. This helps ensure compliance with contractual and regulatory requirements by automatically removing data that is no longer needed.

Think of this as an automatic cleanup crew for your old data. Your Super Admin can now set a retention period (for example, 90 days). Every day, a background job will automatically find and delete any records older than that period.


> Only Super admins can configure data retention.

#### Here is how Data retention setting works:
- When enabled, retention will **automatically delete records** older than the selected timeframe.  
- Once a retention period is set, it **cannot be modified or disabled**.  
- The retention job will run automatically **once every day** in the background. On each run, the system checks all supported tables and **deletes any record older than the configured retention period** 
- Data deleted by the retention job **cannot be recovered**.  


:::note
Enabling retention is permanent and cannot be reversed. Carefully evaluate compliance and operational requirements before turning it on.
:::

1. On the Settings page, navigate to **General** > **Data Retention**.
2. In **Request to delete data from Yellow.ai older than**, choose from available options (30, 60, 180 days).

   <img src="https://i.ibb.co/3mZHvpwp/2.png" alt="2"/>
3. Click **Save**.
4. On the confirmation screen, **Yes** to proceed.
   <img src="https://i.ibb.co/KcJvFyB6/1.png" alt="1"/>

