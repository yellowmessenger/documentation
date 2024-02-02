---
title : LLM integration
sidebar_label : LLM integration
---

Yellow.ai's integration with LLM (Language Model) is designed for scenarios where the objective is to obtain a single response from GPT and then conclude the interaction with that specific response. This integration can be effectively employed in various situations, including providing responses to frequently asked questions (FAQs) for your customers.

## Configure LLM in Yellow.ai

Once you configure the LLM integration, the LLM node will be available which can further used to set up interaction. To connect your LLM account with Yellow.ai, follow these steps:

1. Login to your yellow.ai account in cloud.yellow.ai and go to **Integrations**. Search for **LLM**.

![](https://i.imgur.com/DWEwYVZ.png)

2. Fill in the following fields:

 * **Give account name:** Provide a name to your LLM account.
 * **LLM Provider:** Choose your LLM provider.

You can derieve **API Key** and **Resource** from the endpoint of your GPT 3.5 or GPT 4 credentials as mentioned below:


|                   | **For GPT 3.5**                          | **For GPT 4**                            |
|-------------------|-----------------------------------------|-----------------------------------------|
| **Endpoint URL (API Key) from the Curl** | `https://test-creds.openai.com/` | `https://test-creds-test.openai.azure.com/` |
| **Resource**     | test-creds                             | test-creds-test      |


3. Click **Connect**.

Once the integration is successful, the LLM node will be available in the **Studio** section.

## Build a flow to use LLM node

1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) for your usecase. 
2. Include the LLM node at the point in the flow where you want the LLM node to take over the flow. To accomplish this, navigate to **Integrations** and select **LLM**.

![](https://i.imgur.com/Yv068xi.png)

3. Since the LLM configuration does not happen via variable, disable the **Var** toggle in **LLM configuration** field and click the **gear** icon.

![](https://i.imgur.com/5nRPW6O.png)

4. In **Model name**, click **OR**, and input the relevant model name. For example, in case of gpt 4, it will be GPT-4.
                                                                   
<img src="https://i.imgur.com/i5fH8d7.png" alt="drawing" width="40%"/>

5. In the **User query input** field, disable the **Var** toggle click the **gear** icon.

![](https://i.imgur.com/ecTnNCd.png)

6. Disable both the **Var** toggles and click the **gear** icon.

<img src="https://i.imgur.com/yENcjbm.png" alt="drawing" width="45%"/>

7. Click **OR** and type any text.

<img src="https://i.imgur.com/hk9FXlY.png" alt="drawing" width="85%"/>

