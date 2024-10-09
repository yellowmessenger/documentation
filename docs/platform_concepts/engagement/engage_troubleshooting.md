---
title: Engage Troubleshooting Guide
sidebar_label: Engage troubleshooting guide
---

## Campaign


### Troubleshooting Campaign & API Failures

1. **Identify the issue:**
   When you receive a notification failure alert, identify whether the failure is related to a campaign or an API.

2. **Gather required details:**
   * **For API failure**: Collect essential information such as botID, Campaign ID, API body, and error response.
   * **For Campaign failures:**
      - Download or fetch reports from Data Explorer to investigate the error thoroughly.
      - Review error codes in the reports to understand the cause of campaign failures.
      - Conduct a test campaign if necessary to validate issues. Communicate findings to the client for resolution or escalate to the Engineering team.

      For more information on error codes, refer to: [Notification Engine Response Codes](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#24-response-codes)

4. **Handling API Failures:**
   - For v1 APIs, attempt to execute the API call and verify if notifications are sent successfully.
   - Review error responses to diagnose the issue.
   - For v2 APIs, use Data Explorer to search using the message ID to delve deeper into the problem.
   - Share a functional CURL command with the client or escalate the issue to the Engineering team as needed.

5. **Precautionary Steps (for internal teams):** Before escalating any issue in DevRev:
   - Validate and replicate the issue to ensure accuracy.
   - Propose potential workarounds where applicable.
   - Coordinate with the Engineering team for further investigation and resolution.



### Voice campaign failed with response "No campaign allowed during this time"

Please verify if the call/campaign was attempted outside of our working hours. If so, these calls would not have been dialed out.

### WhatsApp Campaign failing due to an invalid parameter
Check if you have entered the content in one of the variables across multiple lines. Meta does not support multi-line content in variables. Ensure all content is passed in a single line. 

If the issue is not resolved, reach out to support for additional help.


### WhatsApp Template Error - 1443

**Issue:** Your WhatsApp template has been paused by Meta due to policy concerns.

#### Prerequisites
- You need access to the **“Engage”** module.

#### Steps to resolve

* **Follow Meta’s Guidelines:**  Review [Meta’s guidelines](https://en-gb.facebook.com/business/help/687938765816627) for creating high-quality conversations to avoid this error in the future.


