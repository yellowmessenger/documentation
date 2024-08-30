---
title: Create flows
sidebar_label: Create flows
tags: [AI copilot, auto flow creation, GPT-4] 
---

This guide provides a step-by-step walkthrough for creating a flow on the platform.

#### Limitation 

* You can add up to 150 nodes in a flow.

To create a flow, follow these steps:

1. Select the specific environment (Staging, Sandbox, and Production) in which you want to create a flow. 

      ![](https://imgur.com/2XaGItC.png)

:::note
* In the Live environment, the option to create flows is disabled. You can only modify or add flows in the Staging, Sandbox, and Production environments.
![](https://imgur.com/b5oBsqW.png)
:::
      
2. Go to **Automation** > **Build** > **Flow** > **Create flow**.

    ![](https://imgur.com/fK5pmO5.png)
    
:::note
If you have multiple bots created, choose the specific bot for which you intend to build the flow.
:::
    
3. Select your preferred options to create a flow.

   ![create flow](https://i.imgur.com/Au5cJsA.png)   
    

* [Create with AI Copilot](#automate-flow-creation-using-ai-copilot): This option allows you to automatically create flows based on your input. It eliminates manual processes and the need for template downloads.
 * [Create from template](#create-flow-using-a-template): This option allows you to use pre-built bot templates from Yellow.ai's marketplace to quickly build conversation flow based on your use case instead of creating it from scratch.
 * [Start from scratch](#manually-create-a-flow): This option allows you to manually create a flow using [key elements](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/flows-overview#key-elements-to-build-a-flow) without relying on pre-built templates or automated tools.
 * [Create skill](#create-a-skill): This option allows you to create a flow to run concurrently in the background along with the main flow to perform specific tasks or action.

### Generate flow using AI Copilot

Yellow.ai's AI Copilot simplifies flow creation using AI-powered automation, saving time by eliminating manual process. You can design any type of flow just by inputting your requirements in the form of plain text, and it generates the flow based on the provided instructions.

The AI Copilot creates a basic flow with [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) and [Message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) nodes. You can then customize this flow using [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code), [Database](https://docs.yellow.ai/docs/platform_concepts/studio/database#docusaurus_skipToContent_fallback), and [API](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode) to suit your specific use case.


For example, you have defined AI Copilot to create a lead generation flow. Once the basic flow is generated, you can edit the flow for advanced features such as storing the lead information in database, adding an API node to connect to an external CRM system. 

#### Use cases of AI copilot

| Industry | Usecase                                                | Input required from user                                    | Additional actions to enhance the flow                                                                 |
|----------|--------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Airline  | Booking and managing flight reservations                | Name, email, phone number, origin city, destination city, date | API call to fetch flights, API call to book the selected flight                                   |
|          | Checking flight status and schedule updates             | Name, email, phone, booking reference number                  | API call to get flight status, API call to add email to receive updates                           |
|          | Assisting with baggage tracking and lost luggage claim  | Name, email, phone, baggage request number                    | API call to track status, API call to send lost luggage claim                                      |
|          | Offering personalized travel recommendations            | Name, email, phone, destination & travel dates                | API call to provide recommendation                                                                  |
| Automotive | Scheduling test drives and service appointments         | Name, email, phone, car series, appointment type, date and time | API call to book the service                                                                         |
|          | Assisting with financing and insurance options          | Name, email, phone number, car model, loan option, insurance option | API call to send these details                                                                      |
| Real Estate | Providing information on property listings              | Name, email, phone, property type, budget                     | API call to fetch the required listings                                                             |
|          | Assisting with scheduling property viewings and appointments | Name, email, phone, property type, viewing date               | API call to schedule the meeting                                                                     |
|          | Offering personalized property recommendations          | Name, email, phone, property type, bedrooms, budget            | API call to fetch properties                                                                         |
| Education | Providing information on courses                         | Name, email, phone, selected course                           | API call to gather more course information or DB store to store                                    |
|          | Scheduling demo class for the selected course            | Name, email, phone, course, preferred date of demo, preferred time | API call to schedule / DB to store                                                                   |
|          | Connecting with educators, advisors, and support staff    | Name, email, phone, type of support required                   | API call to raise request / DB to store                                                              |

To generate flow using AI, follow these steps:

1. Go to **Automation** > **Build** > **Flows** > **+ Create flow** > **Create with AI Copilot**.

   ![](https://imgur.com/iyZ3MIg.png)

2. Define your flow using the available options: 

    <img src="https://imgur.com/8nXVVDd.png" alt="drawing" width="70%"/>

   i. **Flow name**: Enter the name of the flow.<br/>
   ii. **Category**: Choose a Category where your flow should be generated. To create a new category for your flow click **+Create category**.<br/>
   iii. **AI Copilot**: Describe the desired outcome of your flow. This will help to design the flow tailored to your requirements.<br/>
   iv. **Generate Description**: Automatically generates the description based on your given details.<br/>
   v. **Industry**: Choose the industry your business belongs to and click **Generate**.
   
* Generating a flow typically takes around 3 to 4 minutes. A basic flow is created with [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) and [Message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) nodes. Once generated, you can view the created flow under the selected category. You can then customize this flow to suit your specific use case.

   ![](https://imgur.com/49FGhOG.png)

### Create flow using a template

1. Go to **Automation** > **Build** > **Flows** > **Create flow**.

    ![](https://imgur.com/fK5pmO5.png)
    
2. Click **+ Use template**.

   ![](https://i.imgur.com/yb2AckK.png)

* In the **Flow template** dialog box, select the template specific to your category or click on your preferred template. For more information about templates, click [here](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro).

    ![](https://i.imgur.com/8hZUf4j.png)

* After selecting the template, you can see the details of the flow template, key features, flow structure, and a similar template.

    <img src="https://i.imgur.com/GQG0hGx.png" alt="drawing" width="100%"/>

7. Preview the template by clicking the **Preview** button to see the sequence of the flow. 

   ![](https://i.imgur.com/eUv2q21.png) 
   
8. Click **+ Use template**.

    ![](https://i.imgur.com/JHuIzut.png)  

9. The template will be imported into the flows section, labelled as *Imported*.

   ![](https://i.imgur.com/K2qT8fy.png)

### Manually create a flow

1. Go to **Automation** > **Build** > **Flow** > **Create flow**.

    ![](https://imgur.com/fK5pmO5.png)

2. To create a flow from scratch, click **+ Create flow**.

   ![](https://i.imgur.com/gT5aZAZ.png)

3. Define your flow details:

   <img src="https://i.imgur.com/nRCDd2B.png" alt="drawing" width="50%"/>

   i. **Flow name**: Provide a descriptive name for your flow, such as "Flight booking" or "Customer service".
   ii. **Flow Description**: Describe the purpose of the flow.<br/>
   iii. **Category**: You can assign a flow to an existing category from the drop-down or create a new category.

To create a Category, follow these steps:

1. Expand the Category drop-down and click **Create category**.

   <img src="https://i.imgur.com/p4PZv7Q.png" alt="drawing" width="40%"/>
   
2. Enter the **Name** of the category and click **Create** to create a new category.

    <img src="https://i.imgur.com/3gHRb8G.png" alt="drawing" width="40%"/>

4. Add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes) and build the flow according to your use-case.

   ![image](https://imgur.com/EIt0gea.gif)

* For the flow to work, you need to trigger it. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow) for the detailed steps.

### Create a skill

Skills are background processes that are built using only [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) or [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) nodes and operate along with the conversational flow. Skills enhance the bot's capabilities by performing various tasks such as calling functions, executing APIs, and database operations. This configuration allows you to create workflows that can be linked to categories and invoked as needed within a conversation. 

For example, an action node called [Sync DB](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#41-sync-database) operates in the background, synchronizing data with an external database while the bot executes the rest of the flow.

To create a skill, follow these steps:

1. Go to **Automation** > **Build** > **Create flow** > **+ Create skill**.

   <img src="https://imgur.com/Y81KKrN.png" alt="drawing" width="100%"/>

3. Enter the following fields:

   <img src="https://i.imgur.com/ZD745rR.png" alt="drawing" width="40%"/>

   i. **Skill name**: Provide a descriptive name for your skill.<br/>
   ii. **Skill Description**: Describe the purpose or functionality of the skill.<br/>
   iii. **Category**: You can assign the skill to an existing category or create a new one.

To create a new category for a Skill, follow these steps:

1. Expand the **Category** drop-down and click **Create category**.

   <img src="https://i.imgur.com/n6n6saa.png" alt="drawing" width="40%"/>
   
2. Enter the **Name** of the category and click **Create** to create a new category.

    <img src="https://imgur.com/VJgYkot.png" alt="drawing" width="40%"/>

* This will create a Skill.
