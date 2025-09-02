---
title: Knowledge search node
sidebar_label: Knowledge search
---

Knowledge search node allows the AI-agent to retrieve answers from a website or documents uploaded in the Knowledge Base (KB) module and provide accurate and relevant responses to user queries.

Using the Knowledge search node offers the following benefits:

* **Access to up-to-date information**: The AI-agent can retrieve data from the linked websites or uploaded documents, to ensure that the information provided is correct and relevant.
* **Efficient query handling**:  The AI-agent can handle  contextual queries or specific user queries by searching through knowledge sources to resolve them.


#### Access Knowledge search node

To access Knowledge search node, follow these steps:

1. [Build a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) for your use case and extend it to the point where you want to include the Knowledge Search node. 

2. Navigate to **Actions** nodes and select **Knowledge Search**.

   <img src="https://i.imgur.com/HXw2Uf1.png" alt="drawing" width="80%"/>

* Here's a sample screenshot of the Knowledge Search node. You can customize its behavior using the configuration settings provided. For detailed information on each setting, please refer to the following sections.

   <img src="https://i.imgur.com/AZgo793.png" alt="drawing" width="60%"/>
       
#### Knowledge search settings

The Knowledge search node  additional configurations that allow users to tailor its behavior to specific use cases. Below are some key configurations and their purposes:

##### Input configuration

This setting allows you to adjust input criteria to override the default Knowledge base setting. The AI-agent will use these input settings to process and return search results. It includes options such as:

   <img src="https://i.imgur.com/AKnCBuw.png" alt="drawing" width="50%"/>

   1. **Enable summarised results**: Enable this option for the AI-agent to search and simplify the answer in a conversational manner.
  2. **Site URL**: This field displays the default URL from the Knowledge Base (KB) section. You can modify this URL based on your needs, and the AI-agent will generate search results using the provided URL.
  3. **Search confidence**: This setting defines the confidence score (ranging from 0 to 1) that indicates how accurate the predicted search is. <br/>The default value is 0.5. It is recommended to keep this value between `0.4` and `0.7` to maintain balanced and accurate search results.
  
##### Knowledge filter

The Knowledge filter allows you to refine search results based on tags created for uploaded documents. 

   <img src="https://i.imgur.com/30e0TY1.png" alt="drawing" width="60%"/>

To add a Knowledge filter:

1. Upload the [searchable documents](https://docs.yellow.ai/docs/platform_concepts/studio/kb/ingestion#upload-documents-from-local-system) to KB along with the relevant [tags](https://docs.yellow.ai/docs/platform_concepts/studio/kb/ingestion#additional-options-for-uploaded-documents).
2. Under **Tag** field, choose the tag you created.
3. In **Value** field, enter the value that should return the document associated with the specific tag. Values are fetched from a AI-agent variable. 
4. Click **+ Add filter** to add the more tags if needed.

##### AI-agent response configuration

This setting controls how the AI-agent's response is managed. By default, it is set to "Print response." You can also choose to "Save response in variable.<br/>
   i. **Print response**: This option displays the response directly in text format.<br/>ii. **saveResponseInVariable**: This option stores the AI-agent's response in a specified variable. You need to select the appropriate variable for storing the response.
  <img src="https://i.imgur.com/jRszQcU.png" alt="drawing" width="60%"/>

**Sample log returned by Knowledge search node**:                    

```
{
	"data": {
		"cards": [
			{
				"text": "Data ingestion into Knowledge base can be done through multiple entry points. This data can be fed into the AI-agent to provide more informative responses. You can input a website URL or any data source into the knowledge base to create a customized bot. Chat bots that are built on any platform can be integrated into the inbox knowledge base. You can also upload your URL links or documents to the Knowledgebase. Additionally, you can customize KB responses by providing instructions in the Configuration section.",
				"actions": [
					{
						"title": "Data ingestion into Knowledge base - Yellow.ai",
						"url": "https://docs.yellow.ai/docs/platform_concepts/studio/kb/ingestion",
						"buttonDefault": "url"
					},
					{
						"title": "Handling Gen AI Knowledgebase (KB) - yellow.ai",
						"url": "https://docs.yellow.ai/docs/cookbooks/Gen-AI-Advanced-Level/genai-kb",
						"buttonDefault": "url"
					},
					{
						"title": "Integrate a chat bot or GTM to your knowledge base - Yellow.ai",
						"url": "https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/kb_integrations",
						"buttonDefault": "url"
					},
					{
						"title": "Knowledge base additional configuration | yellow.ai",
						"url": "https://docs.yellow.ai/docs/platform_concepts/studio/kb/advancedsettings",
						"buttonDefault": "url"
					},
					{
						"title": "Customize your Knowledge base responses using prompts",
						"url": "https://docs.yellow.ai/docs/platform_concepts/studio/kb/confgure-response",
						"buttonDefault": "url"
					}
				]
			}
		]
	}
}
```   