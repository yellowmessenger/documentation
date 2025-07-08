---
title: Manage Flow campaigns
sidebar_label: Manage Flow campaigns
---

## Archive a flow campaign

You can easily archive campaigns that are no longer active or relevant. Archiving allows you to keep your campaigns organized by removing unnecessary campaigns, while still retaining access to important data and analytics. 

::note
You can archive campaigns in **Draft** and **Completed** status, but not Live or Scheduled campaigns.
:::

To archive a campaign:
1. On the Flows page, navigate to the desired flow you wish to archive.
2. Click on the More options icon > **Archive**.

   ![](https://i.imgur.com/Oe6gmAv.png)

3. To see the list of archived campaigns, click the **Archived Flows** button.

   ![](https://i.imgur.com/cdIQMVx.png)

   ![](https://i.imgur.com/lauT7iG.png)



## Edit Draft campaign

To edit and schedule a draft campaign:

On the Flows page, navigate to the desired draft campaign and click the **Edit** icon. Learn [how to create a flow campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign).





---


## Engage Flow Not Working – Troubleshooting Guide

The Engage flow works correctly in the **Sandbox** environment but consistently fails in **Staging**, preventing validation and deployment. The same flow logic appears to be used in both environments, yet users are not entering the flow in Staging.


#### Prerequisites

Ensure you have the following before troubleshooting:

* Access to the Yellow\.ai platform in both Sandbox and Staging environments.
* Permissions to view and modify **Engage flows** and **segments**.
* Access to **flow campaign reports** in both environments.
* Familiarity with flow triggers, segment mapping, and deployment procedures.


### Steps to Resolve

#### 1. Verify flow duplication and segment mapping

* Ensure the Engage flow was **copied correctly** from Sandbox to Staging.
* **Check segment-to-flow mapping**:

  * Segments should be linked to **only one flow** at a time.
  * Multiple flows using the same segment can prevent users from entering any flow.
  * Archive any redundant test flows using the same segment.
  * Reference: [How to archive a flow campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/manage-flow-campaign#archive-a-flow-campaign) (insert actual link).


#### 2. Check segment configuration

* **User Eligibility**: Validate that the test users in Staging **match the criteria** defined in the segment.
* **Segment Population**: Confirm that users are **present in the segment** within the Staging environment.


#### 3. Review Trigger Events and Entry Conditions

* Ensure the **trigger event** is correctly configured and is actually being fired in Staging.
* Double-check any **entry conditions** within the flow logic that may block progression or user entry.


#### 4. Check the Flow Campaign report

* Use the [flow campaign report](https://docs.yellow.ai/docs/platform_concepts/engagement/flow-report#view-flow-campaign-report) in Staging to track:

  * Whether the segment is populating.
  * Whether users are being added to the flow.
  * Where users are dropping off (if applicable).

* Reference: [Yellow.ai Documentation – Flow Campaign Report](#)


#### 5. Compare Configurations (Sandbox vs. Staging)

* Perform a **side-by-side comparison** of the following:

  * Flow logic (nodes, transitions, actions)
  * Segment filters and audience population
  * Trigger events and conditions
  * Bot version deployed
* Ensure the Staging environment has the **correct and latest bot version**.


#### 6. Re-deploy or Re-publish

* After making updates, ensure you:

  * **Save** all changes.
  * **Re-deploy or re-publish** the bot in the Staging environment.


#### 7. Isolate the issue (Advanced)

If the issue persists:

* Simplify the Engage flow in Staging to a **basic structure** (e.g., trigger → message).
* Gradually add nodes or logic to identify the breaking point.

