---
title: Unified access control for T1 & T2 bots
sidebar_label: Unified ACL
---

Tier 1 (T1) and Tier 2 (T2) bots operate in dual environments, including Staging and Production or Development and Live. The access control for these environments is unified, meaning that access to Staging/Development bots will mirror the access control settings of the Live/Production bots for a given user.

Roles for adding collaborators to your bot remain consistent across all tiers. You can refer to [this link](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators#user-roles-and-access) for information on available roles. However, the process of roles assigned differs for T1 and T2 bots, and this document outlines those distinctions.

**Collaborator(Role Access) management for T1 and T2 bots**

| Access provided in Live/Production | Access available in Development/Staging |
| ---------------------------- | ------------------------------- |
| Admin                        | Admin + Agent                   |
| Developer                    | Developer + Agent               |
| Approver                     | Approver                        |
| Admin + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) | Admin + Agent + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) |
| Developer + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) | Developer + Agent + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) |
| Admin + Developer + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) | Admin + Developer + (Database Viewer/ Inbox (Admin)/Inbox (Agent)/ Insights (Analytics)/ Insights (Admin)/Engagement (Admin)/Engagement (User)) |
| Database Viewer </br> Inbox (Admin) </br> Inbox (Agent) </br> Insights (Analytics) </br> Insights (Admin) </br> Engagement (Admin) </br> Engagement (User) | No Access |

**How to read the table?**

For example, if the role of Admin/Developer is assigned in the Live/Production environment to a user, they will receive Admin + Agent access in both Live/Production and Staging/Development for that bot.

- Accesses such as Database Viewer, Inbox (Admin), Inbox (Agent), Insights (Analytics), Insights (Admin), Engagement (Admin), and Engagement (User) are given alone; in this case, those accesses will be present only in the Live environment. The Staging/Development bot will not have access to those roles.
- To provide combined access to Database Viewer, Inbox (Admin), Inbox (Agent), Insights (Analytics), Insights (Admin), Engagement (Admin), and Engagement (User) in both environments, combine the access with either Admin or Developer access.

