---
title: General settings
sidebar_label: General settings
---

## Data retention




The **Retention** setting helps automate the cleanup of old records based on a configured retention period. This helps ensure compliance with contractual and regulatory requirements by automatically removing data older than 30, 60 or 180 days.

Think of this as an automatic cleanup crew for your old data. Your Super Admin can now set a retention period (for example, 60 days). Every day, the system removes records older than the defined retention period.


> Only Super admins can configure data retention.

#### Here is how Data retention works:
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

### Supported Tables

This currently supports **29 system tables** across multiple databases:

| ✅ Supported                                          | ❌ Not Supported                        |
|-------------------------------------------------------|----------------------------------------|
| Notification Reports                                  | Agent Event                            |
| User Feedbacks                                        | API Event                              |
| CDR Reports                                           | Bot Event                              |
| Search Bar Analytics                                  | Messages                               |
| WhatsApp Consumptions                                 | User Event                             |
| Latency Metrics                                       | Bot Events Analysis / Conversation Events |
| LLM API Usage                                         | Customer Table                         |
| AI Agent Events Analysis / Conversation Events        | Knowledge Base Articles                |
| Model Conversation Analysis / Contained Resolution Analysis | Custom Tables                       |
| Bot Latency Metrics                                   | Audit Logs                             |
| Conversational Tags                                   | Messages (Chat Transcript)             |
| Voice Unidentified Utterance                          | Call Recordings                        |
| KB ML Reports                                         | Notification Reports (Split By BotId)  |
| Analytics                                             | events_by_userid                       |
| Chat Tickets                                          |                                        |
| Email Tickets                                         |                                        |
| Video Chats                                           |                                        |
| Voice Call Logs                                       |                                        |
| Sidechat Messages                                     |                                        |
| User 360                                              |                                        |
| Customer Table                                        |                                        |
| Agent Activity                                        |                                        |
| Agent Availability                                    |                                        |
| Audit Logs                                            |                                        |
| Custom Tables                                         |                                        |
| Call Details Report                                   |                                        |
| Chat Tickets                                          |                                        |
| Messages (Chat Transcript)                            |                                        |
| User Profiles                                         |                                        |
| Notification Report                                   |                                        |


