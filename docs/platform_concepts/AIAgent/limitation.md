---
title: Current limitations of AI Agent
sidebar_label : Limitations
---

## Orch

- **KB execution during flows**: Knowledgebase (KB) actions will be executed during ongoing flows.
- **Node switching**: Same flow may repeat, or random flows might be triggered at quick reply or carousel nodes. Control over switching is lost once the user has started a flow.
- **Higher environment publishing**: On publishing, Orchestrator LLM is moved to higher environments.
- **Conversation history**: Clicking *Home* clears conversation history. By default, history is cleared after 24 hours.
- **Goal node limitations**: If a quick reply includes redirection at a goal node, small talk will not function.
- **Input nodes**: At input nodes (e.g., email, name), Orch functionality may vary depending on the user's input.

## LLM

- **Intent negation**: Negation of intents is not supported.
- **Small talk**: Small talk is handled by Orch, not the LLM.
- **Contextual answers**: Contextual responses are not handled by Orch and may fall back to default responses.
- **No disambiguation**: Disambiguation between multiple intents is not available.
- **Rich text**: Rich text is not supported. 
- **Omni-channel support**: This is not available. 