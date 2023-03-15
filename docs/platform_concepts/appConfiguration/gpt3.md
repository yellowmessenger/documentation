---
title : GPT-3
sidebar_label : GPT-3
---

Your yellow.ai platform can be integrated with [GPT-3](https://openai.com/blog/gpt-3-apps). This integration will let you use our chatbot to ask questions or create articles, poetry, stories, and dialogues. We currently support DaVinci, Curie, Babbage, and custom language models.

## 1. Connect Yellow.ai with GPT-3

Connect your yellow.ai platform with GPT-3 by following these steps:

### 1.1 Retrieve the API key

1. Log in to your [OpenAI]([https:/](https://auth0.openai.com/u/signup/identifier?state=hKFo2SBYQVNnbUlSUDNBaUdUTERlWnZUUk1abDF0SEpaeGROa6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGZsTThtY1liTGE4S3BEanVzOGtVUTYtd3MycXkzR20to2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q)/) website.
2. Click your profile picture on the top right corner and click **View API keys**.

<img src="https://i.imgur.com/fDHuMh5.png" alt="drawing" width="35%"/>

3. Click the **+Create new secret key** button to generate a new API key.

![](https://i.imgur.com/Td8JdQT.png)


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

### 2.1 Receive answers using GPT-3 model

Users can have their queries answered by the bot based on the GPT-3 text completion model. We support four models, Da Vince, Curie, Babbage, and Ada. You can select any of the available models to receive accurate and comprehensive answers from GPT-3.

1. In the Studio flow builder, go to **Integrations** > **GPT-3**.

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

```

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