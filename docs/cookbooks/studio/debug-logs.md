---
title: Debug issues using logs
sidebar_label : Debug issues using logs
---

This guide outlines the importance of reading logs for debugging issues on our platform, distinguishing between Execution Logs and Audit Logs.


### Prerequisites for accessing Debug logs

Before you begin, ensure the following:

* You have access to the platform’s developer tools.
* You hold the necessary permissions to view log entries.
* You are familiar with common log formats and error messages.


### Key objectives when reading Debug logs

Effective debugging requires interpreting logs for multiple purposes, including:

* **Identify the controller state**: Understand the current status and behavior of the system controller.
* **Determine the active flow**: Pinpoint which flow was triggered during the interaction.
* **Trace execution steps**: Follow each function’s execution path to uncover how the logic flows.
* **Inspect stored variables**: Review the values assigned to key variables throughout the process.
* **Detect errors**: Locate specific errors that may be disrupting the flow.
* **Analyze API activity**: Examine API calls, including response bodies and status codes, to ensure external services are responding as expected.

---


## Types of logs on our platform

Our platform provides two types of logs to assist in debugging:

1. **[Execution logs](#execution-logs)**: These logs help identify API failures that disrupt flows. They offer a detailed, step-by-step account of each flow's execution, making it easier to pinpoint issues.
2. **[Audit logs](#view--download-ai-agent-audit-logs)**: These logs store all operations performed on the platform, such as database deletions, journey deletions, and audience table deletions for audit purposes.

### Execution Logs

**Using execution logs to identify errors:**

* **Use the UID to identify errors**: To troubleshoot issues more precisely, use the UID (Unique Identifier) to trace errors. You can fetch the UID of any conversation transcript from the network tab API. To do this on the Live bot page, **right click** > **Inspect** > **Network** > **Payload**.

   ![](https://i.imgur.com/fPOnyzX.png)
 
* **Additional methods for viewing logs**: There are advanced methods available to access and review logs, which provide deeper insights into the bot's operations and help identify critical issues.

To read the logs, follow these steps:

1. Go to **Automation** > **Analysis** > **Conversation logs**.

   ![](https://i.imgur.com/ggN4K7f.png)
   
2. Go to the conversation log.

     ![](https://i.imgur.com/cIRosa4.png)
     
3. Click on **Logs**.

    ![](https://i.imgur.com/CEgeroT.png)    

4. Click **Debugger** icon to get the logs for any user input and see what happened in the bot after that particular input. 

      ![](https://i.imgur.com/x3gui2X.png)
      
5. To flag a conversation, click the flag icon corresponding to each conversation logs, or select the log and click **Filters** > **Flagged conversations** > **Flagged** > **Apply filter**.

     ![](https://i.imgur.com/wUWVIqS.png)

* After flagging, you can revisit the conversation on the current or next day by searching for flagged conversations in the filter.

* In the **Logs** section, you can also view triggered events in any conversation. For example, if a "callbackStatus" event is triggered, click the **Debugger** icon, then click on the event to see details about the data the bot receives and the actions it takes after the event.

     <img src="https://i.imgur.com/28oDVS5.png" alt="drawing" width="80%"/>
      
---

### Audit logs

#### View & download AI agent audit logs

Audit log provids a detailed record of the changes made to each module(APIs, Inbox Agent configuration/actions, Channels), including information about the user (user email) who made the changes and the timestamp of the actions taken. 

To view audit log, follow these steps:

1. Click **AI agent settings** > **Audit logs** to access the log of all the changes made.

    ![](https://i.imgur.com/aALWBqy.png)
    
    You will see the audit logs page with the details of all actions performed on the platform.

     ![](https://i.imgur.com/ea7H3Nn.png)



2. To filter the results and view specific information, you can use the **filter** button and apply relevant filters.

    <img src="https://imgur.com/QqL6CXo.png" alt="drawing" width="50%"/>

3. **To download a complete record of the Audit log, click on** **Download CSV**. This will provide a detailed history of all changes made to the AI agent over time.

     ![image](https://imgur.com/E5gLq7h.png)

:::note
Audit logs will be available for 6 months.
:::