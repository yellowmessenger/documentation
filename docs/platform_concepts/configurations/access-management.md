---
title: Access Management and Roles
sidebar_label : Access Management
---

### How to share Bot Access?

**Keywords** : bot access, invite

1. Go to `Configure` section from the left side bar, open `Access controls`.

![Invite a user](https://cdn.yellowmessenger.com/p3rRw8AVjzHJ1615873798240.png)

2. Click on `Add User` and add an email of the user you want to invite as well as the role under `Access control` field. Under the dropdown menu of `Access control`, you can see which role provides which privileges. Click on save.

![Access Control](https://cdn.yellowmessenger.com/WNHDz8vddUQm1615873897626.png)

3. The user you've invited will received an email from Yellow.ai to accept the bot invite. Follow to this [guide](signup-post-bot-invite) to learn how to accept a bot invite.


### Managing Roles and Privileges

Here is a list of roles and privileges you can assign to the users.

| Role               | Privilege                                                                             |
|--------------------|---------------------------------------------------------------------------------------|
| Super Admin        | The owner of the bot who has access to everything. <br/>Can provide *Approver* access to someone else. <br/>Can mask certain DB column on UI.   <br/>View data in the bot tables and can [mask columns of a table](/docs/platform_concepts/studio/database#7-mask-database-columns) to restrict others from viewing column data.     |
| Admin              | Admin has all the access to all the modules                                           |
| Developer          | Developer has all the access to all the modules                                       |
| Database Viewer    | Database viewer has only view access to the database                                  |
| Approver           | Approver can publish bot from staging to production and need to have developer access |
| Inbox (Admin)      | Inbox Admin can see all tickets, agents and modifty them                              |
| Inbox(Agent)       | Agent can only respond to chat received from the user                                 |
| Insights           | The user can see all the analytics pertaining to the bot                              |
| Engagement (Admin) | Engagement (Admin) can see campaigns and configure audiences                          |
| Engagement (User)  | Engagement (User) The user can only schedule campaigns                                |
| Tester             | The user can only see the test cases pertaining to the bot                            |



