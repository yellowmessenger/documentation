---
title: Exclude opted-out users from campaigns 
sidebar_label: Exclude opted-out users from campaigns 
---

Enhance your campaign targeting by excluding users who have opted out. Learn how to ensure your messages reach the right audience while respecting user preferences.

## Store opt-out status through converstions

1. [Train an utterance](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intents-and-utterances) on DND.
2. [Set up a flow triggered by the utterance](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#map-intents-to-flows) or capture opt-out status manually.
3. Within the flow, [update the opt-in property](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data) accordingly.
4. Use this updated property as a condition in segment targeting to exclude users who have opted for DND from receiving further campaign messages.


## Exclude opted-out users from Campaigns

Here are the steps to create a segment with users who have not opted out:

1. **Login to Yellow.ai platform**: Log in to your Yellow.ai account using your credentials.

2. **Navigate to User 360**: This is where you can manage your segments.

3. **Create new segment**: Click on the **Segments** tab and then click the "Add segment" button to start creating a new segment.

4. **Segment name**: Provide a name for your segment, such as "Active Users" or "Non-Opted Out Users".

5. **Add conditions**: In the conditions section, add a condition that filters out users who have not opted out. You can do this by selecting a property like "Opt-out Status" and setting it to "False" or Opt-in status to "Not false".

  ![](https://i.imgur.com/d6wt8N5.png)

6. **Save the segment**: Once you've set the conditions, click the "Add" button to save your segment.

7. **Use in campaigns**: Now, when you create a new campaign, you can select this segment to target users who have not opted out. This ensures that your campaign reaches the right audience.

   ![](https://i.imgur.com/2JUWsRT.png)

