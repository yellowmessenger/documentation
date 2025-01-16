---
title: Bot performance metrics for indept insights on Flows 
sidebar_label: Bot performance metrics 
---



The **Bot Performance Metrics** dashboard provides detailed insights into the effectiveness and usage of your bot. To access this dashboard, navigate to **Dashboard > Bot Performance Metrics**. All data in this dashboard can be filtered for specific **dates** or **time ranges** to provide tailored analytics.

![image](https://imgur.com/XRLp8Db.png)

This guide explains the various metrics available in the dashboard, how to interpret them, and when to use them to optimize your bot's performance.

---

## Bot performance metrics KPIs

Following are the Bot Performance Metrics Key performance indicators(KPIs): 




### 1. Flow Visits


Tracks the number of times users enter a specific flow within the bot. This metric helps measure the popularity and usage of different bot flows.

![image](https://imgur.com/lSYqz12.png)


**Data Details:**
- **Data Source:** Number of visits completed through flows.
- **Table:** User Engagement Events.
- **Filter:** Event is "journey-completed."
- **Summarize By:** Sum of count.
- **Group By:** Journey.

**When to Use:**
- To understand which flows are most frequently accessed.
- To identify less-used flows that may require improvements or better promotion.

---

### 2. Bot Accuracy


Measures the bot's ability to accurately understand and respond to user queries. High accuracy indicates effective natural language processing (NLP) and a well-trained bot.

![image](https://imgur.com/gxZPSzU.png)


**Data Details:**
- **Data Source:** Accuracy of bot identification in messages.
- **Table:** Message Events.
- **Filter:** IDENTIFICATIONSTATUS not empty.
- **Summarize By:** Count.
- **Group By:** IdentificationStatus.
- **Visualization:** Pivot.
- **Custom Formula:** `Identified / (Identified + Unidentified)`.

**When to Use:**
- To evaluate the quality of the bot's NLP.
- To identify areas where training data or intents need refinement.

---

### 3. Bot Feedback


Collects user feedback on their interactions with the bot, providing insights into user satisfaction and areas for improvement.

**Data Details:**
- **Data Source:** Feedback provided for bot performance.
- **Table:** User Feedback Table.
- **Summarize By:** Average on rating.

**When to Use:**
- To gauge user satisfaction and identify trends in user sentiment.
- To prioritize improvements based on feedback ratings.

---

### 4. Flow Completion Rate


Calculates the percentage of users who successfully complete a flow from start to finish. Indicates how effectively the bot guides users through processes.

![image](https://imgur.com/CT692tk.png)


**Data Details:**
- **Data Source:** Completion rate of initiated journeys.
- **Table:** User Engagement Events.
- **Filter:** Event is "journey-started" and "journey-completed."
- **Summarize By:** Sum of count.
- **Group By:** Event.
- **Visualization:** Pivot.
- **Custom Formula:** `(journey-completed / journey-started) * 100`.

**When to Use:**
- To assess the usability and clarity of specific flows.
- To identify points where users abandon flows and improve them.


#### Flow Completion Rate for Each flow 

This displays the flow completion rate for each flow. 

![image](https://imgur.com/BD19WHG.png)

---

### 5. Deflection Rate


Measures the percentage of user inquiries resolved by the bot without escalation to a human agent. A higher deflection rate indicates effective issue resolution by the bot.

**Data Details:**
- **Data Source:** Deflection rate in user-agent sessions.
- **Table:** User Engagement Events.
- **Filter:** Event is "user-session" and "agent-session."
- **Summarize By:** Count.
- **Group By:** Event.
- **Visualization:** Pivot.
- **Custom Formula:** `(User-Agent / User) * 100`.

**When to Use:**
- To monitor the bot's success in reducing workload for human agents.
- To identify areas where bot responses can be improved for higher deflection.

---

### 6. Utterance Status Split


Categorizes user utterances based on their status (e.g., recognized, unrecognized, ambiguous). Helps in understanding how well the bot processes user inputs.

**Data Details:**
- **Data Source:** Number of messages with an "unidentified" status.
- **Table:** Message Events.
- **Filter:** IdentificationStatus is "unidentified."

**When to Use:**
- To identify intents that are not recognized or are ambiguous.
- To refine training data and improve recognition rates.

---

### 7. API Usage by Status Code


Tracks the status codes returned by API requests made by the bot. Provides insights into the performance and reliability of APIs.

![image](https://imgur.com/0Q23WNM.png)


**Data Details:**
- **Data Source:** Usage of API services categorized by status.
- **Table:** API Events.
- **Filter:** API name.
- **Summarize By:** Sum of count.
- **Group By:** Status code.

**When to Use:**
- To monitor API reliability and identify potential issues with integrations.
- To troubleshoot failed API requests based on status codes.

---

### 8. API Requests by Day


Displays the number of API requests made by the bot daily. Useful for tracking bot activity levels and identifying trends or spikes in API usage.

![image](https://imgur.com/eRniV1p.png)


**Data Details:**
- **Data Source:** Usage of API services categorized by status.
- **Table:** API Events.
- **Filter:** API name.
- **Summarize By:** Sum of count.
- **Group By:** Day.

**When to Use:**
- To track daily API activity and identify usage patterns.
- To ensure API request volumes align with expected bot activity.

