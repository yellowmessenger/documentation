---
title: Resolving "Data could not be loaded" Error in the Yellow.ai Monitor Tab   
sidebar_label : Resolving Monitor Tab Error
---


## Use Case 

In the Yellow.ai dashboard, users may encounter the error message:  
**"Data could not be loaded. Please update or try again later."**  
This typically occurs in the **Monitor** tab, preventing the display of important performance metrics such as:

- Assigned chats  
- Resolved chats  
- Missed chats  
- First response time  
- Handling time  

This issue impacts the ability to monitor agent performance and manage live chat operations, often requiring teams to resort to manual data extraction.

![](https://cdn.yellowmessenger.com/assets/yellow-docs/monitorerror.png)

**Related Questions and Symptoms**

1. Why am I seeing "Data could not be loaded" in the Monitor tab?
2. How do I set the timezone for my Yellow.ai bot?
3. Why are platform APIs failing with 400 errors related to analytics?


:::note
**Prerequisites**:
Before proceeding with the resolution steps, ensure the following:
- You have access to the Yellow.ai dashboard.
- You are familiar with browser developer tools, particularly the **Network** tab.
:::

## Steps to Resolve

### 1. Access the Monitor Tab and Open Developer Tools

- Navigate to the Yellow.ai dashboard and go to the **Monitor** tab.
- Open the browser’s developer tools:
  - In most browsers, this can be done by pressing `F12` or using the shortcut `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).
- Within the developer tools, go to the **Network** tab.

### 2. Check for 400 Bad Request Errors

- While the Monitor tab is attempting to load data, observe the network requests in the **Network** tab.
- Look for API requests that are failing with a **400 Bad Request** status code.
- These errors often indicate issues with request parameters, commonly due to a missing or incorrectly configured timezone.

### 3. Set or Update the Bot Timezone

- If 400 Bad Request errors are observed, it is likely that the bot’s timezone is not set or is misconfigured.
- Refer to the official Yellow.ai documentation to configure the timezone: [Modify Bot Configuration – Yellow.ai Documentation](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/modify-bot-configuration#addupdate-ai-agent-information)
- Follow the instructions in the section **Add/Update AI Agent Information**, ensuring that the **timezone** field is correctly specified (e.g., `"Asia/Kolkata"`, `"America/Toronto"`).

### 4. Verify Data in the Monitor Tab

- Once the timezone has been configured, refresh the Yellow.ai dashboard.
- Reopen the **Monitor** tab and verify if the performance metrics are now loading correctly.


## Expected Outcome

After configuring the bot's timezone correctly, the platform API requests should succeed. The Monitor tab will display performance data as expected, restoring visibility into key live chat metrics and agent productivity.
