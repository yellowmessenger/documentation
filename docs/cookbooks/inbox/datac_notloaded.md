---
title: Data could not be loaded. Please update or try again later.” (Inbox Monitor page)
sidebar_label: Data could not be loaded 
---


This error appears in the **Monitor** tab of the Yellow\.ai dashboard and prevents viewing analytics and performance metrics. In this case:

* Monitor tab displays a persistent error message.
* Key metrics such as assigned chats, resolved chats, and handling time are not visible.
* Developer tools show failed API calls with 400 Bad Request errors.


## Possible Cause

This issue commonly occurs when the **bot's timezone is not set or incorrectly configured**. An invalid or missing timezone causes platform analytics APIs to fail, preventing data from loading.


## Prerequisites

Before proceeding:

* Ensure you have access to the Yellow\.ai dashboard.
* Open your browser’s developer tools (Chrome, Edge, or Firefox).


## Steps to Troubleshoot and Fix

### 1. Open the Monitor Tab and Developer Tools

* On the left navigation bar, go to **Inbox** > **Monitor**
* Open the browser's **Developer Tools**:

  * Windows/Linux: Press `F12` or `Ctrl + Shift + I`
  * macOS: Press `Cmd + Option + I`
* Switch to the **Network** tab.

### 2. Check for 400 Bad Request Errors

* While the Monitor tab loads, observe the network requests.
* Look for any failing requests with a **400 Bad Request** status.

  > These usually indicate an issue with the API request, often related to timezone configuration.

### 3. Update the Bot’s Timezone

* Go to the **bot configuration** settings. Follow this guide to set or update the timezone:
  [🔗 Modify Bot Configuration – Yellow.ai Docs](https://docs.yellow.ai/docs/platform_concepts/get_started/modify-bot-configuration#addupdate-ai-agent-information)
* Make sure the timezone field is populated with a valid timezone (e.g., `Asia/Kolkata`, `America/New_York`).

### 4. Refresh and Revalidate

* After saving the bot configuration:

  * Refresh the Yellow\.ai dashboard.
  * Navigate back to the **Monitor** tab.
* The analytics data should now load correctly.


:::info

Additional Information:
* Ensure the bot has proper permissions and the latest configuration is deployed.
* If you're using a custom domain or proxy, verify there are no request blockers in place.
* If issues persist, capture the network log and contact Yellow\.ai support.

:::