---
title: SLA settings for email tickets
sidebar_label : SLA settings for tickets
---

:::info
SLAs and SLA reminders are applicable only for email tickets (not live chats).
:::

**SLA introduction**

A service-level agreement (SLA) defines the level of service expected by a customer from an organisation. It lays out the metrics by which that service is measured, and the remedies or penalties, if any, in case the agreed-upon service levels are not maintained. Usually, SLAs are between companies and external stakeholders such as customers or suppliers, but they may also be between two departments within a company.
Most service providers have standard SLAs reflecting various levels of service at different prices.

> [Learn more](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/slaintro) on **SLAs**. 
> [Learn more](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/slaintro#-3-sla-reports) on **SLAs Reports**. 

**Need for SLAs**

- For an inbox agent, SLAs are used so that they can abide by these restrictions and provide better response and satisfaction for the customers, ensuring no response is missed. Many conversations will happen in the tickets section (between an agent and a customer, between an agent and multiple customers), and SLA helps keep everything consistent from a company's standpoint. 
- For an inbox agent, SLAs are used to monitor the efficiency of the team and check if the resolutions are provided as expected.  **Inbox Admins** can define new SLAs, add conditions, and set targets for the inbox agents responsible for addressing the tickets. 


**Configure SLAs**

To configure SLAs, follow the below steps:
1. Open **Settings** > **Inbox**.  
2. Search and select **Service level agreement (SLA)**.

    ![image](https://imgur.com/oJCI6Xz.png)

3. All the available SLAs are listed on this page. Use the State toggle next to the SLA names to enable or disable an SLA.

    > The priority of assignment will be Top → Down as the policies appear in the UI. Example (in the below image), if two SLA rules are created for the same group/tag, *Priority SLA* will applied when the ticket is created as it is listed on top. 

4. Existing SLAs can be edited or deleted by clicking the menu next to the SLA name and selecting **Edit** or **Delete**. 

    ![](https://i.imgur.com/Ls5lfpG.png)

5. To create a new SLA, click **+Create new policy**. 

    ![](https://i.imgur.com/qtn1eUy.png)

6. Add **Policy name** and **Policy description**. Click **Create**. 

    ![](https://i.imgur.com/dbUzC3g.png)

7. By default, the SLA defined on this page will apply to all email tickets. If you want this SLA to apply only to certain **Group** or **Tag**: 
    - Click **Add another condition**.
    ![](https://i.imgur.com/DKPPI94.png)
    - Select **Group**/ **Tag**. **Group** / **Tag** names will be listed in the drop-down, and select the required value. 
    ![](https://i.imgur.com/9aaLlRz.png)

    - You can add multiple conditions (groups and tags) by clicking on **Add another condition**. This SLA will be applicable if both conditions hold (AND condition). For example, in the above screenshot, SkMart SLA will be applied if the ticket belongs to the Payments group and is tagged as critical.  

8. SLA targets are separated based on priority. You can set targets that the team should meet, or the SLA gets breached. You can set the Timings(Minutes/Hours/Days) in the normal calendar hours for High, Medium, and Low priority tickets. Agents and selected IDs will be notified by enabling the **Escalations** and **Reminder** toggle. 
    - **Resolution time**: The total time taken by the agent to provide the resolution. It is calculated based on the time the ticket was opened (or assigned if it was directly assigned) to the time it was set as resolved.
    - **First response time**: The time taken by an agent to send a first reply to the ticket that was created.
    - **Every response time**: The time taken for an agent to respond to a ticket after the end user/customer has replied. 
    
    ![](https://i.imgur.com/WkmTF39.png)

#### Add Reminders to remind agents before the SLA due time 

9. Multiple reminders can be added to a single SLA policy to approach the agent or relevant stakeholders when the SLA rule breach approaches.
    - You can select when the reminder must be sent. Select **First response/Next response/Resolution time**
    - Add when the reminder must be sent by mentioning it next to **approaches in**, it is the representative of how much time before the reminder will be sent. 
    - The reminder will be sent as an email to the assigned agent, added agents/admins, or any email ID mentioned in the list. 

    ![](https://i.imgur.com/y0btViB.png)


#### Add Escalation to send escalations mails when the SLA is violated

10. Adding escalation will send an email to the mentioned list when an SLA is breached or after a selected time the SLA is breached.
    - You can select when the escalation mail must be sent. Select **First response/Next response/Resolution time**
     - Add when the escalation must be sent by mentioning it next to **escalate in**.
     - Add the list of email IDs that this escalation must be sent to. 

    ![](https://i.imgur.com/MXhiy4B.png)


11. Click **Update** to update all the changes. 

    ![](https://i.imgur.com/gqt2tAy.png)


:::note
- First SLA policy that gets applied to a ticket will not change if the **Group/Tag** is changed because SLAs are end-customer facing. 
- If the **Priority** of the ticket is changed, SLA will also change based on the priority. Before changing the SLA, if there was a **breach of policy**, it will be recorded and will be present as part of reports. Breaches will not be back-dated. 
- Two SLAs policies cannot be applied to a single ticket. 
- Setting the status of a ticket as **Pending**/ **On-hold** will pause the SLA timers for **Resolution time** and **Every response time**. Resolution time will be calculated by excluding the time spent in pending status. 
- **Reopening** a ticket will resume the SLA timer from when it was paused. New resolution time will be calculated by including the time taken previously to resolve the ticket. 
:::
