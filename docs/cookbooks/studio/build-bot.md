---
title : Create AI agent for a sample use cases
sidebar_label : AI agent creation with sample use cases
---

This guide walks you through the process of designing and configuring the Yellow Travels AI Agent step by step. It is designed for first-time users to build and deploy their own AI agent.

By the end of this guide, you will be able to:

| Configuration | Description |
|---------------|-------------|
| **Create the Yellow travels AI agent** | Set up the Super Agent and individual agents (for booking, cancellation, refunds). |
| **Configure start triggers and prompts** | Define how conversations begin and how the agent collects user details in a step-by-step flow. |
| **Build workflows and APIs** | Store and manage booking data in a database, and fetch real-time data (such as flight or refund status) via APIs. |
| **Test and publish your agent** | Validate flows, check error handling, and finally deploy your agent live for end-users. |

---

## Yellow travels AI Agent use case

Yellow Travels AI Agent is a conversational assistant built on the Yellow.ai platform to help customers with their travel needs. It automates flight bookings, hotel bookings, cancellations, and refund queries. It also allows handoff to live agents when required.

Travel businesses handle thousands of repetitive queries such as booking tickets, checking refund status, or canceling reservations. Instead of relying on human agents, the AI agent:

- Reduces manual effort by automating common requests.
- Generates quick responses from stored records.
- Improves customer satisfaction by providing 24/7 support.
- Escalates when a live human agent is required.

---

## What does the Yellow Travels AI Agent do?

The AI agent is designed with four dedicated agents, each representing a real-life scenario in the travel journey:

| Agent | Description | Example Conversation | Backend Action |
|-------|-------------|-----------------------|----------------|
| **Book a flight ticket** | Collects passenger details, trip info (departure, destination, date), generates a booking ID, and stores details in the database. | I want to book a flight from Delhi to Mumbai on 22nd Sept. | Stores details in travelDB and sends confirmation. |
| **Book a hotel ticket** | Captures hotel stay details (location, check-in/out date, guest info), confirms booking, and captures data. | Book a hotel in Goa from 1st to 3rd Oct for 2 guests. | Calls workflow to store hotel booking details. |
| **Cancel a flight ticket** | Asks for booking ID, verifies it, and updates cancellation status. | Cancel my flight with Booking ID 12345. | Updates DB and shares cancellation confirmation. |
| **Check refund status** | Takes the booking ID, checks refund progress, and informs user. | What's the refund status for Booking ID 12345? | Fetches refund info from DB/CRM and shares update. |

---

## How to configure AI agent

### Step 1: Configure Super agent

The Super Agent acts as the master controller for your AI Agent. It defines the persona, rules, and fallback behavior that apply across conversations.

1. [Create your AI agent](https://docs.yellow.ai/docs/platform_concepts/get_started/createfirstbot) based on your use case.
2. Go to **Super agent**.
3. [Review and edit](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#update-profile-settings) the following details (these attributes are cloned from the chosen template but editable anytime):

| Attribute | Description | Example |
|-----------|-------------|---------|
| Name | Enter the name of the super agent | Yellow Travels Bot |
| Persona | Defines agent’s tone and behavior | Friendly travel assistant |
| Role | Purpose of the agent | Help users book, cancel, and manage travel |
| Scope | Boundaries of what the agent can and cannot do | Handles only travel-related tasks |
| Model | LLM powering the responses | GPT-powered model (default template) |

4. Define the [welcome flow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#define-welcome-message).  
   Example:  
   *"Hi, I’m Yellow Travels Bot! I can help you book flights, cancel bookings, or check refund status. What would you like to do today?"*

5. Add **conversation rules** (optional). Example:  
   - Always respond within 50 words.  
   - Follow step-by-step guidance.  

6. Configure [Fallback behavior](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agentpersona#how-to-handle-unanswered-queries) and [Live agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/transfer-live-agent) transfer.

---

### Step 2: Create individual Agents

Create one agent per use case:

- Flight ticket booking agent  
- Cancel booking agent  

[**Configure Agent documentation →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agent#create-an-agent)

---

### Step 3: Configure Start trigger

Set how conversations should begin for each agent.

**Example triggers for Flight Booking:**

- "I want to book a flight"  
- "Help me book a flight"  
- "Book a ticket for my trip"  

[**Start trigger documentation →**](https://docs.yellow.ai/docs/platform_concepts/AIAgent/agent#start-trigger)

---

### Step 4: Build Prompt — step-by-step

Prompts guide the conversation by collecting user input, validating it, and performing actions.

**Sample sequence for booking a flight:**

1. Collect user details:  
   - `getInput: full_name`
   - `getInput: mail_ID`  
   - `getInput: phone_number`  

2. Collect trip details:  
   - `getInput: departure_city`  
   - `getInput: departure_destination`
   - `getInput: dateOfTravel`

3. Generate booking ID and store details:  
   - Generate random bookingID.  
   - `callWorkflow: travelDB` (pass collected variables).  

4. Send confirmation message:  
   *Thanks `{full_name}!` Your flight from `{departure_city}` to `{departure_destination}` on `{dateOfTravel}` is booked. Booking ID: `{bookingID}`. We emailed the details to `{mail_ID}`.*

**Map prompts to actions:**

- [Get input](https://docs.yellow.ai/docs/platform_concepts/AIAgent/get-input)  
- [Validation](https://docs.yellow.ai/docs/platform_concepts/AIAgent/get-input)  
- [Set variable](https://docs.yellow.ai/docs/platform_concepts/AIAgent/aigent-variables)  
- [Call workflow](https://docs.yellow.ai/docs/platform_concepts/AIAgent/call-workflow)  
- [Add dynamic rich media](https://docs.yellow.ai/docs/platform_concepts/AIAgent/get-input#dynamic-rich-media)  
- [Transfer to Live agent](https://docs.yellow.ai/docs/platform_concepts/AIAgent/transfer-live-agent)  

---

### Step 5: Preview & Test

- [Agent builder preview](https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation#preview-via-agent-builder)  
- [Copilot simulation](https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation#ai-copilot)  
- [Preview on channel](https://docs.yellow.ai/docs/platform_concepts/AIAgent/manage-conversation#preview-agent-on-a-connected-channel)  

**Testing:**  
- Manual testing with [Copilot](https://docs.yellow.ai/docs/platform_concepts/AICopilot/copilot).  
- Automated [Test suites](https://docs.yellow.ai/docs/platform_concepts/AIAgent/automated-agent-testing#scenario-based-testing).  

Check:  
- Input parsing.  
- DB entries.  
- Confirmation messages.  
- Fallback.  
- Live agent handoff.  

---

### Step 6: Publish AI agent

After successful testing, click **Publish** on the Agent page.  
