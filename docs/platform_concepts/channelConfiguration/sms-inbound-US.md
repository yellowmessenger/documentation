---
title: Configure SMS service for US numbers
sidebar_label: Configure SMS service for US numbers
---

This guide will walk you through the process of setting up SMS services for US numbers.

## Prerequisites to setup SMS channel

1. To configure the SMS channel, fill all the details in this [sheet](/files/InfoBip-SMS-requirements.xlsx) and reach out to the [Integrations](mailto:support@yellow.ai) team for assistance.
2. The team will review your information and enable the SMS channel for your bot.
3. To send SMS using local, mobile, or toll-free numbers, it is necessary to [register](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-phone-number-types) these numbers. Note that, local and mobile number fall under the category of [long codes numbers](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-phone-number-types#long-codes-a2p-10dlc).

### Limitations
* Currently, this integration is supported only for United States.
* This channel does not support short code numbers for configuring SMS services in the US.

## Set up SMS channel for US numbers

### Activate your phone number

After the Integration team enables the SMS channel, activate your phone number by following these steps:

To activate your number, follow these steps:

1. On the switcher, click **Channels**.

    <img src="https://i.imgur.com/kv01RDY.png" alt="drawing" width="100%"/>
   
2. On the **Messaging** page, click **SMS Inbound**.

   ![](https://i.imgur.com/f5tD7Vu.png)
     
3. Click **+ Add number**. If this option is not enabled, contact [Integrations](mailto:support@yellow.ai) team.

   ![](https://i.imgur.com/y8Zn8i1.jpg)
   

4. Choose the **United States** as the country and select your preferred phone number type *Local*, *Mobile*, or *Toll-Free*, then click **Search** to view available phone numbers based on the selected phone number type. For more information on these number types, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-phone-number-types).

   ![](https://i.imgur.com/sn2y21E.jpg)
  
:::note
Local and mobile numbers fall under the category of [long codes numbers](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-phone-number-types#long-codes-a2p-10dlc).
:::
    
5. Select the desired number and contact the [Integrations](mailto:support@yellow.ai) team to acquire and register it.
   

### Connect SMS channel to Yellow.ai

Once the registration process is complete, connect the SMS channel to Yellow.ai platform.

1. On the left navigation bar, click **Extensions**.

   ![](https://imgur.com/PIOvT6K.png)

5. Click **Channels** > **Messaging** > **SMS Inbound**.

   ![](https://imgur.com/6v0xvi2.png)

6. Choose the phone number type and select the registered phone number, then click **Add**.

   <img src="https://imgur.com/41IdBRJ.png)" alt="drawing" width="60%"/>
      
* The registered phone number will be successfully connected to your bot.

### Test your SMS channel

Once your number is registered and connected to your bot,  you can test the channel for the following use cases:
* One-way conversations: Send campaigns
* Two-way conversations: Automated responses and live agent support

**Send campaigns**

After successful configuration of the SMS channel, you can send notifications.

To send notifications:

1. Go to **Engage** > **Templates** > select **SMS** > [Create template](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/sms-template).
2. Once the template is created, you can [send the campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign#31-sms-campaign).
   
**Automated replies and live agent support**

You can test the bot by initiating automated replies and receiving live agent assistance.

1. When you message the bot from your registered phone number, the bot should automatically understand and respond if the intent matches the user's message.

2. For agent support, a flow is configured with the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to initiate a conversation with an agent. Once the conversation is initiated, users can interact with the agent.