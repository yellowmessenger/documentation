---
title: Insights FAQs
sidebar_label: Insights FAQs
---

<details>
<summary> How are sessions calculated? </summary>
<div>
A session can be a user session (when there’s user interaction) or bot session (when there’s a bot message but not necessarily any user message). Session duration is the average time for which the user has conversed with the bot. A session can be of 24 hours. A user can have any number of interactions with the bot within this 24 hours window from the start of a session and it will be considered a single session. A new session starts after 24 hours.
</div>
</details>


<details>
<summary> Difference between a new user and a unique user? </summary>
<div>
New users are first-time visitors while unique users are the total number of users visiting in a time range (new + repeat users). If a user has visited before, irrespective of the timeframe, they will be considered a returning user. New vs returning users are identified based on UIDs. If a UID exists already, it’s a returning user.
</div>
</details>

  
  

<details>
<summary> How to check for the percentage of self-serve? </summary>
<div>
Deflection rate under Bot Performance on the Overview page.
</div>
</details>



<details>
<summary> What is the meaning of 'switched'? </summary>
<div>
Switched means moved to a different journey at any point in time.
</div>
</details>


<details>
<summary> Why is my user count not matching the numbers displayed on the flow chart? </summary>
<div>
The number displayed in the flow chart is the number of hits and not the number of users.
</div>
</details>


<details>
<summary> Is 'dropped' inside Steps considered as a final drop or can the user continue? </summary>
<div>
It means the user has dropped out of the bot.
</div>
</details>


<details>
<summary> How are users tracked in the mobile app? </summary>
<div>
Closing the chat window/app or leaving the chat in the middle of the conservation for a long time implies the user has dropped off.
</div>
</details>


<details>
<summary> When can we decide if a journey is completed?</summary>
<div>
It depends on the step structure and how many steps are required to complete a flow. After all the steps are completed, the journey is completed.
</div>
</details>

  
<details>
<summary> How do you differentiate between Poor performance and Good performance based on the visualization insights?</summary>
<div>
Based on [flow completion rate](https://docs.yellow.ai/docs/platform_concepts/growth/funnels#31-flow-completion-rate-fcr) (in user journey visualization).
</div>
</details>


<details>
<summary> Why are flow completion rates low?</summary>
<div>
There can be multiple reasons for [low flow completion rates](https://docs.yellow.ai/docs/platform_concepts/growth/funnels#31-flow-completion-rate-fcr). You can find a list of them along with recommended next steps under User Journeys > Funnels > Flow Summary.
</div>
</details>



<details>
<summary> How to check where users are dropping off?</summary>
<div>
[User journey visualization](https://docs.yellow.ai/docs/platform_concepts/growth/user-journeys#2-visualization-insights) can show you which flows users are mostly dropping off after and where within the journeys.
</div>
</details>



<details>
<summary> Can I automate(/schedule) my report generation? </summary>
<div>
You can schedule any saved report on Data Explorer as an email alert. Open any Saved report > click Actions > schedule Reports > configure all details > Save. Click [here](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer) for more details.
</div>
</details>

  
  
  
  

<details>
<summary> Why are the values not getting auto updated on the dashboard page (overview/ user journey/ metrics)? </summary>
<div>
All the Insights widget pages (Overview, Metrics, User Journeys, Doc cog, Dashboards, Data explorer) must be refreshed to see the updated data (pages do not get auto-refreshed).
</div>
</details>

  

<details>
<summary> How to capture analytics when the user clicks on the Home and Cross buttons? </summary>
<div> You can find these Events in the User engagement events table in Data Explorer. </div>
<div> home-button-click: When a user clicks on the home button in the chat widget. </div>
<div> bot-closed: When a user clicks on the cross icon of the chat widget. </div>
</details>