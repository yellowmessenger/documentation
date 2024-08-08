---
title: Email information Pre-processing (init journey for email)
sidebar_label: Preprocessing email info
---

Pre-processing email information is essential in scenarios where automated responses or routing decisions need to be tailored based on specific criteria. 

:::note
Pre-processing is currently available only for email automation bots and is feature-gated. Once the email is configured, pre-processing will automatically appear on the Automation page.

:::

## Benefits of pre-processing in email automation

1. **Customized routing decisions**:
   Pre-processing enables tailored routing decisions based on specific criteria.
   **Example**: In yellow.ai support, emails from red account customers require special handling. Pre-processing identifies these customers, raising tickets manually for them while automating responses for others.

2. **Enhanced customer experience**:
   Analyzing email content and metadata before routing ensures a more personalized and efficient customer experience.
   **Example**: Certain query categories, like citations, can bypass automation and be sent directly to agents, expediting resolution and increasing customer satisfaction.

3. **Improved agent productivity**:
   Pre-processing gathers contextual information about customers or queries before routing them to agents, aiding in better understanding and handling of inquiries.
   **Example**: In the APAC scenario, obtaining account details and user roles before assignment streamlines support and reduces resolution time.

4. **Sentiment analysis and escalation**:
   Pre-processing includes sentiment analysis of emails, allowing immediate routing of emails with specific sentiments (e.g., aggressive, upset) to agents, preventing escalations and addressing concerns promptly.

5. **Tailored responses and actions**:
   Pre-processing triggers specific actions or responses based on predetermined rules.
   **Example**: Emails with aggressive or upset sentiments can be routed directly to agents for personalized handling, bypassing standard automation processes.


## Pre-processing email automations

In email automation, you need to pre-process the email before transferring it to the bot. You can find this additional flow under the Automation section. The pre-processing flow enables you to define custom logic to determine whether incoming emails should be transferred to an email bot or directly to an agent.

To ensure appropriate actions are taken based on defined criteria, every incoming email will first pass through the pre-processing flow before proceeding to automation.

   ![](https://i.imgur.com/j5Nkrj8.png)

### Enabling email preprocessing

When you create an email account, the pre-processing flow is automatically enabled.

   ![](https://i.imgur.com/Qnwx8lP.png)

### Supported nodes

The pre-processing flow supports the following nodes:

   ![](https://i.imgur.com/ewSUR6g.png)

- **Logic node**: Use the If-Else node to evaluate use cases, user information, and sentiment, guiding subsequent actions.
- **Action nodes**: Various action nodes are available to perform tasks such as interacting with APIs, databases, variables, functions, executing actions, etc.
- **Integration nodes**: All integration nodes available for use in your workflow can be utilized within the pre-processing flow.


:::note
Only one pre-processing flow (init journey) will be active even if multiple email accounts are connected. Ensure that your pre-processing logic accounts for different scenarios and email sources.
:::


