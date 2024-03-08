---
sidebar_label: Add/manage user records via APIs
title: Add or manage user data and events via APIs
---

**API Integration for User Data and Events**

You can easily add or manage user data and events in Yellow.ai through our APIs. Keep your user-related data seamlessly synchronized with your entire tech stack.



Summary of User APIs:

Goal | Endpoint | Method | Sample POST
---- | ------- | ---- | ----
Create user | https://{host}cdp/api/v1/user?bot={botId} | POST | ``` {"firstName": "Awesome", "userId": "1"} ```
Update user | 
Get user by userId | `https://{host}/cdp/api/v1/user/123456?properties=email,tags&bot={botId}&userId=true` | GET | curl --location 'https://cloud.yellow.ai/cdp/api/v1/user/123456?properties=email%2Ctags&bot=x1625041041238&userId=true' `
Get Aal users | `https://{host}/cdp/api/v1/user?bot={botId}&offset=0&limit={}` | GET | -
Delete user | `https://{host}/cdp/api/v1/user/{userId}?bot={botId}&offset={}&limit={}`| DELETE | -
 



For more details, refer to our [User Management API Reference Documentation](https://documenter.getpostman.com/view/17583548/UVsEVUsg).
