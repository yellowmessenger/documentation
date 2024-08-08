---
title:  Set up outbound campaign via. yellow.ai voice bots
sidebar_label : Set up outbound campaign 
---

In this article, you will learn how to select an entry rule and design a campaign flow for voice bots.

:::info

**Prerequisite**

1. **User segmentation**: Grouping users based on shared characteristics, such as interests or behaviors, is known as user segmentation. There are two types of segments: static segments, which remain constant, and dynamic segments, which update automatically based on user data. To send targeted campaigns, you need to have user data grouped into segments in **user360**. Segments like product interest or recent purchasers can be created for effective messaging.
    > Follow the steps provided [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview) to create and manage user segments
2. **Events**: an event refers to a recognized occurrence by the bot (asynchronous). In **Automation**, there are various events available, such as widget, inbox, engage, integration, user inactivity, schedule, User 360, and custom events, which are used to handle occurrences and perform tasks.
    > Learn more about events and the steps to create custom events [here](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub).
:::


To create a voice bot campaign, follow these steps:


## Step 1: Create a voice bot campaign workflow 

1. Log in to your [yellow.ai](https://cloud.yellow.ai/) account. Open **Engage** > **Outbound**. 
2. On the **Flows** tab, select **+Create workflow**.
![](https://hackmd.io/_uploads/HknRKzRS2.png)

------

## Step 2: Select entry rule for the voice bot campaign

To get started, follow the steps below: 

1. Select the entry rule that best aligns with your business needs.

| Entry rule | Trigger | 
| -------- | -------- | 
| [User events](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-events)  | Select this to trigger the flow when a specific user event occurs.     |
|[User entered a segment](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-entered-a-segment) | Select this to trigger the campaign when the user enters a specific segment. | 
|[User exited a segment](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-exited-a-segment) | Select this to trigger the campaign when the user exits a specific segment. | 
|[User present in a segment](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-present-in-a-segment)| Select this to trigger the campaign only when the user is in a specific segment. |

2. **Choose your audience**: When selecting entry rules, you have the option to choose one or multiple user segments or target all users in User360.
3. **Set campaign schedule**: For each entry rule, you can determine the frequency and specific time for running the campaign.           

     <img  src="https://hackmd.io/_uploads/BJTjcGRH2.png"  width="50%"/>

-------

## Step 3: Add voice call node and configure the campaign

:::note
- Voice calls can only be added to the workflow if the voice bot has an IVR (Interactive Voice Response) configuration in place.
- It is necessary to configure a flow that the voice bot will follow when the campaign is triggered. This flow will serve as a template for voice calls.
- If you intend to use other message channels such as SMS or Email, you need to configure the senderID/channel and ensure that a corresponding template is available for that particular channel.
:::

To initiate a voice call, follow the steps below: 

1. Connect the **Voice call node** (available under the message category) to the initial node in the workflow.
    <img  src="https://hackmd.io/_uploads/HJcCv70Bh.png" width="90%"/>
    
2. Enter the details.
    - **Enable answering machine detection (AMD)** : You have the option to enable AMD, which helps determine if a voice call made by the bot is answered by a human or a machine (such as a voicemail system).
    - **Bot flow**: From the dropdown menu, select the desired flow that should be triggered when the campaign call is made to customers. All available flows in Automation are listed here.
    - **From**: Choose the IVR number(s) from which the voice call should be made. If multiple IVRs are added, the calls will be made randomly from any of those numbers.
    - **To**: Select the variable that contains the user identifier. Click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/userid-flow) for steps on setting up user identification.
    - **Call trigger time**: Set the business hours in the **Settings** and configure the flow to be triggered only during those designated business hours.

    ![](https://hackmd.io/_uploads/SyIl0Q0S2.png)

3. Add connecting nodes to the voice node to determine the subsequent steps based on different scenarios. You can define the next actions based on whether AMD is detected, the call is answered, the line is busy, there is no answer, or if the call fails to connect.
    ![](https://hackmd.io/_uploads/BkiZpQCBn.png)


:::note
You can add [conditions](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#condition-to-trigger-flow-campaign), [flow control](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#flow-control) and [action](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#action) to design the flow. 
:::

-------

## Step 4: Add goal to end the voice bot campaign

To prevent spamming users, it is recommended to add a campaign goal. When an event is detected that signifies the completion of the goal, users will exit the flow and the campaign will end.

Follow these steps to add a new goal to the flow:
1. Click **Add new goal to the flow**.
2. Add details: 
    - **Name**: Type any custom name. 
    - **Event**: Select an event that you have activated in Automation. When this [event](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub) is identified, it will indicate that the goal has been reached.
    - **Set goal validity**: Choose the duration for which the goal should remain valid. After the specified duration, the campaign will still be active, but the goal won't be considered.
3. **Save** the goal.  
    ![](https://hackmd.io/_uploads/rJwmAQ0B2.png)

-----

## Step 5: Publish workflow for voice bot campaign 

1. Click on **Publish** to publish the flow and make it active.
    ![](https://hackmd.io/_uploads/HJVXeVCB3.png)
2. Once the campaign is published, it will automatically run for users who meet the entry rule criteria.
3. To monitor the status of the voice bot campaign, track the users who have entered the campaign, and keep a count of the number of times the goal has been achieved, refer to the flow campaign page.
    ![](https://hackmd.io/_uploads/rJYgl40Hn.png)


<!-- 

**Summary**

To initiate a campaign using voice bots, follow these steps:

1. Create a workflow on **Flow campaign** page and choose an entry rule.
2. Add Flow control, Conversations, Actions, and Campaign goals into the workflow.
3. Publish the workflow.
4. Once an entry rule is identified, the campaign will run automatically.

-->