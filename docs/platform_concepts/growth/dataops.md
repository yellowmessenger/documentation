---
title: Data operations (Data export)
sidebar_label : Data operations
---

The Yellow.AI platform collects and stores system data points to enhance the end-user and customer experience with dynamic AI agents. This data is utilized by various modules within the platform.

The **Data Ops** (Data Operations) feature allows enterprises(customers) to retrieve this data from the Yellow.AI platform for information security purposes or to create dashboards and reports.


## Data export 

You can export data from the Yellow.AI platform to your system storage by following three steps: selecting the data to be exported, choosing the export frequency, and selecting the destination.

> Existing rules can only be **deactivated**. Activation is not available.

------

To export data, follow the steps below: 

1. [Log in](https://cloud.yellow.ai/) to the platform and open **Insights** > **Data Ops**. 
2. Click **Create export rule**.       
    ![](https://i.imgur.com/f2luQiP.png)
    
#### 3. Choose data required for data export 

- Enter any **Export name**. 
- Choose **Data source** by selecting the checkboxes. You can export the following data from the Data Ops tab: 
    * **Agent availability**: Agent check-in and check-out data.
    * **Bot configuration**: All data around how the bot should perform	(Journeys and Step data, Training Data (Intents & entities), Configured APIs and Data in Bot DBs (Product catalogs) )
    * **Bot tables**: Custom data storage tables (databases available on the Studio module) built inside the bot.	
    * **Call details report**: Data related to voice bots. 
    * **Chat tickets**: Data related to Live chats in the Inbox module.
    * **Custom analytics**: Custom data created for your bot. 	
    * **Email tickets**: Data related to email tickets in the Inbox module.	
    * **Conversations**:Actual messages (Bot, user, and agent).
    * **Notification reports**: Data of notifications sent out using the platform/ API: 
    * **Platform analytics**: Data on User engagement, bot, API, and Inbox events.
    * **Leads**: All the user profile data.
    * **Call recordings**: All the recorded calls from the voice bot.
    * **User 360**: All the User 360 report from engage.
    * **Audit logs**: All the audit logs datasets. 
- Click **Next**. 


:::info
Export is supported only in JSON (and WAV for voice bot data) format. 
:::

![](https://i.imgur.com/0HaT9yF.png)


#### 4. Choose the frequency of data export 

- Select the required **Export frequency** from the drop-down: 
    - **Hourly export**: You will receive data of the last 1 hour starting from data export rule creation. 
    - **Daily export**: You will receive daily exports at the selected time(timezone) everyday.
    - **Weekly export**: You will receive weekly data(Monday to Sunday) at the selected time(timezone) on every selected week-day.
    - **Monthly export**: You will receive last month’s data(1st to last day) on every selected date of the month at selected time(timezone).
    - **Quaterly export**: You will receive last quarter’s data(1st to last day) on every selected date of next quarter at selected time(timezone).
    - **Yearly export**: You will receive last year’s data on every selected of next year at the selected time(timezone). 
    - **One-time export**: You will receive data between the selected dates. 
- Click **Next**. 

:::note
For a single export, the maximum time range is one year. If more than one year's worth of data is required in a one-time export, multiple one-time exports can be created for the desired range.
:::

![](https://i.imgur.com/Jji2bmd.png)



#### 5. Choose the destination of data export 

:::info
- Currently, data can be exported to **Amazon S3, Azure Blob, SFTP server** or **Google cloud storage** only. 
- You can select only one external destination in one export rule. 
- Write permission/privilege to the storage system(S3/blob/SFTP/GCP) is mandatory.
- Credentials are encrypted and stored securely in Yellow.ai systems.
:::

- Choose an export destination: 
    - Connect with **Amazon S3** by providing **Bucket name, Access Key, and Secret Key**.
    - Connect with **Azure Blob** by providing **Container Name and Connection String**.
    - Connect with **STPT server** by providing **Host name, Port, Username, Password and Path**. 
    - Connect with **Google cloud storage** by providing **Bucket name, Private Key, and Client email**.
- Click **Connect** and **Next**.    


:::note    
To set up Google Cloud Storage (GCS), the JSON keys are automatically downloaded when added to the service account. Alternatively, the IT admin can provide the bucket name, client email, and private key.
For the proper configuration, ensure that the IAM (Identity and Access Management) role assigned to the Service Account has the `Create objects` permission. These roles can be found within `Cloud Storage`. When you hover over a specific role, the associated permissions will be displayed, helping you identify the one that grants the required access for obtaining the mentioned fields.
![image](https://imgur.com/bMnuBUY.png)

:::



![image](https://imgur.com/yibkjl7.png)

-------

6. All the existing export rules will be available on the Data Ops page, you can add new rules if required. 
    ![](https://i.imgur.com/htPEADz.png)
    
:::note
There is no restriction on the number of rules that can be added. 
:::

7. Click on the rule name to view the complete **Logs** and understand whether the data export (for the assigned rules) is successful. 
    ![](https://i.imgur.com/9851hzV.png)

    - Click **View details** to see the assigned rule details (data, frequency, and destination).    
    - You can see **Export date** (frequency), **Status of export** (scheduled, ongoing, and failure/success), and **Size of data** exported. 

:::note
Data export failures are usually unrelated to the Yellow.AI platform and can occur due to various reasons.
:::
 