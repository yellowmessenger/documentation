---
title: Resolving message failures in WhatsApp, Facebook, and Instagram channels
sidebar_label: Resolve message failures
---

This guide provides steps to identify and troubleshoot message failures when using WhatsApp, Facebook, and Instagram channels. 

Message failures can occur due to various reasons such as incorrect configuration, network issues, or platform limitations. Understanding the specific cause of message failures helps in timely resolution and maintaining effective communication.

##### Prerequisites

To troubleshoot message failures, ensure you have the following:

* Access to the Yellow.ai platform.
* Permission to view message logs and configuration settings.
* Knowledge of the specific channel (WhatsApp, Facebook, or Instagram) where the failure occurred.


### Steps to resolve message failure

1. Navigate to the bot where the message failure has occurred.

2. Copy the chat transcript of the user’s WhatsApp number for which the message was not delivered.

3. Open the copied chat transcript in a new tab.

4. Open the **Network** tab > right-click on the page > select **Inspect**.

    ![](https://i.imgur.com/zqtmouS.png)

5. Go to the **Network** tab to monitor network requests.

6. Look for an API call with the name signature in the network logs.

7. To analyze the error message, open the API in a new tab and search for the message where the failure occurred.

8. Identify the error message or reason for the failure.

**Example of error and resolution**

* **Error**: The WhatsApp list exceeds the character limit of 24.
* **Resolution**: Adjust the message content to comply with the character limit.

    ![](https://i.imgur.com/FhYWlmV.png)

By following these steps, you can determine if the issue is related to the bot configuration or requires escalation to the platform or Meta team.

### Additional Tips

By following these guidelines, you can effectively troubleshoot and resolve message failures to ensure continuous and reliable communication through WhatsApp, Facebook, and Instagram channels.

* **Check configurations**: Ensure that all configurations related to the specific channel are correct and up-to-date.
* **Monitor network stability**: Network issues can cause intermittent message failures. Ensure stable network connectivity.
* **Update permissions**: Verify that all required permissions for the Yellow.ai platform and specific channels are properly set.