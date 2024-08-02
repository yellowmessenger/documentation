---
title: Native queries to fetch data explorer data/columns
sidebar_label: SQL queries for tables  
---


The existing filters in the data explorer only allow filtering rows. By using SQL queries, we can filter and display the desired columns.

Follow these steps to create a SQL query in Data explorer: 

1. Open **Data Explorer** > Click **Create Report** > Select **Native Query**.
2. In **Create Report** section, write the queries based on your requirements.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcVeB3iWz-_eVh8SelrU2BPJ7AXGqSqz-S19b3VnKp00gozZIdRzMrR2j_Wa14_u2d4hikchK1FC4qQr-H6SGKjQP4x-lwT432oN34tmyB_3ztdj-WHC652a-za3rQMVPVwN2MUmuJpxFVljwQwvG2P4oc?key=AX9O8V865aZREOersNhPyg)**

Here are some SQL queries you can use:

- To get all the columns from the messages database:

```
SELECT * FROM messages;
```
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdkYT_U9FpPrULqYNYDTCPojqvkx5q7Uv0QG1SYj9XMhevwxyozR6iM_NMvsXZpzjfFSkUhqOajuLfI4ZXKscFdBD2lpxq0JgJiQhERtTCvdNXlKxTQItPiHq0nBWFG7vKIJOwSUbsVCDSW-HbXg1maRa6k?key=AX9O8V865aZREOersNhPyg)**

- To get specified columns (date, UID, and session ID):

```
SELECT __time AS CreatedDate, uid AS UID, sessionId AS SessionID FROM messages;

```

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeGejFtyREOg7s2RvR1RP2d770GxpFSMqW4WtsunALVxlSOxfVYjpHhKMynNRyeNYLOC1nxXzuzbvaEb8mW-BFn77RZq3iHIXp8MfAN_JV39JqrwUhPwo6f1plHHn0hxVI6pfmmSPrSeczxIoUNiDrsVmNk?key=AX9O8V865aZREOersNhPyg)**

- To create new columns with static values (e.g., bot ID and bot name):

```
SELECT "x1689236272568" AS BOTID, "Bhavana" AS BOTNAME, uid AS UID FROM messages;
```

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcXSx4bpmGlhRs9_wb4kdhC4lGeW9kqmo3wZCbnoOOLcg5rJzaYp6v1EjPNznXt1gqPAfkMkOjKIgz6ckAozlWB2TN31g_U-YWWl5pe5xbDm1LvvgLEU2W1Q2tjlPv7b4pu3GoIIyf00MBqcqTrHavPc1s?key=AX9O8V865aZREOersNhPyg)**

- To get the count of each user in the database based on the UID:

```
SELECT COUNT(*) AS total_users, uid AS UID FROM messages GROUP BY uid;
```
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcm0ab2W1U6WvT1wDILrz6hxpARcm6QnizTrU1bNbRlazD3xHcaFKO42ZqnqkK6lFcr3tjm_7XylozFLNhhQ888M1OXE0hAriYUloOodZRxaRvTJgKrAA5TUbhBwaQb72kslWtxEs2jWYeEbva32Lp3vAE?key=AX9O8V865aZREOersNhPyg)**

- To get chat details through the messages database:

```
SELECT __time AS CreatedDate, "x1689236272568" AS BOTID, uid AS UID, messageType AS MessageType, sessionId AS SessionID, journey AS Journey, step AS Step FROM messages;

```
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdLa_LXOrPCrMVoWRFYU8EAZd5zWcexpvQXhllJ8VEwUx8YLvZLGmxghL5vpFSKVVFJD-0zZyYm4OgVcpfRzBsaX-FryG56GxvLQmYIyA1sxM63a98yCc3WeNO1HFyGSWGQ38K-UQ2_81wwgTjrPwhzRLPt?key=AX9O8V865aZREOersNhPyg)**

3. Save the query and create dashboards to filter the data based on the timestamp for further use cases.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcuttmMH7fY9zTic3vonkVSi7BHyFtx-M990MHxBztCnR__iBZ-GuSLHlCqkxF9ttUumGLtpY_JeHBndSQU4HR9sJ-hiCz2Y_f2JrUKOAXUR4fMwxlpk--tS2MFrC8xIXli2RKFnOM1-XtTUjiEFt9zUWQ?key=AX9O8V865aZREOersNhPyg)**

4. Click **Create Dashboard** > select **New Dashboard**.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfX628XJNg6Ia1quD5BB8r2IUbpEOd_FbzVhbyBAWUlbv8arcuZ3JoaphQbl-YgBHHczvEFSHHcJWJyGgM3drY-MBQsJUa53TyvziREokVk6W76B8UGZ0Yva7JC_5A2rE5JMOGHK3yb57bAsniaA-JRDJY2?key=AX9O8V865aZREOersNhPyg)**


5. Go to Custom Dashboards to view the newly created dashboard.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcAMUSmnZl-g0JZKIVVHORIHGmMZjzF7xh-w6v5fXRyIypZ5JlypAUID3XPIGfvgYpPJeKDw0ZpUVMAG8-qS_01n94mFTrYh9kvfXhqbzZEEWRI-vocOthBH3bFhJlI5xxj54TjqcNmU8lddytcdZrCyqBd?key=AX9O8V865aZREOersNhPyg)**