---
title: Best practices to create an Email bot
sidebar_label : Best practices 
---
Follow the below best practices to build an email bot: 


1. Log in to cloud.yellow.ai and create a bot.
2. Configure email channel:
    1. Navigate to **Channels > Email** and click on Add account.
    2. Provide necessary details.
    3. Click **Save**.

> Refer to this [guide](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound), to understand email channel configuration.

:::note

Once the channel is configured, reach out to [tara@yellow.ai](mailto:tara@yellow.ai) or [mohan.kumar@yellow.ai](mailto:mohan.kumar@yellow.ai) to enable email automation on the bot. As this feature is gated, it requires activation from the backend. Provide the bot ID and email address configured to do this.

:::

3. After configuring an email channel, you'll have the option to create a pre-processing flow. This serves as an initialization journey where you can define custom logic to process email information. This allows you to determine whether the ticket should be handled by the bot or escalated to an agent based on your specified criteria.

4. **Creating flows in Email Bot**: 
    1. It is important to provide detailed flow description. This information is critical for intent identification within the LLM layer.

    **![](https://lh7-us.googleusercontent.com/KqlhUZknpsBUpwK-GwuMchhHlULQvjT5T5XzEPpauR31p6xHhqj9SOB69ssR140lWefUaIR_go8aUvHrKcP2o6UhIDEIslZ3w3EyVdSPtl0hPvtfwvEXUBnGJSoYeVda5kjaSLLdVkUJhmZDLYb1qAI)**

    2. There is no necessity to include utterances and intents in the training section.
    3. If there are any entities within the flow,they should be trained in the entity section.

    **![](https://lh7-us.googleusercontent.com/1jm-_CQashwWdda-Fun8L-oiNCz41RarGotiIzqWqebh0ZhWuBThJ_PLUKgQnU2zDGnFIL4pIprd-W8tHofymVugCscIBmElVLMljhFDgaKM4AjHGtoBL4x_Q7gpKGhaOfRF4AY8gx14i0gRCllC2ww)**

    4. Only text nodes, action nodes, conditional nodes and integration nodes are supported. Other nodes are not compatible with email bot’s functionality.
    5. If similar flows need to be configured for different channels, ensure to use **Channel filter** node, to customize the behavior based on each channel’s requirement.

:::note

You can also configure KB (upload documents or add a website URL) and test the email bot.

:::


5. **Response configuration**: When configuring a response in a text node, it is not required to create a template message in HTML format. A default response template is already configured for the bot. Therefore, only the text response needs to be provided. When formatting responses for multiple entities, it should be done using this function. 

**![](https://lh7-us.googleusercontent.com/9zyTs_B3ayRotteY3We9roRABz1f6IpCK2kLKTJF6NKH_N6zSc8O19NfNuRp71wDFIJza4WjAAHiMQXEsgz14NsEPpEr45BeDjfzi-w-f2heIfSRYAWLB6sD9Z5E41TRpoJvZ1BQXsePxzbpTQ56kuk)**

6. **Test the output**: Once the email is configured and the flows are created, the bot automatically generates responses to any emails received on the configured email ID. Send a test email configured and check the automated response generated.


**![](https://lh7-us.googleusercontent.com/EedqF5ENU-maZdnKuHQXcDuZFL9jKw_CuI_10-VogCTok6ZUE825vEXTjTXUAMwKng47imOjwgyRpUp2VfiRhwqNiU4bcUQxevtAHeINziQ0NiAhZRF7oHnOpXz83hKq6FHVoTcdbhE5E8ramaoGytM)**


7. **Debug your flow**: Analyze the conversation by looking at it on **Analyze > Conversation logs**. 
    1. Review the responses generated during the conversation.
    2. For further debugging, click on **Logs** and locate the debug icon.
    3. Click on the debug icon to view detailed step-by-step logs, including responses at each step.

**![](https://lh7-us.googleusercontent.com/-K3LBOF5TxkUp3okbilGu9psmSSNUgLgEAHKRyG5fZr02SfyDjvxPKqo9N7ChEDYpJ2fdvzAHTjo3zCtEyn1XYrpukVfIXy7enWZRFJSz4C7Ggv0opME5EUYp0pfUSdkFQ-wyz50F69Y2fhMybgfYgA)**
