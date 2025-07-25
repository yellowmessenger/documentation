---
title: Integrating Yellow.ai agent assist on Zendesk
sidebar_label: Zendesk live agent assist
---

Yellow.ai’s agent assistance enables live agents to deliver exceptional service by utilizing auto-generated key features within the chat session to address user inquiries. 

By leveraging the following key features, live agents can enhance their efficiency and deliver personalized service to users:

* **Generates chat summaries**: Chat summarizer can generate concise summaries of ongoing conversations or historical interactions, helping agents quickly understand the context and respond effectively.

    <img src="https://i.imgur.com/RaWapir.png" width="40%"/>
* **Agent suggestions**: Agents are empowered with AI-powered reply suggestions, which analyze customer queries and provide intelligent suggestions for responses. This helps agents provide accurate and consistent answers to customer inquiries.

   <img src="https://i.imgur.com/VFIG5Lj.png" width="50%"/>
* **Intelligent Search**: Enable agents with Intelligent Search, an advanced search tool that quickly retrieves relevant information from documents, manuals, and additional resources that are related to the ongoing conversation. This ensures that agents can quickly access relevant information to address customer queries.
 <img src="https://i.imgur.com/rdayExC.png" width="40%"/>

* **Live sentiment analysis**: Identify the customer's sentiment based on chat responses. This information enables agents to tailor their responses based on the customer's sentiment.

<img src="https://i.imgur.com/QIaIlMd.png" width="40%"/>

The following are the benefits of using Yellow.ai agent assistance:

* **High agent productivity**: Enhance agent productivity by enabling them to respond to more queries in less time, utilising AI-powered tools like chat summarizers and intelligent search.
* **Accurate and consistent responses**: Utilize advanced response suggestions from agent assistance to empower agents to deliver accuracy and uniformity in customer interaction.
* **Improved user experiences**: Facilitate a user experience through contextual conversations based on user sentiment and past interactions. This approach enhances overall engagement, providing users with a more personalized and satisfying interaction.

## Prerequisites for Installing Yellow.ai Agent Assist on Zendesk:

Before initiating the installation process, you need to consider the following instructions:

* Sign up for [Yellow.ai](https://cloud.yellow.ai/) and complete the onboarding journey.
* Create a Zendesk account.
* Once your Zendesk account is created, [connect Zendesk](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sunshine) on Yellow.ai platform.
* Enable agent assist by contacting [support team](mailto:support@yellow.ai).


## Install Yellow.ai agent assist app from Zendesk marketplace. 

The Yellow.ai Agent Assist package is available on the Zendesk marketplace. Follow these steps to install the package after logging into your Zendesk account:

1. Log in to your Zendesk account.

2. Go to **Marketplace** > **Apps** > **Install**.

    ![](https://i.imgur.com/WUe98d8.png)
    
3. Select the account to install the app and click **Install**.     

    <img src="https://i.imgur.com/LZs4KKD.png" width="40%"/>
    
* You will be redirected to Zendesk Marketplace.    
    
4. Enter the following details in the respective fields and click **Install**.

    * **Bot ID**: Enter the bot ID connected to Zendesk.
    * **API Base URL**: Enter the webhook URL based on your bot region (for example, r0 - https://cloud.yellow.ai, r1 - https://r1.cloud.yellow.ai).
    * **X-API Key**: Enter the API key. For more information on how to get the API key, click [here](https://docs.yellow.ai/docs/platform_concepts/get_started/api-keys#docusaurus_skipToContent_fallback).
    * **Site URL**: Enter the URL of your website to fetch information for user assistance (for example, puma.com/help).
    * **Enable role restrictions**: Enable the check box and select the roles that should have access to this app.
    * **Enable group restrictions**: Enable the check box and select which groups should have access to this app.

:::info
#### To generate an Azure OpenAI API key:

1. Sign in to the [Azure portal](https://learn.microsoft.com/en-us/azure/api-management/api-management-authenticate-authorize-azure-openai) using your Microsoft account. 
2. Locate your Azure OpenAI resource. You can also search for it by name. 
3. Navigate to **Keys and Endpoint** in the Resource Management section. 
4. Retrieve your API key(s). Copy the one you want to use for integration.
:::

  ![](https://cdn.yellowmessenger.com/assets/yellow-docs/zendeskconfig.png)

### Verify the app installation

To verify whether the Yellow.ai agent assist app is installed or not, follow these steps:

1. In your Zendesk account, go to **Apps and integrations** > **Zendesk Support apps**. 

   ![](https://i.imgur.com/48lAf8g.png)
   
### Update the app details   
   
1. If you want to edit your app details, hover over the app and click the **Settings** icon, then select **Change settings**.

   ![](https://i.imgur.com/4VtxQoT.png)
   
* This will redirect you to the Zendesk support apps section. 

2. Update the respective fields and click **Update**.

    ![](https://i.imgur.com/Tf2b2iu.png)
    
* Your app will be successfully updated.

## Using Yellow.ai Agent Assist

Once agent assistance is installed, live agents can provide customer support using automated key features:

1. Go to your Zendesk account and click on **Dashboards** to view the tickets.

     ![](https://i.imgur.com/5FwOfCU.png)

2. Select the ticket assigned to you to initiate a conversation with the user regarding their query.

    ![](https://i.imgur.com/DSL4bnm.png)

3. Click on Apps to access the Yellow.ai Agent Assist key features.

    ![](https://i.imgur.com/LmFyrsX.png)