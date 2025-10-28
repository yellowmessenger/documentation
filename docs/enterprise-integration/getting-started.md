---
title: Integrations for Service Desk & Digital Workplace Place (DWP) Automation
sidebar_label: Getting started
---

## Introduction

You can integrate enterprise systems such as ITSM, IAM, DEX, and endpoint-management tools to our Agent AI using APIs in the AI Agent Builder.


These integrations allow the AI Agent to:
- Perform operational tasks (for example, reset a device, create a ticket)  
- Retrieve contextual data from connected systems  
- Trigger automated actions across Service Desk and Digital Workplace (DWP) environments


Each integration setup is modular, API-driven, and can work seamlessly within enterprise ecosystems. 

For systems requiring endpoint-level operations, a **Workplace Self-Service Agent** is installed on user devices or environments. This agent acts as the execution layer, enabling remote troubleshooting, script-based actions (e.g., PowerShell), and device management while APIs handle orchestration and control.

<!--
## How It Works

Enterprise integrations are powered through secure API connections between Yellow.ai and third-party systems such as ITSM, HRMS, or device management tools.  
Once APIs are configured, your AI Agent can authenticate, exchange data, and execute automated actions.

1. **Authenticate** — Establish connection with the target system using credentials such as OAuth tokens or API keys.  
2. **Fetch Identifiers** — Retrieve necessary details (for example, device ID, user ID, or ticket number).  
3. **Execute Actions** — Perform defined operations like restarting a service, fetching system status, or creating a ticket.  
4. **Log Results** — Responses are logged and can be synced to analytics dashboards or ITSM systems for audit visibility.

-->

## How to Use This Guide
Each API reference in this guide follows a consistent structure to help you easily configure and test APIs within the Automation → API section of your platform.

You can use this documentation to:
- Understand the request type and endpoint required for each integration.
- Identify parameters, headers, and body components to configure the API in the platform.
- Test the API and verify the response directly within the platform’s interface.


<!--

## Audience
This documentation is intended for:
* IT Administrators – managing integration setup and credentials
* Automation Architects – designing workflows involving external systems
* Platform Engineers – implementing API configurations and troubleshooting integrations
-->

## Steps to Configure and Test an API

1. Go to **Automation** > **Build** > **API** and click **+ Add new API**.
2. In the configuration screen:
   1. Select the HTTP method (GET, POST, PUT, or DELETE).
   2. Enter the API endpoint as shown in this document.
3. Switch to the respective tabs to add the necessary details:
   <img src="https://i.ibb.co/mZ6R8xx/1.png"/>
   * **Params** tab — Add query or path parameters.
   * **Header** tab — Add authorization or content-type headers.
   * **Body** tab — Include request body (for POST or PUT APIs).
4. Click **Send** to test the API.
   * The system displays an input screen where you can enter dynamic values (e.g., tokens, device IDs) for real-time testing.
   * Review the response in the output panel to validate success.
   * Once verified, Save the configuration. You can now use this API in Agent AI flows or workflows.


For a detailed guide on how to add APIs, refer to the [Add API Manually](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api#add-api-manually) guide.

:::note  
Ensure you test your API configuration using the built-in API Test Console before linking it with any automation or Agent AI flow.  
:::