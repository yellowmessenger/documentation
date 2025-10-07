---
title: LLM configuration
sidebar_label: LLM configuration
---

LLM (Large Language Model) configuration is the central hub for managing all LLM accounts and models used across the Yellow.ai platform. Instead of setting up models separately in each feature, you can configure them once and reuse them across modules such as AI Agents, Knowledge Base, Dynamic Chat nodes, and Super Agent.

By default, every workspace includes a Yellow-provided account (GPT-4.1) so you can start using LLM-powered features immediately. If you prefer, you can connect your own provider accounts (OpenAI, Azure OpenAI, AWS Bedrock, Anthropic) and assign them to specific modules or environments.

This centralized setup helps:

* Applies config to all modules where LLMs are used.
* Assign different accounts or models to Sandbox, Staging, or Production.
* Avoid repetitive setup across features
* Manage usage limits, roles, and audit logs in one place.


This document explains how to configure and manage LLM accounts on the Yellow.ai platform. It covers:  

* [Yellow-provided default accounts](#default-yellow-account)  
* [Configure your preferred LLM account](#configure-your-preferred-llm-account)  
* [Environment-specific configuration](#environment-specific-configuration)  
* [Usage limits](#usage-limits)  
* [Access control and audit logs](#access-control-and-audit)  

---

### Default Yellow Account

Every AI agent on the Yellow.ai platform comes with a default LLM account provided by Yellow.ai. This account is pre-configured with the platform's preferred model (GPT-4.1).  

With the default account:  

* No manual configuration is required—you can start using LLM-powered features like AI Agents, prompts, workflows, and Knowledge Base Agents right away.  

---

### Configure Your Preferred LLM Account

Yellow.ai allows you to connect and use your own LLM provider accounts instead of the default Yellow-provided one.  

**Supported providers include:**  

* OpenAI  
* Azure OpenAI  
* AWS Bedrock  
* Anthropic  

To use a customer-owned account, add the provider credentials via the **LLM Configuration** section in platform settings.  

:::note
When using your own LLM provider account, you are responsible for maintaining sufficient quota and availability to meet your traffic requirements.
:::

---

### Environment-Specific Configuration

The **LLM Configuration** page allows you to assign different LLM accounts and models for each environment—**Sandbox**, **Staging**, and **Production**.  

**This setup ensures:**  

* **Safe testing** – Experiment with new models or accounts in Sandbox or Staging before moving them to Production.  
* **Customization** – Each environment can have its own account or model settings based on traffic, cost, or performance requirements.  

---

### Usage Limits

When using Yellow-provided LLM accounts, default rate limits are applied to ensure platform stability and fair usage across all AI agents.  

**The limits include:**  

* **Per-request token limit:** Maximum tokens allowed in a single request.  
* **Per-user, per-minute limit:** Maximum number of LLM calls a single user can make per minute.  
* **Per-agent, per-minute limit:** Maximum number of LLM calls across all agents under one AI Agent.  

:::note
If you expect higher traffic or plan to go live with Yellow-provided credentials, request a production environment limit increase from the [Yellow.ai support team](mailto:support@yellow.ai) in advance.
:::

---

### Access Control and Audit

**Role-based access**  

* Only users with the **Admin** role can add, update, or delete LLM accounts.  
* **Super Admin** privileges are required to make changes to LLM configuration in the Production environment.  

**Audit logging**  

* All configuration changes—such as account additions, deletions, or updates—are automatically logged.  
* These logs are available under **Audit Logs** in **Settings**.  

---

## Access LLM Configuration

You can access LLM configuration in two ways:  

### From the Settings Section  

1. Go to **Settings > LLM Configuration**.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/LLM-access.png)  

### Directly from an LLM-Powered Module  

1. Navigate to a specific LLM-powered module (Dynamic Chat Node, Conversations, Agent AI, or Knowledge Base).  
2. Click the highlighted icon on the page.  

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/agents-llm.png" alt="drawing" width="100%"/>  

   * This will redirect you to the **LLM Configuration** page.  

---

## Manage LLM Accounts

In the **LLM Configuration** section, a **Super Admin** can create, edit, and disconnect LLM accounts, and switch models across environments.  

### Add LLM Account

You can view the default Yellow account before adding a new one. If needed, you can create your own account to manage LLM-powered features.  

1. Go to **Settings > LLM Configuration**.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/LLM-access.png)  

2. Click **Account List**.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/account-list.png)  

3. Click **+ Add Account**.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/add-llm.png)  

4. Enter an **Account name**.  
5. In **LLM provider**, select your preferred provider.  
6. Enter the **API key** and resource (for example, from GPT-3.5 or GPT-4).  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/llm-account-add.png)  

7. Click **Connect**.  

---

### Edit LLM Account

You can update the details of an existing LLM account or provider if needed. You cannot edit or delete the default Yellow account.  

1. Go to **Account List** > **Add Account**.  
2. Navigate to the account you want to edit and click **Edit details**.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/edit-llm-details1.png)  

3. Update the required account details and click **Save**.  

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/edit-llm-details.png" alt="drawing" width="80%"/>  

---

### Disconnect LLM Account

You cannot disconnect the default Yellow account. However, you can disconnect any other account you have created.  

Before disconnecting, ensure another account is available to handle all LLM features.  

1. Select an alternative account that you want the module to use.  
2. Go to **Account List** > **+ Add Account**.  
3. Navigate to the account you want to disconnect, then click **Disconnect**.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/disconnect-llm.png)  

---

### Edit LLM Configuration  

By default, the Yellow account details are displayed for each environment. You can update the existing LLM model or account as needed.  

For example: set the GPT-4.0 model in **Staging** and GPT-3.5 in **Production**.  

1. Navigate to the specific feature where you want to edit the configuration.  
2. Expand the drop-down menu and click the **Edit** icon corresponding to the environment.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/edit-config.png)  

3. Update the **Account name** and **Model** as needed.  

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/update-llm.png" alt="drawing" width="80%"/>  

4. Click **Save**.  

---

## FAQs

<details>
 <summary>Is an LLM required to use Yellow.ai?</summary>
 <div>
  No. The platform offers a wide range of features that work independently of LLM integration.  
  However, integrating an LLM enhances capabilities such as handling complex queries, generating dynamic responses, and improving FAQ interactions.
 </div>
</details>

<details>
 <summary>What happens if usage exceeds the platform rate limits?</summary>
 <div>
  Requests that exceed the threshold will be rejected. For per-minute limits, the quota resets automatically after one minute.
 </div>
</details>

<details>
 <summary>How can I check which rate limit is being hit?</summary>
 <div>
  You can verify this in the conversation logs, which indicate the type of rate limit that was exceeded.
 </div>
</details>

<details>
 <summary>If I publish a AI agent, will the LLM configuration from a lower environment move to the upper environment?</summary>
 <div>
  No. LLM configuration is not tied to the publish process. You must manually configure the settings in the Production environment.
 </div>
</details>
