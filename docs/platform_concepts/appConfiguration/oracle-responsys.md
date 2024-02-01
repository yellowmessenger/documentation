---
title : Yellow.ai on Oracle Responsys
sidebar_label : Oracle Responsys
---

 Yellow.AI integrates with Oracle Responsys to provide valuable opportunities to engage with your leads and contacts on their preferred messaging platform. By harnessing the power of WhatsApp, you can seamlessly run text message and multimedia marketing campaigns through the Oracle Responsys Program Designer.
 
## Supported features

This integration connects Yellow.ai with Oracle Responsys Program Designer, providing direct control over your WhatsApp business account without the need for additional tools. It empowers businesses to run effective WhatsApp marketing campaigns, automating communication with customers through campaigns at various stages of the marketing and sales funnel. 

With shared account access, multiple users can streamline communication, while the media support allows businesses to send visually engaging and informative messages using images, and videos.


## Prerequisites

To run Whatsapp campaigns on yellow.ai via Oracle Responsys, the following prerequisites must be met:

1. An active yellow.ai account
2. An active Oracle Responsys account
3. A WhatsApp Business Account
4. Obtain opt-in from  customers to ensure that you have their consent to engage with them. Filtering your audience based on their opt-in status is essential for compliance and respectful messaging. By following these guidelines, you can maintain a positive relationship and trust with your customers while utilizing WhatsApp for effective communication and marketing campaigns.

You can also refer to this video to set up the installation.

 <iframe width="560" height="315" src="https://www.youtube.com/embed/HdB-qP7HU4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Configure Oracle responsys on Yellow.ai

1. [Sign up](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#2-signup-to-yellowai) on cloud.yellow.ai and [create a bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#21-to-create-a-bot-from-scratch).
2. Enter your Oracle account name in the **Give account name** field and click **Connect**.

 ![](https://i.imgur.com/gs26dAS.png)

3. Copy the **API key**.

   ![](https://i.imgur.com/1j1SZJN.png)
4. Go to **Access control** > **API keys** > **Generate new API key** 
 ![](https://i.imgur.com/i6CTTDI.png)

5. Fill the fields and click **Save**.

 <img src="https://i.imgur.com/DeaI5Tn.png" alt="drawing" width="45%"/>

6. Copy the API key.

 ![](https://i.imgur.com/w4hYZkU.png)

7. Configure WABA number for this bot by following steps mentioned [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#connect-your-whatsapp-business-account).
8. Set up Whatsapp templates by following steps mentioned [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/whatsapptemplate#docusaurus_skipToContent_fallback).

## Install Yellow.ai app on Oracle

1. Go to your Oracle account and go to **Account** > **App management** > **Oracle Marektplace**.

 ![](https://i.imgur.com/fQbYLqM.png)

2. Search for Yellow and click **Get App**.
3. Click **Install** in the following pop-up.

 ![](https://i.imgur.com/GTmmhsu.png)

4. Fill in the fields and click **Save** and **Proceed**.

* **Template API key:** Copy paste this from Access coontrol (step 4,5,6 from the previous section)
* **GIF API Key:** Copy paste the API key from the Inetgration card (step 1,2 and 3 from the previous section)

 ![](https://i.imgur.com/0BZ807X.png) 

5. You will be redirected to your Oracle Responsys account.

 ![](https://i.imgur.com/YsYDNh4.png)

6. Go to  **Account Management** > **App Management** , search for **Yellow Whatsapp Campaign for Oracle Responsys** to locate the app. If you haven't provided the API keys in the previous section, you can click the edit button and configure them here.

 ![](https://i.imgur.com/f4mzCKe.jpg)

## Configure Whatsapp campaigns on Oracle Responsys

### Step 1: Create a program

1. Go to **Program** and click **Create program**.

 ![](https://i.imgur.com/7hdcgSq.png)

2. In the following pop-up, fill in the following fields:

 ![](https://i.imgur.com/9YgummI.png)

* In **Name**, enter a name for your project.
* In **Folder**, choose a folder for your project.
* In **List**, select a list.
* In **Description**, describe your project and click **Create**.

### Step 2: Create a profile list

Users can create a profile list encompassing all customers, serving as a customer database to define and customize all data requirements. To send customized campaign messages to users, the data added her will be utilized

1. Go to **Data** > **Profile Lists**.

 ![](https://i.imgur.com/Ls9yOYZ.png)
2. Click **Create New List**.
3. Enter a unique name, select the containing folder, and provide a description if required.

 ![](https://i.imgur.com/BQHSiJQ.png)

5. Click **Save**.
6. To add custom fields, go to **List Information** > **Change Schema**.

 ![](https://i.imgur.com/zipWVs0.png)

7. Click **Add new field** to add new custom fields and click **Save**.

 ![](https://i.imgur.com/CbtiDhL.png)

8. To add a new record to this profile list, go to **List Information** > **View Records** > **New Record**.

 ![](https://i.imgur.com/ybtUpul.png)

:::warning
* Mobile number and Opt-in fields should be mandatorily added for the campaign to work.

 ![](https://i.imgur.com/JVaR7kZ.png)

* Additionally, you have the option to import CSV data and populate the profile list. For more information, please click [here](https://docs.oracle.com/en/cloud/saas/marketing/responsys-user/Connect_WizardUpload.htm).
:::

### Step 3: Create filter

You can create a filter within a profile list, that lets you target customers based on specific characteristics.

1. Go to **Audience** > **Filters**.

 ![](https://i.imgur.com/LDsGQME.png)

2. Click **Create Filter** and select the **Profile List** for which you want he filter to be applied.

 <img src="https://i.imgur.com/fWTWADo.png" alt="drawing" width="50%"/>

3. Select a list from **List Type** and a filter from **Filter Type** and click **Done**.
4. In the following screen, drag and drop the fields to set conditions.

 ![](https://i.imgur.com/GID9zSP.png)

5. Click **Save** and fill in the fields to save the filter.

 <img src="https://i.imgur.com/xB7LCWH.png" alt="drawing" width="40%"/>

6. Click **Get actual count** to get the total number of records in that filter.

 ![](https://i.imgur.com/Osklrb3.png)

### Step 4: Use Yellow.ai inside Oracle Responsys

1. Go to **Program** and click the program created in Step 1.

 ![](https://i.imgur.com/mT9TecT.png)

2. Drag and drop **Scheduled filter or view** on the board. Then, click the node and select the audience and time for running this campaign.

 > You can also use another entry point for your campaign, **Customer Activated**, executed when a new customer record is created in the program's profile list. Click [here](https://docs.oracle.com/en/cloud/saas/marketing/responsys-user/Programs_Overview.htm) to learn more about it. 

 ![](https://i.imgur.com/BuW5Bf8.png)


3. Drag and drop **Apps** and click it.

 ![](https://i.imgur.com/GTBPsd1.png)

4. Choose the Yellow App and click **Done**.

 ![](https://i.imgur.com/IVEquE8.png)

5. Click **Configure App** in the following pop-up.

 ![](https://i.imgur.com/KGde5Qn.png)

6. Fill in the following fields:

 ![](https://i.imgur.com/tUE5flh.png)

* In **Registered WABA Numbers**, choose the WABA number from which the campaign should be sent.
* In **To Number**, select the field which contains the data to which the campaign should be sent. Always ensure that the **To** number field is mapped to a designated field that will store your customers' phone numbers in the records.
* In **Template Name**, select the template that should be used for the campiagn.
* Based on the chosen template, map dynamic parameters to the relevant fields in the profile list records. The **To Number** and **Parameter** drop-down menus will display the fields specified during program creation.


   ![](https://i.imgur.com/fFWQmzj.png)

7. Click **Save**.
8. To verify the campaign, validate and save the program and then click **Publish** to make it available for your end users.

 ![](https://i.imgur.com/cc5aeuH.png)

**Sample Whatsapp campaign:**

 ![](https://i.imgur.com/nR7yo6n.jpg)