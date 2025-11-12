---
title: MCP Server Integration
sidebar_label: Data Connector
---

# MCP Server Integration for Agentic AI

The MCP Data Connector allows your AI Agent to connect with multiple third-party applications configured in your MCP server. 

Instead of setting up individual API connections for each integration, you can simply link supported accounts—such as HubSpot, Postgres, — and access all their available actions directly in AI agent conversations. The agent can then dynamically invoke the selected tools during a conversation or while executing workflows.




Unlike other integrations that work only with rule-based (non-AI) agents, the MCP Data Connector is purpose-built for AI Agents, allowing them to directly call and execute actions from connected applications during a conversation.


---

## Connect Third-Party Apps via MCP Data Connector

Follow these steps to connect your MCP server to the Yellow.ai platform:

1. In **Development/Staging** env, navigate to **Extensions** > **Integrations** > **MCP Connectors**.  
   ![](https://i.postimg.cc/xCtNMx8T/3.png)
2. Hover on the integration type you want to connect (Example: *HubSpot*) and click **+Add**.
3. In **Account Name**, enter a unique name for the account (only lowercase alphanumeric and _ are supported)
4. Provide the required connection details.
   > The configuration fields vary based on the integration.

   ![](https://i.postimg.cc/PrZZFMFK/2.png)
5. Click **Connect**.
6. You’ll see a list of tools (actions) available for the selected integration. Review the available tools to understand what each action does.
7. Select the required actions that you want to use in your AI agent and click **Add Tools**. 
   > Test any action to verify its functionality.
   ![](https://i.postimg.cc/nVS0tTk3/4.png)
8. Click **Add tools**.
   > You will see a confirmation message stating that your server has been saved. 

9. Repeat the process to connect multiple accounts under the same MCP integration.


---

## Configuring AI Agent Actions  

Once your integration apps are connected through the Data Connector, you can define how and when your AI Agent should use these integrations within conversations. This is done using the Call MCP Tool action available in the AI Agent configuration.

> Learn more about [Configuring agent and actions](/docs/platform_concepts/AIAgent/agent.md)

When you add the **Call MCP Tool** action in your conversation prompt logic with a specific action, the AI Agent can dynamically access and execute the action (tool) from the connected third-party applications.

**To configure**:
1. Go to your AI Agent and open the conversation prompt where you want to use specific integration-related actions.
2. Click **Add Action** → **Call MCP tool**.
3. Select the desired Integration Type (for example, HubSpot or Postgres).
4. Choose the Account connected through the Data Connector.
5. From the available actions list, select the specific action you want the agent to perform.

<img src="https://i.postimg.cc/WzKxCrns/1.png"/>


---

