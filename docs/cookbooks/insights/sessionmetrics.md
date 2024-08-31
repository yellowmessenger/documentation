---
title: Key metrics related to sessions
sidebar_label : Session mertics drilldown
---


This article guides you through analyzing key metrics related to sessions. These metrics include:

1. Message Count
2. New User Count
3. Unique User Count
4. Session Count

Understanding the type of session—either bot or user session—is crucial for accurate analysis.

**To determine the session type**

1. Right-click on your screen and select **Inspect**.
2. Open the **Network** tab and search for the keyword "Insights."
3. Refresh the page and examine any API call's payload to determine the session type. By default, it is set to a bot session.

--------

## Message Count

To analyze message counts:

| **Bot Session** | **User Session** |
| -------- | -------- |
| 1. Open **Data Explorer > Message Events** table. <br/> 2. Apply a filter for **Interaction Type = welcome-reply**. <br/>3. Summarize the data based on the **Sum of Count**. | 1. Open **Data Explorer > Message Events** table. <br/>2. Apply a filter for **Interaction Type != welcome**. <br/>3. Summarize the data based on the **Sum of Count**. |


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfge0kR28xOUXedcJBK5-_c24-HcsP120lq-wle6v1XSbHueF3qcOTZwlA9d1dgzflrLsC5fwsf5j7yCCXWBARkTz8zScl_j06JADpyIlVbJnobNqne0NRhbWmQGTaAOjrrcU3mKjaJS2LRbYLQMlg8wwvu?key=8UxgDT6N1nuuxyt9ydwn8g)**


-------

## New User Count

To analyze new user counts:

| **Bot Session** | **User Session** |
| -------- | -------- |
| 1. Open **Data Explorer > User Engagement Events** table. <br/> 2. Apply a filter for **Event = first-message** or **Users-visited**. <br/> 3. Summarize the **Count**. | 1. Open **Data Explorer > User Engagement Events** table. <br/> 2. Apply a filter for **Event = first-message**. <br/> 3. Summarize the **Count**. |

> You can also apply filters based on channels and timestamps.


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfQIpn2fi0l5jlT-BVJyYLk49HlOgA6bP5GDqmLx6SjABKjpdz_px2uzoMQhJZUuemWZWsvumqFKABLBK3VyrF7VKG6rmsk6d-Grh1by1Bn2t_Vz4s47YHnxBLbrVnaCItNcDJUFzYU3XlULtwKvE6w_UDB?key=8UxgDT6N1nuuxyt9ydwn8g)**

---

## Unique User Count

To calculate the unique user count:

| **Bot Session** | **User Session** |
| -------- | -------- |
| 1. Open **Data Explorer > Message Events** table. <br/> 2. Apply a filter for **Type = bot-message**. <br/> 3. Summarize the data based on **Distinct UID**. | 1. Open **Data Explorer > Message Events** table. <br/> 2. Apply a filter for **Type = user-message**. <br/> 3. Summarize the data based on **Distinct UID**. |


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXem1uQAFHItje7vnPN4-Ql5Ldv8SzsUkoIXHuft_zYyZvXLtPKu8gqST9P0b5aPTuSQ5_d6TaedVkul20on-ydBwK1iAgToHgW7bWH1E61YOgasHneYxn5TQJok5x1U0788rtKhKHdksJ5gstLxQQFY3myL?key=8UxgDT6N1nuuxyt9ydwn8g)**


-----

## Session Count

To count sessions:

| **Bot Session** | **User Session** |
| -------- | -------- |
| 1. Open **Data Explorer > User Engagement** table. <br/> 2. Apply a filter for **Event = bot-session**. <br/> 3. Summarize the **Count**. | 1. Open **Data Explorer > User Engagement** table. <br/> 2. Apply a filter for **Event = user-session**. <br/> 3. Summarize the **Count**. |


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdbbLOrkg4vuJ-yPm1OcPSZXMFZ3Lt4YBhpr_l-WVE9mQ6tlnscXw8OrWK75sfYXr-s3KmfwR7NAKEgpXnRAfcsu0_zgkI1hyby5BqNEWI7s7-R5dhhwSW1dJ4s41SxjfLbj8UxuhmdfPFzqOMdM6S7nnjB?key=8UxgDT6N1nuuxyt9ydwn8g)**