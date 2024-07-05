---
title: June 2024 Releases
sidebar_label: Latest releases
featured: true
---

   ![](https://i.imgur.com/hIGEIJL.png)


## Improved Insights Module

We've upgraded the Insights module based on your feedback to improve how reports are generated. Previously, it was difficult to customize drill-downs, filters, and visualizations for specific metrics. To make things easier, we've consolidated these features onto the Dashboard and Data Explorer pages, removing the following screens: Overview, Metrics, User Journeys, Voice Overview, and Doc Cog.

For comprehensive release details, refer to this [link](https://docs.yellow.ai/docs/updates/2024/insightsrevamp).


### Key upgrades

1. All Reports are migrated to [Default Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard). 
2. Metrics/widgets are moved to default reports labeled as *Created by Yellow.ai*.
3. Option to **clone** default reports and dashboards for personalized drill-down operations.
4. [Custom dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/custom_dashboards) and reports are available on custom tab.

:::info
 You will soon be able to setup **Custom alerts** on these reports.
:::

### New screens introduced

We've centralized all previous reporting features into the [Default Dashboards](https://docs.yellow.ai/docs/platform_concepts/growth/Dashboards/default_dashboard) section of Insights. You can still access all the metrics you're familiar with, now conveniently organized under dashboards labeled Created by Yellow.ai.

Default reports provide access to underlying data and parameters for tailored analytics. They serve as a foundation for advanced queries or can be used as-is for basic insights. You can also clone our Default Reports and Dashboards to customize drill-down operations.

   ![image](https://imgur.com/Xd26lSE.png)


For detailed release information, check out this [link](https://docs.yellow.ai/docs/updates/2024/insightsrevamp).


### Upcoming changes - Exports For standard reporting 

Previously, the following data could have been downloaded from the metrice page, which is currently discontinued.

<center><img  src="https://i.imgur.com/ZtcYRCT.png"  width="60%"/></center>

We will be migrating them to **Data explorer** in the **upcoming release**:

You will be able to [export data](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/defaulttables#download-filtered-data-as-a-csv-file) from both Default and Custom reports. You can also [schedule report downloads](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#1-schedule-a-report). 


For detailed release information, [check out this link](/docs/updates/2024/insightsrevamp).




****


## Inbox: Information Security Enhancement to restrict Agent Actions in tickets

In our ongoing efforts to enhance information security and streamline operations within our ticketing system, we are adding a new security layer to restrict certain actions by agents. These changes ensure that only authorized personnel can modify ticket details and perform other ticket-related activities. This update applies to both chat tickets and email tickets.

### Key Changes
* **Agent Restrictions**: Agents will no longer have the access to:
   * Update ticket details of other agents or unassigned tickets.
   * Send messages on other agents or unassigned tickets.
   * Transfer tickets assigned to other agents or unassigned tickets to other agents.
   * Assign tickets that are either assigned to other agents or unassigned.
   * Perform any other ticket-related updates on tickets not assigned to them or unassigned tickets.

:::note
These restrictions apply to both chat tickets and email tickets.
:::

* **Group Supervisor Permissions** to allow group supervisors to effectively manage and oversee the tickets within their specific groups without unnecessary restrictions.
   * Agents with Group Supervisor access can continue to:
   * Update ticket details for tickets within their supervision group.
   * Send messages on tickets within their supervision group.
   * Transfer and assign tickets within their supervision group.
   * Manage unassigned tickets that belong to their supervision group.

* **Admin Rights**:
   * Admin users will retain all existing permissions and rights. Admins will continue to have full access to modify, transfer, assign, and perform all ticket-related activities regardless of the ticket's assigned status. These permissions cover both chat tickets and email tickets.

### Benefits
* **Enhanced Security**: By restricting agents from accessing and modifying tickets not assigned to them, we minimize the risk of unauthorized changes and potential security breaches.
* **Improved Accountability**: Clear demarcation of responsibilities ensures that agents are accountable for the tickets assigned to them, fostering a more organized and efficient workflow.
* **Effective Supervision**: Ensuring that group supervisors can effectively handle their team's tickets allows for better oversight and management within specific groups.
* **Simplified Workflow Management**: Admins retain full control over ticket management, allowing for efficient oversight and delegation.
Action Required
* **For Agents**: No specific action is required from agents. These changes will be applied automatically.
* **For Group Supervisors**: Supervisors should review their group's tickets and ensure they are aware of their permissions.
* **For Admins**: Admins should ensure that they are aware of the continued breadth of their permissions and use their rights responsibly to manage ticket assignments and transfers.



***

## All Settings Under One Roof! (Platform-Wide Update)

Say goodbye to hunting for settings!

We are centralizing all your Settings under one roof in the left navigation bar. In Phase 1, we have moved General and Engage settings previously found other areas. 

Stay tuned for further enhancements in future phases!

   ![setting](https://i.imgur.com/85w6imc.png)