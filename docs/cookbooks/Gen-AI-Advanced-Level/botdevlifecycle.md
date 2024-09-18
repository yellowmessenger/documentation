---
title: GenAI bot development lifecycle
sidebar_label : Bot development lifecycle    
---


## Guidelines to create an effective GenAI bot

1. **Define target audience and major goals**: Understand who your bot is for and what its core objectives are. Categorize these objectives into static or dynamic flows.
2. **Evaluate each flow and select tools**: Analyze each flow's requirements and choose appropriate tools. Start by testing one major flow with different models to establish an MVP, setting the right expectations early.
3. **Prioritize and manage trade-offs**: For cost-sensitive projects, prioritize critical dynamic flows and be ready to simplify or fallback less important flows to static options or Gen AI.
4. **Leverage GPT-3.5 models for dynamic flows**: Where possible, use GPT-3.5 models for dynamic flows to balance performance and budget.
5. **Play to LLM strengths**: Use large language models for tasks that highlight their strengths. Avoid expecting them to perform tasks where they struggle.
6. **Use Knowledgebase (KB) for Q&A**: If your bot includes question-and-answer capabilities, leverage a Knowledge Base for structured, reliable responses.
7. **Evaluate language constraints early**: Assess language limitations and model capabilities upfront to ensure they align with your bot's requirements.
8. **Customer expectations and education**: Setting the right expectations and educating customers on the capabilities and limitations of LLM-based bots is just as important as the technical aspects.
9. **Focus on iteration and testing**: Building the initial Gen AI flow may be fast, but iterating can be time-consuming. Plan for testing and refinement, and consider launching in phases for complex goals.
10. **Compare models before committing**: Test different model versions against your use case before investing too much time. Expect to make adjustments along the way.



![image](https://hackmd.io/_uploads/rkUvujJpA.png)



## Selecting Gen AI tools

Use the following table to determine the **best Gen AI tool** for your needs:


| **Customer Requirement** | **Suggested Tool/Flow** |
|---------------------------|-------------------------|
| You want to answer from your website & documents without hallucination | KB with in-house LLM |
| You need to answer from your website & documents with a customized persona | KB with GPT |
| You have multi-turn conversations and want dynamic paths on a lower budget | Dynamic flows with GPT-3.5* (comes with tradeoffs) |
| You have multi-turn conversations with a lot of API calling, instructions, and want flawless handling of many cases | Dynamic flows with GPT-4O, 4, 4 turbo |
| You need specific flows with limited input from your end | Static flow |
| You want interactive button-based & different visual elements for a specific channel | Pick a static flow (but be clear on limitations) |
| You want interactive button-based visual elements with a mix of handling flexible conversations | Dynamic flows with GPT-4 variants (Currently quick reply rich media available*) OR keep dynamic flows as fallback to static flows |
| You need to search from a structured database (like products) and answer queries | Product search or Database search + entities to autoskip static flows |
| You want to handle one-level prompt with dynamic validations & replies | Prompt executor |
| You want to leverage the power of LLM for internal workflows (Non-conversational use case) | LLM integration node / custom API |
| You want better intent identification with low training effort | OrchLLM > NLU |
| You want flexibility in handling fallback based on different cases | OrchLLM for more flexibility or design flexible static fallback when limited cases |
| You want a specific agent persona and consistent talking style throughout the bot | OrchLLM persona definition for more flexibility / a mix of custom conversation design vs Gen AI elements (At individual elements, goals can also have persona) |
| You want a multi-lingual bot | Decision based on use case, check KB language list for in-house / For external LLM, check how well LLM works with your language choice |

