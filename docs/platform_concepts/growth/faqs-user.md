---
title: Insights FAQs
sidebar_label: Insights FAQs
---

<details>
<summary> How are sessions(session duration) calculated? </summary>
<div>
A session can be a user session (when there’s user interaction with the bot) or bot session (when there’s a bot message but not necessarily any user message). Session duration is the average time for which the user has conversed with the bot. A session can be of 24 hours. A user can have any number of interactions with the bot within this 24 hours window from the start of a session and it will be considered a single session. A new session starts after 24 hours.
    
</div>
</details>


<details>
<summary> Difference between a new user and a unique user? </summary>
<div>
New users are first-time visitors.
</div>
<div>
Unique users are the total number of users visiting within any time range (new + repeat users). If a user has visited before, irrespective of the timeframe, they will be considered returning users. New vs returning users are identified based on UIDs. If a UID exists in the database, the user is classified as a returning user (UID remains same for a user, unless they log in from different channel or browser).
</div>
</details>

  
  

<details>
<summary> How to check for the percentage of self-serve? </summary>
<div>
    Deflection rate under <b>Bot Performance</b> on the <b>Overview</b> page.
</div>
</details>



<details>
<summary> What is the meaning of 'switched' in the user journey visualization page? </summary>
<div>
When the user moves to a different journey at any point in time it is termed as <b>Switched</b>.
</div>
</details>


<details>
<summary> Why is my user count not matching the numbers displayed on the flow chart? </summary>
<div>
The number displayed in the flow chart is the number of hits and not the number of users.
</div>
</details>


<details>
<summary> Is <b>dropped</b> inside Steps considered as a final drop or can the user continue? </summary>
<div>
<b>Dropped</b> means the user has dropped out of the bot.
</div>
</details>


<details>
<summary> How are users tracked in the mobile app? </summary>
<div>
Closing the chat window/app or leaving the chat in the middle of the conservation for a long time implies the user has dropped off.
</div>
</details>


<details>
<summary> When can we decide if a flow (journey) is completed?</summary>
<div>
It depends on the step structure and how many steps are required to complete a flow. After all the steps are completed, the journey is completed.
    
</div>
</details>

  
<details>
<summary> How do you differentiate between Poor performance and Good performance based on the visualization insights? </summary>
<div>
Based on <a href="https://docs.yellow.ai/docs/platform_concepts/growth/funnels#31-flow-completion-rate-fcr"> Flow completion rate </a> (in user journey visualization).
</div>
</details>


<details>
<summary> Why are flow completion rates low?</summary>
<div>
There can be multiple reasons for <a href="https://docs.yellow.ai/docs/platform_concepts/growth/funnels#31-flow-completion-rate-fcr"> Flow completion rate </a> . You can find a list of them along with recommended next steps under <b>User Journeys</b> > <b>Funnels</b> > <b>Flow Summary</b>.
    
</div>
</details>



<details>
<summary> How to check where users are dropping off?</summary>
<div>
    
<a href="https://docs.yellow.ai/docs/platform_concepts/growth/user-journeys#2-visualization-insights"> User journey visualization </a> can show you which flows users are mostly dropping off after and where within the journeys.
</div>
</details>



<details>
<summary> Can I automate(schedule) my report generation? </summary>
<div>
You can schedule any saved report on <b>Data Explorer</b> as an email alert. Open any <b>Saved report</b> > click <b>Actions</b> > <b>Schedule Reports</b> > configure all details > <b>Save</b>.  Click <a href="https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer"> here </a> for more details.
</div>
</details>

  
  
  
  

<details>
<summary> Why are the values not getting auto updated on the dashboard page (overview/ user journey/ metrics)? </summary>
<div>
All the Insights widget pages (<b>Overview, Metrics, User Journeys, Doc cog, Dashboards, Data explorer</b>) must be refreshed to see the updated data (pages do not get auto-refreshed).
</div>
</details>

  

<details>
<summary> How to capture analytics when the user clicks on the Home and Cross buttons? </summary>
    <div> You can find these Events in the <b>User engagement</b> > events table in <b> Data Explorer</b>. </div>
<div> <b>home-button-click</b>: When a user clicks on the home button in the chat widget. </div>
<div> <b>bot-closed</b>: When a user clicks on the cross icon of the chat widget. </div>
</details>

    
<details>
<summary>  On the Data explorer - User engagement table, the timestamps increase by 30 mins. What is the reason for that?
</summary>
<div>
On the user engagement events table, similar records are rolled up at 30 mins interval. You can refer to the Count column to check how many records are rolled up for a particular row event. The distinct count functionality uses <a href="https://en.wikipedia.org/wiki/HyperLogLog">hyperloglog</a> algorithm which gives an approximate number and not the exact count.
</div>
</details>
    
<details>
<summary> How can I <b>download chat transcripts</b> for the last year? 
</summary>
<div>
Open <b>Insights</b> > <b>Metrics</b>. You can apply 31 days custom time filter of any month before 6 months(or a year) and click <b>Export</b> and select <b>Chat transcripts</b>. 
</div>
</details>


<details>
<summary> 
When is my raw data export sent to my email and when does it get downloaded directly?
</summary>
<div>
How a dataset is exported depends on the file size. If the count of records is greater or equal to 500, we do an export from backend (email). For less than 500 records, the export happens directly.
</div>
</details>
