---
sidebar_label: Date based Campaigns
title: How to create Drip campaigns, birthday greetings and other date based campaigns?
---

You might often want to reach out to users on a particular date, or after they have completed a certain number of days from that particular date. Below we will show you how you can create date based [segment](../user_data/targeted_segments) to achieve such use cases.

### Drip Campaign

Usecase:
- *Reaching out to employees who have completed 7 days since date of joining*
- *Reaching out to users who signed up 7 days back*

Such segments target users who fall with-in a certain range from a particular date

![](https://i.imgur.com/rK1T5sd.png)

This sort of a segment can be created using [properties](../user_data_segments/cdp_data) that are of Date or DateTime data type.
The operator that can be selected are:
- is was exactly
- will be exactly
- in the last
- in the next

### Birthday Greetings

Usecase:
- *Sending out Birthday Greetings!*

![](https://i.imgur.com/7lFf46V.png)

This segment can be set up only for Date type properties. If the campaign runs on 10th June 2022:
- Current Day → Picks the day of when the segment is calculated, ie, 10th
- Current Month → Picks the month of when the segment is calculated, ie, June
- Any Year → Ignores the Year

Therefore, all users with Date = 10th June, regardless of year, will be targeted.

