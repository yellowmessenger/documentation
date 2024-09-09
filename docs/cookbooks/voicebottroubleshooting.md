---
title: Troubleshooting Voice Bots
sidebar_label : Troubleshooting voice bots    
---


Ensure the proper functioning of voice bots by identifying and resolving common issues such as connectivity problems, voice recognition errors, and response issues.

:::note
**Prerequisites**
* Familiarity with voice bot tables and logs (e.g., callbackstatus_details, call_details_report, api_logs, CDR, notifications report).
* Ability to interpret SSML (Speech Synthesis Markup Language) using tools like MS TTS Studio or https://xmlgrid.net/.
* Access to customer API logs.
:::



## Initial Assessment

1. **Reproduce the issue**: Try to recreate the reported issue.
    * Document the steps taken to replicate the problem.
    * Collect screenshots or recordings if possible.     
3. **Analyze affected records**: Review recordings, chat transcripts, and logs.
4. **Check primary bot tables**: Review `callbackstatus_details, call_details_report, api_logs`.
5. **Data Explorer tables**: Check call details reports (CDR), notifications reports, and analytics.
6. **Validate SSML**: Ensure Speech Synthesis Markup Language (SSML) is valid using tools like MS TTS Studio.
7. **Patch or upgrade**: Check for recent updates or patches to the voice bot system.
8. **Debug logs:** Use the customer’s phone number to analyze production logs and API logs.
9. **Node verification**: Ensure prompt/question nodes are not empty (except in Inbound Hangup cases).
10. **Documentation**: Note down affected SIDs and key observations.



---

## Connectivity Issues

### Symptoms

* The bot does not play the welcome prompt.
* API calls fail to reach the server.

### Steps to Troubleshoot

1. Check platform and voice server connectivity.
2. Verify that the client API endpoint is accessible.
3. Review network logs for disconnections or timeouts.

### Solutions

1. Ensure strong connectivity between the voice server and platform.
2. Check for API endpoint changes (e.g., URL or request/response structure).

----

## Voice Recognition Errors

### Symptoms

* The bot misunderstands user input.
* Low accuracy in recognizing voice commands.


### Steps to Troubleshoot

1. Review call recordings in the callbackstatus_details table.
2. Analyze recent voice logs for recognition issues.
3. Ensure correct language settings and codes are in place.

### Solutions

1. Repeat unclear prompts.
2. Update the bot’s training data by refining intents and entities.


------

## Response Issues

### Symptoms

Delayed or no response from the bot.

### Steps to Troubleshoot
1. Check server load and the bot’s attached numbers.
2. Test the response time of the client API.

### Solutions

1. Optimize server performance by adjusting the number of channels.
2. Ask the client to check for API issues using logs from the api_response table.

-------

## Engage Flows – Calls, WA, and SMS Triggers

### Symptoms

Users did not receive a call, WhatsApp, or SMS notification.

### Steps to Troubleshoot

1. Analyze the target Engage flow analytics (use flow ID from the URL: e.g., https://cloud.yellow.ai/bot/<botID>/engagement/flows/661cbd4c8c383c6621230a41/analytics).
2. Check the Notifications report for issues with CampaignID.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeiISEFQOoeC_jFJQRPlvQz1IHCLdocjvKtFvADeMtnGkS9DkASuStGWqBmtjYLwcoJmizgQJpmFVGl-5iCvlTlRHgutrA1EPkJ5ro6jXpvoc1ocLktVkfYpphC0XfwxR-ngejKoEUnwr6fKCZSPIiBRlAx?key=yM6pYcXy3m07B90GFb8mvA)**
    
### Solutions

1. Check for telephony-level traffic congestion.
2. Raise WA/SMS issues through a support ticket with the engage team.
    
------
    
## Error HTTP Codes and Messages
    


| Error | Description |   Solution  |
| ----- | ----------- | --- |
| 4xx Client Errors  | Request contains bad syntax or cannot be fulfilled     |     |
| 5xx Server Errors | Server encountered an error and failed to fulfill the request| 
| 500 Status Code | Server failure| Verify the Client API/Bot API and confirm that the endpoint is correct. For Bot API issues, provide bot ID, failure duration, and logs to the support team in a ticket. | 
    
    
    
--------
    
## Log Analysis


1. Access Logs:
    - Navigate to **Analysis → Conversational Logs** or access the relevant database for details on `drop_steps` and `dispositions`.
    - Use log analysis tools to filter and search for specific log entries based on sender ID or profile ID.

2. Common Log Entries

 

| Type  | Description |
| -------- | -------- |
| **API Call Logs**     | - Provide detailed information on API requests and responses stored in the database. <br/> - Useful for diagnosing API related issues (e.g., request failures or incorrect responses).     |
| **Voice Interaction Logs** | - Track user interactions and bot responses, offering insights into the flow of conversation. <br/> - These logs are found in Data Explorer or custom tables such as `callbackstatus_details`.| 

3. Steps to Analyze Logs:

- Locate Errors or Patterns: Look for error messages or unusual patterns in the logs, such as failed API calls or timeouts.
- Cross-Reference Logs with Issues: Compare logs with the specific issues reported by the user to identify potential correlations or causes.

---
    
### Detailed steps to access logs from Analyse module

1. Navigate to **Analysis → Conversational Logs**. Search for the logs using the customer’s phone number.
    
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe9DUIgul25WZ5tRQPy7u5_-2grp4ZPjRQhSEfEmS749IuQK6XMnpteymQV0edd2DSPZdh4ySnvHHltKBuQ8Js7qfAsJDhHsSAXBGgkeFc2bETUpFIwxR8KAuB_R6M7IgCSL-qATg0A3qWIB2QDjV_njnY?key=yM6pYcXy3m07B90GFb8mvA)**
    
2. In the chat transcript displayed on the left, locate the message where the issue occurred. Click the Logs icon (debugger) next to the relevant message. Review the logs for any error messages indicating problems at that step.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXey3zq3aA_I4O8s9lBxxV4e2oRlE9v-HH9YpuoCmVCJcv8Qaq5CgyVJ4wjOFUeLMKS-yFWLfXi9PMyJDvK8YO2MMdRxRuAWKLpc9SsRTkV4F8Us20gGdMDtKKnfdyA3BOWgoak9Kgu-kXAUjqzhKrdLjHA?key=yM6pYcXy3m07B90GFb8mvA)**    

    

3. Check the callbackstatus event data for any instances where `bot_failed = true` or `bot_failover = true`. This helps identify where the bot encountered failures or fallbacks.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc1Kadj4hHg1ho2Qk9IMp0Iuo63aWW9c4wC98Vo54XJU4Qn9u9mbkC0s9CsvV7Pyaxr80XcHXZh45xZxUQIkzA1iYni7eiqEkGizwK7QaRFesqjiRQq0GmaMssb4SjTqL4bgTYtulgpjAA5rSmD-HsD37eg?key=yM6pYcXy3m07B90GFb8mvA)**
    
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfW3CPudx-SV4uyA4iQ22SQ7WQVKLVnRug5dNFtewmmZKCw5ftN2TRxMiNohD7Hkfcn8le2RjoY4J7gnHHWau5LON8rGfJWxhn4PwRdwpgFn4Sq4V1e4O5606tS6kzKM9aU2yCcaB5xl0jZB_sBhT5Zxzs?key=yM6pYcXy3m07B90GFb8mvA)**
    
4. Review the function logs at the step where the issue occurred. If a failure is detected, the function log will show error details such as:

```
[
   {
       "log": {
           "data": "{\"tag\":\"Error while executing the function\",\"extraInfo\":{\"message\":\"Cannot read property 'length' of undefined\"}}",
           "level": "error"
       }
   }
]
```
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeq6KoMXwFS5nRJ58Zt-7iuJBu-x9wUHF2bttsUUh_uzFhOR69QGBif60meZRBzTUbs63A_LWZKX7iYVnU7hH2Uogn-yLTwM7rjyeRKdOUAA9_vnWq_WysNP-4i2OJieGk0SwkwRel8bFivDULIKg43PspW?key=yM6pYcXy3m07B90GFb8mvA)**
    
This type of error usually points to a specific issue, such as a missing or undefined property, which can guide further troubleshooting.
By following the above steps, you can isolate specific log entries and errors that contribute to the problem, allowing for targeted resolution.


--------
    
## Frequently Asked Questions (FAQ)

    
1. What should I do if the bot is not responding?
Place a call and check the bot logs in the analysis tab and review logs for any errors.

2. How can I improve voice recognition accuracy?
Update utterances in the bot's intents and entities regularly.
