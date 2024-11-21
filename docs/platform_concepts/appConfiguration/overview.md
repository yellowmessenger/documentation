---
title: Integration overview
sidebarTile: Overview
---

The integration module lets you connect your AI Agent with third-party systems, enabling access to various functionalities within the Yellow.ai platform. These integrations act as bridges between your AI Agent and external platforms, facilitating smooth communication and data exchange. Whether streamlining processes, automating tasks, or enhancing customer experiences, integrations are crucial for maximizing the utility and impact of your AI agent.


To make it easy to access and manage your integration accounts, they are conveniently organized into different categories.

   ![](https://i.imgur.com/FFrr52N.png)

## Integration process


To integrate your application with our platform, follow these step-by-step instructions:

### Step 1: Gather integration details from your integration app

1. **Login to your integration application:** Access your application's dashboard or admin panel.
2. **Retrieve integration details:** Locate and collect all the necessary details required for integration, such as client ID, secret key, and domain URL. Refer to your application's documentation for more specific instructions on where to find these details.

### Step 2: Connect your integration account to yellow.ai platform

You can connect your account only in development environment and not in live. For a three-tier environment, you can connect an account in Staging and Sandbox environment. Once the AI Agent is published, it will use the integrations if they are configured in the flows.

1. **Login to our [Cloud platform](https://cloud.yellow.ai)** with your credentials and switch to Development/Staging environment.
2. Navigate to **Extensions** > **Integration** and search for the integration app.
   
   ![](https://i.imgur.com/JagYT5w.png)

3. Proceed by entering the integration details collected in Step 1 to establish the connection with your account.

   ![](https://i.imgur.com/uZL82XT.png)

4. Click **Connect**.
5. Similarly, You can add more accounts by clicking the **+Add Account** button. You can connect up to 15 accounts per integration. 

### Step 3: Configure Webhook URL

Webhooks function as callback endpoints, sending updates to a specified URL whenever there's a change in the integration app. If you do not configure, the AI Agent won't receive these events, potentially disrupting the integration's operation.

Once the connection is estabblished, follow these steps to configure the webhook URL:

1. Once the connection is established, a unique webhook URL will be generated for your account. Go to the connected app and **Copy Webhook URL**.
   
   ![](https://i.imgur.com/8AMXnhM.png)

2. **Paste the URL** into the relevant settings section of your integration app. This allows your integration app to send data to our platform seamlessly.

### Step 4: Enable integration events in your AI Agent

This enables you to execute specific actions in response to events. For instance, you can display a message in the AI Agent conversation when a payment is successful or show order details when an order is placed.

1. In Development/Staging environment, go to **Automation** > **Event** > **Integrations**.
2. Find the event and click on the three dots icon, then select **Activate**. Events are named with the Integration app name, for instance, "InstaMojo Payment Status".

   ![](https://i.imgur.com/FtUTGsJ.png)


### Step 5: Trigger AI Agent flows with integration events

You can configure your AI Agent to [trigger specific flows when an event occurs](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow). For instance, display a message when a payment is successful or show order details after an order is placed.

1. At the start of the flow, select *Events* and then choose the specific event that you want to use. 
2. If there are multiple accounts connected, you will see the Account Name dropdown where you can choose a specific account that you want to use.


   ![](https://i.imgur.com/br6ofma.png)

3. Publish your AI Agent for your changes to reflect in the *Live* or *Production* environment.


#### Step 5: Configure AI Agent to handle specific integration actions

Once the integration is enabled, your AI Agent gains the ability to directly perform various actions within that specific integration account. These actions may include creating new records, updating existing records, and retrieving specific information. With this capability, you can configure your bot to handle these specific integration actions seamlessly.

To perform a specifc integration action via AI Agent:
1. In Development/Staging environment, navigate to **Automation** > **Build** > Select the flow where you want to use an integration action.
2. Click **Add node** > **Integrations** > {Integration Name}.

   ![](https://i.imgur.com/lVzjJq5.png)

3. Once you've added the respective integration node, you'll see a list of supported actions along with their configurations. Select the action you need and configure the necessary fields accordingly.

   ![](https://i.imgur.com/wYYsSxX.png)

4. Customize the AI Agent's behavior to respond appropriately to integration events, such as sending notifications or executing automated tasks.
5. Publish your AI Agent for your changes to reflect in the *Live* or *Production* environment.




1. **Define AI Agent Actions:** Once integration events are enabled, configure your bot to perform specific actions in response to these events.
2. **Customize AI Agent Behavior:** Customize the bot's behavior to respond appropriately to integration events, such as sending notifications or executing automated tasks.

By following these steps, you can seamlessly integrate your application with our platform and leverage the full capabilities of our bot system. If you encounter any issues or need further assistance, please refer to our documentation or contact our support team for help.

---

## Integration types

### 1. CRM 

CRM consists of integrations with customer relationship management tools used for managing the leads and opportunities. Click on any of the below mentioned integrations with CRMs that you wish to setup in order to understand the features, limitations and setup instructions:

Integration | Description
----------- | -----------
[Hubspot](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/hubspot-crm) | The HubSpot CRM integration allows you to customize lead details through a conversational bot, enhancing lead management processes and providing personalized experiences for your customers.
[Microsoft Dynamics 365](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/microsoft-dynamics) | The Microsoft Dynamics 365 CRM & ERP system integration enables your AI Agentt to create Leads, Opportunities, and perform other operations from your AI Agent.
[Salesforce CRM](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/salesforce-service-cloud) | The Salesforce CRM integration empowers your conversational AI Agent to create Leads, Opportunities, and perform other functions, enhancing efficiency and streamlining processes for your users.
[Zoho-CRM](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zoho-crm) | The Zoho CRM integration enables your AI Agent to create Leads, Opportunities, and perform other Zoho CRM related operations.
[Epic FHIR](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/epic-fhir) | Integrate Epic FHIR with Yellow.ai and fetch and modify medical records.

---

### 2.  ITSM

ITSM consists of integrations with IT service management tools used for managing service delivery. Click on any of the below mentioned integrations with ITSM tools that you wish to setup in order to understand the features, limitations and setup instructions:

Integration | Description
----------- | -----------
[Freshservice ITSM Solution](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/freshservice) | Integrate your Freshservice instance for seamless service delivery processes.
[Service Now](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/service-now) | Integrate with ServiceNow for ticket updates & accessing FAQ repositories for possible responses.
[SAP IO](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/sap-io) | This integration allows you to receive events for SAP objects. Furthermore, this also lets you perform actions, such as create, update, get and delete the tickets.

---

### 3. HR

HR consists of integrations with human resource softwares used for managing recruiting, onboarding and HR related services. Click on any of the below mentioned integrations with HR tools that you wish to setup in order to understand the features, limitations and setup instructions:

Integration | Description
----------- | -----------
1. [Freshteam](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/freshteam) |  Freshteam is a smart HR software that helps you handle recruiting, onboarding, time off and employee information in one place.
2. [SAP Success Factors](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/successfactors#references) |  With SAP Successfactors integration, you can automate recruitment cycle through conversational bots.
[Bamboo HR](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/bamboohr) |  The Bamboo HR integration allows you to seamlessly connect your Bamboo HR service with the yellow.ai platform.

---
### 4. Tools & Utilities

To explore integrations with tools & utilities softwares, click on any of the below mentioned integrations with that you wish to setup in order to understand the features, limitations and setup instructions:



| Integration Name      | Description  |
|-----------------------|------------------|
| [Azure Active Directory](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/azure-ad#references) | The Azure Active Directory integration supports use-cases related to Azure AD, providing seamless access and management within your bot ecosystem.|
| [Clever Tap](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/clevertap) | The Clever Tap integration allows seamless incorporation of Clever Tap functionalities into your bot, enhancing user engagement and analytics capabilities. |
| [Google Calendar](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/google-calendar) | The Google Calendar integration enables the creation of events within conversational bots, facilitating efficient scheduling and organization.  |
| [Google Sheets](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/google-sheets) | The Google Sheets integration enables the creation of new spreadsheets and allows for reading, writing, and updating data in the cells. |
| [JIRA](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/jira) | The JIRA integration enables conversational bots to manage and update dashboards within your JIRA project, facilitating streamlined project management and collaboration.|
| [LeadSquared Whatsapp Connector](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/leadSquared-wa-connector) | The LeadSquared integration empowers conversational bots to efficiently manage and update dashboards within your LeadSquared project, streamlining operations and enhancing productivity.   |
| [Microsoft Graph](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/microsoft-graph) | The Microsoft Graph integration enables conversational bots to manage and update dashboards seamlessly, leveraging the capabilities of the Microsoft Graph platform.      |
| [Netcore Smartech](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/netcore) | The Netcore Smartech integration enhances customer experience within your conversational bot, providing a seamless platform for engagement and interaction.    |
| [SFTP](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/sftp) | The SFTP integration facilitates file transfer and directory reading from remote locations, enhancing data management capabilities within the bot.            |
| [Twilio Verify](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/twilio-verify) | The Twilio integration enables conversational bots to trigger verification SMS, seamlessly enhancing security and authentication processes. |
| [WebEngage](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/webengage) |The WebEngage integration allows you to manage your campaigns within conversational bots, streamlining the process and enhancing engagement.    |
| [Atlassian](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/atlassian) | The Atlassian integration allows the bot to manage all Atlassian activities from the Yellow.ai platform, granting access to your Atlassian account and enabling them to perform Atlassian actions directly within the Yellow.ai bot. |
| [Freshdesk](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/freshdesk) | Freshdesk integration enables the bot to perform various actions, including creating/updating tickets, fetching ticket details, modifying ticket forms, retrieving agent info, creating notes, and adding watchers to the tickets. |
| [Google Playstore](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/playstore) | The Google Playstore integration allows for active management of user ratings and reviews for your Google Play store account within Yellow.ai. |
| [GPT-3](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/gpt3) | The GPT-3 integration allows for seamless integration of OpenAI's GPT-3, supporting DaVinci, Curie, Babbage, and custom language models within the bot.  |
| [LLM](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/llm) | The LLM integration enables to add custom language models to your Yellow.ai account.                 |
| [Oracle Responsys](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/oracle-responsys) | The Oracle integration enables opportunities to engage with leads and contacts on their preferred messaging platform using Oracle Responsys. |
| [Okta](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/okta) | The Okta integration enables secure authentication and authorization services within your Yellow.ai platform.                  |



---
### 5. Retail/ ecommerce

Retail/ ecommerce consists of integrations with tools used for managing retail and ecommerce flows. Click on any of the below mentioned integrations that you wish to setup in order to understand the features, limitations and setup instructions:

Integration | Description
----------- | -----------
1. [Shopify Shop](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/shopify) | The Shopify integration allows you to initiate Ecommerce flows seamlessly, enhancing the shopping experience within your bot.
2. [Magento](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/magento) | The Magento integration enables your bot to seamlessly connect with your Magento store. This integration allows your bot to showcase inventory categories, display products, retrieve customer details via email, allow order placement, and enable order status inquiries using the order ID, all within the conversational interface.

---

### 6. Live Chat

Live Chat consists of integrations with tools used for managing agent connectivity and interactions. Click on any of the below mentioned integrations with live chat tools that you wish to setup in order to understand the features, limitations and setup instructions:

Integration | Description
----------- | -----------
[Amazon Connect Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/amazon-livechat) |  The Amazon Connect integration enables the creation of a conversational bot that seamlessly connects with live agents, enhancing customer support experiences. Additionally, you can develop a custom bot for your team to accelerate teamwork and collaboration processes.
[Avaya Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/avaya) |  The Avaya integration enables users to connect with live agents for their queries, enhancing customer support capabilities within the bot.
[Custom Live Agent](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/customliveagent) |  The Custom Live Agent integration enables the development of a conversational bot that seamlessly connects users to human support, enhancing customer service experiences and ensuring effective communication between users and live agents.
[Freshchat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/freshchat) |  The Freshchat integration allows for the creation of a conversational bot that seamlessly connects with live agents, improving customer support interactions and enabling real-time communication between users and agents.
[Genesys PureCloud Live Agent](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys-cloud-livechat) |  The Genesys PureCloud integration enables the development of a conversational bot that seamlessly connects with live agents, enhancing customer support experiences and facilitating effective communication between users and agents.
[Intercom Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/intercom-livechat) | The Intercom integration enables seamless live agent transfer, enhancing customer support experiences by facilitating smooth transitions between automated assistance and live agent support within your bot ecosystem.
[Kapture CRM Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/kapture-crm) | The Kapture CRM integration within Yellow.ai enhances customer relationship management capabilities, streamlining interactions and processes.
[Locobuzz Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/locobuzz-livechat) | The Locobuzz integration enables live agent connections for user queries through the conversational bot, enhancing customer support experiences and facilitating seamless communication between users and agents.
[Salesforce Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/salesforce-service-cloud) | The Salesforce Live Chat integration enables the creation of a conversational bot that connects to LiveAgent, enhancing customer support experiences and facilitating seamless communication within your organization.
[Talisma Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/talisma) | The Talisma Live Chat integration enables seamless connections with live agents, enhancing customer support experiences and enabling real-time communication within your organization's conversational bot ecosystem.
[Zoho Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/zoho-live-chat) | The Zoho Live Chat integration facilitates seamless conversation transfer, enhancing customer support experiences and enabling smooth communication transitions within your organization's conversational bot ecosystem.
[Genesys Live Chat](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys) | The Genesys integration enables seamless connections with live agents, enhancing customer support experiences and facilitating real-time communication within your organization's conversational bot ecosystem.
[Microsoft Dynamics 365](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/microsoft-live) | The Microsoft Dynamics 365 integration enables direct connections with live agents, enhancing customer support experiences and facilitating seamless communication within your organization's conversational bot ecosystem.
[Genesys Purecloud Live](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys-cloud-livechat) | The Genesys PureCloud Live integration allows direct connections with live agents, enhancing customer support experiences and facilitating seamless communication within your organization's conversational bot ecosystem.
[Service Now live](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/servicenow-livechat) | The ServiceNow Live integration enables connecting with live agents on ServiceNow Live directly from your yellow.ai bot, enhancing customer support experiences and facilitating seamless communication within your organization

---

### 7. Payment

Payment consists of integrations with tools used for managing payment and related requests. Click on any of the below mentioned integrations with payment tools that you wish to setup in order to understand the features, limitations and setup instructions:

Integration | Description
----------- | -----------
[Camspay](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/camspay) | Integrate with CAMSPay to fulfil your payment requirements, including creating payment links and monitoring the progress of payments or refunds.
[Cashfree Payments](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/camspay) | With Cashfree Payment Integration, you can generate payment links and check the status of payments made, streamlining transaction processes and enhancing user experiences within your bot ecosystem.
[Paytm](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/paytm) | With Paytm integration, you can create payment links and check the status of payments made, streamlining transaction processes and enhancing user experiences within your bot conversations
[PayU Business](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/payuBiz) | With PayU Business integration, bot can handle secure and seamless payment transactions. This enables users to complete purchases, subscriptions, or bill payments directly within the chat interface.
[Razorpay](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/razorpay) | With Razorpay integration, you can streamline payment processes by creating payment links and checking the status of payments or refunds, enhancing user experiences within your bot conversations.
[Stripe Payment Gateway](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/stripe) | With Stripe integration, you can meet your payment needs, such as generating payment links and checking the status of payments and refunds, streamlining transaction processes and enhancing user experiences within your AI Agent.
[Airpay](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/airpay) | With Airpay integration, Yellow.ai enables users to make payments directly through the chat interface, facilitating seamless transactions and enhancing user experiences within your ecosystem.
[BillDesk Email pay](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/billdesk-emailpay) | With BillDesk EmailPay integration, you can seamlessly receive payments from your users, enhancing transaction processes and user experiences within your Yellow.ai account.
[Billdesk UPI](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/billdesk) | With BillDesk UPI, you can seamlessly  create UPI intents for WhatsApp Pay, view payment statuses, and send UPI notifications directly within the Yellow.ai platform.
[Stripe](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/stripe) | With Stripe Payment integration, you can generate payment links and view payment statuses directly within the Yellow.ai platform.

 














