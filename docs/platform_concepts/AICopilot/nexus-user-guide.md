---
sidebar_label: Nexus (AI Assistant)
title: Nexus – Platform AI Assistant
---

## What is Nexus?

**Nexus** is the Yellow.ai platform AI assistant. You use it from a **chat panel** in the platform (open it from the Copilot icon in the header). You ask in plain language; Nexus performs actions on the platform for you—such as showing metrics, creating agents, or checking tickets. It can **combine tools across Analytics, Builder, and Operations** so a single question can trigger a multi-step workflow (for example, “Why is my containment rate dropping?” can pull analytics, conversation analysis, and suggestions for builder changes).

**Where to find it:** Click the **Copilot** icon in the platform header to open the chat panel.

**How it works:** You type your question or request → Nexus chooses the right agent(s) and may run several tools across areas → for create/update/delete actions it will ask you to **confirm** in the chat before making changes → then it streams the answer back to you.

---

## What Nexus can do (by use case)

Nexus is built around **use cases**, not just single modules. One prompt can span analytics, bot configuration, and inbox. Below are the main use cases, the areas Nexus may use, and example prompts.

### Major use cases

| Use case | What you can do | Areas Nexus uses | Example prompts |
|----------|-----------------|------------------|-----------------|
| **Improve bot performance** | Understand why metrics dropped and what to change | Analytics + Builder | “Why is containment rate dropping?”, “Find gaps in bot coverage”, “Diagnose low CSAT and suggest changes” |
| **Weekly or ad-hoc review** | Get a snapshot of performance and compare periods | Analytics | “Show bot performance for last 7 days”, “Compare this week vs last week”, “Create a dashboard for key metrics” |
| **Debug production issues** | Find failed or unresolved conversations and API/flow issues | Analytics + Builder | “Find unresolved conversations from last 7 days”, “Debug a conversation trace”, “Check API failure logs” |
| **Monitor support operations** | See ticket load, priority, and agent workload | Operations (+ Analytics) | “Show active support tickets”, “Find high priority tickets”, “Analyze agent performance” |
| **Set up or extend the bot** | Add agents, APIs, knowledge base, tables, workflows | Builder | “Create an AI agent for support”, “Index a website to my knowledge base”, “Create a database table”, “Show my bot configuration” |
| **Investigate a specific user or ticket** | Get full context for a conversation or ticket | Operations + Analytics | “Get ticket activity history for ticket X”, “View conversation messages for user Y” |

### Confirmations

When Nexus is about to **create**, **update**, or **delete** something (for example an agent, API, or table), it will ask you to **approve** in the chat before it runs the action. You can approve or reject each step.

### Not yet supported

Nexus does not yet support every platform area. Avoid prompts for: **campaigns** (Engage), **NLU training**, and some **Inbox write actions** (e.g. assigning or replying to tickets from Nexus). Those will either fail or be refused.

---

## What kind of prompts can you use?

### Natural language

You can ask in **short** or **detailed** form. One prompt can trigger a **cross-area workflow**—for example, “Why is containment dropping and what should I change?” can pull analytics and conversation analysis and suggest builder changes.

### Example prompts by use case

**Improve bot performance (cross-area)**  
- “Analyze why my containment rate has dropped recently. Show me which topics are causing more human handoffs and what changes I should make to improve it.”  
- “Identify gaps in my bot’s coverage—topics where users aren’t getting answers, conversations that fail, and where I need more training or flows.”  
- “Diagnose why my CSAT scores are low. Analyze negative feedback and suggest specific improvements to the bot.”

**Weekly or ad-hoc review**  
- “Show me my bot’s performance metrics for the last 7 days including total users, sessions, messages, resolution rate, containment rate, and user satisfaction scores.”  
- “Compare my bot’s key metrics between this week and last week. Highlight significant changes and trends.”  
- “Create a new dashboard to track my bot’s key performance metrics including user engagement, resolution rates, and customer satisfaction scores.”

**Debug production issues (cross-area)**  
- “Find conversations from the last 7 days that were not resolved. Show me the topics, user sentiment, and sample transcripts.”  
- “Show me the execution trace and flow for recent failed conversations—agent processing steps, LLM calls, and where it went wrong.”  
- “Show me failure logs for all my configured APIs from the last 24 hours with error responses, status codes, and timestamps.”

**Monitor support operations**  
- “Show me all currently active support tickets with status, priority, assigned agent, and how long each has been open.”  
- “Find all high priority and urgent tickets from the last 7 days with status and assigned agents.”  
- “Analyze inbox agent performance for the last 30 days—tickets handled per agent, average response time, resolution rate, and customer satisfaction.”

**Set up or extend the bot**  
- “Create a new AI agent for handling customer support queries. It should greet users, understand their issue, provide solutions from the knowledge base, and escalate to a human agent if needed.”  
- “Show me my bot’s current configuration including enabled features, flows and journeys, AI agents, custom functions, and API integrations.”  
- “Index the website https://example.com into my knowledge base so the bot can answer questions from its content.”  
- “Create a new database table called ‘customer_feedback’ with fields for customer_id (string), rating (number), feedback_text (string), created_at (date), and resolved (boolean).”  
- “List all AI agents configured in my bot with their triggers, goals, and current status.”

**Investigate a specific user or ticket (cross-area)**  
- “Show me the complete activity history and audit trail for a specific ticket—status changes, agent assignments, transfers, and customer interactions.”  
- “Get the full message transcript for a specific user to understand their conversation history and identify issues with bot responses.”

### Tips

- **Be specific** when you can—for example, “last 7 days” or “last 30 days” helps Nexus return the right data.  
- You can use the **full suggestion text** shown in the Nexus panel (when you open a new chat); those prompts are designed to work well.  
- Nexus uses your **current bot context** when you’re inside a bot in the platform.

### What to avoid

Avoid prompts for areas that are **not yet supported** (e.g. “Create a campaign”, “Train my NLU”, “Assign this ticket to John”). Keep to the use cases and areas described above.

---

## By area (reference)

If you prefer to think in platform areas, here’s a short reference of what Nexus can do in each:

| Area | What Nexus can do |
|------|-------------------|
| **Analytics & Insights** | Bot metrics, user demographics, top journeys, feedback, resolution/containment trends, API usage, bot health; data explorer (voice, tickets, conversations, engagement, API, KB, LLM usage, etc.); create/update reports and dashboards; conversation logs (analyzed/pending conversations, messages, traces). |
| **Builder** | List flows/journeys and agents; get, create, and update AI agents; list APIs, get failure logs, create and update APIs; index a website to Knowledge Base; list/create tables and search records; get/update Super Agent and safety filters; workflow design (e.g. design skill workflow, get journey details, update workflow). |
| **Operations** | Inbox (read): list messages, active/filtered tickets, ticket details, agents, ticket activity logs. Project: list subscriptions, create bot. |
| **Other** | Image analysis; image generation (shared tools). |

---

## Feedback and limits

- **Feedback:** You can submit feedback or ratings from the Nexus chat UI when available.  
- **Limits:** Usage may be subject to platform or rate limits; any user-visible limits will be shown in the product.
