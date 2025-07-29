---
title: Super Agent   
sidebar_label: Super Agent  
---

A Super agent is the central controller in the AI agent system. It does not solve specific use cases like checking refund status or booking appointments itself instead, it intelligently identifies the user's intent and routes the query to the right specialized agent configured for that purpose.

It also manages the overall conversation structure from how a chat begins, to how fallbacks are handled, to where each query should go. Think of it as a smart coordinator that ensures every conversation flows to the right place, every time. For more information on how to setup up a Super agent, click [here](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona).

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/superarchitecture.png)

#### Key responsibilities of Super agent:

* Welcomes users with a greeting or introduction message.
* Understands and identifies user intent using a Large Language Model (LLM).
* Routes the query to the appropriate individual agent.
* Handles fallback messages when a query is unclear or unrecognized.
* Applies custom rules and logic (example, mandatory user info).
* Maintains contextual continuity across conversations.