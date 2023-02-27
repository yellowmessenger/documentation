---
title: Data operations (Data export)
sidebar_label : Data Ops
---

Our platform collects and stores certain system data points to give the right experience to the end-users, customers, and their dynamic AI agents. 
This data is used to power different modules inside the Yellow AI platform. 

**Data Ops**(Data operations) feature is designed for the customers(enterprises) who want to fetch this data from the yellow.ai platform into their systems from an information security perspective or for dashboarding and reporting purposes.

Data can be exported to your system storage by following three steps- choose the data to be exported, choose the frequency, choose the destination, and generate rules which will export your data. 

> Existing rules can only be **Deactivated**. There is no option to Activate it. 


------

To export data, follow the steps below: 

1. [Log in](https://cloud.yellow.ai/) to the platform and open **Insights** > **Data Ops**. 
2. Click **Create export rule**.       
    ![](https://i.imgur.com/f2luQiP.png)
    
-------

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
- Click **Next**. 


> Export is supported only in JSON format. 


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


![](https://i.imgur.com/Jji2bmd.png)


#### 5. Choose the destination of data export 

> - Data can be exported to **Amazon S3, Azure Blob, or SFTP server** in one export rule. 
> - Write permission/privilege to the storage system(S3/blob/SFTP) is mandatory.
> - Credentials are encrypted and stored securely in our systems.
 
- Choose an export destination: 
    - Connect with **Amazon S3** by providing **Bucket name, Access Key, and Secret Key**.
    - Connect with **Azure Blob** by providing **Container Name and Connection String**.
    - Connect with **STPT server** by providing **Host name, Port, Username, Password and Path**. 
- Click **Connect** and **Next**. 

-------

6. All the existing export rules will be available on the Data Ops page, you can add new rules if required. 

    ![](https://i.imgur.com/htPEADz.png)
    
    > There is no restriction on the number of rules that can be added. 


7. Click on the rule name to view the complete **Logs** and understand whether the data export (for the assigned rules) is successful. 

    ![](https://i.imgur.com/9851hzV.png)

    - Click **View details** to see the assigned rule details (data, frequency, and destination).    
    - You can see **Export date** (frequency), **Status of export** (scheduled, ongoing, and failure/success), and **Size of data** exported. 
        > Failure of data export depends on multiple reasons, mostly unrelated to the yellow.ai platform. 

 
 