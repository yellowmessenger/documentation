---
sidebar_label: Manage User Data
title: Managing user data in yellow.ai
---

User’s Module is available in the Engage section of your app. This is where you can see who your users are and manage them, define user properties, create user segments and more.

:::info
This is enabled only for https://cloud.yellow.ai
:::

## Manage User Properties

Click on **User Properties**. In the left panel, you can see the user schema, which includes all the [system](./cdp_data#system-user-properties) as well as [custom properties](./cdp_data#custom-user-properties) along with their data types. Selecting/unselecting any of these properties decides which ones show up in the users table. Properties selected, show up in the right panel where you can arrange the order in which you want to see them on the users table

![](https://i.imgur.com/KpYqmFo.jpg)

Clicking on **+ Custom properties**, allows you to create custom properties

![](https://i.imgur.com/xwdOtpt.png)

## Add & Edit Users

If you need to add a single user, you can click on **+ Add user → Single User**. This is best for adding just a few at a time, like prospects you met at an event, or a lead who reached out on LinkedIn.

![](https://i.imgur.com/llsMgDq.png)

If you want to edit the above user, you can click on **user options → edit user**

![](https://i.imgur.com/TTb77hi.png)

If you want to add/edit multiple users at once, we'd recommend using [REST APIs](../enriching_user_profiles/send_user_data_event_rest_api) or [CSV Import](../enriching_user_profiles/create_audience_group_csv).

## Creating and managing segments

A segment is a group of your users defined by conditions that you set. To learn more about creating and managing segments, [refer to this document](./creating_managing_user_segment).


:::info
Users are automatically added to the segment every time the user updates to match those conditions
:::

## Viewing & Exporting your User Data

By default, the Users table shows you the data for **All Users**. To view the data for Users who are a part of a particular segment, you can select that segment from the list below.

![](https://i.imgur.com/8dJAT9R.png)

You can export your user data as well. To export All User’s data, you can select **All Users → Actions → Download all user data**. To download the data for users that are in a particular segment, select **Segment → Actions → Download segment user data**.

![](https://i.imgur.com/i2sdTHo.png)

Your exported data will be in the form of CSV and will be available in **User Logs**. Head over to User Logs → Filter for **“Bulk user download”** → Click on **“Download Log”**

![](https://i.imgur.com/mPaMTEa.png)

## Deleting your User Data

Deleting user data is possible too, however you may want to [export them](./manage_user_data#viewing--exporting-your-user-data) as a backup first.

To delete All User’s data, you can select **All Users → Actions → Delete all user data**. To delete the data for users that are in a particular segment, select **Segment → Actions → Delete segment user data**.

![](https://i.imgur.com/19BKVDn.png)

You can also select multiple records and then choose to delete them.

![](https://i.imgur.com/X3ASFOg.png)

You may also delete user data using [REST APIs](../enriching_user_profiles/send_user_data_event_rest_api).

:::warning
“Archive segment” is not the same as “Delete segment user data”. The former has no impact on the user data and only archives/disables that segment from being viewed and used. The later however deletes the actual user data associated with that segment. You can read more about “Archive segment” [here](manage_user_data#viewing--exporting-your-user-data).
:::

## User Logs

User logs is a space for your to audit your user data. There are 3 types of logs we capture at the moment:

- **CSV Import →** This log appears whenever you import users using a CSV. The associated “Download log” link contains details around the import process, that is, which records were IMPORTED, FAILED or MERGED. You can read more about that [here](../enriching_user_profiles/create_audience_group_csv#figuring-out-what-went-wrong-with-your-csv-import).

- **Bulk User Download →** This log appears whenever you [export your user data](./manage_user_data#viewing--exporting-your-user-data). The associated “Download log” can be used to download the exported user data in CSV format.

- **Bulk User Delete →** This log appears whenever you [delete your user data](../user_data_segments/manage_user_data#deleting-your-user-data).

![](https://i.imgur.com/s86psKQ.png)