---
title : Infobip
sidebar_label : Infobip
---

Infobip serves as a Business Service Provider (BSP) for various channels such as SMS, WhatsApp, and Email.  It offers APIs for messaging, customer support, marketing campaigns, and other communication requirements across various channels. 

This document covers how to use the Infobip to create WhatsApp account and leverage their API for effective channel messaging. 

## Prerequisites to setup Infobip's WhatsApp 

1. **Create an Infobip account**
   * Sign up to the [Infobip website](https://www.infobip.com/signup) to create your account.
2. **Copy API Key and Base URL**
   * Retrieve the API key and base URL from Infobip, as these are required for connection and testing.
* **Contact [Integrations](mailto:support@yellow.ai) team**
  * To configure the bot on the Yellow.ai platform, contact [Integrations](mailto:support@yellow.ai) team.

## Setup WhatsApp account on Infobip

To set up a WhatsApp account through Infobip, you need to sign up for the [Infobip](https://www.infobip.com/signup) website.

### Create an Infobip account

1. Login to [Infobip](https://www.infobip.com/signup) with your username and password.

     ![](https://i.imgur.com/FkcwBfF.png)

2. Enter the verification code sent to your registered phone number and click **Verify**.

    <img src="https://i.imgur.com/xSUt8kt.png" alt="drawing" width="80%"/>

* After verification, this will redirect you to the Infobip's home page.
   
    <img src="https://i.imgur.com/Pi9GX7d.png" alt="drawing" width="80%"/>
      
### Retrieve Infobip's test WhatsApp number

After creating an Infobip account, you need to copy the test Whatsapp number to initiate WhatsApp conversations.

To retrieve WhatsApp test number, follow these steps:

1. On the Infobip's Homepage, navigate to **Channels and numbers** > **WhatsApp**.

    ![](https://i.imgur.com/YMT3mhQ.png)
    
2. Click **Senders** > **More Options** icon, and select **Edit Configuration**.

     ![](https://i.imgur.com/4yzwCML.png)
     
    * A test phone number will be generated. 
3. Copy the number and save it to your contacts to initiate WhatsApp conversations.

### Set up Webhook URL 

To setup Webhook URL, follow the below step:

1. Click **Add URL** to add the Webhook URL. To fetch your Webbook URL, contact [Integrations](mailto:support@yellow.ai) team.

     ![](https://i.imgur.com/sfpkTUr.png)
     
### Retrieve API Key
     
1. Go to **Developer tools** > **API keys**.

   ![](https://i.imgur.com/n2eQfgp.png)

2. Copy the **API key**.

    ![](https://i.imgur.com/h79lyMU.png)
    
### Copy API Base URL    
    
1. Go back to the **Homepage** and copy the **API base URL**. You can also copy the **API key** from the Homepage.
 
   ![](https://i.imgur.com/VGGalV9.png)   
   
## Test Infobip's WhatsApp test phone number

After setting up a WhatsApp account through Infobip, you can test Infobip's WhatsApp test phone number in Sandbox environment.

:::note
* The below steps are applicable only if you want to test your bot in the Sandbox environment.
* To connect and test your bot in the Production environment, purchase a phone number from Infobip and contact the [Integrations](mailto:support@yellow.ai) team with API base URL and API key details.
:::

To test Infobip's WhatsApp sender, follow these steps:

1. Go to [Infobip Homepage](https://www.infobip.com/signup) > **Channels and numbers** > **WhatsApp** > **Overview**. 

     ![](https://i.imgur.com/xuxHaVT.png)

2. Expand **Activate Infobip test sender**.

    ![](https://i.imgur.com/ZAjyKjl.png)
    
3.  Scan the QR code to open Infobip test sender (phone number) in WhatsApp or add Infobip test sender to your contacts in WhatsApp.

4. Within WhatsApp, enter **YELLOWTEST123** in the message field and click **Send**.

    <img src="https://i.imgur.com/2ES4Mth.png" alt="drawing" width="30%"/>