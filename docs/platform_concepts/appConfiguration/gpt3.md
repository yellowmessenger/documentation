---
title: OpenAI GPT-3 integration (Beta)
sidebar_label : GPT-3 
tags: [ GPT chatbot, chatGPT bot,How to use ChatGPT to improve customer engagement, Get user support queries resolved with chatGPT, Improve your customer support with chatGPT, ChatGPT in Conversational AI]
---

Yellow.ai platform can be integrated with [OpenAI GPT-3](https://openai.com/blog/gpt-3-apps). We currently support DaVinci, Curie, Babbage, and custom language models.

:::note
The GPT-3 integration is currently in beta, so there may be issues or limitations while it's being tested and refined..
:::

#### What is OpenAI GPT-3?

OpenAI GPT-3 is an advanced artificial intelligence language model developed by OpenAI, with a capacity of 175 billion parameters. It uses deep learning techniques to generate natural language text and has been pre-trained on a massive amount of data from the internet and other sources. The OpenAI GPT-3 is used for language translation, chatbots, writing assistance, and content generation, and is known for its ability to generate human-like text with remarkable accuracy.

#### How does a OpenAI GPT-3 chatbot work?

The chatbot can be designed to receive input from users which is then sent to GPT-3 for processing.

OpenAI GPT-3 will use its pre-trained knowledge to generate a response based on the user's input, which is then sent back to the chatbot. The chatbot displays the generated response to the user in a natural and coherent way.


## 1. Build a chatbot using GPT-3

To build a chatbot using OpenAI GPT-3, you need to connect your open AI account with your yellow.ai platform. To do so, follow these steps: 

### 1.1 Retrieve the OpenAI API key

1. Log in to your [OpenAI](https://auth0.openai.com/u/signup/identifier?state=hKFo2SBYQVNnbUlSUDNBaUdUTERlWnZUUk1abDF0SEpaeGROa6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGZsTThtY1liTGE4S3BEanVzOGtVUTYtd3MycXkzR20to2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q) website.
2. Click your profile picture on the top right corner and click **View API keys**.

<img src="https://i.imgur.com/fDHuMh5.png" alt="drawing" width="35%"/>

3. Click the **+Create new secret key** button to generate a new API key.

![](https://i.imgur.com/PWzqOoo.png)


### 1.2 Retrieve the organization key(ID)

If you are a part of or have more than one organization, you have to configure an organization key. Follow these steps to retrieve the organization key:

1. Click on your profile picture on the top right corner and click **Manage account**. 

<img src="https://i.imgur.com/pwWzYIL.png" alt="drawing" width="35%"/>


2. Click **Settings** on the left sidebar and copy the **Organization ID**.

![](https://i.imgur.com/a7ezUHI.png)


### 1.3 Enable GPT-3 on yellow.ai

1. Go to cloud.yellow.ai and click on **Integrations** in the module switcher.

![](https://i.imgur.com/0XYYjeA.png)


2. Search for **GPT-3** in the search box.

![](https://i.imgur.com/gXeI7XS.png)


3. Enter the **API key** and **Organization Key** (retrieved in the previous steps) and click **Connect**.

:::note
API usage will depend on your org subscription.
:::

## 2. Use-cases 

The following use case is currently supported in this integration:

### 2.1 Generate answers using OpenAI GPT-3

Your chatbot users can receive answers to their queries by leveraging the GPT-3 text completion model. We support Da Vinci, Curie, Babbage, Ada, and custom models. By selecting one of these models, your chatbot can provide detailed and precise responses from GPT-3.

:::info

If you want your chatbot to provide accurate answers for a specific use case, such as if you run a car shop and want your bot to answer questions about your services and pricing, then you can choose to create a custom model. By training your model on OpenAI and connecting it to your yellow.ai platform, you can tailor your chatbot to your specific needs.
:::

1. In the Automation flow builder, go to **Integrations** > **GPT-3**.

![](https://i.imgur.com/TaLpaVv.png)


2. Fill in the fields based on the details provided in the following table.

<img src="https://i.imgur.com/9uCfgr4.png" alt="drawing" width="60%"/>


**Node Input Params:**

| Field Name | Sample Input | Data Type |Remarks|
| -------- | -------- | -------- |--------|
| Model     | text-davinci-003     | String     |The model based on which the answers will be genrated.|
|Query|Suggest a tag line for an ice cream shop|String Type|User query|
|Max Words (optional)|50|String | It is recommended to keep it to 100 words or less.|
|Prediction Risk(optional)|0.5|Number|This feature allows you to control the confidence level at which the model predicts answers.|

**Sample Response:**

```js

{
    "id": "cmpl-6ktdmH8VoyYh1dJRxwa2WIDaW49I6",
    "object": "text_completion",
    "created": 1676634990,
    "model": "text-davinci-003",
    "choices": [
        {
            "text": "\n\nYou asked, \"What is the best way to learn a new language?\"",
            "index": 0,
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 4,
        "completion_tokens": 17,
        "total_tokens": 21
    }
}
```
