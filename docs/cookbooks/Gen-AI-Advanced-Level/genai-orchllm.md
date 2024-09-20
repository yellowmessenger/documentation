---
title: Gen-AI OrchLLM
sidebar_label : Understanding OrchLLM     
---

## OrchLLM overview

Orchestrator LLM (Large Language Model) is our in-house, fine-tuned conversational AI model designed to enhance chatbot capabilities by orchestrating multiple goals within a single conversation.

OrchLLM acts as the governing system for deciding which tools to use for each user action, ensuring tailored, holistic conversations. It is particularly useful for improving broken or fragmented conversations.


> For more details, refer to [this documentation](https://docs.yellow.ai/docs/platform_concepts/studio/train/orchllm).


**Benefits of OrchLLM**:

* Enhanced intent identification
* Retains context throughout the conversation window
* Eliminates the need for extensive bot training—just feed simple descriptions
* Enables more human-like, focused small talk

![image](https://hackmd.io/_uploads/HkiHLT1TR.png)

----------

## Writing effective OrchLLM triggers

When adding trigger descriptions, keep the following in mind:

* Your description will be part of a prompt, so ensure it's neither too long nor too short.
* Avoid mentioning example utterances—only include descriptions. Exceptionally, one or two utterances can be added.
* Clearly state when to trigger and when not to trigger.
* You don’t need to include all keywords, but ensure clarity.
* Avoid leaving unused triggers, as this unnecessarily increases prompt length and cost.

**Examples of good and bad triggers**:

![image](https://hackmd.io/_uploads/rkXJVJ-pA.png)

![image](https://hackmd.io/_uploads/rJrC7J-pC.png)


---------

## Testing OrchLLM

* Review [conversation logs](https://docs.yellow.ai/docs/platform_concepts/analyze/chat-logs) when the bot gives an unexpected response.
* Check the reasoning in the output log (under content) and adjust the description or prompt as needed.
* If hallucinations occur repeatedly, report them.


**Example**: Open the logs and check the tool or reasoning behind the bot's response. If the output is unexpected, review the tool, reasoning, or response (for small talk) and update the trigger descriptions or fine-tune the bot accordingly.

```
"content": "{\n  
\"tools\": [\"compensation change\"],\n 
\"reasoning\": \"The user request is about changing the compensation of an employee which aligns with the tool 'compensation change'.\",\n  
\"response\": \"\"\n}",
```
**![](https://lh7-rt.googleusercontent.com/slidesz/AGV_vUfWwQG0-3AKdIC2Ejf8EMFLosCe2s2iZf3OCtT2hh94hmXdneVlQJ7vFp3HvjJOWdhyz_Q48Q8jkZHw3S6FjTw1CodrSds2fbfzSmpvNo8s0sfpqW0242uCKQotjsQRLE6XBaRW2FDa1-e-4x-msxuALynQmWsA=s2048?key=wWuR_3hPrJamKUizdrJUXw)**


---------

## Things to consider before building an OrchLLM bot

To build tailored conversations, follow these: 

* Define your bot’s persona carefully, specifying what it can and cannot do.
* Move FAQs to the knowledge base—avoid adding large numbers of FAQs directly into the OrchLLM prompt.
* OrchLLM works best with 20-30 triggers or flows.
* When migrating intent-based bots to OrchLLM, summarize intents into concise descriptions.
* If you enable OrchLLM in the sandbox environment, remember it will automatically be pushed to higher environments upon publishing.

--------

## Limitations of OrchLLM V1 (GPT-4o/4/3.5)

- Negation of intents won’t work unless explicitly specified in the prompt (e.g., “I don’t want a demo”).
- Contextual questions like "Why do you need my email?" may not be handled and will trigger fallback responses.
- No disambiguation support.
- Conversation history is cleared upon clicking "home" and automatically after 24 hours.
- Incompatible with mother-child Orch bot architecture.
- Currently available only in English.
- **Nodes where OrchLLM doesn’t work**:
    - Input to *store comment* node is not considered for switching.
    - *QR button* clicks won’t trigger switching if there's an outward connection from the button.
    - *Goal nodes* are excluded from switching.
