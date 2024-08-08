---
title: Insights and analytics on yellow.ai
sidebar_label: Introduction 
---

The Insights module on the yellow.ai platform actively monitors and tracks all data and metrics associated with your bot, offering comprehensive analytics for valuable insights.

---------


## 1. Explore insights module

The Insights module in Yellow.ai consists of the following sections: 

| Section | Description |
| -------- | -------- |
| [Overview](https://docs.yellow.ai/docs/platform_concepts/growth/overview) | This section provides an elaborate overview of the bot's functionality, highlighting nine common metrics such as user traffic, bot activity, and feedback. <br/> For insights specifically related to voice bots, you can refer to the [Voice overview](https://docs.yellow.ai/docs/platform_concepts/growth/voiceoverview) page.|
| [Metrics](https://docs.yellow.ai/docs/platform_concepts/growth/metrics) | In this section, you can access a comprehensive range of metrics pertaining to bot users and API usage for your bot. It enables you to gain valuable insights into user behavior and interaction patterns.|
| [Visualisation](https://docs.yellow.ai/docs/platform_concepts/growth/user-journeys) | Explore and analyze user journeys with ease using the visualization feature. By utilizing [funnels](https://docs.yellow.ai/docs/platform_concepts/growth/funnels), you can visually track user flows and delve into detailed information, enhancing your understanding of user interactions. |
| [Doc cog](https://docs.yellow.ai/docs/platform_concepts/growth/doccog) | The Doc cog feature generates insights based on the documents uploaded within the [Automation](https://docs.yellow.ai/docs/platform_concepts/studio/overview) section. This functionality empowers you to extract valuable information and gain valuable insights from the content of your documents. |
| [Data explorer](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/intro) | Utilize this powerful tool to build analytics for both default and custom tables. It enables you to delve deep into your data, perform data exploration, and generate meaningful insights. |
| [Data operations](https://docs.yellow.ai/docs/platform_concepts/growth/dataops) | Access various options for data operations within this section, including data export and data purging for the available system data. You can actively manage your data and perform necessary operations to maintain data integrity and efficiency. |
| [Health and alerts](https://docs.yellow.ai/docs/platform_concepts/growth/health) | Monitor your bot's overall performance through the Health and alerts section. Set up alerts to receive email notifications regarding any issues or failures that may occur. This functionality ensures that you stay informed about the performance of your bot and can take prompt action when necessary. |
| [Dashboard](https://docs.yellow.ai/docs/platform_concepts/growth/dashboards) | Create multiple dashboards tailored to your specific requirements. The Dashboard feature allows you to visually display all your data using widgets. This makes it easier to track key metrics and gain a comprehensive understanding of your bot's performance. |

----------

## 2. Manage access and permission to insights 


There are two access control roles, **Insights analytics and Insights admins** implemented for the Insights module.

![](https://hackmd.io/_uploads/HkKy6W9E3.png)

1. **Insights (Admin)**: This role provides access to all available data and analytics.
2. **Insights (Analytics)**: This role provides access to standard analytics, bot health monitoring, and user journey and goal tracking. Access granted for each module to this role is as follows:

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

    > Click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators#1-share-bot-access) to learn about roles and access management in yellow.ai. 

--------

## 3. Watch insights demo 

<iframe width="660" height="415" src="https://www.youtube.com/embed/yAkP3imNl7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>