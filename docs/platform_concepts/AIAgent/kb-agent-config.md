---
title: Create Knowledge base agent 
sidebar_label: Create Knowledge base agent  
---

## Overview
Knowledge base (Kb) agent is a specialized tool available to the [Super agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona) that helps to provides accurate answers by fetching information from documents, FAQs, and other connected sources.

It allows the Super agent to respond to user queries without relying on predefined conversation flows.

### How the Kb agent works in a Super agent

You can configure the Kb agent in multiple ways to enhance the Super agent's performance:

* **As the Primary AI Agent**: Use the Kb agent as the main responder for knowledge-based queries. It is triggered automatically via a start trigger to deliver relevant answers.
* **As a Fallback**: When no matching conversation flow is found, the Kb agent provides fallback responses for general or informational queries. **Example:** In a banking assistant, "apply for a loan" follows a predefined flow, but "What is the repayment period?" is handled by the Kb agent.
* **During an Ongoing Conversation**: The Kb agent can assist in the middle of active conversations without disrupting the current flow. **Example:** While filling out a loan application, if a user asks, "What documents do I need to apply?", the Kb agent provides an inline response.

#### Key components of Kb agent:

* **Start trigger**: Automatically triggers the Kb agent when a query requires a knowledge-based response.
* **Pre-search interaction**: Allows you to define what the Kb agent should do before performing a search like asking follow-up questions or collecting missing details.
* **Metadata mapping**: Uses variables and text inputs to narrow down the search results.
* **Summarization guidelines**: Formats and structures the retrieved information for clarity and compliance.
* **Format responses and follow-ups**: Delivers enriched answers with media and continues the conversation with the follow-up response based on the previous conversation.

## Access Knowledge base agent

To access the knowledge base agent, follow these steps:

1. Go to **Automation** > **Agents** > **Knowledge base agent**.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/kb-agent.png)

## Configure Knowledge base agent

Knowledge base agent configuration section defines how the agent behaves during a conversation. It consists of various configurations that help the agent understand when to trigger, how it collects and uses user input, filters responses, manages follow-up questions, and formats the final output.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/KBagentactions.png)

The following are key sections:

### Start trigger

This section defines when to trigger the Kb agent during a conversation. This setting is predefined and cannot be modified. In case, you need to trigger the Kb in such cases, you can add it in agent rules section.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/starttriggerkb.png)

### Pre-search interaction

This section allows you to define what the Kb agent should do before performing a search. You can provide instructions for the Kb agent to collect missing details or ask clarification questions to improve the accuracy and relevance of search results.

To enable this functionality, toggle on pre-search interaction from the top-right corner of the section.

**Example**: For financing or document-related queries, the Kb agent can be configured to collect essential user information before performing a search. 
   * For instance, it first checks if the user's nationality is already available. If not, it prompts the user using `{getInput: user_nationality}`. 
   * Next, it verifies whether the finance category has been provided. If the category is missing, the Kb agent will ask the user using `{getInput: financeCategory}`.
   * It can also auto-classify finance categories based on keywords in the query such as classifying mentions of vehicle, personal, or real estate loans as retail, and healthcare, travel, education, or wedding-related loans as services.
   * This pre-search setup helps refine results and ensures accurate responses. If the query is not related to loans or financing, the Kb agent skips this step and proceeds directly to the search.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/pre-search.png)
        
#### getInput action in pre-search interaction

The [getInput](https://docs.yellow.ai/docs/platform_concepts/AIAgent/conversations#get-input) action is used by the Kb agent to prompt the user for missing information before proceeding with the search. It ensures that the agent has all the required context to deliver accurate and relevant answers.

**How it works**:

During a conversation, if important information (like nationality or finance category) is missing, the agent uses the getInput action to ask the user a specific question.

The user's response is stored in a variable, which can then be used in search logic or passed to other parts of the conversation.

**Example:**
* **getInput: user_nationality**
  → The agent asks: "Can you please share your nationality?"
  → The user's response is stored in the variable `user_nationality`.
* **getInput: financeCategory**
  → The agent asks: "What type of financing are you referring to? (example, Personal, Housing, Travel)
  → The response is saved in the variable `financeCategory`.
  
#### Variable in pre-search configuration

In the Kb agent's pre-search configuration, variables are used to store and reuse important user information throughout the conversation.

**Example**: Let's say the Kb agent needs the user's nationality to filter search results.

* First, the configuration checks if the `user_nationality` variable already has a value.
* If not, it prompts the user using:
**getInput: user_nationality**
**Example prompt**: "Can you please tell me your nationality?""
* Once the user replies with "India", the Kb agent stores that input in the `user_nationality` variable. This value can now be:
 * Reused in other steps of the same conversation. If a user’s nationality is collected early in the conversation and stored in a variable like `{user_nationality}`, the agent can reuse it later without asking again.
**Example:** Since your nationality is `{user_nationality}`, you are eligible for our international loan offers.”
 * Applied as a filter in metadata mapping to return more relevant answers.

### Metadata mapping

Before using metadata mapping, you should first [configure metadata](https://docs.yellow.ai/docs/platform_concepts/studio/kb/add-metadata) in the Knowledge base module. Only the metadata created in the Kb module can be mapped here.

This section links metadata fields with user input to refine and narrow down search results.

**How it works:**

* Map key-value pairs where the key is a metadata field and the value is a variable captured during the conversation.
* The Kb agent uses this mapping to filter most relevant content from your knowledge base.

**Example:**

* Key: nationality → Value: user_nationality
* Key: financeCategory → Value: financeCategory

#### Metadata: type – Variable vs Text

Choose whether to use a dynamic Variable or static Text for each metadata key.

Type | Description	| When to use |	Example value
-----|--------------|-------------|---------------
Variable |	Dynamic value from conversation |	When metadata depends on user input |	`{{user_nationality}}`
Text |	Static predefined value |	When metadata is always the same | finance


1. **Variable**: Use this when the metadata value should come dynamically from the conversation using a stored variable (example, user input or session data). The value is not fixed it depends on the user's response at runtime. Useful for personalized searches or filtering content based on user context.

   **Example**:
     **Metadata key:** country
     **Type**: Variable
     **Value**: `{{user_nationality}}`
     * This will use the value collected from the user via a getInput action, like "India" or "USA".

2. **Text**:Use this when the metadata value should remain constant and not rely on user input. 

    **Example**:
    **Metadata key**: category
    **Type**: Text
    **Value**: finance
    * This applies the filter "finance" to every search, regardless of what the user says.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/metadataval.png)

### Summarisation guidelines

This section controls how the Kb agent should format and present responses after retrieving information from the knowledge base. You can define specific instructions or formatting preferences for how the Kb agent should summarize content.

Examples of summarisation styles:
* **Bullet points**: To list terms, steps, or features clearly.
* **Logical reasoning**: To explain a policy or rule step-by-step.
* **Format content** – To highlight important content using formatting like bold, italics, or headers.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/summaryguidelines.png)

### Follow-up questions

This defines how the Kb agent should handle follow-ups after answering the user.

To enable this behavior, turn on the Follow-up questions toggle in the configuration section. Once enabled, the Kb agent will evaluate each response and decide whether to suggest a relevant follow-up based on the outcome.

**Example**

**When the Kb agent cannot fully resolve the user query**: The agent can show a fallback message. **Example**: I am not able to help with that right now. "Would you like me to connect you with a support agent?".

**When the Kb agent successfully answers the query**:
The agent can ask a thoughtful follow-up question related to the topic to keep the conversation flowing. **Example**: After providing refund policy details. "Would you like to know how to track your refund status?"."

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/follow-up.png)

### Other configurations

This section allows you to format how the Kb agent presents responses to users. These additional options help structure the information in a more readable, interactive, and user-friendly format by enabling hyperlinks, summarization sources, and embedded media.

The following options control how content appears in the Kb agent's responses:

Setting | Description |	Example
--------|-------------|--------
Show links in response as hyperlinks |	When enabled, any URLs in the response are shown as clickable hyperlinks.	| `https://example.com/policy.pdf` becomes View Policy Document.
Show links used for summarisation | When enabled, the Kb agent displays the source links it referred to while generating the summary. | If enabled, users might see a source like: “Based on information from `https://example.com/policy` at the end of the response.
Show images and videos in responses | When enabled, the agent can include embedded images or videos in its answers. | A refund policy response could include a video thumbnail or an image chart explaining timelines.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/otherconfig.png)