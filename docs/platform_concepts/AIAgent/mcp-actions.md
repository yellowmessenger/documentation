---
title: Call MCP Actions    
sidebar_label: Call MCP tool  
---


Use this action to access real-time data and perform actions from external applications connected through your MCP server. When a user query requires information or an action from one of these third-party apps, the AI Agent automatically invokes the relevant MCP tool and executes the selected task — such as fetching contact details, updating records, or triggering workflows.

<img src="https://i.postimg.cc/WzKxCrns/1.png"/>


**Example**:

If your MCP server is connected to HubSpot, and a customer asks, “Can you share the latest status of my deal?”, the AI Agent will automatically call the HubSpot-get-deal action from the MCP tool. It retrieves the relevant deal details from HubSpot and responds instantly — without requiring any manual lookup or switching between tools.

To connect new apps or accounts from your MCP server, refer to [Data connector integration](/docs/platform_concepts/appConfiguration/mcp-server.md)