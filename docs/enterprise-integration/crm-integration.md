# CRM Integration

Integrate Yellow.ai's Agentic AI platform with your Customer Relationship Management (CRM) systems to provide personalized customer experiences, automate support workflows, and enhance agent productivity.

## Why Integrate with CRM?

-   **Personalized Conversations**: Access customer data (e.g., name, order history, support tickets) to tailor bot responses.
-   **Automated Lead Qualification**: Qualify leads through bot conversations and automatically create/update lead records in your CRM.
-   **Streamlined Support**: Create, update, and retrieve support tickets directly from bot conversations.
-   **Agent Empowerment**: Provide human agents with full customer context during handoffs.

## Supported CRM Systems

Yellow.ai offers out-of-the-box integrations and flexible API options for popular CRM platforms, including:
-   Salesforce Service Cloud
-   HubSpot CRM
-   Microsoft Dynamics 365
-   Zoho CRM
-   And more via custom API integrations.

## Common Integration Use Cases

### 1. Lead Generation & Qualification

-   **Bot Action**: Collect user details (name, email, company, query).
-   **CRM Action**: Create a new lead record in Salesforce or HubSpot.
-   **Bot Response**: Confirm lead creation and provide next steps.

### 2. Support Ticket Management

-   **Bot Action**: Identify user intent as a support query.
-   **CRM Action**: Search for existing tickets or create a new one in Zendesk or Freshdesk.
-   **Bot Response**: Provide ticket status or confirmation.

### 3. Customer Data Retrieval

-   **Bot Action**: User asks for order status or account details.
-   **CRM Action**: Retrieve relevant data from the CRM using user ID.
-   **Bot Response**: Present personalized information to the user.

## Integration Steps (General)

1.  **Authentication**: Set up secure authentication (API Key or OAuth 2.0) with your CRM.
2.  **Map Data Fields**: Define how data from Yellow.ai conversations maps to fields in your CRM.
3.  **Configure Workflows**: Use Yellow.ai's Studio to create flows that trigger CRM actions (e.g., "Create Lead" node, "Update Ticket" API call).
4.  **Test & Deploy**: Thoroughly test your integration in a staging environment before deploying to production.

## Further Reading

-   [Salesforce Service Cloud Integration](/docs/platform_concepts/appConfiguration/salesforce-service-cloud)
-   [HubSpot CRM Integration](/docs/platform_concepts/appConfiguration/hubspot-crm)
-   [API Node Documentation](/docs/platform_concepts/studio/build/nodes/action-nodes-overview/api-node)