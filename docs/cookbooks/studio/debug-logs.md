---
title: Debug issues using logs
sidebar_label : Debug issues using logs
---

This guide outlines the importance of reading logs for debugging issues on our platform, distinguishing between Execution Logs and Audit Logs.

#### Prerequisites to look into debug logs

* Access to the platform's developer tools.
* Necessary permissions to view log entries.
* Familiarity with common log entries and error messages.

To effectively debug issues, you need to read and interpret logs for several purposes:

* **Identify the exact state of the controller**: Determine the current status and behavior of the system controller.
* **Determine the triggered flow**: Identify which flow is being activated during the interaction.
* **Follow execution steps**: Track the step-by-step execution of each function to understand the flow of operations.
* **Inspect stored values**: Check what values are stored in variables throughout the process.
* **Identify error**: Find errors causing disruptions in the flow.
* **Review API**: Examine the response and status code of API requests to ensure they are functioning correctly.

## Types of logs on our platform

Our platform provides two types of logs to assist in debugging:

1. **[Execution logs](#execution-logs)**: These logs help identify API failures that disrupt flows. They offer a detailed, step-by-step account of each flow's execution, making it easier to pinpoint issues.
2. **[Audit logs](#audit-logs)**: These logs store all operations performed on the platform, such as database deletions, journey deletions, and audience table deletions for audit purposes.

### Execution Logs

**Using execution logs to identify errors:**

* **Use the UID to identify errors**: To troubleshoot issues more precisely, use the UID (Unique Identifier) to trace errors. You can fetch the UID of any conversation transcript from the network tab API. To do this on the Live bot page, **right click** > **Inspect** > **Network** > **Payload**.

   ![](https://i.imgur.com/fPOnyzX.png)
 
* **Additional methods for viewing logs** (for Production bots only): For production bots, there are advanced methods available to access and review logs, which provide deeper insights into the bot's operations and help identify critical issues.

To read the logs, follow these steps:

1. Go to **Studio** > **Analysis** > **Conversation logs**.

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
      
  
### Audit logs

#### Access Audit logs

To access Audit Logs, follow these steps:

1. Go to **Settings** > **Audit logs**.

    ![](https://i.imgur.com/aALWBqy.png)
    
*  You can view detailed records of all actions performed on the platform.

    ![](https://i.imgur.com/ea7H3Nn.png)






