---
title: Exclude opted-out users from campaigns 
sidebar_label: Exclude opted-out users from campaigns 
---

Enhance your campaign targeting by excluding users who have opted out. Learn how to ensure your messages reach the right audience while respecting user preferences.

## Store opt-out status through converstions

1. [Train an utterance](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intents-and-utterances) with the keywords such as "DND" and "unsubscribe".

    <img src="https://i.imgur.com/N7RKWZJ.png" width="40%"/>

     i. Navigate to **Studio** > **Train**.

    ii. Click **Add new intent**.

   iii. Provide a relevant name for the intent and add "DND" and "unsubscribe" as Uttrences.
   iv. Click **Add** to save the intent.

2. [Set up a flow to trigger based on the intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#map-intents-to-flows) and choose the relevant intent.

    <img src="https://i.imgur.com/r1h2ZHC.png" width="80%"/>



3. Use the [Variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables)  to [update the relevant user property](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data), in the following example, the `campaignOptIn` property is set to `false`. This ensures that the customer's optout status is captured and stored in User 360.

    <img src="https://i.imgur.com/rK3a7ZU.png" width="100%"/>

4. [Create a user segment](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment#1-create-user-segment) excluding opted-out users. 

    Add a condition to include users whose `campaignOptIn` status is `true. `Use this updated property as a condition in segment targeting to exclude users who have opted for DND from receiving further campaign messages.

    <img src="https://i.imgur.com/MZkQI1H.png" width="80%"/>


5. When [setting up your campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign), make sure to exclude opted-out users using the segment you created. This ensures that users who have opted for "STOP" or "DND" will not receive any further campaign messages. 


   <center><img src="https://i.imgur.com/Tk2DCZL.png" width="90%"/></center>