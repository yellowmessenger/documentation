---
title: Manage your AI agent   
sidebar_label: Manage your AI agent
---


This guide helps you to analyze prompts, configure conversation rules, use keyboard shortcuts, and manage references for your AI agent.

### AI-based prompt analysis

**Analyze Agent with AI** option helps you automatically review and improve the quality of prompts and conversation rules written for a specific AI agent. It uses AI to analyze the structure, clarity, and logic of your prompts and then provides step-by-step recommendations to make them more effective and aligned with best practices.

**Here's what Analyze Agent with AI does:**

* Detects unclear or redundant instructions in prompts.
* Identify missing elements like fallback logic or escalation rules.
* Receives AI-generated suggestions to rewrite or simplify your prompts.
* Improves the overall performance and clarity of your agent before deployment.
<br/>

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/analyze-prompt.png)

#### **How the analysis works:**

When you click **Analyze Agent with AI** option, the system runs through six stages to evaluate and improve your prompt:

1. **Gets agent detail**s – Gathers all the data about your agent, including its prompts, actions, and conversation rules.
2. **Analyze the prompt** – Reviews the language, structure, and flow of your written prompt to identify issues or redundancies.
3. **Evaluate best practices** – Checks whether the prompt aligns with design standards and AI-agent best practices.
4. **Find improvements** – Detects specific areas that can be optimized, such as missing conditions, unclear instructions, or excessive verbosity.
5. **Prepare suggestions** – Generates content recommendations for improving prompt clarity and flow.
6. **Generate analysis** – Produces a final analysis score, a detailed summary, and actionable recommendations.


    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/prompt-stages.png" alt="drawing" width="40%"/>
    
    
#### **Generate analysis**

Once the analysis is complete:

You will see a score for the prompt that indicates its current quality.

*  A **Summary** (Overview) provides a quick evaluation of the prompt's quality, highlighting key findings and areas that can be improved.
* **Recommended actions** will appear below the summary, showing suggestions like replacing text, shortening instructions, or restructuring logic.
* Each suggestion includes a **Suggested content** box with AI-generated rephrasing options. You can:
   * Click **Apply** to replace your existing text with the AI's suggestion.
   * Click **Copy** to manually edit or reuse the suggested content.
   * You can click the **Lightbulb** icons beside each section of your prompt to view the corresponding analysis details. When clicked, the system highlights that part of the prompt and displays relevant insights, helping you easily identify areas for improvement and understand how to refine your prompt.

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/light-bulb.png)


**Example:**

* If your prompt step is too long or unclear, the analysis might recommend a shorter, more structured version. For instance, breaking instructions into bullet points or using clearer action verbs.
* By applying these AI-powered suggestions, you can quickly improvize your agent’s prompts and enhance its conversational quality without rewriting everything manually.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/prompt-overview.png" alt="drawing" width="80%"/>
   
  
-----

### Agent references

Agent references section lists all the components used within a particular AI agent. It includes actions such as **Get input** actions, **Variables**, and **Workflows** that are part of the agent’s configuration.

These components are automatically grouped based on their type to quickly identify where each action, variable, or workflow is used across the conversation flow.

  ![](https://cdn.yellowmessenger.com/assets/yelow-docs/agent-references.png)
  
-----

### Keyboard shortcuts

Help section displays specific shortcut keys to help users access actions and variables faster while designing conversations.
   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/keywboardshortcuts.png" alt="drawing" width="60%"/>
<br/>

---

### Define conversation rules at prompt level

Conversation rules guide how the AI agnet should behave based on user input at each prompt.

**Example: Flight booking**

Type prompt: "Would you like to book a one-way or round-trip flight?""

**Conversation rules that you define for the above prompt:**

  * If the user says "One-way", save it as the selected trip type and ask for the departure details.
  * If the user says "Round-trip", save it as the selected trip type and ask for both departure and return details.
  * If the user says something else, guide them to choose either "One-way" or "Round-trip".

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/conv-rules.png" alt="drawing" width="80%"/>
     
-----




 

 
