---
title: Introduction to insights 
sidebar_label: Introduction 
---

Insights module on the yellow.ai platform tracks all data and metrics pertaining to your bot and provides relevant analytics.   

## 1. Features of Insights

Within the Insights module, you can find the following sections: 

| Section | Description |
| -------- | -------- |
| [Overview](https://docs.yellow.ai/docs/platform_concepts/growth/overview)     | This section provides an overview of the functioning of the bot, with nine common metrics including user traffic, bot activity, and feedback. <br/> For insights on voice bots, refer to [Voice overview](https://docs.yellow.ai/docs/platform_concepts/growth/voiceoverview) |
|[Metrics](https://docs.yellow.ai/docs/platform_concepts/growth/metrics)|Here, you can find metrics related to bot users and API usage for your bot|
|[Visualization](https://docs.yellow.ai/docs/platform_concepts/growth/user-journeys)| Visualize the user journeys and explore detailed information using [funnels](https://docs.yellow.ai/docs/platform_concepts/growth/funnels)|
|[Doc cog](https://docs.yellow.ai/docs/platform_concepts/growth/doccog)| This feature generates insights based on the documents uploaded in the [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview) section|
|[Data explorer](https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer)|TUse this tool to build analytics for default and custom tables |
|[Data operations](https://docs.yellow.ai/docs/platform_concepts/growth/dataops)| Access options for operations such as data export and data purging on the available system data |
| [Health and alerts](https://docs.yellow.ai/docs/platform_concepts/growth/health) | Monitor your bot's overall performance and set up alerts to receive email notifications for any issues or failures that occur |
|[Dashboard](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards)|Create multiple dashboards with the required widgets to visually display all your data |


----------

## 2. Insights access control 


There are two access control roles, **Insights analytics and Insights admins** implemented for the Insights module.

![](https://hackmd.io/_uploads/HkKy6W9E3.png)


1. **Insights (Analytics)**: This role provides access to standard analytics, bot health monitoring, and user journey and goal tracking. Access granted for each module to this role is as follows:

    | Modules | Access level| 
    | -------- | -------- | 
    |Overview dashboard |  :heavy_check_mark:|
    | Metrics dashboard - User metrics  | :x: Chat transcript <br/> :x: User details report|
    | Metrics dashboard - API usage | :heavy_check_mark:|
    | User journeys | :heavy_check_mark: User journey visualization <br/> :heavy_check_mark: Funnels|
    | Data ops | :x: |
    | Goals | :heavy_check_mark:|
    | Dashboard | :x: |
    | Data explorer | :x: |
    | Health | :x: |
    | Doc cog  | :x: |
    | Voice overview  | :x: |

2. **Insights (Admin)**: This role provides access to all available data and analytics.

> Click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators#1-share-bot-access) to learn about roles and access management. 

--------

## 3. Insights demo 

<iframe width="660" height="415" src="https://www.youtube.com/embed/yAkP3imNl7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>