---
title : IVR Bots (for cloud)
sidebar_label : IVR (for cloud)
---

  

:::note

Refer to [this](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/ivr-bots) article for bots created before July 2022.

:::

  

In this article, you will learn:

1. [How to add and view the phone number currently associated with the Bot?](#add)
2. [How to remove phone number mapping from the Bot?](#delete)

  
  

While building voice bots, you must link the bot to some number, so that when the users call on this number, they can have a conversation with the bot.

Once you are ready with a personalized voice bot of yours, the first step towards enabling the voice channel is to assign a number to your voice bot.

  

:::note

- The associated number will be used for making (an outbound) call or receiving (an inbound) call use case.

- This is chargeable, contact the yellow team before getting started.

- Phone numbers are a limited resource and are leased from downstream providers at Monthly costs to us. Please ensure that only the required count of the phone number is being added to the Bot.

:::

  
  

---

## 1. <a name="add"></a> Add IVR number

  

To add a number (Interactive Voice Response- IVR), follow the given steps:

  

1. Open [Channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview), **Voice** > **IVR** channel.
2. Verify the bot with the correct environment on the channels page to which you want to associate a number. Click **+Add IVR Number**.

  

![](https://i.imgur.com/qrhWPLr.png)

  

3. Select the bot **region** and assign one or many IVR **numbers** as per your use case. There could be different types of numbers like landline/mobile available for association. Select the number/s as per requirements. Click **Add**.

  
  

![](https://i.imgur.com/iz1hH1F.png)

  

4. Click **Proceed**.

  

![](https://i.imgur.com/gozIfY8.png)

  
  

> Currently only Karnataka(India) Phone numbers are available, other countries will be added soon!

  

## 2. <a name="delete"></a> Delete IVR number

  

To delete an IVR number, follow the given steps:

  

1. Click the delete icon next to the number you want to remove.

  

![](https://i.imgur.com/1PgnbR0.png)

  

2. Confirm on the Pop-Up dialog box.

  

:::note

Once the number is deleted, the process of reclaiming it is very difficult and manual. Please confirm the details before removing a phone number from your Bot.

:::

  
  

