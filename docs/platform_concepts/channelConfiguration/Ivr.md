---
title : IVR for cloud 
sidebar_label : IVR for cloud 
---

:::note
All the Voice agents created after July 2022 operate on the cloud. Refer to [this](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/ivr-bots) article for the latest update.
:::

Interactive Voice Response (IVR) channel can be deployed and hosted in a cloud environment. Configuring IVR voice agents on the cloud allows businesses to deliver an efficient and personalised customer experience.

While building voice agents, you need to link the voice agent to a phone number so that when users call this number, they can have a conversation with the voice agent.

Once you have built the personalized voice agent, you need to connect your voice agent with a number to enable interactive voice responses. This IVR number is also termed as DID (direct inward dailing) number.

  
:::note
- The associated number will be used for making (an outbound) call or receiving (an inbound) call.
- This is a paid feature. You need to upgrade to enterprise subscription to access this feature. To enable this feature for your voice agent, contact [support](mailto:support@yellow.ai).
- Phone numbers are a limited resource and are leased from downstream providers at a monthly cost. Ensure that only the required phone numbers are being added to the voice agent.
:::

## Add IVR number

To add a IVR number, follow these steps:

 1. Log in to https://cloud.yellow.ai and navigate to **Overview > Channels > Voice > IVR** channel.

    ![](https://i.imgur.com/gIRvJsF.png)
    
2. Verify the voice agent is selected in the required environment on the channels page to which you want to associate a number. Click **+Add IVR Number**.

    ![](https://i.imgur.com/5Jqqt7b.png)
  

3. Select the voice agent **Region** and assign one or more **IVR number** based on your use case. There could be different types of numbers, like landline or mobile, available for association. Select the number(s) as per the requirements. Click **Add**.

     <img src="https://i.imgur.com/EY3Mv5X.png" alt="drawing" width="60%"/>


 
4. Click **Yes, proceed**.

    <img src="https://i.imgur.com/PefR9IC.png" alt="drawing" width="60%"/> 

:::note  
Currently, only Karnataka (India) Phone numbers are available, other countries will be added soon.
:::

5. The IVR numbers will be successfully added.

    ![](https://i.imgur.com/uuT89by.png)

## Delete IVR number

To delete an IVR number, follow these steps:

1. Click the delete icon next to the number that you want to delete.

     ![](https://i.imgur.com/1PgnbR0.png)

  

2. A pop-up is displayed with a confirmation message **Do you really want to delete? This process cannot be undone**, click **Delete**.

      <img src="https://i.imgur.com/sBbsHni.png" alt="drawing" width="60%"/>

:::note
* Reclaiming a deleted number is a highly challenging and manual process. Ensure the details before removing a phone number from your Bot.
:::

3. The IVR number will be successfully deleted.