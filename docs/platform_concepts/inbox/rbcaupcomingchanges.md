---
title: Implementation of role-based access control (RBAC) in the Inbox platform
sidebar_label: Role-based access control
---

Yellow.ai has introduced role-based access control (RBAC) within the Inbox platform to enhance data security and meet specific customer requirements. This update introduces the **Supervisor** role, which provides access only to team-specific data within the **Monitor** and **Analytics** modules.

## What does this mean?

When Inbox admins assign a user the **Supervisor** role and map them to one or more teams, the system restricts their access to data associated only with those assigned teams.

- **Monitor page**: All data within the Monitor section is filtered to show only team-specific insights to supervisors.

- **Inbox Analytics page**: **Chat Analytics**, **Email Analytics**, and **Agent Performance** pages now include filters that display data only at the team level(data of their assigned teams) for supervisors.

## Benefits of RBAC

- **Enhanced data security**: Limiting access to team-specific data reduces the risk of unauthorized data exposure.
- **Improved efficiency**: Supervisors can focus on monitoring and managing their teams without being distracted by irrelevant data.
