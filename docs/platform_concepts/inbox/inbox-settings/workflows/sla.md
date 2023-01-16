---
title: SLA settings
sidebar_label : SLA settings
---



A service-level agreement (SLA) defines the level of service expected by a customer from a supplier, laying out the metrics by which that service is measured, and the remedies or penalties, if any, should the agreed-on service levels not be achieved. Usually, SLAs are between companies and external suppliers, but they may also be between two departments within a company.

Most service providers have standard SLAs — sometimes several, reflecting various levels of service at different prices.


------

On the SLA settings page, **Inbox Admins** can define new SLAs, add conditions, and set targets for the inbox agents who are responsible to address the tickets. 



:::note
- Every ticket has an SLA attached to it. 
- Two SLA policies cannot be applied to a single ticket. 
- The priority of assignment will be Top > Down as the policies appear in the UI. 
:::


Follow the below steps to configure SLAs: 

1. Open **Inbox** > **Settings**.  
2. Search and select **Service level agreement (SLA)**.


![](https://i.imgur.com/qAM0tUG.png)


3. All the available SLAs are listed on this page. The **State** toggle next to the SLA names can be enabled or disabled, this will activate or deactivate the SLAs. 
4. Existing SLAs can be edited or deleted by clicking the menu next to the SLA name and selecting **Edit** or **Delete**. 

![](https://i.imgur.com/Ls5lfpG.png)

5. To create a new SLA, click **+Create new policy**. 

![](https://i.imgur.com/qtn1eUy.png)

6. Add **Policy name** and **Policy description**. Click **Create**. 


![](https://i.imgur.com/dbUzC3g.png)

7. By default, the SLA defined on this page will apply to all email tickets. If you want this SLA to apply only to certain **Group** or **Tag**: 
    - Click **Add another condition**.
    ![](https://i.imgur.com/DKPPI94.png)
    - Slecte **Group**/ **Tag**. **Group** / **Tag** names will be listed in the drop-down, select the required value. 
    ![](https://i.imgur.com/9aaLlRz.png)

    - You can add multiple conditions by clicking on **Add another condition**. This SLA will be applicable if both conditions hold (AND condition). For example, in the above screenshot, SKmart SLA will be applied if the ticket belongs Payments group and is tagged as critical.  

8. SLA targets are separated based on priority. You can set targets that the team should meet, otherwise required action can be taken. You can set the Timings(Minutes/Hours/Days) in the normal calendar hours for High, Medium, and Low priority tickets. By enabling the **Escalations** and **Reminder** toggle, agents will be notified. 
    - **Resolution time**: The total time taken by the agent to provide the resolution. It is calculated based on the time the ticket was opened (or assigned if it was directly assigned) to the time it was set as resolved.
    - **First response time**: The measure of what time it took for the agent to first reply to the ticket after it was raised in the platform. It is calculated based on the time the ticket was opened (or assigned if it was directly assigned) to the first response from a human agent.
    - **Every response time**: The time between every response of the agent and the end user, so to stick to the SLA agent will have to reply within X mins/hours to the end user after their every reply. It is calculated based on the time from when the end user sends a reply to the time agent replies back.
    
![](https://i.imgur.com/WkmTF39.png)


:::note

- Setting the status of a ticket as **Pending**/ **On-hold** will pause the SLA timers for **Resolution time** and **Every response time**. Resolution time will be calculated by excluding the time spent in pending status. 
- **Reopening** a ticket will resume the SLA timer from when it was paused. New resolution time will be calculated by including the time taken previously to resolve the ticket. 
- If the **Priority** of the ticket is changed, SLA will also change based on the priority. Before changing the SLA, if there was a **breach of policy**, it will be recorded and will be present as part of reports. Breaches will not be back-dated. 
:::

9. Add **Reminders** to remind agents when the SLA due time approaches. Multiple reminders can be added to a single SLA policy to approach the agent or relevant stakeholders when the SLA rule breach approaches.
    - You can select when the remainder must be sent. Select **First response/Next response/Resolution time**
    - Add when the remainder must be sent by mentioning it next to **approaches in**, it is the representative of how much time before the reminder will be sent. 
    - The reminder will be sent as an email to the assigned agent, added agents/admins, or any email ID mentioned in the list. 




![](https://i.imgur.com/y0btViB.png)



10. Add **Escalation** to send escalations when the SLA is violated. This will send an email to the mentioned list when an SLA is breached or after a selected time the SLA is breached.
    - You can select when the escalation mail must be sent. Select **First response/Next response/Resolution time**
     - Add when the escalation must be sent by mentioning it next to **escalate in**.
     - Add the list of email IDs that this escalation must be sent to. 

![](https://i.imgur.com/MXhiy4B.png)


11. Click **Update** to update all the changes. 

![](https://i.imgur.com/gqt2tAy.png)

