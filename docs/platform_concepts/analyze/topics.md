---
title: Topic Analysis to Enhance Automated Resolution Rates 
sidebar_label: Topics
---


:::note

Topics is a gated feature. Contact [yellow.ai's support team](mailto:support@yellow.ai) for more details. 

:::

The **Topics** section gives you a high-level view of the different themes your AI-agent is handling in customer conversations. These topics are automatically generated based on recurring patterns in customer queries, helping you understand what your users are asking about most frequently.

Each topic represents a group of similar conversations, allowing you to track how effectively the AI-agent is resolving them. The section also highlights opportunities to improve automation by sorting topics based on **Automation Rate (AR)** opportunity. This helps you pinpoint where the AI-agent could potentially resolve more queries without needing human assistance—making your automation smarter and more efficient over time.

To **access** topics page:
1. Log in to the yellow.ai platform. 
2. Open **Analyze** and navigate to **Topics**. 

![topics](https://cdn.yellowmessenger.com/assets/yellow-docs/gif.gif)

:::note
Conversations with fewer than three messages are not analyzed, as there isn't enough context to form a meaningful interaction.
:::

-----

## Key metrics for topic analysis

### Article suggestion 

Based on the conversations AI has processed, articles are suggested for each topic with Article suggestion icon highlighted. These suggestions can serve as new additions to the existing knowledge base.      
![image](https://cdn.yellowmessenger.com/assets/yellow.docs/upload_e3537ba8dce2b3a45c950931496c44d6.png)

> Learn more [here](https://docs.yellow.ai/docs/platform_concepts/analyze/articlesuggestion).

### Automation opportunity

Automation Opportunity metric represents the total opportunity a topic has to improve your overall automated resolution rate. It is calculated as:

> **Automation Opportunity** = Unresolved conversations under a topic/Unresolved conversations across all topics

This helps identify which topics have the most potential for improvement.


### Conversation share

This metric shows the proportion of conversations involving a particular topic compared to all conversations:
> **Conversation Share** = Conversations under a topic/Conversations across all topics

It helps prioritize topics based on their frequency.

For example, in the below screenshot, Out of 809 conversations taken place in this AI-agent, 29 belong to this topic. 
   <img src="https://imgur.com/8q2opTF.png"  width="60%"/>  


### AI resolution rate

The AI resolution rate indicates the percentage of conversations on a topic that were successfully resolved by the AI-agent without human intervention:

> **AI resolution rate** = Conversations in this topic that were contained AND resolved/Conversations in this topic

A higher AI resolution rate signifies better AI-agent performance in resolving issues autonomously.

### Automation rate

This metric measures the percentage of conversations on a topic that were not escalated to a human agent:

> **Automation Rate** = Conversations in this topic not handed over to a human agent/Conversations in this topic

A higher Automation rate indicates greater efficiency in handling the topic without needing human support.

### User sentiment

This metric assesses the sentiment of users during conversations about a specific topic. It shows the percentage of positive, negative and neutral conversations that have taken place while discussing about this topic. Understanding user sentiment helps in identifying areas where the AI-agent's responses might need improvement to enhance customer satisfaction.

<!--
For example, in the below screenshot, out of 1045 conversations in this topic, 550 (52.6%) were positive, 364 (34.8%) were negative, and 131 (12.5%) were neutral.

-->

----------


## Filter Topics  

> By default the topics generated are filtered for the previous 30 days. 


To filter data and view a particular topic, click **Filter**.                       

![image](https://cdn.yellowmessenger.com/assets/yellow-docs/upload_e3537ba8dce2b3a45c950931496c44d6.png)

The following filters are available:  

| Feature               | Description | UI | 
|-----------------------|-------------|---|
| **Article Suggested** | Select either "Yes" or "No." |<img src="https://imgur.com/tYy0peE.png" alt="drawing" width="100%"/> |
| **Timestamp**        | Filter data for specific dates or a custom time range. | ![image](https://imgur.com/hK9jFDf.png)|
| **Topics**           | Filter by the text or subtext of the topics. | <img src="https://imgur.com/Z50mSDn.png" alt="drawing" width="100%"/> |

                             


----------

## Utilize topics for AI-agent improvement

By closely monitoring these metrics, you can gain actionable insights into your AI-agent's performance and identify areas for enhancement. Here are some steps to leverage topic analysis effectively:

- **Prioritize high-opportunity topics**: Focus on topics with high Automation Opportunity to make the most significant impact on your automated resolution rate. These are the areas where improving the AI-agent's responses can yield the highest returns.
- **Analyze low Automation rate topics**: Investigate topics with low Automation rates to understand why users are being escalated to human agents. This can help in refining the AI-agent's responses or providing better training data.
- **Enhance AI Resolution Rate**: For topics with lower AI Resolution Rate, consider revising the AI-agent’s dialogue scripts, adding more detailed FAQs, or improving the AI-agent’s understanding through advanced natural language processing (NLP) techniques.
- **Monitor sentiment**: Keep an eye on user sentiment for each topic. If users consistently express negative sentiments, it’s a signal that the AI-agent’s handling of that topic needs improvement.




