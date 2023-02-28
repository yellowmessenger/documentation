---
title: February 2023
sidebar_label: Latest product updates (Feb 2023)
featured: true
---




![](https://i.imgur.com/Wj06Bz6.png)


## Studio 


| New features | Description | 
| -------- | -------- | 
| **Auto-validation of prompt nodes** <br/>(Applicable to the Delivery QA Team) |Bot QA team can remove steps to validate Prompt Nodes (**Name, Email, Phone and Location**) from their QA checklist as they are now handled by the platform.| 
| **Design dynamic voice flows using the Voice Input node v0 ** <br/> | Voice input node is used to take inputs in the voice channel. It replaces 15+ nodes that were previously used to build a voice bot flow. <br/> Common inputs and settings are pre-filled, this reduces the lines of code written for validation. <br/> <br/>You can experience the conversation without previewing the bot with SSML quick hearing and testing features. <br/><br/>[**Learn more**](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput)  | 

------

## Design 

| New features | Description | 
| -------- | -------- | 
| **Conversation designer for voice bots to design conversations before development** <br/> | A simple easy-to-use tool to design voice conversations, preview, and push for development. <br/> <br/> Design and Studio modules are in sync with the design, all the flows that you design on this module are automatically converted into builder flows. Bot persona and node-level settings are easily configurable. <br/><br/>[**Learn more**](https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice)| 

-----

## Voice 

| New features | Description | 
| -------- | -------- | 
| **Context-aware interruption handling** <br/> (Private-Beta)<br/> | To ensure that only relevant inputs from the callers are considered as interruptions, the voice bot can be configured to identify valid interruptions (positive and negative cases). With a positive interruption, the bot stops speaking and allows the user to converse. With negative interruption(background noise), the bot continues speaking.<br/><br/> [**Learn more**](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/usecases/interrupthandling) |
| **Auto-language detection** <br/> | You can now interact with the bot in multiple languages without manually selecting the language at any point.<br/> <br/>[**Learn more**](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/usecases/languagedetection) |

---------

 ## Widgets


| Enhancement | Description | 
| -------- | -------- | 
| **Themes and changes on chat widget setup** | <ul><li> You can now select between Light or Dark theme.</li> <li>Colour schemes are now compliant with WCAG’s accessibility standards.</li> <li>You can choose between Solid, or Gradient colours for title bar. </li></ul> [**Learn more**](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget) |

-------

## Marketplace 


| New template | Description | 
| -------- | -------- | 
| **WhatsApp starter pack** | Templates added to help showcase the implementation of buttons, lists, and date validators on WhatsApp. These can be easily customized and reused. <br/><br/><ul><li>[**Whatsapp list**](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget)</li><li> [**Whatsapp buttons**](https://cloud.yellow.ai/marketplace/a1113aea29b76704cbf3f77bf89761ad)</li><li>[**Whatsapp date validator**](https://cloud.yellow.ai/marketplace/33abc8f07ffc4b6e1cd047f9ad0c0e62)</li></ul> |
| **Healthcare template on WhatsApp channel** | The Healthcare template contains several prebuilt flows such as New patient registration, Book a consultation, Collect reports, Talk to support, and Locate nearby clinic use cases. <br/> <br/>[**Learn more**](https://docs.yellow.ai/docs/cookbooks/marketplace-templates/healthcare_template) |

-------

## Engage 

| New features | Description | 
| -------- | -------- | 
| **Omni channel campaign planning tool (Flows)** <br/> | You can easily plan and coordinate your campaigns across Email, WhatsApp, SMS, Voice, and more, from Engage module to reach audience on your preferred channels. <br/><br/>You will also have access to valuable insights and analytics that will help you measure the effectiveness of the campaigns and make informed decisions about marketing strategy.<br/>| 



## Insights


| New feature | Description |
| -------- | -------- |
| **Data Ops to export data from yellow.ai** | Data ops allows you to fetch the data obtained on the yellow.ai platform and export it to Amazon S3, Azure Blob, or SFTP server easily. <br/> <br/> [**Learn more**](https://docs.yellow.ai/docs/platform_concepts/growth/dataops)


| Enhancement | Description |
| -------- | -------- |
| **Added Conversation Issues widget** | You can now view analytics based on the conversation logs (studio). <br/> <br/> [**Learn more**](https://docs.yellow.ai/docs/platform_concepts/growth/overview#10-conversation-issues) |


| Enhancement | Description |
| -------- | -------- |
| **Push custom data to default tables on Data explorer** | **API events, Bot events, Message events, and User engagement events** tables have two columns blank by default, CUSTOMID 1	and CUSTOMID 2. You can choose to push any of the user properties that are stored on [user360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties) to all those default tables.<br/> <br/> [**Learn more**](http://localhost:3000/docs/platform_concepts/growth/data-explorer#-21-push-custom-data-to-default-tables) |