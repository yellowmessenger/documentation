---
title: Configuring SMS services for US numbers
sidebar_label: Configuring SMS services for US numbers
---

This guide will walk you through the process of setting up SMS services for US numbers.

## Prerequisites to setup SMS channel

1. To configure SMS channel, contact [Integrations](mailto:support@yellow.ai) team and provide them with your details and requirements.
2. The team will review your information and requirements and enable SMS channel for your bot.
3. [Supported types of US phone numbers](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-phone-number-types).

### Limitations
* Currently, this integration is supported only for United States.
* This channel does not support Short code numbers for configuring SMS services in the US.

## Connect SMS channel on Yellow.ai

Once the Integration team has enabled the SMS channel, follow these steps to setup your channel:

1. On the switcher, click **Channels**.

    <img src="https://i.imgur.com/kv01RDY.png" alt="drawing" width="100%"/>
   
2. On the **Messaging** channels page, click **SMS Inbound**.

   ![](https://i.imgur.com/f5tD7Vu.png)

:::note
You cannot use the below option if SMS channel is not enabled for your bot. In order to enable SMS for US, contact [Integrations](mailto:support@yellow.ai) team.
![](https://i.imgur.com/Ht65yCM.png)
:::
     
3. Click **+ Add number**.

   ![](https://i.imgur.com/y8Zn8i1.jpg)
   

4. Choose the **United States** as the country and select your preferred phone number type Local, Mobile, or Toll- Free, then click **Search**. For more information on these number types, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-phone-number-types).

   ![](https://i.imgur.com/sn2y21E.jpg)
  
:::note
Local and mobile numbers fall under the category of [long codes numbers](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-phone-number-types#long-codes-a2p-10dlc).
:::
       
 * This displays a list of available phone numbers based on the selected phone number type.     

5. To send SMS using local or Toll-Free numbers, it is necessary to purchase and register these numbers. Please contact the [Integrations](mailto:support@yellow.ai) team to acquire and register the numbers. Once the verification process is successfully completed, you can add your preferred phone number and click "Add".

   ![](https://i.imgur.com/HJGegXe.jpg)
      
* The verified phone number will be successfully connected to your bot.

## Validation of SMS Bot Capabilities

Once your number is registered and connected to your bot,  you can verify its functionality through following use cases:
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