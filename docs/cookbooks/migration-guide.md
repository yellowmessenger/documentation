---
title: App to cloud migration guide
sidebar_label : App to cloud migration guide
---

This is a starter guide for migrating from app.yellow.ai to cloud.yellow.ai. This document is designed to offer you clear instructions on the migration and the steps involved in making a successful transition. 

:::note
This guide is tailored for users who already have an account on app.yellow.ai and intend to migrate their existing bots to the cloud.yellow.ai platform. You **cannot** create new bots on app.yellow.ai.
:::

## Migration process

You'll begin by creating a new bot from scratch on cloud.yellow.ai and recreating all your flows, nodes, user data and every other data that was available on the app bot. Additionally, you have the option to export your client data from the app and [import it](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users) into the web bot.  This transition ensures that you leverage the full potential of cloud bot capabilities.

## Benefits of moving to the cloud

By migrating to cloud.yellow.ai, you gain access to a range of exciting features that simplify the bot-building process. Here are some key advantages:

1. **Easy-to-use interface:** The no-code platform enables users of all skill levels to create advanced bots without writing code.
2. **Exceptional support:** The cloud platform offers dedicated support to assist you with any platform-related queries or issues.
3. **Enhanced user experience:** Enjoy a seamless and intuitive bot-building experience with user-friendly features and tools.

The app bots will not have feature updates or new releases, but the cloud bots offer a broader range of product capabilities. With cloud bots, you can benefit from improved analytics, better customer engagement, the ability to run bots on multiple channels, and seamless integration with other applications for efficient bot building. 

## Feature comparison

To help you understand the differences between app bots and cloud bots, here's a quick comparison of features across various modules:

### Studio

|Features | Functions / Metrics   | APP YM | Cloud  |
|---|---------------------|--------|--------|
Validators | name validator | Yes | Yes |
 | | email validator | Yes | Yes |
 | | date validator | CODE | Yes |
 | | location validator | Yes | Yes |
 | | phone number validator | Yes | Yes |
 | | file validator | No | Yes |
 | | Custom validator (REGEX) | Yes | CODE (not upfront) |
Message Types | image | Yes | Yes |
 | | image carousel | Yes | Yes |
 | | video | Yes | Yes |
 | | file | Yes | Yes |
 | | Text | | |
Prompt Types | date | CODE | Yes |
 | | location | CODE | Yes |
 | | whatsapp list | CODE | Yes |
 | | multi select quick reply | Yes | Yes |
 | | quick reply | Yes | Yes |
 | | dynamic quick reply | CODE | CODE |
 | | cards | Yes | Yes |
 | | dynamic cards | CODE | CODE |
 | | feedback | CODE | Yes |
Actions | api call | Yes | Yes |
 | | outbound notifications | CODE | Yes |
 | | notification status | CODE | Yes |
 | | raise ticket | CODE | Yes |
 | | database search | CODE | Yes |
 | | database insert | Yes | Yes |
 | | database update | CODE | Yes |
 | | send otp | CODE | Yes |
 | | verify otp | CODE | Yes |
 | | modify variables | CODE | Yes |
 | | push to analytics | CODE | Yes |
 | | generate dynamic PDFs | CODE | Yes |
 | | get payment link | CODE | Yes |
 | | get payment status | CODE | Yes |
 | | update payment status | CODE | Yes |
 | | check condition | Yes | Yes |
 | | document cognition | CODE | Yes |
 | | change language | Yes | Yes |
 | | send email | CODE | Yes |
 | | trigger function | Yes | Yes |
 | | delay node | No | Yes |
 | | user event + event trigger nodes | CODE* | Yes |
Variables | journey variables | No | Yes |
 | | global variables | Yes | Yes |
 | | system variables | Yes | Yes |
 | | variable datatypes | Yes | Yes |
 | | memory management | Yes | No |
 | | Config variables | No | Yes |
 | | User variables (CDP) | No | Yes |
General | copy from journey | Yes | No |
 | | duplicate journey | Yes | Yes |
 | | rename journey | No | Yes |
 | | import/export journey | Yes | Yes |
 | | bulk insert journeys | Yes (as FAQs are journeys too) | ONLY FAQ |
 | | clone bot | Yes | Yes |
 | | Container monitoring dashboard | Yes | Yes |
 | | restart bot | Yes | No |
 | | smalltalk | Yes | Yes |
 | | context management | Yes | Yes |
 | | local context management | Yes | Yes |
 | | autotranslation | Yes | Yes |
 | | autoskipping UX | No | Yes |
 | | Widget Autocomplete | CODE | Yes |
 | | utterance report | Yes | Yes |
 | | surveys | Yes | Yes |
 | | regression | Yes | Yes |
 | | intelligent switching | Yes | Yes |
 | | session expiry time | Yes | No |
 | | exclude params for switching | Yes | Yes* (store comment) |
 | | Precluded expressions | Yes | Yes |
 | | Mandate expressions | Yes | Yes |
 | | logs | Yes | Yes |
 | | channel specific journey | Yes | Yes |
 | | language specific journeys | Yes | Yes |
 | |

### Inbox

| Features | Functions | APP YM | Cloud | Comments |
| --- | --- | --- | --- | --- |
| Overview | Read only dashboard | Yes | Yes |  |
| | Interactive dashboard | No | Yes |  |
| Live Chat module | Messages | Yes | Yes | Combined into Chats tab |
| | Archive | Yes | Yes | Combined into Chats tab |
| | Chats | No | Yes | Contains Chat, Archive & Messages tab |
| | Auto translate | No | Yes |  |
| | Queue inactivity | No | Yes |  |
| | Missed chat reasons | No | Yes |  |
| | Transfers/Collaborators | Yes | Yes |  |
| | Video calling | Yes | Yes |  |
| | Voice calling | Yes | Yes |  |
| | Screen sharing | Yes | Yes |  |
| | Search | Yes | Yes |  |
| | Search inside messages | Yes | Yes |  |
| | Exact search | No | Yes |  |
| | Typing indicator | Yes | Yes |  |
| | Bulk actions | No | Yes |  |
| | Agent group supervisor | Yes | Yes |  |
| | Custom fields | Yes | Yes |  |
| | Custom fields Validation | Yes | No | Deprecated |
| | Close ticket options | Yes | Yes | Hierarchical custom field |
| | Support for Whatsapp 24hr session expiry | No | Yes |  |
| | Instagram 7day session expiry | No | Yes |  |
| | Bulk concurrency update | No | Yes |  |
| | AI collaborator | No | Yes | Generative AI features |
| Email ticketing module | Basic email ticketing | Yes | Yes |  |
| | Send receive attachments | Yes | Yes |  |
| | Canned responses / Templates | Yes | Yes |  |
| | Custom fields | Yes | Yes |  |
| | SLA management | No | Yes |  |
| | Email reports | Yes | Yes |  |
| | Email analytics | Yes | Yes |  |
| | Email templates | No | Yes |  |
| | Activity Log | No | Yes |  |
| | HTML email templates | No | Yes |  |
| Reporting & Analytics | Default reports | Yes | Yes |  |
| | Custom reports (Data Explorer) | No | Yes | Deprioritized for now. Reach out to us if needed |
| | Analytics | Yes | Yes |  |
| Contacts management | 360 view - tickets, chats, timeline | No | Yes |  |
| | Tags | No | Yes |  |
| | Proactive engagement/reachout | No | Yes |  |
| Agent Assist | Gen AI Features | No | Yes | Summarization and tone change |
| | Notifications | No | Yes |  |
| | Custom agent statuses | No | Yes |  |
| | Canned responses suggestions | No | Yes | Phased rollout, Reach to us if you're interested to try it out |
| Knowledge Base | Internal KB | No | Yes |  |
| | External KB | No | Yes |  |



### Insights


| Sections | Features | Functions / Metrics | APP YM | CLOUD |
| --- | --- | --- | --- | --- |
| Growth Overview | Overview | Users, Messages, Sessions, Avg Session duration | Yes | Yes |
| | |Real-time users & journey count | Yes | Yes |
| || Users by time of day | Yes | Yes |
| | |Users traffic channel / medium | Yes | Yes |
| | |Users by country | Yes | Yes |
| | |Users by device | Yes | Yes |
| | |Bot accuracy, Goal completion rate & Human takeover rate | Yes | Yes |
| | |Top Journeys | Yes | Yes |
| | |Top unidentified utterances | DEPRECATED | DEPRECATED |
| |Bot Overview | User Visited - Revisited | Yes | Yes |
| || Bounce Rate Deepdive | Yes | Yes |
| | |Demographics - Country, Region, UTM etc | Yes | Yes |
| |Journey Triggers | Top Journeys | Yes | Yes |
| || Step summary | Yes | Yes |
| | |Category details | Yes | No |
| | |All journey details | Yes | Yes |
| |API Usage | Usage by status codes | Yes | Yes |
| | |API Hits | Yes | Yes |
| || API Response Time | Yes | Yes |
| Insights | Custom dashboard | - | Yes | DEPRECATED |
| Reports | Health | - | Yes | No |
| | Billing | - | Yes | No |
| | Unidentified Utterances | - | Yes | No |
| Growth New App | Data Explorer | - | No | Yes |
| | Dashboard building using data explorer | - | No | Yes |
| | User Journey Visualization | - | No | Yes |
| | Channel level filters | - | Yes | Yes |



### Engage

| Features                     | Functions / Metrics                              | APP YM  | Cloud |
|-----------------------------|-------------------------------------------------|---------|-------|
| Inbound Engage              | Inbound campaigns setup and widgets              | Yes (QA)| Yes   |
| Template Manager            | Create and Manage Templates                       | No      | Yes   |
|                             | Sync with WABA                                    | No      | Yes   |
|                             | Template Manager - SMS, Email, WA, Viber Business, GBM | No | Yes   |
| Campaign Manager            | Whatsapp, SMS, Email                              | Yes     | Yes   |
|                             | Voice                                             | Yes     | Yes   |
|                             | Journey Triggers                                  | No      | Yes   |
|                             | Teams, Slack | No | No    |
| Notif API                   | v1 - Whatsapp                                     | Yes     | Yes   |
|                             | v2 - Whatsapp                                     | Yes     | Yes   |
|                             | v2 - SMS                                          | No      | Yes   |
|                             | v2 - Email                                        | Yes     | Yes   |
|                             | v2 - Optin check                                  | Yes     | No    |
| CDP                         | Revamped Users Module                             | No      | Yes   |
|                             | User APIs                                         | No      | Yes   |
|                             | CDP Builder Integration                           | No      | Yes   |
|                             | CDP Outbound Engage Integration                    | No      | Yes   |
|                             | User Search APIs                                  | No      | Yes   |
| Event triggered campaigns   |                                                  | No      | Yes   |


### Doc cog

| Features                            | Functions            | APP YM| Cloud |
|------------------------------------|-----------------------------|-----------|------|
|Upload Documents| Upload from computer<br/>AWS S3<br/>Sharepoint|Yes<br/>No<br/>No| Yes<br/>Yes<br/>Yes|
|Ananlytics Dashboard|	Analytics|	No|	Yes|
|No-code Doc cog ||		No	|Yes|
| Error logging in UI                    | Upload errors, etc       | No     | Yes   |
| FAQ Webpage Parsing                    |                         | No     | Yes   |
| NLU settings - Boost rank              |                         | No     | Yes   |
| Add QNA to FAQ section                 |                         | No     | Yes   |
| Add QNA to journeys                    |                         | Yes    | No    |
| Subscription related UI upgrade messages |                       | No     | Yes   |
| Table Parser                           |                         | No     | Yes   |
| Vertical Cards                         |                         | Yes    | Yes   |
| Preview window                         |                         | Yes    | Yes   |
| Meta data tags                         |                         | Yes    | Yes   |

### Channels

|Features | Functions / Metrics   | APP YM | Cloud  |
|---|---------------------|--------|--------|
| Web Widget          | Banners               | Yes | No  |
|                     | Product cards         | Yes | No  |
|                     | Initial State options | No  | Yes |
|                     | Tracker cards         | No  | Yes |
|                     | Receipt cards         | No  | Yes |
|                     | Date picker           | Yes | Yes |
|                     | PWA                   | Yes | Yes |

### Integrations

| Features | APP YM     | CLOUD     |
|---------------------|------------|-----------|
| Integration         | In Backlog | Available |
| Salesforce CRM      | No         | Yes       |
| Zoho CRM            | No         | Yes       |
| Paytm               | No         | Yes       |
| Shopify             | No         | Yes       |
| Other Integrations  | No         | Yes       |


### Marketplace

| FEATURES / METRICS   | APP YM | CLOUD  |
|---------------------|--------|--------|
| Import of Components |   No   |  Yes   |
| Export of Components |   No   |  Yes   |
| Template Bots (WIP)  |   No   |  Yes   |



## Creating a new cloud bot

Follow these steps to create a new bot on cloud.yellow.ai:

1. [Sign up for an account](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#2-signup-to-yellowai) on cloud.yellow.ai if you haven't already.
2. Provide the necessary details and specifications for your new bot.
3. Design the conversation flow of your bot by adding [flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) and [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes).
4. [Test your bot](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) thoroughly to ensure its functionality.
5. [Publish your bot](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) to make it available for users.
6. [Utilize campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign) and [live chats](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat) to engage and assist your bot users.
7. Extend the reach of your bot by deploying it on [multiple channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) and [integrating](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview) it with third-party applications.

Additionally, we offer training materials to help you master the yellow.ai platform. Enroll in our training program [here](https://ascend.yellow.ai/). You can also find helpful product videos on our official [YouTube channel](https://www.youtube.com/channel/UCagDUPsrF0yS5KX1hckaUzw/videos).

If you prefer personalized training sessions with our experts, please reach out to academy@yellow.ai.

We hope this guide assists you in successfully migrating your bots from app.yellow.ai to cloud.yellow.ai. 

