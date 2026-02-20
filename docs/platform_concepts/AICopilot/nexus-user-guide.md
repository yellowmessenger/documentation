---
sidebar_label: Nexus
title: Nexus – Universal agentic interface
description: Use Nexus to control and explore the Yellow.ai platform in plain language—get metrics, create or update agents, check tickets, or combine analytics and builder actions in one place.
---

Nexus is the **universal agentic interface** for Yellow.ai: one place to control and explore your platform in plain language. Ask for metrics, create or update agents, check tickets, or combine analytics and builder actions in a single request—without switching modules or digging through menus.

Whether you're running a weekly review, debugging a production issue, or extending your bot, Nexus guides you with natural language and will ask you to approve before it makes any changes.

---

## Explore what you can do with Nexus

1. [Improve bot performance](#improve-bot-performance) – Understand why metrics dropped and what to change.
2. [Run a weekly or ad-hoc review](#run-a-weekly-or-ad-hoc-review) – Get performance snapshots and compare periods.
3. [Debug production issues](#debug-production-issues) – Find failed conversations and API or flow issues.
4. [Monitor support operations](#monitor-support-operations) – See ticket load, priority, and agent workload.
5. [Set up or extend your bot](#set-up-or-extend-your-bot) – Add agents, APIs, knowledge base, tables, and workflows.
6. [Investigate a user or ticket](#investigate-a-user-or-ticket) – Get full context for a conversation or ticket.
7. [Try it with Nexus](#try-it-with-nexus) – Copy-paste sample prompts by platform area and try Nexus in the chat.

---

## Access Nexus

1. Log in to the [Yellow.ai platform](https://nexus.yellow.ai).
2. In the top header, click the **Copilot** icon.
3. The Nexus chat panel opens. Type your question or request in the input field and press Enter.

:::tip
Nexus uses your **current bot context** when you're inside a bot—so you can ask about "my agents" or "last week's metrics" without specifying the bot.
:::

---

## Improve bot performance

**When to use:** You notice containment rate, CSAT, or resolution metrics dropping and want to understand why and what to change.

**What Nexus can do:**

- **Analytics:** Surface metrics, trends, conversation analysis, and topics that drive handoffs or failures.
- **Builder:** Reference your agents, flows, and knowledge base so you can decide what to change.

Nexus can pull from both analytics and builder in one go—for example, it can show you which topics are causing more human handoffs and suggest where to add training or flows.

**Sample prompts:**

- "Analyze why my containment rate has dropped recently. Show me which topics are causing more human handoffs and what changes I should make to improve it."
- "Identify gaps in my bot's coverage—topics where users aren't getting answers and where I need more training or flows."
- "Diagnose why my CSAT scores are low. Analyze negative feedback and suggest specific improvements to the bot."

---

## Run a weekly or ad-hoc review

**When to use:** You need a quick snapshot of performance, want to compare time periods, or create a dashboard for your team.

**What Nexus can do:**

- **Analytics:** Get bot metrics (users, sessions, messages, resolution rate, containment rate, satisfaction), compare periods, create or update reports and dashboards, and list saved reports.

**Sample prompts:**

- "Show me my bot's performance metrics for the last 7 days including total users, sessions, messages, resolution rate, containment rate, and user satisfaction scores."
- "Compare my bot's key metrics between this week and last week. Highlight significant changes and trends."
- "Create a new dashboard to track my bot's key performance metrics including user engagement, resolution rates, and customer satisfaction scores."

---

## Debug production issues

**When to use:** You need to find unresolved or failed conversations, debug a specific conversation's flow, or check API failures.

**What Nexus can do:**

- **Analytics:** Find analyzed and pending conversations, pull full message transcripts, and show execution traces (steps, LLM calls, where it went wrong).
- **Builder:** List APIs, get API failure logs, and reference agent configuration.

Nexus can combine conversation logs and API logs so you can see both what users said and why an integration failed.

**Sample prompts:**

- "Find conversations from the last 7 days that were not resolved. Show me the topics, user sentiment, and sample transcripts."
- "Show me the execution trace and flow for recent failed conversations—where did the conversation go wrong?"
- "Show me failure logs for all my configured APIs from the last 24 hours with error responses, status codes, and timestamps."

---

## Monitor support operations

**When to use:** You want to see active tickets, high-priority items, or how your inbox agents are performing.

**What Nexus can do:**

- **Operations (Inbox):** List active and filtered tickets, ticket details, assigned agents, and ticket activity logs.
- **Analytics:** Surface inbox and agent performance metrics (tickets handled, response time, resolution rate, satisfaction).

**Sample prompts:**

- "Show me all currently active support tickets with status, priority, assigned agent, and how long each has been open."
- "Find all high priority and urgent tickets from the last 7 days with status and assigned agents."
- "Analyze inbox agent performance for the last 30 days—tickets handled per agent, average response time, resolution rate, and customer satisfaction."

---

## Set up or extend your bot

**When to use:** You want to add or update AI agents, connect a knowledge source, create a table, or see your current bot configuration.

**What Nexus can do:**

- **Builder:** List and create flows, list and create/update AI agents, list APIs and get failure logs, create and update APIs, index a website to the Knowledge Base, list and create database tables and search records, get and update Super Agent settings and safety filters, and design or update workflows.

**Sample prompts:**

- "Create a new AI agent for handling customer support queries. It should greet users, understand their issue, provide solutions from the knowledge base, and escalate to a human agent if needed."
- "Show me my bot's current configuration including enabled features, flows and journeys, AI agents, custom functions, and API integrations."
- "Index the website https://example.com into my knowledge base so the bot can answer questions from its content."
- "Create a new database table called 'customer_feedback' with fields for customer_id (string), rating (number), feedback_text (string), created_at (date), and resolved (boolean)."
- "List all AI agents configured in my bot with their triggers, goals, and current status."

---

## Investigate a user or ticket

**When to use:** You need the full history for a specific ticket or the message transcript for a user conversation.

**What Nexus can do:**

- **Operations (Inbox):** Get ticket details and full activity history (status changes, assignments, transfers, customer interactions).
- **Analytics:** Retrieve conversation messages and traces for a given user or session.

Nexus can bring together ticket activity and conversation content so you have one place to investigate.

**Sample prompts:**

- "Show me the complete activity history and audit trail for a specific ticket—status changes, agent assignments, transfers, and customer interactions."
- "Get the full message transcript for a specific user to understand their conversation history and identify issues with bot responses."

---

## How Nexus works

You ask in natural language. Nexus figures out what to do and may run several steps across the platform—for example, pulling metrics, then conversation analysis, then suggestions. When a request would **create**, **update**, or **delete** something (such as an agent, API, or table), Nexus **asks you to approve** in the chat before it makes the change. Once you approve or skip, it shows you the result.

:::note
Nexus asks for your approval before making changes so you stay in control. You can approve or reject each step in the chat.
:::

---

## Try it with Nexus

Open Nexus and try any of the prompts below to see what you can do in each area. Copy a prompt into the chat and press Enter.

### Analytics & insights

- "Show me my bot's performance metrics for the last 7 days."
- "Compare my bot's key metrics between this week and last week."
- "Create a new dashboard to track user engagement and resolution rates."
- "What are the top 10 conversation topics from the last week?"
- "Show me containment rate trends for the last 30 days."

### Builder

- "List all AI agents in my bot with their triggers and goals."
- "Create a new AI agent for customer support that uses the knowledge base and can escalate to a human."
- "Index https://example.com into my knowledge base."
- "Create a database table for customer feedback with fields for rating, feedback_text, and created_at."
- "Show me my bot's current configuration—flows, agents, and API integrations."

### Operations (Inbox)

- "Show me all currently active support tickets."
- "Find all high priority tickets from the last 7 days."
- "Analyze inbox agent performance for the last 30 days."
- "Show me the activity history for ticket #12345."

### Cross-area

- "Why is my containment rate dropping and what should I change?"
- "Find gaps in my bot's coverage and suggest where I need more training or flows."

---

## Tips for better results

- **Be specific with time ranges**—for example, "last 7 days" or "last 30 days" helps Nexus return the right data.
- **Use the suggestions in the Nexus panel**—when you open a new chat, the suggested prompts are designed to work well; you can click or adapt them.
- **Stay in context**—Nexus uses your current bot when you're inside a bot in the platform, so you can say "my agents" or "my metrics" without naming the bot.

:::note
Nexus doesn't yet support every platform area. For **campaigns** (Engage), **NLU training**, and some **Inbox write actions** (such as assigning or replying to tickets from the chat), use the relevant module in the platform. We're expanding what Nexus can do over time.
:::

---

## Capabilities at a glance

| What you can do | Examples |
|-----------------|----------|
| **Get metrics and compare periods** | Users, sessions, resolution rate, containment rate, CSAT; compare weeks or months; create dashboards and reports. |
| **Analyze conversations** | Topics, sentiment, resolution status; message transcripts; execution traces for debugging. |
| **Create and update AI agents and APIs** | List, create, and update agents; list APIs and failure logs; create and update API integrations. |
| **Manage knowledge and data** | Index websites to the Knowledge Base; list and create tables; search table records. |
| **Monitor Inbox** | Active and filtered tickets; ticket details and activity history; agent performance metrics. |
| **Configure your bot** | Super Agent settings and safety filters; workflow design; bot configuration overview. |

---

## Feedback and limits

You can submit feedback or ratings from the Nexus chat when the option is available. Usage may be subject to platform or rate limits; any user-visible limits will be shown in the product.
