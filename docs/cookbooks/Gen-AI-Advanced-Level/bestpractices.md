---
title: Best practices & effective testing of a Gen AI bot
sidebar_label : Best practices & effective testing
---


## Best practices to build a Gen AI bot 

You can improve your bot by focusing on **Prompting**, **Designing conversations** and **Model selection**.

### Prompting

- Keep prompts precise and to the point.
- Provide detailed examples to guide the bot (a few short examples are effective).
- Avoid ambiguous or open-ended statements.
- Refrain from repeating the same instructions multiple times.
- Clearly scope the prompt to define its boundaries.
- Include examples of how the output should be formatted.

### Designing conversations

- Focus on one goal per conversation. Use separate goal nodes for multiple goals.
- Limit user inputs to around 5 to avoid confusion.
- Avoid adding too many skills, as this can complicate the goal.
- Provide ample context about the domain and company within the goal.
- Clearly define the bot’s persona.

### Model selection

- Avoid generating facts from the model.
- Set the temperature to a low range (0 - 0.5) for more predictable responses.
- Limit the number of tokens to improve response speed and reduce costs.
- Consider using GPT-4O over GPT-4 for complex use cases due to its lower latency and cost-effectiveness.

-------


## Testing GenAI bots 

Follow these steps to test GenAI bots efficiently:

- **Create Test Cases**: Develop at least 100 test cases to cover various scenarios.
- **Conduct Bulk Testing**: Execute bulk tests for these 100 queries to evaluate overall performance.
- **Evaluate Knowledge Base Performance**: Aim for 80% of queries to be answered correctly if the knowledge base is well-implemented.
- **Manually Test Agent/Conversations**: Perform manual testing for conversational agents to ensure nuanced interactions and accuracy.
