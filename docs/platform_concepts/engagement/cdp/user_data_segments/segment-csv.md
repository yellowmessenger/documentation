---
sidebar_label: Segment users when importing CSV
title: Segment creation during user import
---

**Segment Creation During User Import**

You can create static segments when importing a CSV file with a predefined list of users and use in targeted campaigns and personalized communication. 


When multiple CSV files are uploaded simultaneously, it's possible that each CSV file may contain duplicate records. In cases where there are conflicting records due to duplicated user IDs, the total user count within the segment might fluctuate accordingly. However, if records are merged to resolve these conflicts, these merged records may potentially appear in multiple segments.

For example, if you opt to retain user data during a conflict resolution process, the previous record may be deleted, and as a result, it won't be available in the segment that was originally created through the prior import.

* To know how to create a segment while importing a CSV file, see Step 9 of [Import CSV file](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users#step-2-import-csv-file).

***

**What next?**

* Once you've created a segment, [view users in the segment](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_segments#view-segment-users) and know how to use the segment to [run targeted campaigns](/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign).
* [Edit segment name](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_segments#edit-user-segment) if needed. If you want to delete, check out [Delete segment](/docs/platform_concepts/engagement/cdp/user_data_segments/manage_segments#2-manually-delete-user-segment).