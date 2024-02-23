---
title: Sync user data from SFTP
sidebar_label: Import users from SFTP
---

You can sync user data directly from third party integration, including Secure File Transfer Protocol (SFTP) and other compatible platforms. You can leverage seamless integration options to simplify and streamline the process of keeping your user data up-to-date within Yellow.ai.

It only supports CSV files, and the filename must begin with `userdata_`. The maximum file size is 200MB.

To sync data from an SFTP integration:

1. [Connect your integration account to Yellow.ai](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview).
2. Go to **Engage** > **User 360** and click **Import users** > **Sync integration data**.

   ![](https://i.imgur.com/ANMIg7m.png)

   You will see the list of connected integrations.

   Alternatively, you can also do it from the Integrations module by navigating to **Integration**s > **SFTP** > Navigate to ypur preferred SFTP account > Enable the **Sync on** toggle button. 

  ![](https://i.imgur.com/HVJVpUd.png)

3. Navigate to your preferred integration and enable the toggle button (to Sync on).

   <center><img src="https://i.imgur.com/cTURsyT.png" width=""/></center>

4. You will see a confirmation pop-up, click **Sync on** to proceed with the configuration.

   <img src="https://i.imgur.com/vmeQkLU.png" width="50%"/>

5. **Configure Source**.

   a. Click in the **Select folder** box, you will see the available root folders of that SFTP. Select the directory where the userdata file is available. 

   To select a subdirectory, click on the **+** icon to expand the folders and select the specific folder you need.

   <img src="https://i.imgur.com/MPkVL5I.png" width="80%"/>

   b. Click on **Fetch files**. You will see the list of available files from the selected directory in the next drop-down menu, *Select file*. You will only see CSV files, and the filename must begin with `userdata_`. The maximum file size is 200MB.

   <img src="https://i.imgur.com/7ZiZKKy.png"/>

   c. To preview the file content, click on **Preview file**. You will see the preview of the top five rows. 

   d. Click **Next** to continue.

6. **Map properties**, 

   a. In **User ID**, choose the column that contains userId.  

   <img src="https://i.imgur.com/qDdDR6c.png"/>

   b. Map other prooperties with the relevant CSV header.

   c. Click **Next**.

7. In  **Resolve conflicts**, set the action to be performed to the record when a userId in the CSV file already exists in User 360. A conflict occurs when the userId imported through the CSV file already exists in User 360.
   
   <img src="https://i.imgur.com/JTtHM9X.png"/>

   * **Retain imported user data**: Select this to replace the entire user record with the ones available in the CSV file. <br/>The existing values will be replaced with the ones in the CSV file. <br/>The values will be empty for properties that are either not mapped or not specified in the CSV file.<br/><br/>

   <center><img src="https://i.imgur.com/xoTxLEi.png" width="90%"/></center><br/><br/>

   * **Update existing user data**: Select this option to update the existing properties of the user with the ones imported through the CSV file. <br/>The existing properties that are not specified in the CSV file or not mapped will remain unchanged. <br/><br/>

   <center> <img src="https://i.imgur.com/cmhHKvJ.png" width="90%"/></center>

7. In **Schedule import** section, choose your preferred schedule option.

   <img src="https://i.imgur.com/0YfLHz4.png"/>

   a. **One-time import**: Allows you to perform an immediate import (**Now**) or schedule it for a **Specific date & time**.

   b. **Repeat**: Choose this option to schedule import on a daily, weekly, or monthly basis. <br/>For daily scheduling, select the desired time. For monthly scheduling, choose the date and time, and for weekly scheduling, select the preferred day(s) of the week (Sunday to Saturday) and the corresponding time.<img src="https://i.imgur.com/OuA3cqb.png"/>

   c. **Custom import**: Select this option to schedule using a cron expression. With a cron expression, you can define specific dates, times, and intervals for importing data (recommended for developers). <br/>For example, the expression `0 0 1 * * ?`, represents a schedule that triggers the import at 1:00 AM every day.

8. Click **Import**

